<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'vendor/autoload.php';

// Load environment variables using phpdotenv
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Set your Stripe secret key from the .env file
\Stripe\Stripe::setApiKey($_ENV['STRIPE_SECRET_KEY']); 

// Allow cross-origin requests from your frontend (localhost:5173)
header("Access-Control-Allow-Origin: http://localhost:5173"); 
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// If it's a preflight request (OPTIONS), allow it and stop here
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit(0);
}

// Get the request body and decode the items
$body = json_decode(file_get_contents('php://input'), true);

// Log the body to debug
error_log(print_r($body, true)); // Logs the body to PHP's error log

if (empty($body['items'])) {
    header("HTTP/1.1 400 Bad Request");
    echo json_encode(['error' => 'No items found']);
    exit();
}

// Create the checkout session
try {
    $session = \Stripe\Checkout\Session::create([
        'payment_method_types' => ['card'],
        'line_items' => array_map(function($item) {
            return [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $item['name'],
                        'description' => $item['description'],
                        'images' => [$_ENV['YOUR_FRONTEND_URL'] . $item['image']],  // Ensure this is the correct URL
                    ],
                    'unit_amount' => $item['price'] * 100,  // Convert to cents
                ],
                'quantity' => $item['quantity'],
            ];
        }, $body['items']),
        'metadata' => [
            'product_ids' => implode(',', array_column($body['items'], 'id')),
            'pdfs' => implode(',', array_map(function($pdf) {
                return $_ENV['YOUR_FRONTEND_URL'] . $pdf;  // Updated PDF URL
            }, array_column($body['items'], 'pdf'))),
        ],
        'mode' => 'payment',
        'success_url' => 'http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}',
        'cancel_url' => 'http://localhost:5173/cancel',
    ]);
    
    header('Content-Type: application/json');
    echo json_encode(['id' => $session->id]);
} catch (\Stripe\Exception\ApiErrorException $e) {
    // Log the Stripe error for debugging
    error_log("Stripe API error: " . $e->getMessage());

    // Return the detailed error message
    header("HTTP/1.1 500 Internal Server Error");
    echo json_encode([
        'error' => 'Stripe API error: ' . $e->getMessage(),
        'error_details' => $e->getJsonBody(),  // Detailed Stripe error info
    ]);
}
?>

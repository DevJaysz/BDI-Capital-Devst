<?php
// Include the Stripe PHP library
require 'vendor/autoload.php'; // Ensure that you have Stripe's PHP SDK installed

// Load environment variables using phpdotenv
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Set your Stripe secret key from the .env file
\Stripe\Stripe::setApiKey($_ENV['STRIPE_SECRET_KEY']); // Use $_ENV to access environment variables

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle OPTIONS request (preflight check)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0); // Exit without processing further for OPTIONS request
}

// Get the JSON payload from the frontend (React)
$input = json_decode(file_get_contents('php://input'), true);

// Log the incoming request body for debugging
error_log("Received Input: " . print_r($input, true)); // Log the input

// Check if 'items' is present in the request body
if (isset($input['items']) && is_array($input['items'])) {
    $items = $input['items'];

    // Create a Stripe Checkout session
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
                        'unit_amount' => $item['price'] * 100,  // Stripe uses cents (multiply by 100)
                    ],
                    'quantity' => $item['quantity'],
                ];
            }, $items),
            'mode' => 'payment',
            'success_url' => $_ENV['YOUR_FRONTEND_URL'] . '/success',  // Use the URL from .env for success
            'cancel_url' => $_ENV['YOUR_FRONTEND_URL'] . '/cancel',    // Use the URL from .env for cancel
        ]);
        
      

        // Return the session ID to the frontend
        echo json_encode(['id' => $session->id]);

    } catch (\Stripe\Exception\ApiErrorException $e) {
        // Handle Stripe API errors
        http_response_code(500); // Internal server error status code
        echo json_encode(['error' => $e->getMessage()]); // Send error message in response
    }
} else {
    // Return an error if 'items' is missing or invalid
    http_response_code(400); // Bad request status code
    echo json_encode(['error' => 'Invalid or missing items data']);
}
error_log("Image URL: " . $_ENV['YOUR_FRONTEND_URL'] . $item['image']);

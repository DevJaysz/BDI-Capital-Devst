<?php
require 'vendor/autoload.php';
require 'sendPDFToEmail.php';

// Load environment variables using phpdotenv
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Set your secret key
\Stripe\Stripe::setApiKey($_ENV['STRIPE_WEBHOOK_SECRET']);

$input = @file_get_contents("php://input");
$event = null;

try {
    $event = \Stripe\Event::constructFrom(json_decode($input, true));
} catch (\UnexpectedValueException $e) {
    http_response_code(400);
    exit();
}

// Log the event to debug
error_log("Received Stripe event: " . print_r($event, true)); // Log the entire event

if ($event->type == 'checkout.session.completed') {
    $session = $event->data->object;
    $email = $session->customer_email;
    $pdfs = explode(',', $session->metadata->pdfs); // Get all PDFs from metadata

    foreach ($pdfs as $pdfPath) {
        sendPDFToEmail($email, $pdfPath); // Send each PDF
    }
}

http_response_code(200); // Acknowledge receipt of the event
?>

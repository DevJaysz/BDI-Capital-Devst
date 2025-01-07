<?php
require 'vendor/autoload.php'; // Include the SendGrid library

function sendPDFToEmail($email, $pdfPath) {
    $filePath = __DIR__ . '/public/eBooks/' . basename($pdfPath);

    // Log file existence and email details
    error_log("Email: {$email}, File Path: {$filePath}");
    if (!file_exists($filePath)) {
        error_log("File does not exist: {$filePath}");
        return;
    }

    $sendgridApiKey = $_ENV['SENDGRID_API_KEY']; // Load from .env
    $sg = new \SendGrid($sendgridApiKey);

    $emailContent = new \SendGrid\Mail\Mail();
    $emailContent->setFrom("yourstore@example.com", "Your Store Name");
    $emailContent->setSubject("Your Purchased eBook");
    $emailContent->addTo($email);
    $emailContent->addContent("text/plain", "Thank you for your purchase! Your eBook is attached.");

    $fileContent = file_get_contents($filePath);
    $fileEncoded = base64_encode($fileContent);

    $emailContent->addAttachment(
        $fileEncoded,
        "application/pdf",
        basename($filePath),
        "attachment"
    );

    try {
        $response = $sg->send($emailContent);
        error_log("Email sent to {$email} with attachment {$filePath}, Response: " . $response->statusCode());
    } catch (Exception $e) {
        error_log("Failed to send email. Error: " . $e->getMessage());
    }
}
?>

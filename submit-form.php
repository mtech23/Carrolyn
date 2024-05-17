<?php
$data = file_get_contents("php://input");
$post=json_decode($data);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $name = sanitize_input($post->name);
    $email = sanitize_input($post->email);
    $subject = sanitize_input($post->subject);
    $message = sanitize_input($post->message);


    $to = "carolynn1949@gmail.com";
    $subject = preg_replace('/\r|\n/', '', $subject);

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

    $emailMessage = "Name: $name<br>";
    $emailMessage .= "Email: $email<br>";
    $emailMessage .= "Subject: $subject<br><br>";
    $emailMessage .= "Message:<br>$message";

    if (mail($to, $subject, $emailMessage, $headers)) {
      http_response_code(200);
    } else {
      http_response_code(500);
    }
}

function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>


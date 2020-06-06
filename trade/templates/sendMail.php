<?php
$to = "bartosz.bojanowski97@gmail.com";
$name = $_POST['name'];
$email = $_POST['email'];
$to      = 'nobody@example.com';
$subject = 'Nowy e-mail z Currency-Exchanger od ' . $name . '( ' . $email . ' )';
$message = $_POST['message'];
$headers = 'From: ' . $name . '( ' . $email . ' )' .  "\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

mail($to, $subject, $message, $headers);
?>
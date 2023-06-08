<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$selectedCrypto = $_POST['cryptoCurrency'];
$usdPrice = number_format($_POST['usdPrice']);
$coinAmount = $_POST['coinAmount'];
$nairaValue = number_format($_POST['nigeriaAmount']);
$bank = $_POST['bank'];
$accountName = $_POST['accountName'];
$accountNumber = $_POST['accountNumber'];
$phoneNumber = $_POST['phone'];

include "./mailing/emailing.php";


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'server219.web-hosting.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'hello@gemaily-mail10.xyz';                     //SMTP username
    $mail->Password   = 'EHsv3H6o-LZH';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('hello@gemaily-mail10.xyz', 'francisCryptcoin');
    $mail->addAddress('orafufrancis22@gmail.com', 'Francis Orafu');     //Add a recipient
    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'New Order Alert';
    $mail->Body    = $email_body;

    $mail->send();
    echo 'message sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
<?php 
$userphone = htmlspecialchars($_POST["userphone"]);
$token = "7810298388:AAFcExV9rCQD7YOYwUCI9TBGJBebq16ayAQ";
$chat_id = "-4949899873";
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$userphone}", "r");
if ($sendToTelegram) {
    echo "Succes";
} else {
    echo "eror";
}
echo "Привет, " . $userphone ;
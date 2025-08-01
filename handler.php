<?php 
$userphone = htmlspecialchars($_POST["userphone"]);
$usermail= htmlspecialchars($_POST["usermail"]);
$token = "7810298388:AAFcExV9rCQD7YOYwUCI9TBGJBebq16ayAQ";
$chat_id = "-4949899873";
$sendToTelegram = fopen("https://core.telegram.org/bots{$token}/sendMessage?chat_id={$chat_id}&text={$usermail}", "r");
if ($sendToTelegram) {
    echo "Succes";
} else {
    echo "eror";
}
echo "Привет, " . $userphone . "</br>";
echo "Ваша электронная почта: <b>". $usermail . "</b>";
<?php
$domain = 'fmlawnandlandscape.com'; /*TLD from which the form may be submitted*/
$maxlength = 25000; /*Max length of entire message (to prevent abuse)*/

$host = parse_url($_SERVER['HTTP_REFERER'])['host'];
if ($host !== $domain && $host !== 'www.' . $domain) {
	http_response_code(403);
	echo 'Forbidden';
	exit;
}

header("Access-Control-Allow-Origin: *");

/* -------------------------------------------------------------------------- */

if ($_POST['action'] === 'contact') {
	$message = 'From: ' . (string) $_POST['name'] . ' (' . (string) $_POST['email'] . ')' . "\r\n";

	if (!empty($_POST['phone'])) {
		$message .= 'Phone: ' . (string) $_POST['phone'] . "\r\n";
	}

	$message .= "\r\n" . 'Message:' . "\r\n" . (string) $_POST['message'];

	$reply_to = $_POST['email'];
}
else if ($_POST['action'] === 'estimate') {
	$message = 'From: ' . (string) $_POST['name'] . ' (' . (string) $_POST['email'] . ')' . "\r\n";

	if (!empty($_POST['phone'])) {
		$message .= 'Phone: ' . (string) $_POST['phone'] . "\r\n";
	}

	$message .= "\r\n" . 'Location:' . "\r\n";
	if (!empty($_POST['business'])) {
		$message .= (string) $_POST['business'] . "\r\n";
	}
	if (!empty($_POST['street'])) {
		$message .= (string) $_POST['street'] . "\r\n";
	}
	if (!empty($_POST['city'])) {
		$message .= (string) $_POST['city'] . ', ';
	}
	if (!empty($_POST['state'])) {
		$message .= (string) $_POST['state'] . ' ';
	}
	if (!empty($_POST['zip'])) {
		$message .= (string) $_POST['zip'] . ' ';
	}

	if (isset($_POST['service'])) {
		$message .= "\r\n\r\n" . 'Service(s) needed: ' . "\r\n" . implode("\r\n", $_POST['service']);
	}

	if (!empty($_POST['comments'])) {
		$message .= "\r\n\r\n" . 'Comments:' . "\r\n" . (string) $_POST['comments'];
	}

	$reply_to = $_POST['email'];
}
else {
	http_response_code(500);
	echo 'Missing or invalid action';
	exit;
}

/* -------------------------------------------------------------------------- */

if (strlen($message) > $maxlength) {
	http_response_code(414);
	echo 'Too long';
	exit;
}

/* -------------------------------------------------------------------------- */

if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
	$ip = $_SERVER['HTTP_CLIENT_IP'];
}
else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
	$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
}
else {
	$ip = $_SERVER['REMOTE_ADDR'];
}

/* -------------------------------------------------------------------------- */

$to      = 'request@fmlawnandlandscape.com';
$subject = 'Online Request - FM Lawn & Landscape';
$headers = 'From: no-reply@fmlawnandlandscape.com' . "\r\n" .
'Reply-To: ' . (string) $reply_to . "\r\n" .
'X-Mailer: PHP/' . phpversion();

$message .= "\r\n\r\n" . 'Submitted by IP: ' . $ip;

$sent = mail($to, $subject, wordwrap($message, 70, "\r\n"), $headers);

if ($sent === true) {
	echo 'Success';
	exit;
}

http_response_code(500);
echo 'Failed to send';
?>
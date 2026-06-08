<?php
header('Content-Type: application/json');
// For local dev you can allow CORS. Remove or restrict in production.
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

if (!isset($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded']);
    exit;
}

$file = $_FILES['file'];
$maxSize = 10 * 1024 * 1024; // 10 MB

if ($file['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'Upload error: ' . $file['error']]);
    exit;
}

if ($file['size'] > $maxSize) {
    http_response_code(400);
    echo json_encode(['error' => 'File too large']);
    exit;
}

$allowed = ['image/png', 'image/jpeg', 'image/gif', 'application/pdf'];
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);

if (!in_array($mime, $allowed, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid file type']);
    exit;
}

$uploadDir = __DIR__ . '/uploads';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

try {
    $random = bin2hex(random_bytes(8));
} catch (Exception $e) {
    $random = time();
}

$safeName = preg_replace('/[^A-Za-z0-9._-]/', '_', basename($file['name']));
$targetName = $random . '-' . $safeName;
$target = $uploadDir . '/' . $targetName;

if (!move_uploaded_file($file['tmp_name'], $target)) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to move uploaded file']);
    exit;
}

echo json_encode([
    'success' => true,
    'path' => 'uploads/' . $targetName,
    'originalName' => $file['name']
]);

// Notes:
// - Place this file in your cPanel site's document root (public_html) or appropriate folder.
// - For larger uploads, adjust `upload_max_filesize` and `post_max_size` in php.ini or .htaccess.
//   Example .htaccess lines (may not be allowed on all hosts):
//     php_value upload_max_filesize 20M
//     php_value post_max_size 21M
// - Consider moving uploads outside the webroot and serving via a controlled script.
?>

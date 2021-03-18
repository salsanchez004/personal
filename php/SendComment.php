<?php
$destino = "salsanchez004@outlook.com";
$filename="index.php";
$nombre = $_POST["nombre"];
$inmail = $_POST["email"];
$lugar = $_POST["origen"];
$mensaje = $_POST["comentario"];
$contenido = "Nombre: " . $nombre . "\nCorreo: " . $inmail . "\nMensaje: " . $mensaje;
mail($destino, "Contacto", $contenido);
echo '<script type="text/javascript">';
echo 'window.location.href="'.$filename.'";';
echo 'alert("Su mensaje se esta enviando...");';
echo '</script>';
echo '<noscript>';
echo '<meta http-equiv="refresh" content="0;url='.$filename.'" />';
echo '</noscript>';
die();
?>

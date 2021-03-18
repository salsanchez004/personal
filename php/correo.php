<?php
$destino = "salsanchez004@outlook.com";
$filename="https://paroxismoexpo.com";
$nombre = $_POST["nombre"];
$edad = $_POST["edad"];
$lugar = $_POST["origen"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\nEdad: " . $edad . "\nLugar de origen: " . $lugar . "\nMensaje: " . $mensaje;
mail($destino, "Contacto", $contenido);
//header('Location: http://paroxismoexpo.com');
echo '<script type="text/javascript">';
echo 'window.location.href="'.$filename.'";';
echo 'alert("Su mensaje se esta enviando...");';
echo '</script>';
echo '<noscript>';
echo '<meta http-equiv="refresh" content="0;url='.$filename.'" />';
echo '</noscript>';
die();
?>

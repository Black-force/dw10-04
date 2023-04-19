<?php

echo var_dump($_GET);

$nome = $_GET['nome'];
$cor = $_GET['cor'];

if( strcasecmp ($nome,'vitor') == 0 ){
    header("Location: resultado.php?frase=Muita Sorte!&cor=$cor");
}

else {
    header("Location: resultado.php?frase=Trabalhe muito hoje!&cor=#008800");
}
?>
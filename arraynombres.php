<?php

    $a = array("Sara", "Imanol", "Dani", "Antonio");

    $nombre = $_REQUEST["nombre"];
    $sugerencia = "";

    if($nombre != "") {
        $nombre = strtolower($nombre);
        $long = strlen($nombre);

        foreach($a as $nom) {
            if (stristr($nombre, substr($nom, 0, $long))) {
                if ($sugerencia === "") {
                    $sugerencia = $nom;
                } $else {
                    $sugerencia = "$sugerencia, $nom"; 
                }
            }
        }
    }
    if ($sugerencia === "") {
        echo "No hay sugerencias"
    } else {
        echo $sugerencia;
    }
?>
<?php

    $usuario = "root";
    $constraseña = "lorenzo98";
    $servidor = "localhost";
    $basededatos = "popmariano";
    $eventos = [];
    $pop = false;
    $eventosDelDia = [];
    $objeto = new stdClass();
    $objeto ->eventos = ['Evento1'];
    $objeto ->pop = false;
    $diario = [];

    $conexion = mysqli_connect( $servidor, $usuario, "" ) or die ("No se ha podido conectar al servidor BBDD");

    $db = mysqli_select_db( $conexion, $basededatos ) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

    $consulta = "SELECT * FROM diario";
    
    $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");

    
    while ($columna = mysqli_fetch_array( $resultado ))
    {
        $a = new $objeto;
        $dia = $columna[0];
        $evento1 = $columna [1];
        $evento2 = $columna [2];
        $evento3 = $columna [3];
        $evento4 = $columna [4];
        $evento5 = $columna [5];
        $pop = $columna [6];


        array_push($eventos, $columna[1]);
        array_push($eventos, $columna[2]);
        array_push($eventos, $columna[3]);
        array_push($eventos, $columna[4]);
        array_push($eventos, $columna[5]);
        array_push($eventosDelDia, $eventos);
        $a ->eventos = $eventos;
        $a ->pop = $pop; //Cambiar para que en vez de que devuelva un 0 sea un false
        if ($a != 'false') {
            array_push($diario, json_encode($a));
        }
        $eventos = [];
    }
    print_r(json_encode($diario));
    
    mysqli_close( $conexion );

?>

<?php

    $server     = "localhost";
    $user       = "root";
    $password   = "";

    $conexion = new mysqli($server, $user, $password);

    if($conexion -> connect_error){
        die("Falló la conexión" . $conexion -> connect_error);
    }

?>
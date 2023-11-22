<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consultar Alumnos con materias cargadas</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <script src="code.jquery.com_jquery-3.7.1.js"></script>
</head>
<body>
    <?php
         include 'conexion.php'
         include 'menu.php'

         $sql = "SELECT a.*, m.nombre AS materia_nombre FROM alumnos a INNER JOIN alumno_materias am ON a.id = am.
         alumnos_id INNER JOIN materias m ON m.id = am.materia_id";
         $datos = $conexion->query($sql);
    ?>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <?php if($datos->num_rows > 0) { ?>
                  <?php while($registro = $datos->fetch_assoc()){
                    $id = $registro["id"];
                    $sql2 = "SELECT a.*, m.nombre AS materia_nombre FROM alumnos a INNER JOIN alumno_materias am ON a.id = am.
                    alumnos_id INNER JOIN materias m ON m.id = am.materia_id";
                    $datos2 = $conexion->query($sql2);
                    ?>
                     
                     <div class="card">
                        <div class="card-header">
                            <?php echo $registro["nombre"]; ?>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Materias cargadas</h5>
                            <p class="card-text">
                                <ul>
                                <?php while($materia = $datos2->fetch_assoc()) { ?>
                                <li> <?php echo $materia["materia_nombre"]; ?></li>
                                <?php } ?>
                                </ul>
                            </p>
                        </div>

                     </div>

                    <div class="card">
                        <div class="card-header">
                            <?php echo $registro("nombre"); ?>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>

    <script src="js/bootstrap.js"></script>
</body>
</html>
<?php

if (!empty($_GET["idade"])){
  $idade = $_GET["idade"];

  if ($idade >=18){
    $resultado = "Adulto";
  }
  else{
    $resultado = "Menor";
  }
}

?>

<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercicio Treino 01</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Menor ou Maior de idade</h1>
  <div class="caixa">
    <form method="GET">
      <input type="number" name="idade" placeholder="Idade">
      <button>Enviar</button>
      <a href="ex1.php">Reset</a>
    </form><br>
    <?php if (!empty($resultado)){ ?>
    <div class="resultados">
      <h5>Idade: <?= $idade ?></h5> 
      <h5><?= $resultado ?></h5>  
    </div>
      <?php } ?>
  </div>
</body>
</html>
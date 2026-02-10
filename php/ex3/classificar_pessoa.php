<?php
  //Dados da empresa
  $empresa = "IEFP";
  $capital_social = 100000;
  $faturacao_anual = 1250000;
  $na_bolsa = false;
  //Dados da Pessoa
  $nome = "Carlos";
  $idade = 29;
  $na_empresa = true;
?>
<!DOCTYPE html>
<html lang="pt-PT">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Informação Empresarial</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>  
  <div class="container">
    <h2>Informações da Empresa</h2>
    <div class="caixa-informacoes">
      <h3><?= $empresa ?></h3>
      <p>Capital Social: <?= $capital_social ?>€</p>
      <p>Faturação Anual: <?= $faturacao_anual ?>€</p>
      <p>Cotada em Bolsa:  <?= $na_bolsa ? 'Sim' : 'Não' ?>
    </div>
  </div>

  <div class="container">
    <h2>Dados Pessoais</h2>
    <div class="caixa-informacoes">
      <h3><?= $nome ?></h3>
      <p><?= "Idade: " . $idade . "anos - " . ($idade >= 18 ? "Maior de idade" : "Menor de idade")?></p>
      <p>Vínculo:  <?= $na_empresa ? "Colaborador da empresa" : "Não é colaborador" ?></p>
    </div>
  </div>
</body>
</html>
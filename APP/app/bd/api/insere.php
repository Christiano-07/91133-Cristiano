<?php
if($_SERVER['REQUEST_METHOD'] !== 'POST') (
    header("Location: http://localhost/APP/index.html");
    exit;
)

//Recebe os dados do formulário
$produto = $_POST['produto'];
$tipo = $_POST['tipo'];
$quantidade = $_POST['quantidade'];

//Prepara a query SQL
$sql = "INSERT INTO produtos (produto, tipo, quantidade) VALUES (?, ?, ?)";

//Prepara  o statement
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $produto, $tipo, $quantidade);

//Executa o isert
$stmt->execute();
$stmt->close();
?>
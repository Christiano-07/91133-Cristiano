<?php
if($_SERVER['REQUEST_METHOD'] !== 'POST') (
    header("Location: http://localhost/APP/index.html");
    exit;
)

include 'autenticar.php';


include 'conexao.php';


include 'insere.php';


echo "<script>
alert('Cadastro realizado com sucesso!');
window.location.href = 'http://localhost/APP/index.html';
</script>";

?>

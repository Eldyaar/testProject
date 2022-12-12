<form action="" method="post">
    <p>введите количество строк:</p>   <br>
    <input type="textbox" name="string" id="string">
    <p>введите количество столбцов:</p>   <br>
    <input type="textbox" name="column" id="column">

    <input type="submit" id="btn" value="отправить">
</form>
<?php
   //string
$stdout = fopen('php://stdout', 'w');
$stderr = fopen('php://stderr', 'w');

fwrite($stdout, 'Выполняем действие: ...');

$result = someAction($params);

if ($result === false) {
    fwrite($stderr, 'При выполнении действия произошла ошибка: ...');
}
?>


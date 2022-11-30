<?php

    echo 'Hello World!';
    echo '<hr>';

    $numbers = array (
        1 => 23,
        2 => 14
    );
    echo ('Сумма : ' . $numbers[1]+$numbers[2]); echo '<br>';
    echo ('Вычитание : ' . $numbers[1]-$numbers[2]); echo '<br>';
    echo ('Произведение : ' . $numbers[1]*$numbers[2]); 
    echo '<br>';
    echo ('Частное : ' . $numbers[1]/$numbers[2]);

    echo '<hr>';

    $arr = array(
        "name" => "Eldyar",
        "surname" => "Dolbekov", 
        "age" => 19,
        "education" => array(
            "scool in 2022",
            "at the moment studying at INIT"
        )
    );
        echo($arr["name"]); echo('<br/>');
        echo($arr["surname"]); echo('<br/>');
        echo($arr["age"]); echo('<br/>');
        echo($arr["education"][0]." and ".$arr["education"][1]);
      
        echo '<br>';
        echo '<hr>';

?>
    <br>

    <form action="" method="post">
        <input type="textbox" name="input" id="last_val">
        <input type="submit" name="submit" id="btn" value="Просчитать">
    </form>

    <?php
    
        fwrite(STDOUT, "Enter your given name: ");
        $name = trim(fgets(STDIN));
        fwrite(STDOUT, "Enter your last name: ");
        $lastname = trim(fgets(STDIN));
        fwrite(STDOUT, "Hello, $name $lastname!" . PHP_EOL);

    ?>


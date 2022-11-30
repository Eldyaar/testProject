<p>test class</p>
<?php

class test{   
    public $a, $b;

    function print($x, $y){
        print $x.' '.$y; 
    } 
    function changes($x,$y){
        $a = "foo";
        $b = "siuuuuu";
        $x = $a;
        $y = $b; 
        print 'new values of $x and $y: '.$x.' '.$y;
    }
    function sum($x,$y){
        print 'sum of x and y is: '.$x + $y;
    } 
    function max($x, $y){
        if($x>$y){print 'max value: '.$x;} 
        else {print 'max value: '.$y;}
    }
}
$test = new test();
$test->print(3, 2); echo '<br>';
$test->changes(3, 2);echo '<br>';
$test->sum(3, 2);echo '<br>';
$test->max(3, 2);


?>
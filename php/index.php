<?php
$ages = array("Siam" => "20", "Abir" => "25");
rksort($ages); // Corrected: Add $ before ages to sort the $ages array
foreach ($ages as $name => $age) {
    echo "Name: $name, Age: $age";
    echo "\n";
}
?>

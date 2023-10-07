<?php
$ages = array("Siam" => "20", "Abir" => "25");
sort($ages);
foreach ($ages as $name => $age) {
    echo "Name: $name, Age: $age";
    echo "\n";
}
?>
<?php
header("Content-Type: application/json");

//connects to the database
$connection = new mysqli("localhost", "root", "", "infographic");

//check if connection worked
if ($connection->connect_error) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}

//getting data from database
$result = $connection->query("SELECT weapon, color, kills FROM valorant_pie");

//while loop picking up data untill there's nothing left
$data = array();
while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
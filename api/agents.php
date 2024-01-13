<?php 

require("connection.php");
//getting data from database
$result = $connection->query("SELECT agent, color, matches FROM valorant_bar"); //bar = piechart

//while loop picking up data untill there's nothing left
$data = array();
while($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
<?php

header("Content-Type: application/json");

//connects to the database
$connection = new mysqli("localhost", "root", "", "infographic");

//check if connection worked
if ($connection->connect_error) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}


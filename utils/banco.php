<?php 
$hostName = "";
$userName = "root";
$password = "";

$conecta = mysql_connect($hostName, $userName, $password) or print (mysql_error()); 
mysql_select_db("timesharing", $conecta) or print(mysql_error()); 

mysql_close($conecta); 
?>
<?php 
$conecta = mysql_connect("", "root", "") or print (mysql_error()); 
mysql_select_db("timeshaing", $conecta) or print(mysql_error()); 
mysql_free_result($result); 
mysql_close($conecta); 
?>
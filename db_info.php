<?php

$mysqli = new mysqli("sql11.bravehost.com", "koebe23", "baseball23", "network_2705085");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed with Error: %s Exiting now...\n", mysqli_connect_error());
    exit();
}
	
?>
  
 
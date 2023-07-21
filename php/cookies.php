<?php
#I want to use this for keeping the floor that the user was on previously
#Theoretically, if they use the app, they are using the elevator more than once per 30 days
#This will make it so the user doesn't have to input a floor every time
#This is mainly for the call elevator buttons and will also alter the floorIndicator on load
?>
<?php
    $cookie_name = "userFloor";
    $cookie_value = "0";
    setcookie($cookie_name, $cookie_value, time() + (30*24*60*60)); //days * hours/day * mins/hour * sec/min
?>
<?php

?>
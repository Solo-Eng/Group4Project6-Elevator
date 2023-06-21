<?php

    session_start();


    // check to see if a user is logged in before being able to access the page
    if(isset($_SESSION['username'])){
        echo "<p>Hello " . $_SESSION['username']. "! You have reached the hideout!</p>";
        echo "Click <a href='logout.php'>here</a> to log out";

    }
    else{
        echo "You're not supposed to be here >:(";
    }


?>
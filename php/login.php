<?php

    // creates and starts session
    session_start(); 

    // get the username and password that the user inputted
    $username = $_GET['username'];
    $password = $_GET['password'];

    // If the username and password fields have been inputted...
    if($username&&$password){

        // Check if username matches one in the database:
        if($username == 'admin'){

            // Username matches one in the database, now check the password
            if($password == '1234'){

                // Attach the username to the session
                $_SESSION['username'] = $username;

                //echo "<p>You are logged in as '$username'</p>";
                //echo "<p>The log out link can be found in <a href='member.php'>here</a></p>";
                header('Location: member.php');

            }
            else{
                echo "<p>Password Incorrect!</p>";
            }

        }
        else{
            echo "Unknown user!";
        }     


    }
?>
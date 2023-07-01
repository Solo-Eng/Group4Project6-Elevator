<?php

    // creates and starts session
    session_start(); 

    // get the username and password that the user inputted
    $username = $_GET['username'];
    $password = $_GET['password'];


    $adminsJson = file_get_contents('../json/admins.json');
    $adminsArray = json_decode($adminsJson, true);


    // If the username and password fields have been inputted...
    if($username&&$password){

        // scan through the admins.json for admin credentials
        foreach ($adminsArray as $unameData){

            // Check to see if the username enters matches one in the json file
            if($username == $unameData["uname"]){

                // Check to see if the password enters matches the corresponing password in the json file
                if($password == $unameData["pword"]){

                    // Attach session to the user
                    $_SESSION['username']=$username;

                    //Redirect them to the member page
                    header('Location: member.php');

                } else{
                    // Password failed, but user name correct
                    echo "<p>Password Incorrect!</p>";
                }
                
            } else{
                // Username unrecognized
                echo "<p>User unrecognized!</p>";
            }
            
        }    

        
    } else{
        // Nothing entered...
        echo "<p>Please enter credentials!</p>";
    }

    

?>
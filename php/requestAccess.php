<?php

    $usersJson = file_get_contents('../json/users.json');
    $userArray = json_decode($usersJson, true);
    
    $submitted = !empty($_POST);
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $email = $_POST["email"];
    $uname = $_POST["uname"];
    $pword = $_POST["pword"];
    $aboutYou = $_POST["aboutYou"];

    echo "<p>Form submission successfull (1 is true): $submitted </p>";
    echo "<p>First Name: $fname </p>";
    echo "<p>Last Name: $lname </p>";
    echo "<p>Email: $email </p>";
    echo "<p>Username: $uname </p>";
    echo "<p>Password: $pword </p>";
    echo "<p>About You: $aboutYou </p>";

    foreach ($userArray as $infoArray){
        echo "uname: ". $infoArray["uname"] . "<br>";
        echo "      fname: ". $infoArray["fname"] . "<br>";
        echo "      lname: ". $infoArray["lname"] . "<br>";
        echo "      email: ". $infoArray["email"] . "<br>";
        echo "      pword: ". $infoArray["pword"] . "<br>";
        echo "      aboutYou: ". $infoArray["aboutYou"].  "<br>";
        echo "-------------------------------------" . "<br>";
    }

    /*  We would want to add a function that would compare 
        the requested username name with one that already
        exists within the system and prompt the user to
        suggest a new username if their's is already taken
    */

    // build a new array based off the user's inputted data 
    $newUser = array(
        "fname" => $fname,
        "lname" => $lname,
        "email" => $email,
        "uname" => $uname,
        "pword" => $pword,
        "aboutYou" => $aboutYou
    );

    $userArray[] = $newUser; // Append the new user to the existing array

    $updatedUsers = json_encode($userArray, JSON_PRETTY_PRINT);

    file_put_contents('../json/users.json', $updatedUsers);



?>
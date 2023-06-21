<?php

    session_start();
    session_destroy();

    echo "You logged out. <a href='../index.html'>Return to home </a>";


?>
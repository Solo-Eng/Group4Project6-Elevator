<?php

    session_start();
    session_destroy();

    echo "You logged out. <a href='../'>Return to home</a>";


?>
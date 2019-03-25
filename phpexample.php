<?php

$name = 'Andrew';

?>
<!doctype html>
<html>

<head>
    <title>
        <?php echo $title ?>
    </title>
    <script src="script.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <h1>Welcome <?php 
        
        $name = 'Andrew';
        echo "$name" ?>
    </h1>


    <p>This is your home page.
    </p>
    <!-- an empty paragraph element for our message from javascript -->
    <p id="report">

    </p>

    <p>
        <?php echo "Message from php!"?>

    </p>

</body>

</html>
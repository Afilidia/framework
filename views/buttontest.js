module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="buttons.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>


    <title>Framework styles components prepare</title>
</head>
<body>

    <!-- ALL THE COMPONENTS WRAPPER -->
    <div class="container">

        <!-- <a> TAG BUTTONS -->

        <!-- COMMON BUTTON -->
        <a href="/" class="common-btn btn">
            <span class="btn-text">Click me</span>
        </a>

        <!-- FADED BUTTON -->
        <a href="/" class="faded-btn btn">
            <span class="btn-text">Click me</span>
        </a>

        <!-- REVERSE FADED BUTTON -->
        <a href="/" class="reverse-faded-btn btn">
            <span class="btn-text">Click me</span>
        </a>

        <a href="/" class="glowing-btn btn">
            <span class="btn-text">Click me</span>
        </a>

        <a href="/" class="rounded-btn btn">
            <span class="btn-text">Click me</span>
        </a>


        <div class="bar"></div>


        <!-- <button> TAG BUTTONS -->

        <!-- COMMON BUTTON -->
        <button class="common-btn btn">
            <span class="btn-text">Click me</span>
        </button>

        <!-- FADED BUTTON -->
        <button class="faded-btn btn">
            <span class="btn-text">Click me</span>
        </button>

        <!-- REVERSE FADED BUTTON -->
        <button class="reverse-faded-btn btn">
            <span class="btn-text">Click me</span>
        </button>

        <button class="glowing-btn btn">
            <span class="btn-text">Click me</span>
        </button>

        <button class="rounded-btn btn">
            <span class="btn-text">Click me</span>
        </button>

        <button class="toggle-btn btn">
            <span class="btn-text">Toggle me</span>
        </button>


        <div class="bar"></div>


        <!-- MULTI-CHOICE BUTTONS -->
        <div class="multi-choice-buttons-wrapper">
            <button class="option btn active">
                <span class="option-text">One</span>
            </button>

            <button class="option btn">
                <span class="option-text">Two</span>
            </button>

            <button class="option btn">
                <span class="option-text">Three</span>
            </button>
        </div>

    </div>

    <!-- SCRIPTS -->
    <script src="buttonmain.js" type="text/javascript"></script>
</body>
</html>`;
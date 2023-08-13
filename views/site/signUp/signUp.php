<?php $url = $this->helpers['URLHelper']->getURL(); ?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/header.css">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/signUp/signUp.css">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/forms/elementsForms.css">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/forms/tooltipError.css">

  <title>Entre ou Cadastre-se</title>

</head>

<body>

  <header id="header"></header>

  <div id="signUpComponent"></div>
 
  <script src="https://unpkg.com/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-ylqH3Y93PFtxHgrFxqEDD3ub+U0JeAmqWKV8Vjbb/ZIu+TFCErhUoGzAqng+wQg6" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
  
  <script src="<?php echo $url; ?>/assets/js/header.js"></script>

  <script src="<?php echo $url; ?>/assets/js/site/elementsForms.js"></script>

  <script src="<?php echo $url; ?>/assets/js/site/signUp/signUp.js"></script>

  <script src="<?php echo $url; ?>/assets/js/site/signUp/validateSignUp.js"></script>

</body>

</html>
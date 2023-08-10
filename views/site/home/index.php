<?php $url = $this->helpers['URLHelper']->getURL(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/header.css">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/home/home.css">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/home/prominenceItens.css">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/home/responsiveProminence.css">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/home/bannerHome.css">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/home/carousel.css">
  <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/home/footerHome.css">

  <title>Home</title>

</head>

<body>
  
  <main id="home">

    <header id="header"></header>

    <div id="componentsHome"></div>    
      
  </main>

  <script>
    var PATH = '<?php echo $url; ?>';
    var Helpers = {};
  </script>

  <script src="<?php echo $url; ?>/assets/libs/jquery/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  <script src="<?php echo $url; ?>/assets/js/home/mainHomePage.js"></script>
  <script src="<?php echo $url; ?>/assets/js/header.js"></script>
  <script src="<?php echo $url; ?>/assets/js/home/productTypeCard.js"></script>
  <script src="<?php echo $url; ?>/assets/js/home/home.js"></script>
  <script src="<?php echo $url; ?>/assets/js/home/banner.js"></script>
  <script src="<?php echo $url; ?>/assets/js/home/carousel.js"></script>
  <script src="<?php echo $url; ?>/assets/js/home/footer.js"></script>

</body>

</html>
<?php $url = $this->helpers['URLHelper']->getURL(); ?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/header.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/bodyForms.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/home/home.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/forms/elementsForms.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/userAccount/account.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/userAccount/alterCardAddress.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/userAccount/forms.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/userAccount/modalUpload.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/userAccount/address.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/userAccount/bodyFormAddress.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/userAccount/card.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/userAccount/loading.css">
    <link rel="stylesheet" href="<?php echo $url; ?>/assets/css/userAccount/menusInfosAccount.css">

    <title>Entre ou Cadastre-se</title>

</head>

<body>

    <header id="header"></header>

    <div id="bodyAccount">
        <div id="myAccount">
            <div id="profileBody">
                <div class="cardImgProfile">
                    <div id="myPhoto" data-bs-toggle="modal" data-bs-target="#modalForm"></div>
                    <div id="myNickname"></div>
                    <div id="dateCreate">
                        <span id="titleDate">Entrou em:</span>
                        <span id="textDate"></span>
                    </div>
                    <div id="menuInfosAccount">
                        <div class="componentSvgInfoProfile">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" height="1.1rem"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>
                        </div>
                        <div class="componentSvgCardProfile">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" height="1.1rem"><path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                        </div>
                        <div class="componentSvgCardProfile">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" height="1.1rem"><path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/></svg>
                        </div>
                    </div>
                </div>

                <div id="infosProfile">

                    <div id="headerAlterAddressCard"></div>

                    <form method="post" id="formAddress"></form>

                    <form method="post" id="formCard"></form>

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalForm" aria-labelledby="modalForm" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" id="modalDialogForm">
            <div class="modal-content" id="modalUploadPhoto">
                <form id="formImgProfile" class="formContent" method="post" enctype="multipart/form-data">
                    <div id="elementsFormImgProfile">
                        <input id="upImgProfile" type="file" name="arquivo">
                        <label id="labelUploadImgProfile" for="upImgProfile">Escolha um arquivo</label>
                    </div>
                    <button class="buttonSubmitForm" id="btnImgProfile" type="button">Enviar</button>
                </form>
            </div>
        </div>
    </div>

    <script>
        var PATH = '<?php echo $url; ?>';
        var Helpers = {};
    </script>

    <script src="https://unpkg.com/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-ylqH3Y93PFtxHgrFxqEDD3ub+U0JeAmqWKV8Vjbb/ZIu+TFCErhUoGzAqng+wQg6" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>

    <script src="<?php echo $url; ?>/assets/js/header.js"></script>

    <script src="<?php echo $url; ?>/assets/js/site/userAccount/account.js"></script>
    <script src="<?php echo $url; ?>/assets/js/site/userAccount/headerProfile.js"></script>
    <script src="<?php echo $url; ?>/assets/js/site/userAccount/alterCardAddress.js"></script>


    <script src="<?php echo $url; ?>/assets/js/site/userAccount/address/bodyFormAddress.js"></script>
    <script src="<?php echo $url; ?>/assets/js/site/userAccount/address/cep.js"></script>
    <script src="<?php echo $url; ?>/assets/js/site/userAccount/address/validateAddress.js"></script>

    <script src="<?php echo $url; ?>/assets/js/site/userAccount/card/bodyFormCard.js"></script>
    <script src="<?php echo $url; ?>/assets/js/site/userAccount/card/card.js"></script>
    <script src="<?php echo $url; ?>/assets/js/site/userAccount/card/number.js"></script>
    <script src="<?php echo $url; ?>/assets/js/site/userAccount/card/security.js"></script>
    <script src="<?php echo $url; ?>/assets/js/site/userAccount/card/cardInfo.js"></script>
    <script src="<?php echo $url; ?>/assets/js/site/userAccount/card/regex.js"></script>
    <script src="<?php echo $url; ?>/assets/js/site/userAccount/card/validateCard.js"></script>

    <script src="<?php echo $url; ?>/assets/js/site/statusForms.js"></script>

    <script src="<?php echo $url; ?>/assets/js/site/userAccount/lenghtInputNumber.js"></script>

    <script src="<?php echo $url; ?>/assets/js/site/userAccount/imgProfile.js"></script>

</body>

</html>
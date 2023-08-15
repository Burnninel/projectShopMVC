$(document).ready(function () {

    function searchImageProfile(idUsuario) {
        $.ajax({
            url: '../php/getInfosUser.php',
            type: 'POST',
            dataType: 'json',
            data: { idUsuario: idUsuario,  data: "DATE_FORMAT(dateCreate, '%d/%m/%Y')"},
            success: function (data) {
                console.log(data.name)
                console.log(data.lastName)
                if (data.name !== '') {
                    $('#myNickname').text(data.name + ' ' + data.lastName);
                }
                $('#textDate').text(formatDate(data.dateCreate));
                if (data.imgProfile !== null) {
                    var img = `<img src="../php/${data.imgProfile}" alt="myProfilePic" class="myProfilePic">`;
                    $('#myPhoto').html(img);
                };
            },
            error: function (xhr, status, error) {
                console.log("Ocorreu um erro ao buscar a imagem de perfil." + status + xhr + error);
            }
        });
    };

    function formatDate(data) {
        var dateAdjusted = new Date(data);
        dateAdjusted.setDate(dateAdjusted.getDate() + 1);

        var day = String(dateAdjusted.getDate()).padStart(2, '0');
        var month = String(dateAdjusted.getMonth() + 1).padStart(2, '0');
        var year = dateAdjusted.getFullYear();
        return day + '/' + month + '/' + year;
    }

    var idUserLogin = '';

    $.ajax({
        url: '../php/getDb.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            idUserLogin = data.idUsuario;
            searchImageProfile(idUserLogin);
        },
        error: function (xhr, status, error) {
            if (xhr.responseText) {
                console.log("Erro: " + xhr.responseText);
                console.log("Erro: " + status);
                console.log("Erro: " + error);
            } else {
                console.log("Ocorreu um erro durante a requisição.");
            };
        }
    });
   
    console.log(idUserLogin);

});
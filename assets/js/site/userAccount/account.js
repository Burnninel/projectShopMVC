function getInfosUser() {

    $.ajax({
        url: 'http://localhost/shopMVC/user',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            if (data.name !== '') {
                $('#myNickname').text(data.name + ' ' + data.lastName);
            }
            $('#textDate').text(formatDate(data.dateCreate));
            if (data.imgProfile !== null) {
                var img = `<img src="${PATH}/assets/img/uploads/${data.imgProfile}" alt="myProfilePic" class="myProfilePic">`;
                $('#myPhoto').html(img);
            };
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

}

function formatDate(data) {
    var dateAdjusted = new Date(data);
    dateAdjusted.setDate(dateAdjusted.getDate() + 1);

    var day = String(dateAdjusted.getDate()).padStart(2, '0');
    var month = String(dateAdjusted.getMonth() + 1).padStart(2, '0');
    var year = dateAdjusted.getFullYear();
    return day + '/' + month + '/' + year;
}

getInfosUser();
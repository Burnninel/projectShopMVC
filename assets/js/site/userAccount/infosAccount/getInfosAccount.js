function getInfosUser() {

    $.ajax({
        url: 'http://localhost/shopMVC/user',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#userName').val(data.name)
            $('#userLastname').val(data.lastName)
            $('#userEmail').val(data.email)
            $('#userPassword').val(data.password)
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
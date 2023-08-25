function headerAccount() {
    var svg = `
        <svg xmlns="http://www.w3.org/2000/svg" id="svgExit" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
  
    `;

    $('.item-dropdown').append(svg)
}

function hoverDropdown() {
    $('.item-dropdown').hover(
        function() {
            $(this).css('color', '#ec2626');
        },
        function() {
            $(this).css('color', '#fff');
        }
    );
}

itemDropdownHeader('signOut', 'Sair');
headerAccount();
hoverDropdown();

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
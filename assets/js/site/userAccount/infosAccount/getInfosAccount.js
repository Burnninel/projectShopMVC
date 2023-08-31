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

getInfosUser();
 
$('#editInfosAccount').one('click', function() {
    $('.elementInputDetails').each(function(index) {
        const parentId = $(this).attr('id');
        const svgId = parentId + 'Svg';
                                       
        const svgUnlockInput = `       
            <svg xmlns="http://www.w3.org/2000/svg" id="${svgId}" height="1rem" fill="none" viewBox="0 0 24 24" stroke="#ffffffb8" stroke-width="1.5" class="unlockInput">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>                     
        `;                             
                                       
        $(this).append(svgUnlockInput);
    });

    $(this).css('stroke', '#25eb13')

    $('input, button').prop("disabled", false);
    
    $('#userPassword').val('');
    $('.lockInput').remove();

    $('#btnInfosAccount').css({
        'color': '#fff',
        'cursor': 'pointer',
        'border-color': '#fff',
        'background-color': 'transparent'
    });

    $('#btnInfosAccount').hover(
        function() {
            $(this).css({ 'background-color': '#ffffff11' });
        },
        
        function() {
            $(this).css({ 'background-color': 'transparent' });
        }
    );
});
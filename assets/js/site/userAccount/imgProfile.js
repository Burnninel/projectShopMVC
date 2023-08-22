$(document).ready(function() {
    $('#upImgProfile').on('change', function(event) {
        var selectedFile = event.target.files[0];

        if (selectedFile) {
            var fileName = selectedFile.name;
            if (fileName.length > 22) {
                fileName = fileName.substring(0, 22) + '...';
            }
            $('#elementsFormImgProfile').append(`<span id="nameImgProfile">Arquivo: <span id="fileSelectedName">${fileName}</span> </span>`)
        }
    });
});

function handleSubmitImg() {
    var form = $('#formImgProfile')[0];
    
    var formData = new FormData(form)

    $.ajax({
        url: 'http://localhost/shopMVC/imgProfile',
        type: 'POST',
        data: formData,
        dataType: 'json',
        mimeType: "multipart/form-data",
        processData: false,
        contentType: false,
        complete: function (response) {
            if(response.responseJSON.result == true) {
                setTimeout(function() {
                    $('#modalUploadPhoto').html(` 
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    `);
                });
                
                setTimeout(function() {
                    $('#modalUploadPhoto').html(`
                        <svg  id="svgSuccessUploadImgProfile" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span id="successUploadImgProfile">Imagem de perfil atualizada!</span>
                    `);

                    $('#modalUploadPhoto').css('border-color', '#22ff00');
                    $('#modalUploadPhoto').css('background-color', '#2bff0007');
                }, 1200)

                setTimeout(function() {
                    window.location.href = 'http://localhost/shopMVC/account';
                }, 2300)
            } else {
                $('#modalUploadPhoto, #labelUploadImgProfile, #btnImgProfile').css('border-color', '#ec2626');
                $('#labelUploadImgProfile, #btnImgProfile').css('color', '#ec2626');
            }
        }
    });

};

$('#btnImgProfile').click(function () {
    handleSubmitImg();
});


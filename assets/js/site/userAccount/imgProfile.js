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
            console.log('back: ' + response);
        }
    });

};

$('#btnImgProfile').click(function () {
    handleSubmitImg();
});
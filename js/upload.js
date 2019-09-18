$(document).ready(function() {
    $('#inputfile').change(function(){
        var file_data = $('#inputfile').prop('files')[0];
        var form_data = new FormData();
        form_data.append('file', file_data);
        $.ajax({
            url: "pro-img-disk.php",
            type: "POST",
            data: form_data,
            contentType: false,
            cache: false,
            processData:false,
            success: function(data){
                console.log(data);
            }
        });
    });
});


$src = $_FILES['file']['tmp_name'];
$targ = "../images/".$_FILES['file']['name'];
move_uploaded_file($src, $targ);

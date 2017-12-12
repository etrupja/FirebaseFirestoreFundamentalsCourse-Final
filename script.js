$(document ).ready(function() {

    //get all the data on app startup
    $('#createStudent').click(function(){
        $('.studentForm').css("display", "block");
        $('#dynamicBtn').text('Save Changes')
    });

    $('#dynamicBtn').click(function(){
        $('#creationStatus').html('<div class="alert alert-success"><strong>Success!</strong> Student was created.</div>').delay(2500).fadeOut('slow');
        $('.studentForm').css("display", "none");
    });

    $('#cancel').click(function(){
        $('.studentForm').css("display", "none");
    });

    $("tbody.tbodyData").on("click","td.editStudent", function(){
        $('.studentForm').css("display", "block");
        $('#dynamicBtn').text('Update Student')
    });
    $("tbody.tbodyData").on("click","td.deleteStudent", function(){
        alert('delete student?');
    });

});
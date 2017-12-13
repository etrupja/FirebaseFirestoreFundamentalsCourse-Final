$(document ).ready(function() {

    //get all the data on app startup
    $('#createEmployee').click(function(){
        $('.employeeForm').css("display", "block");
        $('#dynamicBtn').text('Save Changes')
    });

    $('#dynamicBtn').click(function(){
        $('#creationStatus').html('<div class="alert alert-success"><strong>Success!</strong> Employee was created.</div>').delay(2500).fadeOut('slow');
        $('.employeeForm').css("display", "none");
    });

    $('#cancel').click(function(){
        $('.employeeForm').css("display", "none");
    });

    $("tbody.tbodyData").on("click","td.editEmployee", function(){
        $('.employeeForm').css("display", "block");
        $('#dynamicBtn').text('Update Employee')
    });
    $("tbody.tbodyData").on("click","td.deleteEmployee", function(){
        alert('delete employee?');
    });

    $( "#searchEmployee" ).change(function() {
        console.log('You entered: ', $(this).val());
      });

});
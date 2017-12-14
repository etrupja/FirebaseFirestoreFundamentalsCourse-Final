
    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();
    var employeesRef = db.collection("employees");
    
    $(document).ready(function() {

            $('#onlyMalesFilter').click(function(){
                console.log('onlyMalesFilter Filter executed');
                employeesRef.where("gender", "==", "Male")
                .onSnapshot(function(querySnapshot) {
                    LoadTableData(querySnapshot);
                });
            });

            $('#fullTimeFilter').click(function(){
                employeesRef.where("isFullTime", "==", true)
                    .onSnapshot(function(querySnapshot) {
                        LoadTableData(querySnapshot);
                });
            });

            $('#olderThenFilter').click(function(){
                //older than 30
                employeesRef.where("age", ">=", 30)
                .onSnapshot(function(querySnapshot) {
                    LoadTableData(querySnapshot);
                });
            });

            $('#ageBetweenFilter').click(function(){
                //older than 35, but younger than 50
                employeesRef.where("age", ">=", 35).where("age", "<=", 50)
                .onSnapshot(function(querySnapshot) {
                    LoadTableData(querySnapshot);
                });
            });

            $('#yearsOfExperienceFilter').click(function(){
                //female and 5-10 years of experience
                employeesRef.where("gender", "==", "Female")
                employeesRef.where("yearsOfExperience", ">=", 5).where("yearsOfExperience", "<=", 10)
                .onSnapshot(function(querySnapshot) {
                    LoadTableData(querySnapshot);
                });
            });

            $('#clearFilter').click(function(){
                employeesRef.get().then(function(querySnapshot) {
                    LoadTableData(querySnapshot);
                });
            });
            
            function LoadTableData(querySnapshot){
                var tableRow='';
                querySnapshot.forEach(function(doc) {
                    var document = doc.data();
                    tableRow +='<tr>';
                    tableRow += '<td class="fname">' + document.fName + '</td>';
                    tableRow += '<td class="lname">' + document.lName + '</td>';
                    tableRow += '<td class="email">' + document.email + '</td>';
                    tableRow += '<td class="age">' + document.age + '</td>';
                    tableRow += '<td class="gender">' + document.gender + '</td>';
                    tableRow += '<td class="yearsofexperience">' + document.yearsOfExperience + '</td>';
                    tableRow += '<td class="isfulltime">' + document.isFullTime + '</td>';
                    tableRow += '<td class="editEmployee"><i class="fa fa-pencil" aria-hidden="true" style="color:green"></i></td>'
                    tableRow += '<td class="deleteEmployee"><i class="fa fa-trash" aria-hidden="true" style="color:red"></i></td>'
                    tableRow += '</tr>';
                });
                $('tbody.tbodyData').html(tableRow);
            }
});
        // Initialize Cloud Firestore through Firebase
        var db = firebase.firestore();
        var employeesRef = db.collection("employees");

        employeesRef.doc("etr@gmail.com").set({
            fName: "Ervis", 
            lName: "Trupja", 
            email: "etr@gmail.com",
            age: 25, 
            gender: 'male',
            average: 4.9,
            isFullTime: true,
        });
        employeesRef.doc("str@gmail.com").set({
            fName: "Suada", 
            lName: "Trupja", 
            email: "str@gmail.com",
            age: 17, 
            gender: 'female',
            average: 5.0,
            isFullTime: false,
        });
        employeesRef.doc("ert@gmail.com").set({
            fName: "Ermal", 
            lName: "Trupja", 
            email: "ert@gmail.com",
            age: 28, 
            gender: 'male',
            average: 4.0,
            isFullTime: false,
        });
        employeesRef.doc("otr@gmail.com").set({
            fName: "Ornela", 
            lName: "Trupja", 
            email: "otr@gmail.com",
            age: 23, 
            gender: null,
            average: 4.0,
            isFullTime: false,
        });

        employeesRef.doc("a@gmail.com").set({
            fName: "Ervis", 
            lName: "Trupja", 
            email: "etr@gmail.com",
            age: 25, 
            gender: 'male',
            average: 4.9,
            isFullTime: true,
        });
        employeesRef.doc("b@gmail.com").set({
            fName: "Suada", 
            lName: "Trupja", 
            email: "str@gmail.com",
            age: 17, 
            gender: 'female',
            average: 5.0,
            isFullTime: false,
        });
        employeesRef.doc("q@gmail.com").set({
            fName: "Ermal", 
            lName: "Trupja", 
            email: "ert@gmail.com",
            age: 28, 
            gender: 'male',
            average: 4.0,
            isFullTime: false,
        });
        employeesRef.doc("w@gmail.com").set({
            fName: "Ornela", 
            lName: "Trupja", 
            email: "otr@gmail.com",
            age: 23, 
            gender: null,
            average: 4.0,
            isFullTime: false,
        });

        employeesRef.doc("e@gmail.com").set({
            fName: "Ervis", 
            lName: "Trupja", 
            email: "etr@gmail.com",
            age: 25, 
            gender: 'male',
            average: 4.9,
            isFullTime: true,
        });
        employeesRef.doc("r@gmail.com").set({
            fName: "Suada", 
            lName: "Trupja", 
            email: "str@gmail.com",
            age: 17, 
            gender: 'female',
            average: 5.0,
            isFullTime: false,
        });
        employeesRef.doc("t@gmail.com").set({
            fName: "Ermal", 
            lName: "Trupja", 
            email: "ert@gmail.com",
            age: 28, 
            gender: 'male',
            average: 4.0,
            isFullTime: false,
        });
        employeesRef.doc("z@gmail.com").set({
            fName: "Ornela", 
            lName: "Trupja", 
            email: "otr@gmail.com",
            age: 23, 
            gender: null,
            average: 4.0,
            isFullTime: false,
        });

        employeesRef.doc("u@gmail.com").set({
            fName: "Ervis", 
            lName: "Trupja", 
            email: "etr@gmail.com",
            age: 25, 
            gender: 'male',
            average: 4.9,
            isFullTime: true,
        });
        employeesRef.doc("i@gmail.com").set({
            fName: "Suada", 
            lName: "Trupja", 
            email: "str@gmail.com",
            age: 17, 
            gender: 'female',
            average: 5.0,
            isFullTime: false,
        });
        employeesRef.doc("o@gmail.com").set({
            fName: "Ermal", 
            lName: "Trupja", 
            email: "ert@gmail.com",
            age: 28, 
            gender: 'male',
            average: 4.0,
            isFullTime: false,
        });
        employeesRef.doc("p@gmail.com").set({
            fName: "Ornela", 
            lName: "Trupja", 
            email: "otr@gmail.com",
            age: 23, 
            gender: null,
            average: 4.0,
            isFullTime: false,
        });


        db.collection("employees").get().then(function(querySnapshot) {
            var tableRow='';
            querySnapshot.forEach(function(doc) {
                var document = doc.data();
                tableRow +='<tr>';
                tableRow += '<td>' + document.fName + '</td>';
                tableRow += '<td>' + document.lName + '</td>';
                tableRow += '<td>' + document.email + '</td>';
                tableRow += '<td>' + document.age + '</td>';
                tableRow += '<td>' + document.gender + '</td>';
                tableRow += '<td>' + document.average + '</td>';
                tableRow += '<td>' + document.isFullTime + '</td>';
                tableRow += '<td class="editEmployee"><i class="fa fa-pencil" aria-hidden="true" style="color:green"></i></td>'
                tableRow += '<td class="deleteEmployee"><i class="fa fa-trash" aria-hidden="true" style="color:red"></i></td>'
                tableRow += '</tr>';
            });
            $('tbody.tbodyData').append(tableRow);
        });
console.log(1223)
let studentId = undefined;
let studentName = undefined;
let studentCity = undefined;
let studentEmail = undefined;
let studentLevel = undefined;

$('#saveButton').on('click',()=>{
    event.preventDefault();//button eke default tiyna dewal off wenawa

    studentName = $('#name').val();
    studentCity = $('#email').val();
    studentEmail = $('#city').val();
    studentLevel = $('#level').val();

    console.log(studentName);
    console.log(studentCity);
    console.log(studentEmail);
    console.log(studentLevel);
    clearFieldsCustomer();

    const studentData = {

        name:studentName,
        email:studentEmail,
        city:studentCity,
        level:studentLevel
    }
    //Create JSON
    const studentJSON = JSON.stringify(studentData);
    console.log("studentjson",studentJSON);
    //save the data with AJAX
    const http = new XMLHttpRequest();
    http.onreadystatechange = ()=>{
        if (http.readyState === 4){
            if (http.status === 200) {
                var jsonTypeResponse = JSON.stringify(http.responseText);
                console.log(jsonTypeResponse);
                alert("SuccessFull!!!!!!!11")
            }else {
                console.log("failed");
                console.log(jsonTypeResponse);
                console.log("Ready State",http.readyState);
            }
        }else{
            console.log("Processing stage : ",http.readyState);
        }
    }
    //               request type     yawanna one kohetada                                    asynchronous da synchronous da kiyala thamai danne
    http.open("POST","http://localhost:8081/studentmanagement_AAD_war_exploded/student",true);
    //menna me kiyana headers yawanna one request ekath ekka(header eka daddi header eke namai eke value ekai thamai yaana one)
    http.setRequestHeader("Content-Type","application/json");
    http.send(studentJSON);
});

function clearFieldsCustomer() {
    $('#student-name').val("");
    $('#student-id').val("");
    $('#student-city').val("");
    $('#student-email').val("");
    $('#student-level').val("");

}
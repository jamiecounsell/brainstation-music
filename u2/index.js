$(function() {

    var commentsArray = [];


    $( "#commentsTable" ).hide();


    $( "img" ).hover(
        
        function () {
            $( "img" ).attr("src", "u2.jpg");
        }, 
        
        function () {
            $( "img" ).attr("src", "U2-pic.jpg");
        }
    );


    var submitButton = $("#submitButton");
    submitButton.click(function() {

        var firstName   = $("#firstName");
        var lastName    = $("#lastName");
        var commentBox  = $("#commentBox");

        var message = "";
        if (firstName.val() == "" && lastName.val() == "") {

            message += "Please enter your first and last name. \n";

        } else if (firstName.val() == "") {

            message += "Please enter your first name. \n";

        } else if (lastName.val() == "") {

            message += "Please enter your last name. \n";
        }

        if (commentBox.val() == "") {

            message += "Please leave us a comment.";
        }

        if (message != "") {

            alert(message);
            return;
        }


        var comment = commentBox.val();

        commentsArray.push({"firstName": firstName.val(), "lastName": lastName.val(),
            "comment": commentBox.val()});

        buildCommentsTable();
    });


    function buildCommentsTable() {


        $("#commentsTable tbody").html("");


        for (var i in commentsArray) {
            
            var commentDict = commentsArray[i];
            
            var tableRef = document.getElementById('commentsTable').getElementsByTagName('tbody')[0];

            var newRow = tableRef.insertRow(tableRef.rows.length);
            

            var newCell1 = newRow.insertCell(0);
            var newCell2 = newRow.insertCell(1);
            
                                                            
            var name    = document.createTextNode(commentDict.firstName + " " + commentDict.lastName);
            var comment = document.createTextNode(commentDict.comment);

            newCell1.appendChild(name);
            newCell2.appendChild(comment);
        }

        
        $( "#commentsTable" ).show();

        document.getElementById("commentsTable").scrollIntoView();
    }
    
});
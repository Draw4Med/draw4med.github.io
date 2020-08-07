// Prevent Refresh
$("#submit_form").submit(function(e) {
    e.preventDefault();
});

// Submit the form
function submitForm(){

    //collecting form data
    var first_name = document.getElementById("first_name").value;
    var last_init = document.getElementById("last_init").value;
    var location = document.getElementById("location").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var signature = document.getElementById("signature").value;
    var art_description = document.getElementById("art_description").value;

    var file = (document.getElementById("artwork").files[0]);

    

    var url = baseURL+"?action=insert&sheetname=Submissions&first_name="+first_name+"&last_init="+last_init+"&location="+location+"&email="+email+"&age="+age+"&signature="+signature+"&art_description="+art_description;
    var request = jQuery.ajax({
        crossDomain: true,
        url: url ,
        method: "GET",
        dataType: "json",
        success: function(data){
            // console.log(data);

            var ref = storage.ref().child("stories/"+data.result+".png");
            ref.put(file).then(function(snapshot) {
                console.log('Uploaded a blob or file!');
            });
        }
    });

    var root = document.getElementById("submission_content");
    while(root.firstChild){
        root.removeChild(root.lastChild);
    }

    var msg = document.getElementById('submit_msg');
    msg.innerHTML = "Thank you so much for choosing to join the Draw4Med community and submitting your artwork! We will get back to you shortly on your submission result. Don’t forget to follow us on Instagram @draw4med! "
}
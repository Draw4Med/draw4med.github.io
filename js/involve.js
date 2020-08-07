// Prevent Refresh
$("#join_us_form").submit(function(e) {
    e.preventDefault();
});

function join_us(){
    var name = document.getElementById("join_us_name").value;
    var email = document.getElementById("join_us_email").value;
    var url = baseURL + "?action=insert&sheetname=Join&name="+name+"&email="+email;
    var request = jQuery.ajax({
        crossDomain: true,
        url: url ,
        method: "GET",
        dataType: "json",
        success: function(data){
            console.log(data);
            document.getElementById("join_us_name").value = "";
            document.getElementById("join_us_email").value = "";
        }
    });
}
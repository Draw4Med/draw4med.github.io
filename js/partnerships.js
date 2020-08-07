// const baseURL = "";
var records = [];
$(document).ready(function () {

    var root = document.getElementById("partner-row");
    while (root.firstChild) {
        root.removeChild(root.lastChild);
    }
    var url = baseURL + "?action=read&sheetname=Partners";
    //reads  data
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "json",
        success: function (data) {

            console.log(data);
            records = data.records;
            for(let i = 0; i< data.records.length; i++){
                var element = data.records[i];
                // Cards
                let div1 = document.createElement("div");
                div1.className = "col mb-4";
                let div2 = document.createElement("div");
                div2.className = "card h-100";

                let cardbody = document.createElement("div");
                cardbody.className = "card-body";
                let h5 = document.createElement("h5");
                h5.innerHTML = element.Partner;
                h5.className = "card-title";
                cardbody.appendChild(h5);

                storage.ref().child('partners/' + element.Image).getDownloadURL().then(function (url) {

                    let img = document.createElement("img");
                    img.src = url;
                    img.className = "card-img-top";
                    img.alt = element.Event;

                    div2.appendChild(img);
                    div2.appendChild(cardbody);
                    
                    div1.appendChild(div2);
                    root.appendChild(div1);

                }).catch(function (error) {
                    // Handle any errors
                    console.log(error);
                });


            }
        }
    });
});

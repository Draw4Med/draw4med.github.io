// const baseURL = "";
var records = [];
$(document).ready(function () {

    var root = document.getElementById("stories-row");
    while (root.firstChild) {
        root.removeChild(root.lastChild);
    }
    var url = baseURL + "?action=read&sheetname=Stories";
    //reads  data
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "json",
        success: function (data) {

            // console.log(data);
            records = data.records;
            for(let i = 0; i< data.records.length; i++){
                var element = data.records[i];
                // Cards
                let div1 = document.createElement("div");
                div1.className = "col mb-4";
                div1.onclick = function () {
                    updateModal(i)
                }
                let div2 = document.createElement("div");
                div2.className = "card h-100";
                div2.setAttribute('data-toggle', 'modal');
                div2.setAttribute('data-target', '#storyModal');
                let div3 = document.createElement("div");
                div3.className = "imgHolder";


                storage.ref().child('stories/' + element.Image).getDownloadURL().then(function (url) {

                    let img = document.createElement("img");
                    img.src = url;
                    img.className = "card-img-top";
                    img.alt = element.Title;

                    div3.appendChild(img);
                    div2.appendChild(div3);
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


function updateModal(id) {
    id = parseInt(id);
    var element = records[id];
    
    // Modal
    document.getElementById("storyModalLabel").innerHTML = element.Title;
    document.getElementById("modal-text").innerHTML = element.Description;
    document.getElementById("modal-artist").innerHTML = "By: " + element.Author;


    storage.ref().child('stories/' + element.Image).getDownloadURL().then(function (url) {


        document.getElementById("modal-art").src = url;


    }).catch(function (error) {
        // Handle any errors
        console.log(error);
    });
}


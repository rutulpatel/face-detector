$(function() {
    $(".file_button").click(function() {
        $("#output").html("");
        $("#url-img").attr("src", $("#img_url_input").val());
        $.ajax({
            url: 'https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?attribute=glass%2Cpose%2Cgender%2Cage%2Crace%2Csmiling', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            data: { url: $("#img_url_input").val() }, // Additional parameters here
            datatype: 'json',
            success: function(data) {
                for (var i = 0; i < data.face.length; i++) {
                    $("#output").append("<h5> Person :" + (i + 1) + "</h5>");
                    $("#output").append("<ul>");
                    $("#output").append("<li>Age: " + data.face[i].attribute["age"]["value"] + "</li>");
                    $("#output").append("<li>Gender: " + data.face[i].attribute["gender"]["value"] + "</li>");
                    $("#output").append("<li>Glass: " + data.face[i].attribute["glass"]["value"] + "</li>");
                    $("#output").append("<li>Race: " + data.face[i].attribute["race"]["value"] + "</li>");
                    $("#output").append("<li>Smiling: " + data.face[i].attribute["smiling"]["value"] + "</li>");
                    $("#output").append("</ul>");
                    $("#output").append("<h6>More details: </h6>");
                    $("#output").append(JSON.stringify(data.face[i].attribute, null, 4));
                    $("#output").append("<br>");
                }
            },
            error: function(err) {
                alert(err);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "ZaO4Yp4FrrmshCA8KyHlK28yurSmp1hLlR2jsnXKFQr14Lpscv"); // Enter here your Mashape key
            }
        });
    });
});


//https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?attribute=glass%2Cpose%2Cgender%2Cage%2Crace%2Csmiling&url=http%3A%2F%2Fwww.faceplusplus.com%2Fwp-content%2Fthemes%2Ffaceplusplus%2Fassets%2Fimg%2Fdemo%2F1.jpg

// curl--get--include 'https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?attribute=glass%2Cpose%2Cgender%2Cage%2Crace%2Csmiling&url=http%3A%2F%2Fimg.timeinc.net%2Ftime%2Fdaily%2F2010%2F1011%2Fpoy_nomination_agassi.jpg'\ -
//     H 'X-Mashape-Key: 8bW7q6Wqb9mshtrKoMUiaPpqghCYp1ZfvAmjsnEcGPbIqsOqpd'\ -
//     H 'Accept: application/json'
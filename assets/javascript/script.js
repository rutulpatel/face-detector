$(function() {
    $("#output").html("");
    $(".file_button").click(function() {
        $("#url-img").attr("src", $("#img_url_input").val());
        $.ajax({
            url: 'https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?attribute=glass%2Cpose%2Cgender%2Cage%2Crace%2Csmiling', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            data: { url: $("#img_url_input").val() }, // Additional parameters here
            datatype: 'json',
            success: function(data) {
                $("#output").html(JSON.stringify(data.face[0], null, 4));
                //console.log(data.face[0]);
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
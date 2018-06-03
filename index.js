function SetImage(image) {
    var link = 'url(' + image + ')';
    console.log(image)
    $('#imageDiv').fadeOut(500);
    
    setTimeout(function () {
        $('#imageDiv').css('background-image', link);
        $('#imageDiv').fadeIn(500);
    }, 1000);
}

function time (){
    var now = new Date();
    var heure   = String(now.getHours());   
    var minute  = String(now.getMinutes());
    var seconde = String(now.getSeconds());
    if (heure.length <=1) {
        heure="0"+heure
    };
    if(minute.length<=1){
        minute=`0${minute}`
    };
    if(seconde.length<=1){
        seconde=`0${seconde}`
    };    
    $('#heure').text(`${heure}:${minute}:${seconde} `);
}

setInterval(function(){
 time()
}, 1000);
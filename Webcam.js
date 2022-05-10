Webcam.set ({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach ('#camera');

Webcam.snap(function(data_uri) {
    document.getElementById("result1").innerHTML = '<img id = "capture_image" src="'+data_uri+'"/>'
});

console.log('ml5version:', ml5.version);
classfier = ml5.imageClassfier(  modelLoaded);

function modelLoaded()
console.log( 'Model Loaded!' );

function speak(){
    var synth = window.speechSynthesis
    speak_data_1 = " The first prediction is " + prediction_1;
    speak_data_2 = " And the second  prediction is " + prediction_2;
    var utterThis = new speechSynthesisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
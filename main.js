//https//teachablemachine.withgoogle.com/models/yDtlv5-ni/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https//teachablemachine.withgoogle.com/models/yDtlv5-ni/')
}

function modelReady(){
    classifier.classify(gotResults);
}
var Cow = 0;
var Tiger = 0;
var Dog = 0;
var Cat = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'Detected voice is of - '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+Dog+ ' Detected cat - '+Cat+ ' Detected Cow - '+Cow+ ' Detected Tiger - '+Tiger;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"

        img = document.getElementById('animal_image');

        if (results[0].label == "Mooing") {
            img.src = 'Cow.png';
            Cow = Cow+1;
        } else if (results[0].label == "Roaring") {
            img.src = 'Tiger.png' ;
            Tiger = Tiger + 1;
        } else if (results[0].label == "Barking") {
            img.src = 'Dog.png' ;
            Dog = Dog + 1;
        } else if (results[0].label == "Meowing") {
            img.src = 'Cat.png' ;
            Cat = Cat + 1;
        } else{
            img.src = 'listen.png';
    }
}
}
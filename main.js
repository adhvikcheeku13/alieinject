function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);


}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);

    } else {

        console.log(results);
        randomnumber_r = Math.floor(Math.random() * 255) + 1;
        randomnumber_g = Math.floor(Math.random() * 255) + 1;
        randomnumber_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I will hear- ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy- ' + (results[0].confidence * 100).toFixed(2);
        document.getElementById("result_label").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + "," + randomnumber_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + randomnumber_r + "," + randomnumber_g + "," + randomnumber_b + ")";
        img = document.getElementById('alien1');
         img1 = document.getElementById('alien2');
          img2 = document.getElementById('alien3');
           img3 = document.getElementById('alien4');

           if(results[0].label== "Clap"){
               img.src='alien-01.gif';
               img1.src='alien-02.png';
               img2.src='alien-03.png';
               img3.src='alien-04.png';
           }
           else if(results[0].label== "Bell"){
            img.src='alien-01.png';
            img1.src='alien-02.gif';
            img2.src='alien-03.png';
            img3.src='alien-04.png';
        }
        else if(results[0].label== "Snapping"){
            img.src='alien-01.png';
            img1.src='alien-02.png';
            img2.src='alien-03.gif';
            img3.src='alien-04.png';
        }
        else {
            img.src='alien-01.png';
            img1.src='alien-02.png';
            img2.src='alien-03.png';
            img3.src='alien-04.gif';
        }
    }


}
function startClassificatoin(){
    navigator.mediaDevices.getUserMedia({aduio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/XBNMQ6pzU/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        random_r = Math.floor(Math.random()*255) + 1;
        random_g = Math.floor(Math.random()*255) + 1;
        random_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result-confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + "%";        
        document.getElementById("result").style.color = "rgb("+random_r, random_g,random_b+")"
        document.getElementById("result-confidence").style.color = "rgb("+random_r+","+random_g+","+random_b+")";

        img = document.getElementById("alien1");
        img1 = document.getElementById("alien2");
        img2 = document.getElementById("alien3");
        img3 = document.getElementById("alien4");

        if(results[0].label == "Clapping"){
            img.src = "images/aliens-01.gif";
            img1.src = "images/aliens-02.png";
            img2.src = "images/aliens-03.png";
            img3.src = "images/aliens-04.png";
        } else if(results[0].label == "Stomping"){
            img.src = "images/aliens-01.png";
            img1.src = "images/aliens-02.gif";
            img2.src = "images/aliens-03.png";
            img3.src = "images/aliens-04.png";
        } else if(results[0].label == "Hitting A bed"){
            img.src = "images/aliens-01.png";
            img1.src = "images/aliens-02.png";
            img2.src = "images/aliens-03.gif";
            img3.src = "images/aliens-04.png";
        }else{
            img.src = "images/aliens-01.png";
            img1.src = "images/aliens-02.png";
            img2.src = "images/aliens-03.png";
            img3.src = "images/aliens-04.gif";
        }
    }
}
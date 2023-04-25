function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9DWYERnFu/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error,result){
    if(error){
        console.log("Error");
    }    
    else {
        console.log(result);
        random_r=Math.floor(Math.random()*255)+1;    
        random_g=Math.floor(Math.random()*255)+1;        
        random_b=Math.floor(Math.random()*255)+1;        
        document.getElementById("result_label"). innerHTML="I can hear ... "+result[0].label;
        document.getElementById("result_accuracy").innerHTML="Accuracy = "+(result[0].confidence*100).toFixed(2)+"%";
       
        document.getElementById("result_label").style.color = "rgb("+random_r+", "+random_g+" , "+random_b+")";
        document.getElementById("result_accuracy").style.color = "rgb("+random_r+", "+random_g+" , "+random_b+")";
        img1= document.getElementById("cat");
        img2= document.getElementById("parrot");
        img3= document.getElementById("dogs");
        img4= document.getElementById("bn");
         
        if (result[0].label=="Cat"){
            img1.src="cat.gif";
        }
        else if(result[0].label=="Dog"){
            img3.src="dog.gif";
        }
        else if(result[0].label=="Parrot"){
            img2.src="parrot.gif";
        }
        else {
            img4.src="BN.jpg";
        }
    }

}


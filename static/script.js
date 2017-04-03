var resetBtn = document.getElementById("resetbtn");
var playBtn = document.getElementById("playbtn");
var playing = false;
var slider = document.getElementById("timeSlider");
var playBtnIc = document.getElementById("playBtnIcon");
var rid;

var resetSlider = function(){

    slider.setAttribute("value","2002");
        
}

var playPause = function(){

    if (!playing){
	playing = true;
	playBtnIc.setAttribute("class", "glyphicon glyphicon-pause");
	play();
    }
    else{
	playing = false;
	playBtnIc.setAttribute("class", "glyphicon glyphicon-play");
    }
    
}

var play = function(){

    window.cancelAnimationFrame(rid);

    console.log("max = " + slider.getAttribute("max"));
    var anim = function(){setTimeout(function(){
	    
	slider.stepUp();	    
	console.log("playing");
	console.log("value = " + slider.getAttribute("value"));
	
	if (playing && slider.getAttribute("value") < slider.getAttribute("max")){

	    rid = window.requestAnimationFrame(anim);

	}

	if (slider.getAttribute("value") == slider.getAttribute("max")){

	    playPause();
	    
	}
	
    }, 500);}

    anim();
    
}


resetBtn.addEventListener("click", resetSlider);
playBtn.addEventListener("click", playPause);

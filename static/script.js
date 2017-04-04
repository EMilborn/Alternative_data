var resetBtn = document.getElementById("resetbtn");
var playBtn = document.getElementById("playbtn");
var rewindBtn = document.getElementById("rewindbtn");
var playing = 0;
var slider = document.getElementById("timeSlider");
var playBtnIc = document.getElementById("playBtnIcon");
var rewindBtnIc = document.getElementById("rewindBtnIcon");
var rid;
var frameTime = 500;

var resetSlider = function(){

    slider.value = slider.getAttribute("min");
        
}

var playPause = function(dir){

    if (!playing){
	if (slider.value == slider.getAttribute("max"))
	    resetSlider();
	playing = dir;
	playBtnIc.setAttribute("class", "glyphicon glyphicon-pause");
	if (dir == 1)
	    play();
	else if (dir == -1)
	    rewind();
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
	
	if (playing && slider.value < slider.getAttribute("max")){

	    rid = window.requestAnimationFrame(anim);

	}

	if (slider.value == slider.getAttribute("max")){

	    playPause(1);
	    playBtnIc.setAttribute("class", "glyphicon glyphicon-repeat");
	    
	}
	
    }, frameTime);}

    anim();
    
}

var rewind = function(){
    
    window.cancelAnimationFrame(rid);


    var anim = function(){setTimeout(function(){
	    
	slider.stepDown();	    
	
	if (playing && slider.value > slider.getAttribute("min")){

	    rid = window.requestAnimationFrame(anim);

	}

	if (slider.value == slider.getAttribute("min")){

	    playPause(-1);
	    
	}
	
    }, frameTime);}

    anim();
    
}


resetBtn.addEventListener("click", resetSlider);
rewindBtn.addEventListener("click", rewind);
playBtn.addEventListener("click", playPause);
window.onLoad = resetSlider();

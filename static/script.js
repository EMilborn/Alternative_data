var resetBtn = document.getElementById("resetbtn");
var playBtn = document.getElementById("playbtn");
var rewindBtn = document.getElementById("rewindbtn");
var playing = 0;
var slider = document.getElementById("timeSlider");
var playBtnIc = document.getElementById("playBtnIcon");
var rewindBtnIc = document.getElementById("rewindBtnIcon");
var rid;
var frameTime = 500;

var hsRadio = document.getElementById("hsRadio");
var colRadio = document.getElementById("colRadio");

var resetSlider = function(){

    slider.value = slider.getAttribute("min");
        
}

var playForward = function(){
    playing = 1;
    playBtnIc.setAttribute("class", "glyphicon glyphicon-pause");
    play();
}

var playBackward = function(){
    playing = -1;
    rewindBtnIc.setAttribute("class", "glyphicon glyphicon-pause");
    rewind();
}

var masterControl = function(dir){

    if (!playing){
	if (slider.value == slider.getAttribute("max")){
	    if (dir == 1) resetSlider();
	    else playBtnIc.setAttribute("class", "glyphicon glyphicon-play");
	}
	
	if (dir == 1)	    playForward();
	else if (dir == -1) playBackward();
    }
    
    else if (playing == 1){
	playBtnIc.setAttribute("class", "glyphicon glyphicon-play");
	if (dir ==  1) playing = 0;
	else {
	    playing = -1;
	    playBackward();
	}
    }

    else if (playing == -1){
	rewindBtnIc.setAttribute("class", "glyphicon glyphicon-backward");
	if (dir == 1) {
	    playing = 1;
	    playForward();
	}
	else playing = 0;

    }

    else console.log("that's not good");
    
}

var play = function(){

    window.cancelAnimationFrame(rid);

    //console.log("max = " + slider.getAttribute("max"));
    var anim = function(){setTimeout(function(){
	    
	slider.stepUp();	    
	console.log("forwarding");
	if (playing == 1 && slider.value < slider.getAttribute("max")){

	    rid = window.requestAnimationFrame(anim);

	}

	if (slider.value == slider.getAttribute("max")){

	    masterControl(1);
	    playBtnIc.setAttribute("class", "glyphicon glyphicon-repeat");
	    
	}
	
    }, frameTime);}

    anim();
    
}



var rewind = function(){
    
    window.cancelAnimationFrame(rid);

    var anim = function(){setTimeout(function(){
	    
	slider.stepDown();	    
	console.log("rewinding");
	if (playing == -1 && slider.value > slider.getAttribute("min")){

	    rid = window.requestAnimationFrame(anim);

	}

	if (slider.value == slider.getAttribute("min")){

	    masterControl(-1);
	    
	}
	
    }, frameTime);}

    anim();
    
}

var playButton = function(){
    masterControl(1);
}

var rewindButton = function(){
    masterControl(-1);
}

resetBtn.addEventListener("click", resetSlider);
rewindBtn.addEventListener("click", rewindButton);
playBtn.addEventListener("click", playButton);
window.onLoad = resetSlider();


//FOR NOBEL>>>
var getSlider = function(){
    return slider.value;
}

//1 for highschool, 0 for college
var getDataset = function(){
    if (hs.checked) return 1;
    else return 0;
}

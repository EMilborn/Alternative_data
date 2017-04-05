var resetBtn = document.getElementById("resetbtn");
var playBtn = document.getElementById("playbtn");
var rewindBtn = document.getElementById("rewindbtn");
var playing = 0;
var slider = document.getElementById("timeSlider");
var playBtnIc = document.getElementById("playBtnIcon");
var rewindBtnIc = document.getElementById("rewindBtnIcon");
var rid;
var frameTime = 500;

var addStates = function(){
    var width = 50;
    var states = [["Alaska", 0, 0],
		  ["Hawaii", 0, 7],
		  ["Washington", 1, 2],
		  ["Oregon", 1, 3],
		  ["California", 1, 4],
		  ["Idaho", 2, 2],
		  ["Nevada", 2, 3],
		  ["Utah", 2, 4],
		  ["Arizona", 2, 5],
		  ["Montana", 3, 2],
		  ["Wyoming", 3, 3],
		  ["Colorado", 3, 4],
		  ["New Mexico", 3, 5],
		  ["North Dakota", 4, 2],
		  ["South Dakota", 4, 3],
		  ["Nebraska", 4, 4],
		  ["Kansa", 4, 5],
		  ["Oklahoma", 4, 6],
		  ["Texas", 4, 7],
		  ["Minnesota", 5, 2],
		  ["Iowa", 5, 3],
		  ["Missouri", 5, 4],
		  ["Arkansas", 5, 5],
		  ["Louisiana", 5, 6],
		  ["Illinois", 6, 2],
		  ["Indiana", 6, 3],
		  ["Kentucky", 6, 4],
		  ["Tennessee", 6, 5],
		  ["Mississippi", 6, 6],
		  ["Wisconson", 7, 2],
		  ["Ohio", 7, 3],
		  ["West Virginia", 7, 4],
		  ["North Carolina", 7, 5],
		  ["Alabama", 7, 6],
		  ["Michigan", 8, 2],
		  ["Pennsylvania", 8, 3],
		  ["Virginia", 8, 4],
		  ["South Carolina", 8, 5],
		  ["Alabama", 8, 6],
		  ["New York", 9, 2],
		  ["New Jersey", 9, 3],
		  ["Maryland", 9, 4],
		  ["Delaware", 9, 5],
		  ["Florida", 9, 7],
		  ["Vermont", 10, 1],
		  ["Rhode Island", 10, 2],
		  ["Connecticut", 10, 3],
		  ["Maine", 11, 0],
		  ["New Hampshire", 11, 1],
		  ["Massachusetts", 11, 2]
		 ];
    
    for (i = 0; i < 50; i++){
	var state = states[i];
	var newState = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	newState.setAttribute("id", state[0]);
	newState.setAttribute("width", String(width));
	newState.setAttribute("height", String(width));
	newState.setAttribute("x", String(width/2 + width*state[1]));
	newState.setAttribute("y", String(width/2 + width*state[2]));
	newState.setAttribute("stroke", "white");
	s.appendChild(newState);			
    };	   
};
addStates()

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

function update(){
	var isCalm = translateCalm(document.getElementById("calm").value);
	
	var isHappy = translateHappy(document.getElementById("happy").value);

	var isTired = translateTired(document.getElementById("tired").value);

	var isScared = translateScared(document.getElementById("scared").value);

	var dict = {};
	var total = 0

	x = window.xml.getElementsByTagName('programme');

	for (i = 0; i < x.length ;i++) {
		total = 0
	    total += dictValue("Happy", isHappy, x[i]);
	    total += dictValue("Calm", isCalm, x[i]);
	    total += dictValue("Tired", isTired, x[i]);
	    total += dictValue("Scared", isScared, x[i]);
	    dict[i+1] = total
	}

	var programmes = Object.keys(dict).map(function(key) {
	  return [key, dict[key]];
	});

	programmes.sort(function(first, second) {
	  return second[1] - first[1];
	});
	
	changeProgrammes(programmes.slice(0, 5));
	
}

function changeProgrammes(programmes){
	var name = ""
	var image = ""
	var tag = ""
	var programmeCounter = 1
	for (id in programmes){
		
		tag = "programme" + String(programmes[id][0])
		
		var prog = window.xml.getElementsByTagName(tag)[0].childNodes

		
		for (i = 0; i < prog.length ;i++) {
			if(prog[i].nodeName == "name"){
				name = prog[i].textContent
			} else if (prog[i].nodeName == "imagePath") {
				image = prog[i].textContent
			}
		}
		var imageID = "#programme-slot" + String(programmeCounter);
		var textID = "#title" + String(programmeCounter);
		$(imageID).css("background-image", "url(\'" + image + "\')" );
		$(textID).text(name);
		programmeCounter += 1;
	}
}

function dictValue(tag, comparison, programme){
	var x = 0
	var mood = programme.getElementsByTagName(tag)[0].childNodes[0].textContent
	if (mood === "None" && comparison === "None"){
		return 0.5;
	} else if ( mood === comparison){
	    return 1;
	} else if(mood === "None" || comparison === "None"){
	    return 0.5;
	} else{
		return 0;
	}
	
}

function translateCalm(calm){

	if (calm < 35){
		return "Agitated";
	} else if (calm > 75){
		return "Calm";
	} else {
		return "None";
	}
}

function translateHappy(happy){

	if (happy < 35){
		return "Happy";
	} else if (happy > 75){
		return "Sad";
	} else {
		return "None";
	}
}

function translateScared(scared){

	if (scared < 35){
		return "Scared";
	} else if (scared > 75){
		return "Fearless";
	} else {
		return "None";
	}
}

function translateTired(tired){
	
	if (tired < 35){
		return "Tired";
	} else if (tired > 75){
		return "Wide Awake";
	} else {
		return "None";
	}
}
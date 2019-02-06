function update(){
	//Each isMood variable contains the users mood for each of the four different emotions in String form
	var isCalm = translateCalm(document.getElementById("calm").value);	
	var isHappy = translateHappy(document.getElementById("happy").value);
	var isTired = translateTired(document.getElementById("tired").value);
	var isScared = translateScared(document.getElementById("scared").value);

	var dict = {};
	var total = 0

	x = window.xml.getElementsByTagName('programme');

	//Calculates a weighting for each Programme based on the users set of moods before adding it to the dictionary
	//with the key being the programme number associated to the currrent programme
	for (i = 0; i < x.length ;i++) {
		total = 0
	    total += dictValue("Happy", isHappy, x[i]);
	    total += dictValue("Calm", isCalm, x[i]);
	    total += dictValue("Tired", isTired, x[i]);
	    total += dictValue("Scared", isScared, x[i]);
	    dict[i+1] = total
	}

	//Programmes sorted the dictionary into a list that is in order, the top 5 weights are then 
	//passed to the changeProgrammes function
	var programmes = Object.keys(dict).map(function(key) {
	  return [key, dict[key]];
	});

	programmes.sort(function(first, second) {
	  return second[1] - first[1];
	});
	
	changeProgrammes(programmes.slice(0, 5));
	
}

//Takes the top 5 films for the given set of moods and changes the webpage to display them
function changeProgrammes(programmes){
	var name = ""
	var image = ""
	var tag = ""
	var programmeCounter = 1
	for (id in programmes){
		//tag is the current program being added to the webpage
		tag = "programme" + String(programmes[id][0])
		
		//prog is the subnodes of the current Programme
		var prog = window.xml.getElementsByTagName(tag)[0].childNodes

		//Iterates through the subnodes of the Programme to obtain the Programme name and image path
		for (i = 0; i < prog.length ;i++) {
			if(prog[i].nodeName == "name"){
				name = prog[i].textContent
			} else if (prog[i].nodeName == "imagePath") {
				image = prog[i].textContent
			}
		}
		//imageID and textID are the html id's of the elements being changed (Programme image and Programme title)
		var imageID = "#programme-slot" + String(programmeCounter);
		var textID = "#title" + String(programmeCounter);

		$(imageID).css("background-image", "url(\'" + image + "\')" );
		$(textID).text(name);
		programmeCounter += 1;
	}
}
//Returns a weighting for a given user mood vs given Programme mood
// 1 = Programme mood is the same as user mood
// 0.5 = Programme mood does not match user mood as one or both are unspecified
// 0 = Programme mood is the opposite of the user mood
// tag is mood being compared, comparison is the user mood and programme is the Programme specified

function dictValue(tag, comparison, programme){
	//Mood get's the film mood from the XML document
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

//Function that converts the numerical slider value for the calm scale into either 'Agitated', 'Calm' or 'None'
function translateCalm(calm){

	if (calm < 35){
		return "Agitated";
	} else if (calm > 75){
		return "Calm";
	} else {
		return "None";
	}
}

//Function that converts the numerical slider value for the happy scale into either 'Happy', 'Sad' or 'None'
function translateHappy(happy){

	if (happy < 35){
		return "Happy";
	} else if (happy > 75){
		return "Sad";
	} else {
		return "None";
	}
}

//Function that converts the numerical slider value for the calm scale into either 'Scared', 'Fearless' or 'None'
function translateScared(scared){

	if (scared < 35){
		return "Scared";
	} else if (scared > 75){
		return "Fearless";
	} else {
		return "None";
	}
}

//Function that converts the numerical slider value for the calm scale into either 'Tired', 'Awake' or 'None'
function translateTired(tired){
	
	if (tired < 35){
		return "Tired";
	} else if (tired > 75){
		return "Wide Awake";
	} else {
		return "None";
	}
}
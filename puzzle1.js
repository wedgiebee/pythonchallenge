// http://stackoverflow.com/a/1431113
String.prototype.replaceAt=function(index, character) {
      return this.substr(0, index) + character + this.substr(index+character.length);
};

var nonsense = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.";

var nonsenseUrl = "http://www.pythonchallenge.com/pc/def/map.html";

function puzzle1(nonsense){
	for (var i=0; i<nonsense.length; i++) {

		code = nonsense.charCodeAt(i);
		if (code > 96) {
			if (code >= 121) {
				code -= "y".charCodeAt(0) - "a".charCodeAt(0);
			} else {
				code += 2;
			}
		}
		// Ehtesh's code
		// if (code > 96 && code < 121)
		// 	code += 2;
		// else if (code > 96 && code <= 123)
		// 	code -= "y".charCodeAt(0) - "a".charCodeAt(0);

		nonsense = nonsense.replaceAt(i,String.fromCharCode(code));
	}

	console.log(nonsense);
}

function mapLetters(){
	var map = {};
	for (var i=0; i<26; i++){
		var next = (i+2) % 26;
		map[String.fromCharCode(97+i)] = String.fromCharCode(97 + next);
	}
	return map;
}

function puzzle1map(nonsense){
	var map = mapLetters();

	var newNonsense = "";

	for (var i=0; i< nonsense.length; i++){
		var newChar = nonsense[i];
		//http://stackoverflow.com/a/1098955
		if (nonsense[i] in map)
			newChar = map[nonsense[i]];
		newNonsense += newChar;
	}

	return newNonsense;
}

puzzle1map(nonsense);
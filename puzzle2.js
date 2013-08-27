var treasure = "";

//http://eloquentjavascript.net/chapter14.html
function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

var request = makeHttpObject();
request.open("GET", "http://localhost:8080/puzzle2.txt", false);
request.send(null);
//console.log(request.responseText);


function puzzle2(blarble) {

	allChars = {};
	//allChars.uniqueChars = 0;
	for (var i=0; i<blarble.length; i++) {
		if (!(blarble[i] in allChars)) {
			allChars[blarble[i]] = 1;
		} else {
			allChars[blarble[i]] ++;
		}
	}

	return allChars;
}

// http://stackoverflow.com/a/4889658
magic = puzzle2(request.response);
totalsize = 0;
Object.keys(magic);
const informations = require("./informations");
const cowsay = require("cowsay");


console.log(cowsay.say({
	text : `Hello I'm ${informations.name} from ${informations.campus}`,
	e : "OO",
	T : "U"
}));

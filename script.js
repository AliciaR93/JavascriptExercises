var number = prompt("Enter a number");
var sum = 0
for ( var i = 0; i <= number; i++) {
	sum += i;
}
alert(sum);








var phrase= "";
var question = prompt("Do you want to play?");
	do { 
	if (question == "no") {
	break;	
	}
	phrase = phrase + " " + prompt ("Enter a word."); 
	question = prompt ("Do you want to play again?");
	} while (question == "yes");
	alert (phrase);
	
	
	
	
	
	


	
	
	
	

	
	
	
	var condition = prompt ("Would you like to print your name?");	
	var output = ("Hello. My name is Adam");
	
	while (condition == "yes")
	{
	alert (output);
	condition = prompt ("Would you like to print this again?");
	output = (output) + "!";
	};












var output = "";
output = prompt ("What time of day is it?");
if (output == "morning") {
	alert ("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
}
if (output == "noon") {
	alert ("Eat a salad");
}
if (output == "evening") {
	alert ("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
}
$(document).ready(function(){
    $('#sick').click(function(){
        var div= $('#igiveup')
        div.animate({left:'50px'}, 'slow');
            
            div.animate({fontSize:'40px'}, 'slow');
            
    });
});



function shareWithUs() {
var tellName=prompt("What is your name?");

var mealTime=prompt("Is your favorite meal time breakfast, lunch or dinner?");

var tellOpinion=prompt ("Do you think that our recipes are great, awesome, or fantastic?");

document.getElementById("leadme").innerHTML=
"My name is" + " " +tellName+ " and my favorite meal is " +" " +mealTime+ "." + " I think that your recipes are " + " " +tellOpinion + "!";
}
/* lines 13-22 is the code for the share with us button in jumbotron on homepage*/
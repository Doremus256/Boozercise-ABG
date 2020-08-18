console.log("con u c me")

$(document).on("click", "#submitButton", function(){
   var height =  $("#enterHeight").val();
   
});

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var height = document.querySelector('.height')
var age = document.querySelector('.age')
var gender = document.querySelector('.gender')
var weigth = document.querySelector('.weight')


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=180&age=25&gender=male&weigth=70",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
		"x-rapidapi-key": "0fd6027417msh0e87a8b18391847p1ad365jsn08a6f4226710"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});



// var button = $('.button');
// var inputValue = $('.inputValue');

$(document).on("click", "#submitButton", function(){

    var height = $('#height').val();
    var age = $('.age').val();
    var gender = $('.gender').val();
    var weigth = $('.weight').val();

    console.log(height);

    getData(height, age, gender, weigth);

    $('#height').empty();
    $("input").empty();
    $('.gender').empty();
    $('.weight').empty();
});

// created variables for user to enter data to calculate daily calorie requirements

var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var height = document.querySelector('.height')
var age = document.querySelector('.age')
var gender = document.querySelector('.gender')
var weigth = document.querySelector('.weight')
// Brad creating variables for Healthy Recipes API
var targetCalories = document.querySelector('.targetCalories')
var timeFrame = document.querySelector('.timeFrame')

// use may select drink choices
var drinkChoices = ["beer 12 oz", "red wine 5oz", "white wine 5oz", "Spirits 1.5oz"];
var drinkCaloriesPerServing = ["132", "123", "123", "100"]

// user enters number of drinks consumed per week according to choices
//var drinksPerWeek = prompt("how many drinks to you consume in a week")

// number of drinks entered is multiplied by the appropiate calorie value

var exerciseChoices = ["running", "swimmimg", "walking", "HIIT" ,"yoga" ,"stength training", "zumba"]
var exerciseCaloriesPerHalfHour = ["372", "300", "180", "374", "120", "90", "210"]

function getData(height, age, gender, weight) {
    $.ajax({
        url: "https://fitness-calculator.p.rapidapi.com/dailycalory?heigth="+height+"&age="+age+"&gender="+gender+"&weigth="+weight,
        type: "GET", 
            headers: {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "72625e52a9msha06ed784ebb8fe6p1c3b8ejsnd07a4dfa968e"
        }})
        .then(function (apiResponse){
            console.log(apiResponse)
            $(".bmrResults").html(`
            <h2>${apiResponse.data.BMR}</h2>
            <h2>${apiResponse.data.goals.BMR["Weight loss"].calory}</h2>`)
            localStorage.setItem("bmiResults", JSON.stringify(apiResponse))
        })

// Brad adding JQ for Healthy Recipes API: (lines 48-70)
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=2000&timeFrame=day",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": "72625e52a9msha06ed784ebb8fe6p1c3b8ejsnd07a4dfa968e"
	}
}
$.ajax(settings).done(function (response) {
	console.log(response);
		$("targetCalories").append(`<div class=card>
		<p>Meal Name: ${response.meals.title}</p>
		<p>Calories: ${response.nutrients.calories}</p>
		`)
	});

	$(".targetCalories").on("click", function(response) {
		event.preventDefault()
		let weeklyCalories = $(".targetCalories").val()
		console.log(weeklyCalories)
	})};
	
// End of the Healthy Recipes API code (lines 48-70)
// ==================ALCOHOL API=====
// let beverage = {gin};
// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + beverage,
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 		"x-rapidapi-key": "273b750f66mshba92fa4a6450d78p125595jsndb8ee286de43"

// let beverage = {};
// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + beverage,
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 		"x-rapidapi-key": "273b750f66mshba92fa4a6450d78p125595jsndb8ee286de43"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response)

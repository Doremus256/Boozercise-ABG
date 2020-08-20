
var button = $('.button');
var inputValue = $('.inputValue');
var targetCalories = $(`.inputValue`);

// const dialog = new
//  mdc.dialog.MDCDialog(document.querySelector('#my-mdc-dialog'));

// const dialog = new
//  mdc.dialog.MDCDialog(document.querySelector('#my-mdc-dialog'));

// dialog.listen('MDCDialog:cancel', function() {
//   console.log('canceled');
// });

$(document).on("click", "#submitButton", function(){
// dialog.show();

// dialog.listen('MDCDialog:accept', function() {
//   console.log('accepted');
// })

// dialog.listen('MDCDialog:cancel', function() {
//   console.log('canceled');
});

// Click Event Listener For Fitness Calculator Submit Button
$(document).on("click", "#submitButton", function () {
    var height = $('#height').val();
    var age = $('.age').val();
    var gender = $('.gender').val();
    var weigth = $('.weight').val();
    getData(height, age, gender, weigth);
    $('#height').empty();
    $("input").empty();
    $('.gender').empty();
    $('.weight').empty();
});

// $(document).on("click", "#calorieBtn", function () {
//     getRecipe();
// });

// created variables for user to enter data to calculate daily calorie requirements

var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var height = document.querySelector('.height');
var age = document.querySelector('.age');
var gender = document.querySelector('.gender');
var weigth = document.querySelector('.weight');

// use may select drink choices
var drinkChoices = ["beer 12 oz", "red wine 5oz", "Spirits 1.5oz"];
var drinkCaloriesPerServing = ["132", "123", "100"];
for (i=0; i<drinkChoices.length; i++){
    $("#drinkSection").append(`<option value=${drinkCaloriesPerServing[i]}>${drinkChoices[i]} -- ${drinkCaloriesPerServing[i]} cal</option>`)
}

for(i=1; i<=20; i++) {
    $("#totalAlcoholCalories").append(`<option value=${i}>${i}</option>`)
}

// user enters number of drinks consumed per week according to choices
//var drinksPerWeek = prompt("how many drinks to you consume in a week")

// number of drinks entered is multiplied by the appropiate calorie value

var exerciseChoices = ["running", "swimmimg", "walking", "HIIT", "yoga", "stength training", "zumba"];
var exerciseCaloriesPerHalfHour = ["372", "300", "180", "374", "120", "90", "210"];

function getData(height, age, gender, weight) {
    $.ajax({
        url: "https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=" + height + "&age=" + age + "&gender=" + gender + "&weigth=" + weight,
        type: "GET",
        headers: {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "72625e52a9msha06ed784ebb8fe6p1c3b8ejsnd07a4dfa968e"
        }
    })
        .then(function (apiResponse) {
            console.log(apiResponse)
            $(".bmrResults").html(`
            <h2>Calories to maintain weight: ${apiResponse.data.BMR}</h2>`)
            $(".Goals").html(`<h2>Calories to lose weight: ${apiResponse.data.goals.BMR["Weight loss"].calory}</h2>`)
            localStorage.setItem("bmiResults", JSON.stringify(apiResponse))
        })
}

// Brad adding JQ for Healthy Recipes API: (lines 48-70)
$("#calorieBtn").on("click", function(event) {

    event.preventDefault()
    var userCalories = $("#userCalorieField").val()
    console.log("Calorie",userCalories)
    $.ajax({
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=${userCalories}&timeFrame=day`,
        type: "GET",
        headers: {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "72625e52a9msha06ed784ebb8fe6p1c3b8ejsnd07a4dfa968e",
        }
    })
        .then(function (apiResponse) {
            console.log(apiResponse)
            var htmlText = ""
            for (i=0; i<apiResponse.meals.length; i++) {
            htmlText+=`
            <div class="recipeResponse"><h6>${apiResponse.meals[i].title}</h6>
            <a href="${apiResponse.meals[i].sourceURL}" target="_blank">Check Out This Recipe</a></div>`

            }
            $(".targetCalories").html(htmlText)
        })
});


//drink button and alcohol calorie calc
$("#drinkSubmitButton").on("click", function(event){
    event.preventDefault();
    var drinkType = $("#drinkSection").val();
    var drinkAmt = $("#totalAlcoholCalories").val();

    function calorieTotal(drinkType, drinkAmt){
        return drinkType * drinkAmt
    }
    
    console.log(calorieTotal(drinkType, drinkAmt));
    
})

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


// 		"x-rapidapi-key": "273b750f66mshba92fa4a6450d78p125595jsndb8ee286de43"}}

// *****************gonna work on this today**********
// let beverage = {}
// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + beverage,
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
// 		"x-rapidapi-key": "273b750f66mshba92fa4a6450d78p125595jsndb8ee286de43"
// 	}}

// $.ajax(settings).done(function (response)) {
//   console.log(response);
// }

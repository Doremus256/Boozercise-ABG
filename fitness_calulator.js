

var button = $('.button');
var inputValue = $('.inputValue');



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


// use may select drink choices
var drinkChoices = ["beer 12 oz", "red wine 5oz", "white wine 5oz", "Spirits 1.5oz"];
var drinkCaloriesPerServing = ["132", "123", "123", "100"]

// user enters number of drinks consumed per week according to choices
//var drinksPerWeek = prompt("how many drinks to you consume in a week")

// number of drinks entered is multiplied by the appropiate calorie value

var exerciseChoices = ["running", "swimmimg", "walking", "HIIT" ,"yoga" ,"stength training", "zumba"]
var exerciseCaloriesPerHalfHour = ["372", "300", "180", "374", "120", "90", "210"]




function getData(height, age, gender, weigth){

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://fitness-calculator.p.rapidapi.com/dailycalory?heigth="+height+"&age="+age+"&gender="+gender+"&weigth="+weigth,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
            "x-rapidapi-key": "0fd6027417msh0e87a8b18391847p1ad365jsn08a6f4226710"
        }
    }

    $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response.data);
    console.log(response.data.goals);

    var fitnessTrackerURL = `"url": "https://fitness-calculator.p.rapidapi.com/dailycalory?heigth="+height+"&age="+age+"&gender="+gender+"&weigth="+weigth,`

    /*    $.ajax({
            url:fitnessTrackerURL
            method: "GET"
            .then(function (data){

            })
        })
    $(".bmrResults").append(data)

    $(".goals").append(data.goals)

        //after jax call has been fired, any html manipulation goes here
        
        //look into es6 temperal literals 

    });
    $(document).ready(function(){
        $('button').click(function(){
            $('ul').toggleClass('active')
        });

   /* });
};


<script type="text/javascript" src="./jquery-3.4.1.min.js"></script>

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://fitness-calculator.p.rapidapi.com/dailycalory?heigth=180&age=55&gender=female&weigth=70",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
		"x-rapidapi-key": "0fd6027417msh0e87a8b18391847p1ad365jsn08a6f4226710"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

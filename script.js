
// Here is the process to fetch the json file, and I follow the tutorial from week 3's video

let randomNumber
window.addEventListener('load', function () {
	 console.log('page is loaded');

	fetch('restaurant.json')
		.then((response) => response.json())
		.then((data) => {
			console.log(data.restaurant);

			 restaurantData = data.restaurant

			let restaurantArray = data
			randomNumber = Math.floor(Math.random() * restaurantArray.restaurant.length)
			console.log(randomNumber)

			// I try to extract the data of "name", "price", "rating" from restaurant.json

			let nameElement = document.getElementById('r-name')
			nameElement.innerHTML = restaurant[randomNumber].nameArray.restaurant[randomNumber].name

			let priceElement = document.getElementById('r-price')
			priceElement.innerHTML = restaurant[randomNumber].nameArray.restaurant[randomNumber].price

			let ratingElement = document.getElementById('r-rating')
			ratingElement.innerHTML = restaurant[randomNumber].ratingArray.restaurant[randomNumber].rating
				
		})
})
// Foodpics.json is for the pictures of dishes that to be shown at the front side of the card. But I got some problems while using the json from Foodish (https://github.com/surhud004/Foodish#readme), and I am not sure how to fetch a second json file.

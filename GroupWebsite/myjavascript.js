
/*Rotating Background image */
		function changeImg(imgNumber) {
			var myImages = ["bar1.jpg", "bar2.jpg", "bar3.jpg", "bar4.jpg", "bar5.jpg"];
			var imgShown = document.body.style.backgroundImage;
			var newImgNumber = Math.floor(Math.random()*myImages.length);
			document.body.style.backgroundImage = 'url(images/'+myImages[newImgNumber]+')';
		}
		window.onload=changeImg;

/*Set Menu JS */
		var totalPrice = 0;
		var setMeal1 = 16.95;
		var setMeal2 = 25.50;
		var setMeal3 = 21.95;

		function submitSetMenu1()
		{
			totalPrice += setMeal1;
		}
		function submitSetMenu2()
		{
			totalPrice += setMeal2;
		}
		function submitSetMenu3()
		{
			totalPrice += setMeal3;
		}
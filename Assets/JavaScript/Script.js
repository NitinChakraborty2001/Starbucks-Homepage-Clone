/*
	🖥️Full-Stack Developer 🎨Graphic Designer 💸Freelancer

	👨‍💻Author : Nitin Chakraborty.

	🔗Facebook : https://www.facebook.com/NitinChakraborty2001/
	🔗Instagram : https://www.instagram.com/NitinChakraborty2001/
	🔗YouTube : http://www.youtube.com/c/NitinChakraborty2001/
	🔗LinkedIn : https://www.linkedin.com/in/NitinChakraborty2001/
	🔗Twitter : https://www.twitter.com/NitinCB2001/

	📧eMail : nitin.chakraborty13@gmail.com
*/

// Selecting Elements
const hamburgerMenuButton = document.getElementById("hamburgerMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

// Toggle Navigation Functionality
function toggleNavigation() {
	hamburgerMenuButton.classList.toggle("open");
	mobileMenu.classList.toggle("hidden");
	document.body.classList.toggle("no-scroll");
}

hamburgerMenuButton.addEventListener("click", toggleNavigation);

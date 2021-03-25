// año actual
const yearNow = document.querySelector("#yearNow");
let year = new Date();
yearNow.innerHTML = year.getFullYear();

// mi edad
const edad = document.querySelector("#edad");
let yeardeNacimiento = new Date();
yeardeNacimiento.setFullYear(2001, 3, 25);
let miEdad = year.getFullYear() - yeardeNacimiento.getFullYear();

if (year.getMonth() <= 3) {
	if (year.getDate() < 25) {
		miEdad = miEdad - 1;
	}
}

edad.innerHTML = miEdad;

// Validate Form

const validateForm = () => {
	const nameForm = document.getElementById("name").value;
	const emailForm = document.getElementById("email").value;
	const asuntoForm = document.getElementById("asunto").value;
	const messageForm = document.getElementById("message").value;
};

console.log("hello world");



const handleSubmit =(event) => {
	event.preventDefault();
	document.addEventListener('submit', handleSubmit)
	alert('Form submitted successfully!');
}
//const duckImage = (event) => {
///	event.preventDefault();
//	document.getElementById('duckImage');
//	duckImage.addEventListener('mouseover', function() {
const duck = document.getElementById('duckImage');

duck.addEventListener("mouseover", (event) => {
	event.preventDefault();
	alert( "You can join the SuperDuck team!");
});
//	setTimeout(() => {
		event.target.text = "";
//	}, 200);
//},
//);
//duck.addEventListener('mouseover', function() {
//	alert('You can join the SuperDuck team!')
//})


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
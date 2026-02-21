//your JS code here. If required.
let button = document.getElementById('sum_btn');
let num1 = document.getElementById('n1');
let num2 = document.getElementById('n2');
let res = document.getElementById('Sum');
button.addEventListener('click',(e) => {
	e.preventDefault();
	let sum = Number(num1.value) + Number(num2.value);
	res.textContent = `${sum}`;
})
const heightInput = document.getElementById('height')
const weightInput = document.getElementById('weight')
const metric = document.getElementById('metric')
const imperial = document.getElementById('imperial')
const radio = document.querySelector('.radio')
const unit1 = document.querySelector('.unit-1')
const unit2 = document.querySelector('.unit-2')
const resultsOutput1 = document.querySelector('.results-output h3')
const resultsOutput2 = document.querySelector('.results-output p')

let height = 0
let weight = 0
function updateHeight(e) {
	height = +e.target.value
	calculate()
}

heightInput.addEventListener('keyup', updateHeight)

function updateWeight(e) {
	weight = +e.target.value
	calculate()
}

weightInput.addEventListener('keyup', updateWeight)

function unitUpdate() {
	if (metric.checked && (height > 0 || weight > 0)) {
		unit1.textContent = 'cm'
		unit2.textContent = 'kg'
		heightInput.value = (height / 0.3937007874).toFixed(1)
		weightInput.value = (weight / 2.2046226218488).toFixed(1)
		height = height / 0.3937007874
		weight = weight / 2.2046226218488
		console.log({ height })
		console.log({ weight })
		calculate()
	} else if (imperial.checked && (height > 0 || weight > 0)) {
		unit1.textContent = 'in'
		unit2.textContent = 'lbs'
		heightInput.value = (height / 2.54).toFixed(1)
		weightInput.value = (weight / 0.45359237).toFixed(1)
		height = height / 2.54
		weight = weight / 0.45359237
		console.log({ height })
		console.log({ weight })
		calculate()
	} else if (metric.checked) {
		unit1.textContent = 'cm'
		unit2.textContent = 'kg'
	} else if (imperial.checked) {
		unit1.textContent = 'in'
		unit2.textContent = 'lbs'
	}
}

function calculate() {
	let bmi = 0
	if (metric.checked && height > 0 && weight > 0) {
		const meters = height / 100
		bmi = (weight / (meters * meters)).toFixed(1)
		resultsOutput1.textContent = `Your BMI is ${bmi}.`
	} else if (imperial.checked && height > 0 && weight > 0) {
		bmi = ((weight / (height * height)) * 703).toFixed(1)
		resultsOutput1.textContent = `Your BMI is ${bmi}.`
	}
	if (bmi < 18.5 && height > 0 && weight > 0) {
		resultsOutput2.textContent = `Your BMI is considered underweight.`
	}
	if (bmi >= 18.5 && bmi < 24.9 && height > 0 && weight > 0) {
		resultsOutput2.textContent = `Your BMI is considered very healthy.`
	}
	if (bmi >= 25 && height > 0 && weight > 0) {
		resultsOutput2.textContent = `Your BMI is considered overweight.`
	}
	if (bmi >= 30 && height > 0 && weight > 0) {
		resultsOutput2.textContent = `Your BMI is considered very high.`
	}
}
radio.addEventListener('change', unitUpdate)

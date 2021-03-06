const gas = document.querySelector('#gas');
const km = document.querySelector('#km');
const gasPrice = document.querySelector('#gas-price');
const btnGasCount = document.querySelector('.gas-count');
const gasError = document.querySelector('.gas-error');
const gasInfo = document.querySelector('.gas-info');
const gasValue = document.querySelector('.gas-value');
const option = document.querySelector('.option');


const trip = document.querySelector('#trip');
const fuelCons = document.querySelector('#fuel-cons');
const fuelPrice = document.querySelector('#fuel-price');
const btnCostCount = document.querySelector('.cost-count');
const fuelError = document.querySelector('.fuel-error');
const fuelInfo = document.querySelector('.fuel-info');



const fuelCalc =()=>{
	if (gas.value == '' || km.value ==''){
		gasError.textContent = "Uzupełnij dane!";
	}else if(gas.value !== '' && km.value !=='' && gasPrice.value ===""){
		countValue();
	}else if(gas.value !== '' && km.value !=='' && gasPrice.value !==""){
	//    countValue();
	      optionValue();
	}else{
		gasError.textContent = "BŁĄD!!!"
	}
}


const countValue =()=>{
	const newKm = parseFloat(km.value);
	const newGas = parseFloat(gas.value);

	const sum = (newGas*100)/newKm;
	gasInfo.style.display = 'block';
	gasError.textContent = '';
	gasValue.textContent = sum.toFixed(2);


	document.getElementById('km').value = "";
	document.getElementById('gas').value = "";
	option.style.display ='none'

}
const optionValue=()=>{
	const newKm = parseFloat(km.value);
	const newGas = parseFloat(gas.value);
	const newPrice = parseFloat(gasPrice.value);

	const sum = (newGas*100)/newKm;
	gasInfo.style.display = 'block';
	gasError.textContent = '';
	gasValue.textContent = sum.toFixed(2);

	const sumTrip = (newGas*newPrice);
	option.style.display = 'block'
	option.textContent = `Koszt przejazdu ${newKm} kilometrów wynosi ${sumTrip} zł.`;

	document.getElementById('km').value = "";
	document.getElementById('gas').value = "";
	document.getElementById('gas-price').value = "";
	
}

const priceCalc =()=>{
	if (trip.value =='' || fuelCons.value == '' || fuelPrice.value == ''){
		fuelError.textContent = `Proszę o uzupełnienie wszystkich danych!.`;
	}else {
		tripCost();
	}
}

const tripCost=()=>{
	const newTrip = parseFloat(trip.value);
	const newFuelCons = parseFloat(fuelCons.value);
	const newFuelPrice = parseFloat(fuelPrice.value);

	const sum = ((newTrip*newFuelCons)/100)*newFuelPrice;
	fuelInfo.textContent = `Koszt przejazdu ${newTrip} km wyniesie ${sum} zł.`;




	document.getElementById('trip').value = "";
	document.getElementById('fuel-cons').value = "";
	document.getElementById('fuel-price').value = "";

}

btnGasCount.addEventListener('click', fuelCalc);
btnCostCount.addEventListener('click', priceCalc)
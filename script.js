const gas = document.querySelector('#gas');
const km = document.querySelector('#km');
const gasPrice = document.querySelector('#gas-price');
const btnGasCount = document.querySelector('.gas-count');
const gasError = document.querySelector('.gas-error');
const gasInfo = document.querySelector('.gas-info');
const gasValue = document.querySelector('.gas-value');
const option = document.querySelector('.option');
// const gas = document.querySelector('#gas');
const countData =()=>{
	const newKm = parseFloat(km.value);
	const newGas = parseFloat(gas.value);

	const sum = (newGas*100)/newKm;
	gasInfo.style.display = 'block';
	gasError.textContent = '';
	gasValue.textContent = sum.toFixed(2);
}
const checkDate =()=>{
	if (gas.value == '' || km.value ==''){
		gasError.textContent = "Uzupełnij dane!";
	}else{
	 countData();
	}
}



btnGasCount.addEventListener('click', checkDate)
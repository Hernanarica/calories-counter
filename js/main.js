const compose = (...functions) => data =>
	functions.reduceRight((value, func) => func(value), data);


const $btn    = document.querySelector('.btn');
const $fields = document.querySelectorAll('.input');

const validateFields = () => {
	let counter = 0;
	
	$fields.forEach($field => {
		($field.value === '') ? $field.classList.add('is-invalid') : counter++;
	});
	
	if (counter === $fields.length) {
		console.log('Adding...');
	}
};

$fields.forEach($field => {
	$field.addEventListener('keypress', () => {
		$field.classList.remove('is-invalid');
	});
});


$btn.addEventListener('click', () => {
	validateFields();
});
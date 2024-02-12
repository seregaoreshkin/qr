
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=160×160&data=';

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const qrCodeWrapper = document.querySelector('#card-qr');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	qrCodeWrapper.innerHTML = '';

	const request = api + input.value;

	const img = `<img src="${request}" alt="QR code">`;

	qrCodeWrapper.classList.add('open');
    
	qrCodeWrapper.insertAdjacentHTML('beforeend', img);
});

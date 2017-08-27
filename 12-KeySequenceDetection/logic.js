
const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) => {

	console.log(e.key);
	pressed.push(e.key);
	//splice from the back
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	console.log(pressed);
	if(pressed.join('').includes(secretCode)){
		console.log('DINGDING');
		cornify_add();
	}
})
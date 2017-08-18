console.log('yolo');

const panels = document.querySelectorAll('.panel');

function toglleOpen(){
	this.classList.toggle('open');
}
//cause there are more than one transitioned , we pass in event and check 
function toglleActive(event){
	// console.log(event.propertyName);
      if (event.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
}

panels.forEach(function(panel){
	panel.addEventListener('click', toglleOpen);
	panel.addEventListener('transitionend', toglleActive);
})
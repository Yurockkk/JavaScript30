const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clearAll = document.querySelector('[name=clearAll]');
const selectAll = document.querySelector('[name=selectAll]');

function addItem(e){
	console.log('hello');
	e.preventDefault();
	//this -> form elemet
	const text = (this.querySelector('[name=item]')).value;
	const item = {
		text: text,
		done: false
	};

	console.log(item);
	items.push(item);
	populateList(items,itemsList);
	localStorage.setItem('items', JSON.stringify(items));
	this.reset();
}

function populateList(plates=[], platesList){
	platesList.innerHTML = plates.map((plate, i) => {
		return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked':''} />
				<label for="item${i}">${plate.text}</label>
			</li>
		`;
	}).join('');
}

function toggleDone(e){
	
	//check if it's the actaul thing we want 
	if(!e.target.matches('input')){
		return;
	}
	const el = e.target;
	console.log(el.dataset.index);
	const index = el.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem('items', JSON.stringify(items));
	populateList(items, itemsList);
}

function toggleAll(e){

	console.log(this.name);
	items.forEach(item => {
			
			if(this.name == clearAll.name){
				item.done = false;
			}else{
				item.done = true;
			}
		});
	populateList(items,itemsList);
	localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click',toggleDone);

clearAll.addEventListener('click', toggleAll);
selectAll.addEventListener('click', toggleAll);

populateList(items, itemsList);





const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if (str !=''){
		results = fruit.filter((one) => one.toLowerCase().includes(str.toLowerCase()));
	}
	// TODO

	return results;
}

function searchHandler(e) {
	let results = search(e.target.value);
	const ul = document.querySelector('ul');
	while(ul.hasChildNodes()){
		ul.childNodes.item(0).remove();
	};
	for (result of results){
		let li = document.createElement('li');
		li.innerText = result;
		ul.appendChild(li);
	};
	const searchContainer = document.getElementByClassName('search-container')
	searchContainer.classList.add('adjusted');

	// TODO
}

function showSuggestions(results, inputVal) {
	
	// TODO
}

function useSuggestion(e) {
	let box = e.target;
	input.value = box.innerText;
	let results = e.target.parentNode.childNodes;
	let i = 0;
	let result = results.item(0);
	let length = results.length;
	while (i < length){
		if (result.innerText != input.value){
			console.log('hi')
			result.remove();
			result = results.item(0);
		}
		else{
			if(i < length-1){
			results.item(1).remove();
			}
		}
		i++;
	}
}



input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('hover', showSuggestions);
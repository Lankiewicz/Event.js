var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	
	element.innerHTML = 'item';

	var itemsByTagName = document.getElementsByTagName('li');
	console.log(itemsByTagName);

	list.appendChild(element);

	var element = document.createElement('li');
	console.log(element);
});







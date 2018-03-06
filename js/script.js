var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	list.appendChild(element);

	var element = document.createElement('li');

	element.innerHTML = 'item';

	console.log(element);

});
var itemsByTagName = document.getElementsByTagName('li');

	console.log(itemsByTagName);





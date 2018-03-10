var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');

	var counter = list.getElementsByTagName('li').length;
	console.log(counter);

	element.innerHTML = 'item' + counter;
	list.appendChild(element);
	console.log(element);
});







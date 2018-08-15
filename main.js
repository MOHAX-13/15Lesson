const ud = document.getElementById('ud');
const dropZone = document.getElementById('dropZone');
const m = document.getElementById('m');

ud.addEventListener('drop', drop);
ud.addEventListener('dragover', dragover)
dropZone.addEventListener('drop', drop);
dropZone.addEventListener('dragover', dragover);
m.addEventListener('dragstart', dragstart);

function dragover(e) {
    e.preventDefault()
}

function dragstart(e) {
    e.dataTransfer.setData("Text",event.target.id)
}

function drop(e) {
    e.preventDefault();
    const data=event.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(data));
}

/*var objects = {};

document.onmousedown = function(e) {
	if (e.which != 1) {
      return false;
    }

    var elem = e.target.closest('.draggable');

    if (!elem) return;

    objects.elem = elem;

    objects.downX = e.pageX;
	objects.downY = e.pageY;


	objects.style.position = 'absolute';
	moveObj(e);
	document.body.appendChild(objects);

	objects.style.zIndex = 1000;

	function moveObj(e) {
    objects.style.left = e.pageX - objects.offsetWidth / 2 + 'px';
    objects.style.top = e.pageY - objects.offsetHeight / 2 + 'px';
	}
	document.onmousemove = function(e) {
    moveObj(e);
    }

    objects.onmouseup = function() {
    document.onmousemove = null;
    objects.onmouseup = null;
	}
}
objects.ondragstart = function() {
	return false;
};*/
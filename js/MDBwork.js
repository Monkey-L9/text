
window.onload = function() {
	var ul = document.querySelector('ul');
    var liS = document.querySelectorAll('li');
	var span = document.querySelectorAll('span');
	for (var i = 0; i < span.length; i++) {
		span[i].id = i;
		span[i].onclick = function() {
			for(var i=0; i<span.length; i++){
				span[i].className = '';
			}
            this.className = 'active';
            var left = -this.id * liS[0].clientWidth;
			move(ul,'left',20,left);
			
		}
	}

	var timer = null;
	function move(ele, attr, step, end) {
		clearInterval(timer);
		step = end > parseInt(getStyle(ele, attr)) ? step : -step;
		timer = setInterval(function() {
			var speed = parseInt(getStyle(ele, attr)) + step;
			if ((speed >= end && step > 0) || (speed <= end && step < 0)) {
				speed = end;
				clearInterval(timer);
			}
			ele.style[attr] = speed + 'px';
		}, 20);
	}
	function getStyle(ele, attr) {
		if (ele.currentStyle) {
			return ele.currentStyle[attr];
		} else { 
			return getComputedStyle(ele)[attr];
		}
	}
}
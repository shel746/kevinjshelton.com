(function() {
	// Requests animation frames as often as possible for "duration" amount of time.
	// With each frame the function "action" is called and once the "duration" is
	// completed, the function "onComplete" is called.  Works with all vendors.
	function animate(duration, action, onComplete) {
		var animationFrame = window.requestAnimationFrame
		                  || window.webkitRequestAnimationFrame
		                  || window.mozRequestAnimationFrame
		                  || window.oRequestAnimationFrame
		                  || window.msRequestAnimationFrame
		                  || function(callback) {
		                     	window.setTimeout(callback, 1000 / 60);
		                     };
		var start = null;
		function step(timestamp) {
			if (!start)
				start = timestamp;
			var progress = timestamp - start;
			if (typeof action === "function")
				action(progress);
			if (progress < duration)
				animationFrame(step);
			else if (typeof onComplete === "function")
				onComplete();
		}
		animationFrame(step);
	}

	// Returns a value corresponding to how far down the user has scrolled the page
	function getScrollTop() {
		return window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
	}

	// Calculates the current value using a easeInOutQuad bezier-curve
	// (http://gizma.com/easing/#quad3)
	function easeInOutQuad(progress, start, delta, duration) {
		progress /= (duration / 2);
		if (progress < 1)
			return ((progress * progress * (delta / 2)) + start);
		--progress;
		return ((((progress * (progress - 2)) - 1) * (-delta / 2)) + start);
	};

	// Scrolls the page to the "top" y-coordinate over "duration" time
	function animateScroll(top, duration) {
		var scrollTop = getScrollTop();
		animate(duration, function(progress) {
			window.scroll(0, easeInOutQuad(progress, scrollTop, top, duration));
		});
	}

	Array.prototype.forEach.call(document.links, function(link) {
		var href = link.getAttribute("href");
		if (href.indexOf("#") !== 0)
			return;

		link.addEventListener("click", function(event) {
			var target = document.getElementById(href.slice(1));
			if (!target)
				return;

			event.preventDefault();
			animateScroll(target.getBoundingClientRect().top, 750);
		});
	});
})();

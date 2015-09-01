var Scrambler = function() {
	this.selector = '.scrambler';
	this.init();
};

Scrambler.prototype = {
	init: function() {
		this.el = document.querySelector(this.selector);
		if (this.el) {
			this.scrambleElement(this.el);
		}
	},
	scrambleWord: function(word) {
		if (word.length > 3) {
			var indexes = [];
			var scramble = word[0];
			for (var i = 1; i < word.length - 1; i++) {
				indexes.push(i);
			}
			while (indexes.length) {
				var next = Math.floor(indexes.length * Math.random());
				var index = indexes.splice(next, 1);
				scramble += word[index];
			}
			return scramble += word[word.length - 1];
		}
		return word;
	},
	scrambleElement: function(element) {
		var words = element.innerHTML.split(' ');
		var out = [];
		for (var i in words) {
			out.push(this.scrambleWord(words[i]));
		}
		element.innerHTML = out.join(' ');
	}
};

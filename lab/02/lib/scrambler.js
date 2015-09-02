var Scrambler = function(element) {
    this.iterations = 20;
    this.timeOut = 250;
    this.element = element;
    this.originalContent = null;
    this.scrambledWords = null;
    this.init();
};

Scrambler.prototype = {
    init: function() {
        this.originalContent = this.element.innerHTML;
        this.scrambledWords = this.originalContent.split(' ');
        this.scramble();
        this.run(this);
    },
    run: function(scrambler) {
        if (scrambler.iterations) {
            scrambler.iterations--;
            setTimeout(function() {
                scrambler.scramble(true);
                scrambler.run(scrambler);
            }, scrambler.timeOut);
        } else {
            scrambler.restore();
        };
    },
    restore: function() {
        this.element.innerHTML = this.originalContent;
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
    scramble: function(randomize) {
        var randomIndices = [];

        if (randomize) {
            // randomize number of words we will scramble
            var percentage = Math.floor(100 * Math.random());
            var wordCount = Math.round(percentage * this.scrambledWords.length / 100);

            // random select up to [wordCount] indices that will be scrambled
            for (var i = 0; i < wordCount; i++) {
                var index = Math.round(this.scrambledWords.length * Math.random());
                if (randomIndices.indexOf(index) == -1) {
                    randomIndices.push(index);
                }
            }
        }
        for (var i in this.scrambledWords) {
            if (randomize) {
                if (randomIndices.indexOf(Number(i)) > -1) {
                    this.scrambledWords[i] = this.scrambleWord(this.scrambledWords[i]);
                }
            } else {
                this.scrambledWords[i] = this.scrambleWord(this.scrambledWords[i]);
            }
        }
        this.element.innerHTML = this.scrambledWords.join(' ');
    }
};

var ScramblerFactory = function(selector) {
    this.selector = selector || '.scrambler';
    this.elements = [];
    this.init();
};

ScramblerFactory.prototype = {
    init: function() {
        this.elements = document.querySelectorAll(this.selector);
        for (var i = 0; i < this.elements.length; i++) {
            var s = new Scrambler(this.elements[i]);
        }
    }
};

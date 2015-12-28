(function() {

    "use strict";

    var textNodesUnder = function(el){
        var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
        while(n=walk.nextNode())
            a.push(n);
        return a;
    };

    var scrambleWord = function(word) {
        /*
         * Returns a scrambled version of the word passed as argument.
         * Doesn't do anything if word is shorter than 4 characters.
         */
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
    };

    var scrambleParagraph = function(paragraph, randomWords) {
        var scrambledWords = paragraph.split(' ');

        // randomize number of words to scramble
        if (randomWords) {
            var randomIndices = [];
            var percentage = Math.floor(100 * Math.random());
            var wordCount = Math.round(percentage * scrambledWords.length / 100);

            // random select up to [wordCount] indices that will be scrambled
            for (var i = 0; i < wordCount; i++) {
                var index = Math.round(scrambledWords.length * Math.random());
                if (randomIndices.indexOf(index) == -1) {
                    randomIndices.push(index);
                }
            }
        }

        for (var i in scrambledWords) {
            // TODO: consider punctuation marks! either here or in scrambleWord
            if (randomWords) {
                if (randomIndices.indexOf(Number(i)) > -1) {
                    scrambledWords[i] = scrambleWord(scrambledWords[i]);
                }
            } else {
                scrambledWords[i] = scrambleWord(scrambledWords[i]);
            }
        }
        return scrambledWords.join(' ');

    };

    var ElementScrambler = function(element) {
        console.log('[ElementScrambler] new', element);
        this.element = element || null;
        this.originalContent = '';
    };

    ElementScrambler.prototype = {

        scramble: function(randomWords) {
            this.element.innerHTML = scrambleParagraph(this.originalContent);
        },

        restore: function() {
            this.element.innerHTML = this.originalContent;
        }

    };

    function Scrambler() {

        var _scrambler = {
            timeOut: 250,
            iterations: 100,
            scrambleElements: [],

            scramble: function(element) {
                var elements = textNodesUnder(element);
                for (var e in elements) {
                    this.scrambleElements.push(new ElementScrambler(elements[e]));
                }
            }
        };

        // public interface
        return {

            scramble: function(element) {
                console.log('[Scrambler] scramble', element);
                _scrambler.scramble(element);
                return this;
            },

            stop: function() {
                console.log('[Scrambler] stop');
                _scrambler.stop();
                return this;
            },

            restore: function() {
                console.log('[Scrambler] restore');
                return this;
            },

            showCTA: function(locale) {
                console.log('[Scrambler] show CTA', locale);
                return this;
            },

            go: function(element, locale) {
                // wrapper method, calls the whole sequence: scramble + stop + cta + restore
                console.log('[Scrambler] go', element, locale);
                return this;
            }
        };
    };

    // AMD, window, and NPM support
    if ("undefined" !== typeof module && !! module && !! module.exports) {
        // Preserve backwards compatibility
        module.exports = function() {
            return new Scrambler();
        };
        var obj = new Scrambler();
        for (var key in obj) {
            module.exports[key] = obj[key];
        }
    } else if (typeof define === "function" && define.amd) {
        define(function() {
            return new Scrambler();
        });
    } else {
        window.scrambler = new Scrambler();
    }

}());

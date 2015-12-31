(function() {

    "use strict";

    var delay = function(time) {
        console.log('waiting a few ms...', time);
        return function () {
            var ret = new $.Deferred();
            setTimeout(function () {
                ret.resolve();
            }, time);
            return ret;
        };
    };

    var textNodesUnder = function(el) {
        var n,
            a = [],
            walk = document.createTreeWalker(
                el,
                NodeFilter.SHOW_TEXT,
                null,
                false);

        while (n = walk.nextNode())
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

        this.element = element || null;
        if (element) {
            this.originalContent = this.element.nodeValue;
        } else {
            this.originalContent = '';
        }
    };

    ElementScrambler.prototype = {

        scramble: function(randomWords) {
            this.element.nodeValue = scrambleParagraph(this.originalContent, randomWords);
        },

        restore: function() {
            this.element.nodeValue = this.originalContent;
        }

    };

    function Scrambler() {

        var _defaultLocale = 'en';
        var _scrambler = {
            timeOut: 250,
            running: false,
            scrambleElements: [],

            localizedCopy: {},
            defaultCTA: {},
            dialog: null,
            dialogTemplate: "",

            init: function(element) {
                var elements = textNodesUnder(element);
                for (var e in elements) {
                    this.scrambleElements.push(new ElementScrambler(elements[e]));
                }
            },

            run: function() {
                console.log('[Scrambler] run', this.running);
                if (this.running) {
                    var scrambler = this;
                    setTimeout(function() {
                        scrambler.scramble();
                        scrambler.run();
                    }, scrambler.timeOut);
                }
            },

            start: function() {
                this.running = true;
                this.run();
            },

            stop: function() {
                this.running = false;
            },

            scramble: function() {
                for (var es in this.scrambleElements) {
                    this.scrambleElements[es].scramble();
                }
            },

            restore: function() {
                for (var es in this.scrambleElements) {
                    this.scrambleElements[es].restore();
                }
            },

            updateCTA: function(url, img) {
                _scrambler.dialog.querySelector(".ngtv_url").setAttribute('href', url);
                _scrambler.dialog.querySelector(".ngtv_img").setAttribute('src', img);
            },

            initCTA: function(locale) {
                // load copy deck and set locale
                $.get('assets/data/copy.json', function(data) {

                    var locale = locale || _defaultLocale;
                    _scrambler.localizedCopy = data[locale];
                    _scrambler.defaultCTA = data.default;

                    console.log('copy deck loaded', locale, _scrambler.localizedCopy);

                    // load dialog template
                    $.get('assets/partials/dialog.html', function(data) {

                        _scrambler.dialogTemplate = data;
                        console.log('template loaded', _scrambler.dialogTemplate);

                        _scrambler.dialog = document.createElement("div");
                        _scrambler.dialog.className = "ngtv";
                        _scrambler.dialog.innerHTML = _scrambler.dialogTemplate;
                        _scrambler.dialog.querySelector(".ngtv_title").innerHTML = _scrambler.localizedCopy.ngtv_title;

                        _scrambler.updateCTA(_scrambler.defaultCTA.ngtv_url, _scrambler.defaultCTA.ngtv_img);
                    });

                });
            },

            showCTA: function(locale) {
                $.when()
                    .then(function() {
                        _scrambler.initCTA(locale);
                    })
                    .then(delay(500))
                    // .then(delay(5000))
                    .then(function() {
                        _scrambler.stop();
                    })
                    .then(delay(2000))
                    .then(function() {
                        console.log('open empty dialog');
                        // TODO: open empty dialog with title CTA
                        document.body.appendChild(_scrambler.dialog);
                    })
                    .then(delay(2000))
                    .then(function() {
                        console.log('fade in 1st message');
                    })
                    .then(delay(4000))
                    .then(function() {
                        console.log('fade out 1st message');
                        console.log('fade in 2nd message');
                        _scrambler.restore();
                    });

            }
        };

        // public interface
        return {
            _scrambler: _scrambler,

            scramble: function(element, showCTA) {
                // TODO: check that element is a real dom element
                console.log('[Scrambler] scramble', element);
                _scrambler.init(element);
                _scrambler.start();

                if (showCTA) {
                    this.showCTA(_defaultLocale);
                }
                return this;
            },

            stop: function() {
                console.log('[Scrambler] stop');
                _scrambler.stop();
                return this;
            },

            restore: function() {
                console.log('[Scrambler] restore');
                _scrambler.restore();
                return this;
            },

            showCTA: function(locale) {
                console.log('[Scrambler] show CTA', locale);
                _scrambler.showCTA(locale);
                return this;
            },

            go: function(locale) {
                // wrapper method, calls the whole sequence: scramble + stop + cta + restore
                console.log('[Scrambler] go', locale);
                if (locale) {
                    _defaultLocale = locale;
                }
                var body = document.getElementsByTagName('body')[0];
                this.scramble(body, true);
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

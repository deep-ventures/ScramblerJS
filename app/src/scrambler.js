(function() {

    "use strict";

    var delay = function(time) {
        console.log('[delay]', time);
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
                if (_scrambler.dialog) {
                    _scrambler.dialog.querySelector(".scrambler_url").setAttribute('href', url);
                    _scrambler.dialog.querySelector(".scrambler_img").setAttribute('src', img);
                }
            },

            _hideCTA: function() {
                if(_scrambler.dialog) {
                    document.body.removeChild(_scrambler.dialog);
                    _scrambler.dialog = null;
                }
            },

            _initCTA: function(locale) {
                // load copy deck
                $.get('assets/data/copy.json', function(data) {

                    // set localized copy and default values
                    var locale = locale || _defaultLocale;
                    _scrambler.localizedCopy = data[locale];
                    _scrambler.defaultCTA = data.default;

                    console.log('[Scrambler] copy deck loaded', locale, _scrambler.localizedCopy);

                    // load dialog template
                    $.get('assets/partials/dialog.html', function(data) {

                        _scrambler.dialogTemplate = data;
                        console.log('[Scrambler] template loaded', _scrambler.dialogTemplate);

                        // create scrambler cta container
                        _scrambler.dialog = document.createElement("div");
                        _scrambler.dialog.className = "scrambler";
                        _scrambler.dialog.innerHTML = _scrambler.dialogTemplate;

                        // set dialog localized copy
                        _scrambler.dialog.querySelector(".scrambler_title").innerHTML = _scrambler.localizedCopy.scrambler_title;
                        _scrambler.updateCTA(_scrambler.defaultCTA.scrambler_url, _scrambler.defaultCTA.scrambler_img);

                        var closeHandler = _scrambler.dialog.querySelector(".scrambler_close");
                        closeHandler.innerHTML = _scrambler.localizedCopy.scrambler_close;
                        closeHandler.addEventListener('click', _scrambler.destroy, true);
                    });

                });
            },

            showCTA: function(locale) {
                $.when()
                    .then(function() {
                        _scrambler._initCTA(locale);
                    })
                    // .then(delay(500)) // test, comment 5000
                    .then(delay(5000))
                    .then(function() {
                        _scrambler.stop();
                    })
                    .then(delay(2000))
                    .then(function() {
                        document.body.appendChild(_scrambler.dialog);
                    })
                    .then(delay(2000))
                    .then(function() {
                        var url = _scrambler.localizedCopy.scrambler_cta[0].scrambler_url;
                        var img = _scrambler.localizedCopy.scrambler_cta[0].scrambler_img;
                        _scrambler.updateCTA(url, img)
                    })
                    .then(delay(4000))
                    .then(function() {
                        var url = _scrambler.localizedCopy.scrambler_cta[1].scrambler_url;
                        var img = _scrambler.localizedCopy.scrambler_cta[1].scrambler_img;
                        _scrambler.updateCTA(url, img);
                    });
            },

            destroy: function() {
                _scrambler._hideCTA();
                _scrambler.restore();
                _scrambler.scrambleElements = [];
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
                _scrambler.destroy();
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
                this.scramble(document.querySelector('body'), true);
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

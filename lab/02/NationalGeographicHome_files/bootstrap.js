(function(window, document, undefined) {
    /*global memFragConfig, _M */
    /* jshint -W089, evil:true */

    /* Fix for console==undefined (seen on IE8, IE9 ) */
    if (!window.console) {
        window.console = {
            log: function() {},
            info: function() {},
            warn: function() {},
            error: function() {},
            assert: function() {}
        };
    }

    /* Preserve from analytics errors */
    if (window.dataLayer == null) {
        window.dataLayer = [];
    }

    /*
     * Defaults can be overridden by declaring a window.memConfig object.
     * config object contains all the defaults configuration options for the bootstrap
     */
    var staticMedia = memFragConfig.staticMedia,
        MOBILE_BP = 480,
        DESKTOP_BP = 985,
        config = {

        version: '1.3.16'.replace(/\./g, '_'),
        breakpoints: {
            mobile: MOBILE_BP,
            desktop: DESKTOP_BP,
        },

        // default value TRUE for making header not adaptative
        force_desktop: memFragConfig.force_desktop || memFragConfig.force_desktop === undefined,

        // default value FALSE to show the app-switcher burger
        show_app_switcher: memFragConfig.show_app_switcher !== undefined && memFragConfig.show_app_switcher,

        // default value TRUE to show user UI (menu, avatar, name, login/signin buttons)
        show_user_ui: memFragConfig.show_user_ui === undefined || memFragConfig.show_user_ui,

        // default value TRUE to load icongs
        load_icongs: memFragConfig.load_icongs === undefined || memFragConfig.load_icongs,

        /**
         * Buckets are a defined set of criteria which tell yepnope what files to load
         * Both mobile and medium size buckets checks also that force_desktop
         * isn't setted.
         */
        buckets : {
            bucket1 : function() {
                var tmp = window.matchMedia('(max-width: '+ MOBILE_BP +'px) and (orientation: portrait), \
                                             (max-height: '+ MOBILE_BP +'px) and (max-width: '+ DESKTOP_BP +'px) and (orientation: landscape)');
                return !config.force_desktop && tmp.matches;
            },
            bucket2 : function() {
                var tmp = window.matchMedia('(min-width: '+ (MOBILE_BP+1) +'px) and (max-width: '+ DESKTOP_BP +'px) \
                                             and (min-height: '+ (MOBILE_BP+1) +'px)');
                return !config.force_desktop && tmp.matches;
            },
            bucket3 : function() {
                var tmp = window.matchMedia('(min-width: '+ DESKTOP_BP +'px)');
                return config.force_desktop || tmp.matches;
            },
            showAppSwitcher : function() {
                /* So far the app_switcher slider should work
                   only in ~mobile, so we use bucket1 */
                return this.bucket1() && config.show_app_switcher;
            },
            showUserUI : function() {
                return config.show_user_ui;
            },
            hideUserUI : function() {
                return !this.showUserUI();
            }
        },
        modules : { // order is important!
            util : [
                staticMedia + 'js/util.js'
            ],
            config : [
                staticMedia + 'js/config.js' // main
            ],
            dependencies : [ // files needed by memfrag
                staticMedia + 'build/lib/Uri.min.js', // a plugin for handling urls
                staticMedia + 'build/lib/handlebars.runtime.js', // Handlebars runtime
                staticMedia + 'js/handlebars.helpers.js', // Handlebars helpers
                staticMedia + 'build/lib/typeahead-custom.js', // Twitter typeahead
                staticMedia + 'build/lib/underscore-min.js',
                staticMedia + 'build/lib/error.min.js', // jsErrorHandler
                staticMedia + 'build/lib/jquery.jsonp-custom.js'  // https://github.com/jaubourg/jquery-jsonp
            ],
            handlebars: [
                staticMedia + 'build/views/header.min.hbs' // multiple templates?
            ],
            ehandler : [
                staticMedia + 'js/ehandler.js'
            ],
            dialog : [ // $.Dialog jQuery plugin allows for the creation of the modals
                staticMedia + 'js/dialog.js', // dialogJS
                staticMedia + 'css/dialog.css', // dialogCss
                staticMedia + 'css/header.css'
            ],
            appswitcher : [
                'showAppSwitcher!' + staticMedia + 'js/appswitcher.js' // appSwitcher mobile
            ],
            transport : [ // the transport object is for all communication between MemFrag and mmdb + mmdbcommons
                staticMedia + 'js/transport.js' // main
            ],
            flows : [ // the flow object is what handles the entire flow between memFrag and the user'
                staticMedia + 'js/flow.js',  // main
                staticMedia + 'flows/verification.flow.js',
                staticMedia + 'flows/reset_password.flow.js',
                'bucket1!' + staticMedia + 'flows/mobile_join.flow.js',
                'bucket1!' + staticMedia + 'flows/mobile_signin.flow.js',
                staticMedia + 'flows/signin.flow.js',
                'bucket1!' + staticMedia + 'flows/mobile_register.flow.js',
                staticMedia + 'flows/native_register.flow.js',
                staticMedia + 'flows/join.flow.js',
                staticMedia + 'flows/logout.flow.js',
                staticMedia + 'flows/social_login.flow.js',
                'bucket1!' + staticMedia + 'flows/mobile_social_register.flow.js',
                staticMedia + 'flows/lucie_register.flow.js',
                staticMedia + 'flows/social_register.flow.js',
                staticMedia + 'flows/forgot_password.flow.js'
            ],
            user : [ // the user object handles user state management and data store
                staticMedia + 'js/user.js' // main
            ],
            navbar: [
                'showUserUI!' + staticMedia + 'js/navbar.js',
                'bucket1!' + staticMedia + 'build/lib/jquery.sidr.js'
            ],
            validator : [ // the validator object handles form validation
                staticMedia + 'js/validator.js' // main
            ],
            mobileregister : [
                'bucket1!' + staticMedia + 'css/mobile_modal.css' // styles to be applied
            ],
            proxy : [
                staticMedia + 'js/proxy.js' // backwards compatability proxy
            ],
            analytics: [
                staticMedia + 'build/lib/analytics.min.js', // global analytics module
                staticMedia + 'js/tracking.js' // header analytics module
            ]
        },
        polyfills : {
            /**
            * Load polyfills needed by modal windows if the given test does not pass
            * Uses a custom build of Modernizr, defined in Gruntfile.js
            * Provide just the test name as a quoted string (i.e. use 'placeholder' for Modernizr.placeholder)
            *  along with a comma separated array of files to load if test does not return true
            * Tests will be tried as a Modernizr test first, then checked against the global namespace
            */
            'placeholder': [
                staticMedia + 'build/lib/Placeholders.min.js' // http://jamesallardice.github.io/Placeholders.js/
            ],
            'matchMedia': [
                staticMedia + 'build/lib/matchMedia.js' // https://github.com/paulirish/matchMedia.js/
            ],
            'cssremunit': [
                staticMedia + 'build/lib/rem.min.js' // https://github.com/chuckcarpenter/REM-unit-polyfill
            ]
        },
        built : [
                staticMedia + 'css/header.css',
                staticMedia + 'build/lib/error.min.js', // jsErrorHandler
                staticMedia + 'build/lib/handlebars.runtime.js', // runtime
                staticMedia + 'build/lib/underscore-min.js', // Underscore
                staticMedia + 'build/lib/Uri.min.js', // a plugin for handling urls
                staticMedia + 'build/views/header.min.hbs', // multiple templates?
                staticMedia + 'build/lib/typeahead-custom.js', // Twitter typeahead
                staticMedia + 'build/lib/analytics.min.js', // global analytics module
                'showUserUI!' + staticMedia + 'build/ngs-header.min.js', // header build
                'hideUserUI!' + staticMedia + 'build/ngs-header.no-userui.min.js', // header build without user UI
                staticMedia + 'build/lib/jquery.jsonp-custom.js',  // https://github.com/jaubourg/jquery-jsonp
                'bucket1!' + staticMedia + 'css/mobile_modal.css',
                'bucket1!' + staticMedia + 'build/lib/jquery.sidr.js',
                'showAppSwitcher!' + staticMedia + 'js/appswitcher.js', // appSwitcher mobile
                staticMedia + 'css/dialog.css' // dialogCss
            ]
        };

    function MemFrag() {
        if ( MemFrag.prototype._singletonInstance ) {
            return MemFrag.prototype._singletonInstance;
        }
        var self = this,
            $ = null,
            yn = false,
            modulesLoaded = false,
            polyfillsLoaded = false,
            lvlCallbacks = [],
            lvlArguments = [],
            externalCallbacks = [],
            externalArguments = [],
            jqCallbacks = null,
            dfd = null,
            MH = new ModuleHandler();

        if (typeof self === 'undefined') {
            self = new MemFrag();
        }

        MemFrag.prototype._singletonInstance = self;

        // PRIVATE METHODS
        /**
         * Checks if any of the buckets defined match the current resources requested to load
         * If they don't, it bypasses the bucket request
         * @param  {[type]} bucketQuery [description]
         * @param  {[type]} resourceObj [description]
         * @todo edit DOCBLOCK
         */
        // function bucketChange(bucketQuery, resourceObj) {
        //  if (!bucketQuery.matches) {
        //      resourceObj.bypass = true;
        //  }
        //  }
        /**
         * Loads dependencies via yepnope
         * @param  {Object} yn -> window.yepnope object
         * @async on complete calls next procedure
         */
        function loadDependencies(yn, $, dfd) {
            yn([
                {
                    //test: (_M.$ !== undefined),
                    load: staticMedia + 'build/lib/jquery.min.js?v='+config.version,
                    complete: function () {
                        $ = window.jQuery.noConflict(true);
                        _M.$ = $;
                        dfd = new $.Deferred();
                    }
                },
                {
                    test: modulesLoaded,
                    nope: loadModules(),
                    complete: function () {
                        modulesLoaded = true;
                        processLvlCallbacks($);
                        memFragReady($, dfd);
                    }
                }
            ]);
        }

        /**
         * Load yepnope
         */
        function loadYN(yn) {

            /* Workaround, see GN-451 */
            var css_workaround = 'html > object { position: absolute; display: none; visibility: hidden }',
                style_tag = document.createElement('style');
            if (style_tag.styleSheet) {
                style_tag.styleSheet.cssText = css_workaround;
            } else {
                style_tag.appendChild(document.createTextNode(css_workaround));
            };
            document.head.appendChild(style_tag);

            if (!yn) {
                (function () {
                    var yn = document.createElement('script'),
                        ynS = document.head || document.body || document.documentElement;
                    yn.async = true;
                    if (yn.addEventListener) {
                        yn.addEventListener('load', function () {
                            ynReady();
                        });
                    } else if (yn.onreadystatechange !== undefined) {
                    // Added for IE8 otherwise it won't know that we're ready
                        yn.onreadystatechange = function () {
                            if (this.readyState === 'loaded') {
                                yn = window.yepnope;
                                _M.yn = yn;
                                ynReady();
                            }
                        };
                    }
                    yn.src = staticMedia + 'build/lib/yepnope.1.5.4-min.js';
                    ynS.appendChild(yn);
                })();
            }
        }

        /**
         * Load custom build of Modernizr
         */
        function loadModernizr(cm) {
            if (!cm) {
                (function () {
                    var cm = document.createElement('script'),
                        cmS = document.head || document.body || document.documentElement;
                    cm.async = true;
                    if (cm.addEventListener) {
                        cm.addEventListener('load', function () {
                            cm = window.Modernizr;
                            cmReady(cm);
                        });
                    } else if (cm.onreadystatechange !== undefined) {
                    // Added for IE8 otherwise it won't know that we're ready
                        cm.onreadystatechange = function () {
                            if (this.readyState === 'loaded') {
                                cm = window.Modernizr;
                                _M.cm = cm;
                                cmReady(window.Modernizr);
                            }
                        };
                    }
                    cm.src = staticMedia + 'build/lib/modernizr-custom.js?v='+config.version;
                    cmS.appendChild(cm);
                })();
            }
        }
        /**
         * Fire event and resolve memFrag ready deferred + fire callbacks
         * @async @return dfd.resolve()
         */
        function memFragReady($, dfd) {
            $(window).trigger('memFragReady');
            $.when(dfd).done(function() {
                processExternalCallbacks($);
            });
            dfd.resolve();
            // memFrag Ready
        }
        function addCacheBoost(urls){
            for (var i=0; i<urls.length; i++) {
                urls[i] += '?v='+config.version;
            }
            return urls;
        }

        /**
         * Takes the list of modules from the memFrag config object and creates a combined array
         * @return {Array} Array of modules to load for yepnope
         */
        function modules2array(modules) {
            var combined = [], prop;
            for (prop in modules) {
                if (modules.hasOwnProperty(prop)) {
                    combined = combined.concat(modules[prop]);
                }
            }
            return addCacheBoost(combined);
        }

        function loadModules() {
            if (config.load_icongs) {
                config.modules.dialog.push('./css/icongs.css');
            }

            // Debug True/False
            if (memFragConfig.debug) {
                return modules2array(config.modules);
            }
            else {
                return modules2array(config.built);
            }
        }

        /**
         * Fix for IE9. Wait until yepnope is loaded.
         * Cannot use Deferred function because jquery is not loaded yet.
         */
        function setWindowYn (urlList) {
            if (window.yepnope === undefined) {
                setTimeout(function(){setWindowYn(urlList);}, 20);
            } else {
                window.yepnope({load: urlList});
                polyfillsLoaded = true;
            }
        }

        function loadPolyfills(cm) {
            var urlList, test, urls, link, cp;
            // Load polyfills that will be accessible for all modals
            cp = config.polyfills;

            for (test in cp) {
                if (cp.hasOwnProperty(test)) {
                    urls = cp[test];
                    urlList = [];
                    for (link in urls) {
                        if (urls.hasOwnProperty(link)) {
                            // load each of the dependencies to load the polyfills
                            urlList.push(urls[link]);
                        }
                    }

                    if (!cm[test]) {
                        // Test fails
                        if (cm[test] === undefined ){
                            // Test may not be a Modernizr test
                            if (!window[test]) {
                                setWindowYn(urlList);
                            }
                        } else {
                            setWindowYn(urlList);
                        }
                    }
                }
            }
        }

        function prefixControl(resourceObj) {
            if(config.buckets[resourceObj.prefixes[0]]) {
                if(typeof config.buckets[resourceObj.prefixes[0]] === 'function') {
                    if (!config.buckets[resourceObj.prefixes[0]]()) {
                        resourceObj.bypass = true;
                    }
                }
                else if(typeof config.buckets[resourceObj.prefixes[0]] === 'object') {
                    console.error('Please define buckets as functions or evaluations returning a boolean::', resourceObj.prefixes[0], 'is an object');
                    resourceObj.bypass = true;
                }
                else if(!eval(config.buckets[resourceObj.prefixes[0]])) {
                    resourceObj.bypass = true;
                }
            }
            return resourceObj;
        }

        function processLvlCallbacks($) {
            var lvl, fn;
            jqCallbacks = new $.Callbacks('unique memory');
            for (lvl in lvlCallbacks) {
                for (fn in lvlCallbacks[lvl]) {
                    if (lvlCallbacks[lvl].hasOwnProperty(fn)) {
                        jqCallbacks.fire(MH, lvlArguments[lvl][fn]);
                        jqCallbacks.add(lvlCallbacks[lvl][fn]);
                        jqCallbacks.remove(lvlCallbacks[lvl][fn]);
                    }
                }
            }
            jqCallbacks.fire();
        }

        function processExternalCallbacks($) {
            jqCallbacks = new $.Callbacks('unique memory');
            for (var fn in externalCallbacks) {
                if (externalCallbacks.hasOwnProperty(fn)) {
                    try {
                        jqCallbacks.fire(MH, externalArguments[fn]);
                        jqCallbacks.add(externalCallbacks[fn]);
                        jqCallbacks.remove(externalCallbacks[fn]);
                    } catch(e) {
                        if (typeof e.stack !== 'undefined') {
                            console.log('External Callback Error: ', e.stack);
                        } else {
                            console.log('External Callback Error: ', e.description);
                        }
                    }
                }
            }
            jqCallbacks.fire();
        }
        /**
         * [ynReady description]
         * @param  {[type]} yn
         * @return {[type]}
         */
        function ynReady() {
            if(window.matchMedia === undefined){
                setTimeout(ynReady, 20);
            } else {
                yn = window.yepnope;
                var bucket, cb; // work on buckets to make them load differently
                cb = config.buckets;
                for (bucket in cb) {
                    if (cb.hasOwnProperty(bucket)) {
                        yn.addPrefix(bucket, prefixControl);
                    }
                }
                loadDependencies(yn);
            }
        }

        // Run polyfill tests once Modernizr has loaded
        function cmReady(cm) {
            if (!polyfillsLoaded) {
                loadPolyfills(cm);
                polyfillsLoaded = true;
            }
        }

        // INIT
        loadYN(); // load YepNope which loads dependencies
        loadModernizr(); // load Modernizr custom build
        // API
        return {
            /**
             * Attaches modules to the ModuleHanlder, which is returned to each callback fired onReady()
             * @param  {String} name   The name of the module you'd like to attach
             * @param  {Object} object The module object you're attaching
             */
            attach: function(name, object) {
                if(!MH[name]) {
                    MH[name] = object;
                }
                else {
                    throw 'That module has already been attached';
                }
            },
            /**
             * Returns whether or not memFrag call backs had already been fired
             * @return {Boolean} [True/False - Fired/Not Fired]
             */
            fired: function() {
                return jqCallbacks.fired();
            },

            load: function(module) { //load a specific memfrag module
                return this.require(config.modules[module]);
            },
            /**
             * A callback handler for memFrag
             * Once the header has loaded all dependencies, the callbacks will fire
             * @param  {Function} fn [callback]
             */
            ready: function(callback, data, internal) {
                // Unfortunately, we have to do this because we can't control
                // what outside callbacks might do
                // jQuery doesn't currently fix this internally
                // so atleast we address it like so
                // however, this also means that we don't really need jQuery.Callbacks()
                // at the moment, so it will be redacted with a future ticket

                var wrap = function() {
                    try {
                        callback.apply(null, arguments);
                    } catch(e) {
                        if (typeof e.stack !== 'undefined') {
                            console.log('Callback Error: ', e.stack);
                        } else {
                            console.log('Callback Error: ', e.description);
                        }
                    }
                };
                if(jqCallbacks === null) {
                    if(data === undefined) {
                        data = null;
                    }
                    if(internal) {
                        if(!lvlCallbacks[internal]) {
                            lvlCallbacks[internal] = [];
                            lvlArguments[internal] = [];
                        }
                        lvlCallbacks[internal].push(wrap);
                        lvlArguments[internal].push(data);
                    }
                    else {
                        externalCallbacks.push(wrap);
                        externalArguments.push(data);
                    }
                }
                else {
                    if(data === undefined) {
                        data = null;
                    }
                    jqCallbacks.fire(MH, data);
                    jqCallbacks.add(wrap);
                    jqCallbacks.remove(wrap);
                }
            },
            /**
             * A memFrag interface to window.yepnope
             * @beta require() references window.yepnope instead of memFrag.yn because yepnope's
             *       code registers the loader property onto the global scope and not namespaced
             * @param  String/Array requirementsObj A string or array containing files to be loaded async via yepnope
             * @return promise obj ($.Deferred->promise())
             */
            require: function(requirementsObj) {
                var $def = new _M.$.Deferred();
                window.yepnope({
                    load: requirementsObj,
                    complete: function() { $def.resolve(); }
                });
                setTimeout(function() { // a timeout for the load set to 10 secs
                    if($def.state() !== 'resolved') { $def.reject(); }
                }, 10000);
                return $def.promise();
            },

            getConfig: function(configName){
                return config[configName];
            }
        };
    }

    function ModuleHandler() {
        if ( ModuleHandler.prototype._singletonInstance ) {
            return ModuleHandler.prototype._singletonInstance;
        }

        var self = this;

        if (typeof self === 'undefined') {
            self = new ModuleHandler();
        }

        ModuleHandler.prototype._singletonInstance = self;
    }

    window._M = new MemFrag();

})(window, document, undefined);

[![Build Status](https://travis-ci.org/RufousWork/ScramblerJS.svg?branch=develop)](https://travis-ci.org/RufousWork/ScramblerJS)

# ScramblerJS

a simple JS library to scramble words on a web page.

the app scrambles all text sub-nodes defined by the selector used to launch it (see below usage instructions) but keeps the order of words, in addition to leaving the first and last letter of each word in the right order, roughly following the famous quote:

> Aoccdrnig to a rscheearch at Cmabrigde Uinervtisy, it deosn't mttaer in waht oredr the ltteers in a wrod are, the olny iprmoetnt tihng is taht the frist and lsat ltteer be at the rghit pclae. The rset can be a toatl mses and you can sitll raed it wouthit porbelm. Tihs is bcuseae the huamn mnid deos not raed ervey lteter by istlef, but the wrod as a wlohe.
> [[source]](https://www.mrc-cbu.cam.ac.uk/personal/matt.davis/Cmabrigde/)

The text animates remaining partially scrambled for a defined set of iterations before returning to the initial condition. It also optionally displays a localized CTA in a dialog box.

An API is provided to fully control all the steps.

## Installation

clone the repo then:

    cd app
    npm install
    gulp build-all

this creates a set of compiled assets under `/app/build`, the relevant files being:

- `scrambler.js` the compiled javascript
- the `/assets` folder containing
    - `data/copy.json` for (optional) localized messages of the CTA
    - `img/*.png` images displayed in the (optional) CTA
    - `partials/dialog.html` HTML partial used for the (optional) dialog CTA

## Usage

open the `app/buil/demo.html` in a browser to run the example. The API can be used as follows:

**1. add libraries to your html**

    <!-- jquery is required only to show the CTA, i.e. when calling scrambler.go -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="scrambler.js"></script>

**2a. call the API**

- select the root element that needs to be scrambled, e.g.: `el = document.querySelector('.article')` or `el = document.querySelector('body')` for the whole page
- initialize and start the scrambler: `scrambler.scramble(el)` Note! the CTA at the end of the scrambling (read below) can be shown automatically by passing a boolean parameter, e.g. `scrambler.scramble(el, true)`
- stop the scrambler: `scrambler.stop()`
- show the CTA passing a locale: `scrambler.showCTA('en')`
- restore the original text: `scrambler.restore()`

**2b. quick launch**

- the whole sequence `select body -> scramble -> stop -> show CTA -> restore` can be run by issuing the shortcut command `go` passing a locale for the CTA e.g.: `scrambler.go('en')`


**Note 1.** The scrambler can work without jquery. Jquery is only used to show the CTA with defined timings and localized copy.

**Note 2.** All the copy elements and image references shown in the CTA are defined in file copy.json. To create a localized version (e.g. for a new locale) just copy the `en` object and give it a new prefix, then use the newly created prefix to run the CTA function, e.g. `scrambler.showCTA('fr')`


## Development

to run tests and watch task:

    gulp

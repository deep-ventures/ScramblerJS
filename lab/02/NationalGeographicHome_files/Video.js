
/*
 * Wait for the $pdk object to be defined before creating the player
 */

(function() {
  var createPlayer, createPlayerWhenPdkLoaded, cssPath, handleEvent, jsPath, layoutPath, loadPDK, ngPdkPlayerlocation, pdkPath, playerColors, playerPlugins, playerSkin, skinPath;

  createPlayerWhenPdkLoaded = function() {
    if (typeof $pdk !== "object") {
      return window.setTimeout(createPlayerWhenPdkLoaded, 1);
    } else {
      if (!window.DOTCOM.pdkCreated) {
        $pdk.controller.addEventListener("OnPlayerLoaded", function() {
          return window.ngPlayerReady = true;
        });
        return createPlayer();
      }
    }
  };


  /*
   * Inject the necessary fields in the the host page
   */

  loadPDK = function() {
    var div, link, meta, script;
    meta = document.createElement("meta");
    meta.name = "tp:PreferredRuntimes";
    meta.content = "HTML5,Flash";
    document.head.appendChild(meta);
    meta = document.createElement("meta");
    meta.name = "tp:PreferredFormats";
    meta.content = "MPEG4,F4M,FLV,M3U";
    document.head.appendChild(meta);
    meta = document.createElement("meta");
    meta.name = "tp:initialize";
    meta.content = "true";
    document.head.appendChild(meta);
    meta = document.createElement("meta");
    meta.name = "tp:EnableExternalController";
    meta.content = "true";
    document.head.appendChild(meta);
    meta = document.createElement("meta");
    meta.name = "tp:baseUrl";
    meta.content = pdkPath + "/pdk/";
    document.head.appendChild(meta);
    script = document.createElement("script");
    script.type = "text/javascript";
    script.src = pdkPath + "/pdk/tpPdk.js";
    document.head.appendChild(script);
    link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssPath + "/video.css";
    document.head.appendChild(link);
    div = document.createElement("div");
    div.id = "player";
    return document.getElementById("playerjs0").parentNode.appendChild(div);
  };


  /*
   * Create the player
   * @param playerLocation The id of the div where the player should be placed
   */

  createPlayer = function() {
    var player, playerLocation;
    window.DOTCOM.pdkCreated = true;
    playerLocation = "player";
    player = new Player(playerLocation);
    player.fp.bgcolor = "0x131313";
    player.fa.scale = "noscale";
    player.wmode = "opaque";
    player.allowFullScreen = "true";
    player.autoplay = "true";
    player.allowLink = "true";
    player.embeddedPlayerHTML = "<iframe src=\"" + document.location.href + "\" width=\"640\" height=\"360\" frameBorder=\"0\" seamless=\"seamless\" allowFullScreen></iframe>";
    player.playAll = "false";
    playerSkin(player);
    playerColors(player);
    playerPlugins(player);
    player.bind();
    return $('.close--player').on('click', function(e) {
      e.preventDefault();
      window.closePlayer();
      if (window.DOTCOM.app) {
        return window.DOTCOM.app.navigate('/', {
          trigger: false
        });
      }
    });
  };


  /*
   * Set the player's skin
   * @param player
   */

  playerSkin = function(player) {
    player.skinUrl = skinPath + "/glass/glass-ngs.json";
    return player.layoutUrl = layoutPath + "/metaLayout_ngsPlayer.xml";
  };


  /*
   * Set the player's colors
   * @param player
   */

  playerColors = function(player) {
    player.backgroundColor = "0x061423";
    player.controlBackgroundColor = "0x061423";
    player.controlColor = "0xf8f8f8";
    player.controlFrameColor = "0x1a2735";
    player.controlHoverColor = "0x061423";
    player.controlSelectedColor = "0xf8f8f8";
    player.frameColor = "0xf8f8f8";
    player.pageBackgroundColor = "0x061423";
    player.playProgressColor = "0x061423";
    player.scrubberColor = "0x061423";
    player.scrubberFrameColor = "0x061423";
    player.scrubTrackColor = "0x061423";
    player.textBackgroundColor = "0x000000";
    player.textColor = "0xf8f8f8";
    player.loadProgressColor = "0x061423";
    return player.overlayColor = "0xf8f8f8";
  };


  /*
   * Set the player's plugins
   * @param player
   */

  playerPlugins = function(player) {
    player.plugin1 = "type=content|url=" + pdkPath + "/pdk/swf/akamaiHD.swf|fallback=switch%3Dprogressive|enableDVR=true|priority=1|manifest=true|hosts=ngs-vh.akamaihd.net|fireAllCuePoints=true";
    player.plugin2 = "type=content|url=" + pdkPath + "/pdk/js/plugins/akamaiHD.js|fallback=switch%3Dprogressive|enableDVR=true|priority=1|manifest=true|hosts=ngs-vh.akamaihd.net|fireAllCuePoints";
    player.plugin3 = "type=reporting|url=http://livepassdl.conviva.com/thePlatform/ConvivaThePlatformPlugin_5_0_5.swf?customerId=c3.theplatform|customerId=c3.TP-NationalGeographic|priority=1|cdnName=OTHER|serviceUrl=http%3A%2F%2Flivepass.conviva.com";
    player.plugin4 = "type=reporting|url=http://livepassdl.conviva.com/thePlatform/ConvivaThePlatformPlugin.js|customerId=c3.TP-NationalGeographic|priority=1|cdnName=OTHER|serviceUrl=http%3A%2F%2Flivepass.conviva.com";
    player.plugin5 = "type=ad|url=http://pdk.theplatform.com/pdk/swf/vast.swf|priority=1|hosts=pubads.g.doubleclick.net";
    return player.plugin6 = "type=ad|url=http://pdk.theplatform.com/pdk/js/plugins/vast.js|priority=1|hosts=pubads.g.doubleclick.net";
  };


  /*
   * Handle events
   * @param e //object from the event
   */

  handleEvent = function(e) {
    switch (e.type) {
      case "OnPlayerLoaded":
        window.ngPlayerReady = true;
        return $('body').trigger('pdkLoaded');
    }
  };

  window.gotFeedResponse = function(json) {
    var element, releaseUrl;
    releaseUrl = "";
    element = document.getElementById("getFeed");
    element.parentNode.removeChild(element);
    if (json.entryCount > 0) {
      if (json.entries.length > 0) {
        releaseUrl = json.entries[0].content[0].url;
        window.setVideo(releaseUrl);
      }
      switch (loadSet) {
        case "LOAD":
          return loadVideo(releaseUrl);
        case "SET":
          return setVideo(releaseUrl);
      }
    }
  };

  window.getReleaseUrlByGuid = function(g) {
    var addParam, query, tag;
    query = g.feed + "?byGuid=" + g.guid;
    addParam = "";
    if (!navigator.userAgent.match(/(iPhone);.*CPU.*OS 7_\d/i)) {
      addParam = "%26policy%3D45976";
    }
    query += "&form=cjson&params=mbr%3dtrue" + addParam + "%26player%3dhomepage";
    tag = document.createElement("script");
    tag.id = "getFeed";
    tag.src = query + "&fields=content&fileFields=url&callback=gotFeedResponse";
    return document.getElementsByTagName("head")[0].appendChild(tag);
  };

  ngPdkPlayerlocation = "http://player.d.nationalgeographic.com";

  pdkPath = ngPdkPlayerlocation + "/assets/pdk/5.3.6";

  jsPath = ngPdkPlayerlocation + "/players/homepage/js";

  cssPath = ngPdkPlayerlocation + "/players/homepage/css";

  skinPath = ngPdkPlayerlocation + "/players/homepage/pdk/skins";

  layoutPath = ngPdkPlayerlocation + "/players/homepage/data";

  window.onload = loadPDK;

  createPlayerWhenPdkLoaded();

  window.setVideo = function($val) {
    return $pdk.controller.setReleaseURL($val, true);
  };

  window.resetPlayer = function() {
    $pdk.controller.nextClip();
    return $pdk.controller.resetPlayer();
  };

  window.loadByGuid = function(g) {
    var releaseUrl;
    window.loadSet = "LOAD";
    resetPlayer();
    return releaseUrl = getReleaseUrlByGuid(g);
  };

  window.setByGuid = function(g) {
    var releaseUrl;
    window.loadSet = "SET";
    resetPlayer();
    return releaseUrl = getReleaseUrlByGuid(g);
  };

  window.positionModal = function() {
    var $closeBtn, $player, $win, css, height, left, top, width;
    $win = $(window);
    width = $win.width();
    height = Math.floor(width * 9 / 16);
    $player = $('#player');
    if (width > 990) {
      height = 557;
      css = {
        width: '990px',
        'margin-left': -990 / 2,
        left: '50%'
      };
    } else {
      height = Math.floor(width * 9 / 16);
      css = {
        width: '100%',
        'margin-left': 0,
        left: '0'
      };
    }
    css.top = '50%';
    css.height = height + 'px';
    css['margin-top'] = -height / 2;
    $closeBtn = $('.player--overlay').find('a.close--player');
    top = 0;
    left = 'auto';
    $closeBtn.css({
      top: top,
      left: left,
      rigth: 0
    });
    return $player.css(css);
  };

  window.loadVideo = function(releaseURL, feedURL, feedGUID, className) {
    window.resetPlayer();
    if (feedGUID && feedURL) {
      window.setByGuid({
        'guid': feedGUID,
        'feed': feedURL
      });
      return $('.player--overlay').addClass(className).removeClass('visuallyhidden');
    } else if (releaseURL) {
      window.setVideo(releaseURL);
      return $('.player--overlay').addClass(className).removeClass('visuallyhidden');
    }
  };

  window.openPlayerModal = function(releaseURL, feedURL, feedGUID) {
    if (feedGUID && feedURL) {
      window.positionModal();
      return window.loadVideo(releaseURL, feedURL, feedGUID, 'video--modal');
    } else if (releaseURL) {
      window.positionModal();
      return window.loadVideo(releaseURL, feedURL, feedGUID, 'video--modal');
    } else {
      return false;
    }
  };

  window.positionInlinePlayer = function($tease) {
    var $closeBtn, $player, left, top;
    $player = $('#player');
    $player.css({
      height: $tease.height(),
      width: $tease.width(),
      left: $tease.offset().left,
      top: $tease.offset().top
    });
    $closeBtn = $('.player--overlay').find('a.close--player');
    top = $tease.offset().top;
    left = $tease.offset().left + $tease.width() - 42;
    return $closeBtn.css({
      top: top,
      left: left
    });
  };

  window.openPlayerInline = function($tease, releaseURL, feedURL, feedGUID) {
    window.positionInlinePlayer($tease);
    return window.loadVideo(releaseURL, feedURL, feedGUID, 'video--inline');
  };

  window.closePlayer = function() {
    if (typeof $pdk !== 'undefined') {
      $pdk.controller.resetPlayer();
    }
    return $('.player--overlay').addClass('visuallyhidden').removeClass('video--inline').removeClass('video--modal').find('#player').removeAttr('style').end();
  };

}).call(this);

window.__tp_pdk_set_versions = function() {
	$pdk.expectedVersions = {};
	$pdk.version = new $pdk.PdkVersion("5", "3", "6", "325980", "2013-12-12 2:33 PM");
$pdk.expectedVersions.bootloaderVersion = new $pdk.PdkVersion("5", "3", "6", "325980", "2013-12-12 2:17 PM");
$pdk.expectedVersions.gwtVersion = new $pdk.PdkVersion("5", "3", "6", "325980", "2013-12-12 2:17 PM");

$pdk.expectedVersions.flexVersion = new $pdk.PdkVersion("5", "3", "6", "325980", "2013-12-12 2:17 PM");
};
(function(){var v='',G='.',x='/',B='[object Array]',E='boolean',z='function',H='js.com.theplatform.pdk',A='js/app',D='number',y='object',w='script',C='string',F='undefined';var j=navigator.userAgent.toLowerCase(),k=function(a){return a.test(j)},l=k(/opera/),m=!l&&k(/msie/),n=m&&k(/trident\/5.0/),o=m&&k(/msie 6/),p=k(/webkit/),q=k(/chrome/),r=k(/android/),s=k(/windows|win32/),t,u=v;try{t=document.getElementsByTagName(w);u=t[t.length-1].src.substr(0,t[t.length-1].src.lastIndexOf(x))}catch(a){u=v}if(window.$pdk===null||typeof window.$pdk!==y&&typeof window.$pdk!==z){window.$pdk={bootloader_version:1}}$pdk.apply=function(a,b,c){if(c){$pdk.apply(a,c)}if(a&&(b&&typeof b==y)){for(var d in b){a[d]=b[d]}}return a};$pdk.apply($pdk,{isOpera:l,isIE:m,isIE9:n,isIE6:o,isWebKit:p,isChrome:q,isAndroid:r,isWindows:s,scriptRoot:u,defaultAppJsRoot:A,isArray:function(a){return Object.prototype.toString.apply(a)===B},isEmpty:function(a,b){return a===null||(a===undefined||($pdk.isArray(a)&&!a.length||(!b?a===v:false)))},isPrimitive:function(a){var b=typeof a;return b==C||(b==D||b==E)},isObject:function(a){return a&&typeof a==y},tupleComp:function(a,b,c){var d=-1,e,f=a.length;for(e=0;e<f;e++){d=c(a[e],b[e]);if(d!==0){break}}return d},each:function(a,b,c){if($pdk.isEmpty(a,true)){return}if(typeof a.length==F||$pdk.isPrimitive(a)){a=[a]}for(var d=0,e=a.length;d<e;d++){if(b.call(c||a[d],a[d],d,a)===false){return d}}},ns:function(){var c,d,e=window;try{e=$wnd!==null&&typeof $wnd===y?$wnd:window}catch(a){e=window}$pdk.each(arguments,function(b){d=b.split(G);c=e[d[0]]=e[d[0]]||{};$pdk.each(d.slice(1),function(a){c=c[a]=c[a]||{}})});return c},override:function(a,b){if(b){var c=a.prototype;$pdk.apply(c,b);if($pdk.isIE&&b.toString!=a.toString){c.toString=b.toString}}},extend:function(){var h=function(a){for(var b in a){this[b]=a[b]}};var i=Object.prototype.constructor;return function(b,c,d){if($pdk.isObject(c)){d=c;c=b;b=d.constructor!=i?d.constructor:function(){c.apply(this,arguments)}}var e=function(){},f,g=c.prototype;e.prototype=g;f=b.prototype=new e;f.constructor=b;b.superclass=g;if(g.constructor==i){g.constructor=c}b.override=function(a){$pdk.override(b,a)};f.superclass=f.supr=function(){return g};f.override=h;$pdk.override(b,d);b.extend=function(a){$pdk.extend(b,a)};return b}}(),isDomReady:function(){if($pdk.isEmpty(document.readyState)){return !$pdk.isEmpty(document.body)}return /loaded|complete/.test(document.readyState)}});$pdk.ns(H);js.com.theplatform.pdk=$pdk}());function PDK(){var bb='',$d='\n-',yb='" for "gwt:onLoadErrorFn"',wb='" for "gwt:onPropertyErrorFn"',Nd='"<script src=\\"',jb='"><\/script>',_='#',Zd=');',Rd='-\n',_d='-><\/scr',ee='.cache.js',Od='.cache.js\\"><\/scr" + "ipt>"',Q='/',mb='//',nc='02DDD3A725C42463E20DEB561D06B9C6',pc='03DB782886C9519F9AF38D86F19EC7B9',qc='054C043576979BE36873DAC76DEB904D',rc='07BAF4A86A819E1A5EAC2DDC77465D2D',sc='167E869ACD6833F791008A5EC18CBDC7',tc='254D2FF26DDAF6AC86D74FE69A0866C3',uc='25FECFB6E3529A89C4645AFBCAB85992',vc='28154FA5175F4261C6F76FB6D54739EB',wc='3A23352D6826EF88C0DF0B186152EC12',xc='3E0ABD06F372595AC1EDDC7B0C9A7333',yc='426C4AF6EC752E478F0FA6BEAA10B7E2',zc='43D07D55DCA6646CB6FCB6F3B1174860',Ac='445FAE660AAFDE8B0ED1273D73CAF7A5',Bc='44CAF659FA557CF5B3BFA09145771C0F',Cc='4511E9DB8F6D87C7FB8431C0F1C52763',Dc='46CB07FBAE3683FA8D9F197A26C628B6',Ec='477CEB8D4F54BD87DE57243639594AA3',Fc='497A139437E6E2336FC3A9BA648F6AC3',Gc='519BD9C8315F1271367245647C8DC86D',Hc='55278AFD209438B01604B023274FD49B',Ic='557DEB4385F7B6587807DD8212008624',Jc='56D1FDA3282E64038165DF306273D99B',Kc='58210C4479DADD026CB5954C3AF7AE80',Lc='5E50BAB14BE45241569EECFB31F65FE2',Mc='5E806A511674798BB33BA71092E6157B',Nc='6031BB458BADFB4F54857EF2EAD8D47B',Oc='658A79C255DD9E72D617E60460D3749E',Pc='6739E1B21053C5F09D02CDFE2C4773F7',Qc='729F6628C96FB6556DCA732FE33006D1',Rc='72F5355A4E0A29A511AA457E88855573',Sc='73478729FEC1DCC7A4545159DAE7AD08',Tc='7DB94BBE960EA548D6FEB8F622CE77A7',Uc='83572569DD7DD0BED6E4636BDF710403',Vc='8709A786CF3854788732760EFBC3910B',Wc='8851D969D27B6572AA90CBED18312B6A',Xc='8B1FB065C40A747BC13EC697E261B0E0',Yc='8F8B4BCE879F5F361FEB90815DB5D2BF',Zc='9A09B398493628E7FBA86C280ED0B9FD',$c='9AF7EDF04E65E163D9885AC4AF1E6E4B',Kd=':',oc=':1',qb='::',Pd='<scr',ib='<script id="',tb='=',ab='?',_c='A27478B7760B3CDA8ADC1E3D127D6F71',ad='A306B597A34E2342AAD45D540E0F2F99',bd='A3A39550520923BF23AEDC3D96472F31',cd='A420EF628CD0D8B4CE999A417DF392CE',dd='AAC5D5AF2C7C2800C468ADD69E387B08',ed='B0284FB205E6E1F7D9E5B94CFE7944A3',fd='B1EE6CD1D8DAE1F18662092786E112C2',gd='B7B84D2FF1C5F80608397982476DA96F',hd='B84627456C39AE6083AC5D789D8E7C62',id='BD33636630B243DBB3ED058E6571646E',jd='BD49B68FA2D8CFE52D95CF72152D04FA',vb='Bad handler "',kd='C916C4ED8EB746AF9C0F743316FAD4B9',ld='CA173EF1B6EC7277863EA48F9616E1B6',md='CB1EE1498352B38C31019FD9F9FBDA07',nd='CC70163881682FB35221BA5A551A1FF0',od='CC8E686FF7C482CC91498821452A0730',pd='CDB4F7B37FF1BE5EB93C12964F42CADC',kc='Cross-site hosted mode not yet implemented. See issue ',qd='D482366934E363EB2C84FB5711AB4393',rd='DC1F671DBEA37A6667FB0EA22BF2E9C0',sd='DC743524AD21C41CCA8AB5A276B72449',td='DEDE0FA2350A4D3CDB96CB899D482996',ud='DF38234AE5983F26C5131A59295FB224',Ld='DOMContentLoaded',vd='E009A6409E9DB9A1D6918A34E1987089',wd='E06FC3846C37CAD766D5CDC0A5A76BEB',xd='E4D6D3643C28461CE4577E137BEDAA1F',yd='E67C5A0CF7C2645595F423BC294D6809',zd='EEF6EE8ADF120D6C61D88A882D55E820',Ad='EF8F1A8B88D7DD2FC421969891F3B482',Bd='F2225C1564A3D564B7A96F7FE8DE30A2',Cd='F351F783B9E7FE80406B2B5B8581C07C',Dd='F3D7978B53E4FB23A4B6AB4467591711',Ed='F5BA9697113E70AB85FE1E191E7CBC02',Fd='F983AE19F96F2088EF247E632F7015B9',Gd='FCC274E9CF35BF89BCFCA2DCB30AAAC2',Hd='FCC293456192462A7CFEA5A73751880D',Id='FDC5C8843BFE13A093556C7795A99043',Jd='FF00A6403955EC2DC36ABE647AA41430',R='PDK',gb='PDK.nocache.js',pb='PDK::',kb='SCRIPT',hb='__gwt_marker_PDK',Hb='android',Kb='android 2',Lb='android 3.0',lb='base',eb='baseUrl',U='begin',T='bootstrap',Ib='chrome',Jb='chrome_android',Zb='chrome_mac',$b='chrome_windows',db='clear.cache.gif',sb='content',Yd='document.write(',$='end',Ud='evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),',Wd='evtGroup: "moduleStartup", millis:(new Date()).getTime(),',Fb='false',gc='gecko',jc='gecko1_8',ic='gecko1_8_mac',hc='gecko1_8_windows',W='gwt.codesvr=',X='gwt.hosted=',Y='gwt.hybrid',xb='gwt:onLoadErrorFn',ub='gwt:onPropertyErrorFn',rb='gwt:property',zb='hasFlash',Ab='hasJquery',ce='head',Db='html5',lc='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',cc='ie10',bc='ie10_app',fc='ie6',ec='ie8',dc='ie9',cb='img',Qb='ipad',Sb='iphone',ae='ipt>',Qd='ipt><!-',Md='loadExternalRefs',Ub='macintosh',nb='meta',Td='moduleName:"PDK", sessionId:window.__gwtStatsSessionId, subSystem:"startup",',de='moduleRequested',Z='moduleStartup',ac='msapphost',_b='msie',ob='name',Pb='opera',Cb='preferredruntimes',Bb='requiresPhase1',Vb='safari',Ob='safari_android',Nb='safari_android_legacy',Rb='safari_ipad',Tb='safari_iphone',Wb='safari_mac',Yb='safari_windows',fb='script',mc='selectingPermutation',Mb='silk',S='startup',be='text/javascript',Eb='true',Vd='type: "end"});',Xd='type: "moduleRequested"});',V='undefined',Gb='user.agent',Sd='window.__gwtStatsEvent && window.__gwtStatsEvent({',Xb='windows';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s=$pdk.env.Detect.getInstance().baseDir()+Q+$pdk.defaultAppJsRoot+Q,t={},u=[],v=[],w=[],x=0,y,z;o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:U});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function A(){if(typeof n.readyState==V){return typeof n.body!=V&&n.body!=null}return /loaded|complete/.test(n.readyState)}
function B(){var b=false;try{var c=m.location.search;return (c.indexOf(W)!=-1||(c.indexOf(X)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf(Y)==-1}catch(a){}B=function(){return b};return b}
function C(){if(q&&r){var a=$pdk.env.Detect.getInstance().baseDir()+Q+$pdk.defaultAppJsRoot+Q;q(y,R,a,x);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Z,millis:(new Date).getTime(),type:$})}}
function D(){function e(a){var b=a.lastIndexOf(_);if(b==-1){b=a.length}var c=a.indexOf(ab);if(c==-1){c=a.length}var d=a.lastIndexOf(Q,Math.min(c,b));return d>=0?a.substring(0,d+1):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=n.createElement(cb);b.src=a+db;a=e(b.src)}return a}
function g(){var a=F(eb);if(a!=null){return a}return bb}
function h(){var a=n.getElementsByTagName(fb);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(gb)!=-1){return e(a[b].src)}}return bb}
function i(){var a;if(typeof A==V||!A()){var b=hb;var c;n.write(ib+b+jb);c=n.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=kb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return bb}
function j(){var a=n.getElementsByTagName(lb);if(a.length>0){return a[a.length-1].href}return bb}
function k(){var a=n.location;return a.href==a.protocol+mb+a.host+a.pathname+a.search+a.hash}
var l=g();if(l==bb){l=h()}if(l==bb){l=i()}if(l==bb){l=j()}if(l==bb&&k()){l=e(n.location.href)}l=f(l);s=l;return l}
function E(){var b=document.getElementsByTagName(nb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(ob),g;if(f){f=f.replace(pb,bb);if(f.indexOf(qb)>=0){continue}if(f==rb){g=e.getAttribute(sb);if(g){var h,i=g.indexOf(tb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=bb}t[f]=h}}else if(f==ub){g=e.getAttribute(sb);if(g){try{z=eval(g)}catch(a){alert(vb+g+wb)}}}else if(f==xb){g=e.getAttribute(sb);if(g){try{y=eval(g)}catch(a){alert(vb+g+yb)}}}}}}
function F(a){var b=t[a];return b==null?null:b}
function G(a,b){var c=w;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function H(a){var b=v[a](),c=u[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(z){z(a,d,b)}throw null}
v[zb]=function(){return String($pdk.env.Detect.getInstance().hasFlash())};u[zb]={'false':0,'true':1};v[Ab]=function(){return String($pdk.env.Detect.getInstance().hasJquery())};u[Ab]={'false':0,'true':1};v[Bb]=function(){var a=$pdk.env.Detect.getInstance().getConfigSet(Cb);return a&&a.contains(Db)?Eb:Fb};u[Bb]={'false':0,'true':1};v[Gb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Hb)!=-1&&b.indexOf(Ib)!=-1}())return Jb;if(function(){return b.indexOf(Kb)!=-1||(b.indexOf(Lb)!=-1||b.indexOf(Mb)!=-1)}())return Nb;if(function(){return b.indexOf(Hb)!=-1&&(b.indexOf(Kb)==-1&&(b.indexOf(Lb)==-1&&b.indexOf(Mb)==-1))}())return Ob;if(function(){return b.indexOf(Pb)!=-1}())return Pb;if(function(){return b.indexOf(Qb)!=-1}())return Rb;if(function(){return b.indexOf(Sb)!=-1}())return Tb;if(function(){return b.indexOf(Ib)==-1&&(b.indexOf(Mb)==-1&&(b.indexOf(Ub)!=-1&&b.indexOf(Vb)!=-1))}())return Wb;if(function(){return b.indexOf(Ib)==-1&&(b.indexOf(Mb)==-1&&(b.indexOf(Xb)!=-1&&b.indexOf(Vb)!=-1))}())return Yb;if(function(){return b.indexOf(Mb)==-1&&(b.indexOf(Ub)!=-1&&b.indexOf(Ib)!=-1)}())return Zb;if(function(){return b.indexOf(Mb)==-1&&(b.indexOf(Xb)!=-1&&b.indexOf(Ib)!=-1)}())return $b;if(function(){return b.indexOf(_b)!=-1&&(b.indexOf(ac)!=-1&&n.documentMode>=10)}())return bc;if(function(){return b.indexOf(_b)!=-1&&n.documentMode>=10}())return cc;if(function(){return b.indexOf(_b)!=-1&&n.documentMode>=9}())return dc;if(function(){return b.indexOf(_b)!=-1&&n.documentMode>=8}())return ec;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(a&&a.length==3)return c(a)>=6000}())return fc;if(function(){return b.indexOf(gc)!=-1&&b.indexOf(Xb)!=-1}())return hc;if(function(){return b.indexOf(gc)!=-1&&b.indexOf(Ub)!=-1}())return ic;if(function(){return b.indexOf(gc)!=-1}())return jc;return Zb};u[Gb]={chrome_android:0,chrome_mac:1,chrome_windows:2,gecko1_8:3,gecko1_8_mac:4,gecko1_8_windows:5,ie10:6,ie10_app:7,ie6:8,ie8:9,ie9:10,opera:11,safari:12,safari_android:13,safari_android_legacy:14,safari_ipad:15,safari_iphone:16,safari_mac:17,safari_windows:18};PDK.onScriptLoad=function(a){PDK.onScriptLoad=null;q=a;C()};if(B()){alert(kc+lc);return}E();D();o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:mc});var I;try{G([Eb,Eb,Fb,fc],nc);G([Eb,Eb,Eb,fc],nc);G([Eb,Eb,Fb,fc],nc+oc);G([Eb,Eb,Eb,fc],nc+oc);G([Fb,Eb,Fb,fc],pc);G([Fb,Eb,Eb,fc],pc);G([Fb,Eb,Fb,fc],pc+oc);G([Fb,Eb,Eb,fc],pc+oc);G([Eb,Fb,Fb,cc],qc);G([Eb,Fb,Eb,cc],qc);G([Eb,Fb,Fb,cc],qc+oc);G([Eb,Fb,Eb,cc],qc+oc);G([Eb,Eb,Fb,Yb],rc);G([Eb,Eb,Eb,Yb],rc);G([Eb,Eb,Fb,Yb],rc+oc);G([Eb,Eb,Eb,Yb],rc+oc);G([Eb,Eb,Fb,ec],sc);G([Eb,Eb,Eb,ec],sc);G([Eb,Eb,Fb,ec],sc+oc);G([Eb,Eb,Eb,ec],sc+oc);G([Eb,Fb,Fb,Ob],tc);G([Eb,Fb,Eb,Ob],tc);G([Eb,Fb,Fb,Ob],tc+oc);G([Eb,Fb,Eb,Ob],tc+oc);G([Fb,Eb,Fb,Ob],uc);G([Fb,Eb,Eb,Ob],uc);G([Fb,Eb,Fb,Ob],uc+oc);G([Fb,Eb,Eb,Ob],uc+oc);G([Eb,Eb,Fb,Ob],vc);G([Eb,Eb,Eb,Ob],vc);G([Eb,Eb,Fb,Ob],vc+oc);G([Eb,Eb,Eb,Ob],vc+oc);G([Eb,Fb,Fb,ic],wc);G([Eb,Fb,Eb,ic],wc);G([Eb,Fb,Fb,ic],wc+oc);G([Eb,Fb,Eb,ic],wc+oc);G([Fb,Eb,Fb,Vb],xc);G([Fb,Eb,Eb,Vb],xc);G([Fb,Eb,Fb,Vb],xc+oc);G([Fb,Eb,Eb,Vb],xc+oc);G([Eb,Eb,Fb,hc],yc);G([Eb,Eb,Eb,hc],yc);G([Eb,Eb,Fb,hc],yc+oc);G([Eb,Eb,Eb,hc],yc+oc);G([Eb,Eb,Fb,Vb],zc);G([Eb,Eb,Eb,Vb],zc);G([Eb,Eb,Fb,Vb],zc+oc);G([Eb,Eb,Eb,Vb],zc+oc);G([Fb,Eb,Fb,hc],Ac);G([Fb,Eb,Eb,hc],Ac);G([Fb,Eb,Fb,hc],Ac+oc);G([Fb,Eb,Eb,hc],Ac+oc);G([Fb,Eb,Fb,Tb],Bc);G([Fb,Eb,Eb,Tb],Bc);G([Fb,Eb,Fb,Tb],Bc+oc);G([Fb,Eb,Eb,Tb],Bc+oc);G([Eb,Eb,Fb,Wb],Cc);G([Eb,Eb,Eb,Wb],Cc);G([Eb,Eb,Fb,Wb],Cc+oc);G([Eb,Eb,Eb,Wb],Cc+oc);G([Eb,Fb,Fb,ec],Dc);G([Eb,Fb,Eb,ec],Dc);G([Eb,Fb,Fb,ec],Dc+oc);G([Eb,Fb,Eb,ec],Dc+oc);G([Fb,Eb,Fb,Jb],Ec);G([Fb,Eb,Eb,Jb],Ec);G([Fb,Eb,Fb,Jb],Ec+oc);G([Fb,Eb,Eb,Jb],Ec+oc);G([Eb,Fb,Fb,hc],Fc);G([Eb,Fb,Eb,hc],Fc);G([Eb,Fb,Fb,hc],Fc+oc);G([Eb,Fb,Eb,hc],Fc+oc);G([Eb,Eb,Fb,dc],Gc);G([Eb,Eb,Eb,dc],Gc);G([Eb,Eb,Fb,dc],Gc+oc);G([Eb,Eb,Eb,dc],Gc+oc);G([Fb,Fb,Fb,ec],Hc);G([Fb,Fb,Eb,ec],Hc);G([Fb,Fb,Fb,ec],Hc+oc);G([Fb,Fb,Eb,ec],Hc+oc);G([Fb,Fb,Fb,cc],Ic);G([Fb,Fb,Eb,cc],Ic);G([Fb,Fb,Fb,cc],Ic+oc);G([Fb,Fb,Eb,cc],Ic+oc);G([Eb,Fb,Fb,$b],Jc);G([Eb,Fb,Eb,$b],Jc);G([Eb,Fb,Fb,$b],Jc+oc);G([Eb,Fb,Eb,$b],Jc+oc);G([Eb,Eb,Fb,Zb],Kc);G([Eb,Eb,Eb,Zb],Kc);G([Eb,Eb,Fb,Zb],Kc+oc);G([Eb,Eb,Eb,Zb],Kc+oc);G([Fb,Fb,Fb,Pb],Lc);G([Fb,Fb,Eb,Pb],Lc);G([Fb,Fb,Fb,Pb],Lc+oc);G([Fb,Fb,Eb,Pb],Lc+oc);G([Eb,Eb,Fb,cc],Mc);G([Eb,Eb,Eb,cc],Mc);G([Eb,Eb,Fb,cc],Mc+oc);G([Eb,Eb,Eb,cc],Mc+oc);G([Fb,Eb,Fb,cc],Nc);G([Fb,Eb,Eb,cc],Nc);G([Fb,Eb,Fb,cc],Nc+oc);G([Fb,Eb,Eb,cc],Nc+oc);G([Eb,Fb,Fb,Rb],Oc);G([Eb,Fb,Eb,Rb],Oc);G([Eb,Fb,Fb,Rb],Oc+oc);G([Eb,Fb,Eb,Rb],Oc+oc);G([Fb,Fb,Fb,Yb],Pc);G([Fb,Fb,Eb,Yb],Pc);G([Fb,Fb,Fb,Yb],Pc+oc);G([Fb,Fb,Eb,Yb],Pc+oc);G([Eb,Fb,Fb,fc],Qc);G([Eb,Fb,Eb,fc],Qc);G([Eb,Fb,Fb,fc],Qc+oc);G([Eb,Fb,Eb,fc],Qc+oc);G([Fb,Eb,Fb,bc],Rc);G([Fb,Eb,Eb,bc],Rc);G([Fb,Eb,Fb,bc],Rc+oc);G([Fb,Eb,Eb,bc],Rc+oc);G([Fb,Eb,Fb,jc],Sc);G([Fb,Eb,Eb,jc],Sc);G([Fb,Eb,Fb,jc],Sc+oc);G([Fb,Eb,Eb,jc],Sc+oc);G([Eb,Eb,Fb,Nb],Tc);G([Eb,Eb,Eb,Nb],Tc);G([Eb,Eb,Fb,Nb],Tc+oc);G([Eb,Eb,Eb,Nb],Tc+oc);G([Fb,Fb,Fb,Rb],Uc);G([Fb,Fb,Eb,Rb],Uc);G([Fb,Fb,Fb,Rb],Uc+oc);G([Fb,Fb,Eb,Rb],Uc+oc);G([Eb,Fb,Fb,jc],Vc);G([Eb,Fb,Eb,jc],Vc);G([Eb,Fb,Fb,jc],Vc+oc);G([Eb,Fb,Eb,jc],Vc+oc);G([Fb,Fb,Fb,ic],Wc);G([Fb,Fb,Eb,ic],Wc);G([Fb,Fb,Fb,ic],Wc+oc);G([Fb,Fb,Eb,ic],Wc+oc);G([Fb,Fb,Fb,Nb],Xc);G([Fb,Fb,Eb,Nb],Xc);G([Fb,Fb,Fb,Nb],Xc+oc);G([Fb,Fb,Eb,Nb],Xc+oc);G([Fb,Eb,Fb,ic],Yc);G([Fb,Eb,Eb,ic],Yc);G([Fb,Eb,Fb,ic],Yc+oc);G([Fb,Eb,Eb,ic],Yc+oc);G([Eb,Eb,Fb,$b],Zc);G([Eb,Eb,Eb,$b],Zc);G([Eb,Eb,Fb,$b],Zc+oc);G([Eb,Eb,Eb,$b],Zc+oc);G([Fb,Fb,Fb,Wb],$c);G([Fb,Fb,Eb,Wb],$c);G([Fb,Fb,Fb,Wb],$c+oc);G([Fb,Fb,Eb,Wb],$c+oc);G([Eb,Fb,Fb,Yb],_c);G([Eb,Fb,Eb,Yb],_c);G([Eb,Fb,Fb,Yb],_c+oc);G([Eb,Fb,Eb,Yb],_c+oc);G([Fb,Fb,Fb,Vb],ad);G([Fb,Fb,Eb,Vb],ad);G([Fb,Fb,Fb,Vb],ad+oc);G([Fb,Fb,Eb,Vb],ad+oc);G([Eb,Fb,Fb,Zb],bd);G([Eb,Fb,Eb,Zb],bd);G([Eb,Fb,Fb,Zb],bd+oc);G([Eb,Fb,Eb,Zb],bd+oc);G([Eb,Fb,Fb,bc],cd);G([Eb,Fb,Eb,bc],cd);G([Eb,Fb,Fb,bc],cd+oc);G([Eb,Fb,Eb,bc],cd+oc);G([Eb,Eb,Fb,jc],dd);G([Eb,Eb,Eb,jc],dd);G([Eb,Eb,Fb,jc],dd+oc);G([Eb,Eb,Eb,jc],dd+oc);G([Fb,Fb,Fb,Zb],ed);G([Fb,Fb,Eb,Zb],ed);G([Fb,Fb,Fb,Zb],ed+oc);G([Fb,Fb,Eb,Zb],ed+oc);G([Fb,Fb,Fb,bc],fd);G([Fb,Fb,Eb,bc],fd);G([Fb,Fb,Fb,bc],fd+oc);G([Fb,Fb,Eb,bc],fd+oc);G([Eb,Eb,Fb,ic],gd);G([Eb,Eb,Eb,ic],gd);G([Eb,Eb,Fb,ic],gd+oc);G([Eb,Eb,Eb,ic],gd+oc);G([Fb,Fb,Fb,Ob],hd);G([Fb,Fb,Eb,Ob],hd);G([Fb,Fb,Fb,Ob],hd+oc);G([Fb,Fb,Eb,Ob],hd+oc);G([Eb,Eb,Fb,Jb],id);G([Eb,Eb,Eb,Jb],id);G([Eb,Eb,Fb,Jb],id+oc);G([Eb,Eb,Eb,Jb],id+oc);G([Fb,Eb,Fb,Pb],jd);G([Fb,Eb,Eb,Pb],jd);G([Fb,Eb,Fb,Pb],jd+oc);G([Fb,Eb,Eb,Pb],jd+oc);G([Fb,Eb,Fb,Zb],kd);G([Fb,Eb,Eb,Zb],kd);G([Fb,Eb,Fb,Zb],kd+oc);G([Fb,Eb,Eb,Zb],kd+oc);G([Eb,Eb,Fb,Pb],ld);G([Eb,Eb,Eb,Pb],ld);G([Eb,Eb,Fb,Pb],ld+oc);G([Eb,Eb,Eb,Pb],ld+oc);G([Eb,Eb,Fb,bc],md);G([Eb,Eb,Eb,bc],md);G([Eb,Eb,Fb,bc],md+oc);G([Eb,Eb,Eb,bc],md+oc);G([Eb,Fb,Fb,Tb],nd);G([Eb,Fb,Eb,Tb],nd);G([Eb,Fb,Fb,Tb],nd+oc);G([Eb,Fb,Eb,Tb],nd+oc);G([Fb,Eb,Fb,Yb],od);G([Fb,Eb,Eb,Yb],od);G([Fb,Eb,Fb,Yb],od+oc);G([Fb,Eb,Eb,Yb],od+oc);G([Fb,Fb,Fb,Jb],pd);G([Fb,Fb,Eb,Jb],pd);G([Fb,Fb,Fb,Jb],pd+oc);G([Fb,Fb,Eb,Jb],pd+oc);G([Fb,Fb,Fb,fc],qd);G([Fb,Fb,Eb,fc],qd);G([Fb,Fb,Fb,fc],qd+oc);G([Fb,Fb,Eb,fc],qd+oc);G([Eb,Fb,Fb,Jb],rd);G([Eb,Fb,Eb,Jb],rd);G([Eb,Fb,Fb,Jb],rd+oc);G([Eb,Fb,Eb,Jb],rd+oc);G([Eb,Eb,Fb,Tb],sd);G([Eb,Eb,Eb,Tb],sd);G([Eb,Eb,Fb,Tb],sd+oc);G([Eb,Eb,Eb,Tb],sd+oc);G([Eb,Fb,Fb,Nb],td);G([Eb,Fb,Eb,Nb],td);G([Eb,Fb,Fb,Nb],td+oc);G([Eb,Fb,Eb,Nb],td+oc);G([Fb,Eb,Fb,$b],ud);G([Fb,Eb,Eb,$b],ud);G([Fb,Eb,Fb,$b],ud+oc);G([Fb,Eb,Eb,$b],ud+oc);G([Eb,Fb,Fb,Wb],vd);G([Eb,Fb,Eb,Wb],vd);G([Eb,Fb,Fb,Wb],vd+oc);G([Eb,Fb,Eb,Wb],vd+oc);G([Eb,Eb,Fb,Rb],wd);G([Eb,Eb,Eb,Rb],wd);G([Eb,Eb,Fb,Rb],wd+oc);G([Eb,Eb,Eb,Rb],wd+oc);G([Fb,Eb,Fb,ec],xd);G([Fb,Eb,Eb,ec],xd);G([Fb,Eb,Fb,ec],xd+oc);G([Fb,Eb,Eb,ec],xd+oc);G([Eb,Fb,Fb,dc],yd);G([Eb,Fb,Eb,dc],yd);G([Eb,Fb,Fb,dc],yd+oc);G([Eb,Fb,Eb,dc],yd+oc);G([Fb,Eb,Fb,Nb],zd);G([Fb,Eb,Eb,Nb],zd);G([Fb,Eb,Fb,Nb],zd+oc);G([Fb,Eb,Eb,Nb],zd+oc);G([Fb,Eb,Fb,Wb],Ad);G([Fb,Eb,Eb,Wb],Ad);G([Fb,Eb,Fb,Wb],Ad+oc);G([Fb,Eb,Eb,Wb],Ad+oc);G([Fb,Fb,Fb,jc],Bd);G([Fb,Fb,Eb,jc],Bd);G([Fb,Fb,Fb,jc],Bd+oc);G([Fb,Fb,Eb,jc],Bd+oc);G([Fb,Fb,Fb,dc],Cd);G([Fb,Fb,Eb,dc],Cd);G([Fb,Fb,Fb,dc],Cd+oc);G([Fb,Fb,Eb,dc],Cd+oc);G([Fb,Eb,Fb,dc],Dd);G([Fb,Eb,Eb,dc],Dd);G([Fb,Eb,Fb,dc],Dd+oc);G([Fb,Eb,Eb,dc],Dd+oc);G([Eb,Fb,Fb,Pb],Ed);G([Eb,Fb,Eb,Pb],Ed);G([Eb,Fb,Fb,Pb],Ed+oc);G([Eb,Fb,Eb,Pb],Ed+oc);G([Fb,Fb,Fb,hc],Fd);G([Fb,Fb,Eb,hc],Fd);G([Fb,Fb,Fb,hc],Fd+oc);G([Fb,Fb,Eb,hc],Fd+oc);G([Eb,Fb,Fb,Vb],Gd);G([Eb,Fb,Eb,Vb],Gd);G([Eb,Fb,Fb,Vb],Gd+oc);G([Eb,Fb,Eb,Vb],Gd+oc);G([Fb,Fb,Fb,$b],Hd);G([Fb,Fb,Eb,$b],Hd);G([Fb,Fb,Fb,$b],Hd+oc);G([Fb,Fb,Eb,$b],Hd+oc);G([Fb,Eb,Fb,Rb],Id);G([Fb,Eb,Eb,Rb],Id);G([Fb,Eb,Fb,Rb],Id+oc);G([Fb,Eb,Eb,Rb],Id+oc);G([Fb,Fb,Fb,Tb],Jd);G([Fb,Fb,Eb,Tb],Jd);G([Fb,Fb,Fb,Tb],Jd+oc);G([Fb,Fb,Eb,Tb],Jd+oc);I=w[H(zb)][H(Ab)][H(Bb)][H(Gb)];var J=I.indexOf(Kd);if(J!=-1){x=Number(I.substring(J+1));I=I.substring(0,J)}}catch(a){return}var K;function L(){if(!r){r=true;C();if(n.removeEventListener){n.removeEventListener(Ld,L,false)}if(K){clearInterval(K)}}}
if(n.addEventListener){n.addEventListener(Ld,function(){L()},false)}var K=setInterval(function(){if(/loaded|complete/.test(n.readyState)){L()}},50);o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:T,millis:(new Date).getTime(),type:$});o&&o({moduleName:R,sessionId:p,subSystem:S,evtGroup:Md,millis:(new Date).getTime(),type:U});var M=$pdk.env.Detect.getInstance().baseDir()+Q+$pdk.defaultAppJsRoot+Q;if(/loaded|complete|interactive/.test(document.readyState)===false){var N=Nd+M+I+Od;n.write(Pd+Qd+Rd+Sd+Td+Ud+Vd+Sd+Td+Wd+Xd+Yd+N+Zd+$d+_d+ae)}else{var O=document.createElement(fb);O.type=be;var P=document.getElementsByTagName(ce)[0];if(!P)P=document.body;window.__gwtStatsEvent&&window.__gwtStatsEvent({moduleName:R,sessionId:window.__gwtStatsSessionId,subSystem:S,evtGroup:Md,millis:(new Date).getTime(),type:$});window.__gwtStatsEvent&&window.__gwtStatsEvent({moduleName:R,sessionId:window.__gwtStatsSessionId,subSystem:S,evtGroup:Z,millis:(new Date).getTime(),type:de});O.src=M+I+ee;P.appendChild(O)}}
$pdk.gwtBootloader=function(a){PDK()};$pdk.ns("$pdk.entrypoint");
$pdk.entrypoint.Entrypoint=$pdk.extend(function(){},{constructor:function(){this._complete=false;
this._registry=null;
this._env=null;
this._callBacks=[];
this._postOnLoad=function(){}
},configure:function(a,b){this._registry=a;
this._env=b
},_loaded:false,addCallback:function(a){this._callBacks.push(a);
if(this._loaded){a.apply()
}},initialize:function(){},onLoad:function(){var c=0,a=this._callBacks.length,d=this;
this._loaded=true;
for(;
c<a;
c++){this._callBacks[c].apply()
}var b=typeof(window._PDK_SUPRESS_INITIALIZE)==="boolean"?window._PDK_SUPRESS_INITIALIZE:false;
if((this._env===null||this._env.getAutoInitialize())&&!b){this.initialize()
}this._postOnLoad()
}});
$pdk.ns("$pdk.env.Detect");
$pdk.env.Detect._class=$pdk.extend(function(){},{constructor:function(){$pdk.env.Detect._class.superclass.constructor.call(this);
this._config_sets={};
this._has_jquery=window.jQuery!==null&&typeof(window.jQuery)==="function";
this._flash_version=null;
this._model_urls=this._parseRSS();
this._nonie_flash_test_str=null;
this._nonie_silverlight_test_str=null;
this._has_video=this._detectVideo();
this._has_silverlight=null;
this._default_runtimes=["flash","html5"];
this._preferred_formats=null;
this._default_formats=["mpeg4","f4m","m3u","webm","ogg","flv"];
this._media_factory=null;
this._playback_format=null;
this._playback_runtime=null;
this._playback_formats=null;
this._supported_runtimes=null;
this._preferred_formats_unfiltered=null;
this._preload_stylesheets={};
this._cookies=this._parseCookies(document.cookie)
},getCookies:function(){return this._cookies
},removePreloadStylesheet:function(a){var b=document.getElementById(a+"Loading");
if(!$pdk.isEmpty(b)&&!$pdk.isEmpty(b.parentNode)){b.parentNode.removeChild(b)
}},config:function(b,a){this._nonie_flash_test_str=b;
this._nonie_silverlight_test_str=a
},getPlaybackFormat:function(){return this._playback_format
},setPlaybackFormat:function(a){this._playback_format=a
},getPlaybackRuntime:function(){return this._playback_runtime
},setPlaybackRuntime:function(a){this._playback_runtime=a
},_parseCookies:function(f){var e={},d,b=f.split(";"),c=b.length,a;
for(d=0;
d<c;
d++){a=b[d].split("=");
e[a[0].replace(/\s/g,"")]=a[1]
}return e
},_detectFlash:function(){var a=[],d=null,b=[0,0,0],f=null;
try{d=this._nonie_flash_test_str===null?navigator.plugins["Shockwave Flash"].description:this._nonie_flash_test_str
}catch(j){d=null
}if(typeof(d)==="string"&&d.length>0){try{f=navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin
}catch(h){f=null
}if(f!==null){d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
b[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);
b[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);
b[2]=/[a-zA-Z]/.test(d)?parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0
}}else{try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
d=c.GetVariable("$version")
}catch(g){a=null
}if(typeof(d)==="string"){a=d.split(" ")[1].split(",");
b=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]
}}return b
},_detectVideo:function(){var c='video/mp4; codecs="avc1.42E01E',d=document.createElement("video"),e=typeof(d.canPlayType)==="function",b={hasVideo:e,codecs:{ogg:false,h264:false,webm:false,m3u:false,mp3:false,aac:false}},a={ogg:['video/ogg; codecs="theora"'],h264:[c+'"',c+', mp4a.40.2"'],webm:['video/webm; codecs="vp8, vorbis"','video/x-webm; codecs="vp8, vorbis"'],m3u:["application/vnd.apple.mpegurl",'audio/x-mpegurl; codecs="mp4a.40.2"','vnd.apple.mpegURL; codecs="mp4a.40.2"','application/x-mpegURL; codecs="mp4a.40.2"'],mp3:["audio/mpeg;"],aac:['audio/mp4; codecs="mp4a.40.5"'],mpegdash:["application/dash+xml","video/vnd.mpeg.dash.mpd"]};
if(e){b.codecs={ogg:this._detectVidFormat(d,a.ogg),h264:this._detectVidFormat(d,a.h264),webm:this._detectVidFormat(d,a.webm),m3u:this._detectVidFormat(d,a.m3u),mp3:this._detectVidFormat(d,a.mp3),aac:this._detectVidFormat(d,a.aac),mpegdash:typeof(window.MediaSource)==="function"||typeof(window.WebKitMediaSource)==="function"||this._detectVidFormat(d,a.mpegdash)}
}return b
},_detectVidFormat:function(d,a){var e=a.length,c=false;
for(var b=0;
b<e;
b++){c=!($pdk.isEmpty(d.canPlayType(a[b]))||d.canPlayType(a[b]).toLowerCase()==="no")||(a[b]=='vnd.apple.mpegURL; codecs="mp4a.40.2"'&&$pdk.isChrome&&$pdk.isAndroid);
if(c){break
}}return c
},_detectSilverlight:function(){var j=null,d,a,f,l=false,c,b,k=[4,0,0,0];
if(typeof(window.ActiveXObject)==="function"){try{j=new ActiveXObject("AgControl.AgControl");
l=j.IsVersionSupported(k.join("."))
}catch(g){l=false
}}else{try{f=navigator.plugins["Silverlight Plug-In"];
c=this._nonie_silverlight_test_str!==null?this._nonie_silverlight_test_str:String(f.description);
c=c==="1.0.30226.2"?"2.0.30226.2":c;
b=c.split(".");
for(d=0;
d<4;
d++){a=b[d];
a=typeof(a)==="string"?parseInt(a,10):0;
b[d]=a
}l=$pdk.tupleComp(k,b,function(m,e){var n=e>m?1:0;
return e<m?-1:n
})>=0
}catch(h){l=false
}}return l
},_parseRSS:function(){var k=document.getElementsByTagName("link"),h=k.length,f=false,c=false,a,b,j={releaseurl:null,releasemodel:null,categorymodel:null,rssurl:null},d;
for(d=0;
d<h;
d++){if(!f&&k[d].type=="application/rss+xml"&&k[d].rel=="alternate"&&k[d].href.length>0){a=k[d].href;
j.rssurl=a;
try{b=a.split("?")
}catch(g){b=[]
}if(b.length>0){j.releasemodelbase=b[0];
j.releasemodel=b[0];
j.categorymodelbase=[b[0],"/categories"].join("");
j.categorymodel=[b[0],"/categories/?form=json&fields=fullTitle,id,label,order,title"].join("");
f=true
}}else{if(!c&&(k[d].type=="application/smil+xml"||k[d].type=="application/smil"||k[d].className==="tpRelease")){a=k[d].href;
if(typeof(a)==="string"&&a.length>0&&a!==document.URL){j.releaseurl=a;
c=true
}}}}return j
},_filterSupportedMedia:function(g){var e,b=[],d,c=g.length,f,a=false;
for(d=0;
d<c;
d++){e=g[d].toLowerCase();
switch(e){case"flash":if(this.hasFlash()){b.push("flash:3gpp");
b.push("flash:3gpp2");
b.push("flash:aac");
b.push("flash:actionscript");
b.push("flash:f4m");
b.push("flash:flv");
b.push("flash:mp3");
b.push("flash:mpeg");
b.push("flash:mpeg4");
b.push("flash:qt")
}break;
case"html5":f=this.hasVideo();
if(f.hasVideo){codecs=f.codecs;
if(codecs.ogg){b.push("html5:ogg")
}if(codecs.h264){b.push("html5:mpeg4")
}if(codecs.webm){b.push("html5:webm")
}if(codecs.m3u){b.push("html5:m3u")
}if(codecs.mp3){b.push("html5:mp3")
}if(codecs.aac){b.push("html5:aac")
}if(codecs.mpegdash){b.push("html5:mpeg-dash")
}}b.push("html5:javascript");
break;
case"silverlight":if(this.hasFlash()){b.push("silverlight:asx");
b.push("silverlight:ism");
b.push("silverlight:mpeg4");
b.push("silverlight:wm")
}break;
case"windowsmedia":break;
case"move":break;
default:break
}}return b
},canPlayTypeAugmentation:function(){var a=0,c=$pdk.canPlayTypeAugmentation,b=this.getConfigSet("canplaytypeaugmentation");
c=typeof(c)==="boolean"?c:true;
if(c&&!$pdk.isEmpty(b)){b=b.toArray();
for(;
a<b.length;
a++){if(b[a].toLowerCase()==="false"){c=false;
break
}}}return c
},sortM3uArray:function(b){var a=[];
for(i=b.length-1;
i>=0;
i--){if(b[i]==="m3u"){a.push(b[i])
}else{a.unshift(b[i])
}}return a
},getPreferredFormats:function(){if(this._preferred_formats===null){try{this._preferred_formats=this._filterPreferredFormats(this.getConfigSet("preferredformats").toArray())
}catch(a){this._preferred_formats=[]
}if(this._preferred_formats.length<1){this._preferred_formats=this._filterPreferredFormats(this._default_formats)
}if($pdk.isAndroid&&this.canPlayTypeAugmentation()){tpDebug("resorting preferred formats for Android","bootloader","$pdk.env.Detect",tpConsts.DEBUG);
this._preferred_formats=this.sortM3uArray(this._preferred_formats)
}}return this._preferred_formats
},getPreferredFormatsUnfiltered:function(){if(this._preferred_formats_unfiltered===null){try{this._preferred_formats_unfiltered=this.getConfigSet("preferredformats").toArray()
}catch(a){this._preferred_formats_unfiltered=[]
}if(this._preferred_formats_unfiltered.length<1){this._preferred_formats_unfiltered=this._default_formats
}if($pdk.isAndroid&&this.canPlayTypeAugmentation()){this._preferred_formats_unfiltered=this.sortM3uArray(this._preferred_formats_unfiltered)
}}return this._preferred_formats_unfiltered
},_filterPreferredFormats:function(d){var e=d.length,f,a=[],h,b,g=false,c;
h=this.hasVideo();
b=h.codecs;
for(c=0;
c<e;
c++){f=d[c].toLowerCase();
g=false;
switch(f){case"mpeg":case"mpeg4":if(b.h264||this.hasFlash()){g=true
}break;
case"mpeg-dash":if(b.mpegdash){g=true
}break;
case"m3u":if(b.m3u||this.hasFlash()){g=true
}break;
case"ogg":if(b.ogg){g=true
}break;
case"webm":if(b.webm){g=true
}break;
case"ism":case"asx":case"wm":case"move":case"flv":case"f4m":if(this.hasFlash()){g=true
}break;
default:break
}if(g){a.push(d[c])
}}return a
},getPlayerFormats:function(a){if(this._playback_formats===null){this._playback_formats=[];
if(this.getPlaybackRuntime()!==null){this._playback_formats=this._filterPlayerFormats(this.getPlaybackRuntime())
}if(this._playback_formats.length<1){if(a===undefined){a="flash"
}this._playback_formats=this._filterPlayerFormats(a)
}}return this._playback_formats
},_filterPlayerFormats:function(g){var e=this.getPreferredFormats(),d=e.length,a=[],f,h,b,c;
h=this.hasVideo();
b=h.codecs;
g=g.toLowerCase();
for(c=0;
c<d;
c++){f=e[c].toLowerCase();
switch(f){case"mpeg":case"mpeg4":if((g==="html5"&&b.h264)||((g==="flash"||g==="silverlight")&&this.hasFlash())){a.push(e[c])
}break;
case"mpeg-dash":if(g==="html5"&&b.mpegdash){a.push(e[c])
}break;
case"m3u":if(g==="html5"&&b.m3u){a.push(e[c])
}break;
case"ogg":if(g==="html5"&&b.ogg){a.push(e[c])
}break;
case"webm":if(g==="html5"&&b.webm){a.push(e[c])
}break;
case"ism":if((g==="flash"||g==="silverlight")&&this.hasFlash()){a.push(e[c])
}break;
case"asx":case"wm":if((g==="flash"||g==="silverlight"||g==="windowsmedia")&&this.hasFlash()){a.push(e[c])
}break;
case"flv":case"f4m":if((g==="flash")&&this.hasFlash()){a.push(e[c])
}break;
case"move":if((g==="flash"||g==="move")&&this.hasFlash()){a.push(e[c])
}break;
default:break
}}return a
},getModelUrls:function(){return this._model_urls
},getFlashVersion:function(){if(this._flash_version===null){this._flash_version=this._detectFlash()
}return this._flash_version
},hasVideo:function(){return this._has_video
},hasFlash:function(){return $pdk.tupleComp([9,0,115],this.getFlashVersion(),function(d,c){var e=c>d?1:0;
return c<d?-1:e
})>=0
},hasSilverlight:function(){if(this._has_silverlight===null){this._has_silverlight=this._detectSilverlight()
}return this._has_silverlight
},hasJquery:function(){return this._has_jquery
},getAutoInitialize:function(){var a=true;
try{a=this.getConfigSet("initialize").toArray()[0].toLowerCase()!=="false"
}catch(b){a=true
}return a
},GWTReady:function(){return this._gwt_ready
},setGWTReady:function(a){this._gwt_ready=a
},addToConfigSet:function(a,b){var c=this._config_sets[a];
if($pdk.isEmpty(c)){c=new $pdk.util.ArraySet();
this._config_sets[a]=c
}c.add(b)
},getConfigSet:function(a){return this._config_sets[a]
},baseDir:function(){var a=$pdk.scriptRoot;
try{a=this.getConfigSet("baseurl").toArray()[0]
}catch(b){a=$pdk.scriptRoot
}return a
},cachePath:function(){return this.baseDir()+"/js"
},getMediaFactory:function(){if(this._media_factory===null){this._media_factory=new $pdk.env.media.Factory(this.getSupportedRuntimes(),this._filterSupportedMedia(["flash","html5","silverlight","windowsmedia","move"]),new $pdk.env.media.FactoryLoggerTpTraceMainImpl())
}return this._media_factory
},getSupportedRuntimes:function(){if(this._supported_runtimes===null){try{this._supported_runtimes=this._filterSupportedMedia(this.getConfigSet("preferredruntimes").toArray())
}catch(a){this._supported_runtimes=[]
}if(this._supported_runtimes.length<1){this._supported_runtimes=this._filterSupportedMedia(this._default_runtimes)
}}return this._supported_runtimes
},_detectPhase1:function(){var f=false;
var e=false;
var b=document.getElementsByTagName("script");
var d;
var a=b.length;
for(d=0;
d<a;
d++){var c=b[d].innerHTML;
if(!f&&(c.indexOf("tpRegisterID(")>=0)){f=true
}if(!e&&(c.indexOf("Player(")>=0||c.indexOf("ReleaseList(")>=0||c.indexOf("ReleaseModel(")>=0)){e=true
}if(f&&e){return true
}}return false
},isPhase1:function(){if(this._is_phase1===undefined){this._is_phase1=this._detectPhase1()
}return this._is_phase1
}});
$pdk.env.Detect._singleton=null;
$pdk.env.Detect.getInstance=function(){if($pdk.env.Detect._singleton===null){$pdk.env.Detect._singleton=new $pdk.env.Detect._class()
}return $pdk.env.Detect._singleton
};
$pdk.ns("$pdk.env.HttpHead");
$pdk.env.HttpHead.Processor=$pdk.extend(function(){},{constructor:function(a){this._env=a
},process:function(f){var e,a,b,g=this._collectTpMetaTags(f),d=g.length,c;
for(c=0;
c<d;
c++){e=g[c];
if(!$pdk.isEmpty(e.value)){a=e.value.replace(/\s/g,"").toLowerCase().split(",");
b=e.name.replace(/^tp:/,"").toLowerCase();
while(a.length>0){this._env.addToConfigSet(b,a.shift())
}}}},_collectTpMetaTags:function(g){var f,a=[],b,e,h=g.getElementsByTagName("meta"),d=h.length,c;
for(c=0;
c<d;
c++){f=h[c];
b=f.getAttribute("name");
if(typeof(b)==="string"&&b.match(/^tp:/)){e=f.getAttribute("content");
a.push({name:b,value:e})
}}return a
}});
$pdk.ns("$pdk.env.media");
$pdk.env.media.MediaBase=$pdk.extend(function(){},{_eligibleRuntimes:[],constructor:function(){this._satisfiedRuntimes={}
},satisfyRuntime:function(a){this._satisfiedRuntimes[a]=true
},isSatisfied:function(){var b,a=this._eligibleRuntimes.length,c=false;
for(b=0;
b<a&&!c;
b++){c=this._satisfiedRuntimes[this._eligibleRuntimes[b]];
c=typeof(c)==="boolean"?c:false
}return c
},getRuntimes:function(){var b=[],c,a=this._eligibleRuntimes.length;
for(c=0;
c<a;
c++){name=this._eligibleRuntimes[c];
found=this._satisfiedRuntimes[name];
if(typeof(found)==="boolean"?found:false){b.push(name)
}}return b
},getName:function(){return this._name
}});
$pdk.env.media.AacMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"aac",_eligibleRuntimes:["flash:aac","html5:aac"],constructor:function(){$pdk.env.media.AacMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.ActionScriptMedia=$pdk.extend($pdk.env.media.MediaBase,{_eligibleRuntimes:["flash:actionscript"],_name:"actionscript",constructor:function(){$pdk.env.media.ActionScriptMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.AsxMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"asx",_eligibleRuntimes:["silverlight:asx"],constructor:function(){$pdk.env.media.AsxMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.AviMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"avi",_eligibleRuntimes:["flash:avi"],constructor:function(){$pdk.env.media.AviMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.F4mMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"f4m",_eligibleRuntimes:["flash:f4m"],constructor:function(){$pdk.env.media.F4mMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.Factory=$pdk.extend(function(){},{constructor:function(b,a,c){this._runtimes=b;
this._runtimes_any_supported=a;
this._logger=c
},getBestRuntime:function(a,c,d){var b=new $pdk.env.media.strategy.Context(d,this._logger,this,c,this._runtimes,this._runtimes_any_supported),e;
if(a==="Player"){e=new $pdk.env.media.strategy.CodecComponentStrategy()
}else{e=new $pdk.env.media.strategy.GeneralComponentStrategy()
}return e.getBestRuntime(b)
},createMedia:function(d,c){c=typeof(c)==="boolean"?c:false;
var e,b=c?this._runtimes_any_supported:this._runtimes,a=b.length,f=null;
switch(d){case"actionscript":f=new $pdk.env.media.ActionScriptMedia();
break;
case"flv":f=new $pdk.env.media.FlvMedia();
break;
case"javascript":f=new $pdk.env.media.JavaScriptMedia();
break;
case"mpeg4":f=new $pdk.env.media.Mpeg4Media();
break;
case"mpeg-dash":f=new $pdk.env.media.MpegDashMedia();
break;
case"mpeg":f=new $pdk.env.media.MpegMedia();
break;
case"ogg":f=new $pdk.env.media.OggMedia();
break;
case"webm":f=new $pdk.env.media.WebMMedia();
break;
case"m3u":f=new $pdk.env.media.M3uMedia();
break;
case"3gpp":f=new $pdk.env.media.ThreeGppMedia();
break;
case"3gpp2":f=new $pdk.env.media.ThreeGpp2Media();
break;
case"aac":f=new $pdk.env.media.AacMedia();
break;
case"asx":f=new $pdk.env.media.AsxMedia();
break;
case"avi":f=new $pdk.env.media.AviMedia();
break;
case"f4m":f=new $pdk.env.media.F4mMedia();
break;
case"m3u":f=new $pdk.env.media.M3uMedia();
break;
case"move":f=new $pdk.env.media.MoveMedia();
break;
case"mp3":f=new $pdk.env.media.Mp3Media();
break;
case"qt":f=new $pdk.env.media.QtMedia();
break;
case"ism":f=new $pdk.env.media.IsmMedia();
break;
case"wm":f=new $pdk.env.media.WmMedia();
break;
default:f=new $pdk.env.media.NoOpMedia();
break
}for(e=0;
e<a;
e++){f.satisfyRuntime(b[e])
}return f
}});
$pdk.env.media.FactoryLoggerConsoleImpl=$pdk.extend(function(){},{constructor:function(){},log:function(a,b){console.log(a)
}});
$pdk.env.media.FactoryLoggerTpTraceMainImpl=$pdk.extend(function(){},{constructor:function(){},log:function(a,b){tpDebug(a,"bootloader","$pdk.env.media.Factory",b)
}});
$pdk.env.media.FlvMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"flv",_eligibleRuntimes:["flash:flv"],constructor:function(){$pdk.env.media.FlvMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.IsmMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"ism",_eligibleRuntimes:["silverlight:ism"],constructor:function(){$pdk.env.media.IsmMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.JavaScriptMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"javascript",_eligibleRuntimes:["html5:javascript"],constructor:function(){$pdk.env.media.JavaScriptMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.M3uMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"m3u",_eligibleRuntimes:["html5:m3u"],constructor:function(){$pdk.env.media.M3uMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.MoveMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"move",_eligibleRuntimes:["flash:move"],constructor:function(){$pdk.env.media.MoveMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.Mp3Media=$pdk.extend($pdk.env.media.MediaBase,{_name:"mp3",_eligibleRuntimes:["flash:mp3","html5:mp3"],constructor:function(){$pdk.env.media.Mp3Media.superclass.constructor.apply(this)
}});
$pdk.env.media.Mpeg4Media=$pdk.extend($pdk.env.media.MediaBase,{_name:"mpeg4",_eligibleRuntimes:["flash:mpeg4","html5:mpeg4","silverlight:mpeg4"],constructor:function(){$pdk.env.media.Mpeg4Media.superclass.constructor.apply(this)
}});
$pdk.env.media.MpegDashMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"mpeg-dash",_eligibleRuntimes:["html5:mpeg-dash"],constructor:function(){$pdk.env.media.MpegDashMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.MpegMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"mpeg",_eligibleRuntimes:["flash:mpeg"],constructor:function(){$pdk.env.media.Mpeg4Media.superclass.constructor.apply(this)
}});
$pdk.env.media.NoOpMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"noop"});
$pdk.env.media.OggMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"ogg",_eligibleRuntimes:["html5:ogg"],constructor:function(){$pdk.env.media.OggMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.QtMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"qt",_eligibleRuntimes:["flash:qt"],constructor:function(){$pdk.env.media.QtMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.ThreeGpp2Media=$pdk.extend($pdk.env.media.MediaBase,{_name:"3gpp2",_eligibleRuntimes:["flash:3gpp2"],constructor:function(){$pdk.env.media.ThreeGpp2Media.superclass.constructor.apply(this)
}});
$pdk.env.media.ThreeGppMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"3gpp",_eligibleRuntimes:["flash:3gpp"],constructor:function(){$pdk.env.media.ThreeGppMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.WebMMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"webm",_eligibleRuntimes:["html5:webm"],constructor:function(){$pdk.env.media.WebMMedia.superclass.constructor.apply(this)
}});
$pdk.env.media.WmMedia=$pdk.extend($pdk.env.media.MediaBase,{_name:"wm",_eligibleRuntimes:["silverlight:wm"],constructor:function(){$pdk.env.media.WmMedia.superclass.constructor.apply(this)
}});
$pdk.ns("$pdk.env.media.strategy");
$pdk.env.media.strategy.AbstractStrategy=$pdk.extend(function(){},{_getPossibleFormats:function(f,e){var d,k=f.length,g,c,b=[],j,a=e.length,h;
for(g=0;
g<a;
g++){j=e[g].toLowerCase();
for(c=0;
c<k;
c++){d=f[c].toLowerCase();
if(j===d){b.push(d)
}}}return b
},_searchByFormatThenRuntime:function(o,p,k,a){var r=false,g,b,d,l,q=k.length,f,c=p.length,e,j,m,h;
for(g=0;
g<q&&!r;
g++){l=k[g];
b=o.createMedia(l,a);
j=b.getRuntimes();
m=j.length;
for(h=0;
h<c&&!r;
h++){f=p[h];
for(d=0;
d<m&&!r;
d++){e=j[d];
r=e===f
}}}return{runtime:r?f.replace(/(.*):.*/,"$1"):"none",medium:r?b.getName():"none"}
},_searchByRuntimeThenFormat:function(o,p,k,a){var r=false,g,b,d,l,q=k.length,f,c=p.length,e,j,m,h;
for(h=0;
h<c&&!r;
h++){f=p[h];
for(g=0;
g<q&&!r;
g++){l=k[g];
b=o.createMedia(l,a);
j=b.getRuntimes();
m=j.length;
for(d=0;
d<m&&!r;
d++){e=j[d];
r=e===f
}}}return{runtime:r?f.replace(/(.*):.*/,"$1"):"none",medium:r?b.getName():"none"}
}});
$pdk.env.media.strategy.CodecComponentStrategy=$pdk.extend($pdk.env.media.strategy.AbstractStrategy,{getBestRuntime:function(a){var d,e=a.getComponentSupportedFormats(),j=a.getLogger(),h=a.getMediaFactory(),b=[],f,c=a.getPreferredFormats(),g=a.getRuntimes();
runtimes_any_supported=a.getRuntimesAnySupported();
j.log("searching for best runtime for preferred formats ("+c.join(", ")+") from list of supported formats ("+e.join(", ")+")",tpConsts.INFO);
b=this._getPossibleFormats(e,c);
f=b.length;
j.log("possible formats narrowed to: "+(f>0?b.join(", "):"[none]"),tpConsts.INFO);
d=this._searchByFormatThenRuntime(h,g,b,false);
if(d.medium==="none"){j.log("falling back to any supported runtime",tpConsts.INFO);
d=this._searchByFormatThenRuntime(h,runtimes_any_supported,b,true)
}if(d.runtime==="none"){j.log("no viable runtime found",tpConsts.INFO)
}else{j.log("picked best format/runtime : "+d.medium+"/"+d.runtime,tpConsts.INFO)
}return d
}});
$pdk.env.media.strategy.Context=$pdk.extend(function(){},{constructor:function(f,c,d,e,b,a){this._component_supported_formats=f;
this._logger=c;
this._media_factory=d;
this._preferred_formats=e;
this._runtimes=b;
this._runtimes_any_supported=a
},getComponentSupportedFormats:function(){return this._component_supported_formats
},getLogger:function(){return this._logger
},getMediaFactory:function(){return this._media_factory
},getPreferredFormats:function(){return this._preferred_formats
},getRuntimes:function(){return this._runtimes
},getRuntimesAnySupported:function(){return this._runtimes_any_supported
}});
$pdk.env.media.strategy.GeneralComponentStrategy=$pdk.extend($pdk.env.media.strategy.AbstractStrategy,{getBestRuntime:function(a){var d,e=a.getComponentSupportedFormats(),j=a.getLogger(),h=a.getMediaFactory(),b=[],f,c=a.getPreferredFormats(),g=a.getRuntimes();
runtimes_any_supported=a.getRuntimesAnySupported();
b=this._getPossibleFormats(e,c);
f=b.length;
d=this._searchByFormatThenRuntime(h,g,b,false);
if(d.medium==="none"){d=this._searchByRuntimeThenFormat(h,g,e,false)
}if(d.medium==="none"){d=this._searchByFormatThenRuntime(h,runtimes_any_supported,b,true)
}if(d.medium==="none"){d=this._searchByFormatThenRuntime(h,runtimes_any_supported,e,true)
}if(d.runtime==="none"){j.log("no viable runtime found",tpConsts.INFO)
}else{j.log("picked best format/runtime : "+d.medium+"/"+d.runtime,tpConsts.INFO)
}return d
}});
$pdk.ns("$pdk.util");
$pdk.util.ArraySet=$pdk.extend(function(){},{constructor:function(){this._members=[]
},add:function(a){var b=!this.contains(a);
if(b){this._members.push(a)
}return b
},remove:function(b){var c=this._find(b),a=false;
if(c>-1){a=delete this._members[c]
}return a
},contains:function(a){return this._find(a)>-1
},toArray:function(){return this._members
},_find:function(c){var b=0,a=this._members.length,d=-1;
for(;
b<a&&d<0;
b++){d=c===this._members[b]?b:-1
}return d
}});
$pdk.util.Strings=$pdk.apply(function(){},{encodeXmlAttribute:function(a){return typeof(a)!=="string"?null:a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&apos").replace(/"/g,"&quot;")
}});
$pdk.Entrypoint=$pdk.apply({},{_class:$pdk.extend($pdk.entrypoint.Entrypoint,{constructor:function(){$pdk.Entrypoint._class.superclass.constructor.call(this);
this._loadingStyleInjected=false
},configure:function(a,b){$pdk.Entrypoint._class.superclass.configure.call(this,a,b);
this._insertDefaultStylesheet()
},_insertDefaultStylesheet:function(){var a=document.createElement("link");
a.type="text/css";
a.rel="stylesheet";
a.href=this._env.baseDir()+"/style/default.css";
a.media="screen";
document.getElementsByTagName("head")[0].insertBefore(a,document.getElementsByTagName("head")[0].firstChild)
},injectLoadingStyle:function(c){var b,a;
if(!this._loadingStyleInjected){for(class_name in $pdk.shell.Factory.CLASS_TABLE){b=[".",class_name,class_name==="tpPlayer"?" ":" > * ","{ display: none !important; }"].join("");
if(c){a=document.createElement("style");
a.setAttribute("type","text/css");
a.setAttribute("id",class_name+"Loading");
if(a.styleSheet){a.styleSheet.cssText=b
}else{a.innerHTML=b
}document.getElementsByTagName("head")[0].appendChild(a)
}else{document.write(['<style id="',class_name,'Loading" ',">",b,"</style>"].join(""))
}}this._loadingStyleInjected=true
}},_injectPhase1JS:function(){var e=this;
if(this._loaded){var c=this._env.baseDir();
var b=document.getElementsByTagName("head")[0];
if(typeof(window.tpPhase1Debug)!=="string"){com.theplatform.pdk.ExternalScriptLoader.loadScript("tpPDK.js",function(){})
}else{var d=document.createElement("script");
d.type="text/javascript";
d.src=tpPhase1Debug.indexOf("http://")===0?tpPhase1Debug:this._env.baseDir()+tpPhase1Debug;
b.appendChild(d)
}}else{var a=this._postOnLoad;
this._postOnLoad=function(){a();
e._injectPhase1JS()
}
}},_connectShellsToGwt:function(b){var c=this;
if(this._loaded){this._registry.satisfyShellDeps();
this._registry.connectShellsToGwt();
this._env.setGWTReady(true);
this._complete=true;
tpDoInitGwtCommManager();
var d=this._registry.getShells().toArray();
for(i=0;
i<d.length;
i++){if(d[i].getRuntime()==="flash"){tpRegisterID(d[i].getSwfObjectId())
}}tpController.callFunction("htmlPageLoaded",[tpGetRegisteredIDs()])
}else{var a=this._postOnLoad;
this._postOnLoad=function(){a();
c._connectShellsToGwt(b)
}
}},initialize:function(){this.injectLoadingStyle(true);
$pdk.Entrypoint._class.superclass.initialize.call(this);
var c=this;
$pdk.shell.Factory.generate($pdk.shell.Factory.getNamesFromDomElements($pdk.dom.Helper.findByClass(/^tp/)),this._registry,this._env);
var a=$pdk.env.Detect.getInstance().getConfigSet("preferredruntimes");
var b=(!$pdk.env.Detect.getInstance().hasFlash()||a&&a.contains("html5"))?true:false;
if(!b){var d=c._registry.getShells().toArray();
for(i=0;
i<d.length;
i++){if(d[i].getRuntime()==="html5"||d[i].getRuntime()==="HTML5"){b=true;
break
}}}if(b){window.tpPhase1PDKLoaded=function(){c._connectShellsToGwt(b)
};
this._injectPhase1JS()
}else{this._connectShellsToGwt(b)
}}}),_singleton:null,getInstance:function(){if($pdk.Entrypoint._singleton===null){$pdk.Entrypoint._singleton=new $pdk.Entrypoint._class()
}return $pdk.Entrypoint._singleton
},onLoad:function(){$pdk.Entrypoint.getInstance().onLoad()
}});
$pdk.PdkVersion=$pdk.extend(function(){},{constructor:function(a,d,c,e,b){this.major=a;
this.minor=d;
this.revision=c;
this.build=e;
this.date=b
},toString:function(){return this.major+"."+this.minor+"."+this.revision+"."+this.build+" ("+this.date+")"
},equals:function(a){return this.major===a.major&&this.minor===a.minor&&this.revision===a.revision&&this.build===a.build
}});
$pdk.ns("$pdk.dom");
$pdk.dom.Helper=$pdk.apply({},{findByClass:function(f,e){var d,c,h,a,g=[],b;
if($pdk.isEmpty(f)){f=null
}if($pdk.isEmpty(e)){e=document
}h=e.getElementsByTagName("*");
a=h.length;
for(d=0;
d<a;
d++){c=h[d];
if(c.nodeType===1){if(f===null){g.push(c)
}else{b=c.className;
if(typeof(b)==="string"&&b.match(f)!==null){g.push(c)
}}}}return g
}});
$pdk.ns("$pdk.queue");
$pdk.ns("$pdk.queue");
$pdk.queue.Controller=$pdk.extend(function(){},{constructor:function(a){var b=this;
this._env=a;
this._events={};
this._functions={};
this._objects={};
this._isLoading=true;
this._canMessage=false;
this._messageQueue=[];
this._priorityQueue=[];
this._sendQueue=[];
this._isSending=false;
this._isShutDown=false;
this._runtimes=null;
this._blankString="__blank_string__";
this._defaultScope={globalDataType:this._getDataTypeName("ScopeInfo"),controlId:"javascript",isGlobal:true,isAny:false,isEmpty:false,scopeIds:["javascript","default"]}
},ready:function(){this.isHTML5Loading=false;
this._checkMessageQueue();
this._checkPriorityQueue()
},sendMessage:function(a,d,b){if(d.name==="controllerComplete"){this.onControllerComplete()
}var c={message:d,destination:a};
if(this._isLoading&&!b){this._messageQueue.push(c)
}else{if(!this._canMessage){this._priorityQueue.push(c)
}else{this._doSendMessage(c)
}}},_isSafariWin:(navigator.userAgent.indexOf("Windows")>-1&&navigator.userAgent.indexOf("AppleWebKit")>-1),onControllerComplete:function(){},_doSendMessage:function(a){var b=tpThisMovie(a.destination);
if(a.message.name==="callFunction"&&a.message.payload.name==="showFullScreen"&&a.message.payload.args[0]===true&&b.tagName&&(b.tagName.toLowerCase()==="object"||b.tagName.toLowerCase()==="embed")){tpDebug("Switching to full screen from Javascript is not supported by the Flash run-time. Flash only allows you to go to full screen mode via a click in the player itself.","tpController","Controller","error");
return
}if(this._isShutDown){return
}if($pdk.isWebKit&&$pdk.isWindows){setTimeout(function(){b.executeMessage(a.message)
},1)
}else{b.executeMessage(a.message)
}},_checkMessageQueue:function(){var a=this._messageQueue.length;
while(this._messageQueue.length>0){this._doSendMessage(this._messageQueue.shift())
}},_checkPriorityQueue:function(){var a;
while(this._priorityQueue.length>0){a=this._priorityQueue.shift();
if(a.destination==="unknown"){a.destination=tpBridgeID
}this._doSendMessage(a)
}},_wrapMessage:function(a,d){var b={globalDataType:this._getDataTypeName("CommInfo"),id:"javascript"},c={globalDataType:this._getDataTypeName("MessageInfo"),name:a,payload:d,comm:b};
return c
},_getDataTypeName:function(a){var b=null;
switch(a){case"AdPattern":b="com.theplatform.pdk.data::AdPattern";
break;
case"Banner":b="com.theplatform.pdk.data::Banner";
break;
case"BaseClip":b="com.theplatform.pdk.data::BaseClip";
break;
case"CallInfo":b="com.theplatform.pdk.communication::CallInfo";
break;
case"CategoryInfo":b="com.theplatform.pdk.data::CategoryInfo";
break;
case"Clip":b="com.theplatform.pdk.data::Clip";
break;
case"CommInfo":b="com.theplatform.pdk.communication::CommInfo";
break;
case"CustomData":b="com.theplatform.pdk.data::CustomData";
break;
case"CustomValue":b="com.theplatform.pdk.data::CustomValue";
break;
case"DispatchInfo":b="com.theplatform.pdk.communication::DispatchInfo";
break;
case"FunctionInfo":b="com.theplatform.pdk.communication::FunctionInfo";
break;
case"HandlerInfo":b="com.theplatform.pdk.communication::HandlerInfo";
break;
case"HyperLink":b="com.theplatform.pdk.data::HyperLink";
break;
case"MediaClick":b="com.theplatform.pdk.data::MediaClick";
break;
case"MediaFile":b="com.theplatform.pdk.data::MediaFile";
break;
case"MessageInfo":b="com.theplatform.pdk.communication::MessageInfo";
break;
case"MetricInfo":b="com.theplatform.pdk.data::MetricInfo";
break;
case"Overlay":b="com.theplatform.pdk.data::Overlay";
break;
case"PdkEvent":b="com.theplatform.pdk.events::PdkEvent";
break;
case"ProviderInfo":b="com.theplatform.pdk.data::ProviderInfo";
break;
case"Range":b="com.theplatform.pdk.data::Range";
break;
case"Rating":b="com.theplatform.pdk.data::Rating";
break;
case"Release":b="com.theplatform.pdk.data::Release";
break;
case"ReleaseInfo":b="com.theplatform.pdk.data::ReleaseInfo";
break;
case"ScopeInfo":b="com.theplatform.pdk.communication::ScopeInfo";
break;
case"Sort":b="com.theplatform.pdk.data::Sort";
break;
case"Subtitles":b="com.theplatform.pdk.data::Subtitles";
break;
case"TrackingUrl":b="com.theplatform.pdk.data::TrackingUrl";
break;
case"BandwidthPreferences":b="com.theplatform.pdk.data::BandwidthPreferences";
break;
case"Annotation":b="com.theplatform.pdk.data::Annotation";
break;
default:b=null;
break
}return b
},_createScope:function(a){if(a&&a.globalDataType){return a
}var b=this._defaultScope;
if(!$pdk.isEmpty(a)){if(a.length===0){a.push("javascript")
}b={globalDataType:this._getDataTypeName("ScopeInfo"),controlId:"javascript",isGlobal:true,isAny:false,isEmpty:false,scopeIds:a}
}return b
},_checkForExternalPlayers:function(){var f=tpGetPlayerFormats(),e,d,a,c,b;
if(f){f=f.split("|");
e=f.length;
a=this._isWMLoaded();
for(b=0;
b<e;
b++){d=f[b].toLowerCase();
switch(d){case"mpeg":case"mpeg4":if(!a&&this._checkRuntimePreferred(["silverlight","flash"])=="silverlight"){tpLoadScript(this._env.baseDir()+"/js/tpExternal_SMF.js");
a=true
}break;
case"ism":if(!a){tpLoadScript(this._env.baseDir()+"/js/tpExternal_SMF.js");
a=true
}break;
case"asx":case"wm":if(!a){c=this._checkRuntimePreferred(["silverlight","windowsmedia"]);
if(c==="windowsmedia"){tpLoadScript(this._env.baseDir()+"/js/tpExternal_WMP.js");
a=true
}else{tpLoadScript(this._env.baseDir()+"/js/tpExternal_SMF.js");
a=true
}}break;
case"move":break;
default:break
}}}},_isWMLoaded:function(){var b,a;
if(typeof(tpExternalJS)!=="undefined"){for(b=0;
b<tpExternalJS.length;
b++){a=tpExternalJS[b];
if(a.indexOf("/tpExternal_SMF.js")>=0||a.indexOf("/tpExternal_WMP.js")){return true
}}}return false
},_checkRuntimePreferred:function(d){if(this._runtimes===null){this._runtimes=this._env.getSupportedRuntimes()
}var a=d.length,c=this._runtimes.length,f,g,e,b;
for(e=0;
e<c;
e++){f=this._runtimes[e];
for(b=0;
b<a;
b++){g=d[b];
if(f.indexOf(g)===0){return g
}}}return null
},getProperty:function(a){return this.component[a.toLowerCase()]
},registerFunction:function(g,h,j,c){var d=this._createScope(j);
var b=c===undefined?false:c;
var e,l,a,k,f=false;
if($pdk.isEmpty(this._functions[g])){this._functions[g]={};
b=true
}for(e=0;
e<d.scopeIds.length&&!f;
e++){l=d.scopeIds[e];
if(l==="*"){f=true
}else{this._functions[g][l]=h;
b=true
}}if(!f&&b){a={globalDataType:this._getDataTypeName("FunctionInfo"),name:g,scope:d};
k=this._wrapMessage("registerFunction",a);
this.sendMessage(tpBridgeID,k,true)
}},unregisterFunction:function(g,h){var c=this._createScope(scopes),d,k,f,b,a,e=false,j;
if(!$pdk.isEmpty(this._functions[g])){a=this._functions[g];
for(d=0;
d<c.scopeIds.length;
d++){k=c.scopeIds[d];
if(k=="*"){delete this._functions[g];
break
}if(!$pdk.isEmpty(a[k])){delete a[k]
}}e=false;
if(!$pdk.isEmpty(a)){for(f in a){e=true;
break
}if(!e){delete this._functions[g]
}}}if(!$pdk.isEmpty(e)){b={globalDataType:this._getDataTypeName("FunctionInfo"),name:g,scope:c};
j=this._wrapMessage("unregisterFunction",b);
this.sendMessage(tpBridgeID,j,true)
}},addEventListener:function(e,f,g){var d=this._createScope(g),h={globalDataType:this._getDataTypeName("HandlerInfo"),name:e,handler:f,scope:d},b=false,j,a,c,k;
if($pdk.isEmpty(this._events[e])){this._events[e]=[];
b=true
}j=this._events[e];
a=false;
for(c=0;
c<j.length;
c++){if(j[c].handler==f){j[c]=h;
a=true;
break
}}if(!a){j.push(h)
}if(b){k=this._wrapMessage("addEventListener",h);
this.sendMessage(tpBridgeID,k,true)
}},removeEventListener:function(e,f,g){if($pdk.isEmpty(this._events[e])){return
}var b=this._createScope(g),j={globalDataType:this._getDataTypeName("HandlerInfo"),name:e,handler:f,scope:b},a=this._events[e],c,d,k;
for(c=0;
c<a.length;
c++){d=a[c];
if(d.handler==j.handler){a=a.splice(c,1);
break
}}if(a.length===0){delete this._events[e];
k=this._wrapMessage("removeEventListener",j);
this.sendMessage(tpBridgeID,k,true)
}},dispatchEvent:function(b,g,e){var d=this._createScope(e),a={globalDataType:this._getDataTypeName("PdkEvent"),type:b,data:g},c={globalDataType:this._getDataTypeName("DispatchInfo"),evt:a,scope:d};
this._doDispatchEvent(c);
var f=this._wrapMessage("dispatchEvent",c);
this.sendMessage(tpBridgeID,f,true)
},callFunction:function(g,b,e){var d=this._createScope(e),c={globalDataType:this._getDataTypeName("CallInfo"),name:g,args:b,scope:d},f;
var a=this._doCallFunction(c);
f=this._wrapMessage("callFunction",c);
this.sendMessage(tpBridgeID,f,true);
return a
},_doDispatchEvent:function(dispatch){if($pdk.isEmpty(this._events[dispatch.evt.type])){return
}var handlers=this._events[dispatch.evt.type].slice(0),i,j,s,k,fired,handler;
if(dispatch.evt&&dispatch.evt.data){this._parseCustomData(dispatch.evt.data)
}for(i=0;
i<handlers.length;
i++){handler=handlers[i];
if(dispatch.scope.isAny){if(typeof handler.handler==="string"){eval(handler.handler)(dispatch.evt)
}else{if(typeof handler.handler==="function"){handler.handler(dispatch.evt)
}}continue
}for(j=0;
j<handler.scope.scopeIds.length;
j++){s=handler.scope.scopeIds[j];
fired=false;
if(s=="*"){if(typeof handler.handler==="string"){eval(handler.handler)(dispatch.evt)
}else{if(typeof handler.handler==="function"){handler.handler(dispatch.evt)
}}break
}for(k=0;
k<dispatch.scope.scopeIds.length;
k++){if(s==dispatch.scope.scopeIds[k]){fired=true;
if(typeof handler.handler==="string"){eval(handler.handler)(dispatch.evt)
}else{if(typeof handler.handler==="function"){handler.handler(dispatch.evt)
}}break
}}if(fired){break
}}}},_parseCustomData:function(a){for(var e in a){var c=a[e];
if(c&&(c.globalDataType||$pdk.isArray(c))){if(c.globalDataType=="com.theplatform.pdk.data::CustomData"){for(var d in c){var b=d;
if(!b){continue
}if(b.indexOf("__PERIOD__")!=-1){b=b.replace("__PERIOD__",".")
}if(b.indexOf("__DASH__")!=-1){b=b.replace("__DASH__","-")
}if(b.indexOf("__COLON__")!=-1){b=b.replace("__COLON__",":")
}if(b.indexOf("__SPACE__")!=-1){b=b.replace("__SPACE__"," ")
}if(b.indexOf("__LEFT_BRACKET__")!=-1){b=b.replace("__LEFT_BRACKET__","[")
}if(b.indexOf("__RIGHT_BRACKET__")!=-1){b=b.replace("__RIGHT_BRACKET__","]")
}if(b!=d){c[b]=c[d];
delete c[d]
}}}else{this._parseCustomData(c)
}}}},_doCallFunction:function(e){if($pdk.isEmpty(this._functions[e.name])){return
}var a={},c,d,h;
var b;
for(c=0;
c<e.scope.scopeIds.length;
c++){d=e.scope.scopeIds[c];
if(!$pdk.isEmpty(this._functions[e.name][d])){a[this._functions[e.name][d]]=this._functions[e.name][d]
}}for(h in a){var g=a[h];
b=g.apply(this._objects[e.name],e.args)
}return b
},receiveMessage:function(a,b){if(a=="javascript"){switch(b.name){case"commReady":tpBridgeID=tpCommID;
this._canMessage=true;
this._checkPriorityQueue();
break;
case"bridgeReady":tpBridgeID=b.comm.id;
this._canMessage=true;
this._checkPriorityQueue();
break;
case"dispatchEvent":this.receiveEvent(b.payload);
break;
case"callFunction":this._doCallFunction(b.payload);
break;
default:break
}}else{this.sendMessage(a,b,true)
}},receiveEvent:function(a){if(a.evt.type=="OnPlayerLoaded"){this._isLoading=false;
this._checkMessageQueue();
this._checkForExternalPlayers()
}this._doDispatchEvent(a)
},modRelease:function(a){var b;
if(!$pdk.isEmpty(a)){a.globalDataType=this._getDataTypeName("Release");
if(a.categories){a.categories=this.modCategories(a.categories)
}if(a.thumbnails){for(b=0;
b<a.thumbnails.length;
b++){a.thumbnails[b].globalDataType=this._getDataTypeName("MediaFile");
if(a.thumbnails[b].customValues){a.thumbnails[b].customValues=this.modCustomValues(a.thumbnails[b].customValues)
}}}if(a.customValues){a.customValues=this.modCustomValues(a.customValues)
}if(a.metrics){for(b=0;
b<a.metrics.length;
b++){a.metrics[b].globalDataType=this._getDataTypeName("MetricInfo")
}}if(a.provider){a.provider.globalDataType=this._getDataTypeName("ProviderInfo");
if(a.provider.customValues){a.provider.customValues=this.modCustomValues(a.provider.customValues)
}}if(a.ratings){for(b=0;
b<a.ratings.length;
b++){a.ratings[b].globalDataType=this._getDataTypeName("Rating")
}}if(a.URL){a.url=a.URL
}}return a
},modCustomValues:function(a){var b;
for(b=0;
b<a.length;
b++){a[b].globalDataType=this._getDataTypeName("CustomValue")
}return a
},modCategories:function(a){var b;
for(b=0;
b<a.length;
b++){a[b].globalDataType=this._getDataTypeName("CategoryInfo")
}return a
},modClip:function(a){var b;
if(!$pdk.isEmpty(a)){a.globalDataType=this._getDataTypeName("Clip");
b=a.baseClip;
if($pdk.isEmpty(b)){b={}
}if(!$pdk.isEmpty(a.banners)){b.banners=a.banners
}if(!$pdk.isEmpty(a.overlays)){b.overlays=a.overlays
}a.baseClip=this.modBaseClip(b);
if(!$pdk.isEmpty(a.chapter)){a.chapter.globalDataType=this._getDataTypeName("Chapter")
}}return a
},modBaseClip:function(b){var a;
if($pdk.isEmpty(b)){b={}
}b.globalDataType=this._getDataTypeName("BaseClip");
if(!$pdk.isEmpty(b.moreInfo)){b.moreInfo.globalDataType=this._getDataTypeName("HyperLink");
if(!$pdk.isEmpty(b.moreInfo.clickTrackingUrls)){b.moreInfo.clickTrackingUrls=this.modTracking(b.moreInfo.clickTrackingUrls)
}}if(!$pdk.isEmpty(b.banners)){for(a=0;
a<b.banners.length;
a++){b.banners[a].globalDataType=this._getDataTypeName("Banner");
if(!$pdk.isEmpty(b.banners[a].clickTrackingUrls)){b.banners[a].clickTrackingUrls=this.modTracking(b.banners[a].clickTrackingUrls)
}}}if(!$pdk.isEmpty(b.overlays)){for(a=0;
a<b.overlays.length;
a++){b.overlays[a].globalDataType=this._getDataTypeName("Overlay");
if(!$pdk.isEmpty(b.overlays[a].clickTrackingUrls)){b.overlays[a].clickTrackingUrls=this.modTracking(b.overlays[a].clickTrackingUrls)
}}}if(!$pdk.isEmpty(b.availableSubtitles)){for(a=0;
a<b.availableSubtitles;
a++){b.availableSubtitles[a].globalDataType=this._getDataTypeName("Subtitles")
}}if(!$pdk.isEmpty(b.categories)){b.categories=this.modCategories(b.categories)
}if(!$pdk.isEmpty(b.adPattern)){b.adPattern.globalDataType=this._getDataTypeName("AdPattern")
}if(!$pdk.isEmpty(b.trackingURLs)){b.trackingURLs=this.modTracking(b.trackingURLs)
}if(!$pdk.isEmpty(b.contentCustomData)){b.contentCustomData.globalDataType=this._getDataTypeName("CustomData")
}if(!$pdk.isEmpty(b.ownerCustomData)){b.ownerCustomData.globalDataType=this._getDataTypeName("CustomData")
}if(!$pdk.isEmpty(b.outletCustomData)){b.outletCustomData.globalDataType=this._getDataTypeName("CustomData")
}return b
},modTracking:function(a){var b;
for(b=0;
b<a.length;
b++){a.globalDataType=this._getDataTypeName("TrackingUrl")
}return a
},shutDown:function(){this.callFunction("shutDown",[],["*"]);
this._isShutDown=true
},_regFunc:function(a,e,g,d){var b,h,f=$pdk.isEmpty(e)?0:e.length,c;
for(b=0;
b<f;
b++){h=e[b];
c=g[b];
if(!$pdk.isEmpty(g[b])){switch(h){case"com.theplatform.pdk.data.Release":c=tpController.modRelease(c);
break;
case"com.theplatform.pdk.data.Clip":c=tpController.modClip(c);
break;
case"com.theplatform.pdk.data.Range":c.globalDataType=this._getDataTypeName("Range");
break;
case"com.theplatform.pdk.data.Sort":c.globalDataType=this._getDataTypeName("Sort");
break;
case"com.theplatform.pdk.data.Annotation":c.globalDataType=this._getDataTypeName("Annotation");
break;
case"com.theplatform.pdk.data.BandwidthPreferences":c.globalDataType=this._getDataTypeName("BandwidthPreferences");
break;
default:break
}}}this.callFunction(a,g,d)
}});
$pdk.ns("$pdk.queue");
$pdk.queue.IFrameListener=$pdk.extend(function(){},{constructor:function(){var c=this,a=window.location.hash.substring(1).split("&"),d;
this._callbacks={};
this._origin=null;
this._iframeMessageHandler=function(e){c._acceptIFrameMessage(e)
};
for(var b=0;
b<a.length;
b++){d=a[b].split("=");
if(d[0].toLowerCase()=="playerurl"&&d.length==2){$pdk.parentUrl=unescape(d[1])
}}if(window.addEventListener){addEventListener("message",this._iframeMessageHandler,false)
}else{attachEvent("onmessage",this._iframeMessageHandler)
}},_acceptIFrameMessage:function(c){var b=this,d,e;
if(this._origin===null){this._origin=c.origin
}if(c.origin!==this._origin){return
}try{d=JSON.parse(c.data)
}catch(a){d=null
}if(d!==null&&typeof(d)==="object"){switch(d.type){case"initialization":if(d.name.toLowerCase()==="playerurl"){$pdk.parentUrl=d.parameters[0]
}break;
case"method":$pdk.controller[d.name].apply($pdk.controller,d.parameters);
break;
case"addEventListener":if(d.parameters&&d.parameters.length==2){e=function(f){b._dispatchEventToParentIFrame(f,d.parameters[1])
};
this._callbacks[d.parameters[1]]=e;
$pdk.controller.addEventListener(d.name,e,d.parameters[0])
}break;
case"removeEventListener":if(d.parameters&&d.parameters.length==2){e=this._callbacks[d.parameters[1]];
if(typeof(e)==="function"){$pdk.controller.removeEventListener(d.name,e,d.parameters[0])
}}break;
default:break
}}},_dispatchEventToParentIFrame:function(a,c){var b=JSON.stringify({type:"event",name:a.type,parameters:[a,c]});
window.parent.postMessage(b,this._origin)
},destroy:function(){this._callbacks=[];
if(window.removeEventListener){removeEventListener("message",this._iframeMessageHandler,false)
}else{detachEvent("onmessage",this._iframeMessageHandler)
}}});
$pdk.ns("$pdk.queue.deferred");
$pdk.queue.deferred.DeferredController=$pdk.extend(function(){},{constructor:function(){this.functions={};
this.objects={}
},buildListenerChain:function(){if(!this.listenerChain){this.listenerChain={}
}},addEventListener:function(a,b){if(!b instanceof Function){throw {message:"Listener isn't a function"}
}this.buildListenerChain();
if(!this.listenerChain[a]){this.listenerChain[a]=[b]
}else{this.listenerChain[a].push(b)
}},hasEventListener:function(a){if(this.listenerChain){return(typeof this.listenerChain[a]!="undefined")
}else{return false
}},removeEventListener:function(b,c){if(!this.hasEventListener(b)){return false
}for(var a=0;
a<this.listenerChain[b].length;
a++){if(this.listenerChain[b][a]==c){this.listenerChain[b].splice(a,1)
}}},dispatchEvent:function(c,a){this.buildListenerChain();
if(!this.hasEventListener(c)){return false
}for(var b=0;
b<this.listenerChain[c].length;
b++){var d=this.listenerChain[c][b];
if(d.call){d.call(this,{type:c,data:a})
}}},callFunction:function(b,e,c,d){var a=this.functions[b];
if(a){return this.functions[b].apply(this.objects[b],e)
}else{return null
}},registerFunction:function(b,a,c){this.functions[b]=c;
this.objects[b]=a
}});
$pdk.queue.deferred.DeferredShell=$pdk.extend(function(){},{_STATE:{STARTING:"STARTING",LOADING:"LOADING",RESTING:"RESTING"},_INPUT:{FUNCTION:"FUNCTION",EVENT:"EVENT",LOADED:"LOADED",LOAD_CANCELED:"LOAD_CANCELED"},constructor:function(a,b){this._queue=[];
this._listeners={};
this._functions={};
this._currentState=this._STATE.STARTING;
this._controller=a;
this._controllerDeferred=$pdk.isEmpty(b)?new $pdk.queue.deferred.DeferredController():b
},getRegisteredFunctions:function(){return this._functions
},addFunction:function(a){var b=this;
this._functions[a]=function(){b._queueFunction(a,arguments)
};
this._controller.registerFunction(a,{},this._functions[a])
},addListener:function(a,b){var c=this;
this._listeners[a]=function(d){c._queueEvent(a,d.data,b)
};
this._controller.addEventListener(a,this._listeners[a])
},_queueFunction:function(a,b){this._stateInput(this._INPUT.FUNCTION,{type:"function",name:a,parameters:b,triggerLoad:true})
},_queueEvent:function(a,c,b){this._stateInput(this._INPUT.EVENT,{type:"event",name:a,data:c,triggerLoad:b})
},_stateInput:function(a,b){switch(this._currentState){case this._STATE.STARTING:switch(a){case this._INPUT.FUNCTION:case this._INPUT.EVENT:this._queue.push(b);
break;
default:break
}if(b.triggerLoad){this._changeState(this._STATE.LOADING,b)
}break;
case this._STATE.LOADING:switch(a){case this._INPUT.FUNCTION:case this._INPUT.EVENT:this._queue.push(b);
break;
case this._INPUT.LOADED:this._changeState(this._STATE.RESTING,b);
break;
case this._INPUT.LOAD_CANCELED:this._changeState(this._STATE.STARTING,b);
break;
default:break
}break;
case this._STATE.RESTING:switch(a){case this._INPUT.FUNCTION:this._controller.callFunction(b.name,b.parameters);
break;
case this._INPUT.EVENT:this._controller.dispatchEvent(b.name,b.data);
break;
default:break
}break;
default:break
}},_changeState:function(d,c){var b;
switch(d){case this._STATE.STARTING:this._currentState=this._STATE.STARTING;
break;
case this._STATE.LOADING:this._currentState=this._STATE.LOADING;
this._load(c);
break;
case this._STATE.RESTING:for(var a in this._listeners){this._controller.removeEventListener(a,this._listeners[a])
}while(this._queue.length>0){b=this._queue.shift();
switch(b.type){case"function":this._controller.callFunction(b.name,b.parameters);
break;
case"event":this._controllerDeferred.dispatchEvent(b.name,b.data);
break;
default:break
}}this._currentState=this._STATE.RESTING;
break;
default:break
}},_load:function(a){}});
$pdk.queue.deferred.OneWayController=$pdk.extend($pdk.queue.deferred.DeferredController,{constructor:function(a,b){$pdk.queue.deferred.OneWayController.superclass.constructor.call(this,a);
this._globalController=b
},addEventListener:function(){$pdk.queue.deferred.OneWayController.superclass.addEventListener.apply(this,arguments);
this._globalController.addEventListener.apply(this._globalController,arguments)
},removeEventListener:function(){$pdk.queue.deferred.OneWayController.superclass.removeEventListener.apply(this,arguments);
this._globalController.removeEventListener.apply(this._globalController,arguments)
},registerFunction:function(b,a,c){$pdk.queue.deferred.OneWayController.superclass.registerFunction.apply(this,arguments);
this._globalController.registerFunction(b,function(){return c.apply(a,arguments)
},null,true)
}});
$pdk.ns("$pdk.queue.deferred.ShellController.flash");
$pdk.apply($pdk.queue.deferred.ShellController.flash,{_currentContextId:0,_contexts:{},create:function(){var a=new $pdk.queue.deferred.DeferredController();
$pdk.queue.deferred.ShellController.flash._contexts[++$pdk.queue.deferred.ShellController.flash._currentContextId]=a;
return $pdk.queue.deferred.ShellController.flash._currentContextId
},getContext:function(a){return $pdk.queue.deferred.ShellController.flash._contexts[a]
},applyContextFunction:function(a,b,d){var c=$pdk.queue.deferred.ShellController.flash._contexts[a];
if(c!==null&&typeof(c)==="object"){var e=c.getRegisteredFunctions();
if(e!==null&&typeof(e[b])==="function"){e[b].apply(c,d)
}}},addEventListener:function(b,d,a,f){var e=$pdk.queue.deferred.ShellController.flash._contexts[b],c=$pdk.shell.Registry.getInstance().getShells().get(d),g=null;
if(e!==null&&typeof(e)==="object"&&c!==null&&typeof(c)==="object"){g=document.getElementById(c.getSwfObjectId());
if(g!==null&&(typeof(g)==="object"||typeof(g)=="function")&&typeof(g[f])==="function"){e.addEventListener(a,function(h){g[f].call(g,h)
})
}}}});
$pdk.ns("$pdk.queue.deferred.loader");
$pdk.queue.deferred.loader.CardsLoader=$pdk.extend($pdk.queue.deferred.DeferredShell,{constructor:function(b,a,c){this._cardsLoader=b;
$pdk.queue.deferred.loader.CardsLoader.superclass.constructor.call(this,a,c);
this.addFunction("addPlayerCard");
this.addFunction("showPlayerCard");
this.addFunction("hidePlayerCard");
this.addListener("OnMediaAreaChanged",false);
this.addListener("OnOverlayAreaChanged",false);
this.addListener("OnMediaAreaChangedFlash",false);
this.addListener("OnOverlayAreaChangedFlash",false);
this.addListener("OnMediaStart",false);
this.addListener("OnReleaseStart",false);
this.addListener("OnLoadRelease",false);
this.addListener("OnLoadReleaseUrl",false);
this.addListener("OnSetRelease",false);
this.addListener("OnPlayerComponentAreaChanged",false)
},_load:function(){var a=this;
a._cardsLoader({onSuccess:function(){tpDebug("success loading cards");
a._stateInput(a._INPUT.LOADED,{})
},onUnavailable:function(b){tpDebug("failed to load cards: "+b)
}})
}});
$pdk.queue.deferred.loader.ControlsLoader=$pdk.extend($pdk.queue.deferred.DeferredShell,{constructor:function(a,b,d,c){$pdk.queue.deferred.loader.ControlsLoader.superclass.constructor.call(this,a);
this._playerId=b;
this._onSuccess=d;
this._onFailure=c;
this.addListener("OnMediaPlaying",true);
this.addListener("OnPlayerLoaded",true);
this.addListener("OnGetSubtitleLanguage",false);
this.addListener("OnHideCard",false);
this.addListener("OnLoadRelease",false);
this.addListener("OnLoadReleaseUrl",false);
this.addListener("OnMediaEnd",false);
this.addListener("OnMediaLoadStart",false);
this.addListener("OnMediaLoading",false);
this.addListener("OnMediaPause",false);
this.addListener("OnMediaSeek",false);
this.addListener("OnMediaStart",false);
this.addListener("OnMediaUnpause",false);
this.addListener("OnMute",false);
this.addListener("OnReleaseEnd",false);
this.addListener("OnReleaseStart",false);
this.addListener("OnResize",false);
this.addListener("OnSetReleaseUrl",false);
this.addListener("OnShowCard",false);
this.addListener("OnShowFullScreen",false);
this.addListener("OnShowPlayOverlay",false);
this.addListener("OnVolumeChange",false)
},_load:function(c){var a=this;
var b=new com.theplatform.pdk.controls.loader.ControlsLoaderExported();
b.load(a._controller,a._controllerDeferred,a._playerId,c.name,a._onSuccess,a._onFailure,{onSuccess:function(){tpDebug("success loading com.theplatform.pdk.controls.loader.ControlsLoaderExported","Controls");
a._stateInput(a._INPUT.LOADED,{})
},onUnavailable:function(d){tpDebug("could not load com.theplatform.pdk.controls.loader.ControlsLoaderExported: "+d,"Controls");
a._stateInput(a._INPUT.LOAD_CANCELED,{})
}})
}});
$pdk.queue.deferred.loader.Subtitles=$pdk.extend($pdk.queue.deferred.DeferredShell,{constructor:function(g,e,h,a,f,j,d,c,b){$pdk.queue.deferred.loader.Subtitles.superclass.constructor.call(this,g);
this._initOverlayArea=e;
this._viewElement=h;
this._subtitleSettingsCookieName=a;
this._defaultFontSizePixel=f;
this._defaultStyle=j;
this._defaultMissingRegionStyle=d;
this._showSubtitles=c;
this._enableDynamicSubtitleFonts=b;
this.addFunction("setShowSubtitles");
this.addListener("OnGetSubtitleLanguage",true);
this.addListener("OnOverlayAreaChanged",false);
this.addListener("OnSubtitleCuePoint",true);
this.addListener("OnMediaStart",true)
},_load:function(){var a=this;
$pdk.Entrypoint.getInstance().addCallback(function(){var b=new com.theplatform.pdk.subtitles.loader.SubtitlesLoaderExported();
b.load(a._viewElement,a._defaultFontSizePixel,a._defaultStyle,a._defaultMissingRegionStyle,a._subtitleSettingsCookieName,a._enableDynamicSubtitleFonts,a._showSubtitles,a._controller,a._controllerDeferred,{onSuccess:function(){tpDebug("success loading com.theplatform.pdk.subtitles.webapp.SubtitlesExported","Subtitles");
a._stateInput(a._INPUT.LOADED,{})
},onUnavailable:function(c){tpDebug("could not load com.theplatform.pdk.subtitles.webapp.SubtitlesExported: "+c,"Subtitles",tpConsts.ERROR)
}})
})
}});
$pdk.queue.deferred.loader.SubtitlesSettingsManager=$pdk.extend($pdk.queue.deferred.DeferredShell,{constructor:function(a,b){$pdk.queue.deferred.loader.SubtitlesSettingsManager.superclass.constructor.call(this,a);
this._subtitleSettingsCookieName=b;
this.addFunction("getSubtitleLanguage");
this.addFunction("getSubtitleStyle");
this.addFunction("setSubtitleLanguage");
this.addFunction("setSubtitleStyle")
},_load:function(){var a=this;
$pdk.Entrypoint.getInstance().addCallback(function(){var b=new com.theplatform.pdk.subtitles.loader.SubtitlesSettingsManagerLoaderExported();
b.load(a._subtitleSettingsCookieName,a._controller,a._controllerDeferred,{onSuccess:function(){tpDebug("success loading com.theplatform.pdk.subtitles.loader.SubtitlesSettingsManagerLoaderExported","SubtitlesSettingsManagerLoader");
a._stateInput(a._INPUT.LOADED,{})
},onUnavailable:function(c){tpDebug("could not load com.theplatform.pdk.subtitles.loader.SubtitlesSettingsManagerLoaderExported: "+c,"SubtitlesSettingsManagerLoader",tpConsts.ERROR)
}})
})
}});
$pdk.queue.deferred.loader.SubtitlesSettingsManager.flash={_currentContextId:0,_contexts:{},create:function(c,d){var a=$pdk.queue.deferred.ShellController.flash.getContext(c),b=new $pdk.queue.deferred.loader.SubtitlesSettingsManager(a,d);
$pdk.queue.deferred.loader.SubtitlesSettingsManager.flash._contexts[++$pdk.queue.deferred.loader.SubtitlesSettingsManager.flash._currentContextId]=b;
return $pdk.queue.deferred.loader.SubtitlesSettingsManager.flash._currentContextId
},applyContextFunction:function(a,b,d){var c=$pdk.queue.deferred.loader.SubtitlesSettingsManager.flash._contexts[a];
if(c!==null&&typeof(c)==="object"){var e=c.getRegisteredFunctions();
if(e!==null&&typeof(e[b])==="function"){e[b].apply(c,d)
}}}};
$pdk.ns("$pdk.shell");
$pdk.shell.DefaultsAbstractImpl=$pdk.extend(function(){},{decorate:function(b,c,a){b.fp.allowscriptaccess="always";
b.fp.menu=true;
b.fp.salign="tl";
b.fp.scale="noscale";
b.fp.wmode="transparent";
b.fa.wmode="transparent"
},configureRuntime:function(c,d){var b=c.supportedMedia.split(",");
tpDebug("configuring shell "+c.getName(),"bootloader","$pdk.shell.DefaultsAbstractImpl",tpConsts.INFO);
if(!$pdk.isIE6){if($pdk.isAndroid&&d.canPlayTypeAugmentation()){b=d.sortM3uArray(b)
}var a=d.getMediaFactory().getBestRuntime(c.getName(),d.getPreferredFormatsUnfiltered(),b);
c.setRuntime(a.runtime);
tpDebug("best_runtime.runtime: "+a.runtime,"bootloader","$pdk.shell.DefaultsAbstractImpl",tpConsts.DEBUG);
tpDebug("best_runtime.medium: "+a.medium,"bootloader","$pdk.shell.DefaultsAbstractImpl",tpConsts.DEBUG);
c.setMedium(a.medium)
}else{c.setRuntime("flash");
c.setMedium(d.getPreferredFormatsUnfiltered()[0])
}this._is_phase1=$pdk.env.Detect.getInstance().isPhase1()
},isPhase1:function(){return this._is_phase1
}});
$pdk.shell.Base=$pdk.extend(function(){},{constructor:function(d,c,b){var a;
$pdk.shell.Base.superclass.constructor.call(this);
this.fp={};
this.fa={};
this.useBootloader="true";
this._markupId=typeof(d)==="string"?d:String(Math.round(Math.random()*100000000000000));
this._width=typeof(c)==="string"||typeof(c)==="number"?String(c):null;
this._height=typeof(b)==="string"||typeof(b)==="number"?String(b):null;
this._write_was_called=false;
this._attach_was_called=false;
this._gwt_component=null;
this._registry.add(this);
this._runtime=null;
this._medium=null;
this._configureProcessor=function(){};
this._config_decorator.decorate(this,this._env,this._registry)
},getWidth:function(){return this._width!==null?String(this._width):null
},getHeight:function(){return this._height!==null?String(this._height):null
},setWidth:function(a){this._width=a
},setHeight:function(a){this._height=a
},getId:function(){return this._markupId
},getSwfObjectId:function(){return this._markupId===null?null:["_",this._markupId,"PdkSwfObject"].join("")
},getName:function(){return this._name
},getMarkupClass:function(){return this._markupClass
},getRuntime:function(){if(typeof(this.runtime)==="string"){this._runtime=this.runtime;
delete this.runtime
}return this._runtime
},setRuntime:function(a){this._runtime=a
},getMedium:function(){return this._medium
},setMedium:function(a){this._medium=a
},asSwf:function(){return this._asSwf
},jsViewImpl:function(){return this._jsViewImpl
},jsViewCallBackName:function(){return this._jsViewCallBackName
},getPriority:function(){return this._priority
},write:function(){this._write_was_called=true;
var a=document.getElementsByTagName("script");
var b=a[a.length-1];
var c=b.parentNode;
this._registry.remove(this);
this._markupId=c.id;
this._registry.add(this);
this.bind()
},attach:function(){this.bind()
},bind:function(){this._attach_was_called=true;
if(this._env.GWTReady()){this._attachToGWT()
}},resyncAttach:function(){if(this._attach_was_called){this._attachToGWT()
}},_attachToGWT:function(){var a;
if(this._gwt_component===null){tpSetCssClass(this._markupId,this._markupClass);
a=new com.theplatform.pdk.ComponentFactory(this.getName(),this.getConfig());
this._gwt_component=a.create();
this._gwt_component.bind()
}},getConfig:function(){this._prepareConfigure();
var c={id:this._markupId,skinurl:this._env.baseDir()+"/skins/glass/glass.json"},b;
c=this._normalizeNVP(this,c);
if(this.getName()==="Player"&&c.releaseurl===undefined){c.releaseurl=this._env.getModelUrls().releaseurl
}delete this.fa.height;
delete this.fa.width;
delete this.fp.height;
delete this.fp.width;
delete c.height;
delete c.width;
delete c.engine;
var a=this.jsViewImpl();
if(a&&a!==""&&a.indexOf("@Bundle:")===-1){a=this._env.baseDir()+"/js/"+this.jsViewImpl()
}else{if(a.indexOf("@Bundle:")!==-1){a=a.replace("@Bundle:","")
}}return{as_swf:this._env.baseDir()+"/swf/"+this.asSwf(),js_view_impl:a,markup_class:this.getMarkupClass(),engine:this.getRuntime(),medium:this.getMedium(),markup_id:this.getId(),pdk_swf_object_id:this.getSwfObjectId(),variables:c,width:this.getWidth(),height:this.getHeight(),flash_attributes:this._normalizeNVP(this.fa,{}),flash_parameters:this._normalizeNVP(this.fp,{})}
},setConfigureProcessor:function(a){this._configureProcessor=a
},_prepareConfigure:function(){this._configureProcessor(this)
},_normalizeNVP:function(d,c){var b,a,e;
for(e in d){if(!e.match(/^_/)){b=d[e];
a=typeof(b);
if(a==="number"||a==="boolean"){b=String(b);
a="string"
}if(a==="string"){c[e.toLowerCase()]=b
}}}return c
}});
$pdk.shell.Collection=$pdk.extend(function(){},{constructor:function(){$pdk.shell.Collection.superclass.constructor.call(this);
this._shells={}
},put:function(b,a){this._shells[b]=a
},remove:function(a){delete this._shells[a]
},get:function(a){return this._shells[a]
},keys:function(){var b,a=[];
for(b in this._shells){if(this._shells[b]!==Object.prototype[b]){a.push(b)
}}return a
},toArray:function(){var d=[],c=this.keys(),a=c.length,b;
for(b=0;
b<a;
b++){d.push(this.get(c[b]))
}return d
}});
$pdk.shell.DefaultsCategoryListImpl=$pdk.extend($pdk.shell.DefaultsAbstractImpl,{decorate:function(b,c,a){$pdk.shell.DefaultsCategoryListImpl.superclass.decorate.apply(this,arguments);
b.divId=b.getId();
b.supportedMedia="actionscript";
if(typeof(b.expandedcssclass)!=="string"||b.expandedcssclass.length>0){b.expandedcssclass=b.getMarkupClass()+"Expanded"
}this.configureRuntime(b,c);
if(this.isPhase1()){this.setPhase1Defaults(b)
}},setPhase1Defaults:function(a){a.allchoiceindex=1;
a.allchoicelabel="All Videos";
a.backgroundcolor="0x383838";
a.expandedheight=198;
a.expandedwidth=795;
a.expandercolor="0xBEBEBE";
a.expanderhovercolor="0xBEBEBE";
a.expanderselectedcolor="0x00CCFF";
a.framecolor="0x545759";
a.itembackgroundcolor="0x383838";
a.itemframecolor="0x131313";
a.itemshineselectedcolor="0x00CCFF";
a.mostpopularchoiceindex=2;
a.mostpopularchoicelabel="Most Popular";
a.textcolor="0xBEBEBE";
a.textframecolor="0x242424";
a.textframehovercolor="0xBEBEBE";
a.textframeselectedcolor="0x00CCFF";
a.texthovercolor="0xBEBEBE";
a.textselectedcolor="0x00CCFF"
}});
$pdk.shell.DefaultsCategoryModelImpl=$pdk.extend($pdk.shell.DefaultsAbstractImpl,{decorate:function(b,c,a){$pdk.shell.DefaultsCategoryModelImpl.superclass.decorate.apply(this,arguments);
b.setWidth(1);
b.setHeight(1);
b.supportedMedia="actionscript";
this.configureRuntime(b,c);
b.setConfigureProcessor(function(d){if(typeof(d.feedpid)==="string"&&d.feedpid.length>0){d.setRuntime("flash");
d.setMedium("javascript")
}})
}});
$pdk.shell.DefaultsClipInfoImpl=$pdk.extend($pdk.shell.DefaultsAbstractImpl,{decorate:function(c,e,b){var a=c.getWidth(),d=c.getHeight();
if(typeof(a)!=="string"||a.length<1){c.setWidth("100%")
}if(typeof(d)!=="string"||d.length<1){c.setHeight("100%")
}$pdk.shell.DefaultsClipInfoImpl.superclass.decorate.apply(this,arguments);
c.supportedMedia="actionscript,javascript";
this.configureRuntime(c,e);
if(this.isPhase1()){this.setPhase1Defaults(c)
}},setPhase1Defaults:function(a){a.backgroundcolor="0xFFFFFF";
a.banneralignment="top";
a.bannerregions="";
a.descriptioncolor="0xF2F2F2";
a.framecolor="0xFFFFFF";
a.titlecolor="0xF2F2F2"
}});
$pdk.shell.DefaultsHeaderImpl=$pdk.extend($pdk.shell.DefaultsAbstractImpl,{decorate:function(b,c,a){$pdk.shell.DefaultsHeaderImpl.superclass.decorate.apply(this,arguments);
b.backgroundcolor="0x383838";
b.framecolor="0x545759";
b.supportedMedia="actionscript";
this.configureRuntime(b,c)
}});
$pdk.shell.DefaultsNavigationImpl=$pdk.extend($pdk.shell.DefaultsAbstractImpl,{decorate:function(b,c,a){$pdk.shell.DefaultsNavigationImpl.superclass.decorate.apply(this,arguments);
b.supportedMedia="actionscript,javascript";
this.configureRuntime(b,c);
if(this.isPhase1()){this.setPhase1Defaults(b)
}},setPhase1Defaults:function(a){a.backgroundcolor="0x131313";
a.framecolor="0x000000";
a.itembackgroundcolor="0x383838";
a.itemframecolor="0xFF0000";
a.itemshineselectedcolor="0xFF0000";
a.textbackgroundcolor="0x383838";
a.textcolor="0xDFDFDF";
a.textframecolor="0x383838";
a.texthighlighthovercolor="0x00CCFF";
a.texthighlightselectedcolor="0xFFFFFF";
a.texthovercolor="0xDFDFDF";
a.textselectedcolor="0xDFDFDF";
a.thumbnailbackgroundcolor="0x242424";
a.thumbnailframecolor="0x383838";
a.thumbnailhighlighthovercolor="0x00CCFF";
a.thumbnailhighlightselectedcolor="0xFFFFFF";
a.controlbackgroundcolor="0xFF0000";
a.controlcolor="0xF2F2F2";
a.controlframecolor="0xFF0000";
a.controlframehovercolor="0xFF0000";
a.controlframeselectedcolor="0xFF0000";
a.controlhovercolor="0xFFFFFF";
a.controlselectedcolor="0x00CCFF";
a.infocolor="0x1D1D1D";
a.itemsperpage=4;
a.fa.wmode="transparent";
a.fp.wmode="transparent"
}});
$pdk.shell.DefaultsNoOpImpl=$pdk.extend($pdk.shell.DefaultsAbstractImpl,{decorate:function(b,c,a){}});
$pdk.shell.DefaultsPlayerImpl=$pdk.extend($pdk.shell.DefaultsAbstractImpl,{decorate:function(k,j,b){$pdk.shell.DefaultsPlayerImpl.superclass.decorate.apply(this,arguments);
var c=document.getElementById(k.getId()),a,l=k.getWidth(),f=k.getHeight(),g=j.getConfigSet("usedefaultcards");
if(typeof(l)!=="string"||l.length<1){k.setWidth("100%")
}if(typeof(f)!=="string"||f.length<1){k.setHeight("100%")
}if(c===null){var e=document.getElementsByTagName("script");
var m=e[e.length-1];
var d=m.parentNode;
this._markupId=d.id;
c=d
}if(c.nodeName.toLowerCase()=="video"){a=c.getElementsByTagName("source");
if(a&&a.length&&a[0].src){k.releaseurl=a[0].src.split("?")[0]
}else{if(c.src){k.releaseurl=c.src.split("?")[0]
}}if(c.poster){k.previewimageurl=c.poster
}if(c.autoplay){k.autoplay=c.autoplay
}}if(!j.rssurl&&j.getModelUrls().rssurl){k.rssurl=j.getModelUrls().rssurl
}if(!this.isPhase1()){k.backgroundcolor="0x131313";
k.controlbackgroundcolor="0x131313";
k.controlcolor="0xF2F2F2";
k.controlframecolor="0xE0E0E0";
k.controlhovercolor="0xFFFFFF";
k.controlselectedcolor="0x00CCFF";
k.framecolor="0xE0E0E0";
k.loadprogresscolor="0x7C7C7C";
k.pagebackgroundcolor="0x131313";
k.playprogresscolor="0xE0E0E0";
k.scrubtrackcolor="0x131313";
k.scrubbercolor="0xF2F2F2";
k.scrubberframecolor="0xF2F2F2";
k.textbackgroundcolor="0x383838";
k.textcolor="0xF2F2F2"
}k.allowfullscreen=true;
k.fa.allowfullscreen="true";
k.fp.allowfullscreen="true";
k.wmode=k.fa.wmode=k.fp.wmode="opaque";
k.supportedMedia="mpeg4,f4m,flv,m3u,ogg,webm,mpeg,qt,3gpp,ism,wm,3gpp2,aac,asx,avi,move,mp3,mpeg-dash";
k.releaseUrlFormatResolution=false;
this.configureRuntime(k,j);
j.setPlaybackFormat(k.getMedium());
j.setPlaybackRuntime(k.getRuntime());
k.useDefaultCards=k.getRuntime()==="html5";
if(!$pdk.isEmpty(g)){k.useDefaultCards=g.toArray()[0].toLowerCase()!=="false"
}}});
$pdk.shell.DefaultsReleaseListImpl=$pdk.extend($pdk.shell.DefaultsAbstractImpl,{decorate:function(b,c,a){$pdk.shell.DefaultsReleaseListImpl.superclass.decorate.apply(this,arguments);
b.supportedMedia="actionscript,javascript";
this.configureRuntime(b,c);
if(this.isPhase1()){this.setPhase1Defaults(b)
}},setPhase1Defaults:function(a){a.allowscrolling="false";
a.animation="slideHorizontal";
a.backgroundcolor="0x131313";
a.columns=2;
a.framecolor="0x383838";
a.itembackgroundcolor="0x383838";
a.itemframecolor="0x383838";
a.itemshineselectedcolor="0x383838";
a.itemsperpage=4;
a.textbackgroundcolor="0x383838";
a.textcolor="0xDFDFDF";
a.textframecolor="0x383838";
a.texthighlighthovercolor="0x00CCFF";
a.texthighlightselectedcolor="0xFFFFFF";
a.texthovercolor="0xDFDFDF";
a.textselectedcolor="0xDFDFDF";
a.thumbnailbackgroundcolor="0x242424";
a.thumbnailframecolor="0x383838";
a.thumbnailheight=75;
a.thumbnailhighlighthovercolor="0x00CCFF";
a.thumbnailhighlightselectedcolor="0xFFFFFF";
a.thumbnailwidth=100;
a.showairdate=false;
a.showauthor=false;
a.showbitrate=false;
a.showdescription=true;
a.showformat=false;
a.showlength=true;
a.showthumbnail=true;
a.showtitle=true
}});
$pdk.shell.DefaultsReleaseModelImpl=$pdk.extend($pdk.shell.DefaultsAbstractImpl,{decorate:function(b,c,a){$pdk.shell.DefaultsReleaseModelImpl.superclass.decorate.apply(this,arguments);
b.setWidth(1);
b.setHeight(1);
b.params=this._createParams(c);
b.supportedMedia="actionscript,javascript";
b._paramsOriginal=b.params;
this.configureRuntime(b,c);
b.setConfigureProcessor(function(d){if(typeof(d.feedpid)==="string"&&d.feedpid.length>0){d.setRuntime("flash");
d.setMedium("javascript")
}})
},_createParams:function(c){tpDebug("looking up best format for player","bootloader","$pdk.shell.DefaultsReleaseModelImpl",tpConsts.INFO);
var d=null,a=c.getMediaFactory().getBestRuntime("Player",c.getPreferredFormatsUnfiltered(),["mpeg4","f4m","flv","m3u","ogg","webm","mpeg","qt","3gpp","ism","wm","3gpp2","aac","asx","avi","move","mp3","mpeg-dash"]),b=c.getPlayerFormats(a.runtime);
if(b.length>0){tpDebug("using player formats: "+b.join(", "),"bootloader","$pdk.shell.DefaultsReleaseModelImpl",tpConsts.INFO);
d=b.join("|")
}else{b=c.getPreferredFormatsUnfiltered();
if(b.length>0){tpDebug("Release model could not find viable format for player. Choosing first preferred format from ("+b.join(", ")+")","bootloader","$pdk.shell.DefaultsReleaseModelImpl",tpConsts.INFO);
d=b[0]
}else{tpDebug("Could not find a preferred format. Release model will fetch all formats.","bootloader","$pdk.shell.DefaultsReleaseModelImpl",tpConsts.WARN)
}}return d===null?"":"byContent=byFormat%3D"+d
}});
$pdk.shell.DefaultsSearchImpl=$pdk.extend($pdk.shell.DefaultsAbstractImpl,{decorate:function(b,c,a){$pdk.shell.DefaultsSearchImpl.superclass.decorate.apply(this,arguments);
b.backgroundcolor="0x131313";
b.controlbackgroundcolor="0x242424";
b.controlcolor="0xBEBEBE";
b.controlframecolor="0x545759";
b.controlframehovercolor="0xBEBEBE";
b.controlframeselectedcolor="0x00CCFF";
b.controlhovercolor="0xBEBEBE";
b.controlselectedcolor="0x00CCFF";
b.editbackgroundcolor="0x131313";
b.editcolor="0xBEBEBE";
b.framecolor="0x545759";
b.labelcolor="0xBEBEBE";
b.searchhint="Search...";
b.searchlabel="Search";
b.supportedMedia="actionscript,javascript";
this.configureRuntime(b,c)
}});
$pdk.shell.Factory=$pdk.apply({},{generate:function(j,a,f){var e,d,k=j.length,g,h,c,b;
for(e=0;
e<k;
e++){d=j[e];
h=$pdk.shell.Factory.CLASS_TABLE[d.markupClass];
if(d.markupClass=="tpPlayer"){if($pdk.isEmpty(d.tpVars.releaseurl)){c=f.getModelUrls().releaseurl;
if(typeof(c)==="string"&&c.length>0){d.tpVars.releaseurl=c
}}}if(typeof(h)==="function"){g=a.getShells().get(d.markupId);
g=g===null||typeof(g)!=="object"?new h(d.markupId):g;
$pdk.apply(g,d.tpVars);
$pdk.apply(g.fp,d.tpFp);
$pdk.apply(g.fa,d.tpFa);
g.attach()
}}$pdk.shell.Factory._generateMissingModels(a,f)
},_generateMissingModels:function(a,g){var h=a.getShells().toArray(),k=[],e=0,c=0,d,b=h.length,f,j;
for(d=0;
d<b;
d++){f=h[d];
switch(f.getName()){case"ReleaseList":c++;
k.push(parseInt(f.itemsperpage,10));
break;
case"ReleaseModel":c--;
break;
case"CategoryList":e++;
break;
case"CategoryModel":e--;
break;
default:break
}}for(d=0;
d<c;
d++){f=$pdk.shell.Factory._buildModelShell(g,"releasemodel"+String(d),"tpReleaseModel",$pdk.shell.Factory.CLASS_TABLE.tpReleaseModel,[g.getModelUrls().releasemodel,g.getModelUrls().releasemodelbase],1,k[d])
}for(d=0;
d<e;
d++){f=$pdk.shell.Factory._buildModelShell(g,"categorymodel"+String(d),"tpCategoryModel",$pdk.shell.Factory.CLASS_TABLE.tpCategoryModel,[g.getModelUrls().categorymodel,g.getModelUrls().categorymodelbase])
}},_buildModelShell:function(h,c,f,j,k,d,e){var b=document.createElement("div"),g=new j(c,1,1),a;
b.id=c;
b.className=f;
b.setAttribute("style","position:absolute; top:0px; left:0px; width:1px; height:1px;");
document.body.insertBefore(b,document.body.childNodes[0]);
if($pdk.isArray(k)&&k.length>0){a=k[0];
if(typeof(a)==="string"&&a.length>0){g.feedsServiceUrl=a
}a=k[1];
if(typeof(a)==="string"&&a.length>0){g.feedsServiceUrlBase=a
}}if(d){g.startIndex=d
}if(e){g.endIndex=e
}g.attach();
return g
},getNamesFromDomElements:function(h){var q,r,v,k,c,u=h.length,t,p,w,g,x,d,e,l,o,j=[],f={},s={},m={},y,b;
for(t=0;
t<u;
t++){f={};
s={};
m={};
c=h[t];
e=c.attributes;
attributes_l=e.length;
for(w=0;
w<attributes_l;
w++){g=e[w];
d=g.nodeValue;
switch(g.name){case"class":q=d;
break;
case"id":o=d;
break;
default:if(g.name.match(/^tp:/)){x=g.name.replace(/^tp:/,"").toLowerCase();
b=x.match(/^fa\./)!==null?"fa":"var";
b=x.match(/^fp\./)!==null?"fp":b;
switch(b){case"fa":s[x.replace(/^fa\./,"")]=d;
break;
case"fp":m[x.replace(/^fp\./,"")]=d;
break;
case"var":f[x]=d;
break;
default:break
}}break
}}v=typeof(q)==="string"?q.split(" "):[];
k=v.length;
for(p=0;
p<k;
p++){r=v[p];
if(r.match(/^tp/)){j.push({markupClass:r,markupId:o,tpVars:$pdk.apply({},f),tpFp:$pdk.apply({},m),tpFa:$pdk.apply({},s)})
}}}return j
},CLASS_TABLE:{}});
$pdk.ns("$pdk.shell.Registry");
$pdk.shell.Registry._class=$pdk.extend(function(){},{constructor:function(){$pdk.shell.Registry._class.superclass.constructor.call(this);
this._collection=new $pdk.shell.Collection();
this._swfloader=null
},getShells:function(){return this._collection
},bind:function(a){this._swfloader=a
},add:function(a){this._collection.put(a.getId(),a)
},remove:function(a){this._collection.remove(a.getId())
},hasPlayer:function(){var a=this._collection.toArray();
var b=0;
len=a.length;
for(;
b<len;
b++){if(a[b].getName()==="Player"){return true
}}return false
},connectShellsToGwt:function(){var c,b,e=this._collection.toArray().sort(function(g,f){return g.getPriority()>f.getPriority()
}),d=e.length,a;
for(c=0;
c<d;
c++){b=e[c];
if(b.getRuntime()==="flash"){this._swfloader.add(b)
}else{b.resyncAttach()
}}this._swfloader.initializeShells()
},satisfyShellDeps:function(){var w,j,u,m=null,s,E,b,c,d,q,r,f,t,h,a,B,A=false,v,l=this._collection.toArray(),D={},C=l.length,o,k;
for(u=0;
u<C;
u++){v=l[u];
E=v.getName();
if($pdk.isEmpty(D[E])){D[E]=[]
}D[E].push(v)
}try{j=D.ReleaseModel.length;
if(j>0){w=D.Player.length;
for(u=0;
u<w;
u++){D.Player[u].releaseUrlFormatResolution=true
}}var p=D.ReleaseModel;
for(u=0;
u<p.length;
u++){if(p[u].params&&p[u]._paramsOriginal.indexOf("byContent")>=0&&p[u].params.indexOf("byContent")==-1){p[u].params+="&"+p[u]._paramsOriginal
}}}catch(g){}try{B=D.ReleaseList.length;
r=D.Navigation.length;
for(u=0;
u<r;
u++){b=D.Navigation[u];
m=b.itemsPerPage;
m=$pdk.isEmpty(m)?null:m;
m=m===null?b.itemsperpage:m;
m=$pdk.isEmpty(m)?null:m;
if(m===null){delete b.itemsPerPage;
d=typeof(b.scopes)==="string"?b.scopes.split(","):[];
q=d.length;
for(s=0;
s<B&&m===null;
s++){f=D.ReleaseList[s];
h=typeof(f.scopes)==="string"?f.scopes.split(","):[];
a=h.length;
if(q<1&&a<1){A=true
}else{A=false;
for(k=0;
k<q&&A===false;
k++){c=d[k];
for(o=0;
o<a&&A===false;
o++){t=h[o];
A=c===t
}}}if(A){m=f.itemsPerPage;
m=$pdk.isEmpty(m)?null:m;
m=m===null?f.itemsperpage:m;
m=$pdk.isEmpty(m)?null:m
}}if(m!==null){b.itemsperpage=m
}}}}catch(y){}}});
$pdk.shell.Registry._singleton=null;
$pdk.shell.Registry.getInstance=function(){if($pdk.shell.Registry._singleton===null){$pdk.shell.Registry._singleton=new $pdk.shell.Registry._class()
}return $pdk.shell.Registry._singleton
};
$pdk.shell.SwfSerializedLoader=$pdk.extend(function(){},{constructor:function(){this._shells_unattached=[];
this._shells_unattached_batched={};
this._batch_index=[];
this._expected_responses=0;
this._timeouts=[]
},add:function(a){this._shells_unattached.push(a)
},initializeShells:function(){while(this._shells_unattached.length>0){this._batch(this._shells_unattached.shift())
}this._processNextBatch()
},onSwfReady:function(){this._expected_responses--;
if(this._expected_responses<1){this._processNextBatch()
}},_processNextBatch:function(){var d=this._batch_index.shift(),c=this._shells_unattached_batched[d],a=0,b=this;
while(this._timeouts.length){window.clearTimeout(this._timeouts.shift())
}if(!$pdk.isEmpty(c)){while(c.length){shell=c.shift();
shell.resyncAttach();
a++
}}this._expected_responses=a;
if(this._expected_responses>0){this._timeouts.push(window.setTimeout(function(){b._onTimeout(d)
},5000))
}},_onTimeout:function(a){this._expected_responses=0;
this._processNextBatch()
},_batch:function(a){var b=String(a.getPriority());
if($pdk.isEmpty(this._shells_unattached_batched[b])){this._shells_unattached_batched[b]=[];
this._batch_index.push(b)
}this._shells_unattached_batched[b].push(a)
}});
$pdk.bootloaderVersion=new $pdk.PdkVersion("5","3","6","325980","2013-12-12 2:17 PM");
function tpExternalControllerClass(){this.playerTypes=new Object();
this.extPlayers=new Object();
this.registerExternalPlayer=function(type,playerClass){this.playerTypes[type]=playerClass
};
this.routeMessage=function(swfId,controllerId,streamType,funcName,args){var curController=this.extPlayers[controllerId];
if(!curController){curController=this.extPlayers[controllerId]={}
}var curPlayer=curController[streamType];
if(!curPlayer){var playerClass=this.playerTypes[streamType];
if(!playerClass){return
}curPlayer=eval("new "+playerClass+"('"+swfId+"', '"+controllerId+"');");
if(!curPlayer){return
}curController[streamType]=curPlayer
}curPlayer[funcName](args)
};
this.returnMessage=function(swfId,controllerId,funcName,args){var obj=tpThisMovie(swfId);
obj.receiveJSMessage(controllerId,funcName,args)
};
this.cleanup=function(){for(var controllerId in this.extPlayers){var players=this.extPlayers[controllerId];
for(var player in players){players[player].cleanup();
delete players[player]
}delete this.extPlayers[controllerId]
}}
}function tpExternalMessage(b,d,c,e,a){window.tpExternalController.routeMessage(b,d,c,e,a)
}window.tpExternalController=new tpExternalControllerClass();
function tpShowAlert(a){switch(a){case"FULLSCREEN_DISABLED":alert("Full screen is only available with Flash 9 or later");
break
}}tpScriptLoader=new ScriptLoader();
function tpLoadJScript(a,d,c,b){tpScriptLoader.addScript(a,d,c,b)
}function callbackDispatcher(a){tpScriptLoader.callbackDispatcher(a)
}function invokeCallbacks(a){tpScriptLoader.invokeCallbacks()
}function LoadObj(a,d,c,b){this.script=a;
this.callback=d;
this.id=c;
this.atts=b
}function ScriptLoader(){this.scriptQueue=new Array();
this.callbackQueue=new Array()
}ScriptLoader.prototype.addScript=function(a,e,d,c){var b=new LoadObj(a,e,d,c);
this.scriptQueue.push(b);
if(this.scriptQueue.length==1){this.checkScriptQueue()
}};
ScriptLoader.prototype.checkScriptQueue=function(){if(this.scriptQueue.length){var a=this.scriptQueue.shift();
this.loadScript(a)
}else{interval_id=setInterval("invokeCallbacks()",100)
}};
ScriptLoader.prototype.callbackDispatcher=function(b){for(var a in this.callbackQueue){if(this.callbackQueue[a]==b){this.checkScriptQueue();
return
}}this.callbackQueue.push(b);
this.checkScriptQueue()
};
ScriptLoader.prototype.invokeCallbacks=function(){clearInterval(interval_id);
while(this.callbackQueue.length){var loadObj=this.callbackQueue.shift();
eval(loadObj.callback)(loadObj.script)
}};
ScriptLoader.prototype.loadScript=function(h){var e=h.script;
var b=h.callback;
var g=h.id;
var f=h.atts;
var d=window.document.createElement("script");
d.charset="utf-8";
if(g){d.id=g
}d.type="text/javascript";
if(f){for(var c=0;
c<f.length;
c++){d.setAttribute(f[c].att,f[c].value)
}}d.src=e;
if(b){var a=function(k,j){j(k);
this.onreadystatechange=null;
this.onload=null;
this.onerror=null
};
d.onreadystatechange=function(){a(h,callbackDispatcher)
};
d.onload=function(){a(h,callbackDispatcher)
};
d.onerror=function(){a(h,callbackDispatcher)
}
}window.document.getElementsByTagName("head")[0].appendChild(d)
};
function tpLoadScript(f,c,h,g){var e=window.document.createElement("script");
e.charset="utf-8";
if(h){e.id=h
}e.type="text/javascript";
if(g){for(var d=0;
d<g.length;
d++){e.setAttribute(g[d].att,g[d].value)
}}e.src=f;
var b=false;
if(c){var a=function(j,k){j(k);
this.onreadystatechange=null;
this.onload=null;
this.onerror=null
};
e.onreadystatechange=function(){if((this.readyState==="loaded"||this.readyState==="complete"||this.readyState===4)&&!b){a(c,f);
b=true
}};
e.onload=function(){if(!b){b=true;
a(c,f)
}};
e.onerror=function(){if(!b){a(c,f)
}}
}window.document.getElementsByTagName("head")[0].appendChild(e)
}function tpGetScriptPath(){return $pdk.env.Detect.getInstance().baseDir()
}function tpSetCssClass(a,b){try{var f=document.getElementById(a),c=f.className;
c=typeof(c)==="string"?c:"";
if(c.match(new RegExp(b))===null){f.className=b+(c.length?" "+c:"")
}}catch(d){}}function tpUnsetCssClass(a,c){try{var g=document.getElementById(a),d=g.className,b=new RegExp(c+" ");
d=typeof(d)==="string"?d:"";
g.className=d.replace(b,"","g")
}catch(f){}}function tpResize(b,a,c){}function tpGetTop(a){result=0;
while(a){result+=a.offsetTop;
a=a.offsetParent
}return result
}function tpGetLeft(a){result=0;
while(a){result+=a.offsetLeft;
a=a.offsetParent
}return result
}tpThisJsObject=function(a){return window[a]
};
var tpRegisteredGWTWidgets={};
tpThisMovie=function(b){if(b=="communicationwidget"||window.tpRegisteredGWTWidgets&&tpRegisteredGWTWidgets[b]!=undefined){var c=tpThisJsObject("tpGwtCommManager");
if(c){return c
}}var a;
if(window.frame&&(window.frame.hasOwnProperty("contentWindow")||window.frame.hasOwnProperty("contentDocument"))){a=frame.contentWindow.document||frame.contentDocument.document
}else{a=document
}return a.getElementById(b)
};
function tpDebug(c,b,a,d){if(!b){b="javascript"
}if(!a){a="utils"
}if(!d){d=tpConsts.INFO
}else{if(typeof d=="string"){d=tpGetLevelNumber(d)
}}if(d<tpGetLevelNumber(tpGetLogLevel())){return
}if(tpController!==undefined){tpController.dispatchEvent("OnPdkTrace",{message:c,timestamp:(new Date().valueOf()),controllerId:b,className:a,level:d})
}else{tpTrace(c,(new Date()).valueOf(),b,a,d)
}}function tpOpenNewWindow(d,b,a){var c=window.open(d,b,a)
}var tpTrackingImage=new Image();
function tpCallTrackingUrl(a){a=unescape(a);
tpTrackingImage.src=a;
for(i=0;
((!tpTrackingImage.complete)&&(i<100000));
i++){}}var tpConsts={};
tpConsts.NONE=2000;
tpConsts.FATAL=1000;
tpConsts.ERROR=8;
tpConsts.WARN=6;
tpConsts.INFO=4;
tpConsts.DEBUG=2;
tpConsts.TEST=1;
function tpGetLevel(a){switch(a){case tpConsts.DEBUG:return"DEBUG";
case tpConsts.INFO:return"INFO";
case tpConsts.WARN:return"WARN";
case tpConsts.ERROR:return"ERROR";
case tpConsts.FATAL:return"FATAL";
case tpConsts.TEST:return"TEST";
case tpConsts.NONE:return"NONE"
}return"UNKNOWN"
}function tpGetLevelNumber(a){switch(a.toUpperCase()){case"DEBUG":return tpConsts.DEBUG;
case"INFO":return tpConsts.INFO;
case"WARN":return tpConsts.WARN;
case"ERROR":return tpConsts.ERROR;
case"FATAL":return tpConsts.FATAL;
case"TEST":return tpConsts.TEST;
case"NONE":return tpConsts.NONE
}return 4
}function tpTrace(c,e,d,g,a){if(typeof(window.console)!=="object"){return
}var f=new Date(Number(e));
var b=f.getMilliseconds();
if(b.toString().length==2){b="0"+b
}else{if(b.toString().length==1){b="00"+b
}}var h=f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+"."+b;
var j=h+" \t"+tpGetLevel(Number(a))+" \t"+d+" \t";
if(g&&g.length){j+=g+" :: "
}j+=c;
switch(Number(a)){case tpConsts.DEBUG:console.log(j);
break;
case tpConsts.INFO:console.info(j);
break;
case tpConsts.WARN:console.warn(j);
break;
case tpConsts.ERROR:case tpConsts.FATAL:console.error(j);
break
}}function tpGetUseJS(){return"true"
}function tpGetCommManagerID(){return tpCommID
}if(!self.tpLogLevel){tpLogLevel="warn"
}function tpSetLogLevel(a){tpLogLevel=a
}function tpGetLogLevel(){return tpLogLevel
}function tpGetProperties(){var a=new Object();
a.commManagerId=tpGetCommManagerID();
a.useJS=tpGetUseJS();
a.registeredComponents=tpGetRegisteredIDs();
a.logLevel=tpGetLogLevel();
return a
}var tpRegisteredIDArr;
function tpRegisterID(b){if(!tpRegisteredIDArr){tpRegisteredIDArr=[]
}for(var a=0;
a<tpRegisteredIDArr.length;
a++){if(tpRegisteredIDArr[a]==b){return
}}tpRegisteredIDArr.push(b)
}function tpGetRegisteredIDs(){return tpRegisteredIDArr
}var tpController;
var tpCommID;
var tpBridgeID;
var tpExternalController;
var tpGwtCommManager;
var useWorkerIfPossible=false;
var gwtWorker;
function tpDoInitGwtCommManager(){try{if(tpCommID=="communicationwidget"&&window.tpGwtCommManager===undefined){tpGwtCommManager=new com.theplatform.pdk.CommManager()
}else{if((window.tryWorker===undefined||!tryWorker)&&window.tpGwtCommManager===undefined){tpGwtCommManager=new com.theplatform.pdk.CommManager(tpCommID)
}}}catch(a){if(window.console!=undefined){console.error("GwtCommManager module failed to load 1!")
}else{}}}function tpInitGwtCommManager(b,a){try{if(useWorkerIfPossible&&Worker!=undefined){gwtWorker=new Worker("js/commManagerWorker.js");
tpGwtCommManager=new Object();
tpGwtCommManager.executeMessage=function(d){gwtWorker.postMessage(d)
};
gwtWorker.onmessage=function(d){console.log(d.data);
if(d.data.destination){tpReceiveMessage(d.data.destination,d.data.message)
}};
gwtWorker.onerror=function(d){if(self.console){console.error(d.message)
}}
}else{tpGwtCommManager=new com.theplatform.pdk.CommManager(tpCommID)
}}catch(c){if(a==true){if(console!=undefined){console.error("GwtCommManager module failed to load! 2")
}else{}}}}function tpSetCommManagerID(c,e,d,a,b){if(b){useWorkerIfPossible=true
}if(c&&e){tpInitGwtCommManager(c)
}tpCommID=c;
tpBridgeID=c?c:"unknown";
if(window.tpTraceListener===undefined){window.tpTraceListener=function(g){var f=g.data;
if(f){tpTrace(f.message,f.timestamp,f.controllerId,f.className,f.level)
}};
tpController.addEventListener("OnPdkTrace",window.tpTraceListener)
}}function tpReceiveMessage(a,b){tpController.receiveMessage(a,b)
}function tpGetPreferredFormats(){if($pdk!==undefined){return $pdk.env.Detect.getInstance().getPreferredFormats()
}else{return[]
}}function tpGetPlayerFormats(){if($pdk!==undefined){var a=$pdk.env.Detect.getInstance().getPlayerFormats(),b="";
if($pdk.isArray(a)){b=a.join("|")
}return b
}else{return[]
}}var tpHolderName="pdkHolder";
var tpExternalJS;
function tpSetPlayerIDForExternal(a){}function tpSetHolderIDForExternal(a){tpHolderName=a
}function tpSetPdkBaseDirectory(a){}function tpLoadExternalMediaJS(){tpExternalJS=tpLoadExternalMediaJS.arguments;
for(var a=0;
a<tpExternalJS.length;
a++){tpLoadScript(tpExternalJS[a])
}}function tpCleanupExternal(){if(tpExternalJS){var a=window.document.getElementsByTagName("head")[0].getElementsByTagName("script");
for(var c=0;
c<a.length;
c++){for(var b=0;
b<tpExternalJS.length;
b++){if(a[c].src==tpExternalJS[b]){window.document.getElementsByTagName("head")[0].removeChild(a[c]);
break
}}}tpExternalJS.length=0
}if(tpExternalController){tpExternalController.cleanup()
}}$pdk.ns("$pdk.interfaces");
$pdk.interfaces.expose=function(b,a){b.ReleaseList=$pdk.extend($pdk.shell.Base,{_name:"ReleaseList",_markupClass:"tpReleaseList",_runtime:"default",_jsViewImpl:"@Bundle:tpReleaseListView.js",_markupClass:"tpReleaseList",_priority:40,_env:$pdk.env.Detect.getInstance(),_registry:$pdk.shell.Registry.getInstance(),_config_decorator:new $pdk.shell.DefaultsReleaseListImpl(),_asSwf:"releaseList.swf"});
b.CategoryList=$pdk.extend($pdk.shell.Base,{_name:"CategoryList",_markupClass:"tpCategoryList",_runtime:"default",_jsViewImpl:"",_markupClass:"tpCategoryList",_priority:30,_env:$pdk.env.Detect.getInstance(),_registry:$pdk.shell.Registry.getInstance(),_config_decorator:new $pdk.shell.DefaultsCategoryListImpl(),_asSwf:"categoryList.swf"});
b.Navigation=$pdk.extend($pdk.shell.Base,{_name:"Navigation",_markupClass:"tpNavigation",_runtime:"default",_jsViewImpl:"@Bundle:tpNavigationView.js",_markupClass:"tpNavigation",_priority:2147483647,_env:$pdk.env.Detect.getInstance(),_registry:$pdk.shell.Registry.getInstance(),_config_decorator:new $pdk.shell.DefaultsNavigationImpl(),_asSwf:"nav.swf"});
b.CategoryModel=$pdk.extend($pdk.shell.Base,{_name:"CategoryModel",_markupClass:"tpCategoryModel",_runtime:"default",_jsViewImpl:"",_markupClass:"tpCategoryModel",_priority:30,_env:$pdk.env.Detect.getInstance(),_registry:$pdk.shell.Registry.getInstance(),_config_decorator:new $pdk.shell.DefaultsCategoryModelImpl(),_asSwf:"categoryModel.swf"});
b.Header=$pdk.extend($pdk.shell.Base,{_name:"Header",_markupClass:"tpHeader",_runtime:"default",_jsViewImpl:"",_markupClass:"tpHeader",_priority:2147483647,_env:$pdk.env.Detect.getInstance(),_registry:$pdk.shell.Registry.getInstance(),_config_decorator:new $pdk.shell.DefaultsHeaderImpl(),_asSwf:"header.swf"});
b.ClipInfo=$pdk.extend($pdk.shell.Base,{_name:"ClipInfo",_markupClass:"tpClipInfo",_runtime:"default",_jsViewImpl:"@Bundle:tpClipInfoView.js",_markupClass:"tpClipInfo",_priority:20,_env:$pdk.env.Detect.getInstance(),_registry:$pdk.shell.Registry.getInstance(),_config_decorator:new $pdk.shell.DefaultsClipInfoImpl(),_asSwf:"info.swf"});
b.Player=$pdk.extend($pdk.shell.Base,{_name:"Player",_markupClass:"tpPlayer",_runtime:"default",_jsViewImpl:"@Bundle:tpPlayerView.js",_markupClass:"tpPlayer",_priority:10,_env:$pdk.env.Detect.getInstance(),_registry:$pdk.shell.Registry.getInstance(),_config_decorator:new $pdk.shell.DefaultsPlayerImpl(),_asSwf:"flvPlayer.swf"});
b.ReleaseModel=$pdk.extend($pdk.shell.Base,{_name:"ReleaseModel",_markupClass:"tpReleaseModel",_runtime:"default",_jsViewImpl:"@Bundle:tpReleaseModel.js",_markupClass:"tpReleaseModel",_priority:5,_env:$pdk.env.Detect.getInstance(),_registry:$pdk.shell.Registry.getInstance(),_config_decorator:new $pdk.shell.DefaultsReleaseModelImpl(),_asSwf:"releaseModel.swf"});
b.Search=$pdk.extend($pdk.shell.Base,{_name:"Search",_markupClass:"tpSearch",_runtime:"default",_jsViewImpl:"@Bundle:tpSearchView.js",_markupClass:"tpSearch",_priority:2147483647,_env:$pdk.env.Detect.getInstance(),_registry:$pdk.shell.Registry.getInstance(),_config_decorator:new $pdk.shell.DefaultsSearchImpl(),_asSwf:"search.swf"});
$pdk.shell.Factory.CLASS_TABLE={tpReleaseList:b.ReleaseList,tpCategoryList:b.CategoryList,tpNavigation:b.Navigation,tpCategoryModel:b.CategoryModel,tpHeader:b.Header,tpClipInfo:b.ClipInfo,tpPlayer:b.Player,tpReleaseModel:b.ReleaseModel,tpSearch:b.Search};
a.search=function(d,c){d=typeof(d)==="undefined"?"":d;
this._regFunc("search",["java.lang.String"],[d],c)
};
a.setClipInfo=function(d,e,c){this._regFunc("setClipInfo",["com.theplatform.pdk.smil.api.shared.data.Clip","boolean"],[d,e],c)
};
a.getCurrentRange=function(c){this._regFunc("getCurrentRange",[],[],c)
};
a.firstRange=function(d,c){d=typeof(d)==="undefined"?true:d;
this._regFunc("firstRange",["boolean"],[d],c)
};
a.previousRange=function(d,c){d=typeof(d)==="undefined"?true:d;
this._regFunc("previousRange",["boolean"],[d],c)
};
a.nextRange=function(d,c){d=typeof(d)==="undefined"?true:d;
this._regFunc("nextRange",["boolean"],[d],c)
};
a.getValidRegions=function(c){this._regFunc("getValidRegions",[],[],c)
};
a.getDefaultBanners=function(c){this._regFunc("getDefaultBanners",[],[],c)
};
a.addPlayerCard=function(g,k,d,j,e,c,f,h){this._regFunc("addPlayerCard",["java.lang.String","java.lang.String","java.lang.String","java.lang.String","java.lang.String","java.lang.String","int"],[g,k,d,j,e,c,f],h)
};
a.hidePlayerCard=function(c,e,d){this._regFunc("hidePlayerCard",["java.lang.String","java.lang.String"],[c,e],d)
};
a.showPlayerCard=function(d,g,f,c,e){this._regFunc("showPlayerCard",["java.lang.String","java.lang.String","java.lang.String","java.lang.String"],[d,g,f,c],e)
};
a.showLinkForm=function(d,c){this._regFunc("showLinkForm",["java.lang.Boolean"],[d],c)
};
a.getSubtitleStyle=function(c){this._regFunc("getSubtitleStyle",[],[],c)
};
a.getUseDefaultPlayOverlay=function(c){this._regFunc("getUseDefaultPlayOverlay",[],[],c)
};
a.showFullScreen=function(c,d){this._regFunc("showFullScreen",["java.lang.Boolean"],[c],d)
};
a.getCurrentRange=function(c){this._regFunc("getCurrentRange",[],[],c)
};
a.previewNextRefreshReleaseModel=function(c){this._regFunc("previewNextRefreshReleaseModel",[],[],c)
};
a.getNextRelease=function(e,c,d){this._regFunc("getNextRelease",["java.lang.Boolean","java.lang.Boolean"],[e,c],d)
};
a.clearAnnotations=function(c){this._regFunc("clearAnnotations",[],[],c)
};
a.setExpandVideo=function(d,c){this._regFunc("setExpandVideo",["java.lang.String"],[d],c)
};
a.setVolume=function(d,c){this._regFunc("setVolume",["java.lang.Number"],[d],c)
};
a.disablePlayerControls=function(c,d,e){this._regFunc("disablePlayerControls",["java.lang.Boolean","java.lang.String[]"],[c,d],e)
};
a.setSubtitleStyle=function(d,c){this._regFunc("setSubtitleStyle",["com.theplatform.pdk.data.SubtitleStyle"],[d],c)
};
a.pause=function(c,d,e){this._regFunc("pause",["java.lang.Boolean","java.lang.Boolean"],[c,e],d)
};
a.suspendPlayAll=function(d,c){this._regFunc("suspendPlayAll",["java.lang.Boolean"],[d],c)
};
a.setPlayerMessage=function(e,c,d){this._regFunc("setPlayerMessage",["java.lang.String","java.lang.Number"],[e,c],d)
};
a.setRelease=function(c,d,e){this._regFunc("setRelease",["com.theplatform.pdk.data.Release","java.lang.Boolean"],[c,d],e)
};
a.resetPlayer=function(c){this._regFunc("resetPlayer",[],[],c)
};
a.loadReleaseURL=function(c,d,e){this._regFunc("loadReleaseURL",["java.lang.String","java.lang.Boolean"],[c,d],e)
};
a.seekToPosition=function(c,d){this._regFunc("seekToPosition",["java.lang.Number"],[c],d)
};
a.clearCurrentRelease=function(c){this._regFunc("clearCurrentRelease",[],[],c)
};
a.previewRefreshReleaseModel=function(c,l,e,f,d,j,k,g,h){this._regFunc("previewRefreshReleaseModel",["java.lang.String","java.lang.String","com.theplatform.pdk.data.Sort","com.theplatform.pdk.data.Range","java.lang.String[]","java.lang.String[]","java.lang.String[]","java.lang.String"],[c,l,e,f,d,j,g,h],k)
};
a.getBandwidthPreferences=function(c){this._regFunc("getBandwidthPreferences",[],[],c)
};
a.setProperty=function(f,d,g,c,e){this._regFunc("setProperty",["java.lang.String","java.lang.String","java.lang.String","java.lang.String"],[f,d,g,c],e)
};
a.showEmailForm=function(d,c){this._regFunc("showEmailForm",["java.lang.Boolean"],[d],c)
};
a.clearCategorySelection=function(c){this._regFunc("clearCategorySelection",[],[],c)
};
a.getSubtitleLanguage=function(c,d){this._regFunc("getSubtitleLanguage",["java.lang.String"],[c],d)
};
a.clearPlayerMessage=function(c){this._regFunc("clearPlayerMessage",[],[],c)
};
a.setToken=function(c,e,d){this._regFunc("setToken",["java.lang.String","java.lang.String"],[c,e],d)
};
a.getPlayerVariables=function(d,c){this._regFunc("getPlayerVariables",["java.lang.String[]"],[d],c)
};
a.nextClip=function(c){this._regFunc("nextClip",[],[],c)
};
a.clearAdCookie=function(c){this._regFunc("clearAdCookie",[],[],c)
};
a.setSmil=function(c,d){this._regFunc("setSmil",["java.lang.String"],[c],d)
};
a.setVariable=function(f,d,g,c,e){this._regFunc("setVariable",["java.lang.String","java.lang.String","java.lang.String","java.lang.String"],[f,d,g,c],e)
};
a.setClipInfo=function(d,e,c){this._regFunc("setClipInfo",["com.theplatform.pdk.smil.api.shared.data.Clip","java.lang.Boolean"],[d,e],c)
};
a.seekToPercentage=function(d,c){this._regFunc("seekToPercentage",["java.lang.Number"],[d],c)
};
a.useDefaultPlayOverlay=function(c,d){this._regFunc("useDefaultPlayOverlay",["java.lang.Boolean"],[c],d)
};
a.clickPlayButton=function(c){this._regFunc("clickPlayButton",[],[],c)
};
a.refreshCategoryModel=function(d,c,e){this._regFunc("refreshCategoryModel",["java.lang.String","java.lang.String"],[d,e],c)
};
a.cancelMedia=function(c,d){this._regFunc("cancelMedia",["java.lang.Object"],[c],d)
};
a.trace=function(e,d,f,c){this._regFunc("trace",["java.lang.String","java.lang.String","java.lang.Number"],[e,d,f],c)
};
a.getAnnotations=function(c){this._regFunc("getAnnotations",[],[],c)
};
a.previousClip=function(c){this._regFunc("previousClip",[],[],c)
};
a.setBandwidthPreferences=function(d,c){this._regFunc("setBandwidthPreferences",["com.theplatform.pdk.smil.api.shared.data.BandwidthPreferences"],[d],c)
};
a.loadSmil=function(d,c,e){this._regFunc("loadSmil",["java.lang.String","java.lang.Boolean"],[d,c],e)
};
a.hidePlayerRegions=function(d,c,e){this._regFunc("hidePlayerRegions",["java.lang.Boolean","java.lang.String[]"],[d,c],e)
};
a.endCurrentRelease=function(c){this._regFunc("endCurrentRelease",[],[],c)
};
a.playPrevious=function(d,c){this._regFunc("playPrevious",["java.lang.Boolean"],[d],c)
};
a.removeAnnotation=function(c,d){this._regFunc("removeAnnotation",["com.theplatform.pdk.data.Annotation"],[c],d)
};
a.playNext=function(e,c,d){this._regFunc("playNext",["java.lang.Boolean","java.lang.Boolean"],[e,c],d)
};
a.mute=function(d,c){this._regFunc("mute",["java.lang.Boolean"],[d],c)
};
a.useDefaultLinkForm=function(c,d){this._regFunc("useDefaultLinkForm",["java.lang.Boolean"],[c],d)
};
a.setShowSubtitles=function(c,d){this._regFunc("setShowSubtitles",["java.lang.Boolean"],[c],d)
};
a.useDefaultEmailForm=function(c,d){this._regFunc("useDefaultEmailForm",["java.lang.Boolean"],[c],d)
};
a.setReleaseURL=function(d,c,e){this._regFunc("setReleaseURL",["java.lang.String","java.lang.Boolean"],[d,c],e)
};
a.getNextClip=function(c){this._regFunc("getNextClip",[],[],c)
};
a.loadRelease=function(c,d,e){this._regFunc("loadRelease",["com.theplatform.pdk.data.Release","java.lang.Boolean"],[c,d],e)
};
a.setSubtitleLanguage=function(d,c){this._regFunc("setSubtitleLanguage",["java.lang.String"],[d],c)
};
a.setPreviewImageUrl=function(c,d){this._regFunc("setPreviewImageUrl",["java.lang.String"],[c],d)
};
a.setVideoScalingMethod=function(d,c){this._regFunc("setVideoScalingMethod",["java.lang.String"],[d],c)
};
a.addAnnotation=function(c,d){this._regFunc("addAnnotation",["com.theplatform.pdk.data.Annotation"],[c],d)
};
a.refreshReleaseModel=function(c,l,e,f,d,j,k,g,h){this._regFunc("refreshReleaseModel",["java.lang.String","java.lang.String","com.theplatform.pdk.data.Sort","com.theplatform.pdk.data.Range","java.lang.String[]","java.lang.String[]","java.lang.String[]","java.lang.String"],[c,l,e,f,d,j,g,h],k)
};
a.setCurrentReleaseList=function(d,c){this._regFunc("setCurrentReleaseList",["java.lang.String"],[d],c)
}
};
(function(h,e){var d,c,b,g,j,a,f,k;
if(typeof(window.__tp_pdk_set_versions)==="function"){window.__tp_pdk_set_versions();
if(typeof(window.console)==="object"){console.log("thePlatform PDK");
console.log($pdk.version.toString())
}}e=typeof(e)==="boolean"?e:false;
if(!e){g=$pdk.env.Detect.getInstance();
j=new $pdk.env.HttpHead.Processor(g);
j.process(document);
if(typeof(g.baseDir())!=="string"||g.baseDir().length<1){alert("No PDK base URL could be detected. Asynchronous load of PDK requies a tp:baseUrl meta tag.")
}if($pdk.isIE){document.createElement("video")
}c=g.getConfigSet("enableexternalcontroller");
c=$pdk.isEmpty(c)?[]:c.toArray();
c=c.length<1?"false":c[0];
c=c.toLowerCase()==="true";
window.tpCommID="communicationwidget";
window.tpBridgeID=typeof(window.tpCommID)==="string"?window.tpCommID:"unknown";
b=$pdk.Entrypoint.getInstance();
a=$pdk.shell.Registry.getInstance();
f=new $pdk.shell.SwfSerializedLoader();
a.bind(f);
h.tpController=new $pdk.queue.Controller(g);
$pdk.interfaces.expose(h,h.tpController);
if(g.getAutoInitialize()){b.injectLoadingStyle($pdk.isDomReady())
}if(window.tpTraceListener===undefined){window.tpTraceListener=function(m){var l=m.data;
if(l){tpTrace(l.message,l.timestamp,l.controllerId,l.className,l.level)
}};
tpController.addEventListener("OnPdkTrace",window.tpTraceListener)
}h.tpController.onControllerComplete=function(){f.onSwfReady()
};
b.configure(a,g);
$pdk.controller=h.tpController;
$pdk.initialize=function(){b.initialize()
};
$pdk.getConfiguration=function(l){return a.getShells().get(l)
};
$pdk.gwtBootloader(g);
if(c){new $pdk.queue.IFrameListener()
}}}(window,window._PDK_SUPRESS_AUTOINIT));
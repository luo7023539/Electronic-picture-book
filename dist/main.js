webpackJsonp([0],{124:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),a=n(31),o=i(a),u=n(270),s=i(u),d=n(271),c=i(d),l=new r.Container;l.init=function(){o.default.init(),c.default.init(),c.default.x=(r.windowWidth-c.default.width)/2,c.default.y=r.windowHeight-c.default.height,s.default.init(),l.event(),l.addChild(o.default,c.default,s.default)},l.event=function(){var t=null,e=!1,n=!1;this.interactive=!0;var i=function(t,e){if(e.timestamp-t.timestamp<600){var n=e.x-t.x,i=e.y-t.y;return Math.abs(n)>Math.abs(i)&&n>r.NaviSlideDistance?6:Math.abs(n)>Math.abs(i)&&n<-r.NaviSlideDistance?4:Math.abs(i)>Math.abs(n)&&i>r.NaviSlideDistance?2:Math.abs(i)>Math.abs(n)&&i<-r.NaviSlideDistance?8:5}return!1},a=function(t){var e=Object.assign({},t);return e.timestamp=Date.now(),e};this.on("touchstart",function(e){t=a(e.data.global)}),this.on("touchend",function(r){var o=t,u=a(r.data.global),d=i(o,u);if(d){s.default.visible;8===d?s.default.slide("up"):2===d&&s.default.slide("down")}t=null,e=n=!1})},e.default=l},125:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(){d.default.init(),h=o,l.resize(u.windowWidth,u.windowHeight),a()}function a(){requestAnimationFrame(a),u.TWEEN.update(),h(),l.render(d.default)}function o(){}var u=n(3),s=n(124),d=i(s),c=n(31),l=(i(c),u.windowWidth,(0,u.autoDetectRenderer)(u.windowWidth,u.windowHeight));document.body.appendChild(l.view),new u.GOWN.ThemeParser("assets/shapes_desktop.json"),u.loader.add("assets/widget.json").add("assets/navigation.json").add("assets/scenes-0.json").add("assets/scenes-1.json").add("scenes/cat.json").load(r);var h=void 0},253:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(254);Object.defineProperty(e,"Act_1",{enumerable:!0,get:function(){return i(r).default}});var a=n(255);Object.defineProperty(e,"Act_2",{enumerable:!0,get:function(){return i(a).default}});var o=n(256);Object.defineProperty(e,"Act_3",{enumerable:!0,get:function(){return i(o).default}});var u=n(257);Object.defineProperty(e,"Act_4",{enumerable:!0,get:function(){return i(u).default}});var s=n(258);Object.defineProperty(e,"Act_5",{enumerable:!0,get:function(){return i(s).default}});var d=n(259);Object.defineProperty(e,"Act_6",{enumerable:!0,get:function(){return i(d).default}});var c=n(260);Object.defineProperty(e,"Act_7",{enumerable:!0,get:function(){return i(c).default}});var l=n(261);Object.defineProperty(e,"Act_8",{enumerable:!0,get:function(){return i(l).default}});var h=n(262);Object.defineProperty(e,"Act_9",{enumerable:!0,get:function(){return i(h).default}});var f=n(263);Object.defineProperty(e,"Act_10",{enumerable:!0,get:function(){return i(f).default}});var w=n(264);Object.defineProperty(e,"Act_11",{enumerable:!0,get:function(){return i(w).default}});var p=n(265);Object.defineProperty(e,"Act_12",{enumerable:!0,get:function(){return i(p).default}});var _=n(266);Object.defineProperty(e,"Act_13",{enumerable:!0,get:function(){return i(_).default}});var v=n(267);Object.defineProperty(e,"Act_14",{enumerable:!0,get:function(){return i(v).default}});var g=n(268);Object.defineProperty(e,"Act_15",{enumerable:!0,get:function(){return i(g).default}});var b=n(269);Object.defineProperty(e,"Act_16",{enumerable:!0,get:function(){return i(b).default}})},254:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),a=new r.Container;a.init=function(){console.log(r.resources);var t=new r.Sprite((0,r.getTexture)("1/backgroud1.png"));t.width=r.windowWidth,t.height=r.windowHeight,a.addChild(t);var e=r.resources["scenes/cat.json"].textures,n=[].concat(i(e));for(var o in e)e.hasOwnProperty(o)&&n.push(e[o]);var u=new PIXI.extras.AnimatedSprite(n);u.animationSpeed=.1,u.play(),a.addChild(u)},e.default=a},255:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("2/backgroud2.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},256:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("3/backgroud3.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},257:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("4/backgroud4.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},258:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("5/backgroud5.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},259:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("6/backgroud6.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},260:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("7/backgroud7.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},261:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("8/backgroud8.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},262:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("9/backgroud9.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},263:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("10/backgroud10.png"));r.addChild(t)},e.default=r},264:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("11/backgroud11.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},265:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("12/backgroud12.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},266:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("13/backgroud13.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},267:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("14/backgroud14.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},268:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("15-1/backgroud15.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},269:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=new i.Container;r.init=function(){var t=new i.Sprite((0,i.getTexture)("15-2/backgroud15-2.png"));t.width=i.windowWidth,t.height=i.windowHeight,r.addChild(t)},e.default=r},270:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=n(31),a=function(t){return t&&t.__esModule?t:{default:t}}(r),o=new i.Container;o.init=function(){var t=50*i.screenScaleRito,e=5*i.screenScaleRito,n=130*i.screenScaleRito,r=130*i.screenScaleRito,a=20*i.screenScaleRito,u=i.resources["assets/navigation.json"].textures,s=new i.Sprite(u["navigation.png"]);s.scale.set(i.screenScaleRito,i.screenScaleRito);var d=new i.ScrollContainer,c=new i.LayoutGroup;c.layout=new i.layout.HorizontalLayout,c.layout.gap=a,d.x=t,d.y=e,d.viewPort=c,d.height=s.height,d.width=s.width-105*i.screenScaleRito;for(var l=0;l<16;l++){var h=new i.Sprite(u["1.jpg"]);h._to=l,h.height=n,h.width=r,h.interactive=!0,h.buttonMode=!0,c.addChild(h)}this.event(),this.wrap=s,this.Thumbnails=d,o.addChild(s,d)},o.event=function(){var t=null;this.interactive=!0,this.on("touchstart",function(e){t=Object.assign({},e.data.global)}).on("touchend",function(e){if("sprite"===e.target.pluginName){var n=e.data.global;Math.abs(n.x-t.x)<15&&Math.abs(n.y-t.y)<15&&(a.default.current=e.target._to)}})},o.slide=function(t){var e=this.height,n=this.position;new i.TWEEN.Tween(n).to({y:"up"===t?-e:0},300).start()},e.default=o},271:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=n(31),a=function(t){return t&&t.__esModule?t:{default:t}}(r),o=new i.Container;o.init=function(){var t=i.resources["assets/widget.json"].textures,e=new i.Sprite(t["start.png"]),n=new i.Sprite(t["pause.png"]),r=new i.Sprite(t["left.png"]),u=new i.Sprite(t["right.png"]);e.x=204,n.x=204;var s=function(t){console.log(t),a.default.current--},d=function(t){a.default.current++};r.buttonMode=!0,r.interactive=!0,r.on("touchend",s),u.buttonMode=!0,u.interactive=!0,u.x=408,u.on("touchend",d),o.interactive=!0,o.on("touchend",function(t){t.stopped=!0}),o.addChild(r,e,n,u)},e.default=o},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NaviSlideDistance=e.getTexture=e.screenScaleRito=e.layout=e.LayoutGroup=e.ScrollContainer=e.windowWidth=e.windowHeight=e.Graphics=e.Text=e.Sprite=e.Texture=e.TextureCache=e.resources=e.loader=e.autoDetectRenderer=e.Container=e.TWEEN=e.GOWN=e.PIXI=void 0;var i=n(52),r=function(t){return t&&t.__esModule?t:{default:t}}(i),a=n(54),o=n(107),u=o.ScrollContainer,s=o.LayoutGroup,d=o.layout,c=a.Container,l=a.autoDetectRenderer,h=a.loader,f=a.Texture,w=a.Sprite,p=a.Text,_=a.utils,v=a.Graphics,g=h.resources,b=_.TextureCache,y=window.innerHeight,C=window.innerWidth,S=C/1024,O=function(t){return g["assets/scenes-0.json"].textures[t]||g["assets/scenes-1.json"].textures[t]};e.PIXI=a,e.GOWN=o,e.TWEEN=r.default,e.Container=c,e.autoDetectRenderer=l,e.loader=h,e.resources=g,e.TextureCache=b,e.Texture=f,e.Sprite=w,e.Text=p,e.Graphics=v,e.windowHeight=y,e.windowWidth=C,e.ScrollContainer=u,e.LayoutGroup=s,e.layout=d,e.screenScaleRito=S,e.getTexture=O,e.NaviSlideDistance=50},31:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),a=n(124),o=(i(a),n(253)),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(o),s=n(52),d=i(s),c=new r.Container,l=Object.keys(u).length;c.init=function(){this._current=0,this._setup(),this._defineProperty()},c._defineProperty=function(){Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,get:function(){return this._current},set:function(t){if(!(t<0||t>l-1)){var e=-r.windowWidth*t,n=this.position;this._current=t,new d.default.Tween(n).to({x:e},1e3).easing(d.default.Easing.Quadratic.In).start()}}})},c._setup=function(){var t=this;Object.keys(u).forEach(function(e,n){var i=u[e];i.x=r.windowWidth*n,i.init&&i.init(),t.addChild(i)})},e.default=c},52:function(t,e,n){(function(n){var i,r,a=function(){this._tweens={},this._tweensAddedDuringUpdate={}};a.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,e){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(t=void 0!==t?t:o.now();n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var r=this._tweens[n[i]];r&&!1===r.update(t)&&(r._isPlaying=!1,e||delete this._tweens[n[i]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var o=new a;o.Group=a,o._nextId=0,o.nextId=function(){return o._nextId++},"undefined"==typeof window&&void 0!==n?o.now=function(){var t=n.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?o.now=window.performance.now.bind(window.performance):void 0!==Date.now?o.now=Date.now:o.now=function(){return(new Date).getTime()},o.Tween=function(t,e){this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=o.Easing.Linear.None,this._interpolationFunction=o.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=e||o,this._id=o.nextId()},o.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(t,e){return this._valuesEnd=t,void 0!==e&&(this._duration=e),this},start:function(t){this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==t?"string"==typeof t?o.now()+parseFloat(t):t:o.now(),this._startTime+=this._delayTime;for(var e in this._valuesEnd){if(this._valuesEnd[e]instanceof Array){if(0===this._valuesEnd[e].length)continue;this._valuesEnd[e]=[this._object[e]].concat(this._valuesEnd[e])}void 0!==this._object[e]&&(this._valuesStart[e]=this._object[e],this._valuesStart[e]instanceof Array==!1&&(this._valuesStart[e]*=1),this._valuesStartRepeat[e]=this._valuesStart[e]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(this._startTime+this._duration),this},stopChainedTweens:function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop()},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var e,n,i;if(t<this._startTime)return!0;!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(t-this._startTime)/this._duration,n=n>1?1:n,i=this._easingFunction(n);for(e in this._valuesEnd)if(void 0!==this._valuesStart[e]){var r=this._valuesStart[e]||0,a=this._valuesEnd[e];a instanceof Array?this._object[e]=this._interpolationFunction(a,i):("string"==typeof a&&(a="+"===a.charAt(0)||"-"===a.charAt(0)?r+parseFloat(a):parseFloat(a)),"number"==typeof a&&(this._object[e]=r+(a-r)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1===n){if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(e in this._valuesStartRepeat){if("string"==typeof this._valuesEnd[e]&&(this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(this._valuesEnd[e])),this._yoyo){var o=this._valuesStartRepeat[e];this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=o}this._valuesStart[e]=this._valuesStartRepeat[e]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var u=0,s=this._chainedTweens.length;u<s;u++)this._chainedTweens[u].start(this._startTime+this._duration);return!1}return!0}},o.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-o.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*o.Easing.Bounce.In(2*t):.5*o.Easing.Bounce.Out(2*t-1)+.5}}},o.Interpolation={Linear:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),a=o.Interpolation.Utils.Linear;return e<0?a(t[0],t[1],i):e>1?a(t[n],t[n-1],n-i):a(t[r],t[r+1>n?n:r+1],i-r)},Bezier:function(t,e){for(var n=0,i=t.length-1,r=Math.pow,a=o.Interpolation.Utils.Bernstein,u=0;u<=i;u++)n+=r(1-e,i-u)*r(e,u)*t[u]*a(i,u);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),a=o.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(r=Math.floor(i=n*(1+e))),a(t[(r-1+n)%n],t[r],t[(r+1)%n],t[(r+2)%n],i-r)):e<0?t[0]-(a(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(a(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):a(t[r?r-1:0],t[r],t[n<r+1?n:r+1],t[n<r+2?n:r+2],i-r)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=o.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,r){var a=.5*(n-t),o=.5*(i-e),u=r*r;return(2*e-2*n+a+o)*(r*u)+(-3*e+3*n-2*a-o)*u+a*r+e}}},function(n){i=[],void 0!==(r=function(){return o}.apply(e,i))&&(t.exports=r)}()}).call(e,n(53))}},[125]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{123:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),r=i(n(30)),s=i(n(269)),o=i(n(270)),u=new a.Container;u.init=function(){r.default.init(),o.default.init(),o.default.x=(a.windowWidth-o.default.width)/2,o.default.y=a.windowHeight-o.default.height,s.default.init(),u.event(),u.addChild(r.default,o.default,s.default)},u.event=function(){var e=null;this.interactive=!0;var t=function(e){var t=Object.assign({},e);return t.timestamp=Date.now(),t};this.on("pointerdown",function(n){e=t(n.data.global)}),this.on("pointerup",function(n){var i=function(e,t){if(t.timestamp-e.timestamp<600){var n=t.x-e.x,i=t.y-e.y;return Math.abs(n)>Math.abs(i)&&n>a.NaviSlideDistance?6:Math.abs(n)>Math.abs(i)&&n<-a.NaviSlideDistance?4:Math.abs(i)>Math.abs(n)&&i>a.NaviSlideDistance?2:Math.abs(i)>Math.abs(n)&&i<-a.NaviSlideDistance?8:5}return!1}(e,t(n.data.global));if(i){s.default.visible;8===i?s.default.slide("up"):2===i?s.default.slide("down"):6===i?r.default.current--:4===i&&r.default.current++}e=null,!1})},window.__scene=r.default,window.__navigation=s.default,window.__widgets=o.default,t.default=u},124:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){requestAnimationFrame(a),s.TWEEN.update(),s.c.update(),c(),u.render(o.default)}function r(){}var s=n(3),o=i(n(123)),u=(i(n(30)),(0,s.autoDetectRenderer)(s.windowWidth,s.windowHeight));document.body.appendChild(u.view),new s.GOWN.ThemeParser("assets/shapes_desktop.json"),s.loader.add("assets/widget.json").add("assets/navigation.json").add("assets/record.json").add("assets/thumbnails.json").add(["assets/pic-0.json","assets/pic-1.json"]).add(["assets/1-0.json","assets/1-1.json","assets/1-2.json","assets/1-3.json","assets/1-4.json","assets/1-5.json","assets/1-6.json"]).add("assets/2-0.json").add(["assets/3-0.json","assets/3-1.json","assets/3-2.json","assets/3-3.json","assets/3-4.json"]).add(["assets/4-0.json","assets/4-1.json","assets/4-2.json","assets/4-3.json","assets/4-4.json"]).add(["assets/5-0.json","assets/5-1.json","assets/5-2.json","assets/5-3.json"]).add(["assets/6-0.json","assets/6-1.json","assets/6-2.json","assets/6-3.json"]).add(["assets/7-0.json"]).add(["assets/8-0.json","assets/8-1.json","assets/8-2.json","assets/8-3.json"]).add(["assets/9-0.json"]).add(["assets/10-1-0.json","assets/10-2-0.json","assets/10-2-1.json","assets/10-3-0.json"]).add(["assets/11-0.json","assets/11-1.json"]).add(["assets/12-0.json"]).add(["assets/13-0.json","assets/13-1.json"]).add(["assets/14-0.json","assets/14-1.json"]).add(["assets/15-0.json","assets/15-1.json","assets/15-2.json","assets/15-3.json"]).on("progress",function(e,t){}).load(function(){o.default.init(),c=r,a()});var c=void 0;window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){},!1)},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:PIXI;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===n)throw new Error("Please assign a rendering engine in the constructor before using charm.js");this.renderer="",n.ParticleContainer&&n.Sprite&&(this.renderer="pixi"),this.globalTweens=[],this.easingFormulas={linear:function(e){return e},smoothstep:function(e){return e*e*(3-2*e)},smoothstepSquared:function(e){return Math.pow(e*e*(3-2*e),2)},smoothstepCubed:function(e){return Math.pow(e*e*(3-2*e),3)},acceleration:function(e){return e*e},accelerationCubed:function(e){return Math.pow(e*e,3)},deceleration:function(e){return 1-Math.pow(1-e,2)},decelerationCubed:function(e){return 1-Math.pow(1-e,3)},sine:function(e){return Math.sin(e*Math.PI/2)},sineSquared:function(e){return Math.pow(Math.sin(e*Math.PI/2),2)},sineCubed:function(e){return Math.pow(Math.sin(e*Math.PI/2),2)},inverseSine:function(e){return 1-Math.sin((1-e)*Math.PI/2)},inverseSineSquared:function(e){return 1-Math.pow(Math.sin((1-e)*Math.PI/2),2)},inverseSineCubed:function(e){return 1-Math.pow(Math.sin((1-e)*Math.PI/2),3)},spline:function(e,t,n,i,a){return.5*(2*n+(-t+i)*e+(2*t-5*n+4*i-a)*e*e+(3*n-t-3*i+a)*e*e*e)},cubicBezier:function(e,t,n,i,a){var r=e*e;return t+(3*-t+e*(3*t-t*e))*e+(3*n+e*(-6*n+3*n*e))*e+(3*i-3*i*e)*r+a*(r*e)}},this._addScaleProperties=function(e){"pixi"===t.renderer&&(!("scaleX"in e)&&"scale"in e&&"x"in e.scale&&Object.defineProperty(e,"scaleX",{get:function(){return e.scale.x},set:function(t){e.scale.x=t}}),!("scaleY"in e)&&"scale"in e&&"y"in e.scale&&Object.defineProperty(e,"scaleY",{get:function(){return e.scale.y},set:function(t){e.scale.y=t}}))}}return i(e,[{key:"tweenProperty",value:function(e,t,n,i,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"smoothstep",s=this,o=arguments.length>6&&void 0!==arguments[6]&&arguments[6],u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,c={},l=r.split(" ");return"bounce"===l[0]&&(c.startMagnitude=parseInt(l[1]),c.endMagnitude=parseInt(l[2])),c.start=function(e,t){c.startValue=JSON.parse(JSON.stringify(e)),c.endValue=JSON.parse(JSON.stringify(t)),c.playing=!0,c.totalFrames=a,c.frameCounter=0,s.globalTweens.push(c)},c.start(n,i),c.update=function(){var n=void 0;if(c.playing)if(c.frameCounter<c.totalFrames){var i=c.frameCounter/c.totalFrames;n="bounce"!==l[0]?s.easingFormulas[r](i):s.easingFormulas.spline(i,c.startMagnitude,0,1,c.endMagnitude),e[t]=c.endValue*n+c.startValue*(1-n),c.frameCounter+=1}else e[t]=c.endValue,c.end()},c.end=function(){c.playing=!1,c.onComplete&&c.onComplete(),s.globalTweens.splice(s.globalTweens.indexOf(c),1),o&&s.wait(u).then(function(){c.start(c.endValue,c.startValue)})},c.play=function(){return c.playing=!0},c.pause=function(){return c.playing=!1},c}},{key:"makeTween",value:function(e){var t=this,n={};n.tweens=[],e.forEach(function(e){var i=t.tweenProperty.apply(t,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e));n.tweens.push(i)});var i=0;return n.completed=function(){(i+=1)===n.tweens.length&&(n.onComplete&&n.onComplete(),i=0)},n.tweens.forEach(function(e){e.onComplete=function(){return n.completed()}}),n.pause=function(){n.tweens.forEach(function(e){e.playing=!1})},n.play=function(){n.tweens.forEach(function(e){e.playing=!0})},n}},{key:"fadeOut",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;return this.tweenProperty(e,"alpha",e.alpha,0,t,"sine")}},{key:"fadeIn",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;return this.tweenProperty(e,"alpha",e.alpha,1,t,"sine")}},{key:"pulse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.tweenProperty(e,"alpha",e.alpha,n,t,"smoothstep",!0)}},{key:"slide",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:60,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"smoothstep",r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;return this.makeTween([[e,"x",e.x,t,i,a,r,s],[e,"y",e.y,n,i,a,r,s]])}},{key:"breathe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.8,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.8,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:60,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;return this._addScaleProperties(e),this.makeTween([[e,"scaleX",e.scaleX,t,i,"smoothstepSquared",a,r],[e,"scaleY",e.scaleY,n,i,"smoothstepSquared",a,r]])}},{key:"scale",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:60;return this._addScaleProperties(e),this.makeTween([[e,"scaleX",e.scaleX,t,i,"smoothstep",!1],[e,"scaleY",e.scaleY,n,i,"smoothstep",!1]])}},{key:"strobe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:20,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,r=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,o="bounce "+n+" "+i;return this._addScaleProperties(e),this.makeTween([[e,"scaleX",e.scaleX,t,a,o,r,s],[e,"scaleY",e.scaleY,t,a,o,r,s]])}},{key:"wobble",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1.2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:10,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:-10,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:-10,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:.98,c=this,l=!(arguments.length>9&&void 0!==arguments[9])||arguments[9],d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,h="bounce "+a+" "+r,f="bounce "+s+" "+o;this._addScaleProperties(e);var p=this.makeTween([[e,"scaleX",e.scaleX,t,i,h,l,d],[e,"scaleY",e.scaleY,n,i,f,l,d]]);return p.tweens.forEach(function(e){e.onComplete=function(){e.endValue>1&&(e.endValue*=u,e.endValue<=1&&(e.endValue=1,c.removeTween(e)))}}),p}},{key:"followCurve",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"smoothstep",a=this,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,o={},u=i.split(" ");return"bounce"===u[0]&&(o.startMagnitude=parseInt(u[1]),o.endMagnitude=parseInt(u[2])),o.start=function(e){o.playing=!0,o.totalFrames=n,o.frameCounter=0,o.pointsArray=JSON.parse(JSON.stringify(e)),a.globalTweens.push(o)},o.start(t),o.update=function(){var t=void 0,n=void 0,r=o.pointsArray;o.playing&&(o.frameCounter<o.totalFrames?(t=o.frameCounter/o.totalFrames,n="bounce"!==u[0]?a.easingFormulas[i](t):a.easingFormulas.spline(t,o.startMagnitude,0,1,o.endMagnitude),e.x=a.easingFormulas.cubicBezier(n,r[0][0],r[1][0],r[2][0],r[3][0]),e.y=a.easingFormulas.cubicBezier(n,r[0][1],r[1][1],r[2][1],r[3][1]),o.frameCounter+=1):o.end())},o.end=function(){o.playing=!1,o.onComplete&&o.onComplete(),a.globalTweens.splice(a.globalTweens.indexOf(o),1),r&&a.wait(s).then(function(){o.pointsArray=o.pointsArray.reverse(),o.start(o.pointsArray)})},o.pause=function(){o.playing=!1},o.play=function(){o.playing=!0},o}},{key:"walkPath",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"smoothstep",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=this,s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,u=JSON.parse(JSON.stringify(t)),c=n/u.length;return function t(n){var l=r.makeTween([[e,"x",u[n][0],u[n+1][0],c,i],[e,"y",u[n][1],u[n+1][1],c,i]]);return l.onComplete=function(){(n+=1)<u.length-1?r.wait(o).then(function(){l=t(n)}):a&&(s&&u.reverse(),r.wait(o).then(function(){n=0,e.x=u[0][0],e.y=u[0][1],l=t(n)}))},l}(0)}},{key:"walkCurve",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"smoothstep",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=this,s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,u=n/t.length;return function n(c){var l=r.followCurve(e,t[c],u,i);return l.onComplete=function(){(c+=1)<t.length?r.wait(o).then(function(){l=n(c)}):a&&(s&&(t.reverse(),t.forEach(function(e){return e.reverse()})),r.wait(o).then(function(){c=0,e.x=t[0][0],e.y=t[0][1],l=n(c)}))},l}(0)}},{key:"wait",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(function(t,n){setTimeout(t,e)})}},{key:"removeTween",value:function(e){var t=this;e.tweens?(e.pause(),e.tweens.forEach(function(e){t.globalTweens.splice(t.globalTweens.indexOf(e),1)})):(e.pause(),-1!=this.globalTweens.indexOf(e)&&this.globalTweens.splice(this.globalTweens.indexOf(e),1))}},{key:"update",value:function(){if(this.globalTweens.length>0)for(var e=this.globalTweens.length-1;e>=0;e--){var t=this.globalTweens[e];t&&t.update()}}}]),e}();t.default=a},253:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(254);Object.defineProperty(t,"Act_1",{enumerable:!0,get:function(){return i(a).default}});var r=n(255);Object.defineProperty(t,"Act_2",{enumerable:!0,get:function(){return i(r).default}});var s=n(256);Object.defineProperty(t,"Act_3",{enumerable:!0,get:function(){return i(s).default}});var o=n(257);Object.defineProperty(t,"Act_4",{enumerable:!0,get:function(){return i(o).default}});var u=n(258);Object.defineProperty(t,"Act_5",{enumerable:!0,get:function(){return i(u).default}});var c=n(259);Object.defineProperty(t,"Act_6",{enumerable:!0,get:function(){return i(c).default}});var l=n(260);Object.defineProperty(t,"Act_7",{enumerable:!0,get:function(){return i(l).default}});var d=n(261);Object.defineProperty(t,"Act_8",{enumerable:!0,get:function(){return i(d).default}});var h=n(262);Object.defineProperty(t,"Act_9",{enumerable:!0,get:function(){return i(h).default}});var f=n(263);Object.defineProperty(t,"Act_10",{enumerable:!0,get:function(){return i(f).default}});var p=n(264);Object.defineProperty(t,"Act_11",{enumerable:!0,get:function(){return i(p).default}});var v=n(265);Object.defineProperty(t,"Act_12",{enumerable:!0,get:function(){return i(v).default}});var g=n(266);Object.defineProperty(t,"Act_13",{enumerable:!0,get:function(){return i(g).default}});var w=n(267);Object.defineProperty(t,"Act_14",{enumerable:!0,get:function(){return i(w).default}});var _=n(268);Object.defineProperty(t,"Act_15",{enumerable:!0,get:function(){return i(_).default}})},254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud1.png")),t=(0,i.createText)("有一天，奶奶和我在院子里看月亮  我指着月亮说它弯弯地像奶奶的眉毛  奶奶连忙捂住我的耳朵  “可不敢用手指月亮，当心晚上来割你的小耳朵！”  吓得我都不敢看它了  奶奶说月亮上住的神仙呢  每当星星挂满天空，只要对着它许愿，愿望就能实现");t.x=510,t.y=410;var n=(0,i.createAnimateSprite)(["assets/1-0.json","assets/1-1.json","assets/1-2.json","assets/1-3.json","assets/1-4.json","assets/1-5.json","assets/1-6.json"]);a.quene.push(n,t),a.addChild(e,t,n)},a.play=function(){a.richText;this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},255:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud2.png")),t=(0,i.createAnimateSprite)(["assets/2-0.json"]),n=(0,i.createText)("之后我就常常对着窗户外面  悄悄地向神仙许愿");n.x=400,n.y=70,a.quene.push(t,n),a.addChild(e,t,n)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay&&e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud3.png")),t=(0,i.createText)("也许是因为我的声音太小了  爸爸妈妈每次只在我的梦里出现  醒来就又剩我一个人  ");t.x=520,t.y=630;var n=(0,i.createAnimateSprite)(["assets/3-0.json","assets/3-1.json","assets/3-2.json","assets/3-3.json","assets/3-4.json"]);a.quene.push(n,t),a.addChild(e,t,n)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud4.png")),t=(0,i.createText)("在家里，我每天自己起床，刷牙，吃饭，帮忙打扫");t.x=290,t.y=373;var n=(0,i.createAnimateSprite)(["assets/4-0.json","assets/4-1.json","assets/4-2.json","assets/4-3.json","assets/4-4.json"]);a.quene.push(n,t),a.addChild(e,t,n)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud5.png")),t=(0,i.createText)("牵着奶奶的手陪她去散步、买菜  所有人都说我是个懂事的小孩");t.x=695,t.y=643;var n=(0,i.createAnimateSprite)(["assets/5-0.json","assets/5-1.json","assets/5-2.json","assets/5-3.json"]);a.quene.push(n,t),a.addChild(e,n,t)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud6.png")),t=(0,i.createAnimateSprite)(["assets/6-0.json","assets/6-1.json","assets/6-2.json","assets/6-3.json"]);a.quene.push(t),a.addChild(e,t)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud7.png")),t=(0,i.createText)("我想要有那样一双手牵着我");t.x=184,t.y=144;var n=(0,i.createAnimateSprite)(["assets/7-0.json"]);a.quene.push(n,t),a.addChild(e,n,t)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud8.png")),t=(0,i.createText)("可是我知道  那双大手为我正在抵挡所有的苦难");t.x=166,t.y=691;var n=(0,i.createAnimateSprite)(["assets/8-0.json","assets/8-1.json","assets/8-2.json","assets/8-3.json"]);a.quene.push(n,t),a.addChild(e,n,t)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud9.png")),t=(0,i.createText)("在学校，我有一个好朋友  她每天笑得很开心，像个小太阳");t.x=129,t.y=541;var n=(0,i.createAnimateSprite)(["assets/9-0.json"]);a.quene.push(n,t),a.addChild(e,n,t)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.step=0,a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud10-indoor.png")),t=new i.Sprite((0,i.getTexture)("backgroud10-outdoor.png")),n=new i.Sprite((0,i.getTexture)("10-sun.png")),r=new i.ScrollContainer,s=new i.LayoutGroup,o=(0,i.createAnimateSprite)("assets/10-1-0.json"),u=(0,i.createAnimateSprite)(["assets/10-2-0.json","assets/10-2-0.json"]),c=(0,i.createAnimateSprite)("assets/10-3-0.json");s.addChild(t),s.addChild(n),s.addChild(e),s.addChild(o),s.addChild(u),s.addChild(c),s.scale.set(i.screenScaleRitoX,i.screenScaleRitoY),o.x=0,u.x=900,c.x=1800,a.quene.push(o,u,c),r.interactive=!1,r.viewPort=s,r.width=i.windowWidth,r.height=i.windowHeight;var l=(0,i.createText)("我们一起上课，画画，玩游戏……但是……");l.x=364,l.y=703,a.animate={scrollContainer:r,layoutGroup:s,sun:n,richText:l},a.addChild(r,l)},a.play=function(){window.__widgets.hideBtn();var e=a.animate,t=(e.scrollContainer,e.layoutGroup),n=e.sun,r=e.richText,s=a.step,o=a.quene[s];if(3===s)return a.reset(),void a.play();o.play(),0===a.step&&(r.play(),new i.TWEEN.Tween(n).to({x:100,y:-40},2e3).easing(i.TWEEN.Easing.Quadratic.InOut).start()),o.onComplete=function(){o.gotoAndStop(0),2!==s?(1!==a.step&&2!==a.step||new i.TWEEN.Tween(t).to({x:920*-(s+1)*i.screenScaleRitoX},2e3).easing(i.TWEEN.Easing.Quadratic.InOut).start().onComplete(a.play),1===a.step&&new i.TWEEN.Tween(n).to({x:1200,y:-80},2e3).easing(i.TWEEN.Easing.Quadratic.InOut).start(),2===a.step&&new i.TWEEN.Tween(n).to({x:2400,y:-40},2e3).easing(i.TWEEN.Easing.Quadratic.InOut).start()):window.__widgets.showPlaying()},a.step++},a.reset=function(){var e=a.animate,t=(e.scrollContainer,e.layoutGroup),n=e.sun;a.step=t.x=n.x=0},t.default=a},264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud11.png")),t=(0,i.createText)("每当放学我还是会羡慕  她可以坐在自行车后座  我想要有那样一个人来接我  可是我知道……");t.x=404,t.y=550;var n=(0,i.createAnimateSprite)(["assets/11-0.json","assets/11-1.json"]);a.quene.push(n,t),a.addChild(e,n,t)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud12.png")),t=(0,i.createText)("那个人为我正在撑起整个世界");t.x=381,t.y=712;var n=(0,i.createAnimateSprite)(["assets/12-0.json"]);a.quene.push(n,t),a.addChild(e,n,t)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud13.png")),t=(0,i.createAnimateSprite)(["assets/13-0.json","assets/13-1.json"]);a.quene.push(t),a.addChild(e,t)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[],a.init=function(){var e=new i.Sprite((0,i.getTexture)("backgroud14.png")),t=(0,i.createText)("所以我就跑到奶奶家后面的小山坡上大喊");t.x=581,t.y=636;var n=(0,i.createAnimateSprite)(["assets/14-0.json","assets/14-1.json"]);a.quene.push(n,t),a.addChild(e,n,t)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=new i.Container;a.quene=[];a.init=function(){var e=i.resources["assets/record.json"].textures,t=new i.Sprite(e["15-record.png"]),n=new i.Sprite(e["15-1.png"]),r=new i.Sprite(e["15-1-3.png"]),s=(0,i.createText)("离月亮更近的地方，许下我的愿望  你也可以试着喊一下"),o=new i.Sprite((0,i.getTexture)("15-soundwave.png"));s.x=163,s.y=650,t.x=10,t.y=580;var u=(0,i.createAnimateSprite)(["assets/15-0.json","assets/15-1.json","assets/15-2.json","assets/15-3.json"]);a.quene.push(u),a.addChild(u,s,n,o,r,t)},a.play=function(){this.quene.forEach(function(e){e.currentFrame===e.totalFrames-1?e.gotoAndPlay(0):e.play()})},a.stop=function(){this.quene.forEach(function(e){e.stop()})},t.default=a},269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(n(30)),r=new i.Container;r.init=function(){var e=50*i.screenScaleRitoX,t=5*i.screenScaleRitoX,n=130*i.screenScaleRitoX,a=180*i.screenScaleRitoX,s=10*i.screenScaleRitoX,o=i.resources["assets/navigation.json"].textures,u=i.resources["assets/thumbnails.json"].textures,c=new i.Sprite(o["navigation.png"]);c.scale.set(i.screenScaleRitoX,i.screenScaleRitoX);var l=new i.ScrollContainer,d=new i.LayoutGroup;d.layout=new i.layout.HorizontalLayout,d.layout.gap=s,l.x=e,l.y=t,l.viewPort=d,l.height=c.height,l.width=c.width-105*i.screenScaleRitoX;for(var h=0;h<16;h++){var f=new i.Sprite(u[h+1+".jpg"]);f._to=h,f.height=n,f.width=a,f.interactive=!0,f.buttonMode=!0,d.addChild(f)}this.event(),this.wrap=c,this.Thumbnails=l,r.addChild(c,l)},r.event=function(){var e=null;this.interactive=!0,this.on("pointerdown",function(t){e=Object.assign({},t.data.global)}).on("pointerup",function(t){if("sprite"===t.target.pluginName){var n=t.data.global;Math.abs(n.x-e.x)<15&&Math.abs(n.y-e.y)<15&&(a.default.current=t.target._to)}})},r.slide=function(e){i.c.slide(r,0,"up"===e?-this.height:0)},t.default=r},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(n(30)),r=new i.Container;r.init=function(){var e=i.resources["assets/widget.json"].textures,t=new i.Sprite(e["start.png"]),n=new i.Sprite(e["pause.png"]),s=new i.Sprite(e["left.png"]),o=new i.Sprite(e["right.png"]);t.x=204,n.x=204,n.visible=!1;var u=function(){n.visible=!0,t.visible=!1},c=function(){n.visible=!1,t.visible=!0};this.showPlaying=c,this.showPause=u,this.hideBtn=function(){n.visible=!1,t.visible=!1};s.buttonMode=!0,s.interactive=!0,s.on("pointerdown",function(e){a.default.current--}),o.buttonMode=!0,o.interactive=!0,o.x=408,o.on("pointerdown",function(e){a.default.current++}),t.buttonMode=!0,t.interactive=!0,t.on("pointerdown",function(e){var t=a.default._current_scene;u(),t.play()}),n.buttonMode=!0,n.interactive=!0,n.on("pointerdown",function(e){var t=a.default._current_scene;c(),t.stop()}),r.interactive=!0,r.on("pointerdown",function(e){e.stopped=!0}),r.addChild(s,t,n,o)},t.default=r},3:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimateSprite=t.createText=t.c=t.NaviSlideDistance=t.getTexture=t.screenScaleRitoY=t.screenScaleRitoX=t.layout=t.LayoutGroup=t.ScrollContainer=t.windowWidth=t.windowHeight=t.Graphics=t.Text=t.Sprite=t.Texture=t.TextureCache=t.resources=t.loader=t.autoDetectRenderer=t.Container=t.TWEEN=t.GOWN=t.PIXI=void 0;var a=i(n(51)),r=i(n(125)),s=n(53),o=n(106),u=new r.default(s),c=new s.TextStyle({fontFamily:"Microsoft YaHei",fontSize:22,fontWeight:"normal",lineHeight:20,fill:"#fff",dropShadow:!0,dropShadowColor:"#62240f",dropShadowBlur:5,dropShadowDistance:4,wordWrap:!0,wordWrapWidth:50}),l=o.ScrollContainer,d=o.LayoutGroup,h=o.layout,f=s.Container,p=s.autoDetectRenderer,v=s.loader,g=s.Texture,w=s.Sprite,_=s.Text,y=s.utils,m=s.Graphics,b=v.resources,j=y.TextureCache,S=window.innerHeight,C=window.innerWidth,T=C/1024,x=S/768;window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){},!1),t.PIXI=s,t.GOWN=o,t.TWEEN=a.default,t.Container=f,t.autoDetectRenderer=p,t.loader=v,t.resources=b,t.TextureCache=j,t.Texture=g,t.Sprite=w,t.Text=_,t.Graphics=m,t.windowHeight=S,t.windowWidth=C,t.ScrollContainer=l,t.LayoutGroup=d,t.layout=h,t.screenScaleRitoX=T,t.screenScaleRitoY=x,t.getTexture=function(e){return b["assets/pic-0.json"].textures[e]||b["assets/pic-1.json"].textures[e]},t.NaviSlideDistance=50,t.c=u,t.createText=function(e){var t=new s.Text(e,c);return t.alpha=0,t.play=function(){new a.default.Tween(t).to({alpha:1},1e3).easing(a.default.Easing.Quadratic.InOut).start()},t},t.createAnimateSprite=function(e){var t=[];if("[object Array]"===Object.prototype.toString.call(e))e.forEach(function(e){var n=b[e].textures;for(var i in n)n.hasOwnProperty(i)&&t.push(n[i])}),t.sort(function(e,t){return+e.textureCacheIds[0].replace(".png","")-+t.textureCacheIds[0].replace(".png","")});else{var n=b[e].textures;for(var i in n)n.hasOwnProperty(i)&&t.push(n[i])}var a=new s.extras.AnimatedSprite(t);return a.loop=!1,a.animationSpeed=.5,a.onComplete=function(){window.__widgets.showPlaying()},a}},30:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),r=(i(n(123)),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(253))),s=i(n(51)),o=new a.Container,u=Object.keys(r).length;o.init=function(){this._current=0,this._current_scene=null,this._scenes=[],this._setup(),this._defineProperty()},o._defineProperty=function(){Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,get:function(){return this._current},set:function(e){if(!(e<0||e>u-1)){var t=this._current;this._current=e,this._current_scene=this._scenes[e];var n=this._scenes[e],i=this._scenes[t],r=this.position,o=-a.windowWidth*e;i&&i.reset&&i.reset(),new s.default.Tween(r).to({x:o},1024).easing(s.default.Easing.Quadratic.In).onComplete(function(){n.play()}).start()}}})},o._setup=function(){var e=this;Object.keys(r).forEach(function(t,n){var i=r[t];i.x=a.windowWidth*n,i.scale.set(a.screenScaleRitoX,a.screenScaleRitoY),i.init&&i.init(),e._scenes.push(i),e.addChild(i)}),o.x=-9*a.windowWidth,window.setTimeout(function(){e.x=-0*a.windowWidth,e._current_scene=e._scenes[0]},0)},t.default=o},51:function(e,t,n){(function(n){var i,a=function(){this._tweens={},this._tweensAddedDuringUpdate={}};a.prototype={getAll:function(){return Object.keys(this._tweens).map(function(e){return this._tweens[e]}.bind(this))},removeAll:function(){this._tweens={}},add:function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},remove:function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},update:function(e,t){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(e=void 0!==e?e:r.now();n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var a=this._tweens[n[i]];a&&!1===a.update(e)&&(a._isPlaying=!1,t||delete this._tweens[n[i]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var r=new a;r.Group=a,r._nextId=0,r.nextId=function(){return r._nextId++},"undefined"==typeof window&&void 0!==n?r.now=function(){var e=n.hrtime();return 1e3*e[0]+e[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?r.now=window.performance.now.bind(window.performance):void 0!==Date.now?r.now=Date.now:r.now=function(){return(new Date).getTime()},r.Tween=function(e,t){this._object=e,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=r.Easing.Linear.None,this._interpolationFunction=r.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=t||r,this._id=r.nextId()},r.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(e,t){return this._valuesEnd=e,void 0!==t&&(this._duration=t),this},start:function(e){this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==e?"string"==typeof e?r.now()+parseFloat(e):e:r.now(),this._startTime+=this._delayTime;for(var t in this._valuesEnd){if(this._valuesEnd[t]instanceof Array){if(0===this._valuesEnd[t].length)continue;this._valuesEnd[t]=[this._object[t]].concat(this._valuesEnd[t])}void 0!==this._object[t]&&(this._valuesStart[t]=this._object[t],this._valuesStart[t]instanceof Array==!1&&(this._valuesStart[t]*=1),this._valuesStartRepeat[t]=this._valuesStart[t]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(this._startTime+this._duration),this},stopChainedTweens:function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop()},delay:function(e){return this._delayTime=e,this},repeat:function(e){return this._repeat=e,this},repeatDelay:function(e){return this._repeatDelayTime=e,this},yoyo:function(e){return this._yoyo=e,this},easing:function(e){return this._easingFunction=e,this},interpolation:function(e){return this._interpolationFunction=e,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(e){return this._onStartCallback=e,this},onUpdate:function(e){return this._onUpdateCallback=e,this},onComplete:function(e){return this._onCompleteCallback=e,this},onStop:function(e){return this._onStopCallback=e,this},update:function(e){var t,n,i;if(e<this._startTime)return!0;!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(n=(e-this._startTime)/this._duration)>1?1:n,i=this._easingFunction(n);for(t in this._valuesEnd)if(void 0!==this._valuesStart[t]){var a=this._valuesStart[t]||0,r=this._valuesEnd[t];r instanceof Array?this._object[t]=this._interpolationFunction(r,i):("string"==typeof r&&(r="+"===r.charAt(0)||"-"===r.charAt(0)?a+parseFloat(r):parseFloat(r)),"number"==typeof r&&(this._object[t]=a+(r-a)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1===n){if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(t in this._valuesStartRepeat){if("string"==typeof this._valuesEnd[t]&&(this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(this._valuesEnd[t])),this._yoyo){var s=this._valuesStartRepeat[t];this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=s}this._valuesStart[t]=this._valuesStartRepeat[t]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,u=this._chainedTweens.length;o<u;o++)this._chainedTweens[o].start(this._startTime+this._duration);return!1}return!0}},r.Easing={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return 0===e?0:Math.pow(1024,e-1)},Out:function(e){return 1===e?1:1-Math.pow(2,-10*e)},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return 0===e?0:1===e?1:-Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)},Out:function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin(5*(e-.1)*Math.PI)+1},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?-.5*Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)+1}},Back:{In:function(e){return e*e*(2.70158*e-1.70158)},Out:function(e){return--e*e*(2.70158*e+1.70158)+1},InOut:function(e){return(e*=2)<1?e*e*(3.5949095*e-2.5949095)*.5:.5*((e-=2)*e*(3.5949095*e+2.5949095)+2)}},Bounce:{In:function(e){return 1-r.Easing.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*r.Easing.Bounce.In(2*e):.5*r.Easing.Bounce.Out(2*e-1)+.5}}},r.Interpolation={Linear:function(e,t){var n=e.length-1,i=n*t,a=Math.floor(i),s=r.Interpolation.Utils.Linear;return t<0?s(e[0],e[1],i):t>1?s(e[n],e[n-1],n-i):s(e[a],e[a+1>n?n:a+1],i-a)},Bezier:function(e,t){for(var n=0,i=e.length-1,a=Math.pow,s=r.Interpolation.Utils.Bernstein,o=0;o<=i;o++)n+=a(1-t,i-o)*a(t,o)*e[o]*s(i,o);return n},CatmullRom:function(e,t){var n=e.length-1,i=n*t,a=Math.floor(i),s=r.Interpolation.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(a=Math.floor(i=n*(1+t))),s(e[(a-1+n)%n],e[a],e[(a+1)%n],e[(a+2)%n],i-a)):t<0?e[0]-(s(e[0],e[0],e[1],e[1],-i)-e[0]):t>1?e[n]-(s(e[n],e[n],e[n-1],e[n-1],i-n)-e[n]):s(e[a?a-1:0],e[a],e[n<a+1?n:a+1],e[n<a+2?n:a+2],i-a)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=r.Interpolation.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:function(){var e=[1];return function(t){var n=1;if(e[t])return e[t];for(var i=t;i>1;i--)n*=i;return e[t]=n,n}}(),CatmullRom:function(e,t,n,i,a){var r=.5*(n-e),s=.5*(i-t),o=a*a;return(2*t-2*n+r+s)*(a*o)+(-3*t+3*n-2*r-s)*o+r*a+t}}},void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}).call(t,n(52))}},[124]);
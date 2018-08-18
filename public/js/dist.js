!function(e){var t=!0;e.flexslider=function(a,n){var i=e(a);i.vars=e.extend({},e.flexslider.defaults,n);var s,r=i.vars.namespace,o=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,l=("ontouchstart"in window||o||window.DocumentTouch&&document instanceof DocumentTouch)&&i.vars.touch,c="click touchend MSPointerUp keyup",d="",u="vertical"===i.vars.direction,v=i.vars.reverse,p=i.vars.itemWidth>0,m="fade"===i.vars.animation,f=""!==i.vars.asNavFor,h={};e.data(a,"flexslider",i),h={init:function(){i.animating=!1,i.currentSlide=parseInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&&(i.currentSlide=0),i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=i.vars.selector.substr(0,i.vars.selector.search(" ")),i.slides=e(i.vars.selector,i),i.container=e(i.containerSelector,i),i.count=i.slides.length,i.syncExists=e(i.vars.sync).length>0,"slide"===i.vars.animation&&(i.vars.animation="swing"),i.prop=u?"top":"marginLeft",i.args={},i.manualPause=!1,i.stopped=!1,i.started=!1,i.startTimeout=null,i.transitions=!i.vars.video&&!m&&i.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return i.pfx=t[a].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),i.ensureAnimationEnd="",""!==i.vars.controlsContainer&&(i.controlsContainer=e(i.vars.controlsContainer).length>0&&e(i.vars.controlsContainer)),""!==i.vars.manualControls&&(i.manualControls=e(i.vars.manualControls).length>0&&e(i.vars.manualControls)),""!==i.vars.customDirectionNav&&(i.customDirectionNav=2===e(i.vars.customDirectionNav).length&&e(i.vars.customDirectionNav)),i.vars.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.controlNav&&h.controlNav.setup(),i.vars.directionNav&&h.directionNav.setup(),i.vars.keyboard&&(1===e(i.containerSelector).length||i.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!i.animating&&(39===t||37===t)){var a=39===t?i.getTarget("next"):37===t&&i.getTarget("prev");i.flexAnimate(a,i.vars.pauseOnAction)}}),i.vars.mousewheel&&i.bind("mousewheel",function(e,t,a,n){e.preventDefault();var s=0>t?i.getTarget("next"):i.getTarget("prev");i.flexAnimate(s,i.vars.pauseOnAction)}),i.vars.pausePlay&&h.pausePlay.setup(),i.vars.slideshow&&i.vars.pauseInvisible&&h.pauseInvisible.init(),i.vars.slideshow&&(i.vars.pauseOnHover&&i.hover(function(){i.manualPlay||i.manualPause||i.pause()},function(){i.manualPause||i.manualPlay||i.stopped||i.play()}),i.vars.pauseInvisible&&h.pauseInvisible.isHidden()||(i.vars.initDelay>0?i.startTimeout=setTimeout(i.play,i.vars.initDelay):i.play())),f&&h.asNav.setup(),l&&i.vars.touch&&h.touch(),(!m||m&&i.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",h.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.vars.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(r+"active-slide").eq(i.currentItem).addClass(r+"active-slide"),o?(a._slider=i,i.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var a=e(this),n=a.index();e(i.vars.asNavFor).data("flexslider").animating||a.hasClass("active")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})})):i.slides.on(c,function(t){t.preventDefault();var a=e(this),n=a.index(),s=a.offset().left-e(i).scrollLeft();0>=s&&a.hasClass(r+"active-slide")?i.flexAnimate(i.getTarget("prev"),!0):e(i.vars.asNavFor).data("flexslider").animating||a.hasClass(r+"active-slide")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?h.controlNav.setupManual():h.controlNav.setupPaging()},setupPaging:function(){var t,a,n="thumbnails"===i.vars.controlNav?"control-thumbs":"control-paging",s=1;if(i.controlNavScaffold=e('<ol class="'+r+"control-nav "+r+n+'"></ol>'),i.pagingCount>1)for(var o=0;o<i.pagingCount;o++){if(a=i.slides.eq(o),void 0===a.attr("data-thumb-alt")&&a.attr("data-thumb-alt",""),altText=""!==a.attr("data-thumb-alt")?altText=' alt="'+a.attr("data-thumb-alt")+'"':"",t="thumbnails"===i.vars.controlNav?'<img src="'+a.attr("data-thumb")+'"'+altText+"/>":'<a href="#">'+s+"</a>","thumbnails"===i.vars.controlNav&&!0===i.vars.thumbCaptions){var l=a.attr("data-thumbcaption");""!==l&&void 0!==l&&(t+='<span class="'+r+'caption">'+l+"</span>")}i.controlNavScaffold.append("<li>"+t+"</li>"),s++}i.controlsContainer?e(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),h.controlNav.set(),h.controlNav.active(),i.controlNavScaffold.delegate("a, img",c,function(t){if(t.preventDefault(),""===d||d===t.type){var a=e(this),n=i.controlNav.index(a);a.hasClass(r+"active")||(i.direction=n>i.currentSlide?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===d&&(d=t.type),h.setToClearWatchedEvent()})},setupManual:function(){i.controlNav=i.manualControls,h.controlNav.active(),i.controlNav.bind(c,function(t){if(t.preventDefault(),""===d||d===t.type){var a=e(this),n=i.controlNav.index(a);a.hasClass(r+"active")||(n>i.currentSlide?i.direction="next":i.direction="prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===d&&(d=t.type),h.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===i.vars.controlNav?"img":"a";i.controlNav=e("."+r+"control-nav li "+t,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(r+"active").eq(i.animatingTo).addClass(r+"active")},update:function(t,a){i.pagingCount>1&&"add"===t?i.controlNavScaffold.append(e('<li><a href="#">'+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(a).closest("li").remove(),h.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(a,t):h.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+r+'direction-nav"><li class="'+r+'nav-prev"><a class="'+r+'prev" href="#">'+i.vars.prevText+'</a></li><li class="'+r+'nav-next"><a class="'+r+'next" href="#">'+i.vars.nextText+"</a></li></ul>");i.customDirectionNav?i.directionNav=i.customDirectionNav:i.controlsContainer?(e(i.controlsContainer).append(t),i.directionNav=e("."+r+"direction-nav li a",i.controlsContainer)):(i.append(t),i.directionNav=e("."+r+"direction-nav li a",i)),h.directionNav.update(),i.directionNav.bind(c,function(t){t.preventDefault();var a;(""===d||d===t.type)&&(a=e(this).hasClass(r+"next")?i.getTarget("next"):i.getTarget("prev"),i.flexAnimate(a,i.vars.pauseOnAction)),""===d&&(d=t.type),h.setToClearWatchedEvent()})},update:function(){var e=r+"disabled";1===i.pagingCount?i.directionNav.addClass(e).attr("tabindex","-1"):i.vars.animationLoop?i.directionNav.removeClass(e).removeAttr("tabindex"):0===i.animatingTo?i.directionNav.removeClass(e).filter("."+r+"prev").addClass(e).attr("tabindex","-1"):i.animatingTo===i.last?i.directionNav.removeClass(e).filter("."+r+"next").addClass(e).attr("tabindex","-1"):i.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+r+'pauseplay"><a href="#"></a></div>');i.controlsContainer?(i.controlsContainer.append(t),i.pausePlay=e("."+r+"pauseplay a",i.controlsContainer)):(i.append(t),i.pausePlay=e("."+r+"pauseplay a",i)),h.pausePlay.update(i.vars.slideshow?r+"pause":r+"play"),i.pausePlay.bind(c,function(t){t.preventDefault(),(""===d||d===t.type)&&(e(this).hasClass(r+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())),""===d&&(d=t.type),h.setToClearWatchedEvent()})},update:function(e){"play"===e?i.pausePlay.removeClass(r+"pause").addClass(r+"play").html(i.vars.playText):i.pausePlay.removeClass(r+"play").addClass(r+"pause").html(i.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),i.animating?e.preventDefault():(i.pause(),a._gesture.addPointer(e.pointerId),S=0,c=u?i.h:i.w,f=Number(new Date),l=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*c:(i.currentSlide+i.cloneOffset)*c)}function t(e){e.stopPropagation();var t=e.target._slider;if(t){var n=-e.translationX,i=-e.translationY;return S+=u?i:n,d=S,C=u?Math.abs(S)<Math.abs(-n):Math.abs(S)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){a._gesture.stop()}):void((!C||Number(new Date)-f>500)&&(e.preventDefault(),!m&&t.transitions&&(t.vars.animationLoop||(d=S/(0===t.currentSlide&&0>S||t.currentSlide===t.last&&S>0?Math.abs(S)/c+2:1)),t.setProps(l+d,"setTouch"))))}}function n(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!C&&null!==d){var a=v?-d:d,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):m||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}s=null,r=null,d=null,l=null,S=0}}var s,r,l,c,d,f,h,g,b,C=!1,y=0,w=0,S=0;o?(a.style.msTouchAction="none",a._gesture=new MSGesture,a._gesture.target=a,a.addEventListener("MSPointerDown",e,!1),a._slider=i,a.addEventListener("MSGestureChange",t,!1),a.addEventListener("MSGestureEnd",n,!1)):(h=function(e){i.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(i.pause(),c=u?i.h:i.w,f=Number(new Date),y=e.touches[0].pageX,w=e.touches[0].pageY,l=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*c:(i.currentSlide+i.cloneOffset)*c,s=u?w:y,r=u?y:w,a.addEventListener("touchmove",g,!1),a.addEventListener("touchend",b,!1))},g=function(e){y=e.touches[0].pageX,w=e.touches[0].pageY,d=u?s-w:s-y,C=u?Math.abs(d)<Math.abs(y-r):Math.abs(d)<Math.abs(w-r);var t=500;(!C||Number(new Date)-f>t)&&(e.preventDefault(),!m&&i.transitions&&(i.vars.animationLoop||(d/=0===i.currentSlide&&0>d||i.currentSlide===i.last&&d>0?Math.abs(d)/c+2:1),i.setProps(l+d,"setTouch")))},b=function(e){if(a.removeEventListener("touchmove",g,!1),i.animatingTo===i.currentSlide&&!C&&null!==d){var t=v?-d:d,n=t>0?i.getTarget("next"):i.getTarget("prev");i.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(t)>50||Math.abs(t)>c/2)?i.flexAnimate(n,i.vars.pauseOnAction):m||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}a.removeEventListener("touchend",b,!1),s=null,r=null,d=null,l=null},a.addEventListener("touchstart",h,!1))},resize:function(){!i.animating&&i.is(":visible")&&(p||i.doMath(),m?h.smoothHeight():p?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):u?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(i.vars.smoothHeight&&h.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(e){if(!u||m){var t=m?i:i.viewport;e?t.animate({height:i.slides.eq(i.animatingTo).height()},e):t.height(i.slides.eq(i.animatingTo).height())}},sync:function(t){var a=e(i.vars.sync).data("flexslider"),n=i.animatingTo;switch(t){case"animate":a.flexAnimate(n,i.vars.pauseOnAction,!1,!0);break;case"play":a.playing||a.asNav||a.play();break;case"pause":a.pause()}},uniqueID:function(t){return t.filter("[id]").add(t.find("[id]")).each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var e=h.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){h.pauseInvisible.isHidden()?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i.vars.initDelay>0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHidden:function(){var e=h.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(s),s=setTimeout(function(){d=""},3e3)}},i.flexAnimate=function(t,a,n,s,o){if(i.vars.animationLoop||t===i.currentSlide||(i.direction=t>i.currentSlide?"next":"prev"),f&&1===i.pagingCount&&(i.direction=i.currentItem<t?"next":"prev"),!i.animating&&(i.canAdvance(t,o)||n)&&i.is(":visible")){if(f&&s){var c=e(i.vars.asNavFor).data("flexslider");if(i.atEnd=0===t||t===i.count-1,c.flexAnimate(t,!0,!1,!0,o),i.direction=i.currentItem<t?"next":"prev",c.direction=i.direction,Math.ceil((t+1)/i.visible)-1===i.currentSlide||0===t)return i.currentItem=t,i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),!1;i.currentItem=t,i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),t=Math.floor(t/i.visible)}if(i.animating=!0,i.animatingTo=t,a&&i.pause(),i.vars.before(i),i.syncExists&&!o&&h.sync("animate"),i.vars.controlNav&&h.controlNav.active(),p||i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),i.atEnd=0===t||t===i.last,i.vars.directionNav&&h.directionNav.update(),t===i.last&&(i.vars.end(i),i.vars.animationLoop||i.pause()),m)l?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(t).css({opacity:1,zIndex:2}),i.wrapup(C)):(i.slides.eq(i.currentSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.easing),i.slides.eq(t).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing,i.wrapup));else{var d,g,b,C=u?i.slides.filter(":first").height():i.computedW;p?(d=i.vars.itemMargin,b=(i.itemW+d)*i.move*i.animatingTo,g=b>i.limit&&1!==i.visible?i.limit:b):g=0===i.currentSlide&&t===i.count-1&&i.vars.animationLoop&&"next"!==i.direction?v?(i.count+i.cloneOffset)*C:0:i.currentSlide===i.last&&0===t&&i.vars.animationLoop&&"prev"!==i.direction?v?0:(i.count+1)*C:v?(i.count-1-t+i.cloneOffset)*C:(t+i.cloneOffset)*C,i.setProps(g,"",i.vars.animationSpeed),i.transitions?(i.vars.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(i.ensureAnimationEnd),i.wrapup(C)}),clearTimeout(i.ensureAnimationEnd),i.ensureAnimationEnd=setTimeout(function(){i.wrapup(C)},i.vars.animationSpeed+100)):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,function(){i.wrapup(C)})}i.vars.smoothHeight&&h.smoothHeight(i.vars.animationSpeed)}},i.wrapup=function(e){m||p||(0===i.currentSlide&&i.animatingTo===i.last&&i.vars.animationLoop?i.setProps(e,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&i.vars.animationLoop&&i.setProps(e,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,i.vars.after(i)},i.animateSlides=function(){!i.animating&&t&&i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.animatedSlides=null,i.playing=!1,i.vars.pausePlay&&h.pausePlay.update("play"),i.syncExists&&h.sync("pause")},i.play=function(){i.playing&&clearInterval(i.animatedSlides),i.animatedSlides=i.animatedSlides||setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=i.playing=!0,i.vars.pausePlay&&h.pausePlay.update("pause"),i.syncExists&&h.sync("play")},i.stop=function(){i.pause(),i.stopped=!0},i.canAdvance=function(e,t){var a=f?i.pagingCount-1:i.last;return!!t||(!(!f||i.currentItem!==i.count-1||0!==e||"prev"!==i.direction)||(!f||0!==i.currentItem||e!==i.pagingCount-1||"next"===i.direction)&&(!(e===i.currentSlide&&!f)&&(!!i.vars.animationLoop||(!i.atEnd||0!==i.currentSlide||e!==a||"next"===i.direction)&&(!i.atEnd||i.currentSlide!==a||0!==e||"next"!==i.direction))))},i.getTarget=function(e){return i.direction=e,"next"===e?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(e,t,a){var n=function(){var a=e?e:(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo,n=function(){if(p)return"setTouch"===t?e:v&&i.animatingTo===i.last?0:v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:a;switch(t){case"setTotal":return v?(i.count-1-i.currentSlide+i.cloneOffset)*e:(i.currentSlide+i.cloneOffset)*e;case"setTouch":return v?e:e;case"jumpEnd":return v?e:i.count*e;case"jumpStart":return v?i.count*e:e;default:return e}}();return-1*n+"px"}();i.transitions&&(n=u?"translate3d(0,"+n+",0)":"translate3d("+n+",0,0)",a=void 0!==a?a/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",a),i.container.css("transition-duration",a)),i.args[i.prop]=n,(i.transitions||void 0===a)&&i.container.css(i.args),i.container.css("transform",n)},i.setup=function(t){if(m)i.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(l?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):0==i.vars.fadeFirstSlide?i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).css({opacity:1}):i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&&h.smoothHeight();else{var a,n;"init"===t&&(i.viewport=e('<div class="'+r+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,v&&(n=e.makeArray(i.slides).reverse(),i.slides=e(n),i.container.empty().append(i.slides))),i.vars.animationLoop&&!p&&(i.cloneCount=2,i.cloneOffset=1,"init"!==t&&i.container.find(".clone").remove(),i.container.append(h.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(h.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),i.newSlides=e(i.vars.selector,i),a=v?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,u&&!p?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(a*i.h,"init")},"init"===t?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(a*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,marginRight:i.computedM,"float":"left",display:"block"}),i.vars.smoothHeight&&h.smoothHeight()},"init"===t?100:0))}p||i.slides.removeClass(r+"active-slide").eq(i.currentSlide).addClass(r+"active-slide"),i.vars.init(i)},i.doMath=function(){var e=i.slides.first(),t=i.vars.itemMargin,a=i.vars.minItems,n=i.vars.maxItems;i.w=void 0===i.viewport?i.width():i.viewport.width(),i.h=e.height(),i.boxPadding=e.outerWidth()-e.width(),p?(i.itemT=i.vars.itemWidth+t,i.itemM=t,i.minW=a?a*i.itemT:i.w,i.maxW=n?n*i.itemT-t:i.w,i.itemW=i.minW>i.w?(i.w-t*(a-1))/a:i.maxW<i.w?(i.w-t*(n-1))/n:i.vars.itemWidth>i.w?i.w:i.vars.itemWidth,i.visible=Math.floor(i.w/i.itemW),i.move=i.vars.move>0&&i.vars.move<i.visible?i.vars.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:i.vars.itemWidth>i.w?i.itemW*(i.count-1)+t*(i.count-1):(i.itemW+t)*i.count-i.w-t):(i.itemW=i.w,i.itemM=t,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding,i.computedM=i.itemM},i.update=function(e,t){i.doMath(),p||(e<i.currentSlide?i.currentSlide+=1:e<=i.currentSlide&&0!==e&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),i.vars.controlNav&&!i.manualControls&&("add"===t&&!p||i.pagingCount>i.controlNav.length?h.controlNav.update("add"):("remove"===t&&!p||i.pagingCount<i.controlNav.length)&&(p&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),h.controlNav.update("remove",i.last))),i.vars.directionNav&&h.directionNav.update()},i.addSlide=function(t,a){var n=e(t);i.count+=1,i.last=i.count-1,u&&v?void 0!==a?i.slides.eq(i.count-a).after(n):i.container.prepend(n):void 0!==a?i.slides.eq(a).before(n):i.container.append(n),i.update(a,"add"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.removeSlide=function(t){var a=isNaN(t)?i.slides.index(e(t)):t;i.count-=1,i.last=i.count-1,isNaN(t)?e(t,i.slides).remove():u&&v?i.slides.eq(i.last).remove():i.slides.eq(t).remove(),i.doMath(),i.update(a,"remove"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},h.init()},e(window).blur(function(e){t=!1}).focus(function(e){t=!0}),e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var a=e(this),n=t.selector?t.selector:".slides > li",i=a.find(n);1===i.length&&t.allowOneSlide===!0||0===i.length?(i.fadeIn(400),t.start&&t.start(a)):void 0===a.data("flexslider")&&new e.flexslider(this,t)});var a=e(this).data("flexslider");switch(t){case"play":a.play();break;case"pause":a.pause();break;case"stop":a.stop();break;case"next":a.flexAnimate(a.getTarget("next"),!0);break;case"prev":case"previous":a.flexAnimate(a.getTarget("prev"),!0);break;default:"number"==typeof t&&a.flexAnimate(t,!0)}}}(jQuery),function(e){e.fn.superfish=function(t){var a=e.fn.superfish,n=a.c,i=e(['<span class="',n.arrowClass,'"> &#xbb;</span>'].join("")),s=function(){var t=e(this),a=o(t);clearTimeout(a.sfTimer),t.showSuperfishUl().siblings().hideSuperfishUl()},r=function(){var t=e(this),n=o(t),i=a.op;clearTimeout(n.sfTimer),n.sfTimer=setTimeout(function(){i.retainPath=e.inArray(t[0],i.$path)>-1,t.hideSuperfishUl(),i.$path.length&&t.parents(["li.",i.hoverClass].join("")).length<1&&s.call(i.$path)},i.delay)},o=function(e){var t=e.parents(["ul.",n.menuClass,":first"].join(""))[0];return a.op=a.o[t.serial],t},l=function(e){e.addClass(n.anchorClass).append(i.clone())};return this.each(function(){var i=this.serial=a.o.length,o=e.extend({},a.defaults,t);o.$path=e("li."+o.pathClass,this).slice(0,o.pathLevels).each(function(){e(this).addClass([o.hoverClass,n.bcClass].join(" ")).filter("li:has(ul)").removeClass(o.pathClass)}),a.o[i]=a.op=o,e("li:has(ul)",this)[e.fn.hoverIntent&&!o.disableHI?"hoverIntent":"hover"](s,r).each(function(){o.autoArrows&&l(e(">a:first-child",this))}).not("."+n.bcClass).hideSuperfishUl();var c=e("a",this);c.each(function(e){var t=c.eq(e).parents("li");c.eq(e).focus(function(){s.call(t)}).blur(function(){r.call(t)})}),o.onInit.call(this)}).each(function(){var t=[n.menuClass];!a.op.dropShadows||e.browser.msie&&e.browser.version<7||t.push(n.shadowClass),e(this).addClass(t.join(" "))})};var t=e.fn.superfish;t.o=[],t.op={},t.IE7fix=function(){var a=t.op;e.browser.msie&&e.browser.version>6&&a.dropShadows&&void 0!=a.animation.opacity&&this.toggleClass(t.c.shadowClass+"-off")},t.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"},t.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},speed:"normal",autoArrows:!0,dropShadows:!0,disableHI:!1,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}},e.fn.extend({hideSuperfishUl:function(){var a=t.op,n=a.retainPath===!0?a.$path:"";a.retainPath=!1;var i=e(["li.",a.hoverClass].join(""),this).add(this).not(n).removeClass(a.hoverClass).find(">ul").hide().css("visibility","hidden");return a.onHide.call(i),this},showSuperfishUl:function(){var e=t.op,a=(t.c.shadowClass+"-off",this.addClass(e.hoverClass).find(">ul:hidden").css("visibility","visible"));return t.IE7fix.call(a),e.onBeforeShow.call(a),a.animate(e.animation,e.speed,function(){t.IE7fix.call(a),e.onShow.call(a)}),this}})}(jQuery),jQuery(document).ready(function(e){e("#site-navigation ul.dropdown").superfish({delay:1e3,animation:{opacity:"show",height:"show"},speed:"fast",dropShadows:!1,speedOut:"fast",disableHI:!0,useClick:!1})}),jQuery(document).ready(function(e){e("#menu-main-slick").slicknav({prependTo:".navbar-header",allowParentLinks:!0})}),!function(e,t,a){function n(t,a){this.element=t,this.settings=e.extend({},i,a),this.settings.duplicate||a.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=i,this._name=s,this.init()}var i={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",animations:"jquery",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},s="slicknav",r="slicknav",o={DOWN:40,ENTER:13,ESCAPE:27,LEFT:37,RIGHT:39,SPACE:32,TAB:9,UP:38};n.prototype.init=function(){var a,n,i=this,s=e(this.element),l=this.settings;if(l.duplicate?i.mobileNav=s.clone():i.mobileNav=s,l.removeIds&&(i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(t,a){e(a).removeAttr("id")})),l.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each(function(t,a){e(a).removeAttr("class")})),l.removeStyles&&(i.mobileNav.removeAttr("style"),i.mobileNav.find("*").each(function(t,a){e(a).removeAttr("style")})),a=r+"_icon",""===l.label&&(a+=" "+r+"_no-text"),"a"==l.parentTag&&(l.parentTag='a href="#"'),i.mobileNav.attr("class",r+"_nav"),n=e('<div class="'+r+'_menu"></div>'),""!==l.brand){var c=e('<div class="'+r+'_brand">'+l.brand+"</div>");e(n).append(c)}i.btn=e(["<"+l.parentTag+' aria-haspopup="true" role="button" tabindex="0" class="'+r+"_btn "+r+'_collapsed">','<span class="'+r+'_menutxt">'+l.label+"</span>",'<span class="'+a+'">','<span class="'+r+'_icon-bar"></span>','<span class="'+r+'_icon-bar"></span>','<span class="'+r+'_icon-bar"></span>',"</span>","</"+l.parentTag+">"].join("")),e(n).append(i.btn),""!==l.appendTo?e(l.appendTo).append(n):e(l.prependTo).prepend(n),n.append(i.mobileNav);var d=i.mobileNav.find("li");e(d).each(function(){var t=e(this),a={};if(a.children=t.children("ul").attr("role","menu"),t.data("menu",a),a.children.length>0){var n=t.contents(),s=!1,o=[];e(n).each(function(){return!e(this).is("ul")&&(o.push(this),void(e(this).is("a")&&(s=!0)))});var c=e("<"+l.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+r+'_item"/>');if(l.allowParentLinks&&!l.nestedParentLinks&&s)e(o).wrapAll('<span class="'+r+"_parent-link "+r+'_row"/>').parent();else{var d=e(o).wrapAll(c).parent();d.addClass(r+"_row")}l.showChildren?t.addClass(r+"_open"):t.addClass(r+"_collapsed"),t.addClass(r+"_parent");var u=e('<span class="'+r+'_arrow">'+(l.showChildren?l.openedSymbol:l.closedSymbol)+"</span>");l.allowParentLinks&&!l.nestedParentLinks&&s&&(u=u.wrap(c).parent()),e(o).last().after(u)}else 0===t.children().length&&t.addClass(r+"_txtnode");t.children("a").attr("role","menuitem").click(function(t){l.closeOnClick&&!e(t.target).parent().closest("li").hasClass(r+"_parent")&&e(i.btn).click()}),l.closeOnClick&&l.allowParentLinks&&(t.children("a").children("a").click(function(t){e(i.btn).click()}),t.find("."+r+"_parent-link a:not(."+r+"_item)").click(function(t){e(i.btn).click()}))}),e(d).each(function(){var t=e(this).data("menu");l.showChildren||i._visibilityToggle(t.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(t).mousedown(function(){i._outlines(!1)}),e(t).keyup(function(){i._outlines(!0)}),e(i.btn).click(function(e){e.preventDefault(),i._menuToggle()}),i.mobileNav.on("click","."+r+"_item",function(t){t.preventDefault(),i._itemClick(e(this))}),e(i.btn).keydown(function(t){var a=t||event;switch(a.keyCode){case o.ENTER:case o.SPACE:case o.DOWN:t.preventDefault(),a.keyCode===o.DOWN&&e(i.btn).hasClass(r+"_open")||i._menuToggle(),e(i.btn).next().find('[role="menuitem"]').first().focus()}}),i.mobileNav.on("keydown","."+r+"_item",function(t){var a=t||event;switch(a.keyCode){case o.ENTER:t.preventDefault(),i._itemClick(e(t.target));break;case o.RIGHT:t.preventDefault(),e(t.target).parent().hasClass(r+"_collapsed")&&i._itemClick(e(t.target)),e(t.target).next().find('[role="menuitem"]').first().focus()}}),i.mobileNav.on("keydown",'[role="menuitem"]',function(t){var a=t||event;switch(a.keyCode){case o.DOWN:t.preventDefault();var n=e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),s=n.index(t.target),l=s+1;n.length<=l&&(l=0);var c=n.eq(l);c.focus();break;case o.UP:t.preventDefault();var n=e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),s=n.index(t.target),c=n.eq(s-1);c.focus();break;case o.LEFT:if(t.preventDefault(),e(t.target).parent().parent().parent().hasClass(r+"_open")){var d=e(t.target).parent().parent().prev();d.focus(),i._itemClick(d)}else e(t.target).parent().parent().hasClass(r+"_nav")&&(i._menuToggle(),e(i.btn).focus());break;case o.ESCAPE:t.preventDefault(),i._menuToggle(),e(i.btn).focus()}}),l.allowParentLinks&&l.nestedParentLinks&&e("."+r+"_item a").click(function(e){e.stopImmediatePropagation()})},n.prototype._menuToggle=function(e){var t=this,a=t.btn,n=t.mobileNav;a.hasClass(r+"_collapsed")?(a.removeClass(r+"_collapsed"),a.addClass(r+"_open")):(a.removeClass(r+"_open"),a.addClass(r+"_collapsed")),a.addClass(r+"_animating"),t._visibilityToggle(n,a.parent(),!0,a)},n.prototype._itemClick=function(e){var t=this,a=t.settings,n=e.data("menu");n||(n={},n.arrow=e.children("."+r+"_arrow"),n.ul=e.next("ul"),n.parent=e.parent(),n.parent.hasClass(r+"_parent-link")&&(n.parent=e.parent().parent(),n.ul=e.parent().next("ul")),e.data("menu",n)),n.parent.hasClass(r+"_collapsed")?(n.arrow.html(a.openedSymbol),n.parent.removeClass(r+"_collapsed"),n.parent.addClass(r+"_open"),n.parent.addClass(r+"_animating"),t._visibilityToggle(n.ul,n.parent,!0,e)):(n.arrow.html(a.closedSymbol),n.parent.addClass(r+"_collapsed"),n.parent.removeClass(r+"_open"),n.parent.addClass(r+"_animating"),t._visibilityToggle(n.ul,n.parent,!0,e))},n.prototype._visibilityToggle=function(t,a,n,i,s){function o(t,a){e(t).removeClass(r+"_animating"),e(a).removeClass(r+"_animating"),s||d.afterOpen(t)}function l(a,n){t.attr("aria-hidden","true"),u.attr("tabindex","-1"),c._setVisAttr(t,!0),t.hide(),e(a).removeClass(r+"_animating"),e(n).removeClass(r+"_animating"),s?"init"==a&&d.init():d.afterClose(a)}var c=this,d=c.settings,u=c._getActionItems(t),v=0;n&&(v=d.duration),t.hasClass(r+"_hidden")?(t.removeClass(r+"_hidden"),s||d.beforeOpen(i),"jquery"===d.animations?t.stop(!0,!0).slideDown(v,d.easingOpen,function(){o(i,a)}):"velocity"===d.animations&&t.velocity("finish").velocity("slideDown",{duration:v,easing:d.easingOpen,complete:function(){o(i,a)}}),t.attr("aria-hidden","false"),u.attr("tabindex","0"),c._setVisAttr(t,!1)):(t.addClass(r+"_hidden"),s||d.beforeClose(i),"jquery"===d.animations?t.stop(!0,!0).slideUp(v,this.settings.easingClose,function(){l(i,a)}):"velocity"===d.animations&&t.velocity("finish").velocity("slideUp",{
duration:v,easing:d.easingClose,complete:function(){l(i,a)}}))},n.prototype._setVisAttr=function(t,a){var n=this,i=t.children("li").children("ul").not("."+r+"_hidden");a?i.each(function(){var t=e(this);t.attr("aria-hidden","true");var i=n._getActionItems(t);i.attr("tabindex","-1"),n._setVisAttr(t,a)}):i.each(function(){var t=e(this);t.attr("aria-hidden","false");var i=n._getActionItems(t);i.attr("tabindex","0"),n._setVisAttr(t,a)})},n.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var a=e.children("li"),n=a.find("a");t.links=n.add(a.find("."+r+"_item")),e.data("menu",t)}return t.links},n.prototype._outlines=function(t){t?e("."+r+"_item, ."+r+"_btn").css("outline",""):e("."+r+"_item, ."+r+"_btn").css("outline","none")},n.prototype.toggle=function(){var e=this;e._menuToggle()},n.prototype.open=function(){var e=this;e.btn.hasClass(r+"_collapsed")&&e._menuToggle()},n.prototype.close=function(){var e=this;e.btn.hasClass(r+"_open")&&e._menuToggle()},e.fn[s]=function(t){var a=arguments;if(void 0===t||"object"==typeof t)return this.each(function(){e.data(this,"plugin_"+s)||e.data(this,"plugin_"+s,new n(this,t))});if("string"==typeof t&&"_"!==t[0]&&"init"!==t){var i;return this.each(function(){var r=e.data(this,"plugin_"+s);r instanceof n&&"function"==typeof r[t]&&(i=r[t].apply(r,Array.prototype.slice.call(a,1)))}),void 0!==i?i:this}}}(jQuery,document,window);
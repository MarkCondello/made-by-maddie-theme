/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/site.js":
/*!***************************!*\
  !*** ./assets/js/site.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wp_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wp-foundation */ "./assets/js/wp-foundation.js");
/* harmony import */ var _wp_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wp_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var spotlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! spotlight.js */ "./node_modules/spotlight.js/dist/spotlight.bundle.js");
/* harmony import */ var spotlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(spotlight_js__WEBPACK_IMPORTED_MODULE_1__);


$(function () {
  //only need foundation for offcanvas
  var offCanvas = $("#made-off-canvas").foundation();
  var isHomePage = $('body').hasClass('home'),
      content = $(".section h1, .section h2, .section h3, .section p, .section .logo"),
      hamburger = $('.hamburger');

  if (hamburger) {
    $(hamburger).on('click', function (ev) {
      ev.preventDefault();
      var offCanvasIsOpen = $(offCanvas).hasClass('is-open');

      if (offCanvasIsOpen) {
        $(this).removeClass('open');
      } else {
        $(this).addClass('open');
      } //creating issues on mobile
      // if(offCanvasIsOpen && isHomePage){
      //     $(content).show()
      // } else {
      //     $(content).hide();
      // }

    });
  }

  var anchorLinks = []; //change hrefs for category items in menu

  var $navMenuListItems = $("#made-off-canvas-nav .menu-item");
  Array.from($navMenuListItems).forEach(function (item) {
    var link = $(item).children('a'),
        linkTitle = link[0].innerHTML.replace(/\s+/g, '-').toLowerCase(); //attrs for full page menu

    anchorLinks.push(linkTitle);
    link.attr('data-menuanchor', linkTitle);

    if (isHomePage) {
      link.attr('href', "#".concat(linkTitle));
    } else {
      var currPageCat = $("#cat-link").data('menuanchor');

      if ($(link).data('menuanchor') === currPageCat) {
        $(link).addClass('active');
      }

      link.attr('href', "/#".concat(linkTitle));
    }

    $(link).on('click', function () {
      $(hamburger).removeClass('open');
      $(content).show();
      $('#made-off-canvas').foundation('close');
    });
  });
  var fp = new fullpage('#fullpage', {
    anchors: anchorLinks,
    menu: '#made-off-canvas-nav',
    scrollHorizontally: false,
    licenseKey: 'B6DBBF96-8DB64AED-B21E8887-9AA67AB6',
    navigation: true,
    css3: true,
    keyboardScrolling: true,
    //remove full page at breakpoint
    //responsiveWidth: 768,
    onLeave: function onLeave() {
      checkActive();
      console.log("Left the section");
    },
    //onload
    afterRender: function afterRender() {
      var pluginContainer = this; //alert("The resulting DOM structure is ready");
    }
  });

  function checkActive() {
    if (isHomePage) {
      setTimeout(function () {
        //check which section is active
        var panels = $("#fullpage .section"),
            hamburger = $('.hamburger');
        $(panels).each(function (index, panel) {
          if ($(panel).hasClass('active')) {
            var anchor = $(panel).data('anchor');

            if (anchor !== 'home' && anchor !== 'about-me') {
              $(hamburger).addClass('dark');
            } else {
              $(hamburger).removeClass('dark');
            }
          }
        });
      }, 500);
    }
  } //onload


  checkActive();

  if (!isHomePage) {
    //not sure if this is working properly
    var mobileFullWidthImageHeights = function mobileFullWidthImageHeights() {
      var windowWidth = $(window).width();

      if (windowWidth <= 1185) {
        console.log("windowWidth", windowWidth);
        var fullWidthImages = $(".full-width-image");

        if (fullWidthImages.length) {
          $(fullWidthImages).each(function (i, el) {
            $(el).css('minHeight', $(el).data('mobile-height'));
          });
        }
      }
    }; //onload


    mobileFullWidthImageHeights(); //onresize

    $(window).resize(mobileFullWidthImageHeights);
    $(document).on('scroll', function () {
      var scrollTop = $(document).scrollTop();

      if (scrollTop >= 540) {
        $(hamburger).addClass('dark');
      } else {
        $(hamburger).removeClass('dark');
      }
    });
  }
});

/***/ }),

/***/ "./assets/js/wp-foundation.js":
/*!************************************!*\
  !*** ./assets/js/wp-foundation.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
These functions make sure WordPress
and Foundation play nice together.
*/
jQuery(document).ready(function () {
  // Remove empty P tags created by WP inside of Accordion and Orbit
  jQuery('.accordion p:empty, .orbit p:empty').remove(); // Adds Flex Video to YouTube and Vimeo Embeds

  jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function () {
    if (jQuery(this).innerWidth() / jQuery(this).innerHeight() > 1.5) {
      jQuery(this).wrap("<div class='widescreen responsive-embed'/>");
    } else {
      jQuery(this).wrap("<div class='responsive-embed'/>");
    }
  });
});

/***/ }),

/***/ "./assets/scss/site.scss":
/*!*******************************!*\
  !*** ./assets/scss/site.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/spotlight.js/dist/spotlight.bundle.js":
/*!************************************************************!*\
  !*** ./node_modules/spotlight.js/dist/spotlight.bundle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Spotlight.js v0.6.6 (Bundle)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */
(function(){'use strict';var aa={};function ba(a){for(var b=a.classList,c={},d=0;d<b.length;d++)c[b[d]]=1;a.a=c;a.c=b}function f(a,b){a=g(a);var c="string"===typeof b;if(a.length)for(var d=0;d<a.length;d++)(c?ca:da)(a[d],b);else(c?ca:da)(a,b)}function da(a,b){for(var c=0;c<b.length;c++)ca(a,b[c])}function ca(a,b){a.a||ba(a);a.a[b]||(a.a[b]=1,a.c.add(b))}function h(a,b){a=g(a);var c="string"===typeof b;if(a.length)for(var d=0;d<a.length;d++)(c?ea:fa)(a[d],b);else(c?ea:fa)(a,b)}
function fa(a,b){for(var c=0;c<b.length;c++)ea(a,b[c])}function ea(a,b){a.a||ba(a);a.a[b]&&(a.a[b]=0,a.c.remove(b))}function l(a,b,c,d){a=g(a);var e="string"!==typeof b&&Object.keys(b);if(a.length)for(var k=0;k<a.length;k++)(e?ha:ia)(a[k],b,e||c,d);else(e?ha:ia)(a,b,e||c,d)}function ha(a,b,c,d){for(var e=0;e<c.length;e++){var k=c[e];ia(a,k,b[k],d)}}
function ia(a,b,c,d){var e=a.f;e||(a.f=e={});e[b]!==c&&(e[b]=c,(a.g||(a.g=a.style)).setProperty(aa[b]||(aa[b]=b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),c,d?"important":null))}var ja=0;function m(a,b,c){l(a,"transition","none");l(a,b,c);ja||(ja=a.clientTop&&0);l(a,"transition","")}function ka(a,b){b||(b="");a=g(a);if(a.length)for(var c=0;c<a.length;c++){var d=a[c],e=b;d.b!==e&&(d.b=e,d.textContent=e)}else a.b!==b&&(a.b=b,a.textContent=b)}
function g(a){return"string"===typeof a?document.querySelectorAll(a):a};function la(a,b,c,d){ma("add",a,b,c,d)}function na(a,b,c,d){ma("remove",a,b,c,d)}function ma(a,b,c,d,e){b[a+"EventListener"](c||"click",d,"undefined"===typeof e?!0:e)}function n(a,b){a||(a=window.event);a&&(a.stopImmediatePropagation(),b||a.preventDefault(),b||(a.returnValue=!1));return!1};var oa=document.createElement("style");oa.innerHTML="@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#spotlight{position:fixed;z-index:99999;color:#fff;background-color:#000;visibility:hidden;overflow:hidden;-webkit-user-select:none;-ms-user-select:none;user-select:none;transition:visibility .25s ease,opacity .25s ease;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;contain:layout size paint style;touch-action:none;-webkit-tap-highlight-color:transparent}#spotlight.show{opacity:1;visibility:visible;transition:none}#spotlight.show .pane,#spotlight.show .scene{will-change:transform}#spotlight.show .scene img{will-change:transform,opacity}#spotlight,#spotlight .preloader{top:0;width:100%;height:100%;opacity:0}#spotlight .preloader{position:absolute;background-position:center center;background-repeat:no-repeat;background-size:42px 42px}#spotlight .preloader.show{transition:opacity .1s linear .25s;opacity:1}#spotlight .scene{transition:transform 1s cubic-bezier(.1,1,.1,1);pointer-events:none}#spotlight .scene img{display:inline-block;position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;opacity:1;margin:0;padding:0;border:0;transform:translate(-50%,-50%) scale(1) perspective(100vw);transition:transform 1s cubic-bezier(.1,1,.1,1),opacity 1s cubic-bezier(.3,1,.3,1);transform-style:preserve-3d;contain:layout paint style;visibility:hidden}#spotlight .header,#spotlight .pane,#spotlight .scene{position:absolute;top:0;width:100%;height:100%;contain:layout size style}#spotlight .header{height:50px;text-align:right;background-color:rgba(0,0,0,.45);transform:translateY(-100px);transition:transform .35s ease-out;contain:layout size paint style}#spotlight .header:hover,#spotlight.menu .header{transform:translateY(0)}#spotlight .header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:30px;height:50px;padding-right:20px;opacity:.5}#spotlight .progress{position:absolute;top:0;width:100%;height:3px;background-color:rgba(255,255,255,.45);transform:translateX(-100%);transition:transform 1s linear}#spotlight .arrow,#spotlight .footer{position:absolute;background-color:rgba(0,0,0,.45)}#spotlight .footer{left:0;right:0;bottom:0;line-height:1.35em;padding:20px 25px;text-align:left;pointer-events:none;contain:layout paint style}#spotlight .footer .title{font-size:125%;padding-bottom:10px}#spotlight .page{float:left;width:auto;padding-left:20px;line-height:50px}#spotlight .icon{cursor:pointer;background-position:left center;background-repeat:no-repeat;background-size:21px 21px;transition:opacity .2s ease-out}#spotlight .fullscreen{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9Ii0xIC0xIDI2IDI2IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+)}#spotlight .fullscreen.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIvPjwvc3ZnPg==)}#spotlight .autofit{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9Ijk2cHgiIHZpZXdCb3g9IjAgMCA5NiA5NiIgd2lkdGg9Ijk2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTAgNTApIiBmaWxsPSIjZmZmIiBkPSJNNzEuMzExLDgwQzY5LjY3LDg0LjY2LDY1LjIzLDg4LDYwLDg4SDIwYy02LjYzLDAtMTItNS4zNy0xMi0xMlYzNmMwLTUuMjMsMy4zNC05LjY3LDgtMTEuMzExVjc2YzAsMi4yMSwxLjc5LDQsNCw0SDcxLjMxMSAgeiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSIgZmlsbD0iI2ZmZiIgZD0iTTc2LDhIMzZjLTYuNjMsMC0xMiw1LjM3LTEyLDEydjQwYzAsNi42Myw1LjM3LDEyLDEyLDEyaDQwYzYuNjMsMCwxMi01LjM3LDEyLTEyVjIwQzg4LDEzLjM3LDgyLjYzLDgsNzYsOHogTTgwLDYwICBjMCwyLjIxLTEuNzksNC00LDRIMzZjLTIuMjEsMC00LTEuNzktNC00VjIwYzAtMi4yMSwxLjc5LTQsNC00aDQwYzIuMjEsMCw0LDEuNzksNCw0VjYweiIvPjwvc3ZnPg==)}#spotlight .zoom-out{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4=)}#spotlight .zoom-in{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg==)}#spotlight .theme{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMiAyIDIwIDIwIiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIsNGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFMxNi40MTgsNCwxMiw0eiBNMTIsMThjLTMuMzE0LDAtNi0yLjY4Ni02LTZzMi42ODYtNiw2LTZzNiwyLjY4Niw2LDYgUzE1LjMxNCwxOCwxMiwxOHoiLz48cGF0aCBkPSJNMTIsN3YxMGMyLjc1NywwLDUtMi4yNDMsNS01UzE0Ljc1Nyw3LDEyLDd6Ii8+PC9nPjwvc3ZnPg==)}#spotlight .player{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAgOCAxNiAxMiAxMCAxNiAxMCA4Ii8+PC9zdmc+)}#spotlight .player.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTUiIHkyPSI5Ii8+PGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxNSIgeTI9IjkiLz48L3N2Zz4=);animation:pulsate 1s ease infinite}#spotlight .close{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIyIDIgMjAgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZSB4MT0iMTgiIHgyPSI2IiB5MT0iNiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIvPjwvc3ZnPg==)}#spotlight .preloader.show{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMTUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTggMTgiIHRvPSIzNjAgMTggMTgiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvZz48L2c+PC9zdmc+)}#spotlight .arrow{top:50%;left:20px;width:50px;height:50px;border-radius:100%;cursor:pointer;margin-top:-25px;padding:10px;transform:translateX(-100px);transition:transform .35s ease-out,opacity .2s ease-out;box-sizing:border-box;background-position:center center;background-repeat:no-repeat;background-size:30px 30px;opacity:.65;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz48L3N2Zz4=)}#spotlight .arrow-right{left:auto;right:20px;transform:translateX(100px) scaleX(-1)}#spotlight.menu .arrow-left{transform:translateX(0)}#spotlight.menu .arrow-right{transform:translateX(0) scaleX(-1)}#spotlight .arrow:active,#spotlight .arrow:hover,#spotlight .icon:active,#spotlight .icon:hover{opacity:1;animation:none}#spotlight.white{color:#fff;background-color:#fff}#spotlight.white .arrow,#spotlight.white .footer,#spotlight.white .header,#spotlight.white .preloader,#spotlight.white .progress{filter:invert(1)}.hide-scrollbars{overflow:-moz-hidden-unscrollable;-ms-overflow-style:none}.hide-scrollbars::-webkit-scrollbar{width:0}@media (max-width:800px){#spotlight .header div{width:20px}#spotlight .footer{font-size:12px}#spotlight .arrow{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}#spotlight .preloader{background-size:30px 30px}}@media (max-width:400px),(max-height:400px){#spotlight .fullscreen{display:none!important}}";
document.getElementsByTagName("head")[0].appendChild(oa);var p="theme fullscreen autofit zoom-in zoom-out page title description player progress".split(" "),q,r,pa,qa,u,v,y,z,A,B,ra,sa,C,D,ta,ua,E,F,G,H,va,wa,xa,I,J,K,L,M,ya,za,Aa,Ba,Ca,N,Da,Ea,Fa,O,P,Ga,Q,R,S,Ha;function T(a){return(M||document).getElementsByClassName(a)[0]}
function Ia(a,b){if(F=a.length){J||(J=(M||document).getElementsByClassName("pane"));var c=J.length,d=G.title,e=G.description;S=Array(F);for(var k=0;k<F;k++){var t=a[k],w=t.dataset;if(k>=c){var x=J[0].cloneNode(!1);l(x,"left",100*k+"%");J[0].parentNode.appendChild(x)}x=void 0;S[k]={src:w&&(w.href||w.src)||t.src||t.href,title:w&&w.title||t.title||(x=(t||document).getElementsByTagName("img")).length&&x[0].alt||d||"",description:w&&w.description||t.description||e||""}}E=b||1;Ja(!0);Ka()}}
function La(a,b,c,d){if(d||a[c])G[c]=b&&b[c]||d}
function Ma(a,b){G={};b&&Na(b);Na(a);La(a,b,"description");La(a,b,"title");La(a,b,"prefetch",!0);La(a,b,"preloader",!0);wa=a.onchange;H=G.infinite;H="undefined"!==typeof H&&"false"!==H;va="false"!==G.progress;xa=1*G.player||7E3;if((a=G.zoom)||""===a)G["zoom-in"]=G["zoom-out"]=a,delete G.zoom;if((a=G.control)||""===a){a="string"===typeof a?a.split(","):a;for(b=0;b<p.length;b++)G[p[b]]="false";for(b=0;b<a.length;b++){var c=a[b].trim();"zoom"===c?G["zoom-in"]=G["zoom-out"]="true":G[c]="true"}}for(a=
0;a<p.length;a++)b=p[a],l(T(b),"display","false"===G[b]?"none":"");(ua=G.theme)?Oa():ua="white"}function Na(a){for(var b=G,c=Object.keys(a),d=0;d<c.length;d++){var e=c[d];b[e]=""+a[e]}}
function Pa(){var a=E;I=J[a-1];K=I.firstElementChild;E=a;if(!K){var b="false"!==G.preloader;K=new Image;K.onload=function(){b&&h(O,"show");S&&(y=this.width,z=this.height,l(this,{visibility:"visible",opacity:1,transform:""}),"false"!==G.prefetch&&a<F&&((new Image).src=S[a].src))};K.onerror=function(){I.removeChild(this)};I.appendChild(K);K.src=S[a-1].src;b&&f(O,"show");return!b}return!0}la(document,"",Qa);la(document,"DOMContentLoaded",Ra,{once:!0});var Sa=!1;
function Ra(){Sa||(M=document.createElement("div"),M.id="spotlight",M.innerHTML='<div class=preloader></div><div class=scene><div class=pane></div></div><div class=header><div class=page></div><div class="icon fullscreen"></div><div class="icon autofit"></div><div class="icon zoom-out"></div><div class="icon zoom-in"></div><div class="icon theme"></div><div class="icon player"></div><div class="icon close"></div></div><div class=progress></div><div class="arrow arrow-left"></div><div class="arrow arrow-right"></div><div class=footer><div class=title></div><div class=description></div></div>',
l(M,"transition","none"),document.body.appendChild(M),L=T("scene"),ya=T("footer"),za=T("title"),Aa=T("description"),Ba=T("arrow-left"),Ca=T("arrow-right"),N=T("fullscreen"),Da=T("page"),Ea=T("player"),Fa=T("progress"),O=T("preloader"),R=document.documentElement||document.body,document.cancelFullScreen||(document.cancelFullScreen=document.exitFullscreen||document.webkitCancelFullScreen||document.webkitExitFullscreen||document.mozCancelFullScreen||function(){}),R.requestFullScreen||(R.requestFullScreen=
R.webkitRequestFullScreen||R.msRequestFullScreen||R.mozRequestFullScreen||l(N,"display","none")||function(){}),Ha=[[window,"keydown",Ta],[window,"wheel",Ua],[window,"hashchange",Va],[window,"resize",Wa],[O,"mousedown",Xa],[O,"mouseleave",Ya],[O,"mouseup",Ya],[O,"mousemove",Za],[O,"touchstart",Xa,{passive:!1}],[O,"touchcancel",Ya],[O,"touchend",Ya],[O,"touchmove",Za,{passive:!0}],[N,"",$a],[Ba,"",ab],[Ca,"",U],[Ea,"",V],[T("autofit"),"",bb],[T("zoom-in"),"",cb],[T("zoom-out"),"",db],[T("close"),"",
eb],[T("theme"),"",Oa]],Sa=!0)}function Wa(){u=M.clientWidth;v=M.clientHeight;K&&(y=K.width,z=K.height,fb())}function fb(){l(K,"transform","translate(-50%, -50%) scale("+A+")")}function W(a,b){l(I,"transform",a||b?"translate("+a+"px, "+b+"px)":"")}function Ja(a,b){(a?m:l)(L,"transform","translateX("+(100*-(E-1)+(b||0))+"%)")}function gb(a){for(var b=0;b<Ha.length;b++){var c=Ha[b];(a?la:na)(c[0],c[1],c[2],c[3])}}
function Qa(a){var b=hb.call(a.target,".spotlight");if(b){var c=hb.call(b,".spotlight-group"),d=(c||document).getElementsByClassName("spotlight");Ma(b.dataset,c&&c.dataset);for(c=0;c<d.length;c++)if(d[c]===b){Ia(d,c+1);break}ib();return n(a)}}function Ta(a){if(I)switch(a.keyCode){case 8:bb();break;case 27:eb();break;case 32:"false"!==G.player&&V();break;case 37:ab();break;case 39:U();break;case 38:case 107:case 187:cb();break;case 40:case 109:case 189:db()}}
function Ua(a){I&&(a=a.deltaY,0>.5*(0>a?1:a?-1:0)?db():cb())}function Va(){I&&"#spotlight"===location.hash&&eb(!0)}function V(a){("boolean"===typeof a?a:!P)?P||(P=setInterval(U,xa),f(Ea,"on"),va&&jb()):P&&(P=clearInterval(P),h(Ea,"on"),va&&m(Fa,"transform",""));return P}function Y(){Q?clearTimeout(Q):f(M,"menu");var a=G.autohide;Q="false"!==a?setTimeout(function(){h(M,"menu");Q=null},1*a||3E3):1}function kb(a){"boolean"===typeof a&&(Q=a?Q:0);Q?(Q=clearTimeout(Q),h(M,"menu")):Y();return n(a)}
function Xa(a){B=!0;ra=!1;var b=lb(a);sa=y*A<=u;pa=b.x;qa=b.y;return n(a,!0)}function Ya(a){if(B&&!ra)return B=!1,kb(a);sa&&ra&&(Ja(!0,q/u*100),q<-(v/10)&&U()||q>v/10&&ab()||Ja(),q=0,sa=!1,W());B=!1;return n(a)}function Za(a){if(B){Ga||(Ga=requestAnimationFrame(mb));var b=lb(a),c=(y*A-u)/2;ra=!0;q-=pa-(pa=b.x);sa?C=!0:q>c?q=c:0<u-q-y*A+c?q=u-y*A+c:C=!0;z*A>v&&(c=(z*A-v)/2,r-=qa-(qa=b.y),r>c?r=c:0<v-r-z*A+c?r=v-z*A+c:C=!0)}else Y();return n(a,!0)}
function lb(a){var b=a.touches;b&&(b=b[0]);return{x:b?b.clientX:a.pageX,y:b?b.clientY:a.pageY}}function mb(a){C?(a&&(Ga=requestAnimationFrame(mb)),W(q,r)):Ga=null;C=!1}function $a(a){("boolean"===typeof a?a:document.isFullScreen||document.webkitIsFullScreen||document.mozFullScreen)?(document.cancelFullScreen(),h(N,"on")):(R.requestFullScreen(),f(N,"on"))}
function bb(a){"boolean"===typeof a&&(D=!a);D=1===A&&!D;l(K,{maxHeight:D?"none":"",maxWidth:D?"none":"",transform:""});y=K.width;z=K.height;A=1;r=q=0;C=!0;W();Y()}function cb(a){var b=A/.65;5>=b&&nb(A=b);a||Y()}function nb(a){A=a||1;fb()}function db(a){var b=.65*A;1<=b&&(nb(A=b),r=q=0,C=!0,W());a||Y()}function ib(){location.hash="spotlight";location.hash="show";l(M,"transition","");f(R,"hide-scrollbars");f(M,"show");gb(!0);Wa();Y();G.autoplay&&V()}
function eb(a){gb(!1);history.go(!0===a?-1:-2);h(R,"hide-scrollbars");h(M,"show");P&&V(!1);K.parentNode.removeChild(K);I=J=K=S=G=wa=null}function ab(){if(1<E)return Z(E-1);if(P||H)return m(L,"transform","translateX(-"+100*F+"%)"),Z(F)}function U(){if(E<F)return Z(E+1);if(P||H)return m(L,"transform","translateX(100%)"),Z(1)}function Z(a){if(!(P&&B||a===E)){P||Y();P&&va&&jb();var b=a>E;E=a;Ka(b);return!0}}
function jb(){m(Fa,{transitionDuration:"",transform:""});l(Fa,{transitionDuration:xa+"ms",transform:"translateX(0)"})}function Oa(a){"boolean"===typeof a?ta=a:(ta=!ta,Y());ta?f(M,ua):h(M,ua)}
function Ka(a){r=q=0;A=1;var b=G.animation,c=!0,d=!0,e=!0;if(b||""===b){c=d=e=!1;b="string"===typeof b?b.split(","):b;for(var k=0;k<b.length;k++){var t=b[k].trim();if("scale"===t)c=!0;else if("fade"===t)d=!0;else if("slide"===t)e=!0;else if("flip"===t)var w=!0;else if("false"!==t){c=d=e=w=!1;var x=t;break}}}l(L,"transition",e?"":"none");Ja();I&&W();if(K){l(K,{opacity:d?0:1,transform:""});var X=K;setTimeout(function(){X&&K!==X&&X.parentNode&&X.parentNode.removeChild(X)},800)}e=Pa();x&&f(K,x);m(K,{opacity:d?
0:1,transform:"translate(-50%, -50%)"+(c?" scale(0.8)":"")+(w&&"undefined"!==typeof a?" rotateY("+(a?"":"-")+"90deg)":""),maxHeight:"",maxWidth:""});e&&l(K,{visibility:"visible",opacity:1,transform:""});x&&h(K,x);W();l(Ba,"visibility",H||1!==E?"":"hidden");l(Ca,"visibility",H||E!==F?"":"hidden");a=S[E-1];if(c=(c=a.title||a.description)&&"false"!==c)ka(za,a.title||""),ka(Aa,a.description||"");l(ya,"visibility",c?"visible":"hidden");ka(Da,E+" / "+F);wa&&wa(E)}
var hb=Element.prototype.closest||function(a){var b=this;for(a=a.substring(1);b&&1===b.nodeType;){if(b.classList.contains(a))return b;b=b.parentElement||b.parentNode}};window.Spotlight={init:Ra,theme:Oa,fullscreen:$a,autofit:bb,next:U,prev:ab,"goto":Z,close:eb,zoom:nb,menu:kb,show:function(a,b){a?(b?Ma(b):b={},Ia(a,b.index)):G={};ib()},play:V};}).call(this);


/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./assets/js/site.js ./assets/scss/site.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/dcodegroup/Mark/sandbox/made/wp-content/themes/made-theme/assets/js/site.js */"./assets/js/site.js");
module.exports = __webpack_require__(/*! /home/dcodegroup/Mark/sandbox/made/wp-content/themes/made-theme/assets/scss/site.scss */"./assets/scss/site.scss");


/***/ })

/******/ });
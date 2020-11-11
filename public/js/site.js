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
      }

      if (offCanvasIsOpen && isHomePage) {
        $(content).show();
      } else {
        $(content).hide();
      }
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
    fitToSection: true,
    paddingTop: 200,
    //remove full page at breakpoint
    //responsiveWidth: 768,
    onLeave: function onLeave() {
      checkActive();
    } // //onload
    // afterRender: function(){
    //     var pluginContainer = this;
    //     //alert("The resulting DOM structure is ready");
    // }

  });

  function checkActive() {
    if (isHomePage) {
      var isCategoryPanel = function isCategoryPanel(anchor) {
        return anchor !== 'home' && anchor !== 'about-me';
      };

      var panelIsActive = function panelIsActive(panel) {
        return $(panel).hasClass('active');
      };

      var panels = $("#fullpage .section"),
          _hamburger = $('.hamburger');

      setTimeout(function () {
        $(panels).each(function (index, panel) {
          var anchor = $(panel).data('anchor');

          if (panelIsActive(panel)) {
            if (isCategoryPanel(anchor)) {
              $(_hamburger).addClass('dark');
            } else {
              $(_hamburger).removeClass('dark');
            }
          }
        });
      }, 500);
    }
  } //onload
  // checkActive();


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
  } else {
    var mediaContainers = $('.media-container');
    $(mediaContainers).each(function (i, mediaContainer) {
      var anchors = $(mediaContainer).find('a');
      $(anchors).each(function (i, el) {
        var sibling = $(el).siblings('a');
        $(el).on('mouseover', function () {
          $(sibling).addClass('lose-focus');
        });
        $(el).on('mouseout', function () {
          $(sibling).removeClass('lose-focus');
        });
      });
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
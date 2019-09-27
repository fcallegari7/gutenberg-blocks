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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/firstblock/index.js":
/*!****************************************!*\
  !*** ./src/blocks/firstblock/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;
registerBlockType('mytheme-blocks/firstblock', {
  title: __('First Block', 'mytheme-blocks'),
  description: __('Our first block', 'mytheme-blocks'),
  category: 'layout',
  icon: {
    foreground: '#f03',
    src: 'admin-network'
  },
  keywords: [__('photo', 'mytheme-blocks'), __('image', 'mytheme-blocks')],
  edit: function edit() {
    return el('p', null, 'Edited');
  },
  save: function save() {
    return el('p', null, 'Saved content');
  }
});

/***/ }),

/***/ "./src/blocks/secondblock/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/secondblock/edit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Applications/MAMP/htdocs/gutenberg-blocks/wp-content/plugins/mytheme-blocks/src/blocks/secondblock/edit.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Edit =
/*#__PURE__*/
function (_Component) {
  _inherits(Edit, _Component);

  function Edit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Edit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChangeContent", function (content) {
      _this.props.setAttributes({
        content: content
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeAlignment", function (alignment) {
      _this.props.setAttributes({
        alignment: alignment
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleShadow", function () {
      _this.props.setAttributes({
        shadow: !_this.props.attributes.shadow
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeShadowOpacity", function (shadowOpacity) {
      _this.props.setAttributes({
        shadowOpacity: shadowOpacity
      });
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _this$props.attributes,
          setTextColor = _this$props.setTextColor,
          setBackgroundColor = _this$props.setBackgroundColor,
          backgroundColor = _this$props.backgroundColor,
          textColor = _this$props.textColor;
      var content = attributes.content,
          alignment = attributes.alignment,
          shadow = attributes.shadow,
          shadowOpacity = attributes.shadowOpacity;
      var classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, _defineProperty({
        'has-shadow': shadow
      }, "shadow-opacity-".concat(shadowOpacity * 100), shadowOpacity));
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Settings', 'mytheme-blocks'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, shadow && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Shadow Opacity', 'mytheme-blocks'),
        value: shadowOpacity,
        onChange: this.onChangeShadowOpacity,
        min: 0.1,
        max: 0.4,
        step: 0.1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["PanelColorSettings"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Panel 2', 'mytheme-blocks'),
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'mytheme-blocks')
        }, {
          value: textColor.color,
          onChange: setTextColor,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'mytheme-blocks')
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["ContrastChecker"], {
        textColor: textColor.color,
        backgroundColor: backgroundColor.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }))), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], {
        controls: [{
          icon: 'wordpress',
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Shadow', 'mytheme-blocks'),
          onClick: this.toggleShadow,
          isActive: shadow
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
        value: alignment,
        onChange: this.onChangeAlignment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
        controls: [[{
          icon: 'wordpress',
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('test', 'mytheme-blocks'),
          onClick: function onClick() {
            alert('hello');
          },
          isActive: false
        }], [{
          icon: 'wordpress',
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('test', 'mytheme-blocks'),
          onClick: function onClick() {
            alert('hello');
          },
          isActive: false
        }]],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), content && content.length > 0 && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
        icon: "editor-table",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('test', 'mytheme-blocks'),
        controls: [[{
          icon: 'wordpress',
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('test', 'mytheme-blocks'),
          onClick: function onClick() {
            alert('hello');
          },
          isActive: false
        }], [{
          icon: 'wordpress',
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('test', 'mytheme-blocks'),
          onClick: function onClick() {
            alert('hello');
          },
          isActive: false
        }]],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }))), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
        tagName: "h4",
        className: classes,
        onChange: this.onChangeContent,
        value: content,
        formattingControls: ['bold'],
        style: {
          textAlign: alignment,
          backgroundColor: backgroundColor.color,
          color: textColor.color
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["withColors"])('backgroundColor', {
  'textColor': 'color'
})(Edit));

/***/ }),

/***/ "./src/blocks/secondblock/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/secondblock/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.editor.scss */ "./src/blocks/secondblock/styles.editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/secondblock/edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Applications/MAMP/htdocs/gutenberg-blocks/wp-content/plugins/mytheme-blocks/src/blocks/secondblock/index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var attributes = {
  content: {
    type: 'string',
    source: 'html',
    selector: 'h4'
  },
  alignment: {
    type: 'string'
  },
  backgroundColor: {
    type: 'string'
  },
  textColor: {
    type: 'string'
  },
  customBackgroundColor: {
    type: 'string'
  },
  customTextColor: {
    type: 'string'
  },
  shadow: {
    type: 'boolean',
    default: false
  },
  shadowOpacity: {
    type: 'number',
    default: 0.3
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('mytheme-blocks/secondblock', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Second Block', 'mytheme-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Our second block', 'mytheme-blocks'),
  category: 'mytheme-category',
  icon: 'admin-network',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('photo', 'mytheme-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('image', 'mytheme-blocks')],
  styles: [{
    name: 'rounded',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rounded', 'mytheme-blocks'),
    isDefault: true
  }, {
    name: 'outlined',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Outlined', 'mytheme-blocks')
  }, {
    name: 'squared',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Squared', 'mytheme-blocks')
  }],
  attributes: attributes,
  deprecated: [{
    attributes: _objectSpread({}, attributes, {
      content: {
        type: 'string',
        source: 'html',
        selector: 'p'
      }
    }),
    save: function save(_ref) {
      var _classnames;

      var attributes = _ref.attributes;
      var content = attributes.content,
          alignment = attributes.alignment,
          backgroundColor = attributes.backgroundColor,
          textColor = attributes.textColor,
          customBackgroundColor = attributes.customBackgroundColor,
          customTextColor = attributes.customTextColor,
          shadow = attributes.shadow,
          shadowOpacity = attributes.shadowOpacity;
      var backgroundClass = Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
      var textClass = Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
      var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classnames = {}, _defineProperty(_classnames, backgroundClass, backgroundClass), _defineProperty(_classnames, textClass, textClass), _defineProperty(_classnames, 'has-shadow', shadow), _defineProperty(_classnames, "shadow-opacity-".concat(shadowOpacity * 100), shadowOpacity), _classnames));
      return wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
        tagName: "h4",
        className: classes,
        value: content,
        style: {
          textAlign: alignment,
          backgroundColor: backgroundClass ? undefined : customBackgroundColor,
          color: textColor ? undefined : customTextColor
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      });
    }
  }],
  transforms: {
    from: [{
      type: 'block',
      blocks: ['core/paragraph'],
      transform: function transform(_ref2) {
        var content = _ref2.content,
            align = _ref2.align;
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])('mytheme-blocks/secondblock', {
          content: content,
          textAlign: align
        });
      }
    }, {
      type: 'prefix',
      prefix: '#',
      transform: function transform() {
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])('mytheme-blocks/secondblock');
      }
    }],
    to: [{
      type: 'block',
      blocks: ['core/paragraph'],
      isMatch: function isMatch(_ref3) {
        var content = _ref3.content;
        if (content) return true;
        return false;
      },
      transform: function transform(_ref4) {
        var content = _ref4.content,
            textAlign = _ref4.textAlign;
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["createBlock"])('core/paragraph', {
          content: content,
          align: textAlign
        });
      }
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(_ref5) {
    var _classnames2;

    var attributes = _ref5.attributes;
    var content = attributes.content,
        alignment = attributes.alignment,
        backgroundColor = attributes.backgroundColor,
        textColor = attributes.textColor,
        customBackgroundColor = attributes.customBackgroundColor,
        customTextColor = attributes.customTextColor,
        shadow = attributes.shadow,
        shadowOpacity = attributes.shadowOpacity;
    var backgroundClass = Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', backgroundColor);
    var textClass = Object(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('color', textColor);
    var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classnames2 = {}, _defineProperty(_classnames2, backgroundClass, backgroundClass), _defineProperty(_classnames2, textClass, textClass), _defineProperty(_classnames2, 'has-shadow', shadow), _defineProperty(_classnames2, "shadow-opacity-".concat(shadowOpacity * 100), shadowOpacity), _classnames2));
    return wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "h4",
      className: classes,
      value: content,
      style: {
        textAlign: alignment,
        backgroundColor: backgroundClass ? undefined : customBackgroundColor,
        color: textColor ? undefined : customTextColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    });
  }
});

/***/ }),

/***/ "./src/blocks/secondblock/styles.editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/secondblock/styles.editor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/teammember/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/teammember/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Applications/MAMP/htdocs/gutenberg-blocks/wp-content/plugins/mytheme-blocks/src/blocks/teammember/edit.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var TeamMemberEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(TeamMemberEdit, _Component);

  function TeamMemberEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TeamMemberEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TeamMemberEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedLink: null
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeTitle", function (title) {
      _this.props.setAttributes({
        title: title
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeInfo", function (info) {
      _this.props.setAttributes({
        info: info
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectImage", function (_ref) {
      var id = _ref.id,
          url = _ref.url,
          alt = _ref.alt;

      _this.props.setAttributes({
        id: id,
        url: url,
        alt: alt
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectURL", function (_ref2) {
      var url = _ref2.url;

      _this.props.setAttributes({
        url: url,
        id: null,
        alt: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onUploadError", function (message) {
      var noticeOperations = _this.props.noticeOperations;
      noticeOperations.createErrorNotice(message);
    });

    _defineProperty(_assertThisInitialized(_this), "removeImage", function () {
      _this.props.setAttributes({
        id: null,
        url: '',
        alt: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateAlt", function (alt) {
      _this.props.setAttributes({
        alt: alt
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onImageSizeChange", function (url) {
      _this.props.setAttributes({
        url: url
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addNewLink", function () {
      var _this$props = _this.props,
          setAttributes = _this$props.setAttributes,
          attributes = _this$props.attributes;
      var social = attributes.social;
      setAttributes({
        social: [].concat(_toConsumableArray(social), [{
          link: '',
          icon: 'wordpress'
        }])
      });

      _this.setState({
        selectedLink: social.length
      });
    });

    return _this;
  }

  _createClass(TeamMemberEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var url = attributes.url,
          id = attributes.id;

      if (url && Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url) && !id) {
        setAttributes({
          url: '',
          alt: ''
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isSelected && !this.props.isSelected) {
        this.setState({
          selectedLink: null
        });
      }
    }
  }, {
    key: "getImageSizes",
    value: function getImageSizes() {
      var _this$props3 = this.props,
          image = _this$props3.image,
          imageSizes = _this$props3.imageSizes;
      if (!image) return [];
      var options = [];
      var sizes = image.media_details.sizes;

      var _loop = function _loop(key) {
        var size = sizes[key];
        var imageSize = imageSizes.find(function (size) {
          return size.slug === key;
        });

        if (imageSize) {
          options.push({
            label: imageSize.name,
            value: size.source_url
          });
        }
      };

      for (var key in sizes) {
        _loop(key);
      }

      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          attributes = _this$props4.attributes,
          noticeUI = _this$props4.noticeUI,
          isSelected = _this$props4.isSelected;
      var title = attributes.title,
          info = attributes.info,
          url = attributes.url,
          alt = attributes.alt,
          id = attributes.id,
          social = attributes.social;
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Image Settings", "mytheme-blocks"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, url && !Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url) && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextareaControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Alt Text', "mytheme-blocks"),
        value: alt,
        onChange: this.updateAlt,
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Alternative text describes the image to people who can not see it', 'mytheme-blocks'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), id && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Size', "mytheme-blocks"),
        options: this.getImageSizes(),
        onChange: this.onImageSizeChange,
        value: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }))), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["BlockControls"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, url && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Toolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, id && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUploadCheck"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
        onSelect: this.onSelectImage,
        allowedTypes: ['image'],
        value: id,
        render: function render(_ref3) {
          var open = _ref3.open;
          return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
            className: "components-icon-button components-toolbar__control",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove Image', 'mytheme-blocks'),
            onClick: open,
            icon: "edit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
        className: "components-icon-button components-toolbar__control",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove Image', 'mytheme-blocks'),
        onClick: this.removeImage,
        icon: "trash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }))), wp.element.createElement("div", {
        className: className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, url ? wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("img", {
        src: src,
        alt: alt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__["isBlobURL"])(url) && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })) : wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["MediaPlaceholder"], {
        icon: "format-image",
        onSelect: this.onSelectImage,
        onSelectURL: this.onSelectURL,
        onError: this.onUploadError,
        accept: "image/*",
        allowedTypes: ['image'],
        notices: noticeUI,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
        className: 'wp-block-mytheme-blocks-teammember__title',
        tagName: "h4",
        onChange: this.onChangeTitle,
        value: title,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Member Name', 'mytheme-blocks'),
        formattingControls: [],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
        className: 'wp-block-mytheme-blocks-teammember__info',
        tagName: "p",
        onChange: this.onChangeInfo,
        value: info,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Member Info', 'mytheme-blocks'),
        formattingControls: [],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), wp.element.createElement("div", {
        className: 'wp-block-mytheme-blocks-teammember__social',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, wp.element.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, social.map(function (item, index) {
        wp.element.createElement("li", {
          key: index,
          onClick: function onClick() {
            return _this2.setState({
              selectedLink: index
            });
          },
          className: _this2.state.selectedLink === index ? 'is-selected' : null,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Dashicon"], {
          icon: item.icon,
          size: 16,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }));
      }), isSelected && wp.element.createElement("li", {
        className: 'wp-block-mytheme-blocks-teammember__addIconLI',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
        text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add Item', 'mytheme-blocks'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, wp.element.createElement("button", {
        className: 'wp-block-mytheme-blocks-teammember__addIcon',
        onClick: this.addNewLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Dashicon"], {
        icon: 'plus',
        size: 14,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }))))))));
    }
  }]);

  return TeamMemberEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["withSelect"])(function (select, props) {
  var id = props.attributes.id;
  return {
    image: id ? select('core').getMedia(id) : null,
    imageSizes: select('core/editor').getEditorSettings().imageSizes
  };
})(Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["withNotices"])(TeamMemberEdit)));

/***/ }),

/***/ "./src/blocks/teammember/index.js":
/*!****************************************!*\
  !*** ./src/blocks/teammember/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/blocks/teammember/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ "./src/blocks/teammember/parent.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/teammember/edit.js");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Applications/MAMP/htdocs/gutenberg-blocks/wp-content/plugins/mytheme-blocks/src/blocks/teammember/index.js";







var attributes = {
  title: {
    type: 'string',
    source: 'html',
    selector: 'h4'
  },
  info: {
    type: 'string',
    source: 'html',
    selector: 'p'
  },
  id: {
    type: 'number'
  },
  alt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt',
    default: ''
  },
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src'
  },
  social: {
    type: 'array',
    default: [{
      link: 'http://facebook.com',
      icon: 'wordpress'
    }, {
      link: 'http://facebook.com',
      icon: 'wordpress'
    }],
    source: 'query',
    selector: '.wp-block-mytheme-blocks-teammember__social ul li',
    query: {
      icon: {
        source: 'attribute',
        attribute: 'data-icon'
      },
      link: {
        source: 'attribute',
        selector: 'a',
        attribute: 'href'
      }
    }
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('mytheme-blocks/teammember', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Team Member', 'mytheme-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Block showing a Team Member', 'mytheme-blocks'),
  icon: 'admin-users',
  parent: ['mytheme-blocks/teammembers'],
  supports: {
    reusable: false,
    html: false
  },
  category: 'mytheme-category',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('team', 'mytheme-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('member', 'mytheme-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('person', 'mytheme-blocks')],
  attributes: attributes,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var title = attributes.title,
        info = attributes.info,
        url = attributes.url,
        alt = attributes.alt,
        id = attributes.id,
        social = attributes.social;
    return wp.element.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, url && wp.element.createElement("img", {
      src: url,
      alt: alt,
      className: id ? "wp-image-".concat(id) : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), title && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      className: 'wp-block-mytheme-blocks-teammember__title',
      tagName: "h4",
      value: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), info && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      className: 'wp-block-mytheme-blocks-teammember__info',
      tagName: "p",
      value: info,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), social.length > 0 && wp.element.createElement("div", {
      className: 'wp-block-mytheme-blocks-teammember__social',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, wp.element.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, social.map(function (item, index) {
      return wp.element.createElement("li", {
        key: index,
        "data-icon": item.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, wp.element.createElement("a", {
        href: item.link,
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Dashicon"], {
        icon: item.icon,
        size: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      })));
    }))));
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/teammember/parent.js":
/*!*****************************************!*\
  !*** ./src/blocks/teammember/parent.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Applications/MAMP/htdocs/gutenberg-blocks/wp-content/plugins/mytheme-blocks/src/blocks/teammember/parent.js";




var attributes = {
  columns: {
    type: 'number',
    default: 2
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('mytheme-blocks/teammembers', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Team Members', 'mytheme-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Block showing Team Members', 'mytheme-blocks'),
  icon: 'grid-view',
  category: 'mytheme-category',
  supports: {
    html: false,
    align: ['wide', 'full']
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('team', 'mytheme-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('member', 'mytheme-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('person', 'mytheme-blocks')],
  attributes: attributes,
  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var columns = attributes.columns;
    return wp.element.createElement("div", {
      className: "".concat(className, " has-").concat(columns, "-columns"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Columns', 'mytheme-blocks'),
      value: columns,
      onChange: function onChange(columns) {
        return setAttributes({
          columns: columns
        });
      },
      min: 1,
      max: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }))), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      allowedBlocks: ['mytheme-blocks/teammember'],
      template: [['mytheme-blocks/teammember'], ['mytheme-blocks/teammember']],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var columns = attributes.columns;
    return wp.element.createElement("div", {
      className: "has-".concat(columns, "-columns"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }));
  }
});

/***/ }),

/***/ "./src/blocks/teammember/style.editor.scss":
/*!*************************************************!*\
  !*** ./src/blocks/teammember/style.editor.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/firstblock */ "./src/blocks/firstblock/index.js");
/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_secondblock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/secondblock */ "./src/blocks/secondblock/index.js");
/* harmony import */ var _blocks_teammember__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/teammember */ "./src/blocks/teammember/index.js");




/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blob"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["data"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["i18n"];

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map
webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _small = __webpack_require__(2);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var image = document.createElement('img');
    image.src = _small2.default;

    document.body.appendChild(image);
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "img {\r\n    border: 10px solid black;\r\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ })
]);
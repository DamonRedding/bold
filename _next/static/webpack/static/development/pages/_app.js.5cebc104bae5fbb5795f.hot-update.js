webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/PageContent.tsx":
/*!************************************!*\
  !*** ./components/PageContent.tsx ***!
  \************************************/
/*! exports provided: PageContent, createStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContent", function() { return PageContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return createStyles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib */ "../lib/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppHeader */ "./components/AppHeader.tsx");
/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideNav */ "./components/SideNav/index.ts");
var _jsxFileName = "/home/bonetti/workspace/bold/site/components/PageContent.tsx";




var PageContent = function PageContent(props) {
  var children = props.children;

  var _useStyles = Object(_lib__WEBPACK_IMPORTED_MODULE_1__["useStyles"])(createStyles),
      classes = _useStyles.classes;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, children));
};
var BIG_WIDTH = 960;
var createStyles = function createStyles(theme) {
  return {
    main: {
      background: theme.pallete.surface.main,
      flex: 1,
      padding: "calc(2rem + ".concat(_AppHeader__WEBPACK_IMPORTED_MODULE_2__["APP_HEADER_HEIGHT"], "px) 3rem 2rem 3rem"),
      marginLeft: _SideNav__WEBPACK_IMPORTED_MODULE_3__["SIDE_NAV_WIDTH"],
      display: 'flex',
      flexDirection: 'column',
      minHeight: "100vh",
      // Hacks for change global css when theme is changed
      color: theme.pallete.text.main
    },
    content: {
      maxWidth: 800,
      fontSize: '1rem',
      p: {
        marginBottom: '2rem',
        lineHeight: 1.5
      },
      'h1, h2, h3, h4, h5, h6': {
        marginBottom: '2rem'
      },
      img: {
        maxWidth: BIG_WIDTH
      },
      code: {
        background: theme.pallete.surface.background,
        padding: '0.125rem 0.25rem',
        borderRadius: 3,
        '&::selection': {
          background: theme.pallete.primary.main
        }
      },
      pre: {
        // background: theme.pallete.gray.c10,
        // color: theme.pallete.gray.c100,
        // borderRadius: 4,
        // padding: '0.5rem 1rem',
        fontSize: theme.typography.sizes.text,
        marginBottom: '2rem',
        width: BIG_WIDTH,
        code: {// background: 'transparent',
          // borderRadius: 'none',
          // padding: 0,
        }
      }
    }
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.5cebc104bae5fbb5795f.hot-update.js.map
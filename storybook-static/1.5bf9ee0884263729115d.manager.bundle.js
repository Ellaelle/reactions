(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    297: function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(
          __webpack_exports__,
          "SyntaxHighlighter",
          function () {
            return SyntaxHighlighter;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "createCopyToClipboardFunction",
          function () {
            return createCopyToClipboardFunction;
          }
        ),
        __webpack_require__.d(__webpack_exports__, "default", function () {
          return SyntaxHighlighter;
        });
      __webpack_require__(69),
        __webpack_require__(8),
        __webpack_require__(48),
        __webpack_require__(26),
        __webpack_require__(97),
        __webpack_require__(85),
        __webpack_require__(14),
        __webpack_require__(19),
        __webpack_require__(20),
        __webpack_require__(13),
        __webpack_require__(18),
        __webpack_require__(16),
        __webpack_require__(22),
        __webpack_require__(21),
        __webpack_require__(24),
        __webpack_require__(17);
      var _index_b45716e8_js__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_17__
        ),
        _storybook_client_logger__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(11),
        _storybook_theming__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(1),
        memoizerific__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(23),
        memoizerific__WEBPACK_IMPORTED_MODULE_20___default =
          __webpack_require__.n(memoizerific__WEBPACK_IMPORTED_MODULE_20__),
        react_syntax_highlighter_dist_esm_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(835),
        react_syntax_highlighter_dist_esm_languages_prism_bash__WEBPACK_IMPORTED_MODULE_22__ =
          __webpack_require__(842),
        react_syntax_highlighter_dist_esm_languages_prism_css__WEBPACK_IMPORTED_MODULE_23__ =
          __webpack_require__(844),
        react_syntax_highlighter_dist_esm_languages_prism_js_extras__WEBPACK_IMPORTED_MODULE_24__ =
          __webpack_require__(833),
        react_syntax_highlighter_dist_esm_languages_prism_json__WEBPACK_IMPORTED_MODULE_25__ =
          __webpack_require__(836),
        react_syntax_highlighter_dist_esm_languages_prism_graphql__WEBPACK_IMPORTED_MODULE_26__ =
          __webpack_require__(849),
        react_syntax_highlighter_dist_esm_languages_prism_markup__WEBPACK_IMPORTED_MODULE_27__ =
          __webpack_require__(845),
        react_syntax_highlighter_dist_esm_languages_prism_markdown__WEBPACK_IMPORTED_MODULE_28__ =
          __webpack_require__(840),
        react_syntax_highlighter_dist_esm_languages_prism_yaml__WEBPACK_IMPORTED_MODULE_29__ =
          __webpack_require__(838),
        react_syntax_highlighter_dist_esm_languages_prism_tsx__WEBPACK_IMPORTED_MODULE_30__ =
          __webpack_require__(846),
        react_syntax_highlighter_dist_esm_languages_prism_typescript__WEBPACK_IMPORTED_MODULE_31__ =
          __webpack_require__(848),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__ =
          __webpack_require__(892);
      __webpack_require__(50), __webpack_require__(76);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var navigator =
          _index_b45716e8_js__WEBPACK_IMPORTED_MODULE_16__.Z.navigator,
        document = _index_b45716e8_js__WEBPACK_IMPORTED_MODULE_16__.Z.document,
        globalWindow =
          _index_b45716e8_js__WEBPACK_IMPORTED_MODULE_16__.Z.window;
      react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
        "jsextra",
        react_syntax_highlighter_dist_esm_languages_prism_js_extras__WEBPACK_IMPORTED_MODULE_24__.a
      ),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
          "jsx",
          react_syntax_highlighter_dist_esm_languages_prism_jsx__WEBPACK_IMPORTED_MODULE_21__.a
        ),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
          "json",
          react_syntax_highlighter_dist_esm_languages_prism_json__WEBPACK_IMPORTED_MODULE_25__.a
        ),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
          "yml",
          react_syntax_highlighter_dist_esm_languages_prism_yaml__WEBPACK_IMPORTED_MODULE_29__.a
        ),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
          "md",
          react_syntax_highlighter_dist_esm_languages_prism_markdown__WEBPACK_IMPORTED_MODULE_28__.a
        ),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
          "bash",
          react_syntax_highlighter_dist_esm_languages_prism_bash__WEBPACK_IMPORTED_MODULE_22__.a
        ),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
          "css",
          react_syntax_highlighter_dist_esm_languages_prism_css__WEBPACK_IMPORTED_MODULE_23__.a
        ),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
          "html",
          react_syntax_highlighter_dist_esm_languages_prism_markup__WEBPACK_IMPORTED_MODULE_27__.a
        ),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
          "tsx",
          react_syntax_highlighter_dist_esm_languages_prism_tsx__WEBPACK_IMPORTED_MODULE_30__.a
        ),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
          "typescript",
          react_syntax_highlighter_dist_esm_languages_prism_typescript__WEBPACK_IMPORTED_MODULE_31__.a
        ),
        react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a.registerLanguage(
          "graphql",
          react_syntax_highlighter_dist_esm_languages_prism_graphql__WEBPACK_IMPORTED_MODULE_26__.a
        );
      var themedSyntax = memoizerific__WEBPACK_IMPORTED_MODULE_20___default()(
          2
        )(function (theme) {
          return Object.entries(theme.code || {}).reduce(function (acc, _ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              val = _ref2[1];
            return Object.assign(
              Object.assign({}, acc),
              (function _defineProperty(obj, key, value) {
                return (
                  key in obj
                    ? Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (obj[key] = value),
                  obj
                );
              })({}, "* .".concat(key), val)
            );
          }, {});
        }),
        copyToClipboard = createCopyToClipboardFunction();
      function createCopyToClipboardFunction() {
        var _this = this;
        return (null == navigator ? void 0 : navigator.clipboard)
          ? function (text) {
              return navigator.clipboard.writeText(text);
            }
          : function (text) {
              return Object(_index_b45716e8_js__WEBPACK_IMPORTED_MODULE_16__.g)(
                _this,
                void 0,
                void 0,
                regeneratorRuntime.mark(function _callee() {
                  var tmp, focus;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    for (;;)
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          (tmp = document.createElement("TEXTAREA")),
                            (focus = document.activeElement),
                            (tmp.value = text),
                            document.body.appendChild(tmp),
                            tmp.select(),
                            document.execCommand("copy"),
                            document.body.removeChild(tmp),
                            focus.focus();
                        case 8:
                        case "end":
                          return _context.stop();
                      }
                  }, _callee);
                })
              );
            };
      }
      var Wrapper = _storybook_theming__WEBPACK_IMPORTED_MODULE_19__.l.div(
          function (_ref3) {
            return {
              position: "relative",
              overflow: "hidden",
              color: _ref3.theme.color.defaultText,
            };
          },
          function (_ref4) {
            var theme = _ref4.theme;
            return _ref4.bordered
              ? {
                  border: "1px solid ".concat(theme.appBorderColor),
                  borderRadius: theme.borderRadius,
                  background: theme.background.content,
                }
              : {};
          }
        ),
        Scroller = Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_19__.l)(
          function (_ref5) {
            var children = _ref5.children,
              className = _ref5.className;
            return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
              _index_b45716e8_js__WEBPACK_IMPORTED_MODULE_16__.d,
              { horizontal: !0, vertical: !0, className: className },
              children
            );
          }
        )({ position: "relative" }, function (_ref6) {
          var theme = _ref6.theme;
          return themedSyntax(theme);
        }),
        Pre = _storybook_theming__WEBPACK_IMPORTED_MODULE_19__.l.pre(function (
          _ref7
        ) {
          var theme = _ref7.theme;
          return {
            display: "flex",
            justifyContent: "flex-start",
            margin: 0,
            padding: _ref7.padded ? theme.layoutMargin : 0,
          };
        }),
        Code = _storybook_theming__WEBPACK_IMPORTED_MODULE_19__.l.div(function (
          _ref8
        ) {
          return {
            flex: 1,
            paddingLeft: 2,
            paddingRight: _ref8.theme.layoutMargin,
            opacity: 1,
          };
        }),
        SyntaxHighlighter = function SyntaxHighlighter(_a) {
          var children = _a.children,
            _a$language = _a.language,
            language = void 0 === _a$language ? "jsx" : _a$language,
            _a$copyable = _a.copyable,
            copyable = void 0 !== _a$copyable && _a$copyable,
            _a$bordered = _a.bordered,
            bordered = void 0 !== _a$bordered && _a$bordered,
            _a$padded = _a.padded,
            padded = void 0 !== _a$padded && _a$padded,
            _a$format = _a.format,
            format = void 0 === _a$format || _a$format,
            _a$formatter = _a.formatter,
            formatter = void 0 === _a$formatter ? null : _a$formatter,
            _a$className = _a.className,
            className = void 0 === _a$className ? null : _a$className,
            _a$showLineNumbers = _a.showLineNumbers,
            showLineNumbers =
              void 0 !== _a$showLineNumbers && _a$showLineNumbers,
            rest = Object(_index_b45716e8_js__WEBPACK_IMPORTED_MODULE_16__.h)(
              _a,
              [
                "children",
                "language",
                "copyable",
                "bordered",
                "padded",
                "format",
                "formatter",
                "className",
                "showLineNumbers",
              ]
            );
          if ("string" != typeof children || !children.trim()) return null;
          var highlightableCode = formatter
              ? formatter(format, children)
              : children.trim(),
            _useState2 = _slicedToArray(
              Object(react__WEBPACK_IMPORTED_MODULE_17__.useState)(!1),
              2
            ),
            copied = _useState2[0],
            setCopied = _useState2[1],
            onClick = Object(react__WEBPACK_IMPORTED_MODULE_17__.useCallback)(
              function (e) {
                e.preventDefault();
                var selectedText = globalWindow.getSelection().toString(),
                  textToCopy =
                    "click" !== e.type && selectedText
                      ? selectedText
                      : highlightableCode;
                copyToClipboard(textToCopy)
                  .then(function () {
                    setCopied(!0),
                      globalWindow.setTimeout(function () {
                        return setCopied(!1);
                      }, 1500);
                  })
                  .catch(
                    _storybook_client_logger__WEBPACK_IMPORTED_MODULE_18__.a
                      .error
                  );
              },
              []
            );
          return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
            Wrapper,
            {
              bordered: bordered,
              padded: padded,
              className: className,
              onCopyCapture: onClick,
            },
            react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
              Scroller,
              null,
              react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
                react_syntax_highlighter_dist_esm_prism_light__WEBPACK_IMPORTED_MODULE_32__.a,
                Object.assign(
                  {
                    padded: padded || bordered,
                    language: language,
                    showLineNumbers: showLineNumbers,
                    showInlineLineNumbers: showLineNumbers,
                    useInlineStyles: !1,
                    PreTag: Pre,
                    CodeTag: Code,
                    lineNumberContainerStyle: {},
                  },
                  rest
                ),
                highlightableCode
              )
            ),
            copyable
              ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(
                  _index_b45716e8_js__WEBPACK_IMPORTED_MODULE_16__.a,
                  {
                    actionItems: [
                      { title: copied ? "Copied" : "Copy", onClick: onClick },
                    ],
                  }
                )
              : null
          );
        };
    },
  },
]);

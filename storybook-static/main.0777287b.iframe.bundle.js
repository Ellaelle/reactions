(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "./.storybook/preview.js-generated-config-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          "parameters",
          function () {
            return parameters;
          }
        );
      var ClientApi = __webpack_require__(
          "./node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        parameters = { actions: { argTypesRegex: "^on[A-Z].*" } };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
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
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
            return Object(ClientApi.d)(value);
          case "argTypes":
            return Object(ClientApi.b)(value);
          case "decorators":
            return value.forEach(function (decorator) {
              return Object(ClientApi.f)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return Object(ClientApi.g)(loader, !1);
            });
          case "parameters":
            return Object(ClientApi.h)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.e)(enhancer);
            });
          case "render":
            return Object(ClientApi.i)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), Object(ClientApi.h)(v, !1);
          case "__namedExportsOrder":
          case "decorateStory":
          case "renderToDOM":
            return null;
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    "./generated-stories-entry.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      (function (module) {
        (0,
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js"
        ).configure)(
          [
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"
            ),
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"
            ),
          ],
          module,
          !1
        );
      }.call(
        this,
        __webpack_require__(
          "./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js"
        )(module)
      ));
    },
    "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./stories/Blob.stories.tsx": "./src/stories/Blob.stories.tsx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$");
      },
    "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":
      function (module, exports) {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        (webpackEmptyContext.keys = function () {
          return [];
        }),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (module.exports = webpackEmptyContext),
          (webpackEmptyContext.id =
            "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$");
      },
    "./src/stories/Blob.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Bob", function () {
          return Bob;
        }),
        __webpack_require__.d(__webpack_exports__, "CustomBob", function () {
          return CustomBob;
        });
      var objectSpread2 = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"
        ),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__(
            "./node_modules/styled-components/dist/styled-components.browser.esm.js"
          )),
        slicedToArray = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
        ),
        web = __webpack_require__("./node_modules/react-spring/web.js"),
        fill = {
          blue: "#a8d0db",
          brown: "#DBB68F",
          green: "#aec3b0",
          pink: "#FFDBDA",
          yellow: "#FCF0CC",
          red: "#ffcccb",
        },
        stroke = {
          blue: "#2b4570",
          brown: "#685044",
          green: "#204e4a",
          pink: "#B97375",
          yellow: "#BB7E5D",
          red: "#AF3E4D",
        },
        bodyTransition = function bodyTransition(x, y) {
          return "translate3d(".concat(x / 10, "px,").concat(y / 10, "px,0)");
        },
        eyesTransition = function eyesTransition(x, y) {
          return "translate3d(".concat(x / 20, "px,").concat(y / 20, "px,0)");
        },
        mouthTransition = function mouthTransition(x, y) {
          return "translate3d(".concat(x / 22, "px,").concat(y / 22, "px,0)");
        },
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Angry_Angry = function Angry(_ref) {
          var _animationProps$xy,
            _animationProps$xy2,
            strokeColor = _ref.strokeColor,
            isAnimated = _ref.isAnimated,
            animationProps = _ref.animationProps,
            getEyes = function getEyes() {
              return Object(jsx_runtime.jsxs)("g", {
                children: [
                  Object(jsx_runtime.jsx)("circle", {
                    fill: strokeColor,
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    cx: "50.74",
                    cy: "111.47",
                    r: "5.9",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    fill: strokeColor,
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    cx: "154.05",
                    cy: "111.47",
                    r: "5.9",
                  }),
                  Object(jsx_runtime.jsx)("line", {
                    fill: "none",
                    strokeLinecap: "round",
                    strokeWidth: "4px",
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    x1: "145",
                    y1: "100",
                    x2: "165",
                    y2: "92",
                  }),
                  Object(jsx_runtime.jsx)("line", {
                    fill: "none",
                    strokeLinecap: "round",
                    strokeWidth: "4px",
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    x1: "40",
                    y1: "92",
                    x2: "60",
                    y2: "100",
                  }),
                ],
              });
            },
            getMouth = function getMouth() {
              return Object(jsx_runtime.jsx)("line", {
                fill: "none",
                strokeLinecap: "round",
                strokeWidth: "4px",
                stroke: strokeColor,
                strokeMiterlimit: "10",
                x1: "88",
                y1: "129",
                x2: "119",
                y2: "129",
              });
            };
          return isAnimated
            ? Object(jsx_runtime.jsxs)("g", {
                id: "angry-face",
                "data-testid": "angry",
                children: [
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "eyes",
                    style: {
                      transform:
                        null === (_animationProps$xy = animationProps.xy) ||
                        void 0 === _animationProps$xy
                          ? void 0
                          : _animationProps$xy.interpolate(eyesTransition),
                    },
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "mouth",
                    style: {
                      transform:
                        null === (_animationProps$xy2 = animationProps.xy) ||
                        void 0 === _animationProps$xy2
                          ? void 0
                          : _animationProps$xy2.interpolate(mouthTransition),
                    },
                    children: getMouth(),
                  }),
                ],
              })
            : Object(jsx_runtime.jsxs)("g", {
                id: "angry-face",
                "data-testid": "angry-face-no-animation",
                children: [
                  Object(jsx_runtime.jsx)("g", {
                    id: "eyes",
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)("g", {
                    id: "mouth",
                    children: getMouth(),
                  }),
                ],
              });
        },
        Expressions_Angry = Angry_Angry;
      try {
        (Angry_Angry.displayName = "Angry"),
          (Angry_Angry.__docgenInfo = {
            description: "",
            displayName: "Angry",
            props: {
              strokeColor: {
                defaultValue: null,
                description: "",
                name: "strokeColor",
                required: !0,
                type: { name: "string" },
              },
              isAnimated: {
                defaultValue: null,
                description: "",
                name: "isAnimated",
                required: !0,
                type: { name: "boolean" },
              },
              animationProps: {
                defaultValue: null,
                description: "",
                name: "animationProps",
                required: !0,
                type: { name: "IAnimationProps" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/Blob/Expressions/Angry.tsx#Angry"
            ] = {
              docgenInfo: Angry_Angry.__docgenInfo,
              name: "Angry",
              path: "src/components/Blob/Expressions/Angry.tsx#Angry",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Awestruck_Awestruck = function Awestruck(_ref) {
          var _animationProps$xy,
            _animationProps$xy2,
            strokeColor = _ref.strokeColor,
            isAnimated = _ref.isAnimated,
            animationProps = _ref.animationProps,
            getEyes = function getEyes() {
              return Object(jsx_runtime.jsxs)("g", {
                children: [
                  Object(jsx_runtime.jsx)("circle", {
                    fill: "#fff",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    cx: "50.74",
                    cy: "111.47",
                    r: "20",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    strokeWidth: ".65px",
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    fill: strokeColor,
                    strokeLinecap: "round",
                    cx: "50.74",
                    cy: "111.47",
                    r: "13.07",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    fill: "#fff",
                    cx: "56.9",
                    cy: "102.97",
                    r: "6.91",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    fill: "#fff",
                    cx: "48.12",
                    cy: "115.49",
                    r: "4.02",
                  }),
                  Object(jsx_runtime.jsx)("ellipse", {
                    opacity: ".34",
                    fill: "#fff",
                    cx: "339.21",
                    cy: "280.76",
                    rx: "7.94",
                    ry: "3.91",
                    transform: "rotate(-30 -141.268 740.467)",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    fill: "#fff",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    cx: "154.05",
                    cy: "111.47",
                    r: "20",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    strokeWidth: ".65px",
                    stroke: strokeColor,
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    fill: strokeColor,
                    cx: "154.05",
                    cy: "111.47",
                    r: "13.07",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    fill: "#fff",
                    cx: "160.21",
                    cy: "102.97",
                    r: "6.91",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    fill: "#fff",
                    cx: "151.42",
                    cy: "115.49",
                    r: "4.02",
                  }),
                  Object(jsx_runtime.jsx)("ellipse", {
                    opacity: ".34",
                    fill: "#fff",
                    cx: "442.36",
                    cy: "280.76",
                    rx: "7.94",
                    ry: "3.91",
                    transform: "rotate(-30 -38.108 740.469)",
                  }),
                ],
              });
            },
            getMouth = function getMouth() {
              return Object(jsx_runtime.jsx)("path", {
                strokeLinecap: "round",
                fill: "none",
                strokeWidth: "4",
                strokeMiterlimit: "10",
                stroke: strokeColor,
                d: "M92.27 126.81h21.49",
              });
            };
          return isAnimated
            ? Object(jsx_runtime.jsxs)("g", {
                id: "awestruck-face",
                "data-testid": "awestruck",
                children: [
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "mouth",
                    style: {
                      transform:
                        null === (_animationProps$xy = animationProps.xy) ||
                        void 0 === _animationProps$xy
                          ? void 0
                          : _animationProps$xy.interpolate(eyesTransition),
                    },
                    children: getMouth(),
                  }),
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "eyes",
                    style: {
                      transform:
                        null === (_animationProps$xy2 = animationProps.xy) ||
                        void 0 === _animationProps$xy2
                          ? void 0
                          : _animationProps$xy2.interpolate(mouthTransition),
                    },
                    children: getEyes(),
                  }),
                ],
              })
            : Object(jsx_runtime.jsxs)("g", {
                id: "awestruck-face",
                "data-testid": "awestruck-face-no-animation",
                children: [
                  Object(jsx_runtime.jsx)("g", {
                    id: "eyes",
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)("g", {
                    id: "mouth",
                    children: getMouth(),
                  }),
                ],
              });
        },
        Expressions_Awestruck = Awestruck_Awestruck;
      try {
        (Awestruck_Awestruck.displayName = "Awestruck"),
          (Awestruck_Awestruck.__docgenInfo = {
            description: "",
            displayName: "Awestruck",
            props: {
              strokeColor: {
                defaultValue: null,
                description: "",
                name: "strokeColor",
                required: !0,
                type: { name: "string" },
              },
              isAnimated: {
                defaultValue: null,
                description: "",
                name: "isAnimated",
                required: !0,
                type: { name: "boolean" },
              },
              animationProps: {
                defaultValue: null,
                description: "",
                name: "animationProps",
                required: !0,
                type: { name: "IAnimationProps" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/Blob/Expressions/Awestruck.tsx#Awestruck"
            ] = {
              docgenInfo: Awestruck_Awestruck.__docgenInfo,
              name: "Awestruck",
              path: "src/components/Blob/Expressions/Awestruck.tsx#Awestruck",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Embarrassed_Embarrassed = function Embarrassed(_ref) {
          var _animationProps$xy,
            _animationProps$xy2,
            strokeColor = _ref.strokeColor,
            isAnimated = _ref.isAnimated,
            animationProps = _ref.animationProps,
            getEyes = function getEyes() {
              return Object(jsx_runtime.jsxs)("g", {
                children: [
                  Object(jsx_runtime.jsx)("circle", {
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    fill: strokeColor,
                    cx: "50.74",
                    cy: "111.47",
                    r: "5.9",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    fill: strokeColor,
                    cx: "154.05",
                    cy: "111.47",
                    r: "5.9",
                  }),
                  Object(jsx_runtime.jsx)("ellipse", {
                    stroke: "#ffb8d3",
                    fill: "#ffb8d3",
                    strokeMiterlimit: "10",
                    cx: "50.74",
                    cy: "131.47",
                    rx: "13.86",
                    ry: "6.15",
                  }),
                  Object(jsx_runtime.jsx)("ellipse", {
                    stroke: "#ffb8d3",
                    fill: "#ffb8d3",
                    strokeMiterlimit: "10",
                    cx: "154.05",
                    cy: "131.47",
                    rx: "13.86",
                    ry: "6.15",
                  }),
                ],
              });
            },
            getMouth = function getMouth() {
              return Object(jsx_runtime.jsx)("path", {
                strokeWidth: "4px",
                strokeLinejoin: "round",
                strokeLinecap: "round",
                fill: "#fff",
                stroke: strokeColor,
                d: "M53.22,16.25c0,.32-.06.64-.06,1,0,6.45,5.93,11.68,13.25,11.68s13.24-5.23,13.24-11.68c0-.33,0-.65-.05-1Z",
                transform: "translate(38,105)",
              });
            };
          return isAnimated
            ? Object(jsx_runtime.jsxs)("g", {
                id: "embarrassed-face",
                "data-testid": "embarrassed",
                children: [
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "eyes",
                    style: {
                      transform:
                        null === (_animationProps$xy = animationProps.xy) ||
                        void 0 === _animationProps$xy
                          ? void 0
                          : _animationProps$xy.interpolate(eyesTransition),
                    },
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "mouth",
                    style: {
                      transform:
                        null === (_animationProps$xy2 = animationProps.xy) ||
                        void 0 === _animationProps$xy2
                          ? void 0
                          : _animationProps$xy2.interpolate(mouthTransition),
                    },
                    children: getMouth(),
                  }),
                ],
              })
            : Object(jsx_runtime.jsxs)("g", {
                id: "embarrassed-face",
                "data-testid": "embarrassed-face-no-animation",
                children: [
                  Object(jsx_runtime.jsx)("g", {
                    id: "eyes",
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)("g", {
                    id: "mouth",
                    children: getMouth(),
                  }),
                ],
              });
        },
        Expressions_Embarrassed = Embarrassed_Embarrassed;
      try {
        (Embarrassed_Embarrassed.displayName = "Embarrassed"),
          (Embarrassed_Embarrassed.__docgenInfo = {
            description: "",
            displayName: "Embarrassed",
            props: {
              strokeColor: {
                defaultValue: null,
                description: "",
                name: "strokeColor",
                required: !0,
                type: { name: "string" },
              },
              isAnimated: {
                defaultValue: null,
                description: "",
                name: "isAnimated",
                required: !0,
                type: { name: "boolean" },
              },
              animationProps: {
                defaultValue: null,
                description: "",
                name: "animationProps",
                required: !0,
                type: { name: "IAnimationProps" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/Blob/Expressions/Embarrassed.tsx#Embarrassed"
            ] = {
              docgenInfo: Embarrassed_Embarrassed.__docgenInfo,
              name: "Embarrassed",
              path: "src/components/Blob/Expressions/Embarrassed.tsx#Embarrassed",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Happy_Happy = function Happy(_ref) {
          var _animationProps$xy,
            _animationProps$xy2,
            strokeColor = _ref.strokeColor,
            isAnimated = _ref.isAnimated,
            animationProps = _ref.animationProps,
            getEyes = function getEyes() {
              return Object(jsx_runtime.jsxs)("g", {
                children: [
                  Object(jsx_runtime.jsx)("circle", {
                    fill: strokeColor,
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    cx: "50.74",
                    cy: "111.47",
                    r: "5.94",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    fill: strokeColor,
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    cx: "154.05",
                    cy: "111.47",
                    r: "5.94",
                  }),
                ],
              });
            },
            getMouth = function getMouth() {
              return Object(jsx_runtime.jsxs)("g", {
                children: [
                  Object(jsx_runtime.jsx)("path", {
                    fill: strokeColor,
                    stroke: strokeColor,
                    strokeWidth: "1px",
                    strokeMiterlimit: "10",
                    transform: "translate(45,100)",
                    d: "M58.4,38.65c7.85,0,14.5-6.7,16.76-15.95a5.59,5.59,0,0,0-5.41-6.93H47.05a5.59,5.59,0,0,0-5.41,6.93C43.9,32,50.55,38.65,58.4,38.65Z",
                  }),
                  Object(jsx_runtime.jsx)("path", {
                    stroke: strokeColor,
                    fill: "#ffb8d3",
                    strokeWidth: "1px",
                    strokeMiterlimit: "10",
                    transform: "translate(45,100)",
                    d: "M58.4,23.42c-6.29,0-11.64,2.74-13.75,6.6,3.22,5.26,8.18,8.63,13.75,8.63S68.93,35.28,72.15,30C70,26.16,64.68,23.42,58.4,23.42Z",
                  }),
                ],
              });
            };
          return isAnimated
            ? Object(jsx_runtime.jsxs)("g", {
                id: "happy-face",
                "data-testid": "happy",
                children: [
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "eyes",
                    style: {
                      transform:
                        null === (_animationProps$xy = animationProps.xy) ||
                        void 0 === _animationProps$xy
                          ? void 0
                          : _animationProps$xy.interpolate(eyesTransition),
                    },
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "mouth",
                    style: {
                      transform:
                        null === (_animationProps$xy2 = animationProps.xy) ||
                        void 0 === _animationProps$xy2
                          ? void 0
                          : _animationProps$xy2.interpolate(mouthTransition),
                    },
                    children: getMouth(),
                  }),
                ],
              })
            : Object(jsx_runtime.jsxs)("g", {
                id: "happy-face",
                "data-testid": "happy-face-no-animation",
                children: [
                  Object(jsx_runtime.jsx)("g", {
                    id: "eyes",
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)("g", {
                    id: "mouth",
                    children: getMouth(),
                  }),
                ],
              });
        },
        Expressions_Happy = Happy_Happy;
      try {
        (Happy_Happy.displayName = "Happy"),
          (Happy_Happy.__docgenInfo = {
            description: "",
            displayName: "Happy",
            props: {
              strokeColor: {
                defaultValue: null,
                description: "",
                name: "strokeColor",
                required: !0,
                type: { name: "string" },
              },
              isAnimated: {
                defaultValue: null,
                description: "",
                name: "isAnimated",
                required: !0,
                type: { name: "boolean" },
              },
              animationProps: {
                defaultValue: null,
                description: "",
                name: "animationProps",
                required: !0,
                type: { name: "IAnimationProps" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/Blob/Expressions/Happy.tsx#Happy"
            ] = {
              docgenInfo: Happy_Happy.__docgenInfo,
              name: "Happy",
              path: "src/components/Blob/Expressions/Happy.tsx#Happy",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Indifferent_Indifferent = function Indifferent(_ref) {
          var _animationProps$xy,
            _animationProps$xy2,
            strokeColor = _ref.strokeColor,
            isAnimated = _ref.isAnimated,
            animationProps = _ref.animationProps,
            getEyes = function getEyes() {
              return Object(jsx_runtime.jsxs)("g", {
                children: [
                  Object(jsx_runtime.jsx)("circle", {
                    fill: strokeColor,
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    cx: "50.74",
                    cy: "111.47",
                    r: "5.9",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    fill: strokeColor,
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    cx: "154.05",
                    cy: "111.47",
                    r: "5.9",
                  }),
                ],
              });
            },
            getMouth = function getMouth() {
              return Object(jsx_runtime.jsx)("line", {
                stroke: strokeColor,
                strokeMiterlimit: "10",
                fill: "none",
                strokeLinecap: "round",
                strokeWidth: "4px",
                x1: "88",
                y1: "129",
                x2: "119",
                y2: "129",
              });
            };
          return isAnimated
            ? Object(jsx_runtime.jsxs)("g", {
                id: "indifferent-face",
                "data-testid": "indifferent",
                children: [
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "eyes",
                    style: {
                      transform:
                        null === (_animationProps$xy = animationProps.xy) ||
                        void 0 === _animationProps$xy
                          ? void 0
                          : _animationProps$xy.interpolate(eyesTransition),
                    },
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "mouth",
                    style: {
                      transform:
                        null === (_animationProps$xy2 = animationProps.xy) ||
                        void 0 === _animationProps$xy2
                          ? void 0
                          : _animationProps$xy2.interpolate(mouthTransition),
                    },
                    children: getMouth(),
                  }),
                ],
              })
            : Object(jsx_runtime.jsxs)("g", {
                id: "indifferent-face",
                "data-testid": "indifferent-face-no-animation",
                children: [
                  Object(jsx_runtime.jsx)("g", {
                    id: "eyes",
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)("g", {
                    id: "mouth",
                    children: getMouth(),
                  }),
                ],
              });
        },
        Expressions_Indifferent = Indifferent_Indifferent;
      try {
        (Indifferent_Indifferent.displayName = "Indifferent"),
          (Indifferent_Indifferent.__docgenInfo = {
            description: "",
            displayName: "Indifferent",
            props: {
              strokeColor: {
                defaultValue: null,
                description: "",
                name: "strokeColor",
                required: !0,
                type: { name: "string" },
              },
              isAnimated: {
                defaultValue: null,
                description: "",
                name: "isAnimated",
                required: !0,
                type: { name: "boolean" },
              },
              animationProps: {
                defaultValue: null,
                description: "",
                name: "animationProps",
                required: !0,
                type: { name: "IAnimationProps" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/Blob/Expressions/Indifferent.tsx#Indifferent"
            ] = {
              docgenInfo: Indifferent_Indifferent.__docgenInfo,
              name: "Indifferent",
              path: "src/components/Blob/Expressions/Indifferent.tsx#Indifferent",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Sad_Sad = function Sad(_ref) {
          var _animationProps$xy,
            _animationProps$xy2,
            strokeColor = _ref.strokeColor,
            isAnimated = _ref.isAnimated,
            animationProps = _ref.animationProps,
            getEyes = function getEyes() {
              return Object(jsx_runtime.jsxs)("g", {
                children: [
                  Object(jsx_runtime.jsx)("circle", {
                    fill: strokeColor,
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    cx: "50.74",
                    cy: "111.47",
                    r: "5.9",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    fill: strokeColor,
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    cx: "154.05",
                    cy: "111.47",
                    r: "5.9",
                  }),
                ],
              });
            },
            getMouth = function getMouth() {
              return Object(jsx_runtime.jsx)("path", {
                stroke: strokeColor,
                strokeMiterlimit: "10",
                fill: "none",
                strokeLinecap: "round",
                strokeWidth: "4px",
                transform: "translate(45,100)",
                d: "M35.19,26.48C45.24,6.4,71.8,6.39,79.84,27",
              });
            };
          return isAnimated
            ? Object(jsx_runtime.jsxs)("g", {
                id: "sad-face",
                "data-testid": "sad",
                children: [
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "eyes",
                    style: {
                      transform:
                        null === (_animationProps$xy = animationProps.xy) ||
                        void 0 === _animationProps$xy
                          ? void 0
                          : _animationProps$xy.interpolate(eyesTransition),
                    },
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "mouth",
                    style: {
                      transform:
                        null === (_animationProps$xy2 = animationProps.xy) ||
                        void 0 === _animationProps$xy2
                          ? void 0
                          : _animationProps$xy2.interpolate(mouthTransition),
                    },
                    children: getMouth(),
                  }),
                ],
              })
            : Object(jsx_runtime.jsxs)("g", {
                id: "sad-face",
                "data-testid": "sad-face-no-animation",
                children: [
                  Object(jsx_runtime.jsx)("g", {
                    id: "eyes",
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)("g", {
                    id: "mouth",
                    children: getMouth(),
                  }),
                ],
              });
        },
        Expressions_Sad = Sad_Sad;
      try {
        (Sad_Sad.displayName = "Sad"),
          (Sad_Sad.__docgenInfo = {
            description: "",
            displayName: "Sad",
            props: {
              strokeColor: {
                defaultValue: null,
                description: "",
                name: "strokeColor",
                required: !0,
                type: { name: "string" },
              },
              isAnimated: {
                defaultValue: null,
                description: "",
                name: "isAnimated",
                required: !0,
                type: { name: "boolean" },
              },
              animationProps: {
                defaultValue: null,
                description: "",
                name: "animationProps",
                required: !0,
                type: { name: "IAnimationProps" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/Blob/Expressions/Sad.tsx#Sad"
            ] = {
              docgenInfo: Sad_Sad.__docgenInfo,
              name: "Sad",
              path: "src/components/Blob/Expressions/Sad.tsx#Sad",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Surprised_Surprised = function Surprised(_ref) {
          var _animationProps$xy,
            _animationProps$xy2,
            strokeColor = _ref.strokeColor,
            isAnimated = _ref.isAnimated,
            animationProps = _ref.animationProps,
            getEyes = function getEyes() {
              return Object(jsx_runtime.jsxs)("g", {
                children: [
                  Object(jsx_runtime.jsx)("circle", {
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    fill: strokeColor,
                    cx: "50.74",
                    cy: "111.47",
                    r: "5.9",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    fill: strokeColor,
                    cx: "154.05",
                    cy: "111.47",
                    r: "5.9",
                  }),
                  Object(jsx_runtime.jsx)("path", {
                    fill: "none",
                    strokeWidth: "4px",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    d: "M2,8.08A11.32,11.32,0,0,1,17.94,6.64",
                    transform: "translate(40,80)",
                  }),
                  Object(jsx_runtime.jsx)("path", {
                    fill: "none",
                    strokeWidth: "4px",
                    strokeLinecap: "round",
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    d: "M105.81,5.27a11.31,11.31,0,0,1,16,.09",
                    transform: "translate(40,80)",
                  }),
                ],
              });
            },
            getMouth = function getMouth() {
              return Object(jsx_runtime.jsx)("ellipse", {
                strokeWidth: "4px",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "#fff",
                stroke: strokeColor,
                cx: "105",
                cy: "130",
                rx: "8.28",
                ry: "10.2",
              });
            };
          return isAnimated
            ? Object(jsx_runtime.jsxs)("g", {
                id: "surprised-face",
                "data-testid": "surprised",
                children: [
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "eyes",
                    style: {
                      transform:
                        null === (_animationProps$xy = animationProps.xy) ||
                        void 0 === _animationProps$xy
                          ? void 0
                          : _animationProps$xy.interpolate(eyesTransition),
                    },
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "mouth",
                    style: {
                      transform:
                        null === (_animationProps$xy2 = animationProps.xy) ||
                        void 0 === _animationProps$xy2
                          ? void 0
                          : _animationProps$xy2.interpolate(mouthTransition),
                    },
                    children: getMouth(),
                  }),
                ],
              })
            : Object(jsx_runtime.jsxs)("g", {
                id: "surprised-face",
                "data-testid": "surprised-face-no-animation",
                children: [
                  Object(jsx_runtime.jsx)("g", {
                    id: "eyes",
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)("g", {
                    id: "mouth",
                    children: getMouth(),
                  }),
                ],
              });
        },
        Expressions_Surprised = Surprised_Surprised;
      try {
        (Surprised_Surprised.displayName = "Surprised"),
          (Surprised_Surprised.__docgenInfo = {
            description: "",
            displayName: "Surprised",
            props: {
              strokeColor: {
                defaultValue: null,
                description: "",
                name: "strokeColor",
                required: !0,
                type: { name: "string" },
              },
              isAnimated: {
                defaultValue: null,
                description: "",
                name: "isAnimated",
                required: !0,
                type: { name: "boolean" },
              },
              animationProps: {
                defaultValue: null,
                description: "",
                name: "animationProps",
                required: !0,
                type: { name: "IAnimationProps" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/Blob/Expressions/Surprised.tsx#Surprised"
            ] = {
              docgenInfo: Surprised_Surprised.__docgenInfo,
              name: "Surprised",
              path: "src/components/Blob/Expressions/Surprised.tsx#Surprised",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Worried_Worried = function Worried(_ref) {
          var _animationProps$xy,
            _animationProps$xy2,
            strokeColor = _ref.strokeColor,
            isAnimated = _ref.isAnimated,
            animationProps = _ref.animationProps,
            getEyes = function getEyes() {
              return Object(jsx_runtime.jsxs)("g", {
                children: [
                  Object(jsx_runtime.jsx)("circle", {
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    fill: strokeColor,
                    cx: "50.74",
                    cy: "111.47",
                    r: "5.9",
                  }),
                  Object(jsx_runtime.jsx)("circle", {
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    fill: strokeColor,
                    cx: "154.05",
                    cy: "111.47",
                    r: "5.9",
                  }),
                  Object(jsx_runtime.jsx)("path", {
                    strokeWidth: "4px",
                    strokeLinecap: "round",
                    fill: "none",
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    d: "M16.1,2A11.31,11.31,0,0,1,2,9.56",
                    transform: "translate(40,80)",
                  }),
                  Object(jsx_runtime.jsx)("path", {
                    strokeWidth: "4px",
                    strokeLinecap: "round",
                    fill: "none",
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    d: "M121.8,8.46a11.32,11.32,0,0,1-15.09-5.34",
                    transform: "translate(40,80)",
                  }),
                ],
              });
            },
            getMouth = function getMouth() {
              return Object(jsx_runtime.jsx)("path", {
                strokeLinejoin: "round",
                fill: "#fff",
                strokeWidth: "4px",
                strokeLinecap: "round",
                stroke: strokeColor,
                d: "M76.82,48.43c0-.32.05-.64.05-1,0-6.46-5.93-11.69-13.24-11.69S50.38,41,50.38,47.47c0,.32,0,.64.06,1Z",
                transform: "translate(40,80)",
              });
            };
          return isAnimated
            ? Object(jsx_runtime.jsxs)("g", {
                id: "worried-face",
                "data-testid": "worried",
                children: [
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "eyes",
                    style: {
                      transform:
                        null === (_animationProps$xy = animationProps.xy) ||
                        void 0 === _animationProps$xy
                          ? void 0
                          : _animationProps$xy.interpolate(eyesTransition),
                    },
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)(web.a.g, {
                    id: "mouth",
                    style: {
                      transform:
                        null === (_animationProps$xy2 = animationProps.xy) ||
                        void 0 === _animationProps$xy2
                          ? void 0
                          : _animationProps$xy2.interpolate(mouthTransition),
                    },
                    children: getMouth(),
                  }),
                ],
              })
            : Object(jsx_runtime.jsxs)("g", {
                id: "worried-face",
                "data-testid": "worried-face-no-animation",
                children: [
                  Object(jsx_runtime.jsx)("g", {
                    id: "eyes",
                    children: getEyes(),
                  }),
                  Object(jsx_runtime.jsx)("g", {
                    id: "mouth",
                    children: getMouth(),
                  }),
                ],
              });
        },
        Expressions_Worried = Worried_Worried;
      try {
        (Worried_Worried.displayName = "Worried"),
          (Worried_Worried.__docgenInfo = {
            description: "",
            displayName: "Worried",
            props: {
              strokeColor: {
                defaultValue: null,
                description: "",
                name: "strokeColor",
                required: !0,
                type: { name: "string" },
              },
              isAnimated: {
                defaultValue: null,
                description: "",
                name: "isAnimated",
                required: !0,
                type: { name: "boolean" },
              },
              animationProps: {
                defaultValue: null,
                description: "",
                name: "animationProps",
                required: !0,
                type: { name: "IAnimationProps" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/Blob/Expressions/Worried.tsx#Worried"
            ] = {
              docgenInfo: Worried_Worried.__docgenInfo,
              name: "Worried",
              path: "src/components/Blob/Expressions/Worried.tsx#Worried",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _templateObject,
        Blob_stories_templateObject,
        Blob_paths = {
          body: "M174.67 160.42a130.21 130.21 0 01-10.2 9.21q-2.65 2.14-5.4 4.12c-1.19.85-2.38 1.67-3.59 2.47a115 115 0 01-11.16 6.48c-.63.33-1.27.64-1.91.95-1.28.61-2.56 1.2-3.85 1.77q-2.91 1.28-5.86 2.37c-1.32.49-2.63.95-3.95 1.39a102.49 102.49 0 01-35.57 5.2c-.89 0-1.77-.08-2.66-.13l-2.1-.16-1-.09-.94-.1-1.28-.15c-.54-.06-1.08-.13-1.61-.21s-1.07-.15-1.61-.24c-1-.16-2-.33-3-.52l-1.82-.37-1.58-.35c-1.05-.24-2.1-.5-3.14-.8l-1.56-.44c-.89-.26-1.78-.54-2.66-.83l-1.07-.34-.89-.32-1.52-.56c-1-.38-2-.78-3-1.2q-3-1.25-5.9-2.76t-5.66-3.2a.05.05 0 000 0 67.96 67.96 0 01-2.75-1.79h0c-.49-.33-1-.66-1.46-1a89 89 0 01-11.43-9.59C8.92 143.92-5.01 101.85 5.44 68.14c11.91-38.23 55.71-65.8 100.47-66.2a122.94 122.94 0 0154.86 12.73c.91.45 1.81.91 2.71 1.38h.06c13.72 7.3 25.53 16.95 33.81 28.3.74 1 1.45 2 2.12 3.06 1.11 1.66 2.13 3.37 3.06 5.1.22.41.44.82.65 1.23.38.71.73 1.44 1.07 2.17l.51 1.1c.33.73.65 1.47.94 2.22.15.37.3.74.44 1.12.24.59.45 1.19.66 1.79.11.31.21.61.31.92q.3.91.57 1.83c9.09 31.04-6.84 69.24-33.01 95.53z",
          lightShadow:
            "M468.9 339.07a126.34 126.34 0 01-10.2 9.21c-1.77 1.44-3.57 2.81-5.4 4.13-1.19.85-2.38 1.67-3.59 2.46a115 115 0 01-11.16 6.48c-.63.33-1.27.64-1.91.95-1.28.61-2.56 1.2-3.85 1.77q-2.91 1.28-5.86 2.37c-1.31.49-2.62.95-3.95 1.39a102.49 102.49 0 01-35.57 5.2c-.89 0-1.77-.08-2.66-.13l-2.1-.16-1-.09-.94-.1-1.28-.15c-.54-.06-1.08-.13-1.61-.21s-1.07-.15-1.61-.24c-1-.16-2-.33-3-.52l-1.82-.37-1.58-.35c-1.05-.25-2.1-.51-3.14-.8l-1.56-.44a73.33 73.33 0 01-3.81-1.22l-.81-.27-1.52-.56c-1-.38-2-.78-3-1.2-2-.84-4-1.76-5.9-2.76s-3.81-2.06-5.66-3.2c-.93-.58-1.86-1.18-2.77-1.8 29.16 9.5 63.18 3.32 90.66-16.3 35-25.15 59.37-72 48.61-108.87-5.3-18-19.16-33.65-37.23-44.83a119.65 119.65 0 0111.64 5.07c14.77 7.34 27.51 17.48 36.29 29.5.73 1 1.44 2 2.12 3.06q1.64 2.5 3.06 5.1c.22.41.44.82.65 1.23.37.72.73 1.44 1.07 2.17l.51 1.1c.33.73.64 1.47.94 2.22.15.37.3.74.44 1.12a54.594 54.594 0 01.97 2.71q.3.91.57 1.83c9.06 31.01-6.87 69.21-33.04 95.5z",
          darkShadow:
            "M468.9 339.07a126.34 126.34 0 01-10.2 9.21c-1.77 1.44-3.57 2.81-5.4 4.13-1.19.85-2.38 1.67-3.59 2.46a115 115 0 01-11.16 6.48c-.63.33-1.27.64-1.91.95-1.28.61-2.56 1.2-3.85 1.77q-2.91 1.28-5.86 2.37c-1.31.49-2.62.95-3.95 1.39a102.49 102.49 0 01-35.57 5.2c-.89 0-1.77-.08-2.66-.13l-2.1-.16-1-.09-.94-.1-1.28-.15c-.54-.06-1.08-.13-1.61-.21s-1.07-.15-1.61-.24c-1-.16-2-.33-3-.52l-1.82-.37-1.58-.35c-1.05-.24-2.1-.5-3.14-.8l-1.56-.44c-.89-.26-1.78-.54-2.66-.83l-1.07-.34-.08-.05a81.18 81.18 0 01-8.54-5.06c29.16 9.5 63.17 3.33 90.66-16.29 35-25.15 59.36-72 48.6-108.87-5.24-17.86-18.91-33.38-36.75-44.53a1.75 1.75 0 00-.29-.18c14.9 7.36 27.75 17.57 36.58 29.68.74 1 1.45 2 2.12 3.06 1.11 1.66 2.13 3.37 3.06 5.1.22.41.44.82.65 1.23.38.71.73 1.44 1.07 2.17l.51 1.1c.33.73.65 1.47.94 2.22.15.37.3.74.44 1.12.24.59.45 1.19.66 1.79.11.31.21.61.31.92q.3.91.57 1.83c9.11 31.04-6.82 69.24-32.99 95.53z",
          lightHighlight:
            "M478.05 210.85a110.78 110.78 0 00-15.92-9.56 120.42 120.42 0 00-53.74-12.49c-43.8.39-86.66 27.36-98.32 64.75-10.66 34.39 4.62 77.67 31.77 102-31.74-22.55-50.9-70.54-39.29-108s54.51-64.36 98.32-64.75a120.28 120.28 0 0153.73 12.49 106.33 106.33 0 0123.45 15.56z",
          darkHighlight:
            "M472.38 207.74a108 108 0 00-15.71-9.62 118.48 118.48 0 00-12.26-5.33l-.64-.24a115.26 115.26 0 00-40.11-7c-43.21.4-85.49 27.52-97 65.15-6.26 20.62-3.44 44.43 5.53 65.47A107.75 107.75 0 00338 353.31a82.41 82.41 0 01-7.73-6.35c-25.27-24.84-39-66.13-28.71-99.21 11.75-37.52 55-64.58 99.11-65a121.74 121.74 0 0154.17 12.53c.9.44 1.78.89 2.67 1.36h.06a100.47 100.47 0 0114.81 11.1z",
        },
        Wrapper = styled_components_browser_esm.a.div(
          _templateObject ||
            (_templateObject = Object(taggedTemplateLiteral.a)([
              "\n  margin: 30px;\n  min-width: 220px;\n  min-height: 200px;\n",
            ]))
        ),
        Blob_Blob = function Blob(_ref) {
          var expression = _ref.expression,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? "blue" : _ref$color,
            isAnimated = _ref.isAnimated,
            customStyle = _ref.customStyle,
            _useSpring = Object(web.b)(function () {
              return {
                xy: [0, 0],
                config: { mass: 10, tension: 550, friction: 140 },
              };
            }),
            _useSpring2 = Object(slicedToArray.a)(_useSpring, 2),
            animationProps = _useSpring2[0],
            set = _useSpring2[1],
            strokeColor = customStyle ? customStyle.stroke : stroke[color],
            fillColor = customStyle ? customStyle.fill : fill[color],
            blobFace = {
              happy: Object(jsx_runtime.jsx)(Expressions_Happy, {
                strokeColor: strokeColor,
                isAnimated: isAnimated,
                animationProps: animationProps,
              }),
              awestruck: Object(jsx_runtime.jsx)(Expressions_Awestruck, {
                strokeColor: strokeColor,
                isAnimated: isAnimated,
                animationProps: animationProps,
              }),
              sad: Object(jsx_runtime.jsx)(Expressions_Sad, {
                strokeColor: strokeColor,
                isAnimated: isAnimated,
                animationProps: animationProps,
              }),
              angry: Object(jsx_runtime.jsx)(Expressions_Angry, {
                strokeColor: strokeColor,
                isAnimated: isAnimated,
                animationProps: animationProps,
              }),
              indifferent: Object(jsx_runtime.jsx)(Expressions_Indifferent, {
                strokeColor: strokeColor,
                isAnimated: isAnimated,
                animationProps: animationProps,
              }),
              surprised: Object(jsx_runtime.jsx)(Expressions_Surprised, {
                strokeColor: strokeColor,
                isAnimated: isAnimated,
                animationProps: animationProps,
              }),
              embarrassed: Object(jsx_runtime.jsx)(Expressions_Embarrassed, {
                strokeColor: strokeColor,
                isAnimated: isAnimated,
                animationProps: animationProps,
              }),
              worried: Object(jsx_runtime.jsx)(Expressions_Worried, {
                strokeColor: strokeColor,
                isAnimated: isAnimated,
                animationProps: animationProps,
              }),
            },
            getBody = function getBody() {
              return Object(jsx_runtime.jsxs)("g", {
                children: [
                  Object(jsx_runtime.jsx)("path", {
                    className: "blob-body",
                    d: Blob_paths.body,
                    strokeMiterlimit: "10",
                    stroke: strokeColor,
                    fill: fillColor,
                    strokeWidth: "3.79",
                  }),
                  Object(jsx_runtime.jsx)("path", {
                    className: "blob-light-shadow",
                    d: Blob_paths.lightShadow,
                    fill: strokeColor,
                    opacity: ".1",
                    transform: "translate(-294.23 -178.65)",
                  }),
                  Object(jsx_runtime.jsx)("path", {
                    className: "blob-dark-shadow",
                    d: Blob_paths.darkShadow,
                    fill: strokeColor,
                    opacity: ".1",
                    transform: "translate(-294.23 -178.65)",
                  }),
                  Object(jsx_runtime.jsx)("path", {
                    className: "blob-light-highlight",
                    d: Blob_paths.lightHighlight,
                    fill: "#fff",
                    opacity: ".2",
                    transform: "translate(-294.23 -178.65)",
                  }),
                  Object(jsx_runtime.jsx)("path", {
                    className: "blob-dark-highlight",
                    d: Blob_paths.darkHighlight,
                    fill: "#fff",
                    opacity: ".2",
                    transform: "translate(-294.23 -178.65)",
                  }),
                  blobFace[expression],
                ],
              });
            },
            calc = function calc(x, y) {
              return [x - window.innerWidth / 2, y - window.innerHeight / 2];
            };
          return isAnimated
            ? Object(jsx_runtime.jsx)(Wrapper, {
                onMouseMove: function onMouseMove(_ref2) {
                  var x = _ref2.clientX,
                    y = _ref2.clientY;
                  return set({ xy: calc(x, y) });
                },
                children: Object(jsx_runtime.jsx)(web.a.svg, {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 220 200",
                  style: {
                    transform: animationProps.xy.interpolate(bodyTransition),
                  },
                  children: getBody(),
                }),
              })
            : Object(jsx_runtime.jsx)(Wrapper, {
                "data-testid": "not-animated",
                children: Object(jsx_runtime.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 220 200",
                  children: getBody(),
                }),
              });
        },
        components_Blob_Blob = Blob_Blob;
      try {
        (Blob_Blob.displayName = "Blob"),
          (Blob_Blob.__docgenInfo = {
            description: "",
            displayName: "Blob",
            props: {
              expression: {
                defaultValue: null,
                description: "",
                name: "expression",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"happy"' },
                    { value: '"sad"' },
                    { value: '"angry"' },
                    { value: '"awestruck"' },
                    { value: '"indifferent"' },
                    { value: '"surprised"' },
                    { value: '"embarrassed"' },
                    { value: '"worried"' },
                  ],
                },
              },
              color: {
                defaultValue: { value: "blue" },
                description: "",
                name: "color",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: "undefined" },
                    { value: '"blue"' },
                    { value: '"brown"' },
                    { value: '"pink"' },
                    { value: '"green"' },
                    { value: '"yellow"' },
                    { value: '"red"' },
                  ],
                },
              },
              isAnimated: {
                defaultValue: null,
                description: "",
                name: "isAnimated",
                required: !0,
                type: { name: "boolean" },
              },
              customStyle: {
                defaultValue: null,
                description: "",
                name: "customStyle",
                required: !1,
                type: { name: "ICustomStyle | undefined" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/Blob/Blob.tsx#Blob"] = {
              docgenInfo: Blob_Blob.__docgenInfo,
              name: "Blob",
              path: "src/components/Blob/Blob.tsx#Blob",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: "Characters/Blob",
        component: components_Blob_Blob,
        argTypes: {
          color: {
            control: {
              type: "inline-radio",
              options: ["blue", "brown", "pink", "green", "yellow", "red"],
            },
          },
          expression: {
            control: {
              type: "inline-radio",
              options: [
                "happy",
                "sad",
                "angry",
                "awestruck",
                "indifferent",
                "surprised",
                "embarrassed",
                "worried",
              ],
            },
          },
        },
      };
      var Blob_stories_Wrapper = styled_components_browser_esm.a.div(
          Blob_stories_templateObject ||
            (Blob_stories_templateObject = Object(taggedTemplateLiteral.a)([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n",
            ]))
        ),
        Blob_stories_Template = function Template(args) {
          return Object(jsx_runtime.jsx)(Blob_stories_Wrapper, {
            children: Object(jsx_runtime.jsx)(
              components_Blob_Blob,
              Object(objectSpread2.a)({}, args)
            ),
          });
        },
        Bob = Blob_stories_Template.bind({});
      Bob.args = { expression: "happy", isAnimated: !1, color: "blue" };
      var CustomBob = Blob_stories_Template.bind({});
      (CustomBob.args = {
        expression: "happy",
        isAnimated: !1,
        customStyle: { stroke: "#000000", fill: "#FFFFFF" },
      }),
        (Bob.parameters = Object(objectSpread2.a)(
          {
            storySource: {
              source:
                "(args) => (\n  <Wrapper>\n    <Blob {...(args as IBlobProps)} />\n  </Wrapper>\n)",
            },
          },
          Bob.parameters
        )),
        (CustomBob.parameters = Object(objectSpread2.a)(
          {
            storySource: {
              source:
                "(args) => (\n  <Wrapper>\n    <Blob {...(args as IBlobProps)} />\n  </Wrapper>\n)",
            },
          },
          CustomBob.parameters
        ));
    },
    "./storybook-init-framework-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js"
      );
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        "./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"
      ),
        __webpack_require__(
          "./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"
        ),
        __webpack_require__("./storybook-init-framework-entry.js"),
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.storybook/preview.js-generated-config-entry.js"
        ),
        (module.exports = __webpack_require__("./generated-stories-entry.js"));
    },
    1: function (module, exports) {},
  },
  [[0, 5, 6]],
]);

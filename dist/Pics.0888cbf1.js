// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../widgets/Pics.js":[function(require,module,exports) {
var define;
var global = arguments[3];
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;
  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }
        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      localRequire.resolve = resolve;
      localRequire.cache = {};
      var module = cache[name] = new newRequire.Module(name);
      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }
    return cache[name].exports;
    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }
    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }
  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }
  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };
  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }
  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;
  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }
  return newRequire;
}({
  "Xy56": [function (require, module, exports) {
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    'use strict';

    var l = Symbol.for("react.element"),
      n = Symbol.for("react.portal"),
      p = Symbol.for("react.fragment"),
      q = Symbol.for("react.strict_mode"),
      r = Symbol.for("react.profiler"),
      t = Symbol.for("react.provider"),
      u = Symbol.for("react.context"),
      v = Symbol.for("react.forward_ref"),
      w = Symbol.for("react.suspense"),
      x = Symbol.for("react.memo"),
      y = Symbol.for("react.lazy"),
      z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
      },
      C = Object.assign,
      D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function (a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {}
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = !0;
    var I = Array.isArray,
      J = Object.prototype.hasOwnProperty,
      K = {
        current: null
      },
      L = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };
    function M(a, b, e) {
      var d,
        c = {},
        k = null,
        h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return {
        $$typeof: l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: K.current
      };
    }
    function N(a, b) {
      return {
        $$typeof: l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
      };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + a.replace(/[=:]/g, function (a) {
        return b[a];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = !1;
      if (null === a) h = !0;else switch (k) {
        case "string":
        case "number":
          h = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = !0;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
        return a;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [],
        c = 0;
      R(a, d, "", "", function (a) {
        return b.call(e, a, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function (b) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function (b) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = {
        current: null
      },
      V = {
        transition: null
      },
      W = {
        ReactCurrentDispatcher: U,
        ReactCurrentBatchConfig: V,
        ReactCurrentOwner: K
      };
    exports.Children = {
      map: S,
      forEach: function (a, b, e) {
        S(a, function () {
          b.apply(this, arguments);
        }, e);
      },
      count: function (a) {
        var b = 0;
        S(a, function () {
          b++;
        });
        return b;
      },
      toArray: function (a) {
        return S(a, function (a) {
          return a;
        }) || [];
      },
      only: function (a) {
        if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      }
    };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function (a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props),
        c = a.key,
        k = a.ref,
        h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return {
        $$typeof: l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
      };
    };
    exports.createContext = function (a) {
      a = {
        $$typeof: u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      };
      a.Provider = {
        $$typeof: t,
        _context: a
      };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function (a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function () {
      return {
        current: null
      };
    };
    exports.forwardRef = function (a) {
      return {
        $$typeof: v,
        render: a
      };
    };
    exports.isValidElement = O;
    exports.lazy = function (a) {
      return {
        $$typeof: y,
        _payload: {
          _status: -1,
          _result: a
        },
        _init: T
      };
    };
    exports.memo = function (a, b) {
      return {
        $$typeof: x,
        type: a,
        compare: void 0 === b ? null : b
      };
    };
    exports.startTransition = function (a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function (a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function (a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function () {};
    exports.useDeferredValue = function (a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function (a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function () {
      return U.current.useId();
    };
    exports.useImperativeHandle = function (a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function (a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function (a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function (a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function (a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function (a) {
      return U.current.useRef(a);
    };
    exports.useState = function (a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function (a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function () {
      return U.current.useTransition();
    };
    exports.version = "18.2.0";
  }, {}],
  "ccIB": [function (require, module, exports) {
    'use strict';

    if ("production" === 'production') {
      module.exports = require('./cjs/react.production.min.js');
    } else {
      module.exports = require('./cjs/react.development.js');
    }
  }, {
    "./cjs/react.production.min.js": "Xy56"
  }],
  "Psww": [function (require, module, exports) {}, {}],
  "LgkO": [function (require, module, exports) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    'use strict';

    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    module.exports = ReactPropTypesSecret;
  }, {}],
  "lyfy": [function (require, module, exports) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    'use strict';

    var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
    function emptyFunction() {}
    function emptyFunctionWithReset() {}
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module.exports = function () {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          // It is still safe when called from React.
          return;
        }
        var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        err.name = 'Invariant Violation';
        throw err;
      }
      ;
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      ;
      // Important!
      // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }, {
    "./lib/ReactPropTypesSecret": "LgkO"
  }],
  "B0VN": [function (require, module, exports) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    if ("production" !== 'production') {
      var ReactIs = require('react-is');

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
    } else {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = require('./factoryWithThrowingShims')();
    }
  }, {
    "./factoryWithThrowingShims": "lyfy"
  }],
  "px3s": [function (require, module, exports) {
    'use strict';

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }
    var React = require('react');
    var React__default = _interopDefault(React);
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
      if (typeof reducePropsToState !== 'function') {
        throw new Error('Expected reducePropsToState to be a function.');
      }
      if (typeof handleStateChangeOnClient !== 'function') {
        throw new Error('Expected handleStateChangeOnClient to be a function.');
      }
      if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
        throw new Error('Expected mapStateOnServer to either be undefined or a function.');
      }
      function getDisplayName(WrappedComponent) {
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
      }
      return function wrap(WrappedComponent) {
        if (typeof WrappedComponent !== 'function') {
          throw new Error('Expected WrappedComponent to be a React component.');
        }
        var mountedInstances = [];
        var state;
        function emitChange() {
          state = reducePropsToState(mountedInstances.map(function (instance) {
            return instance.props;
          }));
          if (SideEffect.canUseDOM) {
            handleStateChangeOnClient(state);
          } else if (mapStateOnServer) {
            state = mapStateOnServer(state);
          }
        }
        var SideEffect = /*#__PURE__*/
        function (_PureComponent) {
          _inheritsLoose(SideEffect, _PureComponent);
          function SideEffect() {
            return _PureComponent.apply(this, arguments) || this;
          }

          // Try to use displayName of wrapped component
          // Expose canUseDOM so tests can monkeypatch it
          SideEffect.peek = function peek() {
            return state;
          };
          SideEffect.rewind = function rewind() {
            if (SideEffect.canUseDOM) {
              throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
            }
            var recordedState = state;
            state = undefined;
            mountedInstances = [];
            return recordedState;
          };
          var _proto = SideEffect.prototype;
          _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
            mountedInstances.push(this);
            emitChange();
          };
          _proto.componentDidUpdate = function componentDidUpdate() {
            emitChange();
          };
          _proto.componentWillUnmount = function componentWillUnmount() {
            var index = mountedInstances.indexOf(this);
            mountedInstances.splice(index, 1);
            emitChange();
          };
          _proto.render = function render() {
            return React__default.createElement(WrappedComponent, this.props);
          };
          return SideEffect;
        }(React.PureComponent);
        _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
        _defineProperty(SideEffect, "canUseDOM", canUseDOM);
        return SideEffect;
      };
    }
    module.exports = withSideEffect;
  }, {
    "react": "ccIB"
  }],
  "hrDO": [function (require, module, exports) {
    /* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

    var hasElementType = typeof Element !== 'undefined';
    var hasMap = typeof Map === 'function';
    var hasSet = typeof Set === 'function';
    var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

    // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

    function equal(a, b) {
      // START: fast-deep-equal es6/index.js 3.1.1
      if (a === b) return true;
      if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
          return true;
        }

        // START: Modifications:
        // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
        //    to co-exist with es5.
        // 2. Replace `for of` with es5 compliant iteration using `for`.
        //    Basically, take:
        //
        //    ```js
        //    for (i of a.entries())
        //      if (!b.has(i[0])) return false;
        //    ```
        //
        //    ... and convert to:
        //
        //    ```js
        //    it = a.entries();
        //    while (!(i = it.next()).done)
        //      if (!b.has(i.value[0])) return false;
        //    ```
        //
        //    **Note**: `i` access switches to `i.value`.
        var it;
        if (hasMap && a instanceof Map && b instanceof Map) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
          it = a.entries();
          while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;
          return true;
        }
        if (hasSet && a instanceof Set && b instanceof Set) {
          if (a.size !== b.size) return false;
          it = a.entries();
          while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
          return true;
        }
        // END: Modifications

        if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        // END: fast-deep-equal

        // START: react-fast-compare
        // custom handling for DOM elements
        if (hasElementType && a instanceof Element) return false;

        // custom handling for React/Preact
        for (i = length; i-- !== 0;) {
          if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
            // React-specific: avoid traversing React elements' _owner
            // Preact-specific: avoid traversing Preact elements' __v and __o
            //    __v = $_original / $_vnode
            //    __o = $_owner
            // These properties contain circular references and are not needed when
            // comparing the actual elements (and not their owners)
            // .$$typeof and ._store on just reasonable markers of elements

            continue;
          }

          // all other properties should be traversed as usual
          if (!equal(a[keys[i]], b[keys[i]])) return false;
        }
        // END: react-fast-compare

        // START: fast-deep-equal
        return true;
      }
      return a !== a && b !== b;
    }
    // end fast-deep-equal

    module.exports = function isEqual(a, b) {
      try {
        return equal(a, b);
      } catch (error) {
        if ((error.message || '').match(/stack|recursion/i)) {
          // warn on circular references, don't crash
          // browsers give this different errors name and messages:
          // chrome/safari: "RangeError", "Maximum call stack size exceeded"
          // firefox: "InternalError", too much recursion"
          // edge: "Error", "Out of stack space"
          console.warn('react-fast-compare cannot handle circular refs');
          return false;
        }
        // some other error. we should definitely know about these
        throw error;
      }
    };
  }, {}],
  "W2ED": [function (require, module, exports) {
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */

    'use strict';

    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }

        // Detect buggy property enumeration order in older V8 versions.

        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
          return false;
        }

        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        });
        if (order2.join('') !== '0123456789') {
          return false;
        }

        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
          return false;
        }
        return true;
      } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function (target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }, {}],
  "Aa3K": [function (require, module, exports) {
    var global = arguments[3];
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.Helmet = void 0;
    var _propTypes = _interopRequireDefault(require("prop-types"));
    var _reactSideEffect = _interopRequireDefault(require("react-side-effect"));
    var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));
    var _react = _interopRequireDefault(require("react"));
    var _objectAssign = _interopRequireDefault(require("object-assign"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ATTRIBUTE_NAMES = {
      BODY: "bodyAttributes",
      HTML: "htmlAttributes",
      TITLE: "titleAttributes"
    };
    var TAG_NAMES = {
      BASE: "base",
      BODY: "body",
      HEAD: "head",
      HTML: "html",
      LINK: "link",
      META: "meta",
      NOSCRIPT: "noscript",
      SCRIPT: "script",
      STYLE: "style",
      TITLE: "title"
    };
    var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
      return TAG_NAMES[name];
    });
    var TAG_PROPERTIES = {
      CHARSET: "charset",
      CSS_TEXT: "cssText",
      HREF: "href",
      HTTPEQUIV: "http-equiv",
      INNER_HTML: "innerHTML",
      ITEM_PROP: "itemprop",
      NAME: "name",
      PROPERTY: "property",
      REL: "rel",
      SRC: "src",
      TARGET: "target"
    };
    var REACT_TAG_MAP = {
      accesskey: "accessKey",
      charset: "charSet",
      class: "className",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      "http-equiv": "httpEquiv",
      itemprop: "itemProp",
      tabindex: "tabIndex"
    };
    var HELMET_PROPS = {
      DEFAULT_TITLE: "defaultTitle",
      DEFER: "defer",
      ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
      ON_CHANGE_CLIENT_STATE: "onChangeClientState",
      TITLE_TEMPLATE: "titleTemplate"
    };
    var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
      obj[REACT_TAG_MAP[key]] = key;
      return obj;
    }, {});
    var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
    var HELMET_ATTRIBUTE = "data-react-helmet";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var inherits = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };
    var objectWithoutProperties = function (obj, keys) {
      var target = {};
      for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;
        if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
        target[i] = obj[i];
      }
      return target;
    };
    var possibleConstructorReturn = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };
    var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
      var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (encode === false) {
        return String(str);
      }
      return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    };
    var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
      var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
      var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
      if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
          return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
        });
      }
      var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
      return innermostTitle || innermostDefaultTitle || undefined;
    };
    var getOnChangeClientState = function getOnChangeClientState(propsList) {
      return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
    };
    var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
      return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
      }).map(function (props) {
        return props[tagType];
      }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
      }, {});
    };
    var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
      return propsList.filter(function (props) {
        return typeof props[TAG_NAMES.BASE] !== "undefined";
      }).map(function (props) {
        return props[TAG_NAMES.BASE];
      }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
          var keys = Object.keys(tag);
          for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var lowerCaseAttributeKey = attributeKey.toLowerCase();
            if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
              return innermostBaseTag.concat(tag);
            }
          }
        }
        return innermostBaseTag;
      }, []);
    };
    var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
      // Calculate list of tags, giving priority innermost component (end of the propslist)
      var approvedSeenTags = {};
      return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
          return true;
        }
        if (typeof props[tagName] !== "undefined") {
          warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
      }).map(function (props) {
        return props[tagName];
      }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};
        instanceTags.filter(function (tag) {
          var primaryAttributeKey = void 0;
          var keys = Object.keys(tag);
          for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var lowerCaseAttributeKey = attributeKey.toLowerCase();

            // Special rule with link tags, since rel and href are both primary tags, rel takes priority
            if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
              primaryAttributeKey = lowerCaseAttributeKey;
            }
            // Special case for innerHTML which doesn't work lowercased
            if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
              primaryAttributeKey = attributeKey;
            }
          }
          if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
            return false;
          }
          var value = tag[primaryAttributeKey].toLowerCase();
          if (!approvedSeenTags[primaryAttributeKey]) {
            approvedSeenTags[primaryAttributeKey] = {};
          }
          if (!instanceSeenTags[primaryAttributeKey]) {
            instanceSeenTags[primaryAttributeKey] = {};
          }
          if (!approvedSeenTags[primaryAttributeKey][value]) {
            instanceSeenTags[primaryAttributeKey][value] = true;
            return true;
          }
          return false;
        }).reverse().forEach(function (tag) {
          return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
          var attributeKey = keys[i];
          var tagUnion = (0, _objectAssign.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
          approvedSeenTags[attributeKey] = tagUnion;
        }
        return approvedTags;
      }, []).reverse();
    };
    var getInnermostProperty = function getInnermostProperty(propsList, property) {
      for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];
        if (props.hasOwnProperty(property)) {
          return props[property];
        }
      }
      return null;
    };
    var reducePropsToState = function reducePropsToState(propsList) {
      return {
        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
      };
    };
    var rafPolyfill = function () {
      var clock = Date.now();
      return function (callback) {
        var currentTime = Date.now();
        if (currentTime - clock > 16) {
          clock = currentTime;
          callback(currentTime);
        } else {
          setTimeout(function () {
            rafPolyfill(callback);
          }, 0);
        }
      };
    }();
    var cafPolyfill = function cafPolyfill(id) {
      return clearTimeout(id);
    };
    var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
    var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
    var warn = function warn(msg) {
      return console && typeof console.warn === "function" && console.warn(msg);
    };
    var _helmetCallback = null;
    var handleClientStateChange = function handleClientStateChange(newState) {
      if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
      }
      if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
          commitTagChanges(newState, function () {
            _helmetCallback = null;
          });
        });
      } else {
        commitTagChanges(newState);
        _helmetCallback = null;
      }
    };
    var commitTagChanges = function commitTagChanges(newState, cb) {
      var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;
      updateAttributes(TAG_NAMES.BODY, bodyAttributes);
      updateAttributes(TAG_NAMES.HTML, htmlAttributes);
      updateTitle(title, titleAttributes);
      var tagUpdates = {
        baseTag: updateTags(TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
      };
      var addedTags = {};
      var removedTags = {};
      Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
          newTags = _tagUpdates$tagType.newTags,
          oldTags = _tagUpdates$tagType.oldTags;
        if (newTags.length) {
          addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
          removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
      });
      cb && cb();
      onChangeClientState(newState, addedTags, removedTags);
    };
    var flattenArray = function flattenArray(possibleArray) {
      return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
    };
    var updateTitle = function updateTitle(title, attributes) {
      if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
      }
      updateAttributes(TAG_NAMES.TITLE, attributes);
    };
    var updateAttributes = function updateAttributes(tagName, attributes) {
      var elementTag = document.getElementsByTagName(tagName)[0];
      if (!elementTag) {
        return;
      }
      var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
      var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
      var attributesToRemove = [].concat(helmetAttributes);
      var attributeKeys = Object.keys(attributes);
      for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";
        if (elementTag.getAttribute(attribute) !== value) {
          elementTag.setAttribute(attribute, value);
        }
        if (helmetAttributes.indexOf(attribute) === -1) {
          helmetAttributes.push(attribute);
        }
        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
          attributesToRemove.splice(indexToSave, 1);
        }
      }
      for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
      }
      if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
      } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
      }
    };
    var updateTags = function updateTags(type, tags) {
      var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
      var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
      var oldTags = Array.prototype.slice.call(tagNodes);
      var newTags = [];
      var indexToDelete = void 0;
      if (tags && tags.length) {
        tags.forEach(function (tag) {
          var newElement = document.createElement(type);
          for (var attribute in tag) {
            if (tag.hasOwnProperty(attribute)) {
              if (attribute === TAG_PROPERTIES.INNER_HTML) {
                newElement.innerHTML = tag.innerHTML;
              } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                if (newElement.styleSheet) {
                  newElement.styleSheet.cssText = tag.cssText;
                } else {
                  newElement.appendChild(document.createTextNode(tag.cssText));
                }
              } else {
                var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                newElement.setAttribute(attribute, value);
              }
            }
          }
          newElement.setAttribute(HELMET_ATTRIBUTE, "true");

          // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
          if (oldTags.some(function (existingTag, index) {
            indexToDelete = index;
            return newElement.isEqualNode(existingTag);
          })) {
            oldTags.splice(indexToDelete, 1);
          } else {
            newTags.push(newElement);
          }
        });
      }
      oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
      });
      return {
        oldTags: oldTags,
        newTags: newTags
      };
    };
    var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
      return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
      }, "");
    };
    var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
      var attributeString = generateElementAttributesAsString(attributes);
      var flattenedTitle = flattenArray(title);
      return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
    };
    var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
      return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
          return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
          var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
          return string ? string + " " + attr : attr;
        }, "");
        var tagContent = tag.innerHTML || tag.cssText || "";
        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
        return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
      }, "");
    };
    var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
      var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object.keys(attributes).reduce(function (obj, key) {
        obj[REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
      }, initProps);
    };
    var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
      var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Object.keys(props).reduce(function (obj, key) {
        obj[HTML_TAG_MAP[key] || key] = props[key];
        return obj;
      }, initAttributes);
    };
    var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
      var _initProps;

      // assigning into an array to define toString function on it
      var initProps = (_initProps = {
        key: title
      }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
      var props = convertElementAttributestoReactProps(attributes, initProps);
      return [_react.default.createElement(TAG_NAMES.TITLE, props, title)];
    };
    var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
      return tags.map(function (tag, i) {
        var _mappedTag;
        var mappedTag = (_mappedTag = {
          key: i
        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);
        Object.keys(tag).forEach(function (attribute) {
          var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;
          if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
            var content = tag.innerHTML || tag.cssText;
            mappedTag.dangerouslySetInnerHTML = {
              __html: content
            };
          } else {
            mappedTag[mappedAttribute] = tag[attribute];
          }
        });
        return _react.default.createElement(type, mappedTag);
      });
    };
    var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
      switch (type) {
        case TAG_NAMES.TITLE:
          return {
            toComponent: function toComponent() {
              return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
            },
            toString: function toString() {
              return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
            }
          };
        case ATTRIBUTE_NAMES.BODY:
        case ATTRIBUTE_NAMES.HTML:
          return {
            toComponent: function toComponent() {
              return convertElementAttributestoReactProps(tags);
            },
            toString: function toString() {
              return generateElementAttributesAsString(tags);
            }
          };
        default:
          return {
            toComponent: function toComponent() {
              return generateTagsAsReactComponent(type, tags);
            },
            toString: function toString() {
              return generateTagsAsString(type, tags, encode);
            }
          };
      }
    };
    var mapStateOnServer = function mapStateOnServer(_ref) {
      var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
      return {
        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(TAG_NAMES.TITLE, {
          title: title,
          titleAttributes: titleAttributes
        }, encode)
      };
    };
    var Helmet = function Helmet(Component) {
      var _class, _temp;
      return _temp = _class = function (_React$Component) {
        inherits(HelmetWrapper, _React$Component);
        function HelmetWrapper() {
          classCallCheck(this, HelmetWrapper);
          return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }
        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
          return !(0, _reactFastCompare.default)(this.props, nextProps);
        };
        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
          if (!nestedChildren) {
            return null;
          }
          switch (child.type) {
            case TAG_NAMES.SCRIPT:
            case TAG_NAMES.NOSCRIPT:
              return {
                innerHTML: nestedChildren
              };
            case TAG_NAMES.STYLE:
              return {
                cssText: nestedChildren
              };
          }
          throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };
        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
          var _babelHelpers$extends;
          var child = _ref.child,
            arrayTypeChildren = _ref.arrayTypeChildren,
            newChildProps = _ref.newChildProps,
            nestedChildren = _ref.nestedChildren;
          return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
        };
        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
          var _babelHelpers$extends2, _babelHelpers$extends3;
          var child = _ref2.child,
            newProps = _ref2.newProps,
            newChildProps = _ref2.newChildProps,
            nestedChildren = _ref2.nestedChildren;
          switch (child.type) {
            case TAG_NAMES.TITLE:
              return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));
            case TAG_NAMES.BODY:
              return _extends({}, newProps, {
                bodyAttributes: _extends({}, newChildProps)
              });
            case TAG_NAMES.HTML:
              return _extends({}, newProps, {
                htmlAttributes: _extends({}, newChildProps)
              });
          }
          return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
        };
        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
          var newFlattenedProps = _extends({}, newProps);
          Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
            var _babelHelpers$extends4;
            newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
          });
          return newFlattenedProps;
        };
        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
          if ("production" !== "production") {
            if (!VALID_TAG_NAMES.some(function (name) {
              return child.type === name;
            })) {
              if (typeof child.type === "function") {
                return warn("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
              }
              return warn("Only elements types " + VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
            }
            if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
              return typeof nestedChild !== "string";
            }))) {
              throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
            }
          }
          return true;
        };
        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
          var _this2 = this;
          var arrayTypeChildren = {};
          _react.default.Children.forEach(children, function (child) {
            if (!child || !child.props) {
              return;
            }
            var _child$props = child.props,
              nestedChildren = _child$props.children,
              childProps = objectWithoutProperties(_child$props, ["children"]);
            var newChildProps = convertReactPropstoHtmlAttributes(childProps);
            _this2.warnOnInvalidChildren(child, nestedChildren);
            switch (child.type) {
              case TAG_NAMES.LINK:
              case TAG_NAMES.META:
              case TAG_NAMES.NOSCRIPT:
              case TAG_NAMES.SCRIPT:
              case TAG_NAMES.STYLE:
                arrayTypeChildren = _this2.flattenArrayTypeChildren({
                  child: child,
                  arrayTypeChildren: arrayTypeChildren,
                  newChildProps: newChildProps,
                  nestedChildren: nestedChildren
                });
                break;
              default:
                newProps = _this2.mapObjectTypeChildren({
                  child: child,
                  newProps: newProps,
                  newChildProps: newChildProps,
                  nestedChildren: nestedChildren
                });
                break;
            }
          });
          newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
          return newProps;
        };
        HelmetWrapper.prototype.render = function render() {
          var _props = this.props,
            children = _props.children,
            props = objectWithoutProperties(_props, ["children"]);
          var newProps = _extends({}, props);
          if (children) {
            newProps = this.mapChildrenToProps(children, newProps);
          }
          return _react.default.createElement(Component, newProps);
        };
        createClass(HelmetWrapper, null, [{
          key: "canUseDOM",
          // Component.peek comes from react-side-effect:
          // For testing, you may use a static peek() method available on the returned component.
          // It lets you get the current state without resetting the mounted instance stack.
          // Don’t use it for anything other than testing.

          /**
           * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
           * @param {Object} bodyAttributes: {"className": "root"}
           * @param {String} defaultTitle: "Default Title"
           * @param {Boolean} defer: true
           * @param {Boolean} encodeSpecialCharacters: true
           * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
           * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
           * @param {Array} meta: [{"name": "description", "content": "Test description"}]
           * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
           * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
           * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
           * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
           * @param {String} title: "Title"
           * @param {Object} titleAttributes: {"itemprop": "name"}
           * @param {String} titleTemplate: "MySite.com - %s"
           */
          set: function set$$1(canUseDOM) {
            Component.canUseDOM = canUseDOM;
          }
        }]);
        return HelmetWrapper;
      }(_react.default.Component), _class.propTypes = {
        base: _propTypes.default.object,
        bodyAttributes: _propTypes.default.object,
        children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
        defaultTitle: _propTypes.default.string,
        defer: _propTypes.default.bool,
        encodeSpecialCharacters: _propTypes.default.bool,
        htmlAttributes: _propTypes.default.object,
        link: _propTypes.default.arrayOf(_propTypes.default.object),
        meta: _propTypes.default.arrayOf(_propTypes.default.object),
        noscript: _propTypes.default.arrayOf(_propTypes.default.object),
        onChangeClientState: _propTypes.default.func,
        script: _propTypes.default.arrayOf(_propTypes.default.object),
        style: _propTypes.default.arrayOf(_propTypes.default.object),
        title: _propTypes.default.string,
        titleAttributes: _propTypes.default.object,
        titleTemplate: _propTypes.default.string
      }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
      }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
          // provide fallback if mappedState is undefined
          mappedState = mapStateOnServer({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: true,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
          });
        }
        return mappedState;
      }, _temp;
    };
    var NullComponent = function NullComponent() {
      return null;
    };
    var HelmetSideEffects = (0, _reactSideEffect.default)(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);
    var HelmetExport = Helmet(HelmetSideEffects);
    exports.Helmet = HelmetExport;
    HelmetExport.renderStatic = HelmetExport.rewind;
    var _default = HelmetExport;
    exports.default = _default;
  }, {
    "prop-types": "B0VN",
    "react-side-effect": "px3s",
    "react-fast-compare": "hrDO",
    "react": "ccIB",
    "object-assign": "W2ED"
  }],
  "pZfp": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require("react"));
    require("../App.css");
    var _reactHelmet = require("react-helmet");
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function (nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
          default: obj
        };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
      if (null != _i) {
        var _s,
          _e,
          _x,
          _r,
          _arr = [],
          _n = !0,
          _d = !1;
        try {
          if (_x = (_i = _i.call(arr)).next, 0 === i) {
            if (Object(_i) !== _i) return;
            _n = !1;
          } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
          _d = !0, _e = err;
        } finally {
          try {
            if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    // Render each post
    function renderPost(post) {
      var _post$data = post.data,
        title = _post$data.title,
        url = _post$data.url,
        author = _post$data.author,
        id = _post$data.id;
      var authorUrl = "https://www.reddit.com/u/".concat(author);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "reddit_widget__post",
        key: id
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "reddit_widget__posted_by"
      }, "posted by ", /*#__PURE__*/_react.default.createElement("a", {
        href: authorUrl,
        className: "reddit_widget__posted_by",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "u/", author)), /*#__PURE__*/_react.default.createElement("a", {
        href: url,
        className: "reddit_widget__title",
        target: "_blank",
        rel: "noopener noreferrer"
      }, title));
    }

    // Filter, since reddit always returns stickied posts up top
    function nonStickiedOnly(post) {
      return !post.data.stickied;
    }
    function Pics(_ref) {
      var domElement = _ref.domElement;
      var subreddit = domElement.getAttribute("data-subreddit");
      var _useState = (0, _react.useState)(),
        _useState2 = _slicedToArray(_useState, 2),
        loading = _useState2[0],
        setLoading = _useState2[1];
      var _useState3 = (0, _react.useState)(''),
        _useState4 = _slicedToArray(_useState3, 2),
        error = _useState4[0],
        setError = _useState4[1];
      var _useState5 = (0, _react.useState)([]),
        _useState6 = _slicedToArray(_useState5, 2),
        data = _useState6[0],
        setData = _useState6[1];
      (0, _react.useEffect)(function () {
        // Fetch data from reddit
        setLoading(true);
        fetch("https://www.reddit.com/r/".concat(subreddit, ".json")).then(function (response) {
          return response.json();
        }).then(function (data) {
          setLoading(false);
          setData(data.data.children.slice(0, 3));
        }).catch(function (e) {
          console.log(e);
          setLoading(false);
          setError('error fetching from reddit');
        });
      }, [subreddit]);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "reddit_widget__app"
      }, /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, /*#__PURE__*/_react.default.createElement("link", {
        href: "https://fernandesalisha.github.io/widget-poc/index.css",
        rel: "stylesheet"
      }), /*#__PURE__*/_react.default.createElement("script", {
        src: "https://fernandesalisha.github.io/widget-poc/index.js"
      })), /*#__PURE__*/_react.default.createElement("h1", {
        className: "reddit_widget__header"
      }, "Latest posts in ", /*#__PURE__*/_react.default.createElement("a", {
        href: "https://reddit.com/r/".concat(subreddit),
        rel: "noopener noreferrer"
      }, "/r/", subreddit)), /*#__PURE__*/_react.default.createElement("div", {
        className: "reddit_widget__inner"
      }, loading && "Loading...", error && error, !!data.length && data.filter(nonStickiedOnly).map(renderPost)), /*#__PURE__*/_react.default.createElement("p", {
        className: "reddit_widget__powered_by"
      }, "This widget is powered by", " ", /*#__PURE__*/_react.default.createElement("a", {
        href: "https://javascriptpros.com",
        rel: "noopener noreferrer",
        target: "_blank"
      }, "JavaScriptPros.com")));
    }
    var _default = Pics;
    exports.default = _default;
  }, {
    "react": "ccIB",
    "../App.css": "Psww",
    "react-helmet": "Aa3K"
  }]
}, {}, ["pZfp"], null);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59870" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../widgets/Pics.js"], null)
//# sourceMappingURL=/Pics.0888cbf1.js.map
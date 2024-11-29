function xh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const l = Object.getOwnPropertyDescriptor(r, i);
          l &&
            Object.defineProperty(
              e,
              i,
              l.get ? l : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
var Hu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function ef(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var tf = { exports: {} },
  vl = {},
  nf = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = Symbol.for("react.element"),
  Sh = Symbol.for("react.portal"),
  Eh = Symbol.for("react.fragment"),
  Ch = Symbol.for("react.strict_mode"),
  Ih = Symbol.for("react.profiler"),
  Ph = Symbol.for("react.provider"),
  Th = Symbol.for("react.context"),
  _h = Symbol.for("react.forward_ref"),
  Nh = Symbol.for("react.suspense"),
  zh = Symbol.for("react.memo"),
  Lh = Symbol.for("react.lazy"),
  Wu = Symbol.iterator;
function Rh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wu && e[Wu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var rf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  lf = Object.assign,
  of = {};
function nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = of),
    (this.updater = n || rf);
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function af() {}
af.prototype = nr.prototype;
function Na(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = of),
    (this.updater = n || rf);
}
var za = (Na.prototype = new af());
za.constructor = Na;
lf(za, nr.prototype);
za.isPureReactComponent = !0;
var Qu = Array.isArray,
  uf = Object.prototype.hasOwnProperty,
  La = { current: null },
  sf = { key: !0, ref: !0, __self: !0, __source: !0 };
function cf(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      uf.call(t, r) && !sf.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ni,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: La.current,
  };
}
function Oh(e, t) {
  return {
    $$typeof: ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ra(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function Ah(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ku = /\/+/g;
function Bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ah("" + e.key)
    : t.toString(36);
}
function zi(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (l) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ni:
          case Sh:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Bl(o, 0) : r),
      Qu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ku, "$&/") + "/"),
          zi(i, t, n, "", function (s) {
            return s;
          }))
        : i != null &&
          (Ra(i) &&
            (i = Oh(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ku, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Qu(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var u = r + Bl(l, a);
      o += zi(l, t, n, u, i);
    }
  else if (((u = Rh(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + Bl(l, a++)), (o += zi(l, t, n, u, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ci(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    zi(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function bh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Re = { current: null },
  Li = { transition: null },
  Mh = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: Li,
    ReactCurrentOwner: La,
  };
function ff() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
  map: ci,
  forEach: function (e, t, n) {
    ci(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ci(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ci(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ra(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = nr;
$.Fragment = Eh;
$.Profiler = Ih;
$.PureComponent = Na;
$.StrictMode = Ch;
$.Suspense = Nh;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mh;
$.act = ff;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = lf({}, e.props),
    i = e.key,
    l = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (o = La.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      uf.call(t, u) &&
        !sf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: ni, type: e.type, key: i, ref: l, props: r, _owner: o };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: Th,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ph, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = cf;
$.createFactory = function (e) {
  var t = cf.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: _h, render: e };
};
$.isValidElement = Ra;
$.lazy = function (e) {
  return { $$typeof: Lh, _payload: { _status: -1, _result: e }, _init: bh };
};
$.memo = function (e, t) {
  return { $$typeof: zh, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = Li.transition;
  Li.transition = {};
  try {
    e();
  } finally {
    Li.transition = t;
  }
};
$.unstable_act = ff;
$.useCallback = function (e, t) {
  return Re.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Re.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Re.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Re.current.useEffect(e, t);
};
$.useId = function () {
  return Re.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Re.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Re.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Re.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Re.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Re.current.useRef(e);
};
$.useState = function (e) {
  return Re.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Re.current.useTransition();
};
$.version = "18.3.1";
nf.exports = $;
var O = nf.exports;
const Dh = ef(O),
  Fh = xh({ __proto__: null, default: Dh }, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jh = O,
  Bh = Symbol.for("react.element"),
  Uh = Symbol.for("react.fragment"),
  Vh = Object.prototype.hasOwnProperty,
  $h = jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hh = { key: !0, ref: !0, __self: !0, __source: !0 };
function df(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Vh.call(t, r) && !Hh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Bh,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: $h.current,
  };
}
vl.Fragment = Uh;
vl.jsx = df;
vl.jsxs = df;
tf.exports = vl;
var M = tf.exports,
  pf = { exports: {} },
  qe = {},
  hf = { exports: {} },
  mf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, F) {
    var g = z.length;
    z.push(F);
    e: for (; 0 < g; ) {
      var Q = (g - 1) >>> 1,
        G = z[Q];
      if (0 < i(G, F)) (z[Q] = F), (z[g] = G), (g = Q);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var F = z[0],
      g = z.pop();
    if (g !== F) {
      z[0] = g;
      e: for (var Q = 0, G = z.length, v = G >>> 1; Q < v; ) {
        var ge = 2 * (Q + 1) - 1,
          it = z[ge],
          ne = ge + 1,
          pt = z[ne];
        if (0 > i(it, g))
          ne < G && 0 > i(pt, it)
            ? ((z[Q] = pt), (z[ne] = g), (Q = ne))
            : ((z[Q] = it), (z[ge] = g), (Q = ge));
        else if (ne < G && 0 > i(pt, g)) (z[Q] = pt), (z[ne] = g), (Q = ne);
        else break e;
      }
    }
    return F;
  }
  function i(z, F) {
    var g = z.sortIndex - F.sortIndex;
    return g !== 0 ? g : z.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    c = 1,
    f = null,
    p = 3,
    d = !1,
    w = !1,
    k = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(z) {
    for (var F = n(s); F !== null; ) {
      if (F.callback === null) r(s);
      else if (F.startTime <= z)
        r(s), (F.sortIndex = F.expirationTime), t(u, F);
      else break;
      F = n(s);
    }
  }
  function S(z) {
    if (((k = !1), y(z), !w))
      if (n(u) !== null) (w = !0), pe(I);
      else {
        var F = n(s);
        F !== null && fe(S, F.startTime - z);
      }
  }
  function I(z, F) {
    (w = !1), k && ((k = !1), h(L), (L = -1)), (d = !0);
    var g = p;
    try {
      for (
        y(F), f = n(u);
        f !== null && (!(f.expirationTime > F) || (z && !b()));

      ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var G = Q(f.expirationTime <= F);
          (F = e.unstable_now()),
            typeof G == "function" ? (f.callback = G) : f === n(u) && r(u),
            y(F);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var v = !0;
      else {
        var ge = n(s);
        ge !== null && fe(S, ge.startTime - F), (v = !1);
      }
      return v;
    } finally {
      (f = null), (p = g), (d = !1);
    }
  }
  var x = !1,
    _ = null,
    L = -1,
    j = 5,
    A = -1;
  function b() {
    return !(e.unstable_now() - A < j);
  }
  function D() {
    if (_ !== null) {
      var z = e.unstable_now();
      A = z;
      var F = !0;
      try {
        F = _(!0, z);
      } finally {
        F ? Y() : ((x = !1), (_ = null));
      }
    } else x = !1;
  }
  var Y;
  if (typeof m == "function")
    Y = function () {
      m(D);
    };
  else if (typeof MessageChannel < "u") {
    var oe = new MessageChannel(),
      H = oe.port2;
    (oe.port1.onmessage = D),
      (Y = function () {
        H.postMessage(null);
      });
  } else
    Y = function () {
      E(D, 0);
    };
  function pe(z) {
    (_ = z), x || ((x = !0), Y());
  }
  function fe(z, F) {
    L = E(function () {
      z(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || d || ((w = !0), pe(I));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (z) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = p;
      }
      var g = p;
      p = F;
      try {
        return z();
      } finally {
        p = g;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, F) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var g = p;
      p = z;
      try {
        return F();
      } finally {
        p = g;
      }
    }),
    (e.unstable_scheduleCallback = function (z, F, g) {
      var Q = e.unstable_now();
      switch (
        (typeof g == "object" && g !== null
          ? ((g = g.delay), (g = typeof g == "number" && 0 < g ? Q + g : Q))
          : (g = Q),
        z)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = g + G),
        (z = {
          id: c++,
          callback: F,
          priorityLevel: z,
          startTime: g,
          expirationTime: G,
          sortIndex: -1,
        }),
        g > Q
          ? ((z.sortIndex = g),
            t(s, z),
            n(u) === null &&
              z === n(s) &&
              (k ? (h(L), (L = -1)) : (k = !0), fe(S, g - Q)))
          : ((z.sortIndex = G), t(u, z), w || d || ((w = !0), pe(I))),
        z
      );
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (z) {
      var F = p;
      return function () {
        var g = p;
        p = F;
        try {
          return z.apply(this, arguments);
        } finally {
          p = g;
        }
      };
    });
})(mf);
hf.exports = mf;
var Wh = hf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qh = O,
  Ke = Wh;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var gf = new Set(),
  Mr = {};
function kn(e, t) {
  Yn(e, t), Yn(e + "Capture", t);
}
function Yn(e, t) {
  for (Mr[e] = t, e = 0; e < t.length; e++) gf.add(t[e]);
}
var Nt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Io = Object.prototype.hasOwnProperty,
  Kh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  qu = {},
  Yu = {};
function qh(e) {
  return Io.call(Yu, e)
    ? !0
    : Io.call(qu, e)
    ? !1
    : Kh.test(e)
    ? (Yu[e] = !0)
    : ((qu[e] = !0), !1);
}
function Yh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Xh(e, t, n, r) {
  if (t === null || typeof t > "u" || Yh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Oe(e, t, n, r, i, l, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Oa = /[\-:]([a-z])/g;
function Aa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Oa, Aa);
    Ce[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Oa, Aa);
    Ce[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Oa, Aa);
  Ce[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ba(e, t, n, r) {
  var i = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Xh(t, n, i, r) && (n = null),
    r || i === null
      ? qh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ot = Qh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fi = Symbol.for("react.element"),
  Nn = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  Ma = Symbol.for("react.strict_mode"),
  Po = Symbol.for("react.profiler"),
  yf = Symbol.for("react.provider"),
  vf = Symbol.for("react.context"),
  Da = Symbol.for("react.forward_ref"),
  To = Symbol.for("react.suspense"),
  _o = Symbol.for("react.suspense_list"),
  Fa = Symbol.for("react.memo"),
  Dt = Symbol.for("react.lazy"),
  wf = Symbol.for("react.offscreen"),
  Xu = Symbol.iterator;
function fr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xu && e[Xu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  Ul;
function xr(e) {
  if (Ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ul = (t && t[1]) || "";
    }
  return (
    `
` +
    Ul +
    e
  );
}
var Vl = !1;
function $l(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          l = r.stack.split(`
`),
          o = i.length - 1,
          a = l.length - 1;
        1 <= o && 0 <= a && i[o] !== l[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== l[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== l[a])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? xr(e) : "";
}
function Gh(e) {
  switch (e.tag) {
    case 5:
      return xr(e.type);
    case 16:
      return xr("Lazy");
    case 13:
      return xr("Suspense");
    case 19:
      return xr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $l(e.type, !1)), e;
    case 11:
      return (e = $l(e.type.render, !1)), e;
    case 1:
      return (e = $l(e.type, !0)), e;
    default:
      return "";
  }
}
function No(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case Nn:
      return "Portal";
    case Po:
      return "Profiler";
    case Ma:
      return "StrictMode";
    case To:
      return "Suspense";
    case _o:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vf:
        return (e.displayName || "Context") + ".Consumer";
      case yf:
        return (e._context.displayName || "Context") + ".Provider";
      case Da:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Fa:
        return (
          (t = e.displayName || null), t !== null ? t : No(e.type) || "Memo"
        );
      case Dt:
        (t = e._payload), (e = e._init);
        try {
          return No(e(t));
        } catch {}
    }
  return null;
}
function Jh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return No(t);
    case 8:
      return t === Ma ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Jt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function kf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Zh(e) {
  var t = kf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), l.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function di(e) {
  e._valueTracker || (e._valueTracker = Zh(e));
}
function xf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = kf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zo(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Gu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Sf(e, t) {
  (t = t.checked), t != null && ba(e, "checked", t, !1);
}
function Lo(e, t) {
  Sf(e, t);
  var n = Jt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ro(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ro(e, t.type, Jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ju(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ro(e, t, n) {
  (t !== "number" || Hi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sr = Array.isArray;
function Un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Jt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Oo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Sr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Jt(n) };
}
function Ef(e, t) {
  var n = Jt(t.value),
    r = Jt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function es(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ao(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Cf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var pi,
  If = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        pi = pi || document.createElement("div"),
          pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = pi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ir = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  em = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ir).forEach(function (e) {
  em.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ir[t] = Ir[e]);
  });
});
function Pf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ir.hasOwnProperty(e) && Ir[e])
    ? ("" + t).trim()
    : t + "px";
}
function Tf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Pf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var tm = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function bo(e, t) {
  if (t) {
    if (tm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Mo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Do = null;
function ja(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fo = null,
  Vn = null,
  $n = null;
function ts(e) {
  if ((e = li(e))) {
    if (typeof Fo != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = El(t)), Fo(e.stateNode, e.type, t));
  }
}
function _f(e) {
  Vn ? ($n ? $n.push(e) : ($n = [e])) : (Vn = e);
}
function Nf() {
  if (Vn) {
    var e = Vn,
      t = $n;
    if ((($n = Vn = null), ts(e), t)) for (e = 0; e < t.length; e++) ts(t[e]);
  }
}
function zf(e, t) {
  return e(t);
}
function Lf() {}
var Hl = !1;
function Rf(e, t, n) {
  if (Hl) return e(t, n);
  Hl = !0;
  try {
    return zf(e, t, n);
  } finally {
    (Hl = !1), (Vn !== null || $n !== null) && (Lf(), Nf());
  }
}
function Fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = El(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var jo = !1;
if (Nt)
  try {
    var dr = {};
    Object.defineProperty(dr, "passive", {
      get: function () {
        jo = !0;
      },
    }),
      window.addEventListener("test", dr, dr),
      window.removeEventListener("test", dr, dr);
  } catch {
    jo = !1;
  }
function nm(e, t, n, r, i, l, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var Pr = !1,
  Wi = null,
  Qi = !1,
  Bo = null,
  rm = {
    onError: function (e) {
      (Pr = !0), (Wi = e);
    },
  };
function im(e, t, n, r, i, l, o, a, u) {
  (Pr = !1), (Wi = null), nm.apply(rm, arguments);
}
function lm(e, t, n, r, i, l, o, a, u) {
  if ((im.apply(this, arguments), Pr)) {
    if (Pr) {
      var s = Wi;
      (Pr = !1), (Wi = null);
    } else throw Error(P(198));
    Qi || ((Qi = !0), (Bo = s));
  }
}
function xn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Of(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ns(e) {
  if (xn(e) !== e) throw Error(P(188));
}
function om(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = xn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return ns(i), e;
        if (l === r) return ns(i), t;
        l = l.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = l.child; a; ) {
          if (a === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Af(e) {
  return (e = om(e)), e !== null ? bf(e) : null;
}
function bf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mf = Ke.unstable_scheduleCallback,
  rs = Ke.unstable_cancelCallback,
  am = Ke.unstable_shouldYield,
  um = Ke.unstable_requestPaint,
  de = Ke.unstable_now,
  sm = Ke.unstable_getCurrentPriorityLevel,
  Ba = Ke.unstable_ImmediatePriority,
  Df = Ke.unstable_UserBlockingPriority,
  Ki = Ke.unstable_NormalPriority,
  cm = Ke.unstable_LowPriority,
  Ff = Ke.unstable_IdlePriority,
  wl = null,
  wt = null;
function fm(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function")
    try {
      wt.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ct = Math.clz32 ? Math.clz32 : hm,
  dm = Math.log,
  pm = Math.LN2;
function hm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((dm(e) / pm) | 0)) | 0;
}
var hi = 64,
  mi = 4194304;
function Er(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function qi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Er(a)) : ((l &= o), l !== 0 && (r = Er(l)));
  } else (o = n & ~i), o !== 0 ? (r = Er(o)) : l !== 0 && (r = Er(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ct(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function mm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function gm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var o = 31 - ct(l),
      a = 1 << o,
      u = i[o];
    u === -1
      ? (!(a & n) || a & r) && (i[o] = mm(a, t))
      : u <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Uo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function jf() {
  var e = hi;
  return (hi <<= 1), !(hi & 4194240) && (hi = 64), e;
}
function Wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ct(t)),
    (e[t] = n);
}
function ym(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ct(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Ua(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var X = 0;
function Bf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Uf,
  Va,
  Vf,
  $f,
  Hf,
  Vo = !1,
  gi = [],
  Ht = null,
  Wt = null,
  Qt = null,
  jr = new Map(),
  Br = new Map(),
  jt = [],
  vm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function is(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Br.delete(t.pointerId);
  }
}
function pr(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = li(t)), t !== null && Va(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function wm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ht = pr(Ht, e, t, n, r, i)), !0;
    case "dragenter":
      return (Wt = pr(Wt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Qt = pr(Qt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return jr.set(l, pr(jr.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), Br.set(l, pr(Br.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Wf(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Of(n)), t !== null)) {
          (e.blockedOn = t),
            Hf(e.priority, function () {
              Vf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ri(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $o(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Do = r), n.target.dispatchEvent(r), (Do = null);
    } else return (t = li(n)), t !== null && Va(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ls(e, t, n) {
  Ri(e) && n.delete(t);
}
function km() {
  (Vo = !1),
    Ht !== null && Ri(Ht) && (Ht = null),
    Wt !== null && Ri(Wt) && (Wt = null),
    Qt !== null && Ri(Qt) && (Qt = null),
    jr.forEach(ls),
    Br.forEach(ls);
}
function hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Vo ||
      ((Vo = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, km)));
}
function Ur(e) {
  function t(i) {
    return hr(i, e);
  }
  if (0 < gi.length) {
    hr(gi[0], e);
    for (var n = 1; n < gi.length; n++) {
      var r = gi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ht !== null && hr(Ht, e),
      Wt !== null && hr(Wt, e),
      Qt !== null && hr(Qt, e),
      jr.forEach(t),
      Br.forEach(t),
      n = 0;
    n < jt.length;
    n++
  )
    (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
    Wf(n), n.blockedOn === null && jt.shift();
}
var Hn = Ot.ReactCurrentBatchConfig,
  Yi = !0;
function xm(e, t, n, r) {
  var i = X,
    l = Hn.transition;
  Hn.transition = null;
  try {
    (X = 1), $a(e, t, n, r);
  } finally {
    (X = i), (Hn.transition = l);
  }
}
function Sm(e, t, n, r) {
  var i = X,
    l = Hn.transition;
  Hn.transition = null;
  try {
    (X = 4), $a(e, t, n, r);
  } finally {
    (X = i), (Hn.transition = l);
  }
}
function $a(e, t, n, r) {
  if (Yi) {
    var i = $o(e, t, n, r);
    if (i === null) to(e, t, r, Xi, n), is(e, r);
    else if (wm(i, e, t, n, r)) r.stopPropagation();
    else if ((is(e, r), t & 4 && -1 < vm.indexOf(e))) {
      for (; i !== null; ) {
        var l = li(i);
        if (
          (l !== null && Uf(l),
          (l = $o(e, t, n, r)),
          l === null && to(e, t, r, Xi, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else to(e, t, r, null, n);
  }
}
var Xi = null;
function $o(e, t, n, r) {
  if (((Xi = null), (e = ja(r)), (e = sn(e)), e !== null))
    if (((t = xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Of(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xi = e), null;
}
function Qf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (sm()) {
        case Ba:
          return 1;
        case Df:
          return 4;
        case Ki:
        case cm:
          return 16;
        case Ff:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null,
  Ha = null,
  Oi = null;
function Kf() {
  if (Oi) return Oi;
  var e,
    t = Ha,
    n = t.length,
    r,
    i = "value" in Ut ? Ut.value : Ut.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
  return (Oi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ai(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yi() {
  return !0;
}
function os() {
  return !1;
}
function Ye(e) {
  function t(n, r, i, l, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? yi
        : os),
      (this.isPropagationStopped = os),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yi));
      },
      persist: function () {},
      isPersistent: yi,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wa = Ye(rr),
  ii = se({}, rr, { view: 0, detail: 0 }),
  Em = Ye(ii),
  Ql,
  Kl,
  mr,
  kl = se({}, ii, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Qa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mr &&
            (mr && e.type === "mousemove"
              ? ((Ql = e.screenX - mr.screenX), (Kl = e.screenY - mr.screenY))
              : (Kl = Ql = 0),
            (mr = e)),
          Ql);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Kl;
    },
  }),
  as = Ye(kl),
  Cm = se({}, kl, { dataTransfer: 0 }),
  Im = Ye(Cm),
  Pm = se({}, ii, { relatedTarget: 0 }),
  ql = Ye(Pm),
  Tm = se({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _m = Ye(Tm),
  Nm = se({}, rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  zm = Ye(Nm),
  Lm = se({}, rr, { data: 0 }),
  us = Ye(Lm),
  Rm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Om = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Am = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function bm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Am[e]) ? !!t[e] : !1;
}
function Qa() {
  return bm;
}
var Mm = se({}, ii, {
    key: function (e) {
      if (e.key) {
        var t = Rm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ai(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Om[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qa,
    charCode: function (e) {
      return e.type === "keypress" ? Ai(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ai(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Dm = Ye(Mm),
  Fm = se({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ss = Ye(Fm),
  jm = se({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qa,
  }),
  Bm = Ye(jm),
  Um = se({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vm = Ye(Um),
  $m = se({}, kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Hm = Ye($m),
  Wm = [9, 13, 27, 32],
  Ka = Nt && "CompositionEvent" in window,
  Tr = null;
Nt && "documentMode" in document && (Tr = document.documentMode);
var Qm = Nt && "TextEvent" in window && !Tr,
  qf = Nt && (!Ka || (Tr && 8 < Tr && 11 >= Tr)),
  cs = " ",
  fs = !1;
function Yf(e, t) {
  switch (e) {
    case "keyup":
      return Wm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function Km(e, t) {
  switch (e) {
    case "compositionend":
      return Xf(t);
    case "keypress":
      return t.which !== 32 ? null : ((fs = !0), cs);
    case "textInput":
      return (e = t.data), e === cs && fs ? null : e;
    default:
      return null;
  }
}
function qm(e, t) {
  if (Ln)
    return e === "compositionend" || (!Ka && Yf(e, t))
      ? ((e = Kf()), (Oi = Ha = Ut = null), (Ln = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return qf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ym = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ym[e.type] : t === "textarea";
}
function Gf(e, t, n, r) {
  _f(r),
    (t = Gi(t, "onChange")),
    0 < t.length &&
      ((n = new Wa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _r = null,
  Vr = null;
function Xm(e) {
  ud(e, 0);
}
function xl(e) {
  var t = An(e);
  if (xf(t)) return e;
}
function Gm(e, t) {
  if (e === "change") return t;
}
var Jf = !1;
if (Nt) {
  var Yl;
  if (Nt) {
    var Xl = "oninput" in document;
    if (!Xl) {
      var ps = document.createElement("div");
      ps.setAttribute("oninput", "return;"),
        (Xl = typeof ps.oninput == "function");
    }
    Yl = Xl;
  } else Yl = !1;
  Jf = Yl && (!document.documentMode || 9 < document.documentMode);
}
function hs() {
  _r && (_r.detachEvent("onpropertychange", Zf), (Vr = _r = null));
}
function Zf(e) {
  if (e.propertyName === "value" && xl(Vr)) {
    var t = [];
    Gf(t, Vr, e, ja(e)), Rf(Xm, t);
  }
}
function Jm(e, t, n) {
  e === "focusin"
    ? (hs(), (_r = t), (Vr = n), _r.attachEvent("onpropertychange", Zf))
    : e === "focusout" && hs();
}
function Zm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xl(Vr);
}
function eg(e, t) {
  if (e === "click") return xl(t);
}
function tg(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function ng(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : ng;
function $r(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Io.call(t, i) || !dt(e[i], t[i])) return !1;
  }
  return !0;
}
function ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gs(e, t) {
  var n = ms(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ms(n);
  }
}
function ed(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ed(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function td() {
  for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hi(e.document);
  }
  return t;
}
function qa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function rg(e) {
  var t = td(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ed(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && qa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = gs(n, l));
        var o = gs(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ig = Nt && "documentMode" in document && 11 >= document.documentMode,
  Rn = null,
  Ho = null,
  Nr = null,
  Wo = !1;
function ys(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wo ||
    Rn == null ||
    Rn !== Hi(r) ||
    ((r = Rn),
    "selectionStart" in r && qa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Nr && $r(Nr, r)) ||
      ((Nr = r),
      (r = Gi(Ho, "onSelect")),
      0 < r.length &&
        ((t = new Wa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Rn))));
}
function vi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var On = {
    animationend: vi("Animation", "AnimationEnd"),
    animationiteration: vi("Animation", "AnimationIteration"),
    animationstart: vi("Animation", "AnimationStart"),
    transitionend: vi("Transition", "TransitionEnd"),
  },
  Gl = {},
  nd = {};
Nt &&
  ((nd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete On.animationend.animation,
    delete On.animationiteration.animation,
    delete On.animationstart.animation),
  "TransitionEvent" in window || delete On.transitionend.transition);
function Sl(e) {
  if (Gl[e]) return Gl[e];
  if (!On[e]) return e;
  var t = On[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in nd) return (Gl[e] = t[n]);
  return e;
}
var rd = Sl("animationend"),
  id = Sl("animationiteration"),
  ld = Sl("animationstart"),
  od = Sl("transitionend"),
  ad = new Map(),
  vs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function en(e, t) {
  ad.set(e, t), kn(t, [e]);
}
for (var Jl = 0; Jl < vs.length; Jl++) {
  var Zl = vs[Jl],
    lg = Zl.toLowerCase(),
    og = Zl[0].toUpperCase() + Zl.slice(1);
  en(lg, "on" + og);
}
en(rd, "onAnimationEnd");
en(id, "onAnimationIteration");
en(ld, "onAnimationStart");
en("dblclick", "onDoubleClick");
en("focusin", "onFocus");
en("focusout", "onBlur");
en(od, "onTransitionEnd");
Yn("onMouseEnter", ["mouseout", "mouseover"]);
Yn("onMouseLeave", ["mouseout", "mouseover"]);
Yn("onPointerEnter", ["pointerout", "pointerover"]);
Yn("onPointerLeave", ["pointerout", "pointerover"]);
kn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
kn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
kn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
kn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Cr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ag = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
function ws(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), lm(r, t, void 0, e), (e.currentTarget = null);
}
function ud(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== l && i.isPropagationStopped())) break e;
          ws(i, a, s), (l = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== l && i.isPropagationStopped())
          )
            break e;
          ws(i, a, s), (l = u);
        }
    }
  }
  if (Qi) throw ((e = Bo), (Qi = !1), (Bo = null), e);
}
function re(e, t) {
  var n = t[Xo];
  n === void 0 && (n = t[Xo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (sd(t, e, 2, !1), n.add(r));
}
function eo(e, t, n) {
  var r = 0;
  t && (r |= 4), sd(n, e, r, t);
}
var wi = "_reactListening" + Math.random().toString(36).slice(2);
function Hr(e) {
  if (!e[wi]) {
    (e[wi] = !0),
      gf.forEach(function (n) {
        n !== "selectionchange" && (ag.has(n) || eo(n, !1, e), eo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wi] || ((t[wi] = !0), eo("selectionchange", !1, t));
  }
}
function sd(e, t, n, r) {
  switch (Qf(t)) {
    case 1:
      var i = xm;
      break;
    case 4:
      i = Sm;
      break;
    default:
      i = $a;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !jo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function to(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = sn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = l = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Rf(function () {
    var s = l,
      c = ja(n),
      f = [];
    e: {
      var p = ad.get(e);
      if (p !== void 0) {
        var d = Wa,
          w = e;
        switch (e) {
          case "keypress":
            if (Ai(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = Dm;
            break;
          case "focusin":
            (w = "focus"), (d = ql);
            break;
          case "focusout":
            (w = "blur"), (d = ql);
            break;
          case "beforeblur":
          case "afterblur":
            d = ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = as;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = Im;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = Bm;
            break;
          case rd:
          case id:
          case ld:
            d = _m;
            break;
          case od:
            d = Vm;
            break;
          case "scroll":
            d = Em;
            break;
          case "wheel":
            d = Hm;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = zm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = ss;
        }
        var k = (t & 4) !== 0,
          E = !k && e === "scroll",
          h = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var m = s, y; m !== null; ) {
          y = m;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              h !== null && ((S = Fr(m, h)), S != null && k.push(Wr(m, S, y)))),
            E)
          )
            break;
          m = m.return;
        }
        0 < k.length &&
          ((p = new d(p, w, null, n, c)), f.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (d = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Do &&
            (w = n.relatedTarget || n.fromElement) &&
            (sn(w) || w[zt]))
        )
          break e;
        if (
          (d || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          d
            ? ((w = n.relatedTarget || n.toElement),
              (d = s),
              (w = w ? sn(w) : null),
              w !== null &&
                ((E = xn(w)), w !== E || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((d = null), (w = s)),
          d !== w)
        ) {
          if (
            ((k = as),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = ss),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (m = "pointer")),
            (E = d == null ? p : An(d)),
            (y = w == null ? p : An(w)),
            (p = new k(S, m + "leave", d, n, c)),
            (p.target = E),
            (p.relatedTarget = y),
            (S = null),
            sn(c) === s &&
              ((k = new k(h, m + "enter", w, n, c)),
              (k.target = y),
              (k.relatedTarget = E),
              (S = k)),
            (E = S),
            d && w)
          )
            t: {
              for (k = d, h = w, m = 0, y = k; y; y = Tn(y)) m++;
              for (y = 0, S = h; S; S = Tn(S)) y++;
              for (; 0 < m - y; ) (k = Tn(k)), m--;
              for (; 0 < y - m; ) (h = Tn(h)), y--;
              for (; m--; ) {
                if (k === h || (h !== null && k === h.alternate)) break t;
                (k = Tn(k)), (h = Tn(h));
              }
              k = null;
            }
          else k = null;
          d !== null && ks(f, p, d, k, !1),
            w !== null && E !== null && ks(f, E, w, k, !0);
        }
      }
      e: {
        if (
          ((p = s ? An(s) : window),
          (d = p.nodeName && p.nodeName.toLowerCase()),
          d === "select" || (d === "input" && p.type === "file"))
        )
          var I = Gm;
        else if (ds(p))
          if (Jf) I = tg;
          else {
            I = Zm;
            var x = Jm;
          }
        else
          (d = p.nodeName) &&
            d.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (I = eg);
        if (I && (I = I(e, s))) {
          Gf(f, I, n, c);
          break e;
        }
        x && x(e, p, s),
          e === "focusout" &&
            (x = p._wrapperState) &&
            x.controlled &&
            p.type === "number" &&
            Ro(p, "number", p.value);
      }
      switch (((x = s ? An(s) : window), e)) {
        case "focusin":
          (ds(x) || x.contentEditable === "true") &&
            ((Rn = x), (Ho = s), (Nr = null));
          break;
        case "focusout":
          Nr = Ho = Rn = null;
          break;
        case "mousedown":
          Wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Wo = !1), ys(f, n, c);
          break;
        case "selectionchange":
          if (ig) break;
        case "keydown":
        case "keyup":
          ys(f, n, c);
      }
      var _;
      if (Ka)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Ln
          ? Yf(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (qf &&
          n.locale !== "ko" &&
          (Ln || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Ln && (_ = Kf())
            : ((Ut = c),
              (Ha = "value" in Ut ? Ut.value : Ut.textContent),
              (Ln = !0))),
        (x = Gi(s, L)),
        0 < x.length &&
          ((L = new us(L, e, null, n, c)),
          f.push({ event: L, listeners: x }),
          _ ? (L.data = _) : ((_ = Xf(n)), _ !== null && (L.data = _)))),
        (_ = Qm ? Km(e, n) : qm(e, n)) &&
          ((s = Gi(s, "onBeforeInput")),
          0 < s.length &&
            ((c = new us("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: s }),
            (c.data = _)));
    }
    ud(f, t);
  });
}
function Wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Fr(e, n)),
      l != null && r.unshift(Wr(e, l, i)),
      (l = Fr(e, t)),
      l != null && r.push(Wr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function Tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ks(e, t, n, r, i) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      i
        ? ((u = Fr(n, l)), u != null && o.unshift(Wr(n, u, a)))
        : i || ((u = Fr(n, l)), u != null && o.push(Wr(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var ug = /\r\n?/g,
  sg = /\u0000|\uFFFD/g;
function xs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ug,
      `
`
    )
    .replace(sg, "");
}
function ki(e, t, n) {
  if (((t = xs(t)), xs(e) !== t && n)) throw Error(P(425));
}
function Ji() {}
var Qo = null,
  Ko = null;
function qo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Yo = typeof setTimeout == "function" ? setTimeout : void 0,
  cg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ss = typeof Promise == "function" ? Promise : void 0,
  fg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ss < "u"
      ? function (e) {
          return Ss.resolve(null).then(e).catch(dg);
        }
      : Yo;
function dg(e) {
  setTimeout(function () {
    throw e;
  });
}
function no(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ur(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ur(t);
}
function Kt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Es(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ir = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + ir,
  Qr = "__reactProps$" + ir,
  zt = "__reactContainer$" + ir,
  Xo = "__reactEvents$" + ir,
  pg = "__reactListeners$" + ir,
  hg = "__reactHandles$" + ir;
function sn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Es(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = Es(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function li(e) {
  return (
    (e = e[yt] || e[zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function El(e) {
  return e[Qr] || null;
}
var Go = [],
  bn = -1;
function tn(e) {
  return { current: e };
}
function ie(e) {
  0 > bn || ((e.current = Go[bn]), (Go[bn] = null), bn--);
}
function ee(e, t) {
  bn++, (Go[bn] = e.current), (e.current = t);
}
var Zt = {},
  _e = tn(Zt),
  De = tn(!1),
  mn = Zt;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Zi() {
  ie(De), ie(_e);
}
function Cs(e, t, n) {
  if (_e.current !== Zt) throw Error(P(168));
  ee(_e, t), ee(De, n);
}
function cd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, Jh(e) || "Unknown", i));
  return se({}, n, r);
}
function el(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zt),
    (mn = _e.current),
    ee(_e, e),
    ee(De, De.current),
    !0
  );
}
function Is(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = cd(e, t, mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(De),
      ie(_e),
      ee(_e, e))
    : ie(De),
    ee(De, n);
}
var It = null,
  Cl = !1,
  ro = !1;
function fd(e) {
  It === null ? (It = [e]) : It.push(e);
}
function mg(e) {
  (Cl = !0), fd(e);
}
function nn() {
  if (!ro && It !== null) {
    ro = !0;
    var e = 0,
      t = X;
    try {
      var n = It;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (It = null), (Cl = !1);
    } catch (i) {
      throw (It !== null && (It = It.slice(e + 1)), Mf(Ba, nn), i);
    } finally {
      (X = t), (ro = !1);
    }
  }
  return null;
}
var Mn = [],
  Dn = 0,
  tl = null,
  nl = 0,
  Xe = [],
  Ge = 0,
  gn = null,
  Pt = 1,
  Tt = "";
function on(e, t) {
  (Mn[Dn++] = nl), (Mn[Dn++] = tl), (tl = e), (nl = t);
}
function dd(e, t, n) {
  (Xe[Ge++] = Pt), (Xe[Ge++] = Tt), (Xe[Ge++] = gn), (gn = e);
  var r = Pt;
  e = Tt;
  var i = 32 - ct(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - ct(t) + i;
  if (30 < l) {
    var o = i - (i % 5);
    (l = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Pt = (1 << (32 - ct(t) + i)) | (n << i) | r),
      (Tt = l + e);
  } else (Pt = (1 << l) | (n << i) | r), (Tt = e);
}
function Ya(e) {
  e.return !== null && (on(e, 1), dd(e, 1, 0));
}
function Xa(e) {
  for (; e === tl; )
    (tl = Mn[--Dn]), (Mn[Dn] = null), (nl = Mn[--Dn]), (Mn[Dn] = null);
  for (; e === gn; )
    (gn = Xe[--Ge]),
      (Xe[Ge] = null),
      (Tt = Xe[--Ge]),
      (Xe[Ge] = null),
      (Pt = Xe[--Ge]),
      (Xe[Ge] = null);
}
var Qe = null,
  He = null,
  le = !1,
  st = null;
function pd(e, t) {
  var n = Ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ps(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Qe = e), (He = Kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Qe = e), (He = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: Pt, overflow: Tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Qe = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Jo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zo(e) {
  if (le) {
    var t = He;
    if (t) {
      var n = t;
      if (!Ps(e, t)) {
        if (Jo(e)) throw Error(P(418));
        t = Kt(n.nextSibling);
        var r = Qe;
        t && Ps(e, t)
          ? pd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Qe = e));
      }
    } else {
      if (Jo(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Qe = e);
    }
  }
}
function Ts(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Qe = e;
}
function xi(e) {
  if (e !== Qe) return !1;
  if (!le) return Ts(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !qo(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (Jo(e)) throw (hd(), Error(P(418)));
    for (; t; ) pd(e, t), (t = Kt(t.nextSibling));
  }
  if ((Ts(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = Qe ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function hd() {
  for (var e = He; e; ) e = Kt(e.nextSibling);
}
function Gn() {
  (He = Qe = null), (le = !1);
}
function Ga(e) {
  st === null ? (st = [e]) : st.push(e);
}
var gg = Ot.ReactCurrentBatchConfig;
function gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[l] : (a[l] = o);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Si(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _s(e) {
  var t = e._init;
  return t(e._payload);
}
function md(e) {
  function t(h, m) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [m]), (h.flags |= 16)) : y.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function i(h, m) {
    return (h = Gt(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function l(h, m, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((h.flags |= 2), m) : y)
            : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, m, y, S) {
    return m === null || m.tag !== 6
      ? ((m = co(y, h.mode, S)), (m.return = h), m)
      : ((m = i(m, y)), (m.return = h), m);
  }
  function u(h, m, y, S) {
    var I = y.type;
    return I === zn
      ? c(h, m, y.props.children, S, y.key)
      : m !== null &&
        (m.elementType === I ||
          (typeof I == "object" &&
            I !== null &&
            I.$$typeof === Dt &&
            _s(I) === m.type))
      ? ((S = i(m, y.props)), (S.ref = gr(h, m, y)), (S.return = h), S)
      : ((S = Ui(y.type, y.key, y.props, null, h.mode, S)),
        (S.ref = gr(h, m, y)),
        (S.return = h),
        S);
  }
  function s(h, m, y, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = fo(y, h.mode, S)), (m.return = h), m)
      : ((m = i(m, y.children || [])), (m.return = h), m);
  }
  function c(h, m, y, S, I) {
    return m === null || m.tag !== 7
      ? ((m = pn(y, h.mode, S, I)), (m.return = h), m)
      : ((m = i(m, y)), (m.return = h), m);
  }
  function f(h, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = co("" + m, h.mode, y)), (m.return = h), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case fi:
          return (
            (y = Ui(m.type, m.key, m.props, null, h.mode, y)),
            (y.ref = gr(h, null, m)),
            (y.return = h),
            y
          );
        case Nn:
          return (m = fo(m, h.mode, y)), (m.return = h), m;
        case Dt:
          var S = m._init;
          return f(h, S(m._payload), y);
      }
      if (Sr(m) || fr(m))
        return (m = pn(m, h.mode, y, null)), (m.return = h), m;
      Si(h, m);
    }
    return null;
  }
  function p(h, m, y, S) {
    var I = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return I !== null ? null : a(h, m, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case fi:
          return y.key === I ? u(h, m, y, S) : null;
        case Nn:
          return y.key === I ? s(h, m, y, S) : null;
        case Dt:
          return (I = y._init), p(h, m, I(y._payload), S);
      }
      if (Sr(y) || fr(y)) return I !== null ? null : c(h, m, y, S, null);
      Si(h, y);
    }
    return null;
  }
  function d(h, m, y, S, I) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(y) || null), a(m, h, "" + S, I);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case fi:
          return (h = h.get(S.key === null ? y : S.key) || null), u(m, h, S, I);
        case Nn:
          return (h = h.get(S.key === null ? y : S.key) || null), s(m, h, S, I);
        case Dt:
          var x = S._init;
          return d(h, m, y, x(S._payload), I);
      }
      if (Sr(S) || fr(S)) return (h = h.get(y) || null), c(m, h, S, I, null);
      Si(m, S);
    }
    return null;
  }
  function w(h, m, y, S) {
    for (
      var I = null, x = null, _ = m, L = (m = 0), j = null;
      _ !== null && L < y.length;
      L++
    ) {
      _.index > L ? ((j = _), (_ = null)) : (j = _.sibling);
      var A = p(h, _, y[L], S);
      if (A === null) {
        _ === null && (_ = j);
        break;
      }
      e && _ && A.alternate === null && t(h, _),
        (m = l(A, m, L)),
        x === null ? (I = A) : (x.sibling = A),
        (x = A),
        (_ = j);
    }
    if (L === y.length) return n(h, _), le && on(h, L), I;
    if (_ === null) {
      for (; L < y.length; L++)
        (_ = f(h, y[L], S)),
          _ !== null &&
            ((m = l(_, m, L)), x === null ? (I = _) : (x.sibling = _), (x = _));
      return le && on(h, L), I;
    }
    for (_ = r(h, _); L < y.length; L++)
      (j = d(_, h, L, y[L], S)),
        j !== null &&
          (e && j.alternate !== null && _.delete(j.key === null ? L : j.key),
          (m = l(j, m, L)),
          x === null ? (I = j) : (x.sibling = j),
          (x = j));
    return (
      e &&
        _.forEach(function (b) {
          return t(h, b);
        }),
      le && on(h, L),
      I
    );
  }
  function k(h, m, y, S) {
    var I = fr(y);
    if (typeof I != "function") throw Error(P(150));
    if (((y = I.call(y)), y == null)) throw Error(P(151));
    for (
      var x = (I = null), _ = m, L = (m = 0), j = null, A = y.next();
      _ !== null && !A.done;
      L++, A = y.next()
    ) {
      _.index > L ? ((j = _), (_ = null)) : (j = _.sibling);
      var b = p(h, _, A.value, S);
      if (b === null) {
        _ === null && (_ = j);
        break;
      }
      e && _ && b.alternate === null && t(h, _),
        (m = l(b, m, L)),
        x === null ? (I = b) : (x.sibling = b),
        (x = b),
        (_ = j);
    }
    if (A.done) return n(h, _), le && on(h, L), I;
    if (_ === null) {
      for (; !A.done; L++, A = y.next())
        (A = f(h, A.value, S)),
          A !== null &&
            ((m = l(A, m, L)), x === null ? (I = A) : (x.sibling = A), (x = A));
      return le && on(h, L), I;
    }
    for (_ = r(h, _); !A.done; L++, A = y.next())
      (A = d(_, h, L, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && _.delete(A.key === null ? L : A.key),
          (m = l(A, m, L)),
          x === null ? (I = A) : (x.sibling = A),
          (x = A));
    return (
      e &&
        _.forEach(function (D) {
          return t(h, D);
        }),
      le && on(h, L),
      I
    );
  }
  function E(h, m, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === zn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case fi:
          e: {
            for (var I = y.key, x = m; x !== null; ) {
              if (x.key === I) {
                if (((I = y.type), I === zn)) {
                  if (x.tag === 7) {
                    n(h, x.sibling),
                      (m = i(x, y.props.children)),
                      (m.return = h),
                      (h = m);
                    break e;
                  }
                } else if (
                  x.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === Dt &&
                    _s(I) === x.type)
                ) {
                  n(h, x.sibling),
                    (m = i(x, y.props)),
                    (m.ref = gr(h, x, y)),
                    (m.return = h),
                    (h = m);
                  break e;
                }
                n(h, x);
                break;
              } else t(h, x);
              x = x.sibling;
            }
            y.type === zn
              ? ((m = pn(y.props.children, h.mode, S, y.key)),
                (m.return = h),
                (h = m))
              : ((S = Ui(y.type, y.key, y.props, null, h.mode, S)),
                (S.ref = gr(h, m, y)),
                (S.return = h),
                (h = S));
          }
          return o(h);
        case Nn:
          e: {
            for (x = y.key; m !== null; ) {
              if (m.key === x)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(h, m.sibling),
                    (m = i(m, y.children || [])),
                    (m.return = h),
                    (h = m);
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            (m = fo(y, h.mode, S)), (m.return = h), (h = m);
          }
          return o(h);
        case Dt:
          return (x = y._init), E(h, m, x(y._payload), S);
      }
      if (Sr(y)) return w(h, m, y, S);
      if (fr(y)) return k(h, m, y, S);
      Si(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = i(m, y)), (m.return = h), (h = m))
          : (n(h, m), (m = co(y, h.mode, S)), (m.return = h), (h = m)),
        o(h))
      : n(h, m);
  }
  return E;
}
var Jn = md(!0),
  gd = md(!1),
  rl = tn(null),
  il = null,
  Fn = null,
  Ja = null;
function Za() {
  Ja = Fn = il = null;
}
function eu(e) {
  var t = rl.current;
  ie(rl), (e._currentValue = t);
}
function ea(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Wn(e, t) {
  (il = e),
    (Ja = Fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function tt(e) {
  var t = e._currentValue;
  if (Ja !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
      if (il === null) throw Error(P(308));
      (Fn = e), (il.dependencies = { lanes: 0, firstContext: e });
    } else Fn = Fn.next = e;
  return t;
}
var cn = null;
function tu(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function yd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), tu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Lt(e, r)
  );
}
function Lt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ft = !1;
function nu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function vd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function _t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Lt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), tu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Lt(e, n)
  );
}
function bi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ua(e, n);
  }
}
function Ns(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = o) : (l = l.next = o), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ll(e, t, n, r) {
  var i = e.updateQueue;
  Ft = !1;
  var l = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (l = s) : (o.next = s), (o = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = s) : (a.next = s),
        (c.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var f = i.baseState;
    (o = 0), (c = s = u = null), (a = l);
    do {
      var p = a.lane,
        d = a.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            k = a;
          switch (((p = t), (d = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                f = w.call(d, f, p);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == "function" ? w.call(d, f, p) : w),
                p == null)
              )
                break e;
              f = se({}, f, p);
              break e;
            case 2:
              Ft = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [a]) : p.push(a));
      } else
        (d = {
          eventTime: d,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((s = c = d), (u = f)) : (c = c.next = d),
          (o |= p);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = f),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (vn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function zs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(P(191, i));
        i.call(r);
      }
    }
}
var oi = {},
  kt = tn(oi),
  Kr = tn(oi),
  qr = tn(oi);
function fn(e) {
  if (e === oi) throw Error(P(174));
  return e;
}
function ru(e, t) {
  switch ((ee(qr, t), ee(Kr, e), ee(kt, oi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ao(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ao(t, e));
  }
  ie(kt), ee(kt, t);
}
function Zn() {
  ie(kt), ie(Kr), ie(qr);
}
function wd(e) {
  fn(qr.current);
  var t = fn(kt.current),
    n = Ao(t, e.type);
  t !== n && (ee(Kr, e), ee(kt, n));
}
function iu(e) {
  Kr.current === e && (ie(kt), ie(Kr));
}
var ae = tn(0);
function ol(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var io = [];
function lu() {
  for (var e = 0; e < io.length; e++)
    io[e]._workInProgressVersionPrimary = null;
  io.length = 0;
}
var Mi = Ot.ReactCurrentDispatcher,
  lo = Ot.ReactCurrentBatchConfig,
  yn = 0,
  ue = null,
  ye = null,
  ke = null,
  al = !1,
  zr = !1,
  Yr = 0,
  yg = 0;
function Ie() {
  throw Error(P(321));
}
function ou(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function au(e, t, n, r, i, l) {
  if (
    ((yn = l),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mi.current = e === null || e.memoizedState === null ? xg : Sg),
    (e = n(r, i)),
    zr)
  ) {
    l = 0;
    do {
      if (((zr = !1), (Yr = 0), 25 <= l)) throw Error(P(301));
      (l += 1),
        (ke = ye = null),
        (t.updateQueue = null),
        (Mi.current = Eg),
        (e = n(r, i));
    } while (zr);
  }
  if (
    ((Mi.current = ul),
    (t = ye !== null && ye.next !== null),
    (yn = 0),
    (ke = ye = ue = null),
    (al = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function uu() {
  var e = Yr !== 0;
  return (Yr = 0), e;
}
function mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (ue.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function nt() {
  if (ye === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = ke === null ? ue.memoizedState : ke.next;
  if (t !== null) (ke = t), (ye = e);
  else {
    if (e === null) throw Error(P(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      ke === null ? (ue.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oo(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = ye,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = l.next), (l.next = o);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      s = l;
    do {
      var c = s.lane;
      if ((yn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var f = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = f), (o = r)) : (u = u.next = f),
          (ue.lanes |= c),
          (vn |= c);
      }
      s = s.next;
    } while (s !== null && s !== l);
    u === null ? (o = r) : (u.next = a),
      dt(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (ue.lanes |= l), (vn |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ao(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (l = e(l, o.action)), (o = o.next);
    while (o !== i);
    dt(l, t.memoizedState) || (Me = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function kd() {}
function xd(e, t) {
  var n = ue,
    r = nt(),
    i = t(),
    l = !dt(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (Me = !0)),
    (r = r.queue),
    su(Cd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, Ed.bind(null, n, r, i, t), void 0, null),
      xe === null)
    )
      throw Error(P(349));
    yn & 30 || Sd(n, t, i);
  }
  return i;
}
function Sd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ed(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Id(t) && Pd(e);
}
function Cd(e, t, n) {
  return n(function () {
    Id(t) && Pd(e);
  });
}
function Id(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function Pd(e) {
  var t = Lt(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function Ls(e) {
  var t = mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = kg.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Td() {
  return nt().memoizedState;
}
function Di(e, t, n, r) {
  var i = mt();
  (ue.flags |= e),
    (i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Il(e, t, n, r) {
  var i = nt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ye !== null) {
    var o = ye.memoizedState;
    if (((l = o.destroy), r !== null && ou(r, o.deps))) {
      i.memoizedState = Gr(t, n, l, r);
      return;
    }
  }
  (ue.flags |= e), (i.memoizedState = Gr(1 | t, n, l, r));
}
function Rs(e, t) {
  return Di(8390656, 8, e, t);
}
function su(e, t) {
  return Il(2048, 8, e, t);
}
function _d(e, t) {
  return Il(4, 2, e, t);
}
function Nd(e, t) {
  return Il(4, 4, e, t);
}
function zd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ld(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Il(4, 4, zd.bind(null, t, e), n)
  );
}
function cu() {}
function Rd(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ou(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Od(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ou(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ad(e, t, n) {
  return yn & 21
    ? (dt(n, t) || ((n = jf()), (ue.lanes |= n), (vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function vg(e, t) {
  var n = X;
  (X = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = lo.transition;
  lo.transition = {};
  try {
    e(!1), t();
  } finally {
    (X = n), (lo.transition = r);
  }
}
function bd() {
  return nt().memoizedState;
}
function wg(e, t, n) {
  var r = Xt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Md(e))
  )
    Dd(t, n);
  else if (((n = yd(e, t, n, r)), n !== null)) {
    var i = Le();
    ft(n, e, r, i), Fd(n, t, r);
  }
}
function kg(e, t, n) {
  var r = Xt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Md(e)) Dd(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = l(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), dt(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), tu(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = yd(e, t, i, r)),
      n !== null && ((i = Le()), ft(n, e, r, i), Fd(n, t, r));
  }
}
function Md(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function Dd(e, t) {
  zr = al = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Fd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ua(e, n);
  }
}
var ul = {
    readContext: tt,
    useCallback: Ie,
    useContext: Ie,
    useEffect: Ie,
    useImperativeHandle: Ie,
    useInsertionEffect: Ie,
    useLayoutEffect: Ie,
    useMemo: Ie,
    useReducer: Ie,
    useRef: Ie,
    useState: Ie,
    useDebugValue: Ie,
    useDeferredValue: Ie,
    useTransition: Ie,
    useMutableSource: Ie,
    useSyncExternalStore: Ie,
    useId: Ie,
    unstable_isNewReconciler: !1,
  },
  xg = {
    readContext: tt,
    useCallback: function (e, t) {
      return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: tt,
    useEffect: Rs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Di(4194308, 4, zd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Di(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Di(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = mt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = mt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = wg.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = mt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ls,
    useDebugValue: cu,
    useDeferredValue: function (e) {
      return (mt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ls(!1),
        t = e[0];
      return (e = vg.bind(null, e[1])), (mt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        i = mt();
      if (le) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(P(349));
        yn & 30 || Sd(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        Rs(Cd.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Gr(9, Ed.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = mt(),
        t = xe.identifierPrefix;
      if (le) {
        var n = Tt,
          r = Pt;
        (n = (r & ~(1 << (32 - ct(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = yg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Sg = {
    readContext: tt,
    useCallback: Rd,
    useContext: tt,
    useEffect: su,
    useImperativeHandle: Ld,
    useInsertionEffect: _d,
    useLayoutEffect: Nd,
    useMemo: Od,
    useReducer: oo,
    useRef: Td,
    useState: function () {
      return oo(Xr);
    },
    useDebugValue: cu,
    useDeferredValue: function (e) {
      var t = nt();
      return Ad(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = oo(Xr)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: kd,
    useSyncExternalStore: xd,
    useId: bd,
    unstable_isNewReconciler: !1,
  },
  Eg = {
    readContext: tt,
    useCallback: Rd,
    useContext: tt,
    useEffect: su,
    useImperativeHandle: Ld,
    useInsertionEffect: _d,
    useLayoutEffect: Nd,
    useMemo: Od,
    useReducer: ao,
    useRef: Td,
    useState: function () {
      return ao(Xr);
    },
    useDebugValue: cu,
    useDeferredValue: function (e) {
      var t = nt();
      return ye === null ? (t.memoizedState = e) : Ad(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(Xr)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: kd,
    useSyncExternalStore: xd,
    useId: bd,
    unstable_isNewReconciler: !1,
  };
function at(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ta(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      i = Xt(e),
      l = _t(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = qt(e, l, i)),
      t !== null && (ft(t, e, i, r), bi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      i = Xt(e),
      l = _t(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = qt(e, l, i)),
      t !== null && (ft(t, e, i, r), bi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = Xt(e),
      i = _t(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = qt(e, i, r)),
      t !== null && (ft(t, e, r, n), bi(t, e, r));
  },
};
function Os(e, t, n, r, i, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$r(n, r) || !$r(i, l)
      : !0
  );
}
function jd(e, t, n) {
  var r = !1,
    i = Zt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = tt(l))
      : ((i = Fe(t) ? mn : _e.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Xn(e, i) : Zt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function As(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function na(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), nu(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = tt(l))
    : ((l = Fe(t) ? mn : _e.current), (i.context = Xn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (ta(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Pl.enqueueReplaceState(i, i.state, null),
      ll(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function er(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Gh(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ra(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Cg = typeof WeakMap == "function" ? WeakMap : Map;
function Bd(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      cl || ((cl = !0), (pa = r)), ra(e, t);
    }),
    n
  );
}
function Ud(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ra(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ra(e, t),
          typeof r != "function" &&
            (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function bs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Cg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Fg.bind(null, e, t, n)), t.then(e, e));
}
function Ms(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ds(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = _t(-1, 1)), (t.tag = 2), qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ig = Ot.ReactCurrentOwner,
  Me = !1;
function ze(e, t, n, r) {
  t.child = e === null ? gd(t, null, n, r) : Jn(t, e.child, n, r);
}
function Fs(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    Wn(t, i),
    (r = au(e, t, n, r, l, i)),
    (n = uu()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Rt(e, t, i))
      : (le && n && Ya(t), (t.flags |= 1), ze(e, t, r, i), t.child)
  );
}
function js(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !vu(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Vd(e, t, l, r, i))
      : ((e = Ui(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var o = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $r), n(o, r) && e.ref === t.ref)
    )
      return Rt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Gt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vd(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if ($r(l, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), Rt(e, t, i);
  }
  return ia(e, t, n, r, i);
}
function $d(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Bn, $e),
        ($e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Bn, $e),
          ($e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        ee(Bn, $e),
        ($e |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(Bn, $e),
      ($e |= r);
  return ze(e, t, i, n), t.child;
}
function Hd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ia(e, t, n, r, i) {
  var l = Fe(n) ? mn : _e.current;
  return (
    (l = Xn(t, l)),
    Wn(t, i),
    (n = au(e, t, n, r, l, i)),
    (r = uu()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Rt(e, t, i))
      : (le && r && Ya(t), (t.flags |= 1), ze(e, t, n, i), t.child)
  );
}
function Bs(e, t, n, r, i) {
  if (Fe(n)) {
    var l = !0;
    el(t);
  } else l = !1;
  if ((Wn(t, i), t.stateNode === null))
    Fi(e, t), jd(t, n, r), na(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = tt(s))
      : ((s = Fe(n) ? mn : _e.current), (s = Xn(t, s)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && As(t, o, r, s)),
      (Ft = !1);
    var p = t.memoizedState;
    (o.state = p),
      ll(t, r, o, i),
      (u = t.memoizedState),
      a !== r || p !== u || De.current || Ft
        ? (typeof c == "function" && (ta(t, n, c, r), (u = t.memoizedState)),
          (a = Ft || Os(t, n, a, r, p, u, s))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      vd(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : at(t.type, a)),
      (o.props = s),
      (f = t.pendingProps),
      (p = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = tt(u))
        : ((u = Fe(n) ? mn : _e.current), (u = Xn(t, u)));
    var d = n.getDerivedStateFromProps;
    (c =
      typeof d == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || p !== u) && As(t, o, r, u)),
      (Ft = !1),
      (p = t.memoizedState),
      (o.state = p),
      ll(t, r, o, i);
    var w = t.memoizedState;
    a !== f || p !== w || De.current || Ft
      ? (typeof d == "function" && (ta(t, n, d, r), (w = t.memoizedState)),
        (s = Ft || Os(t, n, s, r, p, w, u) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return la(e, t, n, r, l, i);
}
function la(e, t, n, r, i, l) {
  Hd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Is(t, n, !1), Rt(e, t, l);
  (r = t.stateNode), (Ig.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Jn(t, e.child, null, l)), (t.child = Jn(t, null, a, l)))
      : ze(e, t, a, l),
    (t.memoizedState = r.state),
    i && Is(t, n, !0),
    t.child
  );
}
function Wd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Cs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Cs(e, t.context, !1),
    ru(e, t.containerInfo);
}
function Us(e, t, n, r, i) {
  return Gn(), Ga(i), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var oa = { dehydrated: null, treeContext: null, retryLane: 0 };
function aa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qd(e, t, n) {
  var r = t.pendingProps,
    i = ae.current,
    l = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ee(ae, i & 1),
    e === null)
  )
    return (
      Zo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = Nl(o, r, 0, null)),
              (e = pn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = aa(n)),
              (t.memoizedState = oa),
              e)
            : fu(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Pg(e, t, o, r, a, i, n);
  if (l) {
    (l = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Gt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = Gt(a, l)) : ((l = pn(l, o, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? aa(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (l.memoizedState = o),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = oa),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Gt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function fu(e, t) {
  return (
    (t = Nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ei(e, t, n, r) {
  return (
    r !== null && Ga(r),
    Jn(t, e.child, null, n),
    (e = fu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Pg(e, t, n, r, i, l, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = uo(Error(P(422)))), Ei(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Nl({ mode: "visible", children: r.children }, i, 0, null)),
        (l = pn(l, i, o, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Jn(t, e.child, null, o),
        (t.child.memoizedState = aa(o)),
        (t.memoizedState = oa),
        l);
  if (!(t.mode & 1)) return Ei(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(P(419))), (r = uo(l, r, void 0)), Ei(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Me || a)) {
    if (((r = xe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), Lt(e, i), ft(r, e, i, -1));
    }
    return yu(), (r = uo(Error(P(421)))), Ei(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = jg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (He = Kt(i.nextSibling)),
      (Qe = t),
      (le = !0),
      (st = null),
      e !== null &&
        ((Xe[Ge++] = Pt),
        (Xe[Ge++] = Tt),
        (Xe[Ge++] = gn),
        (Pt = e.id),
        (Tt = e.overflow),
        (gn = t)),
      (t = fu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ea(e.return, t, n);
}
function so(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function Kd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((ze(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vs(e, n, t);
        else if (e.tag === 19) Vs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ee(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ol(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          so(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ol(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        so(t, !0, n, null, l);
        break;
      case "together":
        so(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Tg(e, t, n) {
  switch (t.tag) {
    case 3:
      Wd(t), Gn();
      break;
    case 5:
      wd(t);
      break;
    case 1:
      Fe(t.type) && el(t);
      break;
    case 4:
      ru(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ee(rl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qd(e, t, n)
          : (ee(ae, ae.current & 1),
            (e = Rt(e, t, n)),
            e !== null ? e.sibling : null);
      ee(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Kd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ee(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), $d(e, t, n);
  }
  return Rt(e, t, n);
}
var qd, ua, Yd, Xd;
qd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ua = function () {};
Yd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), fn(kt.current);
    var l = null;
    switch (n) {
      case "input":
        (i = zo(e, i)), (r = zo(e, r)), (l = []);
        break;
      case "select":
        (i = se({}, i, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = Oo(e, i)), (r = Oo(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ji);
    }
    bo(n, r);
    var o;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var a = i[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Mr.hasOwnProperty(s)
              ? l || (l = [])
              : (l = l || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (l || (l = []), l.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (l = l || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (l = l || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Mr.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && re("scroll", e),
                  l || a === u || (l = []))
                : (l = l || []).push(s, u));
    }
    n && (l = l || []).push("style", n);
    var s = l;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Xd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _g(e, t, n) {
  var r = t.pendingProps;
  switch ((Xa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Pe(t), null;
    case 1:
      return Fe(t.type) && Zi(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zn(),
        ie(De),
        ie(_e),
        lu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (ga(st), (st = null)))),
        ua(e, t),
        Pe(t),
        null
      );
    case 5:
      iu(t);
      var i = fn(qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Yd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Pe(t), null;
        }
        if (((e = fn(kt.current)), xi(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[yt] = t), (r[Qr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Cr.length; i++) re(Cr[i], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re("error", r), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              Gu(r, l), re("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                re("invalid", r);
              break;
            case "textarea":
              Zu(r, l), re("invalid", r);
          }
          bo(n, l), (i = null);
          for (var o in l)
            if (l.hasOwnProperty(o)) {
              var a = l[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      ki(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      ki(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Mr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  re("scroll", r);
            }
          switch (n) {
            case "input":
              di(r), Ju(r, l, !0);
              break;
            case "textarea":
              di(r), es(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Ji);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Cf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[yt] = t),
            (e[Qr] = r),
            qd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Mo(n, r)), n)) {
              case "dialog":
                re("cancel", e), re("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Cr.length; i++) re(Cr[i], e);
                i = r;
                break;
              case "source":
                re("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                re("error", e), re("load", e), (i = r);
                break;
              case "details":
                re("toggle", e), (i = r);
                break;
              case "input":
                Gu(e, r), (i = zo(e, r)), re("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = se({}, r, { value: void 0 })),
                  re("invalid", e);
                break;
              case "textarea":
                Zu(e, r), (i = Oo(e, r)), re("invalid", e);
                break;
              default:
                i = r;
            }
            bo(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var u = a[l];
                l === "style"
                  ? Tf(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && If(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Dr(e, u)
                    : typeof u == "number" && Dr(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Mr.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && re("scroll", e)
                      : u != null && ba(e, l, u, o));
              }
            switch (n) {
              case "input":
                di(e), Ju(e, r, !1);
                break;
              case "textarea":
                di(e), es(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Jt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Un(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Un(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ji);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) Xd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = fn(qr.current)), fn(kt.current), xi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (l = r.nodeValue !== n) && ((e = Qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                ki(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ki(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (ie(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && He !== null && t.mode & 1 && !(t.flags & 128))
          hd(), Gn(), (t.flags |= 98560), (l = !1);
        else if (((l = xi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(P(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(P(317));
            l[yt] = t;
          } else
            Gn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (l = !1);
        } else st !== null && (ga(st), (st = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : yu())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        Zn(), ua(e, t), e === null && Hr(t.stateNode.containerInfo), Pe(t), null
      );
    case 10:
      return eu(t.type._context), Pe(t), null;
    case 17:
      return Fe(t.type) && Zi(), Pe(t), null;
    case 19:
      if ((ie(ae), (l = t.memoizedState), l === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
        if (r) yr(l, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ol(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yr(l, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            de() > tr &&
            ((t.flags |= 128), (r = !0), yr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ol(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !o.alternate && !le)
            )
              return Pe(t), null;
          } else
            2 * de() - l.renderingStartTime > tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = l.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (l.last = o));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = de()),
          (t.sibling = null),
          (n = ae.current),
          ee(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        gu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Ng(e, t) {
  switch ((Xa(t), t.tag)) {
    case 1:
      return (
        Fe(t.type) && Zi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zn(),
        ie(De),
        ie(_e),
        lu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return iu(t), null;
    case 13:
      if (
        (ie(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        Gn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ae), null;
    case 4:
      return Zn(), null;
    case 10:
      return eu(t.type._context), null;
    case 22:
    case 23:
      return gu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ci = !1,
  Te = !1,
  zg = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function sa(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var $s = !1;
function Lg(e, t) {
  if (((Qo = Yi), (e = td()), qa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            s = 0,
            c = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var d;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== l || (r !== 0 && f.nodeType !== 3) || (u = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (d = f.firstChild) !== null;

            )
              (p = f), (f = d);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++s === i && (a = o),
                p === l && ++c === r && (u = o),
                (d = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = d;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ko = { focusedElem: e, selectionRange: n }, Yi = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    E = w.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : at(t.type, k),
                      E
                    );
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (S) {
          ce(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (w = $s), ($s = !1), w;
}
function Lr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && sa(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Tl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ca(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Gd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Gd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[Qr], delete t[Xo], delete t[pg], delete t[hg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Jd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ji));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fa(e, t, n), e = e.sibling; e !== null; ) fa(e, t, n), (e = e.sibling);
}
function da(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (da(e, t, n), e = e.sibling; e !== null; ) da(e, t, n), (e = e.sibling);
}
var Se = null,
  ut = !1;
function bt(e, t, n) {
  for (n = n.child; n !== null; ) Zd(e, t, n), (n = n.sibling);
}
function Zd(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function")
    try {
      wt.onCommitFiberUnmount(wl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || jn(n, t);
    case 6:
      var r = Se,
        i = ut;
      (Se = null),
        bt(e, t, n),
        (Se = r),
        (ut = i),
        Se !== null &&
          (ut
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (ut
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? no(e.parentNode, n)
              : e.nodeType === 1 && no(e, n),
            Ur(e))
          : no(Se, n.stateNode));
      break;
    case 4:
      (r = Se),
        (i = ut),
        (Se = n.stateNode.containerInfo),
        (ut = !0),
        bt(e, t, n),
        (Se = r),
        (ut = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Te &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            o = l.destroy;
          (l = l.tag),
            o !== void 0 && (l & 2 || l & 4) && sa(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      bt(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      bt(e, t, n);
      break;
    case 21:
      bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Te = (r = Te) || n.memoizedState !== null), bt(e, t, n), (Te = r))
        : bt(e, t, n);
      break;
    default:
      bt(e, t, n);
  }
}
function Ws(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zg()),
      t.forEach(function (r) {
        var i = Bg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Se = a.stateNode), (ut = !1);
              break e;
            case 3:
              (Se = a.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (Se = a.stateNode.containerInfo), (ut = !0);
              break e;
          }
          a = a.return;
        }
        if (Se === null) throw Error(P(160));
        Zd(l, o, i), (Se = null), (ut = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (s) {
        ce(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ep(t, e), (t = t.sibling);
}
function ep(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), ht(e), r & 4)) {
        try {
          Lr(3, e, e.return), Tl(3, e);
        } catch (k) {
          ce(e, e.return, k);
        }
        try {
          Lr(5, e, e.return);
        } catch (k) {
          ce(e, e.return, k);
        }
      }
      break;
    case 1:
      ot(t, e), ht(e), r & 512 && n !== null && jn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        ht(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Dr(i, "");
        } catch (k) {
          ce(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          o = n !== null ? n.memoizedProps : l,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && Sf(i, l),
              Mo(a, o);
            var s = Mo(a, l);
            for (o = 0; o < u.length; o += 2) {
              var c = u[o],
                f = u[o + 1];
              c === "style"
                ? Tf(i, f)
                : c === "dangerouslySetInnerHTML"
                ? If(i, f)
                : c === "children"
                ? Dr(i, f)
                : ba(i, c, f, s);
            }
            switch (a) {
              case "input":
                Lo(i, l);
                break;
              case "textarea":
                Ef(i, l);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var d = l.value;
                d != null
                  ? Un(i, !!l.multiple, d, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Un(i, !!l.multiple, l.defaultValue, !0)
                      : Un(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Qr] = l;
          } catch (k) {
            ce(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((ot(t, e), ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (k) {
          ce(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ur(t.containerInfo);
        } catch (k) {
          ce(e, e.return, k);
        }
      break;
    case 4:
      ot(t, e), ht(e);
      break;
    case 13:
      ot(t, e),
        ht(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (hu = de())),
        r & 4 && Ws(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (s = Te) || c), ot(t, e), (Te = s)) : ot(t, e),
        ht(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (f = R = c; R !== null; ) {
              switch (((p = R), (d = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lr(4, p, p.return);
                  break;
                case 1:
                  jn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      ce(r, n, k);
                    }
                  }
                  break;
                case 5:
                  jn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ks(f);
                    continue;
                  }
              }
              d !== null ? ((d.return = p), (R = d)) : Ks(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  s
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = f.stateNode),
                      (u = f.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Pf("display", o)));
              } catch (k) {
                ce(e, e.return, k);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = s ? "" : f.memoizedProps;
              } catch (k) {
                ce(e, e.return, k);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), ht(e), r & 4 && Ws(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Dr(i, ""), (r.flags &= -33));
          var l = Hs(e);
          da(e, l, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Hs(e);
          fa(e, a, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rg(e, t, n) {
  (R = e), tp(e);
}
function tp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      l = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ci;
      if (!o) {
        var a = i.alternate,
          u = (a !== null && a.memoizedState !== null) || Te;
        a = Ci;
        var s = Te;
        if (((Ci = o), (Te = u) && !s))
          for (R = i; R !== null; )
            (o = R),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? qs(i)
                : u !== null
                ? ((u.return = o), (R = u))
                : qs(i);
        for (; l !== null; ) (R = l), tp(l), (l = l.sibling);
        (R = i), (Ci = a), (Te = s);
      }
      Qs(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (R = l)) : Qs(e);
  }
}
function Qs(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || Tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : at(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && zs(t, l, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                zs(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Ur(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        Te || (t.flags & 512 && ca(t));
      } catch (p) {
        ce(t, t.return, p);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Ks(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function qs(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Tl(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, i, u);
            }
          }
          var l = t.return;
          try {
            ca(t);
          } catch (u) {
            ce(t, l, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ca(t);
          } catch (u) {
            ce(t, o, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (R = a);
      break;
    }
    R = t.return;
  }
}
var Og = Math.ceil,
  sl = Ot.ReactCurrentDispatcher,
  du = Ot.ReactCurrentOwner,
  et = Ot.ReactCurrentBatchConfig,
  K = 0,
  xe = null,
  me = null,
  Ee = 0,
  $e = 0,
  Bn = tn(0),
  ve = 0,
  Jr = null,
  vn = 0,
  _l = 0,
  pu = 0,
  Rr = null,
  be = null,
  hu = 0,
  tr = 1 / 0,
  Ct = null,
  cl = !1,
  pa = null,
  Yt = null,
  Ii = !1,
  Vt = null,
  fl = 0,
  Or = 0,
  ha = null,
  ji = -1,
  Bi = 0;
function Le() {
  return K & 6 ? de() : ji !== -1 ? ji : (ji = de());
}
function Xt(e) {
  return e.mode & 1
    ? K & 2 && Ee !== 0
      ? Ee & -Ee
      : gg.transition !== null
      ? (Bi === 0 && (Bi = jf()), Bi)
      : ((e = X),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qf(e.type))),
        e)
    : 1;
}
function ft(e, t, n, r) {
  if (50 < Or) throw ((Or = 0), (ha = null), Error(P(185)));
  ri(e, n, r),
    (!(K & 2) || e !== xe) &&
      (e === xe && (!(K & 2) && (_l |= n), ve === 4 && Bt(e, Ee)),
      je(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((tr = de() + 500), Cl && nn()));
}
function je(e, t) {
  var n = e.callbackNode;
  gm(e, t);
  var r = qi(e, e === xe ? Ee : 0);
  if (r === 0)
    n !== null && rs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && rs(n), t === 1))
      e.tag === 0 ? mg(Ys.bind(null, e)) : fd(Ys.bind(null, e)),
        fg(function () {
          !(K & 6) && nn();
        }),
        (n = null);
    else {
      switch (Bf(r)) {
        case 1:
          n = Ba;
          break;
        case 4:
          n = Df;
          break;
        case 16:
          n = Ki;
          break;
        case 536870912:
          n = Ff;
          break;
        default:
          n = Ki;
      }
      n = sp(n, np.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function np(e, t) {
  if (((ji = -1), (Bi = 0), K & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Qn() && e.callbackNode !== n) return null;
  var r = qi(e, e === xe ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = dl(e, r);
  else {
    t = r;
    var i = K;
    K |= 2;
    var l = ip();
    (xe !== e || Ee !== t) && ((Ct = null), (tr = de() + 500), dn(e, t));
    do
      try {
        Mg();
        break;
      } catch (a) {
        rp(e, a);
      }
    while (!0);
    Za(),
      (sl.current = l),
      (K = i),
      me !== null ? (t = 0) : ((xe = null), (Ee = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Uo(e)), i !== 0 && ((r = i), (t = ma(e, i)))), t === 1)
    )
      throw ((n = Jr), dn(e, 0), Bt(e, r), je(e, de()), n);
    if (t === 6) Bt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ag(i) &&
          ((t = dl(e, r)),
          t === 2 && ((l = Uo(e)), l !== 0 && ((r = l), (t = ma(e, l)))),
          t === 1))
      )
        throw ((n = Jr), dn(e, 0), Bt(e, r), je(e, de()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          an(e, be, Ct);
          break;
        case 3:
          if (
            (Bt(e, r), (r & 130023424) === r && ((t = hu + 500 - de()), 10 < t))
          ) {
            if (qi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Yo(an.bind(null, e, be, Ct), t);
            break;
          }
          an(e, be, Ct);
          break;
        case 4:
          if ((Bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - ct(r);
            (l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l);
          }
          if (
            ((r = i),
            (r = de() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Og(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Yo(an.bind(null, e, be, Ct), r);
            break;
          }
          an(e, be, Ct);
          break;
        case 5:
          an(e, be, Ct);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return je(e, de()), e.callbackNode === n ? np.bind(null, e) : null;
}
function ma(e, t) {
  var n = Rr;
  return (
    e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
    (e = dl(e, t)),
    e !== 2 && ((t = be), (be = n), t !== null && ga(t)),
    e
  );
}
function ga(e) {
  be === null ? (be = e) : be.push.apply(be, e);
}
function Ag(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!dt(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Bt(e, t) {
  for (
    t &= ~pu,
      t &= ~_l,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ct(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ys(e) {
  if (K & 6) throw Error(P(327));
  Qn();
  var t = qi(e, 0);
  if (!(t & 1)) return je(e, de()), null;
  var n = dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Uo(e);
    r !== 0 && ((t = r), (n = ma(e, r)));
  }
  if (n === 1) throw ((n = Jr), dn(e, 0), Bt(e, t), je(e, de()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    an(e, be, Ct),
    je(e, de()),
    null
  );
}
function mu(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((tr = de() + 500), Cl && nn());
  }
}
function wn(e) {
  Vt !== null && Vt.tag === 0 && !(K & 6) && Qn();
  var t = K;
  K |= 1;
  var n = et.transition,
    r = X;
  try {
    if (((et.transition = null), (X = 1), e)) return e();
  } finally {
    (X = r), (et.transition = n), (K = t), !(K & 6) && nn();
  }
}
function gu() {
  ($e = Bn.current), ie(Bn);
}
function dn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cg(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Xa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zi();
          break;
        case 3:
          Zn(), ie(De), ie(_e), lu();
          break;
        case 5:
          iu(r);
          break;
        case 4:
          Zn();
          break;
        case 13:
          ie(ae);
          break;
        case 19:
          ie(ae);
          break;
        case 10:
          eu(r.type._context);
          break;
        case 22:
        case 23:
          gu();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (me = e = Gt(e.current, null)),
    (Ee = $e = t),
    (ve = 0),
    (Jr = null),
    (pu = _l = vn = 0),
    (be = Rr = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var o = l.next;
          (l.next = i), (r.next = o);
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function rp(e, t) {
  do {
    var n = me;
    try {
      if ((Za(), (Mi.current = ul), al)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        al = !1;
      }
      if (
        ((yn = 0),
        (ke = ye = ue = null),
        (zr = !1),
        (Yr = 0),
        (du.current = null),
        n === null || n.return === null)
      ) {
        (ve = 1), (Jr = t), (me = null);
        break;
      }
      e: {
        var l = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = Ee),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var d = Ms(o);
          if (d !== null) {
            (d.flags &= -257),
              Ds(d, o, a, l, t),
              d.mode & 1 && bs(l, s, t),
              (t = d),
              (u = s);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              bs(l, s, t), yu();
              break e;
            }
            u = Error(P(426));
          }
        } else if (le && a.mode & 1) {
          var E = Ms(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Ds(E, o, a, l, t),
              Ga(er(u, a));
            break e;
          }
        }
        (l = u = er(u, a)),
          ve !== 4 && (ve = 2),
          Rr === null ? (Rr = [l]) : Rr.push(l),
          (l = o);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var h = Bd(l, u, t);
              Ns(l, h);
              break e;
            case 1:
              a = u;
              var m = l.type,
                y = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Yt === null || !Yt.has(y))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = Ud(l, a, t);
                Ns(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      op(n);
    } catch (I) {
      (t = I), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ip() {
  var e = sl.current;
  return (sl.current = ul), e === null ? ul : e;
}
function yu() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    xe === null || (!(vn & 268435455) && !(_l & 268435455)) || Bt(xe, Ee);
}
function dl(e, t) {
  var n = K;
  K |= 2;
  var r = ip();
  (xe !== e || Ee !== t) && ((Ct = null), dn(e, t));
  do
    try {
      bg();
      break;
    } catch (i) {
      rp(e, i);
    }
  while (!0);
  if ((Za(), (K = n), (sl.current = r), me !== null)) throw Error(P(261));
  return (xe = null), (Ee = 0), ve;
}
function bg() {
  for (; me !== null; ) lp(me);
}
function Mg() {
  for (; me !== null && !am(); ) lp(me);
}
function lp(e) {
  var t = up(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? op(e) : (me = t),
    (du.current = null);
}
function op(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ng(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (me = null);
        return;
      }
    } else if (((n = _g(n, t, $e)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function an(e, t, n) {
  var r = X,
    i = et.transition;
  try {
    (et.transition = null), (X = 1), Dg(e, t, n, r);
  } finally {
    (et.transition = i), (X = r);
  }
  return null;
}
function Dg(e, t, n, r) {
  do Qn();
  while (Vt !== null);
  if (K & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (ym(e, l),
    e === xe && ((me = xe = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ii ||
      ((Ii = !0),
      sp(Ki, function () {
        return Qn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = et.transition), (et.transition = null);
    var o = X;
    X = 1;
    var a = K;
    (K |= 4),
      (du.current = null),
      Lg(e, n),
      ep(n, e),
      rg(Ko),
      (Yi = !!Qo),
      (Ko = Qo = null),
      (e.current = n),
      Rg(n),
      um(),
      (K = a),
      (X = o),
      (et.transition = l);
  } else e.current = n;
  if (
    (Ii && ((Ii = !1), (Vt = e), (fl = i)),
    (l = e.pendingLanes),
    l === 0 && (Yt = null),
    fm(n.stateNode),
    je(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (cl) throw ((cl = !1), (e = pa), (pa = null), e);
  return (
    fl & 1 && e.tag !== 0 && Qn(),
    (l = e.pendingLanes),
    l & 1 ? (e === ha ? Or++ : ((Or = 0), (ha = e))) : (Or = 0),
    nn(),
    null
  );
}
function Qn() {
  if (Vt !== null) {
    var e = Bf(fl),
      t = et.transition,
      n = X;
    try {
      if (((et.transition = null), (X = 16 > e ? 16 : e), Vt === null))
        var r = !1;
      else {
        if (((e = Vt), (Vt = null), (fl = 0), K & 6)) throw Error(P(331));
        var i = K;
        for (K |= 4, R = e.current; R !== null; ) {
          var l = R,
            o = l.child;
          if (R.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (R = s; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, c, l);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (R = f);
                  else
                    for (; R !== null; ) {
                      c = R;
                      var p = c.sibling,
                        d = c.return;
                      if ((Gd(c), c === s)) {
                        R = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = d), (R = p);
                        break;
                      }
                      R = d;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var E = k.sibling;
                    (k.sibling = null), (k = E);
                  } while (k !== null);
                }
              }
              R = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (R = o);
          else
            e: for (; R !== null; ) {
              if (((l = R), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lr(9, l, l.return);
                }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (R = h);
                break e;
              }
              R = l.return;
            }
        }
        var m = e.current;
        for (R = m; R !== null; ) {
          o = R;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (R = y);
          else
            e: for (o = m; R !== null; ) {
              if (((a = R), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tl(9, a);
                  }
                } catch (I) {
                  ce(a, a.return, I);
                }
              if (a === o) {
                R = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (R = S);
                break e;
              }
              R = a.return;
            }
        }
        if (
          ((K = i), nn(), wt && typeof wt.onPostCommitFiberRoot == "function")
        )
          try {
            wt.onPostCommitFiberRoot(wl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (X = n), (et.transition = t);
    }
  }
  return !1;
}
function Xs(e, t, n) {
  (t = er(n, t)),
    (t = Bd(e, t, 1)),
    (e = qt(e, t, 1)),
    (t = Le()),
    e !== null && (ri(e, 1, t), je(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Xs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Yt === null || !Yt.has(r)))
        ) {
          (e = er(n, e)),
            (e = Ud(t, e, 1)),
            (t = qt(t, e, 1)),
            (e = Le()),
            t !== null && (ri(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Fg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (Ee & n) === n &&
      (ve === 4 || (ve === 3 && (Ee & 130023424) === Ee && 500 > de() - hu)
        ? dn(e, 0)
        : (pu |= n)),
    je(e, t);
}
function ap(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = mi), (mi <<= 1), !(mi & 130023424) && (mi = 4194304))
      : (t = 1));
  var n = Le();
  (e = Lt(e, t)), e !== null && (ri(e, t, n), je(e, n));
}
function jg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ap(e, n);
}
function Bg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), ap(e, n);
}
var up;
up = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), Tg(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), le && t.flags & 1048576 && dd(t, nl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fi(e, t), (e = t.pendingProps);
      var i = Xn(t, _e.current);
      Wn(t, n), (i = au(null, t, r, e, i, n));
      var l = uu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((l = !0), el(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            nu(t),
            (i.updater = Pl),
            (t.stateNode = i),
            (i._reactInternals = t),
            na(t, r, e, n),
            (t = la(null, t, r, !0, l, n)))
          : ((t.tag = 0), le && l && Ya(t), ze(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Vg(r)),
          (e = at(r, e)),
          i)
        ) {
          case 0:
            t = ia(null, t, r, e, n);
            break e;
          case 1:
            t = Bs(null, t, r, e, n);
            break e;
          case 11:
            t = Fs(null, t, r, e, n);
            break e;
          case 14:
            t = js(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        ia(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        Bs(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Wd(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          vd(e, t),
          ll(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = er(Error(P(423)), t)), (t = Us(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = er(Error(P(424)), t)), (t = Us(e, t, r, n, i));
            break e;
          } else
            for (
              He = Kt(t.stateNode.containerInfo.firstChild),
                Qe = t,
                le = !0,
                st = null,
                n = gd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gn(), r === i)) {
            t = Rt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wd(t),
        e === null && Zo(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = i.children),
        qo(r, i) ? (o = null) : l !== null && qo(r, l) && (t.flags |= 32),
        Hd(e, t),
        ze(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Zo(t), null;
    case 13:
      return Qd(e, t, n);
    case 4:
      return (
        ru(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        Fs(e, t, r, i, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (o = i.value),
          ee(rl, r._currentValue),
          (r._currentValue = o),
          l !== null)
        )
          if (dt(l.value, o)) {
            if (l.children === i.children && !De.current) {
              t = Rt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                o = l.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = _t(-1, n & -n)), (u.tag = 2);
                      var s = l.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      ea(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((o = l.return), o === null)) throw Error(P(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  ea(o, n, t),
                  (o = l.sibling);
              } else o = l.child;
              if (o !== null) o.return = l;
              else
                for (o = l; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((l = o.sibling), l !== null)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        ze(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Wn(t, n),
        (i = tt(i)),
        (r = r(i)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = at(r, t.pendingProps)),
        (i = at(r.type, i)),
        js(e, t, r, i, n)
      );
    case 15:
      return Vd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        Fi(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), el(t)) : (e = !1),
        Wn(t, n),
        jd(t, r, i),
        na(t, r, i, n),
        la(null, t, r, !0, e, n)
      );
    case 19:
      return Kd(e, t, n);
    case 22:
      return $d(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function sp(e, t) {
  return Mf(e, t);
}
function Ug(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ze(e, t, n, r) {
  return new Ug(e, t, n, r);
}
function vu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Vg(e) {
  if (typeof e == "function") return vu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Da)) return 11;
    if (e === Fa) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ui(e, t, n, r, i, l) {
  var o = 2;
  if (((r = e), typeof e == "function")) vu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case zn:
        return pn(n.children, i, l, t);
      case Ma:
        (o = 8), (i |= 8);
        break;
      case Po:
        return (
          (e = Ze(12, n, t, i | 2)), (e.elementType = Po), (e.lanes = l), e
        );
      case To:
        return (e = Ze(13, n, t, i)), (e.elementType = To), (e.lanes = l), e;
      case _o:
        return (e = Ze(19, n, t, i)), (e.elementType = _o), (e.lanes = l), e;
      case wf:
        return Nl(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case yf:
              o = 10;
              break e;
            case vf:
              o = 9;
              break e;
            case Da:
              o = 11;
              break e;
            case Fa:
              o = 14;
              break e;
            case Dt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ze(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function pn(e, t, n, r) {
  return (e = Ze(7, e, r, t)), (e.lanes = n), e;
}
function Nl(e, t, n, r) {
  return (
    (e = Ze(22, e, r, t)),
    (e.elementType = wf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function co(e, t, n) {
  return (e = Ze(6, e, null, t)), (e.lanes = n), e;
}
function fo(e, t, n) {
  return (
    (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $g(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wl(0)),
    (this.expirationTimes = Wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function wu(e, t, n, r, i, l, o, a, u) {
  return (
    (e = new $g(e, t, n, a, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ze(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    nu(l),
    e
  );
}
function Hg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Nn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function cp(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (xn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return cd(e, n, t);
  }
  return t;
}
function fp(e, t, n, r, i, l, o, a, u) {
  return (
    (e = wu(n, r, !0, e, i, l, o, a, u)),
    (e.context = cp(null)),
    (n = e.current),
    (r = Le()),
    (i = Xt(n)),
    (l = _t(r, i)),
    (l.callback = t ?? null),
    qt(n, l, i),
    (e.current.lanes = i),
    ri(e, i, r),
    je(e, r),
    e
  );
}
function zl(e, t, n, r) {
  var i = t.current,
    l = Le(),
    o = Xt(i);
  return (
    (n = cp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _t(l, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qt(i, t, o)),
    e !== null && (ft(e, i, o, l), bi(e, i, o)),
    o
  );
}
function pl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ku(e, t) {
  Gs(e, t), (e = e.alternate) && Gs(e, t);
}
function Wg() {
  return null;
}
var dp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xu(e) {
  this._internalRoot = e;
}
Ll.prototype.render = xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  zl(e, t, null, null);
};
Ll.prototype.unmount = xu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    wn(function () {
      zl(null, e, null, null);
    }),
      (t[zt] = null);
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = $f();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
    jt.splice(n, 0, e), n === 0 && Wf(e);
  }
};
function Su(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Js() {}
function Qg(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var s = pl(o);
        l.call(s);
      };
    }
    var o = fp(t, r, e, 0, null, !1, !1, "", Js);
    return (
      (e._reactRootContainer = o),
      (e[zt] = o.current),
      Hr(e.nodeType === 8 ? e.parentNode : e),
      wn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = pl(u);
      a.call(s);
    };
  }
  var u = wu(e, 0, !1, null, null, !1, !1, "", Js);
  return (
    (e._reactRootContainer = u),
    (e[zt] = u.current),
    Hr(e.nodeType === 8 ? e.parentNode : e),
    wn(function () {
      zl(t, u, n, r);
    }),
    u
  );
}
function Ol(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var u = pl(o);
        a.call(u);
      };
    }
    zl(t, o, e, i);
  } else o = Qg(n, t, e, i, r);
  return pl(o);
}
Uf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Er(t.pendingLanes);
        n !== 0 &&
          (Ua(t, n | 1), je(t, de()), !(K & 6) && ((tr = de() + 500), nn()));
      }
      break;
    case 13:
      wn(function () {
        var r = Lt(e, 1);
        if (r !== null) {
          var i = Le();
          ft(r, e, 1, i);
        }
      }),
        ku(e, 1);
  }
};
Va = function (e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = Le();
      ft(t, e, 134217728, n);
    }
    ku(e, 134217728);
  }
};
Vf = function (e) {
  if (e.tag === 13) {
    var t = Xt(e),
      n = Lt(e, t);
    if (n !== null) {
      var r = Le();
      ft(n, e, t, r);
    }
    ku(e, t);
  }
};
$f = function () {
  return X;
};
Hf = function (e, t) {
  var n = X;
  try {
    return (X = e), t();
  } finally {
    X = n;
  }
};
Fo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Lo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = El(r);
            if (!i) throw Error(P(90));
            xf(r), Lo(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ef(e, n);
      break;
    case "select":
      (t = n.value), t != null && Un(e, !!n.multiple, t, !1);
  }
};
zf = mu;
Lf = wn;
var Kg = { usingClientEntryPoint: !1, Events: [li, An, El, _f, Nf, mu] },
  vr = {
    findFiberByHostInstance: sn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  qg = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Af(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || Wg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pi.isDisabled && Pi.supportsFiber)
    try {
      (wl = Pi.inject(qg)), (wt = Pi);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kg;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Su(t)) throw Error(P(200));
  return Hg(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!Su(e)) throw Error(P(299));
  var n = !1,
    r = "",
    i = dp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = wu(e, 1, !1, null, null, n, !1, r, i)),
    (e[zt] = t.current),
    Hr(e.nodeType === 8 ? e.parentNode : e),
    new xu(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = Af(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return wn(e);
};
qe.hydrate = function (e, t, n) {
  if (!Rl(t)) throw Error(P(200));
  return Ol(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!Su(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    o = dp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = fp(t, null, e, 1, n ?? null, i, !1, l, o)),
    (e[zt] = t.current),
    Hr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ll(t);
};
qe.render = function (e, t, n) {
  if (!Rl(t)) throw Error(P(200));
  return Ol(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!Rl(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (wn(function () {
        Ol(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zt] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = mu;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rl(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Ol(e, t, n, !1, r);
};
qe.version = "18.3.1-next-f1338f8080-20240426";
function pp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pp);
    } catch (e) {
      console.error(e);
    }
}
pp(), (pf.exports = qe);
var Yg = pf.exports,
  hp,
  Zs = Yg;
(hp = Zs.createRoot), Zs.hydrateRoot;
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zr() {
  return (
    (Zr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zr.apply(this, arguments)
  );
}
var $t;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})($t || ($t = {}));
const ec = "popstate";
function Xg(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: l, search: o, hash: a } = r.location;
    return ya(
      "",
      { pathname: l, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : gp(i);
  }
  return Jg(t, n, null, e);
}
function we(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function mp(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Gg() {
  return Math.random().toString(36).substr(2, 8);
}
function tc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ya(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Zr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? lr(t) : t,
      { state: n, key: (t && t.key) || r || Gg() }
    )
  );
}
function gp(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function lr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Jg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: l = !1 } = r,
    o = i.history,
    a = $t.Pop,
    u = null,
    s = c();
  s == null && ((s = 0), o.replaceState(Zr({}, o.state, { idx: s }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = $t.Pop;
    let E = c(),
      h = E == null ? null : E - s;
    (s = E), u && u({ action: a, location: k.location, delta: h });
  }
  function p(E, h) {
    a = $t.Push;
    let m = ya(k.location, E, h);
    s = c() + 1;
    let y = tc(m, s),
      S = k.createHref(m);
    try {
      o.pushState(y, "", S);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError") throw I;
      i.location.assign(S);
    }
    l && u && u({ action: a, location: k.location, delta: 1 });
  }
  function d(E, h) {
    a = $t.Replace;
    let m = ya(k.location, E, h);
    s = c();
    let y = tc(m, s),
      S = k.createHref(m);
    o.replaceState(y, "", S),
      l && u && u({ action: a, location: k.location, delta: 0 });
  }
  function w(E) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
      m = typeof E == "string" ? E : gp(E);
    return (
      (m = m.replace(/ $/, "%20")),
      we(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, h)
    );
  }
  let k = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(E) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(ec, f),
        (u = E),
        () => {
          i.removeEventListener(ec, f), (u = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: w,
    encodeLocation(E) {
      let h = w(E);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: d,
    go(E) {
      return o.go(E);
    },
  };
  return k;
}
var nc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(nc || (nc = {}));
function Zg(e, t, n) {
  return n === void 0 && (n = "/"), ey(e, t, n, !1);
}
function ey(e, t, n, r) {
  let i = typeof t == "string" ? lr(t) : t,
    l = wp(i.pathname || "/", n);
  if (l == null) return null;
  let o = yp(e);
  ty(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let s = dy(l);
    a = cy(o[u], s, r);
  }
  return a;
}
function yp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (l, o, a) => {
    let u = {
      relativePath: a === void 0 ? l.path || "" : a,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: o,
      route: l,
    };
    u.relativePath.startsWith("/") &&
      (we(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = hn([r, u.relativePath]),
      c = n.concat(u);
    l.children &&
      l.children.length > 0 &&
      (we(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      yp(l.children, t, c, s)),
      !(l.path == null && !l.index) &&
        t.push({ path: s, score: uy(s, l.index), routesMeta: c });
  };
  return (
    e.forEach((l, o) => {
      var a;
      if (l.path === "" || !((a = l.path) != null && a.includes("?"))) i(l, o);
      else for (let u of vp(l.path)) i(l, o, u);
    }),
    t
  );
}
function vp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [l, ""] : [l];
  let o = vp(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? l : [l, u].join("/")))),
    i && a.push(...o),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function ty(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : sy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ny = /^:[\w-]+$/,
  ry = 3,
  iy = 2,
  ly = 1,
  oy = 10,
  ay = -2,
  rc = (e) => e === "*";
function uy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(rc) && (r += ay),
    t && (r += iy),
    n
      .filter((i) => !rc(i))
      .reduce((i, l) => i + (ny.test(l) ? ry : l === "" ? ly : oy), r)
  );
}
function sy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function cy(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    l = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      c = l === "/" ? t : t.slice(l.length) || "/",
      f = ic(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        c
      ),
      p = u.route;
    if (
      (!f &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (f = ic(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          c
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: hn([l, f.pathname]),
        pathnameBase: vy(hn([l, f.pathnameBase])),
        route: p,
      }),
      f.pathnameBase !== "/" && (l = hn([l, f.pathnameBase]));
  }
  return o;
}
function ic(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = fy(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let l = i[0],
    o = l.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((s, c, f) => {
      let { paramName: p, isOptional: d } = c;
      if (p === "*") {
        let k = a[f] || "";
        o = l.slice(0, l.length - k.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[f];
      return (
        d && !w ? (s[p] = void 0) : (s[p] = (w || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: l,
    pathnameBase: o,
    pattern: e,
  };
}
function fy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    mp(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function dy(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      mp(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function wp(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function py(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? lr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : hy(n, t)) : t,
    search: wy(r),
    hash: ky(i),
  };
}
function hy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function po(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function my(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function gy(e, t) {
  let n = my(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function yy(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = lr(e))
    : ((i = Zr({}, e)),
      we(
        !i.pathname || !i.pathname.includes("?"),
        po("?", "pathname", "search", i)
      ),
      we(
        !i.pathname || !i.pathname.includes("#"),
        po("#", "pathname", "hash", i)
      ),
      we(!i.search || !i.search.includes("#"), po("#", "search", "hash", i)));
  let l = e === "" || i.pathname === "",
    o = l ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let u = py(i, a),
    s = o && o !== "/" && o.endsWith("/"),
    c = (l || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || c) && (u.pathname += "/"), u;
}
const hn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  vy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  wy = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ky = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function xy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const kp = ["post", "put", "patch", "delete"];
new Set(kp);
const Sy = ["get", ...kp];
new Set(Sy);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ei() {
  return (
    (ei = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ei.apply(this, arguments)
  );
}
const Eu = O.createContext(null),
  Ey = O.createContext(null),
  Al = O.createContext(null),
  bl = O.createContext(null),
  Sn = O.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xp = O.createContext(null);
function Ml() {
  return O.useContext(bl) != null;
}
function Sp() {
  return Ml() || we(!1), O.useContext(bl).location;
}
function Ep(e) {
  O.useContext(Al).static || O.useLayoutEffect(e);
}
function Cp() {
  let { isDataRoute: e } = O.useContext(Sn);
  return e ? Dy() : Cy();
}
function Cy() {
  Ml() || we(!1);
  let e = O.useContext(Eu),
    { basename: t, future: n, navigator: r } = O.useContext(Al),
    { matches: i } = O.useContext(Sn),
    { pathname: l } = Sp(),
    o = JSON.stringify(gy(i, n.v7_relativeSplatPath)),
    a = O.useRef(!1);
  return (
    Ep(() => {
      a.current = !0;
    }),
    O.useCallback(
      function (s, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let f = yy(s, JSON.parse(o), l, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : hn([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, o, l, e]
    )
  );
}
function Iy() {
  let { matches: e } = O.useContext(Sn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Py(e, t) {
  return Ty(e, t);
}
function Ty(e, t, n, r) {
  Ml() || we(!1);
  let { navigator: i } = O.useContext(Al),
    { matches: l } = O.useContext(Sn),
    o = l[l.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Sp(),
    c;
  if (t) {
    var f;
    let E = typeof t == "string" ? lr(t) : t;
    u === "/" || ((f = E.pathname) != null && f.startsWith(u)) || we(!1),
      (c = E);
  } else c = s;
  let p = c.pathname || "/",
    d = p;
  if (u !== "/") {
    let E = u.replace(/^\//, "").split("/");
    d = "/" + p.replace(/^\//, "").split("/").slice(E.length).join("/");
  }
  let w = Zg(e, { pathname: d }),
    k = Ry(
      w &&
        w.map((E) =>
          Object.assign({}, E, {
            params: Object.assign({}, a, E.params),
            pathname: hn([
              u,
              i.encodeLocation
                ? i.encodeLocation(E.pathname).pathname
                : E.pathname,
            ]),
            pathnameBase:
              E.pathnameBase === "/"
                ? u
                : hn([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(E.pathnameBase).pathname
                      : E.pathnameBase,
                  ]),
          })
        ),
      l,
      n,
      r
    );
  return t && k
    ? O.createElement(
        bl.Provider,
        {
          value: {
            location: ei(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: $t.Pop,
          },
        },
        k
      )
    : k;
}
function _y() {
  let e = My(),
    t = xy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return O.createElement(
    O.Fragment,
    null,
    O.createElement("h2", null, "Unexpected Application Error!"),
    O.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? O.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Ny = O.createElement(_y, null);
class zy extends O.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? O.createElement(
          Sn.Provider,
          { value: this.props.routeContext },
          O.createElement(xp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ly(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = O.useContext(Eu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    O.createElement(Sn.Provider, { value: t }, r)
  );
}
function Ry(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    c >= 0 || we(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (s = c),
        f.route.id)
      ) {
        let { loaderData: p, errors: d } = n,
          w =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!d || d[f.route.id] === void 0);
        if (f.route.lazy || w) {
          (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, f, p) => {
    let d,
      w = !1,
      k = null,
      E = null;
    n &&
      ((d = a && f.route.id ? a[f.route.id] : void 0),
      (k = f.route.errorElement || Ny),
      u &&
        (s < 0 && p === 0
          ? ((w = !0), (E = null))
          : s === p &&
            ((w = !0), (E = f.route.hydrateFallbackElement || null))));
    let h = t.concat(o.slice(0, p + 1)),
      m = () => {
        let y;
        return (
          d
            ? (y = k)
            : w
            ? (y = E)
            : f.route.Component
            ? (y = O.createElement(f.route.Component, null))
            : f.route.element
            ? (y = f.route.element)
            : (y = c),
          O.createElement(Ly, {
            match: f,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? O.createElement(zy, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: d,
          children: m(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var Ip = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Ip || {}),
  hl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(hl || {});
function Oy(e) {
  let t = O.useContext(Eu);
  return t || we(!1), t;
}
function Ay(e) {
  let t = O.useContext(Ey);
  return t || we(!1), t;
}
function by(e) {
  let t = O.useContext(Sn);
  return t || we(!1), t;
}
function Pp(e) {
  let t = by(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || we(!1), n.route.id;
}
function My() {
  var e;
  let t = O.useContext(xp),
    n = Ay(hl.UseRouteError),
    r = Pp(hl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Dy() {
  let { router: e } = Oy(Ip.UseNavigateStable),
    t = Pp(hl.UseNavigateStable),
    n = O.useRef(!1);
  return (
    Ep(() => {
      n.current = !0;
    }),
    O.useCallback(
      function (i, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, ei({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
const lc = {};
function Fy(e, t) {
  lc[t] || ((lc[t] = !0), console.warn(t));
}
const oc = (e, t, n) =>
  Fy(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + ".")
  );
function jy(e, t) {
  (e != null && e.v7_startTransition) ||
    oc(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      oc(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function va(e) {
  we(!1);
}
function By(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = $t.Pop,
    navigator: l,
    static: o = !1,
    future: a,
  } = e;
  Ml() && we(!1);
  let u = t.replace(/^\/*/, "/"),
    s = O.useMemo(
      () => ({
        basename: u,
        navigator: l,
        static: o,
        future: ei({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, l, o]
    );
  typeof r == "string" && (r = lr(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: p = "",
      state: d = null,
      key: w = "default",
    } = r,
    k = O.useMemo(() => {
      let E = wp(c, u);
      return E == null
        ? null
        : {
            location: { pathname: E, search: f, hash: p, state: d, key: w },
            navigationType: i,
          };
    }, [u, c, f, p, d, w, i]);
  return k == null
    ? null
    : O.createElement(
        Al.Provider,
        { value: s },
        O.createElement(bl.Provider, { children: n, value: k })
      );
}
function Uy(e) {
  let { children: t, location: n } = e;
  return Py(wa(t), n);
}
new Promise(() => {});
function wa(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    O.Children.forEach(e, (r, i) => {
      if (!O.isValidElement(r)) return;
      let l = [...t, i];
      if (r.type === O.Fragment) {
        n.push.apply(n, wa(r.props.children, l));
        return;
      }
      r.type !== va && we(!1), !r.props.index || !r.props.children || we(!1);
      let o = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = wa(r.props.children, l)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Vy = "6";
try {
  window.__reactRouterVersion = Vy;
} catch {}
const $y = "startTransition",
  ac = Fh[$y];
function Hy(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    l = O.useRef();
  l.current == null && (l.current = Xg({ window: i, v5Compat: !0 }));
  let o = l.current,
    [a, u] = O.useState({ action: o.action, location: o.location }),
    { v7_startTransition: s } = r || {},
    c = O.useCallback(
      (f) => {
        s && ac ? ac(() => u(f)) : u(f);
      },
      [u, s]
    );
  return (
    O.useLayoutEffect(() => o.listen(c), [o, c]),
    O.useEffect(() => jy(r), [r]),
    O.createElement(By, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
var uc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(uc || (uc = {}));
var sc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(sc || (sc = {}));
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Wy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qy = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  or = (e, t) => {
    const n = O.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: o,
          className: a = "",
          children: u,
          ...s
        },
        c
      ) =>
        O.createElement(
          "svg",
          {
            ref: c,
            ...Wy,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? (Number(l) * 24) / Number(i) : l,
            className: ["lucide", `lucide-${Qy(e)}`, a].join(" "),
            ...s,
          },
          [
            ...t.map(([f, p]) => O.createElement(f, p)),
            ...(Array.isArray(u) ? u : [u]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ky = or("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qy = or("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yy = or("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xy = or("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gy = or("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jy = or("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ]),
  Cu = ({ children: e, className: t = "", onClick: n }) =>
    M.jsx("div", {
      onClick: n,
      className: `bg-blue-900/40 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-700/30 ${t}`,
      children: e,
    }),
  Zy = () =>
    M.jsxs(Cu, {
      children: [
        M.jsxs("div", {
          className: "flex items-center mb-4",
          children: [
            M.jsx(Jy, { className: "w-6 h-6 text-blue-200 mr-3" }),
            M.jsx("h3", {
              className: "text-xl text-blue-100 font-semibold",
              children: "About Me",
            }),
          ],
        }),
        M.jsx("p", {
          className: "text-blue-100 leading-relaxed",
          children:
            "Senior at MIT studying Artificial Intelligence and Computer Science. Particularly interested in leveraging cutting-edge AI to improve education for students, teachers, and administrators through scalable and accessible software.",
        }),
      ],
    }),
  Tp = [
    {
      id: "4",
      title: "Reimagining Education: The Future of Individualized Learning",
      date: "2024-11-20",
      excerpt:
        "Exploring the need for an individualized education system powered by AI to maximize learning potential.",
      readTime: "8 min read",
      content: `
I envision a future where education is individualized down to every single concept that a student encounters.

This means that every lesson, lecture, assignment, worksheet, test, quiz, lab and class is individualized to maximize the amount of learning in the amount of time given for education. I believe that the modern methods of education are inherently broken by misaligned incentives from government funding and bureaucratic processes within each school district down to the high school teacher that is being paid way below the value that they are providing to society. As a student at MIT I've witnessed the impact an individualized education can have on your personal education and development. I believe that AI has given us the tools to make this possible.

Here are my assumptions about people and how they learn best:

I believe that tests and fear of failure are one of the best catalysts for learning. Something that I've noticed around me at MIT is that some of the smartest people I know are constantly haunted by not being perfect. This fear combined with the hard PSETs and tests make it so that they're able to learn extremely difficult concepts within a short amount of time. This is why MIT students go on to lead and innovate within their respective fields. I don't think there is any other school whose students are more perfectionist combined with the rigor that every student must go through to graduate.
People learn when they enjoy what they're studying. Many of my classmates are experts in different subject matters because they simply WANTED to get a better understanding of the particular subject. It's interesting to see this phenomenon play out in CS social circles. It's often the case that the smartest person in the group is taking the minimal course load because it gives them extra time to build outside of school. Thus I see a lot of students at MIT adopt a min-max type of learning ability where not only are they pressured to be perfect and are afraid of failure, but they're also incentivized to learn difficult concepts as quickly as possible so they can go out and build things they actually want. By exercising this muscle they get better and better at learning new concepts in their fields of choice which make them accelerate quickly.
People learn when there's social pressure. I think this is probably one of the most potent factors that go into learning something. There has to be some social ramification to failing whether it be your parents being disappointed in you, your social circle looking down on you or whatever. There must be something at stake otherwise there isn't much reason to do anything at all. Putting students in virtual environments where this happens would greatly accelerate the pace of learning for anyone. The closest thing to a virtual environment would be some sort of group based on skill level in a particular area like a clan in Clash of Clans. I guess that there's discords out there for people that are into different games but I don't see this a lot for learning. Maybe there's something here.
People learn when they realize the importance of learning towards their goal. It is widely known that pre-meds are some of the hardest working undergraduates within their courses. This is because their GPA is directly tied to which medical school they get into which determines what kind of doctor they end up becoming. Some similar themes I've seen amongst some of the most successful people around me have been that they've had a particular goal for a long time their lives and they try maximally hard in the certain areas in their life which are directly related to their goal. If we can somehow set children up with goals from the start and then somehow tie different parts of education to a tangible outcome then I believe that they will be more willing to learn and perform.
It is REALLY important for an AI platform like this to exist. When you're young your brain is more plastic which means it is able to learn new information easier. The earlier you can teach children basic concepts in any field the more time they can spend at the cutting edge of their field innovating and benefitting society. This is triply important because the amount of knowledge required to become an expert will exponentially increase as the access to information becomes easier than ever. If we ever hope to accelerate and hit escape velocity as a society then we need an education system which gives every student an equal chance by allowing them to learn the maximal amount in the least amount of time.

Right now we have no chance at this future. Our current public education system is outdated and outright harmful to students. Curriculum is uninteresting and isn't tailored to the interests of any student. If I remember correctly the USA ranks behind other developed nations in STEM subjects by a large margin. This shouldn't be the case for the most advanced country in the world. If we have any shot of retaining our position as a world power our education system must improve tenfold.

People may read this and think: "Well education platforms like Khan Academy exist so why does there need to be another platform." I don't believe Khan Academy is doing the correct job. Learning is a serious pursuit, not a free one. There MUST be something at stake in order to learn efficiently. I believe that parents would pay a lot of money for a platform that could guarantee that their kid could become subject matter experts in whatever they're interested in by the time they were - say - 10 years old. I know this is possible because a lot of students at MIT that are at the top of the class are homeschooled. If we could make something like this and integrate it into a public school setting then I believe that we would be creating the next generation of students that would be able to lead a country that will be faced with serious and difficult developing issues over the coming decades.

I think another reason why the education system is broken is because lectures are an outdated method of learning material. As I type this the most advanced reasoning AI model is capable of solving and answering PhD level questions with remarkable accuracy. I don't think we can say the same about all public education teachers. Thus I see physical teachers in the future taking an administrative, organizational and emotional regulation roles rather as the source of knowledge. Via an intelligent platform you can see in real time what kind of learning works best for each student: hands-on, visual, auditory, etc.. and now there are various techniques for integrating LLMs into every type of learning style (videos, agents, text-to-speech).

So what does a platform and education ecosystem that does this look like and how can we build specifically to harness the growing power of AI and make the bet that these AI systems are going to get more powerful in every way?

Firstly I am a firm believer that kids must be around other kids of their age for a majority of their day. It is important for children to develop the social skills needed to be able to influence and change the world meaningfully and effectively. In the future I believe that technology will help enhance communication so it is even more important for students to be highly educated since the speed of information delivery will accelerate and thus the spread of knowledge will accelerate as well.

However what must change is how students actually learn new material. This MUST be done using AI and monitoring in order to be truly effective. Relying on teachers that may make mistakes or not know critical details about the lesson for that day cannot happen. Therefore a new generation learning platform must be built in order to effectively catalyze the learning process. It does this in a few ways:

- **Everyone feels like they are the captain of their own learning journey.** We must design the platform in a way such that each student believes that they are at the forefront of their own journey in education so that they never associate labels like "smart" or "dumb" to themselves or anyone around them. It has been shown that when a kid gets labeled as "smart" or "dumb" it effectively prohibits their excitement for learning so it is paramount that every kid feel adequate and challenged by the material that they learn.
- **Student profiling:** There must be a student profile for every student which effectively analyzes their learning habits, test scores, progress and all available information. This could be used to administer tests to classes such that it is deemed that they get a certain average (using AI agents to "take" the test with the abilities of each relative student) and to assign them to classes (kinesthetic classes) that would help them learn best based on what they're interested in and how they learn best. This would make their K-12 education experience trackable and would improve the overall system over time as more students go through the program.
- **Disruption in EdTech:** I'm willing to bet that major players in the EdTech space aren't willing to innovate at all. It is a space that needs disruption and we feel that with the new administration we would be able to take a shot at changing education forever.
    `,
    },
    {
      id: "3",
      title: "Why I'm Building a Company",
      date: "2024-11-20",
      excerpt:
        "A personal journey of striving to make a significant impact through entrepreneurship and AI.",
      readTime: "7 min read",
      content: `
I think my entire life I didn't really fit into a group. I don't know why exactly but I've always felt fundamentally different from the people who have surrounded me. I've always had extreme expectations for myself and what I believed I could do for the world. When I was in 4th grade our class was doing a career exploration activity and I happened to stumble upon the word "entrepreneur" somehow. After trying to spell it multiple times I remember telling my teacher that this was what I wanted to be when I grew up. I remember her surprised expression followed by a "you do know that is going to be hard right? Not everyone can be an entrepreneur." Those words stuck with me for a while. Did I have what it took to be one? Could I leave a lasting mark on the world? Could I somehow shape the way other people live their lives?

I remember pondering these questions and then deciding that I was going to do everything in my power to give myself the abilities to try and make the world better as I see it. I wasn't really scared of how "hard" it was going to be since I believed that the reward of being able to improve society was far greater than any individual strife that I could face. Besides, what is the point of life if not to make it better for those that come after me?

This thinking got me into the best school in the world, MIT. For the first time in my life I was surrounded by people who thought as big as me. I was ecstatic.

Around the middle of my sophomore year was when AI started to become incredibly powerful. Scaling laws guaranteed that each iteration of the new GPT model would get increasingly intelligent and there was real potential to innovate in practically every industry. I knew that this would be one of my only shots at making my dream become a reality for a couple of reasons:

1) I'm still enrolled at MIT which gives me two major advantages over any other regular founder who decides to start their own company: access to funding and infinite free time. I could purposely take easy classes to lighten my schedule which would give me more time to research and build products.
2) We're still very early in AI. I don't think people realize how powerful this technology is going to become and how the applications of AI will continue to evolve and shape the fabric of reality. Almost every industry has an AI use application (trust me I did the research here) which means in time almost everything that we see now will be integrated with AI in some way. It will essentially be the only way to stay competitive as an enterprise. Because of this disruption and the fact that I'm still early means that there are systems that are ready to change and I have to be the one to make that happen. If I took a regular SWE job I think both my bargaining power as a founder would be greatly diminished and by the time I'm able to leave the company it will be too late to truly innovate in the application space of AI.

After realizing this I started to work harder than ever before. I loved the feeling of being able to work on something over which I have full control that could potentially give me outsized returns based solely on the decisions I make. But I realized something else. I could not do this alone. Enter Casey.

Casey has been my friend ever since I came to MIT. Ever since I've known him he's always been positive and enthusiastic. His approach to business is fundamentally different from any other person I know and a true 1 of 1 person. It's because of this enthusiasm and his excellent strategic thinking ability that I'm proud to call him my co-founder and CEO. I'm also glad to say that so far the choice to include him in the venture has been a success. He wants to make his mark on the world just as much as I do.

I'm excited to see where this venture takes us. 
    `,
    },
    {
      id: "2",
      title: "Understanding Hashing in Backend Systems",
      date: "2024-09-21",
      excerpt:
        "An in-depth exploration of hashing strategies and their impact on API and backend system performance.",
      readTime: "6 min read",
      content: `
I reviewed the world of hashing today and I must say that from the perspective of someone who is looking to improve the latencies of different API and backend systems getting to understand the mathematical frameworks that go into evaluating different hashing strategies was fascinating. Hashing deals with trying to reduce the asymptotic runtime of an abstract data type that can:

- Insert
- Search
- Delete
- items.

We can imagine that the simplest way to do this would be just to allocate an array given some bound on the range of numbers that we are expecting to store and then just store the values inside of the table at that corresponding index. However, this is infeasible since the range of numbers can grow exponentially large and allocating those arrays in memory can be intractable. Thus, this motivates some way to maybe map the values that we're given to some constant space. This is where we get hashing.

Hashing is the action of mapping some number space {0,..., n-1} to a smaller number space {0,..., m-1} which usually means some slots in a dynamically allocated array. This can be tricky for this reason:

1. The values which we are hashing could have some intrinsic pattern to them (multiples or powers of 2, same value, etc...) which means that they could possibly be mapped to the same value in {0,..., m-1}
2. This raises the question of how can we guarantee that we minimize the number of collisions that happen in the table? Also, how do we deal with collisions when they occur? It isn't like we can just give up on trying to insert a value at runtime. This introduces the first couple of strategies that deal with collisions:

### Chaining

Chaining is the simple strategy of just creating linked lists for every entry in the hash table so that if there's ever a collision then we can just store the value within the linked list by appending it. This has an obvious issue since a malicious adversary can just pick keys that map to the same hash value which creates a chain of length O(n) and thus defeats the purpose of the hash table in the first place since it would take O(n) time to search up a value in our hash table. This motivates some other way to deal with collisions

### Open Addressing

Open addressing is the process of utilizing other empty space in the table to store values if they happen to collide. In order to do this there must be some probing sequence that effectively encodes some permutation of <0,..., m-1> so that every spot in the table is checked once. The idea is that if we see another element stored at some spot inside of the hash table then we just check the next index inside of the probing sequence at that index in the hash table. To search for elements we would calculate its probing sequence and then try and search for the element. If at some point we come across an empty index and we still haven't found the element than it is safe to assume that the element does not exist in the hash table. The easiest way to do this would be to linearly probe through the array and then wrap around but this creates "chains" of values within the table which isn't good for keys drawn from a distribution which gives high probability to keys bunched together or that follow some pattern. Another way we could design a good probing sequence is by using quadratic probing or picking some c_1 and c_2 such that h(k, i) = (h(k) + c_1i + c_2i^2) mod m. This is better but still creates these clumps which we would ideally want to get away from. The best way to approach the open addressing problem is by trying to get close to a uniform "spread" of the probing sequence. We can do this by defining two auxiliary hash functions h_1 and h_2. h_1 can just be our regular hash function but it is important that h_2 maps to a number that is coprime or relatively prime to m. Here is why it is important. We are looking to generate a probing sequence that is some permutation of <0,..., m-1> and this is only possible due to the coprime property that states that if two numbers say a, b are coprime than their ax = 1 mod b which means that a has a multiplicative inverse mod b. This means that for some c ∈ 0, 1,..., m-1 if we do ac mod b then the residuals will map to that permutation of <0,..., m-1>. We observe that this c is in fact i in the original equation so our constraints are satisfied for the hashing function. Open addressing, however, suffers from managing deletions as you can imagine that deleting an element would cause searching for other elements to incorrectly terminate thinking that the element isn't there when actually another element that was taking the space was just deleted. We can assign "tombstone" markers onto different indices within the table so that search can pass over them. However, this limits the provable guarantee that the search time is O(1) and related to just the load factor so chaining is used often when deletions must be made.

### Universal Hashing

Even with these two strategies because our hashing functions are deterministic we don't have the ability to protect against a malicious adversary who is looking to map our keys to similar values. To do this we must randomize the selection of a hash function from a family of hash functions that in expectation provide us with the simple uniform hashing assumption. A good hashing family would be h_{a, b}(k) = ((ak + b) mod p) mod m such that if we choose a in {1,..., m-1} and b in {0, 1,..., m-1} then we are guaranteed to get that the probability of two keys colliding in expectation is 1/m if the a and b are chosen randomly.

This is both a provable and powerful result. Since we can guarantee that in expectation that the probability that two keys mapping to the same hash value is 1/m regardless of the distribution and sampling method that produced these keys we know that we can both search and delete in expected and amortized O(1) time.
    `,
    },
    {
      id: "1",
      title: "Why Personal Websites Matter in the Age of Social Media",
      date: "2024-07-22",
      excerpt:
        "Exploring the importance of maintaining a personal website amidst the proliferation of specialized social platforms.",
      readTime: "5 min read",
      content: `
I guess the reason why I wanted to make a personal website wasn't entirely just because I thought it might be nice to have one. I actually think there's a genuine issue with how there exist multiple apps and places where we effectively host our personas on. Like how LinkedIn is for our "professional" side, Instagram/FB(if you're older) is for our "rich/successful/cool trips and showing off" side and Twitter/X is for more of our intellectual and argumentative/opinionated side. There of course are other examples of platforms which essentially take in different personas and interests but it begs the question of why there can't be one site or application that hosts all that we need?

I guess the obvious answer is that the task of building such a website/application is such a challenge that we simply don't have the technology to support such an endeavor. I think the fact that X is currently attempting to be the "Everything app" confirms this belief but I can't help but theorize that it is just the way that we humans like to organize our different personas and interests into buckets. Like if I log into Instagram I have a certain attitude and thing that I'm looking for compared to when, say, I log into X or LinkedIn. Like a specific subconscious mindset is activated which locks me into a certain thought process when I enter a certain app. The problem with doing this is that I don't believe you are representing the fullness of your being as a human when you engage with these applications. This is problematic because if we're not authentically representing ourselves then we leave connection, employment and discourse opportunities on the table all of which improve the human condition.

This is in fact why I think something like a personal website built from scratch is important to have. It essentially frees anyone from the algorithmic confines that any consumer application like Facebook, Instagram or Twitter tries to impose on you. Here I have to say that I believe Twitter does a better job at letting users understand exactly what is in the algorithm which is really cool and is why I only have Twitter (except for LinkedIn because I want to be employed but even Twitter is starting to allow the ability to post and look for jobs so I might delete it in the future if it is comprehensive enough).

I hope the future of the website looks like something that accurately represents and logs my beliefs, big or small, over the course of some significant amount of time. If all else fails at least I'll have a way for people to contact me and see what I'm up to.
    `,
    },
  ],
  ev = () => {
    const e = Cp();
    return M.jsxs("section", {
      className: "mt-12",
      children: [
        M.jsxs("div", {
          className: "flex items-center mb-6",
          children: [
            M.jsx(qy, { className: "w-6 h-6 text-blue-200 mr-3" }),
            M.jsx("h2", {
              className: "text-2xl text-blue-100 font-semibold",
              children: "Latest Blog Posts",
            }),
          ],
        }),
        M.jsx("div", {
          className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
          children: Tp.map((t) =>
            M.jsxs(
              Cu,
              {
                className:
                  "hover:bg-blue-800/40 transition-colors cursor-pointer",
                onClick: () => e(`/blog/${t.id}`),
                children: [
                  M.jsx("h3", {
                    className: "text-xl text-blue-100 font-semibold mb-2",
                    children: t.title,
                  }),
                  M.jsxs("div", {
                    className: "flex items-center text-blue-300 text-sm mb-3",
                    children: [
                      M.jsx("span", { children: t.date }),
                      M.jsx("span", { className: "mx-2", children: "•" }),
                      M.jsx("span", { children: t.readTime }),
                    ],
                  }),
                  M.jsx("p", {
                    className: "text-blue-200",
                    children: t.excerpt,
                  }),
                ],
              },
              t.id
            )
          ),
        }),
      ],
    });
  },
  tv = () =>
    M.jsxs("div", {
      className: "flex justify-center space-x-6 mt-12",
      children: [
        M.jsx("a", {
          href: "https://github.com/jamesmoore24",
          className: "text-blue-200 hover:text-blue-100 transition-colors",
          children: M.jsx(Yy, { className: "w-8 h-8" }),
        }),
        M.jsx("a", {
          href: "https://www.linkedin.com/in/james-moore-a931811b7/",
          className: "text-blue-200 hover:text-blue-100 transition-colors",
          children: M.jsx(Xy, { className: "w-8 h-8" }),
        }),
        M.jsx("a", {
          href: "mailto:jame.moore24@gmail.com",
          className: "text-blue-200 hover:text-blue-100 transition-colors",
          children: M.jsx(Gy, { className: "w-8 h-8" }),
        }),
      ],
    }),
  nv = ({ isVisible: e }) =>
    M.jsxs("div", {
      className: `relative z-10 max-w-6xl mx-auto px-6 transition-all duration-1000 ${
        e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`,
      children: [
        M.jsxs("div", {
          className: "flex justify-between items-center mb-6",
          children: [
            M.jsx("h1", {
              className: "text-5xl font-bold text-blue-100",
              children: "James Moore",
            }),
            M.jsx(tv, {}),
          ],
        }),
        M.jsx("h2", {
          className: "text-2xl text-blue-200 mb-8",
          children: "Building the future of AI in education",
        }),
        M.jsx(Zy, {}),
        M.jsx(ev, {}),
      ],
    }),
  rv = () =>
    M.jsx("div", {
      className:
        "fixed inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800",
    });
function iv(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e)
    .join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " "))
    .trim();
}
const lv = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  ov = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  av = {};
function cc(e, t) {
  return (av.jsx ? ov : lv).test(e);
}
const uv = /[ \t\n\f\r]/g;
function sv(e) {
  return typeof e == "object" ? (e.type === "text" ? fc(e.value) : !1) : fc(e);
}
function fc(e) {
  return e.replace(uv, "") === "";
}
class ai {
  constructor(t, n, r) {
    (this.property = t), (this.normal = n), r && (this.space = r);
  }
}
ai.prototype.property = {};
ai.prototype.normal = {};
ai.prototype.space = null;
function _p(e, t) {
  const n = {},
    r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new ai(n, r, t);
}
function ka(e) {
  return e.toLowerCase();
}
class rt {
  constructor(t, n) {
    (this.property = t), (this.attribute = n);
  }
}
rt.prototype.space = null;
rt.prototype.boolean = !1;
rt.prototype.booleanish = !1;
rt.prototype.overloadedBoolean = !1;
rt.prototype.number = !1;
rt.prototype.commaSeparated = !1;
rt.prototype.spaceSeparated = !1;
rt.prototype.commaOrSpaceSeparated = !1;
rt.prototype.mustUseProperty = !1;
rt.prototype.defined = !1;
let cv = 0;
const V = En(),
  he = En(),
  Np = En(),
  T = En(),
  Z = En(),
  Kn = En(),
  Ve = En();
function En() {
  return 2 ** ++cv;
}
const xa = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: V,
        booleanish: he,
        commaOrSpaceSeparated: Ve,
        commaSeparated: Kn,
        number: T,
        overloadedBoolean: Np,
        spaceSeparated: Z,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ho = Object.keys(xa);
class Iu extends rt {
  constructor(t, n, r, i) {
    let l = -1;
    if ((super(t, n), dc(this, "space", i), typeof r == "number"))
      for (; ++l < ho.length; ) {
        const o = ho[l];
        dc(this, ho[l], (r & xa[o]) === xa[o]);
      }
  }
}
Iu.prototype.defined = !0;
function dc(e, t, n) {
  n && (e[t] = n);
}
const fv = {}.hasOwnProperty;
function ar(e) {
  const t = {},
    n = {};
  let r;
  for (r in e.properties)
    if (fv.call(e.properties, r)) {
      const i = e.properties[r],
        l = new Iu(r, e.transform(e.attributes || {}, r), i, e.space);
      e.mustUseProperty &&
        e.mustUseProperty.includes(r) &&
        (l.mustUseProperty = !0),
        (t[r] = l),
        (n[ka(r)] = r),
        (n[ka(l.attribute)] = r);
    }
  return new ai(t, n, e.space);
}
const zp = ar({
    space: "xlink",
    transform(e, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  Lp = ar({
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function Rp(e, t) {
  return t in e ? e[t] : t;
}
function Op(e, t) {
  return Rp(e, t.toLowerCase());
}
const Ap = ar({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: Op,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  bp = ar({
    transform(e, t) {
      return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: he,
      ariaAutoComplete: null,
      ariaBusy: he,
      ariaChecked: he,
      ariaColCount: T,
      ariaColIndex: T,
      ariaColSpan: T,
      ariaControls: Z,
      ariaCurrent: null,
      ariaDescribedBy: Z,
      ariaDetails: null,
      ariaDisabled: he,
      ariaDropEffect: Z,
      ariaErrorMessage: null,
      ariaExpanded: he,
      ariaFlowTo: Z,
      ariaGrabbed: he,
      ariaHasPopup: null,
      ariaHidden: he,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: Z,
      ariaLevel: T,
      ariaLive: null,
      ariaModal: he,
      ariaMultiLine: he,
      ariaMultiSelectable: he,
      ariaOrientation: null,
      ariaOwns: Z,
      ariaPlaceholder: null,
      ariaPosInSet: T,
      ariaPressed: he,
      ariaReadOnly: he,
      ariaRelevant: null,
      ariaRequired: he,
      ariaRoleDescription: Z,
      ariaRowCount: T,
      ariaRowIndex: T,
      ariaRowSpan: T,
      ariaSelected: he,
      ariaSetSize: T,
      ariaSort: null,
      ariaValueMax: T,
      ariaValueMin: T,
      ariaValueNow: T,
      ariaValueText: null,
      role: null,
    },
  }),
  dv = ar({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    transform: Op,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: Kn,
      acceptCharset: Z,
      accessKey: Z,
      action: null,
      allow: null,
      allowFullScreen: V,
      allowPaymentRequest: V,
      allowUserMedia: V,
      alt: null,
      as: null,
      async: V,
      autoCapitalize: null,
      autoComplete: Z,
      autoFocus: V,
      autoPlay: V,
      blocking: Z,
      capture: null,
      charSet: null,
      checked: V,
      cite: null,
      className: Z,
      cols: T,
      colSpan: null,
      content: null,
      contentEditable: he,
      controls: V,
      controlsList: Z,
      coords: T | Kn,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: V,
      defer: V,
      dir: null,
      dirName: null,
      disabled: V,
      download: Np,
      draggable: he,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: V,
      formTarget: null,
      headers: Z,
      height: T,
      hidden: V,
      high: T,
      href: null,
      hrefLang: null,
      htmlFor: Z,
      httpEquiv: Z,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: V,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: V,
      itemId: null,
      itemProp: Z,
      itemRef: Z,
      itemScope: V,
      itemType: Z,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: V,
      low: T,
      manifest: null,
      max: null,
      maxLength: T,
      media: null,
      method: null,
      min: null,
      minLength: T,
      multiple: V,
      muted: V,
      name: null,
      nonce: null,
      noModule: V,
      noValidate: V,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: V,
      optimum: T,
      pattern: null,
      ping: Z,
      placeholder: null,
      playsInline: V,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: V,
      referrerPolicy: null,
      rel: Z,
      required: V,
      reversed: V,
      rows: T,
      rowSpan: T,
      sandbox: Z,
      scope: null,
      scoped: V,
      seamless: V,
      selected: V,
      shadowRootClonable: V,
      shadowRootDelegatesFocus: V,
      shadowRootMode: null,
      shape: null,
      size: T,
      sizes: null,
      slot: null,
      span: T,
      spellCheck: he,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: T,
      step: null,
      style: null,
      tabIndex: T,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: V,
      useMap: null,
      value: he,
      width: T,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Z,
      axis: null,
      background: null,
      bgColor: null,
      border: T,
      borderColor: null,
      bottomMargin: T,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: V,
      declare: V,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: T,
      leftMargin: T,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: T,
      marginWidth: T,
      noResize: V,
      noHref: V,
      noShade: V,
      noWrap: V,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: T,
      rules: null,
      scheme: null,
      scrolling: he,
      standby: null,
      summary: null,
      text: null,
      topMargin: T,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: T,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: V,
      disableRemotePlayback: V,
      prefix: null,
      property: null,
      results: T,
      security: null,
      unselectable: null,
    },
  }),
  pv = ar({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    transform: Rp,
    properties: {
      about: Ve,
      accentHeight: T,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: T,
      amplitude: T,
      arabicForm: null,
      ascent: T,
      attributeName: null,
      attributeType: null,
      azimuth: T,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: T,
      by: null,
      calcMode: null,
      capHeight: T,
      className: Z,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: T,
      diffuseConstant: T,
      direction: null,
      display: null,
      dur: null,
      divisor: T,
      dominantBaseline: null,
      download: V,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: T,
      enableBackground: null,
      end: null,
      event: null,
      exponent: T,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: T,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Kn,
      g2: Kn,
      glyphName: Kn,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: T,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: T,
      horizOriginX: T,
      horizOriginY: T,
      id: null,
      ideographic: T,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: T,
      k: T,
      k1: T,
      k2: T,
      k3: T,
      k4: T,
      kernelMatrix: Ve,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: T,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: T,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: T,
      overlineThickness: T,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: T,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Z,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: T,
      pointsAtY: T,
      pointsAtZ: T,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Ve,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Ve,
      rev: Ve,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Ve,
      requiredFeatures: Ve,
      requiredFonts: Ve,
      requiredFormats: Ve,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: T,
      specularExponent: T,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: T,
      strikethroughThickness: T,
      string: null,
      stroke: null,
      strokeDashArray: Ve,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: T,
      strokeOpacity: T,
      strokeWidth: null,
      style: null,
      surfaceScale: T,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Ve,
      tabIndex: T,
      tableValues: null,
      target: null,
      targetX: T,
      targetY: T,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Ve,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: T,
      underlineThickness: T,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: T,
      values: null,
      vAlphabetic: T,
      vMathematical: T,
      vectorEffect: null,
      vHanging: T,
      vIdeographic: T,
      version: null,
      vertAdvY: T,
      vertOriginX: T,
      vertOriginY: T,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: T,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  hv = /^data[-\w.:]+$/i,
  pc = /-[a-z]/g,
  mv = /[A-Z]/g;
function gv(e, t) {
  const n = ka(t);
  let r = t,
    i = rt;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && hv.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(pc, vv);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!pc.test(l)) {
        let o = l.replace(mv, yv);
        o.charAt(0) !== "-" && (o = "-" + o), (t = "data" + o);
      }
    }
    i = Iu;
  }
  return new i(r, t);
}
function yv(e) {
  return "-" + e.toLowerCase();
}
function vv(e) {
  return e.charAt(1).toUpperCase();
}
const wv = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  },
  kv = _p([Lp, zp, Ap, bp, dv], "html"),
  Pu = _p([Lp, zp, Ap, bp, pv], "svg");
function xv(e) {
  return e.join(" ").trim();
}
var Mp = {},
  hc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  Sv = /\n/g,
  Ev = /^\s*/,
  Cv = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  Iv = /^:\s*/,
  Pv = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  Tv = /^[;\s]*/,
  _v = /^\s+|\s+$/g,
  Nv = `
`,
  mc = "/",
  gc = "*",
  un = "",
  zv = "comment",
  Lv = "declaration",
  Rv = function (e, t) {
    if (typeof e != "string")
      throw new TypeError("First argument must be a string");
    if (!e) return [];
    t = t || {};
    var n = 1,
      r = 1;
    function i(w) {
      var k = w.match(Sv);
      k && (n += k.length);
      var E = w.lastIndexOf(Nv);
      r = ~E ? w.length - E : r + w.length;
    }
    function l() {
      var w = { line: n, column: r };
      return function (k) {
        return (k.position = new o(w)), s(), k;
      };
    }
    function o(w) {
      (this.start = w),
        (this.end = { line: n, column: r }),
        (this.source = t.source);
    }
    o.prototype.content = e;
    function a(w) {
      var k = new Error(t.source + ":" + n + ":" + r + ": " + w);
      if (
        ((k.reason = w),
        (k.filename = t.source),
        (k.line = n),
        (k.column = r),
        (k.source = e),
        !t.silent)
      )
        throw k;
    }
    function u(w) {
      var k = w.exec(e);
      if (k) {
        var E = k[0];
        return i(E), (e = e.slice(E.length)), k;
      }
    }
    function s() {
      u(Ev);
    }
    function c(w) {
      var k;
      for (w = w || []; (k = f()); ) k !== !1 && w.push(k);
      return w;
    }
    function f() {
      var w = l();
      if (!(mc != e.charAt(0) || gc != e.charAt(1))) {
        for (
          var k = 2;
          un != e.charAt(k) && (gc != e.charAt(k) || mc != e.charAt(k + 1));

        )
          ++k;
        if (((k += 2), un === e.charAt(k - 1)))
          return a("End of comment missing");
        var E = e.slice(2, k - 2);
        return (
          (r += 2),
          i(E),
          (e = e.slice(k)),
          (r += 2),
          w({ type: zv, comment: E })
        );
      }
    }
    function p() {
      var w = l(),
        k = u(Cv);
      if (k) {
        if ((f(), !u(Iv))) return a("property missing ':'");
        var E = u(Pv),
          h = w({
            type: Lv,
            property: yc(k[0].replace(hc, un)),
            value: E ? yc(E[0].replace(hc, un)) : un,
          });
        return u(Tv), h;
      }
    }
    function d() {
      var w = [];
      c(w);
      for (var k; (k = p()); ) k !== !1 && (w.push(k), c(w));
      return w;
    }
    return s(), d();
  };
function yc(e) {
  return e ? e.replace(_v, un) : un;
}
var Ov =
  (Hu && Hu.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Mp, "__esModule", { value: !0 });
var vc = (Mp.default = bv),
  Av = Ov(Rv);
function bv(e, t) {
  var n = null;
  if (!e || typeof e != "string") return n;
  var r = (0, Av.default)(e),
    i = typeof t == "function";
  return (
    r.forEach(function (l) {
      if (l.type === "declaration") {
        var o = l.property,
          a = l.value;
        i ? t(o, a, l) : a && ((n = n || {}), (n[o] = a));
      }
    }),
    n
  );
}
const Mv = vc.default || vc,
  Dp = Fp("end"),
  Tu = Fp("start");
function Fp(e) {
  return t;
  function t(n) {
    const r = (n && n.position && n.position[e]) || {};
    if (
      typeof r.line == "number" &&
      r.line > 0 &&
      typeof r.column == "number" &&
      r.column > 0
    )
      return {
        line: r.line,
        column: r.column,
        offset:
          typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0,
      };
  }
}
function Dv(e) {
  const t = Tu(e),
    n = Dp(e);
  if (t && n) return { start: t, end: n };
}
function Ar(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
    ? wc(e.position)
    : "start" in e || "end" in e
    ? wc(e)
    : "line" in e || "column" in e
    ? Sa(e)
    : "";
}
function Sa(e) {
  return kc(e && e.line) + ":" + kc(e && e.column);
}
function wc(e) {
  return Sa(e && e.start) + "-" + Sa(e && e.end);
}
function kc(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ne extends Error {
  constructor(t, n, r) {
    super(), typeof n == "string" && ((r = n), (n = void 0));
    let i = "",
      l = {},
      o = !1;
    if (
      (n &&
        ("line" in n && "column" in n
          ? (l = { place: n })
          : "start" in n && "end" in n
          ? (l = { place: n })
          : "type" in n
          ? (l = { ancestors: [n], place: n.position })
          : (l = { ...n })),
      typeof t == "string"
        ? (i = t)
        : !l.cause && t && ((o = !0), (i = t.message), (l.cause = t)),
      !l.ruleId && !l.source && typeof r == "string")
    ) {
      const u = r.indexOf(":");
      u === -1
        ? (l.ruleId = r)
        : ((l.source = r.slice(0, u)), (l.ruleId = r.slice(u + 1)));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const u = l.ancestors[l.ancestors.length - 1];
      u && (l.place = u.position);
    }
    const a = l.place && "start" in l.place ? l.place.start : l.place;
    (this.ancestors = l.ancestors || void 0),
      (this.cause = l.cause || void 0),
      (this.column = a ? a.column : void 0),
      (this.fatal = void 0),
      this.file,
      (this.message = i),
      (this.line = a ? a.line : void 0),
      (this.name = Ar(l.place) || "1:1"),
      (this.place = l.place || void 0),
      (this.reason = this.message),
      (this.ruleId = l.ruleId || void 0),
      (this.source = l.source || void 0),
      (this.stack =
        o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : ""),
      this.actual,
      this.expected,
      this.note,
      this.url;
  }
}
Ne.prototype.file = "";
Ne.prototype.name = "";
Ne.prototype.reason = "";
Ne.prototype.message = "";
Ne.prototype.stack = "";
Ne.prototype.column = void 0;
Ne.prototype.line = void 0;
Ne.prototype.ancestors = void 0;
Ne.prototype.cause = void 0;
Ne.prototype.fatal = void 0;
Ne.prototype.place = void 0;
Ne.prototype.ruleId = void 0;
Ne.prototype.source = void 0;
const _u = {}.hasOwnProperty,
  Fv = new Map(),
  jv = /[A-Z]/g,
  Bv = /-([a-z])/g,
  Uv = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
  Vv = new Set(["td", "th"]),
  jp = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function $v(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Gv(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Xv(n, t.jsx, t.jsxs);
  }
  const i = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: r,
      elementAttributeNameCase: t.elementAttributeNameCase || "react",
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === "svg" ? Pu : kv,
      stylePropertyNameCase: t.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    l = Bp(i, e, void 0);
  return l && typeof l != "string"
    ? l
    : i.create(e, i.Fragment, { children: l || void 0 }, void 0);
}
function Bp(e, t, n) {
  if (t.type === "element") return Hv(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Wv(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Kv(e, t, n);
  if (t.type === "mdxjsEsm") return Qv(e, t);
  if (t.type === "root") return qv(e, t, n);
  if (t.type === "text") return Yv(e, t);
}
function Hv(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" &&
    r.space === "html" &&
    ((i = Pu), (e.schema = i)),
    e.ancestors.push(t);
  const l = Vp(e, t.tagName, !1),
    o = Jv(e, t);
  let a = zu(e, t);
  return (
    Uv.has(t.tagName) &&
      (a = a.filter(function (u) {
        return typeof u == "string" ? !sv(u) : !0;
      })),
    Up(e, o, l, t),
    Nu(o, a),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, l, o, n)
  );
}
function Wv(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, e.evaluater.evaluateExpression(r.expression);
  }
  ti(e, t.position);
}
function Qv(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return e.evaluater.evaluateProgram(t.data.estree);
  ti(e, t.position);
}
function Kv(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && ((i = Pu), (e.schema = i)),
    e.ancestors.push(t);
  const l = t.name === null ? e.Fragment : Vp(e, t.name, !0),
    o = Zv(e, t),
    a = zu(e, t);
  return (
    Up(e, o, l, t),
    Nu(o, a),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, l, o, n)
  );
}
function qv(e, t, n) {
  const r = {};
  return Nu(r, zu(e, t)), e.create(t, e.Fragment, r, n);
}
function Yv(e, t) {
  return t.value;
}
function Up(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Nu(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Xv(e, t, n) {
  return r;
  function r(i, l, o, a) {
    const s = Array.isArray(o.children) ? n : t;
    return a ? s(l, o, a) : s(l, o);
  }
}
function Gv(e, t) {
  return n;
  function n(r, i, l, o) {
    const a = Array.isArray(l.children),
      u = Tu(r);
    return t(
      i,
      l,
      o,
      a,
      {
        columnNumber: u ? u.column - 1 : void 0,
        fileName: e,
        lineNumber: u ? u.line : void 0,
      },
      void 0
    );
  }
}
function Jv(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && _u.call(t.properties, i)) {
      const l = e1(e, i, t.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle &&
        o === "align" &&
        typeof a == "string" &&
        Vv.has(t.tagName)
          ? (r = a)
          : (n[o] = a);
      }
    }
  if (r) {
    const l = n.style || (n.style = {});
    l[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Zv(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const l = r.data.estree.body[0];
        l.type;
        const o = l.expression;
        o.type;
        const a = o.properties[0];
        a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
      } else ti(e, t.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, (l = e.evaluater.evaluateExpression(a.expression));
        } else ti(e, t.position);
      else l = r.value === null ? !0 : r.value;
      n[i] = l;
    }
  return n;
}
function zu(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? new Map() : Fv;
  for (; ++r < t.children.length; ) {
    const l = t.children[r];
    let o;
    if (e.passKeys) {
      const u =
        l.type === "element"
          ? l.tagName
          : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement"
          ? l.name
          : void 0;
      if (u) {
        const s = i.get(u) || 0;
        (o = u + "-" + s), i.set(u, s + 1);
      }
    }
    const a = Bp(e, l, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function e1(e, t, n) {
  const r = gv(e.schema, t);
  if (!(n == null || (typeof n == "number" && Number.isNaN(n)))) {
    if (
      (Array.isArray(n) && (n = r.commaSeparated ? iv(n) : xv(n)),
      r.property === "style")
    ) {
      let i = typeof n == "object" ? n : t1(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = n1(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space
        ? wv[r.property] || r.property
        : r.attribute,
      n,
    ];
  }
}
function t1(e, t) {
  const n = {};
  try {
    Mv(t, r);
  } catch (i) {
    if (!e.ignoreInvalidStyle) {
      const l = i,
        o = new Ne("Cannot parse `style` attribute", {
          ancestors: e.ancestors,
          cause: l,
          ruleId: "style",
          source: "hast-util-to-jsx-runtime",
        });
      throw (
        ((o.file = e.filePath || void 0),
        (o.url = jp + "#cannot-parse-style-attribute"),
        o)
      );
    }
  }
  return n;
  function r(i, l) {
    let o = i;
    o.slice(0, 2) !== "--" &&
      (o.slice(0, 4) === "-ms-" && (o = "ms-" + o.slice(4)),
      (o = o.replace(Bv, i1))),
      (n[o] = l);
  }
}
function Vp(e, t, n) {
  let r;
  if (!n) r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let l = -1,
      o;
    for (; ++l < i.length; ) {
      const a = cc(i[l])
        ? { type: "Identifier", name: i[l] }
        : { type: "Literal", value: i[l] };
      o = o
        ? {
            type: "MemberExpression",
            object: o,
            property: a,
            computed: !!(l && a.type === "Literal"),
            optional: !1,
          }
        : a;
    }
    r = o;
  } else
    r =
      cc(t) && !/^[a-z]/.test(t)
        ? { type: "Identifier", name: t }
        : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = r.value;
    return _u.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r);
  ti(e);
}
function ti(e, t) {
  const n = new Ne("Cannot handle MDX estrees without `createEvaluater`", {
    ancestors: e.ancestors,
    place: t,
    ruleId: "mdx-estree",
    source: "hast-util-to-jsx-runtime",
  });
  throw (
    ((n.file = e.filePath || void 0),
    (n.url = jp + "#cannot-handle-mdx-estrees-without-createevaluater"),
    n)
  );
}
function n1(e) {
  const t = {};
  let n;
  for (n in e) _u.call(e, n) && (t[r1(n)] = e[n]);
  return t;
}
function r1(e) {
  let t = e.replace(jv, l1);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function i1(e, t) {
  return t.toUpperCase();
}
function l1(e) {
  return "-" + e.toLowerCase();
}
const mo = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video",
    ],
  },
  o1 = {};
function a1(e, t) {
  const n = o1,
    r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
    i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return $p(e, r, i);
}
function $p(e, t, n) {
  if (u1(e)) {
    if ("value" in e) return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt) return e.alt;
    if ("children" in e) return xc(e.children, t, n);
  }
  return Array.isArray(e) ? xc(e, t, n) : "";
}
function xc(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) r[i] = $p(e[i], t, n);
  return r.join("");
}
function u1(e) {
  return !!(e && typeof e == "object");
}
const Sc = document.createElement("i");
function Lu(e) {
  const t = "&" + e + ";";
  Sc.innerHTML = t;
  const n = Sc.textContent;
  return (n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t
    ? !1
    : n;
}
function xt(e, t, n, r) {
  const i = e.length;
  let l = 0,
    o;
  if (
    (t < 0 ? (t = -t > i ? 0 : i + t) : (t = t > i ? i : t),
    (n = n > 0 ? n : 0),
    r.length < 1e4)
  )
    (o = Array.from(r)), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); l < r.length; )
      (o = r.slice(l, l + 1e4)),
        o.unshift(t, 0),
        e.splice(...o),
        (l += 1e4),
        (t += 1e4);
}
function Je(e, t) {
  return e.length > 0 ? (xt(e, e.length, 0, t), e) : t;
}
const Ec = {}.hasOwnProperty;
function s1(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; ) c1(t, e[n]);
  return t;
}
function c1(e, t) {
  let n;
  for (n in t) {
    const i = (Ec.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      l = t[n];
    let o;
    if (l)
      for (o in l) {
        Ec.call(i, o) || (i[o] = []);
        const a = l[o];
        f1(i[o], Array.isArray(a) ? a : a ? [a] : []);
      }
  }
}
function f1(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; ) (t[n].add === "after" ? e : r).push(t[n]);
  xt(e, 0, 0, r);
}
function Hp(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) === 65535 ||
    (n & 65535) === 65534 ||
    n > 1114111
    ? "�"
    : String.fromCodePoint(n);
}
function qn(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const vt = rn(/[A-Za-z]/),
  We = rn(/[\dA-Za-z]/),
  d1 = rn(/[#-'*+\--9=?A-Z^-~]/);
function Ea(e) {
  return e !== null && (e < 32 || e === 127);
}
const Ca = rn(/\d/),
  p1 = rn(/[\dA-Fa-f]/),
  h1 = rn(/[!-/:-@[-`{-~]/);
function B(e) {
  return e !== null && e < -2;
}
function Be(e) {
  return e !== null && (e < 0 || e === 32);
}
function q(e) {
  return e === -2 || e === -1 || e === 32;
}
const m1 = rn(new RegExp("\\p{P}|\\p{S}", "u")),
  g1 = rn(/\s/);
function rn(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function ur(e) {
  const t = [];
  let n = -1,
    r = 0,
    i = 0;
  for (; ++n < e.length; ) {
    const l = e.charCodeAt(n);
    let o = "";
    if (l === 37 && We(e.charCodeAt(n + 1)) && We(e.charCodeAt(n + 2))) i = 2;
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) ||
        (o = String.fromCharCode(l));
    else if (l > 55295 && l < 57344) {
      const a = e.charCodeAt(n + 1);
      l < 56320 && a > 56319 && a < 57344
        ? ((o = String.fromCharCode(l, a)), (i = 1))
        : (o = "�");
    } else o = String.fromCharCode(l);
    o &&
      (t.push(e.slice(r, n), encodeURIComponent(o)), (r = n + i + 1), (o = "")),
      i && ((n += i), (i = 0));
  }
  return t.join("") + e.slice(r);
}
function te(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return o;
  function o(u) {
    return q(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return q(u) && l++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
const y1 = { tokenize: v1 };
function v1(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(a),
      e.exit("lineEnding"),
      te(e, t, "linePrefix")
    );
  }
  function i(a) {
    return e.enter("paragraph"), l(a);
  }
  function l(a) {
    const u = e.enter("chunkText", { contentType: "text", previous: n });
    return n && (n.next = u), (n = u), o(a);
  }
  function o(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return B(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const w1 = { tokenize: k1 },
  Cc = { tokenize: x1 };
function k1(e) {
  const t = this,
    n = [];
  let r = 0,
    i,
    l,
    o;
  return a;
  function a(y) {
    if (r < n.length) {
      const S = n[r];
      return (t.containerState = S[1]), e.attempt(S[0].continuation, u, s)(y);
    }
    return s(y);
  }
  function u(y) {
    if ((r++, t.containerState._closeFlow)) {
      (t.containerState._closeFlow = void 0), i && m();
      const S = t.events.length;
      let I = S,
        x;
      for (; I--; )
        if (t.events[I][0] === "exit" && t.events[I][1].type === "chunkFlow") {
          x = t.events[I][1].end;
          break;
        }
      h(r);
      let _ = S;
      for (; _ < t.events.length; ) (t.events[_][1].end = { ...x }), _++;
      return (
        xt(t.events, I + 1, 0, t.events.slice(S)), (t.events.length = _), s(y)
      );
    }
    return a(y);
  }
  function s(y) {
    if (r === n.length) {
      if (!i) return p(y);
      if (i.currentConstruct && i.currentConstruct.concrete) return w(y);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return (t.containerState = {}), e.check(Cc, c, f)(y);
  }
  function c(y) {
    return i && m(), h(r), p(y);
  }
  function f(y) {
    return (
      (t.parser.lazy[t.now().line] = r !== n.length), (o = t.now().offset), w(y)
    );
  }
  function p(y) {
    return (t.containerState = {}), e.attempt(Cc, d, w)(y);
  }
  function d(y) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(y);
  }
  function w(y) {
    if (y === null) {
      i && m(), h(0), e.consume(y);
      return;
    }
    return (
      (i = i || t.parser.flow(t.now())),
      e.enter("chunkFlow", { _tokenizer: i, contentType: "flow", previous: l }),
      k(y)
    );
  }
  function k(y) {
    if (y === null) {
      E(e.exit("chunkFlow"), !0), h(0), e.consume(y);
      return;
    }
    return B(y)
      ? (e.consume(y),
        E(e.exit("chunkFlow")),
        (r = 0),
        (t.interrupt = void 0),
        a)
      : (e.consume(y), k);
  }
  function E(y, S) {
    const I = t.sliceStream(y);
    if (
      (S && I.push(null),
      (y.previous = l),
      l && (l.next = y),
      (l = y),
      i.defineSkip(y.start),
      i.write(I),
      t.parser.lazy[y.start.line])
    ) {
      let x = i.events.length;
      for (; x--; )
        if (
          i.events[x][1].start.offset < o &&
          (!i.events[x][1].end || i.events[x][1].end.offset > o)
        )
          return;
      const _ = t.events.length;
      let L = _,
        j,
        A;
      for (; L--; )
        if (t.events[L][0] === "exit" && t.events[L][1].type === "chunkFlow") {
          if (j) {
            A = t.events[L][1].end;
            break;
          }
          j = !0;
        }
      for (h(r), x = _; x < t.events.length; )
        (t.events[x][1].end = { ...A }), x++;
      xt(t.events, L + 1, 0, t.events.slice(_)), (t.events.length = x);
    }
  }
  function h(y) {
    let S = n.length;
    for (; S-- > y; ) {
      const I = n[S];
      (t.containerState = I[1]), I[0].exit.call(t, e);
    }
    n.length = y;
  }
  function m() {
    i.write([null]),
      (l = void 0),
      (i = void 0),
      (t.containerState._closeFlow = void 0);
  }
}
function x1(e, t, n) {
  return te(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Ic(e) {
  if (e === null || Be(e) || g1(e)) return 1;
  if (m1(e)) return 2;
}
function Ru(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && ((t = l(t, n)), r.push(l));
  }
  return t;
}
const Ia = { name: "attention", resolveAll: S1, tokenize: E1 };
function S1(e, t) {
  let n = -1,
    r,
    i,
    l,
    o,
    a,
    u,
    s,
    c;
  for (; ++n < e.length; )
    if (
      e[n][0] === "enter" &&
      e[n][1].type === "attentionSequence" &&
      e[n][1]._close
    ) {
      for (r = n; r--; )
        if (
          e[r][0] === "exit" &&
          e[r][1].type === "attentionSequence" &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          u =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          const f = { ...e[r][1].end },
            p = { ...e[n][1].start };
          Pc(f, -u),
            Pc(p, u),
            (o = {
              type: u > 1 ? "strongSequence" : "emphasisSequence",
              start: f,
              end: { ...e[r][1].end },
            }),
            (a = {
              type: u > 1 ? "strongSequence" : "emphasisSequence",
              start: { ...e[n][1].start },
              end: p,
            }),
            (l = {
              type: u > 1 ? "strongText" : "emphasisText",
              start: { ...e[r][1].end },
              end: { ...e[n][1].start },
            }),
            (i = {
              type: u > 1 ? "strong" : "emphasis",
              start: { ...o.start },
              end: { ...a.end },
            }),
            (e[r][1].end = { ...o.start }),
            (e[n][1].start = { ...a.end }),
            (s = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (s = Je(s, [
                ["enter", e[r][1], t],
                ["exit", e[r][1], t],
              ])),
            (s = Je(s, [
              ["enter", i, t],
              ["enter", o, t],
              ["exit", o, t],
              ["enter", l, t],
            ])),
            (s = Je(
              s,
              Ru(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)
            )),
            (s = Je(s, [
              ["exit", l, t],
              ["enter", a, t],
              ["exit", a, t],
              ["exit", i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((c = 2),
                (s = Je(s, [
                  ["enter", e[n][1], t],
                  ["exit", e[n][1], t],
                ])))
              : (c = 0),
            xt(e, r - 1, n - r + 3, s),
            (n = r + s.length - c - 2);
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function E1(e, t) {
  const n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = Ic(r);
  let l;
  return o;
  function o(u) {
    return (l = u), e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === l) return e.consume(u), a;
    const s = e.exit("attentionSequence"),
      c = Ic(u),
      f = !c || (c === 2 && i) || n.includes(u),
      p = !i || (i === 2 && c) || n.includes(r);
    return (
      (s._open = !!(l === 42 ? f : f && (i || !p))),
      (s._close = !!(l === 42 ? p : p && (c || !f))),
      t(u)
    );
  }
}
function Pc(e, t) {
  (e.column += t), (e.offset += t), (e._bufferIndex += t);
}
const C1 = { name: "autolink", tokenize: I1 };
function I1(e, t, n) {
  let r = 0;
  return i;
  function i(d) {
    return (
      e.enter("autolink"),
      e.enter("autolinkMarker"),
      e.consume(d),
      e.exit("autolinkMarker"),
      e.enter("autolinkProtocol"),
      l
    );
  }
  function l(d) {
    return vt(d) ? (e.consume(d), o) : d === 64 ? n(d) : s(d);
  }
  function o(d) {
    return d === 43 || d === 45 || d === 46 || We(d) ? ((r = 1), a(d)) : s(d);
  }
  function a(d) {
    return d === 58
      ? (e.consume(d), (r = 0), u)
      : (d === 43 || d === 45 || d === 46 || We(d)) && r++ < 32
      ? (e.consume(d), a)
      : ((r = 0), s(d));
  }
  function u(d) {
    return d === 62
      ? (e.exit("autolinkProtocol"),
        e.enter("autolinkMarker"),
        e.consume(d),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : d === null || d === 32 || d === 60 || Ea(d)
      ? n(d)
      : (e.consume(d), u);
  }
  function s(d) {
    return d === 64 ? (e.consume(d), c) : d1(d) ? (e.consume(d), s) : n(d);
  }
  function c(d) {
    return We(d) ? f(d) : n(d);
  }
  function f(d) {
    return d === 46
      ? (e.consume(d), (r = 0), c)
      : d === 62
      ? ((e.exit("autolinkProtocol").type = "autolinkEmail"),
        e.enter("autolinkMarker"),
        e.consume(d),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t)
      : p(d);
  }
  function p(d) {
    if ((d === 45 || We(d)) && r++ < 63) {
      const w = d === 45 ? p : f;
      return e.consume(d), w;
    }
    return n(d);
  }
}
const Dl = { partial: !0, tokenize: P1 };
function P1(e, t, n) {
  return r;
  function r(l) {
    return q(l) ? te(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || B(l) ? t(l) : n(l);
  }
}
const Wp = {
  continuation: { tokenize: _1 },
  exit: N1,
  name: "blockQuote",
  tokenize: T1,
};
function T1(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const a = r.containerState;
      return (
        a.open || (e.enter("blockQuote", { _container: !0 }), (a.open = !0)),
        e.enter("blockQuotePrefix"),
        e.enter("blockQuoteMarker"),
        e.consume(o),
        e.exit("blockQuoteMarker"),
        l
      );
    }
    return n(o);
  }
  function l(o) {
    return q(o)
      ? (e.enter("blockQuotePrefixWhitespace"),
        e.consume(o),
        e.exit("blockQuotePrefixWhitespace"),
        e.exit("blockQuotePrefix"),
        t)
      : (e.exit("blockQuotePrefix"), t(o));
  }
}
function _1(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return q(o)
      ? te(
          e,
          l,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(o)
      : l(o);
  }
  function l(o) {
    return e.attempt(Wp, t, n)(o);
  }
}
function N1(e) {
  e.exit("blockQuote");
}
const Qp = { name: "characterEscape", tokenize: z1 };
function z1(e, t, n) {
  return r;
  function r(l) {
    return (
      e.enter("characterEscape"),
      e.enter("escapeMarker"),
      e.consume(l),
      e.exit("escapeMarker"),
      i
    );
  }
  function i(l) {
    return h1(l)
      ? (e.enter("characterEscapeValue"),
        e.consume(l),
        e.exit("characterEscapeValue"),
        e.exit("characterEscape"),
        t)
      : n(l);
  }
}
const Kp = { name: "characterReference", tokenize: L1 };
function L1(e, t, n) {
  const r = this;
  let i = 0,
    l,
    o;
  return a;
  function a(f) {
    return (
      e.enter("characterReference"),
      e.enter("characterReferenceMarker"),
      e.consume(f),
      e.exit("characterReferenceMarker"),
      u
    );
  }
  function u(f) {
    return f === 35
      ? (e.enter("characterReferenceMarkerNumeric"),
        e.consume(f),
        e.exit("characterReferenceMarkerNumeric"),
        s)
      : (e.enter("characterReferenceValue"), (l = 31), (o = We), c(f));
  }
  function s(f) {
    return f === 88 || f === 120
      ? (e.enter("characterReferenceMarkerHexadecimal"),
        e.consume(f),
        e.exit("characterReferenceMarkerHexadecimal"),
        e.enter("characterReferenceValue"),
        (l = 6),
        (o = p1),
        c)
      : (e.enter("characterReferenceValue"), (l = 7), (o = Ca), c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return o === We && !Lu(r.sliceSerialize(p))
        ? n(f)
        : (e.enter("characterReferenceMarker"),
          e.consume(f),
          e.exit("characterReferenceMarker"),
          e.exit("characterReference"),
          t);
    }
    return o(f) && i++ < l ? (e.consume(f), c) : n(f);
  }
}
const Tc = { partial: !0, tokenize: O1 },
  _c = { concrete: !0, name: "codeFenced", tokenize: R1 };
function R1(e, t, n) {
  const r = this,
    i = { partial: !0, tokenize: I };
  let l = 0,
    o = 0,
    a;
  return u;
  function u(x) {
    return s(x);
  }
  function s(x) {
    const _ = r.events[r.events.length - 1];
    return (
      (l =
        _ && _[1].type === "linePrefix"
          ? _[2].sliceSerialize(_[1], !0).length
          : 0),
      (a = x),
      e.enter("codeFenced"),
      e.enter("codeFencedFence"),
      e.enter("codeFencedFenceSequence"),
      c(x)
    );
  }
  function c(x) {
    return x === a
      ? (o++, e.consume(x), c)
      : o < 3
      ? n(x)
      : (e.exit("codeFencedFenceSequence"),
        q(x) ? te(e, f, "whitespace")(x) : f(x));
  }
  function f(x) {
    return x === null || B(x)
      ? (e.exit("codeFencedFence"), r.interrupt ? t(x) : e.check(Tc, k, S)(x))
      : (e.enter("codeFencedFenceInfo"),
        e.enter("chunkString", { contentType: "string" }),
        p(x));
  }
  function p(x) {
    return x === null || B(x)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(x))
      : q(x)
      ? (e.exit("chunkString"),
        e.exit("codeFencedFenceInfo"),
        te(e, d, "whitespace")(x))
      : x === 96 && x === a
      ? n(x)
      : (e.consume(x), p);
  }
  function d(x) {
    return x === null || B(x)
      ? f(x)
      : (e.enter("codeFencedFenceMeta"),
        e.enter("chunkString", { contentType: "string" }),
        w(x));
  }
  function w(x) {
    return x === null || B(x)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(x))
      : x === 96 && x === a
      ? n(x)
      : (e.consume(x), w);
  }
  function k(x) {
    return e.attempt(i, S, E)(x);
  }
  function E(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), h;
  }
  function h(x) {
    return l > 0 && q(x) ? te(e, m, "linePrefix", l + 1)(x) : m(x);
  }
  function m(x) {
    return x === null || B(x)
      ? e.check(Tc, k, S)(x)
      : (e.enter("codeFlowValue"), y(x));
  }
  function y(x) {
    return x === null || B(x)
      ? (e.exit("codeFlowValue"), m(x))
      : (e.consume(x), y);
  }
  function S(x) {
    return e.exit("codeFenced"), t(x);
  }
  function I(x, _, L) {
    let j = 0;
    return A;
    function A(H) {
      return x.enter("lineEnding"), x.consume(H), x.exit("lineEnding"), b;
    }
    function b(H) {
      return (
        x.enter("codeFencedFence"),
        q(H)
          ? te(
              x,
              D,
              "linePrefix",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4
            )(H)
          : D(H)
      );
    }
    function D(H) {
      return H === a ? (x.enter("codeFencedFenceSequence"), Y(H)) : L(H);
    }
    function Y(H) {
      return H === a
        ? (j++, x.consume(H), Y)
        : j >= o
        ? (x.exit("codeFencedFenceSequence"),
          q(H) ? te(x, oe, "whitespace")(H) : oe(H))
        : L(H);
    }
    function oe(H) {
      return H === null || B(H) ? (x.exit("codeFencedFence"), _(H)) : L(H);
    }
  }
}
function O1(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null
      ? n(o)
      : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const go = { name: "codeIndented", tokenize: b1 },
  A1 = { partial: !0, tokenize: M1 };
function b1(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), te(e, l, "linePrefix", 5)(s);
  }
  function l(s) {
    const c = r.events[r.events.length - 1];
    return c &&
      c[1].type === "linePrefix" &&
      c[2].sliceSerialize(c[1], !0).length >= 4
      ? o(s)
      : n(s);
  }
  function o(s) {
    return s === null
      ? u(s)
      : B(s)
      ? e.attempt(A1, o, u)(s)
      : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || B(s)
      ? (e.exit("codeFlowValue"), o(s))
      : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function M1(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line]
      ? n(o)
      : B(o)
      ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i)
      : te(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(o)
      : B(o)
      ? i(o)
      : n(o);
  }
}
const D1 = { name: "codeText", previous: j1, resolve: F1, tokenize: B1 };
function F1(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i;
  if (
    (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
    (e[t][1].type === "lineEnding" || e[t][1].type === "space")
  ) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        (e[n][1].type = "codeTextPadding"),
          (e[t][1].type = "codeTextPadding"),
          (n += 2),
          (t -= 2);
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0
      ? r !== t && e[r][1].type !== "lineEnding" && (i = r)
      : (r === t || e[r][1].type === "lineEnding") &&
        ((e[i][1].type = "codeTextData"),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function j1(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function B1(e, t, n) {
  let r = 0,
    i,
    l;
  return o;
  function o(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
  }
  function a(f) {
    return f === 96
      ? (e.consume(f), r++, a)
      : (e.exit("codeTextSequence"), u(f));
  }
  function u(f) {
    return f === null
      ? n(f)
      : f === 32
      ? (e.enter("space"), e.consume(f), e.exit("space"), u)
      : f === 96
      ? ((l = e.enter("codeTextSequence")), (i = 0), c(f))
      : B(f)
      ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u)
      : (e.enter("codeTextData"), s(f));
  }
  function s(f) {
    return f === null || f === 32 || f === 96 || B(f)
      ? (e.exit("codeTextData"), u(f))
      : (e.consume(f), s);
  }
  function c(f) {
    return f === 96
      ? (e.consume(f), i++, c)
      : i === r
      ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f))
      : ((l.type = "codeTextData"), s(f));
  }
}
class U1 {
  constructor(t) {
    (this.left = t ? [...t] : []), (this.right = []);
  }
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError(
        "Cannot access index `" +
          t +
          "` in a splice buffer of size `" +
          (this.left.length + this.right.length) +
          "`"
      );
    return t < this.left.length
      ? this.left[t]
      : this.right[this.right.length - t + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length
      ? this.left.slice(t, r)
      : t > this.left.length
      ? this.right
          .slice(
            this.right.length - r + this.left.length,
            this.right.length - t + this.left.length
          )
          .reverse()
      : this.left
          .slice(t)
          .concat(
            this.right.slice(this.right.length - r + this.left.length).reverse()
          );
  }
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const l = this.right.splice(
      this.right.length - i,
      Number.POSITIVE_INFINITY
    );
    return r && wr(this.left, r), l.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), wr(this.left, t);
  }
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  unshiftMany(t) {
    this.setCursor(0), wr(this.right, t.reverse());
  }
  setCursor(t) {
    if (
      !(
        t === this.left.length ||
        (t > this.left.length && this.right.length === 0) ||
        (t < 0 && this.left.length === 0)
      )
    )
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        wr(this.right, n.reverse());
      } else {
        const n = this.right.splice(
          this.left.length + this.right.length - t,
          Number.POSITIVE_INFINITY
        );
        wr(this.left, n.reverse());
      }
  }
}
function wr(e, t) {
  let n = 0;
  if (t.length < 1e4) e.push(...t);
  else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4);
}
function qp(e) {
  const t = {};
  let n = -1,
    r,
    i,
    l,
    o,
    a,
    u,
    s;
  const c = new U1(e);
  for (; ++n < c.length; ) {
    for (; n in t; ) n = t[n];
    if (
      ((r = c.get(n)),
      n &&
        r[1].type === "chunkFlow" &&
        c.get(n - 1)[1].type === "listItemPrefix" &&
        ((u = r[1]._tokenizer.events),
        (l = 0),
        l < u.length && u[l][1].type === "lineEndingBlank" && (l += 2),
        l < u.length && u[l][1].type === "content"))
    )
      for (; ++l < u.length && u[l][1].type !== "content"; )
        u[l][1].type === "chunkText" &&
          ((u[l][1]._isInFirstContentOfListItem = !0), l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, V1(c, n)), (n = t[n]), (s = !0));
    else if (r[1]._container) {
      for (
        l = n, i = void 0;
        l-- &&
        ((o = c.get(l)),
        o[1].type === "lineEnding" || o[1].type === "lineEndingBlank");

      )
        o[0] === "enter" &&
          (i && (c.get(i)[1].type = "lineEndingBlank"),
          (o[1].type = "lineEnding"),
          (i = l));
      i &&
        ((r[1].end = { ...c.get(i)[1].start }),
        (a = c.slice(i, n)),
        a.unshift(r),
        c.splice(i, n - i + 1, a));
    }
  }
  return xt(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !s;
}
function V1(e, t) {
  const n = e.get(t)[1],
    r = e.get(t)[2];
  let i = t - 1;
  const l = [],
    o = n._tokenizer || r.parser[n.contentType](n.start),
    a = o.events,
    u = [],
    s = {};
  let c,
    f,
    p = -1,
    d = n,
    w = 0,
    k = 0;
  const E = [k];
  for (; d; ) {
    for (; e.get(++i)[1] !== d; );
    l.push(i),
      d._tokenizer ||
        ((c = r.sliceStream(d)),
        d.next || c.push(null),
        f && o.defineSkip(d.start),
        d._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(c),
        d._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = void 0)),
      (f = d),
      (d = d.next);
  }
  for (d = n; ++p < a.length; )
    a[p][0] === "exit" &&
      a[p - 1][0] === "enter" &&
      a[p][1].type === a[p - 1][1].type &&
      a[p][1].start.line !== a[p][1].end.line &&
      ((k = p + 1),
      E.push(k),
      (d._tokenizer = void 0),
      (d.previous = void 0),
      (d = d.next));
  for (
    o.events = [],
      d ? ((d._tokenizer = void 0), (d.previous = void 0)) : E.pop(),
      p = E.length;
    p--;

  ) {
    const h = a.slice(E[p], E[p + 1]),
      m = l.pop();
    u.push([m, m + h.length - 1]), e.splice(m, 2, h);
  }
  for (u.reverse(), p = -1; ++p < u.length; )
    (s[w + u[p][0]] = w + u[p][1]), (w += u[p][1] - u[p][0] - 1);
  return s;
}
const $1 = { resolve: W1, tokenize: Q1 },
  H1 = { partial: !0, tokenize: K1 };
function W1(e) {
  return qp(e), e;
}
function Q1(e, t) {
  let n;
  return r;
  function r(a) {
    return (
      e.enter("content"),
      (n = e.enter("chunkContent", { contentType: "content" })),
      i(a)
    );
  }
  function i(a) {
    return a === null ? l(a) : B(a) ? e.check(H1, o, l)(a) : (e.consume(a), i);
  }
  function l(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function o(a) {
    return (
      e.consume(a),
      e.exit("chunkContent"),
      (n.next = e.enter("chunkContent", {
        contentType: "content",
        previous: n,
      })),
      (n = n.next),
      i
    );
  }
}
function K1(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return (
      e.exit("chunkContent"),
      e.enter("lineEnding"),
      e.consume(o),
      e.exit("lineEnding"),
      te(e, l, "linePrefix")
    );
  }
  function l(o) {
    if (o === null || B(o)) return n(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") &&
      a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(o)
      : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function Yp(e, t, n, r, i, l, o, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(h) {
    return h === 60
      ? (e.enter(r), e.enter(i), e.enter(l), e.consume(h), e.exit(l), p)
      : h === null || h === 32 || h === 41 || Ea(h)
      ? n(h)
      : (e.enter(r),
        e.enter(o),
        e.enter(a),
        e.enter("chunkString", { contentType: "string" }),
        k(h));
  }
  function p(h) {
    return h === 62
      ? (e.enter(l), e.consume(h), e.exit(l), e.exit(i), e.exit(r), t)
      : (e.enter(a), e.enter("chunkString", { contentType: "string" }), d(h));
  }
  function d(h) {
    return h === 62
      ? (e.exit("chunkString"), e.exit(a), p(h))
      : h === null || h === 60 || B(h)
      ? n(h)
      : (e.consume(h), h === 92 ? w : d);
  }
  function w(h) {
    return h === 60 || h === 62 || h === 92 ? (e.consume(h), d) : d(h);
  }
  function k(h) {
    return !c && (h === null || h === 41 || Be(h))
      ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(h))
      : c < s && h === 40
      ? (e.consume(h), c++, k)
      : h === 41
      ? (e.consume(h), c--, k)
      : h === null || h === 32 || h === 40 || Ea(h)
      ? n(h)
      : (e.consume(h), h === 92 ? E : k);
  }
  function E(h) {
    return h === 40 || h === 41 || h === 92 ? (e.consume(h), k) : k(h);
  }
}
function Xp(e, t, n, r, i, l) {
  const o = this;
  let a = 0,
    u;
  return s;
  function s(d) {
    return e.enter(r), e.enter(i), e.consume(d), e.exit(i), e.enter(l), c;
  }
  function c(d) {
    return a > 999 ||
      d === null ||
      d === 91 ||
      (d === 93 && !u) ||
      (d === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs)
      ? n(d)
      : d === 93
      ? (e.exit(l), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t)
      : B(d)
      ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c)
      : (e.enter("chunkString", { contentType: "string" }), f(d));
  }
  function f(d) {
    return d === null || d === 91 || d === 93 || B(d) || a++ > 999
      ? (e.exit("chunkString"), c(d))
      : (e.consume(d), u || (u = !q(d)), d === 92 ? p : f);
  }
  function p(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), a++, f) : f(d);
  }
}
function Gp(e, t, n, r, i, l) {
  let o;
  return a;
  function a(p) {
    return p === 34 || p === 39 || p === 40
      ? (e.enter(r),
        e.enter(i),
        e.consume(p),
        e.exit(i),
        (o = p === 40 ? 41 : p),
        u)
      : n(p);
  }
  function u(p) {
    return p === o
      ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t)
      : (e.enter(l), s(p));
  }
  function s(p) {
    return p === o
      ? (e.exit(l), u(o))
      : p === null
      ? n(p)
      : B(p)
      ? (e.enter("lineEnding"),
        e.consume(p),
        e.exit("lineEnding"),
        te(e, s, "linePrefix"))
      : (e.enter("chunkString", { contentType: "string" }), c(p));
  }
  function c(p) {
    return p === o || p === null || B(p)
      ? (e.exit("chunkString"), s(p))
      : (e.consume(p), p === 92 ? f : c);
  }
  function f(p) {
    return p === o || p === 92 ? (e.consume(p), c) : c(p);
  }
}
function br(e, t) {
  let n;
  return r;
  function r(i) {
    return B(i)
      ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (n = !0), r)
      : q(i)
      ? te(e, r, n ? "linePrefix" : "lineSuffix")(i)
      : t(i);
  }
}
const q1 = { name: "definition", tokenize: X1 },
  Y1 = { partial: !0, tokenize: G1 };
function X1(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(d) {
    return e.enter("definition"), o(d);
  }
  function o(d) {
    return Xp.call(
      r,
      e,
      a,
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(d);
  }
  function a(d) {
    return (
      (i = qn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      d === 58
        ? (e.enter("definitionMarker"),
          e.consume(d),
          e.exit("definitionMarker"),
          u)
        : n(d)
    );
  }
  function u(d) {
    return Be(d) ? br(e, s)(d) : s(d);
  }
  function s(d) {
    return Yp(
      e,
      c,
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(d);
  }
  function c(d) {
    return e.attempt(Y1, f, f)(d);
  }
  function f(d) {
    return q(d) ? te(e, p, "whitespace")(d) : p(d);
  }
  function p(d) {
    return d === null || B(d)
      ? (e.exit("definition"), r.parser.defined.push(i), t(d))
      : n(d);
  }
}
function G1(e, t, n) {
  return r;
  function r(a) {
    return Be(a) ? br(e, i)(a) : n(a);
  }
  function i(a) {
    return Gp(
      e,
      l,
      n,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(a);
  }
  function l(a) {
    return q(a) ? te(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || B(a) ? t(a) : n(a);
  }
}
const J1 = { name: "hardBreakEscape", tokenize: Z1 };
function Z1(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return B(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const e0 = { name: "headingAtx", resolve: t0, tokenize: n0 };
function t0(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    l;
  return (
    e[r][1].type === "whitespace" && (r += 2),
    n - 2 > r && e[n][1].type === "whitespace" && (n -= 2),
    e[n][1].type === "atxHeadingSequence" &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === "whitespace")) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[n][1].end }),
      (l = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: "text",
      }),
      xt(e, r, n - r + 1, [
        ["enter", i, t],
        ["enter", l, t],
        ["exit", l, t],
        ["exit", i, t],
      ])),
    e
  );
}
function n0(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), l(c);
  }
  function l(c) {
    return e.enter("atxHeadingSequence"), o(c);
  }
  function o(c) {
    return c === 35 && r++ < 6
      ? (e.consume(c), o)
      : c === null || Be(c)
      ? (e.exit("atxHeadingSequence"), a(c))
      : n(c);
  }
  function a(c) {
    return c === 35
      ? (e.enter("atxHeadingSequence"), u(c))
      : c === null || B(c)
      ? (e.exit("atxHeading"), t(c))
      : q(c)
      ? te(e, a, "whitespace")(c)
      : (e.enter("atxHeadingText"), s(c));
  }
  function u(c) {
    return c === 35 ? (e.consume(c), u) : (e.exit("atxHeadingSequence"), a(c));
  }
  function s(c) {
    return c === null || c === 35 || Be(c)
      ? (e.exit("atxHeadingText"), a(c))
      : (e.consume(c), s);
  }
}
const r0 = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  Nc = ["pre", "script", "style", "textarea"],
  i0 = { concrete: !0, name: "htmlFlow", resolveTo: a0, tokenize: u0 },
  l0 = { partial: !0, tokenize: c0 },
  o0 = { partial: !0, tokenize: s0 };
function a0(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
  return (
    t > 1 &&
      e[t - 2][1].type === "linePrefix" &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function u0(e, t, n) {
  const r = this;
  let i, l, o, a, u;
  return s;
  function s(v) {
    return c(v);
  }
  function c(v) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(v), f;
  }
  function f(v) {
    return v === 33
      ? (e.consume(v), p)
      : v === 47
      ? (e.consume(v), (l = !0), k)
      : v === 63
      ? (e.consume(v), (i = 3), r.interrupt ? t : g)
      : vt(v)
      ? (e.consume(v), (o = String.fromCharCode(v)), E)
      : n(v);
  }
  function p(v) {
    return v === 45
      ? (e.consume(v), (i = 2), d)
      : v === 91
      ? (e.consume(v), (i = 5), (a = 0), w)
      : vt(v)
      ? (e.consume(v), (i = 4), r.interrupt ? t : g)
      : n(v);
  }
  function d(v) {
    return v === 45 ? (e.consume(v), r.interrupt ? t : g) : n(v);
  }
  function w(v) {
    const ge = "CDATA[";
    return v === ge.charCodeAt(a++)
      ? (e.consume(v), a === ge.length ? (r.interrupt ? t : D) : w)
      : n(v);
  }
  function k(v) {
    return vt(v) ? (e.consume(v), (o = String.fromCharCode(v)), E) : n(v);
  }
  function E(v) {
    if (v === null || v === 47 || v === 62 || Be(v)) {
      const ge = v === 47,
        it = o.toLowerCase();
      return !ge && !l && Nc.includes(it)
        ? ((i = 1), r.interrupt ? t(v) : D(v))
        : r0.includes(o.toLowerCase())
        ? ((i = 6), ge ? (e.consume(v), h) : r.interrupt ? t(v) : D(v))
        : ((i = 7),
          r.interrupt && !r.parser.lazy[r.now().line] ? n(v) : l ? m(v) : y(v));
    }
    return v === 45 || We(v)
      ? (e.consume(v), (o += String.fromCharCode(v)), E)
      : n(v);
  }
  function h(v) {
    return v === 62 ? (e.consume(v), r.interrupt ? t : D) : n(v);
  }
  function m(v) {
    return q(v) ? (e.consume(v), m) : A(v);
  }
  function y(v) {
    return v === 47
      ? (e.consume(v), A)
      : v === 58 || v === 95 || vt(v)
      ? (e.consume(v), S)
      : q(v)
      ? (e.consume(v), y)
      : A(v);
  }
  function S(v) {
    return v === 45 || v === 46 || v === 58 || v === 95 || We(v)
      ? (e.consume(v), S)
      : I(v);
  }
  function I(v) {
    return v === 61 ? (e.consume(v), x) : q(v) ? (e.consume(v), I) : y(v);
  }
  function x(v) {
    return v === null || v === 60 || v === 61 || v === 62 || v === 96
      ? n(v)
      : v === 34 || v === 39
      ? (e.consume(v), (u = v), _)
      : q(v)
      ? (e.consume(v), x)
      : L(v);
  }
  function _(v) {
    return v === u
      ? (e.consume(v), (u = null), j)
      : v === null || B(v)
      ? n(v)
      : (e.consume(v), _);
  }
  function L(v) {
    return v === null ||
      v === 34 ||
      v === 39 ||
      v === 47 ||
      v === 60 ||
      v === 61 ||
      v === 62 ||
      v === 96 ||
      Be(v)
      ? I(v)
      : (e.consume(v), L);
  }
  function j(v) {
    return v === 47 || v === 62 || q(v) ? y(v) : n(v);
  }
  function A(v) {
    return v === 62 ? (e.consume(v), b) : n(v);
  }
  function b(v) {
    return v === null || B(v) ? D(v) : q(v) ? (e.consume(v), b) : n(v);
  }
  function D(v) {
    return v === 45 && i === 2
      ? (e.consume(v), pe)
      : v === 60 && i === 1
      ? (e.consume(v), fe)
      : v === 62 && i === 4
      ? (e.consume(v), Q)
      : v === 63 && i === 3
      ? (e.consume(v), g)
      : v === 93 && i === 5
      ? (e.consume(v), F)
      : B(v) && (i === 6 || i === 7)
      ? (e.exit("htmlFlowData"), e.check(l0, G, Y)(v))
      : v === null || B(v)
      ? (e.exit("htmlFlowData"), Y(v))
      : (e.consume(v), D);
  }
  function Y(v) {
    return e.check(o0, oe, G)(v);
  }
  function oe(v) {
    return e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), H;
  }
  function H(v) {
    return v === null || B(v) ? Y(v) : (e.enter("htmlFlowData"), D(v));
  }
  function pe(v) {
    return v === 45 ? (e.consume(v), g) : D(v);
  }
  function fe(v) {
    return v === 47 ? (e.consume(v), (o = ""), z) : D(v);
  }
  function z(v) {
    if (v === 62) {
      const ge = o.toLowerCase();
      return Nc.includes(ge) ? (e.consume(v), Q) : D(v);
    }
    return vt(v) && o.length < 8
      ? (e.consume(v), (o += String.fromCharCode(v)), z)
      : D(v);
  }
  function F(v) {
    return v === 93 ? (e.consume(v), g) : D(v);
  }
  function g(v) {
    return v === 62
      ? (e.consume(v), Q)
      : v === 45 && i === 2
      ? (e.consume(v), g)
      : D(v);
  }
  function Q(v) {
    return v === null || B(v)
      ? (e.exit("htmlFlowData"), G(v))
      : (e.consume(v), Q);
  }
  function G(v) {
    return e.exit("htmlFlow"), t(v);
  }
}
function s0(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return B(o)
      ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l)
      : n(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function c0(e, t, n) {
  return r;
  function r(i) {
    return (
      e.enter("lineEnding"),
      e.consume(i),
      e.exit("lineEnding"),
      e.attempt(Dl, t, n)
    );
  }
}
const f0 = { name: "htmlText", tokenize: d0 };
function d0(e, t, n) {
  const r = this;
  let i, l, o;
  return a;
  function a(g) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(g), u;
  }
  function u(g) {
    return g === 33
      ? (e.consume(g), s)
      : g === 47
      ? (e.consume(g), I)
      : g === 63
      ? (e.consume(g), y)
      : vt(g)
      ? (e.consume(g), L)
      : n(g);
  }
  function s(g) {
    return g === 45
      ? (e.consume(g), c)
      : g === 91
      ? (e.consume(g), (l = 0), w)
      : vt(g)
      ? (e.consume(g), m)
      : n(g);
  }
  function c(g) {
    return g === 45 ? (e.consume(g), d) : n(g);
  }
  function f(g) {
    return g === null
      ? n(g)
      : g === 45
      ? (e.consume(g), p)
      : B(g)
      ? ((o = f), fe(g))
      : (e.consume(g), f);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), d) : f(g);
  }
  function d(g) {
    return g === 62 ? pe(g) : g === 45 ? p(g) : f(g);
  }
  function w(g) {
    const Q = "CDATA[";
    return g === Q.charCodeAt(l++)
      ? (e.consume(g), l === Q.length ? k : w)
      : n(g);
  }
  function k(g) {
    return g === null
      ? n(g)
      : g === 93
      ? (e.consume(g), E)
      : B(g)
      ? ((o = k), fe(g))
      : (e.consume(g), k);
  }
  function E(g) {
    return g === 93 ? (e.consume(g), h) : k(g);
  }
  function h(g) {
    return g === 62 ? pe(g) : g === 93 ? (e.consume(g), h) : k(g);
  }
  function m(g) {
    return g === null || g === 62
      ? pe(g)
      : B(g)
      ? ((o = m), fe(g))
      : (e.consume(g), m);
  }
  function y(g) {
    return g === null
      ? n(g)
      : g === 63
      ? (e.consume(g), S)
      : B(g)
      ? ((o = y), fe(g))
      : (e.consume(g), y);
  }
  function S(g) {
    return g === 62 ? pe(g) : y(g);
  }
  function I(g) {
    return vt(g) ? (e.consume(g), x) : n(g);
  }
  function x(g) {
    return g === 45 || We(g) ? (e.consume(g), x) : _(g);
  }
  function _(g) {
    return B(g) ? ((o = _), fe(g)) : q(g) ? (e.consume(g), _) : pe(g);
  }
  function L(g) {
    return g === 45 || We(g)
      ? (e.consume(g), L)
      : g === 47 || g === 62 || Be(g)
      ? j(g)
      : n(g);
  }
  function j(g) {
    return g === 47
      ? (e.consume(g), pe)
      : g === 58 || g === 95 || vt(g)
      ? (e.consume(g), A)
      : B(g)
      ? ((o = j), fe(g))
      : q(g)
      ? (e.consume(g), j)
      : pe(g);
  }
  function A(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || We(g)
      ? (e.consume(g), A)
      : b(g);
  }
  function b(g) {
    return g === 61
      ? (e.consume(g), D)
      : B(g)
      ? ((o = b), fe(g))
      : q(g)
      ? (e.consume(g), b)
      : j(g);
  }
  function D(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96
      ? n(g)
      : g === 34 || g === 39
      ? (e.consume(g), (i = g), Y)
      : B(g)
      ? ((o = D), fe(g))
      : q(g)
      ? (e.consume(g), D)
      : (e.consume(g), oe);
  }
  function Y(g) {
    return g === i
      ? (e.consume(g), (i = void 0), H)
      : g === null
      ? n(g)
      : B(g)
      ? ((o = Y), fe(g))
      : (e.consume(g), Y);
  }
  function oe(g) {
    return g === null ||
      g === 34 ||
      g === 39 ||
      g === 60 ||
      g === 61 ||
      g === 96
      ? n(g)
      : g === 47 || g === 62 || Be(g)
      ? j(g)
      : (e.consume(g), oe);
  }
  function H(g) {
    return g === 47 || g === 62 || Be(g) ? j(g) : n(g);
  }
  function pe(g) {
    return g === 62
      ? (e.consume(g), e.exit("htmlTextData"), e.exit("htmlText"), t)
      : n(g);
  }
  function fe(g) {
    return (
      e.exit("htmlTextData"),
      e.enter("lineEnding"),
      e.consume(g),
      e.exit("lineEnding"),
      z
    );
  }
  function z(g) {
    return q(g)
      ? te(
          e,
          F,
          "linePrefix",
          r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(g)
      : F(g);
  }
  function F(g) {
    return e.enter("htmlTextData"), o(g);
  }
}
const Ou = { name: "labelEnd", resolveAll: g0, resolveTo: y0, tokenize: v0 },
  p0 = { tokenize: w0 },
  h0 = { tokenize: k0 },
  m0 = { tokenize: x0 };
function g0(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (
      (n.push(e[t]),
      r.type === "labelImage" ||
        r.type === "labelLink" ||
        r.type === "labelEnd")
    ) {
      const i = r.type === "labelImage" ? 4 : 2;
      (r.type = "data"), (t += i);
    }
  }
  return e.length !== n.length && xt(e, 0, e.length, n), e;
}
function y0(e, t) {
  let n = e.length,
    r = 0,
    i,
    l,
    o,
    a;
  for (; n--; )
    if (((i = e[n][1]), l)) {
      if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (
        e[n][0] === "enter" &&
        (i.type === "labelImage" || i.type === "labelLink") &&
        !i._balanced &&
        ((l = n), i.type !== "labelLink")
      ) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = n);
  const u = {
      type: e[l][1].type === "labelLink" ? "link" : "image",
      start: { ...e[l][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    s = { type: "label", start: { ...e[l][1].start }, end: { ...e[o][1].end } },
    c = {
      type: "labelText",
      start: { ...e[l + r + 2][1].end },
      end: { ...e[o - 2][1].start },
    };
  return (
    (a = [
      ["enter", u, t],
      ["enter", s, t],
    ]),
    (a = Je(a, e.slice(l + 1, l + r + 3))),
    (a = Je(a, [["enter", c, t]])),
    (a = Je(
      a,
      Ru(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), t)
    )),
    (a = Je(a, [["exit", c, t], e[o - 2], e[o - 1], ["exit", s, t]])),
    (a = Je(a, e.slice(o + 1))),
    (a = Je(a, [["exit", u, t]])),
    xt(e, l, e.length, a),
    e
  );
}
function v0(e, t, n) {
  const r = this;
  let i = r.events.length,
    l,
    o;
  for (; i--; )
    if (
      (r.events[i][1].type === "labelImage" ||
        r.events[i][1].type === "labelLink") &&
      !r.events[i][1]._balanced
    ) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(p) {
    return l
      ? l._inactive
        ? f(p)
        : ((o = r.parser.defined.includes(
            qn(r.sliceSerialize({ start: l.end, end: r.now() }))
          )),
          e.enter("labelEnd"),
          e.enter("labelMarker"),
          e.consume(p),
          e.exit("labelMarker"),
          e.exit("labelEnd"),
          u)
      : n(p);
  }
  function u(p) {
    return p === 40
      ? e.attempt(p0, c, o ? c : f)(p)
      : p === 91
      ? e.attempt(h0, c, o ? s : f)(p)
      : o
      ? c(p)
      : f(p);
  }
  function s(p) {
    return e.attempt(m0, c, f)(p);
  }
  function c(p) {
    return t(p);
  }
  function f(p) {
    return (l._balanced = !0), n(p);
  }
}
function w0(e, t, n) {
  return r;
  function r(f) {
    return (
      e.enter("resource"),
      e.enter("resourceMarker"),
      e.consume(f),
      e.exit("resourceMarker"),
      i
    );
  }
  function i(f) {
    return Be(f) ? br(e, l)(f) : l(f);
  }
  function l(f) {
    return f === 41
      ? c(f)
      : Yp(
          e,
          o,
          a,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32
        )(f);
  }
  function o(f) {
    return Be(f) ? br(e, u)(f) : c(f);
  }
  function a(f) {
    return n(f);
  }
  function u(f) {
    return f === 34 || f === 39 || f === 40
      ? Gp(
          e,
          s,
          n,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString"
        )(f)
      : c(f);
  }
  function s(f) {
    return Be(f) ? br(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41
      ? (e.enter("resourceMarker"),
        e.consume(f),
        e.exit("resourceMarker"),
        e.exit("resource"),
        t)
      : n(f);
  }
}
function k0(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return Xp.call(
      r,
      e,
      l,
      o,
      "reference",
      "referenceMarker",
      "referenceString"
    )(a);
  }
  function l(a) {
    return r.parser.defined.includes(
      qn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
    )
      ? t(a)
      : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function x0(e, t, n) {
  return r;
  function r(l) {
    return (
      e.enter("reference"),
      e.enter("referenceMarker"),
      e.consume(l),
      e.exit("referenceMarker"),
      i
    );
  }
  function i(l) {
    return l === 93
      ? (e.enter("referenceMarker"),
        e.consume(l),
        e.exit("referenceMarker"),
        e.exit("reference"),
        t)
      : n(l);
  }
}
const S0 = { name: "labelStartImage", resolveAll: Ou.resolveAll, tokenize: E0 };
function E0(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.enter("labelImage"),
      e.enter("labelImageMarker"),
      e.consume(a),
      e.exit("labelImageMarker"),
      l
    );
  }
  function l(a) {
    return a === 91
      ? (e.enter("labelMarker"),
        e.consume(a),
        e.exit("labelMarker"),
        e.exit("labelImage"),
        o)
      : n(a);
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? n(a)
      : t(a);
  }
}
const C0 = { name: "labelStartLink", resolveAll: Ou.resolveAll, tokenize: I0 };
function I0(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return (
      e.enter("labelLink"),
      e.enter("labelMarker"),
      e.consume(o),
      e.exit("labelMarker"),
      e.exit("labelLink"),
      l
    );
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? n(o)
      : t(o);
  }
}
const yo = { name: "lineEnding", tokenize: P0 };
function P0(e, t) {
  return n;
  function n(r) {
    return (
      e.enter("lineEnding"),
      e.consume(r),
      e.exit("lineEnding"),
      te(e, t, "linePrefix")
    );
  }
}
const Vi = { name: "thematicBreak", tokenize: T0 };
function T0(e, t, n) {
  let r = 0,
    i;
  return l;
  function l(s) {
    return e.enter("thematicBreak"), o(s);
  }
  function o(s) {
    return (i = s), a(s);
  }
  function a(s) {
    return s === i
      ? (e.enter("thematicBreakSequence"), u(s))
      : r >= 3 && (s === null || B(s))
      ? (e.exit("thematicBreak"), t(s))
      : n(s);
  }
  function u(s) {
    return s === i
      ? (e.consume(s), r++, u)
      : (e.exit("thematicBreakSequence"),
        q(s) ? te(e, a, "whitespace")(s) : a(s));
  }
}
const Ae = {
    continuation: { tokenize: L0 },
    exit: O0,
    name: "list",
    tokenize: z0,
  },
  _0 = { partial: !0, tokenize: A0 },
  N0 = { partial: !0, tokenize: R0 };
function z0(e, t, n) {
  const r = this,
    i = r.events[r.events.length - 1];
  let l =
      i && i[1].type === "linePrefix"
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    o = 0;
  return a;
  function a(d) {
    const w =
      r.containerState.type ||
      (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
    if (
      w === "listUnordered"
        ? !r.containerState.marker || d === r.containerState.marker
        : Ca(d)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = w), e.enter(w, { _container: !0 })),
        w === "listUnordered")
      )
        return (
          e.enter("listItemPrefix"),
          d === 42 || d === 45 ? e.check(Vi, n, s)(d) : s(d)
        );
      if (!r.interrupt || d === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(d);
    }
    return n(d);
  }
  function u(d) {
    return Ca(d) && ++o < 10
      ? (e.consume(d), u)
      : (!r.interrupt || o < 2) &&
        (r.containerState.marker
          ? d === r.containerState.marker
          : d === 41 || d === 46)
      ? (e.exit("listItemValue"), s(d))
      : n(d);
  }
  function s(d) {
    return (
      e.enter("listItemMarker"),
      e.consume(d),
      e.exit("listItemMarker"),
      (r.containerState.marker = r.containerState.marker || d),
      e.check(Dl, r.interrupt ? n : c, e.attempt(_0, p, f))
    );
  }
  function c(d) {
    return (r.containerState.initialBlankLine = !0), l++, p(d);
  }
  function f(d) {
    return q(d)
      ? (e.enter("listItemPrefixWhitespace"),
        e.consume(d),
        e.exit("listItemPrefixWhitespace"),
        p)
      : n(d);
  }
  function p(d) {
    return (
      (r.containerState.size =
        l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
      t(d)
    );
  }
}
function L0(e, t, n) {
  const r = this;
  return (r.containerState._closeFlow = void 0), e.check(Dl, i, l);
  function i(a) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      te(e, t, "listItemIndent", r.containerState.size + 1)(a)
    );
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !q(a)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        o(a))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(N0, t, o)(a));
  }
  function o(a) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      te(
        e,
        e.attempt(Ae, t, n),
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(a)
    );
  }
}
function R0(e, t, n) {
  const r = this;
  return te(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o &&
      o[1].type === "listItemIndent" &&
      o[2].sliceSerialize(o[1], !0).length === r.containerState.size
      ? t(l)
      : n(l);
  }
}
function O0(e) {
  e.exit(this.containerState.type);
}
function A0(e, t, n) {
  const r = this;
  return te(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5
  );
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !q(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const zc = { name: "setextUnderline", resolveTo: b0, tokenize: M0 };
function b0(e, t) {
  let n = e.length,
    r,
    i,
    l;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1),
        !l && e[n][1].type === "definition" && (l = n);
  const o = {
    type: "setextHeading",
    start: { ...e[i][1].start },
    end: { ...e[e.length - 1][1].end },
  };
  return (
    (e[i][1].type = "setextHeadingText"),
    l
      ? (e.splice(i, 0, ["enter", o, t]),
        e.splice(l + 1, 0, ["exit", e[r][1], t]),
        (e[r][1].end = { ...e[l][1].end }))
      : (e[r][1] = o),
    e.push(["exit", o, t]),
    e
  );
}
function M0(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(s) {
    let c = r.events.length,
      f;
    for (; c--; )
      if (
        r.events[c][1].type !== "lineEnding" &&
        r.events[c][1].type !== "linePrefix" &&
        r.events[c][1].type !== "content"
      ) {
        f = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f)
      ? (e.enter("setextHeadingLine"), (i = s), o(s))
      : n(s);
  }
  function o(s) {
    return e.enter("setextHeadingLineSequence"), a(s);
  }
  function a(s) {
    return s === i
      ? (e.consume(s), a)
      : (e.exit("setextHeadingLineSequence"),
        q(s) ? te(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || B(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const D0 = { tokenize: F0 };
function F0(e) {
  const t = this,
    n = e.attempt(
      Dl,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        te(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt($1, i)),
          "linePrefix"
        )
      )
    );
  return n;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter("lineEndingBlank"),
      e.consume(l),
      e.exit("lineEndingBlank"),
      (t.currentConstruct = void 0),
      n
    );
  }
  function i(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(l),
      e.exit("lineEnding"),
      (t.currentConstruct = void 0),
      n
    );
  }
}
const j0 = { resolveAll: Zp() },
  B0 = Jp("string"),
  U0 = Jp("text");
function Jp(e) {
  return { resolveAll: Zp(e === "text" ? V0 : void 0), tokenize: t };
  function t(n) {
    const r = this,
      i = this.parser.constructs[e],
      l = n.attempt(i, o, a);
    return o;
    function o(c) {
      return s(c) ? l(c) : a(c);
    }
    function a(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), u;
    }
    function u(c) {
      return s(c) ? (n.exit("data"), l(c)) : (n.consume(c), u);
    }
    function s(c) {
      if (c === null) return !0;
      const f = i[c];
      let p = -1;
      if (f)
        for (; ++p < f.length; ) {
          const d = f[p];
          if (!d.previous || d.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function Zp(e) {
  return t;
  function t(n, r) {
    let i = -1,
      l;
    for (; ++i <= n.length; )
      l === void 0
        ? n[i] && n[i][1].type === "data" && ((l = i), i++)
        : (!n[i] || n[i][1].type !== "data") &&
          (i !== l + 2 &&
            ((n[l][1].end = n[i - 1][1].end),
            n.splice(l + 2, i - l - 2),
            (i = l + 2)),
          (l = void 0));
    return e ? e(n, r) : n;
  }
}
function V0(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if (
      (n === e.length || e[n][1].type === "lineEnding") &&
      e[n - 1][1].type === "data"
    ) {
      const r = e[n - 1][1],
        i = t.sliceStream(r);
      let l = i.length,
        o = -1,
        a = 0,
        u;
      for (; l--; ) {
        const s = i[l];
        if (typeof s == "string") {
          for (o = s.length; s.charCodeAt(o - 1) === 32; ) a++, o--;
          if (o) break;
          o = -1;
        } else if (s === -2) (u = !0), a++;
        else if (s !== -1) {
          l++;
          break;
        }
      }
      if (a) {
        const s = {
          type:
            n === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: l ? o : r.start._bufferIndex + o,
            _index: r.start._index + l,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
          },
          end: { ...r.end },
        };
        (r.end = { ...s.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, s)
            : (e.splice(n, 0, ["enter", s, t], ["exit", s, t]), (n += 2));
      }
      n++;
    }
  return e;
}
const $0 = {
    42: Ae,
    43: Ae,
    45: Ae,
    48: Ae,
    49: Ae,
    50: Ae,
    51: Ae,
    52: Ae,
    53: Ae,
    54: Ae,
    55: Ae,
    56: Ae,
    57: Ae,
    62: Wp,
  },
  H0 = { 91: q1 },
  W0 = { [-2]: go, [-1]: go, 32: go },
  Q0 = {
    35: e0,
    42: Vi,
    45: [zc, Vi],
    60: i0,
    61: zc,
    95: Vi,
    96: _c,
    126: _c,
  },
  K0 = { 38: Kp, 92: Qp },
  q0 = {
    [-5]: yo,
    [-4]: yo,
    [-3]: yo,
    33: S0,
    38: Kp,
    42: Ia,
    60: [C1, f0],
    91: C0,
    92: [J1, Qp],
    93: Ou,
    95: Ia,
    96: D1,
  },
  Y0 = { null: [Ia, j0] },
  X0 = { null: [42, 95] },
  G0 = { null: [] },
  J0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: X0,
        contentInitial: H0,
        disable: G0,
        document: $0,
        flow: Q0,
        flowInitial: W0,
        insideSpan: Y0,
        string: K0,
        text: q0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Z0(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: (n && n.line) || 1,
    column: (n && n.column) || 1,
    offset: (n && n.offset) || 0,
  };
  const i = {},
    l = [];
  let o = [],
    a = [];
  const u = {
      attempt: _(I),
      check: _(x),
      consume: m,
      enter: y,
      exit: S,
      interrupt: _(x, { interrupt: !0 }),
    },
    s = {
      code: null,
      containerState: {},
      defineSkip: k,
      events: [],
      now: w,
      parser: e,
      previous: null,
      sliceSerialize: p,
      sliceStream: d,
      write: f,
    };
  let c = t.tokenize.call(s, u);
  return t.resolveAll && l.push(t), s;
  function f(b) {
    return (
      (o = Je(o, b)),
      E(),
      o[o.length - 1] !== null
        ? []
        : (L(t, 0), (s.events = Ru(l, s.events, s)), s.events)
    );
  }
  function p(b, D) {
    return tw(d(b), D);
  }
  function d(b) {
    return ew(o, b);
  }
  function w() {
    const { _bufferIndex: b, _index: D, line: Y, column: oe, offset: H } = r;
    return { _bufferIndex: b, _index: D, line: Y, column: oe, offset: H };
  }
  function k(b) {
    (i[b.line] = b.column), A();
  }
  function E() {
    let b;
    for (; r._index < o.length; ) {
      const D = o[r._index];
      if (typeof D == "string")
        for (
          b = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === b && r._bufferIndex < D.length;

        )
          h(D.charCodeAt(r._bufferIndex));
      else h(D);
    }
  }
  function h(b) {
    c = c(b);
  }
  function m(b) {
    B(b)
      ? (r.line++, (r.column = 1), (r.offset += b === -3 ? 2 : 1), A())
      : b !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === o[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (s.previous = b);
  }
  function y(b, D) {
    const Y = D || {};
    return (
      (Y.type = b),
      (Y.start = w()),
      s.events.push(["enter", Y, s]),
      a.push(Y),
      Y
    );
  }
  function S(b) {
    const D = a.pop();
    return (D.end = w()), s.events.push(["exit", D, s]), D;
  }
  function I(b, D) {
    L(b, D.from);
  }
  function x(b, D) {
    D.restore();
  }
  function _(b, D) {
    return Y;
    function Y(oe, H, pe) {
      let fe, z, F, g;
      return Array.isArray(oe) ? G(oe) : "tokenize" in oe ? G([oe]) : Q(oe);
      function Q(ne) {
        return pt;
        function pt(At) {
          const Cn = At !== null && ne[At],
            In = At !== null && ne.null,
            si = [
              ...(Array.isArray(Cn) ? Cn : Cn ? [Cn] : []),
              ...(Array.isArray(In) ? In : In ? [In] : []),
            ];
          return G(si)(At);
        }
      }
      function G(ne) {
        return (fe = ne), (z = 0), ne.length === 0 ? pe : v(ne[z]);
      }
      function v(ne) {
        return pt;
        function pt(At) {
          return (
            (g = j()),
            (F = ne),
            ne.partial || (s.currentConstruct = ne),
            ne.name && s.parser.constructs.disable.null.includes(ne.name)
              ? it()
              : ne.tokenize.call(
                  D ? Object.assign(Object.create(s), D) : s,
                  u,
                  ge,
                  it
                )(At)
          );
        }
      }
      function ge(ne) {
        return b(F, g), H;
      }
      function it(ne) {
        return g.restore(), ++z < fe.length ? v(fe[z]) : pe;
      }
    }
  }
  function L(b, D) {
    b.resolveAll && !l.includes(b) && l.push(b),
      b.resolve &&
        xt(s.events, D, s.events.length - D, b.resolve(s.events.slice(D), s)),
      b.resolveTo && (s.events = b.resolveTo(s.events, s));
  }
  function j() {
    const b = w(),
      D = s.previous,
      Y = s.currentConstruct,
      oe = s.events.length,
      H = Array.from(a);
    return { from: oe, restore: pe };
    function pe() {
      (r = b),
        (s.previous = D),
        (s.currentConstruct = Y),
        (s.events.length = oe),
        (a = H),
        A();
    }
  }
  function A() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function ew(e, t) {
  const n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    l = t.end._bufferIndex;
  let o;
  if (n === i) o = [e[n].slice(r, l)];
  else {
    if (((o = e.slice(n, i)), r > -1)) {
      const a = o[0];
      typeof a == "string" ? (o[0] = a.slice(r)) : o.shift();
    }
    l > 0 && o.push(e[i].slice(0, l));
  }
  return o;
}
function tw(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const l = e[n];
    let o;
    if (typeof l == "string") o = l;
    else
      switch (l) {
        case -5: {
          o = "\r";
          break;
        }
        case -4: {
          o = `
`;
          break;
        }
        case -3: {
          o = `\r
`;
          break;
        }
        case -2: {
          o = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i) continue;
          o = " ";
          break;
        }
        default:
          o = String.fromCharCode(l);
      }
    (i = l === -2), r.push(o);
  }
  return r.join("");
}
function nw(e) {
  const r = {
    constructs: s1([J0, ...((e || {}).extensions || [])]),
    content: i(y1),
    defined: [],
    document: i(w1),
    flow: i(D0),
    lazy: {},
    string: i(B0),
    text: i(U0),
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return Z0(r, l, a);
    }
  }
}
function rw(e) {
  for (; !qp(e); );
  return e;
}
const Lc = /[\0\t\n\r]/g;
function iw() {
  let e = 1,
    t = "",
    n = !0,
    r;
  return i;
  function i(l, o, a) {
    const u = [];
    let s, c, f, p, d;
    for (
      l =
        t +
        (typeof l == "string"
          ? l.toString()
          : new TextDecoder(o || void 0).decode(l)),
        f = 0,
        t = "",
        n && (l.charCodeAt(0) === 65279 && f++, (n = void 0));
      f < l.length;

    ) {
      if (
        ((Lc.lastIndex = f),
        (s = Lc.exec(l)),
        (p = s && s.index !== void 0 ? s.index : l.length),
        (d = l.charCodeAt(p)),
        !s)
      ) {
        t = l.slice(f);
        break;
      }
      if (d === 10 && f === p && r) u.push(-3), (r = void 0);
      else
        switch (
          (r && (u.push(-5), (r = void 0)),
          f < p && (u.push(l.slice(f, p)), (e += p - f)),
          d)
        ) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, u.push(-2); e++ < c; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), (e = 1);
            break;
          }
          default:
            (r = !0), (e = 1);
        }
      f = p + 1;
    }
    return a && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const lw = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ow(e) {
  return e.replace(lw, aw);
}
function aw(e, t, n) {
  if (t) return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1),
      l = i === 120 || i === 88;
    return Hp(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return Lu(n) || e;
}
const eh = {}.hasOwnProperty;
function uw(e, t, n) {
  return (
    typeof t != "string" && ((n = t), (t = void 0)),
    sw(n)(rw(nw(n).document().write(iw()(e, t, !0))))
  );
}
function sw(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(Vu),
      autolinkProtocol: j,
      autolinkEmail: j,
      atxHeading: l(ju),
      blockQuote: l(In),
      characterEscape: j,
      characterReference: j,
      codeFenced: l(si),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(si, o),
      codeText: l(dh, o),
      codeTextData: j,
      data: j,
      codeFlowValue: j,
      definition: l(ph),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(hh),
      hardBreakEscape: l(Bu),
      hardBreakTrailing: l(Bu),
      htmlFlow: l(Uu, o),
      htmlFlowData: j,
      htmlText: l(Uu, o),
      htmlTextData: j,
      image: l(mh),
      label: o,
      link: l(Vu),
      listItem: l(gh),
      listItemValue: p,
      listOrdered: l($u, f),
      listUnordered: l($u),
      paragraph: l(yh),
      reference: v,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(ju),
      strong: l(vh),
      thematicBreak: l(kh),
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: I,
      autolink: u(),
      autolinkEmail: Cn,
      autolinkProtocol: At,
      blockQuote: u(),
      characterEscapeValue: A,
      characterReferenceMarkerHexadecimal: it,
      characterReferenceMarkerNumeric: it,
      characterReferenceValue: ne,
      characterReference: pt,
      codeFenced: u(E),
      codeFencedFence: k,
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: w,
      codeFlowValue: A,
      codeIndented: u(h),
      codeText: u(H),
      codeTextData: A,
      data: A,
      definition: u(),
      definitionDestinationString: S,
      definitionLabelString: m,
      definitionTitleString: y,
      emphasis: u(),
      hardBreakEscape: u(D),
      hardBreakTrailing: u(D),
      htmlFlow: u(Y),
      htmlFlowData: A,
      htmlText: u(oe),
      htmlTextData: A,
      image: u(fe),
      label: F,
      labelText: z,
      lineEnding: b,
      link: u(pe),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: ge,
      resourceDestinationString: g,
      resourceTitleString: Q,
      resource: G,
      setextHeading: u(L),
      setextHeadingLineSequence: _,
      setextHeadingText: x,
      strong: u(),
      thematicBreak: u(),
    },
  };
  th(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(C) {
    let N = { type: "root", children: [] };
    const U = {
        stack: [N],
        tokenStack: [],
        config: t,
        enter: a,
        exit: s,
        buffer: o,
        resume: c,
        data: n,
      },
      W = [];
    let J = -1;
    for (; ++J < C.length; )
      if (C[J][1].type === "listOrdered" || C[J][1].type === "listUnordered")
        if (C[J][0] === "enter") W.push(J);
        else {
          const lt = W.pop();
          J = i(C, lt, J);
        }
    for (J = -1; ++J < C.length; ) {
      const lt = t[C[J][0]];
      eh.call(lt, C[J][1].type) &&
        lt[C[J][1].type].call(
          Object.assign({ sliceSerialize: C[J][2].sliceSerialize }, U),
          C[J][1]
        );
    }
    if (U.tokenStack.length > 0) {
      const lt = U.tokenStack[U.tokenStack.length - 1];
      (lt[1] || Rc).call(U, void 0, lt[0]);
    }
    for (
      N.position = {
        start: Mt(
          C.length > 0 ? C[0][1].start : { line: 1, column: 1, offset: 0 }
        ),
        end: Mt(
          C.length > 0
            ? C[C.length - 2][1].end
            : { line: 1, column: 1, offset: 0 }
        ),
      },
        J = -1;
      ++J < t.transforms.length;

    )
      N = t.transforms[J](N) || N;
    return N;
  }
  function i(C, N, U) {
    let W = N - 1,
      J = -1,
      lt = !1,
      ln,
      St,
      sr,
      cr;
    for (; ++W <= U; ) {
      const Ue = C[W];
      switch (Ue[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ue[0] === "enter" ? J++ : J--, (cr = void 0);
          break;
        }
        case "lineEndingBlank": {
          Ue[0] === "enter" &&
            (ln && !cr && !J && !sr && (sr = W), (cr = void 0));
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          cr = void 0;
      }
      if (
        (!J && Ue[0] === "enter" && Ue[1].type === "listItemPrefix") ||
        (J === -1 &&
          Ue[0] === "exit" &&
          (Ue[1].type === "listUnordered" || Ue[1].type === "listOrdered"))
      ) {
        if (ln) {
          let Pn = W;
          for (St = void 0; Pn--; ) {
            const Et = C[Pn];
            if (
              Et[1].type === "lineEnding" ||
              Et[1].type === "lineEndingBlank"
            ) {
              if (Et[0] === "exit") continue;
              St && ((C[St][1].type = "lineEndingBlank"), (lt = !0)),
                (Et[1].type = "lineEnding"),
                (St = Pn);
            } else if (
              !(
                Et[1].type === "linePrefix" ||
                Et[1].type === "blockQuotePrefix" ||
                Et[1].type === "blockQuotePrefixWhitespace" ||
                Et[1].type === "blockQuoteMarker" ||
                Et[1].type === "listItemIndent"
              )
            )
              break;
          }
          sr && (!St || sr < St) && (ln._spread = !0),
            (ln.end = Object.assign({}, St ? C[St][1].start : Ue[1].end)),
            C.splice(St || W, 0, ["exit", ln, Ue[2]]),
            W++,
            U++;
        }
        if (Ue[1].type === "listItemPrefix") {
          const Pn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ue[1].start),
            end: void 0,
          };
          (ln = Pn),
            C.splice(W, 0, ["enter", Pn, Ue[2]]),
            W++,
            U++,
            (sr = void 0),
            (cr = !0);
        }
      }
    }
    return (C[N][1]._spread = lt), U;
  }
  function l(C, N) {
    return U;
    function U(W) {
      a.call(this, C(W), W), N && N.call(this, W);
    }
  }
  function o() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function a(C, N, U) {
    this.stack[this.stack.length - 1].children.push(C),
      this.stack.push(C),
      this.tokenStack.push([N, U || void 0]),
      (C.position = { start: Mt(N.start), end: void 0 });
  }
  function u(C) {
    return N;
    function N(U) {
      C && C.call(this, U), s.call(this, U);
    }
  }
  function s(C, N) {
    const U = this.stack.pop(),
      W = this.tokenStack.pop();
    if (W)
      W[0].type !== C.type &&
        (N ? N.call(this, C, W[0]) : (W[1] || Rc).call(this, C, W[0]));
    else
      throw new Error(
        "Cannot close `" +
          C.type +
          "` (" +
          Ar({ start: C.start, end: C.end }) +
          "): it’s not open"
      );
    U.position.end = Mt(C.end);
  }
  function c() {
    return a1(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(C) {
    if (this.data.expectingFirstListItemValue) {
      const N = this.stack[this.stack.length - 2];
      (N.start = Number.parseInt(this.sliceSerialize(C), 10)),
        (this.data.expectingFirstListItemValue = void 0);
    }
  }
  function d() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    N.lang = C;
  }
  function w() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    N.meta = C;
  }
  function k() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function E() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    (N.value = C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
      (this.data.flowCodeInside = void 0);
  }
  function h() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    N.value = C.replace(/(\r?\n|\r)$/g, "");
  }
  function m(C) {
    const N = this.resume(),
      U = this.stack[this.stack.length - 1];
    (U.label = N), (U.identifier = qn(this.sliceSerialize(C)).toLowerCase());
  }
  function y() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    N.title = C;
  }
  function S() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    N.url = C;
  }
  function I(C) {
    const N = this.stack[this.stack.length - 1];
    if (!N.depth) {
      const U = this.sliceSerialize(C).length;
      N.depth = U;
    }
  }
  function x() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function _(C) {
    const N = this.stack[this.stack.length - 1];
    N.depth = this.sliceSerialize(C).codePointAt(0) === 61 ? 1 : 2;
  }
  function L() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function j(C) {
    const U = this.stack[this.stack.length - 1].children;
    let W = U[U.length - 1];
    (!W || W.type !== "text") &&
      ((W = wh()),
      (W.position = { start: Mt(C.start), end: void 0 }),
      U.push(W)),
      this.stack.push(W);
  }
  function A(C) {
    const N = this.stack.pop();
    (N.value += this.sliceSerialize(C)), (N.position.end = Mt(C.end));
  }
  function b(C) {
    const N = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const U = N.children[N.children.length - 1];
      (U.position.end = Mt(C.end)), (this.data.atHardBreak = void 0);
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(N.type) &&
      (j.call(this, C), A.call(this, C));
  }
  function D() {
    this.data.atHardBreak = !0;
  }
  function Y() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    N.value = C;
  }
  function oe() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    N.value = C;
  }
  function H() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    N.value = C;
  }
  function pe() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const N = this.data.referenceType || "shortcut";
      (C.type += "Reference"),
        (C.referenceType = N),
        delete C.url,
        delete C.title;
    } else delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function fe() {
    const C = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const N = this.data.referenceType || "shortcut";
      (C.type += "Reference"),
        (C.referenceType = N),
        delete C.url,
        delete C.title;
    } else delete C.identifier, delete C.label;
    this.data.referenceType = void 0;
  }
  function z(C) {
    const N = this.sliceSerialize(C),
      U = this.stack[this.stack.length - 2];
    (U.label = ow(N)), (U.identifier = qn(N).toLowerCase());
  }
  function F() {
    const C = this.stack[this.stack.length - 1],
      N = this.resume(),
      U = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), U.type === "link")) {
      const W = C.children;
      U.children = W;
    } else U.alt = N;
  }
  function g() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    N.url = C;
  }
  function Q() {
    const C = this.resume(),
      N = this.stack[this.stack.length - 1];
    N.title = C;
  }
  function G() {
    this.data.inReference = void 0;
  }
  function v() {
    this.data.referenceType = "collapsed";
  }
  function ge(C) {
    const N = this.resume(),
      U = this.stack[this.stack.length - 1];
    (U.label = N),
      (U.identifier = qn(this.sliceSerialize(C)).toLowerCase()),
      (this.data.referenceType = "full");
  }
  function it(C) {
    this.data.characterReferenceType = C.type;
  }
  function ne(C) {
    const N = this.sliceSerialize(C),
      U = this.data.characterReferenceType;
    let W;
    U
      ? ((W = Hp(N, U === "characterReferenceMarkerNumeric" ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (W = Lu(N));
    const J = this.stack[this.stack.length - 1];
    J.value += W;
  }
  function pt(C) {
    const N = this.stack.pop();
    N.position.end = Mt(C.end);
  }
  function At(C) {
    A.call(this, C);
    const N = this.stack[this.stack.length - 1];
    N.url = this.sliceSerialize(C);
  }
  function Cn(C) {
    A.call(this, C);
    const N = this.stack[this.stack.length - 1];
    N.url = "mailto:" + this.sliceSerialize(C);
  }
  function In() {
    return { type: "blockquote", children: [] };
  }
  function si() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function dh() {
    return { type: "inlineCode", value: "" };
  }
  function ph() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function hh() {
    return { type: "emphasis", children: [] };
  }
  function ju() {
    return { type: "heading", depth: 0, children: [] };
  }
  function Bu() {
    return { type: "break" };
  }
  function Uu() {
    return { type: "html", value: "" };
  }
  function mh() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function Vu() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function $u(C) {
    return {
      type: "list",
      ordered: C.type === "listOrdered",
      start: null,
      spread: C._spread,
      children: [],
    };
  }
  function gh(C) {
    return { type: "listItem", spread: C._spread, checked: null, children: [] };
  }
  function yh() {
    return { type: "paragraph", children: [] };
  }
  function vh() {
    return { type: "strong", children: [] };
  }
  function wh() {
    return { type: "text", value: "" };
  }
  function kh() {
    return { type: "thematicBreak" };
  }
}
function Mt(e) {
  return { line: e.line, column: e.column, offset: e.offset };
}
function th(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? th(e, r) : cw(e, r);
  }
}
function cw(e, t) {
  let n;
  for (n in t)
    if (eh.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Rc(e, t) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          Ar({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          Ar({ start: t.start, end: t.end }) +
          ") is open"
      )
    : new Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          Ar({ start: t.start, end: t.end }) +
          ") is still open"
      );
}
function fw(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return uw(r, {
      ...t.data("settings"),
      ...e,
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || [],
    });
  }
}
function dw(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function pw(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: "text",
        value: `
`,
      },
    ]
  );
}
function hw(e, t) {
  const n = t.value
      ? t.value +
        `
`
      : "",
    r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }],
  };
  return (
    t.meta && (i.data = { meta: t.meta }),
    e.patch(t, i),
    (i = e.applyData(t, i)),
    (i = { type: "element", tagName: "pre", properties: {}, children: [i] }),
    e.patch(t, i),
    i
  );
}
function mw(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function gw(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function yw(e, t) {
  const n =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    r = String(t.identifier).toUpperCase(),
    i = ur(r.toLowerCase()),
    l = e.footnoteOrder.indexOf(r);
  let o,
    a = e.footnoteCounts.get(r);
  a === void 0
    ? ((a = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length))
    : (o = l + 1),
    (a += 1),
    e.footnoteCounts.set(r, a);
  const u = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"],
    },
    children: [{ type: "text", value: String(o) }],
  };
  e.patch(t, u);
  const s = { type: "element", tagName: "sup", properties: {}, children: [u] };
  return e.patch(t, s), e.applyData(t, s);
}
function vw(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ww(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function nh(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (
    (n === "collapsed"
      ? (r += "[]")
      : n === "full" && (r += "[" + (t.label || t.identifier) + "]"),
    t.type === "imageReference")
  )
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t),
    l = i[0];
  l && l.type === "text"
    ? (l.value = "[" + l.value)
    : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return (
    o && o.type === "text"
      ? (o.value += r)
      : i.push({ type: "text", value: r }),
    i
  );
}
function kw(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return nh(e, t);
  const i = { src: ur(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, l), e.applyData(t, l);
}
function xw(e, t) {
  const n = { src: ur(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Sw(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = { type: "element", tagName: "code", properties: {}, children: [n] };
  return e.patch(t, r), e.applyData(t, r);
}
function Ew(e, t) {
  const n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n);
  if (!r) return nh(e, t);
  const i = { href: ur(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t),
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Cw(e, t) {
  const n = { href: ur(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t),
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Iw(e, t, n) {
  const r = e.all(t),
    i = n ? Pw(n) : rh(t),
    l = {},
    o = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let f;
    c && c.type === "element" && c.tagName === "p"
      ? (f = c)
      : ((f = { type: "element", tagName: "p", properties: {}, children: [] }),
        r.unshift(f)),
      f.children.length > 0 && f.children.unshift({ type: "text", value: " " }),
      f.children.unshift({
        type: "element",
        tagName: "input",
        properties: { type: "checkbox", checked: t.checked, disabled: !0 },
        children: [],
      }),
      (l.className = ["task-list-item"]);
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const c = r[a];
    (i || a !== 0 || c.type !== "element" || c.tagName !== "p") &&
      o.push({
        type: "text",
        value: `
`,
      }),
      c.type === "element" && c.tagName === "p" && !i
        ? o.push(...c.children)
        : o.push(c);
  }
  const u = r[r.length - 1];
  u &&
    (i || u.type !== "element" || u.tagName !== "p") &&
    o.push({
      type: "text",
      value: `
`,
    });
  const s = { type: "element", tagName: "li", properties: l, children: o };
  return e.patch(t, s), e.applyData(t, s);
}
function Pw(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; ) t = rh(n[r]);
  }
  return t;
}
function rh(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Tw(e, t) {
  const n = {},
    r = e.all(t);
  let i = -1;
  for (
    typeof t.start == "number" && t.start !== 1 && (n.start = t.start);
    ++i < r.length;

  ) {
    const o = r[i];
    if (
      o.type === "element" &&
      o.tagName === "li" &&
      o.properties &&
      Array.isArray(o.properties.className) &&
      o.properties.className.includes("task-list-item")
    ) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const l = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0),
  };
  return e.patch(t, l), e.applyData(t, l);
}
function _w(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Nw(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function zw(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Lw(e, t) {
  const n = e.all(t),
    r = n.shift(),
    i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0),
    };
    e.patch(t.children[0], o), i.push(o);
  }
  if (n.length > 0) {
    const o = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(n, !0),
      },
      a = Tu(t.children[1]),
      u = Dp(t.children[t.children.length - 1]);
    a && u && (o.position = { start: a, end: u }), i.push(o);
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0),
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Rw(e, t, n) {
  const r = n ? n.children : void 0,
    l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
    o = n && n.type === "table" ? n.align : void 0,
    a = o ? o.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < a; ) {
    const f = t.children[u],
      p = {},
      d = o ? o[u] : void 0;
    d && (p.align = d);
    let w = { type: "element", tagName: l, properties: p, children: [] };
    f && ((w.children = e.all(f)), e.patch(f, w), (w = e.applyData(f, w))),
      s.push(w);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0),
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Ow(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    properties: {},
    children: e.all(t),
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Oc = 9,
  Ac = 32;
function Aw(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let r = n.exec(t),
    i = 0;
  const l = [];
  for (; r; )
    l.push(bc(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t));
  return l.push(bc(t.slice(i), i > 0, !1)), l.join("");
}
function bc(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === Oc || l === Ac; ) r++, (l = e.codePointAt(r));
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === Oc || l === Ac; ) i--, (l = e.codePointAt(i - 1));
  }
  return i > r ? e.slice(r, i) : "";
}
function bw(e, t) {
  const n = { type: "text", value: Aw(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Mw(e, t) {
  const n = { type: "element", tagName: "hr", properties: {}, children: [] };
  return e.patch(t, n), e.applyData(t, n);
}
const Dw = {
  blockquote: dw,
  break: pw,
  code: hw,
  delete: mw,
  emphasis: gw,
  footnoteReference: yw,
  heading: vw,
  html: ww,
  imageReference: kw,
  image: xw,
  inlineCode: Sw,
  linkReference: Ew,
  link: Cw,
  listItem: Iw,
  list: Tw,
  paragraph: _w,
  root: Nw,
  strong: zw,
  table: Lw,
  tableCell: Ow,
  tableRow: Rw,
  text: bw,
  thematicBreak: Mw,
  toml: Ti,
  yaml: Ti,
  definition: Ti,
  footnoteDefinition: Ti,
};
function Ti() {}
const ih = -1,
  Fl = 0,
  ml = 1,
  gl = 2,
  Au = 3,
  bu = 4,
  Mu = 5,
  Du = 6,
  lh = 7,
  oh = 8,
  Mc = typeof self == "object" ? self : globalThis,
  Fw = (e, t) => {
    const n = (i, l) => (e.set(l, i), i),
      r = (i) => {
        if (e.has(i)) return e.get(i);
        const [l, o] = t[i];
        switch (l) {
          case Fl:
          case ih:
            return n(o, i);
          case ml: {
            const a = n([], i);
            for (const u of o) a.push(r(u));
            return a;
          }
          case gl: {
            const a = n({}, i);
            for (const [u, s] of o) a[r(u)] = r(s);
            return a;
          }
          case Au:
            return n(new Date(o), i);
          case bu: {
            const { source: a, flags: u } = o;
            return n(new RegExp(a, u), i);
          }
          case Mu: {
            const a = n(new Map(), i);
            for (const [u, s] of o) a.set(r(u), r(s));
            return a;
          }
          case Du: {
            const a = n(new Set(), i);
            for (const u of o) a.add(r(u));
            return a;
          }
          case lh: {
            const { name: a, message: u } = o;
            return n(new Mc[a](u), i);
          }
          case oh:
            return n(BigInt(o), i);
          case "BigInt":
            return n(Object(BigInt(o)), i);
        }
        return n(new Mc[l](o), i);
      };
    return r;
  },
  Dc = (e) => Fw(new Map(), e)(0),
  _n = "",
  { toString: jw } = {},
  { keys: Bw } = Object,
  kr = (e) => {
    const t = typeof e;
    if (t !== "object" || !e) return [Fl, t];
    const n = jw.call(e).slice(8, -1);
    switch (n) {
      case "Array":
        return [ml, _n];
      case "Object":
        return [gl, _n];
      case "Date":
        return [Au, _n];
      case "RegExp":
        return [bu, _n];
      case "Map":
        return [Mu, _n];
      case "Set":
        return [Du, _n];
    }
    return n.includes("Array")
      ? [ml, n]
      : n.includes("Error")
      ? [lh, n]
      : [gl, n];
  },
  _i = ([e, t]) => e === Fl && (t === "function" || t === "symbol"),
  Uw = (e, t, n, r) => {
    const i = (o, a) => {
        const u = r.push(o) - 1;
        return n.set(a, u), u;
      },
      l = (o) => {
        if (n.has(o)) return n.get(o);
        let [a, u] = kr(o);
        switch (a) {
          case Fl: {
            let c = o;
            switch (u) {
              case "bigint":
                (a = oh), (c = o.toString());
                break;
              case "function":
              case "symbol":
                if (e) throw new TypeError("unable to serialize " + u);
                c = null;
                break;
              case "undefined":
                return i([ih], o);
            }
            return i([a, c], o);
          }
          case ml: {
            if (u) return i([u, [...o]], o);
            const c = [],
              f = i([a, c], o);
            for (const p of o) c.push(l(p));
            return f;
          }
          case gl: {
            if (u)
              switch (u) {
                case "BigInt":
                  return i([u, o.toString()], o);
                case "Boolean":
                case "Number":
                case "String":
                  return i([u, o.valueOf()], o);
              }
            if (t && "toJSON" in o) return l(o.toJSON());
            const c = [],
              f = i([a, c], o);
            for (const p of Bw(o))
              (e || !_i(kr(o[p]))) && c.push([l(p), l(o[p])]);
            return f;
          }
          case Au:
            return i([a, o.toISOString()], o);
          case bu: {
            const { source: c, flags: f } = o;
            return i([a, { source: c, flags: f }], o);
          }
          case Mu: {
            const c = [],
              f = i([a, c], o);
            for (const [p, d] of o)
              (e || !(_i(kr(p)) || _i(kr(d)))) && c.push([l(p), l(d)]);
            return f;
          }
          case Du: {
            const c = [],
              f = i([a, c], o);
            for (const p of o) (e || !_i(kr(p))) && c.push(l(p));
            return f;
          }
        }
        const { message: s } = o;
        return i([a, { name: u, message: s }], o);
      };
    return l;
  },
  Fc = (e, { json: t, lossy: n } = {}) => {
    const r = [];
    return Uw(!(t || n), !!t, new Map(), r)(e), r;
  },
  yl =
    typeof structuredClone == "function"
      ? (e, t) =>
          t && ("json" in t || "lossy" in t) ? Dc(Fc(e, t)) : structuredClone(e)
      : (e, t) => Dc(Fc(e, t));
function Vw(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return (
    t > 1 &&
      n.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{ type: "text", value: String(t) }],
      }),
    n
  );
}
function $w(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Hw(e) {
  const t =
      typeof e.options.clobberPrefix == "string"
        ? e.options.clobberPrefix
        : "user-content-",
    n = e.options.footnoteBackContent || Vw,
    r = e.options.footnoteBackLabel || $w,
    i = e.options.footnoteLabel || "Footnotes",
    l = e.options.footnoteLabelTagName || "h2",
    o = e.options.footnoteLabelProperties || { className: ["sr-only"] },
    a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(e.footnoteOrder[u]);
    if (!s) continue;
    const c = e.all(s),
      f = String(s.identifier).toUpperCase(),
      p = ur(f.toLowerCase());
    let d = 0;
    const w = [],
      k = e.footnoteCounts.get(f);
    for (; k !== void 0 && ++d <= k; ) {
      w.length > 0 && w.push({ type: "text", value: " " });
      let m = typeof n == "string" ? n : n(u, d);
      typeof m == "string" && (m = { type: "text", value: m }),
        w.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + t + "fnref-" + p + (d > 1 ? "-" + d : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(u, d),
            className: ["data-footnote-backref"],
          },
          children: Array.isArray(m) ? m : [m],
        });
    }
    const E = c[c.length - 1];
    if (E && E.type === "element" && E.tagName === "p") {
      const m = E.children[E.children.length - 1];
      m && m.type === "text"
        ? (m.value += " ")
        : E.children.push({ type: "text", value: " " }),
        E.children.push(...w);
    } else c.push(...w);
    const h = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(c, !0),
    };
    e.patch(s, h), a.push(h);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: l,
          properties: { ...yl(o), id: "footnote-label" },
          children: [{ type: "text", value: i }],
        },
        {
          type: "text",
          value: `
`,
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0),
        },
        {
          type: "text",
          value: `
`,
        },
      ],
    };
}
const ah = function (e) {
  if (e == null) return qw;
  if (typeof e == "function") return jl(e);
  if (typeof e == "object") return Array.isArray(e) ? Ww(e) : Qw(e);
  if (typeof e == "string") return Kw(e);
  throw new Error("Expected function, string, or object as test");
};
function Ww(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; ) t[n] = ah(e[n]);
  return jl(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; ) if (t[l].apply(this, i)) return !0;
    return !1;
  }
}
function Qw(e) {
  const t = e;
  return jl(n);
  function n(r) {
    const i = r;
    let l;
    for (l in e) if (i[l] !== t[l]) return !1;
    return !0;
  }
}
function Kw(e) {
  return jl(t);
  function t(n) {
    return n && n.type === e;
  }
}
function jl(e) {
  return t;
  function t(n, r, i) {
    return !!(
      Yw(n) && e.call(this, n, typeof r == "number" ? r : void 0, i || void 0)
    );
  }
}
function qw() {
  return !0;
}
function Yw(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const uh = [],
  Xw = !0,
  jc = !1,
  Gw = "skip";
function Jw(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function"
    ? ((r = n), (n = t))
    : (i = t);
  const l = ah(i),
    o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(u, s, c) {
    const f = u && typeof u == "object" ? u : {};
    if (typeof f.type == "string") {
      const d =
        typeof f.tagName == "string"
          ? f.tagName
          : typeof f.name == "string"
          ? f.name
          : void 0;
      Object.defineProperty(p, "name", {
        value: "node (" + (u.type + (d ? "<" + d + ">" : "")) + ")",
      });
    }
    return p;
    function p() {
      let d = uh,
        w,
        k,
        E;
      if (
        (!t || l(u, s, c[c.length - 1] || void 0)) &&
        ((d = Zw(n(u, c))), d[0] === jc)
      )
        return d;
      if ("children" in u && u.children) {
        const h = u;
        if (h.children && d[0] !== Gw)
          for (
            k = (r ? h.children.length : -1) + o, E = c.concat(h);
            k > -1 && k < h.children.length;

          ) {
            const m = h.children[k];
            if (((w = a(m, k, E)()), w[0] === jc)) return w;
            k = typeof w[1] == "number" ? w[1] : k + o;
          }
      }
      return d;
    }
  }
}
function Zw(e) {
  return Array.isArray(e)
    ? e
    : typeof e == "number"
    ? [Xw, e]
    : e == null
    ? uh
    : [e];
}
function sh(e, t, n, r) {
  let i, l, o;
  typeof t == "function" && typeof n != "function"
    ? ((l = void 0), (o = t), (i = n))
    : ((l = t), (o = n), (i = r)),
    Jw(e, l, a, i);
  function a(u, s) {
    const c = s[s.length - 1],
      f = c ? c.children.indexOf(u) : void 0;
    return o(u, f, c);
  }
}
const Pa = {}.hasOwnProperty,
  ek = {};
function tk(e, t) {
  const n = t || ek,
    r = new Map(),
    i = new Map(),
    l = new Map(),
    o = { ...Dw, ...n.handlers },
    a = {
      all: s,
      applyData: rk,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: l,
      footnoteOrder: [],
      handlers: o,
      one: u,
      options: n,
      patch: nk,
      wrap: lk,
    };
  return (
    sh(e, function (c) {
      if (c.type === "definition" || c.type === "footnoteDefinition") {
        const f = c.type === "definition" ? r : i,
          p = String(c.identifier).toUpperCase();
        f.has(p) || f.set(p, c);
      }
    }),
    a
  );
  function u(c, f) {
    const p = c.type,
      d = a.handlers[p];
    if (Pa.call(a.handlers, p) && d) return d(a, c, f);
    if (a.options.passThrough && a.options.passThrough.includes(p)) {
      if ("children" in c) {
        const { children: k, ...E } = c,
          h = yl(E);
        return (h.children = a.all(c)), h;
      }
      return yl(c);
    }
    return (a.options.unknownHandler || ik)(a, c, f);
  }
  function s(c) {
    const f = [];
    if ("children" in c) {
      const p = c.children;
      let d = -1;
      for (; ++d < p.length; ) {
        const w = a.one(p[d], c);
        if (w) {
          if (
            d &&
            p[d - 1].type === "break" &&
            (!Array.isArray(w) && w.type === "text" && (w.value = Bc(w.value)),
            !Array.isArray(w) && w.type === "element")
          ) {
            const k = w.children[0];
            k && k.type === "text" && (k.value = Bc(k.value));
          }
          Array.isArray(w) ? f.push(...w) : f.push(w);
        }
      }
    }
    return f;
  }
}
function nk(e, t) {
  e.position && (t.position = Dv(e));
}
function rk(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName,
      i = e.data.hChildren,
      l = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element") n.tagName = r;
      else {
        const o = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: o };
      }
    n.type === "element" && l && Object.assign(n.properties, yl(l)),
      "children" in n &&
        n.children &&
        i !== null &&
        i !== void 0 &&
        (n.children = i);
  }
  return n;
}
function ik(e, t) {
  const n = t.data || {},
    r =
      "value" in t && !(Pa.call(n, "hProperties") || Pa.call(n, "hChildren"))
        ? { type: "text", value: t.value }
        : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(t),
          };
  return e.patch(t, r), e.applyData(t, r);
}
function lk(e, t) {
  const n = [];
  let r = -1;
  for (
    t &&
    n.push({
      type: "text",
      value: `
`,
    });
    ++r < e.length;

  )
    r &&
      n.push({
        type: "text",
        value: `
`,
      }),
      n.push(e[r]);
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: "text",
        value: `
`,
      }),
    n
  );
}
function Bc(e) {
  let t = 0,
    n = e.charCodeAt(t);
  for (; n === 9 || n === 32; ) t++, (n = e.charCodeAt(t));
  return e.slice(t);
}
function Uc(e, t) {
  const n = tk(e, t),
    r = n.one(e, void 0),
    i = Hw(n),
    l = Array.isArray(r)
      ? { type: "root", children: r }
      : r || { type: "root", children: [] };
  return (
    i &&
      l.children.push(
        {
          type: "text",
          value: `
`,
        },
        i
      ),
    l
  );
}
function ok(e, t) {
  return e && "run" in e
    ? async function (n, r) {
        const i = Uc(n, { file: r, ...t });
        await e.run(i, r);
      }
    : function (n, r) {
        return Uc(n, { file: r, ...(e || t) });
      };
}
function Vc(e) {
  if (e) throw e;
}
var $i = Object.prototype.hasOwnProperty,
  ch = Object.prototype.toString,
  $c = Object.defineProperty,
  Hc = Object.getOwnPropertyDescriptor,
  Wc = function (t) {
    return typeof Array.isArray == "function"
      ? Array.isArray(t)
      : ch.call(t) === "[object Array]";
  },
  Qc = function (t) {
    if (!t || ch.call(t) !== "[object Object]") return !1;
    var n = $i.call(t, "constructor"),
      r =
        t.constructor &&
        t.constructor.prototype &&
        $i.call(t.constructor.prototype, "isPrototypeOf");
    if (t.constructor && !n && !r) return !1;
    var i;
    for (i in t);
    return typeof i > "u" || $i.call(t, i);
  },
  Kc = function (t, n) {
    $c && n.name === "__proto__"
      ? $c(t, n.name, {
          enumerable: !0,
          configurable: !0,
          value: n.newValue,
          writable: !0,
        })
      : (t[n.name] = n.newValue);
  },
  qc = function (t, n) {
    if (n === "__proto__")
      if ($i.call(t, n)) {
        if (Hc) return Hc(t, n).value;
      } else return;
    return t[n];
  },
  ak = function e() {
    var t,
      n,
      r,
      i,
      l,
      o,
      a = arguments[0],
      u = 1,
      s = arguments.length,
      c = !1;
    for (
      typeof a == "boolean" && ((c = a), (a = arguments[1] || {}), (u = 2)),
        (a == null || (typeof a != "object" && typeof a != "function")) &&
          (a = {});
      u < s;
      ++u
    )
      if (((t = arguments[u]), t != null))
        for (n in t)
          (r = qc(a, n)),
            (i = qc(t, n)),
            a !== i &&
              (c && i && (Qc(i) || (l = Wc(i)))
                ? (l
                    ? ((l = !1), (o = r && Wc(r) ? r : []))
                    : (o = r && Qc(r) ? r : {}),
                  Kc(a, { name: n, newValue: e(c, o, i) }))
                : typeof i < "u" && Kc(a, { name: n, newValue: i }));
    return a;
  };
const vo = ef(ak);
function Ta(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function uk() {
  const e = [],
    t = { run: n, use: r };
  return t;
  function n(...i) {
    let l = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(u, ...s) {
      const c = e[++l];
      let f = -1;
      if (u) {
        o(u);
        return;
      }
      for (; ++f < i.length; )
        (s[f] === null || s[f] === void 0) && (s[f] = i[f]);
      (i = s), c ? sk(c, a)(...s) : o(null, ...s);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + i);
    return e.push(i), t;
  }
}
function sk(e, t) {
  let n;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let u;
    a && o.push(i);
    try {
      u = e.apply(this, o);
    } catch (s) {
      const c = s;
      if (a && n) throw c;
      return i(c);
    }
    a ||
      (u && u.then && typeof u.then == "function"
        ? u.then(l, i)
        : u instanceof Error
        ? i(u)
        : l(u));
  }
  function i(o, ...a) {
    n || ((n = !0), t(o, ...a));
  }
  function l(o) {
    i(null, o);
  }
}
const gt = { basename: ck, dirname: fk, extname: dk, join: pk, sep: "/" };
function ck(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  ui(e);
  let n = 0,
    r = -1,
    i = e.length,
    l;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (l) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((l = !0), (r = i + 1));
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e) return "";
  let o = -1,
    a = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (l) {
        n = i + 1;
        break;
      }
    } else
      o < 0 && ((l = !0), (o = i + 1)),
        a > -1 &&
          (e.codePointAt(i) === t.codePointAt(a--)
            ? a < 0 && (r = i)
            : ((a = -1), (r = o)));
  return n === r ? (r = o) : r < 0 && (r = e.length), e.slice(n, r);
}
function fk(e) {
  if ((ui(e), e.length === 0)) return ".";
  let t = -1,
    n = e.length,
    r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0
    ? e.codePointAt(0) === 47
      ? "/"
      : "."
    : t === 1 && e.codePointAt(0) === 47
    ? "//"
    : e.slice(0, t);
}
function dk(e) {
  ui(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    l = 0,
    o;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && ((o = !0), (n = t + 1)),
      a === 46 ? (i < 0 ? (i = t) : l !== 1 && (l = 1)) : i > -1 && (l = -1);
  }
  return i < 0 || n < 0 || l === 0 || (l === 1 && i === n - 1 && i === r + 1)
    ? ""
    : e.slice(i, n);
}
function pk(...e) {
  let t = -1,
    n;
  for (; ++t < e.length; )
    ui(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : hk(n);
}
function hk(e) {
  ui(e);
  const t = e.codePointAt(0) === 47;
  let n = mk(e, !t);
  return (
    n.length === 0 && !t && (n = "."),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"),
    t ? "/" + n : n
  );
}
function mk(e, t) {
  let n = "",
    r = 0,
    i = -1,
    l = 0,
    o = -1,
    a,
    u;
  for (; ++o <= e.length; ) {
    if (o < e.length) a = e.codePointAt(o);
    else {
      if (a === 47) break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === o - 1 || l === 1))
        if (i !== o - 1 && l === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((u = n.lastIndexOf("/")), u !== n.length - 1)) {
                u < 0
                  ? ((n = ""), (r = 0))
                  : ((n = n.slice(0, u)),
                    (r = n.length - 1 - n.lastIndexOf("/"))),
                  (i = o),
                  (l = 0);
                continue;
              }
            } else if (n.length > 0) {
              (n = ""), (r = 0), (i = o), (l = 0);
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + "/.." : ".."), (r = 2));
        } else
          n.length > 0
            ? (n += "/" + e.slice(i + 1, o))
            : (n = e.slice(i + 1, o)),
            (r = o - i - 1);
      (i = o), (l = 0);
    } else a === 46 && l > -1 ? l++ : (l = -1);
  }
  return n;
}
function ui(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const gk = { cwd: yk };
function yk() {
  return "/";
}
function _a(e) {
  return !!(
    e !== null &&
    typeof e == "object" &&
    "href" in e &&
    e.href &&
    "protocol" in e &&
    e.protocol &&
    e.auth === void 0
  );
}
function vk(e) {
  if (typeof e == "string") e = new URL(e);
  else if (!_a(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`"
    );
    throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
  }
  return wk(e);
}
function wk(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
      }
    }
  return decodeURIComponent(t);
}
const wo = ["history", "path", "basename", "stem", "extname", "dirname"];
class fh {
  constructor(t) {
    let n;
    t
      ? _a(t)
        ? (n = { path: t })
        : typeof t == "string" || kk(t)
        ? (n = { value: t })
        : (n = t)
      : (n = {}),
      (this.cwd = "cwd" in n ? "" : gk.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored;
    let r = -1;
    for (; ++r < wo.length; ) {
      const l = wo[r];
      l in n &&
        n[l] !== void 0 &&
        n[l] !== null &&
        (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n) wo.includes(i) || (this[i] = n[i]);
  }
  get basename() {
    return typeof this.path == "string" ? gt.basename(this.path) : void 0;
  }
  set basename(t) {
    xo(t, "basename"),
      ko(t, "basename"),
      (this.path = gt.join(this.dirname || "", t));
  }
  get dirname() {
    return typeof this.path == "string" ? gt.dirname(this.path) : void 0;
  }
  set dirname(t) {
    Yc(this.basename, "dirname"), (this.path = gt.join(t || "", this.basename));
  }
  get extname() {
    return typeof this.path == "string" ? gt.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((ko(t, "extname"), Yc(this.dirname, "extname"), t)) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = gt.join(this.dirname, this.stem + (t || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    _a(t) && (t = vk(t)),
      xo(t, "path"),
      this.path !== t && this.history.push(t);
  }
  get stem() {
    return typeof this.path == "string"
      ? gt.basename(this.path, this.extname)
      : void 0;
  }
  set stem(t) {
    xo(t, "stem"),
      ko(t, "stem"),
      (this.path = gt.join(this.dirname || "", t + (this.extname || "")));
  }
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw ((i.fatal = !0), i);
  }
  info(t, n, r) {
    const i = this.message(t, n, r);
    return (i.fatal = void 0), i;
  }
  message(t, n, r) {
    const i = new Ne(t, n, r);
    return (
      this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  toString(t) {
    return this.value === void 0
      ? ""
      : typeof this.value == "string"
      ? this.value
      : new TextDecoder(t || void 0).decode(this.value);
  }
}
function ko(e, t) {
  if (e && e.includes(gt.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + gt.sep + "`"
    );
}
function xo(e, t) {
  if (!e) throw new Error("`" + t + "` cannot be empty");
}
function Yc(e, t) {
  if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function kk(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const xk = function (e) {
    const r = this.constructor.prototype,
      i = r[e],
      l = function () {
        return i.apply(l, arguments);
      };
    return Object.setPrototypeOf(l, r), l;
  },
  Sk = {}.hasOwnProperty;
class Fu extends xk {
  constructor() {
    super("copy"),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = uk());
  }
  copy() {
    const t = new Fu();
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(vo(!0, {}, this.namespace)), t;
  }
  data(t, n) {
    return typeof t == "string"
      ? arguments.length === 2
        ? (Co("data", this.frozen), (this.namespace[t] = n), this)
        : (Sk.call(this.namespace, t) && this.namespace[t]) || void 0
      : t
      ? (Co("data", this.frozen), (this.namespace = t), this)
      : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const t = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1) continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return (
      (this.frozen = !0), (this.freezeIndex = Number.POSITIVE_INFINITY), this
    );
  }
  parse(t) {
    this.freeze();
    const n = Ni(t),
      r = this.parser || this.Parser;
    return So("parse", r), r(String(n), n);
  }
  process(t, n) {
    const r = this;
    return (
      this.freeze(),
      So("process", this.parser || this.Parser),
      Eo("process", this.compiler || this.Compiler),
      n ? i(void 0, n) : new Promise(i)
    );
    function i(l, o) {
      const a = Ni(t),
        u = r.parse(a);
      r.run(u, a, function (c, f, p) {
        if (c || !f || !p) return s(c);
        const d = f,
          w = r.stringify(d, p);
        Ik(w) ? (p.value = w) : (p.result = w), s(c, p);
      });
      function s(c, f) {
        c || !f ? o(c) : l ? l(f) : n(void 0, f);
      }
    }
  }
  processSync(t) {
    let n = !1,
      r;
    return (
      this.freeze(),
      So("processSync", this.parser || this.Parser),
      Eo("processSync", this.compiler || this.Compiler),
      this.process(t, i),
      Gc("processSync", "process", n),
      r
    );
    function i(l, o) {
      (n = !0), Vc(l), (r = o);
    }
  }
  run(t, n, r) {
    Xc(t), this.freeze();
    const i = this.transformers;
    return (
      !r && typeof n == "function" && ((r = n), (n = void 0)),
      r ? l(void 0, r) : new Promise(l)
    );
    function l(o, a) {
      const u = Ni(n);
      i.run(t, u, s);
      function s(c, f, p) {
        const d = f || t;
        c ? a(c) : o ? o(d) : r(void 0, d, p);
      }
    }
  }
  runSync(t, n) {
    let r = !1,
      i;
    return this.run(t, n, l), Gc("runSync", "run", r), i;
    function l(o, a) {
      Vc(o), (i = a), (r = !0);
    }
  }
  stringify(t, n) {
    this.freeze();
    const r = Ni(n),
      i = this.compiler || this.Compiler;
    return Eo("stringify", i), Xc(t), i(t, r);
  }
  use(t, ...n) {
    const r = this.attachers,
      i = this.namespace;
    if ((Co("use", this.frozen), t != null))
      if (typeof t == "function") u(t, n);
      else if (typeof t == "object") Array.isArray(t) ? a(t) : o(t);
      else throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function l(s) {
      if (typeof s == "function") u(s, []);
      else if (typeof s == "object")
        if (Array.isArray(s)) {
          const [c, ...f] = s;
          u(c, f);
        } else o(s);
      else throw new TypeError("Expected usable value, not `" + s + "`");
    }
    function o(s) {
      if (!("plugins" in s) && !("settings" in s))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(s.plugins), s.settings && (i.settings = vo(!0, i.settings, s.settings));
    }
    function a(s) {
      let c = -1;
      if (s != null)
        if (Array.isArray(s))
          for (; ++c < s.length; ) {
            const f = s[c];
            l(f);
          }
        else throw new TypeError("Expected a list of plugins, not `" + s + "`");
    }
    function u(s, c) {
      let f = -1,
        p = -1;
      for (; ++f < r.length; )
        if (r[f][0] === s) {
          p = f;
          break;
        }
      if (p === -1) r.push([s, ...c]);
      else if (c.length > 0) {
        let [d, ...w] = c;
        const k = r[p][1];
        Ta(k) && Ta(d) && (d = vo(!0, k, d)), (r[p] = [s, d, ...w]);
      }
    }
  }
}
const Ek = new Fu().freeze();
function So(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Eo(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Co(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Xc(e) {
  if (!Ta(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Gc(e, t, n) {
  if (!n)
    throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Ni(e) {
  return Ck(e) ? e : new fh(e);
}
function Ck(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Ik(e) {
  return typeof e == "string" || Pk(e);
}
function Pk(e) {
  return !!(
    e &&
    typeof e == "object" &&
    "byteLength" in e &&
    "byteOffset" in e
  );
}
const Tk = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  Jc = [],
  Zc = { allowDangerousHtml: !0 },
  _k = /^(https?|ircs?|mailto|xmpp)$/i,
  Nk = [
    { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
    { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement",
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements",
    },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements",
    },
    { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
    { from: "includeElementIndex", id: "#remove-includeelementindex" },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
    { from: "linkTarget", id: "remove-linktarget" },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins",
    },
    { from: "rawSourcePos", id: "#remove-rawsourcepos" },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components",
    },
    { from: "source", id: "change-source-to-children", to: "children" },
    { from: "sourcePos", id: "#remove-sourcepos" },
    { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
    { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" },
  ];
function zk(e) {
  const t = e.allowedElements,
    n = e.allowElement,
    r = e.children || "",
    i = e.className,
    l = e.components,
    o = e.disallowedElements,
    a = e.rehypePlugins || Jc,
    u = e.remarkPlugins || Jc,
    s = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Zc } : Zc,
    c = e.skipHtml,
    f = e.unwrapDisallowed,
    p = e.urlTransform || Lk,
    d = Ek().use(fw).use(u).use(ok, s).use(a),
    w = new fh();
  typeof r == "string" && (w.value = r);
  for (const m of Nk)
    Object.hasOwn(e, m.from) &&
      ("" +
        m.from +
        (m.to ? "use `" + m.to + "` instead" : "remove it") +
        Tk +
        m.id,
      void 0);
  const k = d.parse(w);
  let E = d.runSync(k, w);
  return (
    i &&
      (E = {
        type: "element",
        tagName: "div",
        properties: { className: i },
        children: E.type === "root" ? E.children : [E],
      }),
    sh(E, h),
    $v(E, {
      Fragment: M.Fragment,
      components: l,
      ignoreInvalidStyle: !0,
      jsx: M.jsx,
      jsxs: M.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function h(m, y, S) {
    if (m.type === "raw" && S && typeof y == "number")
      return (
        c
          ? S.children.splice(y, 1)
          : (S.children[y] = { type: "text", value: m.value }),
        y
      );
    if (m.type === "element") {
      let I;
      for (I in mo)
        if (Object.hasOwn(mo, I) && Object.hasOwn(m.properties, I)) {
          const x = m.properties[I],
            _ = mo[I];
          (_ === null || _.includes(m.tagName)) &&
            (m.properties[I] = p(String(x || ""), I, m));
        }
    }
    if (m.type === "element") {
      let I = t ? !t.includes(m.tagName) : o ? o.includes(m.tagName) : !1;
      if (
        (!I && n && typeof y == "number" && (I = !n(m, y, S)),
        I && S && typeof y == "number")
      )
        return (
          f && m.children
            ? S.children.splice(y, 1, ...m.children)
            : S.children.splice(y, 1),
          y
        );
    }
  }
}
function Lk(e) {
  const t = e.indexOf(":"),
    n = e.indexOf("?"),
    r = e.indexOf("#"),
    i = e.indexOf("/");
  return t < 0 ||
    (i > -1 && t > i) ||
    (n > -1 && t > n) ||
    (r > -1 && t > r) ||
    _k.test(e.slice(0, t))
    ? e
    : "";
}
const Rk = ({ post: e, onBack: t }) =>
    M.jsxs(Cu, {
      className: "w-full max-w-4xl mx-auto",
      children: [
        M.jsxs("button", {
          onClick: t,
          className:
            "flex items-center text-blue-200 hover:text-blue-100 transition-colors mb-6",
          children: [M.jsx(Ky, { className: "w-5 h-5 mr-2" }), "Back to posts"],
        }),
        M.jsx("h1", {
          className: "text-3xl font-bold text-blue-100 mb-4",
          children: e.title,
        }),
        M.jsxs("div", {
          className: "flex items-center text-blue-300 text-sm mb-8",
          children: [
            M.jsx("span", { children: e.date }),
            M.jsx("span", { className: "mx-2", children: "•" }),
            M.jsx("span", { children: e.readTime }),
          ],
        }),
        M.jsx("div", {
          className: "prose prose-invert prose-blue max-w-none",
          children: M.jsx(zk, { children: e.content }),
        }),
      ],
    }),
  Ok = ({ isVisible: e }) => {
    const { id: t } = Iy(),
      n = Cp(),
      r = Tp.find((i) => i.id === t);
    return r
      ? M.jsx("div", {
          className: `w-full transition-all duration-1000 ${
            e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`,
          children: M.jsx(Rk, { post: r, onBack: () => n("/") }),
        })
      : M.jsx("div", {
          className: `max-w-4xl mx-auto px-6 transition-all duration-1000 ${
            e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`,
          children: M.jsx("h1", {
            className: "text-3xl text-blue-100",
            children: "Post not found",
          }),
        });
  };
function Ak() {
  const [e, t] = O.useState(!1);
  return (
    O.useEffect(() => {
      const n = setTimeout(() => t(!0), 1e3);
      return () => clearTimeout(n);
    }, []),
    M.jsx(Hy, {
      children: M.jsxs("div", {
        className: "relative min-h-screen",
        children: [
          M.jsx(rv, {}),
          M.jsx("div", {
            className:
              "relative z-10 min-h-screen flex items-center justify-center py-20",
            children: M.jsxs(Uy, {
              children: [
                M.jsx(va, { path: "/", element: M.jsx(nv, { isVisible: e }) }),
                M.jsx(va, {
                  path: "/blog/:id",
                  element: M.jsx(Ok, { isVisible: e }),
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
hp(document.getElementById("root")).render(
  M.jsx(O.StrictMode, { children: M.jsx(Ak, {}) })
);

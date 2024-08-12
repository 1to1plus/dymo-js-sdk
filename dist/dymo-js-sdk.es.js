import { get as Ar, set as un, isNumber as du, isNil as hu } from "lodash";
import mu from "axios";
import { XMLParser as gu } from "fast-xml-parser";
const ze = {
  DEBUG: !1,
  DETECT_DOUBLE_ESCAPING: !1,
  TRUSTED_SITE: !1,
  FORCE_NON_DOM_HTML_UNESCAPING: !1,
  ASSUME_MOBILE: !1,
  WS_PROTOCOL: "https://",
  Port: 41951,
  Host: "127.0.0.1",
  WS_START_PORT: 41951,
  WS_END_PORT: 41960,
  WS_CHECK_TIMEOUT: 3e3,
  WS_COMMAND_TIMEOUT: 1e4,
  WS_SVC_HOST: "127.0.0.1",
  WS_SVC_HOST_LEGACY: "localhost",
  WS_SVC_PATH: "DYMO/DLS/Printing",
  BASE_URL: void 0,
  dymo: {
    label: {
      framework: {
        currentFramework: 0,
        trace: !1
      }
    }
  }
}, yu = {
  WS_CMD_STATUS: "StatusConnected",
  WS_CMD_GET_PRINTERS: "GetPrinters",
  WS_CMD_OPEN_LABEL: "OpenLabelFile",
  WS_CMD_PRINT_LABEL: "PrintLabel",
  WS_CMD_PRINT_LABEL2: "PrintLabel2",
  WS_CMD_RENDER_LABEL: "RenderLabel",
  WS_CMD_LOAD_IMAGE: "LoadImageAsPngBase64",
  WS_CMD_GET_JOB_STATUS: "GetJobStatus",
  WS_CMD_IS_550_PRINTER: "Is550Printer",
  WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER: "GetConsumableInfoIn550Printer"
}, $t = "<TextMarkup>", Du = "</TextMarkup>", v = (t = void 0, e = void 0, r = !1) => {
  if (!t)
    return ze;
  const n = Ar(ze, t, void 0);
  return n === void 0 && !r ? Ar(yu, t, e) : n;
}, on = () => {
  const t = v("Host", "127.0.0.1"), e = v("Port"), r = `${v("WS_PROTOCOL") + t}:${e}/${v("WS_SVC_PATH")}/`;
  un(ze, "BASE_URL", r);
}, Zt = (t, e) => (["port", "host"].includes(t.toLowerCase()) && on(), un(ze, t, e));
ze.BASE_URL || on();
const an = (t, { host: e = v("Host"), port: r = v("Port") } = {}) => `${v("WS_PROTOCOL") + e}:${r}/${v("WS_SVC_PATH")}/` + t, Tt = (t, e) => {
  const { name: r } = t;
  e.push(t), e.byIndex.push(t), r.match(/^\d+$/) && console.error(
    `Printer name consisting of numbers only (${r}) will break proper array behavior. Consider using "byIndex" property for accessing elements by index reliably.`
  ), r === "length" && console.error('Using "length" as printer name overrides Array.length property!'), e[r] = t;
};
var Au = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vu(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Eu(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var u = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, u.get ? u : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var bu = Error, Cu = EvalError, Su = RangeError, wu = ReferenceError, ln = SyntaxError, Je = TypeError, Tu = URIError, Bu = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var u = 42;
  e[r] = u;
  for (r in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var o = Object.getOwnPropertySymbols(e);
  if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var i = Object.getOwnPropertyDescriptor(e, r);
    if (i.value !== u || i.enumerable !== !0)
      return !1;
  }
  return !0;
}, vr = typeof Symbol < "u" && Symbol, Nu = Bu, Fu = function() {
  return typeof vr != "function" || typeof Symbol != "function" || typeof vr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Nu();
}, Bt = {
  __proto__: null,
  foo: {}
}, Ou = Object, Iu = function() {
  return { __proto__: Bt }.foo === Bt.foo && !(Bt instanceof Ou);
}, xu = "Function.prototype.bind called on incompatible ", _u = Object.prototype.toString, Pu = Math.max, Lu = "[object Function]", Er = function(e, r) {
  for (var n = [], u = 0; u < e.length; u += 1)
    n[u] = e[u];
  for (var o = 0; o < r.length; o += 1)
    n[o + e.length] = r[o];
  return n;
}, Ru = function(e, r) {
  for (var n = [], u = r, o = 0; u < e.length; u += 1, o += 1)
    n[o] = e[u];
  return n;
}, Mu = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, ku = function(e) {
  var r = this;
  if (typeof r != "function" || _u.apply(r) !== Lu)
    throw new TypeError(xu + r);
  for (var n = Ru(arguments, 1), u, o = function() {
    if (this instanceof u) {
      var c = r.apply(
        this,
        Er(n, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return r.apply(
      e,
      Er(n, arguments)
    );
  }, i = Pu(0, r.length - n.length), l = [], a = 0; a < i; a++)
    l[a] = "$" + a;
  if (u = Function("binder", "return function (" + Mu(l, ",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
    var s = function() {
    };
    s.prototype = r.prototype, u.prototype = new s(), s.prototype = null;
  }
  return u;
}, qu = ku, er = Function.prototype.bind || qu, Uu = Function.prototype.call, $u = Object.prototype.hasOwnProperty, ju = er, Vu = ju.call(Uu, $u), A, Gu = bu, Wu = Cu, zu = Su, Hu = wu, Ie = ln, Fe = Je, Yu = Tu, sn = Function, Nt = function(t) {
  try {
    return sn('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, ge = Object.getOwnPropertyDescriptor;
if (ge)
  try {
    ge({}, "");
  } catch {
    ge = null;
  }
var Ft = function() {
  throw new Fe();
}, Xu = ge ? function() {
  try {
    return arguments.callee, Ft;
  } catch {
    try {
      return ge(arguments, "callee").get;
    } catch {
      return Ft;
    }
  }
}() : Ft, ve = Fu(), Ju = Iu(), I = Object.getPrototypeOf || (Ju ? function(t) {
  return t.__proto__;
} : null), Be = {}, Qu = typeof Uint8Array > "u" || !I ? A : I(Uint8Array), ye = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? A : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? A : ArrayBuffer,
  "%ArrayIteratorPrototype%": ve && I ? I([][Symbol.iterator]()) : A,
  "%AsyncFromSyncIteratorPrototype%": A,
  "%AsyncFunction%": Be,
  "%AsyncGenerator%": Be,
  "%AsyncGeneratorFunction%": Be,
  "%AsyncIteratorPrototype%": Be,
  "%Atomics%": typeof Atomics > "u" ? A : Atomics,
  "%BigInt%": typeof BigInt > "u" ? A : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? A : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? A : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? A : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Gu,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": Wu,
  "%Float32Array%": typeof Float32Array > "u" ? A : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? A : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? A : FinalizationRegistry,
  "%Function%": sn,
  "%GeneratorFunction%": Be,
  "%Int8Array%": typeof Int8Array > "u" ? A : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? A : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? A : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": ve && I ? I(I([][Symbol.iterator]())) : A,
  "%JSON%": typeof JSON == "object" ? JSON : A,
  "%Map%": typeof Map > "u" ? A : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !ve || !I ? A : I((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? A : Promise,
  "%Proxy%": typeof Proxy > "u" ? A : Proxy,
  "%RangeError%": zu,
  "%ReferenceError%": Hu,
  "%Reflect%": typeof Reflect > "u" ? A : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? A : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !ve || !I ? A : I((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? A : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": ve && I ? I(""[Symbol.iterator]()) : A,
  "%Symbol%": ve ? Symbol : A,
  "%SyntaxError%": Ie,
  "%ThrowTypeError%": Xu,
  "%TypedArray%": Qu,
  "%TypeError%": Fe,
  "%Uint8Array%": typeof Uint8Array > "u" ? A : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? A : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? A : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? A : Uint32Array,
  "%URIError%": Yu,
  "%WeakMap%": typeof WeakMap > "u" ? A : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? A : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? A : WeakSet
};
if (I)
  try {
    null.error;
  } catch (t) {
    var Ku = I(I(t));
    ye["%Error.prototype%"] = Ku;
  }
var Zu = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Nt("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Nt("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Nt("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var u = t("%AsyncGenerator%");
    u && I && (r = I(u.prototype));
  }
  return ye[e] = r, r;
}, br = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, Qe = er, ct = Vu, eo = Qe.call(Function.call, Array.prototype.concat), to = Qe.call(Function.apply, Array.prototype.splice), Cr = Qe.call(Function.call, String.prototype.replace), ft = Qe.call(Function.call, String.prototype.slice), ro = Qe.call(Function.call, RegExp.prototype.exec), no = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, uo = /\\(\\)?/g, oo = function(e) {
  var r = ft(e, 0, 1), n = ft(e, -1);
  if (r === "%" && n !== "%")
    throw new Ie("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Ie("invalid intrinsic syntax, expected opening `%`");
  var u = [];
  return Cr(e, no, function(o, i, l, a) {
    u[u.length] = l ? Cr(a, uo, "$1") : i || o;
  }), u;
}, io = function(e, r) {
  var n = e, u;
  if (ct(br, n) && (u = br[n], n = "%" + u[0] + "%"), ct(ye, n)) {
    var o = ye[n];
    if (o === Be && (o = Zu(n)), typeof o > "u" && !r)
      throw new Fe("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: u,
      name: n,
      value: o
    };
  }
  throw new Ie("intrinsic " + e + " does not exist!");
}, Me = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new Fe("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Fe('"allowMissing" argument must be a boolean');
  if (ro(/^%?[^%]*%?$/, e) === null)
    throw new Ie("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = oo(e), u = n.length > 0 ? n[0] : "", o = io("%" + u + "%", r), i = o.name, l = o.value, a = !1, s = o.alias;
  s && (u = s[0], to(n, eo([0, 1], s)));
  for (var c = 1, d = !0; c < n.length; c += 1) {
    var f = n[c], h = ft(f, 0, 1), g = ft(f, -1);
    if ((h === '"' || h === "'" || h === "`" || g === '"' || g === "'" || g === "`") && h !== g)
      throw new Ie("property names with quotes must have matching quotes");
    if ((f === "constructor" || !d) && (a = !0), u += "." + f, i = "%" + u + "%", ct(ye, i))
      l = ye[i];
    else if (l != null) {
      if (!(f in l)) {
        if (!r)
          throw new Fe("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (ge && c + 1 >= n.length) {
        var y = ge(l, f);
        d = !!y, d && "get" in y && !("originalValue" in y.get) ? l = y.get : l = l[f];
      } else
        d = ct(l, f), l = l[f];
      d && !a && (ye[i] = l);
    }
  }
  return l;
}, cn = { exports: {} }, Ot, Sr;
function tr() {
  if (Sr) return Ot;
  Sr = 1;
  var t = Me, e = t("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ot = e, Ot;
}
var ao = Me, lt = ao("%Object.getOwnPropertyDescriptor%", !0);
if (lt)
  try {
    lt([], "length");
  } catch {
    lt = null;
  }
var fn = lt, wr = tr(), lo = ln, Ee = Je, Tr = fn, so = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Ee("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Ee("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Ee("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Ee("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Ee("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Ee("`loose`, if provided, must be a boolean");
  var u = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, l = arguments.length > 6 ? arguments[6] : !1, a = !!Tr && Tr(e, r);
  if (wr)
    wr(e, r, {
      configurable: i === null && a ? a.configurable : !i,
      enumerable: u === null && a ? a.enumerable : !u,
      value: n,
      writable: o === null && a ? a.writable : !o
    });
  else if (l || !u && !o && !i)
    e[r] = n;
  else
    throw new lo("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, jt = tr(), pn = function() {
  return !!jt;
};
pn.hasArrayLengthDefineBug = function() {
  if (!jt)
    return null;
  try {
    return jt([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var co = pn, fo = Me, Br = so, po = co(), Nr = fn, Fr = Je, ho = fo("%Math.floor%"), mo = function(e, r) {
  if (typeof e != "function")
    throw new Fr("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || ho(r) !== r)
    throw new Fr("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], u = !0, o = !0;
  if ("length" in e && Nr) {
    var i = Nr(e, "length");
    i && !i.configurable && (u = !1), i && !i.writable && (o = !1);
  }
  return (u || o || !n) && (po ? Br(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : Br(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = er, r = Me, n = mo, u = Je, o = r("%Function.prototype.apply%"), i = r("%Function.prototype.call%"), l = r("%Reflect.apply%", !0) || e.call(i, o), a = tr(), s = r("%Math.max%");
  t.exports = function(f) {
    if (typeof f != "function")
      throw new u("a function is required");
    var h = l(e, i, arguments);
    return n(
      h,
      1 + s(0, f.length - (arguments.length - 1)),
      !0
    );
  };
  var c = function() {
    return l(e, o, arguments);
  };
  a ? a(t.exports, "apply", { value: c }) : t.exports.apply = c;
})(cn);
var go = cn.exports, dn = Me, hn = go, yo = hn(dn("String.prototype.indexOf")), Do = function(e, r) {
  var n = dn(e, !!r);
  return typeof n == "function" && yo(e, ".prototype.") > -1 ? hn(n) : n;
};
const Ao = {}, vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ao
}, Symbol.toStringTag, { value: "Module" })), Eo = /* @__PURE__ */ Eu(vo);
var rr = typeof Map == "function" && Map.prototype, It = Object.getOwnPropertyDescriptor && rr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, pt = rr && It && typeof It.get == "function" ? It.get : null, Or = rr && Map.prototype.forEach, nr = typeof Set == "function" && Set.prototype, xt = Object.getOwnPropertyDescriptor && nr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, dt = nr && xt && typeof xt.get == "function" ? xt.get : null, Ir = nr && Set.prototype.forEach, bo = typeof WeakMap == "function" && WeakMap.prototype, Ve = bo ? WeakMap.prototype.has : null, Co = typeof WeakSet == "function" && WeakSet.prototype, Ge = Co ? WeakSet.prototype.has : null, So = typeof WeakRef == "function" && WeakRef.prototype, xr = So ? WeakRef.prototype.deref : null, wo = Boolean.prototype.valueOf, To = Object.prototype.toString, Bo = Function.prototype.toString, No = String.prototype.match, ur = String.prototype.slice, ce = String.prototype.replace, Fo = String.prototype.toUpperCase, _r = String.prototype.toLowerCase, mn = RegExp.prototype.test, Pr = Array.prototype.concat, Q = Array.prototype.join, Oo = Array.prototype.slice, Lr = Math.floor, Vt = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, _t = Object.getOwnPropertySymbols, Gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, xe = typeof Symbol == "function" && typeof Symbol.iterator == "object", L = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === xe || !0) ? Symbol.toStringTag : null, gn = Object.prototype.propertyIsEnumerable, Rr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function Mr(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || mn.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -Lr(-t) : Lr(t);
    if (n !== t) {
      var u = String(n), o = ur.call(e, u.length + 1);
      return ce.call(u, r, "$&_") + "." + ce.call(ce.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return ce.call(e, r, "$&_");
}
var Wt = Eo, kr = Wt.custom, qr = Dn(kr) ? kr : null, Io = function t(e, r, n, u) {
  var o = r || {};
  if (se(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (se(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = se(o, "customInspect") ? o.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (se(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (se(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = o.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return vn(e, o);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var a = String(e);
    return l ? Mr(e, a) : a;
  }
  if (typeof e == "bigint") {
    var s = String(e) + "n";
    return l ? Mr(e, s) : s;
  }
  var c = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof e == "object")
    return zt(e) ? "[Array]" : "[Object]";
  var d = Xo(o, n);
  if (typeof u > "u")
    u = [];
  else if (An(u, e) >= 0)
    return "[Circular]";
  function f($, W, H) {
    if (W && (u = Oo.call(u), u.push(W)), H) {
      var C = {
        depth: o.depth
      };
      return se(o, "quoteStyle") && (C.quoteStyle = o.quoteStyle), t($, C, n + 1, u);
    }
    return t($, o, n + 1, u);
  }
  if (typeof e == "function" && !Ur(e)) {
    var h = Uo(e), g = nt(e, f);
    return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (g.length > 0 ? " { " + Q.call(g, ", ") + " }" : "");
  }
  if (Dn(e)) {
    var y = xe ? ce.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Gt.call(e);
    return typeof e == "object" && !xe ? qe(y) : y;
  }
  if (zo(e)) {
    for (var D = "<" + _r.call(String(e.nodeName)), b = e.attributes || [], M = 0; M < b.length; M++)
      D += " " + b[M].name + "=" + yn(xo(b[M].value), "double", o);
    return D += ">", e.childNodes && e.childNodes.length && (D += "..."), D += "</" + _r.call(String(e.nodeName)) + ">", D;
  }
  if (zt(e)) {
    if (e.length === 0)
      return "[]";
    var m = nt(e, f);
    return d && !Yo(m) ? "[" + Ht(m, d) + "]" : "[ " + Q.call(m, ", ") + " ]";
  }
  if (Po(e)) {
    var S = nt(e, f);
    return !("cause" in Error.prototype) && "cause" in e && !gn.call(e, "cause") ? "{ [" + String(e) + "] " + Q.call(Pr.call("[cause]: " + f(e.cause), S), ", ") + " }" : S.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Q.call(S, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (qr && typeof e[qr] == "function" && Wt)
      return Wt(e, { depth: c - n });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if ($o(e)) {
    var z = [];
    return Or && Or.call(e, function($, W) {
      z.push(f(W, e, !0) + " => " + f($, e));
    }), $r("Map", pt.call(e), z, d);
  }
  if (Go(e)) {
    var ie = [];
    return Ir && Ir.call(e, function($) {
      ie.push(f($, e));
    }), $r("Set", dt.call(e), ie, d);
  }
  if (jo(e))
    return Pt("WeakMap");
  if (Wo(e))
    return Pt("WeakSet");
  if (Vo(e))
    return Pt("WeakRef");
  if (Ro(e))
    return qe(f(Number(e)));
  if (ko(e))
    return qe(f(Vt.call(e)));
  if (Mo(e))
    return qe(wo.call(e));
  if (Lo(e))
    return qe(f(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === Au)
    return "{ [object globalThis] }";
  if (!_o(e) && !Ur(e)) {
    var ae = nt(e, f), de = Rr ? Rr(e) === Object.prototype : e instanceof Object || e.constructor === Object, w = e instanceof Object ? "" : "null prototype", G = !de && L && Object(e) === e && L in e ? ur.call(fe(e), 8, -1) : w ? "Object" : "", N = de || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", ee = N + (G || w ? "[" + Q.call(Pr.call([], G || [], w || []), ": ") + "] " : "");
    return ae.length === 0 ? ee + "{}" : d ? ee + "{" + Ht(ae, d) + "}" : ee + "{ " + Q.call(ae, ", ") + " }";
  }
  return String(e);
};
function yn(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function xo(t) {
  return ce.call(String(t), /"/g, "&quot;");
}
function zt(t) {
  return fe(t) === "[object Array]" && (!L || !(typeof t == "object" && L in t));
}
function _o(t) {
  return fe(t) === "[object Date]" && (!L || !(typeof t == "object" && L in t));
}
function Ur(t) {
  return fe(t) === "[object RegExp]" && (!L || !(typeof t == "object" && L in t));
}
function Po(t) {
  return fe(t) === "[object Error]" && (!L || !(typeof t == "object" && L in t));
}
function Lo(t) {
  return fe(t) === "[object String]" && (!L || !(typeof t == "object" && L in t));
}
function Ro(t) {
  return fe(t) === "[object Number]" && (!L || !(typeof t == "object" && L in t));
}
function Mo(t) {
  return fe(t) === "[object Boolean]" && (!L || !(typeof t == "object" && L in t));
}
function Dn(t) {
  if (xe)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !Gt)
    return !1;
  try {
    return Gt.call(t), !0;
  } catch {
  }
  return !1;
}
function ko(t) {
  if (!t || typeof t != "object" || !Vt)
    return !1;
  try {
    return Vt.call(t), !0;
  } catch {
  }
  return !1;
}
var qo = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function se(t, e) {
  return qo.call(t, e);
}
function fe(t) {
  return To.call(t);
}
function Uo(t) {
  if (t.name)
    return t.name;
  var e = No.call(Bo.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function An(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function $o(t) {
  if (!pt || !t || typeof t != "object")
    return !1;
  try {
    pt.call(t);
    try {
      dt.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function jo(t) {
  if (!Ve || !t || typeof t != "object")
    return !1;
  try {
    Ve.call(t, Ve);
    try {
      Ge.call(t, Ge);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Vo(t) {
  if (!xr || !t || typeof t != "object")
    return !1;
  try {
    return xr.call(t), !0;
  } catch {
  }
  return !1;
}
function Go(t) {
  if (!dt || !t || typeof t != "object")
    return !1;
  try {
    dt.call(t);
    try {
      pt.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Wo(t) {
  if (!Ge || !t || typeof t != "object")
    return !1;
  try {
    Ge.call(t, Ge);
    try {
      Ve.call(t, Ve);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function zo(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function vn(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return vn(ur.call(t, 0, e.maxStringLength), e) + n;
  }
  var u = ce.call(ce.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Ho);
  return yn(u, "single", e);
}
function Ho(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Fo.call(e.toString(16));
}
function qe(t) {
  return "Object(" + t + ")";
}
function Pt(t) {
  return t + " { ? }";
}
function $r(t, e, r, n) {
  var u = n ? Ht(r, n) : Q.call(r, ", ");
  return t + " (" + e + ") {" + u + "}";
}
function Yo(t) {
  for (var e = 0; e < t.length; e++)
    if (An(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Xo(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = Q.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Q.call(Array(e + 1), r)
  };
}
function Ht(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + Q.call(t, "," + r) + `
` + e.prev;
}
function nt(t, e) {
  var r = zt(t), n = [];
  if (r) {
    n.length = t.length;
    for (var u = 0; u < t.length; u++)
      n[u] = se(t, u) ? e(t[u], t) : "";
  }
  var o = typeof _t == "function" ? _t(t) : [], i;
  if (xe) {
    i = {};
    for (var l = 0; l < o.length; l++)
      i["$" + o[l]] = o[l];
  }
  for (var a in t)
    se(t, a) && (r && String(Number(a)) === a && a < t.length || xe && i["$" + a] instanceof Symbol || (mn.call(/[^\w$]/, a) ? n.push(e(a, t) + ": " + e(t[a], t)) : n.push(a + ": " + e(t[a], t))));
  if (typeof _t == "function")
    for (var s = 0; s < o.length; s++)
      gn.call(t, o[s]) && n.push("[" + e(o[s]) + "]: " + e(t[o[s]], t));
  return n;
}
var En = Me, ke = Do, Jo = Io, Qo = Je, ut = En("%WeakMap%", !0), ot = En("%Map%", !0), Ko = ke("WeakMap.prototype.get", !0), Zo = ke("WeakMap.prototype.set", !0), ei = ke("WeakMap.prototype.has", !0), ti = ke("Map.prototype.get", !0), ri = ke("Map.prototype.set", !0), ni = ke("Map.prototype.has", !0), or = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      t.next, t.next = n, n;
}, ui = function(t, e) {
  var r = or(t, e);
  return r && r.value;
}, oi = function(t, e, r) {
  var n = or(t, e);
  n ? n.value = r : t.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: t.next,
    value: r
  };
}, ii = function(t, e) {
  return !!or(t, e);
}, ai = function() {
  var e, r, n, u = {
    assert: function(o) {
      if (!u.has(o))
        throw new Qo("Side channel does not contain " + Jo(o));
    },
    get: function(o) {
      if (ut && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Ko(e, o);
      } else if (ot) {
        if (r)
          return ti(r, o);
      } else if (n)
        return ui(n, o);
    },
    has: function(o) {
      if (ut && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return ei(e, o);
      } else if (ot) {
        if (r)
          return ni(r, o);
      } else if (n)
        return ii(n, o);
      return !1;
    },
    set: function(o, i) {
      ut && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new ut()), Zo(e, o, i)) : ot ? (r || (r = new ot()), ri(r, o, i)) : (n || (n = { key: {}, next: null }), oi(n, o, i));
    }
  };
  return u;
}, li = String.prototype.replace, si = /%20/g, Lt = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, ir = {
  default: Lt.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return li.call(t, si, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: Lt.RFC1738,
  RFC3986: Lt.RFC3986
}, ci = ir, Rt = Object.prototype.hasOwnProperty, he = Array.isArray, X = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), fi = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (he(n)) {
      for (var u = [], o = 0; o < n.length; ++o)
        typeof n[o] < "u" && u.push(n[o]);
      r.obj[r.prop] = u;
    }
  }
}, bn = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, u = 0; u < e.length; ++u)
    typeof e[u] < "u" && (n[u] = e[u]);
  return n;
}, pi = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (he(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Rt.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var u = e;
  return he(e) && !he(r) && (u = bn(e, n)), he(e) && he(r) ? (r.forEach(function(o, i) {
    if (Rt.call(e, i)) {
      var l = e[i];
      l && typeof l == "object" && o && typeof o == "object" ? e[i] = t(l, o, n) : e.push(o);
    } else
      e[i] = o;
  }), e) : Object.keys(r).reduce(function(o, i) {
    var l = r[i];
    return Rt.call(o, i) ? o[i] = t(o[i], l, n) : o[i] = l, o;
  }, u);
}, di = function(e, r) {
  return Object.keys(r).reduce(function(n, u) {
    return n[u] = r[u], n;
  }, e);
}, hi = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Mt = 1024, mi = function(e, r, n, u, o) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), n === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(h) {
      return "%26%23" + parseInt(h.slice(2), 16) + "%3B";
    });
  for (var l = "", a = 0; a < i.length; a += Mt) {
    for (var s = i.length >= Mt ? i.slice(a, a + Mt) : i, c = [], d = 0; d < s.length; ++d) {
      var f = s.charCodeAt(d);
      if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || o === ci.RFC1738 && (f === 40 || f === 41)) {
        c[c.length] = s.charAt(d);
        continue;
      }
      if (f < 128) {
        c[c.length] = X[f];
        continue;
      }
      if (f < 2048) {
        c[c.length] = X[192 | f >> 6] + X[128 | f & 63];
        continue;
      }
      if (f < 55296 || f >= 57344) {
        c[c.length] = X[224 | f >> 12] + X[128 | f >> 6 & 63] + X[128 | f & 63];
        continue;
      }
      d += 1, f = 65536 + ((f & 1023) << 10 | s.charCodeAt(d) & 1023), c[c.length] = X[240 | f >> 18] + X[128 | f >> 12 & 63] + X[128 | f >> 6 & 63] + X[128 | f & 63];
    }
    l += c.join("");
  }
  return l;
}, gi = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], u = 0; u < r.length; ++u)
    for (var o = r[u], i = o.obj[o.prop], l = Object.keys(i), a = 0; a < l.length; ++a) {
      var s = l[a], c = i[s];
      typeof c == "object" && c !== null && n.indexOf(c) === -1 && (r.push({ obj: i, prop: s }), n.push(c));
    }
  return fi(r), e;
}, yi = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Di = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Ai = function(e, r) {
  return [].concat(e, r);
}, vi = function(e, r) {
  if (he(e)) {
    for (var n = [], u = 0; u < e.length; u += 1)
      n.push(r(e[u]));
    return n;
  }
  return r(e);
}, Cn = {
  arrayToObject: bn,
  assign: di,
  combine: Ai,
  compact: gi,
  decode: hi,
  encode: mi,
  isBuffer: Di,
  isRegExp: yi,
  maybeMap: vi,
  merge: pi
}, Sn = ai, st = Cn, We = ir, Ei = Object.prototype.hasOwnProperty, wn = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, r) {
    return e + "[" + r + "]";
  },
  repeat: function(e) {
    return e;
  }
}, J = Array.isArray, bi = Array.prototype.push, Tn = function(t, e) {
  bi.apply(t, J(e) ? e : [e]);
}, Ci = Date.prototype.toISOString, jr = We.default, O = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: st.encode,
  encodeValuesOnly: !1,
  format: jr,
  formatter: We.formatters[jr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return Ci.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Si = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, kt = {}, wi = function t(e, r, n, u, o, i, l, a, s, c, d, f, h, g, y, D, b, M) {
  for (var m = e, S = M, z = 0, ie = !1; (S = S.get(kt)) !== void 0 && !ie; ) {
    var ae = S.get(e);
    if (z += 1, typeof ae < "u") {
      if (ae === z)
        throw new RangeError("Cyclic object value");
      ie = !0;
    }
    typeof S.get(kt) > "u" && (z = 0);
  }
  if (typeof c == "function" ? m = c(r, m) : m instanceof Date ? m = h(m) : n === "comma" && J(m) && (m = st.maybeMap(m, function(wt) {
    return wt instanceof Date ? h(wt) : wt;
  })), m === null) {
    if (i)
      return s && !D ? s(r, O.encoder, b, "key", g) : r;
    m = "";
  }
  if (Si(m) || st.isBuffer(m)) {
    if (s) {
      var de = D ? r : s(r, O.encoder, b, "key", g);
      return [y(de) + "=" + y(s(m, O.encoder, b, "value", g))];
    }
    return [y(r) + "=" + y(String(m))];
  }
  var w = [];
  if (typeof m > "u")
    return w;
  var G;
  if (n === "comma" && J(m))
    D && s && (m = st.maybeMap(m, s)), G = [{ value: m.length > 0 ? m.join(",") || null : void 0 }];
  else if (J(c))
    G = c;
  else {
    var N = Object.keys(m);
    G = d ? N.sort(d) : N;
  }
  var ee = a ? r.replace(/\./g, "%2E") : r, $ = u && J(m) && m.length === 1 ? ee + "[]" : ee;
  if (o && J(m) && m.length === 0)
    return $ + "[]";
  for (var W = 0; W < G.length; ++W) {
    var H = G[W], C = typeof H == "object" && typeof H.value < "u" ? H.value : m[H];
    if (!(l && C === null)) {
      var P = f && a ? H.replace(/\./g, "%2E") : H, St = J(m) ? typeof n == "function" ? n($, P) : $ : $ + (f ? "." + P : "[" + P + "]");
      M.set(e, z);
      var Dr = Sn();
      Dr.set(kt, M), Tn(w, t(
        C,
        St,
        n,
        u,
        o,
        i,
        l,
        a,
        n === "comma" && D && J(m) ? null : s,
        c,
        d,
        f,
        h,
        g,
        y,
        D,
        b,
        Dr
      ));
    }
  }
  return w;
}, Ti = function(e) {
  if (!e)
    return O;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || O.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = We.default;
  if (typeof e.format < "u") {
    if (!Ei.call(We.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var u = We.formatters[n], o = O.filter;
  (typeof e.filter == "function" || J(e.filter)) && (o = e.filter);
  var i;
  if (e.arrayFormat in wn ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = O.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : O.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : O.addQueryPrefix,
    allowDots: l,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : O.allowEmptyArrays,
    arrayFormat: i,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : O.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? O.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : O.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : O.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : O.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : O.encodeValuesOnly,
    filter: o,
    format: n,
    formatter: u,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : O.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : O.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : O.strictNullHandling
  };
}, Bi = function(t, e) {
  var r = t, n = Ti(e), u, o;
  typeof n.filter == "function" ? (o = n.filter, r = o("", r)) : J(n.filter) && (o = n.filter, u = o);
  var i = [];
  if (typeof r != "object" || r === null)
    return "";
  var l = wn[n.arrayFormat], a = l === "comma" && n.commaRoundTrip;
  u || (u = Object.keys(r)), n.sort && u.sort(n.sort);
  for (var s = Sn(), c = 0; c < u.length; ++c) {
    var d = u[c];
    n.skipNulls && r[d] === null || Tn(i, wi(
      r[d],
      d,
      l,
      a,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      s
    ));
  }
  var f = i.join(n.delimiter), h = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), f.length > 0 ? h + f : "";
}, _e = Cn, Yt = Object.prototype.hasOwnProperty, Ni = Array.isArray, T = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
  decoder: _e.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Fi = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Bn = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Oi = "utf8=%26%2310003%3B", Ii = "utf8=%E2%9C%93", xi = function(e, r) {
  var n = { __proto__: null }, u = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, i = u.split(r.delimiter, o), l = -1, a, s = r.charset;
  if (r.charsetSentinel)
    for (a = 0; a < i.length; ++a)
      i[a].indexOf("utf8=") === 0 && (i[a] === Ii ? s = "utf-8" : i[a] === Oi && (s = "iso-8859-1"), l = a, a = i.length);
  for (a = 0; a < i.length; ++a)
    if (a !== l) {
      var c = i[a], d = c.indexOf("]="), f = d === -1 ? c.indexOf("=") : d + 1, h, g;
      f === -1 ? (h = r.decoder(c, T.decoder, s, "key"), g = r.strictNullHandling ? null : "") : (h = r.decoder(c.slice(0, f), T.decoder, s, "key"), g = _e.maybeMap(
        Bn(c.slice(f + 1), r),
        function(D) {
          return r.decoder(D, T.decoder, s, "value");
        }
      )), g && r.interpretNumericEntities && s === "iso-8859-1" && (g = Fi(g)), c.indexOf("[]=") > -1 && (g = Ni(g) ? [g] : g);
      var y = Yt.call(n, h);
      y && r.duplicates === "combine" ? n[h] = _e.combine(n[h], g) : (!y || r.duplicates === "last") && (n[h] = g);
    }
  return n;
}, _i = function(t, e, r, n) {
  for (var u = n ? e : Bn(e, r), o = t.length - 1; o >= 0; --o) {
    var i, l = t[o];
    if (l === "[]" && r.parseArrays)
      i = r.allowEmptyArrays && u === "" ? [] : [].concat(u);
    else {
      i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var a = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, s = r.decodeDotInKeys ? a.replace(/%2E/g, ".") : a, c = parseInt(s, 10);
      !r.parseArrays && s === "" ? i = { 0: u } : !isNaN(c) && l !== s && String(c) === s && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (i = [], i[c] = u) : s !== "__proto__" && (i[s] = u);
    }
    u = i;
  }
  return u;
}, Pi = function(e, r, n, u) {
  if (e) {
    var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, a = n.depth > 0 && i.exec(o), s = a ? o.slice(0, a.index) : o, c = [];
    if (s) {
      if (!n.plainObjects && Yt.call(Object.prototype, s) && !n.allowPrototypes)
        return;
      c.push(s);
    }
    for (var d = 0; n.depth > 0 && (a = l.exec(o)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && Yt.call(Object.prototype, a[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      c.push(a[1]);
    }
    return a && c.push("[" + o.slice(a.index) + "]"), _i(c, r, n, u);
  }
}, Li = function(e) {
  if (!e)
    return T;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? T.charset : e.charset, n = typeof e.duplicates > "u" ? T.duplicates : e.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var u = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : T.allowDots : !!e.allowDots;
  return {
    allowDots: u,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : T.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : T.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : T.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : T.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : T.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : T.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : T.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : T.decoder,
    delimiter: typeof e.delimiter == "string" || _e.isRegExp(e.delimiter) ? e.delimiter : T.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : T.depth,
    duplicates: n,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : T.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : T.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : T.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : T.strictNullHandling
  };
}, Ri = function(t, e) {
  var r = Li(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? xi(t, r) : t, u = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = Object.keys(n), i = 0; i < o.length; ++i) {
    var l = o[i], a = Pi(l, n[l], r, typeof t == "string");
    u = _e.merge(u, a, r);
  }
  return r.allowSparse === !0 ? u : _e.compact(u);
}, Mi = Bi, ki = Ri, qi = ir, Ui = {
  formats: qi,
  parse: ki,
  stringify: Mi
};
const $i = /* @__PURE__ */ vu(Ui);
var ue = {}, oe = {};
function ji(t, e, r) {
  if (r === void 0 && (r = Array.prototype), t && typeof r.find == "function")
    return r.find.call(t, e);
  for (var n = 0; n < t.length; n++)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      var u = t[n];
      if (e.call(void 0, u, n, t))
        return u;
    }
}
function ar(t, e) {
  return e === void 0 && (e = Object), e && typeof e.freeze == "function" ? e.freeze(t) : t;
}
function Vi(t, e) {
  if (t === null || typeof t != "object")
    throw new TypeError("target is not an object");
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t;
}
var Nn = ar({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see DOMParser.SupportedType.isHTML
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
   */
  HTML: "text/html",
  /**
   * Helper method to check a mime type if it indicates an HTML document
   *
   * @param {string} [value]
   * @returns {boolean}
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  isHTML: function(t) {
    return t === Nn.HTML;
  },
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: "application/xml",
  /**
   * `text/html`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: "text/xml",
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: "application/xhtml+xml",
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: "image/svg+xml"
}), Fn = ar({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: "http://www.w3.org/1999/xhtml",
  /**
   * Checks if `uri` equals `NAMESPACE.HTML`.
   *
   * @param {string} [uri]
   *
   * @see NAMESPACE.HTML
   */
  isHTML: function(t) {
    return t === Fn.HTML;
  },
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: "http://www.w3.org/2000/svg",
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: "http://www.w3.org/XML/1998/namespace",
  /**
   * The `xmlns:` namespace
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: "http://www.w3.org/2000/xmlns/"
});
oe.assign = Vi;
oe.find = ji;
oe.freeze = ar;
oe.MIME_TYPE = Nn;
oe.NAMESPACE = Fn;
var On = oe, K = On.find, He = On.NAMESPACE;
function Gi(t) {
  return t !== "";
}
function Wi(t) {
  return t ? t.split(/[\t\n\f\r ]+/).filter(Gi) : [];
}
function zi(t, e) {
  return t.hasOwnProperty(e) || (t[e] = !0), t;
}
function Vr(t) {
  if (!t) return [];
  var e = Wi(t);
  return Object.keys(e.reduce(zi, {}));
}
function Hi(t) {
  return function(e) {
    return t && t.indexOf(e) !== -1;
  };
}
function Ke(t, e) {
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
}
function q(t, e) {
  var r = t.prototype;
  if (!(r instanceof e)) {
    let n = function() {
    };
    n.prototype = e.prototype, n = new n(), Ke(r, n), t.prototype = r = n;
  }
  r.constructor != t && (typeof t != "function" && console.error("unknown Class:" + t), r.constructor = t);
}
var U = {}, Y = U.ELEMENT_NODE = 1, Pe = U.ATTRIBUTE_NODE = 2, ht = U.TEXT_NODE = 3, In = U.CDATA_SECTION_NODE = 4, xn = U.ENTITY_REFERENCE_NODE = 5, Yi = U.ENTITY_NODE = 6, _n = U.PROCESSING_INSTRUCTION_NODE = 7, Pn = U.COMMENT_NODE = 8, Ln = U.DOCUMENT_NODE = 9, Rn = U.DOCUMENT_TYPE_NODE = 10, re = U.DOCUMENT_FRAGMENT_NODE = 11, Xi = U.NOTATION_NODE = 12, R = {}, x = {};
R.INDEX_SIZE_ERR = (x[1] = "Index size error", 1);
R.DOMSTRING_SIZE_ERR = (x[2] = "DOMString size error", 2);
var k = R.HIERARCHY_REQUEST_ERR = (x[3] = "Hierarchy request error", 3);
R.WRONG_DOCUMENT_ERR = (x[4] = "Wrong document", 4);
R.INVALID_CHARACTER_ERR = (x[5] = "Invalid character", 5);
R.NO_DATA_ALLOWED_ERR = (x[6] = "No data allowed", 6);
R.NO_MODIFICATION_ALLOWED_ERR = (x[7] = "No modification allowed", 7);
var Mn = R.NOT_FOUND_ERR = (x[8] = "Not found", 8);
R.NOT_SUPPORTED_ERR = (x[9] = "Not supported", 9);
var Gr = R.INUSE_ATTRIBUTE_ERR = (x[10] = "Attribute in use", 10);
R.INVALID_STATE_ERR = (x[11] = "Invalid state", 11);
R.SYNTAX_ERR = (x[12] = "Syntax error", 12);
R.INVALID_MODIFICATION_ERR = (x[13] = "Invalid modification", 13);
R.NAMESPACE_ERR = (x[14] = "Invalid namespace", 14);
R.INVALID_ACCESS_ERR = (x[15] = "Invalid access", 15);
function B(t, e) {
  if (e instanceof Error)
    var r = e;
  else
    r = this, Error.call(this, x[t]), this.message = x[t], Error.captureStackTrace && Error.captureStackTrace(this, B);
  return r.code = t, e && (this.message = this.message + ": " + e), r;
}
B.prototype = Error.prototype;
Ke(R, B);
function te() {
}
te.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
   */
  item: function(t) {
    return t >= 0 && t < this.length ? this[t] : null;
  },
  toString: function(t, e) {
    for (var r = [], n = 0; n < this.length; n++)
      Ne(this[n], r, t, e);
    return r.join("");
  },
  /**
   * @private
   * @param {function (Node):boolean} predicate
   * @returns {Node[]}
   */
  filter: function(t) {
    return Array.prototype.filter.call(this, t);
  },
  /**
   * @private
   * @param {Node} item
   * @returns {number}
   */
  indexOf: function(t) {
    return Array.prototype.indexOf.call(this, t);
  }
};
function Le(t, e) {
  this._node = t, this._refresh = e, lr(this);
}
function lr(t) {
  var e = t._node._inc || t._node.ownerDocument._inc;
  if (t._inc !== e) {
    var r = t._refresh(t._node);
    if (Xn(t, "length", r.length), !t.$$length || r.length < t.$$length)
      for (var n = r.length; n in t; n++)
        Object.prototype.hasOwnProperty.call(t, n) && delete t[n];
    Ke(r, t), t._inc = e;
  }
}
Le.prototype.item = function(t) {
  return lr(this), this[t] || null;
};
q(Le, te);
function mt() {
}
function kn(t, e) {
  for (var r = t.length; r--; )
    if (t[r] === e)
      return r;
}
function Wr(t, e, r, n) {
  if (n ? e[kn(e, n)] = r : e[e.length++] = r, t) {
    r.ownerElement = t;
    var u = t.ownerDocument;
    u && (n && $n(u, t, n), Ji(u, t, r));
  }
}
function zr(t, e, r) {
  var n = kn(e, r);
  if (n >= 0) {
    for (var u = e.length - 1; n < u; )
      e[n] = e[++n];
    if (e.length = u, t) {
      var o = t.ownerDocument;
      o && ($n(o, t, r), r.ownerElement = null);
    }
  } else
    throw new B(Mn, new Error(t.tagName + "@" + r));
}
mt.prototype = {
  length: 0,
  item: te.prototype.item,
  getNamedItem: function(t) {
    for (var e = this.length; e--; ) {
      var r = this[e];
      if (r.nodeName == t)
        return r;
    }
  },
  setNamedItem: function(t) {
    var e = t.ownerElement;
    if (e && e != this._ownerElement)
      throw new B(Gr);
    var r = this.getNamedItem(t.nodeName);
    return Wr(this._ownerElement, this, t, r), r;
  },
  /* returns Node */
  setNamedItemNS: function(t) {
    var e = t.ownerElement, r;
    if (e && e != this._ownerElement)
      throw new B(Gr);
    return r = this.getNamedItemNS(t.namespaceURI, t.localName), Wr(this._ownerElement, this, t, r), r;
  },
  /* returns Node */
  removeNamedItem: function(t) {
    var e = this.getNamedItem(t);
    return zr(this._ownerElement, this, e), e;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  //for level2
  removeNamedItemNS: function(t, e) {
    var r = this.getNamedItemNS(t, e);
    return zr(this._ownerElement, this, r), r;
  },
  getNamedItemNS: function(t, e) {
    for (var r = this.length; r--; ) {
      var n = this[r];
      if (n.localName == e && n.namespaceURI == t)
        return n;
    }
    return null;
  }
};
function qn() {
}
qn.prototype = {
  /**
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
   * The different implementations fairly diverged in what kind of features were reported.
   * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
   *
   * @deprecated It is deprecated and modern browsers return true in all cases.
   *
   * @param {string} feature
   * @param {string} [version]
   * @returns {boolean} always true
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   */
  hasFeature: function(t, e) {
    return !0;
  },
  /**
   * Creates an XML Document object of the specified type with its document element.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
   * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string|null} namespaceURI
   * @param {string} qualifiedName
   * @param {DocumentType=null} doctype
   * @returns {Document}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocument: function(t, e, r) {
    var n = new Ze();
    if (n.implementation = this, n.childNodes = new te(), n.doctype = r || null, r && n.appendChild(r), e) {
      var u = n.createElementNS(t, e);
      n.appendChild(u);
    }
    return n;
  },
  /**
   * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
   *
   * __This behavior is slightly different from the in the specs__:
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string} qualifiedName
   * @param {string} [publicId]
   * @param {string} [systemId]
   * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
   * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocumentType: function(t, e, r) {
    var n = new Dt();
    return n.name = t, n.nodeName = t, n.publicId = e || "", n.systemId = r || "", n;
  }
};
function E() {
}
E.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  // Modified in DOM Level 2:
  insertBefore: function(t, e) {
    return gt(this, t, e);
  },
  replaceChild: function(t, e) {
    gt(this, t, e, Vn), e && this.removeChild(e);
  },
  removeChild: function(t) {
    return jn(this, t);
  },
  appendChild: function(t) {
    return this.insertBefore(t, null);
  },
  hasChildNodes: function() {
    return this.firstChild != null;
  },
  cloneNode: function(t) {
    return Xt(this.ownerDocument || this, this, t);
  },
  // Modified in DOM Level 2:
  normalize: function() {
    for (var t = this.firstChild; t; ) {
      var e = t.nextSibling;
      e && e.nodeType == ht && t.nodeType == ht ? (this.removeChild(e), t.appendData(e.data)) : (t.normalize(), t = e);
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function(t, e) {
    return this.ownerDocument.implementation.hasFeature(t, e);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function() {
    return this.attributes.length > 0;
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
   *
   * @param {string | null} namespaceURI
   * @returns {string | null}
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   */
  lookupPrefix: function(t) {
    for (var e = this; e; ) {
      var r = e._nsMap;
      if (r) {
        for (var n in r)
          if (Object.prototype.hasOwnProperty.call(r, n) && r[n] === t)
            return n;
      }
      e = e.nodeType == Pe ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function(t) {
    for (var e = this; e; ) {
      var r = e._nsMap;
      if (r && Object.prototype.hasOwnProperty.call(r, t))
        return r[t];
      e = e.nodeType == Pe ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function(t) {
    var e = this.lookupPrefix(t);
    return e == null;
  }
};
function Un(t) {
  return t == "<" && "&lt;" || t == ">" && "&gt;" || t == "&" && "&amp;" || t == '"' && "&quot;" || "&#" + t.charCodeAt() + ";";
}
Ke(U, E);
Ke(U, E.prototype);
function Ye(t, e) {
  if (e(t))
    return !0;
  if (t = t.firstChild)
    do
      if (Ye(t, e))
        return !0;
    while (t = t.nextSibling);
}
function Ze() {
  this.ownerDocument = this;
}
function Ji(t, e, r) {
  t && t._inc++;
  var n = r.namespaceURI;
  n === He.XMLNS && (e._nsMap[r.prefix ? r.localName : ""] = r.value);
}
function $n(t, e, r, n) {
  t && t._inc++;
  var u = r.namespaceURI;
  u === He.XMLNS && delete e._nsMap[r.prefix ? r.localName : ""];
}
function sr(t, e, r) {
  if (t && t._inc) {
    t._inc++;
    var n = e.childNodes;
    if (r)
      n[n.length++] = r;
    else {
      for (var u = e.firstChild, o = 0; u; )
        n[o++] = u, u = u.nextSibling;
      n.length = o, delete n[n.length];
    }
  }
}
function jn(t, e) {
  var r = e.previousSibling, n = e.nextSibling;
  return r ? r.nextSibling = n : t.firstChild = n, n ? n.previousSibling = r : t.lastChild = r, e.parentNode = null, e.previousSibling = null, e.nextSibling = null, sr(t.ownerDocument, t), e;
}
function Qi(t) {
  return t && (t.nodeType === E.DOCUMENT_NODE || t.nodeType === E.DOCUMENT_FRAGMENT_NODE || t.nodeType === E.ELEMENT_NODE);
}
function Ki(t) {
  return t && (Z(t) || cr(t) || ne(t) || t.nodeType === E.DOCUMENT_FRAGMENT_NODE || t.nodeType === E.COMMENT_NODE || t.nodeType === E.PROCESSING_INSTRUCTION_NODE);
}
function ne(t) {
  return t && t.nodeType === E.DOCUMENT_TYPE_NODE;
}
function Z(t) {
  return t && t.nodeType === E.ELEMENT_NODE;
}
function cr(t) {
  return t && t.nodeType === E.TEXT_NODE;
}
function Hr(t, e) {
  var r = t.childNodes || [];
  if (K(r, Z) || ne(e))
    return !1;
  var n = K(r, ne);
  return !(e && n && r.indexOf(n) > r.indexOf(e));
}
function Yr(t, e) {
  var r = t.childNodes || [];
  function n(o) {
    return Z(o) && o !== e;
  }
  if (K(r, n))
    return !1;
  var u = K(r, ne);
  return !(e && u && r.indexOf(u) > r.indexOf(e));
}
function Zi(t, e, r) {
  if (!Qi(t))
    throw new B(k, "Unexpected parent node type " + t.nodeType);
  if (r && r.parentNode !== t)
    throw new B(Mn, "child not in parent");
  if (
    // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
    !Ki(e) || // 5. If either `node` is a Text node and `parent` is a document,
    // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
    // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
    // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
    ne(e) && t.nodeType !== E.DOCUMENT_NODE
  )
    throw new B(
      k,
      "Unexpected node type " + e.nodeType + " for parent node type " + t.nodeType
    );
}
function ea(t, e, r) {
  var n = t.childNodes || [], u = e.childNodes || [];
  if (e.nodeType === E.DOCUMENT_FRAGMENT_NODE) {
    var o = u.filter(Z);
    if (o.length > 1 || K(u, cr))
      throw new B(k, "More than one element or text in fragment");
    if (o.length === 1 && !Hr(t, r))
      throw new B(k, "Element in fragment can not be inserted before doctype");
  }
  if (Z(e) && !Hr(t, r))
    throw new B(k, "Only one element can be added and only after doctype");
  if (ne(e)) {
    if (K(n, ne))
      throw new B(k, "Only one doctype is allowed");
    var i = K(n, Z);
    if (r && n.indexOf(i) < n.indexOf(r))
      throw new B(k, "Doctype can only be inserted before an element");
    if (!r && i)
      throw new B(k, "Doctype can not be appended since element is present");
  }
}
function Vn(t, e, r) {
  var n = t.childNodes || [], u = e.childNodes || [];
  if (e.nodeType === E.DOCUMENT_FRAGMENT_NODE) {
    var o = u.filter(Z);
    if (o.length > 1 || K(u, cr))
      throw new B(k, "More than one element or text in fragment");
    if (o.length === 1 && !Yr(t, r))
      throw new B(k, "Element in fragment can not be inserted before doctype");
  }
  if (Z(e) && !Yr(t, r))
    throw new B(k, "Only one element can be added and only after doctype");
  if (ne(e)) {
    if (K(n, function(a) {
      return ne(a) && a !== r;
    }))
      throw new B(k, "Only one doctype is allowed");
    var i = K(n, Z);
    if (r && n.indexOf(i) < n.indexOf(r))
      throw new B(k, "Doctype can only be inserted before an element");
  }
}
function gt(t, e, r, n) {
  Zi(t, e, r), t.nodeType === E.DOCUMENT_NODE && (n || ea)(t, e, r);
  var u = e.parentNode;
  if (u && u.removeChild(e), e.nodeType === re) {
    var o = e.firstChild;
    if (o == null)
      return e;
    var i = e.lastChild;
  } else
    o = i = e;
  var l = r ? r.previousSibling : t.lastChild;
  o.previousSibling = l, i.nextSibling = r, l ? l.nextSibling = o : t.firstChild = o, r == null ? t.lastChild = i : r.previousSibling = i;
  do
    o.parentNode = t;
  while (o !== i && (o = o.nextSibling));
  return sr(t.ownerDocument || t, t), e.nodeType == re && (e.firstChild = e.lastChild = null), e;
}
function ta(t, e) {
  return e.parentNode && e.parentNode.removeChild(e), e.parentNode = t, e.previousSibling = t.lastChild, e.nextSibling = null, e.previousSibling ? e.previousSibling.nextSibling = e : t.firstChild = e, t.lastChild = e, sr(t.ownerDocument, t, e), e;
}
Ze.prototype = {
  //implementation : null,
  nodeName: "#document",
  nodeType: Ln,
  /**
   * The DocumentType node of the document.
   *
   * @readonly
   * @type DocumentType
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function(t, e) {
    if (t.nodeType == re) {
      for (var r = t.firstChild; r; ) {
        var n = r.nextSibling;
        this.insertBefore(r, e), r = n;
      }
      return t;
    }
    return gt(this, t, e), t.ownerDocument = this, this.documentElement === null && t.nodeType === Y && (this.documentElement = t), t;
  },
  removeChild: function(t) {
    return this.documentElement == t && (this.documentElement = null), jn(this, t);
  },
  replaceChild: function(t, e) {
    gt(this, t, e, Vn), t.ownerDocument = this, e && this.removeChild(e), Z(t) && (this.documentElement = t);
  },
  // Introduced in DOM Level 2:
  importNode: function(t, e) {
    return Yn(this, t, e);
  },
  // Introduced in DOM Level 2:
  getElementById: function(t) {
    var e = null;
    return Ye(this.documentElement, function(r) {
      if (r.nodeType == Y && r.getAttribute("id") == t)
        return e = r, !0;
    }), e;
  },
  /**
   * The `getElementsByClassName` method of `Document` interface returns an array-like object
   * of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
   *
   *
   * Warning: This is a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function(t) {
    var e = Vr(t);
    return new Le(this, function(r) {
      var n = [];
      return e.length > 0 && Ye(r.documentElement, function(u) {
        if (u !== r && u.nodeType === Y) {
          var o = u.getAttribute("class");
          if (o) {
            var i = t === o;
            if (!i) {
              var l = Vr(o);
              i = e.every(Hi(l));
            }
            i && n.push(u);
          }
        }
      }), n;
    });
  },
  //document factory method:
  createElement: function(t) {
    var e = new De();
    e.ownerDocument = this, e.nodeName = t, e.tagName = t, e.localName = t, e.childNodes = new te();
    var r = e.attributes = new mt();
    return r._ownerElement = e, e;
  },
  createDocumentFragment: function() {
    var t = new At();
    return t.ownerDocument = this, t.childNodes = new te(), t;
  },
  createTextNode: function(t) {
    var e = new fr();
    return e.ownerDocument = this, e.appendData(t), e;
  },
  createComment: function(t) {
    var e = new pr();
    return e.ownerDocument = this, e.appendData(t), e;
  },
  createCDATASection: function(t) {
    var e = new dr();
    return e.ownerDocument = this, e.appendData(t), e;
  },
  createProcessingInstruction: function(t, e) {
    var r = new mr();
    return r.ownerDocument = this, r.tagName = r.nodeName = r.target = t, r.nodeValue = r.data = e, r;
  },
  createAttribute: function(t) {
    var e = new yt();
    return e.ownerDocument = this, e.name = t, e.nodeName = t, e.localName = t, e.specified = !0, e;
  },
  createEntityReference: function(t) {
    var e = new hr();
    return e.ownerDocument = this, e.nodeName = t, e;
  },
  // Introduced in DOM Level 2:
  createElementNS: function(t, e) {
    var r = new De(), n = e.split(":"), u = r.attributes = new mt();
    return r.childNodes = new te(), r.ownerDocument = this, r.nodeName = e, r.tagName = e, r.namespaceURI = t, n.length == 2 ? (r.prefix = n[0], r.localName = n[1]) : r.localName = e, u._ownerElement = r, r;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function(t, e) {
    var r = new yt(), n = e.split(":");
    return r.ownerDocument = this, r.nodeName = e, r.name = e, r.namespaceURI = t, r.specified = !0, n.length == 2 ? (r.prefix = n[0], r.localName = n[1]) : r.localName = e, r;
  }
};
q(Ze, E);
function De() {
  this._nsMap = {};
}
De.prototype = {
  nodeType: Y,
  hasAttribute: function(t) {
    return this.getAttributeNode(t) != null;
  },
  getAttribute: function(t) {
    var e = this.getAttributeNode(t);
    return e && e.value || "";
  },
  getAttributeNode: function(t) {
    return this.attributes.getNamedItem(t);
  },
  setAttribute: function(t, e) {
    var r = this.ownerDocument.createAttribute(t);
    r.value = r.nodeValue = "" + e, this.setAttributeNode(r);
  },
  removeAttribute: function(t) {
    var e = this.getAttributeNode(t);
    e && this.removeAttributeNode(e);
  },
  //four real opeartion method
  appendChild: function(t) {
    return t.nodeType === re ? this.insertBefore(t, null) : ta(this, t);
  },
  setAttributeNode: function(t) {
    return this.attributes.setNamedItem(t);
  },
  setAttributeNodeNS: function(t) {
    return this.attributes.setNamedItemNS(t);
  },
  removeAttributeNode: function(t) {
    return this.attributes.removeNamedItem(t.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function(t, e) {
    var r = this.getAttributeNodeNS(t, e);
    r && this.removeAttributeNode(r);
  },
  hasAttributeNS: function(t, e) {
    return this.getAttributeNodeNS(t, e) != null;
  },
  getAttributeNS: function(t, e) {
    var r = this.getAttributeNodeNS(t, e);
    return r && r.value || "";
  },
  setAttributeNS: function(t, e, r) {
    var n = this.ownerDocument.createAttributeNS(t, e);
    n.value = n.nodeValue = "" + r, this.setAttributeNode(n);
  },
  getAttributeNodeNS: function(t, e) {
    return this.attributes.getNamedItemNS(t, e);
  },
  getElementsByTagName: function(t) {
    return new Le(this, function(e) {
      var r = [];
      return Ye(e, function(n) {
        n !== e && n.nodeType == Y && (t === "*" || n.tagName == t) && r.push(n);
      }), r;
    });
  },
  getElementsByTagNameNS: function(t, e) {
    return new Le(this, function(r) {
      var n = [];
      return Ye(r, function(u) {
        u !== r && u.nodeType === Y && (t === "*" || u.namespaceURI === t) && (e === "*" || u.localName == e) && n.push(u);
      }), n;
    });
  }
};
Ze.prototype.getElementsByTagName = De.prototype.getElementsByTagName;
Ze.prototype.getElementsByTagNameNS = De.prototype.getElementsByTagNameNS;
q(De, E);
function yt() {
}
yt.prototype.nodeType = Pe;
q(yt, E);
function et() {
}
et.prototype = {
  data: "",
  substringData: function(t, e) {
    return this.data.substring(t, t + e);
  },
  appendData: function(t) {
    t = this.data + t, this.nodeValue = this.data = t, this.length = t.length;
  },
  insertData: function(t, e) {
    this.replaceData(t, 0, e);
  },
  appendChild: function(t) {
    throw new Error(x[k]);
  },
  deleteData: function(t, e) {
    this.replaceData(t, e, "");
  },
  replaceData: function(t, e, r) {
    var n = this.data.substring(0, t), u = this.data.substring(t + e);
    r = n + r + u, this.nodeValue = this.data = r, this.length = r.length;
  }
};
q(et, E);
function fr() {
}
fr.prototype = {
  nodeName: "#text",
  nodeType: ht,
  splitText: function(t) {
    var e = this.data, r = e.substring(t);
    e = e.substring(0, t), this.data = this.nodeValue = e, this.length = e.length;
    var n = this.ownerDocument.createTextNode(r);
    return this.parentNode && this.parentNode.insertBefore(n, this.nextSibling), n;
  }
};
q(fr, et);
function pr() {
}
pr.prototype = {
  nodeName: "#comment",
  nodeType: Pn
};
q(pr, et);
function dr() {
}
dr.prototype = {
  nodeName: "#cdata-section",
  nodeType: In
};
q(dr, et);
function Dt() {
}
Dt.prototype.nodeType = Rn;
q(Dt, E);
function Gn() {
}
Gn.prototype.nodeType = Xi;
q(Gn, E);
function Wn() {
}
Wn.prototype.nodeType = Yi;
q(Wn, E);
function hr() {
}
hr.prototype.nodeType = xn;
q(hr, E);
function At() {
}
At.prototype.nodeName = "#document-fragment";
At.prototype.nodeType = re;
q(At, E);
function mr() {
}
mr.prototype.nodeType = _n;
q(mr, E);
function zn() {
}
zn.prototype.serializeToString = function(t, e, r) {
  return Hn.call(t, e, r);
};
E.prototype.toString = Hn;
function Hn(t, e) {
  var r = [], n = this.nodeType == 9 && this.documentElement || this, u = n.prefix, o = n.namespaceURI;
  if (o && u == null) {
    var u = n.lookupPrefix(o);
    if (u == null)
      var i = [
        { namespace: o, prefix: null }
        //{namespace:uri,prefix:''}
      ];
  }
  return Ne(this, r, t, e, i), r.join("");
}
function Xr(t, e, r) {
  var n = t.prefix || "", u = t.namespaceURI;
  if (!u || n === "xml" && u === He.XML || u === He.XMLNS)
    return !1;
  for (var o = r.length; o--; ) {
    var i = r[o];
    if (i.prefix === n)
      return i.namespace !== u;
  }
  return !0;
}
function qt(t, e, r) {
  t.push(" ", e, '="', r.replace(/[<>&"\t\n\r]/g, Un), '"');
}
function Ne(t, e, r, n, u) {
  if (u || (u = []), n)
    if (t = n(t), t) {
      if (typeof t == "string") {
        e.push(t);
        return;
      }
    } else
      return;
  switch (t.nodeType) {
    case Y:
      var o = t.attributes, i = o.length, b = t.firstChild, l = t.tagName;
      r = He.isHTML(t.namespaceURI) || r;
      var a = l;
      if (!r && !t.prefix && t.namespaceURI) {
        for (var s, c = 0; c < o.length; c++)
          if (o.item(c).name === "xmlns") {
            s = o.item(c).value;
            break;
          }
        if (!s)
          for (var d = u.length - 1; d >= 0; d--) {
            var f = u[d];
            if (f.prefix === "" && f.namespace === t.namespaceURI) {
              s = f.namespace;
              break;
            }
          }
        if (s !== t.namespaceURI)
          for (var d = u.length - 1; d >= 0; d--) {
            var f = u[d];
            if (f.namespace === t.namespaceURI) {
              f.prefix && (a = f.prefix + ":" + l);
              break;
            }
          }
      }
      e.push("<", a);
      for (var h = 0; h < i; h++) {
        var g = o.item(h);
        g.prefix == "xmlns" ? u.push({ prefix: g.localName, namespace: g.value }) : g.nodeName == "xmlns" && u.push({ prefix: "", namespace: g.value });
      }
      for (var h = 0; h < i; h++) {
        var g = o.item(h);
        if (Xr(g, r, u)) {
          var y = g.prefix || "", D = g.namespaceURI;
          qt(e, y ? "xmlns:" + y : "xmlns", D), u.push({ prefix: y, namespace: D });
        }
        Ne(g, e, r, n, u);
      }
      if (l === a && Xr(t, r, u)) {
        var y = t.prefix || "", D = t.namespaceURI;
        qt(e, y ? "xmlns:" + y : "xmlns", D), u.push({ prefix: y, namespace: D });
      }
      if (b || r && !/^(?:meta|link|img|br|hr|input)$/i.test(l)) {
        if (e.push(">"), r && /^script$/i.test(l))
          for (; b; )
            b.data ? e.push(b.data) : Ne(b, e, r, n, u.slice()), b = b.nextSibling;
        else
          for (; b; )
            Ne(b, e, r, n, u.slice()), b = b.nextSibling;
        e.push("</", a, ">");
      } else
        e.push("/>");
      return;
    case Ln:
    case re:
      for (var b = t.firstChild; b; )
        Ne(b, e, r, n, u.slice()), b = b.nextSibling;
      return;
    case Pe:
      return qt(e, t.name, t.value);
    case ht:
      return e.push(
        t.data.replace(/[<&>]/g, Un)
      );
    case In:
      return e.push("<![CDATA[", t.data, "]]>");
    case Pn:
      return e.push("<!--", t.data, "-->");
    case Rn:
      var M = t.publicId, m = t.systemId;
      if (e.push("<!DOCTYPE ", t.name), M)
        e.push(" PUBLIC ", M), m && m != "." && e.push(" ", m), e.push(">");
      else if (m && m != ".")
        e.push(" SYSTEM ", m, ">");
      else {
        var S = t.internalSubset;
        S && e.push(" [", S, "]"), e.push(">");
      }
      return;
    case _n:
      return e.push("<?", t.target, " ", t.data, "?>");
    case xn:
      return e.push("&", t.nodeName, ";");
    default:
      e.push("??", t.nodeName);
  }
}
function Yn(t, e, r) {
  var n;
  switch (e.nodeType) {
    case Y:
      n = e.cloneNode(!1), n.ownerDocument = t;
    case re:
      break;
    case Pe:
      r = !0;
      break;
  }
  if (n || (n = e.cloneNode(!1)), n.ownerDocument = t, n.parentNode = null, r)
    for (var u = e.firstChild; u; )
      n.appendChild(Yn(t, u, r)), u = u.nextSibling;
  return n;
}
function Xt(t, e, r) {
  var n = new e.constructor();
  for (var u in e)
    if (Object.prototype.hasOwnProperty.call(e, u)) {
      var o = e[u];
      typeof o != "object" && o != n[u] && (n[u] = o);
    }
  switch (e.childNodes && (n.childNodes = new te()), n.ownerDocument = t, n.nodeType) {
    case Y:
      var i = e.attributes, l = n.attributes = new mt(), a = i.length;
      l._ownerElement = n;
      for (var s = 0; s < a; s++)
        n.setAttributeNode(Xt(t, i.item(s), !0));
      break;
    case Pe:
      r = !0;
  }
  if (r)
    for (var c = e.firstChild; c; )
      n.appendChild(Xt(t, c, r)), c = c.nextSibling;
  return n;
}
function Xn(t, e, r) {
  t[e] = r;
}
try {
  if (Object.defineProperty) {
    let t = function(e) {
      switch (e.nodeType) {
        case Y:
        case re:
          var r = [];
          for (e = e.firstChild; e; )
            e.nodeType !== 7 && e.nodeType !== 8 && r.push(t(e)), e = e.nextSibling;
          return r.join("");
        default:
          return e.nodeValue;
      }
    };
    Object.defineProperty(Le.prototype, "length", {
      get: function() {
        return lr(this), this.$$length;
      }
    }), Object.defineProperty(E.prototype, "textContent", {
      get: function() {
        return t(this);
      },
      set: function(e) {
        switch (this.nodeType) {
          case Y:
          case re:
            for (; this.firstChild; )
              this.removeChild(this.firstChild);
            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
            break;
          default:
            this.data = e, this.value = e, this.nodeValue = e;
        }
      }
    }), Xn = function(e, r, n) {
      e["$$" + r] = n;
    };
  }
} catch {
}
ue.DocumentType = Dt;
ue.DOMException = B;
ue.DOMImplementation = qn;
ue.Element = De;
ue.Node = E;
ue.NodeList = te;
ue.XMLSerializer = zn;
var vt = {}, Jn = {};
(function(t) {
  var e = oe.freeze;
  t.XML_ENTITIES = e({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  }), t.HTML_ENTITIES = e({
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    AMP: "&",
    amp: "&",
    And: "⩓",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    ap: "≈",
    apacir: "⩯",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    Barwed: "⌆",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    Because: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxDL: "╗",
    boxDl: "╖",
    boxdL: "╕",
    boxdl: "┐",
    boxDR: "╔",
    boxDr: "╓",
    boxdR: "╒",
    boxdr: "┌",
    boxH: "═",
    boxh: "─",
    boxHD: "╦",
    boxHd: "╤",
    boxhD: "╥",
    boxhd: "┬",
    boxHU: "╩",
    boxHu: "╧",
    boxhU: "╨",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxUL: "╝",
    boxUl: "╜",
    boxuL: "╛",
    boxul: "┘",
    boxUR: "╚",
    boxUr: "╙",
    boxuR: "╘",
    boxur: "└",
    boxV: "║",
    boxv: "│",
    boxVH: "╬",
    boxVh: "╫",
    boxvH: "╪",
    boxvh: "┼",
    boxVL: "╣",
    boxVl: "╢",
    boxvL: "╡",
    boxvl: "┤",
    boxVR: "╠",
    boxVr: "╟",
    boxvR: "╞",
    boxvr: "├",
    bprime: "‵",
    Breve: "˘",
    breve: "˘",
    brvbar: "¦",
    Bscr: "ℬ",
    bscr: "𝒷",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    Cap: "⋒",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    CenterDot: "·",
    centerdot: "·",
    Cfr: "ℭ",
    cfr: "𝔠",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    cir: "○",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    Colon: "∷",
    colon: ":",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    Conint: "∯",
    conint: "∮",
    ContourIntegral: "∮",
    Copf: "ℂ",
    copf: "𝕔",
    coprod: "∐",
    Coproduct: "∐",
    COPY: "©",
    copy: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    Cross: "⨯",
    cross: "✗",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    Cup: "⋓",
    cup: "∪",
    cupbrcap: "⩈",
    CupCap: "≍",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    Dagger: "‡",
    dagger: "†",
    daleth: "ℸ",
    Darr: "↡",
    dArr: "⇓",
    darr: "↓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    DD: "ⅅ",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    Diamond: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    Downarrow: "⇓",
    downarrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    ecir: "≖",
    Ecirc: "Ê",
    ecirc: "ê",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    eDot: "≑",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp: " ",
    emsp13: " ",
    emsp14: " ",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: " ",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    Escr: "ℰ",
    escr: "ℯ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    ExponentialE: "ⅇ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    ForAll: "∀",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    Fscr: "ℱ",
    fscr: "𝒻",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    gE: "≧",
    ge: "≥",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    Gg: "⋙",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gl: "≷",
    gla: "⪥",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gnE: "≩",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    Gt: "≫",
    GT: ">",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    hArr: "⇔",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    Hfr: "ℌ",
    hfr: "𝔥",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    Hopf: "ℍ",
    hopf: "𝕙",
    horbar: "―",
    HorizontalLine: "─",
    Hscr: "ℋ",
    hscr: "𝒽",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    Ifr: "ℑ",
    ifr: "𝔦",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Im: "ℑ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    Int: "∬",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    Iscr: "ℐ",
    iscr: "𝒾",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    Lang: "⟪",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    Larr: "↞",
    lArr: "⇐",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    lAtail: "⤛",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lBarr: "⤎",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    lE: "≦",
    le: "≤",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    Leftarrow: "⇐",
    leftarrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    Ll: "⋘",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lnE: "≨",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftarrow: "⟵",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    Lscr: "ℒ",
    lscr: "𝓁",
    Lsh: "↰",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    Lt: "≪",
    LT: "<",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "·",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    Mscr: "ℳ",
    mscr: "𝓂",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    nearhk: "⤤",
    neArr: "⇗",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: `
`,
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlArr: "⇍",
    nlarr: "↚",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nLeftarrow: "⇍",
    nleftarrow: "↚",
    nLeftrightarrow: "⇎",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    Nopf: "ℕ",
    nopf: "𝕟",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nRightarrow: "⇏",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvap: "≍⃒",
    nVDash: "⊯",
    nVdash: "⊮",
    nvDash: "⊭",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwArr: "⇖",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    ocir: "⊚",
    Ocirc: "Ô",
    ocirc: "ô",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    Or: "⩔",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    Otimes: "⨷",
    otimes: "⊗",
    otimesas: "⨶",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    par: "∥",
    para: "¶",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    Popf: "ℙ",
    popf: "𝕡",
    pound: "£",
    Pr: "⪻",
    pr: "≺",
    prap: "⪷",
    prcue: "≼",
    prE: "⪳",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    Prime: "″",
    prime: "′",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportion: "∷",
    Proportional: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    Qopf: "ℚ",
    qopf: "𝕢",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    QUOT: '"',
    quot: '"',
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    Rang: "⟫",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    Rarr: "↠",
    rArr: "⇒",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    rAtail: "⤜",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    RBarr: "⤐",
    rBarr: "⤏",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    Re: "ℜ",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    REG: "®",
    reg: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    Rfr: "ℜ",
    rfr: "𝔯",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    Rightarrow: "⇒",
    rightarrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    Ropf: "ℝ",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    Rscr: "ℛ",
    rscr: "𝓇",
    Rsh: "↱",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    Sc: "⪼",
    sc: "≻",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    sccue: "≽",
    scE: "⪴",
    sce: "⪰",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    searhk: "⤥",
    seArr: "⇘",
    searr: "↘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    Square: "□",
    square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    Sub: "⋐",
    sub: "⊂",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    Subset: "⋐",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    Sum: "∑",
    sum: "∑",
    sung: "♪",
    Sup: "⋑",
    sup: "⊃",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    Supset: "⋑",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swArr: "⇙",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "	",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    Therefore: "∴",
    therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "  ",
    thinsp: " ",
    ThinSpace: " ",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    Tilde: "∼",
    tilde: "˜",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    times: "×",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    TRADE: "™",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    Uarr: "↟",
    uArr: "⇑",
    uarr: "↑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrow: "↑",
    Uparrow: "⇑",
    uparrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    updownarrow: "↕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    upsi: "υ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    vArr: "⇕",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    Vbar: "⫫",
    vBar: "⫨",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    VDash: "⊫",
    Vdash: "⊩",
    vDash: "⊨",
    vdash: "⊢",
    Vdashl: "⫦",
    Vee: "⋁",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    Verbar: "‖",
    verbar: "|",
    Vert: "‖",
    vert: "|",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    Wedge: "⋀",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xhArr: "⟺",
    xharr: "⟷",
    Xi: "Ξ",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    Yuml: "Ÿ",
    yuml: "ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    Zfr: "ℨ",
    zfr: "𝔷",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    Zopf: "ℤ",
    zopf: "𝕫",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }), t.entityMap = t.HTML_ENTITIES;
})(Jn);
var gr = {}, Xe = oe.NAMESPACE, Jt = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Jr = new RegExp("[\\-\\.0-9" + Jt.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), Qr = new RegExp("^" + Jt.source + Jr.source + "*(?::" + Jt.source + Jr.source + "*)?$"), Ue = 0, le = 1, be = 2, $e = 3, Ce = 4, Se = 5, je = 6, it = 7;
function Re(t, e) {
  this.message = t, this.locator = e, Error.captureStackTrace && Error.captureStackTrace(this, Re);
}
Re.prototype = new Error();
Re.prototype.name = Re.name;
function Qn() {
}
Qn.prototype = {
  parse: function(t, e, r) {
    var n = this.domBuilder;
    n.startDocument(), Kn(e, e = {}), ra(
      t,
      e,
      r,
      n,
      this.errorHandler
    ), n.endDocument();
  }
};
function ra(t, e, r, n, u) {
  function o(C) {
    if (C > 65535) {
      C -= 65536;
      var P = 55296 + (C >> 10), St = 56320 + (C & 1023);
      return String.fromCharCode(P, St);
    } else
      return String.fromCharCode(C);
  }
  function i(C) {
    var P = C.slice(1, -1);
    return Object.hasOwnProperty.call(r, P) ? r[P] : P.charAt(0) === "#" ? o(parseInt(P.substr(1).replace("x", "0x"))) : (u.error("entity not found:" + C), C);
  }
  function l(C) {
    if (C > y) {
      var P = t.substring(y, C).replace(/&#?\w+;/g, i);
      f && a(y), n.characters(P, 0, C - y), y = C;
    }
  }
  function a(C, P) {
    for (; C >= c && (P = d.exec(t)); )
      s = P.index, c = s + P[0].length, f.lineNumber++;
    f.columnNumber = C - s + 1;
  }
  for (var s = 0, c = 0, d = /.*(?:\r\n?|\n)|.*$/g, f = n.locator, h = [{ currentNSMap: e }], g = {}, y = 0; ; ) {
    try {
      var D = t.indexOf("<", y);
      if (D < 0) {
        if (!t.substr(y).match(/^\s*$/)) {
          var b = n.doc, M = b.createTextNode(t.substr(y));
          b.appendChild(M), n.currentElement = M;
        }
        return;
      }
      switch (D > y && l(D), t.charAt(D + 1)) {
        case "/":
          var N = t.indexOf(">", D + 3), m = t.substring(D + 2, N).replace(/[ \t\n\r]+$/g, ""), S = h.pop();
          N < 0 ? (m = t.substring(D + 2).replace(/[\s<].*/, ""), u.error("end tag name: " + m + " is not complete:" + S.tagName), N = D + 1 + m.length) : m.match(/\s</) && (m = m.replace(/[\s<].*/, ""), u.error("end tag name: " + m + " maybe not complete"), N = D + 1 + m.length);
          var z = S.localNSMap, ie = S.tagName == m, ae = ie || S.tagName && S.tagName.toLowerCase() == m.toLowerCase();
          if (ae) {
            if (n.endElement(S.uri, S.localName, m), z)
              for (var de in z)
                Object.prototype.hasOwnProperty.call(z, de) && n.endPrefixMapping(de);
            ie || u.fatalError("end tag name: " + m + " is not match the current start tagName:" + S.tagName);
          } else
            h.push(S);
          N++;
          break;
        case "?":
          f && a(D), N = aa(t, D, n);
          break;
        case "!":
          f && a(D), N = ia(t, D, n, u);
          break;
        default:
          f && a(D);
          var w = new Zn(), G = h[h.length - 1].currentNSMap, N = na(t, D, w, G, i, u), ee = w.length;
          if (!w.closed && oa(t, N, w.tagName, g) && (w.closed = !0, r.nbsp || u.warning("unclosed xml attribute")), f && ee) {
            for (var $ = Kr(f, {}), W = 0; W < ee; W++) {
              var H = w[W];
              a(H.offset), H.locator = Kr(f, {});
            }
            n.locator = $, Zr(w, n, G) && h.push(w), n.locator = f;
          } else
            Zr(w, n, G) && h.push(w);
          Xe.isHTML(w.uri) && !w.closed ? N = ua(t, N, w.tagName, i, n) : N++;
      }
    } catch (C) {
      if (C instanceof Re)
        throw C;
      u.error("element parse error: " + C), N = -1;
    }
    N > y ? y = N : l(Math.max(D, y) + 1);
  }
}
function Kr(t, e) {
  return e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber, e;
}
function na(t, e, r, n, u, o) {
  function i(f, h, g) {
    r.attributeNames.hasOwnProperty(f) && o.fatalError("Attribute " + f + " redefined"), r.addValue(
      f,
      // @see https://www.w3.org/TR/xml/#AVNormalize
      // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
      // - recursive replacement of (DTD) entity references
      // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
      h.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, u),
      g
    );
  }
  for (var l, a, s = ++e, c = Ue; ; ) {
    var d = t.charAt(s);
    switch (d) {
      case "=":
        if (c === le)
          l = t.slice(e, s), c = $e;
        else if (c === be)
          c = $e;
        else
          throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (c === $e || c === le)
          if (c === le && (o.warning('attribute value must after "="'), l = t.slice(e, s)), e = s + 1, s = t.indexOf(d, e), s > 0)
            a = t.slice(e, s), i(l, a, e - 1), c = Se;
          else
            throw new Error("attribute value no end '" + d + "' match");
        else if (c == Ce)
          a = t.slice(e, s), i(l, a, e), o.warning('attribute "' + l + '" missed start quot(' + d + ")!!"), e = s + 1, c = Se;
        else
          throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (c) {
          case Ue:
            r.setTagName(t.slice(e, s));
          case Se:
          case je:
          case it:
            c = it, r.closed = !0;
          case Ce:
          case le:
            break;
          case be:
            r.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return o.error("unexpected end of input"), c == Ue && r.setTagName(t.slice(e, s)), s;
      case ">":
        switch (c) {
          case Ue:
            r.setTagName(t.slice(e, s));
          case Se:
          case je:
          case it:
            break;
          case Ce:
          case le:
            a = t.slice(e, s), a.slice(-1) === "/" && (r.closed = !0, a = a.slice(0, -1));
          case be:
            c === be && (a = l), c == Ce ? (o.warning('attribute "' + a + '" missed quot(")!'), i(l, a, e)) : ((!Xe.isHTML(n[""]) || !a.match(/^(?:disabled|checked|selected)$/i)) && o.warning('attribute "' + a + '" missed value!! "' + a + '" instead!!'), i(a, a, e));
            break;
          case $e:
            throw new Error("attribute value missed!!");
        }
        return s;
      case "":
        d = " ";
      default:
        if (d <= " ")
          switch (c) {
            case Ue:
              r.setTagName(t.slice(e, s)), c = je;
              break;
            case le:
              l = t.slice(e, s), c = be;
              break;
            case Ce:
              var a = t.slice(e, s);
              o.warning('attribute "' + a + '" missed quot(")!!'), i(l, a, e);
            case Se:
              c = je;
              break;
          }
        else
          switch (c) {
            case be:
              r.tagName, (!Xe.isHTML(n[""]) || !l.match(/^(?:disabled|checked|selected)$/i)) && o.warning('attribute "' + l + '" missed value!! "' + l + '" instead2!!'), i(l, l, e), e = s, c = le;
              break;
            case Se:
              o.warning('attribute space is required"' + l + '"!!');
            case je:
              c = le, e = s;
              break;
            case $e:
              c = Ce, e = s;
              break;
            case it:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
    }
    s++;
  }
}
function Zr(t, e, r) {
  for (var n = t.tagName, u = null, d = t.length; d--; ) {
    var o = t[d], i = o.qName, l = o.value, f = i.indexOf(":");
    if (f > 0)
      var a = o.prefix = i.slice(0, f), s = i.slice(f + 1), c = a === "xmlns" && s;
    else
      s = i, a = null, c = i === "xmlns" && "";
    o.localName = s, c !== !1 && (u == null && (u = {}, Kn(r, r = {})), r[c] = u[c] = l, o.uri = Xe.XMLNS, e.startPrefixMapping(c, l));
  }
  for (var d = t.length; d--; ) {
    o = t[d];
    var a = o.prefix;
    a && (a === "xml" && (o.uri = Xe.XML), a !== "xmlns" && (o.uri = r[a || ""]));
  }
  var f = n.indexOf(":");
  f > 0 ? (a = t.prefix = n.slice(0, f), s = t.localName = n.slice(f + 1)) : (a = null, s = t.localName = n);
  var h = t.uri = r[a || ""];
  if (e.startElement(h, s, n, t), t.closed) {
    if (e.endElement(h, s, n), u)
      for (a in u)
        Object.prototype.hasOwnProperty.call(u, a) && e.endPrefixMapping(a);
  } else
    return t.currentNSMap = r, t.localNSMap = u, !0;
}
function ua(t, e, r, n, u) {
  if (/^(?:script|textarea)$/i.test(r)) {
    var o = t.indexOf("</" + r + ">", e), i = t.substring(e + 1, o);
    if (/[&<]/.test(i))
      return /^script$/i.test(r) ? (u.characters(i, 0, i.length), o) : (i = i.replace(/&#?\w+;/g, n), u.characters(i, 0, i.length), o);
  }
  return e + 1;
}
function oa(t, e, r, n) {
  var u = n[r];
  return u == null && (u = t.lastIndexOf("</" + r + ">"), u < e && (u = t.lastIndexOf("</" + r)), n[r] = u), u < e;
}
function Kn(t, e) {
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
}
function ia(t, e, r, n) {
  var u = t.charAt(e + 2);
  switch (u) {
    case "-":
      if (t.charAt(e + 3) === "-") {
        var o = t.indexOf("-->", e + 4);
        return o > e ? (r.comment(t, e + 4, o - e - 4), o + 3) : (n.error("Unclosed comment"), -1);
      } else
        return -1;
    default:
      if (t.substr(e + 3, 6) == "CDATA[") {
        var o = t.indexOf("]]>", e + 9);
        return r.startCDATA(), r.characters(t, e + 9, o - e - 9), r.endCDATA(), o + 3;
      }
      var i = la(t, e), l = i.length;
      if (l > 1 && /!doctype/i.test(i[0][0])) {
        var a = i[1][0], s = !1, c = !1;
        l > 3 && (/^public$/i.test(i[2][0]) ? (s = i[3][0], c = l > 4 && i[4][0]) : /^system$/i.test(i[2][0]) && (c = i[3][0]));
        var d = i[l - 1];
        return r.startDTD(a, s, c), r.endDTD(), d.index + d[0].length;
      }
  }
  return -1;
}
function aa(t, e, r) {
  var n = t.indexOf("?>", e);
  if (n) {
    var u = t.substring(e, n).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return u ? (u[0].length, r.processingInstruction(u[1], u[2]), n + 2) : -1;
  }
  return -1;
}
function Zn() {
  this.attributeNames = {};
}
Zn.prototype = {
  setTagName: function(t) {
    if (!Qr.test(t))
      throw new Error("invalid tagName:" + t);
    this.tagName = t;
  },
  addValue: function(t, e, r) {
    if (!Qr.test(t))
      throw new Error("invalid attribute:" + t);
    this.attributeNames[t] = this.length, this[this.length++] = { qName: t, value: e, offset: r };
  },
  length: 0,
  getLocalName: function(t) {
    return this[t].localName;
  },
  getLocator: function(t) {
    return this[t].locator;
  },
  getQName: function(t) {
    return this[t].qName;
  },
  getURI: function(t) {
    return this[t].uri;
  },
  getValue: function(t) {
    return this[t].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};
function la(t, e) {
  var r, n = [], u = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (u.lastIndex = e, u.exec(t); r = u.exec(t); )
    if (n.push(r), r[1]) return n;
}
gr.XMLReader = Qn;
gr.ParseError = Re;
var sa = oe, ca = ue, en = Jn, eu = gr, fa = ca.DOMImplementation, tn = sa.NAMESPACE, pa = eu.ParseError, da = eu.XMLReader;
function tu(t) {
  return t.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
}
function ru(t) {
  this.options = t || { locator: {} };
}
ru.prototype.parseFromString = function(t, e) {
  var r = this.options, n = new da(), u = r.domBuilder || new tt(), o = r.errorHandler, i = r.locator, l = r.xmlns || {}, a = /\/x?html?$/.test(e), s = a ? en.HTML_ENTITIES : en.XML_ENTITIES;
  i && u.setDocumentLocator(i), n.errorHandler = ha(o, u, i), n.domBuilder = r.domBuilder || u, a && (l[""] = tn.HTML), l.xml = l.xml || tn.XML;
  var c = r.normalizeLineEndings || tu;
  return t && typeof t == "string" ? n.parse(
    c(t),
    l,
    s
  ) : n.errorHandler.error("invalid doc source"), u.doc;
};
function ha(t, e, r) {
  if (!t) {
    if (e instanceof tt)
      return e;
    t = e;
  }
  var n = {}, u = t instanceof Function;
  r = r || {};
  function o(i) {
    var l = t[i];
    !l && u && (l = t.length == 2 ? function(a) {
      t(i, a);
    } : t), n[i] = l && function(a) {
      l("[xmldom " + i + "]	" + a + Qt(r));
    } || function() {
    };
  }
  return o("warning"), o("error"), o("fatalError"), n;
}
function tt() {
  this.cdata = !1;
}
function we(t, e) {
  e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber;
}
tt.prototype = {
  startDocument: function() {
    this.doc = new fa().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function(t, e, r, n) {
    var u = this.doc, o = u.createElementNS(t, r || e), i = n.length;
    at(this, o), this.currentElement = o, this.locator && we(this.locator, o);
    for (var l = 0; l < i; l++) {
      var t = n.getURI(l), a = n.getValue(l), r = n.getQName(l), s = u.createAttributeNS(t, r);
      this.locator && we(n.getLocator(l), s), s.value = s.nodeValue = a, o.setAttributeNode(s);
    }
  },
  endElement: function(t, e, r) {
    var n = this.currentElement;
    n.tagName, this.currentElement = n.parentNode;
  },
  startPrefixMapping: function(t, e) {
  },
  endPrefixMapping: function(t) {
  },
  processingInstruction: function(t, e) {
    var r = this.doc.createProcessingInstruction(t, e);
    this.locator && we(this.locator, r), at(this, r);
  },
  ignorableWhitespace: function(t, e, r) {
  },
  characters: function(t, e, r) {
    if (t = rn.apply(this, arguments), t) {
      if (this.cdata)
        var n = this.doc.createCDATASection(t);
      else
        var n = this.doc.createTextNode(t);
      this.currentElement ? this.currentElement.appendChild(n) : /^\s*$/.test(t) && this.doc.appendChild(n), this.locator && we(this.locator, n);
    }
  },
  skippedEntity: function(t) {
  },
  endDocument: function() {
    this.doc.normalize();
  },
  setDocumentLocator: function(t) {
    (this.locator = t) && (t.lineNumber = 0);
  },
  //LexicalHandler
  comment: function(t, e, r) {
    t = rn.apply(this, arguments);
    var n = this.doc.createComment(t);
    this.locator && we(this.locator, n), at(this, n);
  },
  startCDATA: function() {
    this.cdata = !0;
  },
  endCDATA: function() {
    this.cdata = !1;
  },
  startDTD: function(t, e, r) {
    var n = this.doc.implementation;
    if (n && n.createDocumentType) {
      var u = n.createDocumentType(t, e, r);
      this.locator && we(this.locator, u), at(this, u), this.doc.doctype = u;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function(t) {
    console.warn("[xmldom warning]	" + t, Qt(this.locator));
  },
  error: function(t) {
    console.error("[xmldom error]	" + t, Qt(this.locator));
  },
  fatalError: function(t) {
    throw new pa(t, this.locator);
  }
};
function Qt(t) {
  if (t)
    return `
@` + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]";
}
function rn(t, e, r) {
  return typeof t == "string" ? t.substr(e, r) : t.length >= e + r || e ? new java.lang.String(t, e, r) + "" : t;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(t) {
  tt.prototype[t] = function() {
    return null;
  };
});
function at(t, e) {
  t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e);
}
vt.__DOMHandler = tt;
vt.normalizeLineEndings = tu;
vt.DOMParser = ru;
var ma = ue, ga = ma.XMLSerializer, ya = vt.DOMParser;
const p = {}, nu = (t) => new gu({
  ignoreAttributes: !1,
  attributeNamePrefix: "@_",
  parseAttributeValue: !0,
  parseTagValue: !0
}).parse(t);
p.parse = function(t) {
  return new ya().parseFromString(t, "application/xml");
};
p.serialize = function(t) {
  function e(n = t) {
    return n.replaceAll(/<Color (.+)\/>/g, "<Color $1> </Color>") || n;
  }
  const r = new ga().serializeToString(t);
  return e(r);
};
p.appendElement = (t, e, r, n) => {
  const u = t.ownerDocument.createElement(e);
  if (r && u.appendChild(t.ownerDocument.createTextNode(r)), n)
    for (const o in n) u.setAttribute(o, n[o]);
  return t.appendChild(u), u;
};
p.getElementText = function(t, e = "") {
  if (!t)
    return e;
  let r = "";
  for (let n = 0; n < t.childNodes.length; n++)
    t.childNodes[n].nodeType == 3 && (r += t.childNodes[n].data);
  return r;
};
p.getElement = function(t, e) {
  const r = t.getElementsByTagName(e);
  if (r.length > 0) return r[0];
};
p.getElements = function(t, e) {
  return t.getElementsByTagName(e);
};
p.setElementText = function(t, e) {
  p.removeAllChildren(t), t.appendChild(t.ownerDocument.createTextNode(e));
};
p.removeAllChildren = function(t) {
  for (; t.firstChild; ) t.removeChild(t.firstChild);
};
p.xmlToJson = nu;
class uu extends Error {
  constructor(e = "Missing printer") {
    super(e), this.name = "missing-printer";
  }
}
const j = "get", Te = "post", ou = async ({
  url: t,
  method: e = j,
  params: r = void 0,
  headers: n = {},
  debug: u = !1,
  timeout: o = v("API_TIMEOUT"),
  ...i
}) => {
  const l = (a, s = u) => {
    s && console.log("apiService.writer", a);
  };
  try {
    const { data: a = void 0 } = await mu(t, {
      method: e,
      [e === j ? "params" : "data"]: r,
      headers: n,
      timeout: o,
      ...i
    });
    return a && typeof a == "string" && a.charAt(0) == "<" ? nu(a) : a;
  } catch (a) {
    throw l(a), a;
  }
}, Da = (t, e) => {
  t && Zt("Port", t);
}, Aa = (t, e) => {
  const r = an(v("WS_CMD_STATUS"), {
    port: t,
    host: e
  });
  return ou({
    url: r,
    timeout: v("WS_CHECK_TIMEOUT")
  });
}, iu = async (t, e, r) => {
  const n = v("WS_START_PORT"), u = v("WS_END_PORT"), o = [];
  for (let i = n; i <= u; ++i)
    o.push(
      Aa(i, t).then((l) => l ? i : !1).catch(() => !1)
    );
  try {
    const i = await Promise.all(o);
    let l = !1;
    if (i.forEach((a) => {
      !l && du(a) && (l = !0, Da(a, t), e());
    }), !l)
      throw new uu("Could not find dymo port");
  } catch (i) {
    r && r(i);
  }
}, va = (t, e) => iu(void 0, t, e), Ea = (t, e) => iu(void 0, t, e), _ = (t, e, r = {}) => {
  const n = an(e);
  return ou({
    url: n,
    method: t,
    params: r ? $i.stringify(r) : void 0,
    withCredentials: !1,
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  });
}, ba = function() {
  this.getPrinters = async function() {
    const t = await _(j, v("WS_CMD_GET_PRINTERS")), { Printers: e = [] } = t || {}, r = [];
    return Object.keys(e).forEach((n) => {
      const u = e[n] || [];
      r.push({
        ...u,
        printerType: n
      });
    }), r;
  }, this.getJobStatus = function() {
    return _(j, v("WS_CMD_GET_JOB_STATUS"));
  }, this.openLabelFile = function(t) {
    return _(j, v("WS_CMD_OPEN_LABEL"), { fileName: t });
  }, this.printLabel = function(t, e, r, n) {
    return _(Te, v("WS_CMD_PRINT_LABEL"), {
      printerName: t,
      printParamsXml: e,
      labelXml: r,
      labelSetXml: `${n}`
    });
  }, this.printLabel2 = function(t, e, r, n) {
    return _(Te, v("WS_CMD_PRINT_LABEL2"), {
      printerName: t,
      printParamsXml: e,
      labelXml: r,
      labelSetXml: n
    });
  }, this.renderLabel = function(t, e, r) {
    return _(Te, v("WS_CMD_RENDER_LABEL"), {
      labelXml: t,
      renderParamsXml: e,
      printerName: r
    });
  }, this.loadImageAsPngBase64 = function(t) {
    return _(j, v("WS_CMD_LOAD_IMAGE"), { imageUri: t });
  }, this.is550Printer = function(t) {
    return _(j, v("WS_CMD_IS_550_PRINTER"), { printerName: t });
  }, this.getConsumableInfoIn550Printer = function(t) {
    return _(j, v("WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER"), {
      printerName: t
    });
  }, this.getPrintersAsync = function() {
    return _(j, v("WS_CMD_GET_PRINTERS"));
  }, this.openLabelFileAsync = function(t) {
    return _(j, v("WS_CMD_OPEN_LABEL"), { fileName: t });
  }, this.printLabelAsync = function(t, e, r, n) {
    return _(Te, v("WS_CMD_PRINT_LABEL"), {
      printerName: t,
      printParamsXml: e,
      labelXml: r,
      labelSetXml: n
    });
  }, this.printLabel2Async = (t, e, r, n) => _(Te, v("WS_CMD_PRINT_LABEL2"), {
    printerName: t,
    printParamsXml: e,
    labelXml: r,
    labelSetXml: n
  }), this.renderLabelAsync = (t, e, r) => _(Te, v("WS_CMD_RENDER_LABEL"), {
    labelXml: t,
    renderParamsXml: e,
    printerName: r
  }), this.loadImageAsPngBase64Async = function(t) {
    return _(j, v("WS_CMD_LOAD_IMAGE"), { imageUri: t });
  }, this.is550PrinterAsync = function(t) {
    return _(j, v("WS_CMD_IS_550_PRINTER"), { printerName: t });
  }, this.getConsumableInfoIn550PrinterAsync = function(t) {
    return _(j, v("WS_CMD_GET_CONSUMABLE_INFO_IN_550_PRINTER"), {
      printerName: t
    });
  };
}, nn = {
  console: {
    log: (...t) => console.log(...t)
  }
}, me = (t, { key: e = "general.log", level: r = "log" } = {}) => {
  v("dymo.label.framework.trace") && nn.console && nn.console.log && console[r](e, t);
}, Ae = function(t, e, r, n) {
  this.printerName = t, this.jobId = e, this.status = r, this.statusMessage = n;
};
Ae.parse = (t) => {
  const e = {}, r = t.split(" ");
  return r.length >= 1 && (e.status = parseInt(r[0], 10)), e.statusMessage = r.slice(1).join(" "), e;
};
const V = {
  Unknown: void 0,
  Printing: void 0,
  Finished: void 0,
  Error: void 0,
  PaperOut: void 0,
  InQueue: void 0,
  ProcessingError: void 0,
  PrinterBusy: void 0,
  InvalidJobId: void 0,
  NotSpooled: void 0
};
V.Unknown = 0;
V.Printing = 1;
V.Finished = 2;
V.Error = 3;
V.PaperOut = 4;
V.InQueue = 5;
V.ProcessingError = -1;
V.PrinterBusy = -2;
V.InvalidJobId = -3;
V.NotSpooled = -4;
const Ca = function(t) {
  let e;
  if (t.errorDetails != "")
    throw new Error(t.errorDetails);
  me("chooseEnvironment > WebServicePresent");
  const r = new ba();
  if (r)
    return e = {}, e.getPrinters = function() {
      return r.getPrinters();
    }, e.openLabelFile = function(n) {
      return r.openLabelFile(n);
    }, e.printLabel = function(n, u, o, i) {
      return r.printLabel(n, u, o, i);
    }, e.printLabel2 = function(n, u, o, i) {
      return r.printLabel2(n, u, o, i);
    }, e.renderLabel = function(n, u, o) {
      return r.renderLabel(n, u, o);
    }, e.loadImageAsPngBase64 = function(n) {
      return r.loadImageAsPngBase64(n);
    }, e.is550Printer = function(n) {
      return r.is550Printer(n);
    }, e.getConsumableInfoIn550Printer = function(n) {
      return r.getConsumableInfoIn550Printer(n);
    }, e.getJobStatus = function(n, u) {
      const o = typeof r.getJobStatus == "function" ? Ae.parse(r.getJobStatus(n, parseInt(u, 10))) : {
        status: V.Unknown,
        statusMessage: "not implemented"
      };
      return new Ae(n, u, o.status, o.statusMessage);
    }, e.getPrintersAsync = function() {
      return r.getPrintersAsync();
    }, e.openLabelFileAsync = function(n) {
      return r.openLabelFileAsync(n);
    }, e.printLabelAsync = function(n, u, o, i) {
      return r.printLabelAsync(n, u, o, i);
    }, e.printLabel2Async = function(n, u, o, i) {
      return r.printLabel2Async(n, u, o, i);
    }, e.renderLabelAsync = function(n, u, o) {
      return r.renderLabelAsync(n, u, o);
    }, e.loadImageAsPngBase64Async = function(n) {
      return r.loadImageAsPngBase64Async(n);
    }, e.is550PrinterAsync = function(n) {
      return r.is550PrinterAsync(n);
    }, e.getConsumableInfoIn550PrinterAsync = function(n) {
      return r.getConsumableInfoIn550PrinterAsync(n);
    }, e;
  throw new Error(
    "Cannot establish connection to the web service. Is DYMO Label Framework installed?"
  );
}, Sa = async function(t, e) {
  const r = {
    isBrowserSupported: !1,
    isFrameworkInstalled: !1,
    isWebServicePresent: !1,
    errorDetails: ""
  }, n = async function() {
    r.isBrowserSupported = !0, r.isFrameworkInstalled = !0, r.isWebServicePresent = !0, t && await t(r);
  }, u = async function() {
    r.isBrowserSupported = !0, r.isFrameworkInstalled = !0, r.isWebServicePresent = !1, t && await t(r);
  }, o = function() {
    me("checkLegacyPlugins"), r.isWebServicePresent = !1, r.isBrowserSupported = !0;
  }, i = function(l) {
    o(), t && t({ ...r, error: l });
  };
  return v("dymo.label.framework.currentFramework") ? (me("checkEnvironment > return existing instance of framework"), v("dymo.label.framework.currentFramework") == 2 ? await n() : await u(), r) : (e ? await va(n, i) : await Ea(n, i), r);
}, wa = function(t) {
  const e = t || new Error("DYMO Label Framework Plugin or WebService are not installed"), r = () => {
    throw e;
  };
  return {
    getPrinters: r,
    openLabelFile: r,
    printLabel: r,
    printLabel2: r,
    renderLabel: r,
    loadImageAsPngBase64: r,
    getJobStatus: r,
    is550Printer: r,
    getConsumableInfoIn550Printer: r,
    getPrintersAsync: r,
    openLabelFileAsync: r,
    printLabelAsync: r,
    printLabel2Async: r,
    renderLabelAsync: r,
    loadImageAsPngBase64Async: r,
    is550PrinterAsync: r,
    getConsumableInfoIn550PrinterAsync: r
  };
};
function Kt(t = void 0, e = void 0, r = void 0) {
  this.v1 = !0, this.init = !1;
  let n = r, u, o = !1, i = null;
  if (o)
    throw me("_createFramework > Error service discovery is in progress. "), new Error("DYMO Label Framework service discovery is in progress.");
  if (n)
    return me(
      `_createFramework > returning existing instance of _framework, has callBack: ${!!t}`
    ), t && t(i), n;
  if (this && this.constructor == Kt) {
    o = !0;
    const l = function(a) {
      i = a;
      try {
        n = Ca(a), u = a.isWebServicePresent ? 2 : 1, u === 2 && Zt("dymo.label.framework.currentFramework", u);
      } catch (s) {
        if (me(`onEnvironmentChecked > exception e : ${s.description || s.message || s}`), !e) throw s;
        n = wa(s), me("onEnvironmentChecked > fall back to createFaultyFramework");
      } finally {
        o = !1;
      }
      t && t(i);
    };
    return (async () => (await Sa(l, e), n))();
  }
  return this.init = !0, new Kt(t, e);
}
const pe = (t = void 0, e = void 0) => (
  // @ts-expect-error
  new Kt(t, e)
), Va = `<?xml version="1.0" encoding="utf-8"?>
<DesktopLabel Version="1">
    <DYMOLabel Version="3">
        <Description>DYMO Label</Description>
        <Orientation>Landscape</Orientation>
        <LabelName>Address</LabelName>
        <InitialLength>0</InitialLength>
        <BorderStyle>SolidLine</BorderStyle>
        <DYMORect>
            <DYMOPoint>
                <X>0.23</X>
                <Y>0.06</Y>
            </DYMOPoint>
            <Size>
                <Width>3.21</Width>
                <Height>0.9966666</Height>
            </Size>
        </DYMORect>
        <BorderColor>
            <SolidColorBrush>
                <Color A="1" R="0" G="0" B="0"> </Color>
            </SolidColorBrush>
        </BorderColor>
        <BorderThickness>1</BorderThickness>
        <Show_Border>False</Show_Border>
        <DynamicLayoutManager>
            <RotationBehavior>ClearObjects</RotationBehavior>
            <LabelObjects>
                <TextObject>
                    <Name>Line1</Name>
                    <Brushes>
                        <BackgroundBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BackgroundBrush>
                        <BorderBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BorderBrush>
                        <StrokeBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </StrokeBrush>
                        <FillBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </FillBrush>
                    </Brushes>
                    <Rotation>Rotation0</Rotation>
                    <OutlineThickness>1</OutlineThickness>
                    <IsOutlined>False</IsOutlined>
                    <BorderStyle>SolidLine</BorderStyle>
                    <Margin>
                        <DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
                    </Margin>
                    <HorizontalAlignment>Center</HorizontalAlignment>
                    <VerticalAlignment>Middle</VerticalAlignment>
                    <FitMode>None</FitMode>
                    <IsVertical>False</IsVertical>
                    <FormattedText>
                        <FitMode>None</FitMode>
                        <HorizontalAlignment>Center</HorizontalAlignment>
                        <VerticalAlignment>Middle</VerticalAlignment>
                        <IsVertical>False</IsVertical>
                        <LineTextSpan>
                            <TextSpan>
                                <Text>Line1</Text>
                                <FontInfo>
                                    <FontName>Segoe UI</FontName>
                                    <FontSize>8</FontSize>
                                    <IsBold>True</IsBold>
                                    <IsItalic>False</IsItalic>
                                    <IsUnderline>False</IsUnderline>
                                    <FontBrush>
                                        <SolidColorBrush>
                                            <Color A="1" R="0" G="0" B="0"> </Color>
                                        </SolidColorBrush>
                                    </FontBrush>
                                </FontInfo>
                            </TextSpan>
                        </LineTextSpan>
                    </FormattedText>
                    <ObjectLayout>
                        <DYMOPoint>
                            <X>0.23</X>
                            <Y>0.06</Y>
                        </DYMOPoint>
                        <Size>
                            <Width>3.193756</Width>
                            <Height>0.1368766</Height>
                        </Size>
                    </ObjectLayout>
                </TextObject>
                <TextObject>
                    <Name>Line2</Name>
                    <Brushes>
                        <BackgroundBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BackgroundBrush>
                        <BorderBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BorderBrush>
                        <StrokeBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </StrokeBrush>
                        <FillBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </FillBrush>
                    </Brushes>
                    <Rotation>Rotation0</Rotation>
                    <OutlineThickness>1</OutlineThickness>
                    <IsOutlined>False</IsOutlined>
                    <BorderStyle>SolidLine</BorderStyle>
                    <Margin>
                        <DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
                    </Margin>
                    <HorizontalAlignment>Center</HorizontalAlignment>
                    <VerticalAlignment>Middle</VerticalAlignment>
                    <FitMode>None</FitMode>
                    <IsVertical>False</IsVertical>
                    <FormattedText>
                        <FitMode>None</FitMode>
                        <HorizontalAlignment>Center</HorizontalAlignment>
                        <VerticalAlignment>Middle</VerticalAlignment>
                        <IsVertical>False</IsVertical>
                        <LineTextSpan>
                            <TextSpan>
                                <Text>Line2</Text>
                                <FontInfo>
                                    <FontName>Segoe UI</FontName>
                                    <FontSize>8</FontSize>
                                    <IsBold>False</IsBold>
                                    <IsItalic>False</IsItalic>
                                    <IsUnderline>False</IsUnderline>
                                    <FontBrush>
                                        <SolidColorBrush>
                                            <Color A="1" R="0" G="0" B="0"> </Color>
                                        </SolidColorBrush>
                                    </FontBrush>
                                </FontInfo>
                            </TextSpan>
                        </LineTextSpan>
                    </FormattedText>
                    <ObjectLayout>
                        <DYMOPoint>
                            <X>0.23</X>
                            <Y>0.1968766</Y>
                        </DYMOPoint>
                        <Size>
                            <Width>3.180007</Width>
                            <Height>0.1338767</Height>
                        </Size>
                    </ObjectLayout>
                </TextObject>
                <TextObject>
                    <Name>Line3</Name>
                    <Brushes>
                        <BackgroundBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BackgroundBrush>
                        <BorderBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BorderBrush>
                        <StrokeBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </StrokeBrush>
                        <FillBrush>
                            <SolidColorBrush>
                                <Color A="0" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </FillBrush>
                    </Brushes>
                    <Rotation>Rotation0</Rotation>
                    <OutlineThickness>1</OutlineThickness>
                    <IsOutlined>False</IsOutlined>
                    <BorderStyle>SolidLine</BorderStyle>
                    <Margin>
                        <DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
                    </Margin>
                    <HorizontalAlignment>Center</HorizontalAlignment>
                    <VerticalAlignment>Middle</VerticalAlignment>
                    <FitMode>None</FitMode>
                    <IsVertical>False</IsVertical>
                    <FormattedText>
                        <FitMode>None</FitMode>
                        <HorizontalAlignment>Center</HorizontalAlignment>
                        <VerticalAlignment>Middle</VerticalAlignment>
                        <IsVertical>False</IsVertical>
                        <LineTextSpan>
                            <TextSpan>
                                <Text>Line3</Text>
                                <FontInfo>
                                    <FontName>Segoe UI</FontName>
                                    <FontSize>10</FontSize>
                                    <IsBold>False</IsBold>
                                    <IsItalic>False</IsItalic>
                                    <IsUnderline>False</IsUnderline>
                                    <FontBrush>
                                        <SolidColorBrush>
                                            <Color A="1" R="0" G="0" B="0"> </Color>
                                        </SolidColorBrush>
                                    </FontBrush>
                                </FontInfo>
                            </TextSpan>
                        </LineTextSpan>
                    </FormattedText>
                    <ObjectLayout>
                        <DYMOPoint>
                            <X>0.23</X>
                            <Y>0.7875001</Y>
                        </DYMOPoint>
                        <Size>
                            <Width>3.19878</Width>
                            <Height>0.2691666</Height>
                        </Size>
                    </ObjectLayout>
                </TextObject>
                <BarcodeObject>
                    <Name>ItemCode</Name>
                    <Brushes>
                        <BackgroundBrush>
                            <SolidColorBrush>
                                <Color A="1" R="1" G="1" B="1"> </Color>
                            </SolidColorBrush>
                        </BackgroundBrush>
                        <BorderBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </BorderBrush>
                        <StrokeBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </StrokeBrush>
                        <FillBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </FillBrush>
                    </Brushes>
                    <Rotation>Rotation0</Rotation>
                    <OutlineThickness>1</OutlineThickness>
                    <IsOutlined>False</IsOutlined>
                    <BorderStyle>SolidLine</BorderStyle>
                    <Margin>
                        <DYMOThickness Left="0" Top="0" Right="0" Bottom="0" />
                    </Margin>
                    <BarcodeFormat>Code128B</BarcodeFormat>
                    <Data>
                        <MultiDataString>
                            <DataString>1234</DataString>
                        </MultiDataString>
                    </Data>
                    <HorizontalAlignment>Center</HorizontalAlignment>
                    <VerticalAlignment>Middle</VerticalAlignment>
                    <Size>Medium</Size>
                    <TextPosition>None</TextPosition>
                    <FontInfo>
                        <FontName>Arial</FontName>
                        <FontSize>12</FontSize>
                        <IsBold>False</IsBold>
                        <IsItalic>False</IsItalic>
                        <IsUnderline>False</IsUnderline>
                        <FontBrush>
                            <SolidColorBrush>
                                <Color A="1" R="0" G="0" B="0"> </Color>
                            </SolidColorBrush>
                        </FontBrush>
                    </FontInfo>
                    <ObjectLayout>
                        <DYMOPoint>
                            <X>0.23</X>
                            <Y>0.3498435</Y>
                        </DYMOPoint>
                        <Size>
                            <Width>3.196882</Width>
                            <Height>0.5037009</Height>
                        </Size>
                    </ObjectLayout>
                </BarcodeObject>
            </LabelObjects>
        </DynamicLayoutManager>
    </DYMOLabel>
    <LabelApplication>Blank</LabelApplication>
    <DataTable>
        <Columns> </Columns>
        <Rows> </Rows>
    </DataTable>
</DesktopLabel>`;
let au = class {
  setTextMarkup(e, r) {
    return r = r.toString(), r.indexOf($t) !== 0 && (r = $t + r + Du), this[e] = r, this;
  }
  setText(e, r) {
    return this[e] = r, this;
  }
  setBase64Image(e, r) {
    return this[e] = r, this;
  }
};
const Et = function(t, e, r, n, u) {
  this.printerType = t, this.name = e, this.modelName = r, this.isConnected = n, this.isLocal = u, this.printerUri = "", this.originalPrinterName = "";
}, Ta = {
  AboveAddress: "AboveAddress",
  BelowAddress: "BelowAddress",
  Suppress: "Suppress"
}, Ba = {
  AutoCut: "AutoCut",
  ChainMarks: "ChainMarks"
}, lu = function(t, e, r, n, u) {
  Et.call(this, "TapePrinter", t, e, r, n), this.isAutoCutSupported = u;
}, Oe = {}, rt = function(t, e) {
  this._printerInfo = t, this._jobId = e;
};
rt.prototype.getPrinterName = function() {
  return this._printerInfo.name;
};
rt.prototype.getJobId = function() {
  return this._jobId;
};
rt.prototype.getStatus = function(t) {
  if (this._printerInfo.isNetworkPrinter())
    this.getStatusForNetworkPrinter(t);
  else {
    let e;
    try {
      e = pe().getJobStatus(this._printerInfo.name, this._jobId);
    } catch (r) {
      e = new Ae(
        this.getPrinterName(),
        this._jobId,
        V.ProcessingError,
        r.message || r
      );
    }
    t(e);
  }
};
rt.prototype.getStatusForNetworkPrinter = function(t) {
  const e = this.getPrinterName(), r = this._jobId, { printerUri: n } = this._printerInfo;
  new Oe.net.Jsonp(Oe.Uri.resolve(n, "getPrintJobStatus"), "callback").send(
    { jobId: r, printerName: this._printerInfo.originalPrinterName },
    function(o) {
      const i = new Ae(
        e,
        r,
        o.status,
        o.statusMessage
      );
      t(i);
    },
    function() {
      const o = new Ae(
        e,
        r,
        V.ProcessingError,
        `Error processing getPrintJobStatus(): Unable to contact "${n}"`
      );
      t(o);
    }
  );
};
const su = function(t, e, r, n, u) {
  Et.call(this, "LabelWriterPrinter", t, e, r, n), this.isTwinTurbo = u;
}, cu = () => {
  const t = [];
  return Object.defineProperty(t, "byIndex", {
    enumerable: !1,
    value: []
  }), t;
}, Na = async () => {
  let t = cu();
  if (!v("ASSUME_MOBILE")) {
    const e = await pe().getPrinters();
    t = await Fa(e);
  }
  return t;
}, fu = function(t, e, r, n, u) {
  Et.call(this, "DZPrinter", t, e, r, n), this.isAutoCutSupported = u;
}, Fa = async (t) => {
  const e = function(y, D) {
    return p.getElementText(p.getElement(y, D));
  }, r = p.parse(t), n = cu();
  let u, o, i, l, a, s, c;
  const d = p.getElement(r, "Printers"), f = p.getElements(d, "LabelWriterPrinter");
  for (u = 0; u < f.length; u++) {
    o = e(f[u], "Name"), i = e(f[u], "ModelName"), l = e(f[u], "IsConnected") == "True", a = e(f[u], "IsLocal") == "True", s = e(f[u], "IsTwinTurbo") == "True";
    const y = new su(
      o,
      i,
      l,
      a,
      s
    );
    Tt(y, n);
  }
  const h = p.getElements(d, "TapePrinter");
  for (u = 0; u < h.length; u++) {
    o = e(h[u], "Name"), i = e(h[u], "ModelName"), l = e(h[u], "IsConnected") == "True", a = e(h[u], "IsLocal") == "True", c = e(h[u], "IsAutoCutSupported") == "True";
    const y = new lu(
      o,
      i,
      l,
      a,
      c
    );
    Tt(y, n);
  }
  const g = p.getElements(d, "DZPrinter");
  for (u = 0; u < g.length; u++) {
    o = e(g[u], "Name"), i = e(g[u], "ModelName"), l = e(g[u], "IsConnected") == "True", a = e(g[u], "IsLocal") == "True", c = e(g[u], "IsAutoCutSupported") == "True";
    const y = new fu(
      o,
      i,
      l,
      a,
      c
    );
    Tt(y, n);
  }
  return n;
}, Oa = (t, e, r, n) => {
  if (e = e || "", n = n || "", typeof n != "string" && (n = n.toString()), typeof r > "u")
    throw new Error("printLabel(): labelXml parameter should be specified");
  typeof r != "string" && (r = r.toString());
  const o = Na()[t];
  throw hu(o) || pe().printLabel(o.name, e, r, n), new Error(`printLabel(): unknown printer '${t}'`);
}, F = function(t) {
  this._doc = p.parse(t);
};
F.prototype.getLabelXml = function() {
  return p.serialize(this._doc);
};
F.prototype.print = function(t, e, r) {
  Oa(t, e, this.getLabelXml(), r);
};
const Ia = [
  "AddressObject",
  "TextObject",
  "BarcodeObject",
  "ShapeObject",
  "CounterObject",
  "ImageObject",
  "CircularTextObject",
  "DateTimeObject",
  "QRCodeObject"
];
F.prototype._getObjectElements = function(t) {
  const e = t || Ia;
  return Oe.dom.findNodes(this._doc.documentElement, function(r) {
    return r.nodeType == Oe.dom.NodeType.ELEMENT && Oe.array.indexOf(e, r.tagName) >= 0;
  });
};
F.prototype._getObjectByNameElement = function(t) {
  const e = this._getObjectElements();
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    if (p.getElementText(p.getElement(n, "Name")) == t) return n;
  }
  throw new Error(`getObjectByNameElement(): no object with name '${t}' was found`);
};
F.prototype.isDCDLabel = function() {
  let t = !1;
  const e = this.getLabelXml();
  return e && (t = e.indexOf("</DYMO label>") !== -1), t;
};
F.prototype._getAddressObjectText = function(t) {
  let e = "";
  if (this.isDCDLabel()) {
    const r = p.getElement(t, "FormattedText"), n = p.getElements(r, "LineTextSpan");
    for (let u = 0; u < n.length; u++) {
      const o = p.getElements(n[u], "TextSpan");
      for (let i = 0; i < o.length; i++) {
        const l = p.getElement(o[i], "Text");
        e += p.getElementText(l);
      }
    }
  } else {
    const r = p.getElement(t, "StyledText"), n = p.getElements(r, "String");
    e = Oe.array.reduce(
      n,
      function(u, o) {
        return u + p.getElementText(o);
      },
      ""
    );
  }
  return e;
};
F.prototype._getBarcodeObjectText = function(t) {
  let e = "";
  const r = this.isDCDLabel() ? "Data" : "Text", n = p.getElement(t, r);
  return n && (e = p.getElementText(n)), e;
};
F.prototype._getQRcodeObjectText = function(t) {
  let e = "";
  if (this.isDCDLabel()) {
    const r = p.getElement(t, "Data");
    if (r) {
      const n = p.getElement(r, "DataString");
      e = p.getElementText(n);
    }
  }
  return e;
};
F.prototype._getImageObjectText = function(t) {
  let e = "";
  const r = this.isDCDLabel() ? "Data" : "Image", n = p.getElement(t, r);
  return n && (e = p.getElementText(n)), e;
};
F.prototype._getDateTimeCounterObjectText = function(t) {
  let e = "";
  if (!this.isDCDLabel())
    e = p.getElementText(p.getElement(t, "PreText"));
  else {
    const r = p.getElement(t, "FormattedText"), n = p.getElements(r, "LineTextSpan");
    if (n) {
      const u = p.getElements(n[0], "TextSpan"), o = p.getElement(u[0], "Text");
      e += p.getElementText(o);
    }
  }
  return e;
};
F.prototype.getObjectText = function(t) {
  const e = this._getObjectByNameElement(t), r = e.tagName;
  let n = "";
  switch (r) {
    case "AddressObject":
    case "TextObject":
      n = this._getAddressObjectText(e);
      break;
    case "BarcodeObject":
      n = this._getBarcodeObjectText(e);
      break;
    case "ImageObject":
      n = this._getImageObjectText(e);
      break;
    case "CircularTextObject":
      n = this.isDCDLabel() ? this._getAddressObjectText(e) : p.getElementText(p.getElement(e, "Text"));
      break;
    case "QRCodeObject":
      n = this._getQRcodeObjectText(e);
      break;
    case "DateTimeObject":
    case "CounterObject":
      n = this._getDateTimeCounterObjectText(e);
      break;
  }
  return n;
};
F.prototype._getStyledTextLineAttributes = function(t) {
  const e = [], r = p.getElements(t, "Element");
  let n = !0;
  for (let u = 0; u < r.length; u++) {
    const o = r[u], i = p.getElementText(p.getElement(o, "String"));
    if (!i || !i.length) continue;
    const l = i.split(`
`), a = l.length;
    if (a == 1 && !n) continue;
    let s = 0;
    n || (s = 1);
    const c = p.getElement(o, "Attributes");
    for (; s < a - 1; s++) e.push(c);
    l[a - 1].length > 0 ? (e.push(c), n = !1) : n = !0;
  }
  return e;
};
F.prototype._setAddressObjectText = function(t, e) {
  if (this.isDCDLabel()) {
    const r = p.getElement(t, "FormattedText"), n = p.getElements(r, "LineTextSpan");
    if (n) {
      const u = p.getElements(n[0], "TextSpan");
      if (u) {
        const o = p.getElement(u[0], "Text");
        p.setElementText(o, e);
      }
    }
  } else {
    const r = p.getElement(t, "StyledText"), n = this._getStyledTextLineAttributes(r), u = p.getElement(t, "LineFonts");
    let o = [];
    u && (o = p.getElements(u, "Font"));
    let i;
    o.length == 0 && (i = p.parse(
      '<Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />'
    ).documentElement);
    const l = p.parse(
      '<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />'
    ).documentElement;
    p.removeAllChildren(r);
    const a = e.split(`
`);
    for (let s = 0; s < a.length; s++) {
      let c = a[s].replace("\r", "");
      s < a.length - 1 && (c += `
`);
      let d = i;
      o.length > 0 ? s < o.length ? d = o[s] : d = o[o.length - 1] : n.length > 0 && (s < n.length ? d = p.getElement(n[s], "Font") : d = p.getElement(n[n.length - 1], "Font"));
      let f = l;
      s < n.length && (f = p.getElement(n[s], "ForeColor"));
      const h = r.ownerDocument.createElement("Element"), g = r.ownerDocument.createElement("String");
      p.setElementText(g, c);
      const y = r.ownerDocument.createElement("Attributes");
      y.appendChild(d.cloneNode(!0)), y.appendChild(f.cloneNode(!0)), h.appendChild(g), h.appendChild(y), r.appendChild(h);
    }
  }
  return this;
};
F.prototype._setQRCodeObjectText = function(t, e) {
  if (this.isDCDLabel()) {
    const r = p.getElement(t, "Data");
    if (r) {
      const n = p.getElement(r, "DataString");
      p.setElementText(n, e);
    }
  }
  return this;
};
F.prototype._setBarcodeObjectText = function(t, e) {
  const r = this.isDCDLabel() ? "Data" : "Text", n = p.getElement(t, r);
  return n && p.setElementText(n, e), this;
};
F.prototype._setImageObjectText = function(t, e) {
  if (this.isDCDLabel()) {
    const r = p.getElement(t, "Data");
    r && p.setElementText(r, e);
  } else {
    let r = p.getElement(t, "Image");
    if (r) p.setElementText(r, e);
    else {
      const n = p.getElement(t, "ImageLocation");
      if (!n)
        throw new Error(
          `setObjectText(): <ImageLocation> is expected but not found: ${p.serialize(r)}`
        );
      r = n.ownerDocument.createElement("Image"), p.setElementText(r, e), t.replaceChild(r, n);
    }
  }
  return this;
};
F.prototype._setDateTimeCounterObjectText = function(t, e) {
  if (!this.isDCDLabel())
    p.setElementText(p.getElement(t, "PreText"), e);
  else {
    const r = p.getElement(t, "FormattedText"), n = p.getElements(r, "LineTextSpan");
    if (n) {
      const u = p.getElements(n[0], "TextSpan"), o = p.getElement(u[0], "Text");
      p.setElementText(o, e);
    }
  }
  return this;
};
F.prototype.setObjectText = function(t, e) {
  const r = this._getObjectByNameElement(t);
  switch (r.tagName) {
    case "AddressObject":
      this._setAddressObjectText(r, e);
      break;
    case "TextObject":
      this._setAddressObjectText(r, e);
      break;
    case "QRCodeObject":
      this._setQRCodeObjectText(r, e);
      break;
    case "BarcodeObject":
      this._setBarcodeObjectText(r, e);
      break;
    case "ImageObject":
      this._setImageObjectText(r, e);
      break;
    case "CircularTextObject":
      this.isDCDLabel() ? this._setAddressObjectText(r, e) : p.setElementText(p.getElement(r, "Text"), e);
      break;
    case "DateTimeObject":
    case "CounterObject":
      this._setDateTimeCounterObjectText(r, e);
      break;
  }
  return this;
};
F.prototype.toString = function() {
  return this.getLabelXml();
};
const yr = {};
yr.LeftToRight = "LeftToRight";
yr.RightToLeft = "RightToLeft";
const bt = {};
bt.Auto = "Auto";
bt.Text = "Text";
bt.BarcodeAndGraphics = "BarcodeAndGraphics";
class xa {
  setTextMarkup(e, r) {
    return this;
  }
  setText(e, r) {
    return this;
  }
  setBase64Image(e, r) {
    return this;
  }
}
const _a = {
  Center: "Center",
  Left: "Left",
  Right: "Right"
}, Ct = {};
Ct.Auto = "Auto";
Ct.Left = "Left";
Ct.Right = "Right";
const Pa = function(t) {
  this.isWebServicePresent = t.isWebServicePresent, this.isBrowserSupported = t.isBrowserSupported, this.isFrameworkInstalled = t.isFrameworkInstalled, this.errorDetails = t.errorDetails;
}, La = function(t) {
  if (!t) return "";
  const e = p.parse("<LabelWriterPrintParams/>"), r = e.documentElement;
  return t.copies && p.appendElement(r, "Copies", t.copies.toString()), t.jobTitle && p.appendElement(r, "JobTitle", t.jobTitle), t.flowDirection && p.appendElement(r, "FlowDirection", t.flowDirection), t.printQuality && p.appendElement(r, "PrintQuality", t.printQuality), t.twinTurboRoll && p.appendElement(r, "TwinTurboRoll", t.twinTurboRoll), p.serialize(e);
}, Ra = function(t) {
  return pe().is550Printer(t);
}, Ma = function(t) {
  return pe().is550PrinterAsync(t);
}, ka = function(t) {
  return pe().getConsumableInfoIn550Printer(t);
}, qa = function(t) {
  return pe().getConsumableInfoIn550PrinterAsync(t);
}, Ut = {
  xml: p,
  label: {
    framework: {
      trace: !1,
      PrinterInfo: Et,
      AddressBarcodePosition: Ta,
      TapeCutMode: Ba,
      TapePrinterInfo: lu,
      PrintJob: rt,
      Label: F,
      FlowDirection: yr,
      PrintJobStatusInfo: Ae,
      LabelWriterPrintQuality: bt,
      LabelWriterPrinterInfo: su,
      ILabelSetRecord: xa,
      createLabelWriterPrintParamsXml: La,
      DZPrinterInfo: fu,
      LabelSetRecord: au,
      TapeAlignment: _a,
      TwinTurboRoll: Ct,
      CheckEnvironmentResult: Pa,
      is550Printer: Ra,
      is550PrinterAsync: Ma,
      getConsumableInfoIn550Printer: ka,
      getConsumableInfoIn550PrinterAsync: qa
    }
  }
};
class pu {
  constructor() {
    this._records = [], this._recordLength = 0, this.length = 0;
  }
  addRecord() {
    const e = new au();
    return this._records.push(e), this._recordLength = this._records.length, this.length = this._records.length, e;
  }
  /** Converts the builder to an xml string
   @override
   */
  toString() {
    return pu.toXml(this._records);
  }
  /** Convert record objects into xml format defined in LabelSet.xsd
   // Returned xml can be passed to dymo.label.framework.printLabel() as labelSetXml parameter.
   // Parameters:
   // records - records to convert to xml.
   // records should be array-like object of associative-arrays with object names as keys and object text as values.
   // Return string contains xml data
   // Note:
   // this function can be used independent of other LabelSetBuilder methods
   // if records data is generated by other functions
   */
  static toXml(e) {
    const r = Ut.xml.parse("<LabelSet/>"), n = r.documentElement;
    for (let u = 0; u < e.length; u++) {
      const o = e[u], i = r.createElement("LabelRecord");
      for (const l in o) {
        let a = o[l];
        if (typeof a == "function") continue;
        a = a.toString();
        const s = r.createElement("ObjectData");
        if (s.setAttribute("Name", l), a.indexOf($t) == 0) {
          const c = Ut.xml.parse(a);
          s.appendChild(c.documentElement.cloneNode(!0));
        } else {
          const c = r.createTextNode(a);
          s.appendChild(c);
        }
        i.appendChild(s);
      }
      n.appendChild(i);
    }
    return Ut.xml.serialize(r);
  }
}
const Wa = (t = {}, e = void 0, r = void 0) => (Object.keys(t).forEach((n) => {
  Zt(n, t[n]);
}), pe(e, r)), za = {
  MissingPrinter: uu
};
export {
  pu as LabelSetBuilder,
  au as LabelSetRecord,
  pe as createFramework,
  Wa as default,
  za as exceptions,
  v as getSetting,
  Wa as initApp,
  pe as initFramework,
  Va as sampleSingleLabel,
  Zt as setSetting,
  ze as settings
};
//# sourceMappingURL=dymo-js-sdk.es.js.map

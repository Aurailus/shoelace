// node_modules/lit-html/lit-html.js
var t = globalThis;
var i = t.trustedTypes;
var s = i ? i.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var e = "$lit$";
var h = `lit$${Math.random().toFixed(9).slice(2)}$`;
var o = "?" + h;
var n = `<${o}>`;
var r = document;
var l = () => r.createComment("");
var c = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
var a = Array.isArray;
var u = (t3) => a(t3) || "function" == typeof (t3 == null ? void 0 : t3[Symbol.iterator]);
var d = "[ 	\n\f\r]";
var f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var _ = />/g;
var m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var p = /'/g;
var g = /"/g;
var $ = /^(?:script|style|textarea|title)$/i;
var y = (t3) => (i5, ...s3) => ({ _$litType$: t3, strings: i5, values: s3 });
var x = y(1);
var b = y(2);
var w = y(3);
var T = Symbol.for("lit-noChange");
var E = Symbol.for("lit-nothing");
var A = /* @__PURE__ */ new WeakMap();
var C = r.createTreeWalker(r, 129);
function P(t3, i5) {
  if (!a(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== s ? s.createHTML(i5) : i5;
}
var V = (t3, i5) => {
  const s3 = t3.length - 1, o4 = [];
  let r5, l3 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c4 = f;
  for (let i6 = 0; i6 < s3; i6++) {
    const s4 = t3[i6];
    let a3, u3, d3 = -1, y3 = 0;
    for (; y3 < s4.length && (c4.lastIndex = y3, u3 = c4.exec(s4), null !== u3); ) y3 = c4.lastIndex, c4 === f ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r5 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r5 != null ? r5 : f, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p) : c4 === g || c4 === p ? c4 = m : c4 === v || c4 === _ ? c4 = f : (c4 = m, r5 = void 0);
    const x2 = c4 === m && t3[i6 + 1].startsWith("/>") ? " " : "";
    l3 += c4 === f ? s4 + n : d3 >= 0 ? (o4.push(a3), s4.slice(0, d3) + e + s4.slice(d3) + h + x2) : s4 + h + (-2 === d3 ? i6 : x2);
  }
  return [P(t3, l3 + (t3[s3] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), o4];
};
var N = class _N {
  constructor({ strings: t3, _$litType$: s3 }, n4) {
    let r5;
    this.parts = [];
    let c4 = 0, a3 = 0;
    const u3 = t3.length - 1, d3 = this.parts, [f3, v2] = V(t3, s3);
    if (this.el = _N.createElement(f3, n4), C.currentNode = this.el.content, 2 === s3 || 3 === s3) {
      const t4 = this.el.content.firstChild;
      t4.replaceWith(...t4.childNodes);
    }
    for (; null !== (r5 = C.nextNode()) && d3.length < u3; ) {
      if (1 === r5.nodeType) {
        if (r5.hasAttributes()) for (const t4 of r5.getAttributeNames()) if (t4.endsWith(e)) {
          const i5 = v2[a3++], s4 = r5.getAttribute(t4).split(h), e4 = /([.?@])?(.*)/.exec(i5);
          d3.push({ type: 1, index: c4, name: e4[2], strings: s4, ctor: "." === e4[1] ? H : "?" === e4[1] ? I : "@" === e4[1] ? L : k }), r5.removeAttribute(t4);
        } else t4.startsWith(h) && (d3.push({ type: 6, index: c4 }), r5.removeAttribute(t4));
        if ($.test(r5.tagName)) {
          const t4 = r5.textContent.split(h), s4 = t4.length - 1;
          if (s4 > 0) {
            r5.textContent = i ? i.emptyScript : "";
            for (let i5 = 0; i5 < s4; i5++) r5.append(t4[i5], l()), C.nextNode(), d3.push({ type: 2, index: ++c4 });
            r5.append(t4[s4], l());
          }
        }
      } else if (8 === r5.nodeType) if (r5.data === o) d3.push({ type: 2, index: c4 });
      else {
        let t4 = -1;
        for (; -1 !== (t4 = r5.data.indexOf(h, t4 + 1)); ) d3.push({ type: 7, index: c4 }), t4 += h.length - 1;
      }
      c4++;
    }
  }
  static createElement(t3, i5) {
    const s3 = r.createElement("template");
    return s3.innerHTML = t3, s3;
  }
};
function S(t3, i5, s3 = t3, e4) {
  var _a6, _b2, _c;
  if (i5 === T) return i5;
  let h3 = void 0 !== e4 ? (_a6 = s3._$Co) == null ? void 0 : _a6[e4] : s3._$Cl;
  const o4 = c(i5) ? void 0 : i5._$litDirective$;
  return (h3 == null ? void 0 : h3.constructor) !== o4 && ((_b2 = h3 == null ? void 0 : h3._$AO) == null ? void 0 : _b2.call(h3, false), void 0 === o4 ? h3 = void 0 : (h3 = new o4(t3), h3._$AT(t3, s3, e4)), void 0 !== e4 ? ((_c = s3._$Co) != null ? _c : s3._$Co = [])[e4] = h3 : s3._$Cl = h3), void 0 !== h3 && (i5 = S(t3, h3._$AS(t3, i5.values), h3, e4)), i5;
}
var M = class {
  constructor(t3, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t3) {
    var _a6;
    const { el: { content: i5 }, parts: s3 } = this._$AD, e4 = ((_a6 = t3 == null ? void 0 : t3.creationScope) != null ? _a6 : r).importNode(i5, true);
    C.currentNode = e4;
    let h3 = C.nextNode(), o4 = 0, n4 = 0, l3 = s3[0];
    for (; void 0 !== l3; ) {
      if (o4 === l3.index) {
        let i6;
        2 === l3.type ? i6 = new R(h3, h3.nextSibling, this, t3) : 1 === l3.type ? i6 = new l3.ctor(h3, l3.name, l3.strings, this, t3) : 6 === l3.type && (i6 = new z(h3, this, t3)), this._$AV.push(i6), l3 = s3[++n4];
      }
      o4 !== (l3 == null ? void 0 : l3.index) && (h3 = C.nextNode(), o4++);
    }
    return C.currentNode = r, e4;
  }
  p(t3) {
    let i5 = 0;
    for (const s3 of this._$AV) void 0 !== s3 && (void 0 !== s3.strings ? (s3._$AI(t3, s3, i5), i5 += s3.strings.length - 2) : s3._$AI(t3[i5])), i5++;
  }
};
var R = class _R {
  get _$AU() {
    var _a6, _b2;
    return (_b2 = (_a6 = this._$AM) == null ? void 0 : _a6._$AU) != null ? _b2 : this._$Cv;
  }
  constructor(t3, i5, s3, e4) {
    var _a6;
    this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s3, this.options = e4, this._$Cv = (_a6 = e4 == null ? void 0 : e4.isConnected) != null ? _a6 : true;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === (t3 == null ? void 0 : t3.nodeType) && (t3 = i5.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i5 = this) {
    t3 = S(this, t3, i5), c(t3) ? t3 === E || null == t3 || "" === t3 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t3 !== this._$AH && t3 !== T && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : u(t3) ? this.k(t3) : this._(t3);
  }
  O(t3) {
    return this._$AA.parentNode.insertBefore(t3, this._$AB);
  }
  T(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
  }
  _(t3) {
    this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(r.createTextNode(t3)), this._$AH = t3;
  }
  $(t3) {
    var _a6;
    const { values: i5, _$litType$: s3 } = t3, e4 = "number" == typeof s3 ? this._$AC(t3) : (void 0 === s3.el && (s3.el = N.createElement(P(s3.h, s3.h[0]), this.options)), s3);
    if (((_a6 = this._$AH) == null ? void 0 : _a6._$AD) === e4) this._$AH.p(i5);
    else {
      const t4 = new M(e4, this), s4 = t4.u(this.options);
      t4.p(i5), this.T(s4), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i5 = A.get(t3.strings);
    return void 0 === i5 && A.set(t3.strings, i5 = new N(t3)), i5;
  }
  k(t3) {
    a(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s3, e4 = 0;
    for (const h3 of t3) e4 === i5.length ? i5.push(s3 = new _R(this.O(l()), this.O(l()), this, this.options)) : s3 = i5[e4], s3._$AI(h3), e4++;
    e4 < i5.length && (this._$AR(s3 && s3._$AB.nextSibling, e4), i5.length = e4);
  }
  _$AR(t3 = this._$AA.nextSibling, i5) {
    var _a6;
    for ((_a6 = this._$AP) == null ? void 0 : _a6.call(this, false, true, i5); t3 && t3 !== this._$AB; ) {
      const i6 = t3.nextSibling;
      t3.remove(), t3 = i6;
    }
  }
  setConnected(t3) {
    var _a6;
    void 0 === this._$AM && (this._$Cv = t3, (_a6 = this._$AP) == null ? void 0 : _a6.call(this, t3));
  }
};
var k = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t3, i5, s3, e4, h3) {
    this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e4, this.options = h3, s3.length > 2 || "" !== s3[0] || "" !== s3[1] ? (this._$AH = Array(s3.length - 1).fill(new String()), this.strings = s3) : this._$AH = E;
  }
  _$AI(t3, i5 = this, s3, e4) {
    const h3 = this.strings;
    let o4 = false;
    if (void 0 === h3) t3 = S(this, t3, i5, 0), o4 = !c(t3) || t3 !== this._$AH && t3 !== T, o4 && (this._$AH = t3);
    else {
      const e5 = t3;
      let n4, r5;
      for (t3 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r5 = S(this, e5[s3 + n4], i5, n4), r5 === T && (r5 = this._$AH[n4]), o4 || (o4 = !c(r5) || r5 !== this._$AH[n4]), r5 === E ? t3 = E : t3 !== E && (t3 += (r5 != null ? r5 : "") + h3[n4 + 1]), this._$AH[n4] = r5;
    }
    o4 && !e4 && this.j(t3);
  }
  j(t3) {
    t3 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 != null ? t3 : "");
  }
};
var H = class extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t3) {
    this.element[this.name] = t3 === E ? void 0 : t3;
  }
};
var I = class extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t3) {
    this.element.toggleAttribute(this.name, !!t3 && t3 !== E);
  }
};
var L = class extends k {
  constructor(t3, i5, s3, e4, h3) {
    super(t3, i5, s3, e4, h3), this.type = 5;
  }
  _$AI(t3, i5 = this) {
    var _a6;
    if ((t3 = (_a6 = S(this, t3, i5, 0)) != null ? _a6 : E) === T) return;
    const s3 = this._$AH, e4 = t3 === E && s3 !== E || t3.capture !== s3.capture || t3.once !== s3.once || t3.passive !== s3.passive, h3 = t3 !== E && (s3 === E || e4);
    e4 && this.element.removeEventListener(this.name, this, s3), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    var _a6, _b2;
    "function" == typeof this._$AH ? this._$AH.call((_b2 = (_a6 = this.options) == null ? void 0 : _a6.host) != null ? _b2 : this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var z = class {
  constructor(t3, i5, s3) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s3;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    S(this, t3);
  }
};
var Z = { M: e, P: h, A: o, C: 1, L: V, R: M, D: u, V: S, I: R, H: k, N: I, U: L, B: H, F: z };
var j = t.litHtmlPolyfillSupport;
var _a;
j == null ? void 0 : j(N, R), ((_a = t.litHtmlVersions) != null ? _a : t.litHtmlVersions = []).push("3.2.1");
var B = (t3, i5, s3) => {
  var _a6, _b2;
  const e4 = (_a6 = s3 == null ? void 0 : s3.renderBefore) != null ? _a6 : i5;
  let h3 = e4._$litPart$;
  if (void 0 === h3) {
    const t4 = (_b2 = s3 == null ? void 0 : s3.renderBefore) != null ? _b2 : null;
    e4._$litPart$ = h3 = new R(i5.insertBefore(l(), t4), t4, void 0, s3 != null ? s3 : {});
  }
  return h3._$AI(t3), h3;
};

// node_modules/@lit/reactive-element/css-tag.js
var t2 = globalThis;
var e2 = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s2 = Symbol();
var o2 = /* @__PURE__ */ new WeakMap();
var n2 = class {
  constructor(t3, e4, o4) {
    if (this._$cssResult$ = true, o4 !== s2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3, this.t = e4;
  }
  get styleSheet() {
    let t3 = this.o;
    const s3 = this.t;
    if (e2 && void 0 === t3) {
      const e4 = void 0 !== s3 && 1 === s3.length;
      e4 && (t3 = o2.get(s3)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o2.set(s3, t3));
    }
    return t3;
  }
  toString() {
    return this.cssText;
  }
};
var r2 = (t3) => new n2("string" == typeof t3 ? t3 : t3 + "", void 0, s2);
var i2 = (t3, ...e4) => {
  const o4 = 1 === t3.length ? t3[0] : e4.reduce((e5, s3, o5) => e5 + ((t4) => {
    if (true === t4._$cssResult$) return t4.cssText;
    if ("number" == typeof t4) return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s3) + t3[o5 + 1], t3[0]);
  return new n2(o4, t3, s2);
};
var S2 = (s3, o4) => {
  if (e2) s3.adoptedStyleSheets = o4.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
  else for (const e4 of o4) {
    const o5 = document.createElement("style"), n4 = t2.litNonce;
    void 0 !== n4 && o5.setAttribute("nonce", n4), o5.textContent = e4.cssText, s3.appendChild(o5);
  }
};
var c2 = e2 ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e4 = "";
  for (const s3 of t4.cssRules) e4 += s3.cssText;
  return r2(e4);
})(t3) : t3;

// node_modules/@lit/reactive-element/reactive-element.js
var { is: i3, defineProperty: e3, getOwnPropertyDescriptor: r3, getOwnPropertyNames: h2, getOwnPropertySymbols: o3, getPrototypeOf: n3 } = Object;
var a2 = globalThis;
var c3 = a2.trustedTypes;
var l2 = c3 ? c3.emptyScript : "";
var p2 = a2.reactiveElementPolyfillSupport;
var d2 = (t3, s3) => t3;
var u2 = { toAttribute(t3, s3) {
  switch (s3) {
    case Boolean:
      t3 = t3 ? l2 : null;
      break;
    case Object:
    case Array:
      t3 = null == t3 ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, s3) {
  let i5 = t3;
  switch (s3) {
    case Boolean:
      i5 = null !== t3;
      break;
    case Number:
      i5 = null === t3 ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t3);
      } catch (t4) {
        i5 = null;
      }
  }
  return i5;
} };
var f2 = (t3, s3) => !i3(t3, s3);
var y2 = { attribute: true, type: String, converter: u2, reflect: false, hasChanged: f2 };
var _a2, _b;
(_a2 = Symbol.metadata) != null ? _a2 : Symbol.metadata = Symbol("metadata"), (_b = a2.litPropertyMetadata) != null ? _b : a2.litPropertyMetadata = /* @__PURE__ */ new WeakMap();
var b2 = class extends HTMLElement {
  static addInitializer(t3) {
    var _a6;
    this._$Ei(), ((_a6 = this.l) != null ? _a6 : this.l = []).push(t3);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t3, s3 = y2) {
    if (s3.state && (s3.attribute = false), this._$Ei(), this.elementProperties.set(t3, s3), !s3.noAccessor) {
      const i5 = Symbol(), r5 = this.getPropertyDescriptor(t3, i5, s3);
      void 0 !== r5 && e3(this.prototype, t3, r5);
    }
  }
  static getPropertyDescriptor(t3, s3, i5) {
    var _a6;
    const { get: e4, set: h3 } = (_a6 = r3(this.prototype, t3)) != null ? _a6 : { get() {
      return this[s3];
    }, set(t4) {
      this[s3] = t4;
    } };
    return { get() {
      return e4 == null ? void 0 : e4.call(this);
    }, set(s4) {
      const r5 = e4 == null ? void 0 : e4.call(this);
      h3.call(this, s4), this.requestUpdate(t3, r5, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    var _a6;
    return (_a6 = this.elementProperties.get(t3)) != null ? _a6 : y2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d2("elementProperties"))) return;
    const t3 = n3(this);
    t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d2("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d2("properties"))) {
      const t4 = this.properties, s3 = [...h2(t4), ...o3(t4)];
      for (const i5 of s3) this.createProperty(i5, t4[i5]);
    }
    const t3 = this[Symbol.metadata];
    if (null !== t3) {
      const s3 = litPropertyMetadata.get(t3);
      if (void 0 !== s3) for (const [t4, i5] of s3) this.elementProperties.set(t4, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t4, s3] of this.elementProperties) {
      const i5 = this._$Eu(t4, s3);
      void 0 !== i5 && this._$Eh.set(i5, t4);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s3) {
    const i5 = [];
    if (Array.isArray(s3)) {
      const e4 = new Set(s3.flat(1 / 0).reverse());
      for (const s4 of e4) i5.unshift(c2(s4));
    } else void 0 !== s3 && i5.push(c2(s3));
    return i5;
  }
  static _$Eu(t3, s3) {
    const i5 = s3.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a6;
    this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a6 = this.constructor.l) == null ? void 0 : _a6.forEach((t3) => t3(this));
  }
  addController(t3) {
    var _a6, _b3;
    ((_a6 = this._$EO) != null ? _a6 : this._$EO = /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && ((_b3 = t3.hostConnected) == null ? void 0 : _b3.call(t3));
  }
  removeController(t3) {
    var _a6;
    (_a6 = this._$EO) == null ? void 0 : _a6.delete(t3);
  }
  _$E_() {
    const t3 = /* @__PURE__ */ new Map(), s3 = this.constructor.elementProperties;
    for (const i5 of s3.keys()) this.hasOwnProperty(i5) && (t3.set(i5, this[i5]), delete this[i5]);
    t3.size > 0 && (this._$Ep = t3);
  }
  createRenderRoot() {
    var _a6;
    const t3 = (_a6 = this.shadowRoot) != null ? _a6 : this.attachShadow(this.constructor.shadowRootOptions);
    return S2(t3, this.constructor.elementStyles), t3;
  }
  connectedCallback() {
    var _a6, _b3;
    (_a6 = this.renderRoot) != null ? _a6 : this.renderRoot = this.createRenderRoot(), this.enableUpdating(true), (_b3 = this._$EO) == null ? void 0 : _b3.forEach((t3) => {
      var _a7;
      return (_a7 = t3.hostConnected) == null ? void 0 : _a7.call(t3);
    });
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    var _a6;
    (_a6 = this._$EO) == null ? void 0 : _a6.forEach((t3) => {
      var _a7;
      return (_a7 = t3.hostDisconnected) == null ? void 0 : _a7.call(t3);
    });
  }
  attributeChangedCallback(t3, s3, i5) {
    this._$AK(t3, i5);
  }
  _$EC(t3, s3) {
    var _a6;
    const i5 = this.constructor.elementProperties.get(t3), e4 = this.constructor._$Eu(t3, i5);
    if (void 0 !== e4 && true === i5.reflect) {
      const r5 = (void 0 !== ((_a6 = i5.converter) == null ? void 0 : _a6.toAttribute) ? i5.converter : u2).toAttribute(s3, i5.type);
      this._$Em = t3, null == r5 ? this.removeAttribute(e4) : this.setAttribute(e4, r5), this._$Em = null;
    }
  }
  _$AK(t3, s3) {
    var _a6;
    const i5 = this.constructor, e4 = i5._$Eh.get(t3);
    if (void 0 !== e4 && this._$Em !== e4) {
      const t4 = i5.getPropertyOptions(e4), r5 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== ((_a6 = t4.converter) == null ? void 0 : _a6.fromAttribute) ? t4.converter : u2;
      this._$Em = e4, this[e4] = r5.fromAttribute(s3, t4.type), this._$Em = null;
    }
  }
  requestUpdate(t3, s3, i5) {
    var _a6;
    if (void 0 !== t3) {
      if (i5 != null ? i5 : i5 = this.constructor.getPropertyOptions(t3), !((_a6 = i5.hasChanged) != null ? _a6 : f2)(this[t3], s3)) return;
      this.P(t3, s3, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$ET());
  }
  P(t3, s3, i5) {
    var _a6;
    this._$AL.has(t3) || this._$AL.set(t3, s3), true === i5.reflect && this._$Em !== t3 && ((_a6 = this._$Ej) != null ? _a6 : this._$Ej = /* @__PURE__ */ new Set()).add(t3);
  }
  async _$ET() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return null != t3 && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a6, _b3;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if ((_a6 = this.renderRoot) != null ? _a6 : this.renderRoot = this.createRenderRoot(), this._$Ep) {
        for (const [t5, s4] of this._$Ep) this[t5] = s4;
        this._$Ep = void 0;
      }
      const t4 = this.constructor.elementProperties;
      if (t4.size > 0) for (const [s4, i5] of t4) true !== i5.wrapped || this._$AL.has(s4) || void 0 === this[s4] || this.P(s4, this[s4], i5);
    }
    let t3 = false;
    const s3 = this._$AL;
    try {
      t3 = this.shouldUpdate(s3), t3 ? (this.willUpdate(s3), (_b3 = this._$EO) == null ? void 0 : _b3.forEach((t4) => {
        var _a7;
        return (_a7 = t4.hostUpdate) == null ? void 0 : _a7.call(t4);
      }), this.update(s3)) : this._$EU();
    } catch (s4) {
      throw t3 = false, this._$EU(), s4;
    }
    t3 && this._$AE(s3);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    var _a6;
    (_a6 = this._$EO) == null ? void 0 : _a6.forEach((t4) => {
      var _a7;
      return (_a7 = t4.hostUpdated) == null ? void 0 : _a7.call(t4);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t4) => this._$EC(t4, this[t4]))), this._$EU();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
var _a3;
b2.elementStyles = [], b2.shadowRootOptions = { mode: "open" }, b2[d2("elementProperties")] = /* @__PURE__ */ new Map(), b2[d2("finalized")] = /* @__PURE__ */ new Map(), p2 == null ? void 0 : p2({ ReactiveElement: b2 }), ((_a3 = a2.reactiveElementVersions) != null ? _a3 : a2.reactiveElementVersions = []).push("2.0.4");

// node_modules/lit-element/lit-element.js
var r4 = class extends b2 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a6, _b2;
    const t3 = super.createRenderRoot();
    return (_b2 = (_a6 = this.renderOptions).renderBefore) != null ? _b2 : _a6.renderBefore = t3.firstChild, t3;
  }
  update(t3) {
    const s3 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = B(s3, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a6;
    super.connectedCallback(), (_a6 = this._$Do) == null ? void 0 : _a6.setConnected(true);
  }
  disconnectedCallback() {
    var _a6;
    super.disconnectedCallback(), (_a6 = this._$Do) == null ? void 0 : _a6.setConnected(false);
  }
  render() {
    return T;
  }
};
var _a4;
r4._$litElement$ = true, r4["finalized"] = true, (_a4 = globalThis.litElementHydrateSupport) == null ? void 0 : _a4.call(globalThis, { LitElement: r4 });
var i4 = globalThis.litElementPolyfillSupport;
i4 == null ? void 0 : i4({ LitElement: r4 });
var _a5;
((_a5 = globalThis.litElementVersions) != null ? _a5 : globalThis.litElementVersions = []).push("4.1.1");

export {
  x,
  b,
  w,
  T,
  E,
  Z,
  i2 as i,
  u2 as u,
  f2 as f,
  r4 as r
};
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
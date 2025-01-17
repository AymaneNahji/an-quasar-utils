(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.h-full{height:100%}.w-full{width:100%}.min-w-28{min-width:7rem}.flex-1{flex:1 1 0%}.flex-grow{flex-grow:1}.flex-col{flex-direction:column}.flex-nowrap{flex-wrap:nowrap}.\\!items-start{align-items:flex-start!important}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.\\!justify-between{justify-content:space-between!important}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-5{gap:1.25rem}.border{border-width:1px}.border-2{border-width:2px}.border-solid{border-style:solid}.p-2{padding:.5rem}.p-5{padding:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.font-bold{font-weight:700}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.\\[\\&\\>div\\>div\\:before\\]\\:\\!border-solid>div>div:before{border-style:solid!important}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { computed as d, markRaw as Ka, defineComponent as Un, reactive as xn, h as f, withDirectives as At, getCurrentInstance as ke, unref as pl, ref as J, onBeforeUnmount as at, Transition as Mt, onDeactivated as _n, nextTick as Le, watch as se, onMounted as jt, onUnmounted as Ti, Teleport as Vi, openBlock as Ae, createBlock as st, withCtx as Me, createVNode as Se, mergeProps as Qt, createElementVNode as Ue, toDisplayString as Ln, renderSlot as ot, createCommentVNode as Ie, provide as Ai, onActivated as wl, createElementBlock as Tt, onBeforeUpdate as Wa, inject as Di, onBeforeMount as Yn, onUpdated as Li, toRaw as Yt, useSlots as Qa, Fragment as Rn, createSlots as Zl, createTextVNode as Fi, normalizeClass as $i, renderList as al, normalizeProps as Do, mergeModels as Lo, useModel as Hi } from "vue";
const Gl = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
}, Cn = {
  size: String
};
function qn(e, t = Gl) {
  return d(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function _t(e, t, n, l) {
  return Object.defineProperty(e, t, {
    get: n,
    set: l,
    enumerable: !0
  }), e;
}
function Ii(e, t) {
  for (const n in t)
    _t(e, n, t[n]);
  return e;
}
function Ce(e) {
  return Ka(Un(e));
}
function yo(e) {
  return Ka(e);
}
const ji = (e, t) => {
  const n = xn(e);
  for (const l in e)
    _t(
      t,
      l,
      () => n[l],
      (o) => {
        n[l] = o;
      }
    );
  return t;
};
function We(e, t) {
  return e !== void 0 && e() || t;
}
function Xa(e, t) {
  if (e !== void 0) {
    const n = e();
    if (n != null)
      return n.slice();
  }
  return t;
}
function Vt(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function Ni(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function zi(e, t, n, l, o, a) {
  t.key = l + o;
  const r = f(e, t, n);
  return o === !0 ? At(r, a()) : r;
}
const Fo = "0 0 24 24", $o = (e) => e, Bl = (e) => `ionicons ${e}`, Ja = {
  "mdi-": (e) => `mdi ${e}`,
  "icon-": $o,
  // fontawesome equiv
  "bt-": (e) => `bt ${e}`,
  "eva-": (e) => `eva ${e}`,
  "ion-md": Bl,
  "ion-ios": Bl,
  "ion-logo": Bl,
  "iconfont ": $o,
  "ti-": (e) => `themify-icon ${e}`,
  "bi-": (e) => `bootstrap-icons ${e}`
}, Za = {
  o_: "-outlined",
  r_: "-round",
  s_: "-sharp"
}, Ga = {
  sym_o_: "-outlined",
  sym_r_: "-rounded",
  sym_s_: "-sharp"
}, Ui = new RegExp("^(" + Object.keys(Ja).join("|") + ")"), Yi = new RegExp("^(" + Object.keys(Za).join("|") + ")"), Ho = new RegExp("^(" + Object.keys(Ga).join("|") + ")"), Ki = /^[Mm]\s?[-+]?\.?\d/, Wi = /^img:/, Qi = /^svguse:/, Xi = /^ion-/, Ji = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /, yt = Ce({
  name: "QIcon",
  props: {
    ...Cn,
    tag: {
      type: String,
      default: "i"
    },
    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = ke(), l = qn(e), o = d(
      () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")
    ), a = d(() => {
      let r, u = e.name;
      if (u === "none" || !u)
        return { none: !0 };
      if (n.iconMapFn !== null) {
        const i = n.iconMapFn(u);
        if (i !== void 0)
          if (i.icon !== void 0) {
            if (u = i.icon, u === "none" || !u)
              return { none: !0 };
          } else
            return {
              cls: i.cls,
              content: i.content !== void 0 ? i.content : " "
            };
      }
      if (Ki.test(u) === !0) {
        const [i, v = Fo] = u.split("|");
        return {
          svg: !0,
          viewBox: v,
          nodes: i.split("&&").map((S) => {
            const [g, b, x] = S.split("@@");
            return f("path", { style: b, d: g, transform: x });
          })
        };
      }
      if (Wi.test(u) === !0)
        return {
          img: !0,
          src: u.substring(4)
        };
      if (Qi.test(u) === !0) {
        const [i, v = Fo] = u.split("|");
        return {
          svguse: !0,
          src: i.substring(7),
          viewBox: v
        };
      }
      let c = " ";
      const s = u.match(Ui);
      if (s !== null)
        r = Ja[s[1]](u);
      else if (Ji.test(u) === !0)
        r = u;
      else if (Xi.test(u) === !0)
        r = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${u.substring(3)}`;
      else if (Ho.test(u) === !0) {
        r = "notranslate material-symbols";
        const i = u.match(Ho);
        i !== null && (u = u.substring(6), r += Ga[i[1]]), c = u;
      } else {
        r = "notranslate material-icons";
        const i = u.match(Yi);
        i !== null && (u = u.substring(2), r += Za[i[1]]), c = u;
      }
      return {
        cls: r,
        content: c
      };
    });
    return () => {
      const r = {
        class: o.value,
        style: l.value,
        "aria-hidden": "true",
        role: "presentation"
      };
      return a.value.none === !0 ? f(e.tag, r, We(t.default)) : a.value.img === !0 ? f(e.tag, r, Vt(t.default, [
        f("img", { src: a.value.src })
      ])) : a.value.svg === !0 ? f(e.tag, r, Vt(t.default, [
        f("svg", {
          viewBox: a.value.viewBox || "0 0 24 24"
        }, a.value.nodes)
      ])) : a.value.svguse === !0 ? f(e.tag, r, Vt(t.default, [
        f("svg", {
          viewBox: a.value.viewBox
        }, [
          f("use", { "xlink:href": a.value.src })
        ])
      ])) : (a.value.cls !== void 0 && (r.class += " " + a.value.cls), f(e.tag, r, Vt(t.default, [
        a.value.content
      ])));
    };
  }
}), er = {
  size: {
    type: [String, Number],
    default: "1em"
  },
  color: String
};
function tr(e) {
  return {
    cSize: d(() => e.size in Gl ? `${Gl[e.size]}px` : e.size),
    classes: d(
      () => "q-spinner" + (e.color ? ` text-${e.color}` : "")
    )
  };
}
const nr = Ce({
  name: "QSpinner",
  props: {
    ...er,
    thickness: {
      type: Number,
      default: 5
    }
  },
  setup(e) {
    const { cSize: t, classes: n } = tr(e);
    return () => f("svg", {
      class: n.value + " q-spinner-mat",
      width: t.value,
      height: t.value,
      viewBox: "25 25 50 50"
    }, [
      f("circle", {
        class: "path",
        cx: "50",
        cy: "50",
        r: "20",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": e.thickness,
        "stroke-miterlimit": "10"
      })
    ]);
  }
});
function eo(e, t) {
  const n = e.style;
  for (const l in t)
    n[l] = t[l];
}
function Zi(e) {
  if (e == null)
    return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  const t = pl(e);
  if (t)
    return t.$el || t;
}
function lr(e, t) {
  if (e == null || e.contains(t) === !0)
    return !0;
  for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
    if (n.contains(t))
      return !0;
  return !1;
}
const Ze = {
  hasPassive: !1,
  passiveCapture: !0,
  notPassiveCapture: !0
};
try {
  const e = Object.defineProperty({}, "passive", {
    get() {
      Object.assign(Ze, {
        hasPassive: !0,
        passive: { passive: !0 },
        notPassive: { passive: !1 },
        passiveCapture: { passive: !0, capture: !0 },
        notPassiveCapture: { passive: !1, capture: !0 }
      });
    }
  });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function or() {
}
function Gi(e) {
  return e.button === 0;
}
function Sn(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), {
    top: e.clientY,
    left: e.clientX
  };
}
function eu(e) {
  if (e.path)
    return e.path;
  if (e.composedPath)
    return e.composedPath();
  const t = [];
  let n = e.target;
  for (; n; ) {
    if (t.push(n), n.tagName === "HTML")
      return t.push(document), t.push(window), t;
    n = n.parentElement;
  }
}
function gt(e) {
  e.stopPropagation();
}
function ct(e) {
  e.cancelable !== !1 && e.preventDefault();
}
function Fe(e) {
  e.cancelable !== !1 && e.preventDefault(), e.stopPropagation();
}
function Tl(e, t) {
  if (e === void 0 || t === !0 && e.__dragPrevented === !0)
    return;
  const n = t === !0 ? (l) => {
    l.__dragPrevented = !0, l.addEventListener("dragstart", ct, Ze.notPassiveCapture);
  } : (l) => {
    delete l.__dragPrevented, l.removeEventListener("dragstart", ct, Ze.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(n);
}
function nn(e, t, n) {
  const l = `__q_${t}_evt`;
  e[l] = e[l] !== void 0 ? e[l].concat(n) : n, n.forEach((o) => {
    o[0].addEventListener(o[1], e[o[2]], Ze[o[3]]);
  });
}
function Fn(e, t) {
  const n = `__q_${t}_evt`;
  e[n] !== void 0 && (e[n].forEach((l) => {
    l[0].removeEventListener(l[1], e[l[2]], Ze[l[3]]);
  }), e[n] = void 0);
}
function po(e) {
  return e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0;
}
function It(e, t) {
  return po(e) === !0 ? !1 : [].concat(t).includes(e.keyCode);
}
function tu(e, t = 250) {
  let n = !1, l;
  return function() {
    return n === !1 && (n = !0, setTimeout(() => {
      n = !1;
    }, t), l = e.apply(this, arguments)), l;
  };
}
function Io(e, t, n, l) {
  n.modifiers.stop === !0 && gt(e);
  const o = n.modifiers.color;
  let a = n.modifiers.center;
  a = a === !0 || l === !0;
  const r = document.createElement("span"), u = document.createElement("span"), c = Sn(e), { left: s, top: i, width: v, height: S } = t.getBoundingClientRect(), g = Math.sqrt(v * v + S * S), b = g / 2, x = `${(v - g) / 2}px`, h = a ? x : `${c.left - s - b}px`, P = `${(S - g) / 2}px`, O = a ? P : `${c.top - i - b}px`;
  u.className = "q-ripple__inner", eo(u, {
    height: `${g}px`,
    width: `${g}px`,
    transform: `translate3d(${h},${O},0) scale3d(.2,.2,1)`,
    opacity: 0
  }), r.className = `q-ripple${o ? " text-" + o : ""}`, r.setAttribute("dir", "ltr"), r.appendChild(u), t.appendChild(r);
  const _ = () => {
    r.remove(), clearTimeout(y);
  };
  n.abort.push(_);
  let y = setTimeout(() => {
    u.classList.add("q-ripple__inner--enter"), u.style.transform = `translate3d(${x},${P},0) scale3d(1,1,1)`, u.style.opacity = 0.2, y = setTimeout(() => {
      u.classList.remove("q-ripple__inner--enter"), u.classList.add("q-ripple__inner--leave"), u.style.opacity = 0, y = setTimeout(() => {
        r.remove(), n.abort.splice(n.abort.indexOf(_), 1);
      }, 275);
    }, 250);
  }, 50);
}
function jo(e, { modifiers: t, value: n, arg: l }) {
  const o = Object.assign({}, e.cfg.ripple, t, n);
  e.modifiers = {
    early: o.early === !0,
    stop: o.stop === !0,
    center: o.center === !0,
    color: o.color || l,
    keyCodes: [].concat(o.keyCodes || 13)
  };
}
const ar = yo(
  {
    name: "ripple",
    beforeMount(e, t) {
      const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
      if (n.ripple === !1)
        return;
      const l = {
        cfg: n,
        enabled: t.value !== !1,
        modifiers: {},
        abort: [],
        start(o) {
          l.enabled === !0 && o.qSkipRipple !== !0 && o.type === (l.modifiers.early === !0 ? "pointerdown" : "click") && Io(o, e, l, o.qKeyEvent === !0);
        },
        keystart: tu((o) => {
          l.enabled === !0 && o.qSkipRipple !== !0 && It(o, l.modifiers.keyCodes) === !0 && o.type === `key${l.modifiers.early === !0 ? "down" : "up"}` && Io(o, e, l, !0);
        }, 300)
      };
      jo(l, t), e.__qripple = l, nn(l, "main", [
        [e, "pointerdown", "start", "passive"],
        [e, "click", "start", "passive"],
        [e, "keydown", "keystart", "passive"],
        [e, "keyup", "keystart", "passive"]
      ]);
    },
    updated(e, t) {
      if (t.oldValue !== t.value) {
        const n = e.__qripple;
        n !== void 0 && (n.enabled = t.value !== !1, n.enabled === !0 && Object(t.value) === t.value && jo(n, t));
      }
    },
    beforeUnmount(e) {
      const t = e.__qripple;
      t !== void 0 && (t.abort.forEach((n) => {
        n();
      }), Fn(t, "main"), delete e._qripple);
    }
  }
), rr = {
  left: "start",
  center: "center",
  right: "end",
  between: "between",
  around: "around",
  evenly: "evenly",
  stretch: "stretch"
}, nu = Object.keys(rr), lu = {
  align: {
    type: String,
    validator: (e) => nu.includes(e)
  }
};
function ou(e) {
  return d(() => {
    const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
    return `${e.vertical === !0 ? "items" : "justify"}-${rr[t]}`;
  });
}
function rl(e) {
  if (Object(e.$parent) === e.$parent)
    return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy)
      return t.proxy;
    t = t.parent;
  }
}
function wo(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function Sl(e) {
  return e.isUnmounted === !0 || e.isDeactivated === !0;
}
function No(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function zo(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function au(e, t) {
  for (const n in t) {
    const l = t[n], o = e[n];
    if (typeof l == "string") {
      if (l !== o)
        return !1;
    } else if (Array.isArray(o) === !1 || o.length !== l.length || l.some((a, r) => a !== o[r]))
      return !1;
  }
  return !0;
}
function Uo(e, t) {
  return Array.isArray(t) === !0 ? e.length === t.length && e.every((n, l) => n === t[l]) : e.length === 1 && e[0] === t;
}
function ru(e, t) {
  return Array.isArray(e) === !0 ? Uo(e, t) : Array.isArray(t) === !0 ? Uo(t, e) : e === t;
}
function iu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (ru(e[n], t[n]) === !1)
      return !1;
  return !0;
}
const ir = {
  // router-link
  to: [String, Object],
  replace: Boolean,
  // regular <a> link
  href: String,
  target: String,
  // state
  disable: Boolean
}, uu = {
  ...ir,
  // router-link
  exact: Boolean,
  activeClass: {
    type: String,
    default: "q-router-link--active"
  },
  exactActiveClass: {
    type: String,
    default: "q-router-link--exact-active"
  }
};
function ur({ fallbackTag: e, useDisableForRouterLinkProps: t = !0 } = {}) {
  const n = ke(), { props: l, proxy: o, emit: a } = n, r = wo(n), u = d(() => l.disable !== !0 && l.href !== void 0), c = t === !0 ? d(
    () => r === !0 && l.disable !== !0 && u.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ) : d(
    () => r === !0 && u.value !== !0 && l.to !== void 0 && l.to !== null && l.to !== ""
  ), s = d(() => c.value === !0 ? O(l.to) : null), i = d(() => s.value !== null), v = d(() => u.value === !0 || i.value === !0), S = d(() => l.type === "a" || v.value === !0 ? "a" : l.tag || e || "div"), g = d(() => u.value === !0 ? {
    href: l.href,
    target: l.target
  } : i.value === !0 ? {
    href: s.value.href,
    target: l.target
  } : {}), b = d(() => {
    if (i.value === !1)
      return -1;
    const { matched: p } = s.value, { length: F } = p, A = p[F - 1];
    if (A === void 0)
      return -1;
    const U = o.$route.matched;
    if (U.length === 0)
      return -1;
    const D = U.findIndex(
      zo.bind(null, A)
    );
    if (D !== -1)
      return D;
    const L = No(p[F - 2]);
    return (
      // we are dealing with nested routes
      F > 1 && No(A) === L && U[U.length - 1].path !== L ? U.findIndex(
        zo.bind(null, p[F - 2])
      ) : D
    );
  }), x = d(
    () => i.value === !0 && b.value !== -1 && au(o.$route.params, s.value.params)
  ), h = d(
    () => x.value === !0 && b.value === o.$route.matched.length - 1 && iu(o.$route.params, s.value.params)
  ), P = d(() => i.value === !0 ? h.value === !0 ? ` ${l.exactActiveClass} ${l.activeClass}` : l.exact === !0 ? "" : x.value === !0 ? ` ${l.activeClass}` : "" : "");
  function O(p) {
    try {
      return o.$router.resolve(p);
    } catch {
    }
    return null;
  }
  function _(p, { returnRouterError: F, to: A = l.to, replace: U = l.replace } = {}) {
    if (l.disable === !0)
      return p.preventDefault(), Promise.resolve(!1);
    if (
      // don't redirect with control keys;
      // should match RouterLink from Vue Router
      p.metaKey || p.altKey || p.ctrlKey || p.shiftKey || p.button !== void 0 && p.button !== 0 || l.target === "_blank"
    )
      return Promise.resolve(!1);
    p.preventDefault();
    const D = o.$router[U === !0 ? "replace" : "push"](A);
    return F === !0 ? D : D.then(() => {
    }).catch(() => {
    });
  }
  function y(p) {
    if (i.value === !0) {
      const F = (A) => _(p, A);
      a("click", p, F), p.defaultPrevented !== !0 && F();
    } else
      a("click", p);
  }
  return {
    hasRouterLink: i,
    hasHrefLink: u,
    hasLink: v,
    linkTag: S,
    resolvedLink: s,
    linkIsActive: x,
    linkIsExactActive: h,
    linkClass: P,
    linkAttrs: g,
    getLink: O,
    navigateToRouterLink: _,
    navigateOnClick: y
  };
}
const cl = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
}, su = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, cu = ["button", "submit", "reset"], du = /[^\s]\/[^\s]/, sr = ["flat", "outline", "push", "unelevated"];
function cr(e, t) {
  return e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t;
}
const fu = {
  ...Cn,
  ...ir,
  type: {
    type: String,
    default: "button"
  },
  label: [Number, String],
  icon: String,
  iconRight: String,
  ...sr.reduce(
    (e, t) => (e[t] = Boolean) && e,
    {}
  ),
  square: Boolean,
  rounded: Boolean,
  glossy: Boolean,
  size: String,
  fab: Boolean,
  fabMini: Boolean,
  padding: String,
  color: String,
  textColor: String,
  noCaps: Boolean,
  noWrap: Boolean,
  dense: Boolean,
  tabindex: [Number, String],
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  align: {
    ...lu.align,
    default: "center"
  },
  stack: Boolean,
  stretch: Boolean,
  loading: {
    type: Boolean,
    default: null
  },
  disable: Boolean
}, vu = {
  ...fu,
  round: Boolean
};
function mu(e) {
  const t = qn(e, su), n = ou(e), { hasRouterLink: l, hasLink: o, linkTag: a, linkAttrs: r, navigateOnClick: u } = ur({
    fallbackTag: "button"
  }), c = d(() => {
    const h = e.fab === !1 && e.fabMini === !1 ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, h, {
      padding: e.padding.split(/\s+/).map((P) => P in cl ? cl[P] + "px" : P).join(" "),
      minWidth: "0",
      minHeight: "0"
    }) : h;
  }), s = d(
    () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0
  ), i = d(
    () => e.disable !== !0 && e.loading !== !0
  ), v = d(() => i.value === !0 ? e.tabindex || 0 : -1), S = d(() => cr(e, "standard")), g = d(() => {
    const h = { tabindex: v.value };
    return o.value === !0 ? Object.assign(h, r.value) : cu.includes(e.type) === !0 && (h.type = e.type), a.value === "a" ? (e.disable === !0 ? h["aria-disabled"] = "true" : h.href === void 0 && (h.role = "button"), l.value !== !0 && du.test(e.type) === !0 && (h.type = e.type)) : e.disable === !0 && (h.disabled = "", h["aria-disabled"] = "true"), e.loading === !0 && e.percentage !== void 0 && Object.assign(h, {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": e.percentage
    }), h;
  }), b = d(() => {
    let h;
    e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? h = `text-${e.textColor || e.color}` : h = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (h = `text-${e.textColor}`);
    const P = e.round === !0 ? "round" : `rectangle${s.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
    return `q-btn--${S.value} q-btn--${P}` + (h !== void 0 ? " " + h : "") + (i.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), x = d(
    () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : "")
  );
  return {
    classes: b,
    style: c,
    innerClasses: x,
    attributes: g,
    hasLink: o,
    linkTag: a,
    navigateOnClick: u,
    isActionable: i
  };
}
const { passiveCapture: xt } = Ze;
let vn = null, mn = null, hn = null;
const Re = Ce({
  name: "QBtn",
  props: {
    ...vu,
    percentage: Number,
    darkPercentage: Boolean,
    onTouchstart: [Function, Array]
  },
  emits: ["click", "keydown", "mousedown", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = ke(), {
      classes: o,
      style: a,
      innerClasses: r,
      attributes: u,
      hasLink: c,
      linkTag: s,
      navigateOnClick: i,
      isActionable: v
    } = mu(e), S = J(null), g = J(null);
    let b = null, x, h = null;
    const P = d(
      () => e.label !== void 0 && e.label !== null && e.label !== ""
    ), O = d(() => e.disable === !0 || e.ripple === !1 ? !1 : {
      keyCodes: c.value === !0 ? [13, 32] : [13],
      ...e.ripple === !0 ? {} : e.ripple
    }), _ = d(() => ({ center: e.round })), y = d(() => {
      const M = Math.max(0, Math.min(100, e.percentage));
      return M > 0 ? { transition: "transform 0.6s", transform: `translateX(${M - 100}%)` } : {};
    }), p = d(() => {
      if (e.loading === !0)
        return {
          onMousedown: $,
          onTouchstart: $,
          onClick: $,
          onKeydown: $,
          onKeyup: $
        };
      if (v.value === !0) {
        const M = {
          onClick: A,
          onKeydown: U,
          onMousedown: L
        };
        if (l.$q.platform.has.touch === !0) {
          const K = e.onTouchstart !== void 0 ? "" : "Passive";
          M[`onTouchstart${K}`] = D;
        }
        return M;
      }
      return {
        // needed; especially for disabled <a> tags
        onClick: Fe
      };
    }), F = d(() => ({
      ref: S,
      class: "q-btn q-btn-item non-selectable no-outline " + o.value,
      style: a.value,
      ...u.value,
      ...p.value
    }));
    function A(M) {
      if (S.value !== null) {
        if (M !== void 0) {
          if (M.defaultPrevented === !0)
            return;
          const K = document.activeElement;
          if (e.type === "submit" && K !== document.body && S.value.contains(K) === !1 && K.contains(S.value) === !1) {
            S.value.focus();
            const Q = () => {
              document.removeEventListener("keydown", Fe, !0), document.removeEventListener("keyup", Q, xt), S.value !== null && S.value.removeEventListener("blur", Q, xt);
            };
            document.addEventListener("keydown", Fe, !0), document.addEventListener("keyup", Q, xt), S.value.addEventListener("blur", Q, xt);
          }
        }
        i(M);
      }
    }
    function U(M) {
      S.value !== null && (n("keydown", M), It(M, [13, 32]) === !0 && mn !== S.value && (mn !== null && E(), M.defaultPrevented !== !0 && (S.value.focus(), mn = S.value, S.value.classList.add("q-btn--active"), document.addEventListener("keyup", H, !0), S.value.addEventListener("blur", H, xt)), Fe(M)));
    }
    function D(M) {
      S.value !== null && (n("touchstart", M), M.defaultPrevented !== !0 && (vn !== S.value && (vn !== null && E(), vn = S.value, b = M.target, b.addEventListener("touchcancel", H, xt), b.addEventListener("touchend", H, xt)), x = !0, h !== null && clearTimeout(h), h = setTimeout(() => {
        h = null, x = !1;
      }, 200)));
    }
    function L(M) {
      S.value !== null && (M.qSkipRipple = x === !0, n("mousedown", M), M.defaultPrevented !== !0 && hn !== S.value && (hn !== null && E(), hn = S.value, S.value.classList.add("q-btn--active"), document.addEventListener("mouseup", H, xt)));
    }
    function H(M) {
      if (S.value !== null && !(M !== void 0 && M.type === "blur" && document.activeElement === S.value)) {
        if (M !== void 0 && M.type === "keyup") {
          if (mn === S.value && It(M, [13, 32]) === !0) {
            const K = new MouseEvent("click", M);
            K.qKeyEvent = !0, M.defaultPrevented === !0 && ct(K), M.cancelBubble === !0 && gt(K), S.value.dispatchEvent(K), Fe(M), M.qKeyEvent = !0;
          }
          n("keyup", M);
        }
        E();
      }
    }
    function E(M) {
      const K = g.value;
      M !== !0 && (vn === S.value || hn === S.value) && K !== null && K !== document.activeElement && (K.setAttribute("tabindex", -1), K.focus()), vn === S.value && (b !== null && (b.removeEventListener("touchcancel", H, xt), b.removeEventListener("touchend", H, xt)), vn = b = null), hn === S.value && (document.removeEventListener("mouseup", H, xt), hn = null), mn === S.value && (document.removeEventListener("keyup", H, !0), S.value !== null && S.value.removeEventListener("blur", H, xt), mn = null), S.value !== null && S.value.classList.remove("q-btn--active");
    }
    function $(M) {
      Fe(M), M.qSkipRipple = !0;
    }
    return at(() => {
      E(!0);
    }), Object.assign(l, {
      click: (M) => {
        v.value === !0 && A(M);
      }
    }), () => {
      let M = [];
      e.icon !== void 0 && M.push(
        f(yt, {
          name: e.icon,
          left: e.stack !== !0 && P.value === !0,
          role: "img"
        })
      ), P.value === !0 && M.push(
        f("span", { class: "block" }, [e.label])
      ), M = Vt(t.default, M), e.iconRight !== void 0 && e.round === !1 && M.push(
        f(yt, {
          name: e.iconRight,
          right: e.stack !== !0 && P.value === !0,
          role: "img"
        })
      );
      const K = [
        f("span", {
          class: "q-focus-helper",
          ref: g
        })
      ];
      return e.loading === !0 && e.percentage !== void 0 && K.push(
        f("span", {
          class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
        }, [
          f("span", {
            class: "q-btn__progress-indicator fit block",
            style: y.value
          })
        ])
      ), K.push(
        f("span", {
          class: "q-btn__content text-center col items-center q-anchor--skip " + r.value
        }, M)
      ), e.loading !== null && K.push(
        f(Mt, {
          name: "q-transition--fade"
        }, () => e.loading === !0 ? [
          f("span", {
            key: "loading",
            class: "absolute-full flex flex-center"
          }, t.loading !== void 0 ? t.loading() : [f(nr)])
        ] : null)
      ), At(
        f(
          s.value,
          F.value,
          K
        ),
        [[
          ar,
          O.value,
          void 0,
          _.value
        ]]
      );
    };
  }
}), yn = Ce({
  name: "QCardSection",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    horizontal: Boolean
  },
  setup(e, { slots: t }) {
    const n = d(
      () => `q-card__section q-card__section--${e.horizontal === !0 ? "horiz row no-wrap" : "vert"}`
    );
    return () => f(e.tag, { class: n.value }, We(t.default));
  }
}), rt = {
  dark: {
    type: Boolean,
    default: null
  }
};
function it(e, t) {
  return d(() => e.dark === null ? t.dark.isActive : e.dark);
}
const hu = {
  true: "inset",
  item: "item-inset",
  "item-thumbnail": "item-thumbnail-inset"
}, Vl = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24
}, So = Ce({
  name: "QSeparator",
  props: {
    ...rt,
    spaced: [Boolean, String],
    inset: [Boolean, String],
    vertical: Boolean,
    color: String,
    size: String
  },
  setup(e) {
    const t = ke(), n = it(e, t.proxy.$q), l = d(() => e.vertical === !0 ? "vertical" : "horizontal"), o = d(() => ` q-separator--${l.value}`), a = d(() => e.inset !== !1 ? `${o.value}-${hu[e.inset]}` : ""), r = d(
      () => `q-separator${o.value}${a.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : "")
    ), u = d(() => {
      const c = {};
      if (e.size !== void 0 && (c[e.vertical === !0 ? "width" : "height"] = e.size), e.spaced !== !1) {
        const s = e.spaced === !0 ? `${Vl.md}px` : e.spaced in Vl ? `${Vl[e.spaced]}px` : e.spaced, i = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
        c[`margin${i[0]}`] = c[`margin${i[1]}`] = s;
      }
      return c;
    });
    return () => f("hr", {
      class: r.value,
      style: u.value,
      "aria-orientation": l.value
    });
  }
}), In = J(
  !1
);
let to;
function gu(e, t) {
  const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return {
    browser: n[5] || n[3] || n[1] || "",
    version: n[4] || n[2] || "0",
    platform: t[0] || ""
  };
}
function bu(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
const dr = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function yu(e) {
  const t = e.toLowerCase(), n = bu(t), l = gu(t, n), o = {};
  l.browser && (o[l.browser] = !0, o.version = l.version, o.versionNumber = parseInt(l.version, 10)), l.platform && (o[l.platform] = !0);
  const a = o.android || o.ios || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"];
  if (a === !0 || t.indexOf("mobile") !== -1 ? o.mobile = !0 : o.desktop = !0, o["windows phone"] && (o.winphone = !0, delete o["windows phone"]), o.edga || o.edgios || o.edg ? (o.edge = !0, l.browser = "edge") : o.crios ? (o.chrome = !0, l.browser = "chrome") : o.fxios && (o.firefox = !0, l.browser = "firefox"), (o.ipod || o.ipad || o.iphone) && (o.ios = !0), o.vivaldi && (l.browser = "vivaldi", o.vivaldi = !0), // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
  (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === !0 && o.ios !== !0 && a !== !0) && (o.webkit = !0), o.opr && (l.browser = "opera", o.opera = !0), o.safari && (o.blackberry || o.bb ? (l.browser = "blackberry", o.blackberry = !0) : o.playbook ? (l.browser = "playbook", o.playbook = !0) : o.android ? (l.browser = "android", o.android = !0) : o.kindle ? (l.browser = "kindle", o.kindle = !0) : o.silk && (l.browser = "silk", o.silk = !0)), o.name = l.browser, o.platform = l.platform, t.indexOf("electron") !== -1)
    o.electron = !0;
  else if (document.location.href.indexOf("-extension://") !== -1)
    o.bex = !0;
  else {
    if (window.Capacitor !== void 0 ? (o.capacitor = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = !0, o.nativeMobile = !0, o.nativeMobileWrapper = "cordova"), In.value === !0 && (to = { is: { ...o } }), dr === !0 && o.mac === !0 && (o.desktop === !0 && o.safari === !0 || o.nativeMobile === !0 && o.android !== !0 && o.ios !== !0 && o.ipad !== !0)) {
      delete o.mac, delete o.desktop;
      const r = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(o, {
        mobile: !0,
        ios: !0,
        platform: r,
        [r]: !0
      });
    }
    o.mobile !== !0 && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete o.desktop, o.mobile = !0);
  }
  return o;
}
const Yo = navigator.userAgent || navigator.vendor || window.opera, pu = {
  has: {
    touch: !1,
    webStorage: !1
  },
  within: { iframe: !1 }
}, tt = {
  userAgent: Yo,
  is: yu(Yo),
  has: {
    touch: dr
  },
  within: {
    iframe: window.self !== window.top
  }
}, no = {
  install(e) {
    const { $q: t } = e;
    In.value === !0 ? (e.onSSRHydrated.push(() => {
      Object.assign(t.platform, tt), In.value = !1;
    }), t.platform = xn(this)) : t.platform = this;
  }
};
{
  let e;
  _t(tt.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = !0, !0;
    } catch {
    }
    return e = !1, !1;
  }), Object.assign(no, tt), In.value === !0 && (Object.assign(no, to, pu), to = null);
}
function wu(e, t, n) {
  function l() {
  }
  return at(() => {
    e.value === !0 && void 0;
  }), {
    removeFromHistory: l,
    addToHistory() {
    }
  };
}
function fr() {
  let e = null;
  const t = ke();
  function n() {
    e !== null && (clearTimeout(e), e = null);
  }
  return _n(n), at(n), {
    removeTimeout: n,
    registerTimeout(l, o) {
      n(), Sl(t) === !1 && (e = setTimeout(() => {
        e = null, l();
      }, o));
    }
  };
}
function vr() {
  let e;
  const t = ke();
  function n() {
    e = void 0;
  }
  return _n(n), at(n), {
    removeTick: n,
    registerTick(l) {
      e = l, Le(() => {
        e === l && (Sl(t) === !1 && e(), e = void 0);
      });
    }
  };
}
const mr = {
  modelValue: {
    type: Boolean,
    default: null
  },
  "onUpdate:modelValue": [Function, Array]
}, hr = [
  "beforeShow",
  "show",
  "beforeHide",
  "hide"
];
function gr({
  showing: e,
  canShow: t,
  // optional
  hideOnRouteChange: n,
  // optional
  handleShow: l,
  // optional
  handleHide: o,
  // optional
  processOnMount: a
  // optional
}) {
  const r = ke(), { props: u, emit: c, proxy: s } = r;
  let i;
  function v(O) {
    e.value === !0 ? b(O) : S(O);
  }
  function S(O) {
    if (u.disable === !0 || O !== void 0 && O.qAnchorHandled === !0 || t !== void 0 && t(O) !== !0)
      return;
    const _ = u["onUpdate:modelValue"] !== void 0;
    _ === !0 && (c("update:modelValue", !0), i = O, Le(() => {
      i === O && (i = void 0);
    })), (u.modelValue === null || _ === !1) && g(O);
  }
  function g(O) {
    e.value !== !0 && (e.value = !0, c("beforeShow", O), l !== void 0 ? l(O) : c("show", O));
  }
  function b(O) {
    if (u.disable === !0)
      return;
    const _ = u["onUpdate:modelValue"] !== void 0;
    _ === !0 && (c("update:modelValue", !1), i = O, Le(() => {
      i === O && (i = void 0);
    })), (u.modelValue === null || _ === !1) && x(O);
  }
  function x(O) {
    e.value !== !1 && (e.value = !1, c("beforeHide", O), o !== void 0 ? o(O) : c("hide", O));
  }
  function h(O) {
    u.disable === !0 && O === !0 ? u["onUpdate:modelValue"] !== void 0 && c("update:modelValue", !1) : O === !0 !== e.value && (O === !0 ? g : x)(i);
  }
  se(() => u.modelValue, h), n !== void 0 && wo(r) === !0 && se(() => s.$route.fullPath, () => {
    n.value === !0 && e.value === !0 && b();
  }), a === !0 && jt(() => {
    h(u.modelValue);
  });
  const P = { show: S, hide: b, toggle: v };
  return Object.assign(s, P), P;
}
const br = {
  transitionShow: {
    type: String,
    default: "fade"
  },
  transitionHide: {
    type: String,
    default: "fade"
  },
  transitionDuration: {
    type: [String, Number],
    default: 300
  }
};
function yr(e, t = () => {
}, n = () => {
}) {
  return {
    transitionProps: d(() => {
      const l = `q-transition--${e.transitionShow || t()}`, o = `q-transition--${e.transitionHide || n()}`;
      return {
        appear: !0,
        enterFromClass: `${l}-enter-from`,
        enterActiveClass: `${l}-enter-active`,
        enterToClass: `${l}-enter-to`,
        leaveFromClass: `${o}-leave-from`,
        leaveActiveClass: `${o}-leave-active`,
        leaveToClass: `${o}-leave-to`
      };
    }),
    transitionStyle: d(() => `--q-transition-duration: ${e.transitionDuration}ms`)
  };
}
let ln = [], jn = [];
function pr(e) {
  jn = jn.filter((t) => t !== e);
}
function Su(e) {
  pr(e), jn.push(e);
}
function Ko(e) {
  pr(e), jn.length === 0 && ln.length !== 0 && (ln[ln.length - 1](), ln = []);
}
function Kn(e) {
  jn.length === 0 ? e() : ln.push(e);
}
function ku(e) {
  ln = ln.filter((t) => t !== e);
}
const Wo = {};
let xu = 1, _u = document.body;
function Cu(e, t) {
  const n = document.createElement("div");
  if (n.id = t !== void 0 ? `q-portal--${t}--${xu++}` : e, Wo.globalNodes !== void 0) {
    const l = Wo.globalNodes.class;
    l !== void 0 && (n.className = l);
  }
  return _u.appendChild(n), n;
}
function qu(e) {
  e.remove();
}
const pn = [];
function Eu(e) {
  return pn.find(
    (t) => t.contentEl !== null && t.contentEl.contains(e)
  );
}
function wr(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === !0)
        return rl(e);
    } else if (e.__qPortal === !0) {
      const n = rl(e);
      return n !== void 0 && n.$options.name === "QPopupProxy" ? (e.hide(t), n) : e;
    }
    e = rl(e);
  } while (e != null);
}
function Mu(e, t, n) {
  for (; n !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === !0) {
      if (n--, e.$options.name === "QMenu") {
        e = wr(e, t);
        continue;
      }
      e.hide(t);
    }
    e = rl(e);
  }
}
const Pu = Ce({
  name: "QPortal",
  setup(e, { slots: t }) {
    return () => t.default();
  }
});
function Ru(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog")
      return !0;
    if (e.type.name === "QDialog" || e.type.name === "QMenu")
      return !1;
    e = e.parent;
  }
  return !1;
}
function Sr(e, t, n, l) {
  const o = J(!1), a = J(!1);
  let r = null;
  const u = {}, c = l === "dialog" && Ru(e);
  function s(v) {
    if (v === !0) {
      Ko(u), a.value = !0;
      return;
    }
    a.value = !1, o.value === !1 && (c === !1 && r === null && (r = Cu(!1, l)), o.value = !0, pn.push(e.proxy), Su(u));
  }
  function i(v) {
    if (a.value = !1, v !== !0) return;
    Ko(u), o.value = !1;
    const S = pn.indexOf(e.proxy);
    S !== -1 && pn.splice(S, 1), r !== null && (qu(r), r = null);
  }
  return Ti(() => {
    i(!0);
  }), e.proxy.__qPortal = !0, _t(e.proxy, "contentEl", () => t.value), {
    showPortal: s,
    hidePortal: i,
    portalIsActive: o,
    portalIsAccessible: a,
    renderPortal: () => c === !0 ? n() : o.value === !0 ? [f(Vi, { to: r }, f(Pu, n))] : void 0
  };
}
const kr = [Element, String], Ou = [null, document, document.body, document.scrollingElement, document.documentElement];
function xr(e, t) {
  let n = Zi(t);
  if (n === void 0) {
    if (e == null)
      return window;
    n = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return Ou.includes(n) ? window : n;
}
function Bu(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function Tu(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
let Xn;
function Vu() {
  if (Xn !== void 0)
    return Xn;
  const e = document.createElement("p"), t = document.createElement("div");
  eo(e, {
    width: "100%",
    height: "200px"
  }), eo(t, {
    position: "absolute",
    top: "0px",
    left: "0px",
    visibility: "hidden",
    width: "200px",
    height: "150px",
    overflow: "hidden"
  }), t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let l = e.offsetWidth;
  return n === l && (l = t.clientWidth), t.remove(), Xn = n - l, Xn;
}
function Au(e, t = !0) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
let On = 0, Al, Dl, An, Ll = !1, Qo, Xo, Jo, Gt = null;
function Du(e) {
  Lu(e) && Fe(e);
}
function Lu(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return !0;
  const t = eu(e), n = e.shiftKey && !e.deltaX, l = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY), o = n || l ? e.deltaY : e.deltaX;
  for (let a = 0; a < t.length; a++) {
    const r = t[a];
    if (Au(r, l))
      return l ? o < 0 && r.scrollTop === 0 ? !0 : o > 0 && r.scrollTop + r.clientHeight === r.scrollHeight : o < 0 && r.scrollLeft === 0 ? !0 : o > 0 && r.scrollLeft + r.clientWidth === r.scrollWidth;
  }
  return !0;
}
function Zo(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function Jn(e) {
  Ll !== !0 && (Ll = !0, requestAnimationFrame(() => {
    Ll = !1;
    const { height: t } = e.target, { clientHeight: n, scrollTop: l } = document.scrollingElement;
    (An === void 0 || t !== window.innerHeight) && (An = n - t, document.scrollingElement.scrollTop = l), l > An && (document.scrollingElement.scrollTop -= Math.ceil((l - An) / 8));
  }));
}
function Go(e) {
  const t = document.body, n = window.visualViewport !== void 0;
  if (e === "add") {
    const { overflowY: l, overflowX: o } = window.getComputedStyle(t);
    Al = Tu(window), Dl = Bu(window), Qo = t.style.left, Xo = t.style.top, Jo = window.location.href, t.style.left = `-${Al}px`, t.style.top = `-${Dl}px`, o !== "hidden" && (o === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), l !== "hidden" && (l === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = !0, tt.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", Jn, Ze.passiveCapture), window.visualViewport.addEventListener("scroll", Jn, Ze.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", Zo, Ze.passiveCapture));
  }
  tt.is.desktop === !0 && tt.is.mac === !0 && window[`${e}EventListener`]("wheel", Du, Ze.notPassive), e === "remove" && (tt.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", Jn, Ze.passiveCapture), window.visualViewport.removeEventListener("scroll", Jn, Ze.passiveCapture)) : window.removeEventListener("scroll", Zo, Ze.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = !1, t.style.left = Qo, t.style.top = Xo, window.location.href === Jo && window.scrollTo(Al, Dl), An = void 0);
}
function Fu(e) {
  let t = "add";
  if (e === !0) {
    if (On++, Gt !== null) {
      clearTimeout(Gt), Gt = null;
      return;
    }
    if (On > 1)
      return;
  } else {
    if (On === 0 || (On--, On > 0))
      return;
    if (t = "remove", tt.is.ios === !0 && tt.is.nativeMobile === !0) {
      Gt !== null && clearTimeout(Gt), Gt = setTimeout(() => {
        Go(t), Gt = null;
      }, 100);
      return;
    }
  }
  Go(t);
}
function $u() {
  let e;
  return {
    preventBodyScroll(t) {
      t !== e && (e !== void 0 || t === !0) && (e = t, Fu(t));
    }
  };
}
const an = [];
let kn;
function Hu(e) {
  kn = e.keyCode === 27;
}
function Iu() {
  kn === !0 && (kn = !1);
}
function ju(e) {
  kn === !0 && (kn = !1, It(e, 27) === !0 && an[an.length - 1](e));
}
function _r(e) {
  window[e]("keydown", Hu), window[e]("blur", Iu), window[e]("keyup", ju), kn = !1;
}
function Cr(e) {
  tt.is.desktop === !0 && (an.push(e), an.length === 1 && _r("addEventListener"));
}
function dl(e) {
  const t = an.indexOf(e);
  t !== -1 && (an.splice(t, 1), an.length === 0 && _r("removeEventListener"));
}
const rn = [];
function qr(e) {
  rn[rn.length - 1](e);
}
function Er(e) {
  tt.is.desktop === !0 && (rn.push(e), rn.length === 1 && document.body.addEventListener("focusin", qr));
}
function lo(e) {
  const t = rn.indexOf(e);
  t !== -1 && (rn.splice(t, 1), rn.length === 0 && document.body.removeEventListener("focusin", qr));
}
let Zn = 0;
const Nu = {
  standard: "fixed-full flex-center",
  top: "fixed-top justify-center",
  bottom: "fixed-bottom justify-center",
  right: "fixed-right items-center",
  left: "fixed-left items-center"
}, ea = {
  standard: ["scale", "scale"],
  top: ["slide-down", "slide-up"],
  bottom: ["slide-up", "slide-down"],
  right: ["slide-left", "slide-right"],
  left: ["slide-right", "slide-left"]
}, kl = Ce({
  name: "QDialog",
  inheritAttrs: !1,
  props: {
    ...mr,
    ...br,
    transitionShow: String,
    // override useTransitionProps
    transitionHide: String,
    // override useTransitionProps
    persistent: Boolean,
    autoClose: Boolean,
    allowFocusOutside: Boolean,
    noEscDismiss: Boolean,
    noBackdropDismiss: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    noShake: Boolean,
    seamless: Boolean,
    maximized: Boolean,
    fullWidth: Boolean,
    fullHeight: Boolean,
    square: Boolean,
    backdropFilter: String,
    position: {
      type: String,
      default: "standard",
      validator: (e) => ["standard", "top", "bottom", "left", "right"].includes(e)
    }
  },
  emits: [
    ...hr,
    "shake",
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    const o = ke(), a = J(null), r = J(!1), u = J(!1);
    let c = null, s = null, i, v;
    const S = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0
    ), { preventBodyScroll: g } = $u(), { registerTimeout: b } = fr(), { registerTick: x, removeTick: h } = vr(), { transitionProps: P, transitionStyle: O } = yr(
      e,
      () => ea[e.position][0],
      () => ea[e.position][1]
    ), _ = d(() => O.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : "")), { showPortal: y, hidePortal: p, portalIsAccessible: F, renderPortal: A } = Sr(
      o,
      a,
      ve,
      "dialog"
    ), { hide: U } = gr({
      showing: r,
      hideOnRouteChange: S,
      handleShow: K,
      handleHide: Q,
      processOnMount: !0
    }), { addToHistory: D, removeFromHistory: L } = wu(r), H = d(
      () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Nu[e.position]}` + (u.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : "")
    ), E = d(() => r.value === !0 && e.seamless !== !0), $ = d(() => e.autoClose === !0 ? { onClick: C } : {}), M = d(() => [
      `q-dialog fullscreen no-pointer-events q-dialog--${E.value === !0 ? "modal" : "seamless"}`,
      l.class
    ]);
    se(() => e.maximized, (j) => {
      r.value === !0 && q(j);
    }), se(E, (j) => {
      g(j), j === !0 ? (Er(ie), Cr(Z)) : (lo(ie), dl(Z));
    });
    function K(j) {
      D(), s = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null, q(e.maximized), y(), u.value = !0, e.noFocus !== !0 ? (document.activeElement !== null && document.activeElement.blur(), x(ne)) : h(), b(() => {
        if (o.proxy.$q.platform.is.ios === !0) {
          if (e.seamless !== !0 && document.activeElement) {
            const { top: X, bottom: ye } = document.activeElement.getBoundingClientRect(), { innerHeight: z } = window, qe = window.visualViewport !== void 0 ? window.visualViewport.height : z;
            X > 0 && ye > qe / 2 && (document.scrollingElement.scrollTop = Math.min(
              document.scrollingElement.scrollHeight - qe,
              ye >= z ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + ye - qe / 2)
            )), document.activeElement.scrollIntoView();
          }
          v = !0, a.value.click(), v = !1;
        }
        y(!0), u.value = !1, n("show", j);
      }, e.transitionDuration);
    }
    function Q(j) {
      h(), L(), de(!0), u.value = !0, p(), s !== null && (((j && j.type.indexOf("key") === 0 ? s.closest('[tabindex]:not([tabindex^="-"])') : void 0) || s).focus(), s = null), b(() => {
        p(!0), u.value = !1, n("hide", j);
      }, e.transitionDuration);
    }
    function ne(j) {
      Kn(() => {
        let X = a.value;
        if (X !== null) {
          if (j !== void 0) {
            const ye = X.querySelector(j);
            if (ye !== null) {
              ye.focus({ preventScroll: !0 });
              return;
            }
          }
          X.contains(document.activeElement) !== !0 && (X = X.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || X.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || X.querySelector("[autofocus], [data-autofocus]") || X, X.focus({ preventScroll: !0 }));
        }
      });
    }
    function N(j) {
      j && typeof j.focus == "function" ? j.focus({ preventScroll: !0 }) : ne(), n("shake");
      const X = a.value;
      X !== null && (X.classList.remove("q-animate--scale"), X.classList.add("q-animate--scale"), c !== null && clearTimeout(c), c = setTimeout(() => {
        c = null, a.value !== null && (X.classList.remove("q-animate--scale"), ne());
      }, 170));
    }
    function Z() {
      e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && N() : (n("escapeKey"), U()));
    }
    function de(j) {
      c !== null && (clearTimeout(c), c = null), (j === !0 || r.value === !0) && (q(!1), e.seamless !== !0 && (g(!1), lo(ie), dl(Z))), j !== !0 && (s = null);
    }
    function q(j) {
      j === !0 ? i !== !0 && (Zn < 1 && document.body.classList.add("q-body--dialog"), Zn++, i = !0) : i === !0 && (Zn < 2 && document.body.classList.remove("q-body--dialog"), Zn--, i = !1);
    }
    function C(j) {
      v !== !0 && (U(j), n("click", j));
    }
    function G(j) {
      e.persistent !== !0 && e.noBackdropDismiss !== !0 ? U(j) : e.noShake !== !0 && N();
    }
    function ie(j) {
      e.allowFocusOutside !== !0 && F.value === !0 && lr(a.value, j.target) !== !0 && ne('[tabindex]:not([tabindex="-1"])');
    }
    Object.assign(o.proxy, {
      // expose public methods
      focus: ne,
      shake: N,
      // private but needed by QSelect
      __updateRefocusTarget(j) {
        s = j || null;
      }
    }), at(de);
    function ve() {
      return f("div", {
        role: "dialog",
        "aria-modal": E.value === !0 ? "true" : "false",
        ...l,
        class: M.value
      }, [
        f(Mt, {
          name: "q-transition--fade",
          appear: !0
        }, () => E.value === !0 ? f("div", {
          class: "q-dialog__backdrop fixed-full",
          style: _.value,
          "aria-hidden": "true",
          tabindex: -1,
          onClick: G
        }) : null),
        f(
          Mt,
          P.value,
          () => r.value === !0 ? f("div", {
            ref: a,
            class: H.value,
            style: O.value,
            tabindex: -1,
            ...$.value
          }, We(t.default)) : null
        )
      ]);
    }
    return A;
  }
});
function ta(e) {
  if (e === !1)
    return 0;
  if (e === !0 || e === void 0)
    return 1;
  const t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
const un = yo(
  {
    name: "close-popup",
    beforeMount(e, { value: t }) {
      const n = {
        depth: ta(t),
        handler(l) {
          n.depth !== 0 && setTimeout(() => {
            const o = Eu(e);
            o !== void 0 && Mu(o, l, n.depth);
          });
        },
        handlerKey(l) {
          It(l, 13) === !0 && n.handler(l);
        }
      };
      e.__qclosepopup = n, e.addEventListener("click", n.handler), e.addEventListener("keyup", n.handlerKey);
    },
    updated(e, { value: t, oldValue: n }) {
      t !== n && (e.__qclosepopup.depth = ta(t));
    },
    beforeUnmount(e) {
      const t = e.__qclosepopup;
      e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
    }
  }
), Mr = Ce({
  name: "QCard",
  props: {
    ...rt,
    tag: {
      type: String,
      default: "div"
    },
    square: Boolean,
    flat: Boolean,
    bordered: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: { $q: n } } = ke(), l = it(e, n), o = d(
      () => "q-card" + (l.value === !0 ? " q-card--dark q-dark" : "") + (e.bordered === !0 ? " q-card--bordered" : "") + (e.square === !0 ? " q-card--square no-border-radius" : "") + (e.flat === !0 ? " q-card--flat no-shadow" : "")
    );
    return () => f(e.tag, { class: o.value }, We(t.default));
  }
}), zu = { class: "font-bold text-2xl" }, Uu = { class: "flex flex-col" }, Rf = /* @__PURE__ */ Un({
  __name: "AnModal",
  props: {
    persistent: {
      type: Boolean,
      default: !1
    },
    hideOkBtn: {
      type: Boolean,
      default: !1
    },
    hideActions: {
      type: Boolean,
      default: !1
    },
    okLabel: {
      type: String,
      default: "Ok"
    },
    cancelLabel: {
      type: String,
      default: "Cancel"
    },
    title: {
      type: String,
      default: "Title"
    },
    btnsColor: {
      type: Object,
      default: "primary"
    },
    modalCardProps: {
      type: Object,
      required: !1
    }
  },
  emits: ["okClick", "hide"],
  setup(e, { expose: t, emit: n }) {
    const l = n, o = e, a = xn({
      open: !1
    }), r = () => {
      a.open = !0;
    }, u = () => {
      a.open = !1, l("hide");
    };
    return t({ show: r, hide: u }), (c, s) => (Ae(), st(kl, {
      modelValue: a.open,
      "onUpdate:modelValue": s[1] || (s[1] = (i) => a.open = i),
      persistent: o.persistent,
      onHide: u
    }, {
      default: Me(() => {
        var i;
        return [
          Se(pl(Mr), Qt(o.modalCardProps, {
            class: `container ${((i = o.modalCardProps) == null ? void 0 : i.class) || ""}`
          }), {
            default: Me(() => [
              Se(yn, { class: "flex items-center justify-between" }, {
                default: Me(() => [
                  Ue("h2", zu, Ln(o.title), 1),
                  ot(c.$slots, "close-icon-btn", {
                    color: o.btnsColor,
                    disable: o.persistent
                  }, () => [
                    At(Se(Re, {
                      icon: "close",
                      color: o.btnsColor,
                      round: "",
                      flat: "",
                      disable: o.persistent
                    }, null, 8, ["color", "disable"]), [
                      [un]
                    ])
                  ])
                ]),
                _: 3
              }),
              Ue("div", Uu, [
                Se(yn, { class: "flex flex-col gap-2" }, {
                  default: Me(() => [
                    ot(c.$slots, "content")
                  ]),
                  _: 3
                }),
                e.hideActions ? Ie("", !0) : (Ae(), st(So, { key: 0 })),
                e.hideActions ? Ie("", !0) : (Ae(), st(yn, {
                  key: 1,
                  class: "flex items-center justify-end gap-2"
                }, {
                  default: Me(() => [
                    ot(c.$slots, "cancel-btn", {
                      color: o.btnsColor,
                      disable: o.persistent,
                      label: o.cancelLabel
                    }, () => [
                      At(Se(Re, {
                        color: o.btnsColor,
                        type: "button",
                        unelevated: "",
                        flat: "",
                        class: "border border-solid",
                        disable: o.persistent,
                        label: o.cancelLabel,
                        "no-caps": ""
                      }, null, 8, ["color", "disable", "label"]), [
                        [un]
                      ])
                    ]),
                    ot(c.$slots, "ok-btn", {
                      click: () => l("okClick"),
                      color: o.btnsColor,
                      label: o.cancelLabel
                    }, () => [
                      e.hideOkBtn ? Ie("", !0) : (Ae(), st(Re, {
                        key: 0,
                        onClick: s[0] || (s[0] = (v) => l("okClick")),
                        color: o.btnsColor,
                        type: "button",
                        unelevated: "",
                        label: o.okLabel,
                        "no-caps": ""
                      }, null, 8, ["color", "label"]))
                    ])
                  ]),
                  _: 3
                }))
              ])
            ]),
            _: 3
          }, 16, ["class"])
        ];
      }),
      _: 3
    }, 8, ["modelValue", "persistent"]));
  }
}), Pr = "_q_fo_", Yu = Ce({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(e, { slots: t, emit: n }) {
    const l = ke(), o = J(null);
    let a = 0;
    const r = [];
    function u(g) {
      const b = typeof g == "boolean" ? g : e.noErrorFocus !== !0, x = ++a, h = (_, y) => {
        n(`validation${_ === !0 ? "Success" : "Error"}`, y);
      }, P = (_) => {
        const y = _.validate();
        return typeof y.then == "function" ? y.then(
          (p) => ({ valid: p, comp: _ }),
          (p) => ({ valid: !1, comp: _, err: p })
        ) : Promise.resolve({ valid: y, comp: _ });
      };
      return (e.greedy === !0 ? Promise.all(r.map(P)).then((_) => _.filter((y) => y.valid !== !0)) : r.reduce(
        (_, y) => _.then(() => P(y).then((p) => {
          if (p.valid === !1)
            return Promise.reject(p);
        })),
        Promise.resolve()
      ).catch((_) => [_])).then((_) => {
        if (_ === void 0 || _.length === 0)
          return x === a && h(!0), !0;
        if (x === a) {
          const { comp: y, err: p } = _[0];
          if (p !== void 0 && console.error(p), h(!1, y), b === !0) {
            const F = _.find(({ comp: A }) => typeof A.focus == "function" && Sl(A.$) === !1);
            F !== void 0 && F.comp.focus();
          }
        }
        return !1;
      });
    }
    function c() {
      a++, r.forEach((g) => {
        typeof g.resetValidation == "function" && g.resetValidation();
      });
    }
    function s(g) {
      g !== void 0 && Fe(g);
      const b = a + 1;
      u().then((x) => {
        b === a && x === !0 && (e.onSubmit !== void 0 ? n("submit", g) : g !== void 0 && g.target !== void 0 && typeof g.target.submit == "function" && g.target.submit());
      });
    }
    function i(g) {
      g !== void 0 && Fe(g), n("reset"), Le(() => {
        c(), e.autofocus === !0 && e.noResetFocus !== !0 && v();
      });
    }
    function v() {
      Kn(() => {
        if (o.value === null) return;
        const g = o.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || o.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || o.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(o.value.querySelectorAll("[tabindex]"), (b) => b.tabIndex !== -1);
        g != null && g.focus({ preventScroll: !0 });
      });
    }
    Ai(Pr, {
      bindComponent(g) {
        r.push(g);
      },
      unbindComponent(g) {
        const b = r.indexOf(g);
        b !== -1 && r.splice(b, 1);
      }
    });
    let S = !1;
    return _n(() => {
      S = !0;
    }), wl(() => {
      S === !0 && e.autofocus === !0 && v();
    }), jt(() => {
      e.autofocus === !0 && v();
    }), Object.assign(l.proxy, {
      validate: u,
      resetValidation: c,
      submit: s,
      reset: i,
      focus: v,
      getValidationComponents: () => r
    }), () => f("form", {
      class: "q-form",
      ref: o,
      onSubmit: s,
      onReset: i
    }, We(t.default));
  }
}), Ku = { class: "font-bold text-2xl" }, Wu = /* @__PURE__ */ Un({
  __name: "AnModalForm",
  props: {
    isLoading: {
      type: Boolean,
      default: !1
    },
    formIsLoading: {
      type: Boolean,
      default: !1
    },
    okLabel: {
      type: String,
      default: "Ok"
    },
    cancelLabel: {
      type: String,
      default: "Cancel"
    },
    title: {
      type: String,
      default: "Title"
    },
    btnsColor: {
      type: Object,
      default: "primary"
    },
    modalCardProps: {
      type: Object,
      required: !1
    }
  },
  emits: ["submit", "hide"],
  setup(e, { expose: t, emit: n }) {
    const l = n, o = e, a = xn({
      open: !1
    }), r = () => {
      a.open = !0;
    }, u = () => {
      a.open = !1, l("hide");
    };
    return t({ show: r, hide: u }), (c, s) => (Ae(), st(kl, {
      modelValue: a.open,
      "onUpdate:modelValue": s[1] || (s[1] = (i) => a.open = i),
      persistent: o.isLoading || o.formIsLoading,
      onHide: u
    }, {
      default: Me(() => {
        var i;
        return [
          Se(pl(Mr), Qt(o.modalCardProps, {
            class: `container ${((i = o.modalCardProps) == null ? void 0 : i.class) || ""}`
          }), {
            default: Me(() => [
              Se(yn, { class: "flex items-center justify-between" }, {
                default: Me(() => [
                  Ue("h2", Ku, Ln(o.title), 1),
                  ot(c.$slots, "close-icon-btn", {
                    color: o.btnsColor,
                    disable: o.isLoading || o.formIsLoading
                  }, () => [
                    At(Se(Re, {
                      icon: "close",
                      color: o.btnsColor,
                      round: "",
                      flat: "",
                      disable: o.isLoading || o.formIsLoading
                    }, null, 8, ["color", "disable"]), [
                      [un]
                    ])
                  ])
                ]),
                _: 3
              }),
              Se(Yu, {
                onSubmit: s[0] || (s[0] = (v) => l("submit", v)),
                class: "flex flex-col"
              }, {
                default: Me(() => [
                  Se(yn, { class: "flex flex-col gap-2" }, {
                    default: Me(() => [
                      ot(c.$slots, "content")
                    ]),
                    _: 3
                  }),
                  Se(So),
                  Se(yn, { class: "flex items-center justify-end gap-2" }, {
                    default: Me(() => [
                      ot(c.$slots, "cancel-btn", {
                        color: o.btnsColor,
                        disable: o.isLoading || o.formIsLoading,
                        label: o.cancelLabel
                      }, () => [
                        At(Se(Re, {
                          color: o.btnsColor,
                          type: "button",
                          unelevated: "",
                          flat: "",
                          class: "border border-solid",
                          disable: o.isLoading || o.formIsLoading,
                          label: o.cancelLabel,
                          "no-caps": ""
                        }, null, 8, ["color", "disable", "label"]), [
                          [un]
                        ])
                      ]),
                      ot(c.$slots, "ok-btn", {
                        color: o.btnsColor,
                        label: o.okLabel,
                        disable: o.isLoading,
                        loading: o.formIsLoading
                      }, () => [
                        Se(Re, {
                          color: o.btnsColor,
                          type: "submit",
                          unelevated: "",
                          label: o.okLabel,
                          "no-caps": "",
                          disable: o.isLoading,
                          loading: o.formIsLoading
                        }, null, 8, ["color", "label", "disable", "loading"])
                      ])
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 16, ["class"])
        ];
      }),
      _: 3
    }, 8, ["modelValue", "persistent"]));
  }
}), Qu = () => [
  f("defs", [
    f("linearGradient", {
      x1: "8.042%",
      y1: "0%",
      x2: "65.682%",
      y2: "23.865%",
      id: "a"
    }, [
      f("stop", {
        "stop-color": "currentColor",
        "stop-opacity": "0",
        offset: "0%"
      }),
      f("stop", {
        "stop-color": "currentColor",
        "stop-opacity": ".631",
        offset: "63.146%"
      }),
      f("stop", {
        "stop-color": "currentColor",
        offset: "100%"
      })
    ])
  ]),
  f("g", {
    transform: "translate(1 1)",
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    f("path", {
      d: "M36 18c0-9.94-8.06-18-18-18",
      stroke: "url(#a)",
      "stroke-width": "2"
    }, [
      f("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "0.9s",
        repeatCount: "indefinite"
      })
    ]),
    f("circle", {
      fill: "currentColor",
      cx: "36",
      cy: "18",
      r: "1"
    }, [
      f("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        from: "0 18 18",
        to: "360 18 18",
        dur: "0.9s",
        repeatCount: "indefinite"
      })
    ])
  ])
], Xu = Ce({
  name: "QSpinnerTail",
  props: er,
  setup(e) {
    const { cSize: t, classes: n } = tr(e), l = Qu();
    return () => f("svg", {
      class: n.value,
      width: t.value,
      height: t.value,
      viewBox: "0 0 38 38",
      xmlns: "http://www.w3.org/2000/svg"
    }, l);
  }
}), Ju = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, Zu = {}, Gu = { class: "flex flex-1 justify-center items-center h-full" };
function es(e, t) {
  return Ae(), Tt("div", Gu, [
    Se(Xu, { size: "2rem" })
  ]);
}
const Of = /* @__PURE__ */ Ju(Zu, [["render", es]]);
let Fl, Gn = 0;
const et = new Array(256);
for (let e = 0; e < 256; e++)
  et[e] = (e + 256).toString(16).substring(1);
const ts = (() => {
  const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
  if (e !== void 0) {
    if (e.randomBytes !== void 0)
      return e.randomBytes;
    if (e.getRandomValues !== void 0)
      return (t) => {
        const n = new Uint8Array(t);
        return e.getRandomValues(n), n;
      };
  }
  return (t) => {
    const n = [];
    for (let l = t; l > 0; l--)
      n.push(Math.floor(Math.random() * 256));
    return n;
  };
})(), na = 4096;
function oo() {
  (Fl === void 0 || Gn + 16 > na) && (Gn = 0, Fl = ts(na));
  const e = Array.prototype.slice.call(Fl, Gn, Gn += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, et[e[0]] + et[e[1]] + et[e[2]] + et[e[3]] + "-" + et[e[4]] + et[e[5]] + "-" + et[e[6]] + et[e[7]] + "-" + et[e[8]] + et[e[9]] + "-" + et[e[10]] + et[e[11]] + et[e[12]] + et[e[13]] + et[e[14]] + et[e[15]];
}
function ns(e) {
  return e ?? null;
}
function la(e, t) {
  return e ?? (t === !0 ? `f_${oo()}` : null);
}
function ls({ getValue: e, required: t = !0 } = {}) {
  if (In.value === !0) {
    const n = e !== void 0 ? J(ns(e())) : J(null);
    return t === !0 && n.value === null && jt(() => {
      n.value = `f_${oo()}`;
    }), e !== void 0 && se(e, (l) => {
      n.value = la(l, t);
    }), n;
  }
  return e !== void 0 ? d(() => la(e(), t)) : J(`f_${oo()}`);
}
const oa = /^on[A-Z]/;
function os() {
  const { attrs: e, vnode: t } = ke(), n = {
    listeners: J({}),
    attributes: J({})
  };
  function l() {
    const o = {}, a = {};
    for (const r in e)
      r !== "class" && r !== "style" && oa.test(r) === !1 && (o[r] = e[r]);
    for (const r in t.props)
      oa.test(r) === !0 && (a[r] = t.props[r]);
    n.attributes.value = o, n.listeners.value = a;
  }
  return Wa(l), l(), n;
}
function as({ validate: e, resetValidation: t, requiresQForm: n }) {
  const l = Di(Pr, !1);
  if (l !== !1) {
    const { props: o, proxy: a } = ke();
    Object.assign(a, { validate: e, resetValidation: t }), se(() => o.disable, (r) => {
      r === !0 ? (typeof t == "function" && t(), l.unbindComponent(a)) : l.bindComponent(a);
    }), jt(() => {
      o.disable !== !0 && l.bindComponent(a);
    }), at(() => {
      o.disable !== !0 && l.unbindComponent(a);
    });
  } else n === !0 && console.error("Parent QForm not found on useFormChild()!");
}
const aa = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/, ra = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/, ia = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, el = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/, tl = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/, $l = {
  date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
  time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
  fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
  timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
  email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
  hexColor: (e) => aa.test(e),
  hexaColor: (e) => ra.test(e),
  hexOrHexaColor: (e) => ia.test(e),
  rgbColor: (e) => el.test(e),
  rgbaColor: (e) => tl.test(e),
  rgbOrRgbaColor: (e) => el.test(e) || tl.test(e),
  hexOrRgbColor: (e) => aa.test(e) || el.test(e),
  hexaOrRgbaColor: (e) => ra.test(e) || tl.test(e),
  anyColor: (e) => ia.test(e) || el.test(e) || tl.test(e)
};
function Rr(e, t = 250, n) {
  let l = null;
  function o() {
    const a = arguments, r = () => {
      l = null, e.apply(this, a);
    };
    l !== null && clearTimeout(l), l = setTimeout(r, t);
  }
  return o.cancel = () => {
    l !== null && clearTimeout(l);
  }, o;
}
const rs = [!0, !1, "ondemand"], is = {
  modelValue: {},
  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,
  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [Boolean, String],
    default: !1,
    // statement unneeded but avoids future vue implementation changes
    validator: (e) => rs.includes(e)
  }
};
function us(e, t) {
  const { props: n, proxy: l } = ke(), o = J(!1), a = J(null), r = J(!1);
  as({ validate: x, resetValidation: b });
  let u = 0, c;
  const s = d(
    () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0
  ), i = d(() => n.disable !== !0 && s.value === !0 && t.value === !1), v = d(
    () => n.error === !0 || o.value === !0
  ), S = d(() => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : a.value);
  se(() => n.modelValue, () => {
    r.value = !0, i.value === !0 && n.lazyRules === !1 && h();
  });
  function g() {
    n.lazyRules !== "ondemand" && i.value === !0 && r.value === !0 && h();
  }
  se(() => n.reactiveRules, (P) => {
    P === !0 ? c === void 0 && (c = se(() => n.rules, g, { immediate: !0, deep: !0 })) : c !== void 0 && (c(), c = void 0);
  }, { immediate: !0 }), se(() => n.lazyRules, g), se(e, (P) => {
    P === !0 ? r.value = !0 : i.value === !0 && n.lazyRules !== "ondemand" && h();
  });
  function b() {
    u++, t.value = !1, r.value = !1, o.value = !1, a.value = null, h.cancel();
  }
  function x(P = n.modelValue) {
    if (n.disable === !0 || s.value === !1)
      return !0;
    const O = ++u, _ = t.value !== !0 ? () => {
      r.value = !0;
    } : () => {
    }, y = (F, A) => {
      F === !0 && _(), o.value = F, a.value = A || null, t.value = !1;
    }, p = [];
    for (let F = 0; F < n.rules.length; F++) {
      const A = n.rules[F];
      let U;
      if (typeof A == "function" ? U = A(P, $l) : typeof A == "string" && $l[A] !== void 0 && (U = $l[A](P)), U === !1 || typeof U == "string")
        return y(!0, U), !1;
      U !== !0 && U !== void 0 && p.push(U);
    }
    return p.length === 0 ? (y(!1), !0) : (t.value = !0, Promise.all(p).then(
      (F) => {
        if (F === void 0 || Array.isArray(F) === !1 || F.length === 0)
          return O === u && y(!1), !0;
        const A = F.find((U) => U === !1 || typeof U == "string");
        return O === u && y(A !== void 0, A), A === void 0;
      },
      (F) => (O === u && (console.error(F), y(!0)), !1)
    ));
  }
  const h = Rr(x, 0);
  return at(() => {
    c !== void 0 && c(), h.cancel();
  }), Object.assign(l, { resetValidation: b, validate: x }), _t(l, "hasError", () => v.value), {
    isDirtyModel: r,
    hasRules: s,
    hasError: v,
    errorMessage: S,
    validate: x,
    resetValidation: b
  };
}
function Nn(e) {
  return e != null && ("" + e).length !== 0;
}
const ss = {
  ...rt,
  ...is,
  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,
  labelColor: String,
  color: String,
  bgColor: String,
  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [Boolean, String],
  square: Boolean,
  loading: Boolean,
  labelSlot: Boolean,
  bottomSlots: Boolean,
  hideBottomSpace: Boolean,
  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,
  counter: Boolean,
  clearable: Boolean,
  clearIcon: String,
  disable: Boolean,
  readonly: Boolean,
  autofocus: Boolean,
  for: String
}, xl = {
  ...ss,
  maxlength: [Number, String]
}, ko = ["update:modelValue", "clear", "focus", "blur"];
function xo({ requiredForAttr: e = !0, tagProp: t, changeEvent: n = !1 } = {}) {
  const { props: l, proxy: o } = ke(), a = it(l, o.$q), r = ls({
    required: e,
    getValue: () => l.for
  });
  return {
    requiredForAttr: e,
    changeEvent: n,
    tag: t === !0 ? d(() => l.tag) : { value: "label" },
    isDark: a,
    editable: d(
      () => l.disable !== !0 && l.readonly !== !0
    ),
    innerLoading: J(!1),
    focused: J(!1),
    hasPopupOpen: !1,
    splitAttrs: os(),
    targetUid: r,
    rootRef: J(null),
    targetRef: J(null),
    controlRef: J(null)
    /**
         * user supplied additionals:
    
         * innerValue - computed
         * floatingLabel - computed
         * inputRef - computed
    
         * fieldClass - computed
         * hasShadow - computed
    
         * controlEvents - Object with fn(e)
    
         * getControl - fn
         * getInnerAppend - fn
         * getControlChild - fn
         * getShadowControl - fn
         * showPopup - fn
         */
  };
}
function _o(e) {
  const { props: t, emit: n, slots: l, attrs: o, proxy: a } = ke(), { $q: r } = a;
  let u = null;
  e.hasValue === void 0 && (e.hasValue = d(() => Nn(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (N) => {
    n("update:modelValue", N);
  }), e.controlEvents === void 0 && (e.controlEvents = {
    onFocusin: D,
    onFocusout: L
  }), Object.assign(e, {
    clearValue: H,
    onControlFocusin: D,
    onControlFocusout: L,
    focus: A
  }), e.computedCounter === void 0 && (e.computedCounter = d(() => {
    if (t.counter !== !1) {
      const N = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0, Z = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return N + (Z !== void 0 ? " / " + Z : "");
    }
  }));
  const {
    isDirtyModel: c,
    hasRules: s,
    hasError: i,
    errorMessage: v,
    resetValidation: S
  } = us(e.focused, e.innerLoading), g = e.floatingLabel !== void 0 ? d(() => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : d(() => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0), b = d(
    () => t.bottomSlots === !0 || t.hint !== void 0 || s.value === !0 || t.counter === !0 || t.error !== null
  ), x = d(() => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard"), h = d(
    () => `q-field row no-wrap items-start q-field--${x.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (g.value === !0 ? " q-field--float" : "") + (O.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (i.value === !0 ? " q-field--error" : "") + (i.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && b.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : "")
  ), P = d(
    () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (i.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")
  ), O = d(
    () => t.labelSlot === !0 || t.label !== void 0
  ), _ = d(
    () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && i.value !== !0 ? ` text-${t.labelColor}` : "")
  ), y = d(() => ({
    id: e.targetUid.value,
    editable: e.editable.value,
    focused: e.focused.value,
    floatingLabel: g.value,
    modelValue: t.modelValue,
    emitValue: e.emitValue
  })), p = d(() => {
    const N = {};
    return e.targetUid.value && (N.for = e.targetUid.value), t.disable === !0 && (N["aria-disabled"] = "true"), N;
  });
  function F() {
    const N = document.activeElement;
    let Z = e.targetRef !== void 0 && e.targetRef.value;
    Z && (N === null || N.id !== e.targetUid.value) && (Z.hasAttribute("tabindex") === !0 || (Z = Z.querySelector("[tabindex]")), Z && Z !== N && Z.focus({ preventScroll: !0 }));
  }
  function A() {
    Kn(F);
  }
  function U() {
    ku(F);
    const N = document.activeElement;
    N !== null && e.rootRef.value.contains(N) && N.blur();
  }
  function D(N) {
    u !== null && (clearTimeout(u), u = null), e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0, n("focus", N));
  }
  function L(N, Z) {
    u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1, n("blur", N)), Z !== void 0 && Z());
    });
  }
  function H(N) {
    Fe(N), r.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), n("update:modelValue", null), e.changeEvent === !0 && n("change", null), n("clear", t.modelValue), Le(() => {
      const Z = c.value;
      S(), c.value = Z;
    });
  }
  function E(N) {
    [13, 32].includes(N.keyCode) && H(N);
  }
  function $() {
    const N = [];
    return l.prepend !== void 0 && N.push(
      f("div", {
        class: "q-field__prepend q-field__marginal row no-wrap items-center",
        key: "prepend",
        onClick: ct
      }, l.prepend())
    ), N.push(
      f("div", {
        class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
      }, M())
    ), i.value === !0 && t.noErrorIcon === !1 && N.push(
      Q("error", [
        f(yt, { name: r.iconSet.field.error, color: "negative" })
      ])
    ), t.loading === !0 || e.innerLoading.value === !0 ? N.push(
      Q(
        "inner-loading-append",
        l.loading !== void 0 ? l.loading() : [f(nr, { color: t.color })]
      )
    ) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && N.push(
      Q("inner-clearable-append", [
        f(yt, {
          class: "q-field__focusable-action",
          name: t.clearIcon || r.iconSet.field.clear,
          tabindex: 0,
          role: "button",
          "aria-hidden": "false",
          "aria-label": r.lang.label.clear,
          onKeyup: E,
          onClick: H
        })
      ])
    ), l.append !== void 0 && N.push(
      f("div", {
        class: "q-field__append q-field__marginal row no-wrap items-center",
        key: "append",
        onClick: ct
      }, l.append())
    ), e.getInnerAppend !== void 0 && N.push(
      Q("inner-append", e.getInnerAppend())
    ), e.getControlChild !== void 0 && N.push(
      e.getControlChild()
    ), N;
  }
  function M() {
    const N = [];
    return t.prefix !== void 0 && t.prefix !== null && N.push(
      f("div", {
        class: "q-field__prefix no-pointer-events row items-center"
      }, t.prefix)
    ), e.getShadowControl !== void 0 && e.hasShadow.value === !0 && N.push(
      e.getShadowControl()
    ), e.getControl !== void 0 ? N.push(e.getControl()) : l.rawControl !== void 0 ? N.push(l.rawControl()) : l.control !== void 0 && N.push(
      f("div", {
        ref: e.targetRef,
        class: "q-field__native row",
        tabindex: -1,
        ...e.splitAttrs.attributes.value,
        "data-autofocus": t.autofocus === !0 || void 0
      }, l.control(y.value))
    ), O.value === !0 && N.push(
      f("div", {
        class: _.value
      }, We(l.label, t.label))
    ), t.suffix !== void 0 && t.suffix !== null && N.push(
      f("div", {
        class: "q-field__suffix no-pointer-events row items-center"
      }, t.suffix)
    ), N.concat(We(l.default));
  }
  function K() {
    let N, Z;
    i.value === !0 ? v.value !== null ? (N = [f("div", { role: "alert" }, v.value)], Z = `q--slot-error-${v.value}`) : (N = We(l.error), Z = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (N = [f("div", t.hint)], Z = `q--slot-hint-${t.hint}`) : (N = We(l.hint), Z = "q--slot-hint"));
    const de = t.counter === !0 || l.counter !== void 0;
    if (t.hideBottomSpace === !0 && de === !1 && N === void 0)
      return;
    const q = f("div", {
      key: Z,
      class: "q-field__messages col"
    }, N);
    return f("div", {
      class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
      onClick: ct
    }, [
      t.hideBottomSpace === !0 ? q : f(Mt, { name: "q-transition--field-message" }, () => q),
      de === !0 ? f("div", {
        class: "q-field__counter"
      }, l.counter !== void 0 ? l.counter() : e.computedCounter.value) : null
    ]);
  }
  function Q(N, Z) {
    return Z === null ? null : f("div", {
      key: N,
      class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
    }, Z);
  }
  let ne = !1;
  return _n(() => {
    ne = !0;
  }), wl(() => {
    ne === !0 && t.autofocus === !0 && a.focus();
  }), t.autofocus === !0 && jt(() => {
    a.focus();
  }), at(() => {
    u !== null && clearTimeout(u);
  }), Object.assign(a, { focus: A, blur: U }), function() {
    const Z = e.getControl === void 0 && l.control === void 0 ? {
      ...e.splitAttrs.attributes.value,
      "data-autofocus": t.autofocus === !0 || void 0,
      ...p.value
    } : p.value;
    return f(e.tag.value, {
      ref: e.rootRef,
      class: [
        h.value,
        o.class
      ],
      style: o.style,
      ...Z
    }, [
      l.before !== void 0 ? f("div", {
        class: "q-field__before q-field__marginal row no-wrap items-center",
        onClick: ct
      }, l.before()) : null,
      f("div", {
        class: "q-field__inner relative-position col self-stretch"
      }, [
        f("div", {
          ref: e.controlRef,
          class: P.value,
          tabindex: -1,
          ...e.controlEvents
        }, $()),
        b.value === !0 ? K() : null
      ]),
      l.after !== void 0 ? f("div", {
        class: "q-field__after q-field__marginal row no-wrap items-center",
        onClick: ct
      }, l.after()) : null
    ]);
  };
}
const ua = {
  date: "####/##/##",
  datetime: "####/##/## ##:##",
  time: "##:##",
  fulltime: "##:##:##",
  phone: "(###) ### - ####",
  card: "#### #### #### ####"
}, fl = {
  "#": { pattern: "[\\d]", negate: "[^\\d]" },
  S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" },
  N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" },
  A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() },
  X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() },
  x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }
}, Or = Object.keys(fl);
Or.forEach((e) => {
  fl[e].regex = new RegExp(fl[e].pattern);
});
const cs = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Or.join("") + "])|(.)", "g"), sa = /[.*+?^${}()|[\]\\]/g, Ke = "", ds = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [Boolean, String],
  unmaskedValue: Boolean
};
function fs(e, t, n, l) {
  let o, a, r, u, c, s;
  const i = J(null), v = J(g());
  function S() {
    return e.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  se(() => e.type + e.autogrow, x), se(() => e.mask, (D) => {
    if (D !== void 0)
      h(v.value, !0);
    else {
      const L = A(v.value);
      x(), e.modelValue !== L && t("update:modelValue", L);
    }
  }), se(() => e.fillMask + e.reverseFillMask, () => {
    i.value === !0 && h(v.value, !0);
  }), se(() => e.unmaskedValue, () => {
    i.value === !0 && h(v.value);
  });
  function g() {
    if (x(), i.value === !0) {
      const D = p(A(e.modelValue));
      return e.fillMask !== !1 ? U(D) : D;
    }
    return e.modelValue;
  }
  function b(D) {
    if (D < o.length)
      return o.slice(-D);
    let L = "", H = o;
    const E = H.indexOf(Ke);
    if (E !== -1) {
      for (let $ = D - H.length; $ > 0; $--)
        L += Ke;
      H = H.slice(0, E) + L + H.slice(E);
    }
    return H;
  }
  function x() {
    if (i.value = e.mask !== void 0 && e.mask.length !== 0 && S(), i.value === !1) {
      u = void 0, o = "", a = "";
      return;
    }
    const D = ua[e.mask] === void 0 ? e.mask : ua[e.mask], L = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", H = L.replace(sa, "\\$&"), E = [], $ = [], M = [];
    let K = e.reverseFillMask === !0, Q = "", ne = "";
    D.replace(cs, (q, C, G, ie, ve) => {
      if (ie !== void 0) {
        const j = fl[ie];
        M.push(j), ne = j.negate, K === !0 && ($.push("(?:" + ne + "+)?(" + j.pattern + "+)?(?:" + ne + "+)?(" + j.pattern + "+)?"), K = !1), $.push("(?:" + ne + "+)?(" + j.pattern + ")?");
      } else if (G !== void 0)
        Q = "\\" + (G === "\\" ? "" : G), M.push(G), E.push("([^" + Q + "]+)?" + Q + "?");
      else {
        const j = C !== void 0 ? C : ve;
        Q = j === "\\" ? "\\\\\\\\" : j.replace(sa, "\\\\$&"), M.push(j), E.push("([^" + Q + "]+)?" + Q + "?");
      }
    });
    const N = new RegExp(
      "^" + E.join("") + "(" + (Q === "" ? "." : "[^" + Q + "]") + "+)?" + (Q === "" ? "" : "[" + Q + "]*") + "$"
    ), Z = $.length - 1, de = $.map((q, C) => C === 0 && e.reverseFillMask === !0 ? new RegExp("^" + H + "*" + q) : C === Z ? new RegExp(
      "^" + q + "(" + (ne === "" ? "." : ne) + "+)?" + (e.reverseFillMask === !0 ? "$" : H + "*")
    ) : new RegExp("^" + q));
    r = M, u = (q) => {
      const C = N.exec(e.reverseFillMask === !0 ? q : q.slice(0, M.length + 1));
      C !== null && (q = C.slice(1).join(""));
      const G = [], ie = de.length;
      for (let ve = 0, j = q; ve < ie; ve++) {
        const X = de[ve].exec(j);
        if (X === null)
          break;
        j = j.slice(X.shift().length), G.push(...X);
      }
      return G.length !== 0 ? G.join("") : q;
    }, o = M.map((q) => typeof q == "string" ? q : Ke).join(""), a = o.split(Ke).join(L);
  }
  function h(D, L, H) {
    const E = l.value, $ = E.selectionEnd, M = E.value.length - $, K = A(D);
    L === !0 && x();
    const Q = p(K), ne = e.fillMask !== !1 ? U(Q) : Q, N = v.value !== ne;
    E.value !== ne && (E.value = ne), N === !0 && (v.value = ne), document.activeElement === E && Le(() => {
      if (ne === a) {
        const de = e.reverseFillMask === !0 ? a.length : 0;
        E.setSelectionRange(de, de, "forward");
        return;
      }
      if (H === "insertFromPaste" && e.reverseFillMask !== !0) {
        const de = E.selectionEnd;
        let q = $ - 1;
        for (let C = c; C <= q && C < de; C++)
          o[C] !== Ke && q++;
        O.right(E, q);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(H) !== -1) {
        const de = e.reverseFillMask === !0 ? $ === 0 ? ne.length > Q.length ? 1 : 0 : Math.max(0, ne.length - (ne === a ? 0 : Math.min(Q.length, M) + 1)) + 1 : $;
        E.setSelectionRange(de, de, "forward");
        return;
      }
      if (e.reverseFillMask === !0)
        if (N === !0) {
          const de = Math.max(0, ne.length - (ne === a ? 0 : Math.min(Q.length, M + 1)));
          de === 1 && $ === 1 ? E.setSelectionRange(de, de, "forward") : O.rightReverse(E, de);
        } else {
          const de = ne.length - M;
          E.setSelectionRange(de, de, "backward");
        }
      else if (N === !0) {
        const de = Math.max(0, o.indexOf(Ke), Math.min(Q.length, $) - 1);
        O.right(E, de);
      } else {
        const de = $ - 1;
        O.right(E, de);
      }
    });
    const Z = e.unmaskedValue === !0 ? A(ne) : ne;
    String(e.modelValue) !== Z && (e.modelValue !== null || Z !== "") && n(Z, !0);
  }
  function P(D, L, H) {
    const E = p(A(D.value));
    L = Math.max(0, o.indexOf(Ke), Math.min(E.length, L)), c = L, D.setSelectionRange(L, H, "forward");
  }
  const O = {
    left(D, L) {
      const H = o.slice(L - 1).indexOf(Ke) === -1;
      let E = Math.max(0, L - 1);
      for (; E >= 0; E--)
        if (o[E] === Ke) {
          L = E, H === !0 && L++;
          break;
        }
      if (E < 0 && o[L] !== void 0 && o[L] !== Ke)
        return O.right(D, 0);
      L >= 0 && D.setSelectionRange(L, L, "backward");
    },
    right(D, L) {
      const H = D.value.length;
      let E = Math.min(H, L + 1);
      for (; E <= H; E++)
        if (o[E] === Ke) {
          L = E;
          break;
        } else o[E - 1] === Ke && (L = E);
      if (E > H && o[L - 1] !== void 0 && o[L - 1] !== Ke)
        return O.left(D, H);
      D.setSelectionRange(L, L, "forward");
    },
    leftReverse(D, L) {
      const H = b(D.value.length);
      let E = Math.max(0, L - 1);
      for (; E >= 0; E--)
        if (H[E - 1] === Ke) {
          L = E;
          break;
        } else if (H[E] === Ke && (L = E, E === 0))
          break;
      if (E < 0 && H[L] !== void 0 && H[L] !== Ke)
        return O.rightReverse(D, 0);
      L >= 0 && D.setSelectionRange(L, L, "backward");
    },
    rightReverse(D, L) {
      const H = D.value.length, E = b(H), $ = E.slice(0, L + 1).indexOf(Ke) === -1;
      let M = Math.min(H, L + 1);
      for (; M <= H; M++)
        if (E[M - 1] === Ke) {
          L = M, L > 0 && $ === !0 && L--;
          break;
        }
      if (M > H && E[L - 1] !== void 0 && E[L - 1] !== Ke)
        return O.leftReverse(D, H);
      D.setSelectionRange(L, L, "forward");
    }
  };
  function _(D) {
    t("click", D), s = void 0;
  }
  function y(D) {
    if (t("keydown", D), po(D) === !0 || D.altKey === !0)
      return;
    const L = l.value, H = L.selectionStart, E = L.selectionEnd;
    if (D.shiftKey || (s = void 0), D.keyCode === 37 || D.keyCode === 39) {
      D.shiftKey && s === void 0 && (s = L.selectionDirection === "forward" ? H : E);
      const $ = O[(D.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === !0 ? "Reverse" : "")];
      if (D.preventDefault(), $(L, s === H ? E : H), D.shiftKey) {
        const M = L.selectionStart;
        L.setSelectionRange(Math.min(s, M), Math.max(s, M), "forward");
      }
    } else D.keyCode === 8 && e.reverseFillMask !== !0 && H === E ? (O.left(L, H), L.setSelectionRange(L.selectionStart, E, "backward")) : D.keyCode === 46 && e.reverseFillMask === !0 && H === E && (O.rightReverse(L, E), L.setSelectionRange(H, L.selectionEnd, "forward"));
  }
  function p(D) {
    if (D == null || D === "")
      return "";
    if (e.reverseFillMask === !0)
      return F(D);
    const L = r;
    let H = 0, E = "";
    for (let $ = 0; $ < L.length; $++) {
      const M = D[H], K = L[$];
      if (typeof K == "string")
        E += K, M === K && H++;
      else if (M !== void 0 && K.regex.test(M))
        E += K.transform !== void 0 ? K.transform(M) : M, H++;
      else
        return E;
    }
    return E;
  }
  function F(D) {
    const L = r, H = o.indexOf(Ke);
    let E = D.length - 1, $ = "";
    for (let M = L.length - 1; M >= 0 && E !== -1; M--) {
      const K = L[M];
      let Q = D[E];
      if (typeof K == "string")
        $ = K + $, Q === K && E--;
      else if (Q !== void 0 && K.regex.test(Q))
        do
          $ = (K.transform !== void 0 ? K.transform(Q) : Q) + $, E--, Q = D[E];
        while (H === M && Q !== void 0 && K.regex.test(Q));
      else
        return $;
    }
    return $;
  }
  function A(D) {
    return typeof D != "string" || u === void 0 ? typeof D == "number" ? u("" + D) : D : u(D);
  }
  function U(D) {
    return a.length - D.length <= 0 ? D : e.reverseFillMask === !0 && D.length !== 0 ? a.slice(0, -D.length) + D : D + a.slice(D.length);
  }
  return {
    innerValue: v,
    hasMask: i,
    moveCursorForPaste: P,
    updateMaskValue: h,
    onMaskedKeydown: y,
    onMaskedClick: _
  };
}
const En = {
  name: String
};
function Br(e) {
  return d(() => ({
    type: "hidden",
    name: e.name,
    value: e.modelValue
  }));
}
function _l(e = {}) {
  return (t, n, l) => {
    t[n](
      f("input", {
        class: "hidden" + (l || ""),
        ...e.value
      })
    );
  };
}
function Tr(e) {
  return d(() => e.name || e.for);
}
function vs(e, t) {
  function n() {
    const l = e.modelValue;
    try {
      const o = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(l) === l && ("length" in l ? Array.from(l) : [l]).forEach((a) => {
        o.items.add(a);
      }), {
        files: o.files
      };
    } catch {
      return {
        files: void 0
      };
    }
  }
  return d(() => {
    if (e.type === "file")
      return n();
  });
}
function Vr(e) {
  return function(n) {
    if (n.type === "compositionend" || n.type === "change") {
      if (n.target.qComposing !== !0) return;
      n.target.qComposing = !1, e(n);
    } else n.type === "compositionstart" && (n.target.qComposing = !0);
  };
}
const tn = Ce({
  name: "QInput",
  inheritAttrs: !1,
  props: {
    ...xl,
    ...ds,
    ...En,
    // override of useFieldProps > modelValue
    modelValue: [String, Number, FileList],
    shadowText: String,
    type: {
      type: String,
      default: "text"
    },
    debounce: [String, Number],
    autogrow: Boolean,
    // makes a textarea
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...ko,
    "paste",
    "change",
    "keydown",
    "click",
    "animationend"
  ],
  setup(e, { emit: t, attrs: n }) {
    const { proxy: l } = ke(), { $q: o } = l, a = {};
    let r = NaN, u, c, s = null, i;
    const v = J(null), S = Tr(e), {
      innerValue: g,
      hasMask: b,
      moveCursorForPaste: x,
      updateMaskValue: h,
      onMaskedKeydown: P,
      onMaskedClick: O
    } = fs(e, t, Q, v), _ = vs(
      e
    ), y = d(() => Nn(g.value)), p = Vr(M), F = xo({ changeEvent: !0 }), A = d(
      () => e.type === "textarea" || e.autogrow === !0
    ), U = d(
      () => A.value === !0 || ["text", "search", "url", "tel", "password"].includes(e.type)
    ), D = d(() => {
      const C = {
        ...F.splitAttrs.listeners.value,
        onInput: M,
        onPaste: $,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: N,
        onBlur: Z,
        onFocus: gt
      };
      return C.onCompositionstart = C.onCompositionupdate = C.onCompositionend = p, b.value === !0 && (C.onKeydown = P, C.onClick = O), e.autogrow === !0 && (C.onAnimationend = K), C;
    }), L = d(() => {
      const C = {
        tabindex: 0,
        "data-autofocus": e.autofocus === !0 || void 0,
        rows: e.type === "textarea" ? 6 : void 0,
        "aria-label": e.label,
        name: S.value,
        ...F.splitAttrs.attributes.value,
        id: F.targetUid.value,
        maxlength: e.maxlength,
        disabled: e.disable === !0,
        readonly: e.readonly === !0
      };
      return A.value === !1 && (C.type = e.type), e.autogrow === !0 && (C.rows = 1), C;
    });
    se(() => e.type, () => {
      v.value && (v.value.value = e.modelValue);
    }), se(() => e.modelValue, (C) => {
      if (b.value === !0) {
        if (c === !0 && (c = !1, String(C) === r))
          return;
        h(C);
      } else g.value !== C && (g.value = C, e.type === "number" && a.hasOwnProperty("value") === !0 && (u === !0 ? u = !1 : delete a.value));
      e.autogrow === !0 && Le(ne);
    }), se(() => e.autogrow, (C) => {
      C === !0 ? Le(ne) : v.value !== null && n.rows > 0 && (v.value.style.height = "auto");
    }), se(() => e.dense, () => {
      e.autogrow === !0 && Le(ne);
    });
    function H() {
      Kn(() => {
        const C = document.activeElement;
        v.value !== null && v.value !== C && (C === null || C.id !== F.targetUid.value) && v.value.focus({ preventScroll: !0 });
      });
    }
    function E() {
      v.value !== null && v.value.select();
    }
    function $(C) {
      if (b.value === !0 && e.reverseFillMask !== !0) {
        const G = C.target;
        x(G, G.selectionStart, G.selectionEnd);
      }
      t("paste", C);
    }
    function M(C) {
      if (!C || !C.target)
        return;
      if (e.type === "file") {
        t("update:modelValue", C.target.files);
        return;
      }
      const G = C.target.value;
      if (C.target.qComposing === !0) {
        a.value = G;
        return;
      }
      if (b.value === !0)
        h(G, !1, C.inputType);
      else if (Q(G), U.value === !0 && C.target === document.activeElement) {
        const { selectionStart: ie, selectionEnd: ve } = C.target;
        ie !== void 0 && ve !== void 0 && Le(() => {
          C.target === document.activeElement && G.indexOf(C.target.value) === 0 && C.target.setSelectionRange(ie, ve);
        });
      }
      e.autogrow === !0 && ne();
    }
    function K(C) {
      t("animationend", C), ne();
    }
    function Q(C, G) {
      i = () => {
        s = null, e.type !== "number" && a.hasOwnProperty("value") === !0 && delete a.value, e.modelValue !== C && r !== C && (r = C, G === !0 && (c = !0), t("update:modelValue", C), Le(() => {
          r === C && (r = NaN);
        })), i = void 0;
      }, e.type === "number" && (u = !0, a.value = C), e.debounce !== void 0 ? (s !== null && clearTimeout(s), a.value = C, s = setTimeout(i, e.debounce)) : i();
    }
    function ne() {
      requestAnimationFrame(() => {
        const C = v.value;
        if (C !== null) {
          const G = C.parentNode.style, { scrollTop: ie } = C, { overflowY: ve, maxHeight: j } = o.platform.is.firefox === !0 ? {} : window.getComputedStyle(C), X = ve !== void 0 && ve !== "scroll";
          X === !0 && (C.style.overflowY = "hidden"), G.marginBottom = C.scrollHeight - 1 + "px", C.style.height = "1px", C.style.height = C.scrollHeight + "px", X === !0 && (C.style.overflowY = parseInt(j, 10) < C.scrollHeight ? "auto" : "hidden"), G.marginBottom = "", C.scrollTop = ie;
        }
      });
    }
    function N(C) {
      p(C), s !== null && (clearTimeout(s), s = null), i !== void 0 && i(), t("change", C.target.value);
    }
    function Z(C) {
      C !== void 0 && gt(C), s !== null && (clearTimeout(s), s = null), i !== void 0 && i(), u = !1, c = !1, delete a.value, e.type !== "file" && setTimeout(() => {
        v.value !== null && (v.value.value = g.value !== void 0 ? g.value : "");
      });
    }
    function de() {
      return a.hasOwnProperty("value") === !0 ? a.value : g.value !== void 0 ? g.value : "";
    }
    at(() => {
      Z();
    }), jt(() => {
      e.autogrow === !0 && ne();
    }), Object.assign(F, {
      innerValue: g,
      fieldClass: d(
        () => `q-${A.value === !0 ? "textarea" : "input"}` + (e.autogrow === !0 ? " q-textarea--autogrow" : "")
      ),
      hasShadow: d(
        () => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0
      ),
      inputRef: v,
      emitValue: Q,
      hasValue: y,
      floatingLabel: d(
        () => y.value === !0 && (e.type !== "number" || isNaN(g.value) === !1) || Nn(e.displayValue)
      ),
      getControl: () => f(A.value === !0 ? "textarea" : "input", {
        ref: v,
        class: [
          "q-field__native q-placeholder",
          e.inputClass
        ],
        style: e.inputStyle,
        ...L.value,
        ...D.value,
        ...e.type !== "file" ? { value: de() } : _.value
      }),
      getShadowControl: () => f("div", {
        class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (A.value === !0 ? "" : " text-no-wrap")
      }, [
        f("span", { class: "invisible" }, de()),
        f("span", e.shadowText)
      ])
    });
    const q = _o(F);
    return Object.assign(l, {
      focus: H,
      select: E,
      getNativeElement: () => v.value
      // deprecated
    }), _t(l, "nativeEl", () => v.value), q;
  }
}), ms = Ce({
  name: "QField",
  inheritAttrs: !1,
  props: {
    ...xl,
    tag: {
      type: String,
      default: "label"
    }
  },
  emits: ko,
  setup() {
    return _o(
      xo({ tagProp: !0 })
    );
  }
}), hs = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
}, gs = Ce({
  name: "QChip",
  props: {
    ...rt,
    ...Cn,
    dense: Boolean,
    icon: String,
    iconRight: String,
    iconRemove: String,
    iconSelected: String,
    label: [String, Number],
    color: String,
    textColor: String,
    modelValue: {
      type: Boolean,
      default: !0
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    removeAriaLabel: String,
    tabindex: [String, Number],
    disable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: !0
    }
  },
  emits: ["update:modelValue", "update:selected", "remove", "click"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: l } } = ke(), o = it(e, l), a = qn(e, hs), r = d(() => e.selected === !0 || e.icon !== void 0), u = d(() => e.selected === !0 ? e.iconSelected || l.iconSet.chip.selected : e.icon), c = d(() => e.iconRemove || l.iconSet.chip.remove), s = d(
      () => e.disable === !1 && (e.clickable === !0 || e.selected !== null)
    ), i = d(() => {
      const h = e.outline === !0 && e.color || e.textColor;
      return "q-chip row inline no-wrap items-center" + (e.outline === !1 && e.color !== void 0 ? ` bg-${e.color}` : "") + (h ? ` text-${h} q-chip--colored` : "") + (e.disable === !0 ? " disabled" : "") + (e.dense === !0 ? " q-chip--dense" : "") + (e.outline === !0 ? " q-chip--outline" : "") + (e.selected === !0 ? " q-chip--selected" : "") + (s.value === !0 ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === !0 ? " q-chip--square" : "") + (o.value === !0 ? " q-chip--dark q-dark" : "");
    }), v = d(() => {
      const h = e.disable === !0 ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, P = {
        ...h,
        role: "button",
        "aria-hidden": "false",
        "aria-label": e.removeAriaLabel || l.lang.label.remove
      };
      return { chip: h, remove: P };
    });
    function S(h) {
      h.keyCode === 13 && g(h);
    }
    function g(h) {
      e.disable || (n("update:selected", !e.selected), n("click", h));
    }
    function b(h) {
      (h.keyCode === void 0 || h.keyCode === 13) && (Fe(h), e.disable === !1 && (n("update:modelValue", !1), n("remove")));
    }
    function x() {
      const h = [];
      s.value === !0 && h.push(
        f("div", { class: "q-focus-helper" })
      ), r.value === !0 && h.push(
        f(yt, {
          class: "q-chip__icon q-chip__icon--left",
          name: u.value
        })
      );
      const P = e.label !== void 0 ? [f("div", { class: "ellipsis" }, [e.label])] : void 0;
      return h.push(
        f("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, Ni(t.default, P))
      ), e.iconRight && h.push(
        f(yt, {
          class: "q-chip__icon q-chip__icon--right",
          name: e.iconRight
        })
      ), e.removable === !0 && h.push(
        f(yt, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: c.value,
          ...v.value.remove,
          onClick: b,
          onKeyup: b
        })
      ), h;
    }
    return () => {
      if (e.modelValue === !1) return;
      const h = {
        class: i.value,
        style: a.value
      };
      return s.value === !0 && Object.assign(
        h,
        v.value.chip,
        { onClick: g, onKeyup: S }
      ), zi(
        "div",
        h,
        x(),
        "ripple",
        e.ripple !== !1 && e.disable !== !0,
        () => [[ar, e.ripple]]
      );
    };
  }
}), bs = Ce({
  name: "QItem",
  props: {
    ...rt,
    ...uu,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: { $q: l } } = ke(), o = it(e, l), { hasLink: a, linkAttrs: r, linkClass: u, linkTag: c, navigateOnClick: s } = ur(), i = J(null), v = J(null), S = d(
      () => e.clickable === !0 || a.value === !0 || e.tag === "label"
    ), g = d(
      () => e.disable !== !0 && S.value === !0
    ), b = d(
      () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (o.value === !0 ? " q-item--dark" : "") + (a.value === !0 && e.active === null ? u.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (g.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : "")
    ), x = d(() => e.insetLevel === void 0 ? null : {
      ["padding" + (l.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
    });
    function h(_) {
      g.value === !0 && (v.value !== null && (_.qKeyEvent !== !0 && document.activeElement === i.value ? v.value.focus() : document.activeElement === v.value && i.value.focus()), s(_));
    }
    function P(_) {
      if (g.value === !0 && It(_, [13, 32]) === !0) {
        Fe(_), _.qKeyEvent = !0;
        const y = new MouseEvent("click", _);
        y.qKeyEvent = !0, i.value.dispatchEvent(y);
      }
      n("keyup", _);
    }
    function O() {
      const _ = Xa(t.default, []);
      return g.value === !0 && _.unshift(
        f("div", { class: "q-focus-helper", tabindex: -1, ref: v })
      ), _;
    }
    return () => {
      const _ = {
        ref: i,
        class: b.value,
        style: x.value,
        role: "listitem",
        onClick: h,
        onKeyup: P
      };
      return g.value === !0 ? (_.tabindex = e.tabindex || "0", Object.assign(_, r.value)) : S.value === !0 && (_["aria-disabled"] = "true"), f(
        c.value,
        _,
        O()
      );
    };
  }
}), ys = Ce({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(e, { slots: t }) {
    const n = d(
      () => `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : "")
    );
    return () => f("div", { class: n.value }, We(t.default));
  }
}), ps = Ce({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(e, { slots: t }) {
    const n = d(() => parseInt(e.lines, 10)), l = d(
      () => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : "")
    ), o = d(() => e.lines !== void 0 && n.value > 1 ? {
      overflow: "hidden",
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": n.value
    } : null);
    return () => f("div", {
      style: o.value,
      class: l.value
    }, We(t.default));
  }
});
function Ar() {
  if (window.getSelection !== void 0) {
    const e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), no.is.mobile !== !0 && e.addRange(document.createRange()));
  } else document.selection !== void 0 && document.selection.empty();
}
const ws = {
  /* SSR does not know about Element */
  target: {
    type: [Boolean, String, Element],
    default: !0
  },
  noParentEvent: Boolean
}, Dr = {
  ...ws,
  contextMenu: Boolean
};
function Lr({
  showing: e,
  avoidEmit: t,
  // required for QPopupProxy (true)
  configureAnchorEl: n
  // optional
}) {
  const { props: l, proxy: o, emit: a } = ke(), r = J(null);
  let u = null;
  function c(g) {
    return r.value === null ? !1 : g === void 0 || g.touches === void 0 || g.touches.length <= 1;
  }
  const s = {};
  n === void 0 && (Object.assign(s, {
    hide(g) {
      o.hide(g);
    },
    toggle(g) {
      o.toggle(g), g.qAnchorHandled = !0;
    },
    toggleKey(g) {
      It(g, 13) === !0 && s.toggle(g);
    },
    contextClick(g) {
      o.hide(g), ct(g), Le(() => {
        o.show(g), g.qAnchorHandled = !0;
      });
    },
    prevent: ct,
    mobileTouch(g) {
      if (s.mobileCleanup(g), c(g) !== !0)
        return;
      o.hide(g), r.value.classList.add("non-selectable");
      const b = g.target;
      nn(s, "anchor", [
        [b, "touchmove", "mobileCleanup", "passive"],
        [b, "touchend", "mobileCleanup", "passive"],
        [b, "touchcancel", "mobileCleanup", "passive"],
        [r.value, "contextmenu", "prevent", "notPassive"]
      ]), u = setTimeout(() => {
        u = null, o.show(g), g.qAnchorHandled = !0;
      }, 300);
    },
    mobileCleanup(g) {
      r.value.classList.remove("non-selectable"), u !== null && (clearTimeout(u), u = null), e.value === !0 && g !== void 0 && Ar();
    }
  }), n = function(g = l.contextMenu) {
    if (l.noParentEvent === !0 || r.value === null) return;
    let b;
    g === !0 ? o.$q.platform.is.mobile === !0 ? b = [
      [r.value, "touchstart", "mobileTouch", "passive"]
    ] : b = [
      [r.value, "mousedown", "hide", "passive"],
      [r.value, "contextmenu", "contextClick", "notPassive"]
    ] : b = [
      [r.value, "click", "toggle", "passive"],
      [r.value, "keyup", "toggleKey", "passive"]
    ], nn(s, "anchor", b);
  });
  function i() {
    Fn(s, "anchor");
  }
  function v(g) {
    for (r.value = g; r.value.classList.contains("q-anchor--skip"); )
      r.value = r.value.parentNode;
    n();
  }
  function S() {
    if (l.target === !1 || l.target === "" || o.$el.parentNode === null)
      r.value = null;
    else if (l.target === !0)
      v(o.$el.parentNode);
    else {
      let g = l.target;
      if (typeof l.target == "string")
        try {
          g = document.querySelector(l.target);
        } catch {
          g = void 0;
        }
      g != null ? (r.value = g.$el || g, n()) : (r.value = null, console.error(`Anchor: target "${l.target}" not found`));
    }
  }
  return se(() => l.contextMenu, (g) => {
    r.value !== null && (i(), n(g));
  }), se(() => l.target, () => {
    r.value !== null && i(), S();
  }), se(() => l.noParentEvent, (g) => {
    r.value !== null && (g === !0 ? i() : n());
  }), jt(() => {
    S(), t !== !0 && l.modelValue === !0 && r.value === null && a("update:modelValue", !1);
  }), at(() => {
    u !== null && clearTimeout(u), i();
  }), {
    anchorEl: r,
    canShow: c,
    anchorEvents: s
  };
}
function Ss(e, t) {
  const n = J(null);
  let l;
  function o(u, c) {
    const s = `${c !== void 0 ? "add" : "remove"}EventListener`, i = c !== void 0 ? c : l;
    u !== window && u[s]("scroll", i, Ze.passive), window[s]("scroll", i, Ze.passive), l = c;
  }
  function a() {
    n.value !== null && (o(n.value), n.value = null);
  }
  const r = se(() => e.noParentEvent, () => {
    n.value !== null && (a(), t());
  });
  return at(r), {
    localScrollTarget: n,
    unconfigureScrollTarget: a,
    changeScrollEvent: o
  };
}
const { notPassiveCapture: vl } = Ze, sn = [];
function ml(e) {
  const t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === !0)
    return;
  let n = pn.length - 1;
  for (; n >= 0; ) {
    const l = pn[n].$;
    if (l.type.name === "QTooltip") {
      n--;
      continue;
    }
    if (l.type.name !== "QDialog")
      break;
    if (l.props.seamless !== !0)
      return;
    n--;
  }
  for (let l = sn.length - 1; l >= 0; l--) {
    const o = sn[l];
    if ((o.anchorEl.value === null || o.anchorEl.value.contains(t) === !1) && (t === document.body || o.innerRef.value !== null && o.innerRef.value.contains(t) === !1))
      e.qClickOutside = !0, o.onClickOutside(e);
    else
      return;
  }
}
function ks(e) {
  sn.push(e), sn.length === 1 && (document.addEventListener("mousedown", ml, vl), document.addEventListener("touchstart", ml, vl));
}
function ca(e) {
  const t = sn.findIndex((n) => n === e);
  t !== -1 && (sn.splice(t, 1), sn.length === 0 && (document.removeEventListener("mousedown", ml, vl), document.removeEventListener("touchstart", ml, vl)));
}
let da, fa;
function va(e) {
  const t = e.split(" ");
  return t.length !== 2 ? !1 : ["top", "center", "bottom"].includes(t[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"), !1) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== !0 ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), !1) : !0;
}
function xs(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : !0;
}
const ao = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((e) => {
  ao[`${e}#ltr`] = e, ao[`${e}#rtl`] = e;
});
function ma(e, t) {
  const n = e.split(" ");
  return {
    vertical: n[0],
    horizontal: ao[`${n[1]}#${t === !0 ? "rtl" : "ltr"}`]
  };
}
function _s(e, t) {
  let { top: n, left: l, right: o, bottom: a, width: r, height: u } = e.getBoundingClientRect();
  return t !== void 0 && (n -= t[1], l -= t[0], a += t[1], o += t[0], r += t[0], u += t[1]), {
    top: n,
    bottom: a,
    height: u,
    left: l,
    right: o,
    width: r,
    middle: l + (o - l) / 2,
    center: n + (a - n) / 2
  };
}
function Cs(e, t, n) {
  let { top: l, left: o } = e.getBoundingClientRect();
  return l += t.top, o += t.left, n !== void 0 && (l += n[1], o += n[0]), {
    top: l,
    bottom: l + 1,
    height: 1,
    left: o,
    right: o + 1,
    width: 1,
    middle: o,
    center: l
  };
}
function qs(e, t) {
  return {
    top: 0,
    center: t / 2,
    bottom: t,
    left: 0,
    middle: e / 2,
    right: e
  };
}
function ha(e, t, n, l) {
  return {
    top: e[n.vertical] - t[l.vertical],
    left: e[n.horizontal] - t[l.horizontal]
  };
}
function Fr(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5)
    return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Fr(e, t + 1);
    }, 10);
    return;
  }
  const {
    targetEl: n,
    offset: l,
    anchorEl: o,
    anchorOrigin: a,
    selfOrigin: r,
    absoluteOffset: u,
    fit: c,
    cover: s,
    maxHeight: i,
    maxWidth: v
  } = e;
  if (tt.is.ios === !0 && window.visualViewport !== void 0) {
    const F = document.body.style, { offsetLeft: A, offsetTop: U } = window.visualViewport;
    A !== da && (F.setProperty("--q-pe-left", A + "px"), da = A), U !== fa && (F.setProperty("--q-pe-top", U + "px"), fa = U);
  }
  const { scrollLeft: S, scrollTop: g } = n, b = u === void 0 ? _s(o, s === !0 ? [0, 0] : l) : Cs(o, u, l);
  Object.assign(n.style, {
    top: 0,
    left: 0,
    minWidth: null,
    minHeight: null,
    maxWidth: v || "100vw",
    maxHeight: i || "100vh",
    visibility: "visible"
  });
  const { offsetWidth: x, offsetHeight: h } = n, { elWidth: P, elHeight: O } = c === !0 || s === !0 ? { elWidth: Math.max(b.width, x), elHeight: s === !0 ? Math.max(b.height, h) : h } : { elWidth: x, elHeight: h };
  let _ = { maxWidth: v, maxHeight: i };
  (c === !0 || s === !0) && (_.minWidth = b.width + "px", s === !0 && (_.minHeight = b.height + "px")), Object.assign(n.style, _);
  const y = qs(P, O);
  let p = ha(b, y, a, r);
  if (u === void 0 || l === void 0)
    Hl(p, b, y, a, r);
  else {
    const { top: F, left: A } = p;
    Hl(p, b, y, a, r);
    let U = !1;
    if (p.top !== F) {
      U = !0;
      const D = 2 * l[1];
      b.center = b.top -= D, b.bottom -= D + 2;
    }
    if (p.left !== A) {
      U = !0;
      const D = 2 * l[0];
      b.middle = b.left -= D, b.right -= D + 2;
    }
    U === !0 && (p = ha(b, y, a, r), Hl(p, b, y, a, r));
  }
  _ = {
    top: p.top + "px",
    left: p.left + "px"
  }, p.maxHeight !== void 0 && (_.maxHeight = p.maxHeight + "px", b.height > p.maxHeight && (_.minHeight = _.maxHeight)), p.maxWidth !== void 0 && (_.maxWidth = p.maxWidth + "px", b.width > p.maxWidth && (_.minWidth = _.maxWidth)), Object.assign(n.style, _), n.scrollTop !== g && (n.scrollTop = g), n.scrollLeft !== S && (n.scrollLeft = S);
}
function Hl(e, t, n, l, o) {
  const a = n.bottom, r = n.right, u = Vu(), c = window.innerHeight - u, s = document.body.clientWidth;
  if (e.top < 0 || e.top + a > c)
    if (o.vertical === "center")
      e.top = t[l.vertical] > c / 2 ? Math.max(0, c - a) : 0, e.maxHeight = Math.min(a, c);
    else if (t[l.vertical] > c / 2) {
      const i = Math.min(
        c,
        l.vertical === "center" ? t.center : l.vertical === o.vertical ? t.bottom : t.top
      );
      e.maxHeight = Math.min(a, i), e.top = Math.max(0, i - a);
    } else
      e.top = Math.max(
        0,
        l.vertical === "center" ? t.center : l.vertical === o.vertical ? t.top : t.bottom
      ), e.maxHeight = Math.min(a, c - e.top);
  if (e.left < 0 || e.left + r > s)
    if (e.maxWidth = Math.min(r, s), o.horizontal === "middle")
      e.left = t[l.horizontal] > s / 2 ? Math.max(0, s - r) : 0;
    else if (t[l.horizontal] > s / 2) {
      const i = Math.min(
        s,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.right : t.left
      );
      e.maxWidth = Math.min(r, i), e.left = Math.max(0, i - e.maxWidth);
    } else
      e.left = Math.max(
        0,
        l.horizontal === "middle" ? t.middle : l.horizontal === o.horizontal ? t.left : t.right
      ), e.maxWidth = Math.min(r, s - e.left);
}
const $r = Ce({
  name: "QMenu",
  inheritAttrs: !1,
  props: {
    ...Dr,
    ...mr,
    ...rt,
    ...br,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: va
    },
    self: {
      type: String,
      validator: va
    },
    offset: {
      type: Array,
      validator: xs
    },
    scrollTarget: kr,
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  emits: [
    ...hr,
    "click",
    "escapeKey"
  ],
  setup(e, { slots: t, emit: n, attrs: l }) {
    let o = null, a, r, u;
    const c = ke(), { proxy: s } = c, { $q: i } = s, v = J(null), S = J(!1), g = d(
      () => e.persistent !== !0 && e.noRouteDismiss !== !0
    ), b = it(e, i), { registerTick: x, removeTick: h } = vr(), { registerTimeout: P } = fr(), { transitionProps: O, transitionStyle: _ } = yr(e), { localScrollTarget: y, changeScrollEvent: p, unconfigureScrollTarget: F } = Ss(e, G), { anchorEl: A, canShow: U } = Lr({ showing: S }), { hide: D } = gr({
      showing: S,
      canShow: U,
      handleShow: de,
      handleHide: q,
      hideOnRouteChange: g,
      processOnMount: !0
    }), { showPortal: L, hidePortal: H, renderPortal: E } = Sr(c, v, ye, "menu"), $ = {
      anchorEl: A,
      innerRef: v,
      onClickOutside(z) {
        if (e.persistent !== !0 && S.value === !0)
          return D(z), // always prevent touch event
          (z.type === "touchstart" || z.target.classList.contains("q-dialog__backdrop")) && Fe(z), !0;
      }
    }, M = d(
      () => ma(
        e.anchor || (e.cover === !0 ? "center middle" : "bottom start"),
        i.lang.rtl
      )
    ), K = d(() => e.cover === !0 ? M.value : ma(e.self || "top start", i.lang.rtl)), Q = d(
      () => (e.square === !0 ? " q-menu--square" : "") + (b.value === !0 ? " q-menu--dark q-dark" : "")
    ), ne = d(() => e.autoClose === !0 ? { onClick: ie } : {}), N = d(
      () => S.value === !0 && e.persistent !== !0
    );
    se(N, (z) => {
      z === !0 ? (Cr(j), ks($)) : (dl(j), ca($));
    });
    function Z() {
      Kn(() => {
        let z = v.value;
        z && z.contains(document.activeElement) !== !0 && (z = z.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || z.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || z.querySelector("[autofocus], [data-autofocus]") || z, z.focus({ preventScroll: !0 }));
      });
    }
    function de(z) {
      if (o = e.noRefocus === !1 ? document.activeElement : null, Er(ve), L(), G(), a = void 0, z !== void 0 && (e.touchPosition || e.contextMenu)) {
        const qe = Sn(z);
        if (qe.left !== void 0) {
          const { top: pe, left: Pe } = A.value.getBoundingClientRect();
          a = { left: qe.left - Pe, top: qe.top - pe };
        }
      }
      r === void 0 && (r = se(
        () => i.screen.width + "|" + i.screen.height + "|" + e.self + "|" + e.anchor + "|" + i.lang.rtl,
        X
      )), e.noFocus !== !0 && document.activeElement.blur(), x(() => {
        X(), e.noFocus !== !0 && Z();
      }), P(() => {
        i.platform.is.ios === !0 && (u = e.autoClose, v.value.click()), X(), L(!0), n("show", z);
      }, e.transitionDuration);
    }
    function q(z) {
      h(), H(), C(!0), o !== null && // menu was hidden from code or ESC plugin
      (z === void 0 || z.qClickOutside !== !0) && (((z && z.type.indexOf("key") === 0 ? o.closest('[tabindex]:not([tabindex^="-"])') : void 0) || o).focus(), o = null), P(() => {
        H(!0), n("hide", z);
      }, e.transitionDuration);
    }
    function C(z) {
      a = void 0, r !== void 0 && (r(), r = void 0), (z === !0 || S.value === !0) && (lo(ve), F(), ca($), dl(j)), z !== !0 && (o = null);
    }
    function G() {
      (A.value !== null || e.scrollTarget !== void 0) && (y.value = xr(A.value, e.scrollTarget), p(y.value, X));
    }
    function ie(z) {
      u !== !0 ? (wr(s, z), n("click", z)) : u = !1;
    }
    function ve(z) {
      N.value === !0 && e.noFocus !== !0 && lr(v.value, z.target) !== !0 && Z();
    }
    function j(z) {
      n("escapeKey"), D(z);
    }
    function X() {
      Fr({
        targetEl: v.value,
        offset: e.offset,
        anchorEl: A.value,
        anchorOrigin: M.value,
        selfOrigin: K.value,
        absoluteOffset: a,
        fit: e.fit,
        cover: e.cover,
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth
      });
    }
    function ye() {
      return f(
        Mt,
        O.value,
        () => S.value === !0 ? f("div", {
          role: "menu",
          ...l,
          ref: v,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + Q.value,
            l.class
          ],
          style: [
            l.style,
            _.value
          ],
          ...ne.value
        }, We(t.default)) : null
      );
    }
    return at(C), Object.assign(s, { focus: Z, updatePosition: X }), E;
  }
});
let hl = !1;
{
  const e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, {
    width: "1px",
    height: "1px",
    overflow: "auto"
  });
  const t = document.createElement("div");
  Object.assign(t.style, {
    width: "1000px",
    height: "1px"
  }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, hl = e.scrollLeft >= 0, e.remove();
}
const Et = 1e3, Es = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
], Hr = Array.prototype.filter, Ms = window.getComputedStyle(document.body).overflowAnchor === void 0 ? or : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null)
      return;
    e._qOverflowAnimationFrame = void 0;
    const n = e.children || [];
    Hr.call(n, (o) => o.dataset && o.dataset.qVsAnchor !== void 0).forEach((o) => {
      delete o.dataset.qVsAnchor;
    });
    const l = n[t];
    l && l.dataset && (l.dataset.qVsAnchor = "");
  }));
};
function wn(e, t) {
  return e + t;
}
function Il(e, t, n, l, o, a, r, u) {
  const c = e === window ? document.scrollingElement || document.documentElement : e, s = o === !0 ? "offsetWidth" : "offsetHeight", i = {
    scrollStart: 0,
    scrollViewSize: -r - u,
    scrollMaxSize: 0,
    offsetStart: -r,
    offsetEnd: -u
  };
  if (o === !0 ? (e === window ? (i.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, i.scrollViewSize += document.documentElement.clientWidth) : (i.scrollStart = c.scrollLeft, i.scrollViewSize += c.clientWidth), i.scrollMaxSize = c.scrollWidth, a === !0 && (i.scrollStart = (hl === !0 ? i.scrollMaxSize - i.scrollViewSize : 0) - i.scrollStart)) : (e === window ? (i.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, i.scrollViewSize += document.documentElement.clientHeight) : (i.scrollStart = c.scrollTop, i.scrollViewSize += c.clientHeight), i.scrollMaxSize = c.scrollHeight), n !== null)
    for (let v = n.previousElementSibling; v !== null; v = v.previousElementSibling)
      v.classList.contains("q-virtual-scroll--skip") === !1 && (i.offsetStart += v[s]);
  if (l !== null)
    for (let v = l.nextElementSibling; v !== null; v = v.nextElementSibling)
      v.classList.contains("q-virtual-scroll--skip") === !1 && (i.offsetEnd += v[s]);
  if (t !== e) {
    const v = c.getBoundingClientRect(), S = t.getBoundingClientRect();
    o === !0 ? (i.offsetStart += S.left - v.left, i.offsetEnd -= S.width) : (i.offsetStart += S.top - v.top, i.offsetEnd -= S.height), e !== window && (i.offsetStart += i.scrollStart), i.offsetEnd += i.scrollMaxSize - i.offsetStart;
  }
  return i;
}
function ga(e, t, n, l) {
  t === "end" && (t = (e === window ? document.body : e)[n === !0 ? "scrollWidth" : "scrollHeight"]), e === window ? n === !0 ? (l === !0 && (t = (hl === !0 ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : n === !0 ? (l === !0 && (t = (hl === !0 ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function Bn(e, t, n, l) {
  if (n >= l)
    return 0;
  const o = t.length, a = Math.floor(n / Et), r = Math.floor((l - 1) / Et) + 1;
  let u = e.slice(a, r).reduce(wn, 0);
  return n % Et !== 0 && (u -= t.slice(a * Et, n).reduce(wn, 0)), l % Et !== 0 && l !== o && (u -= t.slice(l, r * Et).reduce(wn, 0)), u;
}
const Ir = {
  virtualScrollSliceSize: {
    type: [Number, String],
    default: 10
  },
  virtualScrollSliceRatioBefore: {
    type: [Number, String],
    default: 1
  },
  virtualScrollSliceRatioAfter: {
    type: [Number, String],
    default: 1
  },
  virtualScrollItemSize: {
    type: [Number, String],
    default: 24
  },
  virtualScrollStickySizeStart: {
    type: [Number, String],
    default: 0
  },
  virtualScrollStickySizeEnd: {
    type: [Number, String],
    default: 0
  },
  tableColspan: [Number, String]
}, jr = Object.keys(Ir), ro = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...Ir
};
function Nr({
  virtualScrollLength: e,
  getVirtualScrollTarget: t,
  getVirtualScrollEl: n,
  virtualScrollItemSizeComputed: l
  // optional
}) {
  const o = ke(), { props: a, emit: r, proxy: u } = o, { $q: c } = u;
  let s, i, v, S = [], g;
  const b = J(0), x = J(0), h = J({}), P = J(null), O = J(null), _ = J(null), y = J({ from: 0, to: 0 }), p = d(() => a.tableColspan !== void 0 ? a.tableColspan : 100);
  l === void 0 && (l = d(() => a.virtualScrollItemSize));
  const F = d(() => l.value + ";" + a.virtualScrollHorizontal), A = d(
    () => F.value + ";" + a.virtualScrollSliceRatioBefore + ";" + a.virtualScrollSliceRatioAfter
  );
  se(A, () => {
    Q();
  }), se(F, U);
  function U() {
    K(i, !0);
  }
  function D(q) {
    K(q === void 0 ? i : q);
  }
  function L(q, C) {
    const G = t();
    if (G == null || G.nodeType === 8)
      return;
    const ie = Il(
      G,
      n(),
      P.value,
      O.value,
      a.virtualScrollHorizontal,
      c.lang.rtl,
      a.virtualScrollStickySizeStart,
      a.virtualScrollStickySizeEnd
    );
    v !== ie.scrollViewSize && Q(ie.scrollViewSize), E(
      G,
      ie,
      Math.min(e.value - 1, Math.max(0, parseInt(q, 10) || 0)),
      0,
      Es.indexOf(C) !== -1 ? C : i !== -1 && q > i ? "end" : "start"
    );
  }
  function H() {
    const q = t();
    if (q == null || q.nodeType === 8)
      return;
    const C = Il(
      q,
      n(),
      P.value,
      O.value,
      a.virtualScrollHorizontal,
      c.lang.rtl,
      a.virtualScrollStickySizeStart,
      a.virtualScrollStickySizeEnd
    ), G = e.value - 1, ie = C.scrollMaxSize - C.offsetStart - C.offsetEnd - x.value;
    if (s === C.scrollStart)
      return;
    if (C.scrollMaxSize <= 0) {
      E(q, C, 0, 0);
      return;
    }
    v !== C.scrollViewSize && Q(C.scrollViewSize), $(y.value.from);
    const ve = Math.floor(C.scrollMaxSize - Math.max(C.scrollViewSize, C.offsetEnd) - Math.min(g[G], C.scrollViewSize / 2));
    if (ve > 0 && Math.ceil(C.scrollStart) >= ve) {
      E(
        q,
        C,
        G,
        C.scrollMaxSize - C.offsetEnd - S.reduce(wn, 0)
      );
      return;
    }
    let j = 0, X = C.scrollStart - C.offsetStart, ye = X;
    if (X <= ie && X + C.scrollViewSize >= b.value)
      X -= b.value, j = y.value.from, ye = X;
    else
      for (let z = 0; X >= S[z] && j < G; z++)
        X -= S[z], j += Et;
    for (; X > 0 && j < G; )
      X -= g[j], X > -C.scrollViewSize ? (j++, ye = X) : ye = g[j] + X;
    E(
      q,
      C,
      j,
      ye
    );
  }
  function E(q, C, G, ie, ve) {
    const j = typeof ve == "string" && ve.indexOf("-force") !== -1, X = j === !0 ? ve.replace("-force", "") : ve, ye = X !== void 0 ? X : "start";
    let z = Math.max(0, G - h.value[ye]), qe = z + h.value.total;
    qe > e.value && (qe = e.value, z = Math.max(0, qe - h.value.total)), s = C.scrollStart;
    const pe = z !== y.value.from || qe !== y.value.to;
    if (pe === !1 && X === void 0) {
      N(G);
      return;
    }
    const { activeElement: Pe } = document, Ne = _.value;
    pe === !0 && Ne !== null && Ne !== Pe && Ne.contains(Pe) === !0 && (Ne.addEventListener("focusout", M), setTimeout(() => {
      Ne !== null && Ne.removeEventListener("focusout", M);
    })), Ms(Ne, G - z);
    const ut = X !== void 0 ? g.slice(z, G).reduce(wn, 0) : 0;
    if (pe === !0) {
      const nt = qe >= y.value.from && z <= y.value.to ? y.value.to : qe;
      y.value = { from: z, to: nt }, b.value = Bn(S, g, 0, z), x.value = Bn(S, g, qe, e.value), requestAnimationFrame(() => {
        y.value.to !== qe && s === C.scrollStart && (y.value = { from: y.value.from, to: qe }, x.value = Bn(S, g, qe, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (s !== C.scrollStart)
        return;
      pe === !0 && $(z);
      const nt = g.slice(z, G).reduce(wn, 0), Qe = nt + C.offsetStart + b.value, $e = Qe + g[G];
      let Ct = Qe + ie;
      if (X !== void 0) {
        const Dt = nt - ut, dt = C.scrollStart + Dt;
        Ct = j !== !0 && dt < Qe && $e < dt + C.scrollViewSize ? dt : X === "end" ? $e - C.scrollViewSize : Qe - (X === "start" ? 0 : Math.round((C.scrollViewSize - g[G]) / 2));
      }
      s = Ct, ga(
        q,
        Ct,
        a.virtualScrollHorizontal,
        c.lang.rtl
      ), N(G);
    });
  }
  function $(q) {
    const C = _.value;
    if (C) {
      const G = Hr.call(
        C.children,
        (z) => z.classList && z.classList.contains("q-virtual-scroll--skip") === !1
      ), ie = G.length, ve = a.virtualScrollHorizontal === !0 ? (z) => z.getBoundingClientRect().width : (z) => z.offsetHeight;
      let j = q, X, ye;
      for (let z = 0; z < ie; ) {
        for (X = ve(G[z]), z++; z < ie && G[z].classList.contains("q-virtual-scroll--with-prev") === !0; )
          X += ve(G[z]), z++;
        ye = X - g[j], ye !== 0 && (g[j] += ye, S[Math.floor(j / Et)] += ye), j++;
      }
    }
  }
  function M() {
    _.value !== null && _.value !== void 0 && _.value.focus();
  }
  function K(q, C) {
    const G = 1 * l.value;
    (C === !0 || Array.isArray(g) === !1) && (g = []);
    const ie = g.length;
    g.length = e.value;
    for (let j = e.value - 1; j >= ie; j--)
      g[j] = G;
    const ve = Math.floor((e.value - 1) / Et);
    S = [];
    for (let j = 0; j <= ve; j++) {
      let X = 0;
      const ye = Math.min((j + 1) * Et, e.value);
      for (let z = j * Et; z < ye; z++)
        X += g[z];
      S.push(X);
    }
    i = -1, s = void 0, b.value = Bn(S, g, 0, y.value.from), x.value = Bn(S, g, y.value.to, e.value), q >= 0 ? ($(y.value.from), Le(() => {
      L(q);
    })) : Z();
  }
  function Q(q) {
    if (q === void 0 && typeof window < "u") {
      const X = t();
      X != null && X.nodeType !== 8 && (q = Il(
        X,
        n(),
        P.value,
        O.value,
        a.virtualScrollHorizontal,
        c.lang.rtl,
        a.virtualScrollStickySizeStart,
        a.virtualScrollStickySizeEnd
      ).scrollViewSize);
    }
    v = q;
    const C = parseFloat(a.virtualScrollSliceRatioBefore) || 0, G = parseFloat(a.virtualScrollSliceRatioAfter) || 0, ie = 1 + C + G, ve = q === void 0 || q <= 0 ? 1 : Math.ceil(q / l.value), j = Math.max(
      1,
      ve,
      Math.ceil((a.virtualScrollSliceSize > 0 ? a.virtualScrollSliceSize : 10) / ie)
    );
    h.value = {
      total: Math.ceil(j * ie),
      start: Math.ceil(j * C),
      center: Math.ceil(j * (0.5 + C)),
      end: Math.ceil(j * (1 + C)),
      view: ve
    };
  }
  function ne(q, C) {
    const G = a.virtualScrollHorizontal === !0 ? "width" : "height", ie = {
      ["--q-virtual-scroll-item-" + G]: l.value + "px"
    };
    return [
      q === "tbody" ? f(q, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: P
      }, [
        f("tr", [
          f("td", {
            style: { [G]: `${b.value}px`, ...ie },
            colspan: p.value
          })
        ])
      ]) : f(q, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: P,
        style: { [G]: `${b.value}px`, ...ie }
      }),
      f(q, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: _,
        tabindex: -1
      }, C.flat()),
      q === "tbody" ? f(q, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: O
      }, [
        f("tr", [
          f("td", {
            style: { [G]: `${x.value}px`, ...ie },
            colspan: p.value
          })
        ])
      ]) : f(q, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: O,
        style: { [G]: `${x.value}px`, ...ie }
      })
    ];
  }
  function N(q) {
    i !== q && (a.onVirtualScroll !== void 0 && r("virtualScroll", {
      index: q,
      from: y.value.from,
      to: y.value.to - 1,
      direction: q < i ? "decrease" : "increase",
      ref: u
    }), i = q);
  }
  Q();
  const Z = Rr(
    H,
    c.platform.is.ios === !0 ? 120 : 35
  );
  Yn(() => {
    Q();
  });
  let de = !1;
  return _n(() => {
    de = !0;
  }), wl(() => {
    if (de !== !0) return;
    const q = t();
    s !== void 0 && q !== void 0 && q !== null && q.nodeType !== 8 ? ga(
      q,
      s,
      a.virtualScrollHorizontal,
      c.lang.rtl
    ) : L(i);
  }), at(() => {
    Z.cancel();
  }), Object.assign(u, { scrollTo: L, reset: U, refresh: D }), {
    virtualScrollSliceRange: y,
    virtualScrollSliceSizeComputed: h,
    setVirtualScrollSize: Q,
    onVirtualScrollEvt: Z,
    localResetVirtualScroll: K,
    padVirtualScroll: ne,
    scrollTo: L,
    reset: U,
    refresh: D
  };
}
function Wt(e, t) {
  if (e === t)
    return !0;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    let n, l;
    if (e.constructor === Array) {
      if (n = e.length, n !== t.length)
        return !1;
      for (l = n; l-- !== 0; )
        if (Wt(e[l], t[l]) !== !0)
          return !1;
      return !0;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size)
        return !1;
      let a = e.entries();
      for (l = a.next(); l.done !== !0; ) {
        if (t.has(l.value[0]) !== !0)
          return !1;
        l = a.next();
      }
      for (a = e.entries(), l = a.next(); l.done !== !0; ) {
        if (Wt(l.value[1], t.get(l.value[0])) !== !0)
          return !1;
        l = a.next();
      }
      return !0;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size)
        return !1;
      const a = e.entries();
      for (l = a.next(); l.done !== !0; ) {
        if (t.has(l.value[0]) !== !0)
          return !1;
        l = a.next();
      }
      return !0;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (n = e.length, n !== t.length)
        return !1;
      for (l = n; l-- !== 0; )
        if (e[l] !== t[l])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const o = Object.keys(e).filter((a) => e[a] !== void 0);
    if (n = o.length, n !== Object.keys(t).filter((a) => t[a] !== void 0).length)
      return !1;
    for (l = n; l-- !== 0; ) {
      const a = o[l];
      if (Wt(e[a], t[a]) !== !0)
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function zr(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== !0;
}
function ba(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function io(e) {
  return typeof e == "number" && isFinite(e);
}
function Ps(e, t, n) {
  return n <= t ? t : Math.min(n, Math.max(t, e));
}
function ya(e, t, n) {
  if (n <= t)
    return t;
  const l = n - t + 1;
  let o = t + (e - t) % l;
  return o < t && (o = l + o), o === 0 ? 0 : o;
}
function xe(e, t = 2, n = "0") {
  if (e == null)
    return e;
  const l = "" + e;
  return l.length >= t ? l : new Array(t - l.length + 1).join(n) + l;
}
const pa = (e) => ["add", "add-unique", "toggle"].includes(e), Rs = ".*+?^${}()|[]\\", Os = Object.keys(xl), $n = Ce({
  name: "QSelect",
  inheritAttrs: !1,
  props: {
    ...ro,
    ...En,
    ...xl,
    // override of useFieldProps > modelValue
    modelValue: {
      required: !0
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: {
      type: Boolean,
      default: null
    },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    popupNoRouteDismiss: Boolean,
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: pa
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    autocomplete: String,
    transitionShow: {},
    transitionHide: {},
    transitionDuration: {},
    behavior: {
      type: String,
      validator: (e) => ["default", "menu", "dialog"].includes(e),
      default: "default"
    },
    // override of useVirtualScrollProps > virtualScrollItemSize (no default)
    virtualScrollItemSize: ro.virtualScrollItemSize.type,
    onNewValue: Function,
    onFilter: Function
  },
  emits: [
    ...ko,
    "add",
    "remove",
    "inputValue",
    "keyup",
    "keypress",
    "keydown",
    "popupShow",
    "popupHide",
    "filterAbort"
  ],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = ke(), { $q: o } = l, a = J(!1), r = J(!1), u = J(-1), c = J(""), s = J(!1), i = J(!1);
    let v = null, S = null, g, b, x, h = null, P, O, _, y;
    const p = J(null), F = J(null), A = J(null), U = J(null), D = J(null), L = Tr(e), H = Vr(le), E = d(() => Array.isArray(e.options) ? e.options.length : 0), $ = d(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === !0 ? 24 : 48 : e.virtualScrollItemSize), {
      virtualScrollSliceRange: M,
      virtualScrollSliceSizeComputed: K,
      localResetVirtualScroll: Q,
      padVirtualScroll: ne,
      onVirtualScrollEvt: N,
      scrollTo: Z,
      setVirtualScrollSize: de
    } = Nr({
      virtualScrollLength: E,
      getVirtualScrollTarget: Bt,
      getVirtualScrollEl: Ft,
      virtualScrollItemSizeComputed: $
    }), q = xo(), C = d(() => {
      const w = e.mapOptions === !0 && e.multiple !== !0, te = e.modelValue !== void 0 && (e.modelValue !== null || w === !0) ? e.multiple === !0 && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
      if (e.mapOptions === !0 && Array.isArray(e.options) === !0) {
        const ee = e.mapOptions === !0 && g !== void 0 ? g : [], me = te.map((Te) => ae(Te, ee));
        return e.modelValue === null && w === !0 ? me.filter((Te) => Te !== null) : me;
      }
      return te;
    }), G = d(() => {
      const w = {};
      return Os.forEach((te) => {
        const ee = e[te];
        ee !== void 0 && (w[te] = ee);
      }), w;
    }), ie = d(() => e.optionsDark === null ? q.isDark.value : e.optionsDark), ve = d(() => Nn(C.value)), j = d(() => {
      let w = "q-field__input q-placeholder col";
      return e.hideSelected === !0 || C.value.length === 0 ? [w, e.inputClass] : (w += " q-field__input--padding", e.inputClass === void 0 ? w : [w, e.inputClass]);
    }), X = d(
      () => (e.virtualScrollHorizontal === !0 ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")
    ), ye = d(() => E.value === 0), z = d(
      () => C.value.map((w) => He.value(w)).join(", ")
    ), qe = d(() => e.displayValue !== void 0 ? e.displayValue : z.value), pe = d(() => e.optionsHtml === !0 ? () => !0 : (w) => w != null && w.html === !0), Pe = d(() => e.displayValueHtml === !0 || e.displayValue === void 0 && (e.optionsHtml === !0 || C.value.some(pe.value))), Ne = d(() => q.focused.value === !0 ? e.tabindex : -1), ut = d(() => {
      const w = {
        tabindex: e.tabindex,
        role: "combobox",
        "aria-label": e.label,
        "aria-readonly": e.readonly === !0 ? "true" : "false",
        "aria-autocomplete": e.useInput === !0 ? "list" : "none",
        "aria-expanded": a.value === !0 ? "true" : "false",
        "aria-controls": `${q.targetUid.value}_lb`
      };
      return u.value >= 0 && (w["aria-activedescendant"] = `${q.targetUid.value}_${u.value}`), w;
    }), nt = d(() => ({
      id: `${q.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": e.multiple === !0 ? "true" : "false"
    })), Qe = d(() => C.value.map((w, te) => ({
      index: te,
      opt: w,
      html: pe.value(w),
      selected: !0,
      removeAtIndex: Rt,
      toggleOption: lt,
      tabindex: Ne.value
    }))), $e = d(() => {
      if (E.value === 0)
        return [];
      const { from: w, to: te } = M.value;
      return e.options.slice(w, te).map((ee, me) => {
        const Te = ht.value(ee) === !0, Be = Ee(ee) === !0, Ge = w + me, ze = {
          clickable: !0,
          active: Be,
          activeClass: dt.value,
          manualFocus: !0,
          focused: !1,
          disable: Te,
          tabindex: -1,
          dense: e.optionsDense,
          dark: ie.value,
          role: "option",
          "aria-selected": Be === !0 ? "true" : "false",
          id: `${q.targetUid.value}_${Ge}`,
          onClick: () => {
            lt(ee);
          }
        };
        return Te !== !0 && (u.value === Ge && (ze.focused = !0), o.platform.is.desktop === !0 && (ze.onMousemove = () => {
          a.value === !0 && V(Ge);
        })), {
          index: Ge,
          opt: ee,
          html: pe.value(ee),
          label: He.value(ee),
          selected: ze.active,
          focused: ze.focused,
          toggleOption: lt,
          setOptionIndex: V,
          itemProps: ze
        };
      });
    }), Ct = d(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : o.iconSet.arrow.dropdown), Dt = d(
      () => e.optionsCover === !1 && e.outlined !== !0 && e.standout !== !0 && e.borderless !== !0 && e.rounded !== !0
    ), dt = d(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), Ye = d(() => be(e.optionValue, "value")), He = d(() => be(e.optionLabel, "label")), ht = d(() => be(e.optionDisable, "disable")), wt = d(() => C.value.map((w) => Ye.value(w))), Lt = d(() => {
      const w = {
        onInput: le,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange: H,
        onKeydown: qt,
        onKeyup: Oe,
        onKeypress: Je,
        onFocus: Xe,
        onClick(te) {
          b === !0 && gt(te);
        }
      };
      return w.onCompositionstart = w.onCompositionupdate = w.onCompositionend = H, w;
    });
    se(C, (w) => {
      g = w, e.useInput === !0 && e.fillInput === !0 && e.multiple !== !0 && q.innerLoading.value !== !0 && (r.value !== !0 && a.value !== !0 || ve.value !== !0) && (x !== !0 && fn(), (r.value === !0 || a.value === !0) && fe(""));
    }, { immediate: !0 }), se(() => e.fillInput, fn), se(a, Rl), se(E, Bi);
    function St(w) {
      return e.emitValue === !0 ? Ye.value(w) : w;
    }
    function ft(w) {
      if (w !== -1 && w < C.value.length)
        if (e.multiple === !0) {
          const te = e.modelValue.slice();
          n("remove", { index: w, value: te.splice(w, 1)[0] }), n("update:modelValue", te);
        } else
          n("update:modelValue", null);
    }
    function Rt(w) {
      ft(w), q.focus();
    }
    function Ot(w, te) {
      const ee = St(w);
      if (e.multiple !== !0) {
        e.fillInput === !0 && ce(
          He.value(w),
          !0,
          !0
        ), n("update:modelValue", ee);
        return;
      }
      if (C.value.length === 0) {
        n("add", { index: 0, value: ee }), n("update:modelValue", e.multiple === !0 ? [ee] : ee);
        return;
      }
      if (te === !0 && Ee(w) === !0 || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
        return;
      const me = e.modelValue.slice();
      n("add", { index: me.length, value: ee }), me.push(ee), n("update:modelValue", me);
    }
    function lt(w, te) {
      if (q.editable.value !== !0 || w === void 0 || ht.value(w) === !0)
        return;
      const ee = Ye.value(w);
      if (e.multiple !== !0) {
        te !== !0 && (ce(
          e.fillInput === !0 ? He.value(w) : "",
          !0,
          !0
        ), Zt()), F.value !== null && F.value.focus(), (C.value.length === 0 || Wt(Ye.value(C.value[0]), ee) !== !0) && n("update:modelValue", e.emitValue === !0 ? ee : w);
        return;
      }
      if ((b !== !0 || s.value === !0) && q.focus(), Xe(), C.value.length === 0) {
        const Be = e.emitValue === !0 ? ee : w;
        n("add", { index: 0, value: Be }), n("update:modelValue", e.multiple === !0 ? [Be] : Be);
        return;
      }
      const me = e.modelValue.slice(), Te = wt.value.findIndex((Be) => Wt(Be, ee));
      if (Te !== -1)
        n("remove", { index: Te, value: me.splice(Te, 1)[0] });
      else {
        if (e.maxValues !== void 0 && me.length >= e.maxValues)
          return;
        const Be = e.emitValue === !0 ? ee : w;
        n("add", { index: me.length, value: Be }), me.push(Be);
      }
      n("update:modelValue", me);
    }
    function V(w) {
      if (o.platform.is.desktop !== !0) return;
      const te = w !== -1 && w < E.value ? w : -1;
      u.value !== te && (u.value = te);
    }
    function I(w = 1, te) {
      if (a.value === !0) {
        let ee = u.value;
        do
          ee = ya(
            ee + w,
            -1,
            E.value - 1
          );
        while (ee !== -1 && ee !== u.value && ht.value(e.options[ee]) === !0);
        u.value !== ee && (V(ee), Z(ee), te !== !0 && e.useInput === !0 && e.fillInput === !0 && re(
          ee >= 0 ? He.value(e.options[ee]) : P,
          !0
        ));
      }
    }
    function ae(w, te) {
      const ee = (me) => Wt(Ye.value(me), w);
      return e.options.find(ee) || te.find(ee) || w;
    }
    function be(w, te) {
      const ee = w !== void 0 ? w : te;
      return typeof ee == "function" ? ee : (me) => me !== null && typeof me == "object" && ee in me ? me[ee] : me;
    }
    function Ee(w) {
      const te = Ye.value(w);
      return wt.value.find((ee) => Wt(ee, te)) !== void 0;
    }
    function Xe(w) {
      e.useInput === !0 && F.value !== null && (w === void 0 || F.value === w.target && w.target.value === z.value) && F.value.select();
    }
    function ue(w) {
      It(w, 27) === !0 && a.value === !0 && (gt(w), Zt(), fn()), n("keyup", w);
    }
    function Oe(w) {
      const { value: te } = w.target;
      if (w.keyCode !== void 0) {
        ue(w);
        return;
      }
      if (w.target.value = "", v !== null && (clearTimeout(v), v = null), S !== null && (clearTimeout(S), S = null), fn(), typeof te == "string" && te.length !== 0) {
        const ee = te.toLocaleLowerCase(), me = (Be) => {
          const Ge = e.options.find((ze) => Be.value(ze).toLocaleLowerCase() === ee);
          return Ge === void 0 ? !1 : (C.value.indexOf(Ge) === -1 ? lt(Ge) : Zt(), !0);
        }, Te = (Be) => {
          me(Ye) !== !0 && (me(He) === !0 || Be === !0 || fe(te, !0, () => Te(!0)));
        };
        Te();
      } else
        q.clearValue(w);
    }
    function Je(w) {
      n("keypress", w);
    }
    function qt(w) {
      if (n("keydown", w), po(w) === !0)
        return;
      const te = c.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), ee = w.shiftKey !== !0 && e.multiple !== !0 && (u.value !== -1 || te === !0);
      if (w.keyCode === 27) {
        ct(w);
        return;
      }
      if (w.keyCode === 9 && ee === !1) {
        _e();
        return;
      }
      if (w.target === void 0 || w.target.id !== q.targetUid.value || q.editable.value !== !0) return;
      if (w.keyCode === 40 && q.innerLoading.value !== !0 && a.value === !1) {
        Fe(w), kt();
        return;
      }
      if (w.keyCode === 8 && (e.useChips === !0 || e.clearable === !0) && e.hideSelected !== !0 && c.value.length === 0) {
        e.multiple === !0 && Array.isArray(e.modelValue) === !0 ? ft(e.modelValue.length - 1) : e.multiple !== !0 && e.modelValue !== null && n("update:modelValue", null);
        return;
      }
      (w.keyCode === 35 || w.keyCode === 36) && (typeof c.value != "string" || c.value.length === 0) && (Fe(w), u.value = -1, I(w.keyCode === 36 ? 1 : -1, e.multiple)), (w.keyCode === 33 || w.keyCode === 34) && K.value !== void 0 && (Fe(w), u.value = Math.max(
        -1,
        Math.min(
          E.value,
          u.value + (w.keyCode === 33 ? -1 : 1) * K.value.view
        )
      ), I(w.keyCode === 33 ? 1 : -1, e.multiple)), (w.keyCode === 38 || w.keyCode === 40) && (Fe(w), I(w.keyCode === 38 ? -1 : 1, e.multiple));
      const me = E.value;
      if ((_ === void 0 || y < Date.now()) && (_ = ""), me > 0 && e.useInput !== !0 && w.key !== void 0 && w.key.length === 1 && w.altKey === !1 && w.ctrlKey === !1 && w.metaKey === !1 && (w.keyCode !== 32 || _.length !== 0)) {
        a.value !== !0 && kt(w);
        const Te = w.key.toLocaleLowerCase(), Be = _.length === 1 && _[0] === Te;
        y = Date.now() + 1500, Be === !1 && (Fe(w), _ += Te);
        const Ge = new RegExp("^" + _.split("").map((Ol) => Rs.indexOf(Ol) !== -1 ? "\\" + Ol : Ol).join(".*"), "i");
        let ze = u.value;
        if (Be === !0 || ze < 0 || Ge.test(He.value(e.options[ze])) !== !0)
          do
            ze = ya(ze + 1, -1, me - 1);
          while (ze !== u.value && (ht.value(e.options[ze]) === !0 || Ge.test(He.value(e.options[ze])) !== !0));
        u.value !== ze && Le(() => {
          V(ze), Z(ze), ze >= 0 && e.useInput === !0 && e.fillInput === !0 && re(He.value(e.options[ze]), !0);
        });
        return;
      }
      if (!(w.keyCode !== 13 && (w.keyCode !== 32 || e.useInput === !0 || _ !== "") && (w.keyCode !== 9 || ee === !1))) {
        if (w.keyCode !== 9 && Fe(w), u.value !== -1 && u.value < me) {
          lt(e.options[u.value]);
          return;
        }
        if (te === !0) {
          const Te = (Be, Ge) => {
            if (Ge) {
              if (pa(Ge) !== !0)
                return;
            } else
              Ge = e.newValueMode;
            if (ce("", e.multiple !== !0, !0), Be == null)
              return;
            (Ge === "toggle" ? lt : Ot)(Be, Ge === "add-unique"), e.multiple !== !0 && (F.value !== null && F.value.focus(), Zt());
          };
          if (e.onNewValue !== void 0 ? n("newValue", c.value, Te) : Te(c.value), e.multiple !== !0)
            return;
        }
        a.value === !0 ? _e() : q.innerLoading.value !== !0 && kt();
      }
    }
    function Ft() {
      return b === !0 ? D.value : A.value !== null && A.value.contentEl !== null ? A.value.contentEl : void 0;
    }
    function Bt() {
      return Ft();
    }
    function Jt() {
      return e.hideSelected === !0 ? [] : t["selected-item"] !== void 0 ? Qe.value.map((w) => t["selected-item"](w)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === !0 ? Qe.value.map((w, te) => f(gs, {
        key: "option-" + te,
        removable: q.editable.value === !0 && ht.value(w.opt) !== !0,
        dense: !0,
        textColor: e.color,
        tabindex: Ne.value,
        onRemove() {
          w.removeAtIndex(te);
        }
      }, () => f("span", {
        class: "ellipsis",
        [w.html === !0 ? "innerHTML" : "textContent"]: He.value(w.opt)
      }))) : [
        f("span", {
          [Pe.value === !0 ? "innerHTML" : "textContent"]: qe.value
        })
      ];
    }
    function Nt() {
      if (ye.value === !0)
        return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: c.value }) : void 0;
      const w = t.option !== void 0 ? t.option : (ee) => f(bs, {
        key: ee.index,
        ...ee.itemProps
      }, () => f(
        ys,
        () => f(
          ps,
          () => f("span", {
            [ee.html === !0 ? "innerHTML" : "textContent"]: ee.label
          })
        )
      ));
      let te = ne("div", $e.value.map(w));
      return t["before-options"] !== void 0 && (te = t["before-options"]().concat(te)), Vt(t["after-options"], te);
    }
    function T(w, te) {
      const ee = te === !0 ? { ...ut.value, ...q.splitAttrs.attributes.value } : void 0, me = {
        ref: te === !0 ? F : void 0,
        key: "i_t",
        class: j.value,
        style: e.inputStyle,
        value: c.value !== void 0 ? c.value : "",
        // required for Android in order to show ENTER key when in form
        type: "search",
        ...ee,
        id: te === !0 ? q.targetUid.value : void 0,
        maxlength: e.maxlength,
        autocomplete: e.autocomplete,
        "data-autofocus": w === !0 || e.autofocus === !0 || void 0,
        disabled: e.disable === !0,
        readonly: e.readonly === !0,
        ...Lt.value
      };
      return w !== !0 && b === !0 && (Array.isArray(me.class) === !0 ? me.class = [...me.class, "no-pointer-events"] : me.class += " no-pointer-events"), f("input", me);
    }
    function le(w) {
      v !== null && (clearTimeout(v), v = null), S !== null && (clearTimeout(S), S = null), !(w && w.target && w.target.qComposing === !0) && (re(w.target.value || ""), x = !0, P = c.value, q.focused.value !== !0 && (b !== !0 || s.value === !0) && q.focus(), e.onFilter !== void 0 && (v = setTimeout(() => {
        v = null, fe(c.value);
      }, e.inputDebounce)));
    }
    function re(w, te) {
      c.value !== w && (c.value = w, te === !0 || e.inputDebounce === 0 || e.inputDebounce === "0" ? n("inputValue", w) : S = setTimeout(() => {
        S = null, n("inputValue", w);
      }, e.inputDebounce));
    }
    function ce(w, te, ee) {
      x = ee !== !0, e.useInput === !0 && (re(w, !0), (te === !0 || ee !== !0) && (P = w), te !== !0 && fe(w));
    }
    function fe(w, te, ee) {
      if (e.onFilter === void 0 || te !== !0 && q.focused.value !== !0)
        return;
      q.innerLoading.value === !0 ? n("filterAbort") : (q.innerLoading.value = !0, i.value = !0), w !== "" && e.multiple !== !0 && C.value.length !== 0 && x !== !0 && w === He.value(C.value[0]) && (w = "");
      const me = setTimeout(() => {
        a.value === !0 && (a.value = !1);
      }, 10);
      h !== null && clearTimeout(h), h = me, n(
        "filter",
        w,
        (Te, Be) => {
          (te === !0 || q.focused.value === !0) && h === me && (clearTimeout(h), typeof Te == "function" && Te(), i.value = !1, Le(() => {
            q.innerLoading.value = !1, q.editable.value === !0 && (te === !0 ? a.value === !0 && Zt() : a.value === !0 ? Rl(!0) : a.value = !0), typeof Be == "function" && Le(() => {
              Be(l);
            }), typeof ee == "function" && Le(() => {
              ee(l);
            });
          }));
        },
        () => {
          q.focused.value === !0 && h === me && (clearTimeout(h), q.innerLoading.value = !1, i.value = !1), a.value === !0 && (a.value = !1);
        }
      );
    }
    function Ve() {
      return f($r, {
        ref: A,
        class: X.value,
        style: e.popupContentStyle,
        modelValue: a.value,
        fit: e.menuShrink !== !0,
        cover: e.optionsCover === !0 && ye.value !== !0 && e.useInput !== !0,
        anchor: e.menuAnchor,
        self: e.menuSelf,
        offset: e.menuOffset,
        dark: ie.value,
        noParentEvent: !0,
        noRefocus: !0,
        noFocus: !0,
        noRouteDismiss: e.popupNoRouteDismiss,
        square: Dt.value,
        transitionShow: e.transitionShow,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        separateClosePopup: !0,
        ...nt.value,
        onScrollPassive: N,
        onBeforeShow: To,
        onBeforeHide: m,
        onShow: k
      }, Nt);
    }
    function m(w) {
      Vo(w), _e();
    }
    function k() {
      de();
    }
    function R(w) {
      gt(w), F.value !== null && F.value.focus(), s.value = !0, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function Y(w) {
      gt(w), Le(() => {
        s.value = !1;
      });
    }
    function W() {
      const w = [
        f(ms, {
          class: `col-auto ${q.fieldClass.value}`,
          ...G.value,
          for: q.targetUid.value,
          dark: ie.value,
          square: !0,
          loading: i.value,
          itemAligned: !1,
          filled: !0,
          stackLabel: c.value.length !== 0,
          ...q.splitAttrs.listeners.value,
          onFocus: R,
          onBlur: Y
        }, {
          ...t,
          rawControl: () => q.getControl(!0),
          before: void 0,
          after: void 0
        })
      ];
      return a.value === !0 && w.push(
        f("div", {
          ref: D,
          class: X.value + " scroll",
          style: e.popupContentStyle,
          ...nt.value,
          onClick: ct,
          onScrollPassive: N
        }, Nt())
      ), f(kl, {
        ref: U,
        modelValue: r.value,
        position: e.useInput === !0 ? "top" : void 0,
        transitionShow: O,
        transitionHide: e.transitionHide,
        transitionDuration: e.transitionDuration,
        noRouteDismiss: e.popupNoRouteDismiss,
        onBeforeShow: To,
        onBeforeHide: we,
        onHide: oe,
        onShow: he
      }, () => f("div", {
        class: "q-select__dialog" + (ie.value === !0 ? " q-select__dialog--dark q-dark" : "") + (s.value === !0 ? " q-select__dialog--focused" : "")
      }, w));
    }
    function we(w) {
      Vo(w), U.value !== null && U.value.__updateRefocusTarget(
        q.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
      ), q.focused.value = !1;
    }
    function oe(w) {
      Zt(), q.focused.value === !1 && n("blur", w), fn();
    }
    function he() {
      const w = document.activeElement;
      (w === null || w.id !== q.targetUid.value) && F.value !== null && F.value !== w && F.value.focus(), de();
    }
    function _e() {
      r.value !== !0 && (u.value = -1, a.value === !0 && (a.value = !1), q.focused.value === !1 && (h !== null && (clearTimeout(h), h = null), q.innerLoading.value === !0 && (n("filterAbort"), q.innerLoading.value = !1, i.value = !1)));
    }
    function kt(w) {
      q.editable.value === !0 && (b === !0 ? (q.onControlFocusin(w), r.value = !0, Le(() => {
        q.focus();
      })) : q.focus(), e.onFilter !== void 0 ? fe(c.value) : (ye.value !== !0 || t["no-option"] !== void 0) && (a.value = !0));
    }
    function Zt() {
      r.value = !1, _e();
    }
    function fn() {
      e.useInput === !0 && ce(
        e.multiple !== !0 && e.fillInput === !0 && C.value.length !== 0 && He.value(C.value[0]) || "",
        !0,
        !0
      );
    }
    function Rl(w) {
      let te = -1;
      if (w === !0) {
        if (C.value.length !== 0) {
          const ee = Ye.value(C.value[0]);
          te = e.options.findIndex((me) => Wt(Ye.value(me), ee));
        }
        Q(te);
      }
      V(te);
    }
    function Bi(w, te) {
      a.value === !0 && q.innerLoading.value === !1 && (Q(-1, !0), Le(() => {
        a.value === !0 && q.innerLoading.value === !1 && (w > te ? Q() : Rl(!0));
      }));
    }
    function Bo() {
      r.value === !1 && A.value !== null && A.value.updatePosition();
    }
    function To(w) {
      w !== void 0 && gt(w), n("popupShow", w), q.hasPopupOpen = !0, q.onControlFocusin(w);
    }
    function Vo(w) {
      w !== void 0 && gt(w), n("popupHide", w), q.hasPopupOpen = !1, q.onControlFocusout(w);
    }
    function Ao() {
      b = o.platform.is.mobile !== !0 && e.behavior !== "dialog" ? !1 : e.behavior !== "menu" && (e.useInput === !0 ? t["no-option"] !== void 0 || e.onFilter !== void 0 || ye.value === !1 : !0), O = o.platform.is.ios === !0 && b === !0 && e.useInput === !0 ? "fade" : e.transitionShow;
    }
    return Wa(Ao), Li(Bo), Ao(), at(() => {
      v !== null && clearTimeout(v), S !== null && clearTimeout(S);
    }), Object.assign(l, {
      showPopup: kt,
      hidePopup: Zt,
      removeAtIndex: ft,
      add: Ot,
      toggleOption: lt,
      getOptionIndex: () => u.value,
      setOptionIndex: V,
      moveOptionSelection: I,
      filter: fe,
      updateMenuPosition: Bo,
      updateInputValue: ce,
      isOptionSelected: Ee,
      getEmittingOptionValue: St,
      isOptionDisabled: (...w) => ht.value.apply(null, w) === !0,
      getOptionValue: (...w) => Ye.value.apply(null, w),
      getOptionLabel: (...w) => He.value.apply(null, w)
    }), Object.assign(q, {
      innerValue: C,
      fieldClass: d(
        () => `q-select q-field--auto-height q-select--with${e.useInput !== !0 ? "out" : ""}-input q-select--with${e.useChips !== !0 ? "out" : ""}-chips q-select--${e.multiple === !0 ? "multiple" : "single"}`
      ),
      inputRef: p,
      targetRef: F,
      hasValue: ve,
      showPopup: kt,
      floatingLabel: d(
        () => e.hideSelected !== !0 && ve.value === !0 || typeof c.value == "number" || c.value.length !== 0 || Nn(e.displayValue)
      ),
      getControlChild: () => {
        if (q.editable.value !== !1 && (r.value === !0 || ye.value !== !0 || t["no-option"] !== void 0))
          return b === !0 ? W() : Ve();
        q.hasPopupOpen === !0 && (q.hasPopupOpen = !1);
      },
      controlEvents: {
        onFocusin(w) {
          q.onControlFocusin(w);
        },
        onFocusout(w) {
          q.onControlFocusout(w, () => {
            fn(), _e();
          });
        },
        onClick(w) {
          if (ct(w), b !== !0 && a.value === !0) {
            _e(), F.value !== null && F.value.focus();
            return;
          }
          kt(w);
        }
      },
      getControl: (w) => {
        const te = Jt(), ee = w === !0 || r.value !== !0 || b !== !0;
        if (e.useInput === !0)
          te.push(T(w, ee));
        else if (q.editable.value === !0) {
          const Te = ee === !0 ? ut.value : void 0;
          te.push(
            f("input", {
              ref: ee === !0 ? F : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: ee === !0 ? q.targetUid.value : void 0,
              value: qe.value,
              readonly: !0,
              "data-autofocus": w === !0 || e.autofocus === !0 || void 0,
              ...Te,
              onKeydown: qt,
              onKeyup: ue,
              onKeypress: Je
            })
          ), ee === !0 && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && te.push(
            f("input", {
              class: "q-select__autocomplete-input",
              autocomplete: e.autocomplete,
              tabindex: -1,
              onKeyup: Oe
            })
          );
        }
        if (L.value !== void 0 && e.disable !== !0 && wt.value.length !== 0) {
          const Te = wt.value.map((Be) => f("option", { value: Be, selected: !0 }));
          te.push(
            f("select", {
              class: "hidden",
              name: L.value,
              multiple: e.multiple
            }, Te)
          );
        }
        const me = e.useInput === !0 || ee !== !0 ? void 0 : q.splitAttrs.attributes.value;
        return f("div", {
          class: "q-field__native row items-center",
          ...me,
          ...q.splitAttrs.listeners.value
        }, te);
      },
      getInnerAppend: () => e.loading !== !0 && i.value !== !0 && e.hideDropdownIcon !== !0 ? [
        f(yt, {
          class: "q-select__dropdown-icon" + (a.value === !0 ? " rotate-180" : ""),
          name: Ct.value
        })
      ] : null
    }), _o(q);
  }
});
function nl(e, t) {
  return [!0, !1].includes(e) ? e : t;
}
const Bs = Ce({
  name: "QPagination",
  props: {
    ...rt,
    modelValue: {
      type: Number,
      required: !0
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      required: !0
    },
    maxPages: {
      type: [Number, String],
      default: 0,
      validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0
    },
    inputStyle: [Array, String, Object],
    inputClass: [Array, String, Object],
    size: String,
    disable: Boolean,
    input: Boolean,
    iconPrev: String,
    iconNext: String,
    iconFirst: String,
    iconLast: String,
    toFn: Function,
    boundaryLinks: {
      type: Boolean,
      default: null
    },
    boundaryNumbers: {
      type: Boolean,
      default: null
    },
    directionLinks: {
      type: Boolean,
      default: null
    },
    ellipses: {
      type: Boolean,
      default: null
    },
    ripple: {
      type: [Boolean, Object],
      default: null
    },
    round: Boolean,
    rounded: Boolean,
    flat: Boolean,
    outline: Boolean,
    unelevated: Boolean,
    push: Boolean,
    glossy: Boolean,
    color: {
      type: String,
      default: "primary"
    },
    textColor: String,
    activeDesign: {
      type: String,
      default: "",
      values: (e) => e === "" || sr.includes(e)
    },
    activeColor: String,
    activeTextColor: String,
    gutter: String,
    padding: {
      type: String,
      default: "3px 2px"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const { proxy: n } = ke(), { $q: l } = n, o = it(e, l), a = d(() => parseInt(e.min, 10)), r = d(() => parseInt(e.max, 10)), u = d(() => parseInt(e.maxPages, 10)), c = d(() => b.value + " / " + r.value), s = d(() => nl(e.boundaryLinks, e.input)), i = d(() => nl(e.boundaryNumbers, !e.input)), v = d(() => nl(e.directionLinks, e.input)), S = d(() => nl(e.ellipses, !e.input)), g = J(null), b = d({
      get: () => e.modelValue,
      set: ($) => {
        if ($ = parseInt($, 10), e.disable || isNaN($))
          return;
        const M = Ps($, a.value, r.value);
        e.modelValue !== M && t("update:modelValue", M);
      }
    });
    se(() => `${a.value}|${r.value}`, () => {
      b.value = e.modelValue;
    });
    const x = d(
      () => "q-pagination row no-wrap items-center" + (e.disable === !0 ? " disabled" : "")
    ), h = d(() => e.gutter in cl ? `${cl[e.gutter]}px` : e.gutter || null), P = d(() => h.value !== null ? `--q-pagination-gutter-parent:-${h.value};--q-pagination-gutter-child:${h.value}` : null), O = d(() => {
      const $ = [
        e.iconFirst || l.iconSet.pagination.first,
        e.iconPrev || l.iconSet.pagination.prev,
        e.iconNext || l.iconSet.pagination.next,
        e.iconLast || l.iconSet.pagination.last
      ];
      return l.lang.rtl === !0 ? $.reverse() : $;
    }), _ = d(() => ({
      "aria-disabled": e.disable === !0 ? "true" : "false",
      role: "navigation"
    })), y = d(() => cr(e, "flat")), p = d(() => ({
      [y.value]: !0,
      round: e.round,
      rounded: e.rounded,
      padding: e.padding,
      color: e.color,
      textColor: e.textColor,
      size: e.size,
      ripple: e.ripple !== null ? e.ripple : !0
    })), F = d(() => {
      const $ = { [y.value]: !1 };
      return e.activeDesign !== "" && ($[e.activeDesign] = !0), $;
    }), A = d(() => ({
      ...F.value,
      color: e.activeColor || e.color,
      textColor: e.activeTextColor || e.textColor
    })), U = d(() => {
      let $ = Math.max(
        u.value,
        1 + (S.value ? 2 : 0) + (i.value ? 2 : 0)
      );
      const M = {
        pgFrom: a.value,
        pgTo: r.value,
        ellipsesStart: !1,
        ellipsesEnd: !1,
        boundaryStart: !1,
        boundaryEnd: !1,
        marginalStyle: {
          minWidth: `${Math.max(2, String(r.value).length)}em`
        }
      };
      return u.value && $ < r.value - a.value + 1 && ($ = 1 + Math.floor($ / 2) * 2, M.pgFrom = Math.max(a.value, Math.min(r.value - $ + 1, e.modelValue - Math.floor($ / 2))), M.pgTo = Math.min(r.value, M.pgFrom + $ - 1), i.value && (M.boundaryStart = !0, M.pgFrom++), S.value && M.pgFrom > a.value + (i.value ? 1 : 0) && (M.ellipsesStart = !0, M.pgFrom++), i.value && (M.boundaryEnd = !0, M.pgTo--), S.value && M.pgTo < r.value - (i.value ? 1 : 0) && (M.ellipsesEnd = !0, M.pgTo--)), M;
    });
    function D($) {
      b.value = $;
    }
    function L($) {
      b.value = b.value + $;
    }
    const H = d(() => {
      function $() {
        b.value = g.value, g.value = null;
      }
      return {
        "onUpdate:modelValue": (M) => {
          g.value = M;
        },
        onKeyup: (M) => {
          It(M, 13) === !0 && $();
        },
        onBlur: $
      };
    });
    function E($, M, K) {
      const Q = {
        "aria-label": M,
        "aria-current": "false",
        ...p.value,
        ...$
      };
      return K === !0 && Object.assign(Q, {
        "aria-current": "true",
        ...A.value
      }), M !== void 0 && (e.toFn !== void 0 ? Q.to = e.toFn(M) : Q.onClick = () => {
        D(M);
      }), f(Re, Q);
    }
    return Object.assign(n, { set: D, setByOffset: L }), () => {
      const $ = [], M = [];
      let K;
      if (s.value === !0 && ($.push(
        E({
          key: "bls",
          disable: e.disable || e.modelValue <= a.value,
          icon: O.value[0]
        }, a.value)
      ), M.unshift(
        E({
          key: "ble",
          disable: e.disable || e.modelValue >= r.value,
          icon: O.value[3]
        }, r.value)
      )), v.value === !0 && ($.push(
        E({
          key: "bdp",
          disable: e.disable || e.modelValue <= a.value,
          icon: O.value[1]
        }, e.modelValue - 1)
      ), M.unshift(
        E({
          key: "bdn",
          disable: e.disable || e.modelValue >= r.value,
          icon: O.value[2]
        }, e.modelValue + 1)
      )), e.input !== !0) {
        K = [];
        const { pgFrom: Q, pgTo: ne, marginalStyle: N } = U.value;
        if (U.value.boundaryStart === !0) {
          const Z = a.value === e.modelValue;
          $.push(
            E({
              key: "bns",
              style: N,
              disable: e.disable,
              label: a.value
            }, a.value, Z)
          );
        }
        if (U.value.boundaryEnd === !0) {
          const Z = r.value === e.modelValue;
          M.unshift(
            E({
              key: "bne",
              style: N,
              disable: e.disable,
              label: r.value
            }, r.value, Z)
          );
        }
        U.value.ellipsesStart === !0 && $.push(
          E({
            key: "bes",
            style: N,
            disable: e.disable,
            label: "…",
            ripple: !1
          }, Q - 1)
        ), U.value.ellipsesEnd === !0 && M.unshift(
          E({
            key: "bee",
            style: N,
            disable: e.disable,
            label: "…",
            ripple: !1
          }, ne + 1)
        );
        for (let Z = Q; Z <= ne; Z++)
          K.push(
            E({
              key: `bpg${Z}`,
              style: N,
              disable: e.disable,
              label: Z
            }, Z, Z === e.modelValue)
          );
      }
      return f("div", {
        class: x.value,
        ..._.value
      }, [
        f("div", {
          class: "q-pagination__content row no-wrap items-center",
          style: P.value
        }, [
          ...$,
          e.input === !0 ? f(tn, {
            class: "inline",
            style: { width: `${c.value.length / 1.5}em` },
            type: "number",
            dense: !0,
            value: g.value,
            disable: e.disable,
            dark: o.value,
            borderless: !0,
            inputClass: e.inputClass,
            inputStyle: e.inputStyle,
            placeholder: c.value,
            min: a.value,
            max: r.value,
            ...H.value
          }) : f("div", {
            class: "q-pagination__middle row justify-center"
          }, K),
          ...M
        ])
      ]);
    };
  }
}), Ts = Ce({
  name: "QTh",
  props: {
    props: Object,
    autoWidth: Boolean
  },
  emits: ["click"],
  setup(e, { slots: t, emit: n }) {
    const l = ke(), { proxy: { $q: o } } = l, a = (r) => {
      n("click", r);
    };
    return () => {
      if (e.props === void 0)
        return f("th", {
          class: e.autoWidth === !0 ? "q-table--col-auto-width" : "",
          onClick: a
        }, We(t.default));
      let r, u;
      const c = l.vnode.key;
      if (c) {
        if (r = e.props.colsMap[c], r === void 0) return;
      } else
        r = e.props.col;
      if (r.sortable === !0) {
        const i = r.align === "right" ? "unshift" : "push";
        u = Xa(t.default, []), u[i](
          f(yt, {
            class: r.__iconClass,
            name: o.iconSet.table.arrowUp
          })
        );
      } else
        u = We(t.default);
      const s = {
        class: r.__thClass + (e.autoWidth === !0 ? " q-table--col-auto-width" : ""),
        style: r.headerStyle,
        onClick: (i) => {
          r.sortable === !0 && e.props.sort(r), a(i);
        }
      };
      return f("th", s, u);
    };
  }
}), Vs = ["ul", "ol"], As = Ce({
  name: "QList",
  props: {
    ...rt,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, { slots: t }) {
    const n = ke(), l = it(e, n.proxy.$q), o = d(
      () => Vs.includes(e.tag) ? null : "list"
    ), a = d(
      () => "q-list" + (e.bordered === !0 ? " q-list--bordered" : "") + (e.dense === !0 ? " q-list--dense" : "") + (e.separator === !0 ? " q-list--separator" : "") + (l.value === !0 ? " q-list--dark" : "") + (e.padding === !0 ? " q-list--padding" : "")
    );
    return () => f(e.tag, { class: a.value, role: o.value }, We(t.default));
  }
}), Ds = ["horizontal", "vertical", "cell", "none"], Ls = Ce({
  name: "QMarkupTable",
  props: {
    ...rt,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    wrapCells: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (e) => Ds.includes(e)
    }
  },
  setup(e, { slots: t }) {
    const n = ke(), l = it(e, n.proxy.$q), o = d(
      () => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (l.value === !0 ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === !0 ? " q-table--dense" : "") + (e.flat === !0 ? " q-table--flat" : "") + (e.bordered === !0 ? " q-table--bordered" : "") + (e.square === !0 ? " q-table--square" : "") + (e.wrapCells === !1 ? " q-table--no-wrap" : "")
    );
    return () => f("div", {
      class: o.value
    }, [
      f("table", { class: "q-table" }, We(t.default))
    ]);
  }
});
function Ur(e, t) {
  return f("div", e, [
    f("table", { class: "q-table" }, t)
  ]);
}
const Fs = {
  list: As,
  table: Ls
}, $s = ["list", "table", "__qtable"], Hs = Ce({
  name: "QVirtualScroll",
  props: {
    ...ro,
    type: {
      type: String,
      default: "list",
      validator: (e) => $s.includes(e)
    },
    items: {
      type: Array,
      default: () => []
    },
    itemsFn: Function,
    itemsSize: Number,
    scrollTarget: kr
  },
  setup(e, { slots: t, attrs: n }) {
    let l;
    const o = J(null), a = d(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), {
      virtualScrollSliceRange: r,
      localResetVirtualScroll: u,
      padVirtualScroll: c,
      onVirtualScrollEvt: s
    } = Nr({
      virtualScrollLength: a,
      getVirtualScrollTarget: b,
      getVirtualScrollEl: g
    }), i = d(() => {
      if (a.value === 0)
        return [];
      const O = (_, y) => ({
        index: r.value.from + y,
        item: _
      });
      return e.itemsFn === void 0 ? e.items.slice(r.value.from, r.value.to).map(O) : e.itemsFn(r.value.from, r.value.to - r.value.from).map(O);
    }), v = d(
      () => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === !0 ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")
    ), S = d(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
    se(a, () => {
      u();
    }), se(() => e.scrollTarget, () => {
      h(), x();
    });
    function g() {
      return o.value.$el || o.value;
    }
    function b() {
      return l;
    }
    function x() {
      l = xr(g(), e.scrollTarget), l.addEventListener("scroll", s, Ze.passive);
    }
    function h() {
      l !== void 0 && (l.removeEventListener("scroll", s, Ze.passive), l = void 0);
    }
    function P() {
      let O = c(
        e.type === "list" ? "div" : "tbody",
        i.value.map(t.default)
      );
      return t.before !== void 0 && (O = t.before().concat(O)), Vt(t.after, O);
    }
    return Yn(() => {
      u();
    }), jt(() => {
      x();
    }), wl(() => {
      x();
    }), _n(() => {
      h();
    }), at(() => {
      h();
    }), () => {
      if (t.default === void 0) {
        console.error("QVirtualScroll: default scoped slot is required for rendering");
        return;
      }
      return e.type === "__qtable" ? Ur(
        { ref: o, class: "q-table__middle " + v.value },
        P()
      ) : f(Fs[e.type], {
        ...n,
        ref: o,
        class: [n.class, v.value],
        ...S.value
      }, P);
    };
  }
}), Is = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
function wa(e, t, n) {
  return {
    transform: t === !0 ? `translateX(${n.lang.rtl === !0 ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)`
  };
}
const js = Ce({
  name: "QLinearProgress",
  props: {
    ...rt,
    ...Cn,
    value: {
      type: Number,
      default: 0
    },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: {
      type: [String, Number],
      default: 2100
    },
    instantFeedback: Boolean
  },
  setup(e, { slots: t }) {
    const { proxy: n } = ke(), l = it(e, n.$q), o = qn(e, Is), a = d(() => e.indeterminate === !0 || e.query === !0), r = d(() => e.reverse !== e.query), u = d(() => ({
      ...o.value !== null ? o.value : {},
      "--q-linear-progress-speed": `${e.animationSpeed}ms`
    })), c = d(
      () => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === !0 || e.query === !0 ? " q-linear-progress--reverse" : "") + (e.rounded === !0 ? " rounded-borders" : "")
    ), s = d(() => wa(e.buffer !== void 0 ? e.buffer : 1, r.value, n.$q)), i = d(() => `with${e.instantFeedback === !0 ? "out" : ""}-transition`), v = d(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${i.value} q-linear-progress__track--${l.value === !0 ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")
    ), S = d(() => wa(a.value === !0 ? 1 : e.value, r.value, n.$q)), g = d(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${i.value} q-linear-progress__model--${a.value === !0 ? "in" : ""}determinate`
    ), b = d(() => ({ width: `${e.value * 100}%` })), x = d(
      () => `q-linear-progress__stripe absolute-${e.reverse === !0 ? "right" : "left"} q-linear-progress__stripe--${i.value}`
    );
    return () => {
      const h = [
        f("div", {
          class: v.value,
          style: s.value
        }),
        f("div", {
          class: g.value,
          style: S.value
        })
      ];
      return e.stripe === !0 && a.value === !1 && h.push(
        f("div", {
          class: x.value,
          style: b.value
        })
      ), f("div", {
        class: c.value,
        style: u.value,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 1,
        "aria-valuenow": e.indeterminate === !0 ? void 0 : e.value
      }, Vt(t.default, h));
    };
  }
});
function Yr(e, t) {
  const n = J(null), l = d(() => e.disable === !0 ? null : f("span", {
    ref: n,
    class: "no-outline",
    tabindex: -1
  }));
  function o(a) {
    const r = t.value;
    a !== void 0 && a.type.indexOf("key") === 0 ? r !== null && document.activeElement !== r && r.contains(document.activeElement) === !0 && r.focus() : n.value !== null && (a === void 0 || r !== null && r.contains(a.target) === !0) && n.value.focus();
  }
  return {
    refocusTargetEl: l,
    refocusTarget: o
  };
}
const Kr = {
  xs: 30,
  sm: 35,
  md: 40,
  lg: 50,
  xl: 60
}, Wr = {
  ...rt,
  ...Cn,
  ...En,
  modelValue: {
    required: !0,
    default: null
  },
  val: {},
  trueValue: { default: !0 },
  falseValue: { default: !1 },
  indeterminateValue: { default: null },
  checkedIcon: String,
  uncheckedIcon: String,
  indeterminateIcon: String,
  toggleOrder: {
    type: String,
    validator: (e) => e === "tf" || e === "ft"
  },
  toggleIndeterminate: Boolean,
  label: String,
  leftLabel: Boolean,
  color: String,
  keepColor: Boolean,
  dense: Boolean,
  disable: Boolean,
  tabindex: [String, Number]
}, Qr = ["update:modelValue"];
function Xr(e, t) {
  const { props: n, slots: l, emit: o, proxy: a } = ke(), { $q: r } = a, u = it(n, r), c = J(null), { refocusTargetEl: s, refocusTarget: i } = Yr(n, c), v = qn(n, Kr), S = d(
    () => n.val !== void 0 && Array.isArray(n.modelValue)
  ), g = d(() => {
    const E = Yt(n.val);
    return S.value === !0 ? n.modelValue.findIndex(($) => Yt($) === E) : -1;
  }), b = d(() => S.value === !0 ? g.value !== -1 : Yt(n.modelValue) === Yt(n.trueValue)), x = d(() => S.value === !0 ? g.value === -1 : Yt(n.modelValue) === Yt(n.falseValue)), h = d(
    () => b.value === !1 && x.value === !1
  ), P = d(() => n.disable === !0 ? -1 : n.tabindex || 0), O = d(
    () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (u.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : "")
  ), _ = d(() => {
    const E = b.value === !0 ? "truthy" : x.value === !0 ? "falsy" : "indet", $ = n.color !== void 0 && (n.keepColor === !0 || (e === "toggle" ? b.value === !0 : x.value !== !0)) ? ` text-${n.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${E}${$}`;
  }), y = d(() => {
    const E = { type: "checkbox" };
    return n.name !== void 0 && Object.assign(E, {
      // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
      ".checked": b.value,
      "^checked": b.value === !0 ? "checked" : void 0,
      name: n.name,
      value: S.value === !0 ? n.val : n.trueValue
    }), E;
  }), p = _l(y), F = d(() => {
    const E = {
      tabindex: P.value,
      role: e === "toggle" ? "switch" : "checkbox",
      "aria-label": n.label,
      "aria-checked": h.value === !0 ? "mixed" : b.value === !0 ? "true" : "false"
    };
    return n.disable === !0 && (E["aria-disabled"] = "true"), E;
  });
  function A(E) {
    E !== void 0 && (Fe(E), i(E)), n.disable !== !0 && o("update:modelValue", U(), E);
  }
  function U() {
    if (S.value === !0) {
      if (b.value === !0) {
        const E = n.modelValue.slice();
        return E.splice(g.value, 1), E;
      }
      return n.modelValue.concat([n.val]);
    }
    if (b.value === !0) {
      if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
        return n.falseValue;
    } else if (x.value === !0) {
      if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
        return n.trueValue;
    } else
      return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
    return n.indeterminateValue;
  }
  function D(E) {
    (E.keyCode === 13 || E.keyCode === 32) && Fe(E);
  }
  function L(E) {
    (E.keyCode === 13 || E.keyCode === 32) && A(E);
  }
  const H = t(b, h);
  return Object.assign(a, { toggle: A }), () => {
    const E = H();
    n.disable !== !0 && p(
      E,
      "unshift",
      ` q-${e}__native absolute q-ma-none q-pa-none`
    );
    const $ = [
      f("div", {
        class: _.value,
        style: v.value,
        "aria-hidden": "true"
      }, E)
    ];
    s.value !== null && $.push(s.value);
    const M = n.label !== void 0 ? Vt(l.default, [n.label]) : We(l.default);
    return M !== void 0 && $.push(
      f("div", {
        class: `q-${e}__label q-anchor--skip`
      }, M)
    ), f("div", {
      ref: c,
      class: O.value,
      ...F.value,
      onClick: A,
      onKeydown: D,
      onKeyup: L
    }, $);
  };
}
const Ns = () => f("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  f("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    f("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    f("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]), Hn = Ce({
  name: "QCheckbox",
  props: Wr,
  emits: Qr,
  setup(e) {
    const t = Ns();
    function n(l, o) {
      const a = d(
        () => (l.value === !0 ? e.checkedIcon : o.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || null
      );
      return () => a.value !== null ? [
        f("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          f(yt, {
            class: "q-checkbox__icon",
            name: a.value
          })
        ])
      ] : [t];
    }
    return Xr("checkbox", n);
  }
});
let Tn = 0;
const zs = {
  fullscreen: Boolean,
  noRouteFullscreenExit: Boolean
}, Us = ["update:fullscreen", "fullscreen"];
function Ys() {
  const e = ke(), { props: t, emit: n, proxy: l } = e;
  let o, a;
  const r = J(!1);
  wo(e) === !0 && se(() => l.$route.fullPath, () => {
    t.noRouteFullscreenExit !== !0 && s();
  }), se(() => t.fullscreen, (i) => {
    r.value !== i && u();
  }), se(r, (i) => {
    n("update:fullscreen", i), n("fullscreen", i);
  });
  function u() {
    r.value === !0 ? s() : c();
  }
  function c() {
    r.value !== !0 && (r.value = !0, a = l.$el.parentNode, a.replaceChild(o, l.$el), document.body.appendChild(l.$el), Tn++, Tn === 1 && document.body.classList.add("q-body--fullscreen-mixin"));
  }
  function s() {
    r.value === !0 && (a.replaceChild(l.$el, o), r.value = !1, Tn = Math.max(0, Tn - 1), Tn === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), l.$el.scrollIntoView !== void 0 && setTimeout(() => {
      l.$el.scrollIntoView();
    })));
  }
  return Yn(() => {
    o = document.createElement("span");
  }), jt(() => {
    t.fullscreen === !0 && c();
  }), at(s), Object.assign(l, {
    toggleFullscreen: u,
    setFullscreen: c,
    exitFullscreen: s
  }), {
    inFullscreen: r,
    toggleFullscreen: u
  };
}
function Ks(e, t) {
  return new Date(e) - new Date(t);
}
const Ws = {
  sortMethod: Function,
  binaryStateSort: Boolean,
  columnSortOrder: {
    type: String,
    validator: (e) => e === "ad" || e === "da",
    default: "ad"
  }
};
function Qs(e, t, n, l) {
  const o = d(() => {
    const { sortBy: u } = t.value;
    return u && n.value.find((c) => c.name === u) || null;
  }), a = d(() => e.sortMethod !== void 0 ? e.sortMethod : (u, c, s) => {
    const i = n.value.find((g) => g.name === c);
    if (i === void 0 || i.field === void 0)
      return u;
    const v = s === !0 ? -1 : 1, S = typeof i.field == "function" ? (g) => i.field(g) : (g) => g[i.field];
    return u.sort((g, b) => {
      let x = S(g), h = S(b);
      return i.rawSort !== void 0 ? i.rawSort(x, h, g, b) * v : x == null ? -1 * v : h == null ? 1 * v : i.sort !== void 0 ? i.sort(x, h, g, b) * v : io(x) === !0 && io(h) === !0 ? (x - h) * v : ba(x) === !0 && ba(h) === !0 ? Ks(x, h) * v : typeof x == "boolean" && typeof h == "boolean" ? (x - h) * v : ([x, h] = [x, h].map((P) => (P + "").toLocaleString().toLowerCase()), x < h ? -1 * v : x === h ? 0 : v);
    });
  });
  function r(u) {
    let c = e.columnSortOrder;
    if (zr(u) === !0)
      u.sortOrder && (c = u.sortOrder), u = u.name;
    else {
      const v = n.value.find((S) => S.name === u);
      v !== void 0 && v.sortOrder && (c = v.sortOrder);
    }
    let { sortBy: s, descending: i } = t.value;
    s !== u ? (s = u, i = c === "da") : e.binaryStateSort === !0 ? i = !i : i === !0 ? c === "ad" ? s = null : i = !1 : c === "ad" ? i = !0 : s = null, l({ sortBy: s, descending: i, page: 1 });
  }
  return {
    columnToSort: o,
    computedSortMethod: a,
    sort: r
  };
}
const Xs = {
  filter: [String, Object],
  filterMethod: Function
};
function Js(e, t) {
  const n = d(() => e.filterMethod !== void 0 ? e.filterMethod : (l, o, a, r) => {
    const u = o ? o.toLowerCase() : "";
    return l.filter(
      (c) => a.some((s) => {
        const i = r(s, c) + "";
        return (i === "undefined" || i === "null" ? "" : i.toLowerCase()).indexOf(u) !== -1;
      })
    );
  });
  return se(
    () => e.filter,
    () => {
      Le(() => {
        t({ page: 1 }, !0);
      });
    },
    { deep: !0 }
  ), { computedFilterMethod: n };
}
function Zs(e, t) {
  for (const n in t)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function Sa(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
const Gs = {
  pagination: Object,
  rowsPerPageOptions: {
    type: Array,
    default: () => [5, 7, 10, 15, 20, 25, 50, 0]
  },
  "onUpdate:pagination": [Function, Array]
};
function ec(e, t) {
  const { props: n, emit: l } = e, o = J(
    Object.assign({
      sortBy: null,
      descending: !1,
      page: 1,
      rowsPerPage: n.rowsPerPageOptions.length !== 0 ? n.rowsPerPageOptions[0] : 5
    }, n.pagination)
  ), a = d(() => {
    const i = n["onUpdate:pagination"] !== void 0 ? { ...o.value, ...n.pagination } : o.value;
    return Sa(i);
  }), r = d(() => a.value.rowsNumber !== void 0);
  function u(i) {
    c({
      pagination: i,
      filter: n.filter
    });
  }
  function c(i = {}) {
    Le(() => {
      l("request", {
        pagination: i.pagination || a.value,
        filter: i.filter || n.filter,
        getCellValue: t
      });
    });
  }
  function s(i, v) {
    const S = Sa({
      ...a.value,
      ...i
    });
    if (Zs(a.value, S) === !0) {
      r.value === !0 && v === !0 && u(S);
      return;
    }
    if (r.value === !0) {
      u(S);
      return;
    }
    n.pagination !== void 0 && n["onUpdate:pagination"] !== void 0 ? l("update:pagination", S) : o.value = S;
  }
  return {
    innerPagination: o,
    computedPagination: a,
    isServerSide: r,
    requestServerInteraction: c,
    setPagination: s
  };
}
function tc(e, t, n, l, o, a) {
  const { props: r, emit: u, proxy: { $q: c } } = e, s = d(() => l.value === !0 ? n.value.rowsNumber || 0 : a.value), i = d(() => {
    const { page: y, rowsPerPage: p } = n.value;
    return (y - 1) * p;
  }), v = d(() => {
    const { page: y, rowsPerPage: p } = n.value;
    return y * p;
  }), S = d(() => n.value.page === 1), g = d(() => n.value.rowsPerPage === 0 ? 1 : Math.max(
    1,
    Math.ceil(s.value / n.value.rowsPerPage)
  )), b = d(() => v.value === 0 ? !0 : n.value.page >= g.value), x = d(() => (r.rowsPerPageOptions.includes(t.value.rowsPerPage) ? r.rowsPerPageOptions : [t.value.rowsPerPage].concat(r.rowsPerPageOptions)).map((p) => ({
    label: p === 0 ? c.lang.table.allRows : "" + p,
    value: p
  })));
  se(g, (y, p) => {
    if (y === p)
      return;
    const F = n.value.page;
    y && !F ? o({ page: 1 }) : y < F && o({ page: y });
  });
  function h() {
    o({ page: 1 });
  }
  function P() {
    const { page: y } = n.value;
    y > 1 && o({ page: y - 1 });
  }
  function O() {
    const { page: y, rowsPerPage: p } = n.value;
    v.value > 0 && y * p < s.value && o({ page: y + 1 });
  }
  function _() {
    o({ page: g.value });
  }
  return r["onUpdate:pagination"] !== void 0 && u("update:pagination", { ...n.value }), {
    firstRowIndex: i,
    lastRowIndex: v,
    isFirstPage: S,
    isLastPage: b,
    pagesNumber: g,
    computedRowsPerPageOptions: x,
    computedRowsNumber: s,
    firstPage: h,
    prevPage: P,
    nextPage: O,
    lastPage: _
  };
}
const nc = {
  selection: {
    type: String,
    default: "none",
    validator: (e) => ["single", "multiple", "none"].includes(e)
  },
  selected: {
    type: Array,
    default: () => []
  }
}, lc = ["update:selected", "selection"];
function oc(e, t, n, l) {
  const o = d(() => {
    const b = {};
    return e.selected.map(l.value).forEach((x) => {
      b[x] = !0;
    }), b;
  }), a = d(() => e.selection !== "none"), r = d(() => e.selection === "single"), u = d(() => e.selection === "multiple"), c = d(
    () => n.value.length !== 0 && n.value.every(
      (b) => o.value[l.value(b)] === !0
    )
  ), s = d(
    () => c.value !== !0 && n.value.some((b) => o.value[l.value(b)] === !0)
  ), i = d(() => e.selected.length);
  function v(b) {
    return o.value[b] === !0;
  }
  function S() {
    t("update:selected", []);
  }
  function g(b, x, h, P) {
    t("selection", { rows: x, added: h, keys: b, evt: P });
    const O = r.value === !0 ? h === !0 ? x : [] : h === !0 ? e.selected.concat(x) : e.selected.filter(
      (_) => b.includes(l.value(_)) === !1
    );
    t("update:selected", O);
  }
  return {
    hasSelectionMode: a,
    singleSelection: r,
    multipleSelection: u,
    allRowsSelected: c,
    someRowsSelected: s,
    rowsSelectedNumber: i,
    isRowSelected: v,
    clearSelection: S,
    updateSelection: g
  };
}
function ka(e) {
  return Array.isArray(e) ? e.slice() : [];
}
const ac = {
  expanded: Array
  // v-model:expanded
}, rc = ["update:expanded"];
function ic(e, t) {
  const n = J(ka(e.expanded));
  se(() => e.expanded, (r) => {
    n.value = ka(r);
  });
  function l(r) {
    return n.value.includes(r);
  }
  function o(r) {
    e.expanded !== void 0 ? t("update:expanded", r) : n.value = r;
  }
  function a(r, u) {
    const c = n.value.slice(), s = c.indexOf(r);
    u === !0 ? s === -1 && (c.push(r), o(c)) : s !== -1 && (c.splice(s, 1), o(c));
  }
  return {
    isRowExpanded: l,
    setExpanded: o,
    updateExpanded: a
  };
}
const uc = {
  visibleColumns: Array
};
function sc(e, t, n) {
  const l = d(() => {
    if (e.columns !== void 0)
      return e.columns;
    const u = e.rows[0];
    return u !== void 0 ? Object.keys(u).map((c) => ({
      name: c,
      label: c.toUpperCase(),
      field: c,
      align: io(u[c]) ? "right" : "left",
      sortable: !0
    })) : [];
  }), o = d(() => {
    const { sortBy: u, descending: c } = t.value;
    return (e.visibleColumns !== void 0 ? l.value.filter((i) => i.required === !0 || e.visibleColumns.includes(i.name) === !0) : l.value).map((i) => {
      const v = i.align || "right", S = `text-${v}`;
      return {
        ...i,
        align: v,
        __iconClass: `q-table__sort-icon q-table__sort-icon--${v}`,
        __thClass: S + (i.headerClasses !== void 0 ? " " + i.headerClasses : "") + (i.sortable === !0 ? " sortable" : "") + (i.name === u ? ` sorted ${c === !0 ? "sort-desc" : ""}` : ""),
        __tdStyle: i.style !== void 0 ? typeof i.style != "function" ? () => i.style : i.style : () => null,
        __tdClass: i.classes !== void 0 ? typeof i.classes != "function" ? () => S + " " + i.classes : (g) => S + " " + i.classes(g) : () => S
      };
    });
  }), a = d(() => {
    const u = {};
    return o.value.forEach((c) => {
      u[c.name] = c;
    }), u;
  }), r = d(() => e.tableColspan !== void 0 ? e.tableColspan : o.value.length + (n.value === !0 ? 1 : 0));
  return {
    colList: l,
    computedCols: o,
    computedColsMap: a,
    computedColspan: r
  };
}
const ll = "q-table__bottom row items-center", Jr = {};
jr.forEach((e) => {
  Jr[e] = {};
});
const cc = Ce({
  name: "QTable",
  props: {
    rows: {
      type: Array,
      required: !0
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    columns: Array,
    loading: Boolean,
    iconFirstPage: String,
    iconPrevPage: String,
    iconNextPage: String,
    iconLastPage: String,
    title: String,
    hideHeader: Boolean,
    grid: Boolean,
    gridHeader: Boolean,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e)
    },
    wrapCells: Boolean,
    virtualScroll: Boolean,
    virtualScrollTarget: {},
    ...Jr,
    noDataLabel: String,
    noResultsLabel: String,
    loadingLabel: String,
    selectedRowsLabel: Function,
    rowsPerPageLabel: String,
    paginationLabel: Function,
    color: {
      type: String,
      default: "grey-8"
    },
    titleClass: [String, Array, Object],
    tableStyle: [String, Array, Object],
    tableClass: [String, Array, Object],
    tableHeaderStyle: [String, Array, Object],
    tableHeaderClass: [String, Array, Object],
    cardContainerClass: [String, Array, Object],
    cardContainerStyle: [String, Array, Object],
    cardStyle: [String, Array, Object],
    cardClass: [String, Array, Object],
    hideBottom: Boolean,
    hideSelectedBanner: Boolean,
    hideNoData: Boolean,
    hidePagination: Boolean,
    onRowClick: Function,
    onRowDblclick: Function,
    onRowContextmenu: Function,
    ...rt,
    ...zs,
    ...uc,
    ...Xs,
    ...Gs,
    ...ac,
    ...nc,
    ...Ws
  },
  emits: [
    "request",
    "virtualScroll",
    ...Us,
    ...rc,
    ...lc
  ],
  setup(e, { slots: t, emit: n }) {
    const l = ke(), { proxy: { $q: o } } = l, a = it(e, o), { inFullscreen: r, toggleFullscreen: u } = Ys(), c = d(() => typeof e.rowKey == "function" ? e.rowKey : (T) => T[e.rowKey]), s = J(null), i = J(null), v = d(() => e.grid !== !0 && e.virtualScroll === !0), S = d(
      () => " q-table__card" + (a.value === !0 ? " q-table__card--dark q-dark" : "") + (e.square === !0 ? " q-table--square" : "") + (e.flat === !0 ? " q-table--flat" : "") + (e.bordered === !0 ? " q-table--bordered" : "")
    ), g = d(
      () => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === !0 ? " q-table--grid" : S.value) + (a.value === !0 ? " q-table--dark" : "") + (e.dense === !0 ? " q-table--dense" : "") + (e.wrapCells === !1 ? " q-table--no-wrap" : "") + (r.value === !0 ? " fullscreen scroll" : "")
    ), b = d(
      () => g.value + (e.loading === !0 ? " q-table--loading" : "")
    );
    se(
      () => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + g.value,
      () => {
        v.value === !0 && i.value !== null && i.value.reset();
      }
    );
    const {
      innerPagination: x,
      computedPagination: h,
      isServerSide: P,
      requestServerInteraction: O,
      setPagination: _
    } = ec(l, V), { computedFilterMethod: y } = Js(e, _), { isRowExpanded: p, setExpanded: F, updateExpanded: A } = ic(e, n), U = d(() => {
      let T = e.rows;
      if (P.value === !0 || T.length === 0)
        return T;
      const { sortBy: le, descending: re } = h.value;
      return e.filter && (T = y.value(T, e.filter, q.value, V)), ie.value !== null && (T = ve.value(
        e.rows === T ? T.slice() : T,
        le,
        re
      )), T;
    }), D = d(() => U.value.length), L = d(() => {
      let T = U.value;
      if (P.value === !0)
        return T;
      const { rowsPerPage: le } = h.value;
      return le !== 0 && (X.value === 0 && e.rows !== T ? T.length > ye.value && (T = T.slice(0, ye.value)) : T = T.slice(X.value, ye.value)), T;
    }), {
      hasSelectionMode: H,
      singleSelection: E,
      multipleSelection: $,
      allRowsSelected: M,
      someRowsSelected: K,
      rowsSelectedNumber: Q,
      isRowSelected: ne,
      clearSelection: N,
      updateSelection: Z
    } = oc(e, n, L, c), { colList: de, computedCols: q, computedColsMap: C, computedColspan: G } = sc(e, h, H), { columnToSort: ie, computedSortMethod: ve, sort: j } = Qs(e, h, de, _), {
      firstRowIndex: X,
      lastRowIndex: ye,
      isFirstPage: z,
      isLastPage: qe,
      pagesNumber: pe,
      computedRowsPerPageOptions: Pe,
      computedRowsNumber: Ne,
      firstPage: ut,
      prevPage: nt,
      nextPage: Qe,
      lastPage: $e
    } = tc(l, x, h, P, _, D), Ct = d(() => L.value.length === 0), Dt = d(() => {
      const T = {};
      return jr.forEach((le) => {
        T[le] = e[le];
      }), T.virtualScrollItemSize === void 0 && (T.virtualScrollItemSize = e.dense === !0 ? 28 : 48), T;
    });
    function dt() {
      v.value === !0 && i.value.reset();
    }
    function Ye() {
      if (e.grid === !0)
        return Nt();
      const T = e.hideHeader !== !0 ? Ee : null;
      if (v.value === !0) {
        const re = t["top-row"], ce = t["bottom-row"], fe = {
          default: (Ve) => Lt(Ve.item, t.body, Ve.index)
        };
        if (re !== void 0) {
          const Ve = f("tbody", re({ cols: q.value }));
          fe.before = T === null ? () => Ve : () => [T()].concat(Ve);
        } else T !== null && (fe.before = T);
        return ce !== void 0 && (fe.after = () => f("tbody", ce({ cols: q.value }))), f(Hs, {
          ref: i,
          class: e.tableClass,
          style: e.tableStyle,
          ...Dt.value,
          scrollTarget: e.virtualScrollTarget,
          items: L.value,
          type: "__qtable",
          tableColspan: G.value,
          onVirtualScroll: ht
        }, fe);
      }
      const le = [
        St()
      ];
      return T !== null && le.unshift(T()), Ur({
        class: ["q-table__middle scroll", e.tableClass],
        style: e.tableStyle
      }, le);
    }
    function He(T, le) {
      if (i.value !== null) {
        i.value.scrollTo(T, le);
        return;
      }
      T = parseInt(T, 10);
      const re = s.value.querySelector(`tbody tr:nth-of-type(${T + 1})`);
      if (re !== null) {
        const ce = s.value.querySelector(".q-table__middle.scroll"), fe = re.offsetTop - e.virtualScrollStickySizeStart, Ve = fe < ce.scrollTop ? "decrease" : "increase";
        ce.scrollTop = fe, n("virtualScroll", {
          index: T,
          from: 0,
          to: x.value.rowsPerPage - 1,
          direction: Ve
        });
      }
    }
    function ht(T) {
      n("virtualScroll", T);
    }
    function wt() {
      return [
        f(js, {
          class: "q-table__linear-progress",
          color: e.color,
          dark: a.value,
          indeterminate: !0,
          trackColor: "transparent"
        })
      ];
    }
    function Lt(T, le, re) {
      const ce = c.value(T), fe = ne(ce);
      if (le !== void 0)
        return le(
          ft({
            key: ce,
            row: T,
            pageIndex: re,
            __trClass: fe ? "selected" : ""
          })
        );
      const Ve = t["body-cell"], m = q.value.map((R) => {
        const Y = t[`body-cell-${R.name}`], W = Y !== void 0 ? Y : Ve;
        return W !== void 0 ? W(Rt({ key: ce, row: T, pageIndex: re, col: R })) : f("td", {
          class: R.__tdClass(T),
          style: R.__tdStyle(T)
        }, V(R, T));
      });
      if (H.value === !0) {
        const R = t["body-selection"], Y = R !== void 0 ? R(Ot({ key: ce, row: T, pageIndex: re })) : [
          f(Hn, {
            modelValue: fe,
            color: e.color,
            dark: a.value,
            dense: e.dense,
            "onUpdate:modelValue": (W, we) => {
              Z([ce], [T], W, we);
            }
          })
        ];
        m.unshift(
          f("td", { class: "q-table--col-auto-width" }, Y)
        );
      }
      const k = { key: ce, class: { selected: fe } };
      return e.onRowClick !== void 0 && (k.class["cursor-pointer"] = !0, k.onClick = (R) => {
        n("rowClick", R, T, re);
      }), e.onRowDblclick !== void 0 && (k.class["cursor-pointer"] = !0, k.onDblclick = (R) => {
        n("rowDblclick", R, T, re);
      }), e.onRowContextmenu !== void 0 && (k.class["cursor-pointer"] = !0, k.onContextmenu = (R) => {
        n("rowContextmenu", R, T, re);
      }), f("tr", k, m);
    }
    function St() {
      const T = t.body, le = t["top-row"], re = t["bottom-row"];
      let ce = L.value.map(
        (fe, Ve) => Lt(fe, T, Ve)
      );
      return le !== void 0 && (ce = le({ cols: q.value }).concat(ce)), re !== void 0 && (ce = ce.concat(re({ cols: q.value }))), f("tbody", ce);
    }
    function ft(T) {
      return lt(T), T.cols = T.cols.map(
        (le) => _t({ ...le }, "value", () => V(le, T.row))
      ), T;
    }
    function Rt(T) {
      return lt(T), _t(T, "value", () => V(T.col, T.row)), T;
    }
    function Ot(T) {
      return lt(T), T;
    }
    function lt(T) {
      Object.assign(T, {
        cols: q.value,
        colsMap: C.value,
        sort: j,
        rowIndex: X.value + T.pageIndex,
        color: e.color,
        dark: a.value,
        dense: e.dense
      }), H.value === !0 && _t(
        T,
        "selected",
        () => ne(T.key),
        (le, re) => {
          Z([T.key], [T.row], le, re);
        }
      ), _t(
        T,
        "expand",
        () => p(T.key),
        (le) => {
          A(T.key, le);
        }
      );
    }
    function V(T, le) {
      const re = typeof T.field == "function" ? T.field(le) : le[T.field];
      return T.format !== void 0 ? T.format(re, le) : re;
    }
    const I = d(() => ({
      pagination: h.value,
      pagesNumber: pe.value,
      isFirstPage: z.value,
      isLastPage: qe.value,
      firstPage: ut,
      prevPage: nt,
      nextPage: Qe,
      lastPage: $e,
      inFullscreen: r.value,
      toggleFullscreen: u
    }));
    function ae() {
      const T = t.top, le = t["top-left"], re = t["top-right"], ce = t["top-selection"], fe = H.value === !0 && ce !== void 0 && Q.value > 0, Ve = "q-table__top relative-position row items-center";
      if (T !== void 0)
        return f("div", { class: Ve }, [T(I.value)]);
      let m;
      if (fe === !0 ? m = ce(I.value).slice() : (m = [], le !== void 0 ? m.push(
        f("div", { class: "q-table__control" }, [
          le(I.value)
        ])
      ) : e.title && m.push(
        f("div", { class: "q-table__control" }, [
          f("div", {
            class: ["q-table__title", e.titleClass]
          }, e.title)
        ])
      )), re !== void 0 && (m.push(
        f("div", { class: "q-table__separator col" })
      ), m.push(
        f("div", { class: "q-table__control" }, [
          re(I.value)
        ])
      )), m.length !== 0)
        return f("div", { class: Ve }, m);
    }
    const be = d(() => K.value === !0 ? null : M.value);
    function Ee() {
      const T = Xe();
      return e.loading === !0 && t.loading === void 0 && T.push(
        f("tr", { class: "q-table__progress" }, [
          f("th", {
            class: "relative-position",
            colspan: G.value
          }, wt())
        ])
      ), f("thead", T);
    }
    function Xe() {
      const T = t.header, le = t["header-cell"];
      if (T !== void 0)
        return T(
          ue({ header: !0 })
        ).slice();
      const re = q.value.map((ce) => {
        const fe = t[`header-cell-${ce.name}`], Ve = fe !== void 0 ? fe : le, m = ue({ col: ce });
        return Ve !== void 0 ? Ve(m) : f(Ts, {
          key: ce.name,
          props: m
        }, () => ce.label);
      });
      if (E.value === !0 && e.grid !== !0)
        re.unshift(
          f("th", { class: "q-table--col-auto-width" }, " ")
        );
      else if ($.value === !0) {
        const ce = t["header-selection"], fe = ce !== void 0 ? ce(ue({})) : [
          f(Hn, {
            color: e.color,
            modelValue: be.value,
            dark: a.value,
            dense: e.dense,
            "onUpdate:modelValue": Oe
          })
        ];
        re.unshift(
          f("th", { class: "q-table--col-auto-width" }, fe)
        );
      }
      return [
        f("tr", {
          class: e.tableHeaderClass,
          style: e.tableHeaderStyle
        }, re)
      ];
    }
    function ue(T) {
      return Object.assign(T, {
        cols: q.value,
        sort: j,
        colsMap: C.value,
        color: e.color,
        dark: a.value,
        dense: e.dense
      }), $.value === !0 && _t(
        T,
        "selected",
        () => be.value,
        Oe
      ), T;
    }
    function Oe(T) {
      K.value === !0 && (T = !1), Z(
        L.value.map(c.value),
        L.value,
        T
      );
    }
    const Je = d(() => {
      const T = [
        e.iconFirstPage || o.iconSet.table.firstPage,
        e.iconPrevPage || o.iconSet.table.prevPage,
        e.iconNextPage || o.iconSet.table.nextPage,
        e.iconLastPage || o.iconSet.table.lastPage
      ];
      return o.lang.rtl === !0 ? T.reverse() : T;
    });
    function qt() {
      if (e.hideBottom === !0)
        return;
      if (Ct.value === !0) {
        if (e.hideNoData === !0)
          return;
        const re = e.loading === !0 ? e.loadingLabel || o.lang.table.loading : e.filter ? e.noResultsLabel || o.lang.table.noResults : e.noDataLabel || o.lang.table.noData, ce = t["no-data"], fe = ce !== void 0 ? [ce({ message: re, icon: o.iconSet.table.warning, filter: e.filter })] : [
          f(yt, {
            class: "q-table__bottom-nodata-icon",
            name: o.iconSet.table.warning
          }),
          re
        ];
        return f("div", { class: ll + " q-table__bottom--nodata" }, fe);
      }
      const T = t.bottom;
      if (T !== void 0)
        return f("div", { class: ll }, [T(I.value)]);
      const le = e.hideSelectedBanner !== !0 && H.value === !0 && Q.value > 0 ? [
        f("div", { class: "q-table__control" }, [
          f("div", [
            (e.selectedRowsLabel || o.lang.table.selectedRecords)(Q.value)
          ])
        ])
      ] : [];
      if (e.hidePagination !== !0)
        return f("div", {
          class: ll + " justify-end"
        }, Bt(le));
      if (le.length !== 0)
        return f("div", { class: ll }, le);
    }
    function Ft(T) {
      _({
        page: 1,
        rowsPerPage: T.value
      });
    }
    function Bt(T) {
      let le;
      const { rowsPerPage: re } = h.value, ce = e.paginationLabel || o.lang.table.pagination, fe = t.pagination, Ve = e.rowsPerPageOptions.length > 1;
      if (T.push(
        f("div", { class: "q-table__separator col" })
      ), Ve === !0 && T.push(
        f("div", { class: "q-table__control" }, [
          f("span", { class: "q-table__bottom-item" }, [
            e.rowsPerPageLabel || o.lang.table.recordsPerPage
          ]),
          f($n, {
            class: "q-table__select inline q-table__bottom-item",
            color: e.color,
            modelValue: re,
            options: Pe.value,
            displayValue: re === 0 ? o.lang.table.allRows : re,
            dark: a.value,
            borderless: !0,
            dense: !0,
            optionsDense: !0,
            optionsCover: !0,
            "onUpdate:modelValue": Ft
          })
        ])
      ), fe !== void 0)
        le = fe(I.value);
      else if (le = [
        f("span", re !== 0 ? { class: "q-table__bottom-item" } : {}, [
          re ? ce(X.value + 1, Math.min(ye.value, Ne.value), Ne.value) : ce(1, D.value, Ne.value)
        ])
      ], re !== 0 && pe.value > 1) {
        const m = {
          color: e.color,
          round: !0,
          dense: !0,
          flat: !0
        };
        e.dense === !0 && (m.size = "sm"), pe.value > 2 && le.push(
          f(Re, {
            key: "pgFirst",
            ...m,
            icon: Je.value[0],
            disable: z.value,
            onClick: ut
          })
        ), le.push(
          f(Re, {
            key: "pgPrev",
            ...m,
            icon: Je.value[1],
            disable: z.value,
            onClick: nt
          }),
          f(Re, {
            key: "pgNext",
            ...m,
            icon: Je.value[2],
            disable: qe.value,
            onClick: Qe
          })
        ), pe.value > 2 && le.push(
          f(Re, {
            key: "pgLast",
            ...m,
            icon: Je.value[3],
            disable: qe.value,
            onClick: $e
          })
        );
      }
      return T.push(
        f("div", { class: "q-table__control" }, le)
      ), T;
    }
    function Jt() {
      const T = e.gridHeader === !0 ? [
        f("table", { class: "q-table" }, [
          Ee()
        ])
      ] : e.loading === !0 && t.loading === void 0 ? wt() : void 0;
      return f("div", { class: "q-table__middle" }, T);
    }
    function Nt() {
      const T = t.item !== void 0 ? t.item : (le) => {
        const re = le.cols.map(
          (fe) => f("div", { class: "q-table__grid-item-row" }, [
            f("div", { class: "q-table__grid-item-title" }, [fe.label]),
            f("div", { class: "q-table__grid-item-value" }, [fe.value])
          ])
        );
        if (H.value === !0) {
          const fe = t["body-selection"], Ve = fe !== void 0 ? fe(le) : [
            f(Hn, {
              modelValue: le.selected,
              color: e.color,
              dark: a.value,
              dense: e.dense,
              "onUpdate:modelValue": (m, k) => {
                Z([le.key], [le.row], m, k);
              }
            })
          ];
          re.unshift(
            f("div", { class: "q-table__grid-item-row" }, Ve),
            f(So, { dark: a.value })
          );
        }
        const ce = {
          class: [
            "q-table__grid-item-card" + S.value,
            e.cardClass
          ],
          style: e.cardStyle
        };
        return (e.onRowClick !== void 0 || e.onRowDblclick !== void 0) && (ce.class[0] += " cursor-pointer", e.onRowClick !== void 0 && (ce.onClick = (fe) => {
          n("RowClick", fe, le.row, le.pageIndex);
        }), e.onRowDblclick !== void 0 && (ce.onDblclick = (fe) => {
          n("RowDblclick", fe, le.row, le.pageIndex);
        })), f("div", {
          class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (le.selected === !0 ? " q-table__grid-item--selected" : "")
        }, [
          f("div", ce, re)
        ]);
      };
      return f("div", {
        class: [
          "q-table__grid-content row",
          e.cardContainerClass
        ],
        style: e.cardContainerStyle
      }, L.value.map((le, re) => T(ft({
        key: c.value(le),
        row: le,
        pageIndex: re
      }))));
    }
    return Object.assign(l.proxy, {
      requestServerInteraction: O,
      setPagination: _,
      firstPage: ut,
      prevPage: nt,
      nextPage: Qe,
      lastPage: $e,
      isRowSelected: ne,
      clearSelection: N,
      isRowExpanded: p,
      setExpanded: F,
      sort: j,
      resetVirtualScroll: dt,
      scrollTo: He,
      getCellValue: V
    }), Ii(l.proxy, {
      filteredSortedRows: () => U.value,
      computedRows: () => L.value,
      computedRowsNumber: () => Ne.value
    }), () => {
      const T = [ae()], le = { ref: s, class: b.value };
      return e.grid === !0 ? T.push(Jt()) : Object.assign(le, {
        class: [le.class, e.cardClass],
        style: e.cardStyle
      }), T.push(
        Ye(),
        qt()
      ), e.loading === !0 && t.loading !== void 0 && T.push(
        t.loading()
      ), f("div", le, T);
    };
  }
});
function dc() {
  let e = /* @__PURE__ */ Object.create(null);
  return {
    getCache: (t, n) => e[t] === void 0 ? e[t] = typeof n == "function" ? n() : n : e[t],
    setCache(t, n) {
      e[t] = n;
    },
    hasCache(t) {
      return Object.hasOwnProperty.call(e, t);
    },
    clearCache(t) {
      t !== void 0 ? delete e[t] : e = /* @__PURE__ */ Object.create(null);
    }
  };
}
const Xt = [
  -61,
  9,
  38,
  199,
  426,
  686,
  756,
  818,
  1111,
  1181,
  1210,
  1635,
  2060,
  2097,
  2192,
  2262,
  2324,
  2394,
  2456,
  3178
];
function fc(e, t, n) {
  return Object.prototype.toString.call(e) === "[object Date]" && (n = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), gc(Co(e, t, n));
}
function xa(e, t, n) {
  return Gr(hc(e, t, n));
}
function vc(e) {
  return mc(e) === 0;
}
function il(e, t) {
  return t <= 6 ? 31 : t <= 11 || vc(e) ? 30 : 29;
}
function mc(e) {
  const t = Xt.length;
  let n = Xt[0], l, o, a, r, u;
  if (e < n || e >= Xt[t - 1])
    throw new Error("Invalid Jalaali year " + e);
  for (u = 1; u < t && (l = Xt[u], o = l - n, !(e < l)); u += 1)
    n = l;
  return r = e - n, o - r < 6 && (r = r - o + De(o + 4, 33) * 33), a = bt(bt(r + 1, 33) - 1, 4), a === -1 && (a = 4), a;
}
function Zr(e, t) {
  const n = Xt.length, l = e + 621;
  let o = -14, a = Xt[0], r, u, c, s, i;
  if (e < a || e >= Xt[n - 1])
    throw new Error("Invalid Jalaali year " + e);
  for (i = 1; i < n && (r = Xt[i], u = r - a, !(e < r)); i += 1)
    o = o + De(u, 33) * 8 + De(bt(u, 33), 4), a = r;
  s = e - a, o = o + De(s, 33) * 8 + De(bt(s, 33) + 3, 4), bt(u, 33) === 4 && u - s === 4 && (o += 1);
  const v = De(l, 4) - De((De(l, 100) + 1) * 3, 4) - 150, S = 20 + o - v;
  return t || (u - s < 6 && (s = s - u + De(u + 4, 33) * 33), c = bt(bt(s + 1, 33) - 1, 4), c === -1 && (c = 4)), {
    leap: c,
    gy: l,
    march: S
  };
}
function hc(e, t, n) {
  const l = Zr(e, !0);
  return Co(l.gy, 3, l.march) + (t - 1) * 31 - De(t, 7) * (t - 7) + n - 1;
}
function gc(e) {
  const t = Gr(e).gy;
  let n = t - 621, l, o, a;
  const r = Zr(n, !1), u = Co(t, 3, r.march);
  if (a = e - u, a >= 0) {
    if (a <= 185)
      return o = 1 + De(a, 31), l = bt(a, 31) + 1, {
        jy: n,
        jm: o,
        jd: l
      };
    a -= 186;
  } else
    n -= 1, a += 179, r.leap === 1 && (a += 1);
  return o = 7 + De(a, 30), l = bt(a, 30) + 1, {
    jy: n,
    jm: o,
    jd: l
  };
}
function Co(e, t, n) {
  let l = De((e + De(t - 8, 6) + 100100) * 1461, 4) + De(153 * bt(t + 9, 12) + 2, 5) + n - 34840408;
  return l = l - De(De(e + 100100 + De(t - 8, 6), 100) * 3, 4) + 752, l;
}
function Gr(e) {
  let t = 4 * e + 139361631;
  t = t + De(De(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  const n = De(bt(t, 1461), 4) * 5 + 308, l = De(bt(n, 153), 5) + 1, o = bt(De(n, 153), 12) + 1;
  return {
    gy: De(t, 1461) - 100100 + De(8 - o, 6),
    gm: o,
    gd: l
  };
}
function De(e, t) {
  return ~~(e / t);
}
function bt(e, t) {
  return e - ~~(e / t) * t;
}
const bc = ["gregorian", "persian"], gl = {
  // should define modelValue in the target component
  mask: {
    type: String
  },
  locale: Object,
  calendar: {
    type: String,
    validator: (e) => bc.includes(e),
    default: "gregorian"
  },
  landscape: Boolean,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  readonly: Boolean,
  disable: Boolean
}, ei = ["update:modelValue"];
function $t(e) {
  return e.year + "/" + xe(e.month) + "/" + xe(e.day);
}
function ti(e, t) {
  const n = d(() => e.disable !== !0 && e.readonly !== !0), l = d(() => n.value === !0 ? 0 : -1), o = d(() => {
    const u = [];
    return e.color !== void 0 && u.push(`bg-${e.color}`), e.textColor !== void 0 && u.push(`text-${e.textColor}`), u.join(" ");
  });
  function a() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function r(u) {
    const c = /* @__PURE__ */ new Date(), s = u === !0 ? null : 0;
    if (e.calendar === "persian") {
      const i = fc(c);
      return {
        year: i.jy,
        month: i.jm,
        day: i.jd
      };
    }
    return {
      year: c.getFullYear(),
      month: c.getMonth() + 1,
      day: c.getDate(),
      hour: s,
      minute: s,
      second: s,
      millisecond: s
    };
  }
  return {
    editable: n,
    tabindex: l,
    headerClass: o,
    getLocale: a,
    getCurrentDate: r
  };
}
const uo = {
  isoName: "en-US",
  nativeName: "English (US)",
  label: {
    clear: "Clear",
    ok: "OK",
    cancel: "Cancel",
    close: "Close",
    set: "Set",
    select: "Select",
    reset: "Reset",
    remove: "Remove",
    update: "Update",
    create: "Create",
    search: "Search",
    filter: "Filter",
    refresh: "Refresh",
    expand: (e) => e ? `Expand "${e}"` : "Expand",
    collapse: (e) => e ? `Collapse "${e}"` : "Collapse"
  },
  date: {
    days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    firstDayOfWeek: 0,
    // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: !1,
    pluralDay: "days"
  },
  table: {
    noData: "No data available",
    noResults: "No matching records found",
    loading: "Loading...",
    selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.",
    recordsPerPage: "Records per page:",
    allRows: "All",
    pagination: (e, t, n) => e + "-" + t + " of " + n,
    columns: "Columns"
  },
  editor: {
    url: "URL",
    bold: "Bold",
    italic: "Italic",
    strikethrough: "Strikethrough",
    underline: "Underline",
    unorderedList: "Unordered List",
    orderedList: "Ordered List",
    subscript: "Subscript",
    superscript: "Superscript",
    hyperlink: "Hyperlink",
    toggleFullscreen: "Toggle Fullscreen",
    quote: "Quote",
    left: "Left align",
    center: "Center align",
    right: "Right align",
    justify: "Justify align",
    print: "Print",
    outdent: "Decrease indentation",
    indent: "Increase indentation",
    removeFormat: "Remove formatting",
    formatting: "Formatting",
    fontSize: "Font Size",
    align: "Align",
    hr: "Insert Horizontal Rule",
    undo: "Undo",
    redo: "Redo",
    heading1: "Heading 1",
    heading2: "Heading 2",
    heading3: "Heading 3",
    heading4: "Heading 4",
    heading5: "Heading 5",
    heading6: "Heading 6",
    paragraph: "Paragraph",
    code: "Code",
    size1: "Very small",
    size2: "A bit small",
    size3: "Normal",
    size4: "Medium-large",
    size5: "Big",
    size6: "Very big",
    size7: "Maximum",
    defaultFont: "Default Font",
    viewSource: "View Source"
  },
  tree: {
    noNodes: "No nodes available",
    noResults: "No matching nodes found"
  }
};
function _a() {
  const e = Array.isArray(navigator.languages) === !0 && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string")
    return e.split(/[-_]/).map((t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
const Kt = ji({
  __qLang: {}
}, {
  // props: object
  // __langConfig: object
  getLocale: _a,
  set(e = uo, t) {
    const n = {
      ...e,
      rtl: e.rtl === !0,
      getLocale: _a
    };
    {
      if (n.set = Kt.set, Kt.__langConfig === void 0 || Kt.__langConfig.noHtmlAttrs !== !0) {
        const l = document.documentElement;
        l.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"), l.setAttribute("lang", n.isoName);
      }
      Object.assign(Kt.__qLang, n);
    }
  },
  install({ $q: e, lang: t, ssrContext: n }) {
    e.lang = Kt.__qLang, Kt.__langConfig = e.config.lang, this.__installed === !0 ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang, {
      get() {
        return Reflect.get(...arguments);
      },
      ownKeys(l) {
        return Reflect.ownKeys(l).filter((o) => o !== "set" && o !== "getLocale");
      }
    }), this.set(t || uo));
  }
}), ni = 864e5, yc = 36e5, so = 6e4, li = "YYYY-MM-DDTHH:mm:ss.SSSZ", pc = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, wc = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, jl = {};
function Sc(e, t) {
  const n = "(" + t.days.join("|") + ")", l = e + n;
  if (jl[l] !== void 0)
    return jl[l];
  const o = "(" + t.daysShort.join("|") + ")", a = "(" + t.months.join("|") + ")", r = "(" + t.monthsShort.join("|") + ")", u = {};
  let c = 0;
  const s = e.replace(wc, (v) => {
    switch (c++, v) {
      case "YY":
        return u.YY = c, "(-?\\d{1,2})";
      case "YYYY":
        return u.YYYY = c, "(-?\\d{1,4})";
      case "M":
        return u.M = c, "(\\d{1,2})";
      case "Mo":
        return u.M = c++, "(\\d{1,2}(st|nd|rd|th))";
      case "MM":
        return u.M = c, "(\\d{2})";
      case "MMM":
        return u.MMM = c, r;
      case "MMMM":
        return u.MMMM = c, a;
      case "D":
        return u.D = c, "(\\d{1,2})";
      case "Do":
        return u.D = c++, "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        return u.D = c, "(\\d{2})";
      case "H":
        return u.H = c, "(\\d{1,2})";
      case "HH":
        return u.H = c, "(\\d{2})";
      case "h":
        return u.h = c, "(\\d{1,2})";
      case "hh":
        return u.h = c, "(\\d{2})";
      case "m":
        return u.m = c, "(\\d{1,2})";
      case "mm":
        return u.m = c, "(\\d{2})";
      case "s":
        return u.s = c, "(\\d{1,2})";
      case "ss":
        return u.s = c, "(\\d{2})";
      case "S":
        return u.S = c, "(\\d{1})";
      case "SS":
        return u.S = c, "(\\d{2})";
      case "SSS":
        return u.S = c, "(\\d{3})";
      case "A":
        return u.A = c, "(AM|PM)";
      case "a":
        return u.a = c, "(am|pm)";
      case "aa":
        return u.aa = c, "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return o;
      case "dddd":
        return n;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "do":
        return c++, "(\\d{1}(st|nd|rd|th))";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "DDDo":
        return c++, "(\\d{1,3}(st|nd|rd|th))";
      case "w":
        return "(\\d{1,2})";
      case "wo":
        return c++, "(\\d{1,2}(st|nd|rd|th))";
      case "ww":
        return "(\\d{2})";
      case "Z":
        return u.Z = c, "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        return u.ZZ = c, "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        return u.X = c, "(-?\\d+)";
      case "x":
        return u.x = c, "(-?\\d{4,})";
      default:
        return c--, v[0] === "[" && (v = v.substring(1, v.length - 1)), v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }), i = { map: u, regex: new RegExp("^" + s) };
  return jl[l] = i, i;
}
function oi(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : uo.date;
}
function Ca(e, t = "") {
  const n = e > 0 ? "-" : "+", l = Math.abs(e), o = Math.floor(l / 60), a = l % 60;
  return n + xe(o) + t + xe(a);
}
function Dn(e, t, n, l, o) {
  const a = {
    year: null,
    month: null,
    day: null,
    hour: null,
    minute: null,
    second: null,
    millisecond: null,
    timezoneOffset: null,
    dateHash: null,
    timeHash: null
  };
  if (o !== void 0 && Object.assign(a, o), e == null || e === "" || typeof e != "string")
    return a;
  t === void 0 && (t = li);
  const r = oi(n, Kt.props), u = r.months, c = r.monthsShort, { regex: s, map: i } = Sc(t, r), v = e.match(s);
  if (v === null)
    return a;
  let S = "";
  if (i.X !== void 0 || i.x !== void 0) {
    const g = parseInt(v[i.X !== void 0 ? i.X : i.x], 10);
    if (isNaN(g) === !0 || g < 0)
      return a;
    const b = new Date(g * (i.X !== void 0 ? 1e3 : 1));
    a.year = b.getFullYear(), a.month = b.getMonth() + 1, a.day = b.getDate(), a.hour = b.getHours(), a.minute = b.getMinutes(), a.second = b.getSeconds(), a.millisecond = b.getMilliseconds();
  } else {
    if (i.YYYY !== void 0)
      a.year = parseInt(v[i.YYYY], 10);
    else if (i.YY !== void 0) {
      const g = parseInt(v[i.YY], 10);
      a.year = g < 0 ? g : 2e3 + g;
    }
    if (i.M !== void 0) {
      if (a.month = parseInt(v[i.M], 10), a.month < 1 || a.month > 12)
        return a;
    } else i.MMM !== void 0 ? a.month = c.indexOf(v[i.MMM]) + 1 : i.MMMM !== void 0 && (a.month = u.indexOf(v[i.MMMM]) + 1);
    if (i.D !== void 0) {
      if (a.day = parseInt(v[i.D], 10), a.year === null || a.month === null || a.day < 1)
        return a;
      const g = l !== "persian" ? new Date(a.year, a.month, 0).getDate() : il(a.year, a.month);
      if (a.day > g)
        return a;
    }
    i.H !== void 0 ? a.hour = parseInt(v[i.H], 10) % 24 : i.h !== void 0 && (a.hour = parseInt(v[i.h], 10) % 12, (i.A && v[i.A] === "PM" || i.a && v[i.a] === "pm" || i.aa && v[i.aa] === "p.m.") && (a.hour += 12), a.hour = a.hour % 24), i.m !== void 0 && (a.minute = parseInt(v[i.m], 10) % 60), i.s !== void 0 && (a.second = parseInt(v[i.s], 10) % 60), i.S !== void 0 && (a.millisecond = parseInt(v[i.S], 10) * 10 ** (3 - v[i.S].length)), (i.Z !== void 0 || i.ZZ !== void 0) && (S = i.Z !== void 0 ? v[i.Z].replace(":", "") : v[i.ZZ], a.timezoneOffset = (S[0] === "+" ? -1 : 1) * (60 * S.slice(1, 3) + 1 * S.slice(3, 5)));
  }
  return a.dateHash = xe(a.year, 6) + "/" + xe(a.month) + "/" + xe(a.day), a.timeHash = xe(a.hour) + ":" + xe(a.minute) + ":" + xe(a.second) + S, a;
}
function Nl(e) {
  const t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  const n = new Date(t.getFullYear(), 0, 4);
  n.setDate(n.getDate() - (n.getDay() + 6) % 7 + 3);
  const l = t.getTimezoneOffset() - n.getTimezoneOffset();
  t.setHours(t.getHours() - l);
  const o = (t - n) / (ni * 7);
  return 1 + Math.floor(o);
}
function Ht(e, t, n) {
  const l = new Date(e), o = `set${n === !0 ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      l[`${o}Month`](0);
    case "month":
    case "months":
      l[`${o}Date`](1);
    case "day":
    case "days":
    case "date":
      l[`${o}Hours`](0);
    case "hour":
    case "hours":
      l[`${o}Minutes`](0);
    case "minute":
    case "minutes":
      l[`${o}Seconds`](0);
    case "second":
    case "seconds":
      l[`${o}Milliseconds`](0);
  }
  return l;
}
function ol(e, t, n) {
  return (e.getTime() - e.getTimezoneOffset() * so - (t.getTime() - t.getTimezoneOffset() * so)) / n;
}
function ai(e, t, n = "days") {
  const l = new Date(e), o = new Date(t);
  switch (n) {
    case "years":
    case "year":
      return l.getFullYear() - o.getFullYear();
    case "months":
    case "month":
      return (l.getFullYear() - o.getFullYear()) * 12 + l.getMonth() - o.getMonth();
    case "days":
    case "day":
    case "date":
      return ol(Ht(l, "day"), Ht(o, "day"), ni);
    case "hours":
    case "hour":
      return ol(Ht(l, "hour"), Ht(o, "hour"), yc);
    case "minutes":
    case "minute":
      return ol(Ht(l, "minute"), Ht(o, "minute"), so);
    case "seconds":
    case "second":
      return ol(Ht(l, "second"), Ht(o, "second"), 1e3);
  }
}
function zl(e) {
  return ai(e, Ht(e, "year"), "days") + 1;
}
function gn(e) {
  if (e >= 11 && e <= 13)
    return `${e}th`;
  switch (e % 10) {
    case 1:
      return `${e}st`;
    case 2:
      return `${e}nd`;
    case 3:
      return `${e}rd`;
  }
  return `${e}th`;
}
const qa = {
  // Year: 00, 01, ..., 99
  YY(e, t, n) {
    const l = this.YYYY(e, t, n) % 100;
    return l >= 0 ? xe(l) : "-" + xe(Math.abs(l));
  },
  // Year: 1900, 1901, ..., 2099
  YYYY(e, t, n) {
    return n ?? e.getFullYear();
  },
  // Month: 1, 2, ..., 12
  M(e) {
    return e.getMonth() + 1;
  },
  // Month: 1st, 2nd, ..., 12th
  Mo(e) {
    return gn(e.getMonth() + 1);
  },
  // Month: 01, 02, ..., 12
  MM(e) {
    return xe(e.getMonth() + 1);
  },
  // Month Short Name: Jan, Feb, ...
  MMM(e, t) {
    return t.monthsShort[e.getMonth()];
  },
  // Month Name: January, February, ...
  MMMM(e, t) {
    return t.months[e.getMonth()];
  },
  // Quarter: 1, 2, 3, 4
  Q(e) {
    return Math.ceil((e.getMonth() + 1) / 3);
  },
  // Quarter: 1st, 2nd, 3rd, 4th
  Qo(e) {
    return gn(this.Q(e));
  },
  // Day of month: 1, 2, ..., 31
  D(e) {
    return e.getDate();
  },
  // Day of month: 1st, 2nd, ..., 31st
  Do(e) {
    return gn(e.getDate());
  },
  // Day of month: 01, 02, ..., 31
  DD(e) {
    return xe(e.getDate());
  },
  // Day of year: 1, 2, ..., 366
  DDD(e) {
    return zl(e);
  },
  // Day of year: 1st, 2nd, ..., 366th
  DDDo(e) {
    return gn(zl(e));
  },
  // Day of year: 001, 002, ..., 366
  DDDD(e) {
    return xe(zl(e), 3);
  },
  // Day of week: 0, 1, ..., 6
  d(e) {
    return e.getDay();
  },
  // Day of week: 0th, 1st, ..., 6th
  do(e) {
    return gn(e.getDay());
  },
  // Day of week: Su, Mo, ...
  dd(e, t) {
    return t.days[e.getDay()].slice(0, 2);
  },
  // Day of week: Sun, Mon, ...
  ddd(e, t) {
    return t.daysShort[e.getDay()];
  },
  // Day of week: Sunday, Monday, ...
  dddd(e, t) {
    return t.days[e.getDay()];
  },
  // Day of ISO week: 1, 2, ..., 7
  E(e) {
    return e.getDay() || 7;
  },
  // Week of Year: 1 2 ... 52 53
  w(e) {
    return Nl(e);
  },
  // Week of Year: 1st 2nd ... 52nd 53rd
  wo(e) {
    return gn(Nl(e));
  },
  // Week of Year: 01 02 ... 52 53
  ww(e) {
    return xe(Nl(e));
  },
  // Hour: 0, 1, ... 23
  H(e) {
    return e.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH(e) {
    return xe(e.getHours());
  },
  // Hour: 1, 2, ..., 12
  h(e) {
    const t = e.getHours();
    return t === 0 ? 12 : t > 12 ? t % 12 : t;
  },
  // Hour: 01, 02, ..., 12
  hh(e) {
    return xe(this.h(e));
  },
  // Minute: 0, 1, ..., 59
  m(e) {
    return e.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm(e) {
    return xe(e.getMinutes());
  },
  // Second: 0, 1, ..., 59
  s(e) {
    return e.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss(e) {
    return xe(e.getSeconds());
  },
  // 1/10 of second: 0, 1, ..., 9
  S(e) {
    return Math.floor(e.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS(e) {
    return xe(Math.floor(e.getMilliseconds() / 10));
  },
  // Millisecond: 000, 001, ..., 999
  SSS(e) {
    return xe(e.getMilliseconds(), 3);
  },
  // Meridiem: AM, PM
  A(e) {
    return e.getHours() < 12 ? "AM" : "PM";
  },
  // Meridiem: am, pm
  a(e) {
    return e.getHours() < 12 ? "am" : "pm";
  },
  // Meridiem: a.m., p.m.
  aa(e) {
    return e.getHours() < 12 ? "a.m." : "p.m.";
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z(e, t, n, l) {
    const o = l ?? e.getTimezoneOffset();
    return Ca(o, ":");
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ(e, t, n, l) {
    const o = l ?? e.getTimezoneOffset();
    return Ca(o);
  },
  // Seconds timestamp: 512969520
  X(e) {
    return Math.floor(e.getTime() / 1e3);
  },
  // Milliseconds timestamp: 512969520900
  x(e) {
    return e.getTime();
  }
};
function ri(e, t, n, l, o) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0)
    return;
  const a = new Date(e);
  if (isNaN(a))
    return;
  t === void 0 && (t = li);
  const r = oi(n, Kt.props);
  return t.replace(
    pc,
    (u, c) => u in qa ? qa[u](a, r, l, o) : c === void 0 ? u : c.split("\\]").join("]")
  );
}
const en = 20, kc = ["Calendar", "Years", "Months"], Ea = (e) => kc.includes(e), Ul = (e) => /^-?[\d]+\/[0-1]\d$/.test(e), bn = " — ";
function zt(e) {
  return e.year + "/" + xe(e.month);
}
const Ma = Ce({
  name: "QDate",
  props: {
    ...gl,
    ...En,
    ...rt,
    modelValue: {
      required: !0,
      validator: (e) => typeof e == "string" || Array.isArray(e) === !0 || Object(e) === e || e === null
    },
    multiple: Boolean,
    range: Boolean,
    title: String,
    subtitle: String,
    mask: {
      ...gl.mask,
      // this mask is forced
      // when using persian calendar
      default: "YYYY/MM/DD"
    },
    defaultYearMonth: {
      type: String,
      validator: Ul
    },
    yearsInMonthView: Boolean,
    events: [Array, Function],
    eventColor: [String, Function],
    emitImmediately: Boolean,
    options: [Array, Function],
    navigationMinYearMonth: {
      type: String,
      validator: Ul
    },
    navigationMaxYearMonth: {
      type: String,
      validator: Ul
    },
    noUnset: Boolean,
    firstDayOfWeek: [String, Number],
    todayBtn: Boolean,
    minimal: Boolean,
    defaultView: {
      type: String,
      default: "Calendar",
      validator: Ea
    }
  },
  emits: [
    ...ei,
    "rangeStart",
    "rangeEnd",
    "navigation"
  ],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = ke(), { $q: o } = l, a = it(e, o), { getCache: r } = dc(), { tabindex: u, headerClass: c, getLocale: s, getCurrentDate: i } = ti(e, o);
    let v;
    const S = Br(e), g = _l(S), b = J(null), x = J(Rt()), h = J(s()), P = d(() => Rt()), O = d(() => s()), _ = d(() => i()), y = J(lt(x.value, h.value)), p = J(e.defaultView), F = d(() => o.lang.rtl === !0 ? "right" : "left"), A = J(F.value), U = J(F.value), D = y.value.year, L = J(D - D % en - (D < 0 ? en : 0)), H = J(null), E = d(() => {
      const m = e.landscape === !0 ? "landscape" : "portrait";
      return `q-date q-date--${m} q-date--${m}-${e.minimal === !0 ? "minimal" : "standard"}` + (a.value === !0 ? " q-date--dark q-dark" : "") + (e.bordered === !0 ? " q-date--bordered" : "") + (e.square === !0 ? " q-date--square no-border-radius" : "") + (e.flat === !0 ? " q-date--flat no-shadow" : "") + (e.disable === !0 ? " disabled" : e.readonly === !0 ? " q-date--readonly" : "");
    }), $ = d(() => e.color || "primary"), M = d(() => e.textColor || "white"), K = d(
      () => e.emitImmediately === !0 && e.multiple !== !0 && e.range !== !0
    ), Q = d(() => Array.isArray(e.modelValue) === !0 ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), ne = d(
      () => Q.value.filter((m) => typeof m == "string").map((m) => Ot(m, x.value, h.value)).filter(
        (m) => m.dateHash !== null && m.day !== null && m.month !== null && m.year !== null
      )
    ), N = d(() => {
      const m = (k) => Ot(k, x.value, h.value);
      return Q.value.filter((k) => zr(k) === !0 && k.from !== void 0 && k.to !== void 0).map((k) => ({ from: m(k.from), to: m(k.to) })).filter((k) => k.from.dateHash !== null && k.to.dateHash !== null && k.from.dateHash < k.to.dateHash);
    }), Z = d(() => e.calendar !== "persian" ? (m) => new Date(m.year, m.month - 1, m.day) : (m) => {
      const k = xa(m.year, m.month, m.day);
      return new Date(k.gy, k.gm - 1, k.gd);
    }), de = d(() => e.calendar === "persian" ? $t : (m, k, R) => ri(
      new Date(
        m.year,
        m.month - 1,
        m.day,
        m.hour,
        m.minute,
        m.second,
        m.millisecond
      ),
      k === void 0 ? x.value : k,
      R === void 0 ? h.value : R,
      m.year,
      m.timezoneOffset
    )), q = d(
      () => ne.value.length + N.value.reduce(
        (m, k) => m + 1 + ai(
          Z.value(k.to),
          Z.value(k.from)
        ),
        0
      )
    ), C = d(() => {
      if (e.title !== void 0 && e.title !== null && e.title.length !== 0)
        return e.title;
      if (H.value !== null) {
        const R = H.value.init, Y = Z.value(R);
        return h.value.daysShort[Y.getDay()] + ", " + h.value.monthsShort[R.month - 1] + " " + R.day + bn + "?";
      }
      if (q.value === 0)
        return bn;
      if (q.value > 1)
        return `${q.value} ${h.value.pluralDay}`;
      const m = ne.value[0], k = Z.value(m);
      return isNaN(k.valueOf()) === !0 ? bn : h.value.headerTitle !== void 0 ? h.value.headerTitle(k, m) : h.value.daysShort[k.getDay()] + ", " + h.value.monthsShort[m.month - 1] + " " + m.day;
    }), G = d(() => ne.value.concat(N.value.map((k) => k.from)).sort((k, R) => k.year - R.year || k.month - R.month)[0]), ie = d(() => ne.value.concat(N.value.map((k) => k.to)).sort((k, R) => R.year - k.year || R.month - k.month)[0]), ve = d(() => {
      if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0)
        return e.subtitle;
      if (q.value === 0)
        return bn;
      if (q.value > 1) {
        const m = G.value, k = ie.value, R = h.value.monthsShort;
        return R[m.month - 1] + (m.year !== k.year ? " " + m.year + bn + R[k.month - 1] + " " : m.month !== k.month ? bn + R[k.month - 1] : "") + " " + k.year;
      }
      return ne.value[0].year;
    }), j = d(() => {
      const m = [o.iconSet.datetime.arrowLeft, o.iconSet.datetime.arrowRight];
      return o.lang.rtl === !0 ? m.reverse() : m;
    }), X = d(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : h.value.firstDayOfWeek), ye = d(() => {
      const m = h.value.daysShort, k = X.value;
      return k > 0 ? m.slice(k, 7).concat(m.slice(0, k)) : m;
    }), z = d(() => {
      const m = y.value;
      return e.calendar !== "persian" ? new Date(m.year, m.month, 0).getDate() : il(m.year, m.month);
    }), qe = d(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), pe = d(() => {
      if (e.navigationMinYearMonth === void 0)
        return null;
      const m = e.navigationMinYearMonth.split("/");
      return { year: parseInt(m[0], 10), month: parseInt(m[1], 10) };
    }), Pe = d(() => {
      if (e.navigationMaxYearMonth === void 0)
        return null;
      const m = e.navigationMaxYearMonth.split("/");
      return { year: parseInt(m[0], 10), month: parseInt(m[1], 10) };
    }), Ne = d(() => {
      const m = {
        month: { prev: !0, next: !0 },
        year: { prev: !0, next: !0 }
      };
      return pe.value !== null && pe.value.year >= y.value.year && (m.year.prev = !1, pe.value.year === y.value.year && pe.value.month >= y.value.month && (m.month.prev = !1)), Pe.value !== null && Pe.value.year <= y.value.year && (m.year.next = !1, Pe.value.year === y.value.year && Pe.value.month <= y.value.month && (m.month.next = !1)), m;
    }), ut = d(() => {
      const m = {};
      return ne.value.forEach((k) => {
        const R = zt(k);
        m[R] === void 0 && (m[R] = []), m[R].push(k.day);
      }), m;
    }), nt = d(() => {
      const m = {};
      return N.value.forEach((k) => {
        const R = zt(k.from), Y = zt(k.to);
        if (m[R] === void 0 && (m[R] = []), m[R].push({
          from: k.from.day,
          to: R === Y ? k.to.day : void 0,
          range: k
        }), R < Y) {
          let W;
          const { year: we, month: oe } = k.from, he = oe < 12 ? { year: we, month: oe + 1 } : { year: we + 1, month: 1 };
          for (; (W = zt(he)) <= Y; )
            m[W] === void 0 && (m[W] = []), m[W].push({
              from: void 0,
              to: W === Y ? k.to.day : void 0,
              range: k
            }), he.month++, he.month > 12 && (he.year++, he.month = 1);
        }
      }), m;
    }), Qe = d(() => {
      if (H.value === null)
        return;
      const { init: m, initHash: k, final: R, finalHash: Y } = H.value, [W, we] = k <= Y ? [m, R] : [R, m], oe = zt(W), he = zt(we);
      if (oe !== $e.value && he !== $e.value)
        return;
      const _e = {};
      return oe === $e.value ? (_e.from = W.day, _e.includeFrom = !0) : _e.from = 1, he === $e.value ? (_e.to = we.day, _e.includeTo = !0) : _e.to = z.value, _e;
    }), $e = d(() => zt(y.value)), Ct = d(() => {
      const m = {};
      if (e.options === void 0) {
        for (let R = 1; R <= z.value; R++)
          m[R] = !0;
        return m;
      }
      const k = typeof e.options == "function" ? e.options : (R) => e.options.includes(R);
      for (let R = 1; R <= z.value; R++) {
        const Y = $e.value + "/" + xe(R);
        m[R] = k(Y);
      }
      return m;
    }), Dt = d(() => {
      const m = {};
      if (e.events === void 0)
        for (let k = 1; k <= z.value; k++)
          m[k] = !1;
      else {
        const k = typeof e.events == "function" ? e.events : (R) => e.events.includes(R);
        for (let R = 1; R <= z.value; R++) {
          const Y = $e.value + "/" + xe(R);
          m[R] = k(Y) === !0 && qe.value(Y);
        }
      }
      return m;
    }), dt = d(() => {
      let m, k;
      const { year: R, month: Y } = y.value;
      if (e.calendar !== "persian")
        m = new Date(R, Y - 1, 1), k = new Date(R, Y - 1, 0).getDate();
      else {
        const W = xa(R, Y, 1);
        m = new Date(W.gy, W.gm - 1, W.gd);
        let we = Y - 1, oe = R;
        we === 0 && (we = 12, oe--), k = il(oe, we);
      }
      return {
        days: m.getDay() - X.value - 1,
        endDay: k
      };
    }), Ye = d(() => {
      const m = [], { days: k, endDay: R } = dt.value, Y = k < 0 ? k + 7 : k;
      if (Y < 6)
        for (let oe = R - Y; oe <= R; oe++)
          m.push({ i: oe, fill: !0 });
      const W = m.length;
      for (let oe = 1; oe <= z.value; oe++) {
        const he = { i: oe, event: Dt.value[oe], classes: [] };
        Ct.value[oe] === !0 && (he.in = !0, he.flat = !0), m.push(he);
      }
      if (ut.value[$e.value] !== void 0 && ut.value[$e.value].forEach((oe) => {
        const he = W + oe - 1;
        Object.assign(m[he], {
          selected: !0,
          unelevated: !0,
          flat: !1,
          color: $.value,
          textColor: M.value
        });
      }), nt.value[$e.value] !== void 0 && nt.value[$e.value].forEach((oe) => {
        if (oe.from !== void 0) {
          const he = W + oe.from - 1, _e = W + (oe.to || z.value) - 1;
          for (let kt = he; kt <= _e; kt++)
            Object.assign(m[kt], {
              range: oe.range,
              unelevated: !0,
              color: $.value,
              textColor: M.value
            });
          Object.assign(m[he], {
            rangeFrom: !0,
            flat: !1
          }), oe.to !== void 0 && Object.assign(m[_e], {
            rangeTo: !0,
            flat: !1
          });
        } else if (oe.to !== void 0) {
          const he = W + oe.to - 1;
          for (let _e = W; _e <= he; _e++)
            Object.assign(m[_e], {
              range: oe.range,
              unelevated: !0,
              color: $.value,
              textColor: M.value
            });
          Object.assign(m[he], {
            flat: !1,
            rangeTo: !0
          });
        } else {
          const he = W + z.value - 1;
          for (let _e = W; _e <= he; _e++)
            Object.assign(m[_e], {
              range: oe.range,
              unelevated: !0,
              color: $.value,
              textColor: M.value
            });
        }
      }), Qe.value !== void 0) {
        const oe = W + Qe.value.from - 1, he = W + Qe.value.to - 1;
        for (let _e = oe; _e <= he; _e++)
          m[_e].color = $.value, m[_e].editRange = !0;
        Qe.value.includeFrom === !0 && (m[oe].editRangeFrom = !0), Qe.value.includeTo === !0 && (m[he].editRangeTo = !0);
      }
      y.value.year === _.value.year && y.value.month === _.value.month && (m[W + _.value.day - 1].today = !0);
      const we = m.length % 7;
      if (we > 0) {
        const oe = 7 - we;
        for (let he = 1; he <= oe; he++)
          m.push({ i: he, fill: !0 });
      }
      return m.forEach((oe) => {
        let he = "q-date__calendar-item ";
        oe.fill === !0 ? he += "q-date__calendar-item--fill" : (he += `q-date__calendar-item--${oe.in === !0 ? "in" : "out"}`, oe.range !== void 0 && (he += ` q-date__range${oe.rangeTo === !0 ? "-to" : oe.rangeFrom === !0 ? "-from" : ""}`), oe.editRange === !0 && (he += ` q-date__edit-range${oe.editRangeFrom === !0 ? "-from" : ""}${oe.editRangeTo === !0 ? "-to" : ""}`), (oe.range !== void 0 || oe.editRange === !0) && (he += ` text-${oe.color}`)), oe.classes = he;
      }), m;
    }), He = d(() => e.disable === !0 ? { "aria-disabled": "true" } : {});
    se(() => e.modelValue, (m) => {
      if (v === m)
        v = 0;
      else {
        const k = lt(x.value, h.value);
        Oe(k.year, k.month, k);
      }
    }), se(p, () => {
      b.value !== null && l.$el.contains(document.activeElement) === !0 && b.value.focus();
    }), se(() => y.value.year + "|" + y.value.month, () => {
      n("navigation", { year: y.value.year, month: y.value.month });
    }), se(P, (m) => {
      T(m, h.value, "mask"), x.value = m;
    }), se(O, (m) => {
      T(x.value, m, "locale"), h.value = m;
    });
    function ht() {
      const { year: m, month: k, day: R } = _.value, Y = {
        // contains more props than needed (hour, minute, second, millisecond)
        // but those aren't used in the processing of this "date" variable
        ...y.value,
        // overwriting with today's date
        year: m,
        month: k,
        day: R
      }, W = ut.value[zt(Y)];
      (W === void 0 || W.includes(Y.day) === !1) && Jt(Y), St(Y.year, Y.month);
    }
    function wt(m) {
      Ea(m) === !0 && (p.value = m);
    }
    function Lt(m, k) {
      ["month", "year"].includes(m) && (m === "month" ? I : ae)(k === !0 ? -1 : 1);
    }
    function St(m, k) {
      p.value = "Calendar", Oe(m, k);
    }
    function ft(m, k) {
      if (e.range === !1 || !m) {
        H.value = null;
        return;
      }
      const R = Object.assign({ ...y.value }, m), Y = k !== void 0 ? Object.assign({ ...y.value }, k) : R;
      H.value = {
        init: R,
        initHash: $t(R),
        final: Y,
        finalHash: $t(Y)
      }, St(R.year, R.month);
    }
    function Rt() {
      return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
    }
    function Ot(m, k, R) {
      return Dn(
        m,
        k,
        R,
        e.calendar,
        {
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0
        }
      );
    }
    function lt(m, k) {
      const R = Array.isArray(e.modelValue) === !0 ? e.modelValue : e.modelValue ? [e.modelValue] : [];
      if (R.length === 0)
        return V();
      const Y = R[R.length - 1], W = Ot(
        Y.from !== void 0 ? Y.from : Y,
        m,
        k
      );
      return W.dateHash === null ? V() : W;
    }
    function V() {
      let m, k;
      if (e.defaultYearMonth !== void 0) {
        const R = e.defaultYearMonth.split("/");
        m = parseInt(R[0], 10), k = parseInt(R[1], 10);
      } else {
        const R = _.value !== void 0 ? _.value : i();
        m = R.year, k = R.month;
      }
      return {
        year: m,
        month: k,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        dateHash: m + "/" + xe(k) + "/01"
      };
    }
    function I(m) {
      let k = y.value.year, R = Number(y.value.month) + m;
      R === 13 ? (R = 1, k++) : R === 0 && (R = 12, k--), Oe(k, R), K.value === !0 && qt("month");
    }
    function ae(m) {
      const k = Number(y.value.year) + m;
      Oe(k, y.value.month), K.value === !0 && qt("year");
    }
    function be(m) {
      Oe(m, y.value.month), p.value = e.defaultView === "Years" ? "Months" : "Calendar", K.value === !0 && qt("year");
    }
    function Ee(m) {
      Oe(y.value.year, m), p.value = "Calendar", K.value === !0 && qt("month");
    }
    function Xe(m, k) {
      const R = ut.value[k];
      (R !== void 0 && R.includes(m.day) === !0 ? Nt : Jt)(m);
    }
    function ue(m) {
      return { year: m.year, month: m.month, day: m.day };
    }
    function Oe(m, k, R) {
      if (pe.value !== null && m <= pe.value.year && ((k < pe.value.month || m < pe.value.year) && (k = pe.value.month), m = pe.value.year), Pe.value !== null && m >= Pe.value.year && ((k > Pe.value.month || m > Pe.value.year) && (k = Pe.value.month), m = Pe.value.year), R !== void 0) {
        const { hour: W, minute: we, second: oe, millisecond: he, timezoneOffset: _e, timeHash: kt } = R;
        Object.assign(y.value, { hour: W, minute: we, second: oe, millisecond: he, timezoneOffset: _e, timeHash: kt });
      }
      const Y = m + "/" + xe(k) + "/01";
      Y !== y.value.dateHash && (A.value = y.value.dateHash < Y == (o.lang.rtl !== !0) ? "left" : "right", m !== y.value.year && (U.value = A.value), Le(() => {
        L.value = m - m % en - (m < 0 ? en : 0), Object.assign(y.value, {
          year: m,
          month: k,
          day: 1,
          dateHash: Y
        });
      }));
    }
    function Je(m, k, R) {
      const Y = m !== null && m.length === 1 && e.multiple === !1 ? m[0] : m;
      v = Y;
      const { reason: W, details: we } = Ft(k, R);
      n("update:modelValue", Y, W, we);
    }
    function qt(m) {
      const k = ne.value[0] !== void 0 && ne.value[0].dateHash !== null ? { ...ne.value[0] } : { ...y.value };
      Le(() => {
        k.year = y.value.year, k.month = y.value.month;
        const R = e.calendar !== "persian" ? new Date(k.year, k.month, 0).getDate() : il(k.year, k.month);
        k.day = Math.min(Math.max(1, k.day), R);
        const Y = Bt(k);
        v = Y;
        const { details: W } = Ft("", k);
        n("update:modelValue", Y, m, W);
      });
    }
    function Ft(m, k) {
      return k.from !== void 0 ? {
        reason: `${m}-range`,
        details: {
          ...ue(k.target),
          from: ue(k.from),
          to: ue(k.to)
        }
      } : {
        reason: `${m}-day`,
        details: ue(k)
      };
    }
    function Bt(m, k, R) {
      return m.from !== void 0 ? { from: de.value(m.from, k, R), to: de.value(m.to, k, R) } : de.value(m, k, R);
    }
    function Jt(m) {
      let k;
      if (e.multiple === !0)
        if (m.from !== void 0) {
          const R = $t(m.from), Y = $t(m.to), W = ne.value.filter((oe) => oe.dateHash < R || oe.dateHash > Y), we = N.value.filter(({ from: oe, to: he }) => he.dateHash < R || oe.dateHash > Y);
          k = W.concat(we).concat(m).map((oe) => Bt(oe));
        } else {
          const R = Q.value.slice();
          R.push(Bt(m)), k = R;
        }
      else
        k = Bt(m);
      Je(k, "add", m);
    }
    function Nt(m) {
      if (e.noUnset === !0)
        return;
      let k = null;
      if (e.multiple === !0 && Array.isArray(e.modelValue) === !0) {
        const R = Bt(m);
        m.from !== void 0 ? k = e.modelValue.filter(
          (Y) => Y.from !== void 0 ? Y.from !== R.from && Y.to !== R.to : !0
        ) : k = e.modelValue.filter((Y) => Y !== R), k.length === 0 && (k = null);
      }
      Je(k, "remove", m);
    }
    function T(m, k, R) {
      const Y = ne.value.concat(N.value).map((W) => Bt(W, m, k)).filter((W) => W.from !== void 0 ? W.from.dateHash !== null && W.to.dateHash !== null : W.dateHash !== null);
      n("update:modelValue", (e.multiple === !0 ? Y : Y[0]) || null, R);
    }
    function le() {
      if (e.minimal !== !0)
        return f("div", {
          class: "q-date__header " + c.value
        }, [
          f("div", {
            class: "relative-position"
          }, [
            f(Mt, {
              name: "q-transition--fade"
            }, () => f("div", {
              key: "h-yr-" + ve.value,
              class: "q-date__header-subtitle q-date__header-link " + (p.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"),
              tabindex: u.value,
              ...r("vY", {
                onClick() {
                  p.value = "Years";
                },
                onKeyup(m) {
                  m.keyCode === 13 && (p.value = "Years");
                }
              })
            }, [ve.value]))
          ]),
          f("div", {
            class: "q-date__header-title relative-position flex no-wrap"
          }, [
            f("div", {
              class: "relative-position col"
            }, [
              f(Mt, {
                name: "q-transition--fade"
              }, () => f("div", {
                key: "h-sub" + C.value,
                class: "q-date__header-title-label q-date__header-link " + (p.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"),
                tabindex: u.value,
                ...r("vC", {
                  onClick() {
                    p.value = "Calendar";
                  },
                  onKeyup(m) {
                    m.keyCode === 13 && (p.value = "Calendar");
                  }
                })
              }, [C.value]))
            ]),
            e.todayBtn === !0 ? f(Re, {
              class: "q-date__header-today self-start",
              icon: o.iconSet.datetime.today,
              flat: !0,
              size: "sm",
              round: !0,
              tabindex: u.value,
              onClick: ht
            }) : null
          ])
        ]);
    }
    function re({ label: m, type: k, key: R, dir: Y, goTo: W, boundaries: we, cls: oe }) {
      return [
        f("div", {
          class: "row items-center q-date__arrow"
        }, [
          f(Re, {
            round: !0,
            dense: !0,
            size: "sm",
            flat: !0,
            icon: j.value[0],
            tabindex: u.value,
            disable: we.prev === !1,
            ...r("go-#" + k, { onClick() {
              W(-1);
            } })
          })
        ]),
        f("div", {
          class: "relative-position overflow-hidden flex flex-center" + oe
        }, [
          f(Mt, {
            name: "q-transition--jump-" + Y
          }, () => f("div", { key: R }, [
            f(Re, {
              flat: !0,
              dense: !0,
              noCaps: !0,
              label: m,
              tabindex: u.value,
              ...r("view#" + k, { onClick: () => {
                p.value = k;
              } })
            })
          ]))
        ]),
        f("div", {
          class: "row items-center q-date__arrow"
        }, [
          f(Re, {
            round: !0,
            dense: !0,
            size: "sm",
            flat: !0,
            icon: j.value[1],
            tabindex: u.value,
            disable: we.next === !1,
            ...r("go+#" + k, { onClick() {
              W(1);
            } })
          })
        ])
      ];
    }
    const ce = {
      Calendar: () => [
        f("div", {
          key: "calendar-view",
          class: "q-date__view q-date__calendar"
        }, [
          f("div", {
            class: "q-date__navigation row items-center no-wrap"
          }, re({
            label: h.value.months[y.value.month - 1],
            type: "Months",
            key: y.value.month,
            dir: A.value,
            goTo: I,
            boundaries: Ne.value.month,
            cls: " col"
          }).concat(re({
            label: y.value.year,
            type: "Years",
            key: y.value.year,
            dir: U.value,
            goTo: ae,
            boundaries: Ne.value.year,
            cls: ""
          }))),
          f("div", {
            class: "q-date__calendar-weekdays row items-center no-wrap"
          }, ye.value.map((m) => f("div", { class: "q-date__calendar-item" }, [f("div", m)]))),
          f("div", {
            class: "q-date__calendar-days-container relative-position overflow-hidden"
          }, [
            f(Mt, {
              name: "q-transition--slide-" + A.value
            }, () => f("div", {
              key: $e.value,
              class: "q-date__calendar-days fit"
            }, Ye.value.map((m) => f("div", { class: m.classes }, [
              m.in === !0 ? f(
                Re,
                {
                  class: m.today === !0 ? "q-date__today" : "",
                  dense: !0,
                  flat: m.flat,
                  unelevated: m.unelevated,
                  color: m.color,
                  textColor: m.textColor,
                  label: m.i,
                  tabindex: u.value,
                  ...r("day#" + m.i, {
                    onClick: () => {
                      fe(m.i);
                    },
                    onMouseover: () => {
                      Ve(m.i);
                    }
                  })
                },
                m.event !== !1 ? () => f("div", { class: "q-date__event bg-" + m.event }) : null
              ) : f("div", "" + m.i)
            ]))))
          ])
        ])
      ],
      Months() {
        const m = y.value.year === _.value.year, k = (Y) => pe.value !== null && y.value.year === pe.value.year && pe.value.month > Y || Pe.value !== null && y.value.year === Pe.value.year && Pe.value.month < Y, R = h.value.monthsShort.map((Y, W) => {
          const we = y.value.month === W + 1;
          return f("div", {
            class: "q-date__months-item flex flex-center"
          }, [
            f(Re, {
              class: m === !0 && _.value.month === W + 1 ? "q-date__today" : null,
              flat: we !== !0,
              label: Y,
              unelevated: we,
              color: we === !0 ? $.value : null,
              textColor: we === !0 ? M.value : null,
              tabindex: u.value,
              disable: k(W + 1),
              ...r("month#" + W, { onClick: () => {
                Ee(W + 1);
              } })
            })
          ]);
        });
        return e.yearsInMonthView === !0 && R.unshift(
          f("div", { class: "row no-wrap full-width" }, [
            re({
              label: y.value.year,
              type: "Years",
              key: y.value.year,
              dir: U.value,
              goTo: ae,
              boundaries: Ne.value.year,
              cls: " col"
            })
          ])
        ), f("div", {
          key: "months-view",
          class: "q-date__view q-date__months flex flex-center"
        }, R);
      },
      Years() {
        const m = L.value, k = m + en, R = [], Y = (W) => pe.value !== null && pe.value.year > W || Pe.value !== null && Pe.value.year < W;
        for (let W = m; W <= k; W++) {
          const we = y.value.year === W;
          R.push(
            f("div", {
              class: "q-date__years-item flex flex-center"
            }, [
              f(Re, {
                key: "yr" + W,
                class: _.value.year === W ? "q-date__today" : null,
                flat: !we,
                label: W,
                dense: !0,
                unelevated: we,
                color: we === !0 ? $.value : null,
                textColor: we === !0 ? M.value : null,
                tabindex: u.value,
                disable: Y(W),
                ...r("yr#" + W, { onClick: () => {
                  be(W);
                } })
              })
            ])
          );
        }
        return f("div", {
          class: "q-date__view q-date__years flex flex-center"
        }, [
          f("div", {
            class: "col-auto"
          }, [
            f(Re, {
              round: !0,
              dense: !0,
              flat: !0,
              icon: j.value[0],
              tabindex: u.value,
              disable: Y(m),
              ...r("y-", { onClick: () => {
                L.value -= en;
              } })
            })
          ]),
          f("div", {
            class: "q-date__years-content col self-stretch row items-center"
          }, R),
          f("div", {
            class: "col-auto"
          }, [
            f(Re, {
              round: !0,
              dense: !0,
              flat: !0,
              icon: j.value[1],
              tabindex: u.value,
              disable: Y(k),
              ...r("y+", { onClick: () => {
                L.value += en;
              } })
            })
          ])
        ]);
      }
    };
    function fe(m) {
      const k = { ...y.value, day: m };
      if (e.range === !1) {
        Xe(k, $e.value);
        return;
      }
      if (H.value === null) {
        const R = Ye.value.find((W) => W.fill !== !0 && W.i === m);
        if (e.noUnset !== !0 && R.range !== void 0) {
          Nt({ target: k, from: R.range.from, to: R.range.to });
          return;
        }
        if (R.selected === !0) {
          Nt(k);
          return;
        }
        const Y = $t(k);
        H.value = {
          init: k,
          initHash: Y,
          final: k,
          finalHash: Y
        }, n("rangeStart", ue(k));
      } else {
        const R = H.value.initHash, Y = $t(k), W = R <= Y ? { from: H.value.init, to: k } : { from: k, to: H.value.init };
        H.value = null, Jt(R === Y ? k : { target: k, ...W }), n("rangeEnd", {
          from: ue(W.from),
          to: ue(W.to)
        });
      }
    }
    function Ve(m) {
      if (H.value !== null) {
        const k = { ...y.value, day: m };
        Object.assign(H.value, {
          final: k,
          finalHash: $t(k)
        });
      }
    }
    return Object.assign(l, {
      setToday: ht,
      setView: wt,
      offsetCalendar: Lt,
      setCalendarTo: St,
      setEditingRange: ft
    }), () => {
      const m = [
        f("div", {
          class: "q-date__content col relative-position"
        }, [
          f(Mt, {
            name: "q-transition--fade"
          }, ce[p.value])
        ])
      ], k = We(t.default);
      return k !== void 0 && m.push(
        f("div", { class: "q-date__actions" }, k)
      ), e.name !== void 0 && e.disable !== !0 && g(m, "push"), f("div", {
        class: E.value,
        ...He.value
      }, [
        le(),
        f("div", {
          ref: b,
          class: "q-date__main col column",
          tabindex: -1
        }, m)
      ]);
    };
  }
}), qo = {
  left: !0,
  right: !0,
  up: !0,
  down: !0,
  horizontal: !0,
  vertical: !0
}, xc = Object.keys(qo);
qo.all = !0;
function Pa(e) {
  const t = {};
  for (const n of xc)
    e[n] === !0 && (t[n] = !0);
  return Object.keys(t).length === 0 ? qo : (t.horizontal === !0 ? t.left = t.right = !0 : t.left === !0 && t.right === !0 && (t.horizontal = !0), t.vertical === !0 ? t.up = t.down = !0 : t.up === !0 && t.down === !0 && (t.vertical = !0), t.horizontal === !0 && t.vertical === !0 && (t.all = !0), t);
}
const _c = ["INPUT", "TEXTAREA"];
function Ra(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== !0 && typeof t.handler == "function" && _c.includes(e.target.nodeName.toUpperCase()) === !1 && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function Yl(e, t, n) {
  const l = Sn(e);
  let o, a = l.left - t.event.x, r = l.top - t.event.y, u = Math.abs(a), c = Math.abs(r);
  const s = t.direction;
  s.horizontal === !0 && s.vertical !== !0 ? o = a < 0 ? "left" : "right" : s.horizontal !== !0 && s.vertical === !0 ? o = r < 0 ? "up" : "down" : s.up === !0 && r < 0 ? (o = "up", u > c && (s.left === !0 && a < 0 ? o = "left" : s.right === !0 && a > 0 && (o = "right"))) : s.down === !0 && r > 0 ? (o = "down", u > c && (s.left === !0 && a < 0 ? o = "left" : s.right === !0 && a > 0 && (o = "right"))) : s.left === !0 && a < 0 ? (o = "left", u < c && (s.up === !0 && r < 0 ? o = "up" : s.down === !0 && r > 0 && (o = "down"))) : s.right === !0 && a > 0 && (o = "right", u < c && (s.up === !0 && r < 0 ? o = "up" : s.down === !0 && r > 0 && (o = "down")));
  let i = !1;
  if (o === void 0 && n === !1) {
    if (t.event.isFirst === !0 || t.event.lastDir === void 0)
      return {};
    o = t.event.lastDir, i = !0, o === "left" || o === "right" ? (l.left -= a, u = 0, a = 0) : (l.top -= r, c = 0, r = 0);
  }
  return {
    synthetic: i,
    payload: {
      evt: e,
      touch: t.event.mouse !== !0,
      mouse: t.event.mouse === !0,
      position: l,
      direction: o,
      isFirst: t.event.isFirst,
      isFinal: n === !0,
      duration: Date.now() - t.event.time,
      distance: {
        x: u,
        y: c
      },
      offset: {
        x: a,
        y: r
      },
      delta: {
        x: l.left - t.event.lastX,
        y: l.top - t.event.lastY
      }
    }
  };
}
let Cc = 0;
const qc = yo(
  {
    name: "touch-pan",
    beforeMount(e, { value: t, modifiers: n }) {
      if (n.mouse !== !0 && tt.has.touch !== !0)
        return;
      function l(a, r) {
        n.mouse === !0 && r === !0 ? Fe(a) : (n.stop === !0 && gt(a), n.prevent === !0 && ct(a));
      }
      const o = {
        uid: "qvtp_" + Cc++,
        handler: t,
        modifiers: n,
        direction: Pa(n),
        noop: or,
        mouseStart(a) {
          Ra(a, o) && Gi(a) && (nn(o, "temp", [
            [document, "mousemove", "move", "notPassiveCapture"],
            [document, "mouseup", "end", "passiveCapture"]
          ]), o.start(a, !0));
        },
        touchStart(a) {
          if (Ra(a, o)) {
            const r = a.target;
            nn(o, "temp", [
              [r, "touchmove", "move", "notPassiveCapture"],
              [r, "touchcancel", "end", "passiveCapture"],
              [r, "touchend", "end", "passiveCapture"]
            ]), o.start(a);
          }
        },
        start(a, r) {
          if (tt.is.firefox === !0 && Tl(e, !0), o.lastEvt = a, r === !0 || n.stop === !0) {
            if (o.direction.all !== !0 && (r !== !0 || o.modifiers.mouseAllDir !== !0 && o.modifiers.mousealldir !== !0)) {
              const s = a.type.indexOf("mouse") !== -1 ? new MouseEvent(a.type, a) : new TouchEvent(a.type, a);
              a.defaultPrevented === !0 && ct(s), a.cancelBubble === !0 && gt(s), Object.assign(s, {
                qKeyEvent: a.qKeyEvent,
                qClickOutside: a.qClickOutside,
                qAnchorHandled: a.qAnchorHandled,
                qClonedBy: a.qClonedBy === void 0 ? [o.uid] : a.qClonedBy.concat(o.uid)
              }), o.initialEvent = {
                target: a.target,
                event: s
              };
            }
            gt(a);
          }
          const { left: u, top: c } = Sn(a);
          o.event = {
            x: u,
            y: c,
            time: Date.now(),
            mouse: r === !0,
            detected: !1,
            isFirst: !0,
            isFinal: !1,
            lastX: u,
            lastY: c
          };
        },
        move(a) {
          if (o.event === void 0)
            return;
          const r = Sn(a), u = r.left - o.event.x, c = r.top - o.event.y;
          if (u === 0 && c === 0)
            return;
          o.lastEvt = a;
          const s = o.event.mouse === !0, i = () => {
            l(a, s);
            let g;
            n.preserveCursor !== !0 && n.preservecursor !== !0 && (g = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), s === !0 && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Ar(), o.styleCleanup = (b) => {
              if (o.styleCleanup = void 0, g !== void 0 && (document.documentElement.style.cursor = g), document.body.classList.remove("non-selectable"), s === !0) {
                const x = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                b !== void 0 ? setTimeout(() => {
                  x(), b();
                }, 50) : x();
              } else b !== void 0 && b();
            };
          };
          if (o.event.detected === !0) {
            o.event.isFirst !== !0 && l(a, o.event.mouse);
            const { payload: g, synthetic: b } = Yl(a, o, !1);
            g !== void 0 && (o.handler(g) === !1 ? o.end(a) : (o.styleCleanup === void 0 && o.event.isFirst === !0 && i(), o.event.lastX = g.position.left, o.event.lastY = g.position.top, o.event.lastDir = b === !0 ? void 0 : g.direction, o.event.isFirst = !1));
            return;
          }
          if (o.direction.all === !0 || s === !0 && (o.modifiers.mouseAllDir === !0 || o.modifiers.mousealldir === !0)) {
            i(), o.event.detected = !0, o.move(a);
            return;
          }
          const v = Math.abs(u), S = Math.abs(c);
          v !== S && (o.direction.horizontal === !0 && v > S || o.direction.vertical === !0 && v < S || o.direction.up === !0 && v < S && c < 0 || o.direction.down === !0 && v < S && c > 0 || o.direction.left === !0 && v > S && u < 0 || o.direction.right === !0 && v > S && u > 0 ? (o.event.detected = !0, o.move(a)) : o.end(a, !0));
        },
        end(a, r) {
          if (o.event !== void 0) {
            if (Fn(o, "temp"), tt.is.firefox === !0 && Tl(e, !1), r === !0)
              o.styleCleanup !== void 0 && o.styleCleanup(), o.event.detected !== !0 && o.initialEvent !== void 0 && o.initialEvent.target.dispatchEvent(o.initialEvent.event);
            else if (o.event.detected === !0) {
              o.event.isFirst === !0 && o.handler(Yl(a === void 0 ? o.lastEvt : a, o).payload);
              const { payload: u } = Yl(a === void 0 ? o.lastEvt : a, o, !0), c = () => {
                o.handler(u);
              };
              o.styleCleanup !== void 0 ? o.styleCleanup(c) : c();
            }
            o.event = void 0, o.initialEvent = void 0, o.lastEvt = void 0;
          }
        }
      };
      if (e.__qtouchpan = o, n.mouse === !0) {
        const a = n.mouseCapture === !0 || n.mousecapture === !0 ? "Capture" : "";
        nn(o, "main", [
          [e, "mousedown", "mouseStart", `passive${a}`]
        ]);
      }
      tt.has.touch === !0 && nn(o, "main", [
        [e, "touchstart", "touchStart", `passive${n.capture === !0 ? "Capture" : ""}`],
        [e, "touchmove", "noop", "notPassiveCapture"]
        // cannot be passive (ex: iOS scroll)
      ]);
    },
    updated(e, t) {
      const n = e.__qtouchpan;
      n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(), n.handler = t.value), n.direction = Pa(t.modifiers));
    },
    beforeUnmount(e) {
      const t = e.__qtouchpan;
      t !== void 0 && (t.event !== void 0 && t.end(), Fn(t, "main"), Fn(t, "temp"), tt.is.firefox === !0 && Tl(e, !1), t.styleCleanup !== void 0 && t.styleCleanup(), delete e.__qtouchpan);
    }
  }
);
function Ec(e, t) {
  return e.hour !== null && e.minute === null ? "minute" : "hour";
}
function Mc() {
  const e = /* @__PURE__ */ new Date();
  return {
    hour: e.getHours(),
    minute: e.getMinutes(),
    second: e.getSeconds(),
    millisecond: e.getMilliseconds()
  };
}
const Oa = Ce({
  name: "QTime",
  props: {
    ...rt,
    ...En,
    ...gl,
    modelValue: {
      required: !0,
      validator: (e) => typeof e == "string" || e === null
    },
    mask: {
      ...gl.mask,
      default: null
    },
    format24h: {
      type: Boolean,
      default: null
    },
    defaultDate: {
      type: String,
      validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e)
    },
    options: Function,
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    withSeconds: Boolean,
    nowBtn: Boolean
  },
  emits: ei,
  setup(e, { slots: t, emit: n }) {
    const l = ke(), { $q: o } = l.proxy, a = it(e, o), { tabindex: r, headerClass: u, getLocale: c, getCurrentDate: s } = ti(e, o), i = Br(e), v = _l(i);
    let S, g;
    const b = J(null), x = d(() => ve()), h = d(() => c()), P = d(() => j()), O = Dn(
      e.modelValue,
      x.value,
      // initial mask
      h.value,
      // initial locale
      e.calendar,
      P.value
    ), _ = J(Ec(O)), y = J(O), p = J(O.hour === null || O.hour < 12), F = d(
      () => `q-time q-time--${e.landscape === !0 ? "landscape" : "portrait"}` + (a.value === !0 ? " q-time--dark q-dark" : "") + (e.disable === !0 ? " disabled" : e.readonly === !0 ? " q-time--readonly" : "") + (e.bordered === !0 ? " q-time--bordered" : "") + (e.square === !0 ? " q-time--square no-border-radius" : "") + (e.flat === !0 ? " q-time--flat no-shadow" : "")
    ), A = d(() => {
      const V = y.value;
      return {
        hour: V.hour === null ? "--" : U.value === !0 ? xe(V.hour) : String(
          p.value === !0 ? V.hour === 0 ? 12 : V.hour : V.hour > 12 ? V.hour - 12 : V.hour
        ),
        minute: V.minute === null ? "--" : xe(V.minute),
        second: V.second === null ? "--" : xe(V.second)
      };
    }), U = d(() => e.format24h !== null ? e.format24h : o.lang.date.format24h), D = d(() => {
      const V = _.value === "hour", I = V === !0 ? 12 : 60, ae = y.value[_.value];
      let Ee = `rotate(${Math.round(ae * (360 / I)) - 180}deg) translateX(-50%)`;
      return V === !0 && U.value === !0 && y.value.hour >= 12 && (Ee += " scale(.7)"), { transform: Ee };
    }), L = d(() => y.value.hour !== null), H = d(() => L.value === !0 && y.value.minute !== null), E = d(() => e.hourOptions !== void 0 ? (V) => e.hourOptions.includes(V) : e.options !== void 0 ? (V) => e.options(V, null, null) : null), $ = d(() => e.minuteOptions !== void 0 ? (V) => e.minuteOptions.includes(V) : e.options !== void 0 ? (V) => e.options(y.value.hour, V, null) : null), M = d(() => e.secondOptions !== void 0 ? (V) => e.secondOptions.includes(V) : e.options !== void 0 ? (V) => e.options(y.value.hour, y.value.minute, V) : null), K = d(() => {
      if (E.value === null)
        return null;
      const V = C(0, 11, E.value), I = C(12, 11, E.value);
      return { am: V, pm: I, values: V.values.concat(I.values) };
    }), Q = d(() => $.value !== null ? C(0, 59, $.value) : null), ne = d(() => M.value !== null ? C(0, 59, M.value) : null), N = d(() => {
      switch (_.value) {
        case "hour":
          return K.value;
        case "minute":
          return Q.value;
        case "second":
          return ne.value;
      }
    }), Z = d(() => {
      let V, I, ae = 0, be = 1;
      const Ee = N.value !== null ? N.value.values : void 0;
      _.value === "hour" ? U.value === !0 ? (V = 0, I = 23) : (V = 0, I = 11, p.value === !1 && (ae = 12)) : (V = 0, I = 55, be = 5);
      const Xe = [];
      for (let ue = V, Oe = V; ue <= I; ue += be, Oe++) {
        const Je = ue + ae, qt = Ee !== void 0 && Ee.includes(Je) === !1, Ft = _.value === "hour" && ue === 0 ? U.value === !0 ? "00" : "12" : ue;
        Xe.push({ val: Je, index: Oe, disable: qt, label: Ft });
      }
      return Xe;
    }), de = d(() => [[
      qc,
      z,
      void 0,
      {
        stop: !0,
        prevent: !0,
        mouse: !0
      }
    ]]);
    se(() => e.modelValue, (V) => {
      const I = Dn(
        V,
        x.value,
        h.value,
        e.calendar,
        P.value
      );
      (I.dateHash !== y.value.dateHash || I.timeHash !== y.value.timeHash) && (y.value = I, I.hour === null ? _.value = "hour" : p.value = I.hour < 12);
    }), se([x, h], () => {
      Le(() => {
        Rt();
      });
    });
    function q() {
      const V = {
        ...s(),
        ...Mc()
      };
      Rt(V), Object.assign(y.value, V), _.value = "hour";
    }
    function C(V, I, ae) {
      const be = Array.apply(null, { length: I + 1 }).map((Ee, Xe) => {
        const ue = Xe + V;
        return {
          index: ue,
          val: ae(ue) === !0
          // force boolean
        };
      }).filter((Ee) => Ee.val === !0).map((Ee) => Ee.index);
      return {
        min: be[0],
        max: be[be.length - 1],
        values: be,
        threshold: I + 1
      };
    }
    function G(V, I, ae) {
      const be = Math.abs(V - I);
      return Math.min(be, ae - be);
    }
    function ie(V, { min: I, max: ae, values: be, threshold: Ee }) {
      if (V === I)
        return I;
      if (V < I || V > ae)
        return G(V, I, Ee) <= G(V, ae, Ee) ? I : ae;
      const Xe = be.findIndex((Je) => V <= Je), ue = be[Xe - 1], Oe = be[Xe];
      return V - ue <= Oe - V ? ue : Oe;
    }
    function ve() {
      return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === !0 ? ":ss" : ""}`;
    }
    function j() {
      if (typeof e.defaultDate != "string") {
        const V = s(!0);
        return V.dateHash = $t(V), V;
      }
      return Dn(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
    }
    function X() {
      return Sl(l) === !0 || N.value !== null && (N.value.values.length === 0 || _.value === "hour" && U.value !== !0 && K.value[p.value === !0 ? "am" : "pm"].values.length === 0);
    }
    function ye() {
      const V = b.value, { top: I, left: ae, width: be } = V.getBoundingClientRect(), Ee = be / 2;
      return {
        top: I + Ee,
        left: ae + Ee,
        dist: Ee * 0.7
      };
    }
    function z(V) {
      if (X() !== !0) {
        if (V.isFirst === !0) {
          S = ye(), g = pe(V.evt, S);
          return;
        }
        g = pe(V.evt, S, g), V.isFinal === !0 && (S = !1, g = null, qe());
      }
    }
    function qe() {
      _.value === "hour" ? _.value = "minute" : e.withSeconds && _.value === "minute" && (_.value = "second");
    }
    function pe(V, I, ae) {
      const be = Sn(V), Ee = Math.abs(be.top - I.top), Xe = Math.sqrt(
        Math.pow(Math.abs(be.top - I.top), 2) + Math.pow(Math.abs(be.left - I.left), 2)
      );
      let ue, Oe = Math.asin(Ee / Xe) * (180 / Math.PI);
      if (be.top < I.top ? Oe = I.left < be.left ? 90 - Oe : 270 + Oe : Oe = I.left < be.left ? Oe + 90 : 270 - Oe, _.value === "hour") {
        if (ue = Oe / 30, K.value !== null) {
          const Je = U.value !== !0 ? p.value === !0 : K.value.am.values.length !== 0 && K.value.pm.values.length !== 0 ? Xe >= I.dist : K.value.am.values.length !== 0;
          ue = ie(
            ue + (Je === !0 ? 0 : 12),
            K.value[Je === !0 ? "am" : "pm"]
          );
        } else
          ue = Math.round(ue), U.value === !0 ? Xe < I.dist ? ue < 12 && (ue += 12) : ue === 12 && (ue = 0) : p.value === !0 && ue === 12 ? ue = 0 : p.value === !1 && ue !== 12 && (ue += 12);
        U.value === !0 && (p.value = ue < 12);
      } else
        ue = Math.round(Oe / 6) % 60, _.value === "minute" && Q.value !== null ? ue = ie(ue, Q.value) : _.value === "second" && ne.value !== null && (ue = ie(ue, ne.value));
      return ae !== ue && ht[_.value](ue), ue;
    }
    const Pe = {
      hour() {
        _.value = "hour";
      },
      minute() {
        _.value = "minute";
      },
      second() {
        _.value = "second";
      }
    };
    function Ne(V) {
      V.keyCode === 13 && wt();
    }
    function ut(V) {
      V.keyCode === 13 && Lt();
    }
    function nt(V) {
      X() !== !0 && (o.platform.is.desktop !== !0 && pe(V, ye()), qe());
    }
    function Qe(V) {
      X() !== !0 && pe(V, ye());
    }
    function $e(V) {
      if (V.keyCode === 13)
        _.value = "hour";
      else if ([37, 39].includes(V.keyCode)) {
        const I = V.keyCode === 37 ? -1 : 1;
        if (K.value !== null) {
          const ae = U.value === !0 ? K.value.values : K.value[p.value === !0 ? "am" : "pm"].values;
          if (ae.length === 0) return;
          if (y.value.hour === null)
            dt(ae[0]);
          else {
            const be = (ae.length + ae.indexOf(y.value.hour) + I) % ae.length;
            dt(ae[be]);
          }
        } else {
          const ae = U.value === !0 ? 24 : 12, be = U.value !== !0 && p.value === !1 ? 12 : 0, Ee = y.value.hour === null ? -I : y.value.hour;
          dt(be + (24 + Ee + I) % ae);
        }
      }
    }
    function Ct(V) {
      if (V.keyCode === 13)
        _.value = "minute";
      else if ([37, 39].includes(V.keyCode)) {
        const I = V.keyCode === 37 ? -1 : 1;
        if (Q.value !== null) {
          const ae = Q.value.values;
          if (ae.length === 0) return;
          if (y.value.minute === null)
            Ye(ae[0]);
          else {
            const be = (ae.length + ae.indexOf(y.value.minute) + I) % ae.length;
            Ye(ae[be]);
          }
        } else {
          const ae = y.value.minute === null ? -I : y.value.minute;
          Ye((60 + ae + I) % 60);
        }
      }
    }
    function Dt(V) {
      if (V.keyCode === 13)
        _.value = "second";
      else if ([37, 39].includes(V.keyCode)) {
        const I = V.keyCode === 37 ? -1 : 1;
        if (ne.value !== null) {
          const ae = ne.value.values;
          if (ae.length === 0) return;
          if (y.value.seconds === null)
            He(ae[0]);
          else {
            const be = (ae.length + ae.indexOf(y.value.second) + I) % ae.length;
            He(ae[be]);
          }
        } else {
          const ae = y.value.second === null ? -I : y.value.second;
          He((60 + ae + I) % 60);
        }
      }
    }
    function dt(V) {
      y.value.hour !== V && (y.value.hour = V, ft());
    }
    function Ye(V) {
      y.value.minute !== V && (y.value.minute = V, ft());
    }
    function He(V) {
      y.value.second !== V && (y.value.second = V, ft());
    }
    const ht = {
      hour: dt,
      minute: Ye,
      second: He
    };
    function wt() {
      p.value === !1 && (p.value = !0, y.value.hour !== null && (y.value.hour -= 12, ft()));
    }
    function Lt() {
      p.value === !0 && (p.value = !1, y.value.hour !== null && (y.value.hour += 12, ft()));
    }
    function St(V) {
      const I = e.modelValue;
      _.value !== V && I !== void 0 && I !== null && I !== "" && typeof I != "string" && (_.value = V);
    }
    function ft() {
      if (E.value !== null && E.value(y.value.hour) !== !0) {
        y.value = Dn(), St("hour");
        return;
      }
      if ($.value !== null && $.value(y.value.minute) !== !0) {
        y.value.minute = null, y.value.second = null, St("minute");
        return;
      }
      if (e.withSeconds === !0 && M.value !== null && M.value(y.value.second) !== !0) {
        y.value.second = null, St("second");
        return;
      }
      y.value.hour === null || y.value.minute === null || e.withSeconds === !0 && y.value.second === null || Rt();
    }
    function Rt(V) {
      const I = Object.assign({ ...y.value }, V), ae = e.calendar === "persian" ? xe(I.hour) + ":" + xe(I.minute) + (e.withSeconds === !0 ? ":" + xe(I.second) : "") : ri(
        new Date(
          I.year,
          I.month === null ? null : I.month - 1,
          I.day,
          I.hour,
          I.minute,
          I.second,
          I.millisecond
        ),
        x.value,
        h.value,
        I.year,
        I.timezoneOffset
      );
      I.changed = ae !== e.modelValue, n("update:modelValue", ae, I);
    }
    function Ot() {
      const V = [
        f("div", {
          class: "q-time__link " + (_.value === "hour" ? "q-time__link--active" : "cursor-pointer"),
          tabindex: r.value,
          onClick: Pe.hour,
          onKeyup: $e
        }, A.value.hour),
        f("div", ":"),
        f(
          "div",
          L.value === !0 ? {
            class: "q-time__link " + (_.value === "minute" ? "q-time__link--active" : "cursor-pointer"),
            tabindex: r.value,
            onKeyup: Ct,
            onClick: Pe.minute
          } : { class: "q-time__link" },
          A.value.minute
        )
      ];
      e.withSeconds === !0 && V.push(
        f("div", ":"),
        f(
          "div",
          H.value === !0 ? {
            class: "q-time__link " + (_.value === "second" ? "q-time__link--active" : "cursor-pointer"),
            tabindex: r.value,
            onKeyup: Dt,
            onClick: Pe.second
          } : { class: "q-time__link" },
          A.value.second
        )
      );
      const I = [
        f("div", {
          class: "q-time__header-label row items-center no-wrap",
          dir: "ltr"
        }, V)
      ];
      return U.value === !1 && I.push(
        f("div", {
          class: "q-time__header-ampm column items-between no-wrap"
        }, [
          f("div", {
            class: "q-time__link " + (p.value === !0 ? "q-time__link--active" : "cursor-pointer"),
            tabindex: r.value,
            onClick: wt,
            onKeyup: Ne
          }, "AM"),
          f("div", {
            class: "q-time__link " + (p.value !== !0 ? "q-time__link--active" : "cursor-pointer"),
            tabindex: r.value,
            onClick: Lt,
            onKeyup: ut
          }, "PM")
        ])
      ), f("div", {
        class: "q-time__header flex flex-center no-wrap " + u.value
      }, I);
    }
    function lt() {
      const V = y.value[_.value];
      return f("div", {
        class: "q-time__content col relative-position"
      }, [
        f(Mt, {
          name: "q-transition--scale"
        }, () => f("div", {
          key: "clock" + _.value,
          class: "q-time__container-parent absolute-full"
        }, [
          f("div", {
            ref: b,
            class: "q-time__container-child fit overflow-hidden"
          }, [
            At(
              f("div", {
                class: "q-time__clock cursor-pointer non-selectable",
                onClick: nt,
                onMousedown: Qe
              }, [
                f("div", { class: "q-time__clock-circle fit" }, [
                  f("div", {
                    class: "q-time__clock-pointer" + (y.value[_.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""),
                    style: D.value
                  }),
                  Z.value.map((I) => f("div", {
                    class: `q-time__clock-position row flex-center q-time__clock-pos-${I.index}` + (I.val === V ? " q-time__clock-position--active " + u.value : I.disable === !0 ? " q-time__clock-position--disable" : "")
                  }, [f("span", I.label)]))
                ])
              ]),
              de.value
            )
          ])
        ])),
        e.nowBtn === !0 ? f(Re, {
          class: "q-time__now-button absolute",
          icon: o.iconSet.datetime.now,
          unelevated: !0,
          size: "sm",
          round: !0,
          color: e.color,
          textColor: e.textColor,
          tabindex: r.value,
          onClick: q
        }) : null
      ]);
    }
    return l.proxy.setNow = q, () => {
      const V = [lt()], I = We(t.default);
      return I !== void 0 && V.push(
        f("div", { class: "q-time__actions" }, I)
      ), e.name !== void 0 && e.disable !== !0 && v(V, "push"), f("div", {
        class: F.value,
        tabindex: -1
      }, [
        Ot(),
        f("div", { class: "q-time__main col overflow-auto" }, V)
      ]);
    };
  }
}), Kl = Ce({
  name: "QPopupProxy",
  props: {
    ...Dr,
    breakpoint: {
      type: [String, Number],
      default: 450
    }
  },
  emits: ["show", "hide"],
  setup(e, { slots: t, emit: n, attrs: l }) {
    const { proxy: o } = ke(), { $q: a } = o, r = J(!1), u = J(null), c = d(() => parseInt(e.breakpoint, 10)), { canShow: s } = Lr({ showing: r });
    function i() {
      return a.screen.width < c.value || a.screen.height < c.value ? "dialog" : "menu";
    }
    const v = J(i()), S = d(
      () => v.value === "menu" ? { maxHeight: "99vh" } : {}
    );
    se(() => i(), (x) => {
      r.value !== !0 && (v.value = x);
    });
    function g(x) {
      r.value = !0, n("show", x);
    }
    function b(x) {
      r.value = !1, v.value = i(), n("hide", x);
    }
    return Object.assign(o, {
      show(x) {
        s(x) === !0 && u.value.show(x);
      },
      hide(x) {
        u.value.hide(x);
      },
      toggle(x) {
        u.value.toggle(x);
      }
    }), _t(o, "currentComponent", () => ({
      type: v.value,
      ref: u.value
    })), () => {
      const x = {
        ref: u,
        ...S.value,
        ...l,
        onShow: g,
        onHide: b
      };
      let h;
      return v.value === "dialog" ? h = kl : (h = $r, Object.assign(x, {
        target: e.target,
        contextMenu: e.contextMenu,
        noParentEvent: !0,
        separateClosePopup: !0
      })), f(h, x, t.default);
    };
  }
}), Pc = () => f("svg", {
  key: "svg",
  class: "q-radio__bg absolute non-selectable",
  viewBox: "0 0 24 24"
}, [
  f("path", {
    d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
  }),
  f("path", {
    class: "q-radio__check",
    d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
  })
]), Rc = Ce({
  name: "QRadio",
  props: {
    ...rt,
    ...Cn,
    ...En,
    modelValue: { required: !0 },
    val: { required: !0 },
    label: String,
    leftLabel: Boolean,
    checkedIcon: String,
    uncheckedIcon: String,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(e, { slots: t, emit: n }) {
    const { proxy: l } = ke(), o = it(e, l.$q), a = qn(e, Kr), r = J(null), { refocusTargetEl: u, refocusTarget: c } = Yr(e, r), s = d(() => Yt(e.modelValue) === Yt(e.val)), i = d(
      () => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === !0 ? " disabled" : "") + (o.value === !0 ? " q-radio--dark" : "") + (e.dense === !0 ? " q-radio--dense" : "") + (e.leftLabel === !0 ? " reverse" : "")
    ), v = d(() => {
      const y = e.color !== void 0 && (e.keepColor === !0 || s.value === !0) ? ` text-${e.color}` : "";
      return `q-radio__inner relative-position q-radio__inner--${s.value === !0 ? "truthy" : "falsy"}${y}`;
    }), S = d(
      () => (s.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null
    ), g = d(() => e.disable === !0 ? -1 : e.tabindex || 0), b = d(() => {
      const y = { type: "radio" };
      return e.name !== void 0 && Object.assign(y, {
        // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
        ".checked": s.value === !0,
        "^checked": s.value === !0 ? "checked" : void 0,
        name: e.name,
        value: e.val
      }), y;
    }), x = _l(b);
    function h(y) {
      y !== void 0 && (Fe(y), c(y)), e.disable !== !0 && s.value !== !0 && n("update:modelValue", e.val, y);
    }
    function P(y) {
      (y.keyCode === 13 || y.keyCode === 32) && Fe(y);
    }
    function O(y) {
      (y.keyCode === 13 || y.keyCode === 32) && h(y);
    }
    Object.assign(l, { set: h });
    const _ = Pc();
    return () => {
      const y = S.value !== null ? [
        f("div", {
          key: "icon",
          class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
        }, [
          f(yt, {
            class: "q-radio__icon",
            name: S.value
          })
        ])
      ] : [_];
      e.disable !== !0 && x(
        y,
        "unshift",
        " q-radio__native q-ma-none q-pa-none"
      );
      const p = [
        f("div", {
          class: v.value,
          style: a.value,
          "aria-hidden": "true"
        }, y)
      ];
      u.value !== null && p.push(u.value);
      const F = e.label !== void 0 ? Vt(t.default, [e.label]) : We(t.default);
      return F !== void 0 && p.push(
        f("div", {
          class: "q-radio__label q-anchor--skip"
        }, F)
      ), f("div", {
        ref: r,
        class: i.value,
        tabindex: g.value,
        role: "radio",
        "aria-label": e.label,
        "aria-checked": s.value === !0 ? "true" : "false",
        "aria-disabled": e.disable === !0 ? "true" : void 0,
        onClick: h,
        onKeydown: P,
        onKeyup: O
      }, p);
    };
  }
}), Oc = Ce({
  name: "QToggle",
  props: {
    ...Wr,
    icon: String,
    iconColor: String
  },
  emits: Qr,
  setup(e) {
    function t(n, l) {
      const o = d(
        () => (n.value === !0 ? e.checkedIcon : l.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || e.icon
      ), a = d(() => n.value === !0 ? e.iconColor : null);
      return () => [
        f("div", { class: "q-toggle__track" }),
        f(
          "div",
          {
            class: "q-toggle__thumb absolute flex flex-center no-wrap"
          },
          o.value !== void 0 ? [
            f(yt, {
              name: o.value,
              color: a.value
            })
          ] : void 0
        )
      ];
    }
    return Xr("toggle", t);
  }
}), ii = {
  radio: Rc,
  checkbox: Hn,
  toggle: Oc
}, Bc = Object.keys(ii), Ba = Ce({
  name: "QOptionGroup",
  props: {
    ...rt,
    modelValue: {
      required: !0
    },
    options: {
      type: Array,
      validator: (e) => e.every((t) => "value" in t && "label" in t)
    },
    name: String,
    type: {
      type: String,
      default: "radio",
      validator: (e) => Bc.includes(e)
    },
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    size: String,
    leftLabel: Boolean,
    inline: Boolean,
    disable: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t, slots: n }) {
    const { proxy: { $q: l } } = ke(), o = Array.isArray(e.modelValue);
    e.type === "radio" ? o === !0 && console.error("q-option-group: model should not be array") : o === !1 && console.error("q-option-group: model should be array in your case");
    const a = it(e, l), r = d(() => ii[e.type]), u = d(
      () => "q-option-group q-gutter-x-sm" + (e.inline === !0 ? " q-option-group--inline" : "")
    ), c = d(() => {
      const i = { role: "group" };
      return e.type === "radio" && (i.role = "radiogroup", e.disable === !0 && (i["aria-disabled"] = "true")), i;
    });
    function s(i) {
      t("update:modelValue", i);
    }
    return () => f("div", {
      class: u.value,
      ...c.value
    }, e.options.map((i, v) => {
      const S = n["label-" + v] !== void 0 ? () => n["label-" + v](i) : n.label !== void 0 ? () => n.label(i) : void 0;
      return f("div", [
        f(r.value, {
          modelValue: e.modelValue,
          val: i.value,
          name: i.name === void 0 ? e.name : i.name,
          disable: e.disable || i.disable,
          label: S === void 0 ? i.label : null,
          leftLabel: i.leftLabel === void 0 ? e.leftLabel : i.leftLabel,
          color: i.color === void 0 ? e.color : i.color,
          checkedIcon: i.checkedIcon,
          uncheckedIcon: i.uncheckedIcon,
          dark: i.dark || a.value,
          size: i.size === void 0 ? e.size : i.size,
          dense: e.dense,
          keepColor: i.keepColor === void 0 ? e.keepColor : i.keepColor,
          "onUpdate:modelValue": s
        }, S)
      ]);
    }));
  }
});
function ui(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Tc } = Object.prototype, { getPrototypeOf: Eo } = Object, Cl = /* @__PURE__ */ ((e) => (t) => {
  const n = Tc.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Pt = (e) => (e = e.toLowerCase(), (t) => Cl(t) === e), ql = (e) => (t) => typeof t === e, { isArray: Mn } = Array, zn = ql("undefined");
function Vc(e) {
  return e !== null && !zn(e) && e.constructor !== null && !zn(e.constructor) && pt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const si = Pt("ArrayBuffer");
function Ac(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && si(e.buffer), t;
}
const Dc = ql("string"), pt = ql("function"), ci = ql("number"), El = (e) => e !== null && typeof e == "object", Lc = (e) => e === !0 || e === !1, ul = (e) => {
  if (Cl(e) !== "object")
    return !1;
  const t = Eo(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Fc = Pt("Date"), $c = Pt("File"), Hc = Pt("Blob"), Ic = Pt("FileList"), jc = (e) => El(e) && pt(e.pipe), Nc = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || pt(e.append) && ((t = Cl(e)) === "formdata" || // detect form-data instance
  t === "object" && pt(e.toString) && e.toString() === "[object FormData]"));
}, zc = Pt("URLSearchParams"), [Uc, Yc, Kc, Wc] = ["ReadableStream", "Request", "Response", "Headers"].map(Pt), Qc = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let l, o;
  if (typeof e != "object" && (e = [e]), Mn(e))
    for (l = 0, o = e.length; l < o; l++)
      t.call(null, e[l], l, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), r = a.length;
    let u;
    for (l = 0; l < r; l++)
      u = a[l], t.call(null, e[u], u, e);
  }
}
function di(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let l = n.length, o;
  for (; l-- > 0; )
    if (o = n[l], t === o.toLowerCase())
      return o;
  return null;
}
const on = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, fi = (e) => !zn(e) && e !== on;
function co() {
  const { caseless: e } = fi(this) && this || {}, t = {}, n = (l, o) => {
    const a = e && di(t, o) || o;
    ul(t[a]) && ul(l) ? t[a] = co(t[a], l) : ul(l) ? t[a] = co({}, l) : Mn(l) ? t[a] = l.slice() : t[a] = l;
  };
  for (let l = 0, o = arguments.length; l < o; l++)
    arguments[l] && Wn(arguments[l], n);
  return t;
}
const Xc = (e, t, n, { allOwnKeys: l } = {}) => (Wn(t, (o, a) => {
  n && pt(o) ? e[a] = ui(o, n) : e[a] = o;
}, { allOwnKeys: l }), e), Jc = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Zc = (e, t, n, l) => {
  e.prototype = Object.create(t.prototype, l), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Gc = (e, t, n, l) => {
  let o, a, r;
  const u = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      r = o[a], (!l || l(r, e, t)) && !u[r] && (t[r] = e[r], u[r] = !0);
    e = n !== !1 && Eo(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ed = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const l = e.indexOf(t, n);
  return l !== -1 && l === n;
}, td = (e) => {
  if (!e) return null;
  if (Mn(e)) return e;
  let t = e.length;
  if (!ci(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, nd = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Eo(Uint8Array)), ld = (e, t) => {
  const l = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = l.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, od = (e, t) => {
  let n;
  const l = [];
  for (; (n = e.exec(t)) !== null; )
    l.push(n);
  return l;
}, ad = Pt("HTMLFormElement"), rd = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, l, o) {
    return l.toUpperCase() + o;
  }
), Ta = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), id = Pt("RegExp"), vi = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), l = {};
  Wn(n, (o, a) => {
    let r;
    (r = t(o, a, e)) !== !1 && (l[a] = r || o);
  }), Object.defineProperties(e, l);
}, ud = (e) => {
  vi(e, (t, n) => {
    if (pt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const l = e[n];
    if (pt(l)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, sd = (e, t) => {
  const n = {}, l = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return Mn(e) ? l(e) : l(String(e).split(t)), n;
}, cd = () => {
}, dd = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Wl = "abcdefghijklmnopqrstuvwxyz", Va = "0123456789", mi = {
  DIGIT: Va,
  ALPHA: Wl,
  ALPHA_DIGIT: Wl + Wl.toUpperCase() + Va
}, fd = (e = 16, t = mi.ALPHA_DIGIT) => {
  let n = "";
  const { length: l } = t;
  for (; e--; )
    n += t[Math.random() * l | 0];
  return n;
};
function vd(e) {
  return !!(e && pt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const md = (e) => {
  const t = new Array(10), n = (l, o) => {
    if (El(l)) {
      if (t.indexOf(l) >= 0)
        return;
      if (!("toJSON" in l)) {
        t[o] = l;
        const a = Mn(l) ? [] : {};
        return Wn(l, (r, u) => {
          const c = n(r, o + 1);
          !zn(c) && (a[u] = c);
        }), t[o] = void 0, a;
      }
    }
    return l;
  };
  return n(e, 0);
}, hd = Pt("AsyncFunction"), gd = (e) => e && (El(e) || pt(e)) && pt(e.then) && pt(e.catch), hi = ((e, t) => e ? setImmediate : t ? ((n, l) => (on.addEventListener("message", ({ source: o, data: a }) => {
  o === on && a === n && l.length && l.shift()();
}, !1), (o) => {
  l.push(o), on.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  pt(on.postMessage)
), bd = typeof queueMicrotask < "u" ? queueMicrotask.bind(on) : typeof process < "u" && process.nextTick || hi, B = {
  isArray: Mn,
  isArrayBuffer: si,
  isBuffer: Vc,
  isFormData: Nc,
  isArrayBufferView: Ac,
  isString: Dc,
  isNumber: ci,
  isBoolean: Lc,
  isObject: El,
  isPlainObject: ul,
  isReadableStream: Uc,
  isRequest: Yc,
  isResponse: Kc,
  isHeaders: Wc,
  isUndefined: zn,
  isDate: Fc,
  isFile: $c,
  isBlob: Hc,
  isRegExp: id,
  isFunction: pt,
  isStream: jc,
  isURLSearchParams: zc,
  isTypedArray: nd,
  isFileList: Ic,
  forEach: Wn,
  merge: co,
  extend: Xc,
  trim: Qc,
  stripBOM: Jc,
  inherits: Zc,
  toFlatObject: Gc,
  kindOf: Cl,
  kindOfTest: Pt,
  endsWith: ed,
  toArray: td,
  forEachEntry: ld,
  matchAll: od,
  isHTMLForm: ad,
  hasOwnProperty: Ta,
  hasOwnProp: Ta,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: vi,
  freezeMethods: ud,
  toObjectSet: sd,
  toCamelCase: rd,
  noop: cd,
  toFiniteNumber: dd,
  findKey: di,
  global: on,
  isContextDefined: fi,
  ALPHABET: mi,
  generateString: fd,
  isSpecCompliantForm: vd,
  toJSONObject: md,
  isAsyncFn: hd,
  isThenable: gd,
  setImmediate: hi,
  asap: bd
};
function ge(e, t, n, l, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), l && (this.request = l), o && (this.response = o, this.status = o.status ? o.status : null);
}
B.inherits(ge, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const gi = ge.prototype, bi = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  bi[e] = { value: e };
});
Object.defineProperties(ge, bi);
Object.defineProperty(gi, "isAxiosError", { value: !0 });
ge.from = (e, t, n, l, o, a) => {
  const r = Object.create(gi);
  return B.toFlatObject(e, r, function(c) {
    return c !== Error.prototype;
  }, (u) => u !== "isAxiosError"), ge.call(r, e.message, t, n, l, o), r.cause = e, r.name = e.name, a && Object.assign(r, a), r;
};
const yd = null;
function fo(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function yi(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Aa(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = yi(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function pd(e) {
  return B.isArray(e) && !e.some(fo);
}
const wd = B.toFlatObject(B, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ml(e, t, n) {
  if (!B.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = B.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, h) {
    return !B.isUndefined(h[x]);
  });
  const l = n.metaTokens, o = n.visitor || i, a = n.dots, r = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(t);
  if (!B.isFunction(o))
    throw new TypeError("visitor must be a function");
  function s(b) {
    if (b === null) return "";
    if (B.isDate(b))
      return b.toISOString();
    if (!c && B.isBlob(b))
      throw new ge("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(b) || B.isTypedArray(b) ? c && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function i(b, x, h) {
    let P = b;
    if (b && !h && typeof b == "object") {
      if (B.endsWith(x, "{}"))
        x = l ? x : x.slice(0, -2), b = JSON.stringify(b);
      else if (B.isArray(b) && pd(b) || (B.isFileList(b) || B.endsWith(x, "[]")) && (P = B.toArray(b)))
        return x = yi(x), P.forEach(function(_, y) {
          !(B.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            r === !0 ? Aa([x], y, a) : r === null ? x : x + "[]",
            s(_)
          );
        }), !1;
    }
    return fo(b) ? !0 : (t.append(Aa(h, x, a), s(b)), !1);
  }
  const v = [], S = Object.assign(wd, {
    defaultVisitor: i,
    convertValue: s,
    isVisitable: fo
  });
  function g(b, x) {
    if (!B.isUndefined(b)) {
      if (v.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      v.push(b), B.forEach(b, function(P, O) {
        (!(B.isUndefined(P) || P === null) && o.call(
          t,
          P,
          B.isString(O) ? O.trim() : O,
          x,
          S
        )) === !0 && g(P, x ? x.concat(O) : [O]);
      }), v.pop();
    }
  }
  if (!B.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function Da(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(l) {
    return t[l];
  });
}
function Mo(e, t) {
  this._pairs = [], e && Ml(e, this, t);
}
const pi = Mo.prototype;
pi.append = function(t, n) {
  this._pairs.push([t, n]);
};
pi.toString = function(t) {
  const n = t ? function(l) {
    return t.call(this, l, Da);
  } : Da;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Sd(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function wi(e, t, n) {
  if (!t)
    return e;
  const l = n && n.encode || Sd, o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = B.isURLSearchParams(t) ? t.toString() : new Mo(t, n).toString(l), a) {
    const r = e.indexOf("#");
    r !== -1 && (e = e.slice(0, r)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class La {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, l) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: l ? l.synchronous : !1,
      runWhen: l ? l.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    B.forEach(this.handlers, function(l) {
      l !== null && t(l);
    });
  }
}
const Si = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, kd = typeof URLSearchParams < "u" ? URLSearchParams : Mo, xd = typeof FormData < "u" ? FormData : null, _d = typeof Blob < "u" ? Blob : null, Cd = {
  isBrowser: !0,
  classes: {
    URLSearchParams: kd,
    FormData: xd,
    Blob: _d
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Po = typeof window < "u" && typeof document < "u", vo = typeof navigator == "object" && navigator || void 0, qd = Po && (!vo || ["ReactNative", "NativeScript", "NS"].indexOf(vo.product) < 0), Ed = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Md = Po && window.location.href || "http://localhost", Pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Po,
  hasStandardBrowserEnv: qd,
  hasStandardBrowserWebWorkerEnv: Ed,
  navigator: vo,
  origin: Md
}, Symbol.toStringTag, { value: "Module" })), vt = {
  ...Pd,
  ...Cd
};
function Rd(e, t) {
  return Ml(e, new vt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, l, o, a) {
      return vt.isNode && B.isBuffer(n) ? (this.append(l, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Od(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Bd(e) {
  const t = {}, n = Object.keys(e);
  let l;
  const o = n.length;
  let a;
  for (l = 0; l < o; l++)
    a = n[l], t[a] = e[a];
  return t;
}
function ki(e) {
  function t(n, l, o, a) {
    let r = n[a++];
    if (r === "__proto__") return !0;
    const u = Number.isFinite(+r), c = a >= n.length;
    return r = !r && B.isArray(o) ? o.length : r, c ? (B.hasOwnProp(o, r) ? o[r] = [o[r], l] : o[r] = l, !u) : ((!o[r] || !B.isObject(o[r])) && (o[r] = []), t(n, l, o[r], a) && B.isArray(o[r]) && (o[r] = Bd(o[r])), !u);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const n = {};
    return B.forEachEntry(e, (l, o) => {
      t(Od(l), o, n, 0);
    }), n;
  }
  return null;
}
function Td(e, t, n) {
  if (B.isString(e))
    try {
      return (t || JSON.parse)(e), B.trim(e);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (n || JSON.stringify)(e);
}
const Qn = {
  transitional: Si,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const l = n.getContentType() || "", o = l.indexOf("application/json") > -1, a = B.isObject(t);
    if (a && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t))
      return o ? JSON.stringify(ki(t)) : t;
    if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t) || B.isReadableStream(t))
      return t;
    if (B.isArrayBufferView(t))
      return t.buffer;
    if (B.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (a) {
      if (l.indexOf("application/x-www-form-urlencoded") > -1)
        return Rd(t, this.formSerializer).toString();
      if ((u = B.isFileList(t)) || l.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Ml(
          u ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), Td(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Qn.transitional, l = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (B.isResponse(t) || B.isReadableStream(t))
      return t;
    if (t && B.isString(t) && (l && !this.responseType || o)) {
      const r = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (r)
          throw u.name === "SyntaxError" ? ge.from(u, ge.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: vt.classes.FormData,
    Blob: vt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
B.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Qn.headers[e] = {};
});
const Vd = B.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Ad = (e) => {
  const t = {};
  let n, l, o;
  return e && e.split(`
`).forEach(function(r) {
    o = r.indexOf(":"), n = r.substring(0, o).trim().toLowerCase(), l = r.substring(o + 1).trim(), !(!n || t[n] && Vd[n]) && (n === "set-cookie" ? t[n] ? t[n].push(l) : t[n] = [l] : t[n] = t[n] ? t[n] + ", " + l : l);
  }), t;
}, Fa = Symbol("internals");
function Vn(e) {
  return e && String(e).trim().toLowerCase();
}
function sl(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(sl) : String(e);
}
function Dd(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let l;
  for (; l = n.exec(e); )
    t[l[1]] = l[2];
  return t;
}
const Ld = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ql(e, t, n, l, o) {
  if (B.isFunction(l))
    return l.call(this, t, n);
  if (o && (t = n), !!B.isString(t)) {
    if (B.isString(l))
      return t.indexOf(l) !== -1;
    if (B.isRegExp(l))
      return l.test(t);
  }
}
function Fd(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, l) => n.toUpperCase() + l);
}
function $d(e, t) {
  const n = B.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((l) => {
    Object.defineProperty(e, l + n, {
      value: function(o, a, r) {
        return this[l].call(this, t, o, a, r);
      },
      configurable: !0
    });
  });
}
class mt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, l) {
    const o = this;
    function a(u, c, s) {
      const i = Vn(c);
      if (!i)
        throw new Error("header name must be a non-empty string");
      const v = B.findKey(o, i);
      (!v || o[v] === void 0 || s === !0 || s === void 0 && o[v] !== !1) && (o[v || c] = sl(u));
    }
    const r = (u, c) => B.forEach(u, (s, i) => a(s, i, c));
    if (B.isPlainObject(t) || t instanceof this.constructor)
      r(t, n);
    else if (B.isString(t) && (t = t.trim()) && !Ld(t))
      r(Ad(t), n);
    else if (B.isHeaders(t))
      for (const [u, c] of t.entries())
        a(c, u, l);
    else
      t != null && a(n, t, l);
    return this;
  }
  get(t, n) {
    if (t = Vn(t), t) {
      const l = B.findKey(this, t);
      if (l) {
        const o = this[l];
        if (!n)
          return o;
        if (n === !0)
          return Dd(o);
        if (B.isFunction(n))
          return n.call(this, o, l);
        if (B.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Vn(t), t) {
      const l = B.findKey(this, t);
      return !!(l && this[l] !== void 0 && (!n || Ql(this, this[l], l, n)));
    }
    return !1;
  }
  delete(t, n) {
    const l = this;
    let o = !1;
    function a(r) {
      if (r = Vn(r), r) {
        const u = B.findKey(l, r);
        u && (!n || Ql(l, l[u], u, n)) && (delete l[u], o = !0);
      }
    }
    return B.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let l = n.length, o = !1;
    for (; l--; ) {
      const a = n[l];
      (!t || Ql(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, l = {};
    return B.forEach(this, (o, a) => {
      const r = B.findKey(l, a);
      if (r) {
        n[r] = sl(o), delete n[a];
        return;
      }
      const u = t ? Fd(a) : String(a).trim();
      u !== a && delete n[a], n[u] = sl(o), l[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return B.forEach(this, (l, o) => {
      l != null && l !== !1 && (n[o] = t && B.isArray(l) ? l.join(", ") : l);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const l = new this(t);
    return n.forEach((o) => l.set(o)), l;
  }
  static accessor(t) {
    const l = (this[Fa] = this[Fa] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(r) {
      const u = Vn(r);
      l[u] || ($d(o, r), l[u] = !0);
    }
    return B.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.reduceDescriptors(mt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(l) {
      this[n] = l;
    }
  };
});
B.freezeMethods(mt);
function Xl(e, t) {
  const n = this || Qn, l = t || n, o = mt.from(l.headers);
  let a = l.data;
  return B.forEach(e, function(u) {
    a = u.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function xi(e) {
  return !!(e && e.__CANCEL__);
}
function Pn(e, t, n) {
  ge.call(this, e ?? "canceled", ge.ERR_CANCELED, t, n), this.name = "CanceledError";
}
B.inherits(Pn, ge, {
  __CANCEL__: !0
});
function _i(e, t, n) {
  const l = n.config.validateStatus;
  !n.status || !l || l(n.status) ? e(n) : t(new ge(
    "Request failed with status code " + n.status,
    [ge.ERR_BAD_REQUEST, ge.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Hd(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Id(e, t) {
  e = e || 10;
  const n = new Array(e), l = new Array(e);
  let o = 0, a = 0, r;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const s = Date.now(), i = l[a];
    r || (r = s), n[o] = c, l[o] = s;
    let v = a, S = 0;
    for (; v !== o; )
      S += n[v++], v = v % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), s - r < t)
      return;
    const g = i && s - i;
    return g ? Math.round(S * 1e3 / g) : void 0;
  };
}
function jd(e, t) {
  let n = 0, l = 1e3 / t, o, a;
  const r = (s, i = Date.now()) => {
    n = i, o = null, a && (clearTimeout(a), a = null), e.apply(null, s);
  };
  return [(...s) => {
    const i = Date.now(), v = i - n;
    v >= l ? r(s, i) : (o = s, a || (a = setTimeout(() => {
      a = null, r(o);
    }, l - v)));
  }, () => o && r(o)];
}
const bl = (e, t, n = 3) => {
  let l = 0;
  const o = Id(50, 250);
  return jd((a) => {
    const r = a.loaded, u = a.lengthComputable ? a.total : void 0, c = r - l, s = o(c), i = r <= u;
    l = r;
    const v = {
      loaded: r,
      total: u,
      progress: u ? r / u : void 0,
      bytes: c,
      rate: s || void 0,
      estimated: s && u && i ? (u - r) / s : void 0,
      event: a,
      lengthComputable: u != null,
      [t ? "download" : "upload"]: !0
    };
    e(v);
  }, n);
}, $a = (e, t) => {
  const n = e != null;
  return [(l) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: l
  }), t[1]];
}, Ha = (e) => (...t) => B.asap(() => e(...t)), Nd = vt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = vt.navigator && /(msie|trident)/i.test(vt.navigator.userAgent), n = document.createElement("a");
    let l;
    function o(a) {
      let r = a;
      return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return l = o(window.location.href), function(r) {
      const u = B.isString(r) ? o(r) : r;
      return u.protocol === l.protocol && u.host === l.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), zd = vt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, l, o, a) {
      const r = [e + "=" + encodeURIComponent(t)];
      B.isNumber(n) && r.push("expires=" + new Date(n).toGMTString()), B.isString(l) && r.push("path=" + l), B.isString(o) && r.push("domain=" + o), a === !0 && r.push("secure"), document.cookie = r.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ud(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Yd(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ci(e, t) {
  return e && !Ud(t) ? Yd(e, t) : t;
}
const Ia = (e) => e instanceof mt ? { ...e } : e;
function dn(e, t) {
  t = t || {};
  const n = {};
  function l(s, i, v) {
    return B.isPlainObject(s) && B.isPlainObject(i) ? B.merge.call({ caseless: v }, s, i) : B.isPlainObject(i) ? B.merge({}, i) : B.isArray(i) ? i.slice() : i;
  }
  function o(s, i, v) {
    if (B.isUndefined(i)) {
      if (!B.isUndefined(s))
        return l(void 0, s, v);
    } else return l(s, i, v);
  }
  function a(s, i) {
    if (!B.isUndefined(i))
      return l(void 0, i);
  }
  function r(s, i) {
    if (B.isUndefined(i)) {
      if (!B.isUndefined(s))
        return l(void 0, s);
    } else return l(void 0, i);
  }
  function u(s, i, v) {
    if (v in t)
      return l(s, i);
    if (v in e)
      return l(void 0, s);
  }
  const c = {
    url: a,
    method: a,
    data: a,
    baseURL: r,
    transformRequest: r,
    transformResponse: r,
    paramsSerializer: r,
    timeout: r,
    timeoutMessage: r,
    withCredentials: r,
    withXSRFToken: r,
    adapter: r,
    responseType: r,
    xsrfCookieName: r,
    xsrfHeaderName: r,
    onUploadProgress: r,
    onDownloadProgress: r,
    decompress: r,
    maxContentLength: r,
    maxBodyLength: r,
    beforeRedirect: r,
    transport: r,
    httpAgent: r,
    httpsAgent: r,
    cancelToken: r,
    socketPath: r,
    responseEncoding: r,
    validateStatus: u,
    headers: (s, i) => o(Ia(s), Ia(i), !0)
  };
  return B.forEach(Object.keys(Object.assign({}, e, t)), function(i) {
    const v = c[i] || o, S = v(e[i], t[i], i);
    B.isUndefined(S) && v !== u || (n[i] = S);
  }), n;
}
const qi = (e) => {
  const t = dn({}, e);
  let { data: n, withXSRFToken: l, xsrfHeaderName: o, xsrfCookieName: a, headers: r, auth: u } = t;
  t.headers = r = mt.from(r), t.url = wi(Ci(t.baseURL, t.url), e.params, e.paramsSerializer), u && r.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? unescape(encodeURIComponent(u.password)) : ""))
  );
  let c;
  if (B.isFormData(n)) {
    if (vt.hasStandardBrowserEnv || vt.hasStandardBrowserWebWorkerEnv)
      r.setContentType(void 0);
    else if ((c = r.getContentType()) !== !1) {
      const [s, ...i] = c ? c.split(";").map((v) => v.trim()).filter(Boolean) : [];
      r.setContentType([s || "multipart/form-data", ...i].join("; "));
    }
  }
  if (vt.hasStandardBrowserEnv && (l && B.isFunction(l) && (l = l(t)), l || l !== !1 && Nd(t.url))) {
    const s = o && a && zd.read(a);
    s && r.set(o, s);
  }
  return t;
}, Kd = typeof XMLHttpRequest < "u", Wd = Kd && function(e) {
  return new Promise(function(n, l) {
    const o = qi(e);
    let a = o.data;
    const r = mt.from(o.headers).normalize();
    let { responseType: u, onUploadProgress: c, onDownloadProgress: s } = o, i, v, S, g, b;
    function x() {
      g && g(), b && b(), o.cancelToken && o.cancelToken.unsubscribe(i), o.signal && o.signal.removeEventListener("abort", i);
    }
    let h = new XMLHttpRequest();
    h.open(o.method.toUpperCase(), o.url, !0), h.timeout = o.timeout;
    function P() {
      if (!h)
        return;
      const _ = mt.from(
        "getAllResponseHeaders" in h && h.getAllResponseHeaders()
      ), p = {
        data: !u || u === "text" || u === "json" ? h.responseText : h.response,
        status: h.status,
        statusText: h.statusText,
        headers: _,
        config: e,
        request: h
      };
      _i(function(A) {
        n(A), x();
      }, function(A) {
        l(A), x();
      }, p), h = null;
    }
    "onloadend" in h ? h.onloadend = P : h.onreadystatechange = function() {
      !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(P);
    }, h.onabort = function() {
      h && (l(new ge("Request aborted", ge.ECONNABORTED, e, h)), h = null);
    }, h.onerror = function() {
      l(new ge("Network Error", ge.ERR_NETWORK, e, h)), h = null;
    }, h.ontimeout = function() {
      let y = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const p = o.transitional || Si;
      o.timeoutErrorMessage && (y = o.timeoutErrorMessage), l(new ge(
        y,
        p.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED,
        e,
        h
      )), h = null;
    }, a === void 0 && r.setContentType(null), "setRequestHeader" in h && B.forEach(r.toJSON(), function(y, p) {
      h.setRequestHeader(p, y);
    }), B.isUndefined(o.withCredentials) || (h.withCredentials = !!o.withCredentials), u && u !== "json" && (h.responseType = o.responseType), s && ([S, b] = bl(s, !0), h.addEventListener("progress", S)), c && h.upload && ([v, g] = bl(c), h.upload.addEventListener("progress", v), h.upload.addEventListener("loadend", g)), (o.cancelToken || o.signal) && (i = (_) => {
      h && (l(!_ || _.type ? new Pn(null, e, h) : _), h.abort(), h = null);
    }, o.cancelToken && o.cancelToken.subscribe(i), o.signal && (o.signal.aborted ? i() : o.signal.addEventListener("abort", i)));
    const O = Hd(o.url);
    if (O && vt.protocols.indexOf(O) === -1) {
      l(new ge("Unsupported protocol " + O + ":", ge.ERR_BAD_REQUEST, e));
      return;
    }
    h.send(a || null);
  });
}, Qd = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let l = new AbortController(), o;
    const a = function(s) {
      if (!o) {
        o = !0, u();
        const i = s instanceof Error ? s : this.reason;
        l.abort(i instanceof ge ? i : new Pn(i instanceof Error ? i.message : i));
      }
    };
    let r = t && setTimeout(() => {
      r = null, a(new ge(`timeout ${t} of ms exceeded`, ge.ETIMEDOUT));
    }, t);
    const u = () => {
      e && (r && clearTimeout(r), r = null, e.forEach((s) => {
        s.unsubscribe ? s.unsubscribe(a) : s.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((s) => s.addEventListener("abort", a));
    const { signal: c } = l;
    return c.unsubscribe = () => B.asap(u), c;
  }
}, Xd = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let l = 0, o;
  for (; l < n; )
    o = l + t, yield e.slice(l, o), l = o;
}, Jd = async function* (e, t) {
  for await (const n of Zd(e))
    yield* Xd(n, t);
}, Zd = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: l } = await t.read();
      if (n)
        break;
      yield l;
    }
  } finally {
    await t.cancel();
  }
}, ja = (e, t, n, l) => {
  const o = Jd(e, t);
  let a = 0, r, u = (c) => {
    r || (r = !0, l && l(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: s, value: i } = await o.next();
        if (s) {
          u(), c.close();
          return;
        }
        let v = i.byteLength;
        if (n) {
          let S = a += v;
          n(S);
        }
        c.enqueue(new Uint8Array(i));
      } catch (s) {
        throw u(s), s;
      }
    },
    cancel(c) {
      return u(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Pl = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ei = Pl && typeof ReadableStream == "function", Gd = Pl && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Mi = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ef = Ei && Mi(() => {
  let e = !1;
  const t = new Request(vt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Na = 64 * 1024, mo = Ei && Mi(() => B.isReadableStream(new Response("").body)), yl = {
  stream: mo && ((e) => e.body)
};
Pl && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !yl[t] && (yl[t] = B.isFunction(e[t]) ? (n) => n[t]() : (n, l) => {
      throw new ge(`Response type '${t}' is not supported`, ge.ERR_NOT_SUPPORT, l);
    });
  });
})(new Response());
const tf = async (e) => {
  if (e == null)
    return 0;
  if (B.isBlob(e))
    return e.size;
  if (B.isSpecCompliantForm(e))
    return (await new Request(vt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (B.isArrayBufferView(e) || B.isArrayBuffer(e))
    return e.byteLength;
  if (B.isURLSearchParams(e) && (e = e + ""), B.isString(e))
    return (await Gd(e)).byteLength;
}, nf = async (e, t) => {
  const n = B.toFiniteNumber(e.getContentLength());
  return n ?? tf(t);
}, lf = Pl && (async (e) => {
  let {
    url: t,
    method: n,
    data: l,
    signal: o,
    cancelToken: a,
    timeout: r,
    onDownloadProgress: u,
    onUploadProgress: c,
    responseType: s,
    headers: i,
    withCredentials: v = "same-origin",
    fetchOptions: S
  } = qi(e);
  s = s ? (s + "").toLowerCase() : "text";
  let g = Qd([o, a && a.toAbortSignal()], r), b;
  const x = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let h;
  try {
    if (c && ef && n !== "get" && n !== "head" && (h = await nf(i, l)) !== 0) {
      let p = new Request(t, {
        method: "POST",
        body: l,
        duplex: "half"
      }), F;
      if (B.isFormData(l) && (F = p.headers.get("content-type")) && i.setContentType(F), p.body) {
        const [A, U] = $a(
          h,
          bl(Ha(c))
        );
        l = ja(p.body, Na, A, U);
      }
    }
    B.isString(v) || (v = v ? "include" : "omit");
    const P = "credentials" in Request.prototype;
    b = new Request(t, {
      ...S,
      signal: g,
      method: n.toUpperCase(),
      headers: i.normalize().toJSON(),
      body: l,
      duplex: "half",
      credentials: P ? v : void 0
    });
    let O = await fetch(b);
    const _ = mo && (s === "stream" || s === "response");
    if (mo && (u || _ && x)) {
      const p = {};
      ["status", "statusText", "headers"].forEach((D) => {
        p[D] = O[D];
      });
      const F = B.toFiniteNumber(O.headers.get("content-length")), [A, U] = u && $a(
        F,
        bl(Ha(u), !0)
      ) || [];
      O = new Response(
        ja(O.body, Na, A, () => {
          U && U(), x && x();
        }),
        p
      );
    }
    s = s || "text";
    let y = await yl[B.findKey(yl, s) || "text"](O, e);
    return !_ && x && x(), await new Promise((p, F) => {
      _i(p, F, {
        data: y,
        headers: mt.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: b
      });
    });
  } catch (P) {
    throw x && x(), P && P.name === "TypeError" && /fetch/i.test(P.message) ? Object.assign(
      new ge("Network Error", ge.ERR_NETWORK, e, b),
      {
        cause: P.cause || P
      }
    ) : ge.from(P, P && P.code, e, b);
  }
}), ho = {
  http: yd,
  xhr: Wd,
  fetch: lf
};
B.forEach(ho, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const za = (e) => `- ${e}`, of = (e) => B.isFunction(e) || e === null || e === !1, Pi = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, l;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let r;
      if (l = n, !of(n) && (l = ho[(r = String(n)).toLowerCase()], l === void 0))
        throw new ge(`Unknown adapter '${r}'`);
      if (l)
        break;
      o[r || "#" + a] = l;
    }
    if (!l) {
      const a = Object.entries(o).map(
        ([u, c]) => `adapter ${u} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let r = t ? a.length > 1 ? `since :
` + a.map(za).join(`
`) : " " + za(a[0]) : "as no adapter specified";
      throw new ge(
        "There is no suitable adapter to dispatch the request " + r,
        "ERR_NOT_SUPPORT"
      );
    }
    return l;
  },
  adapters: ho
};
function Jl(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Pn(null, e);
}
function Ua(e) {
  return Jl(e), e.headers = mt.from(e.headers), e.data = Xl.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pi.getAdapter(e.adapter || Qn.adapter)(e).then(function(l) {
    return Jl(e), l.data = Xl.call(
      e,
      e.transformResponse,
      l
    ), l.headers = mt.from(l.headers), l;
  }, function(l) {
    return xi(l) || (Jl(e), l && l.response && (l.response.data = Xl.call(
      e,
      e.transformResponse,
      l.response
    ), l.response.headers = mt.from(l.response.headers))), Promise.reject(l);
  });
}
const Ri = "1.7.7", Ro = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ro[e] = function(l) {
    return typeof l === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ya = {};
Ro.transitional = function(t, n, l) {
  function o(a, r) {
    return "[Axios v" + Ri + "] Transitional option '" + a + "'" + r + (l ? ". " + l : "");
  }
  return (a, r, u) => {
    if (t === !1)
      throw new ge(
        o(r, " has been removed" + (n ? " in " + n : "")),
        ge.ERR_DEPRECATED
      );
    return n && !Ya[r] && (Ya[r] = !0, console.warn(
      o(
        r,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, r, u) : !0;
  };
};
function af(e, t, n) {
  if (typeof e != "object")
    throw new ge("options must be an object", ge.ERR_BAD_OPTION_VALUE);
  const l = Object.keys(e);
  let o = l.length;
  for (; o-- > 0; ) {
    const a = l[o], r = t[a];
    if (r) {
      const u = e[a], c = u === void 0 || r(u, a, e);
      if (c !== !0)
        throw new ge("option " + a + " must be " + c, ge.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ge("Unknown option " + a, ge.ERR_BAD_OPTION);
  }
}
const go = {
  assertOptions: af,
  validators: Ro
}, Ut = go.validators;
class cn {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new La(),
      response: new La()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (l) {
      if (l instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          l.stack ? a && !String(l.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (l.stack += `
` + a) : l.stack = a;
        } catch {
        }
      }
      throw l;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = dn(this.defaults, n);
    const { transitional: l, paramsSerializer: o, headers: a } = n;
    l !== void 0 && go.assertOptions(l, {
      silentJSONParsing: Ut.transitional(Ut.boolean),
      forcedJSONParsing: Ut.transitional(Ut.boolean),
      clarifyTimeoutError: Ut.transitional(Ut.boolean)
    }, !1), o != null && (B.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : go.assertOptions(o, {
      encode: Ut.function,
      serialize: Ut.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let r = a && B.merge(
      a.common,
      a[n.method]
    );
    a && B.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete a[b];
      }
    ), n.headers = mt.concat(r, a);
    const u = [];
    let c = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(n) === !1 || (c = c && x.synchronous, u.unshift(x.fulfilled, x.rejected));
    });
    const s = [];
    this.interceptors.response.forEach(function(x) {
      s.push(x.fulfilled, x.rejected);
    });
    let i, v = 0, S;
    if (!c) {
      const b = [Ua.bind(this), void 0];
      for (b.unshift.apply(b, u), b.push.apply(b, s), S = b.length, i = Promise.resolve(n); v < S; )
        i = i.then(b[v++], b[v++]);
      return i;
    }
    S = u.length;
    let g = n;
    for (v = 0; v < S; ) {
      const b = u[v++], x = u[v++];
      try {
        g = b(g);
      } catch (h) {
        x.call(this, h);
        break;
      }
    }
    try {
      i = Ua.call(this, g);
    } catch (b) {
      return Promise.reject(b);
    }
    for (v = 0, S = s.length; v < S; )
      i = i.then(s[v++], s[v++]);
    return i;
  }
  getUri(t) {
    t = dn(this.defaults, t);
    const n = Ci(t.baseURL, t.url);
    return wi(n, t.params, t.paramsSerializer);
  }
}
B.forEach(["delete", "get", "head", "options"], function(t) {
  cn.prototype[t] = function(n, l) {
    return this.request(dn(l || {}, {
      method: t,
      url: n,
      data: (l || {}).data
    }));
  };
});
B.forEach(["post", "put", "patch"], function(t) {
  function n(l) {
    return function(a, r, u) {
      return this.request(dn(u || {}, {
        method: t,
        headers: l ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: r
      }));
    };
  }
  cn.prototype[t] = n(), cn.prototype[t + "Form"] = n(!0);
});
class Oo {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const l = this;
    this.promise.then((o) => {
      if (!l._listeners) return;
      let a = l._listeners.length;
      for (; a-- > 0; )
        l._listeners[a](o);
      l._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const r = new Promise((u) => {
        l.subscribe(u), a = u;
      }).then(o);
      return r.cancel = function() {
        l.unsubscribe(a);
      }, r;
    }, t(function(a, r, u) {
      l.reason || (l.reason = new Pn(a, r, u), n(l.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (l) => {
      t.abort(l);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Oo(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function rf(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function uf(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const bo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(bo).forEach(([e, t]) => {
  bo[t] = e;
});
function Oi(e) {
  const t = new cn(e), n = ui(cn.prototype.request, t);
  return B.extend(n, cn.prototype, t, { allOwnKeys: !0 }), B.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Oi(dn(e, o));
  }, n;
}
const je = Oi(Qn);
je.Axios = cn;
je.CanceledError = Pn;
je.CancelToken = Oo;
je.isCancel = xi;
je.VERSION = Ri;
je.toFormData = Ml;
je.AxiosError = ge;
je.Cancel = je.CanceledError;
je.all = function(t) {
  return Promise.all(t);
};
je.spread = rf;
je.isAxiosError = uf;
je.mergeConfig = dn;
je.AxiosHeaders = mt;
je.formToJSON = (e) => ki(B.isHTMLForm(e) ? new FormData(e) : e);
je.getAdapter = Pi.getAdapter;
je.HttpStatusCode = bo;
je.default = je;
const sf = { class: "flex flex-col flex-nowrap gap-2 w-full" }, cf = { class: "q-table__top relative-position row items-center w-full" }, df = { class: "flex w-full items-center gap-2 justify-between" }, ff = { class: "q-table__title" }, vf = { class: "flex items-center gap-2" }, mf = {
  key: 0,
  class: "flex justify-center items-center gap-1"
}, hf = { class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, gf = ["onClick"], bf = { class: "q-gutter-md row items-start" }, yf = { class: "row items-center justify-end q-gutter-sm" }, pf = { class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, wf = ["onClick"], Sf = { class: "q-gutter-md row items-start" }, kf = { class: "row items-center justify-end q-gutter-sm" }, xf = { class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, _f = ["onClick"], Cf = { class: "q-gutter-md row items-start" }, qf = { class: "row items-center justify-end q-gutter-sm" }, Ef = { class: "font-bold" }, Mf = { class: "font-bold" }, Bf = /* @__PURE__ */ Un({
  __name: "AnServerDataTable",
  props: {
    columns: {
      type: Object,
      required: !0
    },
    link: {
      type: String,
      required: !0
    },
    linkParams: {
      type: Object,
      default: {}
    },
    title: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: !1
    },
    hidePagination: {
      type: Boolean,
      default: !1
    },
    flat: {
      type: Boolean,
      default: !1
    },
    square: {
      type: Boolean,
      default: !1
    },
    hasSearch: {
      type: Boolean,
      default: !1
    },
    hasFilter: {
      type: Boolean,
      default: !1
    },
    showPageSizeSelect: {
      type: Boolean,
      default: !1
    },
    enableRowClick: {
      type: Boolean,
      default: !1
    },
    filterModalData: {
      type: Object,
      default: {
        fields: []
      }
    },
    axiosInterceptor: {
      type: Object,
      required: !1
    },
    paginationResponseKeys: {
      type: Object,
      default: {
        count: "count",
        lastPage: "lastPage",
        next: "next",
        previous: "previous",
        results: "results"
      }
    },
    orderingKey: {
      type: String,
      default: "ordering"
    },
    pageSizes: {
      type: Object,
      default: [5, 10, 25, 50]
    },
    searchUrlParam: {
      type: String,
      default: "search"
    }
  },
  emits: ["openFilter", "rowClick", "getDataSuccessfuly", "getDataError"],
  setup(e, { expose: t, emit: n }) {
    const l = J(), o = n, a = e, r = Qa(), u = (P) => P.replace("filter-modal-", ""), c = {
      descending: !1,
      page: 1,
      rowsPerPage: a.pageSizes[0],
      sortBy: null,
      rowsNumber: 10
    }, s = xn({
      dataIsLoading: !1,
      tableIsLoading: !1,
      rows: {
        [a.paginationResponseKeys.results]: []
      },
      pagination: c,
      filter: {},
      ordering: void 0,
      search: "",
      searchIsLoading: !1,
      filterIsLoading: !1
    }), i = async () => {
      a.link && (s.ordering = S(), s.tableIsLoading = !0, await x({ pagination: { page: s.pagination.page, page_size: s.pagination.rowsPerPage }, filter: s.filter, ordering: s.ordering, search: s.search }).then((P) => {
        s.rows = P.data, o("getDataSuccessfuly", P.data);
      }).catch((P) => {
        o("getDataError", P);
      }).finally(() => {
        var P;
        s.tableIsLoading = !1, (P = l.value) == null || P.hide();
      }));
    }, v = (P) => {
      s.pagination = {
        ...s.pagination,
        ...P.pagination
      }, i();
    }, S = () => s.pagination.sortBy ? s.pagination.descending ? "-" + s.pagination.sortBy : s.pagination.sortBy : "", g = () => {
      s.searchIsLoading = !0, i().finally(() => {
        s.searchIsLoading = !1;
      });
    }, b = () => {
      s.filterIsLoading = !0, h(s.filter).then(() => {
        var P;
        s.filterIsLoading = !1, (P = l.value) == null || P.hide();
      });
    };
    Yn(() => {
      s.dataIsLoading = !0, i().finally(() => {
        s.dataIsLoading = !1;
      });
    });
    const x = (P) => (a.axiosInterceptor || je).get(a.link, {
      params: {
        ...P == null ? void 0 : P.pagination,
        ...P == null ? void 0 : P.filter,
        [a.orderingKey]: P == null ? void 0 : P.ordering,
        ...a.linkParams,
        [a.searchUrlParam || "search"]: P == null ? void 0 : P.search
      }
    }), h = (P) => {
      let O = {};
      return Object.keys(P).forEach((_) => {
        O[_] = (P[_] || "").toString();
      }), s.filter = O, i().finally(() => {
        s.filter = P;
      });
    };
    return t({ filter: h, fetchData: i }), (P, O) => {
      var _, y;
      return Ae(), Tt(Rn, null, [
        Ue("div", sf, [
          Se(cc, Qt({
            loading: a.loading || s.tableIsLoading,
            "hide-bottom": a.hidePagination,
            flat: a.flat,
            square: a.square,
            title: a.title,
            columns: a.columns,
            rows: s.rows[a.paginationResponseKeys.results],
            pagination: s.pagination,
            "onUpdate:pagination": O[4] || (O[4] = (p) => s.pagination = p),
            onRequest: v,
            "wrap-cells": "",
            class: "w-full"
          }, { onRowClick: a.enableRowClick ? (p, F, A) => {
            o("rowClick", F, A);
          } : void 0 }), Zl({
            top: Me(() => [
              Ue("div", cf, [
                Ue("div", df, [
                  Ue("div", ff, [
                    ot(P.$slots, "title", {}, () => [
                      Fi(Ln(a.title), 1)
                    ])
                  ]),
                  Ue("div", vf, [
                    a.hasSearch ? ot(P.$slots, "search-input", {
                      key: 0,
                      loading: s.searchIsLoading,
                      value: s.search,
                      search: (p) => {
                        s.search = p, g();
                      }
                    }, () => [
                      a.hasSearch ? (Ae(), st(tn, {
                        key: 0,
                        label: "Search",
                        dense: "",
                        modelValue: s.search,
                        "onUpdate:modelValue": [
                          O[0] || (O[0] = (p) => s.search = p),
                          g
                        ],
                        clearable: "",
                        debounce: 500,
                        class: "!items-start",
                        outlined: "",
                        loading: s.searchIsLoading
                      }, null, 8, ["modelValue", "loading"])) : Ie("", !0)
                    ]) : Ie("", !0),
                    a.hasFilter ? ot(P.$slots, "filter-btn", {
                      key: 1,
                      label: "Filter",
                      color: "primary",
                      click: () => {
                        var p;
                        return (p = l.value) == null ? void 0 : p.show();
                      }
                    }, () => [
                      Se(Re, {
                        label: "Filter",
                        "no-caps": "",
                        color: "primary",
                        onClick: O[1] || (O[1] = (p) => {
                          var F;
                          return (F = l.value) == null ? void 0 : F.show();
                        })
                      })
                    ]) : Ie("", !0)
                  ])
                ])
              ])
            ]),
            bottom: Me(() => [
              Ue("div", {
                class: $i(["w-full flex justify-center items-center", { "!justify-between": a.showPageSizeSelect }])
              }, [
                a.showPageSizeSelect ? (Ae(), Tt("div", mf, [
                  ot(P.$slots, "page-size", {
                    value: s.pagination.rowsPerPage,
                    change: (p) => {
                      s.pagination.rowsPerPage = p, i();
                    }
                  }, () => [
                    O[5] || (O[5] = Ue("span", null, " Rows : ", -1)),
                    Se($n, {
                      modelValue: s.pagination.rowsPerPage,
                      "onUpdate:modelValue": [
                        O[2] || (O[2] = (p) => s.pagination.rowsPerPage = p),
                        i
                      ],
                      options: a.pageSizes,
                      outlined: "",
                      dense: "",
                      color: "primary"
                    }, null, 8, ["modelValue", "options"])
                  ])
                ])) : Ie("", !0),
                ot(P.$slots, "pagination", {
                  value: s.pagination.page,
                  change: (p) => {
                    s.pagination.page = p, i();
                  }
                }, () => [
                  Se(Bs, {
                    modelValue: s.pagination.page,
                    "onUpdate:modelValue": [
                      O[3] || (O[3] = (p) => s.pagination.page = p),
                      i
                    ],
                    "max-pages": 6,
                    max: s.rows[a.paginationResponseKeys.lastPage],
                    "direction-links": "",
                    "boundary-links": ""
                  }, null, 8, ["modelValue", "max"])
                ])
              ], 2)
            ]),
            _: 2
          }, [
            al(r, (p, F, A) => ({
              name: F,
              fn: Me((U) => [
                F.toString().startsWith("filter-modal-") ? Ie("", !0) : ot(P.$slots, F, Do(Qt({ key: 0 }, U)))
              ])
            }))
          ]), 1040, ["loading", "hide-bottom", "flat", "square", "title", "columns", "rows", "pagination"])
        ]),
        Se(Wu, Qt({
          ref_key: "filterModal",
          ref: l
        }, a.filterModalData.props, {
          "ok-label": ((_ = a.filterModalData.props) == null ? void 0 : _.okLabel) || "Filter",
          title: ((y = a.filterModalData.props) == null ? void 0 : y.title) || "Filter",
          onSubmit: b,
          "form-is-loading": s.filterIsLoading
        }), Zl({
          content: Me(() => [
            (Ae(!0), Tt(Rn, null, al(a.filterModalData.fields, (p, F) => (Ae(), Tt(Rn, { key: F }, [
              p.type == "text" ? (Ae(), st(tn, {
                key: 0,
                outlined: "",
                label: p.label,
                modelValue: s.filter[p.urlParam],
                "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                clearable: ""
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])) : Ie("", !0),
              p.type == "date-time" ? (Ae(), st(tn, {
                key: 1,
                outlined: "",
                label: p.label,
                modelValue: s.filter[p.urlParam],
                "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                readonly: "",
                class: "[&>div>div:before]:!border-solid"
              }, {
                append: Me(() => [
                  Ue("div", hf, [
                    s.filter[p.urlParam] ? (Ae(), Tt("button", {
                      key: 0,
                      onClick: (A) => s.filter[p.urlParam] = "",
                      class: "q-icon notranslate material-icons q-field__focusable-action",
                      tabindex: "0",
                      type: "button"
                    }, " cancel ", 8, gf)) : Ie("", !0)
                  ]),
                  Se(Re, { icon: "calendar_month" }, {
                    default: Me(() => [
                      Se(Kl, {
                        cover: "",
                        "transition-show": "scale",
                        "transition-hide": "scale",
                        class: "p-2"
                      }, {
                        default: Me(() => [
                          Ue("div", bf, [
                            Se(Ma, {
                              modelValue: s.filter[p.urlParam],
                              "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                              mask: "YYYY-MM-DD HH:mm"
                            }, {
                              default: Me(() => [
                                Ue("div", yf, [
                                  At(Se(Re, {
                                    label: "Close",
                                    color: "primary",
                                    flat: ""
                                  }, null, 512), [
                                    [un]
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"]),
                            Se(Oa, {
                              modelValue: s.filter[p.urlParam],
                              "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                              mask: "YYYY-MM-DD HH:mm"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["label", "modelValue", "onUpdate:modelValue"])) : Ie("", !0),
              p.type == "date" ? (Ae(), st(tn, {
                key: 2,
                outlined: "",
                label: p.label,
                modelValue: s.filter[p.urlParam],
                "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                readonly: "",
                class: "[&>div>div:before]:!border-solid"
              }, {
                append: Me(() => [
                  Ue("div", pf, [
                    s.filter[p.urlParam] ? (Ae(), Tt("button", {
                      key: 0,
                      onClick: (A) => s.filter[p.urlParam] = "",
                      class: "q-icon notranslate material-icons q-field__focusable-action",
                      tabindex: "0",
                      type: "button"
                    }, " cancel ", 8, wf)) : Ie("", !0)
                  ]),
                  Se(Re, { icon: "calendar_month" }, {
                    default: Me(() => [
                      Se(Kl, {
                        cover: "",
                        "transition-show": "scale",
                        "transition-hide": "scale"
                      }, {
                        default: Me(() => [
                          Ue("div", Sf, [
                            Se(Ma, {
                              modelValue: s.filter[p.urlParam],
                              "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                              mask: "YYYY-MM-DD"
                            }, {
                              default: Me(() => [
                                Ue("div", kf, [
                                  At(Se(Re, {
                                    label: "Close",
                                    color: "primary",
                                    flat: ""
                                  }, null, 512), [
                                    [un]
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["label", "modelValue", "onUpdate:modelValue"])) : Ie("", !0),
              p.type == "time" ? (Ae(), st(tn, {
                key: 3,
                outlined: "",
                label: p.label,
                modelValue: s.filter[p.urlParam],
                "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                readonly: "",
                class: "[&>div>div:before]:!border-solid"
              }, {
                append: Me(() => [
                  Ue("div", xf, [
                    s.filter[p.urlParam] ? (Ae(), Tt("button", {
                      key: 0,
                      onClick: (A) => s.filter[p.urlParam] = "",
                      class: "q-icon notranslate material-icons q-field__focusable-action",
                      tabindex: "0",
                      type: "button"
                    }, " cancel ", 8, _f)) : Ie("", !0)
                  ]),
                  Se(Re, { icon: "calendar_month" }, {
                    default: Me(() => [
                      Se(Kl, {
                        cover: "",
                        "transition-show": "scale",
                        "transition-hide": "scale"
                      }, {
                        default: Me(() => [
                          Ue("div", Cf, [
                            Se(Oa, {
                              modelValue: s.filter[p.urlParam],
                              "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                              mask: "HH:mm"
                            }, {
                              default: Me(() => [
                                Ue("div", qf, [
                                  At(Se(Re, {
                                    label: "Close",
                                    color: "primary",
                                    flat: ""
                                  }, null, 512), [
                                    [un]
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["label", "modelValue", "onUpdate:modelValue"])) : Ie("", !0),
              p.type == "number" ? (Ae(), st(tn, {
                key: 4,
                outlined: "",
                type: "number",
                label: p.label,
                modelValue: s.filter[p.urlParam],
                "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                clearable: ""
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue"])) : Ie("", !0),
              p.type == "boolean-checkbox" ? (Ae(), st(Hn, {
                key: 5,
                label: p.label,
                "model-value": s.filter[p.urlParam] ? s.filter[p.urlParam] : !1,
                "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A
              }, null, 8, ["label", "model-value", "onUpdate:modelValue"])) : Ie("", !0),
              p.type == "checkboxs" ? (Ae(), Tt(Rn, { key: 6 }, [
                Ue("div", Ef, Ln(p.label), 1),
                Se(Ba, {
                  type: "checkbox",
                  "model-value": s.filter[p.urlParam] || [],
                  "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                  options: p.choices || []
                }, null, 8, ["model-value", "onUpdate:modelValue", "options"])
              ], 64)) : Ie("", !0),
              p.type == "radios" ? (Ae(), Tt(Rn, { key: 7 }, [
                Ue("div", Mf, Ln(p.label), 1),
                Se(Ba, {
                  type: "radio",
                  modelValue: s.filter[p.urlParam],
                  "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                  options: p.choices || []
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ], 64)) : Ie("", !0),
              p.type == "select" ? (Ae(), st($n, {
                key: 8,
                outlined: "",
                label: p.label,
                modelValue: s.filter[p.urlParam],
                "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                "emit-value": "",
                "map-options": "",
                options: p.choices || [],
                clearable: ""
              }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "options"])) : Ie("", !0),
              p.type == "select-multiple" ? (Ae(), st($n, {
                key: 9,
                outlined: "",
                label: p.label,
                "model-value": s.filter[p.urlParam] || [],
                "onUpdate:modelValue": (A) => s.filter[p.urlParam] = A,
                multiple: "",
                "emit-value": "",
                "map-options": "",
                options: p.choices || [],
                clearable: ""
              }, null, 8, ["label", "model-value", "onUpdate:modelValue", "options"])) : Ie("", !0)
            ], 64))), 128))
          ]),
          _: 2
        }, [
          al(r, (p, F, A) => ({
            name: u(F.toString()),
            fn: Me((U) => [
              F.toString().startsWith("filter-modal-") ? ot(P.$slots, F, Do(Qt({ key: 0 }, U))) : Ie("", !0)
            ])
          }))
        ]), 1040, ["ok-label", "title", "form-is-loading"])
      ], 64);
    };
  }
}), Tf = /* @__PURE__ */ Un({
  inheritAttrs: !1,
  __name: "AnServerSelect",
  props: /* @__PURE__ */ Lo({
    link: {},
    defaultOptions: {},
    axiosInterceptor: {},
    searchParam: {},
    name: {},
    virtualScrollHorizontal: { type: Boolean },
    virtualScrollSliceSize: {},
    virtualScrollSliceRatioBefore: {},
    virtualScrollSliceRatioAfter: {},
    virtualScrollItemSize: {},
    virtualScrollStickySizeStart: {},
    virtualScrollStickySizeEnd: {},
    tableColspan: {},
    modelValue: {},
    error: { type: [Boolean, null] },
    errorMessage: {},
    noErrorIcon: { type: Boolean },
    rules: {},
    reactiveRules: { type: Boolean },
    lazyRules: { type: [Boolean, String] },
    label: {},
    stackLabel: { type: Boolean },
    hint: {},
    hideHint: { type: Boolean },
    prefix: {},
    suffix: {},
    labelColor: {},
    color: {},
    bgColor: {},
    dark: { type: [Boolean, null], default: void 0 },
    loading: { type: Boolean },
    clearable: { type: Boolean },
    clearIcon: {},
    filled: { type: Boolean },
    outlined: { type: Boolean },
    borderless: { type: Boolean },
    standout: { type: [Boolean, String] },
    labelSlot: { type: Boolean },
    bottomSlots: { type: Boolean },
    hideBottomSpace: { type: Boolean },
    counter: { type: Boolean },
    rounded: { type: Boolean },
    square: { type: Boolean },
    dense: { type: Boolean },
    itemAligned: { type: Boolean },
    disable: { type: Boolean },
    readonly: { type: Boolean },
    autofocus: { type: Boolean },
    for: {},
    multiple: { type: Boolean },
    displayValue: {},
    displayValueHtml: { type: Boolean },
    optionValue: {},
    optionLabel: {},
    optionDisable: {},
    hideSelected: { type: Boolean },
    hideDropdownIcon: { type: Boolean },
    dropdownIcon: {},
    maxValues: {},
    optionsDense: { type: Boolean },
    optionsDark: { type: [Boolean, null], default: void 0 },
    optionsSelectedClass: {},
    optionsHtml: { type: Boolean },
    optionsCover: { type: Boolean },
    menuShrink: { type: Boolean },
    menuAnchor: {},
    menuSelf: {},
    menuOffset: {},
    popupContentClass: {},
    popupContentStyle: {},
    popupNoRouteDismiss: { type: Boolean },
    useChips: { type: Boolean },
    useInput: { type: Boolean },
    maxlength: {},
    fillInput: { type: Boolean },
    newValueMode: {},
    mapOptions: { type: Boolean },
    emitValue: { type: Boolean },
    inputDebounce: {},
    inputClass: {},
    inputStyle: {},
    tabindex: {},
    autocomplete: {},
    transitionShow: {},
    transitionHide: {},
    transitionDuration: {},
    behavior: {},
    onVirtualScroll: {},
    "onUpdate:modelValue": {},
    onFocus: {},
    onBlur: {},
    onClear: {},
    onInputValue: {},
    onRemove: {},
    onAdd: {},
    onNewValue: {},
    onFilter: {},
    onFilterAbort: {},
    onPopupShow: {},
    onPopupHide: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Lo(["update:options", "filter", "loading", "error"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, l = Hi(e, "modelValue"), o = Qa(), a = t, r = xn({
      options: n.defaultOptions || [],
      inputValue: "",
      // Track the user's input value
      isLoading: !1
    }), u = (c, s) => {
      s(() => {
      }), a("filter", c), r.isLoading = !0, a("loading", !0), (n.axiosInterceptor || je).get(n.link, {
        params: { [n.searchParam || "search"]: c }
        // Pass the filter value as a query parameter
      }).then((i) => {
        s(() => {
          r.options = i.data || [];
        }), a("update:options", r.options);
      }).catch((i) => {
        console.error("Error fetching filtered options:", i), a("error", i);
      }).finally(() => {
        r.isLoading = !1, a("loading", !1);
      });
    };
    return Yn(() => {
      (n.axiosInterceptor || je).get(n.link, {
        params: { [n.searchParam || "search"]: "" }
        // Pass the filter value as a query parameter
      }).then((c) => {
        r.options = c.data || [], a("update:options", r.options);
      }).catch((c) => {
        console.error("Error fetching filtered options:", c), a("error", c);
      }).finally(() => {
        r.isLoading = !1, a("loading", !1);
      });
    }), (c, s) => (Ae(), st(pl($n), Qt(n, {
      modelValue: l.value,
      "onUpdate:modelValue": s[0] || (s[0] = (i) => l.value = i),
      options: r.options,
      onFilter: u,
      "use-input": "",
      "input-value": r.inputValue,
      loading: r.isLoading,
      "onUpdate:inputValue": s[1] || (s[1] = (i) => r.inputValue = i)
    }), Zl({ _: 2 }, [
      al(o, (i, v, S) => ({
        name: v,
        fn: Me((g) => [
          ot(c.$slots, v, Qt(g, { key: S }))
        ])
      }))
    ]), 1040, ["modelValue", "options", "input-value", "loading"]));
  }
});
export {
  Rf as AnModal,
  Wu as AnModalForm,
  Of as AnPageLoader,
  Bf as AnServerDataTable,
  Tf as AnServerSelect
};

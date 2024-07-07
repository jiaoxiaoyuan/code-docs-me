import "./style.css";
import { openBlock as n, createElementBlock as p, createElementVNode as i, createBlock as B, resolveDynamicComponent as U, normalizeClass as S, normalizeStyle as g, Fragment as A, renderList as I, toDisplayString as w, resolveComponent as b, withDirectives as f, createVNode as y, vShow as v, createTextVNode as P, createCommentVNode as _ } from "vue";
var D = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function j(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var z = { exports: {} };
(function(e, t) {
  (function(a, s) {
    e.exports = s();
  })(D, function() {
    if (typeof window == "object" && !(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0)) {
      var a = function(o, h) {
        return o.nodeName === "HTML" ? -h : o.getBoundingClientRect().top + h;
      }, s = function(o) {
        return o < 0.5 ? 4 * o * o * o : (o - 1) * (2 * o - 2) * (2 * o - 2) + 1;
      }, l = function(o, h, m, u) {
        return m > u ? h : o + (h - o) * s(m / u);
      }, d = function(o, h, m, u) {
        h = h || 500, u = u || window;
        var L = u.scrollTop || window.pageYOffset;
        if (typeof o == "number")
          var E = parseInt(o);
        else
          var E = a(o, L);
        var H = Date.now(), V = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function($) {
          window.setTimeout($, 15);
        }, x = function() {
          var $ = Date.now() - H;
          u !== window ? u.scrollTop = l(L, E, $, h) : window.scroll(0, l(L, E, $, h)), $ > h ? typeof m == "function" && m(o) : V(x);
        };
        x();
      }, r = function(o) {
        if (!o.defaultPrevented) {
          o.preventDefault(), location.hash !== this.hash && window.history.pushState(null, null, this.hash);
          var h = document.getElementById(this.hash.substring(1));
          if (!h)
            return;
          d(h, 500, function(m) {
            location.replace("#" + m.id);
          });
        }
      };
      return document.addEventListener("DOMContentLoaded", function() {
        for (var o = document.querySelectorAll('a[href^="#"]:not([href="#"])'), h, m = o.length; h = o[--m]; )
          h.addEventListener("click", r, !1);
      }), d;
    }
  });
})(z);
var Y = z.exports;
const N = /* @__PURE__ */ j(Y), k = /mobile/i.test(window.navigator.userAgent), W = {
  isMobile: k,
  eventsName: {
    moveStart: k ? "touchstart" : "mousedown",
    moving: k ? "touchmove" : "mousemove",
    moveEnd: k ? "touchend" : "mouseup"
  },
  storage: {
    set: (e, t) => {
      localStorage.setItem(e, t);
    },
    get: (e) => {
      localStorage.getItem(e);
    }
  },
  /**
   * Parse Second to Time String
   *
   * @param {Number} second
   * @return {String} 00:00 or 00:00:00
   */
  secondToTime: (e) => {
    const t = (d) => d < 10 ? "0" + d : "" + d, a = Math.floor(e / 3600), s = Math.floor((e - a * 3600) / 60), l = Math.floor(e - a * 3600 - s * 60);
    return (a > 0 ? [a, s, l] : [s, l]).map(t).join(":");
  },
  randomOrder: (e) => {
    function t(a) {
      for (let s = a.length - 1; s >= 0; s--) {
        const l = Math.floor(Math.random() * (s + 1)), d = a[l];
        a[l] = a[s], a[s] = d;
      }
      return a;
    }
    return t(
      [...Array(e)].map(function(a, s) {
        return s;
      })
    );
  },
  /**
   * Parse Lyric String to Array
   * 
   * @param {String} lyricStr 
   * @return {Array} [[0, "APlayer"], [1.2, "is"], [34.56, "Amazing"]]
   */
  parse(e) {
    if (e) {
      e = e.replace(/([^\]^\n])\[/g, (s, l) => l + `
[`);
      let t = e.split(`
`), a = [];
      for (let s = 0; s < t.length; s++) {
        const l = t[s].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g), d = t[s].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g, "").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g, "").replace(/^\s+|\s+$/g, "");
        if (l)
          for (let r = 0; r < l.length; r++) {
            const o = /\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(l[r]), h = o[1] * 60, m = parseInt(o[2]), u = o[4] ? parseInt(o[4]) / ((o[4] + "").length === 2 ? 100 : 1e3) : 0, L = h + m + u;
            a.push([L, d]);
          }
      }
      return a = a.filter((s) => s[1]), a.sort((s, l) => s[0] - l[0]), a;
    } else
      return [];
  }
}, c = W, X = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 31"
}, J = /* @__PURE__ */ i("path", { d: "M15.552 15.168q.448.32.448.832 0 .448-.448.768L1.856 25.28q-.768.512-1.312.192T0 24.192V7.744q0-.96.544-1.28t1.312.192z" }, null, -1), G = [
  J
];
function Q(e, t) {
  return n(), p("svg", X, [...G]);
}
const K = { render: Q }, Z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 17 32"
}, ee = /* @__PURE__ */ i("path", { d: "M14.08 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112V6.848q0-2.048 2.88-2.048m-11.2 0q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112T0 25.088V6.848Q0 4.8 2.88 4.8" }, null, -1), te = [
  ee
];
function ae(e, t) {
  return n(), p("svg", Z, [...te]);
}
const ie = { render: ae }, se = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 28 32"
}, oe = /* @__PURE__ */ i("path", { d: "M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8M20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16m4.576 0q0 2.72-1.536 5.056t-4 3.36q-.256.096-.448.096-.48 0-.832-.352t-.32-.8q0-.704.672-1.056 1.024-.512 1.376-.8 1.312-.96 2.048-2.4T22.848 16t-.736-3.104-2.048-2.4q-.352-.288-1.376-.8-.672-.352-.672-1.056 0-.448.32-.8t.8-.352q.224 0 .48.096 2.496 1.056 4 3.36T25.152 16m4.576 0q0 4.096-2.272 7.552t-6.048 5.056q-.224.096-.448.096-.48 0-.832-.352t-.32-.8q0-.64.704-1.056l.384-.192q.256-.128.416-.192.8-.448 1.44-.896 2.208-1.632 3.456-4.064T27.424 16t-1.216-5.152-3.456-4.064q-.64-.448-1.44-.896-.128-.096-.416-.192t-.384-.192q-.704-.416-.704-1.056 0-.448.32-.8t.832-.352q.224 0 .448.096 3.776 1.632 6.048 5.056T29.728 16" }, null, -1), re = [
  oe
];
function le(e, t) {
  return n(), p("svg", se, [...re]);
}
const ne = { render: le }, de = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 28 32"
}, he = /* @__PURE__ */ i("path", { d: "M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8M20.576 16q0 1.344-.768 2.528t-2.016 1.664q-.16.096-.448.096-.448 0-.8-.32t-.32-.832q0-.384.192-.64t.544-.448.608-.384.512-.64.192-1.024-.192-1.024-.512-.64-.608-.384-.544-.448-.192-.64q0-.48.32-.832t.8-.32q.288 0 .448.096 1.248.48 2.016 1.664T20.576 16" }, null, -1), ue = [
  he
];
function pe(e, t) {
  return n(), p("svg", de, [...ue]);
}
const ce = { render: pe }, ye = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 28 32"
}, me = /* @__PURE__ */ i("path", { d: "M13.728 6.272v19.456q0 .448-.352.8t-.8.32-.8-.32l-5.952-5.952H1.152q-.48 0-.8-.352t-.352-.8v-6.848q0-.48.352-.8t.8-.352h4.672l5.952-5.952q.32-.32.8-.32t.8.32.352.8" }, null, -1), fe = [
  me
];
function ve(e, t) {
  return n(), p("svg", ye, [...fe]);
}
const ge = { render: ve }, we = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, Se = /* @__PURE__ */ i("path", { d: "m22.667 4 7 6-7 6 7 6-7 6v-4h-3.653l-3.76-3.76 2.827-2.827L20.668 20h2v-8h-2l-12 12h-6v-4h4.347l12-12h3.653V4zm-20 4h6l3.76 3.76L9.6 14.587 7.013 12H2.666z" }, null, -1), Te = [
  Se
];
function Le(e, t) {
  return n(), p("svg", we, [...Te]);
}
const $e = { render: Le }, _e = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, Be = /* @__PURE__ */ i("path", { d: "M.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549H.622z" }, null, -1), be = [
  Be
];
function ke(e, t) {
  return n(), p("svg", _e, [...be]);
}
const Me = { render: ke }, Ee = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 22 32"
}, Re = /* @__PURE__ */ i("path", { d: "M20.8 14.4q.704 0 1.152.48T22.4 16t-.48 1.12-1.12.48H1.6q-.64 0-1.12-.48T0 16t.448-1.12T1.6 14.4zM1.6 11.2q-.64 0-1.12-.48T0 9.6t.448-1.12T1.6 8h19.2q.704 0 1.152.48T22.4 9.6t-.48 1.12-1.12.48zm19.2 9.6q.704 0 1.152.48t.448 1.12-.48 1.12-1.12.48H1.6q-.64 0-1.12-.48T0 22.4t.448-1.12T1.6 20.8z" }, null, -1), Ce = [
  Re
];
function qe(e, t) {
  return n(), p("svg", Ee, [...Ce]);
}
const xe = { render: qe }, Ne = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 29 32"
}, Oe = /* @__PURE__ */ i("path", { d: "M9.333 9.333h13.333v4L27.999 8l-5.333-5.333v4h-16v8h2.667zm13.334 13.334H9.334v-4L4.001 24l5.333 5.333v-4h16v-8h-2.667v5.333z" }, null, -1), Ae = [
  Oe
];
function Ie(e, t) {
  return n(), p("svg", Ne, [...Ae]);
}
const ze = { render: Ie }, Fe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 33 32"
}, He = /* @__PURE__ */ i("path", { d: "M9.333 9.333h13.333v4L27.999 8l-5.333-5.333v4h-16v8h2.667zm13.334 13.334H9.334v-4L4.001 24l5.333 5.333v-4h16v-8h-2.667v5.333zM17.333 20v-8H16l-2.667 1.333v1.333h2v5.333z" }, null, -1), Ve = [
  He
];
function Ue(e, t) {
  return n(), p("svg", Fe, [...Ve]);
}
const Pe = { render: Ue }, De = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 29 32"
}, je = /* @__PURE__ */ i("path", { d: "m2.667 7.027 1.707-1.693 22.293 22.293-1.693 1.707-4-4H9.334v4l-5.333-5.333 5.333-5.333v4h8.973l-8.973-8.973v.973H6.667v-3.64zm20 10.306h2.667v5.573l-2.667-2.667v-2.907zm0-10.666v-4L28 8l-5.333 5.333v-4H11.76L9.093 6.666z" }, null, -1), Ye = [
  je
];
function We(e, t) {
  return n(), p("svg", De, [...Ye]);
}
const Xe = { render: We }, Je = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, Ge = /* @__PURE__ */ i("path", { d: "M4 16C4 9.4 9.4 4 16 4s12 5.4 12 12c0 1.2-.8 2-2 2s-2-.8-2-2c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.2 0 2 .8 2 2s-.8 2-2 2C9.4 28 4 22.6 4 16" }, null, -1), Qe = [
  Ge
];
function Ke(e, t) {
  return n(), p("svg", Je, [...Qe]);
}
const Ze = { render: Ke }, et = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, tt = /* @__PURE__ */ i("path", { d: "M22 16 11.895 5.4 10 7.387 18.211 16 10 24.612l1.895 1.988 8.211-8.613z" }, null, -1), at = [
  tt
];
function it(e, t) {
  return n(), p("svg", et, [...at]);
}
const st = { render: it }, ot = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, rt = /* @__PURE__ */ i("path", { d: "M25.468 6.947a1 1 0 0 0-1.03.057L18 11.384V7.831a1.001 1.001 0 0 0-1.562-.827l-12 8.164a1 1 0 0 0 0 1.654l12 8.168A.999.999 0 0 0 18 24.164v-3.556l6.438 4.382A.999.999 0 0 0 26 24.164V7.831c0-.371-.205-.71-.532-.884" }, null, -1), lt = [
  rt
];
function nt(e, t) {
  return n(), p("svg", ot, [...lt]);
}
const dt = { render: nt }, ht = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, ut = /* @__PURE__ */ i("path", { d: "M26.667 5.333H5.333a2.667 2.667 0 0 0-2.666 2.666v16.002a2.667 2.667 0 0 0 2.666 2.666h21.335a2.667 2.667 0 0 0 2.666-2.666V7.999a2.667 2.667 0 0 0-2.666-2.666zM5.333 16h5.333v2.667H5.333zm13.334 8H5.334v-2.667h13.333zm8 0h-5.333v-2.667h5.333zm0-5.333H13.334V16h13.333z" }, null, -1), pt = [
  ut
];
function ct(e, t) {
  return n(), p("svg", ht, [...pt]);
}
const yt = { render: ct }, mt = {
  __name: "Icon",
  props: {
    type: {
      type: String
    }
  },
  setup(e) {
    const t = {
      play: K,
      pause: ie,
      volumeUp: ne,
      volumeDown: ce,
      volumeOff: ge,
      orderRandom: $e,
      orderList: Me,
      menu: xe,
      loopAll: ze,
      loopOne: Pe,
      loopNone: Xe,
      loading: Ze,
      right: st,
      skip: dt,
      lrc: yt
    };
    return (a, s) => (n(), B(U(t[e.type])));
  }
}, F = mt, M = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [s, l] of t)
    a[s] = l;
  return a;
}, ft = {
  props: ["aplayer"],
  computed: {
    ol() {
      return this.$refs.ol;
    }
  },
  methods: {
    showList() {
      setTimeout(() => {
        this.ol.scrollTop = this.aplayer.index * 33;
      }, 0);
    },
    switchList(e) {
      e !== this.aplayer.index ? (this.$emit("switchList", e), this.$emit("play")) : this.$emit("toggle");
    }
  }
}, vt = ["onClick"], gt = { class: "aplayer-list-index" }, wt = { class: "aplayer-list-title" }, St = { class: "aplayer-list-author" };
function Tt(e, t, a, s, l, d) {
  return n(), p("div", {
    class: S(["aplayer-list", { "aplayer-list-hide": !a.aplayer.listFolded }]),
    style: g({ "max-height": `${a.aplayer.listMaxHeight}px` })
  }, [
    i("ol", {
      style: g({ "max-height": `${a.aplayer.listMaxHeight}px` }),
      ref: "ol"
    }, [
      (n(!0), p(A, null, I(a.aplayer.audio, (r, o) => (n(), p("li", {
        class: S({ "aplayer-list-light": o === a.aplayer.index }),
        onClick: (h) => d.switchList(o)
      }, [
        i("span", {
          class: "aplayer-list-cur",
          style: g({ background: `${a.aplayer.coverColor[a.aplayer.index] || r.theme || a.aplayer.theme}` })
        }, null, 4),
        i("span", gt, w(o + 1), 1),
        i("span", wt, w(r.name), 1),
        i("span", St, w(r.artist ? r.artist : ""), 1)
      ], 10, vt))), 256))
    ], 4)
  ], 6);
}
const Lt = /* @__PURE__ */ M(ft, [["render", Tt]]), $t = {
  props: ["aplayer"],
  computed: {
    transformStyle() {
      return {
        transform: `translateY(-${this.aplayer.lyricIndex * 16}px)`,
        webkitTransform: `translateY(-${this.aplayer.lyricIndex * 16}px)`
      };
    }
  }
}, _t = { class: "aplayer-lrc" };
function Bt(e, t, a, s, l, d) {
  return n(), p("div", _t, [
    i("div", {
      class: "aplayer-lrc-contents",
      style: g(d.transformStyle)
    }, [
      (n(!0), p(A, null, I(a.aplayer.lyrics[a.aplayer.index], (r, o) => (n(), p("p", {
        class: S({ "aplayer-lrc-current": o === a.aplayer.lyricIndex })
      }, w(r[1]), 3))), 256))
    ], 4)
  ]);
}
const bt = /* @__PURE__ */ M($t, [["render", Bt]]), R = ["one", "all", "none"], C = ["list", "random"], kt = {
  components: {
    utils: c,
    Icon: F
  },
  props: ["aplayer", "audioStatus", "styleStatus"],
  data() {
    return {
      aplayerThumbShowStatus: !1,
      volumeBarShowStatus: !1
    };
  },
  computed: {
    aplayerBar() {
      return this.$refs.aplayerBar;
    },
    volumeBar() {
      return this.$refs.volumeBar;
    },
    switchVolumeIcon() {
      return this.aplayer.muted || this.aplayer.volume <= 0 ? "volumeOff" : this.aplayer.volume >= 0.95 ? "volumeUp" : "volumeDown";
    },
    audio() {
      return this.aplayer.audio[this.aplayer.index];
    },
    duration() {
      return c.secondToTime(this.audioStatus.duration);
    },
    playedTime: {
      get() {
        return c.secondToTime(this.audioStatus.playedTime);
      },
      set(e) {
        this.$emit("playedTime", e);
      }
    },
    disableTimeUpdate: {
      get() {
        return this.audioStatus.disableTimeUpdate;
      },
      set(e) {
        this.$emit("disableTimeUpdate", e);
      }
    }
  },
  methods: {
    loopButtonClick() {
      let e = R.indexOf(this.aplayer.loop);
      e = (e + 1) % R.length, this.$emit("setLoop", R[e]);
    },
    orderButtonClick() {
      let e = C.indexOf(this.aplayer.order);
      e = (e + 1) % C.length, this.$emit("setOrder", C[e]);
    },
    aplayerBarMoving(e) {
      let t = ((e.clientX || e.changedTouches[0].clientX) - this.aplayerBar.getBoundingClientRect().left) / this.aplayerBar.clientWidth;
      t = Math.max(t, 0), t = Math.min(t, 1), this.playedTime = t * this.audioStatus.duration, this.$emit("updateLyric");
    },
    aplayerBarMoveEnd(e) {
      document.removeEventListener(c.eventsName.moveEnd, this.aplayerBarMoveEnd), document.removeEventListener(c.eventsName.moving, this.aplayerBarMoving);
      let t = ((e.clientX || e.changedTouches[0].clientX) - this.aplayerBar.getBoundingClientRect().left) / this.aplayerBar.clientWidth;
      t = Math.max(t, 0), t = Math.min(t, 1), this.$emit("seek", t * this.audioStatus.duration), this.disableTimeUpdate = !1;
    },
    aplayerBarMoveStart() {
      this.disableTimeUpdate = !0, document.addEventListener(c.eventsName.moving, this.aplayerBarMoving), document.addEventListener(c.eventsName.moveEnd, this.aplayerBarMoveEnd);
    },
    volumeBarMoving(e) {
      let t = 1 - ((e.clientY || e.changedTouches[0].clientY) - this.volumeBar.getBoundingClientRect().top) / this.volumeBar.clientHeight;
      t = Math.max(t, 0), t = Math.min(t, 1), this.$emit("setVolume", t);
    },
    volumeBarMoveEnd(e) {
      this.volumeBarShowStatus = !1, document.removeEventListener(c.eventsName.moveEnd, this.volumeBarMoveEnd), document.removeEventListener(c.eventsName.moving, this.volumeBarMoving);
      let t = 1 - ((e.clientY || e.changedTouches[0].clientY) - this.volumeBar.getBoundingClientRect().top) / this.volumeBar.clientHeight;
      t = Math.max(t, 0), t = Math.min(t, 1), this.$emit("setVolume", t, !0);
    },
    volumeBarMoveStart() {
      this.volumeBarShowStatus = !0, document.addEventListener(c.eventsName.moving, this.volumeBarMoving), document.addEventListener(c.eventsName.moveEnd, this.volumeBarMoveEnd);
    }
  },
  mounted() {
    this.aplayerBar.parentNode.addEventListener(c.eventsName.moveStart, this.aplayerBarMoveStart), this.volumeBar.parentNode.addEventListener(c.eventsName.moveStart, this.volumeBarMoveStart);
  },
  beforeUnmount() {
    this.aplayerBar.parentNode.removeEventListener(c.eventsName.moveStart, this.aplayerBarMoveStart), this.volumeBar.parentNode.removeEventListener(c.eventsName.moveStart, this.volumeBarMoveStart);
  }
}, Mt = { class: "aplayer-controller" }, Et = {
  class: "aplayer-bar",
  ref: "aplayerBar"
}, Rt = { class: "aplayer-loading-icon" }, Ct = { class: "aplayer-time-inner" }, qt = { class: "aplayer-ptime" }, xt = { class: "aplayer-dtime" }, Nt = { class: "aplayer-volume-bar-wrap" }, Ot = {
  class: "aplayer-volume-bar",
  ref: "volumeBar"
};
function At(e, t, a, s, l, d) {
  var o, h, m;
  const r = b("Icon");
  return n(), p("div", Mt, [
    i("div", {
      class: "aplayer-bar-wrap",
      onMouseover: t[0] || (t[0] = (u) => l.aplayerThumbShowStatus = !0),
      onMouseout: t[1] || (t[1] = (u) => l.aplayerThumbShowStatus = !1)
    }, [
      i("div", Et, [
        i("div", {
          class: "aplayer-loaded",
          style: g({ width: `${a.audioStatus.duration ? a.audioStatus.loadedTime / a.audioStatus.duration * 100 : 0}%` })
        }, null, 4),
        i("div", {
          class: "aplayer-played",
          style: g({ width: `${a.audioStatus.duration ? a.audioStatus.playedTime / a.audioStatus.duration * 100 : 0}%`, background: `${a.aplayer.coverColor[a.aplayer.index] || ((o = d.audio) == null ? void 0 : o.theme) || a.aplayer.theme}` })
        }, [
          f(i("span", {
            class: "aplayer-thumb",
            style: g({ background: `${a.aplayer.coverColor[a.aplayer.index] || ((h = d.audio) == null ? void 0 : h.theme) || a.aplayer.theme}` })
          }, [
            i("span", Rt, [
              y(r, { type: "loading" })
            ])
          ], 4), [
            [v, l.aplayerThumbShowStatus]
          ])
        ], 4)
      ], 512)
    ], 32),
    i("div", {
      class: S({ "aplayer-time": !0, "aplayer-time-narrow": a.styleStatus.timeNarrow })
    }, [
      i("span", Ct, [
        i("span", qt, w(d.playedTime), 1),
        P(" / "),
        i("span", xt, w(d.duration), 1)
      ]),
      i("span", {
        class: "aplayer-icon aplayer-icon-back",
        onClick: t[2] || (t[2] = (u) => e.$emit("skipBack"))
      }, [
        y(r, { type: "skip" })
      ]),
      i("span", {
        class: "aplayer-icon aplayer-icon-play",
        onClick: t[3] || (t[3] = (u) => e.$emit("toggle"))
      }, [
        f(y(r, { type: "play" }, null, 512), [
          [v, !a.audioStatus.playStatus]
        ]),
        f(y(r, { type: "pause" }, null, 512), [
          [v, a.audioStatus.playStatus]
        ])
      ]),
      i("span", {
        class: "aplayer-icon aplayer-icon-forward",
        onClick: t[4] || (t[4] = (u) => e.$emit("skipForward"))
      }, [
        y(r, { type: "skip" })
      ]),
      i("div", {
        class: S(["aplayer-volume-wrap", { "aplayer-volume-bar-wrap-active": l.volumeBarShowStatus }])
      }, [
        i("button", {
          type: "button",
          class: "aplayer-icon aplayer-icon-volume-down",
          onClick: t[5] || (t[5] = (u) => e.$emit("mute"))
        }, [
          y(r, { type: d.switchVolumeIcon }, null, 8, ["type"])
        ]),
        i("div", Nt, [
          i("div", Ot, [
            i("div", {
              class: "aplayer-volume",
              style: g({ height: `${a.aplayer.muted ? 0 : a.aplayer.volume * 100}%`, background: `${a.aplayer.coverColor[a.aplayer.index] || ((m = d.audio) == null ? void 0 : m.theme) || a.aplayer.theme}` })
            }, null, 4)
          ], 512)
        ])
      ], 2),
      i("button", {
        type: "button",
        class: "aplayer-icon aplayer-icon-order",
        onClick: t[6] || (t[6] = (...u) => d.orderButtonClick && d.orderButtonClick(...u))
      }, [
        f(y(r, { type: "orderList" }, null, 512), [
          [v, a.aplayer.order === "list"]
        ]),
        f(y(r, { type: "orderRandom" }, null, 512), [
          [v, a.aplayer.order === "random"]
        ])
      ]),
      i("button", {
        type: "button",
        class: "aplayer-icon aplayer-icon-loop",
        onClick: t[7] || (t[7] = (...u) => d.loopButtonClick && d.loopButtonClick(...u))
      }, [
        f(y(r, { type: "loopOne" }, null, 512), [
          [v, a.aplayer.loop === "one"]
        ]),
        f(y(r, { type: "loopAll" }, null, 512), [
          [v, a.aplayer.loop === "all"]
        ]),
        f(y(r, { type: "loopNone" }, null, 512), [
          [v, a.aplayer.loop === "none"]
        ])
      ]),
      i("button", {
        type: "button",
        class: "aplayer-icon aplayer-icon-menu",
        onClick: t[8] || (t[8] = (u) => e.$emit("toggleList"))
      }, [
        y(r, { type: "menu" })
      ]),
      i("button", {
        type: "button",
        class: S({ "aplayer-icon": !0, "aplayer-icon-lrc": !0, "aplayer-icon-lrc-inactivity": !a.aplayer.lyricShow }),
        onClick: t[9] || (t[9] = (u) => e.$emit("toggleLrc"))
      }, [
        y(r, { type: "lrc" })
      ], 2)
    ], 2)
  ]);
}
const It = /* @__PURE__ */ M(kt, [["render", At]]);
let T = null;
const O = [
  "abort",
  "canplay",
  "canplaythrough",
  "durationchange",
  "emptied",
  "encrypted",
  "ended",
  "error",
  "interruptbegin",
  "interruptend",
  "loadeddata",
  "loadedmetadata",
  "loadstart",
  "mozaudioavailable",
  "pause",
  "play",
  "playing",
  "progress",
  "ratechange",
  "seeked",
  "seeking",
  "stalled",
  "suspend",
  "timeupdate",
  "volumechange",
  "waiting"
], zt = {
  name: "APlayer",
  components: {
    smoothScroll: N,
    utils: c,
    Icon: F,
    List: Lt,
    Lyric: bt,
    Controller: It
  },
  props: {
    audio: {
      type: Array,
      default: []
    },
    mode: {
      type: String,
      default: "normal"
      // "normal", "fixed", "mini"
    },
    autoplay: {
      type: Boolean,
      default: !1
    },
    mutex: {
      type: Boolean,
      default: !0
    },
    preload: {
      type: String,
      default: "metadata"
      // "auto", "metadata", "none"
    },
    theme: {
      type: String,
      default: "#B7DAFF"
    },
    autoSwitch: {
      type: Boolean,
      default: !0
    },
    loop: {
      type: String,
      default: "all"
      // "one", "all", "none"  
    },
    order: {
      type: String,
      default: "list"
      // "list", "random"
    },
    muted: {
      type: Boolean,
      default: !1
    },
    volume: {
      type: Number,
      default: 0.7,
      validator(e) {
        return e >= 0 && e <= 1;
      }
    },
    lrcType: {
      type: Number,
      default: 1
    },
    lrcShow: {
      type: Boolean,
      default: !0
    },
    listFolded: {
      type: Boolean,
      default: !1
    },
    listMaxHeight: {
      type: Number,
      default: 250
    },
    noticeSwitch: {
      type: Boolean,
      default: !0
    },
    storageName: {
      type: String,
      default: "aplayer-setting"
    }
  },
  data() {
    return {
      aplayer: {
        index: 0,
        audio: [],
        randomOrder: [],
        mode: this.mode,
        autoplay: this.autoplay,
        mutex: this.mutex,
        preload: this.preload,
        theme: this.theme,
        autoSwitch: this.autoSwitch,
        coverColor: [],
        loop: this.loop,
        order: this.order,
        muted: this.muted,
        volume: this.volume,
        lyricType: this.lrcType,
        lyricShow: this.lrcShow,
        lyricIndex: 0,
        lyrics: [],
        listFolded: this.listFolded,
        listMaxHeight: this.listMaxHeight,
        noticeSwitch: this.noticeSwitch,
        noticeText: "",
        noticeOpacity: 0,
        storageName: this.storageName,
        storage: {}
      },
      audioStatus: {
        duration: 0,
        loadedTime: 0,
        playedTime: 0,
        playStatus: !1,
        waitingStatus: !1,
        disableTimeUpdate: !1
      },
      styleStatus: {
        isMobile: /mobile/i.test(window.navigator.userAgent),
        narrow: !1,
        timeNarrow: !1,
        mini: !0
      },
      destroyComponent: !1
    };
  },
  computed: {
    audioRef() {
      return this.$refs.audio;
    },
    coverStyle() {
      let e = this.aplayer.audio[this.aplayer.index];
      return e != null && e.cover ? {
        "background-image": `url(${e.cover})`,
        "background-color": `${this.aplayer.coverColor[this.aplayer.index] || (e == null ? void 0 : e.theme) || this.aplayer.theme}`
      } : {
        "background-color": `${this.aplayer.coverColor[this.aplayer.index] || (e == null ? void 0 : e.theme) || this.aplayer.theme}`
      };
    }
  },
  methods: {
    // internal methods
    getStorage(e) {
      return this.aplayer.storage[e];
    },
    setStorage(e, t) {
      this.aplayer.storage[e] = t, localStorage.setItem(this.aplayer.storageName, JSON.stringify(this.aplayer.storage));
    },
    setAudio(e) {
      this.hls && (this.hls.destroy(), this.hls = null);
      let t = e.type;
      (!t || t === "auto") && (t = /m3u8(#|\?|$)/i.exec(e.url) ? "hls" : "normal"), t === "hls" ? Hls.isSupported() ? (this.hls = new Hls(), this.hls.loadSource(e.url), this.hls.attachMedia(this.audioRef)) : this.audioRef.canPlayType("application/x-mpegURL") || this.audioRef.canPlayType("application/vnd.apple.mpegURL") ? this.audioRef.src = e.url : this.setNotice("Error: HLS is not supported.") : t === "normal" && (this.audioRef.src = e.url);
    },
    prevIndex() {
      let e = this.aplayer.index;
      if (this.aplayer.audio.length > 1) {
        if (this.aplayer.order === "list")
          return e - 1 < 0 ? this.aplayer.audio.length - 1 : e - 1;
        if (this.aplayer.order === "random") {
          let t = this.aplayer.randomOrder.indexOf(e);
          return t === 0 ? this.aplayer.randomOrder[this.aplayer.randomOrder.length - 1] : this.aplayer.randomOrder[t - 1];
        }
      } else
        return 0;
    },
    nextIndex() {
      let e = this.aplayer.index;
      if (this.aplayer.audio.length > 1) {
        if (this.aplayer.order === "list")
          return (e + 1) % this.aplayer.audio.length;
        if (this.aplayer.order === "random") {
          let t = this.aplayer.randomOrder.indexOf(e);
          return t === this.aplayer.randomOrder.length - 1 ? this.aplayer.randomOrder[0] : this.aplayer.randomOrder[t + 1];
        }
      } else
        return 0;
    },
    coverColor() {
      var t;
      let e = !this.aplayer.coverColor[this.aplayer.index];
      if (this.aplayer.autoSwitch && e)
        try {
          this.colorThief || (this.colorThief = new ColorThief()), this.colorThief.getColorAsync((t = this.aplayer.audio[this.aplayer.index]) == null ? void 0 : t.cover, ([a, s, l]) => this.aplayer.coverColor[this.aplayer.index] = `rgb(${a}, ${s}, ${l})`);
        } catch {
          this.aplayer.autoSwitch = !1, this.setNotice("The color-thief is required to support self-adapting theme.");
        }
    },
    switchStyle() {
      this.$refs.switch && (this.$refs.switch.style.display = "none", setTimeout(() => {
        this.$refs.switch && (this.$refs.switch.style.display = "block");
      }, 100));
    },
    loadedTime() {
      return this.audioRef.buffered.length ? this.audioRef.buffered.end(this.audioRef.buffered.length - 1) : 0;
    },
    playedTime(e) {
      this.audioStatus.playedTime = e;
    },
    disableTimeUpdate(e) {
      this.audioStatus.disableTimeUpdate = e;
    },
    async loadLyric(e, t) {
      try {
        let a = await fetch(this.aplayer.audio[t].lrc);
        a.ok || a.status === 304 ? e = c.parse(await a.text()) : this.setNotice("LRC file request fails: status " + a.status);
      } catch (a) {
        console.warn(a);
      } finally {
        this.aplayer.lyrics[t] = e, this.updateLyric();
      }
    },
    switchLyric(e) {
      if (this.aplayer.lyrics[e])
        return;
      let t = [[0, "Not available"]];
      this.aplayer.lyricType === 1 ? (this.aplayer.lyrics[e] = [[0, "Loading"]], this.loadLyric(t, e)) : this.aplayer.lyricType === 2 && (this.aplayer.audio[e].lrc && (t = c.parse(this.aplayer.audio[e].lrc)), this.aplayer.lyrics[e] = t, this.updateLyric());
    },
    updateLyric() {
      let e = this.aplayer.lyrics[this.aplayer.index];
      if (e)
        for (let t = 0; t < e.length; t++) {
          const a = e[t], s = e[t + 1];
          this.audioStatus.playedTime >= a[0] && (!s || this.audioStatus.playedTime < s[0]) && (this.aplayer.lyricIndex = t);
        }
    },
    // expose methods
    init() {
      this.destroyComponent = !1, this.aplayer.storage = JSON.parse(localStorage.getItem(this.aplayer.storageName)) || {}, this.aplayer.volume = this.getStorage("volume") || this.aplayer.volume, this.audioRef.preload = this.aplayer.preload, this.audioRef.muted = this.aplayer.muted, this.audioRef.volume = this.aplayer.volume, O.forEach((e) => {
        this.audioRef.addEventListener(e, (t) => this.$emit(e, t));
      }), this.audioRef.addEventListener("play", () => this.audioStatus.playStatus = !0), this.audioRef.addEventListener("pause", () => this.audioStatus.playStatus = !1), this.audioRef.addEventListener("timeupdate", this.timeupdate), this.audioRef.addEventListener("durationchange", this.durationchange), this.audioRef.addEventListener("loadedmetadata", this.loadedmetadata), this.audioRef.addEventListener("canplay", this.canplay), this.audioRef.addEventListener("progress", this.progress), this.audioRef.addEventListener("error", this.error), this.audioRef.addEventListener("ended", this.ended), this.audioRef.addEventListener("waiting", this.waiting), this.audioRef.addEventListener("playing", this.playing), window.addEventListener("resize", this.resize), this.addList(this.audio, !0), this.aplayer.autoplay && this.play(), this.$emit("init");
    },
    play() {
      this.switchStyle(), this.audioStatus.playStatus = !0, this.$nextTick(() => {
        this.audioStatus.playStatus = !0, this.aplayer.mutex && (T && T !== this && T.pause(), T = this);
        const e = this.audioRef.play();
        e && e.catch((t) => {
          console.warn(t), t.name === "NotAllowedError" && (this.audioStatus.playStatus = !1);
        });
      });
    },
    pause() {
      this.switchStyle(), this.audioStatus.playStatus = !1, this.audioRef.pause();
    },
    toggle() {
      this.audioStatus.playStatus ? this.pause() : this.play();
    },
    seek(e) {
      e = Math.max(e, 0), e = Math.min(e, this.audioStatus.duration), this.audioStatus.playedTime = e, this.audioRef.currentTime = e;
    },
    mute() {
      this.aplayer.muted = !this.aplayer.muted, this.audioRef.muted = !this.audioRef.muted;
    },
    setVolume(e, t = !1) {
      e = parseFloat(e), isNaN(e) || (e = Math.max(e, 0), e = Math.min(e, 1), this.aplayer.volume = e, this.audioRef.volume = e, t && this.setStorage("volume", e), this.aplayer.muted && this.mute());
    },
    // user set theme > auto cover theme > audio theme > aplayer theme
    setTheme(e, t = this.aplayer.index) {
      e && (this.aplayer.coverColor[t] ? this.aplayer.coverColor[t] = e : this.aplayer.audio[t] && (this.aplayer.audio[t].theme = e));
    },
    setMode(e = "normal") {
      this.aplayer.mode = e, this.resize();
    },
    setLoop(e) {
      this.aplayer.audio.length <= 1 && e === "one" && (e = "all"), this.aplayer.loop = e;
    },
    setOrder(e) {
      this.aplayer.order = e;
    },
    setNotice(e, t = 2e3, a = 0.8) {
      if (!this.aplayer.noticeSwitch || this.aplayer.mode === "mini" || this.aplayer.mode === "fixed" && this.styleStatus.mini) {
        console.warn(e);
        return;
      }
      this.aplayer.noticeText = e, this.aplayer.noticeOpacity = a, this.noticeTimeout && clearTimeout(this.noticeTimeout), this.$emit("noticeshow"), t && (this.noticeTimeout = setTimeout(() => {
        this.aplayer.noticeOpacity = 0, this.$emit("noticehide");
      }, t));
    },
    skipBack() {
      this.switchList(this.prevIndex());
    },
    skipForward() {
      this.switchList(this.nextIndex());
    },
    destroy() {
      this.destroyComponent = !0, this.$emit("destroy");
    },
    showLrc() {
      this.$emit("lrcshow"), this.aplayer.lyricShow = !0;
    },
    hideLrc() {
      this.$emit("lrchide"), this.aplayer.lyricShow = !1;
    },
    toggleLrc() {
      this.aplayer.lyricShow ? this.hideLrc() : this.showLrc();
    },
    showList() {
      this.$emit("listshow"), this.aplayer.mode !== "mini" && this.$refs.list.showList(), this.aplayer.listFolded = !0;
    },
    hideList() {
      this.$emit("listhide"), this.aplayer.listFolded = !1;
    },
    toggleList() {
      this.aplayer.listFolded ? this.hideList() : this.showList();
    },
    addList(e, t = !1) {
      this.$emit("listadd", e), Object.prototype.toString.call(e) !== "[object Array]" && (e = [e]), e.map((s) => (s.name = s.name || s.title || "Audio Name", s.artist = s.artist || s.author || "Audio Artist", s.cover = s.cover || s.pic, s.type = s.type || "normal", s));
      const a = this.aplayer.audio.length === 0;
      if (t && (this.aplayer.audio = []), this.aplayer.audio = this.aplayer.audio.concat(e), this.aplayer.randomOrder = c.randomOrder(this.aplayer.audio.length), a) {
        let s = 0;
        this.aplayer.order === "random" && (s = this.aplayer.randomOrder[0]), this.switchList(s);
      }
    },
    removeList(e) {
      this.$emit("listremove", nextIndex), this.aplayer.coverColor.splice(e, 1), this.aplayer.randomOrder.splice(this.aplayer.randomOrder.indexOf(this.aplayer.audio.length - 1), 1), this.aplayer.audio[e] && (this.aplayer.audio.length > 1 ? (this.aplayer.audio.splice(e, 1), e === this.aplayer.index && (this.aplayer.audio[e] ? this.switchList(e) : this.switchList(e - 1)), this.aplayer.index > e && this.aplayer.index--) : this.clearList()), this.aplayer.lyrics.splice(e, 1);
    },
    switchList(e) {
      this.$emit("listswitch", e), typeof e < "u" && this.aplayer.audio[e] && (this.aplayer.index = e, this.coverColor(), this.aplayer.mode !== "mini" && N(e * 33, 500, null, this.$refs.list.ol), this.setAudio(this.aplayer.audio[e]), this.switchLyric(e), this.audioStatus.duration = 0, this.audioStatus.playedTime = 0);
    },
    clearList() {
      this.$emit("listclear"), this.pause(), this.audioRef.src = "", this.aplayer.audio = [], this.aplayer.randomOrder = [], this.aplayer.coverColor = [], this.aplayer.lyrics = [], this.aplayer.index = 0, this.aplayer.lyricIndex = 0, this.audioStatus.duration = 0, this.audioStatus.loadedTime = 0, this.audioStatus.playedTime = 0, this.audioStatus.playStatus = !1, this.audioStatus.waitingStatus = !1, this.audioStatus.disableTimeUpdate = !1;
    },
    // media events
    timeupdate() {
      this.audioStatus.disableTimeUpdate || (this.audioStatus.playedTime = this.audioRef.currentTime), this.updateLyric();
    },
    durationchange() {
      this.audioStatus.duration = this.audioRef.duration;
    },
    loadedmetadata() {
      this.seek(0), this.audioStatus.playStatus && this.audioRef.play();
    },
    canplay() {
      this.audioStatus.loadedTime = this.loadedTime();
    },
    progress() {
      this.audioStatus.loadedTime = this.loadedTime();
    },
    error() {
      if (this.aplayer.audio.length > 1) {
        let e = this.audioStatus.playStatus;
        this.setNotice("An audio error has occurred, player will skip forward in 2 seconds."), this.skipForwardTimeout && clearTimeout(this.skipForwardTimeout), this.skipForwardTimeout = setTimeout(() => {
          this.skipForward(), e && this.play();
        }, 2e3);
      } else
        this.aplayer.audio.length === 1 && this.setNotice("An audio error has occurred.");
    },
    ended() {
      let e = this.aplayer.index;
      this.aplayer.loop === "none" ? (this.skipForward(), this.aplayer.order === "list" ? e < this.aplayer.audio.length - 1 ? this.play() : this.pause() : this.aplayer.order === "random" && (this.aplayer.randomOrder.indexOf(e) < this.aplayer.randomOrder.length - 1 ? this.play() : this.pause())) : this.aplayer.loop === "one" ? (this.switchList(e), this.play()) : this.aplayer.loop === "all" && (this.skipForward(), this.play());
    },
    waiting() {
      this.audioStatus.waitingStatus = !0;
    },
    playing() {
      this.audioStatus.waitingStatus = !1;
    },
    resize() {
      this.aplayer.mode === "normal" ? (this.styleStatus.narrow = this.$refs.aplayer.offsetWidth <= 300, this.styleStatus.timeNarrow = this.$refs.info.offsetWidth <= 200) : (this.styleStatus.narrow = window.innerWidth <= 318, this.styleStatus.timeNarrow = !0);
    }
  },
  watch: {
    audio(e) {
      this.addList(e, !0);
    }
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
    this.clearList(), this.hls && this.hls.destroy(), T === this && (T = null), this.colorThief = null, this.noticeTimeout && clearTimeout(this.noticeTimeout), this.skipForwardTimeout && clearTimeout(this.skipForwardTimeout), O.forEach((e) => {
      this.audioRef.removeEventListener(e, (t) => this.$emit(e, t));
    }), this.audioRef.removeEventListener("play", () => this.audioStatus.playStatus = !0), this.audioRef.removeEventListener("pause", () => this.audioStatus.playStatus = !1), this.audioRef.removeEventListener("timeupdate", this.timeupdate), this.audioRef.removeEventListener("durationchange", this.durationchange), this.audioRef.removeEventListener("loadedmetadata", this.loadedmetadata), this.audioRef.removeEventListener("canplay", this.canplay), this.audioRef.removeEventListener("progress", this.progress), this.audioRef.removeEventListener("error", this.error), this.audioRef.removeEventListener("ended", this.ended), this.audioRef.removeEventListener("waiting", this.waiting), this.audioRef.removeEventListener("playing", this.playing), window.removeEventListener("resize", this.resize);
  }
}, Ft = zt, Ht = { ref: "switch" }, Vt = {
  class: "aplayer-info",
  ref: "info"
}, Ut = { class: "aplayer-music" }, Pt = { class: "aplayer-title" }, Dt = { class: "aplayer-author" }, jt = { class: "aplayer-icon" }, Yt = { ref: "audio" };
function Wt(e, t, a, s, l, d) {
  const r = b("List"), o = b("Icon"), h = b("Lyric"), m = b("Controller");
  return e.destroyComponent ? _("", !0) : (n(), p("div", {
    key: 0,
    class: S(["aplayer", { "aplayer-narrow": e.styleStatus.narrow, "aplayer-fixed": e.aplayer.mode === "fixed", "aplayer-mini": e.aplayer.mode === "mini" || e.aplayer.mode === "fixed" && e.styleStatus.mini, "aplayer-loading": e.audioStatus.playStatus && e.audioStatus.waitingStatus, "aplayer-withlist": e.aplayer.audio.length > 1, "aplayer-withlrc": e.aplayer.mode === "normal" && e.aplayer.lyricShow, "aplayer-mobile": e.styleStatus.isMobile }]),
    ref: "aplayer"
  }, [
    e.aplayer.mode === "fixed" ? (n(), B(r, {
      key: 0,
      aplayer: e.aplayer,
      onPlay: e.play,
      onToggle: e.toggle,
      onSwitchList: e.switchList,
      ref: "list"
    }, null, 8, ["aplayer", "onPlay", "onToggle", "onSwitchList"])) : _("", !0),
    i("div", {
      class: "aplayer-body",
      style: g({ width: `${e.aplayer.mode === "fixed" ? "calc(100% - 18px)" : "100%"}` })
    }, [
      i("div", {
        class: "aplayer-pic",
        style: g(e.coverStyle),
        onClick: t[0] || (t[0] = (...u) => e.toggle && e.toggle(...u))
      }, [
        i("div", {
          class: S(["aplayer-button", { "aplayer-play": !e.audioStatus.playStatus, "aplayer-pause": e.audioStatus.playStatus }])
        }, [
          i("div", Ht, [
            f(y(o, { type: "play" }, null, 512), [
              [v, !e.audioStatus.playStatus]
            ]),
            f(y(o, { type: "pause" }, null, 512), [
              [v, e.audioStatus.playStatus]
            ])
          ], 512)
        ], 2)
      ], 4),
      i("div", Vt, [
        i("div", Ut, [
          i("span", Pt, w(e.aplayer.audio[e.aplayer.index] ? e.aplayer.audio[e.aplayer.index].name : "No Audio"), 1),
          i("span", Dt, w(e.aplayer.audio[e.aplayer.index] ? " - " + e.aplayer.audio[e.aplayer.index].artist : ""), 1)
        ]),
        e.aplayer.mode === "normal" ? f((n(), B(h, {
          key: 0,
          aplayer: e.aplayer,
          ref: "lyric"
        }, null, 8, ["aplayer"])), [
          [v, e.aplayer.lyricShow]
        ]) : _("", !0),
        y(m, {
          aplayer: e.aplayer,
          audioStatus: e.audioStatus,
          styleStatus: e.styleStatus,
          onPlayedTime: e.playedTime,
          onDisableTimeUpdate: e.disableTimeUpdate,
          onToggle: e.toggle,
          onSkipBack: e.skipBack,
          onSkipForward: e.skipForward,
          onSeek: e.seek,
          onMute: e.mute,
          onSetLoop: e.setLoop,
          onSetOrder: e.setOrder,
          onToggleList: e.toggleList,
          onToggleLrc: e.toggleLrc,
          onSetVolume: e.setVolume
        }, null, 8, ["aplayer", "audioStatus", "styleStatus", "onPlayedTime", "onDisableTimeUpdate", "onToggle", "onSkipBack", "onSkipForward", "onSeek", "onMute", "onSetLoop", "onSetOrder", "onToggleList", "onToggleLrc", "onSetVolume"])
      ], 512),
      i("div", {
        class: "aplayer-notice",
        style: g({ opacity: e.aplayer.noticeOpacity })
      }, w(e.aplayer.noticeText), 5),
      i("div", {
        class: "aplayer-miniswitcher",
        onClick: t[1] || (t[1] = (u) => e.styleStatus.mini = !e.styleStatus.mini)
      }, [
        i("button", jt, [
          y(o, { type: "right" })
        ])
      ])
    ], 4),
    e.aplayer.mode === "normal" ? (n(), B(r, {
      key: 1,
      aplayer: e.aplayer,
      onPlay: e.play,
      onToggle: e.toggle,
      onSwitchList: e.switchList,
      ref: "list"
    }, null, 8, ["aplayer", "onPlay", "onToggle", "onSwitchList"])) : _("", !0),
    e.aplayer.mode === "fixed" ? f((n(), B(h, {
      key: 2,
      aplayer: e.aplayer,
      ref: "lyric"
    }, null, 8, ["aplayer"])), [
      [v, e.aplayer.lyricShow]
    ]) : _("", !0),
    i("audio", Yt, null, 512)
  ], 2));
}
const q = /* @__PURE__ */ M(Ft, [["render", Wt]]);
q.install = (e) => {
  e.component(q.name, q);
};
export {
  q as default
};
//# sourceMappingURL=vue-aplayer.js.map

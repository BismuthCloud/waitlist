/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
	var l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
	var mr = l(() => {
		'use strict';
		window.tram = (function (e) {
			function t(c, h) {
				var y = new ve.Bare();
				return y.init(c, h);
			}
			function n(c) {
				return c.replace(/[A-Z]/g, function (h) {
					return '-' + h.toLowerCase();
				});
			}
			function r(c) {
				var h = parseInt(c.slice(1), 16),
					y = (h >> 16) & 255,
					m = (h >> 8) & 255,
					L = 255 & h;
				return [y, m, L];
			}
			function a(c, h, y) {
				return '#' + ((1 << 24) | (c << 16) | (h << 8) | y).toString(16).slice(1);
			}
			function i() {}
			function o(c, h) {
				f('Type warning: Expected: [' + c + '] Got: [' + typeof h + '] ' + h);
			}
			function s(c, h, y) {
				f('Units do not match [' + c + ']: ' + h + ', ' + y);
			}
			function u(c, h, y) {
				if ((h !== void 0 && (y = h), c === void 0)) return y;
				var m = y;
				return (
					Je.test(c) || !Ue.test(c)
						? (m = parseInt(c, 10))
						: Ue.test(c) && (m = 1e3 * parseFloat(c)),
					0 > m && (m = 0),
					m === m ? m : y
				);
			}
			function f(c) {
				Y.debug && window && window.console.warn(c);
			}
			function v(c) {
				for (var h = -1, y = c ? c.length : 0, m = []; ++h < y; ) {
					var L = c[h];
					L && m.push(L);
				}
				return m;
			}
			var g = (function (c, h, y) {
					function m(te) {
						return typeof te == 'object';
					}
					function L(te) {
						return typeof te == 'function';
					}
					function R() {}
					function j(te, Q) {
						function x() {
							var me = new re();
							return L(me.init) && me.init.apply(me, arguments), me;
						}
						function re() {}
						Q === y && ((Q = te), (te = Object)), (x.Bare = re);
						var ae,
							Ee = (R[c] = te[c]),
							Ne = (re[c] = x[c] = new R());
						return (
							(Ne.constructor = x),
							(x.mixin = function (me) {
								return (re[c] = x[c] = j(x, me)[c]), x;
							}),
							(x.open = function (me) {
								if (
									((ae = {}), L(me) ? (ae = me.call(x, Ne, Ee, x, te)) : m(me) && (ae = me), m(ae))
								)
									for (var Xt in ae) h.call(ae, Xt) && (Ne[Xt] = ae[Xt]);
								return L(Ne.init) || (Ne.init = te), x;
							}),
							x.open(Q)
						);
					}
					return j;
				})('prototype', {}.hasOwnProperty),
				p = {
					ease: [
						'ease',
						function (c, h, y, m) {
							var L = (c /= m) * c,
								R = L * c;
							return h + y * (-2.75 * R * L + 11 * L * L + -15.5 * R + 8 * L + 0.25 * c);
						}
					],
					'ease-in': [
						'ease-in',
						function (c, h, y, m) {
							var L = (c /= m) * c,
								R = L * c;
							return h + y * (-1 * R * L + 3 * L * L + -3 * R + 2 * L);
						}
					],
					'ease-out': [
						'ease-out',
						function (c, h, y, m) {
							var L = (c /= m) * c,
								R = L * c;
							return h + y * (0.3 * R * L + -1.6 * L * L + 2.2 * R + -1.8 * L + 1.9 * c);
						}
					],
					'ease-in-out': [
						'ease-in-out',
						function (c, h, y, m) {
							var L = (c /= m) * c,
								R = L * c;
							return h + y * (2 * R * L + -5 * L * L + 2 * R + 2 * L);
						}
					],
					linear: [
						'linear',
						function (c, h, y, m) {
							return (y * c) / m + h;
						}
					],
					'ease-in-quad': [
						'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
						function (c, h, y, m) {
							return y * (c /= m) * c + h;
						}
					],
					'ease-out-quad': [
						'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
						function (c, h, y, m) {
							return -y * (c /= m) * (c - 2) + h;
						}
					],
					'ease-in-out-quad': [
						'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
						function (c, h, y, m) {
							return (c /= m / 2) < 1 ? (y / 2) * c * c + h : (-y / 2) * (--c * (c - 2) - 1) + h;
						}
					],
					'ease-in-cubic': [
						'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
						function (c, h, y, m) {
							return y * (c /= m) * c * c + h;
						}
					],
					'ease-out-cubic': [
						'cubic-bezier(0.215, 0.610, 0.355, 1)',
						function (c, h, y, m) {
							return y * ((c = c / m - 1) * c * c + 1) + h;
						}
					],
					'ease-in-out-cubic': [
						'cubic-bezier(0.645, 0.045, 0.355, 1)',
						function (c, h, y, m) {
							return (c /= m / 2) < 1
								? (y / 2) * c * c * c + h
								: (y / 2) * ((c -= 2) * c * c + 2) + h;
						}
					],
					'ease-in-quart': [
						'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
						function (c, h, y, m) {
							return y * (c /= m) * c * c * c + h;
						}
					],
					'ease-out-quart': [
						'cubic-bezier(0.165, 0.840, 0.440, 1)',
						function (c, h, y, m) {
							return -y * ((c = c / m - 1) * c * c * c - 1) + h;
						}
					],
					'ease-in-out-quart': [
						'cubic-bezier(0.770, 0, 0.175, 1)',
						function (c, h, y, m) {
							return (c /= m / 2) < 1
								? (y / 2) * c * c * c * c + h
								: (-y / 2) * ((c -= 2) * c * c * c - 2) + h;
						}
					],
					'ease-in-quint': [
						'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
						function (c, h, y, m) {
							return y * (c /= m) * c * c * c * c + h;
						}
					],
					'ease-out-quint': [
						'cubic-bezier(0.230, 1, 0.320, 1)',
						function (c, h, y, m) {
							return y * ((c = c / m - 1) * c * c * c * c + 1) + h;
						}
					],
					'ease-in-out-quint': [
						'cubic-bezier(0.860, 0, 0.070, 1)',
						function (c, h, y, m) {
							return (c /= m / 2) < 1
								? (y / 2) * c * c * c * c * c + h
								: (y / 2) * ((c -= 2) * c * c * c * c + 2) + h;
						}
					],
					'ease-in-sine': [
						'cubic-bezier(0.470, 0, 0.745, 0.715)',
						function (c, h, y, m) {
							return -y * Math.cos((c / m) * (Math.PI / 2)) + y + h;
						}
					],
					'ease-out-sine': [
						'cubic-bezier(0.390, 0.575, 0.565, 1)',
						function (c, h, y, m) {
							return y * Math.sin((c / m) * (Math.PI / 2)) + h;
						}
					],
					'ease-in-out-sine': [
						'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
						function (c, h, y, m) {
							return (-y / 2) * (Math.cos((Math.PI * c) / m) - 1) + h;
						}
					],
					'ease-in-expo': [
						'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
						function (c, h, y, m) {
							return c === 0 ? h : y * Math.pow(2, 10 * (c / m - 1)) + h;
						}
					],
					'ease-out-expo': [
						'cubic-bezier(0.190, 1, 0.220, 1)',
						function (c, h, y, m) {
							return c === m ? h + y : y * (-Math.pow(2, (-10 * c) / m) + 1) + h;
						}
					],
					'ease-in-out-expo': [
						'cubic-bezier(1, 0, 0, 1)',
						function (c, h, y, m) {
							return c === 0
								? h
								: c === m
									? h + y
									: (c /= m / 2) < 1
										? (y / 2) * Math.pow(2, 10 * (c - 1)) + h
										: (y / 2) * (-Math.pow(2, -10 * --c) + 2) + h;
						}
					],
					'ease-in-circ': [
						'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
						function (c, h, y, m) {
							return -y * (Math.sqrt(1 - (c /= m) * c) - 1) + h;
						}
					],
					'ease-out-circ': [
						'cubic-bezier(0.075, 0.820, 0.165, 1)',
						function (c, h, y, m) {
							return y * Math.sqrt(1 - (c = c / m - 1) * c) + h;
						}
					],
					'ease-in-out-circ': [
						'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
						function (c, h, y, m) {
							return (c /= m / 2) < 1
								? (-y / 2) * (Math.sqrt(1 - c * c) - 1) + h
								: (y / 2) * (Math.sqrt(1 - (c -= 2) * c) + 1) + h;
						}
					],
					'ease-in-back': [
						'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
						function (c, h, y, m, L) {
							return L === void 0 && (L = 1.70158), y * (c /= m) * c * ((L + 1) * c - L) + h;
						}
					],
					'ease-out-back': [
						'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
						function (c, h, y, m, L) {
							return (
								L === void 0 && (L = 1.70158), y * ((c = c / m - 1) * c * ((L + 1) * c + L) + 1) + h
							);
						}
					],
					'ease-in-out-back': [
						'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
						function (c, h, y, m, L) {
							return (
								L === void 0 && (L = 1.70158),
								(c /= m / 2) < 1
									? (y / 2) * c * c * (((L *= 1.525) + 1) * c - L) + h
									: (y / 2) * ((c -= 2) * c * (((L *= 1.525) + 1) * c + L) + 2) + h
							);
						}
					]
				},
				E = {
					'ease-in-back': 'cubic-bezier(0.600, 0, 0.735, 0.045)',
					'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
					'ease-in-out-back': 'cubic-bezier(0.680, 0, 0.265, 1)'
				},
				b = document,
				I = window,
				O = 'bkwld-tram',
				_ = /[\-\.0-9]/g,
				S = /[A-Z]/,
				A = 'number',
				D = /^(rgb|#)/,
				F = /(em|cm|mm|in|pt|pc|px)$/,
				C = /(em|cm|mm|in|pt|pc|px|%)$/,
				B = /(deg|rad|turn)$/,
				k = 'unitless',
				X = /(all|none) 0s ease 0s/,
				z = /^(width|height)$/,
				J = ' ',
				M = b.createElement('a'),
				T = ['Webkit', 'Moz', 'O', 'ms'],
				N = ['-webkit-', '-moz-', '-o-', '-ms-'],
				W = function (c) {
					if (c in M.style) return { dom: c, css: c };
					var h,
						y,
						m = '',
						L = c.split('-');
					for (h = 0; h < L.length; h++) m += L[h].charAt(0).toUpperCase() + L[h].slice(1);
					for (h = 0; h < T.length; h++)
						if (((y = T[h] + m), y in M.style)) return { dom: y, css: N[h] + c };
				},
				V = (t.support = {
					bind: Function.prototype.bind,
					transform: W('transform'),
					transition: W('transition'),
					backface: W('backface-visibility'),
					timing: W('transition-timing-function')
				});
			if (V.transition) {
				var ee = V.timing.dom;
				if (((M.style[ee] = p['ease-in-back'][0]), !M.style[ee])) for (var Z in E) p[Z][0] = E[Z];
			}
			var ue = (t.frame = (function () {
					var c =
						I.requestAnimationFrame ||
						I.webkitRequestAnimationFrame ||
						I.mozRequestAnimationFrame ||
						I.oRequestAnimationFrame ||
						I.msRequestAnimationFrame;
					return c && V.bind
						? c.bind(I)
						: function (h) {
								I.setTimeout(h, 16);
							};
				})()),
				Ie = (t.now = (function () {
					var c = I.performance,
						h = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
					return h && V.bind
						? h.bind(c)
						: Date.now ||
								function () {
									return +new Date();
								};
				})()),
				Ce = g(function (c) {
					function h($, se) {
						var pe = v(('' + $).split(J)),
							ce = pe[0];
						se = se || {};
						var Oe = q[ce];
						if (!Oe) return f('Unsupported property: ' + ce);
						if (!se.weak || !this.props[ce]) {
							var xe = Oe[0],
								Se = this.props[ce];
							return Se || (Se = this.props[ce] = new xe.Bare()), Se.init(this.$el, pe, Oe, se), Se;
						}
					}
					function y($, se, pe) {
						if ($) {
							var ce = typeof $;
							if (
								(se || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)),
								ce == 'number' && se)
							)
								return (
									(this.timer = new ie({ duration: $, context: this, complete: R })),
									void (this.active = !0)
								);
							if (ce == 'string' && se) {
								switch ($) {
									case 'hide':
										x.call(this);
										break;
									case 'stop':
										j.call(this);
										break;
									case 'redraw':
										re.call(this);
										break;
									default:
										h.call(this, $, pe && pe[1]);
								}
								return R.call(this);
							}
							if (ce == 'function') return void $.call(this, this);
							if (ce == 'object') {
								var Oe = 0;
								Ne.call(
									this,
									$,
									function (_e, th) {
										_e.span > Oe && (Oe = _e.span), _e.stop(), _e.animate(th);
									},
									function (_e) {
										'wait' in _e && (Oe = u(_e.wait, 0));
									}
								),
									Ee.call(this),
									Oe > 0 &&
										((this.timer = new ie({ duration: Oe, context: this })),
										(this.active = !0),
										se && (this.timer.complete = R));
								var xe = this,
									Se = !1,
									En = {};
								ue(function () {
									Ne.call(xe, $, function (_e) {
										_e.active && ((Se = !0), (En[_e.name] = _e.nextStyle));
									}),
										Se && xe.$el.css(En);
								});
							}
						}
					}
					function m($) {
						($ = u($, 0)),
							this.active
								? this.queue.push({ options: $ })
								: ((this.timer = new ie({ duration: $, context: this, complete: R })),
									(this.active = !0));
					}
					function L($) {
						return this.active
							? (this.queue.push({ options: $, args: arguments }), void (this.timer.complete = R))
							: f('No active transition timer. Use start() or wait() before then().');
					}
					function R() {
						if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
							var $ = this.queue.shift();
							y.call(this, $.options, !0, $.args);
						}
					}
					function j($) {
						this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1);
						var se;
						typeof $ == 'string'
							? ((se = {}), (se[$] = 1))
							: (se = typeof $ == 'object' && $ != null ? $ : this.props),
							Ne.call(this, se, me),
							Ee.call(this);
					}
					function te($) {
						j.call(this, $), Ne.call(this, $, Xt, JE);
					}
					function Q($) {
						typeof $ != 'string' && ($ = 'block'), (this.el.style.display = $);
					}
					function x() {
						j.call(this), (this.el.style.display = 'none');
					}
					function re() {
						this.el.offsetHeight;
					}
					function ae() {
						j.call(this), e.removeData(this.el, O), (this.$el = this.el = null);
					}
					function Ee() {
						var $,
							se,
							pe = [];
						this.upstream && pe.push(this.upstream);
						for ($ in this.props) (se = this.props[$]), se.active && pe.push(se.string);
						(pe = pe.join(',')),
							this.style !== pe && ((this.style = pe), (this.el.style[V.transition.dom] = pe));
					}
					function Ne($, se, pe) {
						var ce,
							Oe,
							xe,
							Se,
							En = se !== me,
							_e = {};
						for (ce in $)
							(xe = $[ce]),
								ce in fe
									? (_e.transform || (_e.transform = {}), (_e.transform[ce] = xe))
									: (S.test(ce) && (ce = n(ce)),
										ce in q ? (_e[ce] = xe) : (Se || (Se = {}), (Se[ce] = xe)));
						for (ce in _e) {
							if (((xe = _e[ce]), (Oe = this.props[ce]), !Oe)) {
								if (!En) continue;
								Oe = h.call(this, ce);
							}
							se.call(this, Oe, xe);
						}
						pe && Se && pe.call(this, Se);
					}
					function me($) {
						$.stop();
					}
					function Xt($, se) {
						$.set(se);
					}
					function JE($) {
						this.$el.css($);
					}
					function Me($, se) {
						c[$] = function () {
							return this.children
								? eh.call(this, se, arguments)
								: (this.el && se.apply(this, arguments), this);
						};
					}
					function eh($, se) {
						var pe,
							ce = this.children.length;
						for (pe = 0; ce > pe; pe++) $.apply(this.children[pe], se);
						return this;
					}
					(c.init = function ($) {
						if (
							((this.$el = e($)),
							(this.el = this.$el[0]),
							(this.props = {}),
							(this.queue = []),
							(this.style = ''),
							(this.active = !1),
							Y.keepInherited && !Y.fallback)
						) {
							var se = P(this.el, 'transition');
							se && !X.test(se) && (this.upstream = se);
						}
						V.backface && Y.hideBackface && d(this.el, V.backface.css, 'hidden');
					}),
						Me('add', h),
						Me('start', y),
						Me('wait', m),
						Me('then', L),
						Me('next', R),
						Me('stop', j),
						Me('set', te),
						Me('show', Q),
						Me('hide', x),
						Me('redraw', re),
						Me('destroy', ae);
				}),
				ve = g(Ce, function (c) {
					function h(y, m) {
						var L = e.data(y, O) || e.data(y, O, new Ce.Bare());
						return L.el || L.init(y), m ? L.start(m) : L;
					}
					c.init = function (y, m) {
						var L = e(y);
						if (!L.length) return this;
						if (L.length === 1) return h(L[0], m);
						var R = [];
						return (
							L.each(function (j, te) {
								R.push(h(te, m));
							}),
							(this.children = R),
							this
						);
					};
				}),
				w = g(function (c) {
					function h() {
						var R = this.get();
						this.update('auto');
						var j = this.get();
						return this.update(R), j;
					}
					function y(R, j, te) {
						return j !== void 0 && (te = j), R in p ? R : te;
					}
					function m(R) {
						var j = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(R);
						return (j ? a(j[1], j[2], j[3]) : R).replace(/#(\w)(\w)(\w)$/, '#$1$1$2$2$3$3');
					}
					var L = { duration: 500, ease: 'ease', delay: 0 };
					(c.init = function (R, j, te, Q) {
						(this.$el = R), (this.el = R[0]);
						var x = j[0];
						te[2] && (x = te[2]),
							H[x] && (x = H[x]),
							(this.name = x),
							(this.type = te[1]),
							(this.duration = u(j[1], this.duration, L.duration)),
							(this.ease = y(j[2], this.ease, L.ease)),
							(this.delay = u(j[3], this.delay, L.delay)),
							(this.span = this.duration + this.delay),
							(this.active = !1),
							(this.nextStyle = null),
							(this.auto = z.test(this.name)),
							(this.unit = Q.unit || this.unit || Y.defaultUnit),
							(this.angle = Q.angle || this.angle || Y.defaultAngle),
							Y.fallback || Q.fallback
								? (this.animate = this.fallback)
								: ((this.animate = this.transition),
									(this.string =
										this.name +
										J +
										this.duration +
										'ms' +
										(this.ease != 'ease' ? J + p[this.ease][0] : '') +
										(this.delay ? J + this.delay + 'ms' : '')));
					}),
						(c.set = function (R) {
							(R = this.convert(R, this.type)), this.update(R), this.redraw();
						}),
						(c.transition = function (R) {
							(this.active = !0),
								(R = this.convert(R, this.type)),
								this.auto &&
									(this.el.style[this.name] == 'auto' && (this.update(this.get()), this.redraw()),
									R == 'auto' && (R = h.call(this))),
								(this.nextStyle = R);
						}),
						(c.fallback = function (R) {
							var j = this.el.style[this.name] || this.convert(this.get(), this.type);
							(R = this.convert(R, this.type)),
								this.auto &&
									(j == 'auto' && (j = this.convert(this.get(), this.type)),
									R == 'auto' && (R = h.call(this))),
								(this.tween = new ne({
									from: j,
									to: R,
									duration: this.duration,
									delay: this.delay,
									ease: this.ease,
									update: this.update,
									context: this
								}));
						}),
						(c.get = function () {
							return P(this.el, this.name);
						}),
						(c.update = function (R) {
							d(this.el, this.name, R);
						}),
						(c.stop = function () {
							(this.active || this.nextStyle) &&
								((this.active = !1), (this.nextStyle = null), d(this.el, this.name, this.get()));
							var R = this.tween;
							R && R.context && R.destroy();
						}),
						(c.convert = function (R, j) {
							if (R == 'auto' && this.auto) return R;
							var te,
								Q = typeof R == 'number',
								x = typeof R == 'string';
							switch (j) {
								case A:
									if (Q) return R;
									if (x && R.replace(_, '') === '') return +R;
									te = 'number(unitless)';
									break;
								case D:
									if (x) {
										if (R === '' && this.original) return this.original;
										if (j.test(R)) return R.charAt(0) == '#' && R.length == 7 ? R : m(R);
									}
									te = 'hex or rgb string';
									break;
								case F:
									if (Q) return R + this.unit;
									if (x && j.test(R)) return R;
									te = 'number(px) or string(unit)';
									break;
								case C:
									if (Q) return R + this.unit;
									if (x && j.test(R)) return R;
									te = 'number(px) or string(unit or %)';
									break;
								case B:
									if (Q) return R + this.angle;
									if (x && j.test(R)) return R;
									te = 'number(deg) or string(angle)';
									break;
								case k:
									if (Q || (x && C.test(R))) return R;
									te = 'number(unitless) or string(unit or %)';
							}
							return o(te, R), R;
						}),
						(c.redraw = function () {
							this.el.offsetHeight;
						});
				}),
				U = g(w, function (c, h) {
					c.init = function () {
						h.init.apply(this, arguments),
							this.original || (this.original = this.convert(this.get(), D));
					};
				}),
				K = g(w, function (c, h) {
					(c.init = function () {
						h.init.apply(this, arguments), (this.animate = this.fallback);
					}),
						(c.get = function () {
							return this.$el[this.name]();
						}),
						(c.update = function (y) {
							this.$el[this.name](y);
						});
				}),
				G = g(w, function (c, h) {
					function y(m, L) {
						var R, j, te, Q, x;
						for (R in m)
							(Q = fe[R]),
								(te = Q[0]),
								(j = Q[1] || R),
								(x = this.convert(m[R], te)),
								L.call(this, j, x, te);
					}
					(c.init = function () {
						h.init.apply(this, arguments),
							this.current ||
								((this.current = {}),
								fe.perspective &&
									Y.perspective &&
									((this.current.perspective = Y.perspective),
									d(this.el, this.name, this.style(this.current)),
									this.redraw()));
					}),
						(c.set = function (m) {
							y.call(this, m, function (L, R) {
								this.current[L] = R;
							}),
								d(this.el, this.name, this.style(this.current)),
								this.redraw();
						}),
						(c.transition = function (m) {
							var L = this.values(m);
							this.tween = new oe({
								current: this.current,
								values: L,
								duration: this.duration,
								delay: this.delay,
								ease: this.ease
							});
							var R,
								j = {};
							for (R in this.current) j[R] = R in L ? L[R] : this.current[R];
							(this.active = !0), (this.nextStyle = this.style(j));
						}),
						(c.fallback = function (m) {
							var L = this.values(m);
							this.tween = new oe({
								current: this.current,
								values: L,
								duration: this.duration,
								delay: this.delay,
								ease: this.ease,
								update: this.update,
								context: this
							});
						}),
						(c.update = function () {
							d(this.el, this.name, this.style(this.current));
						}),
						(c.style = function (m) {
							var L,
								R = '';
							for (L in m) R += L + '(' + m[L] + ') ';
							return R;
						}),
						(c.values = function (m) {
							var L,
								R = {};
							return (
								y.call(this, m, function (j, te, Q) {
									(R[j] = te),
										this.current[j] === void 0 &&
											((L = 0),
											~j.indexOf('scale') && (L = 1),
											(this.current[j] = this.convert(L, Q)));
								}),
								R
							);
						});
				}),
				ne = g(function (c) {
					function h(x) {
						te.push(x) === 1 && ue(y);
					}
					function y() {
						var x,
							re,
							ae,
							Ee = te.length;
						if (Ee) for (ue(y), re = Ie(), x = Ee; x--; ) (ae = te[x]), ae && ae.render(re);
					}
					function m(x) {
						var re,
							ae = e.inArray(x, te);
						ae >= 0 &&
							((re = te.slice(ae + 1)), (te.length = ae), re.length && (te = te.concat(re)));
					}
					function L(x) {
						return Math.round(x * Q) / Q;
					}
					function R(x, re, ae) {
						return a(
							x[0] + ae * (re[0] - x[0]),
							x[1] + ae * (re[1] - x[1]),
							x[2] + ae * (re[2] - x[2])
						);
					}
					var j = { ease: p.ease[1], from: 0, to: 1 };
					(c.init = function (x) {
						(this.duration = x.duration || 0), (this.delay = x.delay || 0);
						var re = x.ease || j.ease;
						p[re] && (re = p[re][1]),
							typeof re != 'function' && (re = j.ease),
							(this.ease = re),
							(this.update = x.update || i),
							(this.complete = x.complete || i),
							(this.context = x.context || this),
							(this.name = x.name);
						var ae = x.from,
							Ee = x.to;
						ae === void 0 && (ae = j.from),
							Ee === void 0 && (Ee = j.to),
							(this.unit = x.unit || ''),
							typeof ae == 'number' && typeof Ee == 'number'
								? ((this.begin = ae), (this.change = Ee - ae))
								: this.format(Ee, ae),
							(this.value = this.begin + this.unit),
							(this.start = Ie()),
							x.autoplay !== !1 && this.play();
					}),
						(c.play = function () {
							this.active || (this.start || (this.start = Ie()), (this.active = !0), h(this));
						}),
						(c.stop = function () {
							this.active && ((this.active = !1), m(this));
						}),
						(c.render = function (x) {
							var re,
								ae = x - this.start;
							if (this.delay) {
								if (ae <= this.delay) return;
								ae -= this.delay;
							}
							if (ae < this.duration) {
								var Ee = this.ease(ae, 0, 1, this.duration);
								return (
									(re = this.startRGB
										? R(this.startRGB, this.endRGB, Ee)
										: L(this.begin + Ee * this.change)),
									(this.value = re + this.unit),
									void this.update.call(this.context, this.value)
								);
							}
							(re = this.endHex || this.begin + this.change),
								(this.value = re + this.unit),
								this.update.call(this.context, this.value),
								this.complete.call(this.context),
								this.destroy();
						}),
						(c.format = function (x, re) {
							if (((re += ''), (x += ''), x.charAt(0) == '#'))
								return (
									(this.startRGB = r(re)),
									(this.endRGB = r(x)),
									(this.endHex = x),
									(this.begin = 0),
									void (this.change = 1)
								);
							if (!this.unit) {
								var ae = re.replace(_, ''),
									Ee = x.replace(_, '');
								ae !== Ee && s('tween', re, x), (this.unit = ae);
							}
							(re = parseFloat(re)),
								(x = parseFloat(x)),
								(this.begin = this.value = re),
								(this.change = x - re);
						}),
						(c.destroy = function () {
							this.stop(), (this.context = null), (this.ease = this.update = this.complete = i);
						});
					var te = [],
						Q = 1e3;
				}),
				ie = g(ne, function (c) {
					(c.init = function (h) {
						(this.duration = h.duration || 0),
							(this.complete = h.complete || i),
							(this.context = h.context),
							this.play();
					}),
						(c.render = function (h) {
							var y = h - this.start;
							y < this.duration || (this.complete.call(this.context), this.destroy());
						});
				}),
				oe = g(ne, function (c, h) {
					(c.init = function (y) {
						(this.context = y.context),
							(this.update = y.update),
							(this.tweens = []),
							(this.current = y.current);
						var m, L;
						for (m in y.values)
							(L = y.values[m]),
								this.current[m] !== L &&
									this.tweens.push(
										new ne({
											name: m,
											from: this.current[m],
											to: L,
											duration: y.duration,
											delay: y.delay,
											ease: y.ease,
											autoplay: !1
										})
									);
						this.play();
					}),
						(c.render = function (y) {
							var m,
								L,
								R = this.tweens.length,
								j = !1;
							for (m = R; m--; )
								(L = this.tweens[m]),
									L.context && (L.render(y), (this.current[L.name] = L.value), (j = !0));
							return j ? void (this.update && this.update.call(this.context)) : this.destroy();
						}),
						(c.destroy = function () {
							if ((h.destroy.call(this), this.tweens)) {
								var y,
									m = this.tweens.length;
								for (y = m; y--; ) this.tweens[y].destroy();
								(this.tweens = null), (this.current = null);
							}
						});
				}),
				Y = (t.config = {
					debug: !1,
					defaultUnit: 'px',
					defaultAngle: 'deg',
					keepInherited: !1,
					hideBackface: !1,
					perspective: '',
					fallback: !V.transition,
					agentTests: []
				});
			(t.fallback = function (c) {
				if (!V.transition) return (Y.fallback = !0);
				Y.agentTests.push('(' + c + ')');
				var h = new RegExp(Y.agentTests.join('|'), 'i');
				Y.fallback = h.test(navigator.userAgent);
			}),
				t.fallback('6.0.[2-5] Safari'),
				(t.tween = function (c) {
					return new ne(c);
				}),
				(t.delay = function (c, h, y) {
					return new ie({ complete: h, duration: c, context: y });
				}),
				(e.fn.tram = function (c) {
					return t.call(null, this, c);
				});
			var d = e.style,
				P = e.css,
				H = { transform: V.transform && V.transform.css },
				q = {
					color: [U, D],
					background: [U, D, 'background-color'],
					'outline-color': [U, D],
					'border-color': [U, D],
					'border-top-color': [U, D],
					'border-right-color': [U, D],
					'border-bottom-color': [U, D],
					'border-left-color': [U, D],
					'border-width': [w, F],
					'border-top-width': [w, F],
					'border-right-width': [w, F],
					'border-bottom-width': [w, F],
					'border-left-width': [w, F],
					'border-spacing': [w, F],
					'letter-spacing': [w, F],
					margin: [w, F],
					'margin-top': [w, F],
					'margin-right': [w, F],
					'margin-bottom': [w, F],
					'margin-left': [w, F],
					padding: [w, F],
					'padding-top': [w, F],
					'padding-right': [w, F],
					'padding-bottom': [w, F],
					'padding-left': [w, F],
					'outline-width': [w, F],
					opacity: [w, A],
					top: [w, C],
					right: [w, C],
					bottom: [w, C],
					left: [w, C],
					'font-size': [w, C],
					'text-indent': [w, C],
					'word-spacing': [w, C],
					width: [w, C],
					'min-width': [w, C],
					'max-width': [w, C],
					height: [w, C],
					'min-height': [w, C],
					'max-height': [w, C],
					'line-height': [w, k],
					'scroll-top': [K, A, 'scrollTop'],
					'scroll-left': [K, A, 'scrollLeft']
				},
				fe = {};
			V.transform &&
				((q.transform = [G]),
				(fe = {
					x: [C, 'translateX'],
					y: [C, 'translateY'],
					rotate: [B],
					rotateX: [B],
					rotateY: [B],
					scale: [A],
					scaleX: [A],
					scaleY: [A],
					skew: [B],
					skewX: [B],
					skewY: [B]
				})),
				V.transform &&
					V.backface &&
					((fe.z = [C, 'translateZ']),
					(fe.rotateZ = [B]),
					(fe.scaleZ = [A]),
					(fe.perspective = [F]));
			var Je = /ms/,
				Ue = /s|\./;
			return (e.tram = t);
		})(window.jQuery);
	});
	var Ka = l((TD, za) => {
		'use strict';
		var nh = window.$,
			rh = mr() && nh.tram;
		za.exports = (function () {
			var e = {};
			e.VERSION = '1.6.0-Webflow';
			var t = {},
				n = Array.prototype,
				r = Object.prototype,
				a = Function.prototype,
				i = n.push,
				o = n.slice,
				s = n.concat,
				u = r.toString,
				f = r.hasOwnProperty,
				v = n.forEach,
				g = n.map,
				p = n.reduce,
				E = n.reduceRight,
				b = n.filter,
				I = n.every,
				O = n.some,
				_ = n.indexOf,
				S = n.lastIndexOf,
				A = Array.isArray,
				D = Object.keys,
				F = a.bind,
				C =
					(e.each =
					e.forEach =
						function (T, N, W) {
							if (T == null) return T;
							if (v && T.forEach === v) T.forEach(N, W);
							else if (T.length === +T.length) {
								for (var V = 0, ee = T.length; V < ee; V++) if (N.call(W, T[V], V, T) === t) return;
							} else
								for (var Z = e.keys(T), V = 0, ee = Z.length; V < ee; V++)
									if (N.call(W, T[Z[V]], Z[V], T) === t) return;
							return T;
						});
			(e.map = e.collect =
				function (T, N, W) {
					var V = [];
					return T == null
						? V
						: g && T.map === g
							? T.map(N, W)
							: (C(T, function (ee, Z, ue) {
									V.push(N.call(W, ee, Z, ue));
								}),
								V);
				}),
				(e.find = e.detect =
					function (T, N, W) {
						var V;
						return (
							B(T, function (ee, Z, ue) {
								if (N.call(W, ee, Z, ue)) return (V = ee), !0;
							}),
							V
						);
					}),
				(e.filter = e.select =
					function (T, N, W) {
						var V = [];
						return T == null
							? V
							: b && T.filter === b
								? T.filter(N, W)
								: (C(T, function (ee, Z, ue) {
										N.call(W, ee, Z, ue) && V.push(ee);
									}),
									V);
					});
			var B =
				(e.some =
				e.any =
					function (T, N, W) {
						N || (N = e.identity);
						var V = !1;
						return T == null
							? V
							: O && T.some === O
								? T.some(N, W)
								: (C(T, function (ee, Z, ue) {
										if (V || (V = N.call(W, ee, Z, ue))) return t;
									}),
									!!V);
					});
			(e.contains = e.include =
				function (T, N) {
					return T == null
						? !1
						: _ && T.indexOf === _
							? T.indexOf(N) != -1
							: B(T, function (W) {
									return W === N;
								});
				}),
				(e.delay = function (T, N) {
					var W = o.call(arguments, 2);
					return setTimeout(function () {
						return T.apply(null, W);
					}, N);
				}),
				(e.defer = function (T) {
					return e.delay.apply(e, [T, 1].concat(o.call(arguments, 1)));
				}),
				(e.throttle = function (T) {
					var N, W, V;
					return function () {
						N ||
							((N = !0),
							(W = arguments),
							(V = this),
							rh.frame(function () {
								(N = !1), T.apply(V, W);
							}));
					};
				}),
				(e.debounce = function (T, N, W) {
					var V,
						ee,
						Z,
						ue,
						Ie,
						Ce = function () {
							var ve = e.now() - ue;
							ve < N
								? (V = setTimeout(Ce, N - ve))
								: ((V = null), W || ((Ie = T.apply(Z, ee)), (Z = ee = null)));
						};
					return function () {
						(Z = this), (ee = arguments), (ue = e.now());
						var ve = W && !V;
						return V || (V = setTimeout(Ce, N)), ve && ((Ie = T.apply(Z, ee)), (Z = ee = null)), Ie;
					};
				}),
				(e.defaults = function (T) {
					if (!e.isObject(T)) return T;
					for (var N = 1, W = arguments.length; N < W; N++) {
						var V = arguments[N];
						for (var ee in V) T[ee] === void 0 && (T[ee] = V[ee]);
					}
					return T;
				}),
				(e.keys = function (T) {
					if (!e.isObject(T)) return [];
					if (D) return D(T);
					var N = [];
					for (var W in T) e.has(T, W) && N.push(W);
					return N;
				}),
				(e.has = function (T, N) {
					return f.call(T, N);
				}),
				(e.isObject = function (T) {
					return T === Object(T);
				}),
				(e.now =
					Date.now ||
					function () {
						return new Date().getTime();
					}),
				(e.templateSettings = {
					evaluate: /<%([\s\S]+?)%>/g,
					interpolate: /<%=([\s\S]+?)%>/g,
					escape: /<%-([\s\S]+?)%>/g
				});
			var k = /(.)^/,
				X = { "'": "'", '\\': '\\', '\r': 'r', '\n': 'n', '\u2028': 'u2028', '\u2029': 'u2029' },
				z = /\\|'|\r|\n|\u2028|\u2029/g,
				J = function (T) {
					return '\\' + X[T];
				},
				M = /^\s*(\w|\$)+\s*$/;
			return (
				(e.template = function (T, N, W) {
					!N && W && (N = W), (N = e.defaults({}, N, e.templateSettings));
					var V = RegExp(
							[(N.escape || k).source, (N.interpolate || k).source, (N.evaluate || k).source].join(
								'|'
							) + '|$',
							'g'
						),
						ee = 0,
						Z = "__p+='";
					T.replace(V, function (ve, w, U, K, G) {
						return (
							(Z += T.slice(ee, G).replace(z, J)),
							(ee = G + ve.length),
							w
								? (Z +=
										`'+
((__t=(` +
										w +
										`))==null?'':_.escape(__t))+
'`)
								: U
									? (Z +=
											`'+
((__t=(` +
											U +
											`))==null?'':__t)+
'`)
									: K &&
										(Z +=
											`';
` +
											K +
											`
__p+='`),
							ve
						);
					}),
						(Z += `';
`);
					var ue = N.variable;
					if (ue) {
						if (!M.test(ue)) throw new Error('variable is not a bare identifier: ' + ue);
					} else
						(Z =
							`with(obj||{}){
` +
							Z +
							`}
`),
							(ue = 'obj');
					Z =
						`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
						Z +
						`return __p;
`;
					var Ie;
					try {
						Ie = new Function(N.variable || 'obj', '_', Z);
					} catch (ve) {
						throw ((ve.source = Z), ve);
					}
					var Ce = function (ve) {
						return Ie.call(this, ve, e);
					};
					return (
						(Ce.source =
							'function(' +
							ue +
							`){
` +
							Z +
							'}'),
						Ce
					);
				}),
				e
			);
		})();
	});
	var ke = l((bD, no) => {
		'use strict';
		var le = {},
			_t = {},
			yt = [],
			Ar = window.Webflow || [],
			et = window.jQuery,
			qe = et(window),
			ih = et(document),
			Be = et.isFunction,
			Fe = (le._ = Ka()),
			Qa = (le.tram = mr() && et.tram),
			vn = !1,
			Sr = !1;
		Qa.config.hideBackface = !1;
		Qa.config.keepInherited = !0;
		le.define = function (e, t, n) {
			_t[e] && Za(_t[e]);
			var r = (_t[e] = t(et, Fe, n) || {});
			return $a(r), r;
		};
		le.require = function (e) {
			return _t[e];
		};
		function $a(e) {
			le.env() &&
				(Be(e.design) && qe.on('__wf_design', e.design),
				Be(e.preview) && qe.on('__wf_preview', e.preview)),
				Be(e.destroy) && qe.on('__wf_destroy', e.destroy),
				e.ready && Be(e.ready) && ah(e);
		}
		function ah(e) {
			if (vn) {
				e.ready();
				return;
			}
			Fe.contains(yt, e.ready) || yt.push(e.ready);
		}
		function Za(e) {
			Be(e.design) && qe.off('__wf_design', e.design),
				Be(e.preview) && qe.off('__wf_preview', e.preview),
				Be(e.destroy) && qe.off('__wf_destroy', e.destroy),
				e.ready && Be(e.ready) && oh(e);
		}
		function oh(e) {
			yt = Fe.filter(yt, function (t) {
				return t !== e.ready;
			});
		}
		le.push = function (e) {
			if (vn) {
				Be(e) && e();
				return;
			}
			Ar.push(e);
		};
		le.env = function (e) {
			var t = window.__wf_design,
				n = typeof t < 'u';
			if (!e) return n;
			if (e === 'design') return n && t;
			if (e === 'preview') return n && !t;
			if (e === 'slug') return n && window.__wf_slug;
			if (e === 'editor') return window.WebflowEditor;
			if (e === 'test') return window.__wf_test;
			if (e === 'frame') return window !== window.top;
		};
		var hn = navigator.userAgent.toLowerCase(),
			Ja = (le.env.touch =
				'ontouchstart' in window ||
				(window.DocumentTouch && document instanceof window.DocumentTouch)),
			sh = (le.env.chrome =
				/chrome/.test(hn) &&
				/Google/.test(navigator.vendor) &&
				parseInt(hn.match(/chrome\/(\d+)\./)[1], 10)),
			uh = (le.env.ios = /(ipod|iphone|ipad)/.test(hn));
		le.env.safari = /safari/.test(hn) && !sh && !uh;
		var Or;
		Ja &&
			ih.on('touchstart mousedown', function (e) {
				Or = e.target;
			});
		le.validClick = Ja
			? function (e) {
					return e === Or || et.contains(e, Or);
				}
			: function () {
					return !0;
				};
		var eo = 'resize.webflow orientationchange.webflow load.webflow',
			ch = 'scroll.webflow ' + eo;
		le.resize = Rr(qe, eo);
		le.scroll = Rr(qe, ch);
		le.redraw = Rr();
		function Rr(e, t) {
			var n = [],
				r = {};
			return (
				(r.up = Fe.throttle(function (a) {
					Fe.each(n, function (i) {
						i(a);
					});
				})),
				e && t && e.on(t, r.up),
				(r.on = function (a) {
					typeof a == 'function' && (Fe.contains(n, a) || n.push(a));
				}),
				(r.off = function (a) {
					if (!arguments.length) {
						n = [];
						return;
					}
					n = Fe.filter(n, function (i) {
						return i !== a;
					});
				}),
				r
			);
		}
		le.location = function (e) {
			window.location = e;
		};
		le.env() && (le.location = function () {});
		le.ready = function () {
			(vn = !0), Sr ? lh() : Fe.each(yt, ja), Fe.each(Ar, ja), le.resize.up();
		};
		function ja(e) {
			Be(e) && e();
		}
		function lh() {
			(Sr = !1), Fe.each(_t, $a);
		}
		var ut;
		le.load = function (e) {
			ut.then(e);
		};
		function to() {
			ut && (ut.reject(), qe.off('load', ut.resolve)),
				(ut = new et.Deferred()),
				qe.on('load', ut.resolve);
		}
		le.destroy = function (e) {
			(e = e || {}),
				(Sr = !0),
				qe.triggerHandler('__wf_destroy'),
				e.domready != null && (vn = e.domready),
				Fe.each(_t, Za),
				le.resize.off(),
				le.scroll.off(),
				le.redraw.off(),
				(yt = []),
				(Ar = []),
				ut.state() === 'pending' && to();
		};
		et(le.ready);
		to();
		no.exports = window.Webflow = le;
	});
	var ao = l((mD, io) => {
		'use strict';
		var ro = ke();
		ro.define(
			'brand',
			(io.exports = function (e) {
				var t = {},
					n = document,
					r = e('html'),
					a = e('body'),
					i = '.w-webflow-badge',
					o = window.location,
					s = /PhantomJS/i.test(navigator.userAgent),
					u = 'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange',
					f;
				t.ready = function () {
					var E = r.attr('data-wf-status'),
						b = r.attr('data-wf-domain') || '';
					/\.webflow\.io$/i.test(b) && o.hostname !== b && (E = !0),
						E && !s && ((f = f || g()), p(), setTimeout(p, 500), e(n).off(u, v).on(u, v));
				};
				function v() {
					var E =
						n.fullScreen ||
						n.mozFullScreen ||
						n.webkitIsFullScreen ||
						n.msFullscreenElement ||
						!!n.webkitFullscreenElement;
					e(f).attr('style', E ? 'display: none !important;' : '');
				}
				function g() {
					var E = e('<a class="w-webflow-badge"></a>').attr(
							'href',
							'https://webflow.com?utm_campaign=brandjs'
						),
						b = e('<img>')
							.attr(
								'src',
								'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg'
							)
							.attr('alt', '')
							.css({ marginRight: '4px', width: '26px' }),
						I = e('<img>')
							.attr(
								'src',
								'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg'
							)
							.attr('alt', 'Made in Webflow');
					return E.append(b, I), E[0];
				}
				function p() {
					var E = a.children(i),
						b = E.length && E.get(0) === f,
						I = ro.env('editor');
					if (b) {
						I && E.remove();
						return;
					}
					E.length && E.remove(), I || a.append(f);
				}
				return t;
			})
		);
	});
	var so = l((OD, oo) => {
		'use strict';
		var It = ke();
		It.define(
			'links',
			(oo.exports = function (e, t) {
				var n = {},
					r = e(window),
					a,
					i = It.env(),
					o = window.location,
					s = document.createElement('a'),
					u = 'w--current',
					f = /index\.(html|php)$/,
					v = /\/$/,
					g,
					p;
				n.ready = n.design = n.preview = E;
				function E() {
					(a = i && It.env('design')),
						(p = It.env('slug') || o.pathname || ''),
						It.scroll.off(I),
						(g = []);
					for (var _ = document.links, S = 0; S < _.length; ++S) b(_[S]);
					g.length && (It.scroll.on(I), I());
				}
				function b(_) {
					if (!_.getAttribute('hreflang')) {
						var S = (a && _.getAttribute('href-disabled')) || _.getAttribute('href');
						if (((s.href = S), !(S.indexOf(':') >= 0))) {
							var A = e(_);
							if (s.hash.length > 1 && s.host + s.pathname === o.host + o.pathname) {
								if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
								var D = e(s.hash);
								D.length && g.push({ link: A, sec: D, active: !1 });
								return;
							}
							if (!(S === '#' || S === '')) {
								var F = s.href === o.href || S === p || (f.test(S) && v.test(p));
								O(A, u, F);
							}
						}
					}
				}
				function I() {
					var _ = r.scrollTop(),
						S = r.height();
					t.each(g, function (A) {
						if (!A.link.attr('hreflang')) {
							var D = A.link,
								F = A.sec,
								C = F.offset().top,
								B = F.outerHeight(),
								k = S * 0.5,
								X = F.is(':visible') && C + B - k >= _ && C + k <= _ + S;
							A.active !== X && ((A.active = X), O(D, u, X));
						}
					});
				}
				function O(_, S, A) {
					var D = _.hasClass(S);
					(A && D) || (!A && !D) || (A ? _.addClass(S) : _.removeClass(S));
				}
				return n;
			})
		);
	});
	var co = l((AD, uo) => {
		'use strict';
		var _n = ke();
		_n.define(
			'scroll',
			(uo.exports = function (e) {
				var t = { WF_CLICK_EMPTY: 'click.wf-empty-link', WF_CLICK_SCROLL: 'click.wf-scroll' },
					n = window.location,
					r = b() ? null : window.history,
					a = e(window),
					i = e(document),
					o = e(document.body),
					s =
						window.requestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						function (M) {
							window.setTimeout(M, 15);
						},
					u = _n.env('editor') ? '.w-editor-body' : 'body',
					f = 'header, ' + u + ' > .header, ' + u + ' > .w-nav:not([data-no-scroll])',
					v = 'a[href="#"]',
					g = 'a[href*="#"]:not(.w-tab-link):not(' + v + ')',
					p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
					E = document.createElement('style');
				E.appendChild(document.createTextNode(p));
				function b() {
					try {
						return !!window.frameElement;
					} catch {
						return !0;
					}
				}
				var I = /^#[a-zA-Z0-9][\w:.-]*$/;
				function O(M) {
					return I.test(M.hash) && M.host + M.pathname === n.host + n.pathname;
				}
				let _ =
					typeof window.matchMedia == 'function' &&
					window.matchMedia('(prefers-reduced-motion: reduce)');
				function S() {
					return document.body.getAttribute('data-wf-scroll-motion') === 'none' || _.matches;
				}
				function A(M, T) {
					var N;
					switch (T) {
						case 'add':
							(N = M.attr('tabindex')),
								N ? M.attr('data-wf-tabindex-swap', N) : M.attr('tabindex', '-1');
							break;
						case 'remove':
							(N = M.attr('data-wf-tabindex-swap')),
								N
									? (M.attr('tabindex', N), M.removeAttr('data-wf-tabindex-swap'))
									: M.removeAttr('tabindex');
							break;
					}
					M.toggleClass('wf-force-outline-none', T === 'add');
				}
				function D(M) {
					var T = M.currentTarget;
					if (
						!(_n.env('design') || (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className)))
					) {
						var N = O(T) ? T.hash : '';
						if (N !== '') {
							var W = e(N);
							W.length &&
								(M && (M.preventDefault(), M.stopPropagation()),
								F(N, M),
								window.setTimeout(
									function () {
										C(W, function () {
											A(W, 'add'), W.get(0).focus({ preventScroll: !0 }), A(W, 'remove');
										});
									},
									M ? 0 : 300
								));
						}
					}
				}
				function F(M) {
					if (n.hash !== M && r && r.pushState && !(_n.env.chrome && n.protocol === 'file:')) {
						var T = r.state && r.state.hash;
						T !== M && r.pushState({ hash: M }, '', M);
					}
				}
				function C(M, T) {
					var N = a.scrollTop(),
						W = B(M);
					if (N !== W) {
						var V = k(M, N, W),
							ee = Date.now(),
							Z = function () {
								var ue = Date.now() - ee;
								window.scroll(0, X(N, W, ue, V)), ue <= V ? s(Z) : typeof T == 'function' && T();
							};
						s(Z);
					}
				}
				function B(M) {
					var T = e(f),
						N = T.css('position') === 'fixed' ? T.outerHeight() : 0,
						W = M.offset().top - N;
					if (M.data('scroll') === 'mid') {
						var V = a.height() - N,
							ee = M.outerHeight();
						ee < V && (W -= Math.round((V - ee) / 2));
					}
					return W;
				}
				function k(M, T, N) {
					if (S()) return 0;
					var W = 1;
					return (
						o.add(M).each(function (V, ee) {
							var Z = parseFloat(ee.getAttribute('data-scroll-time'));
							!isNaN(Z) && Z >= 0 && (W = Z);
						}),
						(472.143 * Math.log(Math.abs(T - N) + 125) - 2e3) * W
					);
				}
				function X(M, T, N, W) {
					return N > W ? T : M + (T - M) * z(N / W);
				}
				function z(M) {
					return M < 0.5 ? 4 * M * M * M : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
				}
				function J() {
					var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: T } = t;
					i.on(T, g, D),
						i.on(M, v, function (N) {
							N.preventDefault();
						}),
						document.head.insertBefore(E, document.head.firstChild);
				}
				return { ready: J };
			})
		);
	});
	var po = l((SD, fo) => {
		'use strict';
		var lo = ke();
		lo.define(
			'focus',
			(fo.exports = function () {
				var e = [],
					t = !1;
				function n(o) {
					t &&
						(o.preventDefault(), o.stopPropagation(), o.stopImmediatePropagation(), e.unshift(o));
				}
				function r(o) {
					var s = o.target,
						u = s.tagName;
					return (
						(/^a$/i.test(u) && s.href != null) ||
						(/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
						(/^input$/i.test(u) &&
							/^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
							!s.disabled) ||
						(!/^(button|input|textarea|select|a)$/i.test(u) &&
							!Number.isNaN(Number.parseFloat(s.tabIndex))) ||
						/^audio$/i.test(u) ||
						(/^video$/i.test(u) && s.controls === !0)
					);
				}
				function a(o) {
					r(o) &&
						((t = !0),
						setTimeout(() => {
							for (t = !1, o.target.focus(); e.length > 0; ) {
								var s = e.pop();
								s.target.dispatchEvent(new MouseEvent(s.type, s));
							}
						}, 0));
				}
				function i() {
					typeof document < 'u' &&
						document.body.hasAttribute('data-wf-focus-within') &&
						lo.env.safari &&
						(document.addEventListener('mousedown', a, !0),
						document.addEventListener('mouseup', n, !0),
						document.addEventListener('click', n, !0));
				}
				return { ready: i };
			})
		);
	});
	var Eo = l((RD, go) => {
		'use strict';
		var fh = ke();
		fh.define(
			'focus-visible',
			(go.exports = function () {
				function e(n) {
					var r = !0,
						a = !1,
						i = null,
						o = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							'datetime-local': !0
						};
					function s(A) {
						return !!(
							A &&
							A !== document &&
							A.nodeName !== 'HTML' &&
							A.nodeName !== 'BODY' &&
							'classList' in A &&
							'contains' in A.classList
						);
					}
					function u(A) {
						var D = A.type,
							F = A.tagName;
						return !!(
							(F === 'INPUT' && o[D] && !A.readOnly) ||
							(F === 'TEXTAREA' && !A.readOnly) ||
							A.isContentEditable
						);
					}
					function f(A) {
						A.getAttribute('data-wf-focus-visible') ||
							A.setAttribute('data-wf-focus-visible', 'true');
					}
					function v(A) {
						A.getAttribute('data-wf-focus-visible') && A.removeAttribute('data-wf-focus-visible');
					}
					function g(A) {
						A.metaKey ||
							A.altKey ||
							A.ctrlKey ||
							(s(n.activeElement) && f(n.activeElement), (r = !0));
					}
					function p() {
						r = !1;
					}
					function E(A) {
						s(A.target) && (r || u(A.target)) && f(A.target);
					}
					function b(A) {
						s(A.target) &&
							A.target.hasAttribute('data-wf-focus-visible') &&
							((a = !0),
							window.clearTimeout(i),
							(i = window.setTimeout(function () {
								a = !1;
							}, 100)),
							v(A.target));
					}
					function I() {
						document.visibilityState === 'hidden' && (a && (r = !0), O());
					}
					function O() {
						document.addEventListener('mousemove', S),
							document.addEventListener('mousedown', S),
							document.addEventListener('mouseup', S),
							document.addEventListener('pointermove', S),
							document.addEventListener('pointerdown', S),
							document.addEventListener('pointerup', S),
							document.addEventListener('touchmove', S),
							document.addEventListener('touchstart', S),
							document.addEventListener('touchend', S);
					}
					function _() {
						document.removeEventListener('mousemove', S),
							document.removeEventListener('mousedown', S),
							document.removeEventListener('mouseup', S),
							document.removeEventListener('pointermove', S),
							document.removeEventListener('pointerdown', S),
							document.removeEventListener('pointerup', S),
							document.removeEventListener('touchmove', S),
							document.removeEventListener('touchstart', S),
							document.removeEventListener('touchend', S);
					}
					function S(A) {
						(A.target.nodeName && A.target.nodeName.toLowerCase() === 'html') || ((r = !1), _());
					}
					document.addEventListener('keydown', g, !0),
						document.addEventListener('mousedown', p, !0),
						document.addEventListener('pointerdown', p, !0),
						document.addEventListener('touchstart', p, !0),
						document.addEventListener('visibilitychange', I, !0),
						O(),
						n.addEventListener('focus', E, !0),
						n.addEventListener('blur', b, !0);
				}
				function t() {
					if (typeof document < 'u')
						try {
							document.querySelector(':focus-visible');
						} catch {
							e(document);
						}
				}
				return { ready: t };
			})
		);
	});
	var vo = l((wD, ho) => {
		'use strict';
		var dh = ke();
		dh.define(
			'touch',
			(ho.exports = function (e) {
				var t = {},
					n = window.getSelection;
				(e.event.special.tap = { bindType: 'click', delegateType: 'click' }),
					(t.init = function (i) {
						return (i = typeof i == 'string' ? e(i).get(0) : i), i ? new r(i) : null;
					});
				function r(i) {
					var o = !1,
						s = !1,
						u = Math.min(Math.round(window.innerWidth * 0.04), 40),
						f,
						v;
					i.addEventListener('touchstart', g, !1),
						i.addEventListener('touchmove', p, !1),
						i.addEventListener('touchend', E, !1),
						i.addEventListener('touchcancel', b, !1),
						i.addEventListener('mousedown', g, !1),
						i.addEventListener('mousemove', p, !1),
						i.addEventListener('mouseup', E, !1),
						i.addEventListener('mouseout', b, !1);
					function g(O) {
						var _ = O.touches;
						(_ && _.length > 1) ||
							((o = !0), _ ? ((s = !0), (f = _[0].clientX)) : (f = O.clientX), (v = f));
					}
					function p(O) {
						if (o) {
							if (s && O.type === 'mousemove') {
								O.preventDefault(), O.stopPropagation();
								return;
							}
							var _ = O.touches,
								S = _ ? _[0].clientX : O.clientX,
								A = S - v;
							(v = S),
								Math.abs(A) > u &&
									n &&
									String(n()) === '' &&
									(a('swipe', O, { direction: A > 0 ? 'right' : 'left' }), b());
						}
					}
					function E(O) {
						if (o && ((o = !1), s && O.type === 'mouseup')) {
							O.preventDefault(), O.stopPropagation(), (s = !1);
							return;
						}
					}
					function b() {
						o = !1;
					}
					function I() {
						i.removeEventListener('touchstart', g, !1),
							i.removeEventListener('touchmove', p, !1),
							i.removeEventListener('touchend', E, !1),
							i.removeEventListener('touchcancel', b, !1),
							i.removeEventListener('mousedown', g, !1),
							i.removeEventListener('mousemove', p, !1),
							i.removeEventListener('mouseup', E, !1),
							i.removeEventListener('mouseout', b, !1),
							(i = null);
					}
					this.destroy = I;
				}
				function a(i, o, s) {
					var u = e.Event(i, { originalEvent: o });
					e(o.target).trigger(u, s);
				}
				return (t.instance = t.init(document)), t;
			})
		);
	});
	var wr = l((LD, _o) => {
		var ph = typeof global == 'object' && global && global.Object === Object && global;
		_o.exports = ph;
	});
	var Ge = l((CD, yo) => {
		var gh = wr(),
			Eh = typeof self == 'object' && self && self.Object === Object && self,
			hh = gh || Eh || Function('return this')();
		yo.exports = hh;
	});
	var Tt = l((ND, Io) => {
		var vh = Ge(),
			_h = vh.Symbol;
		Io.exports = _h;
	});
	var Oo = l((PD, mo) => {
		var To = Tt(),
			bo = Object.prototype,
			yh = bo.hasOwnProperty,
			Ih = bo.toString,
			Wt = To ? To.toStringTag : void 0;
		function Th(e) {
			var t = yh.call(e, Wt),
				n = e[Wt];
			try {
				e[Wt] = void 0;
				var r = !0;
			} catch {}
			var a = Ih.call(e);
			return r && (t ? (e[Wt] = n) : delete e[Wt]), a;
		}
		mo.exports = Th;
	});
	var So = l((DD, Ao) => {
		var bh = Object.prototype,
			mh = bh.toString;
		function Oh(e) {
			return mh.call(e);
		}
		Ao.exports = Oh;
	});
	var tt = l((MD, Lo) => {
		var Ro = Tt(),
			Ah = Oo(),
			Sh = So(),
			Rh = '[object Null]',
			wh = '[object Undefined]',
			wo = Ro ? Ro.toStringTag : void 0;
		function Lh(e) {
			return e == null ? (e === void 0 ? wh : Rh) : wo && wo in Object(e) ? Ah(e) : Sh(e);
		}
		Lo.exports = Lh;
	});
	var Lr = l((xD, Co) => {
		function Ch(e, t) {
			return function (n) {
				return e(t(n));
			};
		}
		Co.exports = Ch;
	});
	var Cr = l((FD, No) => {
		var Nh = Lr(),
			Ph = Nh(Object.getPrototypeOf, Object);
		No.exports = Ph;
	});
	var Qe = l((qD, Po) => {
		function Dh(e) {
			return e != null && typeof e == 'object';
		}
		Po.exports = Dh;
	});
	var Nr = l((GD, Mo) => {
		var Mh = tt(),
			xh = Cr(),
			Fh = Qe(),
			qh = '[object Object]',
			Gh = Function.prototype,
			Vh = Object.prototype,
			Do = Gh.toString,
			Uh = Vh.hasOwnProperty,
			Bh = Do.call(Object);
		function kh(e) {
			if (!Fh(e) || Mh(e) != qh) return !1;
			var t = xh(e);
			if (t === null) return !0;
			var n = Uh.call(t, 'constructor') && t.constructor;
			return typeof n == 'function' && n instanceof n && Do.call(n) == Bh;
		}
		Mo.exports = kh;
	});
	var xo = l((Pr) => {
		'use strict';
		Object.defineProperty(Pr, '__esModule', { value: !0 });
		Pr.default = Xh;
		function Xh(e) {
			var t,
				n = e.Symbol;
			return (
				typeof n == 'function'
					? n.observable
						? (t = n.observable)
						: ((t = n('observable')), (n.observable = t))
					: (t = '@@observable'),
				t
			);
		}
	});
	var Fo = l((Mr, Dr) => {
		'use strict';
		Object.defineProperty(Mr, '__esModule', { value: !0 });
		var Wh = xo(),
			Hh = Yh(Wh);
		function Yh(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var bt;
		typeof self < 'u'
			? (bt = self)
			: typeof window < 'u'
				? (bt = window)
				: typeof global < 'u'
					? (bt = global)
					: typeof Dr < 'u'
						? (bt = Dr)
						: (bt = Function('return this')());
		var zh = (0, Hh.default)(bt);
		Mr.default = zh;
	});
	var xr = l((Ht) => {
		'use strict';
		Ht.__esModule = !0;
		Ht.ActionTypes = void 0;
		Ht.default = Uo;
		var Kh = Nr(),
			jh = Vo(Kh),
			Qh = Fo(),
			qo = Vo(Qh);
		function Vo(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var Go = (Ht.ActionTypes = { INIT: '@@redux/INIT' });
		function Uo(e, t, n) {
			var r;
			if ((typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)), typeof n < 'u')) {
				if (typeof n != 'function') throw new Error('Expected the enhancer to be a function.');
				return n(Uo)(e, t);
			}
			if (typeof e != 'function') throw new Error('Expected the reducer to be a function.');
			var a = e,
				i = t,
				o = [],
				s = o,
				u = !1;
			function f() {
				s === o && (s = o.slice());
			}
			function v() {
				return i;
			}
			function g(I) {
				if (typeof I != 'function') throw new Error('Expected listener to be a function.');
				var O = !0;
				return (
					f(),
					s.push(I),
					function () {
						if (O) {
							(O = !1), f();
							var S = s.indexOf(I);
							s.splice(S, 1);
						}
					}
				);
			}
			function p(I) {
				if (!(0, jh.default)(I))
					throw new Error(
						'Actions must be plain objects. Use custom middleware for async actions.'
					);
				if (typeof I.type > 'u')
					throw new Error(
						'Actions may not have an undefined "type" property. Have you misspelled a constant?'
					);
				if (u) throw new Error('Reducers may not dispatch actions.');
				try {
					(u = !0), (i = a(i, I));
				} finally {
					u = !1;
				}
				for (var O = (o = s), _ = 0; _ < O.length; _++) O[_]();
				return I;
			}
			function E(I) {
				if (typeof I != 'function') throw new Error('Expected the nextReducer to be a function.');
				(a = I), p({ type: Go.INIT });
			}
			function b() {
				var I,
					O = g;
				return (
					(I = {
						subscribe: function (S) {
							if (typeof S != 'object')
								throw new TypeError('Expected the observer to be an object.');
							function A() {
								S.next && S.next(v());
							}
							A();
							var D = O(A);
							return { unsubscribe: D };
						}
					}),
					(I[qo.default] = function () {
						return this;
					}),
					I
				);
			}
			return (
				p({ type: Go.INIT }),
				(r = { dispatch: p, subscribe: g, getState: v, replaceReducer: E }),
				(r[qo.default] = b),
				r
			);
		}
	});
	var qr = l((Fr) => {
		'use strict';
		Fr.__esModule = !0;
		Fr.default = $h;
		function $h(e) {
			typeof console < 'u' && typeof console.error == 'function' && console.error(e);
			try {
				throw new Error(e);
			} catch {}
		}
	});
	var Xo = l((Gr) => {
		'use strict';
		Gr.__esModule = !0;
		Gr.default = nv;
		var Bo = xr(),
			Zh = Nr(),
			kD = ko(Zh),
			Jh = qr(),
			XD = ko(Jh);
		function ko(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function ev(e, t) {
			var n = t && t.type,
				r = (n && '"' + n.toString() + '"') || 'an action';
			return (
				'Given action ' +
				r +
				', reducer "' +
				e +
				'" returned undefined. To ignore an action, you must explicitly return the previous state.'
			);
		}
		function tv(e) {
			Object.keys(e).forEach(function (t) {
				var n = e[t],
					r = n(void 0, { type: Bo.ActionTypes.INIT });
				if (typeof r > 'u')
					throw new Error(
						'Reducer "' +
							t +
							'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
					);
				var a =
					'@@redux/PROBE_UNKNOWN_ACTION_' +
					Math.random().toString(36).substring(7).split('').join('.');
				if (typeof n(void 0, { type: a }) > 'u')
					throw new Error(
						'Reducer "' +
							t +
							'" returned undefined when probed with a random type. ' +
							("Don't try to handle " + Bo.ActionTypes.INIT + ' or other actions in "redux/*" ') +
							'namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
					);
			});
		}
		function nv(e) {
			for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
				var a = t[r];
				typeof e[a] == 'function' && (n[a] = e[a]);
			}
			var i = Object.keys(n);
			if (!1) var o;
			var s;
			try {
				tv(n);
			} catch (u) {
				s = u;
			}
			return function () {
				var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					v = arguments[1];
				if (s) throw s;
				if (!1) var g;
				for (var p = !1, E = {}, b = 0; b < i.length; b++) {
					var I = i[b],
						O = n[I],
						_ = f[I],
						S = O(_, v);
					if (typeof S > 'u') {
						var A = ev(I, v);
						throw new Error(A);
					}
					(E[I] = S), (p = p || S !== _);
				}
				return p ? E : f;
			};
		}
	});
	var Ho = l((Vr) => {
		'use strict';
		Vr.__esModule = !0;
		Vr.default = rv;
		function Wo(e, t) {
			return function () {
				return t(e.apply(void 0, arguments));
			};
		}
		function rv(e, t) {
			if (typeof e == 'function') return Wo(e, t);
			if (typeof e != 'object' || e === null)
				throw new Error(
					'bindActionCreators expected an object or a function, instead received ' +
						(e === null ? 'null' : typeof e) +
						'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
				);
			for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
				var i = n[a],
					o = e[i];
				typeof o == 'function' && (r[i] = Wo(o, t));
			}
			return r;
		}
	});
	var Br = l((Ur) => {
		'use strict';
		Ur.__esModule = !0;
		Ur.default = iv;
		function iv() {
			for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			if (t.length === 0)
				return function (i) {
					return i;
				};
			if (t.length === 1) return t[0];
			var r = t[t.length - 1],
				a = t.slice(0, -1);
			return function () {
				return a.reduceRight(
					function (i, o) {
						return o(i);
					},
					r.apply(void 0, arguments)
				);
			};
		}
	});
	var Yo = l((kr) => {
		'use strict';
		kr.__esModule = !0;
		var av =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			};
		kr.default = cv;
		var ov = Br(),
			sv = uv(ov);
		function uv(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function cv() {
			for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
			return function (r) {
				return function (a, i, o) {
					var s = r(a, i, o),
						u = s.dispatch,
						f = [],
						v = {
							getState: s.getState,
							dispatch: function (p) {
								return u(p);
							}
						};
					return (
						(f = t.map(function (g) {
							return g(v);
						})),
						(u = sv.default.apply(void 0, f)(s.dispatch)),
						av({}, s, { dispatch: u })
					);
				};
			};
		}
	});
	var Xr = l((Pe) => {
		'use strict';
		Pe.__esModule = !0;
		Pe.compose =
			Pe.applyMiddleware =
			Pe.bindActionCreators =
			Pe.combineReducers =
			Pe.createStore =
				void 0;
		var lv = xr(),
			fv = mt(lv),
			dv = Xo(),
			pv = mt(dv),
			gv = Ho(),
			Ev = mt(gv),
			hv = Yo(),
			vv = mt(hv),
			_v = Br(),
			yv = mt(_v),
			Iv = qr(),
			KD = mt(Iv);
		function mt(e) {
			return e && e.__esModule ? e : { default: e };
		}
		Pe.createStore = fv.default;
		Pe.combineReducers = pv.default;
		Pe.bindActionCreators = Ev.default;
		Pe.applyMiddleware = vv.default;
		Pe.compose = yv.default;
	});
	var zo = l((Wr) => {
		'use strict';
		Object.defineProperty(Wr, '__esModule', { value: !0 });
		function Tv(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		Tv(Wr, {
			EventAppliesTo: function () {
				return mv;
			},
			EventBasedOn: function () {
				return Ov;
			},
			EventContinuousMouseAxes: function () {
				return Av;
			},
			EventLimitAffectedElements: function () {
				return Sv;
			},
			EventTypeConsts: function () {
				return bv;
			},
			QuickEffectDirectionConsts: function () {
				return wv;
			},
			QuickEffectIds: function () {
				return Rv;
			}
		});
		var bv = {
				NAVBAR_OPEN: 'NAVBAR_OPEN',
				NAVBAR_CLOSE: 'NAVBAR_CLOSE',
				TAB_ACTIVE: 'TAB_ACTIVE',
				TAB_INACTIVE: 'TAB_INACTIVE',
				SLIDER_ACTIVE: 'SLIDER_ACTIVE',
				SLIDER_INACTIVE: 'SLIDER_INACTIVE',
				DROPDOWN_OPEN: 'DROPDOWN_OPEN',
				DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
				MOUSE_CLICK: 'MOUSE_CLICK',
				MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
				MOUSE_DOWN: 'MOUSE_DOWN',
				MOUSE_UP: 'MOUSE_UP',
				MOUSE_OVER: 'MOUSE_OVER',
				MOUSE_OUT: 'MOUSE_OUT',
				MOUSE_MOVE: 'MOUSE_MOVE',
				MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
				SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
				SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
				SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
				ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
				ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
				PAGE_START: 'PAGE_START',
				PAGE_FINISH: 'PAGE_FINISH',
				PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
				PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
				PAGE_SCROLL: 'PAGE_SCROLL'
			},
			mv = { ELEMENT: 'ELEMENT', CLASS: 'CLASS', PAGE: 'PAGE' },
			Ov = { ELEMENT: 'ELEMENT', VIEWPORT: 'VIEWPORT' },
			Av = { X_AXIS: 'X_AXIS', Y_AXIS: 'Y_AXIS' },
			Sv = { CHILDREN: 'CHILDREN', SIBLINGS: 'SIBLINGS', IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN' },
			Rv = {
				FADE_EFFECT: 'FADE_EFFECT',
				SLIDE_EFFECT: 'SLIDE_EFFECT',
				GROW_EFFECT: 'GROW_EFFECT',
				SHRINK_EFFECT: 'SHRINK_EFFECT',
				SPIN_EFFECT: 'SPIN_EFFECT',
				FLY_EFFECT: 'FLY_EFFECT',
				POP_EFFECT: 'POP_EFFECT',
				FLIP_EFFECT: 'FLIP_EFFECT',
				JIGGLE_EFFECT: 'JIGGLE_EFFECT',
				PULSE_EFFECT: 'PULSE_EFFECT',
				DROP_EFFECT: 'DROP_EFFECT',
				BLINK_EFFECT: 'BLINK_EFFECT',
				BOUNCE_EFFECT: 'BOUNCE_EFFECT',
				FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
				FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
				RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
				JELLO_EFFECT: 'JELLO_EFFECT',
				GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
				SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
				PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT'
			},
			wv = {
				LEFT: 'LEFT',
				RIGHT: 'RIGHT',
				BOTTOM: 'BOTTOM',
				TOP: 'TOP',
				BOTTOM_LEFT: 'BOTTOM_LEFT',
				BOTTOM_RIGHT: 'BOTTOM_RIGHT',
				TOP_RIGHT: 'TOP_RIGHT',
				TOP_LEFT: 'TOP_LEFT',
				CLOCKWISE: 'CLOCKWISE',
				COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE'
			};
	});
	var Yr = l((Hr) => {
		'use strict';
		Object.defineProperty(Hr, '__esModule', { value: !0 });
		function Lv(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		Lv(Hr, {
			ActionAppliesTo: function () {
				return Nv;
			},
			ActionTypeConsts: function () {
				return Cv;
			}
		});
		var Cv = {
				TRANSFORM_MOVE: 'TRANSFORM_MOVE',
				TRANSFORM_SCALE: 'TRANSFORM_SCALE',
				TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
				TRANSFORM_SKEW: 'TRANSFORM_SKEW',
				STYLE_OPACITY: 'STYLE_OPACITY',
				STYLE_SIZE: 'STYLE_SIZE',
				STYLE_FILTER: 'STYLE_FILTER',
				STYLE_FONT_VARIATION: 'STYLE_FONT_VARIATION',
				STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
				STYLE_BORDER: 'STYLE_BORDER',
				STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
				OBJECT_VALUE: 'OBJECT_VALUE',
				PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
				PLUGIN_SPLINE: 'PLUGIN_SPLINE',
				PLUGIN_RIVE: 'PLUGIN_RIVE',
				PLUGIN_VARIABLE: 'PLUGIN_VARIABLE',
				GENERAL_DISPLAY: 'GENERAL_DISPLAY',
				GENERAL_START_ACTION: 'GENERAL_START_ACTION',
				GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
				GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
				GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
				GENERAL_LOOP: 'GENERAL_LOOP',
				STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW'
			},
			Nv = {
				ELEMENT: 'ELEMENT',
				ELEMENT_CLASS: 'ELEMENT_CLASS',
				TRIGGER_ELEMENT: 'TRIGGER_ELEMENT'
			};
	});
	var Ko = l((zr) => {
		'use strict';
		Object.defineProperty(zr, '__esModule', { value: !0 });
		Object.defineProperty(zr, 'InteractionTypeConsts', {
			enumerable: !0,
			get: function () {
				return Pv;
			}
		});
		var Pv = {
			MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
			MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
			MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
			SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
			SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
			MOUSE_MOVE_IN_VIEWPORT_INTERACTION: 'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
			PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
			PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
			PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
			NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
			DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
			ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
			TAB_INTERACTION: 'TAB_INTERACTION',
			SLIDER_INTERACTION: 'SLIDER_INTERACTION'
		};
	});
	var jo = l((Kr) => {
		'use strict';
		Object.defineProperty(Kr, '__esModule', { value: !0 });
		Object.defineProperty(Kr, 'ReducedMotionTypes', {
			enumerable: !0,
			get: function () {
				return Bv;
			}
		});
		var Dv = Yr(),
			{
				TRANSFORM_MOVE: Mv,
				TRANSFORM_SCALE: xv,
				TRANSFORM_ROTATE: Fv,
				TRANSFORM_SKEW: qv,
				STYLE_SIZE: Gv,
				STYLE_FILTER: Vv,
				STYLE_FONT_VARIATION: Uv
			} = Dv.ActionTypeConsts,
			Bv = { [Mv]: !0, [xv]: !0, [Fv]: !0, [qv]: !0, [Gv]: !0, [Vv]: !0, [Uv]: !0 };
	});
	var Qo = l((jr) => {
		'use strict';
		Object.defineProperty(jr, '__esModule', { value: !0 });
		function kv(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		kv(jr, {
			IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
				return a_;
			},
			IX2_ANIMATION_FRAME_CHANGED: function () {
				return Jv;
			},
			IX2_CLEAR_REQUESTED: function () {
				return Qv;
			},
			IX2_ELEMENT_STATE_CHANGED: function () {
				return i_;
			},
			IX2_EVENT_LISTENER_ADDED: function () {
				return $v;
			},
			IX2_EVENT_STATE_CHANGED: function () {
				return Zv;
			},
			IX2_INSTANCE_ADDED: function () {
				return t_;
			},
			IX2_INSTANCE_REMOVED: function () {
				return r_;
			},
			IX2_INSTANCE_STARTED: function () {
				return n_;
			},
			IX2_MEDIA_QUERIES_DEFINED: function () {
				return s_;
			},
			IX2_PARAMETER_CHANGED: function () {
				return e_;
			},
			IX2_PLAYBACK_REQUESTED: function () {
				return Kv;
			},
			IX2_PREVIEW_REQUESTED: function () {
				return zv;
			},
			IX2_RAW_DATA_IMPORTED: function () {
				return Xv;
			},
			IX2_SESSION_INITIALIZED: function () {
				return Wv;
			},
			IX2_SESSION_STARTED: function () {
				return Hv;
			},
			IX2_SESSION_STOPPED: function () {
				return Yv;
			},
			IX2_STOP_REQUESTED: function () {
				return jv;
			},
			IX2_TEST_FRAME_RENDERED: function () {
				return u_;
			},
			IX2_VIEWPORT_WIDTH_CHANGED: function () {
				return o_;
			}
		});
		var Xv = 'IX2_RAW_DATA_IMPORTED',
			Wv = 'IX2_SESSION_INITIALIZED',
			Hv = 'IX2_SESSION_STARTED',
			Yv = 'IX2_SESSION_STOPPED',
			zv = 'IX2_PREVIEW_REQUESTED',
			Kv = 'IX2_PLAYBACK_REQUESTED',
			jv = 'IX2_STOP_REQUESTED',
			Qv = 'IX2_CLEAR_REQUESTED',
			$v = 'IX2_EVENT_LISTENER_ADDED',
			Zv = 'IX2_EVENT_STATE_CHANGED',
			Jv = 'IX2_ANIMATION_FRAME_CHANGED',
			e_ = 'IX2_PARAMETER_CHANGED',
			t_ = 'IX2_INSTANCE_ADDED',
			n_ = 'IX2_INSTANCE_STARTED',
			r_ = 'IX2_INSTANCE_REMOVED',
			i_ = 'IX2_ELEMENT_STATE_CHANGED',
			a_ = 'IX2_ACTION_LIST_PLAYBACK_CHANGED',
			o_ = 'IX2_VIEWPORT_WIDTH_CHANGED',
			s_ = 'IX2_MEDIA_QUERIES_DEFINED',
			u_ = 'IX2_TEST_FRAME_RENDERED';
	});
	var $o = l((Qr) => {
		'use strict';
		Object.defineProperty(Qr, '__esModule', { value: !0 });
		function c_(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		c_(Qr, {
			ABSTRACT_NODE: function () {
				return s0;
			},
			AUTO: function () {
				return Q_;
			},
			BACKGROUND: function () {
				return W_;
			},
			BACKGROUND_COLOR: function () {
				return X_;
			},
			BAR_DELIMITER: function () {
				return J_;
			},
			BORDER_COLOR: function () {
				return H_;
			},
			BOUNDARY_SELECTOR: function () {
				return g_;
			},
			CHILDREN: function () {
				return e0;
			},
			COLON_DELIMITER: function () {
				return Z_;
			},
			COLOR: function () {
				return Y_;
			},
			COMMA_DELIMITER: function () {
				return $_;
			},
			CONFIG_UNIT: function () {
				return b_;
			},
			CONFIG_VALUE: function () {
				return __;
			},
			CONFIG_X_UNIT: function () {
				return y_;
			},
			CONFIG_X_VALUE: function () {
				return E_;
			},
			CONFIG_Y_UNIT: function () {
				return I_;
			},
			CONFIG_Y_VALUE: function () {
				return h_;
			},
			CONFIG_Z_UNIT: function () {
				return T_;
			},
			CONFIG_Z_VALUE: function () {
				return v_;
			},
			DISPLAY: function () {
				return z_;
			},
			FILTER: function () {
				return V_;
			},
			FLEX: function () {
				return K_;
			},
			FONT_VARIATION_SETTINGS: function () {
				return U_;
			},
			HEIGHT: function () {
				return k_;
			},
			HTML_ELEMENT: function () {
				return a0;
			},
			IMMEDIATE_CHILDREN: function () {
				return t0;
			},
			IX2_ID_DELIMITER: function () {
				return l_;
			},
			OPACITY: function () {
				return G_;
			},
			PARENT: function () {
				return r0;
			},
			PLAIN_OBJECT: function () {
				return o0;
			},
			PRESERVE_3D: function () {
				return i0;
			},
			RENDER_GENERAL: function () {
				return c0;
			},
			RENDER_PLUGIN: function () {
				return f0;
			},
			RENDER_STYLE: function () {
				return l0;
			},
			RENDER_TRANSFORM: function () {
				return u0;
			},
			ROTATE_X: function () {
				return P_;
			},
			ROTATE_Y: function () {
				return D_;
			},
			ROTATE_Z: function () {
				return M_;
			},
			SCALE_3D: function () {
				return N_;
			},
			SCALE_X: function () {
				return w_;
			},
			SCALE_Y: function () {
				return L_;
			},
			SCALE_Z: function () {
				return C_;
			},
			SIBLINGS: function () {
				return n0;
			},
			SKEW: function () {
				return x_;
			},
			SKEW_X: function () {
				return F_;
			},
			SKEW_Y: function () {
				return q_;
			},
			TRANSFORM: function () {
				return m_;
			},
			TRANSLATE_3D: function () {
				return R_;
			},
			TRANSLATE_X: function () {
				return O_;
			},
			TRANSLATE_Y: function () {
				return A_;
			},
			TRANSLATE_Z: function () {
				return S_;
			},
			WF_PAGE: function () {
				return f_;
			},
			WIDTH: function () {
				return B_;
			},
			WILL_CHANGE: function () {
				return j_;
			},
			W_MOD_IX: function () {
				return p_;
			},
			W_MOD_JS: function () {
				return d_;
			}
		});
		var l_ = '|',
			f_ = 'data-wf-page',
			d_ = 'w-mod-js',
			p_ = 'w-mod-ix',
			g_ = '.w-dyn-item',
			E_ = 'xValue',
			h_ = 'yValue',
			v_ = 'zValue',
			__ = 'value',
			y_ = 'xUnit',
			I_ = 'yUnit',
			T_ = 'zUnit',
			b_ = 'unit',
			m_ = 'transform',
			O_ = 'translateX',
			A_ = 'translateY',
			S_ = 'translateZ',
			R_ = 'translate3d',
			w_ = 'scaleX',
			L_ = 'scaleY',
			C_ = 'scaleZ',
			N_ = 'scale3d',
			P_ = 'rotateX',
			D_ = 'rotateY',
			M_ = 'rotateZ',
			x_ = 'skew',
			F_ = 'skewX',
			q_ = 'skewY',
			G_ = 'opacity',
			V_ = 'filter',
			U_ = 'font-variation-settings',
			B_ = 'width',
			k_ = 'height',
			X_ = 'backgroundColor',
			W_ = 'background',
			H_ = 'borderColor',
			Y_ = 'color',
			z_ = 'display',
			K_ = 'flex',
			j_ = 'willChange',
			Q_ = 'AUTO',
			$_ = ',',
			Z_ = ':',
			J_ = '|',
			e0 = 'CHILDREN',
			t0 = 'IMMEDIATE_CHILDREN',
			n0 = 'SIBLINGS',
			r0 = 'PARENT',
			i0 = 'preserve-3d',
			a0 = 'HTML_ELEMENT',
			o0 = 'PLAIN_OBJECT',
			s0 = 'ABSTRACT_NODE',
			u0 = 'RENDER_TRANSFORM',
			c0 = 'RENDER_GENERAL',
			l0 = 'RENDER_STYLE',
			f0 = 'RENDER_PLUGIN';
	});
	var Re = l((ct) => {
		'use strict';
		Object.defineProperty(ct, '__esModule', { value: !0 });
		function d0(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		d0(ct, {
			ActionTypeConsts: function () {
				return g0.ActionTypeConsts;
			},
			IX2EngineActionTypes: function () {
				return E0;
			},
			IX2EngineConstants: function () {
				return h0;
			},
			QuickEffectIds: function () {
				return p0.QuickEffectIds;
			}
		});
		var p0 = yn(zo(), ct),
			g0 = yn(Yr(), ct);
		yn(Ko(), ct);
		yn(jo(), ct);
		var E0 = Jo(Qo()),
			h0 = Jo($o());
		function yn(e, t) {
			return (
				Object.keys(e).forEach(function (n) {
					n !== 'default' &&
						!Object.prototype.hasOwnProperty.call(t, n) &&
						Object.defineProperty(t, n, {
							enumerable: !0,
							get: function () {
								return e[n];
							}
						});
				}),
				e
			);
		}
		function Zo(e) {
			if (typeof WeakMap != 'function') return null;
			var t = new WeakMap(),
				n = new WeakMap();
			return (Zo = function (r) {
				return r ? n : t;
			})(e);
		}
		function Jo(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e };
			var n = Zo(t);
			if (n && n.has(e)) return n.get(e);
			var r = { __proto__: null },
				a = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
					var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
					o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
				}
			return (r.default = e), n && n.set(e, r), r;
		}
	});
	var es = l(($r) => {
		'use strict';
		Object.defineProperty($r, '__esModule', { value: !0 });
		Object.defineProperty($r, 'ixData', {
			enumerable: !0,
			get: function () {
				return y0;
			}
		});
		var v0 = Re(),
			{ IX2_RAW_DATA_IMPORTED: _0 } = v0.IX2EngineActionTypes,
			y0 = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case _0:
						return t.payload.ixData || Object.freeze({});
					default:
						return e;
				}
			};
	});
	var Ot = l((ge) => {
		'use strict';
		Object.defineProperty(ge, '__esModule', { value: !0 });
		var I0 =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (e) {
						return typeof e;
					}
				: function (e) {
						return e &&
							typeof Symbol == 'function' &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e;
					};
		ge.clone = Tn;
		ge.addLast = rs;
		ge.addFirst = is;
		ge.removeLast = as;
		ge.removeFirst = os;
		ge.insert = ss;
		ge.removeAt = us;
		ge.replaceAt = cs;
		ge.getIn = bn;
		ge.set = mn;
		ge.setIn = On;
		ge.update = fs;
		ge.updateIn = ds;
		ge.merge = ps;
		ge.mergeDeep = gs;
		ge.mergeIn = Es;
		ge.omit = hs;
		ge.addDefaults = vs;
		var ts = 'INVALID_ARGS';
		function ns(e) {
			throw new Error(e);
		}
		function Zr(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t;
		}
		var T0 = {}.hasOwnProperty;
		function Tn(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = Zr(e), n = {}, r = 0; r < t.length; r++) {
				var a = t[r];
				n[a] = e[a];
			}
			return n;
		}
		function we(e, t, n) {
			var r = n;
			r == null && ns(ts);
			for (var a = !1, i = arguments.length, o = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++)
				o[s - 3] = arguments[s];
			for (var u = 0; u < o.length; u++) {
				var f = o[u];
				if (f != null) {
					var v = Zr(f);
					if (v.length)
						for (var g = 0; g <= v.length; g++) {
							var p = v[g];
							if (!(e && r[p] !== void 0)) {
								var E = f[p];
								t && In(r[p]) && In(E) && (E = we(e, t, r[p], E)),
									!(E === void 0 || E === r[p]) && (a || ((a = !0), (r = Tn(r))), (r[p] = E));
							}
						}
				}
			}
			return r;
		}
		function In(e) {
			var t = typeof e > 'u' ? 'undefined' : I0(e);
			return e != null && (t === 'object' || t === 'function');
		}
		function rs(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t]);
		}
		function is(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e);
		}
		function as(e) {
			return e.length ? e.slice(0, e.length - 1) : e;
		}
		function os(e) {
			return e.length ? e.slice(1) : e;
		}
		function ss(e, t, n) {
			return e
				.slice(0, t)
				.concat(Array.isArray(n) ? n : [n])
				.concat(e.slice(t));
		}
		function us(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
		}
		function cs(e, t, n) {
			if (e[t] === n) return e;
			for (var r = e.length, a = Array(r), i = 0; i < r; i++) a[i] = e[i];
			return (a[t] = n), a;
		}
		function bn(e, t) {
			if ((!Array.isArray(t) && ns(ts), e != null)) {
				for (var n = e, r = 0; r < t.length; r++) {
					var a = t[r];
					if (((n = n?.[a]), n === void 0)) return n;
				}
				return n;
			}
		}
		function mn(e, t, n) {
			var r = typeof t == 'number' ? [] : {},
				a = e ?? r;
			if (a[t] === n) return a;
			var i = Tn(a);
			return (i[t] = n), i;
		}
		function ls(e, t, n, r) {
			var a = void 0,
				i = t[r];
			if (r === t.length - 1) a = n;
			else {
				var o = In(e) && In(e[i]) ? e[i] : typeof t[r + 1] == 'number' ? [] : {};
				a = ls(o, t, n, r + 1);
			}
			return mn(e, i, a);
		}
		function On(e, t, n) {
			return t.length ? ls(e, t, n, 0) : n;
		}
		function fs(e, t, n) {
			var r = e?.[t],
				a = n(r);
			return mn(e, t, a);
		}
		function ds(e, t, n) {
			var r = bn(e, t),
				a = n(r);
			return On(e, t, a);
		}
		function ps(e, t, n, r, a, i) {
			for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6; u < o; u++)
				s[u - 6] = arguments[u];
			return s.length
				? we.call.apply(we, [null, !1, !1, e, t, n, r, a, i].concat(s))
				: we(!1, !1, e, t, n, r, a, i);
		}
		function gs(e, t, n, r, a, i) {
			for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6; u < o; u++)
				s[u - 6] = arguments[u];
			return s.length
				? we.call.apply(we, [null, !1, !0, e, t, n, r, a, i].concat(s))
				: we(!1, !0, e, t, n, r, a, i);
		}
		function Es(e, t, n, r, a, i, o) {
			var s = bn(e, t);
			s == null && (s = {});
			for (var u = void 0, f = arguments.length, v = Array(f > 7 ? f - 7 : 0), g = 7; g < f; g++)
				v[g - 7] = arguments[g];
			return (
				v.length
					? (u = we.call.apply(we, [null, !1, !1, s, n, r, a, i, o].concat(v)))
					: (u = we(!1, !1, s, n, r, a, i, o)),
				On(e, t, u)
			);
		}
		function hs(e, t) {
			for (var n = Array.isArray(t) ? t : [t], r = !1, a = 0; a < n.length; a++)
				if (T0.call(e, n[a])) {
					r = !0;
					break;
				}
			if (!r) return e;
			for (var i = {}, o = Zr(e), s = 0; s < o.length; s++) {
				var u = o[s];
				n.indexOf(u) >= 0 || (i[u] = e[u]);
			}
			return i;
		}
		function vs(e, t, n, r, a, i) {
			for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), u = 6; u < o; u++)
				s[u - 6] = arguments[u];
			return s.length
				? we.call.apply(we, [null, !0, !1, e, t, n, r, a, i].concat(s))
				: we(!0, !1, e, t, n, r, a, i);
		}
		var b0 = {
			clone: Tn,
			addLast: rs,
			addFirst: is,
			removeLast: as,
			removeFirst: os,
			insert: ss,
			removeAt: us,
			replaceAt: cs,
			getIn: bn,
			set: mn,
			setIn: On,
			update: fs,
			updateIn: ds,
			merge: ps,
			mergeDeep: gs,
			mergeIn: Es,
			omit: hs,
			addDefaults: vs
		};
		ge.default = b0;
	});
	var ys = l((Jr) => {
		'use strict';
		Object.defineProperty(Jr, '__esModule', { value: !0 });
		Object.defineProperty(Jr, 'ixRequest', {
			enumerable: !0,
			get: function () {
				return C0;
			}
		});
		var m0 = Re(),
			O0 = Ot(),
			{
				IX2_PREVIEW_REQUESTED: A0,
				IX2_PLAYBACK_REQUESTED: S0,
				IX2_STOP_REQUESTED: R0,
				IX2_CLEAR_REQUESTED: w0
			} = m0.IX2EngineActionTypes,
			L0 = { preview: {}, playback: {}, stop: {}, clear: {} },
			_s = Object.create(null, {
				[A0]: { value: 'preview' },
				[S0]: { value: 'playback' },
				[R0]: { value: 'stop' },
				[w0]: { value: 'clear' }
			}),
			C0 = (e = L0, t) => {
				if (t.type in _s) {
					let n = [_s[t.type]];
					return (0, O0.setIn)(e, [n], { ...t.payload });
				}
				return e;
			};
	});
	var Ts = l((ei) => {
		'use strict';
		Object.defineProperty(ei, '__esModule', { value: !0 });
		Object.defineProperty(ei, 'ixSession', {
			enumerable: !0,
			get: function () {
				return X0;
			}
		});
		var N0 = Re(),
			Xe = Ot(),
			{
				IX2_SESSION_INITIALIZED: P0,
				IX2_SESSION_STARTED: D0,
				IX2_TEST_FRAME_RENDERED: M0,
				IX2_SESSION_STOPPED: x0,
				IX2_EVENT_LISTENER_ADDED: F0,
				IX2_EVENT_STATE_CHANGED: q0,
				IX2_ANIMATION_FRAME_CHANGED: G0,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: V0,
				IX2_VIEWPORT_WIDTH_CHANGED: U0,
				IX2_MEDIA_QUERIES_DEFINED: B0
			} = N0.IX2EngineActionTypes,
			Is = {
				active: !1,
				tick: 0,
				eventListeners: [],
				eventState: {},
				playbackState: {},
				viewportWidth: 0,
				mediaQueryKey: null,
				hasBoundaryNodes: !1,
				hasDefinedMediaQueries: !1,
				reducedMotion: !1
			},
			k0 = 20,
			X0 = (e = Is, t) => {
				switch (t.type) {
					case P0: {
						let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
						return (0, Xe.merge)(e, { hasBoundaryNodes: n, reducedMotion: r });
					}
					case D0:
						return (0, Xe.set)(e, 'active', !0);
					case M0: {
						let {
							payload: { step: n = k0 }
						} = t;
						return (0, Xe.set)(e, 'tick', e.tick + n);
					}
					case x0:
						return Is;
					case G0: {
						let {
							payload: { now: n }
						} = t;
						return (0, Xe.set)(e, 'tick', n);
					}
					case F0: {
						let n = (0, Xe.addLast)(e.eventListeners, t.payload);
						return (0, Xe.set)(e, 'eventListeners', n);
					}
					case q0: {
						let { stateKey: n, newState: r } = t.payload;
						return (0, Xe.setIn)(e, ['eventState', n], r);
					}
					case V0: {
						let { actionListId: n, isPlaying: r } = t.payload;
						return (0, Xe.setIn)(e, ['playbackState', n], r);
					}
					case U0: {
						let { width: n, mediaQueries: r } = t.payload,
							a = r.length,
							i = null;
						for (let o = 0; o < a; o++) {
							let { key: s, min: u, max: f } = r[o];
							if (n >= u && n <= f) {
								i = s;
								break;
							}
						}
						return (0, Xe.merge)(e, { viewportWidth: n, mediaQueryKey: i });
					}
					case B0:
						return (0, Xe.set)(e, 'hasDefinedMediaQueries', !0);
					default:
						return e;
				}
			};
	});
	var ms = l((sM, bs) => {
		function W0() {
			(this.__data__ = []), (this.size = 0);
		}
		bs.exports = W0;
	});
	var An = l((uM, Os) => {
		function H0(e, t) {
			return e === t || (e !== e && t !== t);
		}
		Os.exports = H0;
	});
	var Yt = l((cM, As) => {
		var Y0 = An();
		function z0(e, t) {
			for (var n = e.length; n--; ) if (Y0(e[n][0], t)) return n;
			return -1;
		}
		As.exports = z0;
	});
	var Rs = l((lM, Ss) => {
		var K0 = Yt(),
			j0 = Array.prototype,
			Q0 = j0.splice;
		function $0(e) {
			var t = this.__data__,
				n = K0(t, e);
			if (n < 0) return !1;
			var r = t.length - 1;
			return n == r ? t.pop() : Q0.call(t, n, 1), --this.size, !0;
		}
		Ss.exports = $0;
	});
	var Ls = l((fM, ws) => {
		var Z0 = Yt();
		function J0(e) {
			var t = this.__data__,
				n = Z0(t, e);
			return n < 0 ? void 0 : t[n][1];
		}
		ws.exports = J0;
	});
	var Ns = l((dM, Cs) => {
		var ey = Yt();
		function ty(e) {
			return ey(this.__data__, e) > -1;
		}
		Cs.exports = ty;
	});
	var Ds = l((pM, Ps) => {
		var ny = Yt();
		function ry(e, t) {
			var n = this.__data__,
				r = ny(n, e);
			return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
		}
		Ps.exports = ry;
	});
	var zt = l((gM, Ms) => {
		var iy = ms(),
			ay = Rs(),
			oy = Ls(),
			sy = Ns(),
			uy = Ds();
		function At(e) {
			var t = -1,
				n = e == null ? 0 : e.length;
			for (this.clear(); ++t < n; ) {
				var r = e[t];
				this.set(r[0], r[1]);
			}
		}
		At.prototype.clear = iy;
		At.prototype.delete = ay;
		At.prototype.get = oy;
		At.prototype.has = sy;
		At.prototype.set = uy;
		Ms.exports = At;
	});
	var Fs = l((EM, xs) => {
		var cy = zt();
		function ly() {
			(this.__data__ = new cy()), (this.size = 0);
		}
		xs.exports = ly;
	});
	var Gs = l((hM, qs) => {
		function fy(e) {
			var t = this.__data__,
				n = t.delete(e);
			return (this.size = t.size), n;
		}
		qs.exports = fy;
	});
	var Us = l((vM, Vs) => {
		function dy(e) {
			return this.__data__.get(e);
		}
		Vs.exports = dy;
	});
	var ks = l((_M, Bs) => {
		function py(e) {
			return this.__data__.has(e);
		}
		Bs.exports = py;
	});
	var We = l((yM, Xs) => {
		function gy(e) {
			var t = typeof e;
			return e != null && (t == 'object' || t == 'function');
		}
		Xs.exports = gy;
	});
	var ti = l((IM, Ws) => {
		var Ey = tt(),
			hy = We(),
			vy = '[object AsyncFunction]',
			_y = '[object Function]',
			yy = '[object GeneratorFunction]',
			Iy = '[object Proxy]';
		function Ty(e) {
			if (!hy(e)) return !1;
			var t = Ey(e);
			return t == _y || t == yy || t == vy || t == Iy;
		}
		Ws.exports = Ty;
	});
	var Ys = l((TM, Hs) => {
		var by = Ge(),
			my = by['__core-js_shared__'];
		Hs.exports = my;
	});
	var js = l((bM, Ks) => {
		var ni = Ys(),
			zs = (function () {
				var e = /[^.]+$/.exec((ni && ni.keys && ni.keys.IE_PROTO) || '');
				return e ? 'Symbol(src)_1.' + e : '';
			})();
		function Oy(e) {
			return !!zs && zs in e;
		}
		Ks.exports = Oy;
	});
	var ri = l((mM, Qs) => {
		var Ay = Function.prototype,
			Sy = Ay.toString;
		function Ry(e) {
			if (e != null) {
				try {
					return Sy.call(e);
				} catch {}
				try {
					return e + '';
				} catch {}
			}
			return '';
		}
		Qs.exports = Ry;
	});
	var Zs = l((OM, $s) => {
		var wy = ti(),
			Ly = js(),
			Cy = We(),
			Ny = ri(),
			Py = /[\\^$.*+?()[\]{}|]/g,
			Dy = /^\[object .+?Constructor\]$/,
			My = Function.prototype,
			xy = Object.prototype,
			Fy = My.toString,
			qy = xy.hasOwnProperty,
			Gy = RegExp(
				'^' +
					Fy.call(qy)
						.replace(Py, '\\$&')
						.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
					'$'
			);
		function Vy(e) {
			if (!Cy(e) || Ly(e)) return !1;
			var t = wy(e) ? Gy : Dy;
			return t.test(Ny(e));
		}
		$s.exports = Vy;
	});
	var eu = l((AM, Js) => {
		function Uy(e, t) {
			return e?.[t];
		}
		Js.exports = Uy;
	});
	var nt = l((SM, tu) => {
		var By = Zs(),
			ky = eu();
		function Xy(e, t) {
			var n = ky(e, t);
			return By(n) ? n : void 0;
		}
		tu.exports = Xy;
	});
	var Sn = l((RM, nu) => {
		var Wy = nt(),
			Hy = Ge(),
			Yy = Wy(Hy, 'Map');
		nu.exports = Yy;
	});
	var Kt = l((wM, ru) => {
		var zy = nt(),
			Ky = zy(Object, 'create');
		ru.exports = Ky;
	});
	var ou = l((LM, au) => {
		var iu = Kt();
		function jy() {
			(this.__data__ = iu ? iu(null) : {}), (this.size = 0);
		}
		au.exports = jy;
	});
	var uu = l((CM, su) => {
		function Qy(e) {
			var t = this.has(e) && delete this.__data__[e];
			return (this.size -= t ? 1 : 0), t;
		}
		su.exports = Qy;
	});
	var lu = l((NM, cu) => {
		var $y = Kt(),
			Zy = '__lodash_hash_undefined__',
			Jy = Object.prototype,
			eI = Jy.hasOwnProperty;
		function tI(e) {
			var t = this.__data__;
			if ($y) {
				var n = t[e];
				return n === Zy ? void 0 : n;
			}
			return eI.call(t, e) ? t[e] : void 0;
		}
		cu.exports = tI;
	});
	var du = l((PM, fu) => {
		var nI = Kt(),
			rI = Object.prototype,
			iI = rI.hasOwnProperty;
		function aI(e) {
			var t = this.__data__;
			return nI ? t[e] !== void 0 : iI.call(t, e);
		}
		fu.exports = aI;
	});
	var gu = l((DM, pu) => {
		var oI = Kt(),
			sI = '__lodash_hash_undefined__';
		function uI(e, t) {
			var n = this.__data__;
			return (this.size += this.has(e) ? 0 : 1), (n[e] = oI && t === void 0 ? sI : t), this;
		}
		pu.exports = uI;
	});
	var hu = l((MM, Eu) => {
		var cI = ou(),
			lI = uu(),
			fI = lu(),
			dI = du(),
			pI = gu();
		function St(e) {
			var t = -1,
				n = e == null ? 0 : e.length;
			for (this.clear(); ++t < n; ) {
				var r = e[t];
				this.set(r[0], r[1]);
			}
		}
		St.prototype.clear = cI;
		St.prototype.delete = lI;
		St.prototype.get = fI;
		St.prototype.has = dI;
		St.prototype.set = pI;
		Eu.exports = St;
	});
	var yu = l((xM, _u) => {
		var vu = hu(),
			gI = zt(),
			EI = Sn();
		function hI() {
			(this.size = 0),
				(this.__data__ = { hash: new vu(), map: new (EI || gI)(), string: new vu() });
		}
		_u.exports = hI;
	});
	var Tu = l((FM, Iu) => {
		function vI(e) {
			var t = typeof e;
			return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
				? e !== '__proto__'
				: e === null;
		}
		Iu.exports = vI;
	});
	var jt = l((qM, bu) => {
		var _I = Tu();
		function yI(e, t) {
			var n = e.__data__;
			return _I(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
		}
		bu.exports = yI;
	});
	var Ou = l((GM, mu) => {
		var II = jt();
		function TI(e) {
			var t = II(this, e).delete(e);
			return (this.size -= t ? 1 : 0), t;
		}
		mu.exports = TI;
	});
	var Su = l((VM, Au) => {
		var bI = jt();
		function mI(e) {
			return bI(this, e).get(e);
		}
		Au.exports = mI;
	});
	var wu = l((UM, Ru) => {
		var OI = jt();
		function AI(e) {
			return OI(this, e).has(e);
		}
		Ru.exports = AI;
	});
	var Cu = l((BM, Lu) => {
		var SI = jt();
		function RI(e, t) {
			var n = SI(this, e),
				r = n.size;
			return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
		}
		Lu.exports = RI;
	});
	var Rn = l((kM, Nu) => {
		var wI = yu(),
			LI = Ou(),
			CI = Su(),
			NI = wu(),
			PI = Cu();
		function Rt(e) {
			var t = -1,
				n = e == null ? 0 : e.length;
			for (this.clear(); ++t < n; ) {
				var r = e[t];
				this.set(r[0], r[1]);
			}
		}
		Rt.prototype.clear = wI;
		Rt.prototype.delete = LI;
		Rt.prototype.get = CI;
		Rt.prototype.has = NI;
		Rt.prototype.set = PI;
		Nu.exports = Rt;
	});
	var Du = l((XM, Pu) => {
		var DI = zt(),
			MI = Sn(),
			xI = Rn(),
			FI = 200;
		function qI(e, t) {
			var n = this.__data__;
			if (n instanceof DI) {
				var r = n.__data__;
				if (!MI || r.length < FI - 1) return r.push([e, t]), (this.size = ++n.size), this;
				n = this.__data__ = new xI(r);
			}
			return n.set(e, t), (this.size = n.size), this;
		}
		Pu.exports = qI;
	});
	var ii = l((WM, Mu) => {
		var GI = zt(),
			VI = Fs(),
			UI = Gs(),
			BI = Us(),
			kI = ks(),
			XI = Du();
		function wt(e) {
			var t = (this.__data__ = new GI(e));
			this.size = t.size;
		}
		wt.prototype.clear = VI;
		wt.prototype.delete = UI;
		wt.prototype.get = BI;
		wt.prototype.has = kI;
		wt.prototype.set = XI;
		Mu.exports = wt;
	});
	var Fu = l((HM, xu) => {
		var WI = '__lodash_hash_undefined__';
		function HI(e) {
			return this.__data__.set(e, WI), this;
		}
		xu.exports = HI;
	});
	var Gu = l((YM, qu) => {
		function YI(e) {
			return this.__data__.has(e);
		}
		qu.exports = YI;
	});
	var Uu = l((zM, Vu) => {
		var zI = Rn(),
			KI = Fu(),
			jI = Gu();
		function wn(e) {
			var t = -1,
				n = e == null ? 0 : e.length;
			for (this.__data__ = new zI(); ++t < n; ) this.add(e[t]);
		}
		wn.prototype.add = wn.prototype.push = KI;
		wn.prototype.has = jI;
		Vu.exports = wn;
	});
	var ku = l((KM, Bu) => {
		function QI(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
			return !1;
		}
		Bu.exports = QI;
	});
	var Wu = l((jM, Xu) => {
		function $I(e, t) {
			return e.has(t);
		}
		Xu.exports = $I;
	});
	var ai = l((QM, Hu) => {
		var ZI = Uu(),
			JI = ku(),
			eT = Wu(),
			tT = 1,
			nT = 2;
		function rT(e, t, n, r, a, i) {
			var o = n & tT,
				s = e.length,
				u = t.length;
			if (s != u && !(o && u > s)) return !1;
			var f = i.get(e),
				v = i.get(t);
			if (f && v) return f == t && v == e;
			var g = -1,
				p = !0,
				E = n & nT ? new ZI() : void 0;
			for (i.set(e, t), i.set(t, e); ++g < s; ) {
				var b = e[g],
					I = t[g];
				if (r) var O = o ? r(I, b, g, t, e, i) : r(b, I, g, e, t, i);
				if (O !== void 0) {
					if (O) continue;
					p = !1;
					break;
				}
				if (E) {
					if (
						!JI(t, function (_, S) {
							if (!eT(E, S) && (b === _ || a(b, _, n, r, i))) return E.push(S);
						})
					) {
						p = !1;
						break;
					}
				} else if (!(b === I || a(b, I, n, r, i))) {
					p = !1;
					break;
				}
			}
			return i.delete(e), i.delete(t), p;
		}
		Hu.exports = rT;
	});
	var zu = l(($M, Yu) => {
		var iT = Ge(),
			aT = iT.Uint8Array;
		Yu.exports = aT;
	});
	var ju = l((ZM, Ku) => {
		function oT(e) {
			var t = -1,
				n = Array(e.size);
			return (
				e.forEach(function (r, a) {
					n[++t] = [a, r];
				}),
				n
			);
		}
		Ku.exports = oT;
	});
	var $u = l((JM, Qu) => {
		function sT(e) {
			var t = -1,
				n = Array(e.size);
			return (
				e.forEach(function (r) {
					n[++t] = r;
				}),
				n
			);
		}
		Qu.exports = sT;
	});
	var nc = l((ex, tc) => {
		var Zu = Tt(),
			Ju = zu(),
			uT = An(),
			cT = ai(),
			lT = ju(),
			fT = $u(),
			dT = 1,
			pT = 2,
			gT = '[object Boolean]',
			ET = '[object Date]',
			hT = '[object Error]',
			vT = '[object Map]',
			_T = '[object Number]',
			yT = '[object RegExp]',
			IT = '[object Set]',
			TT = '[object String]',
			bT = '[object Symbol]',
			mT = '[object ArrayBuffer]',
			OT = '[object DataView]',
			ec = Zu ? Zu.prototype : void 0,
			oi = ec ? ec.valueOf : void 0;
		function AT(e, t, n, r, a, i, o) {
			switch (n) {
				case OT:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					(e = e.buffer), (t = t.buffer);
				case mT:
					return !(e.byteLength != t.byteLength || !i(new Ju(e), new Ju(t)));
				case gT:
				case ET:
				case _T:
					return uT(+e, +t);
				case hT:
					return e.name == t.name && e.message == t.message;
				case yT:
				case TT:
					return e == t + '';
				case vT:
					var s = lT;
				case IT:
					var u = r & dT;
					if ((s || (s = fT), e.size != t.size && !u)) return !1;
					var f = o.get(e);
					if (f) return f == t;
					(r |= pT), o.set(e, t);
					var v = cT(s(e), s(t), r, a, i, o);
					return o.delete(e), v;
				case bT:
					if (oi) return oi.call(e) == oi.call(t);
			}
			return !1;
		}
		tc.exports = AT;
	});
	var Ln = l((tx, rc) => {
		function ST(e, t) {
			for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
			return e;
		}
		rc.exports = ST;
	});
	var Te = l((nx, ic) => {
		var RT = Array.isArray;
		ic.exports = RT;
	});
	var si = l((rx, ac) => {
		var wT = Ln(),
			LT = Te();
		function CT(e, t, n) {
			var r = t(e);
			return LT(e) ? r : wT(r, n(e));
		}
		ac.exports = CT;
	});
	var sc = l((ix, oc) => {
		function NT(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
				var o = e[n];
				t(o, n, e) && (i[a++] = o);
			}
			return i;
		}
		oc.exports = NT;
	});
	var ui = l((ax, uc) => {
		function PT() {
			return [];
		}
		uc.exports = PT;
	});
	var ci = l((ox, lc) => {
		var DT = sc(),
			MT = ui(),
			xT = Object.prototype,
			FT = xT.propertyIsEnumerable,
			cc = Object.getOwnPropertySymbols,
			qT = cc
				? function (e) {
						return e == null
							? []
							: ((e = Object(e)),
								DT(cc(e), function (t) {
									return FT.call(e, t);
								}));
					}
				: MT;
		lc.exports = qT;
	});
	var dc = l((sx, fc) => {
		function GT(e, t) {
			for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
			return r;
		}
		fc.exports = GT;
	});
	var gc = l((ux, pc) => {
		var VT = tt(),
			UT = Qe(),
			BT = '[object Arguments]';
		function kT(e) {
			return UT(e) && VT(e) == BT;
		}
		pc.exports = kT;
	});
	var Qt = l((cx, vc) => {
		var Ec = gc(),
			XT = Qe(),
			hc = Object.prototype,
			WT = hc.hasOwnProperty,
			HT = hc.propertyIsEnumerable,
			YT = Ec(
				(function () {
					return arguments;
				})()
			)
				? Ec
				: function (e) {
						return XT(e) && WT.call(e, 'callee') && !HT.call(e, 'callee');
					};
		vc.exports = YT;
	});
	var yc = l((lx, _c) => {
		function zT() {
			return !1;
		}
		_c.exports = zT;
	});
	var Cn = l(($t, Lt) => {
		var KT = Ge(),
			jT = yc(),
			bc = typeof $t == 'object' && $t && !$t.nodeType && $t,
			Ic = bc && typeof Lt == 'object' && Lt && !Lt.nodeType && Lt,
			QT = Ic && Ic.exports === bc,
			Tc = QT ? KT.Buffer : void 0,
			$T = Tc ? Tc.isBuffer : void 0,
			ZT = $T || jT;
		Lt.exports = ZT;
	});
	var Nn = l((fx, mc) => {
		var JT = 9007199254740991,
			eb = /^(?:0|[1-9]\d*)$/;
		function tb(e, t) {
			var n = typeof e;
			return (
				(t = t ?? JT),
				!!t && (n == 'number' || (n != 'symbol' && eb.test(e))) && e > -1 && e % 1 == 0 && e < t
			);
		}
		mc.exports = tb;
	});
	var Pn = l((dx, Oc) => {
		var nb = 9007199254740991;
		function rb(e) {
			return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= nb;
		}
		Oc.exports = rb;
	});
	var Sc = l((px, Ac) => {
		var ib = tt(),
			ab = Pn(),
			ob = Qe(),
			sb = '[object Arguments]',
			ub = '[object Array]',
			cb = '[object Boolean]',
			lb = '[object Date]',
			fb = '[object Error]',
			db = '[object Function]',
			pb = '[object Map]',
			gb = '[object Number]',
			Eb = '[object Object]',
			hb = '[object RegExp]',
			vb = '[object Set]',
			_b = '[object String]',
			yb = '[object WeakMap]',
			Ib = '[object ArrayBuffer]',
			Tb = '[object DataView]',
			bb = '[object Float32Array]',
			mb = '[object Float64Array]',
			Ob = '[object Int8Array]',
			Ab = '[object Int16Array]',
			Sb = '[object Int32Array]',
			Rb = '[object Uint8Array]',
			wb = '[object Uint8ClampedArray]',
			Lb = '[object Uint16Array]',
			Cb = '[object Uint32Array]',
			de = {};
		de[bb] = de[mb] = de[Ob] = de[Ab] = de[Sb] = de[Rb] = de[wb] = de[Lb] = de[Cb] = !0;
		de[sb] =
			de[ub] =
			de[Ib] =
			de[cb] =
			de[Tb] =
			de[lb] =
			de[fb] =
			de[db] =
			de[pb] =
			de[gb] =
			de[Eb] =
			de[hb] =
			de[vb] =
			de[_b] =
			de[yb] =
				!1;
		function Nb(e) {
			return ob(e) && ab(e.length) && !!de[ib(e)];
		}
		Ac.exports = Nb;
	});
	var wc = l((gx, Rc) => {
		function Pb(e) {
			return function (t) {
				return e(t);
			};
		}
		Rc.exports = Pb;
	});
	var Cc = l((Zt, Ct) => {
		var Db = wr(),
			Lc = typeof Zt == 'object' && Zt && !Zt.nodeType && Zt,
			Jt = Lc && typeof Ct == 'object' && Ct && !Ct.nodeType && Ct,
			Mb = Jt && Jt.exports === Lc,
			li = Mb && Db.process,
			xb = (function () {
				try {
					var e = Jt && Jt.require && Jt.require('util').types;
					return e || (li && li.binding && li.binding('util'));
				} catch {}
			})();
		Ct.exports = xb;
	});
	var Dn = l((Ex, Dc) => {
		var Fb = Sc(),
			qb = wc(),
			Nc = Cc(),
			Pc = Nc && Nc.isTypedArray,
			Gb = Pc ? qb(Pc) : Fb;
		Dc.exports = Gb;
	});
	var fi = l((hx, Mc) => {
		var Vb = dc(),
			Ub = Qt(),
			Bb = Te(),
			kb = Cn(),
			Xb = Nn(),
			Wb = Dn(),
			Hb = Object.prototype,
			Yb = Hb.hasOwnProperty;
		function zb(e, t) {
			var n = Bb(e),
				r = !n && Ub(e),
				a = !n && !r && kb(e),
				i = !n && !r && !a && Wb(e),
				o = n || r || a || i,
				s = o ? Vb(e.length, String) : [],
				u = s.length;
			for (var f in e)
				(t || Yb.call(e, f)) &&
					!(
						o &&
						(f == 'length' ||
							(a && (f == 'offset' || f == 'parent')) ||
							(i && (f == 'buffer' || f == 'byteLength' || f == 'byteOffset')) ||
							Xb(f, u))
					) &&
					s.push(f);
			return s;
		}
		Mc.exports = zb;
	});
	var Mn = l((vx, xc) => {
		var Kb = Object.prototype;
		function jb(e) {
			var t = e && e.constructor,
				n = (typeof t == 'function' && t.prototype) || Kb;
			return e === n;
		}
		xc.exports = jb;
	});
	var qc = l((_x, Fc) => {
		var Qb = Lr(),
			$b = Qb(Object.keys, Object);
		Fc.exports = $b;
	});
	var xn = l((yx, Gc) => {
		var Zb = Mn(),
			Jb = qc(),
			em = Object.prototype,
			tm = em.hasOwnProperty;
		function nm(e) {
			if (!Zb(e)) return Jb(e);
			var t = [];
			for (var n in Object(e)) tm.call(e, n) && n != 'constructor' && t.push(n);
			return t;
		}
		Gc.exports = nm;
	});
	var lt = l((Ix, Vc) => {
		var rm = ti(),
			im = Pn();
		function am(e) {
			return e != null && im(e.length) && !rm(e);
		}
		Vc.exports = am;
	});
	var en = l((Tx, Uc) => {
		var om = fi(),
			sm = xn(),
			um = lt();
		function cm(e) {
			return um(e) ? om(e) : sm(e);
		}
		Uc.exports = cm;
	});
	var kc = l((bx, Bc) => {
		var lm = si(),
			fm = ci(),
			dm = en();
		function pm(e) {
			return lm(e, dm, fm);
		}
		Bc.exports = pm;
	});
	var Hc = l((mx, Wc) => {
		var Xc = kc(),
			gm = 1,
			Em = Object.prototype,
			hm = Em.hasOwnProperty;
		function vm(e, t, n, r, a, i) {
			var o = n & gm,
				s = Xc(e),
				u = s.length,
				f = Xc(t),
				v = f.length;
			if (u != v && !o) return !1;
			for (var g = u; g--; ) {
				var p = s[g];
				if (!(o ? p in t : hm.call(t, p))) return !1;
			}
			var E = i.get(e),
				b = i.get(t);
			if (E && b) return E == t && b == e;
			var I = !0;
			i.set(e, t), i.set(t, e);
			for (var O = o; ++g < u; ) {
				p = s[g];
				var _ = e[p],
					S = t[p];
				if (r) var A = o ? r(S, _, p, t, e, i) : r(_, S, p, e, t, i);
				if (!(A === void 0 ? _ === S || a(_, S, n, r, i) : A)) {
					I = !1;
					break;
				}
				O || (O = p == 'constructor');
			}
			if (I && !O) {
				var D = e.constructor,
					F = t.constructor;
				D != F &&
					'constructor' in e &&
					'constructor' in t &&
					!(typeof D == 'function' && D instanceof D && typeof F == 'function' && F instanceof F) &&
					(I = !1);
			}
			return i.delete(e), i.delete(t), I;
		}
		Wc.exports = vm;
	});
	var zc = l((Ox, Yc) => {
		var _m = nt(),
			ym = Ge(),
			Im = _m(ym, 'DataView');
		Yc.exports = Im;
	});
	var jc = l((Ax, Kc) => {
		var Tm = nt(),
			bm = Ge(),
			mm = Tm(bm, 'Promise');
		Kc.exports = mm;
	});
	var $c = l((Sx, Qc) => {
		var Om = nt(),
			Am = Ge(),
			Sm = Om(Am, 'Set');
		Qc.exports = Sm;
	});
	var di = l((Rx, Zc) => {
		var Rm = nt(),
			wm = Ge(),
			Lm = Rm(wm, 'WeakMap');
		Zc.exports = Lm;
	});
	var Fn = l((wx, al) => {
		var pi = zc(),
			gi = Sn(),
			Ei = jc(),
			hi = $c(),
			vi = di(),
			il = tt(),
			Nt = ri(),
			Jc = '[object Map]',
			Cm = '[object Object]',
			el = '[object Promise]',
			tl = '[object Set]',
			nl = '[object WeakMap]',
			rl = '[object DataView]',
			Nm = Nt(pi),
			Pm = Nt(gi),
			Dm = Nt(Ei),
			Mm = Nt(hi),
			xm = Nt(vi),
			ft = il;
		((pi && ft(new pi(new ArrayBuffer(1))) != rl) ||
			(gi && ft(new gi()) != Jc) ||
			(Ei && ft(Ei.resolve()) != el) ||
			(hi && ft(new hi()) != tl) ||
			(vi && ft(new vi()) != nl)) &&
			(ft = function (e) {
				var t = il(e),
					n = t == Cm ? e.constructor : void 0,
					r = n ? Nt(n) : '';
				if (r)
					switch (r) {
						case Nm:
							return rl;
						case Pm:
							return Jc;
						case Dm:
							return el;
						case Mm:
							return tl;
						case xm:
							return nl;
					}
				return t;
			});
		al.exports = ft;
	});
	var pl = l((Lx, dl) => {
		var _i = ii(),
			Fm = ai(),
			qm = nc(),
			Gm = Hc(),
			ol = Fn(),
			sl = Te(),
			ul = Cn(),
			Vm = Dn(),
			Um = 1,
			cl = '[object Arguments]',
			ll = '[object Array]',
			qn = '[object Object]',
			Bm = Object.prototype,
			fl = Bm.hasOwnProperty;
		function km(e, t, n, r, a, i) {
			var o = sl(e),
				s = sl(t),
				u = o ? ll : ol(e),
				f = s ? ll : ol(t);
			(u = u == cl ? qn : u), (f = f == cl ? qn : f);
			var v = u == qn,
				g = f == qn,
				p = u == f;
			if (p && ul(e)) {
				if (!ul(t)) return !1;
				(o = !0), (v = !1);
			}
			if (p && !v)
				return i || (i = new _i()), o || Vm(e) ? Fm(e, t, n, r, a, i) : qm(e, t, u, n, r, a, i);
			if (!(n & Um)) {
				var E = v && fl.call(e, '__wrapped__'),
					b = g && fl.call(t, '__wrapped__');
				if (E || b) {
					var I = E ? e.value() : e,
						O = b ? t.value() : t;
					return i || (i = new _i()), a(I, O, n, r, i);
				}
			}
			return p ? (i || (i = new _i()), Gm(e, t, n, r, a, i)) : !1;
		}
		dl.exports = km;
	});
	var yi = l((Cx, hl) => {
		var Xm = pl(),
			gl = Qe();
		function El(e, t, n, r, a) {
			return e === t
				? !0
				: e == null || t == null || (!gl(e) && !gl(t))
					? e !== e && t !== t
					: Xm(e, t, n, r, El, a);
		}
		hl.exports = El;
	});
	var _l = l((Nx, vl) => {
		var Wm = ii(),
			Hm = yi(),
			Ym = 1,
			zm = 2;
		function Km(e, t, n, r) {
			var a = n.length,
				i = a,
				o = !r;
			if (e == null) return !i;
			for (e = Object(e); a--; ) {
				var s = n[a];
				if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
			}
			for (; ++a < i; ) {
				s = n[a];
				var u = s[0],
					f = e[u],
					v = s[1];
				if (o && s[2]) {
					if (f === void 0 && !(u in e)) return !1;
				} else {
					var g = new Wm();
					if (r) var p = r(f, v, u, e, t, g);
					if (!(p === void 0 ? Hm(v, f, Ym | zm, r, g) : p)) return !1;
				}
			}
			return !0;
		}
		vl.exports = Km;
	});
	var Ii = l((Px, yl) => {
		var jm = We();
		function Qm(e) {
			return e === e && !jm(e);
		}
		yl.exports = Qm;
	});
	var Tl = l((Dx, Il) => {
		var $m = Ii(),
			Zm = en();
		function Jm(e) {
			for (var t = Zm(e), n = t.length; n--; ) {
				var r = t[n],
					a = e[r];
				t[n] = [r, a, $m(a)];
			}
			return t;
		}
		Il.exports = Jm;
	});
	var Ti = l((Mx, bl) => {
		function eO(e, t) {
			return function (n) {
				return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
			};
		}
		bl.exports = eO;
	});
	var Ol = l((xx, ml) => {
		var tO = _l(),
			nO = Tl(),
			rO = Ti();
		function iO(e) {
			var t = nO(e);
			return t.length == 1 && t[0][2]
				? rO(t[0][0], t[0][1])
				: function (n) {
						return n === e || tO(n, e, t);
					};
		}
		ml.exports = iO;
	});
	var tn = l((Fx, Al) => {
		var aO = tt(),
			oO = Qe(),
			sO = '[object Symbol]';
		function uO(e) {
			return typeof e == 'symbol' || (oO(e) && aO(e) == sO);
		}
		Al.exports = uO;
	});
	var Gn = l((qx, Sl) => {
		var cO = Te(),
			lO = tn(),
			fO = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			dO = /^\w*$/;
		function pO(e, t) {
			if (cO(e)) return !1;
			var n = typeof e;
			return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || lO(e)
				? !0
				: dO.test(e) || !fO.test(e) || (t != null && e in Object(t));
		}
		Sl.exports = pO;
	});
	var Ll = l((Gx, wl) => {
		var Rl = Rn(),
			gO = 'Expected a function';
		function bi(e, t) {
			if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(gO);
			var n = function () {
				var r = arguments,
					a = t ? t.apply(this, r) : r[0],
					i = n.cache;
				if (i.has(a)) return i.get(a);
				var o = e.apply(this, r);
				return (n.cache = i.set(a, o) || i), o;
			};
			return (n.cache = new (bi.Cache || Rl)()), n;
		}
		bi.Cache = Rl;
		wl.exports = bi;
	});
	var Nl = l((Vx, Cl) => {
		var EO = Ll(),
			hO = 500;
		function vO(e) {
			var t = EO(e, function (r) {
					return n.size === hO && n.clear(), r;
				}),
				n = t.cache;
			return t;
		}
		Cl.exports = vO;
	});
	var Dl = l((Ux, Pl) => {
		var _O = Nl(),
			yO =
				/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			IO = /\\(\\)?/g,
			TO = _O(function (e) {
				var t = [];
				return (
					e.charCodeAt(0) === 46 && t.push(''),
					e.replace(yO, function (n, r, a, i) {
						t.push(a ? i.replace(IO, '$1') : r || n);
					}),
					t
				);
			});
		Pl.exports = TO;
	});
	var mi = l((Bx, Ml) => {
		function bO(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; ) a[n] = t(e[n], n, e);
			return a;
		}
		Ml.exports = bO;
	});
	var Ul = l((kx, Vl) => {
		var xl = Tt(),
			mO = mi(),
			OO = Te(),
			AO = tn(),
			SO = 1 / 0,
			Fl = xl ? xl.prototype : void 0,
			ql = Fl ? Fl.toString : void 0;
		function Gl(e) {
			if (typeof e == 'string') return e;
			if (OO(e)) return mO(e, Gl) + '';
			if (AO(e)) return ql ? ql.call(e) : '';
			var t = e + '';
			return t == '0' && 1 / e == -SO ? '-0' : t;
		}
		Vl.exports = Gl;
	});
	var kl = l((Xx, Bl) => {
		var RO = Ul();
		function wO(e) {
			return e == null ? '' : RO(e);
		}
		Bl.exports = wO;
	});
	var nn = l((Wx, Xl) => {
		var LO = Te(),
			CO = Gn(),
			NO = Dl(),
			PO = kl();
		function DO(e, t) {
			return LO(e) ? e : CO(e, t) ? [e] : NO(PO(e));
		}
		Xl.exports = DO;
	});
	var Pt = l((Hx, Wl) => {
		var MO = tn(),
			xO = 1 / 0;
		function FO(e) {
			if (typeof e == 'string' || MO(e)) return e;
			var t = e + '';
			return t == '0' && 1 / e == -xO ? '-0' : t;
		}
		Wl.exports = FO;
	});
	var Vn = l((Yx, Hl) => {
		var qO = nn(),
			GO = Pt();
		function VO(e, t) {
			t = qO(t, e);
			for (var n = 0, r = t.length; e != null && n < r; ) e = e[GO(t[n++])];
			return n && n == r ? e : void 0;
		}
		Hl.exports = VO;
	});
	var Un = l((zx, Yl) => {
		var UO = Vn();
		function BO(e, t, n) {
			var r = e == null ? void 0 : UO(e, t);
			return r === void 0 ? n : r;
		}
		Yl.exports = BO;
	});
	var Kl = l((Kx, zl) => {
		function kO(e, t) {
			return e != null && t in Object(e);
		}
		zl.exports = kO;
	});
	var Ql = l((jx, jl) => {
		var XO = nn(),
			WO = Qt(),
			HO = Te(),
			YO = Nn(),
			zO = Pn(),
			KO = Pt();
		function jO(e, t, n) {
			t = XO(t, e);
			for (var r = -1, a = t.length, i = !1; ++r < a; ) {
				var o = KO(t[r]);
				if (!(i = e != null && n(e, o))) break;
				e = e[o];
			}
			return i || ++r != a
				? i
				: ((a = e == null ? 0 : e.length), !!a && zO(a) && YO(o, a) && (HO(e) || WO(e)));
		}
		jl.exports = jO;
	});
	var Zl = l((Qx, $l) => {
		var QO = Kl(),
			$O = Ql();
		function ZO(e, t) {
			return e != null && $O(e, t, QO);
		}
		$l.exports = ZO;
	});
	var ef = l(($x, Jl) => {
		var JO = yi(),
			eA = Un(),
			tA = Zl(),
			nA = Gn(),
			rA = Ii(),
			iA = Ti(),
			aA = Pt(),
			oA = 1,
			sA = 2;
		function uA(e, t) {
			return nA(e) && rA(t)
				? iA(aA(e), t)
				: function (n) {
						var r = eA(n, e);
						return r === void 0 && r === t ? tA(n, e) : JO(t, r, oA | sA);
					};
		}
		Jl.exports = uA;
	});
	var Bn = l((Zx, tf) => {
		function cA(e) {
			return e;
		}
		tf.exports = cA;
	});
	var Oi = l((Jx, nf) => {
		function lA(e) {
			return function (t) {
				return t?.[e];
			};
		}
		nf.exports = lA;
	});
	var af = l((eF, rf) => {
		var fA = Vn();
		function dA(e) {
			return function (t) {
				return fA(t, e);
			};
		}
		rf.exports = dA;
	});
	var sf = l((tF, of) => {
		var pA = Oi(),
			gA = af(),
			EA = Gn(),
			hA = Pt();
		function vA(e) {
			return EA(e) ? pA(hA(e)) : gA(e);
		}
		of.exports = vA;
	});
	var rt = l((nF, uf) => {
		var _A = Ol(),
			yA = ef(),
			IA = Bn(),
			TA = Te(),
			bA = sf();
		function mA(e) {
			return typeof e == 'function'
				? e
				: e == null
					? IA
					: typeof e == 'object'
						? TA(e)
							? yA(e[0], e[1])
							: _A(e)
						: bA(e);
		}
		uf.exports = mA;
	});
	var Ai = l((rF, cf) => {
		var OA = rt(),
			AA = lt(),
			SA = en();
		function RA(e) {
			return function (t, n, r) {
				var a = Object(t);
				if (!AA(t)) {
					var i = OA(n, 3);
					(t = SA(t)),
						(n = function (s) {
							return i(a[s], s, a);
						});
				}
				var o = e(t, n, r);
				return o > -1 ? a[i ? t[o] : o] : void 0;
			};
		}
		cf.exports = RA;
	});
	var Si = l((iF, lf) => {
		function wA(e, t, n, r) {
			for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a; ) if (t(e[i], i, e)) return i;
			return -1;
		}
		lf.exports = wA;
	});
	var df = l((aF, ff) => {
		var LA = /\s/;
		function CA(e) {
			for (var t = e.length; t-- && LA.test(e.charAt(t)); );
			return t;
		}
		ff.exports = CA;
	});
	var gf = l((oF, pf) => {
		var NA = df(),
			PA = /^\s+/;
		function DA(e) {
			return e && e.slice(0, NA(e) + 1).replace(PA, '');
		}
		pf.exports = DA;
	});
	var kn = l((sF, vf) => {
		var MA = gf(),
			Ef = We(),
			xA = tn(),
			hf = 0 / 0,
			FA = /^[-+]0x[0-9a-f]+$/i,
			qA = /^0b[01]+$/i,
			GA = /^0o[0-7]+$/i,
			VA = parseInt;
		function UA(e) {
			if (typeof e == 'number') return e;
			if (xA(e)) return hf;
			if (Ef(e)) {
				var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
				e = Ef(t) ? t + '' : t;
			}
			if (typeof e != 'string') return e === 0 ? e : +e;
			e = MA(e);
			var n = qA.test(e);
			return n || GA.test(e) ? VA(e.slice(2), n ? 2 : 8) : FA.test(e) ? hf : +e;
		}
		vf.exports = UA;
	});
	var If = l((uF, yf) => {
		var BA = kn(),
			_f = 1 / 0,
			kA = 17976931348623157e292;
		function XA(e) {
			if (!e) return e === 0 ? e : 0;
			if (((e = BA(e)), e === _f || e === -_f)) {
				var t = e < 0 ? -1 : 1;
				return t * kA;
			}
			return e === e ? e : 0;
		}
		yf.exports = XA;
	});
	var Ri = l((cF, Tf) => {
		var WA = If();
		function HA(e) {
			var t = WA(e),
				n = t % 1;
			return t === t ? (n ? t - n : t) : 0;
		}
		Tf.exports = HA;
	});
	var mf = l((lF, bf) => {
		var YA = Si(),
			zA = rt(),
			KA = Ri(),
			jA = Math.max;
		function QA(e, t, n) {
			var r = e == null ? 0 : e.length;
			if (!r) return -1;
			var a = n == null ? 0 : KA(n);
			return a < 0 && (a = jA(r + a, 0)), YA(e, zA(t, 3), a);
		}
		bf.exports = QA;
	});
	var wi = l((fF, Of) => {
		var $A = Ai(),
			ZA = mf(),
			JA = $A(ZA);
		Of.exports = JA;
	});
	var Wn = l((Li) => {
		'use strict';
		Object.defineProperty(Li, '__esModule', { value: !0 });
		function e1(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		e1(Li, {
			ELEMENT_MATCHES: function () {
				return r1;
			},
			FLEX_PREFIXED: function () {
				return i1;
			},
			IS_BROWSER_ENV: function () {
				return Sf;
			},
			TRANSFORM_PREFIXED: function () {
				return Rf;
			},
			TRANSFORM_STYLE_PREFIXED: function () {
				return a1;
			},
			withBrowser: function () {
				return Xn;
			}
		});
		var t1 = n1(wi());
		function n1(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var Sf = typeof window < 'u',
			Xn = (e, t) => (Sf ? e() : t),
			r1 = Xn(() =>
				(0, t1.default)(
					[
						'matches',
						'matchesSelector',
						'mozMatchesSelector',
						'msMatchesSelector',
						'oMatchesSelector',
						'webkitMatchesSelector'
					],
					(e) => e in Element.prototype
				)
			),
			i1 = Xn(() => {
				let e = document.createElement('i'),
					t = ['flex', '-webkit-flex', '-ms-flexbox', '-moz-box', '-webkit-box'],
					n = '';
				try {
					let { length: r } = t;
					for (let a = 0; a < r; a++) {
						let i = t[a];
						if (((e.style.display = i), e.style.display === i)) return i;
					}
					return n;
				} catch {
					return n;
				}
			}, 'flex'),
			Rf = Xn(() => {
				let e = document.createElement('i');
				if (e.style.transform == null) {
					let t = ['Webkit', 'Moz', 'ms'],
						n = 'Transform',
						{ length: r } = t;
					for (let a = 0; a < r; a++) {
						let i = t[a] + n;
						if (e.style[i] !== void 0) return i;
					}
				}
				return 'transform';
			}, 'transform'),
			Af = Rf.split('transform')[0],
			a1 = Af ? Af + 'TransformStyle' : 'transformStyle';
	});
	var Ci = l((pF, Pf) => {
		var o1 = 4,
			s1 = 0.001,
			u1 = 1e-7,
			c1 = 10,
			rn = 11,
			Hn = 1 / (rn - 1),
			l1 = typeof Float32Array == 'function';
		function wf(e, t) {
			return 1 - 3 * t + 3 * e;
		}
		function Lf(e, t) {
			return 3 * t - 6 * e;
		}
		function Cf(e) {
			return 3 * e;
		}
		function Yn(e, t, n) {
			return ((wf(t, n) * e + Lf(t, n)) * e + Cf(t)) * e;
		}
		function Nf(e, t, n) {
			return 3 * wf(t, n) * e * e + 2 * Lf(t, n) * e + Cf(t);
		}
		function f1(e, t, n, r, a) {
			var i,
				o,
				s = 0;
			do (o = t + (n - t) / 2), (i = Yn(o, r, a) - e), i > 0 ? (n = o) : (t = o);
			while (Math.abs(i) > u1 && ++s < c1);
			return o;
		}
		function d1(e, t, n, r) {
			for (var a = 0; a < o1; ++a) {
				var i = Nf(t, n, r);
				if (i === 0) return t;
				var o = Yn(t, n, r) - e;
				t -= o / i;
			}
			return t;
		}
		Pf.exports = function (t, n, r, a) {
			if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
				throw new Error('bezier x values must be in [0, 1] range');
			var i = l1 ? new Float32Array(rn) : new Array(rn);
			if (t !== n || r !== a) for (var o = 0; o < rn; ++o) i[o] = Yn(o * Hn, t, r);
			function s(u) {
				for (var f = 0, v = 1, g = rn - 1; v !== g && i[v] <= u; ++v) f += Hn;
				--v;
				var p = (u - i[v]) / (i[v + 1] - i[v]),
					E = f + p * Hn,
					b = Nf(E, t, r);
				return b >= s1 ? d1(u, E, t, r) : b === 0 ? E : f1(u, f, f + Hn, t, r);
			}
			return function (f) {
				return t === n && r === a ? f : f === 0 ? 0 : f === 1 ? 1 : Yn(s(f), n, a);
			};
		};
	});
	var Pi = l((Ni) => {
		'use strict';
		Object.defineProperty(Ni, '__esModule', { value: !0 });
		function p1(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		p1(Ni, {
			bounce: function () {
				return Q1;
			},
			bouncePast: function () {
				return $1;
			},
			ease: function () {
				return E1;
			},
			easeIn: function () {
				return h1;
			},
			easeInOut: function () {
				return _1;
			},
			easeOut: function () {
				return v1;
			},
			inBack: function () {
				return B1;
			},
			inCirc: function () {
				return q1;
			},
			inCubic: function () {
				return b1;
			},
			inElastic: function () {
				return W1;
			},
			inExpo: function () {
				return M1;
			},
			inOutBack: function () {
				return X1;
			},
			inOutCirc: function () {
				return V1;
			},
			inOutCubic: function () {
				return O1;
			},
			inOutElastic: function () {
				return Y1;
			},
			inOutExpo: function () {
				return F1;
			},
			inOutQuad: function () {
				return T1;
			},
			inOutQuart: function () {
				return R1;
			},
			inOutQuint: function () {
				return C1;
			},
			inOutSine: function () {
				return D1;
			},
			inQuad: function () {
				return y1;
			},
			inQuart: function () {
				return A1;
			},
			inQuint: function () {
				return w1;
			},
			inSine: function () {
				return N1;
			},
			outBack: function () {
				return k1;
			},
			outBounce: function () {
				return U1;
			},
			outCirc: function () {
				return G1;
			},
			outCubic: function () {
				return m1;
			},
			outElastic: function () {
				return H1;
			},
			outExpo: function () {
				return x1;
			},
			outQuad: function () {
				return I1;
			},
			outQuart: function () {
				return S1;
			},
			outQuint: function () {
				return L1;
			},
			outSine: function () {
				return P1;
			},
			swingFrom: function () {
				return K1;
			},
			swingFromTo: function () {
				return z1;
			},
			swingTo: function () {
				return j1;
			}
		});
		var zn = g1(Ci());
		function g1(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var $e = 1.70158,
			E1 = (0, zn.default)(0.25, 0.1, 0.25, 1),
			h1 = (0, zn.default)(0.42, 0, 1, 1),
			v1 = (0, zn.default)(0, 0, 0.58, 1),
			_1 = (0, zn.default)(0.42, 0, 0.58, 1);
		function y1(e) {
			return Math.pow(e, 2);
		}
		function I1(e) {
			return -(Math.pow(e - 1, 2) - 1);
		}
		function T1(e) {
			return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
		}
		function b1(e) {
			return Math.pow(e, 3);
		}
		function m1(e) {
			return Math.pow(e - 1, 3) + 1;
		}
		function O1(e) {
			return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
		}
		function A1(e) {
			return Math.pow(e, 4);
		}
		function S1(e) {
			return -(Math.pow(e - 1, 4) - 1);
		}
		function R1(e) {
			return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
		}
		function w1(e) {
			return Math.pow(e, 5);
		}
		function L1(e) {
			return Math.pow(e - 1, 5) + 1;
		}
		function C1(e) {
			return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
		}
		function N1(e) {
			return -Math.cos(e * (Math.PI / 2)) + 1;
		}
		function P1(e) {
			return Math.sin(e * (Math.PI / 2));
		}
		function D1(e) {
			return -0.5 * (Math.cos(Math.PI * e) - 1);
		}
		function M1(e) {
			return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
		}
		function x1(e) {
			return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
		}
		function F1(e) {
			return e === 0
				? 0
				: e === 1
					? 1
					: (e /= 0.5) < 1
						? 0.5 * Math.pow(2, 10 * (e - 1))
						: 0.5 * (-Math.pow(2, -10 * --e) + 2);
		}
		function q1(e) {
			return -(Math.sqrt(1 - e * e) - 1);
		}
		function G1(e) {
			return Math.sqrt(1 - Math.pow(e - 1, 2));
		}
		function V1(e) {
			return (e /= 0.5) < 1
				? -0.5 * (Math.sqrt(1 - e * e) - 1)
				: 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
		}
		function U1(e) {
			return e < 1 / 2.75
				? 7.5625 * e * e
				: e < 2 / 2.75
					? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
					: e < 2.5 / 2.75
						? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
						: 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
		}
		function B1(e) {
			let t = $e;
			return e * e * ((t + 1) * e - t);
		}
		function k1(e) {
			let t = $e;
			return (e -= 1) * e * ((t + 1) * e + t) + 1;
		}
		function X1(e) {
			let t = $e;
			return (e /= 0.5) < 1
				? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
				: 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
		}
		function W1(e) {
			let t = $e,
				n = 0,
				r = 1;
			return e === 0
				? 0
				: e === 1
					? 1
					: (n || (n = 0.3),
						r < 1 ? ((r = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
						-(r * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / n)));
		}
		function H1(e) {
			let t = $e,
				n = 0,
				r = 1;
			return e === 0
				? 0
				: e === 1
					? 1
					: (n || (n = 0.3),
						r < 1 ? ((r = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
						r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) + 1);
		}
		function Y1(e) {
			let t = $e,
				n = 0,
				r = 1;
			return e === 0
				? 0
				: (e /= 1 / 2) === 2
					? 1
					: (n || (n = 0.3 * 1.5),
						r < 1 ? ((r = 1), (t = n / 4)) : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
						e < 1
							? -0.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / n))
							: r * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / n) * 0.5 +
								1);
		}
		function z1(e) {
			let t = $e;
			return (e /= 0.5) < 1
				? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
				: 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
		}
		function K1(e) {
			let t = $e;
			return e * e * ((t + 1) * e - t);
		}
		function j1(e) {
			let t = $e;
			return (e -= 1) * e * ((t + 1) * e + t) + 1;
		}
		function Q1(e) {
			return e < 1 / 2.75
				? 7.5625 * e * e
				: e < 2 / 2.75
					? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
					: e < 2.5 / 2.75
						? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
						: 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
		}
		function $1(e) {
			return e < 1 / 2.75
				? 7.5625 * e * e
				: e < 2 / 2.75
					? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
					: e < 2.5 / 2.75
						? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
						: 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
		}
	});
	var xi = l((Mi) => {
		'use strict';
		Object.defineProperty(Mi, '__esModule', { value: !0 });
		function Z1(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		Z1(Mi, {
			applyEasing: function () {
				return rS;
			},
			createBezierEasing: function () {
				return nS;
			},
			optimizeFloat: function () {
				return Di;
			}
		});
		var Df = tS(Pi()),
			J1 = eS(Ci());
		function eS(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function Mf(e) {
			if (typeof WeakMap != 'function') return null;
			var t = new WeakMap(),
				n = new WeakMap();
			return (Mf = function (r) {
				return r ? n : t;
			})(e);
		}
		function tS(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e };
			var n = Mf(t);
			if (n && n.has(e)) return n.get(e);
			var r = { __proto__: null },
				a = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
					var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
					o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
				}
			return (r.default = e), n && n.set(e, r), r;
		}
		function Di(e, t = 5, n = 10) {
			let r = Math.pow(n, t),
				a = Number(Math.round(e * r) / r);
			return Math.abs(a) > 1e-4 ? a : 0;
		}
		function nS(e) {
			return (0, J1.default)(...e);
		}
		function rS(e, t, n) {
			return t === 0
				? 0
				: t === 1
					? 1
					: Di(n ? (t > 0 ? n(t) : t) : t > 0 && e && Df[e] ? Df[e](t) : t);
		}
	});
	var Gf = l((qi) => {
		'use strict';
		Object.defineProperty(qi, '__esModule', { value: !0 });
		function iS(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		iS(qi, {
			createElementState: function () {
				return qf;
			},
			ixElements: function () {
				return _S;
			},
			mergeActionState: function () {
				return Fi;
			}
		});
		var Kn = Ot(),
			Ff = Re(),
			{
				HTML_ELEMENT: hF,
				PLAIN_OBJECT: aS,
				ABSTRACT_NODE: vF,
				CONFIG_X_VALUE: oS,
				CONFIG_Y_VALUE: sS,
				CONFIG_Z_VALUE: uS,
				CONFIG_VALUE: cS,
				CONFIG_X_UNIT: lS,
				CONFIG_Y_UNIT: fS,
				CONFIG_Z_UNIT: dS,
				CONFIG_UNIT: pS
			} = Ff.IX2EngineConstants,
			{
				IX2_SESSION_STOPPED: gS,
				IX2_INSTANCE_ADDED: ES,
				IX2_ELEMENT_STATE_CHANGED: hS
			} = Ff.IX2EngineActionTypes,
			xf = {},
			vS = 'refState',
			_S = (e = xf, t = {}) => {
				switch (t.type) {
					case gS:
						return xf;
					case ES: {
						let { elementId: n, element: r, origin: a, actionItem: i, refType: o } = t.payload,
							{ actionTypeId: s } = i,
							u = e;
						return (0, Kn.getIn)(u, [n, r]) !== r && (u = qf(u, r, o, n, i)), Fi(u, n, s, a, i);
					}
					case hS: {
						let { elementId: n, actionTypeId: r, current: a, actionItem: i } = t.payload;
						return Fi(e, n, r, a, i);
					}
					default:
						return e;
				}
			};
		function qf(e, t, n, r, a) {
			let i = n === aS ? (0, Kn.getIn)(a, ['config', 'target', 'objectId']) : null;
			return (0, Kn.mergeIn)(e, [r], { id: r, ref: t, refId: i, refType: n });
		}
		function Fi(e, t, n, r, a) {
			let i = IS(a),
				o = [t, vS, n];
			return (0, Kn.mergeIn)(e, o, r, i);
		}
		var yS = [
			[oS, lS],
			[sS, fS],
			[uS, dS],
			[cS, pS]
		];
		function IS(e) {
			let { config: t } = e;
			return yS.reduce((n, r) => {
				let a = r[0],
					i = r[1],
					o = t[a],
					s = t[i];
				return o != null && s != null && (n[i] = s), n;
			}, {});
		}
	});
	var Vf = l((Gi) => {
		'use strict';
		Object.defineProperty(Gi, '__esModule', { value: !0 });
		function TS(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		TS(Gi, {
			clearPlugin: function () {
				return wS;
			},
			createPluginInstance: function () {
				return SS;
			},
			getPluginConfig: function () {
				return bS;
			},
			getPluginDestination: function () {
				return AS;
			},
			getPluginDuration: function () {
				return mS;
			},
			getPluginOrigin: function () {
				return OS;
			},
			renderPlugin: function () {
				return RS;
			}
		});
		var bS = (e) => e.value,
			mS = (e, t) => {
				if (t.config.duration !== 'auto') return null;
				let n = parseFloat(e.getAttribute('data-duration'));
				return n > 0 ? n * 1e3 : parseFloat(e.getAttribute('data-default-duration')) * 1e3;
			},
			OS = (e) => e || { value: 0 },
			AS = (e) => ({ value: e.value }),
			SS = (e) => {
				let t = window.Webflow.require('lottie').createInstance(e);
				return t.stop(), t.setSubframe(!0), t;
			},
			RS = (e, t, n) => {
				if (!e) return;
				let r = t[n.actionTypeId].value / 100;
				e.goToFrame(e.frames * r);
			},
			wS = (e) => {
				window.Webflow.require('lottie').createInstance(e).stop();
			};
	});
	var Bf = l((Vi) => {
		'use strict';
		Object.defineProperty(Vi, '__esModule', { value: !0 });
		function LS(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		LS(Vi, {
			clearPlugin: function () {
				return VS;
			},
			createPluginInstance: function () {
				return qS;
			},
			getPluginConfig: function () {
				return DS;
			},
			getPluginDestination: function () {
				return FS;
			},
			getPluginDuration: function () {
				return MS;
			},
			getPluginOrigin: function () {
				return xS;
			},
			renderPlugin: function () {
				return GS;
			}
		});
		var CS = (e) => document.querySelector(`[data-w-id="${e}"]`),
			NS = () => window.Webflow.require('spline'),
			PS = (e, t) => e.filter((n) => !t.includes(n)),
			DS = (e, t) => e.value[t],
			MS = () => null,
			Uf = Object.freeze({
				positionX: 0,
				positionY: 0,
				positionZ: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1
			}),
			xS = (e, t) => {
				let n = t.config.value,
					r = Object.keys(n);
				if (e) {
					let i = Object.keys(e),
						o = PS(r, i);
					return o.length ? o.reduce((u, f) => ((u[f] = Uf[f]), u), e) : e;
				}
				return r.reduce((i, o) => ((i[o] = Uf[o]), i), {});
			},
			FS = (e) => e.value,
			qS = (e, t) => {
				let n = t?.config?.target?.pluginElement;
				return n ? CS(n) : null;
			},
			GS = (e, t, n) => {
				let r = NS(),
					a = r.getInstance(e),
					i = n.config.target.objectId,
					o = (s) => {
						if (!s) throw new Error('Invalid spline app passed to renderSpline');
						let u = i && s.findObjectById(i);
						if (!u) return;
						let { PLUGIN_SPLINE: f } = t;
						f.positionX != null && (u.position.x = f.positionX),
							f.positionY != null && (u.position.y = f.positionY),
							f.positionZ != null && (u.position.z = f.positionZ),
							f.rotationX != null && (u.rotation.x = f.rotationX),
							f.rotationY != null && (u.rotation.y = f.rotationY),
							f.rotationZ != null && (u.rotation.z = f.rotationZ),
							f.scaleX != null && (u.scale.x = f.scaleX),
							f.scaleY != null && (u.scale.y = f.scaleY),
							f.scaleZ != null && (u.scale.z = f.scaleZ);
					};
				a ? o(a.spline) : r.setLoadHandler(e, o);
			},
			VS = () => null;
	});
	var kf = l((ki) => {
		'use strict';
		Object.defineProperty(ki, '__esModule', { value: !0 });
		function US(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		US(ki, {
			clearPlugin: function () {
				return jS;
			},
			createPluginInstance: function () {
				return zS;
			},
			getPluginConfig: function () {
				return XS;
			},
			getPluginDestination: function () {
				return YS;
			},
			getPluginDuration: function () {
				return WS;
			},
			getPluginOrigin: function () {
				return HS;
			},
			renderPlugin: function () {
				return KS;
			}
		});
		var Ui = '--wf-rive-fit',
			Bi = '--wf-rive-alignment',
			BS = (e) => document.querySelector(`[data-w-id="${e}"]`),
			kS = () => window.Webflow.require('rive'),
			XS = (e, t) => e.value.inputs[t],
			WS = () => null,
			HS = (e, t) => {
				if (e) return e;
				let n = {},
					{ inputs: r = {} } = t.config.value;
				for (let a in r) r[a] == null && (n[a] = 0);
				return n;
			},
			YS = (e) => e.value.inputs ?? {},
			zS = (e, t) => {
				if ((t.config?.target?.selectorGuids || []).length > 0) return e;
				let r = t?.config?.target?.pluginElement;
				return r ? BS(r) : null;
			},
			KS = (e, { PLUGIN_RIVE: t }, n) => {
				let r = kS(),
					a = r.getInstance(e),
					i = r.rive.StateMachineInputType,
					{ name: o, inputs: s = {} } = n.config.value || {};
				function u(f) {
					if (f.loaded) v();
					else {
						let g = () => {
							v(), f?.off('load', g);
						};
						f?.on('load', g);
					}
					function v() {
						let g = f.stateMachineInputs(o);
						if (g != null) {
							if ((f.isPlaying || f.play(o, !1), Ui in s || Bi in s)) {
								let p = f.layout,
									E = s[Ui] ?? p.fit,
									b = s[Bi] ?? p.alignment;
								(E !== p.fit || b !== p.alignment) &&
									(f.layout = p.copyWith({ fit: E, alignment: b }));
							}
							for (let p in s) {
								if (p === Ui || p === Bi) continue;
								let E = g.find((b) => b.name === p);
								if (E != null)
									switch (E.type) {
										case i.Boolean: {
											if (s[p] != null) {
												let b = !!s[p];
												E.value = b;
											}
											break;
										}
										case i.Number: {
											let b = t[p];
											b != null && (E.value = b);
											break;
										}
										case i.Trigger: {
											s[p] && E.fire();
											break;
										}
									}
							}
						}
					}
				}
				a?.rive ? u(a.rive) : r.setLoadHandler(e, u);
			},
			jS = (e, t) => null;
	});
	var Wi = l((Xi) => {
		'use strict';
		Object.defineProperty(Xi, '__esModule', { value: !0 });
		Object.defineProperty(Xi, 'normalizeColor', {
			enumerable: !0,
			get: function () {
				return QS;
			}
		});
		var Xf = {
			aliceblue: '#F0F8FF',
			antiquewhite: '#FAEBD7',
			aqua: '#00FFFF',
			aquamarine: '#7FFFD4',
			azure: '#F0FFFF',
			beige: '#F5F5DC',
			bisque: '#FFE4C4',
			black: '#000000',
			blanchedalmond: '#FFEBCD',
			blue: '#0000FF',
			blueviolet: '#8A2BE2',
			brown: '#A52A2A',
			burlywood: '#DEB887',
			cadetblue: '#5F9EA0',
			chartreuse: '#7FFF00',
			chocolate: '#D2691E',
			coral: '#FF7F50',
			cornflowerblue: '#6495ED',
			cornsilk: '#FFF8DC',
			crimson: '#DC143C',
			cyan: '#00FFFF',
			darkblue: '#00008B',
			darkcyan: '#008B8B',
			darkgoldenrod: '#B8860B',
			darkgray: '#A9A9A9',
			darkgreen: '#006400',
			darkgrey: '#A9A9A9',
			darkkhaki: '#BDB76B',
			darkmagenta: '#8B008B',
			darkolivegreen: '#556B2F',
			darkorange: '#FF8C00',
			darkorchid: '#9932CC',
			darkred: '#8B0000',
			darksalmon: '#E9967A',
			darkseagreen: '#8FBC8F',
			darkslateblue: '#483D8B',
			darkslategray: '#2F4F4F',
			darkslategrey: '#2F4F4F',
			darkturquoise: '#00CED1',
			darkviolet: '#9400D3',
			deeppink: '#FF1493',
			deepskyblue: '#00BFFF',
			dimgray: '#696969',
			dimgrey: '#696969',
			dodgerblue: '#1E90FF',
			firebrick: '#B22222',
			floralwhite: '#FFFAF0',
			forestgreen: '#228B22',
			fuchsia: '#FF00FF',
			gainsboro: '#DCDCDC',
			ghostwhite: '#F8F8FF',
			gold: '#FFD700',
			goldenrod: '#DAA520',
			gray: '#808080',
			green: '#008000',
			greenyellow: '#ADFF2F',
			grey: '#808080',
			honeydew: '#F0FFF0',
			hotpink: '#FF69B4',
			indianred: '#CD5C5C',
			indigo: '#4B0082',
			ivory: '#FFFFF0',
			khaki: '#F0E68C',
			lavender: '#E6E6FA',
			lavenderblush: '#FFF0F5',
			lawngreen: '#7CFC00',
			lemonchiffon: '#FFFACD',
			lightblue: '#ADD8E6',
			lightcoral: '#F08080',
			lightcyan: '#E0FFFF',
			lightgoldenrodyellow: '#FAFAD2',
			lightgray: '#D3D3D3',
			lightgreen: '#90EE90',
			lightgrey: '#D3D3D3',
			lightpink: '#FFB6C1',
			lightsalmon: '#FFA07A',
			lightseagreen: '#20B2AA',
			lightskyblue: '#87CEFA',
			lightslategray: '#778899',
			lightslategrey: '#778899',
			lightsteelblue: '#B0C4DE',
			lightyellow: '#FFFFE0',
			lime: '#00FF00',
			limegreen: '#32CD32',
			linen: '#FAF0E6',
			magenta: '#FF00FF',
			maroon: '#800000',
			mediumaquamarine: '#66CDAA',
			mediumblue: '#0000CD',
			mediumorchid: '#BA55D3',
			mediumpurple: '#9370DB',
			mediumseagreen: '#3CB371',
			mediumslateblue: '#7B68EE',
			mediumspringgreen: '#00FA9A',
			mediumturquoise: '#48D1CC',
			mediumvioletred: '#C71585',
			midnightblue: '#191970',
			mintcream: '#F5FFFA',
			mistyrose: '#FFE4E1',
			moccasin: '#FFE4B5',
			navajowhite: '#FFDEAD',
			navy: '#000080',
			oldlace: '#FDF5E6',
			olive: '#808000',
			olivedrab: '#6B8E23',
			orange: '#FFA500',
			orangered: '#FF4500',
			orchid: '#DA70D6',
			palegoldenrod: '#EEE8AA',
			palegreen: '#98FB98',
			paleturquoise: '#AFEEEE',
			palevioletred: '#DB7093',
			papayawhip: '#FFEFD5',
			peachpuff: '#FFDAB9',
			peru: '#CD853F',
			pink: '#FFC0CB',
			plum: '#DDA0DD',
			powderblue: '#B0E0E6',
			purple: '#800080',
			rebeccapurple: '#663399',
			red: '#FF0000',
			rosybrown: '#BC8F8F',
			royalblue: '#4169E1',
			saddlebrown: '#8B4513',
			salmon: '#FA8072',
			sandybrown: '#F4A460',
			seagreen: '#2E8B57',
			seashell: '#FFF5EE',
			sienna: '#A0522D',
			silver: '#C0C0C0',
			skyblue: '#87CEEB',
			slateblue: '#6A5ACD',
			slategray: '#708090',
			slategrey: '#708090',
			snow: '#FFFAFA',
			springgreen: '#00FF7F',
			steelblue: '#4682B4',
			tan: '#D2B48C',
			teal: '#008080',
			thistle: '#D8BFD8',
			tomato: '#FF6347',
			turquoise: '#40E0D0',
			violet: '#EE82EE',
			wheat: '#F5DEB3',
			white: '#FFFFFF',
			whitesmoke: '#F5F5F5',
			yellow: '#FFFF00',
			yellowgreen: '#9ACD32'
		};
		function QS(e) {
			let t,
				n,
				r,
				a = 1,
				i = e.replace(/\s/g, '').toLowerCase(),
				s = (typeof Xf[i] == 'string' ? Xf[i].toLowerCase() : null) || i;
			if (s.startsWith('#')) {
				let u = s.substring(1);
				u.length === 3 || u.length === 4
					? ((t = parseInt(u[0] + u[0], 16)),
						(n = parseInt(u[1] + u[1], 16)),
						(r = parseInt(u[2] + u[2], 16)),
						u.length === 4 && (a = parseInt(u[3] + u[3], 16) / 255))
					: (u.length === 6 || u.length === 8) &&
						((t = parseInt(u.substring(0, 2), 16)),
						(n = parseInt(u.substring(2, 4), 16)),
						(r = parseInt(u.substring(4, 6), 16)),
						u.length === 8 && (a = parseInt(u.substring(6, 8), 16) / 255));
			} else if (s.startsWith('rgba')) {
				let u = s.match(/rgba\(([^)]+)\)/)[1].split(',');
				(t = parseInt(u[0], 10)),
					(n = parseInt(u[1], 10)),
					(r = parseInt(u[2], 10)),
					(a = parseFloat(u[3]));
			} else if (s.startsWith('rgb')) {
				let u = s.match(/rgb\(([^)]+)\)/)[1].split(',');
				(t = parseInt(u[0], 10)), (n = parseInt(u[1], 10)), (r = parseInt(u[2], 10));
			} else if (s.startsWith('hsla')) {
				let u = s.match(/hsla\(([^)]+)\)/)[1].split(','),
					f = parseFloat(u[0]),
					v = parseFloat(u[1].replace('%', '')) / 100,
					g = parseFloat(u[2].replace('%', '')) / 100;
				a = parseFloat(u[3]);
				let p = (1 - Math.abs(2 * g - 1)) * v,
					E = p * (1 - Math.abs(((f / 60) % 2) - 1)),
					b = g - p / 2,
					I,
					O,
					_;
				f >= 0 && f < 60
					? ((I = p), (O = E), (_ = 0))
					: f >= 60 && f < 120
						? ((I = E), (O = p), (_ = 0))
						: f >= 120 && f < 180
							? ((I = 0), (O = p), (_ = E))
							: f >= 180 && f < 240
								? ((I = 0), (O = E), (_ = p))
								: f >= 240 && f < 300
									? ((I = E), (O = 0), (_ = p))
									: ((I = p), (O = 0), (_ = E)),
					(t = Math.round((I + b) * 255)),
					(n = Math.round((O + b) * 255)),
					(r = Math.round((_ + b) * 255));
			} else if (s.startsWith('hsl')) {
				let u = s.match(/hsl\(([^)]+)\)/)[1].split(','),
					f = parseFloat(u[0]),
					v = parseFloat(u[1].replace('%', '')) / 100,
					g = parseFloat(u[2].replace('%', '')) / 100,
					p = (1 - Math.abs(2 * g - 1)) * v,
					E = p * (1 - Math.abs(((f / 60) % 2) - 1)),
					b = g - p / 2,
					I,
					O,
					_;
				f >= 0 && f < 60
					? ((I = p), (O = E), (_ = 0))
					: f >= 60 && f < 120
						? ((I = E), (O = p), (_ = 0))
						: f >= 120 && f < 180
							? ((I = 0), (O = p), (_ = E))
							: f >= 180 && f < 240
								? ((I = 0), (O = E), (_ = p))
								: f >= 240 && f < 300
									? ((I = E), (O = 0), (_ = p))
									: ((I = p), (O = 0), (_ = E)),
					(t = Math.round((I + b) * 255)),
					(n = Math.round((O + b) * 255)),
					(r = Math.round((_ + b) * 255));
			}
			if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
				throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
			return { red: t, green: n, blue: r, alpha: a };
		}
	});
	var Wf = l((Hi) => {
		'use strict';
		Object.defineProperty(Hi, '__esModule', { value: !0 });
		function $S(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		$S(Hi, {
			clearPlugin: function () {
				return o2;
			},
			createPluginInstance: function () {
				return r2;
			},
			getPluginConfig: function () {
				return JS;
			},
			getPluginDestination: function () {
				return n2;
			},
			getPluginDuration: function () {
				return e2;
			},
			getPluginOrigin: function () {
				return t2;
			},
			renderPlugin: function () {
				return a2;
			}
		});
		var ZS = Wi(),
			JS = (e, t) => e.value[t],
			e2 = () => null,
			t2 = (e, t) => {
				if (e) return e;
				let n = t.config.value,
					r = t.config.target.objectId,
					a = getComputedStyle(document.documentElement).getPropertyValue(r);
				if (n.size != null) return { size: parseInt(a, 10) };
				if (n.unit === '%' || n.unit === '-') return { size: parseFloat(a) };
				if (n.red != null && n.green != null && n.blue != null) return (0, ZS.normalizeColor)(a);
			},
			n2 = (e) => e.value,
			r2 = () => null,
			i2 = {
				color: {
					match: ({ red: e, green: t, blue: n, alpha: r }) => [e, t, n, r].every((a) => a != null),
					getValue: ({ red: e, green: t, blue: n, alpha: r }) => `rgba(${e}, ${t}, ${n}, ${r})`
				},
				size: {
					match: ({ size: e }) => e != null,
					getValue: ({ size: e }, t) => {
						switch (t) {
							case '-':
								return e;
							default:
								return `${e}${t}`;
						}
					}
				}
			},
			a2 = (e, t, n) => {
				let {
						target: { objectId: r },
						value: { unit: a }
					} = n.config,
					i = t.PLUGIN_VARIABLE,
					o = Object.values(i2).find((s) => s.match(i, a));
				o && document.documentElement.style.setProperty(r, o.getValue(i, a));
			},
			o2 = (e, t) => {
				let n = t.config.target.objectId;
				document.documentElement.style.removeProperty(n);
			};
	});
	var Yf = l((Yi) => {
		'use strict';
		Object.defineProperty(Yi, '__esModule', { value: !0 });
		Object.defineProperty(Yi, 'pluginMethodMap', {
			enumerable: !0,
			get: function () {
				return f2;
			}
		});
		var jn = Re(),
			s2 = Qn(Vf()),
			u2 = Qn(Bf()),
			c2 = Qn(kf()),
			l2 = Qn(Wf());
		function Hf(e) {
			if (typeof WeakMap != 'function') return null;
			var t = new WeakMap(),
				n = new WeakMap();
			return (Hf = function (r) {
				return r ? n : t;
			})(e);
		}
		function Qn(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e };
			var n = Hf(t);
			if (n && n.has(e)) return n.get(e);
			var r = { __proto__: null },
				a = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
					var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
					o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
				}
			return (r.default = e), n && n.set(e, r), r;
		}
		var f2 = new Map([
			[jn.ActionTypeConsts.PLUGIN_LOTTIE, { ...s2 }],
			[jn.ActionTypeConsts.PLUGIN_SPLINE, { ...u2 }],
			[jn.ActionTypeConsts.PLUGIN_RIVE, { ...c2 }],
			[jn.ActionTypeConsts.PLUGIN_VARIABLE, { ...l2 }]
		]);
	});
	var Ki = l((zi) => {
		'use strict';
		Object.defineProperty(zi, '__esModule', { value: !0 });
		function d2(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		d2(zi, {
			clearPlugin: function () {
				return T2;
			},
			createPluginInstance: function () {
				return y2;
			},
			getPluginConfig: function () {
				return E2;
			},
			getPluginDestination: function () {
				return _2;
			},
			getPluginDuration: function () {
				return v2;
			},
			getPluginOrigin: function () {
				return h2;
			},
			isPluginType: function () {
				return g2;
			},
			renderPlugin: function () {
				return I2;
			}
		});
		var p2 = Wn(),
			zf = Yf();
		function g2(e) {
			return zf.pluginMethodMap.has(e);
		}
		var dt = (e) => (t) => {
				if (!p2.IS_BROWSER_ENV) return () => null;
				let n = zf.pluginMethodMap.get(t);
				if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
				let r = n[e];
				if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
				return r;
			},
			E2 = dt('getPluginConfig'),
			h2 = dt('getPluginOrigin'),
			v2 = dt('getPluginDuration'),
			_2 = dt('getPluginDestination'),
			y2 = dt('createPluginInstance'),
			I2 = dt('renderPlugin'),
			T2 = dt('clearPlugin');
	});
	var jf = l((SF, Kf) => {
		function b2(e, t) {
			return e == null || e !== e ? t : e;
		}
		Kf.exports = b2;
	});
	var $f = l((RF, Qf) => {
		function m2(e, t, n, r) {
			var a = -1,
				i = e == null ? 0 : e.length;
			for (r && i && (n = e[++a]); ++a < i; ) n = t(n, e[a], a, e);
			return n;
		}
		Qf.exports = m2;
	});
	var Jf = l((wF, Zf) => {
		function O2(e) {
			return function (t, n, r) {
				for (var a = -1, i = Object(t), o = r(t), s = o.length; s--; ) {
					var u = o[e ? s : ++a];
					if (n(i[u], u, i) === !1) break;
				}
				return t;
			};
		}
		Zf.exports = O2;
	});
	var td = l((LF, ed) => {
		var A2 = Jf(),
			S2 = A2();
		ed.exports = S2;
	});
	var ji = l((CF, nd) => {
		var R2 = td(),
			w2 = en();
		function L2(e, t) {
			return e && R2(e, t, w2);
		}
		nd.exports = L2;
	});
	var id = l((NF, rd) => {
		var C2 = lt();
		function N2(e, t) {
			return function (n, r) {
				if (n == null) return n;
				if (!C2(n)) return e(n, r);
				for (
					var a = n.length, i = t ? a : -1, o = Object(n);
					(t ? i-- : ++i < a) && r(o[i], i, o) !== !1;

				);
				return n;
			};
		}
		rd.exports = N2;
	});
	var Qi = l((PF, ad) => {
		var P2 = ji(),
			D2 = id(),
			M2 = D2(P2);
		ad.exports = M2;
	});
	var sd = l((DF, od) => {
		function x2(e, t, n, r, a) {
			return (
				a(e, function (i, o, s) {
					n = r ? ((r = !1), i) : t(n, i, o, s);
				}),
				n
			);
		}
		od.exports = x2;
	});
	var cd = l((MF, ud) => {
		var F2 = $f(),
			q2 = Qi(),
			G2 = rt(),
			V2 = sd(),
			U2 = Te();
		function B2(e, t, n) {
			var r = U2(e) ? F2 : V2,
				a = arguments.length < 3;
			return r(e, G2(t, 4), n, a, q2);
		}
		ud.exports = B2;
	});
	var fd = l((xF, ld) => {
		var k2 = Si(),
			X2 = rt(),
			W2 = Ri(),
			H2 = Math.max,
			Y2 = Math.min;
		function z2(e, t, n) {
			var r = e == null ? 0 : e.length;
			if (!r) return -1;
			var a = r - 1;
			return (
				n !== void 0 && ((a = W2(n)), (a = n < 0 ? H2(r + a, 0) : Y2(a, r - 1))),
				k2(e, X2(t, 3), a, !0)
			);
		}
		ld.exports = z2;
	});
	var pd = l((FF, dd) => {
		var K2 = Ai(),
			j2 = fd(),
			Q2 = K2(j2);
		dd.exports = Q2;
	});
	var Ed = l(($i) => {
		'use strict';
		Object.defineProperty($i, '__esModule', { value: !0 });
		Object.defineProperty($i, 'default', {
			enumerable: !0,
			get: function () {
				return Z2;
			}
		});
		function gd(e, t) {
			return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
		}
		function $2(e, t) {
			if (gd(e, t)) return !0;
			if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
			let n = Object.keys(e),
				r = Object.keys(t);
			if (n.length !== r.length) return !1;
			for (let a = 0; a < n.length; a++)
				if (!Object.hasOwn(t, n[a]) || !gd(e[n[a]], t[n[a]])) return !1;
			return !0;
		}
		var Z2 = $2;
	});
	var Md = l((oa) => {
		'use strict';
		Object.defineProperty(oa, '__esModule', { value: !0 });
		function J2(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		J2(oa, {
			cleanupHTMLElement: function () {
				return ZR;
			},
			clearAllStyles: function () {
				return $R;
			},
			clearObjectCache: function () {
				return _R;
			},
			getActionListProgress: function () {
				return ew;
			},
			getAffectedElements: function () {
				return ia;
			},
			getComputedStyle: function () {
				return SR;
			},
			getDestinationValues: function () {
				return DR;
			},
			getElementId: function () {
				return bR;
			},
			getInstanceId: function () {
				return IR;
			},
			getInstanceOrigin: function () {
				return LR;
			},
			getItemConfigByKey: function () {
				return PR;
			},
			getMaxDurationItemIndex: function () {
				return Dd;
			},
			getNamespacedParameterId: function () {
				return rw;
			},
			getRenderType: function () {
				return Cd;
			},
			getStyleProp: function () {
				return MR;
			},
			mediaQueriesEqual: function () {
				return aw;
			},
			observeStore: function () {
				return AR;
			},
			reduceListToGroup: function () {
				return tw;
			},
			reifyState: function () {
				return mR;
			},
			renderHTMLElement: function () {
				return xR;
			},
			shallowEqual: function () {
				return md.default;
			},
			shouldAllowMediaQuery: function () {
				return iw;
			},
			shouldNamespaceEventParameter: function () {
				return nw;
			},
			stringifyTarget: function () {
				return ow;
			}
		});
		var it = er(jf()),
			ea = er(cd()),
			Ji = er(pd()),
			hd = Ot(),
			pt = Re(),
			md = er(Ed()),
			eR = xi(),
			tR = Wi(),
			ze = Ki(),
			Ae = Wn();
		function er(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var {
				BACKGROUND: nR,
				TRANSFORM: rR,
				TRANSLATE_3D: iR,
				SCALE_3D: aR,
				ROTATE_X: oR,
				ROTATE_Y: sR,
				ROTATE_Z: uR,
				SKEW: cR,
				PRESERVE_3D: lR,
				FLEX: fR,
				OPACITY: Zn,
				FILTER: an,
				FONT_VARIATION_SETTINGS: on,
				WIDTH: He,
				HEIGHT: Ye,
				BACKGROUND_COLOR: Od,
				BORDER_COLOR: dR,
				COLOR: pR,
				CHILDREN: vd,
				IMMEDIATE_CHILDREN: gR,
				SIBLINGS: _d,
				PARENT: ER,
				DISPLAY: Jn,
				WILL_CHANGE: Dt,
				AUTO: at,
				COMMA_DELIMITER: sn,
				COLON_DELIMITER: hR,
				BAR_DELIMITER: Zi,
				RENDER_TRANSFORM: Ad,
				RENDER_GENERAL: ta,
				RENDER_STYLE: na,
				RENDER_PLUGIN: Sd
			} = pt.IX2EngineConstants,
			{
				TRANSFORM_MOVE: Mt,
				TRANSFORM_SCALE: xt,
				TRANSFORM_ROTATE: Ft,
				TRANSFORM_SKEW: un,
				STYLE_OPACITY: Rd,
				STYLE_FILTER: cn,
				STYLE_FONT_VARIATION: ln,
				STYLE_SIZE: qt,
				STYLE_BACKGROUND_COLOR: Gt,
				STYLE_BORDER: Vt,
				STYLE_TEXT_COLOR: Ut,
				GENERAL_DISPLAY: tr,
				OBJECT_VALUE: vR
			} = pt.ActionTypeConsts,
			wd = (e) => e.trim(),
			ra = Object.freeze({ [Gt]: Od, [Vt]: dR, [Ut]: pR }),
			Ld = Object.freeze({
				[Ae.TRANSFORM_PREFIXED]: rR,
				[Od]: nR,
				[Zn]: Zn,
				[an]: an,
				[He]: He,
				[Ye]: Ye,
				[on]: on
			}),
			$n = new Map();
		function _R() {
			$n.clear();
		}
		var yR = 1;
		function IR() {
			return 'i' + yR++;
		}
		var TR = 1;
		function bR(e, t) {
			for (let n in e) {
				let r = e[n];
				if (r && r.ref === t) return r.id;
			}
			return 'e' + TR++;
		}
		function mR({ events: e, actionLists: t, site: n } = {}) {
			let r = (0, ea.default)(
					e,
					(o, s) => {
						let { eventTypeId: u } = s;
						return o[u] || (o[u] = {}), (o[u][s.id] = s), o;
					},
					{}
				),
				a = n && n.mediaQueries,
				i = [];
			return (
				a
					? (i = a.map((o) => o.key))
					: ((a = []), console.warn('IX2 missing mediaQueries in site data')),
				{
					ixData: { events: e, actionLists: t, eventTypeMap: r, mediaQueries: a, mediaQueryKeys: i }
				}
			);
		}
		var OR = (e, t) => e === t;
		function AR({ store: e, select: t, onChange: n, comparator: r = OR }) {
			let { getState: a, subscribe: i } = e,
				o = i(u),
				s = t(a());
			function u() {
				let f = t(a());
				if (f == null) {
					o();
					return;
				}
				r(f, s) || ((s = f), n(s, e));
			}
			return o;
		}
		function yd(e) {
			let t = typeof e;
			if (t === 'string') return { id: e };
			if (e != null && t === 'object') {
				let {
					id: n,
					objectId: r,
					selector: a,
					selectorGuids: i,
					appliesTo: o,
					useEventTarget: s
				} = e;
				return {
					id: n,
					objectId: r,
					selector: a,
					selectorGuids: i,
					appliesTo: o,
					useEventTarget: s
				};
			}
			return {};
		}
		function ia({ config: e, event: t, eventTarget: n, elementRoot: r, elementApi: a }) {
			if (!a) throw new Error('IX2 missing elementApi');
			let { targets: i } = e;
			if (Array.isArray(i) && i.length > 0)
				return i.reduce(
					(M, T) =>
						M.concat(
							ia({ config: { target: T }, event: t, eventTarget: n, elementRoot: r, elementApi: a })
						),
					[]
				);
			let {
					getValidDocument: o,
					getQuerySelector: s,
					queryDocument: u,
					getChildElements: f,
					getSiblingElements: v,
					matchSelector: g,
					elementContains: p,
					isSiblingNode: E
				} = a,
				{ target: b } = e;
			if (!b) return [];
			let {
				id: I,
				objectId: O,
				selector: _,
				selectorGuids: S,
				appliesTo: A,
				useEventTarget: D
			} = yd(b);
			if (O) return [$n.has(O) ? $n.get(O) : $n.set(O, {}).get(O)];
			if (A === pt.EventAppliesTo.PAGE) {
				let M = o(I);
				return M ? [M] : [];
			}
			let C = (t?.action?.config?.affectedElements ?? {})[I || _] || {},
				B = !!(C.id || C.selector),
				k,
				X,
				z,
				J = t && s(yd(t.target));
			if (
				(B
					? ((k = C.limitAffectedElements), (X = J), (z = s(C)))
					: (X = z = s({ id: I, selector: _, selectorGuids: S })),
				t && D)
			) {
				let M = n && (z || D === !0) ? [n] : u(J);
				if (z) {
					if (D === ER) return u(z).filter((T) => M.some((N) => p(T, N)));
					if (D === vd) return u(z).filter((T) => M.some((N) => p(N, T)));
					if (D === _d) return u(z).filter((T) => M.some((N) => E(N, T)));
				}
				return M;
			}
			return X == null || z == null
				? []
				: Ae.IS_BROWSER_ENV && r
					? u(z).filter((M) => r.contains(M))
					: k === vd
						? u(X, z)
						: k === gR
							? f(u(X)).filter(g(z))
							: k === _d
								? v(u(X)).filter(g(z))
								: u(z);
		}
		function SR({ element: e, actionItem: t }) {
			if (!Ae.IS_BROWSER_ENV) return {};
			let { actionTypeId: n } = t;
			switch (n) {
				case qt:
				case Gt:
				case Vt:
				case Ut:
				case tr:
					return window.getComputedStyle(e);
				default:
					return {};
			}
		}
		var Id = /px/,
			RR = (e, t) =>
				t.reduce((n, r) => (n[r.type] == null && (n[r.type] = FR[r.type]), n), e || {}),
			wR = (e, t) =>
				t.reduce(
					(n, r) => (n[r.type] == null && (n[r.type] = qR[r.type] || r.defaultValue || 0), n),
					e || {}
				);
		function LR(e, t = {}, n = {}, r, a) {
			let { getStyle: i } = a,
				{ actionTypeId: o } = r;
			if ((0, ze.isPluginType)(o)) return (0, ze.getPluginOrigin)(o)(t[o], r);
			switch (r.actionTypeId) {
				case Mt:
				case xt:
				case Ft:
				case un:
					return t[r.actionTypeId] || aa[r.actionTypeId];
				case cn:
					return RR(t[r.actionTypeId], r.config.filters);
				case ln:
					return wR(t[r.actionTypeId], r.config.fontVariations);
				case Rd:
					return { value: (0, it.default)(parseFloat(i(e, Zn)), 1) };
				case qt: {
					let s = i(e, He),
						u = i(e, Ye),
						f,
						v;
					return (
						r.config.widthUnit === at
							? (f = Id.test(s) ? parseFloat(s) : parseFloat(n.width))
							: (f = (0, it.default)(parseFloat(s), parseFloat(n.width))),
						r.config.heightUnit === at
							? (v = Id.test(u) ? parseFloat(u) : parseFloat(n.height))
							: (v = (0, it.default)(parseFloat(u), parseFloat(n.height))),
						{ widthValue: f, heightValue: v }
					);
				}
				case Gt:
				case Vt:
				case Ut:
					return KR({ element: e, actionTypeId: r.actionTypeId, computedStyle: n, getStyle: i });
				case tr:
					return { value: (0, it.default)(i(e, Jn), n.display) };
				case vR:
					return t[r.actionTypeId] || { value: 0 };
				default:
					return;
			}
		}
		var CR = (e, t) => (t && (e[t.type] = t.value || 0), e),
			NR = (e, t) => (t && (e[t.type] = t.value || 0), e),
			PR = (e, t, n) => {
				if ((0, ze.isPluginType)(e)) return (0, ze.getPluginConfig)(e)(n, t);
				switch (e) {
					case cn: {
						let r = (0, Ji.default)(n.filters, ({ type: a }) => a === t);
						return r ? r.value : 0;
					}
					case ln: {
						let r = (0, Ji.default)(n.fontVariations, ({ type: a }) => a === t);
						return r ? r.value : 0;
					}
					default:
						return n[t];
				}
			};
		function DR({ element: e, actionItem: t, elementApi: n }) {
			if ((0, ze.isPluginType)(t.actionTypeId))
				return (0, ze.getPluginDestination)(t.actionTypeId)(t.config);
			switch (t.actionTypeId) {
				case Mt:
				case xt:
				case Ft:
				case un: {
					let { xValue: r, yValue: a, zValue: i } = t.config;
					return { xValue: r, yValue: a, zValue: i };
				}
				case qt: {
					let { getStyle: r, setStyle: a, getProperty: i } = n,
						{ widthUnit: o, heightUnit: s } = t.config,
						{ widthValue: u, heightValue: f } = t.config;
					if (!Ae.IS_BROWSER_ENV) return { widthValue: u, heightValue: f };
					if (o === at) {
						let v = r(e, He);
						a(e, He, ''), (u = i(e, 'offsetWidth')), a(e, He, v);
					}
					if (s === at) {
						let v = r(e, Ye);
						a(e, Ye, ''), (f = i(e, 'offsetHeight')), a(e, Ye, v);
					}
					return { widthValue: u, heightValue: f };
				}
				case Gt:
				case Vt:
				case Ut: {
					let { rValue: r, gValue: a, bValue: i, aValue: o, globalSwatchId: s } = t.config;
					if (s && s.startsWith('--')) {
						let { getStyle: u } = n,
							f = u(e, s),
							v = (0, tR.normalizeColor)(f);
						return { rValue: v.red, gValue: v.green, bValue: v.blue, aValue: v.alpha };
					}
					return { rValue: r, gValue: a, bValue: i, aValue: o };
				}
				case cn:
					return t.config.filters.reduce(CR, {});
				case ln:
					return t.config.fontVariations.reduce(NR, {});
				default: {
					let { value: r } = t.config;
					return { value: r };
				}
			}
		}
		function Cd(e) {
			if (/^TRANSFORM_/.test(e)) return Ad;
			if (/^STYLE_/.test(e)) return na;
			if (/^GENERAL_/.test(e)) return ta;
			if (/^PLUGIN_/.test(e)) return Sd;
		}
		function MR(e, t) {
			return e === na ? t.replace('STYLE_', '').toLowerCase() : null;
		}
		function xR(e, t, n, r, a, i, o, s, u) {
			switch (s) {
				case Ad:
					return UR(e, t, n, a, o);
				case na:
					return jR(e, t, n, a, i, o);
				case ta:
					return QR(e, a, o);
				case Sd: {
					let { actionTypeId: f } = a;
					if ((0, ze.isPluginType)(f)) return (0, ze.renderPlugin)(f)(u, t, a);
				}
			}
		}
		var aa = {
				[Mt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
				[xt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
				[Ft]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
				[un]: Object.freeze({ xValue: 0, yValue: 0 })
			},
			FR = Object.freeze({
				blur: 0,
				'hue-rotate': 0,
				invert: 0,
				grayscale: 0,
				saturate: 100,
				sepia: 0,
				contrast: 100,
				brightness: 100
			}),
			qR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
			GR = (e, t) => {
				let n = (0, Ji.default)(t.filters, ({ type: r }) => r === e);
				if (n && n.unit) return n.unit;
				switch (e) {
					case 'blur':
						return 'px';
					case 'hue-rotate':
						return 'deg';
					default:
						return '%';
				}
			},
			VR = Object.keys(aa);
		function UR(e, t, n, r, a) {
			let i = VR.map((s) => {
					let u = aa[s],
						{
							xValue: f = u.xValue,
							yValue: v = u.yValue,
							zValue: g = u.zValue,
							xUnit: p = '',
							yUnit: E = '',
							zUnit: b = ''
						} = t[s] || {};
					switch (s) {
						case Mt:
							return `${iR}(${f}${p}, ${v}${E}, ${g}${b})`;
						case xt:
							return `${aR}(${f}${p}, ${v}${E}, ${g}${b})`;
						case Ft:
							return `${oR}(${f}${p}) ${sR}(${v}${E}) ${uR}(${g}${b})`;
						case un:
							return `${cR}(${f}${p}, ${v}${E})`;
						default:
							return '';
					}
				}).join(' '),
				{ setStyle: o } = a;
			gt(e, Ae.TRANSFORM_PREFIXED, a),
				o(e, Ae.TRANSFORM_PREFIXED, i),
				XR(r, n) && o(e, Ae.TRANSFORM_STYLE_PREFIXED, lR);
		}
		function BR(e, t, n, r) {
			let a = (0, ea.default)(t, (o, s, u) => `${o} ${u}(${s}${GR(u, n)})`, ''),
				{ setStyle: i } = r;
			gt(e, an, r), i(e, an, a);
		}
		function kR(e, t, n, r) {
			let a = (0, ea.default)(t, (o, s, u) => (o.push(`"${u}" ${s}`), o), []).join(', '),
				{ setStyle: i } = r;
			gt(e, on, r), i(e, on, a);
		}
		function XR({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
			return (
				(e === Mt && r !== void 0) ||
				(e === xt && r !== void 0) ||
				(e === Ft && (t !== void 0 || n !== void 0))
			);
		}
		var WR = '\\(([^)]+)\\)',
			HR = /^rgb/,
			YR = RegExp(`rgba?${WR}`);
		function zR(e, t) {
			let n = e.exec(t);
			return n ? n[1] : '';
		}
		function KR({ element: e, actionTypeId: t, computedStyle: n, getStyle: r }) {
			let a = ra[t],
				i = r(e, a),
				o = HR.test(i) ? i : n[a],
				s = zR(YR, o).split(sn);
			return {
				rValue: (0, it.default)(parseInt(s[0], 10), 255),
				gValue: (0, it.default)(parseInt(s[1], 10), 255),
				bValue: (0, it.default)(parseInt(s[2], 10), 255),
				aValue: (0, it.default)(parseFloat(s[3]), 1)
			};
		}
		function jR(e, t, n, r, a, i) {
			let { setStyle: o } = i;
			switch (r.actionTypeId) {
				case qt: {
					let { widthUnit: s = '', heightUnit: u = '' } = r.config,
						{ widthValue: f, heightValue: v } = n;
					f !== void 0 && (s === at && (s = 'px'), gt(e, He, i), o(e, He, f + s)),
						v !== void 0 && (u === at && (u = 'px'), gt(e, Ye, i), o(e, Ye, v + u));
					break;
				}
				case cn: {
					BR(e, n, r.config, i);
					break;
				}
				case ln: {
					kR(e, n, r.config, i);
					break;
				}
				case Gt:
				case Vt:
				case Ut: {
					let s = ra[r.actionTypeId],
						u = Math.round(n.rValue),
						f = Math.round(n.gValue),
						v = Math.round(n.bValue),
						g = n.aValue;
					gt(e, s, i), o(e, s, g >= 1 ? `rgb(${u},${f},${v})` : `rgba(${u},${f},${v},${g})`);
					break;
				}
				default: {
					let { unit: s = '' } = r.config;
					gt(e, a, i), o(e, a, n.value + s);
					break;
				}
			}
		}
		function QR(e, t, n) {
			let { setStyle: r } = n;
			switch (t.actionTypeId) {
				case tr: {
					let { value: a } = t.config;
					a === fR && Ae.IS_BROWSER_ENV ? r(e, Jn, Ae.FLEX_PREFIXED) : r(e, Jn, a);
					return;
				}
			}
		}
		function gt(e, t, n) {
			if (!Ae.IS_BROWSER_ENV) return;
			let r = Ld[t];
			if (!r) return;
			let { getStyle: a, setStyle: i } = n,
				o = a(e, Dt);
			if (!o) {
				i(e, Dt, r);
				return;
			}
			let s = o.split(sn).map(wd);
			s.indexOf(r) === -1 && i(e, Dt, s.concat(r).join(sn));
		}
		function Nd(e, t, n) {
			if (!Ae.IS_BROWSER_ENV) return;
			let r = Ld[t];
			if (!r) return;
			let { getStyle: a, setStyle: i } = n,
				o = a(e, Dt);
			!o ||
				o.indexOf(r) === -1 ||
				i(
					e,
					Dt,
					o
						.split(sn)
						.map(wd)
						.filter((s) => s !== r)
						.join(sn)
				);
		}
		function $R({ store: e, elementApi: t }) {
			let { ixData: n } = e.getState(),
				{ events: r = {}, actionLists: a = {} } = n;
			Object.keys(r).forEach((i) => {
				let o = r[i],
					{ config: s } = o.action,
					{ actionListId: u } = s,
					f = a[u];
				f && Td({ actionList: f, event: o, elementApi: t });
			}),
				Object.keys(a).forEach((i) => {
					Td({ actionList: a[i], elementApi: t });
				});
		}
		function Td({ actionList: e = {}, event: t, elementApi: n }) {
			let { actionItemGroups: r, continuousParameterGroups: a } = e;
			r &&
				r.forEach((i) => {
					bd({ actionGroup: i, event: t, elementApi: n });
				}),
				a &&
					a.forEach((i) => {
						let { continuousActionGroups: o } = i;
						o.forEach((s) => {
							bd({ actionGroup: s, event: t, elementApi: n });
						});
					});
		}
		function bd({ actionGroup: e, event: t, elementApi: n }) {
			let { actionItems: r } = e;
			r.forEach((a) => {
				let { actionTypeId: i, config: o } = a,
					s;
				(0, ze.isPluginType)(i)
					? (s = (u) => (0, ze.clearPlugin)(i)(u, a))
					: (s = Pd({ effect: JR, actionTypeId: i, elementApi: n })),
					ia({ config: o, event: t, elementApi: n }).forEach(s);
			});
		}
		function ZR(e, t, n) {
			let { setStyle: r, getStyle: a } = n,
				{ actionTypeId: i } = t;
			if (i === qt) {
				let { config: o } = t;
				o.widthUnit === at && r(e, He, ''), o.heightUnit === at && r(e, Ye, '');
			}
			a(e, Dt) && Pd({ effect: Nd, actionTypeId: i, elementApi: n })(e);
		}
		var Pd =
			({ effect: e, actionTypeId: t, elementApi: n }) =>
			(r) => {
				switch (t) {
					case Mt:
					case xt:
					case Ft:
					case un:
						e(r, Ae.TRANSFORM_PREFIXED, n);
						break;
					case cn:
						e(r, an, n);
						break;
					case ln:
						e(r, on, n);
						break;
					case Rd:
						e(r, Zn, n);
						break;
					case qt:
						e(r, He, n), e(r, Ye, n);
						break;
					case Gt:
					case Vt:
					case Ut:
						e(r, ra[t], n);
						break;
					case tr:
						e(r, Jn, n);
						break;
				}
			};
		function JR(e, t, n) {
			let { setStyle: r } = n;
			Nd(e, t, n),
				r(e, t, ''),
				t === Ae.TRANSFORM_PREFIXED && r(e, Ae.TRANSFORM_STYLE_PREFIXED, '');
		}
		function Dd(e) {
			let t = 0,
				n = 0;
			return (
				e.forEach((r, a) => {
					let { config: i } = r,
						o = i.delay + i.duration;
					o >= t && ((t = o), (n = a));
				}),
				n
			);
		}
		function ew(e, t) {
			let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
				{ actionItem: a, verboseTimeElapsed: i = 0 } = t,
				o = 0,
				s = 0;
			return (
				n.forEach((u, f) => {
					if (r && f === 0) return;
					let { actionItems: v } = u,
						g = v[Dd(v)],
						{ config: p, actionTypeId: E } = g;
					a.id === g.id && (s = o + i);
					let b = Cd(E) === ta ? 0 : p.duration;
					o += p.delay + b;
				}),
				o > 0 ? (0, eR.optimizeFloat)(s / o) : 0
			);
		}
		function tw({ actionList: e, actionItemId: t, rawData: n }) {
			let { actionItemGroups: r, continuousParameterGroups: a } = e,
				i = [],
				o = (s) => (i.push((0, hd.mergeIn)(s, ['config'], { delay: 0, duration: 0 })), s.id === t);
			return (
				r && r.some(({ actionItems: s }) => s.some(o)),
				a &&
					a.some((s) => {
						let { continuousActionGroups: u } = s;
						return u.some(({ actionItems: f }) => f.some(o));
					}),
				(0, hd.setIn)(n, ['actionLists'], {
					[e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] }
				})
			);
		}
		function nw(e, { basedOn: t }) {
			return (
				(e === pt.EventTypeConsts.SCROLLING_IN_VIEW &&
					(t === pt.EventBasedOn.ELEMENT || t == null)) ||
				(e === pt.EventTypeConsts.MOUSE_MOVE && t === pt.EventBasedOn.ELEMENT)
			);
		}
		function rw(e, t) {
			return e + hR + t;
		}
		function iw(e, t) {
			return t == null ? !0 : e.indexOf(t) !== -1;
		}
		function aw(e, t) {
			return (0, md.default)(e && e.sort(), t && t.sort());
		}
		function ow(e) {
			if (typeof e == 'string') return e;
			if (e.pluginElement && e.objectId) return e.pluginElement + Zi + e.objectId;
			if (e.objectId) return e.objectId;
			let { id: t = '', selector: n = '', useEventTarget: r = '' } = e;
			return t + Zi + n + Zi + r;
		}
	});
	var Et = l((sa) => {
		'use strict';
		Object.defineProperty(sa, '__esModule', { value: !0 });
		function sw(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		sw(sa, {
			IX2BrowserSupport: function () {
				return uw;
			},
			IX2EasingUtils: function () {
				return lw;
			},
			IX2Easings: function () {
				return cw;
			},
			IX2ElementsReducer: function () {
				return fw;
			},
			IX2VanillaPlugins: function () {
				return dw;
			},
			IX2VanillaUtils: function () {
				return pw;
			}
		});
		var uw = Bt(Wn()),
			cw = Bt(Pi()),
			lw = Bt(xi()),
			fw = Bt(Gf()),
			dw = Bt(Ki()),
			pw = Bt(Md());
		function xd(e) {
			if (typeof WeakMap != 'function') return null;
			var t = new WeakMap(),
				n = new WeakMap();
			return (xd = function (r) {
				return r ? n : t;
			})(e);
		}
		function Bt(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e };
			var n = xd(t);
			if (n && n.has(e)) return n.get(e);
			var r = { __proto__: null },
				a = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
					var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
					o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
				}
			return (r.default = e), n && n.set(e, r), r;
		}
	});
	var Vd = l((ca) => {
		'use strict';
		Object.defineProperty(ca, '__esModule', { value: !0 });
		Object.defineProperty(ca, 'ixInstances', {
			enumerable: !0,
			get: function () {
				return Sw;
			}
		});
		var Fd = Re(),
			qd = Et(),
			kt = Ot(),
			{
				IX2_RAW_DATA_IMPORTED: gw,
				IX2_SESSION_STOPPED: Ew,
				IX2_INSTANCE_ADDED: hw,
				IX2_INSTANCE_STARTED: vw,
				IX2_INSTANCE_REMOVED: _w,
				IX2_ANIMATION_FRAME_CHANGED: yw
			} = Fd.IX2EngineActionTypes,
			{ optimizeFloat: nr, applyEasing: Gd, createBezierEasing: Iw } = qd.IX2EasingUtils,
			{ RENDER_GENERAL: Tw } = Fd.IX2EngineConstants,
			{ getItemConfigByKey: ua, getRenderType: bw, getStyleProp: mw } = qd.IX2VanillaUtils,
			Ow = (e, t) => {
				let {
						position: n,
						parameterId: r,
						actionGroups: a,
						destinationKeys: i,
						smoothing: o,
						restingValue: s,
						actionTypeId: u,
						customEasingFn: f,
						skipMotion: v,
						skipToValue: g
					} = e,
					{ parameters: p } = t.payload,
					E = Math.max(1 - o, 0.01),
					b = p[r];
				b == null && ((E = 1), (b = s));
				let I = Math.max(b, 0) || 0,
					O = nr(I - n),
					_ = v ? g : nr(n + O * E),
					S = _ * 100;
				if (_ === n && e.current) return e;
				let A, D, F, C;
				for (let k = 0, { length: X } = a; k < X; k++) {
					let { keyframe: z, actionItems: J } = a[k];
					if ((k === 0 && (A = J[0]), S >= z)) {
						A = J[0];
						let M = a[k + 1],
							T = M && S !== z;
						(D = T ? M.actionItems[0] : null), T && ((F = z / 100), (C = (M.keyframe - z) / 100));
					}
				}
				let B = {};
				if (A && !D)
					for (let k = 0, { length: X } = i; k < X; k++) {
						let z = i[k];
						B[z] = ua(u, z, A.config);
					}
				else if (A && D && F !== void 0 && C !== void 0) {
					let k = (_ - F) / C,
						X = A.config.easing,
						z = Gd(X, k, f);
					for (let J = 0, { length: M } = i; J < M; J++) {
						let T = i[J],
							N = ua(u, T, A.config),
							ee = (ua(u, T, D.config) - N) * z + N;
						B[T] = ee;
					}
				}
				return (0, kt.merge)(e, { position: _, current: B });
			},
			Aw = (e, t) => {
				let {
						active: n,
						origin: r,
						start: a,
						immediate: i,
						renderType: o,
						verbose: s,
						actionItem: u,
						destination: f,
						destinationKeys: v,
						pluginDuration: g,
						instanceDelay: p,
						customEasingFn: E,
						skipMotion: b
					} = e,
					I = u.config.easing,
					{ duration: O, delay: _ } = u.config;
				g != null && (O = g), (_ = p ?? _), o === Tw ? (O = 0) : (i || b) && (O = _ = 0);
				let { now: S } = t.payload;
				if (n && r) {
					let A = S - (a + _);
					if (s) {
						let k = S - a,
							X = O + _,
							z = nr(Math.min(Math.max(0, k / X), 1));
						e = (0, kt.set)(e, 'verboseTimeElapsed', X * z);
					}
					if (A < 0) return e;
					let D = nr(Math.min(Math.max(0, A / O), 1)),
						F = Gd(I, D, E),
						C = {},
						B = null;
					return (
						v.length &&
							(B = v.reduce((k, X) => {
								let z = f[X],
									J = parseFloat(r[X]) || 0,
									T = (parseFloat(z) - J) * F + J;
								return (k[X] = T), k;
							}, {})),
						(C.current = B),
						(C.position = D),
						D === 1 && ((C.active = !1), (C.complete = !0)),
						(0, kt.merge)(e, C)
					);
				}
				return e;
			},
			Sw = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case gw:
						return t.payload.ixInstances || Object.freeze({});
					case Ew:
						return Object.freeze({});
					case hw: {
						let {
								instanceId: n,
								elementId: r,
								actionItem: a,
								eventId: i,
								eventTarget: o,
								eventStateKey: s,
								actionListId: u,
								groupIndex: f,
								isCarrier: v,
								origin: g,
								destination: p,
								immediate: E,
								verbose: b,
								continuous: I,
								parameterId: O,
								actionGroups: _,
								smoothing: S,
								restingValue: A,
								pluginInstance: D,
								pluginDuration: F,
								instanceDelay: C,
								skipMotion: B,
								skipToValue: k
							} = t.payload,
							{ actionTypeId: X } = a,
							z = bw(X),
							J = mw(z, X),
							M = Object.keys(p).filter((N) => p[N] != null && typeof p[N] != 'string'),
							{ easing: T } = a.config;
						return (0, kt.set)(e, n, {
							id: n,
							elementId: r,
							active: !1,
							position: 0,
							start: 0,
							origin: g,
							destination: p,
							destinationKeys: M,
							immediate: E,
							verbose: b,
							current: null,
							actionItem: a,
							actionTypeId: X,
							eventId: i,
							eventTarget: o,
							eventStateKey: s,
							actionListId: u,
							groupIndex: f,
							renderType: z,
							isCarrier: v,
							styleProp: J,
							continuous: I,
							parameterId: O,
							actionGroups: _,
							smoothing: S,
							restingValue: A,
							pluginInstance: D,
							pluginDuration: F,
							instanceDelay: C,
							skipMotion: B,
							skipToValue: k,
							customEasingFn: Array.isArray(T) && T.length === 4 ? Iw(T) : void 0
						});
					}
					case vw: {
						let { instanceId: n, time: r } = t.payload;
						return (0, kt.mergeIn)(e, [n], { active: !0, complete: !1, start: r });
					}
					case _w: {
						let { instanceId: n } = t.payload;
						if (!e[n]) return e;
						let r = {},
							a = Object.keys(e),
							{ length: i } = a;
						for (let o = 0; o < i; o++) {
							let s = a[o];
							s !== n && (r[s] = e[s]);
						}
						return r;
					}
					case yw: {
						let n = e,
							r = Object.keys(e),
							{ length: a } = r;
						for (let i = 0; i < a; i++) {
							let o = r[i],
								s = e[o],
								u = s.continuous ? Ow : Aw;
							n = (0, kt.set)(n, o, u(s, t));
						}
						return n;
					}
					default:
						return e;
				}
			};
	});
	var Ud = l((la) => {
		'use strict';
		Object.defineProperty(la, '__esModule', { value: !0 });
		Object.defineProperty(la, 'ixParameters', {
			enumerable: !0,
			get: function () {
				return Nw;
			}
		});
		var Rw = Re(),
			{
				IX2_RAW_DATA_IMPORTED: ww,
				IX2_SESSION_STOPPED: Lw,
				IX2_PARAMETER_CHANGED: Cw
			} = Rw.IX2EngineActionTypes,
			Nw = (e = {}, t) => {
				switch (t.type) {
					case ww:
						return t.payload.ixParameters || {};
					case Lw:
						return {};
					case Cw: {
						let { key: n, value: r } = t.payload;
						return (e[n] = r), e;
					}
					default:
						return e;
				}
			};
	});
	var Bd = l((fa) => {
		'use strict';
		Object.defineProperty(fa, '__esModule', { value: !0 });
		Object.defineProperty(fa, 'default', {
			enumerable: !0,
			get: function () {
				return Uw;
			}
		});
		var Pw = Xr(),
			Dw = es(),
			Mw = ys(),
			xw = Ts(),
			Fw = Et(),
			qw = Vd(),
			Gw = Ud(),
			{ ixElements: Vw } = Fw.IX2ElementsReducer,
			Uw = (0, Pw.combineReducers)({
				ixData: Dw.ixData,
				ixRequest: Mw.ixRequest,
				ixSession: xw.ixSession,
				ixElements: Vw,
				ixInstances: qw.ixInstances,
				ixParameters: Gw.ixParameters
			});
	});
	var Xd = l((XF, kd) => {
		var Bw = tt(),
			kw = Te(),
			Xw = Qe(),
			Ww = '[object String]';
		function Hw(e) {
			return typeof e == 'string' || (!kw(e) && Xw(e) && Bw(e) == Ww);
		}
		kd.exports = Hw;
	});
	var Hd = l((WF, Wd) => {
		var Yw = Oi(),
			zw = Yw('length');
		Wd.exports = zw;
	});
	var zd = l((HF, Yd) => {
		var Kw = '\\ud800-\\udfff',
			jw = '\\u0300-\\u036f',
			Qw = '\\ufe20-\\ufe2f',
			$w = '\\u20d0-\\u20ff',
			Zw = jw + Qw + $w,
			Jw = '\\ufe0e\\ufe0f',
			eL = '\\u200d',
			tL = RegExp('[' + eL + Kw + Zw + Jw + ']');
		function nL(e) {
			return tL.test(e);
		}
		Yd.exports = nL;
	});
	var np = l((YF, tp) => {
		var jd = '\\ud800-\\udfff',
			rL = '\\u0300-\\u036f',
			iL = '\\ufe20-\\ufe2f',
			aL = '\\u20d0-\\u20ff',
			oL = rL + iL + aL,
			sL = '\\ufe0e\\ufe0f',
			uL = '[' + jd + ']',
			da = '[' + oL + ']',
			pa = '\\ud83c[\\udffb-\\udfff]',
			cL = '(?:' + da + '|' + pa + ')',
			Qd = '[^' + jd + ']',
			$d = '(?:\\ud83c[\\udde6-\\uddff]){2}',
			Zd = '[\\ud800-\\udbff][\\udc00-\\udfff]',
			lL = '\\u200d',
			Jd = cL + '?',
			ep = '[' + sL + ']?',
			fL = '(?:' + lL + '(?:' + [Qd, $d, Zd].join('|') + ')' + ep + Jd + ')*',
			dL = ep + Jd + fL,
			pL = '(?:' + [Qd + da + '?', da, $d, Zd, uL].join('|') + ')',
			Kd = RegExp(pa + '(?=' + pa + ')|' + pL + dL, 'g');
		function gL(e) {
			for (var t = (Kd.lastIndex = 0); Kd.test(e); ) ++t;
			return t;
		}
		tp.exports = gL;
	});
	var ip = l((zF, rp) => {
		var EL = Hd(),
			hL = zd(),
			vL = np();
		function _L(e) {
			return hL(e) ? vL(e) : EL(e);
		}
		rp.exports = _L;
	});
	var op = l((KF, ap) => {
		var yL = xn(),
			IL = Fn(),
			TL = lt(),
			bL = Xd(),
			mL = ip(),
			OL = '[object Map]',
			AL = '[object Set]';
		function SL(e) {
			if (e == null) return 0;
			if (TL(e)) return bL(e) ? mL(e) : e.length;
			var t = IL(e);
			return t == OL || t == AL ? e.size : yL(e).length;
		}
		ap.exports = SL;
	});
	var up = l((jF, sp) => {
		var RL = 'Expected a function';
		function wL(e) {
			if (typeof e != 'function') throw new TypeError(RL);
			return function () {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2]);
				}
				return !e.apply(this, t);
			};
		}
		sp.exports = wL;
	});
	var ga = l((QF, cp) => {
		var LL = nt(),
			CL = (function () {
				try {
					var e = LL(Object, 'defineProperty');
					return e({}, '', {}), e;
				} catch {}
			})();
		cp.exports = CL;
	});
	var Ea = l(($F, fp) => {
		var lp = ga();
		function NL(e, t, n) {
			t == '__proto__' && lp
				? lp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
				: (e[t] = n);
		}
		fp.exports = NL;
	});
	var pp = l((ZF, dp) => {
		var PL = Ea(),
			DL = An(),
			ML = Object.prototype,
			xL = ML.hasOwnProperty;
		function FL(e, t, n) {
			var r = e[t];
			(!(xL.call(e, t) && DL(r, n)) || (n === void 0 && !(t in e))) && PL(e, t, n);
		}
		dp.exports = FL;
	});
	var hp = l((JF, Ep) => {
		var qL = pp(),
			GL = nn(),
			VL = Nn(),
			gp = We(),
			UL = Pt();
		function BL(e, t, n, r) {
			if (!gp(e)) return e;
			t = GL(t, e);
			for (var a = -1, i = t.length, o = i - 1, s = e; s != null && ++a < i; ) {
				var u = UL(t[a]),
					f = n;
				if (u === '__proto__' || u === 'constructor' || u === 'prototype') return e;
				if (a != o) {
					var v = s[u];
					(f = r ? r(v, u, s) : void 0), f === void 0 && (f = gp(v) ? v : VL(t[a + 1]) ? [] : {});
				}
				qL(s, u, f), (s = s[u]);
			}
			return e;
		}
		Ep.exports = BL;
	});
	var _p = l((eq, vp) => {
		var kL = Vn(),
			XL = hp(),
			WL = nn();
		function HL(e, t, n) {
			for (var r = -1, a = t.length, i = {}; ++r < a; ) {
				var o = t[r],
					s = kL(e, o);
				n(s, o) && XL(i, WL(o, e), s);
			}
			return i;
		}
		vp.exports = HL;
	});
	var Ip = l((tq, yp) => {
		var YL = Ln(),
			zL = Cr(),
			KL = ci(),
			jL = ui(),
			QL = Object.getOwnPropertySymbols,
			$L = QL
				? function (e) {
						for (var t = []; e; ) YL(t, KL(e)), (e = zL(e));
						return t;
					}
				: jL;
		yp.exports = $L;
	});
	var bp = l((nq, Tp) => {
		function ZL(e) {
			var t = [];
			if (e != null) for (var n in Object(e)) t.push(n);
			return t;
		}
		Tp.exports = ZL;
	});
	var Op = l((rq, mp) => {
		var JL = We(),
			eC = Mn(),
			tC = bp(),
			nC = Object.prototype,
			rC = nC.hasOwnProperty;
		function iC(e) {
			if (!JL(e)) return tC(e);
			var t = eC(e),
				n = [];
			for (var r in e) (r == 'constructor' && (t || !rC.call(e, r))) || n.push(r);
			return n;
		}
		mp.exports = iC;
	});
	var Sp = l((iq, Ap) => {
		var aC = fi(),
			oC = Op(),
			sC = lt();
		function uC(e) {
			return sC(e) ? aC(e, !0) : oC(e);
		}
		Ap.exports = uC;
	});
	var wp = l((aq, Rp) => {
		var cC = si(),
			lC = Ip(),
			fC = Sp();
		function dC(e) {
			return cC(e, fC, lC);
		}
		Rp.exports = dC;
	});
	var Cp = l((oq, Lp) => {
		var pC = mi(),
			gC = rt(),
			EC = _p(),
			hC = wp();
		function vC(e, t) {
			if (e == null) return {};
			var n = pC(hC(e), function (r) {
				return [r];
			});
			return (
				(t = gC(t)),
				EC(e, n, function (r, a) {
					return t(r, a[0]);
				})
			);
		}
		Lp.exports = vC;
	});
	var Pp = l((sq, Np) => {
		var _C = rt(),
			yC = up(),
			IC = Cp();
		function TC(e, t) {
			return IC(e, yC(_C(t)));
		}
		Np.exports = TC;
	});
	var Mp = l((uq, Dp) => {
		var bC = xn(),
			mC = Fn(),
			OC = Qt(),
			AC = Te(),
			SC = lt(),
			RC = Cn(),
			wC = Mn(),
			LC = Dn(),
			CC = '[object Map]',
			NC = '[object Set]',
			PC = Object.prototype,
			DC = PC.hasOwnProperty;
		function MC(e) {
			if (e == null) return !0;
			if (
				SC(e) &&
				(AC(e) || typeof e == 'string' || typeof e.splice == 'function' || RC(e) || LC(e) || OC(e))
			)
				return !e.length;
			var t = mC(e);
			if (t == CC || t == NC) return !e.size;
			if (wC(e)) return !bC(e).length;
			for (var n in e) if (DC.call(e, n)) return !1;
			return !0;
		}
		Dp.exports = MC;
	});
	var Fp = l((cq, xp) => {
		var xC = Ea(),
			FC = ji(),
			qC = rt();
		function GC(e, t) {
			var n = {};
			return (
				(t = qC(t, 3)),
				FC(e, function (r, a, i) {
					xC(n, a, t(r, a, i));
				}),
				n
			);
		}
		xp.exports = GC;
	});
	var Gp = l((lq, qp) => {
		function VC(e, t) {
			for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; );
			return e;
		}
		qp.exports = VC;
	});
	var Up = l((fq, Vp) => {
		var UC = Bn();
		function BC(e) {
			return typeof e == 'function' ? e : UC;
		}
		Vp.exports = BC;
	});
	var kp = l((dq, Bp) => {
		var kC = Gp(),
			XC = Qi(),
			WC = Up(),
			HC = Te();
		function YC(e, t) {
			var n = HC(e) ? kC : XC;
			return n(e, WC(t));
		}
		Bp.exports = YC;
	});
	var Wp = l((pq, Xp) => {
		var zC = Ge(),
			KC = function () {
				return zC.Date.now();
			};
		Xp.exports = KC;
	});
	var zp = l((gq, Yp) => {
		var jC = We(),
			ha = Wp(),
			Hp = kn(),
			QC = 'Expected a function',
			$C = Math.max,
			ZC = Math.min;
		function JC(e, t, n) {
			var r,
				a,
				i,
				o,
				s,
				u,
				f = 0,
				v = !1,
				g = !1,
				p = !0;
			if (typeof e != 'function') throw new TypeError(QC);
			(t = Hp(t) || 0),
				jC(n) &&
					((v = !!n.leading),
					(g = 'maxWait' in n),
					(i = g ? $C(Hp(n.maxWait) || 0, t) : i),
					(p = 'trailing' in n ? !!n.trailing : p));
			function E(C) {
				var B = r,
					k = a;
				return (r = a = void 0), (f = C), (o = e.apply(k, B)), o;
			}
			function b(C) {
				return (f = C), (s = setTimeout(_, t)), v ? E(C) : o;
			}
			function I(C) {
				var B = C - u,
					k = C - f,
					X = t - B;
				return g ? ZC(X, i - k) : X;
			}
			function O(C) {
				var B = C - u,
					k = C - f;
				return u === void 0 || B >= t || B < 0 || (g && k >= i);
			}
			function _() {
				var C = ha();
				if (O(C)) return S(C);
				s = setTimeout(_, I(C));
			}
			function S(C) {
				return (s = void 0), p && r ? E(C) : ((r = a = void 0), o);
			}
			function A() {
				s !== void 0 && clearTimeout(s), (f = 0), (r = u = a = s = void 0);
			}
			function D() {
				return s === void 0 ? o : S(ha());
			}
			function F() {
				var C = ha(),
					B = O(C);
				if (((r = arguments), (a = this), (u = C), B)) {
					if (s === void 0) return b(u);
					if (g) return clearTimeout(s), (s = setTimeout(_, t)), E(u);
				}
				return s === void 0 && (s = setTimeout(_, t)), o;
			}
			return (F.cancel = A), (F.flush = D), F;
		}
		Yp.exports = JC;
	});
	var jp = l((Eq, Kp) => {
		var eN = zp(),
			tN = We(),
			nN = 'Expected a function';
		function rN(e, t, n) {
			var r = !0,
				a = !0;
			if (typeof e != 'function') throw new TypeError(nN);
			return (
				tN(n) && ((r = 'leading' in n ? !!n.leading : r), (a = 'trailing' in n ? !!n.trailing : a)),
				eN(e, t, { leading: r, maxWait: t, trailing: a })
			);
		}
		Kp.exports = rN;
	});
	var rr = l((va) => {
		'use strict';
		Object.defineProperty(va, '__esModule', { value: !0 });
		function iN(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		iN(va, {
			actionListPlaybackChanged: function () {
				return WN;
			},
			animationFrameChanged: function () {
				return GN;
			},
			clearRequested: function () {
				return MN;
			},
			elementStateChanged: function () {
				return XN;
			},
			eventListenerAdded: function () {
				return xN;
			},
			eventStateChanged: function () {
				return qN;
			},
			instanceAdded: function () {
				return UN;
			},
			instanceRemoved: function () {
				return kN;
			},
			instanceStarted: function () {
				return BN;
			},
			mediaQueriesDefined: function () {
				return YN;
			},
			parameterChanged: function () {
				return VN;
			},
			playbackRequested: function () {
				return PN;
			},
			previewRequested: function () {
				return NN;
			},
			rawDataImported: function () {
				return RN;
			},
			sessionInitialized: function () {
				return wN;
			},
			sessionStarted: function () {
				return LN;
			},
			sessionStopped: function () {
				return CN;
			},
			stopRequested: function () {
				return DN;
			},
			testFrameRendered: function () {
				return FN;
			},
			viewportWidthChanged: function () {
				return HN;
			}
		});
		var Qp = Re(),
			aN = Et(),
			{
				IX2_RAW_DATA_IMPORTED: oN,
				IX2_SESSION_INITIALIZED: sN,
				IX2_SESSION_STARTED: uN,
				IX2_SESSION_STOPPED: cN,
				IX2_PREVIEW_REQUESTED: lN,
				IX2_PLAYBACK_REQUESTED: fN,
				IX2_STOP_REQUESTED: dN,
				IX2_CLEAR_REQUESTED: pN,
				IX2_EVENT_LISTENER_ADDED: gN,
				IX2_TEST_FRAME_RENDERED: EN,
				IX2_EVENT_STATE_CHANGED: hN,
				IX2_ANIMATION_FRAME_CHANGED: vN,
				IX2_PARAMETER_CHANGED: _N,
				IX2_INSTANCE_ADDED: yN,
				IX2_INSTANCE_STARTED: IN,
				IX2_INSTANCE_REMOVED: TN,
				IX2_ELEMENT_STATE_CHANGED: bN,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: mN,
				IX2_VIEWPORT_WIDTH_CHANGED: ON,
				IX2_MEDIA_QUERIES_DEFINED: AN
			} = Qp.IX2EngineActionTypes,
			{ reifyState: SN } = aN.IX2VanillaUtils,
			RN = (e) => ({ type: oN, payload: { ...SN(e) } }),
			wN = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
				type: sN,
				payload: { hasBoundaryNodes: e, reducedMotion: t }
			}),
			LN = () => ({ type: uN }),
			CN = () => ({ type: cN }),
			NN = ({ rawData: e, defer: t }) => ({ type: lN, payload: { defer: t, rawData: e } }),
			PN = ({
				actionTypeId: e = Qp.ActionTypeConsts.GENERAL_START_ACTION,
				actionListId: t,
				actionItemId: n,
				eventId: r,
				allowEvents: a,
				immediate: i,
				testManual: o,
				verbose: s,
				rawData: u
			}) => ({
				type: fN,
				payload: {
					actionTypeId: e,
					actionListId: t,
					actionItemId: n,
					testManual: o,
					eventId: r,
					allowEvents: a,
					immediate: i,
					verbose: s,
					rawData: u
				}
			}),
			DN = (e) => ({ type: dN, payload: { actionListId: e } }),
			MN = () => ({ type: pN }),
			xN = (e, t) => ({ type: gN, payload: { target: e, listenerParams: t } }),
			FN = (e = 1) => ({ type: EN, payload: { step: e } }),
			qN = (e, t) => ({ type: hN, payload: { stateKey: e, newState: t } }),
			GN = (e, t) => ({ type: vN, payload: { now: e, parameters: t } }),
			VN = (e, t) => ({ type: _N, payload: { key: e, value: t } }),
			UN = (e) => ({ type: yN, payload: { ...e } }),
			BN = (e, t) => ({ type: IN, payload: { instanceId: e, time: t } }),
			kN = (e) => ({ type: TN, payload: { instanceId: e } }),
			XN = (e, t, n, r) => ({
				type: bN,
				payload: { elementId: e, actionTypeId: t, current: n, actionItem: r }
			}),
			WN = ({ actionListId: e, isPlaying: t }) => ({
				type: mN,
				payload: { actionListId: e, isPlaying: t }
			}),
			HN = ({ width: e, mediaQueries: t }) => ({
				type: ON,
				payload: { width: e, mediaQueries: t }
			}),
			YN = () => ({ type: AN });
	});
	var Jp = l((ya) => {
		'use strict';
		Object.defineProperty(ya, '__esModule', { value: !0 });
		function zN(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		zN(ya, {
			elementContains: function () {
				return aP;
			},
			getChildElements: function () {
				return sP;
			},
			getClosestElement: function () {
				return cP;
			},
			getProperty: function () {
				return eP;
			},
			getQuerySelector: function () {
				return nP;
			},
			getRefType: function () {
				return lP;
			},
			getSiblingElements: function () {
				return uP;
			},
			getStyle: function () {
				return JN;
			},
			getValidDocument: function () {
				return rP;
			},
			isSiblingNode: function () {
				return oP;
			},
			matchSelector: function () {
				return tP;
			},
			queryDocument: function () {
				return iP;
			},
			setStyle: function () {
				return ZN;
			}
		});
		var KN = Et(),
			jN = Re(),
			{ ELEMENT_MATCHES: _a } = KN.IX2BrowserSupport,
			{
				IX2_ID_DELIMITER: $p,
				HTML_ELEMENT: QN,
				PLAIN_OBJECT: $N,
				WF_PAGE: Zp
			} = jN.IX2EngineConstants;
		function ZN(e, t, n) {
			e.style[t] = n;
		}
		function JN(e, t) {
			if (t.startsWith('--'))
				return window.getComputedStyle(document.documentElement).getPropertyValue(t);
			if (e.style instanceof CSSStyleDeclaration) return e.style[t];
		}
		function eP(e, t) {
			return e[t];
		}
		function tP(e) {
			return (t) => t[_a](e);
		}
		function nP({ id: e, selector: t }) {
			if (e) {
				let n = e;
				if (e.indexOf($p) !== -1) {
					let r = e.split($p),
						a = r[0];
					if (((n = r[1]), a !== document.documentElement.getAttribute(Zp))) return null;
				}
				return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
			}
			return t;
		}
		function rP(e) {
			return e == null || e === document.documentElement.getAttribute(Zp) ? document : null;
		}
		function iP(e, t) {
			return Array.prototype.slice.call(document.querySelectorAll(t ? e + ' ' + t : e));
		}
		function aP(e, t) {
			return e.contains(t);
		}
		function oP(e, t) {
			return e !== t && e.parentNode === t.parentNode;
		}
		function sP(e) {
			let t = [];
			for (let n = 0, { length: r } = e || []; n < r; n++) {
				let { children: a } = e[n],
					{ length: i } = a;
				if (i) for (let o = 0; o < i; o++) t.push(a[o]);
			}
			return t;
		}
		function uP(e = []) {
			let t = [],
				n = [];
			for (let r = 0, { length: a } = e; r < a; r++) {
				let { parentNode: i } = e[r];
				if (!i || !i.children || !i.children.length || n.indexOf(i) !== -1) continue;
				n.push(i);
				let o = i.firstElementChild;
				for (; o != null; ) e.indexOf(o) === -1 && t.push(o), (o = o.nextElementSibling);
			}
			return t;
		}
		var cP = Element.prototype.closest
			? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
			: (e, t) => {
					if (!document.documentElement.contains(e)) return null;
					let n = e;
					do {
						if (n[_a] && n[_a](t)) return n;
						n = n.parentNode;
					} while (n != null);
					return null;
				};
		function lP(e) {
			return e != null && typeof e == 'object' ? (e instanceof Element ? QN : $N) : null;
		}
	});
	var Ia = l((_q, tg) => {
		var fP = We(),
			eg = Object.create,
			dP = (function () {
				function e() {}
				return function (t) {
					if (!fP(t)) return {};
					if (eg) return eg(t);
					e.prototype = t;
					var n = new e();
					return (e.prototype = void 0), n;
				};
			})();
		tg.exports = dP;
	});
	var ir = l((yq, ng) => {
		function pP() {}
		ng.exports = pP;
	});
	var or = l((Iq, rg) => {
		var gP = Ia(),
			EP = ir();
		function ar(e, t) {
			(this.__wrapped__ = e),
				(this.__actions__ = []),
				(this.__chain__ = !!t),
				(this.__index__ = 0),
				(this.__values__ = void 0);
		}
		ar.prototype = gP(EP.prototype);
		ar.prototype.constructor = ar;
		rg.exports = ar;
	});
	var sg = l((Tq, og) => {
		var ig = Tt(),
			hP = Qt(),
			vP = Te(),
			ag = ig ? ig.isConcatSpreadable : void 0;
		function _P(e) {
			return vP(e) || hP(e) || !!(ag && e && e[ag]);
		}
		og.exports = _P;
	});
	var lg = l((bq, cg) => {
		var yP = Ln(),
			IP = sg();
		function ug(e, t, n, r, a) {
			var i = -1,
				o = e.length;
			for (n || (n = IP), a || (a = []); ++i < o; ) {
				var s = e[i];
				t > 0 && n(s) ? (t > 1 ? ug(s, t - 1, n, r, a) : yP(a, s)) : r || (a[a.length] = s);
			}
			return a;
		}
		cg.exports = ug;
	});
	var dg = l((mq, fg) => {
		var TP = lg();
		function bP(e) {
			var t = e == null ? 0 : e.length;
			return t ? TP(e, 1) : [];
		}
		fg.exports = bP;
	});
	var gg = l((Oq, pg) => {
		function mP(e, t, n) {
			switch (n.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, n[0]);
				case 2:
					return e.call(t, n[0], n[1]);
				case 3:
					return e.call(t, n[0], n[1], n[2]);
			}
			return e.apply(t, n);
		}
		pg.exports = mP;
	});
	var vg = l((Aq, hg) => {
		var OP = gg(),
			Eg = Math.max;
		function AP(e, t, n) {
			return (
				(t = Eg(t === void 0 ? e.length - 1 : t, 0)),
				function () {
					for (var r = arguments, a = -1, i = Eg(r.length - t, 0), o = Array(i); ++a < i; )
						o[a] = r[t + a];
					a = -1;
					for (var s = Array(t + 1); ++a < t; ) s[a] = r[a];
					return (s[t] = n(o)), OP(e, this, s);
				}
			);
		}
		hg.exports = AP;
	});
	var yg = l((Sq, _g) => {
		function SP(e) {
			return function () {
				return e;
			};
		}
		_g.exports = SP;
	});
	var bg = l((Rq, Tg) => {
		var RP = yg(),
			Ig = ga(),
			wP = Bn(),
			LP = Ig
				? function (e, t) {
						return Ig(e, 'toString', {
							configurable: !0,
							enumerable: !1,
							value: RP(t),
							writable: !0
						});
					}
				: wP;
		Tg.exports = LP;
	});
	var Og = l((wq, mg) => {
		var CP = 800,
			NP = 16,
			PP = Date.now;
		function DP(e) {
			var t = 0,
				n = 0;
			return function () {
				var r = PP(),
					a = NP - (r - n);
				if (((n = r), a > 0)) {
					if (++t >= CP) return arguments[0];
				} else t = 0;
				return e.apply(void 0, arguments);
			};
		}
		mg.exports = DP;
	});
	var Sg = l((Lq, Ag) => {
		var MP = bg(),
			xP = Og(),
			FP = xP(MP);
		Ag.exports = FP;
	});
	var wg = l((Cq, Rg) => {
		var qP = dg(),
			GP = vg(),
			VP = Sg();
		function UP(e) {
			return VP(GP(e, void 0, qP), e + '');
		}
		Rg.exports = UP;
	});
	var Ng = l((Nq, Cg) => {
		var Lg = di(),
			BP = Lg && new Lg();
		Cg.exports = BP;
	});
	var Dg = l((Pq, Pg) => {
		function kP() {}
		Pg.exports = kP;
	});
	var Ta = l((Dq, xg) => {
		var Mg = Ng(),
			XP = Dg(),
			WP = Mg
				? function (e) {
						return Mg.get(e);
					}
				: XP;
		xg.exports = WP;
	});
	var qg = l((Mq, Fg) => {
		var HP = {};
		Fg.exports = HP;
	});
	var ba = l((xq, Vg) => {
		var Gg = qg(),
			YP = Object.prototype,
			zP = YP.hasOwnProperty;
		function KP(e) {
			for (var t = e.name + '', n = Gg[t], r = zP.call(Gg, t) ? n.length : 0; r--; ) {
				var a = n[r],
					i = a.func;
				if (i == null || i == e) return a.name;
			}
			return t;
		}
		Vg.exports = KP;
	});
	var ur = l((Fq, Ug) => {
		var jP = Ia(),
			QP = ir(),
			$P = 4294967295;
		function sr(e) {
			(this.__wrapped__ = e),
				(this.__actions__ = []),
				(this.__dir__ = 1),
				(this.__filtered__ = !1),
				(this.__iteratees__ = []),
				(this.__takeCount__ = $P),
				(this.__views__ = []);
		}
		sr.prototype = jP(QP.prototype);
		sr.prototype.constructor = sr;
		Ug.exports = sr;
	});
	var kg = l((qq, Bg) => {
		function ZP(e, t) {
			var n = -1,
				r = e.length;
			for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
			return t;
		}
		Bg.exports = ZP;
	});
	var Wg = l((Gq, Xg) => {
		var JP = ur(),
			e3 = or(),
			t3 = kg();
		function n3(e) {
			if (e instanceof JP) return e.clone();
			var t = new e3(e.__wrapped__, e.__chain__);
			return (
				(t.__actions__ = t3(e.__actions__)),
				(t.__index__ = e.__index__),
				(t.__values__ = e.__values__),
				t
			);
		}
		Xg.exports = n3;
	});
	var zg = l((Vq, Yg) => {
		var r3 = ur(),
			Hg = or(),
			i3 = ir(),
			a3 = Te(),
			o3 = Qe(),
			s3 = Wg(),
			u3 = Object.prototype,
			c3 = u3.hasOwnProperty;
		function cr(e) {
			if (o3(e) && !a3(e) && !(e instanceof r3)) {
				if (e instanceof Hg) return e;
				if (c3.call(e, '__wrapped__')) return s3(e);
			}
			return new Hg(e);
		}
		cr.prototype = i3.prototype;
		cr.prototype.constructor = cr;
		Yg.exports = cr;
	});
	var jg = l((Uq, Kg) => {
		var l3 = ur(),
			f3 = Ta(),
			d3 = ba(),
			p3 = zg();
		function g3(e) {
			var t = d3(e),
				n = p3[t];
			if (typeof n != 'function' || !(t in l3.prototype)) return !1;
			if (e === n) return !0;
			var r = f3(n);
			return !!r && e === r[0];
		}
		Kg.exports = g3;
	});
	var Jg = l((Bq, Zg) => {
		var Qg = or(),
			E3 = wg(),
			h3 = Ta(),
			ma = ba(),
			v3 = Te(),
			$g = jg(),
			_3 = 'Expected a function',
			y3 = 8,
			I3 = 32,
			T3 = 128,
			b3 = 256;
		function m3(e) {
			return E3(function (t) {
				var n = t.length,
					r = n,
					a = Qg.prototype.thru;
				for (e && t.reverse(); r--; ) {
					var i = t[r];
					if (typeof i != 'function') throw new TypeError(_3);
					if (a && !o && ma(i) == 'wrapper') var o = new Qg([], !0);
				}
				for (r = o ? r : n; ++r < n; ) {
					i = t[r];
					var s = ma(i),
						u = s == 'wrapper' ? h3(i) : void 0;
					u && $g(u[0]) && u[1] == (T3 | y3 | I3 | b3) && !u[4].length && u[9] == 1
						? (o = o[ma(u[0])].apply(o, u[3]))
						: (o = i.length == 1 && $g(i) ? o[s]() : o.thru(i));
				}
				return function () {
					var f = arguments,
						v = f[0];
					if (o && f.length == 1 && v3(v)) return o.plant(v).value();
					for (var g = 0, p = n ? t[g].apply(this, f) : v; ++g < n; ) p = t[g].call(this, p);
					return p;
				};
			});
		}
		Zg.exports = m3;
	});
	var tE = l((kq, eE) => {
		var O3 = Jg(),
			A3 = O3();
		eE.exports = A3;
	});
	var rE = l((Xq, nE) => {
		function S3(e, t, n) {
			return (
				e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e
			);
		}
		nE.exports = S3;
	});
	var aE = l((Wq, iE) => {
		var R3 = rE(),
			Oa = kn();
		function w3(e, t, n) {
			return (
				n === void 0 && ((n = t), (t = void 0)),
				n !== void 0 && ((n = Oa(n)), (n = n === n ? n : 0)),
				t !== void 0 && ((t = Oa(t)), (t = t === t ? t : 0)),
				R3(Oa(e), t, n)
			);
		}
		iE.exports = w3;
	});
	var mE = l((Ca) => {
		'use strict';
		Object.defineProperty(Ca, '__esModule', { value: !0 });
		Object.defineProperty(Ca, 'default', {
			enumerable: !0,
			get: function () {
				return l5;
			}
		});
		var L3 = La(tE()),
			C3 = La(Un()),
			N3 = La(aE()),
			ht = Re(),
			Aa = Na(),
			lr = rr(),
			P3 = Et();
		function La(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var {
				MOUSE_CLICK: D3,
				MOUSE_SECOND_CLICK: M3,
				MOUSE_DOWN: x3,
				MOUSE_UP: F3,
				MOUSE_OVER: q3,
				MOUSE_OUT: G3,
				DROPDOWN_CLOSE: V3,
				DROPDOWN_OPEN: U3,
				SLIDER_ACTIVE: B3,
				SLIDER_INACTIVE: k3,
				TAB_ACTIVE: X3,
				TAB_INACTIVE: W3,
				NAVBAR_CLOSE: H3,
				NAVBAR_OPEN: Y3,
				MOUSE_MOVE: z3,
				PAGE_SCROLL_DOWN: gE,
				SCROLL_INTO_VIEW: EE,
				SCROLL_OUT_OF_VIEW: K3,
				PAGE_SCROLL_UP: j3,
				SCROLLING_IN_VIEW: Q3,
				PAGE_FINISH: hE,
				ECOMMERCE_CART_CLOSE: $3,
				ECOMMERCE_CART_OPEN: Z3,
				PAGE_START: vE,
				PAGE_SCROLL: J3
			} = ht.EventTypeConsts,
			Sa = 'COMPONENT_ACTIVE',
			_E = 'COMPONENT_INACTIVE',
			{ COLON_DELIMITER: oE } = ht.IX2EngineConstants,
			{ getNamespacedParameterId: sE } = P3.IX2VanillaUtils,
			yE = (e) => (t) => (typeof t == 'object' && e(t) ? !0 : t),
			dn = yE(({ element: e, nativeEvent: t }) => e === t.target),
			e5 = yE(({ element: e, nativeEvent: t }) => e.contains(t.target)),
			Ke = (0, L3.default)([dn, e5]),
			IE = (e, t) => {
				if (t) {
					let { ixData: n } = e.getState(),
						{ events: r } = n,
						a = r[t];
					if (a && !n5[a.eventTypeId]) return a;
				}
				return null;
			},
			t5 = ({ store: e, event: t }) => {
				let { action: n } = t,
					{ autoStopEventId: r } = n.config;
				return !!IE(e, r);
			},
			Le = ({ store: e, event: t, element: n, eventStateKey: r }, a) => {
				let { action: i, id: o } = t,
					{ actionListId: s, autoStopEventId: u } = i.config,
					f = IE(e, u);
				return (
					f &&
						(0, Aa.stopActionGroup)({
							store: e,
							eventId: u,
							eventTarget: n,
							eventStateKey: u + oE + r.split(oE)[1],
							actionListId: (0, C3.default)(f, 'action.config.actionListId')
						}),
					(0, Aa.stopActionGroup)({
						store: e,
						eventId: o,
						eventTarget: n,
						eventStateKey: r,
						actionListId: s
					}),
					(0, Aa.startActionGroup)({
						store: e,
						eventId: o,
						eventTarget: n,
						eventStateKey: r,
						actionListId: s
					}),
					a
				);
			},
			Ve = (e, t) => (n, r) => (e(n, r) === !0 ? t(n, r) : r),
			pn = { handler: Ve(Ke, Le) },
			TE = { ...pn, types: [Sa, _E].join(' ') },
			Ra = [
				{ target: window, types: 'resize orientationchange', throttle: !0 },
				{ target: document, types: 'scroll wheel readystatechange IX2_PAGE_UPDATE', throttle: !0 }
			],
			uE = 'mouseover mouseout',
			wa = { types: Ra },
			n5 = { PAGE_START: vE, PAGE_FINISH: hE },
			fn = (() => {
				let e = window.pageXOffset !== void 0,
					n = document.compatMode === 'CSS1Compat' ? document.documentElement : document.body;
				return () => ({
					scrollLeft: e ? window.pageXOffset : n.scrollLeft,
					scrollTop: e ? window.pageYOffset : n.scrollTop,
					stiffScrollTop: (0, N3.default)(
						e ? window.pageYOffset : n.scrollTop,
						0,
						n.scrollHeight - window.innerHeight
					),
					scrollWidth: n.scrollWidth,
					scrollHeight: n.scrollHeight,
					clientWidth: n.clientWidth,
					clientHeight: n.clientHeight,
					innerWidth: window.innerWidth,
					innerHeight: window.innerHeight
				});
			})(),
			r5 = (e, t) =>
				!(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
			i5 = ({ element: e, nativeEvent: t }) => {
				let { type: n, target: r, relatedTarget: a } = t,
					i = e.contains(r);
				if (n === 'mouseover' && i) return !0;
				let o = e.contains(a);
				return !!(n === 'mouseout' && i && o);
			},
			a5 = (e) => {
				let {
						element: t,
						event: { config: n }
					} = e,
					{ clientWidth: r, clientHeight: a } = fn(),
					i = n.scrollOffsetValue,
					u = n.scrollOffsetUnit === 'PX' ? i : (a * (i || 0)) / 100;
				return r5(t.getBoundingClientRect(), { left: 0, top: u, right: r, bottom: a - u });
			},
			bE = (e) => (t, n) => {
				let { type: r } = t.nativeEvent,
					a = [Sa, _E].indexOf(r) !== -1 ? r === Sa : n.isActive,
					i = { ...n, isActive: a };
				return ((!n || i.isActive !== n.isActive) && e(t, i)) || i;
			},
			cE = (e) => (t, n) => {
				let r = { elementHovered: i5(t) };
				return ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r)) || r;
			},
			o5 = (e) => (t, n) => {
				let r = { ...n, elementVisible: a5(t) };
				return ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) && e(t, r)) || r;
			},
			lE =
				(e) =>
				(t, n = {}) => {
					let { stiffScrollTop: r, scrollHeight: a, innerHeight: i } = fn(),
						{
							event: { config: o, eventTypeId: s }
						} = t,
						{ scrollOffsetValue: u, scrollOffsetUnit: f } = o,
						v = f === 'PX',
						g = a - i,
						p = Number((r / g).toFixed(2));
					if (n && n.percentTop === p) return n;
					let E = (v ? u : (i * (u || 0)) / 100) / g,
						b,
						I,
						O = 0;
					n && ((b = p > n.percentTop), (I = n.scrollingDown !== b), (O = I ? p : n.anchorTop));
					let _ = s === gE ? p >= O + E : p <= O - E,
						S = { ...n, percentTop: p, inBounds: _, anchorTop: O, scrollingDown: b };
					return (n && _ && (I || S.inBounds !== n.inBounds) && e(t, S)) || S;
				},
			s5 = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
			u5 = (e) => (t, n) => {
				let r = { finished: document.readyState === 'complete' };
				return r.finished && !(n && n.finshed) && e(t), r;
			},
			c5 = (e) => (t, n) => {
				let r = { started: !0 };
				return n || e(t), r;
			},
			fE =
				(e) =>
				(t, n = { clickCount: 0 }) => {
					let r = { clickCount: (n.clickCount % 2) + 1 };
					return (r.clickCount !== n.clickCount && e(t, r)) || r;
				},
			fr = (e = !0) => ({
				...TE,
				handler: Ve(
					e ? Ke : dn,
					bE((t, n) => (n.isActive ? pn.handler(t, n) : n))
				)
			}),
			dr = (e = !0) => ({
				...TE,
				handler: Ve(
					e ? Ke : dn,
					bE((t, n) => (n.isActive ? n : pn.handler(t, n)))
				)
			}),
			dE = {
				...wa,
				handler: o5((e, t) => {
					let { elementVisible: n } = t,
						{ event: r, store: a } = e,
						{ ixData: i } = a.getState(),
						{ events: o } = i;
					return !o[r.action.config.autoStopEventId] && t.triggered
						? t
						: (r.eventTypeId === EE) === n
							? (Le(e), { ...t, triggered: !0 })
							: t;
				})
			},
			pE = 0.05,
			l5 = {
				[B3]: fr(),
				[k3]: dr(),
				[U3]: fr(),
				[V3]: dr(),
				[Y3]: fr(!1),
				[H3]: dr(!1),
				[X3]: fr(),
				[W3]: dr(),
				[Z3]: { types: 'ecommerce-cart-open', handler: Ve(Ke, Le) },
				[$3]: { types: 'ecommerce-cart-close', handler: Ve(Ke, Le) },
				[D3]: {
					types: 'click',
					handler: Ve(
						Ke,
						fE((e, { clickCount: t }) => {
							t5(e) ? t === 1 && Le(e) : Le(e);
						})
					)
				},
				[M3]: {
					types: 'click',
					handler: Ve(
						Ke,
						fE((e, { clickCount: t }) => {
							t === 2 && Le(e);
						})
					)
				},
				[x3]: { ...pn, types: 'mousedown' },
				[F3]: { ...pn, types: 'mouseup' },
				[q3]: {
					types: uE,
					handler: Ve(
						Ke,
						cE((e, t) => {
							t.elementHovered && Le(e);
						})
					)
				},
				[G3]: {
					types: uE,
					handler: Ve(
						Ke,
						cE((e, t) => {
							t.elementHovered || Le(e);
						})
					)
				},
				[z3]: {
					types: 'mousemove mouseout scroll',
					handler: (
						{ store: e, element: t, eventConfig: n, nativeEvent: r, eventStateKey: a },
						i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
					) => {
						let {
								basedOn: o,
								selectedAxis: s,
								continuousParameterGroupId: u,
								reverse: f,
								restingState: v = 0
							} = n,
							{
								clientX: g = i.clientX,
								clientY: p = i.clientY,
								pageX: E = i.pageX,
								pageY: b = i.pageY
							} = r,
							I = s === 'X_AXIS',
							O = r.type === 'mouseout',
							_ = v / 100,
							S = u,
							A = !1;
						switch (o) {
							case ht.EventBasedOn.VIEWPORT: {
								_ = I
									? Math.min(g, window.innerWidth) / window.innerWidth
									: Math.min(p, window.innerHeight) / window.innerHeight;
								break;
							}
							case ht.EventBasedOn.PAGE: {
								let { scrollLeft: D, scrollTop: F, scrollWidth: C, scrollHeight: B } = fn();
								_ = I ? Math.min(D + E, C) / C : Math.min(F + b, B) / B;
								break;
							}
							case ht.EventBasedOn.ELEMENT:
							default: {
								S = sE(a, u);
								let D = r.type.indexOf('mouse') === 0;
								if (D && Ke({ element: t, nativeEvent: r }) !== !0) break;
								let F = t.getBoundingClientRect(),
									{ left: C, top: B, width: k, height: X } = F;
								if (!D && !s5({ left: g, top: p }, F)) break;
								(A = !0), (_ = I ? (g - C) / k : (p - B) / X);
								break;
							}
						}
						return (
							O && (_ > 1 - pE || _ < pE) && (_ = Math.round(_)),
							(o !== ht.EventBasedOn.ELEMENT || A || A !== i.elementHovered) &&
								((_ = f ? 1 - _ : _), e.dispatch((0, lr.parameterChanged)(S, _))),
							{ elementHovered: A, clientX: g, clientY: p, pageX: E, pageY: b }
						);
					}
				},
				[J3]: {
					types: Ra,
					handler: ({ store: e, eventConfig: t }) => {
						let { continuousParameterGroupId: n, reverse: r } = t,
							{ scrollTop: a, scrollHeight: i, clientHeight: o } = fn(),
							s = a / (i - o);
						(s = r ? 1 - s : s), e.dispatch((0, lr.parameterChanged)(n, s));
					}
				},
				[Q3]: {
					types: Ra,
					handler: (
						{ element: e, store: t, eventConfig: n, eventStateKey: r },
						a = { scrollPercent: 0 }
					) => {
						let {
								scrollLeft: i,
								scrollTop: o,
								scrollWidth: s,
								scrollHeight: u,
								clientHeight: f
							} = fn(),
							{
								basedOn: v,
								selectedAxis: g,
								continuousParameterGroupId: p,
								startsEntering: E,
								startsExiting: b,
								addEndOffset: I,
								addStartOffset: O,
								addOffsetValue: _ = 0,
								endOffsetValue: S = 0
							} = n,
							A = g === 'X_AXIS';
						if (v === ht.EventBasedOn.VIEWPORT) {
							let D = A ? i / s : o / u;
							return (
								D !== a.scrollPercent && t.dispatch((0, lr.parameterChanged)(p, D)),
								{ scrollPercent: D }
							);
						} else {
							let D = sE(r, p),
								F = e.getBoundingClientRect(),
								C = (O ? _ : 0) / 100,
								B = (I ? S : 0) / 100;
							(C = E ? C : 1 - C), (B = b ? B : 1 - B);
							let k = F.top + Math.min(F.height * C, f),
								z = F.top + F.height * B - k,
								J = Math.min(f + z, u),
								T = Math.min(Math.max(0, f - k), J) / J;
							return (
								T !== a.scrollPercent && t.dispatch((0, lr.parameterChanged)(D, T)),
								{ scrollPercent: T }
							);
						}
					}
				},
				[EE]: dE,
				[K3]: dE,
				[gE]: {
					...wa,
					handler: lE((e, t) => {
						t.scrollingDown && Le(e);
					})
				},
				[j3]: {
					...wa,
					handler: lE((e, t) => {
						t.scrollingDown || Le(e);
					})
				},
				[hE]: { types: 'readystatechange IX2_PAGE_UPDATE', handler: Ve(dn, u5(Le)) },
				[vE]: { types: 'readystatechange IX2_PAGE_UPDATE', handler: Ve(dn, c5(Le)) }
			};
	});
	var Na = l((Ua) => {
		'use strict';
		Object.defineProperty(Ua, '__esModule', { value: !0 });
		function f5(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		f5(Ua, {
			observeRequests: function () {
				return V5;
			},
			startActionGroup: function () {
				return qa;
			},
			startEngine: function () {
				return vr;
			},
			stopActionGroup: function () {
				return Fa;
			},
			stopAllActionGroups: function () {
				return DE;
			},
			stopEngine: function () {
				return _r;
			}
		});
		var d5 = Ze(wi()),
			ot = Ze(Un()),
			p5 = Ze(op()),
			g5 = Ze(Pp()),
			E5 = Ze(Mp()),
			h5 = Ze(Fp()),
			gn = Ze(kp()),
			v5 = Ze(jp()),
			De = Re(),
			SE = Et(),
			he = rr(),
			ye = y5(Jp()),
			_5 = Ze(mE());
		function Ze(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function RE(e) {
			if (typeof WeakMap != 'function') return null;
			var t = new WeakMap(),
				n = new WeakMap();
			return (RE = function (r) {
				return r ? n : t;
			})(e);
		}
		function y5(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e };
			var n = RE(t);
			if (n && n.has(e)) return n.get(e);
			var r = { __proto__: null },
				a = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
					var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
					o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
				}
			return (r.default = e), n && n.set(e, r), r;
		}
		var I5 = Object.keys(De.QuickEffectIds),
			Pa = (e) => I5.includes(e),
			{
				COLON_DELIMITER: Da,
				BOUNDARY_SELECTOR: pr,
				HTML_ELEMENT: wE,
				RENDER_GENERAL: T5,
				W_MOD_IX: OE
			} = De.IX2EngineConstants,
			{
				getAffectedElements: gr,
				getElementId: b5,
				getDestinationValues: Ma,
				observeStore: vt,
				getInstanceId: m5,
				renderHTMLElement: O5,
				clearAllStyles: LE,
				getMaxDurationItemIndex: A5,
				getComputedStyle: S5,
				getInstanceOrigin: R5,
				reduceListToGroup: w5,
				shouldNamespaceEventParameter: L5,
				getNamespacedParameterId: C5,
				shouldAllowMediaQuery: Er,
				cleanupHTMLElement: N5,
				clearObjectCache: P5,
				stringifyTarget: D5,
				mediaQueriesEqual: M5,
				shallowEqual: x5
			} = SE.IX2VanillaUtils,
			{ isPluginType: hr, createPluginInstance: xa, getPluginDuration: F5 } = SE.IX2VanillaPlugins,
			AE = navigator.userAgent,
			q5 = AE.match(/iPad/i) || AE.match(/iPhone/),
			G5 = 12;
		function V5(e) {
			vt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: k5 }),
				vt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: X5 }),
				vt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: W5 }),
				vt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: H5 });
		}
		function U5(e) {
			vt({
				store: e,
				select: ({ ixSession: t }) => t.mediaQueryKey,
				onChange: () => {
					_r(e), LE({ store: e, elementApi: ye }), vr({ store: e, allowEvents: !0 }), CE();
				}
			});
		}
		function B5(e, t) {
			let n = vt({
				store: e,
				select: ({ ixSession: r }) => r.tick,
				onChange: (r) => {
					t(r), n();
				}
			});
		}
		function k5({ rawData: e, defer: t }, n) {
			let r = () => {
				vr({ store: n, rawData: e, allowEvents: !0 }), CE();
			};
			t ? setTimeout(r, 0) : r();
		}
		function CE() {
			document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'));
		}
		function X5(e, t) {
			let {
					actionTypeId: n,
					actionListId: r,
					actionItemId: a,
					eventId: i,
					allowEvents: o,
					immediate: s,
					testManual: u,
					verbose: f = !0
				} = e,
				{ rawData: v } = e;
			if (r && a && v && s) {
				let g = v.actionLists[r];
				g && (v = w5({ actionList: g, actionItemId: a, rawData: v }));
			}
			if (
				(vr({ store: t, rawData: v, allowEvents: o, testManual: u }),
				(r && n === De.ActionTypeConsts.GENERAL_START_ACTION) || Pa(n))
			) {
				Fa({ store: t, actionListId: r }), PE({ store: t, actionListId: r, eventId: i });
				let g = qa({ store: t, eventId: i, actionListId: r, immediate: s, verbose: f });
				f && g && t.dispatch((0, he.actionListPlaybackChanged)({ actionListId: r, isPlaying: !s }));
			}
		}
		function W5({ actionListId: e }, t) {
			e ? Fa({ store: t, actionListId: e }) : DE({ store: t }), _r(t);
		}
		function H5(e, t) {
			_r(t), LE({ store: t, elementApi: ye });
		}
		function vr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
			let { ixSession: a } = e.getState();
			t && e.dispatch((0, he.rawDataImported)(t)),
				a.active ||
					(e.dispatch(
						(0, he.sessionInitialized)({
							hasBoundaryNodes: !!document.querySelector(pr),
							reducedMotion:
								document.body.hasAttribute('data-wf-ix-vacation') &&
								window.matchMedia('(prefers-reduced-motion)').matches
						})
					),
					n && ($5(e), Y5(), e.getState().ixSession.hasDefinedMediaQueries && U5(e)),
					e.dispatch((0, he.sessionStarted)()),
					z5(e, r));
		}
		function Y5() {
			let { documentElement: e } = document;
			e.className.indexOf(OE) === -1 && (e.className += ` ${OE}`);
		}
		function z5(e, t) {
			let n = (r) => {
				let { ixSession: a, ixParameters: i } = e.getState();
				a.active &&
					(e.dispatch((0, he.animationFrameChanged)(r, i)),
					t ? B5(e, n) : requestAnimationFrame(n));
			};
			n(window.performance.now());
		}
		function _r(e) {
			let { ixSession: t } = e.getState();
			if (t.active) {
				let { eventListeners: n } = t;
				n.forEach(K5), P5(), e.dispatch((0, he.sessionStopped)());
			}
		}
		function K5({ target: e, listenerParams: t }) {
			e.removeEventListener.apply(e, t);
		}
		function j5({
			store: e,
			eventStateKey: t,
			eventTarget: n,
			eventId: r,
			eventConfig: a,
			actionListId: i,
			parameterGroup: o,
			smoothing: s,
			restingValue: u
		}) {
			let { ixData: f, ixSession: v } = e.getState(),
				{ events: g } = f,
				p = g[r],
				{ eventTypeId: E } = p,
				b = {},
				I = {},
				O = [],
				{ continuousActionGroups: _ } = o,
				{ id: S } = o;
			L5(E, a) && (S = C5(t, S));
			let A = v.hasBoundaryNodes && n ? ye.getClosestElement(n, pr) : null;
			_.forEach((D) => {
				let { keyframe: F, actionItems: C } = D;
				C.forEach((B) => {
					let { actionTypeId: k } = B,
						{ target: X } = B.config;
					if (!X) return;
					let z = X.boundaryMode ? A : null,
						J = D5(X) + Da + k;
					if (((I[J] = Q5(I[J], F, B)), !b[J])) {
						b[J] = !0;
						let { config: M } = B;
						gr({ config: M, event: p, eventTarget: n, elementRoot: z, elementApi: ye }).forEach(
							(T) => {
								O.push({ element: T, key: J });
							}
						);
					}
				});
			}),
				O.forEach(({ element: D, key: F }) => {
					let C = I[F],
						B = (0, ot.default)(C, '[0].actionItems[0]', {}),
						{ actionTypeId: k } = B,
						z = (
							k === De.ActionTypeConsts.PLUGIN_RIVE
								? (B.config?.target?.selectorGuids || []).length === 0
								: hr(k)
						)
							? xa(k)(D, B)
							: null,
						J = Ma({ element: D, actionItem: B, elementApi: ye }, z);
					Ga({
						store: e,
						element: D,
						eventId: r,
						actionListId: i,
						actionItem: B,
						destination: J,
						continuous: !0,
						parameterId: S,
						actionGroups: C,
						smoothing: s,
						restingValue: u,
						pluginInstance: z
					});
				});
		}
		function Q5(e = [], t, n) {
			let r = [...e],
				a;
			return (
				r.some((i, o) => (i.keyframe === t ? ((a = o), !0) : !1)),
				a == null && ((a = r.length), r.push({ keyframe: t, actionItems: [] })),
				r[a].actionItems.push(n),
				r
			);
		}
		function $5(e) {
			let { ixData: t } = e.getState(),
				{ eventTypeMap: n } = t;
			NE(e),
				(0, gn.default)(n, (a, i) => {
					let o = _5.default[i];
					if (!o) {
						console.warn(`IX2 event type not configured: ${i}`);
						return;
					}
					rD({ logic: o, store: e, events: a });
				});
			let { ixSession: r } = e.getState();
			r.eventListeners.length && J5(e);
		}
		var Z5 = ['resize', 'orientationchange'];
		function J5(e) {
			let t = () => {
				NE(e);
			};
			Z5.forEach((n) => {
				window.addEventListener(n, t), e.dispatch((0, he.eventListenerAdded)(window, [n, t]));
			}),
				t();
		}
		function NE(e) {
			let { ixSession: t, ixData: n } = e.getState(),
				r = window.innerWidth;
			if (r !== t.viewportWidth) {
				let { mediaQueries: a } = n;
				e.dispatch((0, he.viewportWidthChanged)({ width: r, mediaQueries: a }));
			}
		}
		var eD = (e, t) => (0, g5.default)((0, h5.default)(e, t), E5.default),
			tD = (e, t) => {
				(0, gn.default)(e, (n, r) => {
					n.forEach((a, i) => {
						let o = r + Da + i;
						t(a, r, o);
					});
				});
			},
			nD = (e) => {
				let t = { target: e.target, targets: e.targets };
				return gr({ config: t, elementApi: ye });
			};
		function rD({ logic: e, store: t, events: n }) {
			iD(n);
			let { types: r, handler: a } = e,
				{ ixData: i } = t.getState(),
				{ actionLists: o } = i,
				s = eD(n, nD);
			if (!(0, p5.default)(s)) return;
			(0, gn.default)(s, (g, p) => {
				let E = n[p],
					{ action: b, id: I, mediaQueries: O = i.mediaQueryKeys } = E,
					{ actionListId: _ } = b.config;
				M5(O, i.mediaQueryKeys) || t.dispatch((0, he.mediaQueriesDefined)()),
					b.actionTypeId === De.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
						(Array.isArray(E.config) ? E.config : [E.config]).forEach((A) => {
							let { continuousParameterGroupId: D } = A,
								F = (0, ot.default)(o, `${_}.continuousParameterGroups`, []),
								C = (0, d5.default)(F, ({ id: X }) => X === D),
								B = (A.smoothing || 0) / 100,
								k = (A.restingState || 0) / 100;
							C &&
								g.forEach((X, z) => {
									let J = I + Da + z;
									j5({
										store: t,
										eventStateKey: J,
										eventTarget: X,
										eventId: I,
										eventConfig: A,
										actionListId: _,
										parameterGroup: C,
										smoothing: B,
										restingValue: k
									});
								});
						}),
					(b.actionTypeId === De.ActionTypeConsts.GENERAL_START_ACTION || Pa(b.actionTypeId)) &&
						PE({ store: t, actionListId: _, eventId: I });
			});
			let u = (g) => {
					let { ixSession: p } = t.getState();
					tD(s, (E, b, I) => {
						let O = n[b],
							_ = p.eventState[I],
							{ action: S, mediaQueries: A = i.mediaQueryKeys } = O;
						if (!Er(A, p.mediaQueryKey)) return;
						let D = (F = {}) => {
							let C = a(
								{
									store: t,
									element: E,
									event: O,
									eventConfig: F,
									nativeEvent: g,
									eventStateKey: I
								},
								_
							);
							x5(C, _) || t.dispatch((0, he.eventStateChanged)(I, C));
						};
						S.actionTypeId === De.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
							? (Array.isArray(O.config) ? O.config : [O.config]).forEach(D)
							: D();
					});
				},
				f = (0, v5.default)(u, G5),
				v = ({ target: g = document, types: p, throttle: E }) => {
					p.split(' ')
						.filter(Boolean)
						.forEach((b) => {
							let I = E ? f : u;
							g.addEventListener(b, I), t.dispatch((0, he.eventListenerAdded)(g, [b, I]));
						});
				};
			Array.isArray(r) ? r.forEach(v) : typeof r == 'string' && v(e);
		}
		function iD(e) {
			if (!q5) return;
			let t = {},
				n = '';
			for (let r in e) {
				let { eventTypeId: a, target: i } = e[r],
					o = ye.getQuerySelector(i);
				t[o] ||
					((a === De.EventTypeConsts.MOUSE_CLICK || a === De.EventTypeConsts.MOUSE_SECOND_CLICK) &&
						((t[o] = !0), (n += o + '{cursor: pointer;touch-action: manipulation;}')));
			}
			if (n) {
				let r = document.createElement('style');
				(r.textContent = n), document.body.appendChild(r);
			}
		}
		function PE({ store: e, actionListId: t, eventId: n }) {
			let { ixData: r, ixSession: a } = e.getState(),
				{ actionLists: i, events: o } = r,
				s = o[n],
				u = i[t];
			if (u && u.useFirstGroupAsInitialState) {
				let f = (0, ot.default)(u, 'actionItemGroups[0].actionItems', []),
					v = (0, ot.default)(s, 'mediaQueries', r.mediaQueryKeys);
				if (!Er(v, a.mediaQueryKey)) return;
				f.forEach((g) => {
					let { config: p, actionTypeId: E } = g,
						b =
							p?.target?.useEventTarget === !0 && p?.target?.objectId == null
								? { target: s.target, targets: s.targets }
								: p,
						I = gr({ config: b, event: s, elementApi: ye }),
						O = hr(E);
					I.forEach((_) => {
						let S = O ? xa(E)(_, g) : null;
						Ga({
							destination: Ma({ element: _, actionItem: g, elementApi: ye }, S),
							immediate: !0,
							store: e,
							element: _,
							eventId: n,
							actionItem: g,
							actionListId: t,
							pluginInstance: S
						});
					});
				});
			}
		}
		function DE({ store: e }) {
			let { ixInstances: t } = e.getState();
			(0, gn.default)(t, (n) => {
				if (!n.continuous) {
					let { actionListId: r, verbose: a } = n;
					Va(n, e),
						a && e.dispatch((0, he.actionListPlaybackChanged)({ actionListId: r, isPlaying: !1 }));
				}
			});
		}
		function Fa({ store: e, eventId: t, eventTarget: n, eventStateKey: r, actionListId: a }) {
			let { ixInstances: i, ixSession: o } = e.getState(),
				s = o.hasBoundaryNodes && n ? ye.getClosestElement(n, pr) : null;
			(0, gn.default)(i, (u) => {
				let f = (0, ot.default)(u, 'actionItem.config.target.boundaryMode'),
					v = r ? u.eventStateKey === r : !0;
				if (u.actionListId === a && u.eventId === t && v) {
					if (s && f && !ye.elementContains(s, u.element)) return;
					Va(u, e),
						u.verbose &&
							e.dispatch((0, he.actionListPlaybackChanged)({ actionListId: a, isPlaying: !1 }));
				}
			});
		}
		function qa({
			store: e,
			eventId: t,
			eventTarget: n,
			eventStateKey: r,
			actionListId: a,
			groupIndex: i = 0,
			immediate: o,
			verbose: s
		}) {
			let { ixData: u, ixSession: f } = e.getState(),
				{ events: v } = u,
				g = v[t] || {},
				{ mediaQueries: p = u.mediaQueryKeys } = g,
				E = (0, ot.default)(u, `actionLists.${a}`, {}),
				{ actionItemGroups: b, useFirstGroupAsInitialState: I } = E;
			if (!b || !b.length) return !1;
			i >= b.length && (0, ot.default)(g, 'config.loop') && (i = 0), i === 0 && I && i++;
			let _ = (i === 0 || (i === 1 && I)) && Pa(g.action?.actionTypeId) ? g.config.delay : void 0,
				S = (0, ot.default)(b, [i, 'actionItems'], []);
			if (!S.length || !Er(p, f.mediaQueryKey)) return !1;
			let A = f.hasBoundaryNodes && n ? ye.getClosestElement(n, pr) : null,
				D = A5(S),
				F = !1;
			return (
				S.forEach((C, B) => {
					let { config: k, actionTypeId: X } = C,
						z = hr(X),
						{ target: J } = k;
					if (!J) return;
					let M = J.boundaryMode ? A : null;
					gr({ config: k, event: g, eventTarget: n, elementRoot: M, elementApi: ye }).forEach(
						(N, W) => {
							let V = z ? xa(X)(N, C) : null,
								ee = z ? F5(X)(N, C) : null;
							F = !0;
							let Z = D === B && W === 0,
								ue = S5({ element: N, actionItem: C }),
								Ie = Ma({ element: N, actionItem: C, elementApi: ye }, V);
							Ga({
								store: e,
								element: N,
								actionItem: C,
								eventId: t,
								eventTarget: n,
								eventStateKey: r,
								actionListId: a,
								groupIndex: i,
								isCarrier: Z,
								computedStyle: ue,
								destination: Ie,
								immediate: o,
								verbose: s,
								pluginInstance: V,
								pluginDuration: ee,
								instanceDelay: _
							});
						}
					);
				}),
				F
			);
		}
		function Ga(e) {
			let { store: t, computedStyle: n, ...r } = e,
				{
					element: a,
					actionItem: i,
					immediate: o,
					pluginInstance: s,
					continuous: u,
					restingValue: f,
					eventId: v
				} = r,
				g = !u,
				p = m5(),
				{ ixElements: E, ixSession: b, ixData: I } = t.getState(),
				O = b5(E, a),
				{ refState: _ } = E[O] || {},
				S = ye.getRefType(a),
				A = b.reducedMotion && De.ReducedMotionTypes[i.actionTypeId],
				D;
			if (A && u)
				switch (I.events[v]?.eventTypeId) {
					case De.EventTypeConsts.MOUSE_MOVE:
					case De.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
						D = f;
						break;
					default:
						D = 0.5;
						break;
				}
			let F = R5(a, _, n, i, ye, s);
			if (
				(t.dispatch(
					(0, he.instanceAdded)({
						instanceId: p,
						elementId: O,
						origin: F,
						refType: S,
						skipMotion: A,
						skipToValue: D,
						...r
					})
				),
				ME(document.body, 'ix2-animation-started', p),
				o)
			) {
				aD(t, p);
				return;
			}
			vt({ store: t, select: ({ ixInstances: C }) => C[p], onChange: xE }),
				g && t.dispatch((0, he.instanceStarted)(p, b.tick));
		}
		function Va(e, t) {
			ME(document.body, 'ix2-animation-stopping', { instanceId: e.id, state: t.getState() });
			let { elementId: n, actionItem: r } = e,
				{ ixElements: a } = t.getState(),
				{ ref: i, refType: o } = a[n] || {};
			o === wE && N5(i, r, ye), t.dispatch((0, he.instanceRemoved)(e.id));
		}
		function ME(e, t, n) {
			let r = document.createEvent('CustomEvent');
			r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
		}
		function aD(e, t) {
			let { ixParameters: n } = e.getState();
			e.dispatch((0, he.instanceStarted)(t, 0)),
				e.dispatch((0, he.animationFrameChanged)(performance.now(), n));
			let { ixInstances: r } = e.getState();
			xE(r[t], e);
		}
		function xE(e, t) {
			let {
					active: n,
					continuous: r,
					complete: a,
					elementId: i,
					actionItem: o,
					actionTypeId: s,
					renderType: u,
					current: f,
					groupIndex: v,
					eventId: g,
					eventTarget: p,
					eventStateKey: E,
					actionListId: b,
					isCarrier: I,
					styleProp: O,
					verbose: _,
					pluginInstance: S
				} = e,
				{ ixData: A, ixSession: D } = t.getState(),
				{ events: F } = A,
				C = F && F[g] ? F[g] : {},
				{ mediaQueries: B = A.mediaQueryKeys } = C;
			if (Er(B, D.mediaQueryKey) && (r || n || a)) {
				if (f || (u === T5 && a)) {
					t.dispatch((0, he.elementStateChanged)(i, s, f, o));
					let { ixElements: k } = t.getState(),
						{ ref: X, refType: z, refState: J } = k[i] || {},
						M = J && J[s];
					(z === wE || hr(s)) && O5(X, J, M, g, o, O, ye, u, S);
				}
				if (a) {
					if (I) {
						let k = qa({
							store: t,
							eventId: g,
							eventTarget: p,
							eventStateKey: E,
							actionListId: b,
							groupIndex: v + 1,
							verbose: _
						});
						_ &&
							!k &&
							t.dispatch((0, he.actionListPlaybackChanged)({ actionListId: b, isPlaying: !1 }));
					}
					Va(e, t);
				}
			}
		}
	});
	var GE = l((ka) => {
		'use strict';
		Object.defineProperty(ka, '__esModule', { value: !0 });
		function oD(e, t) {
			for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}
		oD(ka, {
			actions: function () {
				return cD;
			},
			destroy: function () {
				return qE;
			},
			init: function () {
				return pD;
			},
			setEnv: function () {
				return dD;
			},
			store: function () {
				return yr;
			}
		});
		var sD = Xr(),
			uD = lD(Bd()),
			Ba = Na(),
			cD = fD(rr());
		function lD(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function FE(e) {
			if (typeof WeakMap != 'function') return null;
			var t = new WeakMap(),
				n = new WeakMap();
			return (FE = function (r) {
				return r ? n : t;
			})(e);
		}
		function fD(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e };
			var n = FE(t);
			if (n && n.has(e)) return n.get(e);
			var r = { __proto__: null },
				a = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if (i !== 'default' && Object.prototype.hasOwnProperty.call(e, i)) {
					var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
					o && (o.get || o.set) ? Object.defineProperty(r, i, o) : (r[i] = e[i]);
				}
			return (r.default = e), n && n.set(e, r), r;
		}
		var yr = (0, sD.createStore)(uD.default);
		function dD(e) {
			e() && (0, Ba.observeRequests)(yr);
		}
		function pD(e) {
			qE(), (0, Ba.startEngine)({ store: yr, rawData: e, allowEvents: !0 });
		}
		function qE() {
			(0, Ba.stopEngine)(yr);
		}
	});
	var kE = l((Kq, BE) => {
		'use strict';
		var VE = ke(),
			UE = GE();
		UE.setEnv(VE.env);
		VE.define(
			'ix2',
			(BE.exports = function () {
				return UE;
			})
		);
	});
	var HE = l((jq, WE) => {
		'use strict';
		var Xa = window.jQuery,
			je = {},
			Ir = [],
			XE = '.w-ix',
			Tr = {
				reset: function (e, t) {
					t.__wf_intro = null;
				},
				intro: function (e, t) {
					t.__wf_intro || ((t.__wf_intro = !0), Xa(t).triggerHandler(je.types.INTRO));
				},
				outro: function (e, t) {
					t.__wf_intro && ((t.__wf_intro = null), Xa(t).triggerHandler(je.types.OUTRO));
				}
			};
		je.triggers = {};
		je.types = { INTRO: 'w-ix-intro' + XE, OUTRO: 'w-ix-outro' + XE };
		je.init = function () {
			for (var e = Ir.length, t = 0; t < e; t++) {
				var n = Ir[t];
				n[0](0, n[1]);
			}
			(Ir = []), Xa.extend(je.triggers, Tr);
		};
		je.async = function () {
			for (var e in Tr) {
				var t = Tr[e];
				Tr.hasOwnProperty(e) &&
					(je.triggers[e] = function (n, r) {
						Ir.push([t, r]);
					});
			}
		};
		je.async();
		WE.exports = je;
	});
	var Ha = l((Qq, KE) => {
		'use strict';
		var Wa = HE();
		function YE(e, t) {
			var n = document.createEvent('CustomEvent');
			n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
		}
		var gD = window.jQuery,
			br = {},
			zE = '.w-ix',
			ED = {
				reset: function (e, t) {
					Wa.triggers.reset(e, t);
				},
				intro: function (e, t) {
					Wa.triggers.intro(e, t), YE(t, 'COMPONENT_ACTIVE');
				},
				outro: function (e, t) {
					Wa.triggers.outro(e, t), YE(t, 'COMPONENT_INACTIVE');
				}
			};
		br.triggers = {};
		br.types = { INTRO: 'w-ix-intro' + zE, OUTRO: 'w-ix-outro' + zE };
		gD.extend(br.triggers, ED);
		KE.exports = br;
	});
	var QE = l(($q, jE) => {
		'use strict';
		var st = ke(),
			hD = Ha(),
			be = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			};
		st.define(
			'navbar',
			(jE.exports = function (e, t) {
				var n = {},
					r = e.tram,
					a = e(window),
					i = e(document),
					o = t.debounce,
					s,
					u,
					f,
					v,
					g = st.env(),
					p = '<div class="w-nav-overlay" data-wf-ignore />',
					E = '.w-nav',
					b = 'w--open',
					I = 'w--nav-dropdown-open',
					O = 'w--nav-dropdown-toggle-open',
					_ = 'w--nav-dropdown-list-open',
					S = 'w--nav-link-open',
					A = hD.triggers,
					D = e();
				(n.ready = n.design = n.preview = F),
					(n.destroy = function () {
						(D = e()), C(), u && u.length && u.each(z);
					});
				function F() {
					(f = g && st.env('design')),
						(v = st.env('editor')),
						(s = e(document.body)),
						(u = i.find(E)),
						u.length && (u.each(X), C(), B());
				}
				function C() {
					st.resize.off(k);
				}
				function B() {
					st.resize.on(k);
				}
				function k() {
					u.each(w);
				}
				function X(d, P) {
					var H = e(P),
						q = e.data(P, E);
					q || (q = e.data(P, E, { open: !1, el: H, config: {}, selectedIdx: -1 })),
						(q.menu = H.find('.w-nav-menu')),
						(q.links = q.menu.find('.w-nav-link')),
						(q.dropdowns = q.menu.find('.w-dropdown')),
						(q.dropdownToggle = q.menu.find('.w-dropdown-toggle')),
						(q.dropdownList = q.menu.find('.w-dropdown-list')),
						(q.button = H.find('.w-nav-button')),
						(q.container = H.find('.w-container')),
						(q.overlayContainerId = 'w-nav-overlay-' + d),
						(q.outside = Ce(q));
					var fe = H.find('.w-nav-brand');
					fe &&
						fe.attr('href') === '/' &&
						fe.attr('aria-label') == null &&
						fe.attr('aria-label', 'home'),
						q.button.attr('style', '-webkit-user-select: text;'),
						q.button.attr('aria-label') == null && q.button.attr('aria-label', 'menu'),
						q.button.attr('role', 'button'),
						q.button.attr('tabindex', '0'),
						q.button.attr('aria-controls', q.overlayContainerId),
						q.button.attr('aria-haspopup', 'menu'),
						q.button.attr('aria-expanded', 'false'),
						q.el.off(E),
						q.button.off(E),
						q.menu.off(E),
						T(q),
						f
							? (J(q), q.el.on('setting' + E, N(q)))
							: (M(q),
								q.button.on('click' + E, ue(q)),
								q.menu.on('click' + E, 'a', Ie(q)),
								q.button.on('keydown' + E, W(q)),
								q.el.on('keydown' + E, V(q))),
						w(d, P);
				}
				function z(d, P) {
					var H = e.data(P, E);
					H && (J(H), e.removeData(P, E));
				}
				function J(d) {
					d.overlay && (Y(d, !0), d.overlay.remove(), (d.overlay = null));
				}
				function M(d) {
					d.overlay ||
						((d.overlay = e(p).appendTo(d.el)),
						d.overlay.attr('id', d.overlayContainerId),
						(d.parent = d.menu.parent()),
						Y(d, !0));
				}
				function T(d) {
					var P = {},
						H = d.config || {},
						q = (P.animation = d.el.attr('data-animation') || 'default');
					(P.animOver = /^over/.test(q)),
						(P.animDirect = /left$/.test(q) ? -1 : 1),
						H.animation !== q && d.open && t.defer(Z, d),
						(P.easing = d.el.attr('data-easing') || 'ease'),
						(P.easing2 = d.el.attr('data-easing2') || 'ease');
					var fe = d.el.attr('data-duration');
					(P.duration = fe != null ? Number(fe) : 400),
						(P.docHeight = d.el.attr('data-doc-height')),
						(d.config = P);
				}
				function N(d) {
					return function (P, H) {
						H = H || {};
						var q = a.width();
						T(d),
							H.open === !0 && ie(d, !0),
							H.open === !1 && Y(d, !0),
							d.open &&
								t.defer(function () {
									q !== a.width() && Z(d);
								});
					};
				}
				function W(d) {
					return function (P) {
						switch (P.keyCode) {
							case be.SPACE:
							case be.ENTER:
								return ue(d)(), P.preventDefault(), P.stopPropagation();
							case be.ESCAPE:
								return Y(d), P.preventDefault(), P.stopPropagation();
							case be.ARROW_RIGHT:
							case be.ARROW_DOWN:
							case be.HOME:
							case be.END:
								return d.open
									? (P.keyCode === be.END
											? (d.selectedIdx = d.links.length - 1)
											: (d.selectedIdx = 0),
										ee(d),
										P.preventDefault(),
										P.stopPropagation())
									: (P.preventDefault(), P.stopPropagation());
						}
					};
				}
				function V(d) {
					return function (P) {
						if (d.open)
							switch (((d.selectedIdx = d.links.index(document.activeElement)), P.keyCode)) {
								case be.HOME:
								case be.END:
									return (
										P.keyCode === be.END
											? (d.selectedIdx = d.links.length - 1)
											: (d.selectedIdx = 0),
										ee(d),
										P.preventDefault(),
										P.stopPropagation()
									);
								case be.ESCAPE:
									return Y(d), d.button.focus(), P.preventDefault(), P.stopPropagation();
								case be.ARROW_LEFT:
								case be.ARROW_UP:
									return (
										(d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
										ee(d),
										P.preventDefault(),
										P.stopPropagation()
									);
								case be.ARROW_RIGHT:
								case be.ARROW_DOWN:
									return (
										(d.selectedIdx = Math.min(d.links.length - 1, d.selectedIdx + 1)),
										ee(d),
										P.preventDefault(),
										P.stopPropagation()
									);
							}
					};
				}
				function ee(d) {
					if (d.links[d.selectedIdx]) {
						var P = d.links[d.selectedIdx];
						P.focus(), Ie(P);
					}
				}
				function Z(d) {
					d.open && (Y(d, !0), ie(d, !0));
				}
				function ue(d) {
					return o(function () {
						d.open ? Y(d) : ie(d);
					});
				}
				function Ie(d) {
					return function (P) {
						var H = e(this),
							q = H.attr('href');
						if (!st.validClick(P.currentTarget)) {
							P.preventDefault();
							return;
						}
						q && q.indexOf('#') === 0 && d.open && Y(d);
					};
				}
				function Ce(d) {
					return (
						d.outside && i.off('click' + E, d.outside),
						function (P) {
							var H = e(P.target);
							(v && H.closest('.w-editor-bem-EditorOverlay').length) || ve(d, H);
						}
					);
				}
				var ve = o(function (d, P) {
					if (d.open) {
						var H = P.closest('.w-nav-menu');
						d.menu.is(H) || Y(d);
					}
				});
				function w(d, P) {
					var H = e.data(P, E),
						q = (H.collapsed = H.button.css('display') !== 'none');
					if ((H.open && !q && !f && Y(H, !0), H.container.length)) {
						var fe = K(H);
						H.links.each(fe), H.dropdowns.each(fe);
					}
					H.open && oe(H);
				}
				var U = 'max-width';
				function K(d) {
					var P = d.container.css(U);
					return (
						P === 'none' && (P = ''),
						function (H, q) {
							(q = e(q)), q.css(U, ''), q.css(U) === 'none' && q.css(U, P);
						}
					);
				}
				function G(d, P) {
					P.setAttribute('data-nav-menu-open', '');
				}
				function ne(d, P) {
					P.removeAttribute('data-nav-menu-open');
				}
				function ie(d, P) {
					if (d.open) return;
					(d.open = !0),
						d.menu.each(G),
						d.links.addClass(S),
						d.dropdowns.addClass(I),
						d.dropdownToggle.addClass(O),
						d.dropdownList.addClass(_),
						d.button.addClass(b);
					var H = d.config,
						q = H.animation;
					(q === 'none' || !r.support.transform || H.duration <= 0) && (P = !0);
					var fe = oe(d),
						Je = d.menu.outerHeight(!0),
						Ue = d.menu.outerWidth(!0),
						c = d.el.height(),
						h = d.el[0];
					if ((w(0, h), A.intro(0, h), st.redraw.up(), f || i.on('click' + E, d.outside), P)) {
						L();
						return;
					}
					var y = 'transform ' + H.duration + 'ms ' + H.easing;
					if ((d.overlay && ((D = d.menu.prev()), d.overlay.show().append(d.menu)), H.animOver)) {
						r(d.menu)
							.add(y)
							.set({ x: H.animDirect * Ue, height: fe })
							.start({ x: 0 })
							.then(L),
							d.overlay && d.overlay.width(Ue);
						return;
					}
					var m = c + Je;
					r(d.menu).add(y).set({ y: -m }).start({ y: 0 }).then(L);
					function L() {
						d.button.attr('aria-expanded', 'true');
					}
				}
				function oe(d) {
					var P = d.config,
						H = P.docHeight ? i.height() : s.height();
					return (
						P.animOver
							? d.menu.height(H)
							: d.el.css('position') !== 'fixed' && (H -= d.el.outerHeight(!0)),
						d.overlay && d.overlay.height(H),
						H
					);
				}
				function Y(d, P) {
					if (!d.open) return;
					(d.open = !1), d.button.removeClass(b);
					var H = d.config;
					if (
						((H.animation === 'none' || !r.support.transform || H.duration <= 0) && (P = !0),
						A.outro(0, d.el[0]),
						i.off('click' + E, d.outside),
						P)
					) {
						r(d.menu).stop(), h();
						return;
					}
					var q = 'transform ' + H.duration + 'ms ' + H.easing2,
						fe = d.menu.outerHeight(!0),
						Je = d.menu.outerWidth(!0),
						Ue = d.el.height();
					if (H.animOver) {
						r(d.menu)
							.add(q)
							.start({ x: Je * H.animDirect })
							.then(h);
						return;
					}
					var c = Ue + fe;
					r(d.menu).add(q).start({ y: -c }).then(h);
					function h() {
						d.menu.height(''),
							r(d.menu).set({ x: 0, y: 0 }),
							d.menu.each(ne),
							d.links.removeClass(S),
							d.dropdowns.removeClass(I),
							d.dropdownToggle.removeClass(O),
							d.dropdownList.removeClass(_),
							d.overlay &&
								d.overlay.children().length &&
								(D.length ? d.menu.insertAfter(D) : d.menu.prependTo(d.parent),
								d.overlay.attr('style', '').hide()),
							d.el.triggerHandler('w-close'),
							d.button.attr('aria-expanded', 'false');
					}
				}
				return n;
			})
		);
	});
	var ZE = l((Zq, $E) => {
		'use strict';
		var Ya = ke(),
			vD = (e, t, n, r) => {
				let a = document.createElement('div');
				t.appendChild(a),
					turnstile.render(a, {
						sitekey: e,
						callback: function (i) {
							n(i);
						},
						'error-callback': function () {
							r();
						}
					});
			};
		Ya.define(
			'forms',
			($E.exports = function (e, t) {
				let n = 'TURNSTILE_LOADED';
				var r = {},
					a = e(document),
					i,
					o = window.location,
					s = window.XDomainRequest && !window.atob,
					u = '.w-form',
					f,
					v = /e(-)?mail/i,
					g = /^\S+@\S+$/,
					p = window.alert,
					E = Ya.env(),
					b,
					I,
					O;
				let _ = a.find('[data-turnstile-sitekey]').data('turnstile-sitekey'),
					S;
				var A = /list-manage[1-9]?.com/i,
					D = t.debounce(function () {
						p(
							'Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.'
						);
					}, 100);
				r.ready =
					r.design =
					r.preview =
						function () {
							C(), F(), !E && !b && k();
						};
				function F() {
					(f = e('html').attr('data-wf-site')),
						(I = 'https://webflow.com/api/v1/form/' + f),
						s &&
							I.indexOf('https://webflow.com') >= 0 &&
							(I = I.replace('https://webflow.com', 'https://formdata.webflow.com')),
						(O = `${I}/signFile`),
						(i = e(u + ' form')),
						i.length && i.each(B);
				}
				function C() {
					_ &&
						((S = document.createElement('script')),
						(S.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'),
						document.head.appendChild(S),
						(S.onload = () => {
							a.trigger(n);
						}));
				}
				function B(w, U) {
					var K = e(U),
						G = e.data(U, u);
					G || (G = e.data(U, u, { form: K })), X(G);
					var ne = K.closest('div.w-form');
					(G.done = ne.find('> .w-form-done')),
						(G.fail = ne.find('> .w-form-fail')),
						(G.fileUploads = ne.find('.w-file-upload')),
						G.fileUploads.each(function (Y) {
							Ie(Y, G);
						}),
						_ &&
							((G.wait = !1),
							z(G),
							a.on(typeof turnstile < 'u' ? 'ready' : n, function () {
								vD(
									_,
									U,
									(Y) => {
										(G.turnstileToken = Y), X(G);
									},
									() => {
										z(G);
									}
								);
							}));
					var ie = G.form.attr('aria-label') || G.form.attr('data-name') || 'Form';
					G.done.attr('aria-label') || G.form.attr('aria-label', ie),
						G.done.attr('tabindex', '-1'),
						G.done.attr('role', 'region'),
						G.done.attr('aria-label') || G.done.attr('aria-label', ie + ' success'),
						G.fail.attr('tabindex', '-1'),
						G.fail.attr('role', 'region'),
						G.fail.attr('aria-label') || G.fail.attr('aria-label', ie + ' failure');
					var oe = (G.action = K.attr('action'));
					if (((G.handler = null), (G.redirect = K.attr('data-redirect')), A.test(oe))) {
						G.handler = ee;
						return;
					}
					if (!oe) {
						if (f) {
							G.handler = V;
							return;
						}
						D();
					}
				}
				function k() {
					(b = !0),
						a.on('submit', u + ' form', function (Y) {
							var d = e.data(this, u);
							d.handler && ((d.evt = Y), d.handler(d));
						});
					let w = '.w-checkbox-input',
						U = '.w-radio-input',
						K = 'w--redirected-checked',
						G = 'w--redirected-focus',
						ne = 'w--redirected-focus-visible',
						ie = ':focus-visible, [data-wf-focus-visible]',
						oe = [
							['checkbox', w],
							['radio', U]
						];
					a.on('change', u + ' form input[type="checkbox"]:not(' + w + ')', (Y) => {
						e(Y.target).siblings(w).toggleClass(K);
					}),
						a.on('change', u + ' form input[type="radio"]', (Y) => {
							e(`input[name="${Y.target.name}"]:not(${w})`).map((P, H) =>
								e(H).siblings(U).removeClass(K)
							);
							let d = e(Y.target);
							d.hasClass('w-radio-input') || d.siblings(U).addClass(K);
						}),
						oe.forEach(([Y, d]) => {
							a.on('focus', u + ` form input[type="${Y}"]:not(` + d + ')', (P) => {
								e(P.target).siblings(d).addClass(G),
									e(P.target).filter(ie).siblings(d).addClass(ne);
							}),
								a.on('blur', u + ` form input[type="${Y}"]:not(` + d + ')', (P) => {
									e(P.target).siblings(d).removeClass(`${G} ${ne}`);
								});
						});
				}
				function X(w) {
					var U = (w.btn = w.form.find(':input[type="submit"]'));
					(w.wait = w.btn.attr('data-wait') || null),
						(w.success = !1),
						U.prop('disabled', !!(_ && !w.turnstileToken)),
						w.label && U.val(w.label);
				}
				function z(w) {
					var U = w.btn,
						K = w.wait;
					U.prop('disabled', !0), K && ((w.label = U.val()), U.val(K));
				}
				function J(w, U) {
					var K = null;
					return (
						(U = U || {}),
						w.find(':input:not([type="submit"]):not([type="file"])').each(function (G, ne) {
							var ie = e(ne),
								oe = ie.attr('type'),
								Y = ie.attr('data-name') || ie.attr('name') || 'Field ' + (G + 1);
							Y = encodeURIComponent(Y);
							var d = ie.val();
							if (oe === 'checkbox') d = ie.is(':checked');
							else if (oe === 'radio') {
								if (U[Y] === null || typeof U[Y] == 'string') return;
								d = w.find('input[name="' + ie.attr('name') + '"]:checked').val() || null;
							}
							typeof d == 'string' && (d = e.trim(d)), (U[Y] = d), (K = K || W(ie, oe, Y, d));
						}),
						K
					);
				}
				function M(w) {
					var U = {};
					return (
						w.find(':input[type="file"]').each(function (K, G) {
							var ne = e(G),
								ie = ne.attr('data-name') || ne.attr('name') || 'File ' + (K + 1),
								oe = ne.attr('data-value');
							typeof oe == 'string' && (oe = e.trim(oe)), (U[ie] = oe);
						}),
						U
					);
				}
				let T = { _mkto_trk: 'marketo' };
				function N() {
					return document.cookie.split('; ').reduce(function (U, K) {
						let G = K.split('='),
							ne = G[0];
						if (ne in T) {
							let ie = T[ne],
								oe = G.slice(1).join('=');
							U[ie] = oe;
						}
						return U;
					}, {});
				}
				function W(w, U, K, G) {
					var ne = null;
					return (
						U === 'password'
							? (ne = 'Passwords cannot be submitted.')
							: w.attr('required')
								? G
									? v.test(w.attr('type')) &&
										(g.test(G) || (ne = 'Please enter a valid email address for: ' + K))
									: (ne = 'Please fill out the required field: ' + K)
								: K === 'g-recaptcha-response' &&
									!G &&
									(ne = 'Please confirm you\u2019re not a robot.'),
						ne
					);
				}
				function V(w) {
					ue(w), Z(w);
				}
				function ee(w) {
					X(w);
					var U = w.form,
						K = {};
					if (/^https/.test(o.href) && !/^https/.test(w.action)) {
						U.attr('method', 'post');
						return;
					}
					ue(w);
					var G = J(U, K);
					if (G) return p(G);
					z(w);
					var ne;
					t.each(K, function (d, P) {
						v.test(P) && (K.EMAIL = d),
							/^((full[ _-]?)?name)$/i.test(P) && (ne = d),
							/^(first[ _-]?name)$/i.test(P) && (K.FNAME = d),
							/^(last[ _-]?name)$/i.test(P) && (K.LNAME = d);
					}),
						ne &&
							!K.FNAME &&
							((ne = ne.split(' ')), (K.FNAME = ne[0]), (K.LNAME = K.LNAME || ne[1]));
					var ie = w.action.replace('/post?', '/post-json?') + '&c=?',
						oe = ie.indexOf('u=') + 2;
					oe = ie.substring(oe, ie.indexOf('&', oe));
					var Y = ie.indexOf('id=') + 3;
					(Y = ie.substring(Y, ie.indexOf('&', Y))),
						(K['b_' + oe + '_' + Y] = ''),
						e
							.ajax({ url: ie, data: K, dataType: 'jsonp' })
							.done(function (d) {
								(w.success = d.result === 'success' || /already/.test(d.msg)),
									w.success || console.info('MailChimp error: ' + d.msg),
									Z(w);
							})
							.fail(function () {
								Z(w);
							});
				}
				function Z(w) {
					var U = w.form,
						K = w.redirect,
						G = w.success;
					if (G && K) {
						Ya.location(K);
						return;
					}
					w.done.toggle(G),
						w.fail.toggle(!G),
						G ? w.done.focus() : w.fail.focus(),
						U.toggle(!G),
						X(w);
				}
				function ue(w) {
					w.evt && w.evt.preventDefault(), (w.evt = null);
				}
				function Ie(w, U) {
					if (!U.fileUploads || !U.fileUploads[w]) return;
					var K,
						G = e(U.fileUploads[w]),
						ne = G.find('> .w-file-upload-default'),
						ie = G.find('> .w-file-upload-uploading'),
						oe = G.find('> .w-file-upload-success'),
						Y = G.find('> .w-file-upload-error'),
						d = ne.find('.w-file-upload-input'),
						P = ne.find('.w-file-upload-label'),
						H = P.children(),
						q = Y.find('.w-file-upload-error-msg'),
						fe = oe.find('.w-file-upload-file'),
						Je = oe.find('.w-file-remove-link'),
						Ue = fe.find('.w-file-upload-file-name'),
						c = q.attr('data-w-size-error'),
						h = q.attr('data-w-type-error'),
						y = q.attr('data-w-generic-error');
					if (
						(E ||
							P.on('click keydown', function (Q) {
								(Q.type === 'keydown' && Q.which !== 13 && Q.which !== 32) ||
									(Q.preventDefault(), d.click());
							}),
						P.find('.w-icon-file-upload-icon').attr('aria-hidden', 'true'),
						Je.find('.w-icon-file-upload-remove').attr('aria-hidden', 'true'),
						E)
					)
						d.on('click', function (Q) {
							Q.preventDefault();
						}),
							P.on('click', function (Q) {
								Q.preventDefault();
							}),
							H.on('click', function (Q) {
								Q.preventDefault();
							});
					else {
						Je.on('click keydown', function (Q) {
							if (Q.type === 'keydown') {
								if (Q.which !== 13 && Q.which !== 32) return;
								Q.preventDefault();
							}
							d.removeAttr('data-value'),
								d.val(''),
								Ue.html(''),
								ne.toggle(!0),
								oe.toggle(!1),
								P.focus();
						}),
							d.on('change', function (Q) {
								(K = Q.target && Q.target.files && Q.target.files[0]),
									K &&
										(ne.toggle(!1),
										Y.toggle(!1),
										ie.toggle(!0),
										ie.focus(),
										Ue.text(K.name),
										te() || z(U),
										(U.fileUploads[w].uploading = !0),
										Ce(K, R));
							});
						var m = P.outerHeight();
						d.height(m), d.width(1);
					}
					function L(Q) {
						var x = Q.responseJSON && Q.responseJSON.msg,
							re = y;
						typeof x == 'string' && x.indexOf('InvalidFileTypeError') === 0
							? (re = h)
							: typeof x == 'string' && x.indexOf('MaxFileSizeError') === 0 && (re = c),
							q.text(re),
							d.removeAttr('data-value'),
							d.val(''),
							ie.toggle(!1),
							ne.toggle(!0),
							Y.toggle(!0),
							Y.focus(),
							(U.fileUploads[w].uploading = !1),
							te() || X(U);
					}
					function R(Q, x) {
						if (Q) return L(Q);
						var re = x.fileName,
							ae = x.postData,
							Ee = x.fileId,
							Ne = x.s3Url;
						d.attr('data-value', Ee), ve(Ne, ae, K, re, j);
					}
					function j(Q) {
						if (Q) return L(Q);
						ie.toggle(!1),
							oe.css('display', 'inline-block'),
							oe.focus(),
							(U.fileUploads[w].uploading = !1),
							te() || X(U);
					}
					function te() {
						var Q = (U.fileUploads && U.fileUploads.toArray()) || [];
						return Q.some(function (x) {
							return x.uploading;
						});
					}
				}
				function Ce(w, U) {
					var K = new URLSearchParams({ name: w.name, size: w.size });
					e.ajax({ type: 'GET', url: `${O}?${K}`, crossDomain: !0 })
						.done(function (G) {
							U(null, G);
						})
						.fail(function (G) {
							U(G);
						});
				}
				function ve(w, U, K, G, ne) {
					var ie = new FormData();
					for (var oe in U) ie.append(oe, U[oe]);
					ie.append('file', K, G),
						e
							.ajax({ type: 'POST', url: w, data: ie, processData: !1, contentType: !1 })
							.done(function () {
								ne(null);
							})
							.fail(function (Y) {
								ne(Y);
							});
				}
				return r;
			})
		);
	});
	ao();
	so();
	co();
	po();
	Eo();
	vo();
	kE();
	Ha();
	QE();
	ZE();
	Webflow.require('ix2').init({
		events: {
			e: {
				id: 'e',
				name: '',
				animationType: 'preset',
				eventTypeId: 'SCROLL_INTO_VIEW',
				action: {
					id: '',
					actionTypeId: 'SLIDE_EFFECT',
					instant: !1,
					config: { actionListId: 'slideInBottom', autoStopEventId: 'e-162' }
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|a10110f4-579f-e994-c6fa-2bb89fd4a474',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|a10110f4-579f-e994-c6fa-2bb89fd4a474',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: 0,
					scrollOffsetUnit: '%',
					delay: 300,
					direction: 'BOTTOM',
					effectIn: !0
				},
				createdOn: 1690531206129
			},
			'e-3': {
				id: 'e-3',
				name: '',
				animationType: 'preset',
				eventTypeId: 'SCROLL_INTO_VIEW',
				action: {
					id: '',
					actionTypeId: 'SLIDE_EFFECT',
					instant: !1,
					config: { actionListId: 'slideInBottom', autoStopEventId: 'e-4' }
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|a10110f4-579f-e994-c6fa-2bb89fd4a481',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|a10110f4-579f-e994-c6fa-2bb89fd4a481',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: 0,
					scrollOffsetUnit: '%',
					delay: 400,
					direction: 'BOTTOM',
					effectIn: !0
				},
				createdOn: 1690530743604
			},
			'e-5': {
				id: 'e-5',
				name: '',
				animationType: 'custom',
				eventTypeId: 'DROPDOWN_OPEN',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-6'
					}
				},
				mediaQueries: ['main'],
				target: {
					selector: '.navigation-dropdown',
					originalId: '66e8dee2171ca3c335f1b25d|ff4548a3-0ecb-3c1f-ad34-df9321a48b0c',
					appliesTo: 'CLASS'
				},
				targets: [
					{
						selector: '.navigation-dropdown',
						originalId: '66e8dee2171ca3c335f1b25d|ff4548a3-0ecb-3c1f-ad34-df9321a48b0c',
						appliesTo: 'CLASS'
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1690258103374
			},
			'e-6': {
				id: 'e-6',
				name: '',
				animationType: 'custom',
				eventTypeId: 'DROPDOWN_CLOSE',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a-2',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-5'
					}
				},
				mediaQueries: ['main'],
				target: {
					selector: '.navigation-dropdown',
					originalId: '66e8dee2171ca3c335f1b25d|ff4548a3-0ecb-3c1f-ad34-df9321a48b0c',
					appliesTo: 'CLASS'
				},
				targets: [
					{
						selector: '.navigation-dropdown',
						originalId: '66e8dee2171ca3c335f1b25d|ff4548a3-0ecb-3c1f-ad34-df9321a48b0c',
						appliesTo: 'CLASS'
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1690258103374
			},
			'e-7': {
				id: 'e-7',
				name: '',
				animationType: 'preset',
				eventTypeId: 'SCROLL_INTO_VIEW',
				action: {
					id: '',
					actionTypeId: 'SLIDE_EFFECT',
					instant: !1,
					config: { actionListId: 'slideInBottom', autoStopEventId: 'e-8' }
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|a10110f4-579f-e994-c6fa-2bb89fd4a489',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|a10110f4-579f-e994-c6fa-2bb89fd4a489',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: 0,
					scrollOffsetUnit: '%',
					delay: 600,
					direction: 'BOTTOM',
					effectIn: !0
				},
				createdOn: 1726540673776
			},
			'e-9': {
				id: 'e-9',
				name: '',
				animationType: 'preset',
				eventTypeId: 'SCROLL_INTO_VIEW',
				action: {
					id: '',
					actionTypeId: 'SLIDE_EFFECT',
					instant: !1,
					config: { actionListId: 'slideInBottom', autoStopEventId: 'e-10' }
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|a10110f4-579f-e994-c6fa-2bb89fd4a48d',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|a10110f4-579f-e994-c6fa-2bb89fd4a48d',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: 0,
					scrollOffsetUnit: '%',
					delay: 800,
					direction: 'BOTTOM',
					effectIn: !0
				},
				createdOn: 1726540684923
			},
			'e-11': {
				id: 'e-11',
				name: '',
				animationType: 'preset',
				eventTypeId: 'SCROLL_INTO_VIEW',
				action: {
					id: '',
					actionTypeId: 'SLIDE_EFFECT',
					instant: !1,
					config: { actionListId: 'slideInBottom', autoStopEventId: 'e-12' }
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|e4cbed68-f0e8-381b-2434-e96de23fab7b',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|e4cbed68-f0e8-381b-2434-e96de23fab7b',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: 0,
					scrollOffsetUnit: '%',
					delay: 300,
					direction: 'BOTTOM',
					effectIn: !0
				},
				createdOn: 1726546561122
			},
			'e-13': {
				id: 'e-13',
				name: '',
				animationType: 'preset',
				eventTypeId: 'SCROLL_INTO_VIEW',
				action: {
					id: '',
					actionTypeId: 'SLIDE_EFFECT',
					instant: !1,
					config: { actionListId: 'slideInBottom', autoStopEventId: 'e-14' }
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|e4cbed68-f0e8-381b-2434-e96de23fab84',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|e4cbed68-f0e8-381b-2434-e96de23fab84',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: 0,
					scrollOffsetUnit: '%',
					delay: 400,
					direction: 'BOTTOM',
					effectIn: !0
				},
				createdOn: 1726546561122
			},
			'e-29': {
				id: 'e-29',
				name: '',
				animationType: 'custom',
				eventTypeId: 'MOUSE_CLICK',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a-10',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-30'
					}
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|4cc89224-c561-311d-b795-bfa001a2a817',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|4cc89224-c561-311d-b795-bfa001a2a817',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1726553980405
			},
			'e-31': {
				id: 'e-31',
				name: '',
				animationType: 'custom',
				eventTypeId: 'MOUSE_CLICK',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a-9',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-32'
					}
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|dcca174b-49fe-8ab1-0b2d-01925e910eb5',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|dcca174b-49fe-8ab1-0b2d-01925e910eb5',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1726554114999
			},
			'e-33': {
				id: 'e-33',
				name: '',
				animationType: 'custom',
				eventTypeId: 'MOUSE_CLICK',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a-11',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-34'
					}
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|e6ce9b8b-e681-e523-b561-33c8d49ee012',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|e6ce9b8b-e681-e523-b561-33c8d49ee012',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1726554518021
			},
			'e-35': {
				id: 'e-35',
				name: '',
				animationType: 'custom',
				eventTypeId: 'MOUSE_CLICK',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a-12',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-36'
					}
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|e4cbed68-f0e8-381b-2434-e96de23fab88',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|e4cbed68-f0e8-381b-2434-e96de23fab88',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1726554548714
			},
			'e-37': {
				id: 'e-37',
				name: '',
				animationType: 'custom',
				eventTypeId: 'MOUSE_CLICK',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a-3',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-38'
					}
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|e5cc3c18-0e2e-06de-aeae-6fe7a1bc124a',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|e5cc3c18-0e2e-06de-aeae-6fe7a1bc124a',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1727332705843
			},
			'e-39': {
				id: 'e-39',
				name: '',
				animationType: 'custom',
				eventTypeId: 'MOUSE_CLICK',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a-6',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-40'
					}
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|98962118-092f-58cd-3975-2bb2d5b72b5d',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|98962118-092f-58cd-3975-2bb2d5b72b5d',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1727333031688
			},
			'e-41': {
				id: 'e-41',
				name: '',
				animationType: 'custom',
				eventTypeId: 'MOUSE_CLICK',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a-4',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-42'
					}
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|04bfa171-b2e8-e3f7-9c0a-55f558c6c04e',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|04bfa171-b2e8-e3f7-9c0a-55f558c6c04e',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1727333128724
			},
			'e-47': {
				id: 'e-47',
				name: '',
				animationType: 'custom',
				eventTypeId: 'MOUSE_CLICK',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a-3',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-48'
					}
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|6d64328d-ee52-1422-06de-10b7d6a4ae67',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|6d64328d-ee52-1422-06de-10b7d6a4ae67',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1727333502818
			},
			'e-49': {
				id: 'e-49',
				name: '',
				animationType: 'custom',
				eventTypeId: 'MOUSE_CLICK',
				action: {
					id: '',
					actionTypeId: 'GENERAL_START_ACTION',
					config: {
						delay: 0,
						easing: '',
						duration: 0,
						actionListId: 'a-4',
						affectedElements: {},
						playInReverse: !1,
						autoStopEventId: 'e-50'
					}
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					id: '66e8dee2171ca3c335f1b25d|0cd4b5f4-bf12-0570-aca3-d185a341705e',
					appliesTo: 'ELEMENT',
					styleBlockIds: []
				},
				targets: [
					{
						id: '66e8dee2171ca3c335f1b25d|0cd4b5f4-bf12-0570-aca3-d185a341705e',
						appliesTo: 'ELEMENT',
						styleBlockIds: []
					}
				],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: null,
					scrollOffsetUnit: null,
					delay: null,
					direction: null,
					effectIn: null
				},
				createdOn: 1727333513019
			},
			'e-51': {
				id: 'e-51',
				name: '',
				animationType: 'preset',
				eventTypeId: 'SCROLL_INTO_VIEW',
				action: {
					id: '',
					actionTypeId: 'SLIDE_EFFECT',
					config: { actionListId: 'slideInBottom', autoStopEventId: 'e-52' },
					instant: !1
				},
				mediaQueries: ['main', 'medium', 'small', 'tiny'],
				target: {
					selector: '.fade',
					originalId: '66e8dee2171ca3c335f1b25d|c02262c2-8ff1-8205-b5d4-692ed1fea13f',
					appliesTo: 'CLASS'
				},
				targets: [],
				config: {
					loop: !1,
					playInReverse: !1,
					scrollOffsetValue: 20,
					scrollOffsetUnit: '%',
					delay: 20,
					direction: 'BOTTOM',
					effectIn: !0
				},
				createdOn: 1727410712914
			}
		},
		actionLists: {
			a: {
				id: 'a',
				title: 'Dropdown Open',
				actionItemGroups: [
					{
						actionItems: [
							{
								id: 'a-n',
								actionTypeId: 'TRANSFORM_MOVE',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-list',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e39a']
									},
									yValue: -16,
									xUnit: 'PX',
									yUnit: 'px',
									zUnit: 'PX'
								}
							},
							{
								id: 'a-n-2',
								actionTypeId: 'TRANSFORM_ROTATE',
								config: {
									delay: 0,
									easing: 'ease',
									duration: 300,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-icon',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e38e']
									},
									zValue: 0,
									xUnit: 'DEG',
									yUnit: 'DEG',
									zUnit: 'deg'
								}
							},
							{
								id: 'a-n-3',
								actionTypeId: 'STYLE_SIZE',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-list',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e39a']
									},
									heightValue: 0,
									widthUnit: 'PX',
									heightUnit: 'px',
									locked: !1
								}
							},
							{
								id: 'a-n-4',
								actionTypeId: 'STYLE_OPACITY',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-list',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e39a']
									},
									value: 0,
									unit: ''
								}
							}
						]
					},
					{
						actionItems: [
							{
								id: 'a-n-5',
								actionTypeId: 'TRANSFORM_ROTATE',
								config: {
									delay: 0,
									easing: 'ease',
									duration: 300,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-icon',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e38e']
									},
									zValue: 180,
									xUnit: 'DEG',
									yUnit: 'DEG',
									zUnit: 'deg'
								}
							},
							{
								id: 'a-n-6',
								actionTypeId: 'TRANSFORM_MOVE',
								config: {
									delay: 0,
									easing: 'ease',
									duration: 300,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-list',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e39a']
									},
									yValue: 0,
									xUnit: 'PX',
									yUnit: 'px',
									zUnit: 'PX'
								}
							},
							{
								id: 'a-n-7',
								actionTypeId: 'STYLE_SIZE',
								config: {
									delay: 0,
									easing: 'ease',
									duration: 300,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-list',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e39a']
									},
									widthUnit: 'PX',
									heightUnit: 'AUTO',
									locked: !1
								}
							},
							{
								id: 'a-n-8',
								actionTypeId: 'STYLE_OPACITY',
								config: {
									delay: 0,
									easing: 'ease',
									duration: 300,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-list',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e39a']
									},
									value: 1,
									unit: ''
								}
							}
						]
					}
				],
				useFirstGroupAsInitialState: !0,
				createdOn: 1690258106613
			},
			'a-2': {
				id: 'a-2',
				title: 'Dropdown Close',
				actionItemGroups: [
					{
						actionItems: [
							{
								id: 'a-2-n',
								actionTypeId: 'TRANSFORM_ROTATE',
								config: {
									delay: 0,
									easing: 'ease',
									duration: 300,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-icon',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e38e']
									},
									zValue: 0,
									xUnit: 'DEG',
									yUnit: 'DEG',
									zUnit: 'deg'
								}
							},
							{
								id: 'a-2-n-2',
								actionTypeId: 'TRANSFORM_MOVE',
								config: {
									delay: 0,
									easing: 'ease',
									duration: 300,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-list',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e39a']
									},
									yValue: -16,
									xUnit: 'PX',
									yUnit: 'px',
									zUnit: 'PX'
								}
							},
							{
								id: 'a-2-n-3',
								actionTypeId: 'STYLE_OPACITY',
								config: {
									delay: 0,
									easing: 'ease',
									duration: 500,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-list',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e39a']
									},
									value: 0,
									unit: ''
								}
							},
							{
								id: 'a-2-n-4',
								actionTypeId: 'STYLE_SIZE',
								config: {
									delay: 0,
									easing: 'ease',
									duration: 500,
									target: {
										useEventTarget: 'CHILDREN',
										selector: '.navigation-dropdown-list',
										selectorGuids: ['13b0bf02-41ce-b951-f33d-ac636bb3e39a']
									},
									heightValue: 0,
									widthUnit: 'PX',
									heightUnit: 'px',
									locked: !1
								}
							}
						]
					}
				],
				useFirstGroupAsInitialState: !1,
				createdOn: 1690258106613
			},
			'a-10': {
				id: 'a-10',
				title: 'close overlay 2',
				actionItemGroups: [
					{
						actionItems: [
							{
								id: 'a-10-n',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.full-code',
										selectorGuids: ['3a397504-0cc4-f42e-06b7-35ad5f63c595']
									},
									value: 'flex'
								}
							}
						]
					}
				],
				useFirstGroupAsInitialState: !1,
				createdOn: 1726553961402
			},
			'a-9': {
				id: 'a-9',
				title: 'close overlay',
				actionItemGroups: [
					{
						actionItems: [
							{
								id: 'a-9-n',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.full-code',
										selectorGuids: ['3a397504-0cc4-f42e-06b7-35ad5f63c595']
									},
									value: 'none'
								}
							}
						]
					}
				],
				useFirstGroupAsInitialState: !1,
				createdOn: 1726553961402
			},
			'a-11': {
				id: 'a-11',
				title: 'close contact',
				actionItemGroups: [
					{
						actionItems: [
							{
								id: 'a-11-n',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: 'PARENT',
										selector: '.contact',
										selectorGuids: ['e63803a0-8aba-1a2f-f272-91ce9bf05cbd']
									},
									value: 'none'
								}
							}
						]
					}
				],
				useFirstGroupAsInitialState: !1,
				createdOn: 1726554520830
			},
			'a-12': {
				id: 'a-12',
				title: 'open contact',
				actionItemGroups: [
					{
						actionItems: [
							{
								id: 'a-12-n',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.contact',
										selectorGuids: ['e63803a0-8aba-1a2f-f272-91ce9bf05cbd']
									},
									value: 'flex'
								}
							}
						]
					}
				],
				useFirstGroupAsInitialState: !1,
				createdOn: 1726554552350
			},
			'a-3': {
				id: 'a-3',
				title: 'Slide 2',
				actionItemGroups: [
					{
						actionItems: [
							{
								id: 'a-3-n',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-1',
										selectorGuids: ['cc576cfb-62b2-6040-5380-873c23a1cf87']
									},
									value: 'none'
								}
							},
							{
								id: 'a-3-n-2',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-2',
										selectorGuids: ['cf557535-483d-a169-1ac5-e082a9b16eda']
									},
									value: 'grid'
								}
							},
							{
								id: 'a-3-n-3',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-3',
										selectorGuids: ['b54c7529-7100-7c30-a355-5740bd6c78b1']
									},
									value: 'none'
								}
							},
							{
								id: 'a-3-n-4',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-4',
										selectorGuids: ['567880bf-74f0-fd7c-450f-fee87bec7559']
									},
									value: 'none'
								}
							},
							{
								id: 'a-3-n-9',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._1',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'44326bdf-7535-8c85-c9d9-45efb325b2cb'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-3-n-6',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._2',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'63ffa6d8-a2a7-e12d-4873-a5a4a222a55c'
										]
									},
									globalSwatchId: '',
									rValue: 164,
									bValue: 242,
									gValue: 73,
									aValue: 1
								}
							},
							{
								id: 'a-3-n-7',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._3',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'b37c0f20-66f6-93bb-b99c-036e31319a3d'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-3-n-8',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._4',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'42407a17-d676-423c-f9c2-a172fbf13220'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-3-n-10',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: !0,
										id: '66e8dee2171ca3c335f1b25d|e5cc3c18-0e2e-06de-aeae-6fe7a1bc124a'
									},
									value: 'none'
								}
							},
							{
								id: 'a-3-n-11',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: 'SIBLINGS',
										selector: '.arrow3.icon',
										selectorGuids: [
											'e9f01069-2b5a-dee3-5e01-18423c41b110',
											'50c236a3-fce0-75ee-371f-ccedd0ff73f1'
										]
									},
									value: 'flex'
								}
							},
							{
								id: 'a-3-n-12',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: 'SIBLINGS',
										selector: '.arrow4.icon',
										selectorGuids: [
											'2a8f37a7-a4ad-7ded-4bbb-116b284f786b',
											'e60c43da-74a8-88bb-aa1d-3886ef38f0d7'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-3-n-13',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow0back.icon',
										selectorGuids: [
											'75d3fc8b-2429-744b-10a0-8a6597c7f554',
											'c24659e2-eaf4-9eea-277d-b749a4e4af86'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-3-n-14',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow1back.icon',
										selectorGuids: [
											'001d3a3a-aa80-bb0a-92f7-2112b5a71e4d',
											'd7fa7f45-c8a5-6caf-3835-3f702fa415de'
										]
									},
									value: 'flex'
								}
							},
							{
								id: 'a-3-n-15',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow2back.icon',
										selectorGuids: [
											'08774a16-c6cd-ea14-1d4e-f3b3ee6f71aa',
											'1c4d5ca3-8b12-b550-9d96-79d69c4e7e76'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-3-n-16',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow3back.icon',
										selectorGuids: [
											'5140b739-fccb-dd35-5b84-25003faec2b2',
											'9e5462a9-4762-db92-8b1f-4203c6857287'
										]
									},
									value: 'none'
								}
							}
						]
					}
				],
				useFirstGroupAsInitialState: !1,
				createdOn: 1726547674650
			},
			'a-6': {
				id: 'a-6',
				title: 'Slide 5',
				actionItemGroups: [
					{
						actionItems: [
							{
								id: 'a-6-n',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-1',
										selectorGuids: ['cc576cfb-62b2-6040-5380-873c23a1cf87']
									},
									value: 'grid'
								}
							},
							{
								id: 'a-6-n-2',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-2',
										selectorGuids: ['cf557535-483d-a169-1ac5-e082a9b16eda']
									},
									value: 'none'
								}
							},
							{
								id: 'a-6-n-3',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-3',
										selectorGuids: ['b54c7529-7100-7c30-a355-5740bd6c78b1']
									},
									value: 'none'
								}
							},
							{
								id: 'a-6-n-4',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-4',
										selectorGuids: ['567880bf-74f0-fd7c-450f-fee87bec7559']
									},
									value: 'none'
								}
							},
							{
								id: 'a-6-n-5',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._1',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'44326bdf-7535-8c85-c9d9-45efb325b2cb'
										]
									},
									globalSwatchId: '--purple',
									rValue: 164,
									bValue: 242,
									gValue: 73,
									aValue: 1
								}
							},
							{
								id: 'a-6-n-6',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._2',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'63ffa6d8-a2a7-e12d-4873-a5a4a222a55c'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-6-n-7',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._3',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'b37c0f20-66f6-93bb-b99c-036e31319a3d'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-6-n-8',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._4',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'42407a17-d676-423c-f9c2-a172fbf13220'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-6-n-9',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: !0,
										id: '66e8dee2171ca3c335f1b25d|98962118-092f-58cd-3975-2bb2d5b72b5d'
									},
									value: 'none'
								}
							},
							{
								id: 'a-6-n-11',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: 'SIBLINGS',
										selector: '.arrow2back.icon',
										selectorGuids: [
											'08774a16-c6cd-ea14-1d4e-f3b3ee6f71aa',
											'1c4d5ca3-8b12-b550-9d96-79d69c4e7e76'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-6-n-12',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: 'SIBLINGS',
										selector: '.arrow0back.icon',
										selectorGuids: [
											'75d3fc8b-2429-744b-10a0-8a6597c7f554',
											'c24659e2-eaf4-9eea-277d-b749a4e4af86'
										]
									},
									value: 'flex'
								}
							},
							{
								id: 'a-6-n-13',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: 'SIBLINGS',
										selector: '.arrow3back.icon',
										selectorGuids: [
											'5140b739-fccb-dd35-5b84-25003faec2b2',
											'9e5462a9-4762-db92-8b1f-4203c6857287'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-6-n-14',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow2.icon',
										selectorGuids: [
											'58170fac-af2a-cc27-e36f-afc1fff6f113',
											'6b6396b3-fab4-c121-309a-ed3cdcc27cfd'
										]
									},
									value: 'flex'
								}
							},
							{
								id: 'a-6-n-15',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow3.icon',
										selectorGuids: [
											'e9f01069-2b5a-dee3-5e01-18423c41b110',
											'50c236a3-fce0-75ee-371f-ccedd0ff73f1'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-6-n-16',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow4.icon',
										selectorGuids: [
											'2a8f37a7-a4ad-7ded-4bbb-116b284f786b',
											'e60c43da-74a8-88bb-aa1d-3886ef38f0d7'
										]
									},
									value: 'none'
								}
							}
						]
					}
				],
				useFirstGroupAsInitialState: !1,
				createdOn: 1726547674650
			},
			'a-4': {
				id: 'a-4',
				title: 'Slide 3',
				actionItemGroups: [
					{
						actionItems: [
							{
								id: 'a-4-n',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-1',
										selectorGuids: ['cc576cfb-62b2-6040-5380-873c23a1cf87']
									},
									value: 'none'
								}
							},
							{
								id: 'a-4-n-2',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-2',
										selectorGuids: ['cf557535-483d-a169-1ac5-e082a9b16eda']
									},
									value: 'none'
								}
							},
							{
								id: 'a-4-n-3',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-3',
										selectorGuids: ['b54c7529-7100-7c30-a355-5740bd6c78b1']
									},
									value: 'grid'
								}
							},
							{
								id: 'a-4-n-4',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-4',
										selectorGuids: ['567880bf-74f0-fd7c-450f-fee87bec7559']
									},
									value: 'none'
								}
							},
							{
								id: 'a-4-n-5',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._1',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'44326bdf-7535-8c85-c9d9-45efb325b2cb'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-4-n-6',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._2',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'63ffa6d8-a2a7-e12d-4873-a5a4a222a55c'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-4-n-7',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._3',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'b37c0f20-66f6-93bb-b99c-036e31319a3d'
										]
									},
									globalSwatchId: '--purple',
									rValue: 164,
									bValue: 242,
									gValue: 73,
									aValue: 1
								}
							},
							{
								id: 'a-4-n-8',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._4',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'42407a17-d676-423c-f9c2-a172fbf13220'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-4-n-9',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: !0,
										id: '66e8dee2171ca3c335f1b25d|04bfa171-b2e8-e3f7-9c0a-55f558c6c04e'
									},
									value: 'none'
								}
							},
							{
								id: 'a-4-n-10',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow2.icon',
										selectorGuids: [
											'58170fac-af2a-cc27-e36f-afc1fff6f113',
											'6b6396b3-fab4-c121-309a-ed3cdcc27cfd'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-4-n-11',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow4.icon',
										selectorGuids: [
											'2a8f37a7-a4ad-7ded-4bbb-116b284f786b',
											'e60c43da-74a8-88bb-aa1d-3886ef38f0d7'
										]
									},
									value: 'flex'
								}
							},
							{
								id: 'a-4-n-12',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow0back.icon',
										selectorGuids: [
											'75d3fc8b-2429-744b-10a0-8a6597c7f554',
											'c24659e2-eaf4-9eea-277d-b749a4e4af86'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-4-n-13',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow1back.icon',
										selectorGuids: [
											'001d3a3a-aa80-bb0a-92f7-2112b5a71e4d',
											'd7fa7f45-c8a5-6caf-3835-3f702fa415de'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-4-n-14',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow2back.icon',
										selectorGuids: [
											'08774a16-c6cd-ea14-1d4e-f3b3ee6f71aa',
											'1c4d5ca3-8b12-b550-9d96-79d69c4e7e76'
										]
									},
									value: 'flex'
								}
							},
							{
								id: 'a-4-n-15',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow3back.icon',
										selectorGuids: [
											'5140b739-fccb-dd35-5b84-25003faec2b2',
											'9e5462a9-4762-db92-8b1f-4203c6857287'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-4-n-16',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow5.icon',
										selectorGuids: [
											'40dde4c5-53db-b596-fd53-327a133b6a68',
											'490d34d3-4547-48df-0f38-5379688df431'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-4-n-17',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow3.icon',
										selectorGuids: [
											'e9f01069-2b5a-dee3-5e01-18423c41b110',
											'50c236a3-fce0-75ee-371f-ccedd0ff73f1'
										]
									},
									value: 'none'
								}
							}
						]
					}
				],
				useFirstGroupAsInitialState: !1,
				createdOn: 1726547674650
			},
			'a-5': {
				id: 'a-5',
				title: 'Slide 4',
				actionItemGroups: [
					{
						actionItems: [
							{
								id: 'a-5-n',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-1',
										selectorGuids: ['cc576cfb-62b2-6040-5380-873c23a1cf87']
									},
									value: 'none'
								}
							},
							{
								id: 'a-5-n-2',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-2',
										selectorGuids: ['cf557535-483d-a169-1ac5-e082a9b16eda']
									},
									value: 'none'
								}
							},
							{
								id: 'a-5-n-3',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-3',
										selectorGuids: ['b54c7529-7100-7c30-a355-5740bd6c78b1']
									},
									value: 'none'
								}
							},
							{
								id: 'a-5-n-4',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.slide-4',
										selectorGuids: ['567880bf-74f0-fd7c-450f-fee87bec7559']
									},
									value: 'grid'
								}
							},
							{
								id: 'a-5-n-5',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._1',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'44326bdf-7535-8c85-c9d9-45efb325b2cb'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-5-n-6',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._2',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'63ffa6d8-a2a7-e12d-4873-a5a4a222a55c'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-5-n-7',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._3',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'b37c0f20-66f6-93bb-b99c-036e31319a3d'
										]
									},
									globalSwatchId: '',
									rValue: 37,
									bValue: 75,
									gValue: 36,
									aValue: 1
								}
							},
							{
								id: 'a-5-n-8',
								actionTypeId: 'STYLE_BACKGROUND_COLOR',
								config: {
									delay: 0,
									easing: '',
									duration: 500,
									target: {
										selector: '.div-block-2._4',
										selectorGuids: [
											'31219f98-2fe5-7117-fa1b-2e5001cdb938',
											'42407a17-d676-423c-f9c2-a172fbf13220'
										]
									},
									globalSwatchId: '--purple',
									rValue: 164,
									bValue: 242,
									gValue: 73,
									aValue: 1
								}
							},
							{
								id: 'a-5-n-9',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: !0,
										id: '66e8dee2171ca3c335f1b25d|03b7da76-f3c2-4fe7-4725-1711719c3fd0'
									},
									value: 'none'
								}
							},
							{
								id: 'a-5-n-10',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: 'SIBLINGS',
										selector: '.arrow3.icon',
										selectorGuids: [
											'e9f01069-2b5a-dee3-5e01-18423c41b110',
											'50c236a3-fce0-75ee-371f-ccedd0ff73f1'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-5-n-11',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: 'SIBLINGS',
										selector: '.arrow2.icon',
										selectorGuids: [
											'58170fac-af2a-cc27-e36f-afc1fff6f113',
											'6b6396b3-fab4-c121-309a-ed3cdcc27cfd'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-5-n-12',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow0back.icon',
										selectorGuids: [
											'75d3fc8b-2429-744b-10a0-8a6597c7f554',
											'c24659e2-eaf4-9eea-277d-b749a4e4af86'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-5-n-13',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow1back.icon',
										selectorGuids: [
											'001d3a3a-aa80-bb0a-92f7-2112b5a71e4d',
											'd7fa7f45-c8a5-6caf-3835-3f702fa415de'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-5-n-14',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow2back.icon',
										selectorGuids: [
											'08774a16-c6cd-ea14-1d4e-f3b3ee6f71aa',
											'1c4d5ca3-8b12-b550-9d96-79d69c4e7e76'
										]
									},
									value: 'none'
								}
							},
							{
								id: 'a-5-n-15',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										selector: '.arrow3back.icon',
										selectorGuids: [
											'5140b739-fccb-dd35-5b84-25003faec2b2',
											'9e5462a9-4762-db92-8b1f-4203c6857287'
										]
									},
									value: 'flex'
								}
							},
							{
								id: 'a-5-n-16',
								actionTypeId: 'GENERAL_DISPLAY',
								config: {
									delay: 0,
									easing: '',
									duration: 0,
									target: {
										useEventTarget: 'SIBLINGS',
										selector: '.arrow5.icon',
										selectorGuids: [
											'40dde4c5-53db-b596-fd53-327a133b6a68',
											'490d34d3-4547-48df-0f38-5379688df431'
										]
									},
									value: 'flex'
								}
							}
						]
					}
				],
				useFirstGroupAsInitialState: !1,
				createdOn: 1726547674650
			},
			slideInBottom: {
				id: 'slideInBottom',
				useFirstGroupAsInitialState: !0,
				actionItemGroups: [
					{
						actionItems: [
							{
								actionTypeId: 'STYLE_OPACITY',
								config: {
									delay: 0,
									duration: 0,
									target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
									value: 0
								}
							}
						]
					},
					{
						actionItems: [
							{
								actionTypeId: 'TRANSFORM_MOVE',
								config: {
									delay: 0,
									duration: 0,
									target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
									xValue: 0,
									yValue: 100,
									xUnit: 'PX',
									yUnit: 'PX',
									zUnit: 'PX'
								}
							}
						]
					},
					{
						actionItems: [
							{
								actionTypeId: 'TRANSFORM_MOVE',
								config: {
									delay: 0,
									easing: 'outQuart',
									duration: 1e3,
									target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
									xValue: 0,
									yValue: 0,
									xUnit: 'PX',
									yUnit: 'PX',
									zUnit: 'PX'
								}
							},
							{
								actionTypeId: 'STYLE_OPACITY',
								config: {
									delay: 0,
									easing: 'outQuart',
									duration: 1e3,
									target: { id: 'N/A', appliesTo: 'TRIGGER_ELEMENT', useEventTarget: !0 },
									value: 1
								}
							}
						]
					}
				]
			}
		},
		site: {
			mediaQueries: [
				{ key: 'main', min: 992, max: 1e4 },
				{ key: 'medium', min: 768, max: 991 },
				{ key: 'small', min: 480, max: 767 },
				{ key: 'tiny', min: 0, max: 479 }
			]
		}
	});
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/

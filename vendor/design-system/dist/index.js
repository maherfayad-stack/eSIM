import { createContext as e, forwardRef as t, useContext as n, useEffect as r, useId as i, useLayoutEffect as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/context/DesignSystemContext.jsx
var d = {
	platform: "ios",
	dir: "ltr"
}, f = e(d), p = ({ platform: e, dir: t, children: n }) => {
	let r = {
		platform: e ?? d.platform,
		dir: t ?? d.dir
	};
	return /* @__PURE__ */ l(f.Provider, {
		value: r,
		children: n
	});
}, m = (e) => {
	let t = n(f);
	return e ?? t.platform;
}, h = (e) => {
	let t = n(f);
	return e ?? t.dir;
}, g = () => /* @__PURE__ */ u("svg", {
	className: "banner__copy-icon",
	viewBox: "0 0 14 14",
	fill: "currentColor",
	"aria-hidden": "true",
	width: "14",
	height: "14",
	children: [/* @__PURE__ */ l("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M5 1a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H5zm0 1h6a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
	}), /* @__PURE__ */ l("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M2 3H1a1 1 0 0 0-1 1v7a2 2 0 0 0 2 2h7a1 1 0 0 0 1-1v-1H2V3z"
	})]
}), _ = () => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	width: "12",
	height: "12",
	children: /* @__PURE__ */ l("path", { d: "M10.854 1.146a.5.5 0 0 0-.708 0L6 5.293 1.854 1.146a.5.5 0 0 0-.708.708L5.293 6 1.146 10.146a.5.5 0 0 0 .708.708L6 6.707l4.146 4.147a.5.5 0 0 0 .708-.708L6.707 6l4.147-4.146a.5.5 0 0 0 0-.708z" })
});
function v({ color: e = "neutral", dir: t = "ltr", title: n, subtitle: r, codeLabel: i, codeText: a = "CODE", showAction: o = !0, showVisual: s = !0, showDismiss: c = !0, iconSrc: d, onClose: f, className: p = "" }) {
	let m = t === "rtl";
	return /* @__PURE__ */ u("div", {
		className: [
			"banner",
			"banner--small",
			`banner--color-${e}`,
			p
		].filter(Boolean).join(" "),
		dir: t,
		children: [
			/* @__PURE__ */ u("div", {
				className: "banner__content",
				children: [/* @__PURE__ */ u("div", {
					className: "banner__text",
					children: [n && /* @__PURE__ */ l("p", {
						className: "banner__title",
						children: n
					}), r && /* @__PURE__ */ l("p", {
						className: "banner__body",
						children: r
					})]
				}), o && /* @__PURE__ */ u("div", {
					className: "banner__action",
					children: [i && /* @__PURE__ */ l("span", {
						className: "banner__action-label",
						children: i
					}), /* @__PURE__ */ u("div", {
						className: "banner__action-pill",
						children: [
							!m && /* @__PURE__ */ l("span", {
								className: "banner__code-text",
								children: a
							}),
							/* @__PURE__ */ l(g, {}),
							m && /* @__PURE__ */ l("span", {
								className: "banner__code-text",
								children: a
							})
						]
					})]
				})]
			}),
			s && /* @__PURE__ */ l("div", {
				className: "banner__icon-slot",
				children: d && /* @__PURE__ */ l("img", {
					src: d,
					alt: "",
					className: "banner__icon-img"
				})
			}),
			c && /* @__PURE__ */ l("button", {
				className: "banner__dismiss",
				type: "button",
				onClick: f,
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ l(_, {})
			})
		]
	});
}
//#endregion
//#region src/components/Button.jsx
var y = () => /* @__PURE__ */ l("svg", {
	className: "btn__icon",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("path", { d: "M11.9995 1C13.0272 1 14.013 1.40806 14.7397 2.13477C15.4664 2.86147 15.8745 3.84729 15.8745 4.875V7.75H19.4995C20.1899 7.75 20.7495 8.30964 20.7495 9V19.5C20.7495 20.1904 20.1899 20.75 19.4995 20.75H4.49951C3.80916 20.75 3.24951 20.1904 3.24951 19.5V9C3.24951 8.30964 3.80916 7.75 4.49951 7.75H8.12451V4.875C8.12451 3.84729 8.53257 2.86147 9.25928 2.13477C9.98598 1.40806 10.9718 1 11.9995 1ZM4.49951 8.75C4.36144 8.75 4.24951 8.86193 4.24951 9V19.5C4.24951 19.6381 4.36144 19.75 4.49951 19.75H19.4995C19.6376 19.75 19.7495 19.6381 19.7495 19.5V9C19.7495 8.86193 19.6376 8.75 19.4995 8.75H4.49951ZM12.0005 13.5C12.4145 13.5003 12.7505 13.8359 12.7505 14.25C12.7505 14.6641 12.4145 14.9997 12.0005 15C11.5863 15 11.2505 14.6642 11.2505 14.25C11.2505 13.8358 11.5863 13.5 12.0005 13.5ZM11.9995 2C11.237 2 10.5055 2.30263 9.96631 2.8418C9.42714 3.38096 9.12451 4.1125 9.12451 4.875V7.75H14.8745V4.875C14.8745 4.1125 14.5719 3.38096 14.0327 2.8418C13.4935 2.30263 12.762 2 11.9995 2Z" })
}), b = () => /* @__PURE__ */ l("svg", {
	className: "btn__icon",
	viewBox: "0 0 14 17",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("path", { d: "M11.76 8.9c-.02-1.96 1.6-2.9 1.67-2.94-.91-1.33-2.33-1.51-2.83-1.54-1.2-.12-2.35.7-2.96.7-.6 0-1.54-.68-2.54-.66C3.8 4.49 2.6 5.23 1.94 6.4.59 8.76 1.55 12.27 2.86 14.2c.65 1 1.41 2.1 2.42 2.06 1.35-.05 1.57-.73 2.96-.73s1.75.73 2.95.71c1.03-.02 1.71-1.01 2.36-2.01.77-1.17 1.09-2.27 1.11-2.33-.02 0-2.12-.82-2.9-3zm-2.78-5.58c.63-.77 1.06-1.81.94-2.88-.91.04-2 .6-2.65 1.37-.58.67-1.09 1.74-.9 2.76 1.01.08 2.05-.5 2.61-1.25z" })
});
function x({ variant: e = "primary", size: t = "default", label: n, className: r = "", ...i }) {
	let a = [
		"btn",
		`btn--${e}`,
		`btn--size-${t}`,
		r
	].filter(Boolean).join(" ");
	return e === "skeleton" ? /* @__PURE__ */ l("span", {
		className: a,
		role: "status",
		"aria-label": "Loading"
	}) : e === "apple-pay" ? /* @__PURE__ */ u("button", {
		className: a,
		type: "button",
		...i,
		children: [/* @__PURE__ */ l(b, {}), /* @__PURE__ */ l("span", { children: "Pay" })]
	}) : e === "payment" ? /* @__PURE__ */ u("button", {
		className: a,
		type: "button",
		...i,
		children: [/* @__PURE__ */ l(y, {}), n && /* @__PURE__ */ l("span", { children: n })]
	}) : /* @__PURE__ */ l("button", {
		className: a,
		type: "button",
		...i,
		children: n
	});
}
//#endregion
//#region src/components/Tag.jsx
function S({ label: e, variant: t = "default", style: n = "tinted", leadingIcon: r, trailingIcon: i, skeleton: a = !1, className: o = "", ...s }) {
	return a ? /* @__PURE__ */ l("span", {
		className: [
			"tag",
			"tag--skeleton",
			o
		].filter(Boolean).join(" "),
		...s
	}) : /* @__PURE__ */ u("span", {
		className: [
			"tag",
			t !== "default" || n === "filled" ? `tag--${t}-${n}` : null,
			o
		].filter(Boolean).join(" "),
		...s,
		children: [
			r && /* @__PURE__ */ l("span", {
				className: "tag__icon",
				children: r
			}),
			e,
			i && /* @__PURE__ */ l("span", {
				className: "tag__icon",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/SystemBanner.jsx
var C = () => /* @__PURE__ */ l("svg", {
	className: "system-banner__icon",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M12.0001 3.5C7.30564 3.5 3.50006 7.30558 3.50006 12C3.50006 16.6944 7.30564 20.5 12.0001 20.5C16.6945 20.5 20.5001 16.6944 20.5001 12C20.5001 7.30558 16.6945 3.5 12.0001 3.5ZM2.50006 12C2.50006 6.75329 6.75336 2.5 12.0001 2.5C17.2468 2.5 21.5001 6.75329 21.5001 12C21.5001 17.2467 17.2468 21.5 12.0001 21.5C6.75336 21.5 2.50006 17.2467 2.50006 12ZM10.75 11.25C10.75 10.9739 10.9739 10.75 11.25 10.75C11.9404 10.75 12.5 11.3096 12.5 12V15.75C12.5 15.8881 12.6119 16 12.75 16C13.0261 16 13.25 16.2239 13.25 16.5C13.25 16.7761 13.0261 17 12.75 17C12.0596 17 11.5 16.4404 11.5 15.75V12C11.5 11.8619 11.3881 11.75 11.25 11.75C10.9739 11.75 10.75 11.5261 10.75 11.25ZM12.5 7.875C12.5 8.35825 12.1082 8.75 11.625 8.75C11.1418 8.75 10.75 8.35825 10.75 7.875C10.75 7.39175 11.1418 7 11.625 7C12.1082 7 12.5 7.39175 12.5 7.875Z",
		fill: "currentColor"
	})
}), w = () => /* @__PURE__ */ l("svg", {
	className: "system-banner__icon",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("path", {
		d: "M12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM15.7793 9.38867C15.9789 9.19814 16.2956 9.20496 16.4863 9.4043C16.6769 9.60391 16.67 9.92062 16.4707 10.1113L10.9697 15.3613C10.7765 15.5457 10.4725 15.5457 10.2793 15.3613L7.5293 12.7363C7.32995 12.5456 7.32313 12.2289 7.51367 12.0293C7.70438 11.83 8.02109 11.8231 8.2207 12.0137L10.624 14.3086L15.7793 9.38867Z",
		fill: "currentColor"
	})
}), T = () => /* @__PURE__ */ l("svg", {
	className: "system-banner__icon",
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12ZM12 7C12.2761 7 12.5 7.22386 12.5 7.5V12.75C12.5 13.0261 12.2761 13.25 12 13.25C11.7239 13.25 11.5 13.0261 11.5 12.75V7.5C11.5 7.22386 11.7239 7 12 7ZM12.75 16.125C12.75 16.5392 12.4142 16.875 12 16.875C11.5858 16.875 11.25 16.5392 11.25 16.125C11.25 15.7108 11.5858 15.375 12 15.375C12.4142 15.375 12.75 15.7108 12.75 16.125Z",
		fill: "currentColor"
	})
}), E = {
	visual: C,
	neutral: C,
	success: w,
	caution: T,
	error: T
};
function D({ type: e, icon: t }) {
	let n = E[e] || C;
	return t ? /* @__PURE__ */ l("div", {
		className: "system-banner__icons",
		children: /* @__PURE__ */ l("span", {
			className: "system-banner__icon-slot",
			children: /* @__PURE__ */ l(n, {})
		})
	}) : null;
}
function O({ tag: e }) {
	return e ? /* @__PURE__ */ l(S, {
		variant: "neutral",
		...typeof e == "string" ? { label: e } : e
	}) : null;
}
function k({ title: e, description: t }) {
	return !e && !t ? null : /* @__PURE__ */ u("div", {
		className: "system-banner__text",
		children: [e && /* @__PURE__ */ l("p", {
			className: "system-banner__title",
			children: e
		}), t && /* @__PURE__ */ l("p", {
			className: "system-banner__description",
			children: t
		})]
	});
}
function A({ type: e, title: t, description: n, icon: r, actionLabel: i, onAction: a }) {
	let o = E[e] || C;
	return /* @__PURE__ */ u(c, { children: [r && /* @__PURE__ */ l("span", {
		className: "system-banner__icon-slot",
		children: /* @__PURE__ */ l(o, {})
	}), /* @__PURE__ */ u("div", {
		className: "system-banner__content",
		children: [/* @__PURE__ */ l(k, {
			title: t,
			description: n
		}), i && /* @__PURE__ */ l("button", {
			type: "button",
			className: "system-banner__action",
			onClick: a,
			children: i
		})]
	})] });
}
function j({ type: e, title: t, description: n, icon: r, tag: i, actionLabel: a, onAction: o }) {
	return /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ u("div", {
		className: "system-banner__content",
		children: [/* @__PURE__ */ l(D, {
			type: e,
			icon: r
		}), /* @__PURE__ */ u("div", {
			className: "system-banner__body",
			children: [/* @__PURE__ */ l(k, {
				title: t,
				description: n
			}), /* @__PURE__ */ l(O, { tag: i })]
		})]
	}), a && /* @__PURE__ */ l(x, {
		variant: "primary",
		size: "medium",
		label: a,
		onClick: o
	})] });
}
function M({ platform: e = "mobile", type: t = "visual", title: n, description: r, icon: i = !0, tag: a = null, actionLabel: o, onAction: s, skeleton: c = !1, dir: d = "ltr", className: f = "", ...p }) {
	return c ? /* @__PURE__ */ u("div", {
		className: [
			"system-banner",
			"system-banner--skeleton",
			f
		].filter(Boolean).join(" "),
		dir: d,
		role: "status",
		"aria-label": "Loading",
		...p,
		children: [/* @__PURE__ */ l("span", { className: "system-banner__skeleton-icon" }), /* @__PURE__ */ u("div", {
			className: "system-banner__skeleton-text",
			children: [
				/* @__PURE__ */ l("span", { className: "system-banner__skeleton-bar system-banner__skeleton-bar--title" }),
				/* @__PURE__ */ l("span", { className: "system-banner__skeleton-bar" }),
				/* @__PURE__ */ l("span", { className: "system-banner__skeleton-bar system-banner__skeleton-bar--short" })
			]
		})]
	}) : /* @__PURE__ */ l("div", {
		className: [
			"system-banner",
			`system-banner--${e}`,
			`system-banner--${t}`,
			f
		].filter(Boolean).join(" "),
		dir: d,
		role: "status",
		...p,
		children: e === "desktop" ? /* @__PURE__ */ l(j, {
			type: t,
			title: n,
			description: r,
			icon: i,
			tag: a,
			actionLabel: o,
			onAction: s
		}) : /* @__PURE__ */ l(A, {
			type: t,
			title: n,
			description: r,
			icon: i,
			actionLabel: o,
			onAction: s
		})
	});
}
//#endregion
//#region src/icons/LineIcons.jsx
var N = ({ className: e, ...t }) => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: /* @__PURE__ */ l("path", {
		d: "M9 4.5L16.5 12L9 19.5",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), P = ({ className: e, ...t }) => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: /* @__PURE__ */ l("path", {
		d: "M15 19.5L7.5 12L15 4.5",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), F = ({ className: e, ...t }) => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: /* @__PURE__ */ l("path", {
		d: "M4.5 9L12 16.5L19.5 9",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), I = ({ className: e, ...t }) => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: /* @__PURE__ */ l("path", {
		d: "M4.5 15L12 7.5L19.5 15",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), L = ({ className: e, ...t }) => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: /* @__PURE__ */ l("path", {
		d: "M4 12L9.334 17L20 7",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), R = ({ className: e, ...t }) => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: /* @__PURE__ */ l("circle", {
		cx: "12",
		cy: "12",
		r: "9.5",
		stroke: "currentColor"
	})
}), z = ({ className: e, ...t }) => /* @__PURE__ */ u("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: [/* @__PURE__ */ l("circle", {
		cx: "12",
		cy: "12",
		r: "9.5",
		stroke: "currentColor"
	}), /* @__PURE__ */ l("circle", {
		cx: "12",
		cy: "12",
		r: "5",
		fill: "currentColor"
	})]
}), B = ({ className: e, ...t }) => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: /* @__PURE__ */ l("rect", {
		x: "2.5",
		y: "2.5",
		width: "19",
		height: "19",
		rx: "4",
		stroke: "currentColor"
	})
}), V = ({ className: e, ...t }) => /* @__PURE__ */ u("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: [/* @__PURE__ */ l("rect", {
		width: "24",
		height: "24",
		rx: "4.5",
		fill: "currentColor"
	}), /* @__PURE__ */ l("path", {
		d: "M7 12L10.5 15.5L17 8.5",
		stroke: "white",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})]
}), ee = ({ className: e, ...t }) => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: /* @__PURE__ */ l("path", {
		d: "M12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM12 7.75C12.2761 7.75 12.5 7.97386 12.5 8.25V11.5H15.75C16.0261 11.5 16.25 11.7239 16.25 12C16.25 12.2761 16.0261 12.5 15.75 12.5H12.5V15.75C12.5 16.0261 12.2761 16.25 12 16.25C11.7239 16.25 11.5 16.0261 11.5 15.75V12.5H8.25C7.97386 12.5 7.75 12.2761 7.75 12C7.75 11.7239 7.97386 11.5 8.25 11.5H11.5V8.25C11.5 7.97386 11.7239 7.75 12 7.75Z",
		fill: "currentColor"
	})
}), H = ({ className: e, ...t }) => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: /* @__PURE__ */ l("path", {
		d: "M12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM15.75 11.5C16.0261 11.5 16.25 11.7239 16.25 12C16.25 12.2761 16.0261 12.5 15.75 12.5H8.25C7.97386 12.5 7.75 12.2761 7.75 12C7.75 11.7239 7.97386 11.5 8.25 11.5H15.75Z",
		fill: "currentColor"
	})
}), te = ({ className: e, ...t }) => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	className: e,
	...t,
	children: /* @__PURE__ */ l("path", {
		d: "M19.5 3.25C20.1904 3.25 20.75 3.80964 20.75 4.5V19.5C20.75 20.1904 20.1904 20.75 19.5 20.75H4.5C3.80964 20.75 3.25 20.1904 3.25 19.5V4.5C3.25 3.80964 3.80964 3.25 4.5 3.25H19.5ZM4.25 19.5C4.25 19.6381 4.36193 19.75 4.5 19.75H19.043L4.25 4.95703V19.5ZM19.75 19.043V4.5C19.75 4.36193 19.6381 4.25 19.5 4.25H4.95703L19.75 19.043Z",
		fill: "currentColor"
	})
}), ne = {
	ltr: "Sponsored",
	rtl: "ممول"
};
function re({ layout: e = "mobile", size: t = "small", title: n, subtitle: r, logo: i = null, logoSrc: a, imageSrc: o, sponsoredLabel: s, showSponsored: c = !0, showAction: d = !1, actionLabel: f, onAction: p, showImageAction: m = !1, imageActionLabel: h, onImageAction: g, chevron: _ = !0, skeleton: v = !1, onClick: y, dir: b = "ltr", className: C = "", ...w }) {
	let T = b === "rtl", E = e === "desktop", D = !E && (t === "medium" || t === "large"), O = T ? P : N, k = [
		"ad-banner",
		`ad-banner--${e}`,
		!E && `ad-banner--${t}`,
		D && "ad-banner--card",
		v && "ad-banner--skeleton",
		C
	].filter(Boolean).join(" "), A = /* @__PURE__ */ l("span", {
		className: "ad-banner__chevron",
		"aria-hidden": "true",
		children: /* @__PURE__ */ l(O, {})
	});
	if (v) {
		let e = /* @__PURE__ */ u("div", {
			className: "ad-banner__skel-text",
			children: [/* @__PURE__ */ l("span", { className: "ad-banner__skel ad-banner__skel-bar" }), /* @__PURE__ */ l("span", { className: "ad-banner__skel ad-banner__skel-bar" })]
		});
		return /* @__PURE__ */ u("div", {
			className: k,
			dir: b,
			role: "status",
			"aria-label": "Loading",
			...w,
			children: [
				D && /* @__PURE__ */ l("div", {
					className: "ad-banner__image ad-banner__image--skel",
					children: /* @__PURE__ */ l("span", { className: "ad-banner__skel ad-banner__skel-tag" })
				}),
				/* @__PURE__ */ u("div", {
					className: "ad-banner__body",
					children: [
						/* @__PURE__ */ l("div", { className: "ad-banner__logo ad-banner__skel" }),
						/* @__PURE__ */ u("div", {
							className: "ad-banner__content",
							children: [
								e,
								!D && /* @__PURE__ */ l("span", { className: "ad-banner__skel ad-banner__skel-tag" }),
								d && /* @__PURE__ */ l("span", { className: "ad-banner__skel ad-banner__skel-btn" })
							]
						}),
						!E && _ && A
					]
				}),
				E && /* @__PURE__ */ u("div", {
					className: "ad-banner__media ad-banner__media--skel",
					children: [/* @__PURE__ */ l("div", {
						className: "ad-banner__media-fade",
						"aria-hidden": "true"
					}), m && /* @__PURE__ */ l("span", { className: "ad-banner__skel ad-banner__skel-btn ad-banner__skel-btn--image" })]
				})
			]
		});
	}
	let j = s || (T ? ne.rtl : ne.ltr), M = /* @__PURE__ */ l("div", {
		className: "ad-banner__logo",
		children: a ? /* @__PURE__ */ l("img", {
			src: a,
			alt: "",
			className: "ad-banner__logo-img"
		}) : typeof i == "string" ? /* @__PURE__ */ l("img", {
			src: i,
			alt: "",
			className: "ad-banner__logo-img"
		}) : i
	}), F = /* @__PURE__ */ u("div", {
		className: "ad-banner__text",
		children: [n && /* @__PURE__ */ l("p", {
			className: "ad-banner__title",
			children: n
		}), r && /* @__PURE__ */ l("p", {
			className: "ad-banner__subtitle",
			children: r
		})]
	}), I = c && /* @__PURE__ */ l(S, {
		label: j,
		className: "ad-banner__tag"
	}), L = d && /* @__PURE__ */ l(x, {
		variant: "primary-inverted",
		size: "medium",
		label: f || "Label",
		className: "ad-banner__cta",
		onClick: (e) => {
			e.stopPropagation(), p?.(e);
		}
	});
	return D ? /* @__PURE__ */ u("div", {
		className: k,
		dir: b,
		onClick: y,
		...w,
		children: [/* @__PURE__ */ u("div", {
			className: "ad-banner__image",
			children: [o && /* @__PURE__ */ l("img", {
				src: o,
				alt: "",
				className: "ad-banner__image-img"
			}), I]
		}), /* @__PURE__ */ u("div", {
			className: "ad-banner__body",
			children: [
				M,
				/* @__PURE__ */ u("div", {
					className: "ad-banner__content",
					children: [F, L]
				}),
				_ && A
			]
		})]
	}) : E ? /* @__PURE__ */ u("div", {
		className: k,
		dir: b,
		onClick: y,
		...w,
		children: [/* @__PURE__ */ u("div", {
			className: "ad-banner__body",
			children: [M, /* @__PURE__ */ u("div", {
				className: "ad-banner__content",
				children: [
					F,
					I,
					L
				]
			})]
		}), /* @__PURE__ */ u("div", {
			className: "ad-banner__media",
			children: [
				o && /* @__PURE__ */ l("img", {
					src: o,
					alt: "",
					className: "ad-banner__media-img"
				}),
				/* @__PURE__ */ l("div", {
					className: "ad-banner__media-fade",
					"aria-hidden": "true"
				}),
				m && /* @__PURE__ */ u("button", {
					type: "button",
					className: "ad-banner__image-cta",
					onClick: (e) => {
						e.stopPropagation(), g?.(e);
					},
					children: [h || "Label", /* @__PURE__ */ l("span", {
						className: "ad-banner__image-cta-icon",
						"aria-hidden": "true",
						children: /* @__PURE__ */ l(O, {})
					})]
				})
			]
		})]
	}) : /* @__PURE__ */ u("div", {
		className: k,
		dir: b,
		onClick: y,
		...w,
		children: [/* @__PURE__ */ u("div", {
			className: "ad-banner__body",
			children: [
				M,
				/* @__PURE__ */ u("div", {
					className: "ad-banner__content",
					children: [
						F,
						I,
						L
					]
				}),
				_ && A
			]
		}), o && /* @__PURE__ */ l("div", {
			className: "ad-banner__strip",
			children: /* @__PURE__ */ l("img", {
				src: o,
				alt: "",
				className: "ad-banner__strip-img"
			})
		})]
	});
}
//#endregion
//#region src/components/VisualCard.jsx
var ie = () => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 12 12",
	fill: "currentColor",
	"aria-hidden": "true",
	width: "12",
	height: "12",
	children: /* @__PURE__ */ l("path", { d: "M10.854 1.146a.5.5 0 0 0-.708 0L6 5.293 1.854 1.146a.5.5 0 0 0-.708.708L5.293 6 1.146 10.146a.5.5 0 0 0 .708.708L6 6.707l4.146 4.147a.5.5 0 0 0 .708-.708L6.707 6l4.147-4.146a.5.5 0 0 0 0-.708z" })
});
function ae({ size: e = "medium", accentColor: t, dir: n = "ltr", title: r, subtitle: i, imageSrc: a, priceLabel: o, priceValue: s, actionLabel: c, showBottomBar: d = !0, showDismiss: f = !0, onAction: p, onClose: m, className: h = "" }) {
	return /* @__PURE__ */ u("div", {
		className: [
			"visual-card",
			`visual-card--${e}`,
			d ? "" : "visual-card--no-bar",
			h
		].filter(Boolean).join(" "),
		dir: n,
		children: [
			/* @__PURE__ */ l("div", {
				className: "visual-card__image-wrap",
				"aria-hidden": "true",
				children: a && /* @__PURE__ */ l("img", {
					src: a,
					alt: "",
					className: "visual-card__image"
				})
			}),
			/* @__PURE__ */ l("div", {
				className: "visual-card__gradient",
				"aria-hidden": "true",
				style: t ? { "--visual-card-accent-color": t } : void 0
			}),
			/* @__PURE__ */ u("div", {
				className: "visual-card__media-body",
				children: [/* @__PURE__ */ u("div", {
					className: "visual-card__media-text",
					children: [r && /* @__PURE__ */ l("p", {
						className: "visual-card__headline",
						children: r
					}), i && /* @__PURE__ */ l("p", {
						className: "visual-card__body",
						children: i
					})]
				}), d && /* @__PURE__ */ u("div", {
					className: "visual-card__bar",
					children: [/* @__PURE__ */ u("div", {
						className: "visual-card__price-info",
						children: [o && /* @__PURE__ */ l("span", {
							className: "visual-card__eyebrow",
							children: o
						}), s && /* @__PURE__ */ l("span", {
							className: "visual-card__price-value",
							children: s
						})]
					}), c && /* @__PURE__ */ l("button", {
						className: "visual-card__cta",
						type: "button",
						onClick: p,
						children: c
					})]
				})]
			}),
			f && /* @__PURE__ */ l("button", {
				className: "visual-card__dismiss",
				type: "button",
				onClick: m,
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ l(ie, {})
			})
		]
	});
}
//#endregion
//#region src/components/SegmentedControl.jsx
function U({ items: e = [], value: t = 0, onChange: n, platform: r, dir: i, className: a = "", ...o }) {
	let s = m(r), c = h(i);
	return /* @__PURE__ */ l("div", {
		className: [
			"seg-control",
			`seg-control--${s}`,
			a
		].filter(Boolean).join(" "),
		role: "tablist",
		dir: c,
		...o,
		children: e.map((e, r) => {
			let i = r === t;
			return /* @__PURE__ */ l("button", {
				role: "tab",
				"aria-selected": i,
				className: ["seg-control__segment", i && "seg-control__segment--active"].filter(Boolean).join(" "),
				onClick: () => n?.(r),
				type: "button",
				children: /* @__PURE__ */ l("span", {
					className: "seg-control__segment-inner",
					children: /* @__PURE__ */ l("span", {
						className: "seg-control__label",
						children: e
					})
				})
			}, r);
		})
	});
}
//#endregion
//#region src/icons/line-icons/chevronLeft.svg?raw
var oe = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M15 19.5L7.5 12L15 4.5\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n", se = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9 4.5L16.5 12L9 19.5\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n", ce = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.6465 6.64648C16.8417 6.45122 17.1583 6.45122 17.3535 6.64648C17.5488 6.84175 17.5488 7.15825 17.3535 7.35352L12.707 12L17.3535 16.6465C17.5488 16.8417 17.5488 17.1583 17.3535 17.3535C17.1583 17.5488 16.8417 17.5488 16.6465 17.3535L12 12.707L7.35352 17.3535C7.15825 17.5488 6.84175 17.5488 6.64648 17.3535C6.45122 17.1583 6.45122 16.8417 6.64648 16.6465L11.293 12L6.64648 7.35352C6.45122 7.15825 6.45122 6.84175 6.64648 6.64648C6.84175 6.45122 7.15825 6.45122 7.35352 6.64648L12 11.293L16.6465 6.64648Z\" fill=\"currentColor\"/>\n</svg>\n", le = ({ svg: e }) => /* @__PURE__ */ l("span", {
	className: "glass-btn__icon",
	"aria-hidden": "true",
	dangerouslySetInnerHTML: { __html: e }
}), ue = ({ dir: e }) => /* @__PURE__ */ l(le, { svg: e === "rtl" ? se : oe }), de = () => /* @__PURE__ */ l(le, { svg: ce }), fe = ({ children: e }) => /* @__PURE__ */ l("span", {
	className: "glass-btn__icon",
	"aria-hidden": "true",
	children: e
});
function W({ bg: e = "default", type: t = "back", label: n, icon1: r, icon2: i, dir: a, className: o = "", ...s }) {
	let c = h(a);
	return /* @__PURE__ */ u("button", {
		className: [
			"glass-btn",
			`glass-btn--bg-${e}`,
			`glass-btn--type-${t}`,
			o
		].filter(Boolean).join(" "),
		type: "button",
		dir: c,
		...s,
		children: [
			(t === "back" || t === "back-label") && /* @__PURE__ */ l(ue, { dir: c }),
			t === "x" && /* @__PURE__ */ l(de, {}),
			(t === "1-icon" || t === "2-icons") && r && /* @__PURE__ */ l(fe, { children: r }),
			t === "2-icons" && i && /* @__PURE__ */ l(fe, { children: i }),
			(t === "label" || t === "back-label") && n && /* @__PURE__ */ l("span", {
				className: "glass-btn__label",
				children: n
			})
		]
	});
}
//#endregion
//#region src/components/Chip.jsx
function pe({ label: e, selected: t = !1, dropdown: n = !1, icon: r, state: i = "default", skeleton: a = !1, dir: o = "ltr", className: s = "", ...c }) {
	return a ? /* @__PURE__ */ l("span", {
		className: [
			"chip",
			"chip--skeleton",
			s
		].filter(Boolean).join(" "),
		dir: o
	}) : /* @__PURE__ */ u("button", {
		className: [
			"chip",
			t && "chip--selected",
			n && "chip--dropdown",
			i === "error" && "chip--error",
			s
		].filter(Boolean).join(" "),
		dir: o,
		type: "button",
		...c,
		children: [
			r && /* @__PURE__ */ l("span", {
				className: "chip__icon",
				children: r
			}),
			/* @__PURE__ */ l("span", {
				className: "chip__label",
				children: e
			}),
			n && /* @__PURE__ */ l("span", {
				className: "chip__chevron",
				children: /* @__PURE__ */ l(F, {})
			})
		]
	});
}
//#endregion
//#region src/icons/line-icons/maginfyingGlass.svg?raw
var me = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.8748 2.5C15.5002 2.5 19.2498 6.24962 19.2498 10.875C19.2498 13.008 18.4504 14.953 17.1375 16.4316L21.3533 20.6475C21.5479 20.8428 21.5484 21.1595 21.3533 21.3545C21.1583 21.5494 20.8416 21.549 20.6463 21.3545L16.4305 17.1387C14.9519 18.4511 13.0073 19.25 10.8748 19.25C6.24943 19.25 2.49982 15.5004 2.49982 10.875C2.49982 6.24962 6.24943 2.5 10.8748 2.5ZM10.8748 3.5C6.80172 3.5 3.49982 6.8019 3.49982 10.875C3.49982 14.9481 6.80172 18.25 10.8748 18.25C14.9479 18.25 18.2498 14.9481 18.2498 10.875C18.2498 6.8019 14.9479 3.5 10.8748 3.5Z\" fill=\"currentColor\"/>\n</svg>\n", he = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"8.5\" y=\"2\" width=\"7\" height=\"12\" rx=\"3.5\" stroke=\"currentColor\"/>\n<path d=\"M4.5 12C4.5 16.142 7.858 19.5 12 19.5C16.142 19.5 19.5 16.142 19.5 12\" stroke=\"currentColor\" stroke-linecap=\"round\"/>\n<path d=\"M12 19.5V22\" stroke=\"currentColor\" stroke-linecap=\"round\"/>\n</svg>\n", ge = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96452 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46927 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41506 20.7188 6.93684 18.891 5.10901C17.0632 3.28118 14.5849 2.25299 12 2.25ZM15.5303 14.4697C15.6 14.5393 15.6554 14.622 15.6932 14.713C15.731 14.804 15.7504 14.9016 15.7505 15.0002C15.7505 15.0987 15.7312 15.1963 15.6935 15.2874C15.6558 15.3784 15.6005 15.4612 15.5308 15.5308C15.4612 15.6005 15.3784 15.6558 15.2874 15.6935C15.1963 15.7312 15.0987 15.7505 15.0002 15.7505C14.9016 15.7504 14.8041 15.731 14.713 15.6932C14.622 15.6554 14.5393 15.6 14.4697 15.5303L12 13.0605L9.53028 15.5303C9.38959 15.6707 9.19892 15.7495 9.00017 15.7494C8.80142 15.7492 8.61083 15.6702 8.47029 15.5297C8.32976 15.3892 8.25075 15.1986 8.25065 14.9998C8.25054 14.8011 8.32934 14.6104 8.46973 14.4697L10.9395 12L8.46973 9.53027C8.32934 9.38958 8.25054 9.19892 8.25065 9.00016C8.25075 8.80141 8.32976 8.61083 8.47029 8.47029C8.61083 8.32975 8.80142 8.25075 9.00017 8.25064C9.19892 8.25054 9.38959 8.32934 9.53028 8.46973L12 10.9395L14.4697 8.46973C14.6104 8.32934 14.8011 8.25054 14.9998 8.25064C15.1986 8.25075 15.3892 8.32975 15.5297 8.47029C15.6703 8.61083 15.7493 8.80141 15.7494 9.00016C15.7495 9.19892 15.6707 9.38958 15.5303 9.53027L13.0606 12L15.5303 14.4697Z\" fill=\"currentColor\"/>\n</svg>\n", G = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.1465 4.89648C10.3417 4.70122 10.6583 4.70122 10.8535 4.89648C11.0488 5.09175 11.0488 5.40825 10.8535 5.60352L4.95703 11.5L20.25 11.5C20.526 11.5002 20.75 11.724 20.75 12C20.75 12.276 20.526 12.4998 20.25 12.5L4.95703 12.5L10.8535 18.3965C11.0488 18.5917 11.0488 18.9083 10.8535 19.1035C10.6583 19.2988 10.3417 19.2988 10.1465 19.1035L3.39648 12.3535C3.20122 12.1583 3.20122 11.8417 3.39648 11.6465L10.1465 4.89648Z\" fill=\"currentColor\"/>\n</svg>\n", K = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.1465 4.89648C13.3417 4.70122 13.6583 4.70122 13.8535 4.89648L20.6035 11.6465C20.7988 11.8417 20.7988 12.1583 20.6035 12.3535L13.8535 19.1035C13.6583 19.2988 13.3417 19.2988 13.1465 19.1035C12.9512 18.9083 12.9512 18.5917 13.1465 18.3965L19.043 12.5H3.75C3.47386 12.5 3.25 12.2761 3.25 12C3.25 11.7239 3.47386 11.5 3.75 11.5H19.043L13.1465 5.60352C12.9512 5.40825 12.9512 5.09175 13.1465 4.89648Z\" fill=\"currentColor\"/>\n</svg>\n", q = ({ svg: e }) => /* @__PURE__ */ l("span", {
	"aria-hidden": "true",
	style: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%"
	},
	dangerouslySetInnerHTML: { __html: e }
}), _e = () => /* @__PURE__ */ l(q, { svg: me }), ve = () => /* @__PURE__ */ l(q, { svg: he }), ye = () => /* @__PURE__ */ l(q, { svg: ge }), be = () => /* @__PURE__ */ l(q, { svg: ce }), xe = ({ dir: e }) => /* @__PURE__ */ l(q, { svg: e === "rtl" ? K : G }), Se = be, J = t(function({ value: e, onChange: t, label: n, onFocus: r, onBlur: a, onClear: c, onClose: d, placeholder: f, showClose: p = !1, platform: g, dir: _, id: v, className: y, ...b }, x) {
	let S = m(g), C = h(_), w = i(), T = v ?? w, E = o(null), D = x ?? E, [O, k] = s(!1), A = e !== void 0, [j, M] = s(n ?? ""), N = A ? e : j, P = N != null && String(N).length > 0, F = C === "rtl" ? "بحث" : "Search";
	function I(e) {
		k(!0), r?.(e);
	}
	function L(e) {
		k(!1), a?.(e);
	}
	function R(e) {
		A || M(e.target.value), t?.(e);
	}
	function z() {
		A || M(""), c?.(), D.current?.focus();
	}
	let B = /* @__PURE__ */ l("input", {
		ref: D,
		id: T,
		className: "search__input",
		type: "search",
		value: N,
		onChange: R,
		onFocus: I,
		onBlur: L,
		placeholder: f ?? F,
		...b
	});
	if (S === "android") {
		let e = O || P;
		return /* @__PURE__ */ l("div", {
			className: [
				"search",
				"search--android",
				y
			].filter(Boolean).join(" "),
			dir: C,
			children: /* @__PURE__ */ u("div", {
				className: "search__pill",
				onClick: () => D.current?.focus(),
				children: [
					e ? /* @__PURE__ */ l("button", {
						type: "button",
						className: "search__icon-btn search__icon-btn--leading",
						onMouseDown: (e) => e.preventDefault(),
						onClick: (e) => {
							e.stopPropagation(), d?.();
						},
						"aria-label": C === "rtl" ? "إغلاق البحث" : "Close search",
						children: /* @__PURE__ */ l("span", {
							className: "search__icon-btn-glyph",
							children: /* @__PURE__ */ l(xe, { dir: C })
						})
					}) : /* @__PURE__ */ l("span", {
						className: "search__icon-btn search__icon-btn--leading",
						"aria-hidden": "true",
						children: /* @__PURE__ */ l("span", {
							className: "search__icon-btn-glyph",
							children: /* @__PURE__ */ l(_e, {})
						})
					}),
					B,
					e ? /* @__PURE__ */ l("button", {
						type: "button",
						className: "search__icon-btn search__icon-btn--trailing",
						onMouseDown: (e) => e.preventDefault(),
						onClick: (e) => {
							e.stopPropagation(), z();
						},
						"aria-label": C === "rtl" ? "مسح البحث" : "Clear search",
						children: /* @__PURE__ */ l("span", {
							className: "search__icon-btn-glyph",
							children: /* @__PURE__ */ l(be, {})
						})
					}) : /* @__PURE__ */ l("span", {
						className: "search__icon-btn search__icon-btn--trailing",
						"aria-hidden": "true",
						children: /* @__PURE__ */ l("span", {
							className: "search__icon-btn-glyph",
							children: /* @__PURE__ */ l(ve, {})
						})
					})
				]
			})
		});
	}
	return /* @__PURE__ */ u("div", {
		className: [
			"search",
			"search--ios",
			y
		].filter(Boolean).join(" "),
		dir: C,
		children: [/* @__PURE__ */ u("div", {
			className: "search__pill",
			onClick: () => D.current?.focus(),
			children: [
				/* @__PURE__ */ l("span", {
					className: "search__icon",
					children: /* @__PURE__ */ l(_e, {})
				}),
				B,
				!P && /* @__PURE__ */ l("span", {
					className: "search__icon search__icon--trailing",
					children: /* @__PURE__ */ l(ve, {})
				}),
				P && /* @__PURE__ */ l("button", {
					type: "button",
					className: "search__clear",
					onMouseDown: (e) => e.preventDefault(),
					onClick: z,
					"aria-label": C === "rtl" ? "مسح البحث" : "Clear search",
					children: /* @__PURE__ */ l(ye, {})
				})
			]
		}), p && /* @__PURE__ */ l("button", {
			type: "button",
			className: "search__close",
			onClick: d,
			"aria-label": C === "rtl" ? "إغلاق البحث" : "Close search",
			children: /* @__PURE__ */ l("span", {
				className: "search__close-icon",
				children: /* @__PURE__ */ l(Se, {})
			})
		})]
	});
}), Ce = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 9L12 16.5L19.5 9\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n", Y = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g transform=\"scale(2)\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.39648 5.89645C7.59175 5.70118 7.90825 5.70118 8.10352 5.89645L10.1035 7.89645C10.2988 8.09171 10.2988 8.40822 10.1035 8.60348L8.10352 10.6035C7.90825 10.7987 7.59175 10.7987 7.39648 10.6035C7.20122 10.4082 7.20122 10.0917 7.39648 9.89645L8.54297 8.74996H2.25C1.97386 8.74996 1.75 8.5261 1.75 8.24996C1.75 7.97382 1.97386 7.74996 2.25 7.74996H8.54297L7.39648 6.60348C7.20122 6.40822 7.20122 6.09171 7.39648 5.89645ZM3.89648 1.39645C4.09175 1.20118 4.40825 1.20118 4.60352 1.39645C4.79878 1.59171 4.79878 1.90822 4.60352 2.10348L3.45703 3.24996H9.75C10.0261 3.24996 10.25 3.47382 10.25 3.74996C10.25 4.0261 10.0261 4.24996 9.75 4.24996H3.45703L4.60352 5.39645C4.79878 5.59171 4.79878 5.90822 4.60352 6.10348C4.40825 6.29874 4.09175 6.29874 3.89648 6.10348L1.89648 4.10348C1.70122 3.90822 1.70122 3.59171 1.89648 3.39645L3.89648 1.39645Z\" fill=\"currentColor\"/>\n</g>\n</svg>\n", X = ({ svg: e }) => /* @__PURE__ */ l("span", {
	className: "navbar__icon",
	"aria-hidden": "true",
	dangerouslySetInnerHTML: { __html: e }
}), we = () => /* @__PURE__ */ u("svg", {
	width: "18",
	height: "12",
	viewBox: "0 0 18 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ l("rect", {
			x: "0",
			y: "8",
			width: "3",
			height: "4",
			rx: "1"
		}),
		/* @__PURE__ */ l("rect", {
			x: "5",
			y: "5",
			width: "3",
			height: "7",
			rx: "1"
		}),
		/* @__PURE__ */ l("rect", {
			x: "10",
			y: "2.5",
			width: "3",
			height: "9.5",
			rx: "1"
		}),
		/* @__PURE__ */ l("rect", {
			x: "15",
			y: "0",
			width: "3",
			height: "12",
			rx: "1"
		})
	]
}), Te = () => /* @__PURE__ */ l("svg", {
	width: "17",
	height: "12",
	viewBox: "0 0 17 12",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("path", { d: "M8.5 2.2c2.8 0 5.4 1.1 7.3 2.9l-1.5 1.6A8.3 8.3 0 0 0 8.5 4.3 8.3 8.3 0 0 0 2.7 6.7L1.2 5.1A10.5 10.5 0 0 1 8.5 2.2Zm0 3.7c1.8 0 3.5.7 4.8 1.9l-1.6 1.7a4.6 4.6 0 0 0-3.2-1.3 4.6 4.6 0 0 0-3.2 1.3L3.7 7.8A6.8 6.8 0 0 1 8.5 5.9Zm0 3.6c.9 0 1.7.4 2.3 1L8.5 12 6.2 10.5c.6-.6 1.4-1 2.3-1Z" })
}), Ee = () => /* @__PURE__ */ u("svg", {
	width: "25",
	height: "12",
	viewBox: "0 0 25 12",
	fill: "none",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ l("rect", {
			x: "0.5",
			y: "0.8",
			width: "21",
			height: "10.4",
			rx: "2.6",
			stroke: "currentColor",
			strokeOpacity: "0.4"
		}),
		/* @__PURE__ */ l("rect", {
			x: "2",
			y: "2.3",
			width: "18",
			height: "7.4",
			rx: "1.3",
			fill: "currentColor"
		}),
		/* @__PURE__ */ l("path", {
			d: "M23 4v4a1.8 1.8 0 0 0 0-4Z",
			fill: "currentColor",
			fillOpacity: "0.4"
		})
	]
}), De = ({ platform: e, surface: t }) => {
	let n = t === "gradient" || t === "overlay", r = [
		"navbar__status",
		`navbar__status--${e}`,
		n && "navbar__status--inverted"
	].filter(Boolean).join(" ");
	return e === "ios" ? /* @__PURE__ */ u("div", {
		className: r,
		children: [
			/* @__PURE__ */ l("span", {
				className: "navbar__status-time",
				children: "9:41"
			}),
			/* @__PURE__ */ l("span", {
				className: "navbar__status-island",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ u("span", {
				className: "navbar__status-levels",
				children: [
					/* @__PURE__ */ l(we, {}),
					/* @__PURE__ */ l(Te, {}),
					/* @__PURE__ */ l(Ee, {})
				]
			})
		]
	}) : /* @__PURE__ */ u("div", {
		className: r,
		children: [/* @__PURE__ */ u("span", {
			className: "navbar__status-levels",
			children: [
				/* @__PURE__ */ l(Te, {}),
				/* @__PURE__ */ l(we, {}),
				/* @__PURE__ */ l(Ee, {})
			]
		}), /* @__PURE__ */ l("span", {
			className: "navbar__status-time",
			children: "12:30"
		})]
	});
}, Oe = ({ surface: e, onClick: t, children: n }) => /* @__PURE__ */ l("button", {
	className: ["navbar__itinerary", e === "gradient" || e === "overlay" ? "navbar__itinerary--dim" : "navbar__itinerary--default"].join(" "),
	type: "button",
	onClick: t,
	children: n
}), ke = ({ surface: e, dir: t, t: n }) => {
	let r = n.variant || "default", i = e === "gradient" || e === "overlay", a = i ? "dim" : "default", o = ["navbar__title", i && "navbar__title--inverted"].filter(Boolean).join(" "), s = n.onBack && /* @__PURE__ */ l(W, {
		bg: a,
		type: "back",
		onClick: n.onBack,
		dir: t,
		"aria-label": "Back"
	}), d = (e, n, r) => /* @__PURE__ */ l(W, {
		bg: a,
		type: "1-icon",
		icon1: /* @__PURE__ */ l(X, { svg: e }),
		onClick: n,
		dir: t,
		"aria-label": r
	});
	if (r === "large") return /* @__PURE__ */ u("div", {
		className: "navbar__toolbar navbar__toolbar--ios navbar__toolbar--large",
		children: [/* @__PURE__ */ u("div", {
			className: "navbar__toolbar-row",
			children: [/* @__PURE__ */ l("div", {
				className: "navbar__toolbar-lhs",
				children: s
			}), /* @__PURE__ */ l("div", {
				className: "navbar__toolbar-rhs",
				children: (n.rightActions || []).map((e, n) => /* @__PURE__ */ l(W, {
					bg: a,
					type: "1-icon",
					icon1: e.icon,
					onClick: e.onClick,
					dir: t,
					"aria-label": e["aria-label"] || e.label
				}, n))
			})]
		}), n.title && /* @__PURE__ */ l("p", {
			className: ["navbar__large-title", i && "navbar__large-title--inverted"].filter(Boolean).join(" "),
			children: n.title
		})]
	});
	if (r === "flights" || r === "stays") return /* @__PURE__ */ u("div", {
		className: "navbar__toolbar navbar__toolbar--ios navbar__toolbar--itinerary",
		children: [
			s,
			/* @__PURE__ */ l(Oe, {
				surface: e,
				onClick: n.onItinerary,
				children: r === "flights" ? /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ u("span", {
					className: "navbar__itin-route",
					children: [
						/* @__PURE__ */ l("span", {
							className: "navbar__itin-code",
							children: n.origin
						}),
						/* @__PURE__ */ l(X, { svg: Y }),
						/* @__PURE__ */ l("span", {
							className: "navbar__itin-code",
							children: n.destination
						}),
						n.tripType && /* @__PURE__ */ l("span", {
							className: "navbar__itin-code",
							children: n.tripType
						})
					]
				}), /* @__PURE__ */ u("span", {
					className: "navbar__itin-sub",
					children: [
						n.travelers != null && /* @__PURE__ */ u("span", {
							className: "navbar__itin-pax",
							children: [n.travelers, /* @__PURE__ */ l(X, { svg: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 3.5C15.5899 3.5 18.5 6.41015 18.5 10C18.5 12.585 16.9908 14.8169 14.8057 15.8643C15.7453 16.112 16.6522 16.4838 17.501 16.9736C19.1732 17.9389 20.5624 19.3271 21.5283 20.999C21.6664 21.2381 21.5838 21.5445 21.3447 21.6826C21.1057 21.8204 20.8002 21.738 20.6621 21.499C19.784 19.9792 18.5212 18.7173 17.001 17.8398C15.4806 16.9623 13.7555 16.5 12 16.5C10.2446 16.5 8.52034 16.9624 7 17.8398C5.47959 18.7174 4.21607 19.979 3.33789 21.499C3.19974 21.7381 2.89437 21.8198 2.65527 21.6816C2.4163 21.5435 2.33457 21.2381 2.47266 20.999C3.43862 19.3271 4.82763 17.9389 6.5 16.9736C7.3483 16.484 8.25443 16.1121 9.19336 15.8643C7.00871 14.8168 5.5 12.5846 5.5 10C5.5 6.41018 8.41019 3.50005 12 3.5ZM12 4.5C8.96247 4.50005 6.5 6.96246 6.5 10C6.5 13.0375 8.96247 15.5 12 15.5C15.0376 15.5 17.5 13.0376 17.5 10C17.5 6.96243 15.0376 4.5 12 4.5Z\" fill=\"currentColor\"/>\n</svg>\n" })]
						}),
						n.cabin && /* @__PURE__ */ l("span", { children: n.cabin }),
						n.cabin && n.dates && /* @__PURE__ */ l("span", {
							className: "navbar__itin-dot",
							children: "•"
						}),
						n.dates && /* @__PURE__ */ l("span", { children: n.dates })
					]
				})] }) : /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("span", {
					className: "navbar__itin-title",
					children: n.location
				}), /* @__PURE__ */ u("span", {
					className: "navbar__itin-sub",
					children: [
						n.guests != null && /* @__PURE__ */ u("span", {
							className: "navbar__itin-pax",
							children: [n.guests, /* @__PURE__ */ l(X, { svg: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 3.5C15.5899 3.5 18.5 6.41015 18.5 10C18.5 12.585 16.9908 14.8169 14.8057 15.8643C15.7453 16.112 16.6522 16.4838 17.501 16.9736C19.1732 17.9389 20.5624 19.3271 21.5283 20.999C21.6664 21.2381 21.5838 21.5445 21.3447 21.6826C21.1057 21.8204 20.8002 21.738 20.6621 21.499C19.784 19.9792 18.5212 18.7173 17.001 17.8398C15.4806 16.9623 13.7555 16.5 12 16.5C10.2446 16.5 8.52034 16.9624 7 17.8398C5.47959 18.7174 4.21607 19.979 3.33789 21.499C3.19974 21.7381 2.89437 21.8198 2.65527 21.6816C2.4163 21.5435 2.33457 21.2381 2.47266 20.999C3.43862 19.3271 4.82763 17.9389 6.5 16.9736C7.3483 16.484 8.25443 16.1121 9.19336 15.8643C7.00871 14.8168 5.5 12.5846 5.5 10C5.5 6.41018 8.41019 3.50005 12 3.5ZM12 4.5C8.96247 4.50005 6.5 6.96246 6.5 10C6.5 13.0375 8.96247 15.5 12 15.5C15.0376 15.5 17.5 13.0376 17.5 10C17.5 6.96243 15.0376 4.5 12 4.5Z\" fill=\"currentColor\"/>\n</svg>\n" })]
						}),
						n.guests != null && n.dates && /* @__PURE__ */ l("span", {
							className: "navbar__itin-dot",
							children: "•"
						}),
						n.dates && /* @__PURE__ */ l("span", { children: n.dates })
					]
				})] })
			}),
			/* @__PURE__ */ l("div", {
				className: "navbar__toolbar-rhs",
				children: n.onCurrency && d("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.75 14.125C7.02612 14.125 7.24997 14.3489 7.25 14.625C7.25 14.9011 7.02614 15.125 6.75 15.125H4.2002L6.52051 17.4795C7.24007 18.199 8.09407 18.7707 9.03418 19.1602C9.97426 19.5495 10.9825 19.75 12 19.75C13.0175 19.75 14.0258 19.5495 14.9658 19.1602C15.906 18.7707 16.7609 18.1991 17.4805 17.4795C17.6757 17.2848 17.9924 17.2846 18.1875 17.4795C18.3825 17.6747 18.3825 17.9923 18.1875 18.1875C17.3751 18.9998 16.41 19.6443 15.3486 20.084C14.2872 20.5236 13.1489 20.75 12 20.75C10.8513 20.75 9.71362 20.5235 8.65234 20.084C7.59097 19.6443 6.62588 18.9998 5.81348 18.1875L5.81055 18.1846L3.5 15.8379V18.375C3.5 18.6511 3.27614 18.875 3 18.875C2.72386 18.875 2.5 18.6511 2.5 18.375V14.625C2.50003 14.3489 2.72388 14.125 3 14.125H6.75ZM12 8.25C12.2761 8.25 12.5 8.47386 12.5 8.75V9C12.7298 9 12.9576 9.04487 13.1699 9.13281C13.3822 9.22076 13.5748 9.35021 13.7373 9.5127C13.8998 9.67518 14.0292 9.86778 14.1172 10.0801C14.2051 10.2924 14.25 10.5202 14.25 10.75C14.25 11.0261 14.0261 11.25 13.75 11.25C13.4739 11.25 13.25 11.0261 13.25 10.75C13.25 10.6515 13.231 10.5539 13.1934 10.4629C13.1557 10.3719 13.0999 10.2894 13.0303 10.2197C12.9606 10.1501 12.8781 10.0943 12.7871 10.0566C12.6961 10.019 12.5985 10 12.5 10H11.375C11.1761 10 10.9854 10.0791 10.8447 10.2197C10.7041 10.3604 10.625 10.5511 10.625 10.75C10.625 10.9489 10.7041 11.1396 10.8447 11.2803C10.9854 11.4209 11.1761 11.5 11.375 11.5H12.75C13.2141 11.5 13.6591 11.6845 13.9873 12.0127C14.3155 12.3409 14.5 12.7859 14.5 13.25C14.5 13.7141 14.3155 14.1591 13.9873 14.4873C13.6591 14.8155 13.2141 15 12.75 15H12.5V15.25C12.5 15.5261 12.2761 15.75 12 15.75C11.7239 15.75 11.5 15.5261 11.5 15.25V15H11.25C10.7859 15 10.3409 14.8155 10.0127 14.4873C9.68451 14.1591 9.5 13.7141 9.5 13.25C9.5 12.9739 9.72386 12.75 10 12.75C10.2761 12.75 10.5 12.9739 10.5 13.25C10.5 13.4489 10.5791 13.6396 10.7197 13.7803C10.8604 13.9209 11.0511 14 11.25 14H12.75C12.9489 14 13.1396 13.9209 13.2803 13.7803C13.4209 13.6396 13.5 13.4489 13.5 13.25C13.5 13.0511 13.4209 12.8604 13.2803 12.7197C13.1396 12.5791 12.9489 12.5 12.75 12.5H11.375C10.9109 12.5 10.4659 12.3155 10.1377 11.9873C9.80951 11.6591 9.625 11.2141 9.625 10.75C9.625 10.2859 9.80951 9.84088 10.1377 9.5127C10.4659 9.18451 10.9109 9 11.375 9H11.5V8.75C11.5 8.47386 11.7239 8.25 12 8.25ZM12 3.25C13.1491 3.25 14.287 3.47629 15.3486 3.91602C16.4102 4.35574 17.375 5.00002 18.1875 5.8125L18.1895 5.81543L20.5 8.15625V5.625C20.5 5.34886 20.7239 5.125 21 5.125C21.2761 5.125 21.5 5.34886 21.5 5.625V9.375C21.5 9.54832 21.4113 9.70035 21.2773 9.79004C21.2659 9.79771 21.2531 9.80295 21.2412 9.80957C21.2233 9.81955 21.2057 9.83014 21.1865 9.83789C21.183 9.83932 21.1794 9.84046 21.1758 9.8418C21.1496 9.85165 21.1228 9.85985 21.0947 9.86523C21.0806 9.86796 21.0661 9.86765 21.0518 9.86914C21.0346 9.87091 21.0176 9.875 21 9.875H17.25C16.9739 9.875 16.75 9.65111 16.75 9.375C16.75 9.09886 16.9739 8.875 17.25 8.875H19.8047L17.4785 6.5166C16.7594 5.7981 15.905 5.22888 14.9658 4.83984C14.0256 4.45038 13.0177 4.25 12 4.25C10.9823 4.25 9.97445 4.45037 9.03418 4.83984C8.09391 5.22932 7.23918 5.79988 6.51953 6.51953C6.32427 6.71479 6.00776 6.71479 5.8125 6.51953C5.6176 6.32424 5.61736 6.00764 5.8125 5.8125C6.62498 5.00002 7.58982 4.35574 8.65137 3.91602C9.71296 3.47629 10.8509 3.25 12 3.25Z\" fill=\"currentColor\"/>\n</svg>\n", n.onCurrency, "Change currency")
			})
		]
	});
	if (r === "segmented-control") {
		let e = n.segmentedControl || {};
		return /* @__PURE__ */ u("div", {
			className: "navbar__toolbar navbar__toolbar--ios navbar__toolbar--segmented",
			children: [
				/* @__PURE__ */ l("div", {
					className: "navbar__toolbar-lhs",
					children: s
				}),
				/* @__PURE__ */ l("div", {
					className: "navbar__toolbar-center",
					children: /* @__PURE__ */ l(U, {
						items: e.items,
						value: e.value,
						onChange: e.onChange,
						platform: "ios",
						dir: t
					})
				}),
				/* @__PURE__ */ l("div", {
					className: "navbar__toolbar-rhs",
					children: n.onClose && /* @__PURE__ */ l(W, {
						bg: a,
						type: "x",
						onClick: n.onClose,
						dir: t,
						"aria-label": "Close"
					})
				})
			]
		});
	}
	if (r === "search") {
		let e = n.search || {};
		return /* @__PURE__ */ l("div", {
			className: "navbar__toolbar navbar__toolbar--ios navbar__toolbar--search",
			children: /* @__PURE__ */ l(J, {
				platform: "ios",
				value: e.value,
				onChange: e.onChange,
				onClear: e.onClear,
				onClose: n.onClose,
				showClose: !!n.onClose,
				placeholder: e.placeholder,
				dir: t
			})
		});
	}
	return /* @__PURE__ */ u("div", {
		className: "navbar__toolbar navbar__toolbar--ios",
		children: [
			/* @__PURE__ */ l("div", {
				className: "navbar__toolbar-lhs",
				children: s
			}),
			/* @__PURE__ */ u("div", {
				className: o,
				children: [n.title && /* @__PURE__ */ l("span", {
					className: "navbar__title-text",
					children: n.title
				}), n.subtitle && /* @__PURE__ */ l("span", {
					className: "navbar__subtitle-text",
					children: n.subtitle
				})]
			}),
			/* @__PURE__ */ l("div", {
				className: "navbar__toolbar-rhs",
				children: (n.rightActions || []).map((e, n) => /* @__PURE__ */ l(W, {
					bg: a,
					type: "1-icon",
					icon1: e.icon,
					onClick: e.onClick,
					dir: t,
					"aria-label": e["aria-label"] || e.label
				}, n))
			})
		]
	});
}, Ae = ({ variant: e, t }) => /* @__PURE__ */ u("div", {
	className: "navbar__android-itin",
	children: [e === "flights" ? /* @__PURE__ */ u("span", {
		className: "navbar__itin-route",
		children: [
			/* @__PURE__ */ l("span", {
				className: "navbar__itin-code",
				children: t.origin
			}),
			/* @__PURE__ */ l(X, { svg: Y }),
			/* @__PURE__ */ l("span", {
				className: "navbar__itin-code",
				children: t.destination
			}),
			t.tripType && /* @__PURE__ */ l("span", {
				className: "navbar__itin-code",
				children: t.tripType
			})
		]
	}) : /* @__PURE__ */ l("span", {
		className: "navbar__itin-title",
		children: t.location
	}), /* @__PURE__ */ u("span", {
		className: "navbar__itin-sub",
		children: [
			(e === "flights" ? t.travelers : t.guests) != null && /* @__PURE__ */ u("span", {
				className: "navbar__itin-pax",
				children: [e === "flights" ? t.travelers : t.guests, /* @__PURE__ */ l(X, { svg: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 3.5C15.5899 3.5 18.5 6.41015 18.5 10C18.5 12.585 16.9908 14.8169 14.8057 15.8643C15.7453 16.112 16.6522 16.4838 17.501 16.9736C19.1732 17.9389 20.5624 19.3271 21.5283 20.999C21.6664 21.2381 21.5838 21.5445 21.3447 21.6826C21.1057 21.8204 20.8002 21.738 20.6621 21.499C19.784 19.9792 18.5212 18.7173 17.001 17.8398C15.4806 16.9623 13.7555 16.5 12 16.5C10.2446 16.5 8.52034 16.9624 7 17.8398C5.47959 18.7174 4.21607 19.979 3.33789 21.499C3.19974 21.7381 2.89437 21.8198 2.65527 21.6816C2.4163 21.5435 2.33457 21.2381 2.47266 20.999C3.43862 19.3271 4.82763 17.9389 6.5 16.9736C7.3483 16.484 8.25443 16.1121 9.19336 15.8643C7.00871 14.8168 5.5 12.5846 5.5 10C5.5 6.41018 8.41019 3.50005 12 3.5ZM12 4.5C8.96247 4.50005 6.5 6.96246 6.5 10C6.5 13.0375 8.96247 15.5 12 15.5C15.0376 15.5 17.5 13.0376 17.5 10C17.5 6.96243 15.0376 4.5 12 4.5Z\" fill=\"currentColor\"/>\n</svg>\n" })]
			}),
			e === "flights" && t.cabin && /* @__PURE__ */ l("span", { children: t.cabin }),
			t.dates && /* @__PURE__ */ l("span", {
				className: "navbar__itin-dot",
				children: "•"
			}),
			t.dates && /* @__PURE__ */ l("span", { children: t.dates }),
			/* @__PURE__ */ l("span", {
				className: "navbar__itin-caret",
				children: /* @__PURE__ */ l(X, { svg: Ce })
			})
		]
	})]
}), je = ({ surface: e, dir: t, t: n }) => {
	let r = e === "gradient" || e === "overlay", i = e === "default" && n.variant || "default", a = n.onBack && /* @__PURE__ */ l("button", {
		className: "navbar__icon-btn",
		type: "button",
		onClick: n.onBack,
		"aria-label": "Back",
		children: /* @__PURE__ */ l(() => /* @__PURE__ */ l(X, { svg: t === "rtl" ? K : G }), {})
	}), o = (e, t) => /* @__PURE__ */ l("button", {
		className: "navbar__icon-btn",
		type: "button",
		onClick: e.onClick,
		"aria-label": e["aria-label"] || e.label,
		children: /* @__PURE__ */ l("span", {
			className: "navbar__icon",
			"aria-hidden": "true",
			children: e.icon
		})
	}, t), s = (e, t, n) => /* @__PURE__ */ l("button", {
		className: "navbar__icon-btn",
		type: "button",
		onClick: t,
		"aria-label": n,
		children: /* @__PURE__ */ l(X, { svg: e })
	});
	if (i === "large") return /* @__PURE__ */ u("div", {
		className: "navbar__toolbar navbar__toolbar--android navbar__toolbar--android-large",
		children: [
			/* @__PURE__ */ l("div", {
				className: "navbar__toolbar-lhs",
				children: a
			}),
			n.title && /* @__PURE__ */ l("p", {
				className: "navbar__android-large-title",
				children: n.title
			}),
			/* @__PURE__ */ l("div", {
				className: "navbar__toolbar-rhs",
				children: (n.rightActions || []).map(o)
			})
		]
	});
	if (i === "flights" || i === "stays") return /* @__PURE__ */ u("div", {
		className: "navbar__toolbar navbar__toolbar--android navbar__toolbar--itinerary",
		children: [
			/* @__PURE__ */ l("div", {
				className: "navbar__toolbar-lhs",
				children: a
			}),
			/* @__PURE__ */ l("button", {
				className: "navbar__android-itin-btn",
				type: "button",
				onClick: n.onItinerary,
				children: /* @__PURE__ */ l(Ae, {
					variant: i,
					t: n
				})
			}),
			/* @__PURE__ */ u("div", {
				className: "navbar__toolbar-rhs",
				children: [i === "stays" && n.onSearch && s("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.8748 2.5C15.5002 2.5 19.2498 6.24962 19.2498 10.875C19.2498 13.008 18.4504 14.953 17.1375 16.4316L21.3533 20.6475C21.5479 20.8428 21.5484 21.1595 21.3533 21.3545C21.1583 21.5494 20.8416 21.549 20.6463 21.3545L16.4305 17.1387C14.9519 18.4511 13.0073 19.25 10.8748 19.25C6.24943 19.25 2.49982 15.5004 2.49982 10.875C2.49982 6.24962 6.24943 2.5 10.8748 2.5ZM10.8748 3.5C6.80172 3.5 3.49982 6.8019 3.49982 10.875C3.49982 14.9481 6.80172 18.25 10.8748 18.25C14.9479 18.25 18.2498 14.9481 18.2498 10.875C18.2498 6.8019 14.9479 3.5 10.8748 3.5Z\" fill=\"currentColor\"/>\n</svg>\n", n.onSearch, "Search"), n.onCurrency && s("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.75 14.125C7.02612 14.125 7.24997 14.3489 7.25 14.625C7.25 14.9011 7.02614 15.125 6.75 15.125H4.2002L6.52051 17.4795C7.24007 18.199 8.09407 18.7707 9.03418 19.1602C9.97426 19.5495 10.9825 19.75 12 19.75C13.0175 19.75 14.0258 19.5495 14.9658 19.1602C15.906 18.7707 16.7609 18.1991 17.4805 17.4795C17.6757 17.2848 17.9924 17.2846 18.1875 17.4795C18.3825 17.6747 18.3825 17.9923 18.1875 18.1875C17.3751 18.9998 16.41 19.6443 15.3486 20.084C14.2872 20.5236 13.1489 20.75 12 20.75C10.8513 20.75 9.71362 20.5235 8.65234 20.084C7.59097 19.6443 6.62588 18.9998 5.81348 18.1875L5.81055 18.1846L3.5 15.8379V18.375C3.5 18.6511 3.27614 18.875 3 18.875C2.72386 18.875 2.5 18.6511 2.5 18.375V14.625C2.50003 14.3489 2.72388 14.125 3 14.125H6.75ZM12 8.25C12.2761 8.25 12.5 8.47386 12.5 8.75V9C12.7298 9 12.9576 9.04487 13.1699 9.13281C13.3822 9.22076 13.5748 9.35021 13.7373 9.5127C13.8998 9.67518 14.0292 9.86778 14.1172 10.0801C14.2051 10.2924 14.25 10.5202 14.25 10.75C14.25 11.0261 14.0261 11.25 13.75 11.25C13.4739 11.25 13.25 11.0261 13.25 10.75C13.25 10.6515 13.231 10.5539 13.1934 10.4629C13.1557 10.3719 13.0999 10.2894 13.0303 10.2197C12.9606 10.1501 12.8781 10.0943 12.7871 10.0566C12.6961 10.019 12.5985 10 12.5 10H11.375C11.1761 10 10.9854 10.0791 10.8447 10.2197C10.7041 10.3604 10.625 10.5511 10.625 10.75C10.625 10.9489 10.7041 11.1396 10.8447 11.2803C10.9854 11.4209 11.1761 11.5 11.375 11.5H12.75C13.2141 11.5 13.6591 11.6845 13.9873 12.0127C14.3155 12.3409 14.5 12.7859 14.5 13.25C14.5 13.7141 14.3155 14.1591 13.9873 14.4873C13.6591 14.8155 13.2141 15 12.75 15H12.5V15.25C12.5 15.5261 12.2761 15.75 12 15.75C11.7239 15.75 11.5 15.5261 11.5 15.25V15H11.25C10.7859 15 10.3409 14.8155 10.0127 14.4873C9.68451 14.1591 9.5 13.7141 9.5 13.25C9.5 12.9739 9.72386 12.75 10 12.75C10.2761 12.75 10.5 12.9739 10.5 13.25C10.5 13.4489 10.5791 13.6396 10.7197 13.7803C10.8604 13.9209 11.0511 14 11.25 14H12.75C12.9489 14 13.1396 13.9209 13.2803 13.7803C13.4209 13.6396 13.5 13.4489 13.5 13.25C13.5 13.0511 13.4209 12.8604 13.2803 12.7197C13.1396 12.5791 12.9489 12.5 12.75 12.5H11.375C10.9109 12.5 10.4659 12.3155 10.1377 11.9873C9.80951 11.6591 9.625 11.2141 9.625 10.75C9.625 10.2859 9.80951 9.84088 10.1377 9.5127C10.4659 9.18451 10.9109 9 11.375 9H11.5V8.75C11.5 8.47386 11.7239 8.25 12 8.25ZM12 3.25C13.1491 3.25 14.287 3.47629 15.3486 3.91602C16.4102 4.35574 17.375 5.00002 18.1875 5.8125L18.1895 5.81543L20.5 8.15625V5.625C20.5 5.34886 20.7239 5.125 21 5.125C21.2761 5.125 21.5 5.34886 21.5 5.625V9.375C21.5 9.54832 21.4113 9.70035 21.2773 9.79004C21.2659 9.79771 21.2531 9.80295 21.2412 9.80957C21.2233 9.81955 21.2057 9.83014 21.1865 9.83789C21.183 9.83932 21.1794 9.84046 21.1758 9.8418C21.1496 9.85165 21.1228 9.85985 21.0947 9.86523C21.0806 9.86796 21.0661 9.86765 21.0518 9.86914C21.0346 9.87091 21.0176 9.875 21 9.875H17.25C16.9739 9.875 16.75 9.65111 16.75 9.375C16.75 9.09886 16.9739 8.875 17.25 8.875H19.8047L17.4785 6.5166C16.7594 5.7981 15.905 5.22888 14.9658 4.83984C14.0256 4.45038 13.0177 4.25 12 4.25C10.9823 4.25 9.97445 4.45037 9.03418 4.83984C8.09391 5.22932 7.23918 5.79988 6.51953 6.51953C6.32427 6.71479 6.00776 6.71479 5.8125 6.51953C5.6176 6.32424 5.61736 6.00764 5.8125 5.8125C6.62498 5.00002 7.58982 4.35574 8.65137 3.91602C9.71296 3.47629 10.8509 3.25 12 3.25Z\" fill=\"currentColor\"/>\n</svg>\n", n.onCurrency, "Change currency")]
			})
		]
	});
	if (i === "segmented-control") {
		let e = n.segmentedControl || {};
		return /* @__PURE__ */ u("div", {
			className: "navbar__toolbar navbar__toolbar--android navbar__toolbar--segmented",
			children: [
				/* @__PURE__ */ l("div", {
					className: "navbar__toolbar-lhs",
					children: a
				}),
				/* @__PURE__ */ l("div", {
					className: "navbar__toolbar-center",
					children: /* @__PURE__ */ l(U, {
						items: e.items,
						value: e.value,
						onChange: e.onChange,
						platform: "android",
						dir: t
					})
				}),
				/* @__PURE__ */ l("div", {
					className: "navbar__toolbar-rhs",
					children: (n.rightActions || []).map(o)
				})
			]
		});
	}
	if (i === "search") {
		let e = n.search || {};
		return /* @__PURE__ */ l("div", {
			className: "navbar__toolbar navbar__toolbar--android navbar__toolbar--search",
			children: /* @__PURE__ */ l(J, {
				platform: "android",
				value: e.value,
				onChange: e.onChange,
				onClear: e.onClear,
				onClose: n.onClose,
				placeholder: e.placeholder,
				dir: t
			})
		});
	}
	return /* @__PURE__ */ u("div", {
		className: "navbar__toolbar navbar__toolbar--android",
		children: [
			/* @__PURE__ */ l("div", {
				className: "navbar__toolbar-lhs",
				children: a
			}),
			/* @__PURE__ */ u("div", {
				className: ["navbar__title", r && "navbar__title--inverted"].filter(Boolean).join(" "),
				children: [n.title && /* @__PURE__ */ l("span", {
					className: "navbar__title-text",
					children: n.title
				}), n.subtitle && /* @__PURE__ */ l("span", {
					className: "navbar__subtitle-text",
					children: n.subtitle
				})]
			}),
			/* @__PURE__ */ l("div", {
				className: "navbar__toolbar-rhs",
				children: (n.rightActions || []).map(o)
			})
		]
	});
}, Me = ({ platform: e, surface: t, dir: n, t: r }) => l(e === "ios" ? ke : je, {
	surface: t,
	dir: n,
	t: r
}), Ne = ({ icon: e, label: t, dropdown: n, selected: r, surface: i, onClick: a, dir: o }) => /* @__PURE__ */ u("button", {
	className: [
		"navbar__glass-chip",
		i === "gradient" || i === "overlay" ? "navbar__glass-chip--dim" : "navbar__glass-chip--default",
		!t && "navbar__glass-chip--icon-only",
		r && "navbar__glass-chip--selected"
	].filter(Boolean).join(" "),
	type: "button",
	onClick: a,
	dir: o,
	children: [
		e && /* @__PURE__ */ l("span", {
			className: "navbar__glass-chip-icon",
			"aria-hidden": "true",
			children: e
		}),
		t && /* @__PURE__ */ l("span", {
			className: "navbar__glass-chip-label",
			children: t
		}),
		n && /* @__PURE__ */ l("span", {
			className: "navbar__glass-chip-chevron",
			"aria-hidden": "true",
			dangerouslySetInnerHTML: { __html: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 9L12 16.5L19.5 9\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n" }
		})
	]
}), Pe = ({ platform: e, surface: t, dir: n, chips: r }) => /* @__PURE__ */ l("div", {
	className: "navbar__chips",
	dir: n,
	children: r.map((r, i) => e === "ios" ? /* @__PURE__ */ l(Ne, {
		...r,
		surface: t,
		dir: n
	}, i) : /* @__PURE__ */ l(pe, {
		label: r.label,
		icon: r.icon,
		dropdown: r.dropdown,
		selected: r.selected,
		onClick: r.onClick,
		dir: n
	}, i))
});
function Fe({ platform: e, surface: t = "default", toolbar: n, chips: r, segmentedControl: i, dir: a, className: o = "", ...s }) {
	let c = m(e), d = h(a), f = c === "ios" ? "default" : t, p = c === "ios" || f === "default" ? n?.variant : void 0, g = [
		"navbar",
		`navbar--${c}`,
		`navbar--${f}`,
		o
	].filter(Boolean).join(" "), _ = c === "android" && (f === "gradient" || f === "overlay"), v = !_ && r && r.length > 0, y = !_ && i && p !== "segmented-control";
	return /* @__PURE__ */ u("nav", {
		className: g,
		dir: d,
		...s,
		children: [
			/* @__PURE__ */ l(De, {
				platform: c,
				surface: f
			}),
			n && /* @__PURE__ */ l(Me, {
				platform: c,
				surface: f,
				dir: d,
				t: n
			}),
			v && /* @__PURE__ */ l(Pe, {
				platform: c,
				surface: f,
				dir: d,
				chips: r
			}),
			y && /* @__PURE__ */ l("div", {
				className: "navbar__segmented",
				children: /* @__PURE__ */ l(U, {
					items: i.items,
					value: i.value,
					onChange: i.onChange,
					platform: c,
					dir: d
				})
			})
		]
	});
}
//#endregion
//#region src/components/BottomActionBar.jsx
var Ie = () => /* @__PURE__ */ l("svg", {
	width: "12",
	height: "12",
	viewBox: "0 0 12 12",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("path", {
		d: "M2 8.5L6 4.5L10 8.5",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), Le = () => /* @__PURE__ */ u("svg", {
	viewBox: "0 0 32 32",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ l("rect", {
			width: "32",
			height: "32",
			rx: "2",
			fill: "black"
		}),
		/* @__PURE__ */ l("path", {
			d: "M13.84 11.28c.4-.49.68-1.15.6-1.83-.6.03-1.33.4-1.75.89-.39.44-.72 1.16-.63 1.83.67.05 1.36-.34 1.78-.89z",
			fill: "white"
		}),
		/* @__PURE__ */ l("path", {
			d: "M14.43 12.19c-.98-.06-1.82.56-2.28.56-.47 0-1.19-.53-1.97-.52-.1.0-1.93 1.45-.95 3.57.54 1.08 1.1 2.3 1.85 2.3.77.03 1.08-.52 2.02-.52.95 0 1.22.52 2.05.5.77-.01 1.27-.76 1.8-1.84.77-1.02.99-2.38.34-3.05-.48-.53-1.23-.95-1.86-1z",
			fill: "white"
		}),
		/* @__PURE__ */ l("text", {
			x: "18",
			y: "19",
			fill: "white",
			fontFamily: "system-ui, sans-serif",
			fontSize: "8",
			fontWeight: "600",
			letterSpacing: "-0.2",
			children: "Pay"
		})
	]
});
function Re({ type: e = "starting-price", price: t = "$1,215", originalPrice: n, fromLabel: r = "Starting from", bookingDetailsLabel: i = "Booking details", paymentMethod: a = "Apple Pay", paymentLogo: o, actionLabel: s = "Label", onBack: d, onAction: f, dir: p = "ltr", className: m = "" }) {
	let h = e === "funnel", g = e === "payment", _ = h || g;
	return /* @__PURE__ */ u("div", {
		className: [
			"bottom-action-bar",
			`bottom-action-bar--${e}`,
			m
		].filter(Boolean).join(" "),
		dir: p,
		children: [
			_ && /* @__PURE__ */ l("button", {
				className: "bottom-action-bar__back",
				type: "button",
				onClick: d,
				"aria-label": "Go back",
				children: /* @__PURE__ */ l(Ie, {})
			}),
			!g && /* @__PURE__ */ u("div", {
				className: "bottom-action-bar__content",
				children: [
					e === "starting-price" && /* @__PURE__ */ l("p", {
						className: "bottom-action-bar__from-label",
						children: r
					}),
					/* @__PURE__ */ u("div", {
						className: "bottom-action-bar__price",
						children: [/* @__PURE__ */ l("span", {
							className: "bottom-action-bar__price-current",
							children: t
						}), e === "starting-price" && n && /* @__PURE__ */ l("span", {
							className: "bottom-action-bar__price-original",
							children: n
						})]
					}),
					h && /* @__PURE__ */ l("a", {
						className: "bottom-action-bar__booking-link",
						children: i
					})
				]
			}),
			g && /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("div", {
				className: "bottom-action-bar__payment-logo",
				children: o ?? /* @__PURE__ */ l(Le, {})
			}), /* @__PURE__ */ l("p", {
				className: "bottom-action-bar__payment-method",
				children: a
			})] }),
			/* @__PURE__ */ l("button", {
				className: `bottom-action-bar__btn bottom-action-bar__btn--${g ? "payment" : "primary"}`,
				type: "button",
				onClick: f,
				children: s
			})
		]
	});
}
//#endregion
//#region src/components/Toggle.jsx
var ze = t(function({ platform: e, state: t = "default", checked: n = !1, label: r = "Label", dir: i, onChange: a, className: o = "", ...s }, c) {
	let d = m(e), f = h(i), p = [
		"toggle",
		`toggle--${d}`,
		t !== "default" && `toggle--${t}`,
		n && "toggle--checked",
		o
	].filter(Boolean).join(" ");
	return t === "skeleton" ? /* @__PURE__ */ u("div", {
		className: p,
		dir: f,
		...s,
		children: [/* @__PURE__ */ l("div", { className: "toggle__skeleton-label" }), /* @__PURE__ */ l("div", { className: "toggle__skeleton-track" })]
	}) : /* @__PURE__ */ u("label", {
		className: p,
		dir: f,
		...s,
		children: [
			r && /* @__PURE__ */ l("span", {
				className: "toggle__label",
				children: r
			}),
			/* @__PURE__ */ l("input", {
				ref: c,
				type: "checkbox",
				className: "toggle__input",
				checked: n,
				disabled: t === "disabled",
				onChange: a
			}),
			/* @__PURE__ */ l("span", {
				className: "toggle__track",
				children: /* @__PURE__ */ l("span", { className: "toggle__knob" })
			})
		]
	});
});
//#endregion
//#region src/components/Stepper.jsx
function Be({ value: e = 0, min: t = 0, max: n, onChange: r, dir: i = "ltr", className: a = "", ...o }) {
	let s = e <= t, c = n !== void 0 && e >= n, d = () => {
		s || r?.(e - 1);
	}, f = () => {
		c || r?.(e + 1);
	}, p = ["stepper", a].filter(Boolean).join(" "), m = /* @__PURE__ */ l("button", {
		type: "button",
		className: "stepper__btn",
		onClick: d,
		disabled: s,
		"aria-label": "Decrease",
		children: /* @__PURE__ */ l(H, { className: "stepper__icon" })
	}), h = /* @__PURE__ */ l("button", {
		type: "button",
		className: "stepper__btn",
		onClick: f,
		disabled: c,
		"aria-label": "Increase",
		children: /* @__PURE__ */ l(ee, { className: "stepper__icon" })
	});
	return /* @__PURE__ */ u("div", {
		className: p,
		dir: i,
		...o,
		children: [
			i === "rtl" ? h : m,
			/* @__PURE__ */ l("span", {
				className: "stepper__value",
				children: e
			}),
			i === "rtl" ? m : h
		]
	});
}
//#endregion
//#region src/components/Separator.jsx
function Ve({ type: e = "cell separator", variant: t = "simple", label: n, dir: r = "ltr", className: i = "", ...a }) {
	if (e === "section separator") return /* @__PURE__ */ l("div", {
		className: [
			"separator",
			"separator--section",
			i
		].filter(Boolean).join(" "),
		role: "separator",
		...a
	});
	if (t === "or") {
		let e = n ?? (r === "rtl" ? "أو" : "OR");
		return /* @__PURE__ */ u("div", {
			className: [
				"separator",
				"separator--or",
				i
			].filter(Boolean).join(" "),
			role: "separator",
			dir: r,
			...a,
			children: [
				/* @__PURE__ */ l("span", { className: "separator__line" }),
				/* @__PURE__ */ l("span", {
					className: "separator__or-label",
					children: e
				}),
				/* @__PURE__ */ l("span", { className: "separator__line" })
			]
		});
	}
	return t === "dashed" ? /* @__PURE__ */ l("hr", {
		className: [
			"separator",
			"separator--dashed",
			i
		].filter(Boolean).join(" "),
		...a
	}) : /* @__PURE__ */ l("hr", {
		className: ["separator", i].filter(Boolean).join(" "),
		...a
	});
}
//#endregion
//#region src/components/Cell.jsx
function He({ visual: e = "icon", icon: t = null, iconSrc: n, title: r, label: i, subtext: a, value: o, sideIcon: s, sideIconSrc: c, tag: d, trailing: f = "chevron", toggleChecked: p = !1, onToggleChange: m, stepperValue: h = 0, stepperMin: g = 0, stepperMax: _, onStepperChange: v, selected: y = !1, showSeparator: b = !0, className: x = "", dir: C, ...w }) {
	let T = C === "rtl", E = [
		"cell",
		y && "cell--selected",
		x
	].filter(Boolean).join(" "), D = (e) => l(T ? P : N, {
		className: "cell__chevron",
		...e
	}), O = n ? /* @__PURE__ */ l("img", {
		src: n,
		alt: "",
		className: "cell__visual-img"
	}) : typeof t == "string" ? /* @__PURE__ */ l("img", {
		src: t,
		alt: "",
		className: "cell__visual-img"
	}) : t, k = c ? /* @__PURE__ */ l("img", {
		src: c,
		alt: "",
		className: "cell__visual-img"
	}) : s, A = f !== "none" && (f === "chevron" || f === "toggle" || f === "stepper" || o || k || d);
	return /* @__PURE__ */ u("div", {
		className: E,
		dir: C,
		...w,
		children: [/* @__PURE__ */ u("div", {
			className: "cell__row",
			children: [
				e && /* @__PURE__ */ l("div", {
					className: `cell__visual cell__visual--${e}`,
					children: O
				}),
				/* @__PURE__ */ u("div", {
					className: "cell__content",
					children: [
						r && /* @__PURE__ */ l("span", {
							className: "cell__title type-caption-regular",
							children: r
						}),
						i && /* @__PURE__ */ l("span", {
							className: "cell__label type-body-regular",
							children: i
						}),
						a && /* @__PURE__ */ l("span", {
							className: "cell__subtext type-caption-regular",
							children: a
						})
					]
				}),
				A && /* @__PURE__ */ u("div", {
					className: "cell__trailing",
					children: [
						o && /* @__PURE__ */ l("span", {
							className: "cell__trailing-value type-caption-regular",
							children: o
						}),
						k && /* @__PURE__ */ l("span", {
							className: "cell__trailing-icon",
							children: k
						}),
						d && /* @__PURE__ */ l(S, { ...typeof d == "string" ? { label: d } : d }),
						f === "chevron" && /* @__PURE__ */ l(D, {}),
						f === "toggle" && /* @__PURE__ */ l(ze, {
							label: null,
							checked: p,
							onChange: m,
							dir: C,
							className: "cell__toggle"
						}),
						f === "stepper" && /* @__PURE__ */ l(Be, {
							value: h,
							min: g,
							max: _,
							onChange: v,
							dir: C,
							className: "cell__stepper"
						})
					]
				})
			]
		}), b && /* @__PURE__ */ l(Ve, {})]
	});
}
//#endregion
//#region src/components/Checkbox.jsx
var Z = t(function({ checked: e, disabled: t = !1, error: n = !1, skeleton: r = !1, dir: a = "ltr", id: o, onChange: s, className: c = "", "aria-label": d, "aria-labelledby": f, ...p }, m) {
	let h = i(), g = o ?? h, _ = [
		"checkbox",
		t && "checkbox--disabled",
		n && "checkbox--error",
		r && "checkbox--skeleton",
		e && "checkbox--checked",
		c
	].filter(Boolean).join(" ");
	return r ? /* @__PURE__ */ l("span", {
		className: _,
		dir: a,
		...p
	}) : /* @__PURE__ */ u("span", {
		className: _,
		dir: a,
		...p,
		children: [/* @__PURE__ */ l("input", {
			ref: m,
			type: "checkbox",
			id: g,
			className: "checkbox__input",
			checked: e,
			disabled: t,
			onChange: s,
			"aria-invalid": n ? !0 : void 0,
			"aria-label": d,
			"aria-labelledby": f
		}), /* @__PURE__ */ l("span", {
			className: "checkbox__box",
			"aria-hidden": "true",
			children: /* @__PURE__ */ l("svg", {
				className: "checkbox__check",
				viewBox: "0 0 24 24",
				fill: "none",
				"aria-hidden": "true",
				children: /* @__PURE__ */ l("path", {
					d: "M7 12L10.5 15.5L17 8.5",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			})
		})]
	});
}), Q = t(function({ checked: e, disabled: t = !1, error: n = !1, skeleton: r = !1, name: a, dir: o = "ltr", id: s, onChange: c, className: d = "", "aria-label": f, "aria-labelledby": p, ...m }, h) {
	let g = i(), _ = s ?? g, v = [
		"radio",
		t && "radio--disabled",
		n && "radio--error",
		r && "radio--skeleton",
		e && "radio--checked",
		d
	].filter(Boolean).join(" ");
	return r ? /* @__PURE__ */ l("span", {
		className: v,
		dir: o,
		...m
	}) : /* @__PURE__ */ u("span", {
		className: v,
		dir: o,
		...m,
		children: [/* @__PURE__ */ l("input", {
			ref: h,
			type: "radio",
			id: _,
			className: "radio__input",
			checked: e,
			disabled: t,
			onChange: c,
			name: a,
			"aria-invalid": n ? !0 : void 0,
			"aria-label": f,
			"aria-labelledby": p
		}), /* @__PURE__ */ l("span", {
			className: "radio__circle",
			"aria-hidden": "true",
			children: /* @__PURE__ */ l("span", { className: "radio__dot" })
		})]
	});
});
//#endregion
//#region src/components/IconButton.jsx
function Ue({ variant: e = "primary", size: t = "default", icon: n, className: r = "", ...i }) {
	return /* @__PURE__ */ l("button", {
		className: [
			"icon-btn",
			`icon-btn--${e}`,
			`icon-btn--size-${t}`,
			r
		].filter(Boolean).join(" "),
		type: "button",
		...i,
		children: n && /* @__PURE__ */ l("span", {
			className: "icon-btn__icon",
			"aria-hidden": "true",
			children: n
		})
	});
}
//#endregion
//#region src/components/List.jsx
function We({ type: e = "icon", selected: t = !1, disabled: n = !1, error: r = !1, skeleton: a = !1, label: o = "Label", keyValue: s = null, tag: d = null, icon: f = null, dir: p = "ltr", id: m, name: h, onChange: g, className: _ = "", ...v }) {
	let y = i(), b = m ?? y, x = e === "checkbox" || e === "radio", C = [
		"list-item",
		`list-item--${e}`,
		n && "list-item--disabled",
		r && "list-item--error",
		a && "list-item--skeleton",
		t && e === "icon" && "list-item--selected",
		_
	].filter(Boolean).join(" ");
	if (a) {
		let t = e === "checkbox" ? /* @__PURE__ */ l(Z, { skeleton: !0 }) : e === "radio" ? /* @__PURE__ */ l(Q, { skeleton: !0 }) : /* @__PURE__ */ l("div", { className: "list-item__skeleton-marker" });
		return /* @__PURE__ */ u("div", {
			className: C,
			dir: p,
			...v,
			children: [t, /* @__PURE__ */ l("div", { className: "list-item__skeleton-bar" })]
		});
	}
	let w = null;
	e === "icon" ? w = /* @__PURE__ */ l("div", {
		className: "list-item__icon",
		children: f || /* @__PURE__ */ l(te, { className: "list-item__default-icon" })
	}) : e === "checkbox" ? w = /* @__PURE__ */ l(Z, {
		checked: t,
		disabled: n,
		error: r,
		id: b,
		onChange: g,
		dir: p
	}) : e === "radio" && (w = /* @__PURE__ */ l(Q, {
		checked: t,
		disabled: n,
		error: r,
		name: h,
		id: b,
		onChange: g,
		dir: p
	}));
	let T = /* @__PURE__ */ u(c, { children: [
		w,
		/* @__PURE__ */ l("span", {
			className: "list-item__label",
			children: o
		}),
		(d != null || s != null) && /* @__PURE__ */ u("div", {
			className: "list-item__trailing",
			children: [d != null && /* @__PURE__ */ l(S, { ...typeof d == "string" ? { label: d } : d }), s != null && /* @__PURE__ */ l("span", {
				className: "list-item__key-value",
				children: s
			})]
		})
	] });
	return x ? /* @__PURE__ */ l("label", {
		className: C,
		dir: p,
		htmlFor: b,
		...v,
		children: T
	}) : /* @__PURE__ */ l("div", {
		className: C,
		dir: p,
		...v,
		children: T
	});
}
//#endregion
//#region src/components/ProgressStepper.jsx
function Ge({ steps: e = 5, currentStep: t = 1, className: n, ...r }) {
	return /* @__PURE__ */ l("div", {
		className: ["progress-stepper", n].filter(Boolean).join(" "),
		...r,
		children: Array.from({ length: e }, (e, n) => /* @__PURE__ */ l("div", { className: ["progress-stepper__step", n < t && "progress-stepper__step--completed"].filter(Boolean).join(" ") }, n))
	});
}
//#endregion
//#region src/components/CircularProgressIndicator.jsx
var Ke = {
	default: {
		d: 40,
		stroke: 4
	},
	large: {
		d: 48,
		stroke: 8
	}
}, qe = {
	default: 24,
	large: 40
}, $ = 8, Je = .8, Ye = ({ size: e }) => {
	let { d: t, stroke: n } = Ke[e], r = (t - n) / 2, i = 2 * Math.PI * r, a = t / 2, o = n + 2, s = i * Je, c = i - s - 2 * o;
	return /* @__PURE__ */ u("svg", {
		width: t,
		height: t,
		viewBox: `0 0 ${t} ${t}`,
		className: "cpi__svg cpi__svg--spin-android",
		children: [/* @__PURE__ */ l("circle", {
			className: "cpi__track",
			cx: a,
			cy: a,
			r,
			strokeWidth: n,
			fill: "none",
			strokeLinecap: "round",
			strokeDasharray: `${c} ${i - c}`,
			strokeDashoffset: -(s + o)
		}), /* @__PURE__ */ l("circle", {
			className: "cpi__arc",
			cx: a,
			cy: a,
			r,
			strokeWidth: n,
			fill: "none",
			strokeLinecap: "round",
			strokeDasharray: `${s} ${i - s}`
		})]
	});
}, Xe = ({ size: e }) => {
	let t = qe[e];
	return /* @__PURE__ */ l("svg", {
		width: t,
		height: t,
		viewBox: "0 0 24 24",
		className: "cpi__svg cpi__svg--spin-ios",
		children: Array.from({ length: $ }, (e, t) => /* @__PURE__ */ l("rect", {
			x: 12 - 3 / 2,
			y: 1,
			width: 3,
			height: 7.25,
			rx: 3 / 2,
			fill: "currentColor",
			transform: `rotate(${360 / $ * t} 12 12)`,
			style: { opacity: (t === 0 ? $ : t) / $ }
		}, t))
	});
};
function Ze({ platform: e, size: t = "default", label: n, dir: r, className: i = "", "aria-label": a, ...o }) {
	let s = m(e), c = h(r), d = typeof n == "string" && n.length > 0;
	return /* @__PURE__ */ u("div", {
		className: [
			"cpi",
			`cpi--${s}`,
			`cpi--${t}`,
			d && "cpi--with-label",
			i
		].filter(Boolean).join(" "),
		role: "progressbar",
		dir: c,
		"aria-label": a || n || "Loading",
		...o,
		children: [l(s === "android" ? Ye : Xe, { size: t }), d && /* @__PURE__ */ l("span", {
			className: "cpi__label",
			children: n
		})]
	});
}
//#endregion
//#region src/components/LinearProgressIndicator.jsx
var Qe = (e) => Math.max(0, Math.min(100, Number(e) || 0)), $e = ({ pct: e }) => /* @__PURE__ */ l("div", {
	className: "lpi__track",
	children: /* @__PURE__ */ l("div", {
		className: "lpi__fill",
		style: { width: `${e}%` }
	})
}), et = ({ pct: e }) => /* @__PURE__ */ u(c, { children: [
	e > 0 && /* @__PURE__ */ l("div", {
		className: "lpi__active",
		style: { width: `${e}%` }
	}),
	e < 100 && /* @__PURE__ */ l("div", { className: "lpi__remaining" }),
	e < 100 && /* @__PURE__ */ l("span", { className: "lpi__stop" })
] });
function tt({ value: e = 0, platform: t, dir: n, className: r = "", "aria-label": i, ...a }) {
	let o = m(t), s = h(n), c = Qe(e);
	return /* @__PURE__ */ l("div", {
		className: [
			"lpi",
			`lpi--${o}`,
			r
		].filter(Boolean).join(" "),
		role: "progressbar",
		dir: s,
		"aria-valuenow": Math.round(c),
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": i || "Progress",
		...a,
		children: l(o === "android" ? et : $e, { pct: c })
	});
}
//#endregion
//#region src/components/Slider.jsx
function nt({ value: e = 0, min: t = 0, max: n = 100, step: r, onChange: i, ticks: a, dir: o = "ltr", className: s, ...c }) {
	let d = r ?? (a > 1 ? (n - t) / (a - 1) : 1), f = (e - t) / (n - t) * 100;
	return /* @__PURE__ */ u("div", {
		className: ["slider", s].filter(Boolean).join(" "),
		dir: o,
		children: [/* @__PURE__ */ l("input", {
			type: "range",
			className: "slider__input",
			min: t,
			max: n,
			step: d,
			value: e,
			onChange: (e) => i?.(Number(e.target.value)),
			style: { "--slider-pct": `${f}%` },
			...c
		}), a > 1 && /* @__PURE__ */ l("div", {
			className: "slider__ticks",
			"aria-hidden": "true",
			children: Array.from({ length: a }, (e, t) => /* @__PURE__ */ l("div", { className: "slider__tick" }, t))
		})]
	});
}
//#endregion
//#region src/icons/line-icons/chevronUp.svg?raw
var rt = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.5 15L12 7.5L19.5 15\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n", it = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12 4.74927C15.9162 4.74927 18.6616 6.51622 20.416 8.27075C21.2918 9.1466 21.9234 10.0221 22.3369 10.679C22.5439 11.0078 22.6977 11.2828 22.7998 11.4778C22.8509 11.5753 22.8889 11.653 22.915 11.7073C22.9281 11.7344 22.9383 11.7557 22.9453 11.7708C22.9487 11.7781 22.9512 11.784 22.9531 11.7883C22.9541 11.7905 22.9554 11.7928 22.9561 11.7942V11.7961H22.957V11.7971C23 11.8939 23.0107 12.0009 22.9893 12.1028L22.957 12.2034L22.9561 12.2063C22.9555 12.2076 22.9541 12.2091 22.9531 12.2112C22.9512 12.2155 22.9487 12.2215 22.9453 12.2288C22.9384 12.2438 22.928 12.2653 22.915 12.2922C22.889 12.3464 22.8508 12.4244 22.7998 12.5217C22.6977 12.7167 22.5439 12.9919 22.3369 13.3206C21.9234 13.9772 21.2917 14.8522 20.416 15.7278C18.6616 17.482 15.9163 19.2493 12 19.2493C8.08373 19.2493 5.3384 17.482 3.58398 15.7278C2.70832 14.8522 2.0766 13.9772 1.66309 13.3206C1.45613 12.9919 1.30231 12.7167 1.2002 12.5217C1.14922 12.4244 1.11104 12.3464 1.08496 12.2922C1.072 12.2653 1.06162 12.2438 1.05469 12.2288C1.05131 12.2215 1.04881 12.2155 1.04688 12.2112C1.04593 12.2091 1.04455 12.2076 1.04395 12.2063V12.2043L1.04297 12.2034C0.985532 12.0742 0.985597 11.9264 1.04297 11.7971V11.7961H1.04395V11.7942C1.04456 11.7928 1.04588 11.7905 1.04688 11.7883C1.04884 11.784 1.05131 11.7781 1.05469 11.7708C1.06166 11.7557 1.0719 11.7344 1.08496 11.7073C1.11107 11.653 1.14912 11.5753 1.2002 11.4778C1.30233 11.2828 1.45607 11.0078 1.66309 10.679C2.07662 10.0221 2.70823 9.1466 3.58398 8.27075C5.3384 6.51622 8.08384 4.74927 12 4.74927ZM12 5.74927C8.41643 5.74927 5.91161 7.35707 4.29102 8.97778C3.47935 9.78954 2.89213 10.6023 2.50879 11.2112C2.31751 11.515 2.17814 11.7675 2.08691 11.9417C2.07634 11.9618 2.06591 11.9812 2.05664 11.9993C2.06607 12.0176 2.07612 12.0373 2.08691 12.0579C2.17814 12.232 2.3174 12.4844 2.50879 12.7883C2.8921 13.397 3.47937 14.2092 4.29102 15.0208C5.9116 16.6412 8.41627 18.2493 12 18.2493C15.5837 18.2493 18.0884 16.6412 19.709 15.0208C20.5206 14.2092 21.1079 13.397 21.4912 12.7883C21.6826 12.4844 21.8219 12.232 21.9131 12.0579C21.9238 12.0374 21.933 12.0175 21.9424 11.9993C21.9332 11.9813 21.9236 11.9617 21.9131 11.9417C21.8219 11.7675 21.6825 11.515 21.4912 11.2112C21.1079 10.6023 20.5207 9.78954 19.709 8.97778C18.0884 7.35707 15.5836 5.74927 12 5.74927ZM12 7.75024C14.3472 7.75024 16.25 9.65303 16.25 12.0002C16.2499 14.3473 14.3471 16.2502 12 16.2502C9.65287 16.2502 7.75013 14.3473 7.75 12.0002C7.75 9.65303 9.65279 7.75024 12 7.75024ZM12 8.75024C10.2051 8.75024 8.75 10.2053 8.75 12.0002C8.75013 13.7951 10.2052 15.2502 12 15.2502C13.7948 15.2502 15.2499 13.7951 15.25 12.0002C15.25 10.2053 13.7949 8.75024 12 8.75024Z\" fill=\"currentColor\"/>\n</svg>\n", at = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.16406 3.37988C4.3684 3.19441 4.68445 3.20983 4.87012 3.41406L19.8701 19.9141C20.0556 20.1184 20.0402 20.4345 19.8359 20.6201C19.6316 20.8056 19.3155 20.7902 19.1299 20.5859L16.9434 18.1807C15.3959 18.8963 13.708 19.2611 12 19.248V19.249L11.998 19.248L11.9961 19.249V19.248C8.08202 19.2469 5.33783 17.4821 3.58398 15.7285C2.70836 14.853 2.07663 13.978 1.66309 13.3213C1.45612 12.9926 1.30233 12.7174 1.2002 12.5225C1.14916 12.425 1.11108 12.3472 1.08496 12.293C1.07193 12.2659 1.06166 12.2446 1.05469 12.2295C1.0512 12.222 1.04886 12.2153 1.04688 12.2109C1.04595 12.2089 1.04453 12.2074 1.04395 12.2061V12.2041L1.04297 12.2031C0.985521 12.0739 0.98552 11.9261 1.04297 11.7969V11.7959L1.04395 11.7949C1.04429 11.7942 1.04443 11.7931 1.04492 11.792C1.04608 11.7894 1.04784 11.7856 1.0498 11.7812C1.05369 11.7727 1.05937 11.761 1.06641 11.7461C1.08079 11.7156 1.10223 11.6715 1.12988 11.6162C1.18517 11.5057 1.26768 11.348 1.37793 11.1543C1.59837 10.767 1.93211 10.2326 2.38867 9.63672C3.21076 8.56391 4.44103 7.27961 6.13867 6.2959L4.12988 4.08594C3.94441 3.8816 3.95983 3.56555 4.16406 3.37988ZM6.82715 7.05371C5.17667 7.96572 3.97968 9.20362 3.18164 10.2451C2.75701 10.7993 2.44884 11.2949 2.24707 11.6494C2.16685 11.7903 2.10422 11.9092 2.05762 12C2.06688 12.018 2.07634 12.0374 2.08691 12.0576C2.17812 12.2317 2.31742 12.4842 2.50879 12.7881C2.89212 13.3968 3.47928 14.2098 4.29102 15.0215C5.9116 16.6418 8.41641 18.249 12 18.249H12.0039C13.4597 18.2606 14.8997 17.9708 16.2344 17.4014L14.4678 15.458C13.6949 16.0094 12.7557 16.2907 11.7979 16.2451C10.6723 16.1914 9.61357 15.6931 8.85547 14.8594C8.0974 14.0255 7.70146 12.9235 7.75488 11.7979C7.80053 10.84 8.16878 9.93078 8.79102 9.21387L6.82715 7.05371ZM12 4.75C15.916 4.75015 18.6627 6.51598 20.417 8.27051C21.2927 9.14631 21.9244 10.0219 22.3379 10.6787C22.5448 11.0073 22.6977 11.2826 22.7998 11.4775C22.8508 11.575 22.8889 11.6528 22.915 11.707C22.9281 11.7341 22.9383 11.7554 22.9453 11.7705C22.9487 11.7779 22.9521 11.7837 22.9541 11.7881C22.9551 11.7903 22.9554 11.7926 22.9561 11.7939L22.957 11.7959V11.7969C23.0002 11.8939 23.0109 12.0013 22.9893 12.1035L22.957 12.2031V12.2041L22.9531 12.2119C22.9508 12.217 22.9474 12.2247 22.9434 12.2334C22.9351 12.2511 22.9227 12.2767 22.9072 12.3086C22.8761 12.3726 22.8305 12.4646 22.7695 12.5791C22.6472 12.8088 22.463 13.1327 22.2139 13.5137C21.7161 14.2749 20.9533 15.2746 19.8916 16.2256C19.686 16.4097 19.3698 16.3919 19.1855 16.1865C19.0014 15.9809 19.0182 15.6647 19.2236 15.4805C20.2053 14.6011 20.9144 13.6733 21.377 12.9658C21.6077 12.6129 21.7767 12.3159 21.8867 12.1094C21.9081 12.0692 21.9254 12.0311 21.9424 11.998C21.9333 11.9804 21.9244 11.9611 21.9141 11.9414C21.8228 11.7673 21.6825 11.5149 21.4912 11.2109C21.1079 10.6021 20.5205 9.78915 19.709 8.97754C18.1391 7.40759 15.7392 5.84981 12.333 5.75391L12 5.74902C11.3783 5.74801 10.7569 5.79886 10.1436 5.90039C9.87112 5.94551 9.61348 5.76071 9.56836 5.48828C9.52356 5.21616 9.70744 4.95934 9.97949 4.91406C10.647 4.80353 11.3234 4.74896 12 4.75ZM9.46973 9.95996C9.03998 10.4932 8.78686 11.1531 8.75391 11.8457C8.71309 12.7064 9.01514 13.5489 9.59473 14.1865C10.1745 14.8241 10.9849 15.205 11.8457 15.2461C12.5382 15.279 13.2176 15.088 13.7891 14.7109L9.46973 9.95996ZM12.8008 7.8252C13.7036 7.99871 14.5261 8.46047 15.1445 9.14062C15.763 9.82105 16.1446 10.6842 16.2314 11.5996C16.2575 11.8743 16.0559 12.1182 15.7812 12.1445C15.5064 12.1706 15.2624 11.9692 15.2363 11.6943C15.1699 10.9941 14.8783 10.3339 14.4053 9.81348C13.9322 9.29305 13.302 8.94032 12.6113 8.80762C12.3404 8.75537 12.1628 8.49274 12.2148 8.22168C12.2671 7.95075 12.5297 7.77315 12.8008 7.8252Z\" fill=\"currentColor\"/>\n</svg>\n", ot = ({ up: e }) => /* @__PURE__ */ l("span", {
	"aria-hidden": "true",
	style: {
		display: "flex",
		width: "100%",
		height: "100%"
	},
	dangerouslySetInnerHTML: { __html: e ? rt : Ce }
}), st = ({ off: e }) => /* @__PURE__ */ l("span", {
	"aria-hidden": "true",
	style: {
		display: "flex",
		width: "100%",
		height: "100%"
	},
	dangerouslySetInnerHTML: { __html: e ? at : it }
}), ct = () => /* @__PURE__ */ l("svg", {
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	style: {
		width: "100%",
		height: "100%"
	},
	children: /* @__PURE__ */ l("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.75329 21.5 2.5 17.2467 2.5 12ZM12 7C12.2761 7 12.5 7.22386 12.5 7.5V12.75C12.5 13.0261 12.2761 13.25 12 13.25C11.7239 13.25 11.5 13.0261 11.5 12.75V7.5C11.5 7.22386 11.7239 7 12 7ZM12.75 16.125C12.75 16.5392 12.4142 16.875 12 16.875C11.5858 16.875 11.25 16.5392 11.25 16.125C11.25 15.7108 11.5858 15.375 12 15.375C12.4142 15.375 12.75 15.7108 12.75 16.125Z",
		fill: "currentColor"
	})
}), lt = () => /* @__PURE__ */ l("span", {
	"aria-hidden": "true",
	style: {
		display: "flex",
		width: "100%",
		height: "100%"
	},
	dangerouslySetInnerHTML: { __html: ge }
}), ut = t(function({ disabled: e = !1, skeleton: t = !1, required: n = !1, label: r, value: c, onChange: d, onFocus: f, onBlur: p, onClear: m, helperText: h, errorText: g, leadingIcon: _, trailingIcon: v, dropdown: y = !1, multiline: b = !1, password: x = !1, children: S, id: C, dir: w = "ltr", className: T, ...E }, D) {
	let O = i(), k = C ?? O, A = o(null), j = (e) => {
		A.current = e, typeof D == "function" ? D(e) : D && (D.current = e);
	}, [M, N] = s(!1), [P, F] = s(!1);
	a(() => {
		if (!b) return;
		let e = A.current;
		e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`);
	}, [b, c]);
	let I = !!e, L = !!g, R = M || c != null && String(c) !== "" || I;
	function z(e) {
		N(!0), f?.(e);
	}
	function B(e) {
		N(!1), p?.(e);
	}
	if (t) return /* @__PURE__ */ u("div", {
		className: ["text-input text-input--skeleton", T].filter(Boolean).join(" "),
		dir: w,
		children: [/* @__PURE__ */ l("div", { className: "text-input__skeleton-field" }), /* @__PURE__ */ l("div", { className: "text-input__skeleton-helper" })]
	});
	let V = !!m && !L && c != null && String(c) !== "", ee = [
		"text-input",
		L && "text-input--error",
		M && "text-input--focus",
		I && "text-input--disabled",
		b && "text-input--multiline",
		T
	].filter(Boolean).join(" "), H = +!!_;
	return /* @__PURE__ */ u("div", {
		className: ee,
		dir: w,
		style: H ? { "--text-input-lead-count": H } : void 0,
		children: [
			/* @__PURE__ */ u("div", {
				className: "text-input__control",
				children: [/* @__PURE__ */ u("div", {
					className: "text-input__field",
					onClick: () => A.current?.focus(),
					children: [
						_ && /* @__PURE__ */ l("span", {
							className: "text-input__icon",
							children: _
						}),
						/* @__PURE__ */ u("div", {
							className: ["text-input__content", R && "text-input__content--floating"].filter(Boolean).join(" "),
							children: [r && /* @__PURE__ */ u("label", {
								className: "text-input__label",
								htmlFor: k,
								children: [r, n && /* @__PURE__ */ l("span", {
									className: "text-input__required",
									"aria-hidden": "true",
									children: " *"
								})]
							}), b ? /* @__PURE__ */ l("textarea", {
								ref: j,
								id: k,
								className: "text-input__input",
								disabled: I,
								required: n,
								value: c,
								rows: 1,
								onChange: d,
								onInput: (e) => {
									e.currentTarget.style.height = "auto", e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
								},
								onFocus: z,
								onBlur: B,
								"aria-invalid": L ? !0 : void 0,
								...E
							}) : /* @__PURE__ */ l("input", {
								ref: j,
								id: k,
								className: "text-input__input",
								disabled: I,
								required: n,
								value: c,
								onChange: d,
								onFocus: z,
								onBlur: B,
								"aria-invalid": L ? !0 : void 0,
								...E,
								type: x ? P ? "text" : "password" : E.type
							})]
						}),
						L && /* @__PURE__ */ l("span", {
							className: "text-input__icon text-input__icon--error",
							children: /* @__PURE__ */ l(ct, {})
						}),
						!L && x && /* @__PURE__ */ l("button", {
							type: "button",
							className: "text-input__reveal",
							onMouseDown: (e) => e.preventDefault(),
							onClick: (e) => {
								e.stopPropagation(), F((e) => !e);
							},
							"aria-label": P ? "Hide password" : "Show password",
							"aria-pressed": P,
							children: /* @__PURE__ */ l(st, { off: !P })
						}),
						!L && !x && V && /* @__PURE__ */ l("button", {
							type: "button",
							className: "text-input__clear",
							onClick: (e) => {
								e.stopPropagation(), m(e);
							},
							tabIndex: -1,
							"aria-label": "Clear",
							children: /* @__PURE__ */ l(lt, {})
						}),
						!L && !x && !V && v && /* @__PURE__ */ l("span", {
							className: "text-input__icon",
							children: v
						}),
						y && /* @__PURE__ */ l("span", {
							className: "text-input__chevron",
							children: /* @__PURE__ */ l(ot, { up: M })
						})
					]
				}), y && M && /* @__PURE__ */ l("div", {
					className: "text-input__panel",
					onMouseDown: (e) => e.preventDefault(),
					children: S
				})]
			}),
			!L && h && /* @__PURE__ */ l("p", {
				className: "text-input__helper",
				children: h
			}),
			L && g && /* @__PURE__ */ l("p", {
				className: "text-input__helper text-input__helper--error",
				children: g
			})
		]
	});
}), dt = () => /* @__PURE__ */ l("svg", {
	className: "callout__icon",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("path", { d: "M19.5 3.25C20.1904 3.25 20.75 3.80964 20.75 4.5V19.5C20.75 20.1904 20.1904 20.75 19.5 20.75H4.5C3.80964 20.75 3.25 20.1904 3.25 19.5V4.5C3.25 3.80964 3.80964 3.25 4.5 3.25H19.5ZM4.25 19.5C4.25 19.6381 4.36193 19.75 4.5 19.75H19.043L4.25 4.95703V19.5ZM19.75 19.043V4.5C19.75 4.36193 19.6381 4.25 19.5 4.25H4.95703L19.75 19.043Z" })
});
function ft({ label: e, size: t = "regular", dir: n = "ltr", icon: r = !0, className: i = "", ...a }) {
	return /* @__PURE__ */ u("span", {
		className: [
			"callout",
			t === "small" && "callout--small",
			i
		].filter(Boolean).join(" "),
		dir: n,
		...a,
		children: [e, r && /* @__PURE__ */ l(dt, {})]
	});
}
//#endregion
//#region src/components/Accolade.jsx
function pt() {
	let e = "ag-" + i().replace(/[^a-zA-Z0-9]/g, "");
	return /* @__PURE__ */ u("svg", {
		className: "accolade__icon",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ l("defs", { children: /* @__PURE__ */ u("linearGradient", {
			id: e,
			x1: "0",
			y1: "0",
			x2: "1",
			y2: "0",
			children: [/* @__PURE__ */ l("stop", {
				offset: "0%",
				stopColor: "#875BF7"
			}), /* @__PURE__ */ l("stop", {
				offset: "100%",
				stopColor: "#2E90FA"
			})]
		}) }), /* @__PURE__ */ l("path", {
			d: "M19.5 3.25C20.1904 3.25 20.75 3.80964 20.75 4.5V19.5C20.75 20.1904 20.1904 20.75 19.5 20.75H4.5C3.80964 20.75 3.25 20.1904 3.25 19.5V4.5C3.25 3.80964 3.80964 3.25 4.5 3.25H19.5ZM4.25 19.5C4.25 19.6381 4.36193 19.75 4.5 19.75H19.043L4.25 4.95703V19.5ZM19.75 19.043V4.5C19.75 4.36193 19.6381 4.25 19.5 4.25H4.95703L19.75 19.043Z",
			fill: `url(#${e})`
		})]
	});
}
function mt({ label: e, size: t = "regular", background: n = !1, dir: r = "ltr", icon: i = !0, className: a = "", ...o }) {
	return /* @__PURE__ */ u("span", {
		className: [
			"accolade",
			t === "small" && "accolade--small",
			n && "accolade--background",
			a
		].filter(Boolean).join(" "),
		dir: r,
		...o,
		children: [i && /* @__PURE__ */ l(pt, {}), /* @__PURE__ */ l("span", {
			className: "accolade__label",
			children: e
		})]
	});
}
//#endregion
//#region src/components/Badge.jsx
function ht({ variant: e = "alert", count: t, max: n = 99, dir: r, className: i, children: a, ...o }) {
	let s;
	e === "new" ? s = "NEW" : t !== void 0 && (s = t > n ? `${n}+` : String(t));
	let c = /* @__PURE__ */ l("span", {
		className: `badge badge--${e}`,
		children: s
	});
	return a ? /* @__PURE__ */ u("span", {
		className: ["badge-anchor", i].filter(Boolean).join(" "),
		dir: r,
		...o,
		children: [a, c]
	}) : /* @__PURE__ */ l("span", {
		className: [
			"badge",
			`badge--${e}`,
			i
		].filter(Boolean).join(" "),
		...o,
		children: s
	});
}
//#endregion
//#region src/components/Tooltip.jsx
function gt({ content: e, position: t = "top", arrowAlign: n = "center", dir: r = "ltr", children: i, className: a, ...o }) {
	let s = [
		"tooltip__bubble",
		`tooltip__bubble--${t}`,
		`tooltip__bubble--align-${n}`
	].join(" ");
	return /* @__PURE__ */ u("div", {
		className: ["tooltip", a].filter(Boolean).join(" "),
		dir: r,
		...o,
		children: [i, /* @__PURE__ */ u("div", {
			className: s,
			role: "tooltip",
			children: [
				t === "bottom" && /* @__PURE__ */ l("div", { className: "tooltip__arrow" }),
				/* @__PURE__ */ l("div", {
					className: "tooltip__content",
					children: e
				}),
				t === "top" && /* @__PURE__ */ l("div", { className: "tooltip__arrow" })
			]
		})]
	});
}
//#endregion
//#region src/components/Snackbar.jsx
function _t({ message: e, show: t = !1, duration: n = 3e3, onClose: i, dir: a = "ltr", className: o, ...s }) {
	return r(() => {
		if (!t || !n || !i) return;
		let e = setTimeout(i, n);
		return () => clearTimeout(e);
	}, [
		t,
		n,
		i
	]), /* @__PURE__ */ l("div", {
		className: [
			"snackbar",
			t && "snackbar--visible",
			o
		].filter(Boolean).join(" "),
		role: "status",
		"aria-live": "polite",
		dir: a,
		...s,
		children: /* @__PURE__ */ l("p", {
			className: "snackbar__message",
			children: e
		})
	});
}
//#endregion
//#region src/components/TabBar.jsx
var vt = ({ item: e }) => /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("span", {
	className: "tabbar__icon-wrap",
	children: /* @__PURE__ */ l("span", {
		className: "tabbar__icon",
		children: e.icon
	})
}), /* @__PURE__ */ l("span", {
	className: "tabbar__label",
	children: e.label
})] }), yt = ({ item: e, active: t }) => /* @__PURE__ */ u(c, { children: [t && /* @__PURE__ */ l("span", {
	className: "tabbar__selection",
	"aria-hidden": "true"
}), /* @__PURE__ */ l(vt, { item: e })] }), bt = ({ item: e }) => /* @__PURE__ */ l(vt, { item: e }), xt = ({ platform: e, items: t, value: n, onChange: r, dir: i, className: a, renderItem: o, ...s }) => /* @__PURE__ */ l("div", {
	className: [
		"tabbar",
		`tabbar--${e}`,
		a
	].filter(Boolean).join(" "),
	dir: i,
	role: "tablist",
	...s,
	children: /* @__PURE__ */ l("div", {
		className: "tabbar__pill",
		children: t.map((e, t) => {
			let i = t === n;
			return /* @__PURE__ */ l("button", {
				className: ["tabbar__item", i && "tabbar__item--active"].filter(Boolean).join(" "),
				role: "tab",
				"aria-selected": i,
				onClick: () => r?.(t),
				children: o(e, i)
			}, t);
		})
	})
}), St = ({ platform: e, items: t = [], value: n = 0, onChange: r, dir: i, className: a, ...o }) => {
	let s = m(e);
	return /* @__PURE__ */ l(xt, {
		platform: s,
		items: t,
		value: n,
		onChange: r,
		dir: h(i),
		className: a,
		renderItem: (e, t) => s === "ios" ? /* @__PURE__ */ l(yt, {
			item: e,
			active: t
		}) : /* @__PURE__ */ l(bt, { item: e }),
		...o
	});
}, Ct = ({ svg: e }) => /* @__PURE__ */ l("span", {
	className: "bottom-sheet__icon",
	"aria-hidden": "true",
	dangerouslySetInnerHTML: { __html: e }
}), wt = () => /* @__PURE__ */ l("div", {
	className: "bottom-sheet__grabber-row",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("div", { className: "bottom-sheet__grabber" })
}), Tt = ({ title: e, subtitle: t }) => (e || t) && /* @__PURE__ */ u("div", {
	className: "bottom-sheet__title",
	children: [e && /* @__PURE__ */ l("span", {
		className: "bottom-sheet__title-text",
		children: e
	}), t && /* @__PURE__ */ l("span", {
		className: "bottom-sheet__subtitle-text",
		children: t
	})]
}), Et = ({ title: e, subtitle: t, onClose: n, onAction: r, actionIcon: i, dir: a }) => /* @__PURE__ */ u("div", {
	className: "bottom-sheet__toolbar bottom-sheet__toolbar--ios",
	children: [
		/* @__PURE__ */ l("div", {
			className: "bottom-sheet__toolbar-lhs",
			children: n && /* @__PURE__ */ l(W, {
				bg: "default",
				type: "x",
				onClick: n,
				dir: a,
				"aria-label": "Close"
			})
		}),
		/* @__PURE__ */ l(Tt, {
			title: e,
			subtitle: t
		}),
		/* @__PURE__ */ l("div", {
			className: "bottom-sheet__toolbar-rhs",
			children: r && /* @__PURE__ */ l(W, {
				bg: "primary",
				type: "1-icon",
				icon1: i,
				onClick: r,
				dir: a,
				"aria-label": "Action"
			})
		})
	]
}), Dt = ({ title: e, subtitle: t, onClose: n, onAction: r, actionIcon: i, dir: a }) => /* @__PURE__ */ u("div", {
	className: "bottom-sheet__toolbar bottom-sheet__toolbar--android",
	children: [
		/* @__PURE__ */ l("div", {
			className: "bottom-sheet__toolbar-lhs",
			children: n && /* @__PURE__ */ l("button", {
				type: "button",
				className: "bottom-sheet__icon-btn",
				onClick: n,
				"aria-label": "Back",
				children: /* @__PURE__ */ l(Ct, { svg: a === "rtl" ? "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.1465 4.89648C13.3417 4.70122 13.6583 4.70122 13.8535 4.89648L20.6035 11.6465C20.7988 11.8417 20.7988 12.1583 20.6035 12.3535L13.8535 19.1035C13.6583 19.2988 13.3417 19.2988 13.1465 19.1035C12.9512 18.9083 12.9512 18.5917 13.1465 18.3965L19.043 12.5H3.75C3.47386 12.5 3.25 12.2761 3.25 12C3.25 11.7239 3.47386 11.5 3.75 11.5H19.043L13.1465 5.60352C12.9512 5.40825 12.9512 5.09175 13.1465 4.89648Z\" fill=\"currentColor\"/>\n</svg>\n" : "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.1465 4.89648C10.3417 4.70122 10.6583 4.70122 10.8535 4.89648C11.0488 5.09175 11.0488 5.40825 10.8535 5.60352L4.95703 11.5L20.25 11.5C20.526 11.5002 20.75 11.724 20.75 12C20.75 12.276 20.526 12.4998 20.25 12.5L4.95703 12.5L10.8535 18.3965C11.0488 18.5917 11.0488 18.9083 10.8535 19.1035C10.6583 19.2988 10.3417 19.2988 10.1465 19.1035L3.39648 12.3535C3.20122 12.1583 3.20122 11.8417 3.39648 11.6465L10.1465 4.89648Z\" fill=\"currentColor\"/>\n</svg>\n" })
			})
		}),
		/* @__PURE__ */ l(Tt, {
			title: e,
			subtitle: t
		}),
		/* @__PURE__ */ l("div", {
			className: "bottom-sheet__toolbar-rhs",
			children: r && /* @__PURE__ */ l("button", {
				type: "button",
				className: "bottom-sheet__icon-btn",
				onClick: r,
				"aria-label": "Action",
				children: /* @__PURE__ */ l("span", {
					className: "bottom-sheet__icon",
					children: i
				})
			})
		})
	]
}), Ot = ({ platform: e, size: t, open: n, dir: r, className: i, onClose: a, children: o, ...s }) => /* @__PURE__ */ l("div", {
	className: [
		"bottom-sheet",
		`bottom-sheet--${e}`,
		`bottom-sheet--${t}`,
		n && "bottom-sheet--open",
		i
	].filter(Boolean).join(" "),
	dir: r,
	role: "dialog",
	"aria-modal": "true",
	...s,
	children: /* @__PURE__ */ u("div", {
		className: "bottom-sheet__frame",
		children: [/* @__PURE__ */ l("div", {
			className: "bottom-sheet__scrim",
			"aria-hidden": "true",
			onClick: a
		}), /* @__PURE__ */ l("div", {
			className: "bottom-sheet__panel",
			children: o
		})]
	})
}), kt = ({ size: e, search: t, toolbar: n, children: r }) => e === "fullscreen" ? /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ u("div", {
	className: "bottom-sheet__header",
	children: [n, t && /* @__PURE__ */ l("div", {
		className: "bottom-sheet__search-bar",
		children: t
	})]
}), /* @__PURE__ */ l("div", {
	className: "bottom-sheet__content",
	children: r
})] }) : /* @__PURE__ */ u(c, { children: [
	/* @__PURE__ */ l(wt, {}),
	n,
	/* @__PURE__ */ l("div", {
		className: "bottom-sheet__content",
		children: r
	})
] }), At = ({ size: e, toolbar: t, search: n, title: r, onClose: i, onAction: a, actionIcon: o, children: s }) => e === "fullscreen" ? /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ u("div", {
	className: "bottom-sheet__header",
	children: [t, n && /* @__PURE__ */ l("div", {
		className: "bottom-sheet__search-bar",
		children: n
	})]
}), /* @__PURE__ */ l("div", {
	className: "bottom-sheet__content",
	children: s
})] }) : /* @__PURE__ */ u(c, { children: [
	/* @__PURE__ */ l(wt, {}),
	/* @__PURE__ */ u("div", {
		className: "bottom-sheet__android-bar",
		children: [
			i && /* @__PURE__ */ l("button", {
				type: "button",
				className: "bottom-sheet__icon-btn",
				onClick: i,
				"aria-label": "Close",
				children: /* @__PURE__ */ l(Ct, { svg: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16.6465 6.64648C16.8417 6.45122 17.1583 6.45122 17.3535 6.64648C17.5488 6.84175 17.5488 7.15825 17.3535 7.35352L12.707 12L17.3535 16.6465C17.5488 16.8417 17.5488 17.1583 17.3535 17.3535C17.1583 17.5488 16.8417 17.5488 16.6465 17.3535L12 12.707L7.35352 17.3535C7.15825 17.5488 6.84175 17.5488 6.64648 17.3535C6.45122 17.1583 6.45122 16.8417 6.64648 16.6465L11.293 12L6.64648 7.35352C6.45122 7.15825 6.45122 6.84175 6.64648 6.64648C6.84175 6.45122 7.15825 6.45122 7.35352 6.64648L12 11.293L16.6465 6.64648Z\" fill=\"currentColor\"/>\n</svg>\n" })
			}),
			r && /* @__PURE__ */ l("p", {
				className: "bottom-sheet__android-title",
				children: r
			}),
			a && /* @__PURE__ */ l("button", {
				type: "button",
				className: "bottom-sheet__icon-btn",
				onClick: a,
				"aria-label": "Action",
				children: /* @__PURE__ */ l("span", {
					className: "bottom-sheet__icon",
					children: o
				})
			})
		]
	}),
	/* @__PURE__ */ l("div", {
		className: "bottom-sheet__content",
		children: s
	})
] }), jt = ({ open: e = !1, size: t = "medium", platform: n, title: r, subtitle: i, onClose: a, onAction: o, actionIcon: s, search: c, dir: u, className: d, children: f, ...p }) => {
	let g = m(n), _ = h(u), v = g === "android" && t === "small" ? "medium" : t, y = l(g === "ios" ? Et : Dt, {
		title: r,
		subtitle: i,
		onClose: a,
		onAction: o,
		actionIcon: s,
		dir: _
	});
	return /* @__PURE__ */ l(Ot, {
		platform: g,
		size: v,
		open: e,
		dir: _,
		className: d,
		onClose: a,
		...p,
		children: g === "ios" ? /* @__PURE__ */ l(kt, {
			size: v,
			search: c,
			toolbar: y,
			children: f
		}) : /* @__PURE__ */ l(At, {
			size: v,
			toolbar: y,
			search: c,
			title: r,
			onClose: a,
			onAction: o,
			actionIcon: s,
			children: f
		})
	});
}, Mt = ({ label: e, onClick: t, primary: n, destructive: r, ...i }) => /* @__PURE__ */ l("button", {
	type: "button",
	className: [
		"ios-dialog__btn",
		n && "ios-dialog__btn--primary",
		r && "ios-dialog__btn--destructive"
	].filter(Boolean).join(" "),
	onClick: t,
	...i,
	children: e
}), Nt = ({ title: e, description: t, actions: n = [], layout: r = "stacked", children: i, className: a, ...o }) => /* @__PURE__ */ u("div", {
	className: [
		"ios-dialog",
		`ios-dialog--${r}`,
		a
	].filter(Boolean).join(" "),
	...o,
	children: [/* @__PURE__ */ l("div", {
		className: "ios-dialog__glass",
		"aria-hidden": "true"
	}), /* @__PURE__ */ u("div", {
		className: "ios-dialog__content",
		children: [
			(e || t) && /* @__PURE__ */ u("div", {
				className: "ios-dialog__text",
				children: [e && /* @__PURE__ */ l("p", {
					className: "ios-dialog__title",
					children: e
				}), t && /* @__PURE__ */ l("p", {
					className: "ios-dialog__desc",
					children: t
				})]
			}),
			i && /* @__PURE__ */ l("div", {
				className: "ios-dialog__slot",
				children: i
			}),
			n.length > 0 && /* @__PURE__ */ l("div", {
				className: "ios-dialog__actions",
				children: n.map((e, t) => /* @__PURE__ */ l(Mt, { ...e }, t))
			})
		]
	})]
}), Pt = ({ dir: e, onClose: t, dismissOnScrim: n, children: r }) => /* @__PURE__ */ u("div", {
	className: "dialog-overlay",
	dir: e,
	children: [/* @__PURE__ */ l("div", {
		className: "dialog-overlay__scrim",
		"aria-hidden": "true",
		onClick: n ? t : void 0
	}), r]
}), Ft = ({ title: e, description: t, icon: n, actions: r, children: i, className: a, ...o }) => /* @__PURE__ */ u("div", {
	className: [
		"dialog",
		"dialog--android",
		a
	].filter(Boolean).join(" "),
	role: "dialog",
	"aria-modal": "true",
	...o,
	children: [/* @__PURE__ */ u("div", {
		className: "dialog__content",
		children: [
			n && /* @__PURE__ */ l("div", {
				className: "dialog__icon",
				children: n
			}),
			e && /* @__PURE__ */ l("p", {
				className: "dialog__title",
				children: e
			}),
			t && /* @__PURE__ */ l("p", {
				className: "dialog__desc",
				children: t
			}),
			i && /* @__PURE__ */ l("div", {
				className: "dialog__slot",
				children: i
			})
		]
	}), r.length > 0 && /* @__PURE__ */ l("div", {
		className: "dialog__actions",
		children: r.map((e, t) => /* @__PURE__ */ l("button", {
			type: "button",
			className: ["dialog__action", e.destructive && "dialog__action--destructive"].filter(Boolean).join(" "),
			onClick: e.onClick,
			children: e.label
		}, t))
	})]
}), It = ({ platform: e, title: t, description: n, icon: r, layout: i = "stacked", primaryAction: a, destructiveAction: o, secondaryAction: s, action1: c, action2: u, onClose: d, dismissOnScrim: f = !0, dir: p, className: g, children: _, ...v }) => {
	let y = m(e), b = h(p);
	return y === "ios" ? /* @__PURE__ */ l(Pt, {
		dir: b,
		onClose: d,
		dismissOnScrim: f,
		children: /* @__PURE__ */ l(Nt, {
			role: "dialog",
			"aria-modal": "true",
			title: t,
			description: n,
			actions: (i === "side-by-side" ? [s && { ...s }, a && {
				...a,
				primary: !0
			}] : [
				a && {
					...a,
					primary: !0
				},
				o && {
					...o,
					destructive: !0
				},
				s && { ...s }
			]).filter(Boolean),
			layout: i,
			className: [
				"dialog",
				"dialog--ios",
				g
			].filter(Boolean).join(" "),
			...v,
			children: _
		})
	}) : /* @__PURE__ */ l(Pt, {
		dir: b,
		onClose: d,
		dismissOnScrim: f,
		children: /* @__PURE__ */ l(Ft, {
			title: t,
			description: n,
			icon: r,
			actions: [u, c].filter(Boolean),
			className: g,
			...v,
			children: _
		})
	});
}, Lt = ({ platform: e, dir: t, onClose: n, dismissOnScrim: r, children: i }) => /* @__PURE__ */ u("div", {
	className: `action-sheet-overlay action-sheet-overlay--${e}`,
	dir: t,
	children: [/* @__PURE__ */ l("div", {
		className: "action-sheet-overlay__scrim",
		"aria-hidden": "true",
		onClick: r ? n : void 0
	}), i]
}), Rt = ({ items: e, dir: t, className: n, ...r }) => {
	let i = t === "rtl" ? P : N;
	return /* @__PURE__ */ l("div", {
		className: [
			"action-sheet",
			"action-sheet--android",
			n
		].filter(Boolean).join(" "),
		role: "menu",
		...r,
		children: e.map((e, t) => /* @__PURE__ */ u("button", {
			type: "button",
			role: "menuitem",
			className: ["action-sheet__item", e.destructive && "action-sheet__item--destructive"].filter(Boolean).join(" "),
			onClick: e.onClick,
			disabled: e.disabled,
			children: [
				e.icon && /* @__PURE__ */ l("span", {
					className: "action-sheet__item-icon",
					children: e.icon
				}),
				/* @__PURE__ */ l("span", {
					className: "action-sheet__item-label",
					children: e.label
				}),
				e.shortcut && /* @__PURE__ */ l("span", {
					className: "action-sheet__item-shortcut",
					children: e.shortcut
				}),
				e.chevron && /* @__PURE__ */ l("span", {
					className: "action-sheet__item-chevron",
					children: /* @__PURE__ */ l(i, {})
				})
			]
		}, t))
	});
}, zt = ({ platform: e, title: t, description: n, actions: r = [], items: i = [], onClose: a, dismissOnScrim: o = !0, dir: s, className: c, children: u, ...d }) => {
	let f = m(e), p = h(s);
	return /* @__PURE__ */ l(Lt, {
		platform: f,
		dir: p,
		onClose: a,
		dismissOnScrim: o,
		children: f === "ios" ? /* @__PURE__ */ l(Nt, {
			role: "dialog",
			"aria-modal": "true",
			title: t,
			description: n,
			actions: r,
			className: [
				"action-sheet",
				"action-sheet--ios",
				c
			].filter(Boolean).join(" "),
			...d,
			children: u
		}) : /* @__PURE__ */ l(Rt, {
			items: i,
			dir: p,
			className: c,
			...d
		})
	});
};
//#endregion
//#region src/components/MarketingCard.jsx
function Bt({ type: e = "solid", skeleton: t = !1, title: n, subtitle: r, centerTitle: i, imageSrc: a, imageSize: o = "small", tagCount: s = 0, tag1Label: d = "Tag", tag1Variant: f, tag1Style: p, tag2Label: m = "Tag", tag2Variant: h, tag2Style: g, tag3Label: _ = "Tag", tag3Variant: v, tag3Style: y, tag4Label: b = "Tag", tag4Variant: C, tag4Style: w, actionLabel: T = "Action", buttonVariant: E = "primary", buttonSize: D = "small", buttonDisabled: O = !1, buttonProps: k, partnerLogoSrc: A, dir: j = "ltr", className: M = "", ...N }) {
	let P = t, F = e === "solid", I = e === "gradient-small", L = e === "gradient-large", R = I || L, z = [
		{
			label: d,
			variant: f,
			style: p
		},
		{
			label: m,
			variant: h,
			style: g
		},
		{
			label: _,
			variant: v,
			style: y
		},
		{
			label: b,
			variant: C,
			style: w
		}
	].slice(0, s), B = z.length > 0;
	return /* @__PURE__ */ u("div", {
		className: [
			"marketing-card",
			`marketing-card--${e}`,
			`marketing-card--img-${o}`,
			t && "marketing-card--skeleton",
			M
		].filter(Boolean).join(" "),
		dir: j,
		...N,
		children: [/* @__PURE__ */ u("div", {
			className: "marketing-card__image-section",
			children: [
				!P && a ? /* @__PURE__ */ l("img", {
					src: a,
					alt: "",
					className: "marketing-card__img"
				}) : /* @__PURE__ */ l("div", { className: "marketing-card__img-placeholder" }),
				B && !P && /* @__PURE__ */ l("div", {
					className: "marketing-card__tags",
					children: z.map((e, t) => /* @__PURE__ */ l(S, { ...e }, t))
				}),
				F && A && !P && /* @__PURE__ */ l("div", {
					className: "marketing-card__partner-logo",
					children: /* @__PURE__ */ l("img", {
						src: A,
						alt: ""
					})
				}),
				R && /* @__PURE__ */ u("div", {
					className: "marketing-card__overlay",
					children: [L && !P && i && /* @__PURE__ */ l("p", {
						className: "marketing-card__center-title marketing-card__center-title--large",
						children: i
					}), P ? /* @__PURE__ */ l("div", { className: "marketing-card__skel-bar" }) : /* @__PURE__ */ u("div", {
						className: "marketing-card__overlay-content",
						children: [n && /* @__PURE__ */ l("p", {
							className: "marketing-card__overlay-title",
							children: n
						}), r && /* @__PURE__ */ l("p", {
							className: "marketing-card__overlay-subtitle",
							children: r
						})]
					})]
				})
			]
		}), F && /* @__PURE__ */ l("div", {
			className: "marketing-card__content",
			children: P ? /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ u("div", {
				className: "marketing-card__header",
				children: [/* @__PURE__ */ l("div", { className: "marketing-card__skel-line marketing-card__skel-line--title" }), /* @__PURE__ */ l("div", { className: "marketing-card__skel-line marketing-card__skel-line--subtitle" })]
			}), /* @__PURE__ */ l("div", { className: "marketing-card__skel-cta" })] }) : /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ u("div", {
				className: "marketing-card__header",
				children: [n && /* @__PURE__ */ l("p", {
					className: "marketing-card__title",
					children: n
				}), r && /* @__PURE__ */ l("p", {
					className: "marketing-card__subtitle",
					children: r
				})]
			}), T && /* @__PURE__ */ l(x, {
				variant: E,
				size: D,
				label: T,
				disabled: O,
				...k
			})] })
		})]
	});
}
//#endregion
//#region src/components/Expander.jsx
var Vt = ({ expanded: e }) => /* @__PURE__ */ l("svg", {
	className: ["expander__icon", e ? "expander__icon--expanded" : ""].filter(Boolean).join(" "),
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("path", {
		d: "M4.5 9L12 16.5L19.5 9",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), Ht = {
	ltr: {
		collapsed: "Show more",
		expanded: "Show less"
	},
	rtl: {
		collapsed: "عرض المزيد",
		expanded: "عرض أقل"
	}
};
function Ut({ expanded: e = !1, onChange: t, dir: n = "ltr", collapsedLabel: r, expandedLabel: i, className: a = "", ...o }) {
	let s = Ht[n] ?? Ht.ltr, c = e ? i || s.expanded : r || s.collapsed;
	function d() {
		t?.(!e);
	}
	return /* @__PURE__ */ u("button", {
		type: "button",
		className: ["expander", a].filter(Boolean).join(" "),
		onClick: d,
		dir: n,
		"aria-expanded": e,
		...o,
		children: [/* @__PURE__ */ l("span", {
			className: "expander__label",
			children: c
		}), /* @__PURE__ */ l(Vt, { expanded: e })]
	});
}
//#endregion
//#region src/components/Accordion.jsx
var Wt = ({ expanded: e }) => /* @__PURE__ */ l("svg", {
	className: ["accordion__icon", e ? "accordion__icon--expanded" : ""].filter(Boolean).join(" "),
	viewBox: "0 0 24 24",
	fill: "none",
	"aria-hidden": "true",
	children: /* @__PURE__ */ l("path", {
		d: "M4.5 9L12 16.5L19.5 9",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
});
function Gt({ title: e, expanded: t = !1, skeleton: n = !1, dir: r = "ltr", className: i = "", children: a, id: o, ...c }) {
	let [d, f] = s(t);
	function p() {
		f((e) => !e);
	}
	let m = ["accordion", i].filter(Boolean).join(" "), h = o || "accordion", g = `${h}-panel`, _ = `${h}-header`;
	return n ? /* @__PURE__ */ l("div", {
		className: m,
		dir: r,
		...c,
		children: /* @__PURE__ */ u("div", {
			className: "accordion__header accordion__header--skeleton",
			children: [/* @__PURE__ */ l("span", {
				className: "accordion__skeleton",
				"aria-hidden": "true"
			}), /* @__PURE__ */ l("span", {
				className: "accordion__icon-box",
				children: /* @__PURE__ */ l(Wt, { expanded: !1 })
			})]
		})
	}) : /* @__PURE__ */ u("div", {
		className: m,
		dir: r,
		...c,
		children: [/* @__PURE__ */ u("button", {
			type: "button",
			id: _,
			className: "accordion__header",
			"aria-expanded": d,
			"aria-controls": g,
			onClick: p,
			children: [/* @__PURE__ */ l("span", {
				className: "accordion__title",
				children: e
			}), /* @__PURE__ */ l("span", {
				className: "accordion__icon-box",
				children: /* @__PURE__ */ l(Wt, { expanded: d })
			})]
		}), /* @__PURE__ */ l("div", {
			className: ["accordion__panel-wrap", d ? "accordion__panel-wrap--open" : ""].filter(Boolean).join(" "),
			children: /* @__PURE__ */ l("div", {
				className: "accordion__panel-inner",
				children: /* @__PURE__ */ l("div", {
					id: g,
					role: "region",
					"aria-labelledby": _,
					inert: !d,
					className: "accordion__panel",
					children: a
				})
			})
		})]
	});
}
//#endregion
//#region src/components/AlmosaferLogo.jsx
var Kt = {
	"applogo:colour": {
		viewBox: "0 0 40 40",
		paths: [
			{
				d: "M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z",
				fill: "white"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M32 17.3882V17.3746C31.9539 17.3838 29.4722 18.8243 26.2618 20.7889V26.6448C26.2618 26.7705 26.1665 26.8721 26.0491 26.8721H16.3441C11.7884 29.6704 8.00017 32 8.00017 32H31.6058C31.8256 32 32.0023 31.8096 32 31.5747V17.3882Z",
				fill: "#0C9AB0"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M31.6058 12.0969H14.3474L20.9526 17.2249H26.049C26.1665 17.2249 26.2618 17.3264 26.2618 17.4522V20.7889C29.4722 18.8242 31.9538 17.384 32 17.3745V12.5181C32 12.2855 31.8237 12.0969 31.6058 12.0969Z",
				fill: "#EF4550"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M13.7423 26.6447V17.4521C13.7423 17.3266 13.8373 17.2249 13.9548 17.2249H20.9527L14.3475 12.0969H8.39417C8.1765 12.0969 8 12.2855 8 12.5181V32C8 32 11.7885 29.6706 16.3442 26.872H13.9548C13.8373 26.872 13.7423 26.7705 13.7423 26.6447Z",
				fill: "#003143"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18.0738 10.059C18.0738 9.93308 18.1693 9.83106 18.2874 9.83106H21.7217C21.8396 9.83106 21.9351 9.93308 21.9351 10.059V11.4878H23.6838V8.42074C23.6838 8.18815 23.5077 8 23.29 8H16.71C16.4924 8 16.3161 8.18815 16.3161 8.42074V11.4866H18.0738V10.059Z",
				fill: "#EF4550"
			}
		]
	},
	"applogo:white": {
		viewBox: "0 0 40 40",
		paths: [
			{
				d: "M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z",
				fill: "#003143"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M32 17.3882V17.3746C31.9539 17.3838 29.4722 18.8243 26.2618 20.7889V26.6448C26.2618 26.7705 26.1665 26.8721 26.0491 26.8721H16.3441C11.7884 29.6704 8.00017 32 8.00017 32H31.6058C31.8256 32 32.0023 31.8096 32 31.5747V17.3882Z",
				fill: "#0C9AB0"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M31.6058 12.0969H14.3474L20.9526 17.2249H26.049C26.1665 17.2249 26.2618 17.3264 26.2618 17.4522V20.7889C29.4722 18.8242 31.9538 17.384 32 17.3745V12.5181C32 12.2855 31.8237 12.0969 31.6058 12.0969Z",
				fill: "#EF4550"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M13.7423 26.6447V17.4521C13.7423 17.3266 13.8373 17.2249 13.9548 17.2249H20.9527L14.3475 12.0969H8.39417C8.1765 12.0969 8 12.2855 8 12.5181V32C8 32 11.7885 29.6706 16.3442 26.872H13.9548C13.8373 26.872 13.7423 26.7705 13.7423 26.6447Z",
				fill: "white"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M18.0738 10.059C18.0738 9.93308 18.1693 9.83106 18.2874 9.83106H21.7217C21.8396 9.83106 21.9351 9.93308 21.9351 10.059V11.4878H23.6838V8.42074C23.6838 8.18815 23.5077 8 23.29 8H16.71C16.4924 8 16.3161 8.18815 16.3161 8.42074V11.4866H18.0738V10.059Z",
				fill: "#EF4550"
			}
		]
	},
	"logomark:colour": {
		viewBox: "0 0 24 24",
		paths: [
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M24 9.38816V9.37457C23.9539 9.38378 21.4723 10.8243 18.2618 12.7889V18.6448C18.2618 18.7705 18.1665 18.8721 18.0491 18.8721H8.34415C3.78845 21.6704 0.000183105 24 0.000183105 24H23.6058C23.8256 24 24.0024 23.8096 24 23.5747V9.38816Z",
				fill: "#0C9AB0"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M23.6058 4.09692H6.34741L12.9526 9.22485H18.049C18.1665 9.22485 18.2618 9.32641 18.2618 9.45215V12.7889C21.4722 10.8242 23.9538 9.38398 24 9.37454V4.51813C24 4.28553 23.8237 4.09692 23.6058 4.09692Z",
				fill: "#EF4550"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M5.74231 18.6447V9.45215C5.74231 9.32664 5.83735 9.22485 5.9548 9.22485H12.9527L6.34746 4.09692H0.394171C0.176504 4.09692 0 4.28553 0 4.51813V24C0 24 3.78848 21.6706 8.34418 18.872H5.9548C5.83735 18.872 5.74231 18.7705 5.74231 18.6447Z",
				fill: "#003143"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.0738 2.05905C10.0738 1.93308 10.1692 1.83106 10.2873 1.83106H13.7217C13.8396 1.83106 13.9351 1.93308 13.9351 2.05905V3.48778H15.6837V0.420745C15.6837 0.188149 15.5077 0 15.29 0H8.71C8.49233 0 8.31604 0.188149 8.31604 0.420745V3.48663H10.0738V2.05905Z",
				fill: "#EF4550"
			}
		]
	},
	"logomark:white": {
		viewBox: "0 0 24 24",
		paths: [
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M24 9.38816V9.37457C23.9539 9.38378 21.4723 10.8243 18.2618 12.7889V18.6448C18.2618 18.7705 18.1665 18.8721 18.0491 18.8721H8.34415C3.78845 21.6704 0.000183105 24 0.000183105 24H23.6058C23.8256 24 24.0024 23.8096 24 23.5747V9.38816Z",
				fill: "#0C9AB0"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M23.6058 4.09692H6.34741L12.9526 9.22485H18.049C18.1665 9.22485 18.2618 9.32641 18.2618 9.45215V12.7889C21.4722 10.8242 23.9538 9.38398 24 9.37454V4.51813C24 4.28553 23.8237 4.09692 23.6058 4.09692Z",
				fill: "#EF4550"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M5.74231 18.6447V9.45215C5.74231 9.32664 5.83735 9.22485 5.9548 9.22485H12.9527L6.34746 4.09692H0.394171C0.176504 4.09692 0 4.28553 0 4.51813V24C0 24 3.78848 21.6706 8.34418 18.872H5.9548C5.83735 18.872 5.74231 18.7705 5.74231 18.6447Z",
				fill: "white"
			},
			{
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.0738 2.05905C10.0738 1.93308 10.1692 1.83106 10.2873 1.83106H13.7217C13.8396 1.83106 13.9351 1.93308 13.9351 2.05905V3.48778H15.6837V0.420745C15.6837 0.188149 15.5077 0 15.29 0H8.71C8.49233 0 8.31604 0.188149 8.31604 0.420745V3.48663H10.0738V2.05905Z",
				fill: "#EF4550"
			}
		]
	},
	"wordmark:colour:en": {
		viewBox: "0 0 132 24",
		paths: [
			{
				d: "M64.2179 8.1119H51.0992L56.1195 11.647H60.156V14.2936C62.5963 12.8973 64.4845 11.8723 64.5194 11.866V8.4102C64.5194 8.24519 64.3861 8.1119 64.2211 8.1119",
				fill: "#EF4550"
			},
			{
				d: "M54.8438 6.85204H56.9065V7.67712H57.8426V5.93494H53.9076V7.67712H54.8438V6.85204Z",
				fill: "#EF4550"
			},
			{
				d: "M50.639 18.6221V11.6471H56.1194L51.0992 8.11192H46.574C46.4089 8.11192 46.2757 8.2452 46.2757 8.41021V22.2715C46.2757 22.2715 49.1571 20.615 52.6192 18.6221H50.639Z",
				fill: "#002D3F"
			},
			{
				d: "M64.5162 11.8756V11.866C64.4813 11.8724 62.5931 12.8974 60.1528 14.2937V18.6221H52.6129C49.1507 20.6119 46.2693 22.2715 46.2693 22.2715H64.2147C64.3829 22.2715 64.5162 22.1351 64.513 21.9701V11.8756H64.5162Z",
				fill: "#1AA5B7"
			},
			{
				d: "M88.3323 16.2358V17.6289C88.3323 17.7463 88.272 17.8605 88.1768 17.9272C87.1487 18.657 86.1364 19.0283 85.1621 19.0283C84.1879 19.0283 83.7786 18.6507 83.7786 17.8383V17.3147C83.7786 16.5848 84.1213 16.2516 84.8861 16.2358H88.3323ZM87.2788 7.81364C85.0067 7.81364 82.6171 8.03577 80.1799 8.47687L79.98 8.51178L80.4179 11.6566L80.6147 11.6439C82.9249 11.4979 84.8448 11.4249 86.3173 11.4249C87.3232 11.4249 87.7516 11.5963 87.9325 11.7359C88.18 11.9327 88.3165 12.3484 88.3323 12.9704V13.3639H83.7087C82.3632 13.3639 81.2906 13.6844 80.5258 14.319C79.7452 14.9632 79.3485 15.8677 79.3485 17.0101V18.3841C79.3485 19.6725 79.7896 20.6912 80.6623 21.4179C81.5191 22.1351 82.6393 22.5 83.9848 22.5C85.8825 22.5 87.52 21.7765 88.8623 20.3516L89.1701 21.8875C89.2018 22.0526 89.3478 22.17 89.5128 22.17H92.4736C92.6672 22.17 92.8258 22.0113 92.8258 21.8177V12.9989C92.8258 11.1139 92.3657 9.75891 91.4613 8.97827C90.5664 8.20714 89.1606 7.81364 87.282 7.81364",
				fill: "#002D3F"
			},
			{
				d: "M113.761 13.8684H110.137C110.203 12.8022 110.403 12.085 110.727 11.7391C111.07 11.3741 111.736 11.1869 112.717 11.1869C113.545 11.1869 114.113 11.298 114.402 11.5169C114.675 11.72 114.811 12.1135 114.811 12.6816C114.811 13.0909 114.738 13.4019 114.592 13.6019C114.459 13.7827 114.179 13.8716 113.757 13.8716M118.178 15.7344C118.867 15.0648 119.219 14.0556 119.219 12.7355C119.2 11.0822 118.654 9.82872 117.597 9.01316C116.556 8.2103 114.868 7.80093 112.577 7.80093C110.038 7.80093 108.198 8.35945 107.109 9.45743C106.018 10.5554 105.465 12.4817 105.465 15.1854C105.465 17.8891 106.033 19.6408 107.147 20.7768C108.264 21.9129 110.146 22.4905 112.739 22.4905C115.331 22.4905 117.305 22.1414 118.74 21.4528L118.879 21.3861L118.441 18.5047L118.241 18.5269C116.331 18.7268 114.636 18.8284 113.205 18.8284C112.174 18.8284 111.434 18.6729 111.009 18.3587C110.628 18.0858 110.371 17.5432 110.235 16.7498H114.884C116.382 16.7498 117.489 16.4103 118.178 15.7407",
				fill: "#002D3F"
			},
			{
				d: "M101.023 5.71919C101.248 5.5034 101.673 5.39233 102.292 5.39233H105.031L105.469 2.31734L105.269 2.27926C104.25 2.0952 102.758 2 100.832 2C97.7382 2 96.1674 3.47879 96.1674 6.38877V8.09922L93.8032 8.41656V11.6439H96.1674V21.8621C96.1674 22.0557 96.3261 22.2144 96.5196 22.2144H100.334C100.528 22.2144 100.686 22.0557 100.686 21.8621V11.647H104.425V8.10239H100.686V6.94094C100.686 6.34435 100.801 5.93181 101.019 5.71919",
				fill: "#002D3F"
			},
			{
				d: "M129.431 7.85803C127.666 7.85803 125.867 8.59108 124.077 10.0381L123.804 8.53078C123.773 8.36259 123.63 8.24201 123.458 8.24201H120.555C120.361 8.24201 120.202 8.40067 120.202 8.59425V21.8621C120.202 22.0557 120.361 22.2144 120.555 22.2144H124.344C124.537 22.2144 124.696 22.0557 124.696 21.8621V13.1766C124.696 13.0243 124.804 12.8846 124.95 12.837C126.59 12.3103 127.828 12.0437 128.634 12.0437H129.923L130.383 7.85485H129.431V7.85803Z",
				fill: "#002D3F"
			},
			{
				d: "M11.8541 14.5951H8.54113C8.34438 14.5951 8.20475 14.4016 8.25235 14.2112C9.30908 10.1842 9.95328 7.64863 10.1818 6.60459C10.2389 6.90923 10.3341 7.32177 10.4674 7.8422C10.5943 8.34677 11.1528 10.4698 12.1429 14.2112C12.1937 14.4016 12.0509 14.5951 11.8541 14.5951ZM13.4059 3.59941C13.371 3.4693 13.2504 3.37727 13.1171 3.37727H7.20831C7.07186 3.37727 6.95444 3.46613 6.91953 3.59941L2.01033 21.8336C1.95955 22.024 2.10236 22.2112 2.2991 22.2112H6.11984C6.25313 22.2112 6.37371 22.1224 6.40862 21.9923L7.52565 17.9684C7.56055 17.8383 7.68114 17.7495 7.81442 17.7495H12.5332C12.6665 17.7495 12.7871 17.8383 12.822 17.9684L13.939 21.9923C13.9739 22.1224 14.0945 22.2112 14.2278 22.2112H18.0454C18.2421 22.2112 18.3849 22.024 18.3342 21.8336L13.4059 3.59941Z",
				fill: "#002D3F"
			},
			{
				d: "M23.64 3.37727H19.6289C19.4639 3.37727 19.3274 3.51055 19.3274 3.67557V21.9383C19.3274 22.1033 19.4607 22.2398 19.6289 22.2398H23.64C23.805 22.2398 23.9383 22.1065 23.9383 21.9383V3.67874C23.9383 3.51373 23.805 3.38044 23.64 3.38044",
				fill: "#002D3F"
			},
			{
				d: "M44.9904 8.11192H27.6384C26.1374 8.11192 24.9252 9.32732 24.9252 10.8251V21.9097C24.9252 22.0747 25.0585 22.208 25.2235 22.208H29.0696C29.2346 22.208 29.3679 22.0747 29.3679 21.9097V11.9612C29.3679 11.7962 29.5012 11.6629 29.6662 11.6629H32.5984C32.7634 11.6629 32.8999 11.7962 32.8999 11.9612V21.9097C32.8999 22.0747 33.0332 22.208 33.1982 22.208H37.3743C37.5394 22.208 37.6758 22.0747 37.6758 21.9097V11.9295C37.6758 11.7645 37.8091 11.628 37.9741 11.628H40.3097C40.4747 11.628 40.6112 11.7613 40.6112 11.9295V21.9097C40.6112 22.0747 40.7445 22.208 40.9095 22.208H44.9873C45.1523 22.208 45.2856 22.0747 45.2856 21.9097V8.41339C45.2856 8.24837 45.1523 8.11509 44.9873 8.11509",
				fill: "#002D3F"
			},
			{
				d: "M74.4203 13.2908H70.7867C70.5424 13.2908 70.3361 13.2083 70.1743 13.0465C70.0124 12.8847 69.9299 12.6784 69.9299 12.434C69.9299 12.1897 70.0124 12.0596 70.1743 11.8946C70.3361 11.7327 70.5424 11.6502 70.7867 11.6502H76.7686C76.9304 11.6502 77.0637 11.5169 77.0637 11.3551V8.39433C77.0637 8.23249 76.9304 8.09921 76.7686 8.09921H69.2286C68.045 8.09921 67.0803 8.46098 66.3631 9.17816C65.6459 9.89217 65.2841 10.8569 65.2841 12.0437V12.9513C65.2841 14.1381 65.6459 15.0997 66.3631 15.8168C67.0771 16.534 68.0418 16.8958 69.2286 16.8958H73.7189V17.7526C73.7189 17.997 73.6364 18.2032 73.4746 18.3651C73.3096 18.5301 73.1097 18.6094 72.8621 18.6094H65.8395C65.6776 18.6094 65.5443 18.7427 65.5443 18.9045V21.9192C65.5443 22.0811 65.6776 22.2144 65.8395 22.2144H74.4171C75.6039 22.2144 76.5655 21.8526 77.2826 21.1354C77.9966 20.4182 78.3616 19.4567 78.3616 18.2699V17.2322C78.3616 16.0453 77.9998 15.0838 77.2826 14.3666C76.5655 13.6494 75.6007 13.2877 74.4171 13.2877",
				fill: "#002D3F"
			}
		]
	},
	"wordmark:colour:ar": {
		viewBox: "0 0 132 24",
		paths: [
			{
				d: "M26.2203 3.82341C27.172 3.82341 27.9446 3.0509 27.9446 2.09911C27.9446 1.14733 27.172 0.374815 26.2203 0.374815C25.2685 0.374815 24.496 1.14407 24.496 2.09911C24.496 3.05416 25.2685 3.82341 26.2203 3.82341Z",
				fill: "#002D3F"
			},
			{
				d: "M131.552 0H127.436C127.266 0 127.129 0.136901 127.129 0.306397V19.052C127.129 19.2215 127.266 19.3584 127.436 19.3584H131.552C131.722 19.3584 131.859 19.2215 131.859 19.052V0.306397C131.859 0.136901 131.722 0 131.552 0Z",
				fill: "#002D3F"
			},
			{
				d: "M125.304 0H121.187C121.017 0 120.881 0.136901 120.881 0.306397V15.3068C120.881 15.4763 120.744 15.6132 120.574 15.6132H111.656C111.487 15.6132 111.35 15.7957 111.35 15.9652V19.052C111.35 19.2215 111.487 19.3584 111.656 19.3584H125.304C125.473 19.3584 125.61 19.2215 125.61 19.052V0.306397C125.61 0.136901 125.473 0 125.304 0Z",
				fill: "#002D3F"
			},
			{
				d: "M24.3298 11.0596C23.8962 11.0596 23.6094 10.9651 23.4758 10.7826C23.3258 10.5772 23.2508 10.2578 23.2508 9.8373C23.2508 9.25384 23.3943 8.85292 23.6746 8.64431C23.9712 8.4194 24.5547 8.30532 25.4054 8.30532C26.4093 8.30532 27.0971 8.49437 27.4459 8.87248C27.7816 9.23103 27.9837 9.96442 28.0521 11.0596H24.3298ZM25.5423 4.82413C23.1889 4.82413 21.4581 5.24135 20.389 6.06928C19.3035 6.91024 18.7462 8.1945 18.7233 9.89271C18.7233 11.2487 19.0819 12.2852 19.7892 12.9697C20.4933 13.6575 21.6341 14.0063 23.1694 14.0063H27.9413V15.6165H9.80524C9.63575 15.6165 9.50211 15.4796 9.49885 15.3133V5.18268C9.49885 4.98385 9.33587 4.82087 9.13704 4.82087H5.21907C5.02024 4.82087 4.85726 4.98385 4.85726 5.18268V18.9314C4.85726 19.5442 4.74318 19.9647 4.51501 20.1863C4.28358 20.408 3.84681 20.5221 3.2112 20.5221H0.714389C0.535114 20.5221 0.381916 20.6557 0.355839 20.8317L0.00380911 23.3057C-0.0255267 23.5078 0.117893 23.6936 0.319984 23.7164C1.14139 23.8044 3.16882 24 4.70732 24C7.88538 24 9.49559 22.5756 9.49559 19.5866V19.6681C9.49559 19.4986 9.63249 19.3617 9.80198 19.3617H32.4819C32.6807 19.3617 32.8437 19.1987 32.8437 18.9999V12.4026C32.8437 9.62869 32.2765 7.65015 31.1585 6.52235C30.0405 5.39455 28.1532 4.82087 25.5456 4.82087",
				fill: "#002D3F"
			},
			{
				d: "M41.0284 19.3617H93.6569V15.6132H85.8209C85.7558 15.6132 85.7036 15.5773 85.6547 15.5447V5.13051C85.6547 4.96102 85.5178 4.82412 85.3483 4.82412H81.2315C81.062 4.82412 80.9251 4.96102 80.9251 5.13051V15.3492C80.899 15.4958 80.7882 15.6132 80.635 15.6132H76.4889C76.3357 15.6132 76.2183 15.4926 76.1988 15.3459V5.13051C76.1988 4.96102 76.0619 4.82412 75.8891 4.82412H71.7723C71.6028 4.82412 71.4659 4.96102 71.4659 5.13051V15.3068C71.4659 15.4763 71.329 15.6132 71.1563 15.6132H67.0395C66.87 15.6132 66.7331 15.4763 66.7331 15.3068V5.13051C66.7331 4.96102 66.5962 4.82412 66.4234 4.82412H62.3066C62.1371 4.82412 62.0002 4.96102 62.0002 5.13051V15.3068C62.0002 15.4763 61.8633 15.6132 61.6938 15.6132H39.291C39.1802 15.5676 39.0922 15.4763 39.0922 15.3492V0.306397C39.0922 0.136901 38.952 0 38.7825 0H34.6657C34.4962 0 34.3593 0.136901 34.3593 0.306397V18.9999C34.3593 19.1987 34.5191 19.3617 34.7211 19.3617H58.4734",
				fill: "#002D3F"
			},
			{
				d: "M98.1356 15.6132V8.452H103.762L98.6082 4.82413H93.9633C93.7938 4.82413 93.6569 4.96103 93.6569 5.13053V19.3584C93.6569 19.3584 96.6133 17.6569 100.169 15.6132H98.1356Z",
				fill: "#002D3F"
			},
			{
				d: "M112.386 8.68672V8.67694C112.35 8.68346 110.414 9.73629 107.908 11.1705V15.6132H100.169C96.6133 17.657 93.6569 19.3584 93.6569 19.3584H112.08C112.253 19.3584 112.39 19.2183 112.386 19.0488V8.68672Z",
				fill: "#1AA5B7"
			},
			{
				d: "M112.077 4.82415H98.6082L103.761 8.45202H107.904V11.1705C110.411 9.73628 112.347 8.68345 112.383 8.67693V5.13055C112.383 4.96105 112.246 4.82415 112.077 4.82415Z",
				fill: "#EF4550"
			},
			{
				d: "M102.454 3.52682H104.573V4.37756H105.531V2.58807H101.493V4.37756H102.454V3.52682Z",
				fill: "#EF4550"
			}
		]
	},
	"wordmark:white:en": {
		viewBox: "0 0 132 24",
		paths: [
			{
				d: "M64.5161 11.8757V11.8662C64.4812 11.8726 62.593 12.8976 60.1527 14.2938V18.6223H52.6128C49.1506 20.612 46.2692 22.2717 46.2692 22.2717H64.2146C64.3828 22.2717 64.5161 22.1352 64.5129 21.9702V11.8757H64.5161Z",
				fill: "#1AA5B7"
			},
			{
				d: "M64.218 8.11211H51.0993L56.1196 11.6472H60.1561V14.2938C62.5964 12.8975 64.4846 11.8725 64.5195 11.8662V8.4104C64.5195 8.24539 64.3862 8.11211 64.2212 8.11211",
				fill: "#EF4550"
			},
			{
				d: "M54.8437 6.8524H56.9064V7.67748H57.8425V5.9353H53.9076V7.67748H54.8437V6.8524Z",
				fill: "#EF4550"
			},
			{
				d: "M50.639 18.6221V11.6471H56.1194L51.0991 8.11196H46.5739C46.4089 8.11196 46.2756 8.24524 46.2756 8.41025V22.2715C46.2756 22.2715 49.157 20.615 52.6192 18.6221H50.639Z",
				fill: "white"
			},
			{
				d: "M88.3322 16.2358V17.6289C88.3322 17.7463 88.2719 17.8605 88.1767 17.9272C87.1485 18.6571 86.1362 19.0283 85.162 19.0283C84.1878 19.0283 83.7784 18.6507 83.7784 17.8383V17.3147C83.7784 16.5849 84.1211 16.2516 84.8859 16.2358H88.3322ZM87.2786 7.81367C85.0065 7.81367 82.6169 8.03581 80.1798 8.4769L79.9799 8.51181L80.4178 11.6566L80.6146 11.6439C82.9248 11.4979 84.8447 11.425 86.3171 11.425C87.3231 11.425 87.7514 11.5963 87.9323 11.7359C88.1799 11.9327 88.3163 12.3484 88.3322 12.9704V13.3639H83.7086C82.3631 13.3639 81.2905 13.6844 80.5257 14.3191C79.745 14.9633 79.3484 15.8677 79.3484 17.0101V18.3841C79.3484 19.6725 79.7895 20.6912 80.6622 21.4179C81.519 22.1351 82.6392 22.5 83.9847 22.5C85.8823 22.5 87.5198 21.7765 88.8621 20.3516L89.17 21.8875C89.2017 22.0526 89.3476 22.17 89.5127 22.17H92.4734C92.667 22.17 92.8257 22.0113 92.8257 21.8177V12.9989C92.8257 11.114 92.3655 9.75894 91.4611 8.9783C90.5662 8.20717 89.1604 7.81367 87.2818 7.81367",
				fill: "white"
			},
			{
				d: "M113.76 13.8683H110.136C110.203 12.8021 110.403 12.0849 110.726 11.739C111.069 11.3741 111.736 11.1869 112.716 11.1869C113.544 11.1869 114.112 11.2979 114.401 11.5169C114.674 11.72 114.811 12.1135 114.811 12.6815C114.811 13.0909 114.738 13.4019 114.592 13.6018C114.458 13.7827 114.179 13.8715 113.757 13.8715M118.177 15.7343C118.866 15.0647 119.218 14.0556 119.218 12.7355C119.199 11.0821 118.654 9.82866 117.597 9.0131C116.556 8.21024 114.868 7.80088 112.577 7.80088C110.038 7.80088 108.197 8.35939 107.109 9.45737C106.017 10.5554 105.465 12.4816 105.465 15.1853C105.465 17.889 106.033 19.6407 107.147 20.7768C108.264 21.9128 110.146 22.4904 112.738 22.4904C115.331 22.4904 117.305 22.1413 118.739 21.4527L118.879 21.386L118.441 18.5046L118.241 18.5268C116.331 18.7268 114.636 18.8283 113.205 18.8283C112.173 18.8283 111.434 18.6728 111.009 18.3587C110.628 18.0858 110.371 17.5431 110.235 16.7498H114.884C116.381 16.7498 117.489 16.4102 118.177 15.7406",
				fill: "white"
			},
			{
				d: "M101.022 5.71918C101.248 5.50339 101.673 5.39233 102.292 5.39233H105.03L105.468 2.31734L105.268 2.27926C104.25 2.0952 102.758 2 100.832 2C97.738 2 96.1672 3.47879 96.1672 6.38876V8.09921L93.803 8.41654V11.6439H96.1672V21.8621C96.1672 22.0557 96.3259 22.2143 96.5194 22.2143H100.334C100.527 22.2143 100.686 22.0557 100.686 21.8621V11.647H104.424V8.10238H100.686V6.94093C100.686 6.34434 100.8 5.9318 101.019 5.71918",
				fill: "white"
			},
			{
				d: "M129.43 7.85824C127.666 7.85824 125.867 8.59129 124.077 10.0383L123.804 8.53099C123.772 8.3628 123.629 8.24222 123.458 8.24222H120.554C120.361 8.24222 120.202 8.40088 120.202 8.59446V21.8623C120.202 22.0559 120.361 22.2145 120.554 22.2145H124.343C124.537 22.2145 124.696 22.0559 124.696 21.8623V13.1768C124.696 13.0245 124.804 12.8848 124.949 12.8372C126.59 12.3105 127.828 12.0439 128.634 12.0439H129.922L130.382 7.85507H129.43V7.85824Z",
				fill: "white"
			},
			{
				d: "M11.8541 14.5951H8.54111C8.34436 14.5951 8.20473 14.4015 8.25234 14.2111C9.30907 10.1841 9.95326 7.64863 10.1817 6.60459C10.2389 6.90923 10.3341 7.32177 10.4673 7.8422C10.5943 8.34677 11.1528 10.4697 12.1429 14.2111C12.1937 14.4015 12.0509 14.5951 11.8541 14.5951ZM13.4059 3.59941C13.371 3.46931 13.2504 3.37728 13.1171 3.37728H7.2083C7.07184 3.37728 6.95443 3.46613 6.91952 3.59941L2.01033 21.8336C1.95955 22.024 2.10236 22.2112 2.2991 22.2112H6.11983C6.25312 22.2112 6.3737 22.1223 6.40861 21.9922L7.52563 17.9684C7.56054 17.8383 7.68113 17.7494 7.81441 17.7494H12.5332C12.6665 17.7494 12.7871 17.8383 12.822 17.9684L13.939 21.9922C13.9739 22.1223 14.0945 22.2112 14.2278 22.2112H18.0453C18.2421 22.2112 18.3849 22.024 18.3341 21.8336L13.4059 3.59941Z",
				fill: "white"
			},
			{
				d: "M23.64 3.37728H19.6288C19.4638 3.37728 19.3274 3.51056 19.3274 3.67558V21.9383C19.3274 22.1033 19.4607 22.2398 19.6288 22.2398H23.64C23.805 22.2398 23.9383 22.1065 23.9383 21.9383V3.67875C23.9383 3.51373 23.805 3.38045 23.64 3.38045",
				fill: "white"
			},
			{
				d: "M44.9902 8.11196H27.6383C26.1373 8.11196 24.925 9.32735 24.925 10.8252V21.9097C24.925 22.0748 25.0583 22.208 25.2233 22.208H29.0695C29.2345 22.208 29.3678 22.0748 29.3678 21.9097V11.9612C29.3678 11.7962 29.501 11.663 29.6661 11.663H32.5982C32.7633 11.663 32.8997 11.7962 32.8997 11.9612V21.9097C32.8997 22.0748 33.033 22.208 33.198 22.208H37.3742C37.5392 22.208 37.6756 22.0748 37.6756 21.9097V11.9295C37.6756 11.7645 37.8089 11.628 37.9739 11.628H40.3095C40.4745 11.628 40.611 11.7613 40.611 11.9295V21.9097C40.611 22.0748 40.7443 22.208 40.9093 22.208H44.9871C45.1521 22.208 45.2854 22.0748 45.2854 21.9097V8.41343C45.2854 8.24841 45.1521 8.11513 44.9871 8.11513",
				fill: "white"
			},
			{
				d: "M74.4202 13.291H70.7867C70.5423 13.291 70.3361 13.2085 70.1742 13.0467C70.0124 12.8848 69.9299 12.6786 69.9299 12.4342C69.9299 12.1899 70.0124 12.0598 70.1742 11.8948C70.3361 11.7329 70.5423 11.6504 70.7867 11.6504H76.7685C76.9303 11.6504 77.0636 11.5171 77.0636 11.3553V8.39454C77.0636 8.23269 76.9303 8.09941 76.7685 8.09941H69.2286C68.0449 8.09941 67.0802 8.46118 66.363 9.17836C65.6459 9.89236 65.2841 10.8571 65.2841 12.0439V12.9515C65.2841 14.1383 65.6459 15.0999 66.363 15.817C67.077 16.5342 68.0417 16.896 69.2286 16.896H73.7189V17.7528C73.7189 17.9971 73.6364 18.2034 73.4745 18.3652C73.3095 18.5303 73.1096 18.6096 72.8621 18.6096H65.8394C65.6776 18.6096 65.5443 18.7429 65.5443 18.9047V21.9194C65.5443 22.0813 65.6776 22.2145 65.8394 22.2145H74.417C75.6039 22.2145 76.5654 21.8528 77.2826 21.1356C77.9966 20.4184 78.3615 19.4569 78.3615 18.27V17.2324C78.3615 16.0455 77.9998 15.084 77.2826 14.3668C76.5654 13.6496 75.6007 13.2879 74.417 13.2879",
				fill: "white"
			}
		]
	},
	"wordmark:white:ar": {
		viewBox: "0 0 132 24",
		paths: [
			{
				d: "M131.552 0H127.436C127.266 0 127.129 0.136901 127.129 0.306397V19.052C127.129 19.2215 127.266 19.3584 127.436 19.3584H131.552C131.722 19.3584 131.859 19.2215 131.859 19.052V0.306397C131.859 0.136901 131.722 0 131.552 0Z",
				fill: "white"
			},
			{
				d: "M125.304 0H121.187C121.018 0 120.881 0.136901 120.881 0.306397V15.3068C120.881 15.4763 120.744 15.6132 120.574 15.6132H111.656C111.487 15.6132 111.35 15.7957 111.35 15.9652V19.052C111.35 19.2215 111.487 19.3584 111.656 19.3584H125.304C125.473 19.3584 125.61 19.2215 125.61 19.052V0.306397C125.61 0.136901 125.473 0 125.304 0Z",
				fill: "white"
			},
			{
				d: "M24.3298 11.0596C23.8962 11.0596 23.6094 10.9651 23.4758 10.7826C23.3258 10.5772 23.2509 10.2578 23.2509 9.8373C23.2509 9.25384 23.3943 8.85291 23.6746 8.6443C23.9712 8.4194 24.5547 8.30531 25.4054 8.30531C26.4094 8.30531 27.0971 8.49436 27.4459 8.87247C27.7816 9.23102 27.9837 9.96442 28.0522 11.0596H24.3298ZM25.5423 4.82412C23.1889 4.82412 21.4581 5.24134 20.389 6.06927C19.3036 6.91023 18.7462 8.19449 18.7234 9.89271C18.7234 11.2487 19.0819 12.2852 19.7892 12.9697C20.4933 13.6575 21.6341 14.0062 23.1694 14.0062H27.9413V15.6165H9.80525C9.63575 15.6165 9.50211 15.4796 9.49885 15.3133V5.18267C9.49885 4.98384 9.33588 4.82086 9.13704 4.82086H5.21907C5.02024 4.82086 4.85727 4.98384 4.85727 5.18267V18.9314C4.85727 19.5442 4.74318 19.9647 4.51501 20.1863C4.28359 20.408 3.84681 20.5221 3.2112 20.5221H0.714389C0.535114 20.5221 0.381916 20.6557 0.35584 20.8317L0.00380911 23.3057C-0.0255268 23.5078 0.117893 23.6936 0.319985 23.7164C1.14139 23.8044 3.16882 24 4.70733 24C7.88538 24 9.49559 22.5756 9.49559 19.5866V19.6681C9.49559 19.4986 9.63249 19.3617 9.80199 19.3617H32.4819C32.6807 19.3617 32.8437 19.1987 32.8437 18.9999V12.4026C32.8437 9.62868 32.2765 7.65014 31.1585 6.52234C30.0405 5.39454 28.1532 4.82086 25.5456 4.82086",
				fill: "white"
			},
			{
				d: "M41.0284 19.3617H93.6569V15.6132H85.821C85.7558 15.6132 85.7037 15.5773 85.6548 15.5448V5.13052C85.6548 4.96102 85.5179 4.82412 85.3484 4.82412H81.2316C81.0621 4.82412 80.9252 4.96102 80.9252 5.13052V15.3492C80.8991 15.4959 80.7883 15.6132 80.6351 15.6132H76.4889C76.3357 15.6132 76.2184 15.4926 76.1988 15.3459V5.13052C76.1988 4.96102 76.0619 4.82412 75.8892 4.82412H71.7724C71.6029 4.82412 71.466 4.96102 71.466 5.13052V15.3068C71.466 15.4763 71.3291 15.6132 71.1563 15.6132H67.0395C66.87 15.6132 66.7331 15.4763 66.7331 15.3068V5.13052C66.7331 4.96102 66.5962 4.82412 66.4235 4.82412H62.3067C62.1372 4.82412 62.0003 4.96102 62.0003 5.13052V15.3068C62.0003 15.4763 61.8634 15.6132 61.6939 15.6132H39.2911C39.1802 15.5676 39.0922 15.4763 39.0922 15.3492V0.306397C39.0922 0.136901 38.9521 0 38.7826 0H34.6658C34.4963 0 34.3594 0.136901 34.3594 0.306397V18.9999C34.3594 19.1987 34.5191 19.3617 34.7212 19.3617H58.4735",
				fill: "white"
			},
			{
				d: "M26.2203 3.82344C27.1721 3.82344 27.9446 3.05093 27.9446 2.09914C27.9446 1.14736 27.1721 0.374847 26.2203 0.374847C25.2685 0.374847 24.496 1.1441 24.496 2.09914C24.496 3.05419 25.2685 3.82344 26.2203 3.82344Z",
				fill: "white"
			},
			{
				d: "M98.1356 15.6132V8.45199H103.762L98.6082 4.82412H93.9633C93.7938 4.82412 93.6569 4.96102 93.6569 5.13052V19.3584C93.6569 19.3584 96.6133 17.6569 100.17 15.6132H98.1356Z",
				fill: "white"
			},
			{
				d: "M112.386 8.68684V8.67706C112.351 8.68358 110.414 9.73641 107.908 11.1706V15.6134H100.17C96.6136 17.6571 93.6572 19.3586 93.6572 19.3586H112.08C112.253 19.3586 112.39 19.2184 112.386 19.0489V8.68684Z",
				fill: "#1AA5B7"
			},
			{
				d: "M112.077 4.82412H98.6081L103.761 8.45199H107.904V11.1704C110.411 9.73625 112.347 8.68342 112.383 8.6769V5.13052C112.383 4.96102 112.246 4.82412 112.077 4.82412Z",
				fill: "#EF4550"
			},
			{
				d: "M102.454 3.52682H104.573V4.37756H105.531V2.58807H101.493V4.37756H102.454V3.52682Z",
				fill: "#EF4550"
			}
		]
	}
};
function qt({ type: e = "wordmark", variant: t = "colour", lang: n = "en", width: r, className: i, ...a }) {
	let o = Kt[e === "wordmark" ? `wordmark:${t}:${n}` : `${e}:${t}`];
	if (!o) return null;
	let [, , s, c] = o.viewBox.split(" ").map(Number), u = r ?? s;
	return /* @__PURE__ */ l("svg", {
		width: u,
		height: u / s * c,
		viewBox: o.viewBox,
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: i,
		...a,
		children: o.paths.map((e, t) => /* @__PURE__ */ l("path", { ...e }, t))
	});
}
//#endregion
//#region src/tokens/tokens.js
var Jt = {
	metal: "#F8F9F9",
	chateau: "#929FA3",
	montreal: "#515B5E",
	gainsboro: "#3C4244",
	alice: "#2C2F30",
	ghost: "#232525",
	light: "#1C1C1C",
	whiteStatic: "#FFFFFF",
	blackStatic: "#1C1C1C",
	aqua10: "#1F2A2C",
	aqua30: "#24464B",
	aqua50: "#2A626B",
	aqua100: "#07ACC5",
	aqua200: "#0394AA",
	coral10: "#59393E",
	coral100: "#E9666F",
	coral200: "#EA3944",
	forest10: "#1B2C1C",
	forest100: "#599B5D",
	forest200: "#26972C",
	butter10: "#30291D",
	butter100: "#E79924",
	lavender: "#34303F",
	iris: "#6127AA",
	amethyst: "#875BF7",
	apple: "#F8F9F9",
	black50: "rgba(0, 0, 0, 0.5)",
	light40: "rgba(28, 28, 28, 0.4)",
	light92: "rgba(28, 28, 28, 0.92)",
	sulu: "#CEFF99",
	mint: "#99FFDF",
	dodger: "#2E90FA",
	bondi: "#00879C",
	glacier: "#01BAD7",
	malachite: "#0CB038",
	grey10: "rgba(105, 117, 134, 0.10)",
	grey30: "rgba(105, 117, 134, 0.30)",
	blue10: "rgba(46, 144, 250, 0.10)",
	blue30: "rgba(46, 144, 250, 0.30)",
	green10: "rgba(102, 198, 28, 0.10)",
	green30: "rgba(102, 198, 28, 0.30)",
	purple10: "rgba(135, 91, 247, 0.10)",
	purple30: "rgba(135, 91, 247, 0.30)",
	black70: "rgba(0, 0, 0, 0.70)",
	black40: "rgba(0, 0, 0, 0.40)"
}, Yt = {
	metal: "#1C1C1C",
	chateau: "#66797F",
	montreal: "#A1AAAD",
	gainsboro: "#D8DCDE",
	alice: "#EDF1F3",
	ghost: "#F7F9FA",
	light: "#FFFFFF",
	whiteStatic: "#FFFFFF",
	metalStatic: "#1C1C1C",
	aqua10: "#E9F6F8",
	aqua30: "#BDE4EA",
	aqua50: "#91D2DC",
	aqua100: "#0C9AB0",
	aqua200: "#008296",
	coral10: "#F4E3E4",
	coral100: "#EF4550",
	coral200: "#D23241",
	forest10: "#EAF5EB",
	forest100: "#319E37",
	forest200: "#0A8A11",
	butter10: "#FEF5E6",
	butter100: "#FE9C09",
	lavender: "#F7F1FF",
	iris: "#E8D4FF",
	amethyst: "#875BF7",
	almosafer: "#003143",
	whatsapp: "#25D366",
	facebook: "#0866FF",
	shukran: "#F0DBB1",
	shukranContrast: "#4A2A1F",
	qitaf: "#4F008C",
	mokafaa: "#221AFB",
	emkan: "#0CBAB4",
	alfursan: "#006937",
	apple: "#000000",
	black50: "rgba(0, 0, 0, 0.5)",
	light40: "rgba(255, 255, 255, 0.4)",
	light92: "rgba(255, 255, 255, 0.92)",
	sulu: "#CEFF99",
	mint: "#99FFDF",
	dodger: "#2E90FA",
	bondi: "#00879C",
	glacier: "#01BAD7",
	malachite: "#0CB038",
	grey10: "rgba(105, 117, 134, 0.10)",
	grey30: "rgba(105, 117, 134, 0.30)",
	blue10: "rgba(46, 144, 250, 0.10)",
	blue30: "rgba(46, 144, 250, 0.30)",
	green10: "rgba(102, 198, 28, 0.10)",
	green30: "rgba(102, 198, 28, 0.30)",
	purple10: "rgba(135, 91, 247, 0.10)",
	purple30: "rgba(135, 91, 247, 0.30)",
	black70: "rgba(0, 0, 0, 0.70)",
	black40: "rgba(0, 0, 0, 0.40)"
}, Xt = {
	unit: 8,
	"2xs": 2,
	xs: 4,
	sm: 8,
	md: 12,
	base: 16,
	lg: 24,
	xl: 32,
	"2xl": 40,
	"3xl": 48,
	"4xl": 64,
	container: 16,
	cardGap: 12,
	section: 32
}, Zt = {
	xs: "4px",
	sm: "8px",
	base: "12px",
	lg: "16px",
	popover: "34px",
	full: "100px"
}, Qt = {
	floating: "0px -4px 16px rgba(0, 0, 0, 0.08)",
	raised: "0px 8px 24px rgba(0, 0, 0, 0.12)"
}, $t = {
	display: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "34px",
		fontWeight: 600,
		lineHeight: "52px",
		letterSpacing: "-1px"
	},
	headline: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "26px",
		fontWeight: 600,
		lineHeight: "40px",
		letterSpacing: "-0.6px"
	},
	title: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "18px",
		fontWeight: 600,
		lineHeight: "28px",
		letterSpacing: "-0.2px"
	},
	titleBold: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "18px",
		fontWeight: 700,
		lineHeight: "28px",
		letterSpacing: "-0.2px"
	},
	subtitle: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "16px",
		fontWeight: 600,
		lineHeight: "24px"
	},
	subtitleBold: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "16px",
		fontWeight: 700,
		lineHeight: "24px"
	},
	eyebrow: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "12px",
		fontWeight: 400,
		lineHeight: "16px",
		letterSpacing: "1.5px"
	},
	bodyRegular: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "14px",
		fontWeight: 400,
		lineHeight: "20px"
	},
	bodySemibold: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "14px",
		fontWeight: 600,
		lineHeight: "20px"
	},
	bodyBold: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "14px",
		fontWeight: 700,
		lineHeight: "20px"
	},
	captionRegular: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "12px",
		fontWeight: 400,
		lineHeight: "16px"
	},
	captionSemibold: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "12px",
		fontWeight: 600,
		lineHeight: "16px"
	},
	metaRegular: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "11px",
		fontWeight: 400,
		lineHeight: "14px"
	},
	metaSemibold: {
		fontFamily: "'Open Sans', system-ui, sans-serif",
		fontSize: "11px",
		fontWeight: 600,
		lineHeight: "14px"
	}
};
//#endregion
export { mt as Accolade, Gt as Accordion, zt as ActionSheet, re as AdBanner, qt as AlmosaferLogo, ht as Badge, v as Banner, Re as BottomActionBar, jt as BottomSheet, x as Button, ft as Callout, He as Cell, Z as Checkbox, V as CheckboxCheckedIcon, B as CheckboxSquareIcon, L as CheckmarkIcon, F as ChevronDownIcon, P as ChevronLeftIcon, N as ChevronRightIcon, I as ChevronUpIcon, pe as Chip, Ze as CircularProgressIndicator, p as DesignSystemProvider, It as Dialog, Ut as Expander, W as GlassButton, Ue as IconButton, tt as LinearProgressIndicator, We as ListItem, Bt as MarketingCard, Fe as Navbar, te as PlaceholderIcon, Ge as ProgressStepper, Q as Radio, R as RadioButtonIcon, z as RadioButtonSelectedIcon, J as Search, U as SegmentedControl, Ve as Separator, nt as Slider, _t as Snackbar, Be as Stepper, M as SystemBanner, St as TabBar, S as Tag, ut as TextInput, ze as Toggle, gt as Tooltip, ae as VisualCard, Yt as colors, Jt as colorsDark, Qt as elevation, Zt as rounded, Xt as spacing, $t as typography, h as useDir, m as usePlatform };

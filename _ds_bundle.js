/* @ds-bundle: {"format":4,"namespace":"BahaSatgunPortfolioDesignSystem_d181b5","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Divider","sourcePath":"components/content/Divider.jsx"},{"name":"SectionLabel","sourcePath":"components/content/SectionLabel.jsx"},{"name":"ProjectCard","sourcePath":"components/portfolio/ProjectCard.jsx"},{"name":"SocialLink","sourcePath":"components/portfolio/SocialLink.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b3f2dbbdc035","components/actions/IconButton.jsx":"14ce40d52269","components/content/Badge.jsx":"d0016cd97b56","components/content/Card.jsx":"56d62e59a30e","components/content/Divider.jsx":"49d404e71d11","components/content/SectionLabel.jsx":"1f9969246854","components/portfolio/ProjectCard.jsx":"d8fdc2c6aed6","components/portfolio/SocialLink.jsx":"add17f31f3cf","ui_kits/portfolio/EducationSection.jsx":"50953c4dc303","ui_kits/portfolio/ExperienceSection.jsx":"856b01ee34ea","ui_kits/portfolio/Footer.jsx":"4934fc9e0d16","ui_kits/portfolio/Header.jsx":"437568e9d5a7","ui_kits/portfolio/InterestsSection.jsx":"c12aab8bb5d5","ui_kits/portfolio/ProjectsSection.jsx":"8701320231ea","ui_kits/portfolio/TopNav.jsx":"71e58dd11903"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BahaSatgunPortfolioDesignSystem_d181b5 = window.BahaSatgunPortfolioDesignSystem_d181b5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's action primitive.
 * Mono type, lowercase label, sharp corners. On black.
 */
function Button({
  children,
  variant = 'outline',
  // 'solid' | 'outline' | 'ghost'
  size = 'md',
  // 'sm' | 'md'
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '6px 12px',
      fontSize: 'var(--size-xs)'
    },
    md: {
      padding: '9px 18px',
      fontSize: 'var(--size-sm)'
    }
  };
  const variants = {
    solid: {
      background: 'var(--paper-0)',
      color: 'var(--ink-0)',
      border: '1px solid var(--paper-0)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--paper-0)',
      border: '1px solid var(--line-3)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--muted-1)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-light)',
    letterSpacing: '0.02em',
    lineHeight: 1,
    borderRadius: 'var(--radius-0)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'color var(--dur-normal) ease, background var(--dur-normal) ease, border-color var(--dur-normal) ease, box-shadow var(--dur-normal) ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hoverIn = e => {
    if (disabled) return;
    if (variant === 'solid') {
      e.currentTarget.style.background = 'var(--paper-1)';
      e.currentTarget.style.boxShadow = 'var(--glow-red-sm)';
    } else if (variant === 'outline') {
      e.currentTarget.style.borderColor = 'var(--accent-red)';
      e.currentTarget.style.color = 'var(--accent-red)';
      e.currentTarget.style.boxShadow = 'var(--glow-red-sm)';
    } else {
      e.currentTarget.style.color = 'var(--accent-red)';
    }
  };
  const hoverOut = e => {
    Object.assign(e.currentTarget.style, variants[variant]);
    e.currentTarget.style.boxShadow = 'none';
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: href ? undefined : disabled,
    style: base,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square, borderless control for a single icon or glyph.
 * Fades from muted to white on hover (the brand's link behaviour).
 * Pass an <img> (icon asset) or glyph as children.
 */
function IconButton({
  children,
  size = 36,
  label,
  // accessible label
  href,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    padding: 0,
    background: 'transparent',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-0)',
    color: 'var(--muted-1)',
    cursor: 'pointer',
    transition: 'color var(--dur-normal) ease, border-color var(--dur-normal) ease, opacity var(--dur-normal) ease',
    textDecoration: 'none',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    "aria-label": label,
    title: label,
    style: base,
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--paper-0)';
      e.currentTarget.style.borderColor = 'var(--line-1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--muted-1)';
      e.currentTarget.style.borderColor = 'transparent';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small mono chip for tech tags, statuses, and metadata.
 */
function Badge({
  children,
  variant = 'outline',
  // 'outline' | 'solid' | 'muted'
  style,
  ...rest
}) {
  const variants = {
    outline: {
      background: 'transparent',
      color: 'var(--paper-1)',
      border: '1px solid var(--line-1)'
    },
    solid: {
      background: 'var(--paper-0)',
      color: 'var(--ink-0)',
      border: '1px solid var(--paper-0)'
    },
    muted: {
      background: 'var(--ink-3)',
      color: 'var(--muted-1)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-light)',
    fontSize: 'var(--size-2xs)',
    letterSpacing: '0.04em',
    lineHeight: 1,
    padding: '4px 8px',
    borderRadius: 'var(--radius-0)',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a dark elevated surface with a hairline border.
 * Square corners by default; brightens its border on hover when interactive.
 */
function Card({
  children,
  interactive = false,
  padding = 'var(--space-5)',
  style,
  ...rest
}) {
  const base = {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-0)',
    padding,
    color: 'var(--text-primary)',
    transition: 'border-color var(--dur-normal) ease, background var(--dur-normal) ease, box-shadow var(--dur-normal) ease',
    cursor: interactive ? 'pointer' : 'default',
    ...style
  };
  const enter = e => {
    if (!interactive) return;
    e.currentTarget.style.borderColor = 'var(--accent-red)';
    e.currentTarget.style.background = 'var(--bg-hover)';
    e.currentTarget.style.boxShadow = 'var(--glow-red-sm)';
  };
  const leave = e => {
    if (!interactive) return;
    e.currentTarget.style.borderColor = 'var(--border-default)';
    e.currentTarget.style.background = 'var(--bg-surface)';
    e.currentTarget.style.boxShadow = 'none';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: enter,
    onMouseLeave: leave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — a hairline rule. Horizontal by default; can carry a small
 * lowercase mono label centered on the line.
 */
function Divider({
  label,
  vertical = false,
  style,
  ...rest
}) {
  if (vertical) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        width: 1,
        alignSelf: 'stretch',
        background: 'var(--line-2)',
        ...style
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--line-2)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 300,
        fontSize: 'var(--size-2xs)',
        color: 'var(--muted-2)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--line-2)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      height: 1,
      background: 'var(--line-2)',
      width: '100%',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Divider.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the brand's signature section header.
 * A lowercase mono word, optionally numbered, sitting above content.
 * Derived directly from the source's "education / experience / projects"
 * <tt> labels.
 */
function SectionLabel({
  children,
  index,
  // optional two-digit index, e.g. "01"
  align = 'center',
  // 'left' | 'center'
  style,
  ...rest
}) {
  const wrap = {
    display: 'flex',
    alignItems: 'baseline',
    gap: 'var(--space-3)',
    justifyContent: align === 'center' ? 'center' : 'flex-start',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-light)',
    fontSize: 'var(--size-sm)',
    color: 'var(--text-primary)',
    letterSpacing: '0.02em',
    ...style
  };
  const num = {
    fontSize: 'var(--size-2xs)',
    color: 'var(--muted-2)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: num
  }, index), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProjectCard — a composed project entry: index, title, blurb, tech tags.
 * Fills the empty "projects" section from the source. Built on Card + Badge.
 */
function ProjectCard({
  index,
  // "01"
  title,
  blurb,
  tags = [],
  href,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: !!href,
    onClick: href ? () => window.open(href, '_blank') : undefined,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)'
    }
  }, index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 300,
      fontSize: 'var(--size-2xs)',
      color: 'var(--muted-2)'
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 300,
      fontSize: 'var(--size-md)',
      color: 'var(--paper-0)',
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-sm)'
    }
  }, "\u2197")), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 'var(--size-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--muted-1)'
    }
  }, blurb), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-1)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t
  }, t))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/SocialLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SocialLink — an icon link for the footer social row.
 * Derived from the source's LinkedIn / GitHub footer icons.
 * The icon dims to muted and charges to crimson on hover.
 */
function SocialLink({
  href,
  label,
  icon,
  // src for an <img> icon asset
  iconSize = 20,
  showLabel = false,
  style,
  ...rest
}) {
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    color: 'var(--muted-1)',
    textDecoration: 'none',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-light)',
    fontSize: 'var(--size-xs)',
    transition: 'color var(--dur-normal) ease, opacity var(--dur-normal) ease, filter var(--dur-normal) ease',
    opacity: 0.7,
    ...style
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: "_blank",
    rel: "noreferrer",
    "aria-label": label,
    title: label,
    style: wrap,
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
      e.currentTarget.style.color = 'var(--accent-red)';
      e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(255,36,80,0.55))';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.7;
      e.currentTarget.style.color = 'var(--muted-1)';
      e.currentTarget.style.filter = 'none';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    width: iconSize,
    height: iconSize,
    style: {
      display: 'block',
      objectFit: 'contain'
    }
  }), showLabel && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { SocialLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/SocialLink.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/EducationSection.jsx
try { (() => {
/* global React */
const {
  SectionLabel
} = window.BahaSatgunPortfolioDesignSystem_d181b5;

// EducationSection — the UQAM row, faithful to the source EducationBox.
function EducationSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "education"), /*#__PURE__*/React.createElement("a", {
    href: "https://uqam.ca/",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      textDecoration: 'none',
      color: 'var(--paper-0)',
      transition: 'color var(--dur-normal) ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--muted-2)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--paper-0)';
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo_uqam.jpg",
    alt: "UQAM",
    style: {
      width: 58,
      height: 34,
      objectFit: 'contain',
      borderRadius: 'var(--radius-3)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--size-md)'
    }
  }, "CS @ UQAM")));
}
window.EducationSection = EducationSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/EducationSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ExperienceSection.jsx
try { (() => {
/* global React */
const {
  SectionLabel,
  Card,
  Badge,
  Divider
} = window.BahaSatgunPortfolioDesignSystem_d181b5;
const ITEMS = [{
  role: 'teaching assistant',
  org: 'uqam · intro to programming',
  period: '2025 — now',
  note: 'Grading, lab hours, and gently un-breaking first-year loops.'
}, {
  role: 'freelance web dev',
  org: 'various small clients',
  period: '2024 — 2025',
  note: 'Static sites, a booking form, one very stubborn calendar widget.'
}];

// ExperienceSection — fills the source's empty "experience" scaffold
// with a stacked list of roles.
function ExperienceSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "experience"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, ITEMS.map((it, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 300,
      fontSize: 'var(--size-md)',
      color: 'var(--paper-0)'
    }
  }, it.role), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-2xs)',
      color: 'var(--muted-2)'
    }
  }, it.period)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--size-xs)',
      color: 'var(--muted-2)',
      marginTop: '4px'
    }
  }, it.org), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 'var(--size-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--muted-1)'
    }
  }, it.note)))));
}
window.ExperienceSection = ExperienceSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ExperienceSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
/* global React */
const {
  SocialLink,
  Divider
} = window.BahaSatgunPortfolioDesignSystem_d181b5;

// Footer — the social row, faithful to the source footer.
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SocialLink, {
    href: "https://www.linkedin.com/in/baha-satgun-31600a2b8/",
    label: "LinkedIn",
    icon: "../../assets/linkedin-square-icon.png",
    iconSize: 18
  }), /*#__PURE__*/React.createElement(SocialLink, {
    href: "https://github.com/bkfsss",
    label: "GitHub",
    icon: "../../assets/icons8-github-50.png",
    iconSize: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      color: 'var(--muted-3)'
    }
  }, "\xA9 2026 Baha Satgun"));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Header.jsx
try { (() => {
/* global React */
const {
  SectionLabel
} = window.BahaSatgunPortfolioDesignSystem_d181b5;

// Header — the name block. Matches the source: centered mono name,
// UQAM education row, serif tagline.
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: 'center',
      paddingTop: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--text-name)',
      fontSize: 'var(--size-lg)',
      color: 'var(--paper-0)',
      letterSpacing: '0.02em',
      textShadow: '0 0 14px rgba(255,36,80,0.45)'
    }
  }, "Baha Satgun"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 'var(--size-md)',
      color: 'var(--muted-1)',
      maxWidth: '42ch',
      lineHeight: 'var(--leading-normal)'
    }
  }, "Software engineering student. I write code, take photographs, passionate about ML and Finance and anything creative"));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/InterestsSection.jsx
try { (() => {
/* global React */
const {
  SectionLabel,
  Card,
  Badge
} = window.BahaSatgunPortfolioDesignSystem_d181b5;
const TAGS = ['film', 'photography', 'video games', 'machine learning', 'finance'];

// InterestsSection — personal interests + the Letterboxd link.
// Repoint the href to your own Letterboxd account.
function InterestsSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "interests"), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-4)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, TAGS.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("a", {
    href: "https://letterboxd.com/",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      textDecoration: 'none',
      fontFamily: 'var(--font-mono)',
      fontWeight: 300,
      fontSize: 'var(--size-md)',
      color: 'var(--paper-0)',
      borderTop: '1px solid var(--line-2)',
      paddingTop: 'var(--space-4)',
      transition: 'color var(--dur-normal) ease, text-shadow var(--dur-normal) ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--accent-red)';
      e.currentTarget.style.textShadow = 'var(--glow-red-text)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--paper-0)';
      e.currentTarget.style.textShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-red)'
    }
  }, "\u25B8"), "letterboxd", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted-2)',
      fontSize: 'var(--size-sm)'
    }
  }, "/your-handle"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      color: 'var(--accent-red)'
    }
  }, "\u2197")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 'var(--size-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--muted-1)'
    }
  }, "Films I've watched and rated \u2014 mostly sci-fi, noir, and anything with a good title sequence.")));
}
window.InterestsSection = InterestsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/InterestsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectsSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  SectionLabel,
  ProjectCard
} = window.BahaSatgunPortfolioDesignSystem_d181b5;
const PROJECTS = [{
  index: '01',
  title: 'frame-grabber',
  blurb: 'A CLI that pulls the sharpest still from any video clip — built for grabbing thumbnails from gameplay captures.',
  tags: ['python', 'opencv', 'ffmpeg'],
  href: 'https://github.com/bkfsss'
}, {
  index: '02',
  title: 'shutter-log',
  blurb: 'A tiny web app that reads EXIF from my photos and charts which focal lengths I actually use.',
  tags: ['react', 'exif', 'd3'],
  href: 'https://github.com/bkfsss'
}, {
  index: '03',
  title: 'coding-trainer',
  blurb: 'Spaced-repetition drills for data-structures interview prep.',
  tags: ['typescript', 'node'],
  href: 'https://github.com/bkfsss'
}];

// ProjectsSection — fills the source's empty "projects" scaffold.
function ProjectsSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.index
  }, p)))));
}
window.ProjectsSection = ProjectsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/TopNav.jsx
try { (() => {
/* global React */
const {
  Button
} = window.BahaSatgunPortfolioDesignSystem_d181b5;

// TopNav — a slim HUD-style header bar. Left: a crimson status dot + mono
// wordmark. Right: the Gallery + Resume buttons.
// Drop your resume at ui_kits/portfolio/resume.pdf (or repoint the href).
function TopNav() {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-5) 0 var(--space-4)',
      borderBottom: '1px solid var(--line-2)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 300,
      fontSize: 'var(--size-sm)',
      color: 'var(--paper-0)',
      textDecoration: 'none',
      letterSpacing: '0.02em',
      transition: 'color var(--dur-normal) ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--accent-red)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--paper-0)';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      background: 'var(--accent-red)',
      flex: 'none',
      boxShadow: 'var(--glow-red-sm)',
      animation: 'hudblink 1.8s steps(1) infinite'
    }
  }), "baha satgun"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    href: "photography.html",
    variant: "outline",
    size: "sm"
  }, "gallery"), /*#__PURE__*/React.createElement(Button, {
    href: "resume.pdf",
    variant: "solid",
    size: "sm",
    target: "_blank",
    rel: "noreferrer"
  }, "resume")), /*#__PURE__*/React.createElement("style", null, `@keyframes hudblink { 0%,60%{opacity:1} 61%,100%{opacity:0.25} }`));
}
window.TopNav = TopNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/TopNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.SocialLink = __ds_scope.SocialLink;

})();

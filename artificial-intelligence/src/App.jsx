import { useState, useEffect, useRef } from "react";
import {
    Brain, Code2, Briefcase, TrendingUp, Users, BookOpen,
    Globe, Star, CheckCircle, ArrowRight, ChevronRight,
    Monitor, Wifi, UserCheck, Rocket, Target, Award,
  MessageSquare, Mail, Phone, MapPin, Share2,
  Camera, Bird, Video, Menu, X, Zap,
    GraduationCap, Layers, BarChart3, Shield, Clock,
    Play, Sparkles, Building2, ExternalLink, Send,
    ChevronDown, CircuitBoard, Network, BotMessageSquare,
    BadgeCheck, Lightbulb, PenTool, HeartHandshake
} from "lucide-react";

/* ── FONTS ───────────────────────────────────────────────────────────────── */
const FontLoader = () => {
    useEffect(() => {
        const l = document.createElement("link");
        l.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,700;1,9..144,300;1,9..144,400&display=swap";
        l.rel = "stylesheet";
        document.head.appendChild(l);
    }, []);
    return null;
};

/* ── GLOBAL CSS ──────────────────────────────────────────────────────────── */
const CSS = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg:      #05070f;
  --bg2:     #080b17;
  --bg3:     #0c1020;
  --panel:   rgba(255,255,255,0.032);
  --blue:    #2563eb;
  --blue2:   #3b82f6;
  --cyan:    #06b6d4;
  --indigo:  #6366f1;
  --white:   #ffffff;
  --off:     #e2e8f6;
  --muted:   rgba(226,232,246,0.5);
  --dim:     rgba(226,232,246,0.28);
  --border:  rgba(255,255,255,0.072);
  --border2: rgba(255,255,255,0.13);
  --glow:    rgba(37,99,235,0.22);
  --ff-h: 'Plus Jakarta Sans', sans-serif;
  --ff-b: 'Plus Jakarta Sans', sans-serif;
  --ff-s: 'Fraunces', serif;
  --tr: 0.3s cubic-bezier(0.4,0,0.2,1);
  --r: 16px;
  --r2: 24px;
}
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--off);
  font-family: var(--ff-b);
  font-size: 16px;
  line-height: 1.65;
  overflow-x: hidden;
}
::selection { background: var(--blue); color: #fff; }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg2); }
::-webkit-scrollbar-thumb { background: var(--blue2); border-radius: 4px; }

/* KEYFRAMES */
@keyframes fadeUp  { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn  { from{opacity:0} to{opacity:1} }
@keyframes floatY  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
@keyframes pulse   { 0%,100%{opacity:.1;transform:scale(1)} 50%{opacity:.22;transform:scale(1.07)} }
@keyframes ripple  { 0%{transform:scale(.6);opacity:.5} 100%{transform:scale(2.6);opacity:0} }
@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
@keyframes spin    { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
@keyframes grid-pan{ 0%{background-position:0 0} 100%{background-position:64px 64px} }
@keyframes slideDown{ from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
@keyframes countUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
@keyframes shimmer {
  0%{background-position:-400px 0}
  100%{background-position:400px 0}
}

.fade-up { opacity:0; animation:fadeUp .85s ease forwards; }
.fade-in { opacity:0; animation:fadeIn .7s ease forwards; }

/* GRADIENT TEXT */
.g-blue {
  background: linear-gradient(125deg,#60a5fa,#818cf8,#38bdf8);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
}
.g-white {
  background: linear-gradient(125deg,#ffffff,#c7d7ff);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
}

/* TYPOGRAPHY */
.h-xl {
  font-family:var(--ff-h); font-weight:800;
  font-size:clamp(2.8rem,5.5vw,5rem);
  letter-spacing:-2px; line-height:.98;
}
.h-lg {
  font-family:var(--ff-h); font-weight:700;
  font-size:clamp(2rem,3.5vw,3.2rem);
  letter-spacing:-1.2px; line-height:1.08;
}
.h-md {
  font-family:var(--ff-h); font-weight:700;
  font-size:clamp(1.4rem,2.5vw,1.9rem);
  letter-spacing:-.5px; line-height:1.18;
}
.label-tag {
  font-size:.7rem; font-weight:700; letter-spacing:3px;
  text-transform:uppercase; color:var(--cyan);
  font-family:var(--ff-h);
}
.body-l { font-size:1.02rem; line-height:1.78; color:var(--muted); }
.body-m { font-size:.9rem; line-height:1.72; color:var(--dim); }

/* BUTTONS */
.btn-primary {
  display:inline-flex; align-items:center; gap:8px;
  background:var(--blue); color:#fff; border:none;
  padding:13px 28px; border-radius:100px; cursor:pointer;
  font-family:var(--ff-h); font-size:.88rem; font-weight:700;
  letter-spacing:.2px; transition:var(--tr); text-decoration:none;
  white-space:nowrap;
}
.btn-primary:hover { background:#1d4ed8; transform:translateY(-2px); box-shadow:0 8px 28px rgba(37,99,235,.4); }
.btn-outline {
  display:inline-flex; align-items:center; gap:8px;
  background:transparent; color:var(--off); border:1px solid var(--border2);
  padding:12px 26px; border-radius:100px; cursor:pointer;
  font-family:var(--ff-h); font-size:.88rem; font-weight:600;
  transition:var(--tr); text-decoration:none; white-space:nowrap;
}
.btn-outline:hover { background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.25); transform:translateY(-2px); }
.btn-ghost {
  display:inline-flex; align-items:center; gap:6px;
  background:none; border:none; color:var(--muted); cursor:pointer;
  font-family:var(--ff-h); font-size:.88rem; font-weight:500;
  transition:color var(--tr); padding:0; text-decoration:none;
}
.btn-ghost:hover { color:var(--off); }

/* GLASS */
.glass {
  background:var(--panel);
  border:1px solid var(--border);
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
}
.card-hover { transition:transform var(--tr),border-color var(--tr),box-shadow var(--tr); }
.card-hover:hover {
  transform:translateY(-5px);
  border-color:rgba(37,99,235,.35);
  box-shadow:0 16px 56px rgba(0,0,0,.45),0 0 0 1px rgba(37,99,235,.15);
}

/* NAV LINK */
.nav-a {
  background:none; border:none; color:var(--muted); cursor:pointer;
  font-family:var(--ff-h); font-size:.88rem; font-weight:500;
  transition:color var(--tr); padding:4px 0; text-decoration:none; display:inline-block;
}
.nav-a:hover,.nav-a.active { color:var(--off); }

/* MARQUEE */
.mq { overflow:hidden; }
.mq-t { animation:marquee 30s linear infinite; display:flex; width:max-content; }
.mq-t:hover { animation-play-state:paused; }

/* GRID BG */
.grid-bg {
  background-image:linear-gradient(rgba(255,255,255,.028) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.028) 1px,transparent 1px);
  background-size:60px 60px;
  animation:grid-pan 6s linear infinite;
}

/* FORM */
.f-input {
  width:100%; background:rgba(255,255,255,.05); border:1px solid var(--border);
  border-radius:12px; padding:13px 16px; font-family:var(--ff-h); font-size:.9rem;
  color:var(--off); outline:none; transition:border-color var(--tr);
}
.f-input:focus { border-color:var(--blue2); box-shadow:0 0 0 3px rgba(59,130,246,.12); }
.f-input::placeholder { color:var(--dim); }
textarea.f-input { resize:vertical; min-height:110px; }
select.f-input { appearance:none; cursor:pointer; }

/* DIVIDER */
.divider { height:1px; background:linear-gradient(90deg,transparent,var(--border2),transparent); }

/* STAT CARD */
.stat-card { border:1px solid var(--border); border-radius:var(--r2); padding:32px 28px; text-align:center; transition:var(--tr); }
.stat-card:hover { border-color:rgba(37,99,235,.3); background:rgba(37,99,235,.06); }

/* NOISE */
body::after {
  content:''; position:fixed; inset:0; pointer-events:none; z-index:9999;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.03'/%3E%3C/svg%3E");
  opacity:.45;
}

/* MOBILE MENU */
.mobile-nav { animation:slideDown .25s ease forwards; }

/* ACCORDION */
.acc-body { overflow:hidden; transition:max-height .45s cubic-bezier(0.4,0,0.2,1),opacity .35s ease; }
`;

const StyleInject = () => {
    useEffect(() => {
        const s = document.createElement("style");
        s.textContent = CSS;
        document.head.appendChild(s);
        return () => document.head.removeChild(s);
    }, []);
    return null;
};

/* ── DATA ────────────────────────────────────────────────────────────────── */
const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Solutions", href: "#solutions" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
];

const COURSES = [
    { Icon: Brain, title: "Artificial Intelligence", desc: "Dive into machine learning, prompt engineering, automation tools, and real-world AI applications.", color: "#6366f1", tag: "Most Popular" },
    { Icon: Briefcase, title: "Freelancing Mastery", desc: "Master Upwork, Fiverr, and LinkedIn. Learn proposals, client communication, and scaling your income.", color: "#2563eb", tag: "Top Rated" },
    { Icon: Code2, title: "IT & Communication", desc: "Boost your IT proficiency and professional communication to stand out in a competitive job market.", color: "#06b6d4", tag: "" },
    { Icon: TrendingUp, title: "Stock & Forex Trading", desc: "Build a solid foundation in trading for financial independence. Learn technical analysis and strategies.", color: "#10b981", tag: "" },
];

const SERVICES = [
    { Icon: Code2, title: "Custom Development", desc: "We build tailored web and software applications that enhance efficiency and drive measurable business growth. From idea to deployment — we handle it all.", color: "#6366f1" },
    { Icon: Users, title: "Staff Augmentation", desc: "Scale your team with skilled contract professionals for remote and hybrid setups. Full-time or part-time, onsite or remote — flexible to your needs.", color: "#2563eb" },
    { Icon: Monitor, title: "Online Courses", desc: "Learn from expert instructors at your own pace. Our online courses are designed to provide a comprehensive, structured experience from day one.", color: "#06b6d4" },
    { Icon: Rocket, title: "Business Development", desc: "Grow your presence on Upwork and LinkedIn. We specialise in lead generation, proposal optimisation, and closing deals that matter.", color: "#10b981" },
];

const TESTIMONIALS = [
    { text: "Artificial Learning transformed my career! I secured my first remote job within a month!", name: "Aisha K.", role: "Remote Developer" },
    { text: "The freelancing course helped me get my first international client. Highly recommend!", name: "Rajesh M.", role: "Freelance Designer" },
    { text: "Thanks to Artificial Learning, I now run my own digital agency managing a team of freelancers.", name: "Shreya A.", role: "Agency Founder" },
    { text: "I learned the secrets of Upwork success. Today, I'm Top-Rated with long-term clients.", name: "Abhi A.", role: "Upwork Top Rated" },
    { text: "I get high-paying projects on Upwork and Fiverr. Now I work remotely with financial independence.", name: "Simran V.", role: "Freelance Marketer" },
    { text: "Within two weeks of the freelancing course, I got my first client. Now I earn consistently.", name: "Arushi K.", role: "Content Strategist" },
];

const STATS = [
    { Icon: BookOpen, num: "10+", label: "Courses Available" },
    { Icon: Award, num: "60+", label: "Industry Experts" },
    { Icon: GraduationCap, num: "350+", label: "Successful Learners" },
    { Icon: Clock, num: "10+", label: "Years of Excellence" },
    { Icon: Layers, num: "30+", label: "Live Projects" },
];

const WHY = [
    { Icon: Target, title: "Goal-Oriented Curriculum", desc: "Every course is built around real outcomes — a job, a client, a business." },
    { Icon: UserCheck, title: "Expert Mentors", desc: "Learn from professionals with years of industry experience and real credentials." },
    { Icon: HeartHandshake, title: "Career Support", desc: "Resume building, interview prep, and placement guidance included." },
    { Icon: Globe, title: "Global Opportunities", desc: "We help you access international clients, platforms, and markets." },
];

const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ── NAVBAR ──────────────────────────────────────────────────────────────── */
const Navbar = ({ page, setPage }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    return (
        <>
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
                padding: "0 40px",
                background: scrolled ? "rgba(5,7,15,.92)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid var(--border)" : "none",
                transition: "all .38s ease",
            }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
                    {/* Logo */}
                    <button onClick={() => setPage("home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
                        <div style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,#2563eb,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 18px rgba(99,102,241,.4)" }}>
                            <CircuitBoard size={17} color="#fff" strokeWidth={2} />
                        </div>
                        <div>
                            <div style={{ fontFamily: "var(--ff-h)", fontWeight: 800, fontSize: ".92rem", color: "var(--off)", letterSpacing: "-.3px", lineHeight: 1 }}>Artificial</div>
                            <div style={{ fontFamily: "var(--ff-h)", fontWeight: 800, fontSize: ".92rem", background: "linear-gradient(90deg,#60a5fa,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-.3px", lineHeight: 1 }}>Learning</div>
                        </div>
                    </button>

                    {/* Desktop nav */}
                    <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
                        {NAV_LINKS.map(({ label, href }) => (
                            <button key={label} className={`nav-a ${page === label.toLowerCase() ? "active" : ""}`}
                                onClick={() => { setPage(label.toLowerCase()); scrollTo(href); }}>
                                {label}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <button className="btn-ghost" onClick={() => setPage("login")} style={{ fontSize: ".85rem" }}>Log In</button>
                        <button className="btn-primary" style={{ padding: "9px 20px", fontSize: ".84rem" }} onClick={() => scrollTo("#solutions")}>Get Started</button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="mobile-nav glass" style={{ position: "fixed", top: 68, left: 0, right: 0, zIndex: 999, padding: "24px 40px", borderBottom: "1px solid var(--border)" }}>
                    {NAV_LINKS.map(({ label, href }) => (
                        <div key={label} style={{ padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                            <button className="nav-a" onClick={() => { scrollTo(href); setMenuOpen(false); }}>{label}</button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

/* ── FOOTER ──────────────────────────────────────────────────────────────── */
const Footer = () => {
    const cols = [
        { heading: "Explore", links: [["Home", "#home"], ["About", "#about"], ["Blog", "#blog"], ["Careers", "#"]] },
        { heading: "Envision", links: [["Solutions", "#solutions"], ["Services", "#services"], ["Meet Experts", "#"], ["Contact", "#contact"]] },
        { heading: "Innovate", links: [["AI Courses", "#solutions"], ["Freelancing", "#solutions"], ["Trading", "#solutions"], ["IT Skills", "#solutions"]] },
    ];
    const socials = [{ Icon: Share2, href: "#" }, { Icon: Camera, href: "#" }, { Icon: Bird, href: "#" }, { Icon: Video, href: "#" }];
    return (
        <footer id="contact" style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "72px 40px 36px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 56, marginBottom: 56 }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                            <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg,#2563eb,#6366f1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <CircuitBoard size={15} color="#fff" strokeWidth={2} />
                            </div>
                            <div>
                                <div style={{ fontFamily: "var(--ff-h)", fontWeight: 800, fontSize: ".88rem", color: "var(--off)", lineHeight: 1 }}>Artificial Learning</div>
                            </div>
                        </div>
                        <p className="body-m" style={{ maxWidth: 270, marginBottom: 22, lineHeight: 1.8 }}>From Learning to Earning — your global success starts here. Indore, IN 452016.</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                            {[[Phone, "+91 9202527153"], [Mail, "artificiallearning1@gmail.com"], [MapPin, "Indore, IN 452016"]].map(([Icon, val]) => (
                                <div key={val} style={{ display: "flex", gap: 9, alignItems: "center" }}>
                                    <Icon size={13} color="var(--blue2)" strokeWidth={2} />
                                    <span style={{ fontSize: ".82rem", color: "var(--muted)" }}>{val}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: "flex", gap: 10 }}>
                            {socials.map(({ Icon, href }) => (
                                <a key={href + Math.random()} href={href} style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(255,255,255,.05)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .3s", textDecoration: "none" }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(37,99,235,.4)"; e.currentTarget.style.background = "rgba(37,99,235,.12)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "rgba(255,255,255,.05)"; }}>
                                    <Icon size={13} color="var(--muted)" strokeWidth={1.8} />
                                </a>
                            ))}
                        </div>
                    </div>
                    {cols.map(col => (
                        <div key={col.heading}>
                            <h4 style={{ fontFamily: "var(--ff-h)", fontSize: ".68rem", letterSpacing: "2.5px", textTransform: "uppercase", color: "var(--dim)", fontWeight: 700, marginBottom: 18 }}>{col.heading}</h4>
                            {col.links.map(([label, href]) => (
                                <div key={label} style={{ marginBottom: 10 }}>
                                    <a href={href} onClick={e => { if (href.startsWith("#") && href.length > 1) { e.preventDefault(); scrollTo(href); } }}
                                        style={{ color: "var(--muted)", textDecoration: "none", fontSize: ".87rem", transition: "color .3s" }}
                                        onMouseEnter={e => e.target.style.color = "var(--off)"}
                                        onMouseLeave={e => e.target.style.color = "var(--muted)"}>{label}</a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {/* Newsletter */}
                <div className="glass" style={{ borderRadius: 20, padding: "32px 36px", marginBottom: 40, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
                    <div>
                        <h4 style={{ fontFamily: "var(--ff-h)", fontSize: "1rem", fontWeight: 700, marginBottom: 4, color: "var(--off)" }}>Meet our experts</h4>
                        <p className="body-m" style={{ fontSize: ".82rem" }}>Get personalised course recommendations from our mentors.</p>
                    </div>
                    <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
                        <input className="f-input" placeholder="Enter your email" style={{ width: 260, padding: "10px 16px", fontSize: ".85rem" }} />
                        <button className="btn-primary" style={{ padding: "10px 20px" }}>
                            <Send size={14} />Submit
                        </button>
                    </div>
                </div>
                <div className="divider" style={{ marginBottom: 24 }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ color: "var(--dim)", fontSize: ".76rem" }}>© 2025 Artificial Learning. All rights reserved.</p>
                    <p style={{ color: "var(--dim)", fontSize: ".76rem", fontFamily: "var(--ff-s)", fontStyle: "italic" }}>From Local to Global.</p>
                </div>
            </div>
        </footer>
    );
};

/* ── PAGE: HOME ──────────────────────────────────────────────────────────── */
const HomePage = () => {
    const [reviewIdx, setReviewIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setReviewIdx(i => (i + 1) % TESTIMONIALS.length), 4500);
        return () => clearInterval(t);
    }, []);

    return (
        <div>
            {/* HERO */}
            <section id="home" style={{
                minHeight: "100vh", display: "flex", alignItems: "center",
                position: "relative", overflow: "hidden", paddingTop: 68,
                background: "radial-gradient(ellipse 75% 60% at 65% 42%, rgba(99,102,241,.12), transparent 65%), radial-gradient(ellipse 50% 40% at 20% 70%, rgba(6,182,212,.07), transparent 60%), var(--bg)",
            }}>
                <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: .7, pointerEvents: "none" }} />
                {/* Ambient rings */}
                {[700, 500, 340].map((s, i) => (
                    <div key={i} style={{ position: "absolute", left: "65%", top: "52%", transform: "translate(-50%,-50%)", width: s, height: s, borderRadius: "50%", border: `1px solid rgba(99,102,241,${.05 - i * .012})`, animation: `pulse ${5 + i * 1.3}s ease-in-out ${i * .9}s infinite`, pointerEvents: "none" }} />
                ))}
                {/* Floating tags */}
                {[
                    { label: "AI & Machine Learning", Icon: Brain, x: "58%", y: "20%", d: 0, c: "#6366f1" },
                    { label: "Freelancing Mastery", Icon: Briefcase, x: "76%", y: "38%", d: .8, c: "#2563eb" },
                    { label: "Live Projects", Icon: Layers, x: "52%", y: "72%", d: 1.5, c: "#06b6d4" },
                    { label: "350+ Learners", Icon: GraduationCap, x: "83%", y: "58%", d: 2.1, c: "#10b981" },
                ].map((p, i) => (
                    <div key={i} style={{
                        position: "absolute", left: p.x, top: p.y,
                        background: `${p.c}12`, border: `1px solid ${p.c}38`,
                        backdropFilter: "blur(12px)", borderRadius: 100,
                        padding: "7px 14px 7px 10px", display: "flex", alignItems: "center", gap: 7,
                        fontSize: ".75rem", fontFamily: "var(--ff-h)", fontWeight: 500,
                        color: "rgba(226,232,246,.75)", whiteSpace: "nowrap",
                        animation: `floatY ${5 + i * .5}s ease-in-out ${p.d}s infinite`,
                        pointerEvents: "none", zIndex: 2,
                    }}>
                        <div style={{ position: "absolute", inset: -1, borderRadius: 100, border: `1px solid ${p.c}38`, animation: "ripple 3s ease-out infinite" }} />
                        <p.Icon size={13} color={p.c} strokeWidth={2} />
                        {p.label}
                    </div>
                ))}

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 72, alignItems: "center", width: "100%", position: "relative", zIndex: 3 }}>
                    <div>
                        <div className="fade-up" style={{ animationDelay: ".05s", marginBottom: 24 }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: ".76rem", background: "rgba(99,102,241,.12)", border: "1px solid rgba(99,102,241,.25)", borderRadius: 100, padding: "5px 14px", color: "#a5b4fc", fontFamily: "var(--ff-h)", fontWeight: 600 }}>
                                <Sparkles size={12} strokeWidth={2} />
                                AI-Powered Learning Platform · Indore
                            </span>
                        </div>
                        <h1 className="h-xl fade-up" style={{ marginBottom: 20, animationDelay: ".15s" }}>
                            From Learning<br />to <span className="g-blue">Earning.</span><br />
                            <span style={{ fontFamily: "var(--ff-s)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(2rem,4vw,3.8rem)", color: "var(--muted)" }}>Your Success Starts Here.</span>
                        </h1>
                        <p className="body-l fade-up" style={{ maxWidth: 460, marginBottom: 36, animationDelay: ".26s" }}>
                            Industry-relevant online and offline courses in AI, Freelancing, IT, and Trading — designed to help students, professionals, and housewives achieve their goals globally.
                        </p>
                        <div className="fade-up" style={{ display: "flex", gap: 12, marginBottom: 44, animationDelay: ".36s" }}>
                            <button className="btn-primary" onClick={() => scrollTo("#solutions")}>
                                Explore Courses <ArrowRight size={15} />
                            </button>
                            <button className="btn-outline" onClick={() => scrollTo("#about")}>
                                Learn More
                            </button>
                        </div>
                        <div className="fade-up" style={{ display: "flex", gap: 32, animationDelay: ".46s" }}>
                            {[{ n: "350+", l: "Learners" }, { n: "60+", l: "Experts" }, { n: "10+", l: "Courses" }].map(({ n, l }) => (
                                <div key={l}>
                                    <div style={{ fontFamily: "var(--ff-h)", fontSize: "1.4rem", fontWeight: 800, color: "var(--off)" }}>{n}</div>
                                    <div style={{ fontSize: ".72rem", color: "var(--dim)" }}>{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Hero visual */}
                    <div className="fade-in" style={{ display: "flex", justifyContent: "center", animationDelay: ".28s" }}>
                        <HeroVisual />
                    </div>
                </div>
            </section>

            {/* MARQUEE */}
            <div style={{ background: "linear-gradient(135deg,#0c1023,#0f1428)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "13px 0", overflow: "hidden" }}>
                <div className="mq-t">
                    {[...Array(2)].flatMap(() => ["AI & Machine Learning", "Freelancing Mastery", "IT & Communication", "Stock & Forex Trading", "Global Opportunities", "350+ Success Stories", "10+ Years of Excellence", "Live Projects"].map((t, i) => (
                        <span key={t + i} style={{ fontFamily: "var(--ff-h)", fontSize: ".8rem", fontWeight: 600, padding: "0 42px", whiteSpace: "nowrap", color: "#93c5fd", letterSpacing: ".5px" }}>
                            {t} <span style={{ opacity: .3, margin: "0 8px" }}>◆</span>
                        </span>
                    )))}
                </div>
            </div>

            {/* ABOUT STRIP */}
            <section id="about" style={{ padding: "112px 40px", background: "var(--bg)" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                    <div>
                        <p className="label-tag" style={{ marginBottom: 14 }}>About Us</p>
                        <h2 className="h-lg" style={{ marginBottom: 20 }}>
                            Learn, Innovate,<br /><span className="g-blue">Succeed — Worldwide.</span>
                        </h2>
                        <p className="body-l" style={{ marginBottom: 20 }}>
                            At Artificial Learning, we provide industry-relevant online and offline courses designed to equip students, professionals, and housewives with in-demand skills for career growth.
                        </p>
                        <p className="body-l" style={{ marginBottom: 32 }}>
                            Whether you're aiming to land a high-paying job, launch a freelancing career, or start your own business, our expertly designed programs help you achieve your goals — locally and globally.
                        </p>
                        <button className="btn-outline" onClick={() => scrollTo("#about-full")}>
                            Our Story <ChevronRight size={15} />
                        </button>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                        {WHY.map(({ Icon, title, desc }, i) => (
                            <div key={i} className="glass card-hover" style={{ padding: "28px 22px", borderRadius: 18 }}>
                                <div style={{ width: 44, height: 44, borderRadius: 13, background: "rgba(37,99,235,.15)", border: "1px solid rgba(37,99,235,.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                                    <Icon size={20} color="#60a5fa" strokeWidth={1.8} />
                                </div>
                                <h4 style={{ fontFamily: "var(--ff-h)", fontSize: ".9rem", fontWeight: 700, marginBottom: 7, color: "var(--off)" }}>{title}</h4>
                                <p className="body-m" style={{ fontSize: ".8rem", lineHeight: 1.65 }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COURSES */}
            <section id="solutions" style={{ padding: "112px 40px", background: "var(--bg2)" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 72 }}>
                        <p className="label-tag" style={{ marginBottom: 14 }}>Our Solutions</p>
                        <h2 className="h-lg">Courses Designed to<br /><span className="g-blue">Transform Careers</span></h2>
                        <p className="body-l" style={{ maxWidth: 520, margin: "16px auto 0" }}>From AI to freelancing, each course is built around a real outcome — a job, a client, or a business.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
                        {COURSES.map(({ Icon, title, desc, color, tag }, i) => (
                            <div key={i} className="glass card-hover" style={{ borderRadius: 22, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
                                {tag && (
                                    <div style={{ position: "absolute", top: 20, right: 20, background: `${color}22`, border: `1px solid ${color}44`, borderRadius: 100, padding: "3px 11px", fontSize: ".68rem", fontWeight: 700, color, fontFamily: "var(--ff-h)" }}>{tag}</div>
                                )}
                                <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                                    <div style={{ width: 56, height: 56, borderRadius: 16, background: `${color}18`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <Icon size={24} color={color} strokeWidth={1.8} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontFamily: "var(--ff-h)", fontSize: "1.12rem", fontWeight: 700, marginBottom: 10, color: "var(--off)", letterSpacing: "-.3px" }}>{title}</h3>
                                        <p className="body-m" style={{ lineHeight: 1.72 }}>{desc}</p>
                                        <button className="btn-ghost" style={{ marginTop: 18, color: color, fontSize: ".84rem" }} onClick={() => scrollTo("#solutions")}>
                                            Learn more <ArrowRight size={13} />
                                        </button>
                                    </div>
                                </div>
                                <div style={{ position: "absolute", bottom: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: `${color}08`, border: `1px solid ${color}12`, pointerEvents: "none" }} />
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: "center", marginTop: 44 }}>
                        <button className="btn-primary" style={{ padding: "14px 34px" }} onClick={() => scrollTo("#contact")}>
                            Get Started Today <ArrowRight size={15} />
                        </button>
                    </div>
                </div>
            </section>

            {/* STATS */}
            <section style={{ padding: "80px 40px", background: "var(--bg)" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
                    {STATS.map(({ Icon, num, label }, i) => (
                        <div key={i} className="stat-card">
                            <Icon size={22} color="#60a5fa" strokeWidth={1.8} style={{ margin: "0 auto 12px", display: "block" }} />
                            <div style={{ fontFamily: "var(--ff-h)", fontSize: "2.2rem", fontWeight: 800, color: "var(--off)", lineHeight: 1, marginBottom: 6 }}>{num}</div>
                            <div style={{ fontSize: ".76rem", color: "var(--dim)", fontWeight: 500 }}>{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section style={{ padding: "112px 40px", background: "var(--bg2)" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <p className="label-tag" style={{ marginBottom: 14 }}>Testimonials</p>
                        <h2 className="h-lg">What Our<br /><span className="g-blue">Learners Say</span></h2>
                    </div>
                    {/* Featured */}
                    <div style={{ maxWidth: 760, margin: "0 auto 44px" }}>
                        <div className="glass" style={{ borderRadius: 26, padding: "48px 52px", textAlign: "center", position: "relative" }}>
                            <div style={{ position: "absolute", top: 20, left: 40, fontFamily: "serif", fontSize: "6rem", color: "rgba(99,102,241,.08)", lineHeight: 1 }}>"</div>
                            <div style={{ display: "flex", justifyContent: "center", gap: 3, marginBottom: 20 }}>
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />)}
                            </div>
                            <p style={{ fontFamily: "var(--ff-s)", fontStyle: "italic", fontSize: "1.22rem", lineHeight: 1.68, color: "rgba(226,232,246,.88)", marginBottom: 28, position: "relative", zIndex: 1 }}>
                                "{TESTIMONIALS[reviewIdx].text}"
                            </p>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(37,99,235,.2)", border: "1px solid rgba(37,99,235,.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ff-h)", fontWeight: 700, fontSize: ".82rem", color: "#93c5fd" }}>
                                    {TESTIMONIALS[reviewIdx].name[0]}
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <div style={{ fontFamily: "var(--ff-h)", fontWeight: 700, fontSize: ".9rem", color: "var(--off)" }}>{TESTIMONIALS[reviewIdx].name}</div>
                                    <div style={{ fontSize: ".72rem", color: "var(--dim)" }}>{TESTIMONIALS[reviewIdx].role}</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
                            {TESTIMONIALS.map((_, i) => (
                                <button key={i} onClick={() => setReviewIdx(i)} style={{ width: i === reviewIdx ? 20 : 7, height: 7, borderRadius: 4, background: i === reviewIdx ? "var(--blue2)" : "rgba(255,255,255,.14)", border: "none", cursor: "pointer", transition: "all .3s", padding: 0 }} />
                            ))}
                        </div>
                    </div>
                    {/* Grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
                        {TESTIMONIALS.map((t, i) => (
                            <button key={i} onClick={() => setReviewIdx(i)} className="glass" style={{
                                padding: "20px 18px", cursor: "pointer", borderRadius: 16, textAlign: "left",
                                border: `1px solid ${i === reviewIdx ? "rgba(37,99,235,.35)" : "var(--border)"}`,
                                background: i === reviewIdx ? "rgba(37,99,235,.07)" : "var(--panel)",
                                opacity: i === reviewIdx ? 1 : .45, transition: "all .3s",
                            }}>
                                <div style={{ display: "flex", gap: 3, marginBottom: 8 }}>
                                    {[...Array(5)].map((_, j) => <Star key={j} size={10} fill="#fbbf24" color="#fbbf24" />)}
                                </div>
                                <p style={{ fontSize: ".75rem", color: "var(--muted)", lineHeight: 1.55, marginBottom: 10, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>"{t.text}"</p>
                                <div style={{ fontFamily: "var(--ff-h)", fontSize: ".7rem", fontWeight: 700, color: "var(--off)" }}>{t.name}</div>
                                <div style={{ fontSize: ".65rem", color: "var(--dim)" }}>{t.role}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" style={{ padding: "112px 40px", background: "var(--bg)" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 72 }}>
                        <p className="label-tag" style={{ marginBottom: 14 }}>Our Services</p>
                        <h2 className="h-lg">Beyond Courses —<br /><span className="g-blue">End-to-End Support</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
                        {SERVICES.map(({ Icon, title, desc, color }, i) => (
                            <div key={i} className="glass card-hover" style={{ borderRadius: 22, padding: "36px 34px" }}>
                                <div style={{ width: 52, height: 52, borderRadius: 15, background: `${color}15`, border: `1px solid ${color}2a`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                                    <Icon size={22} color={color} strokeWidth={1.8} />
                                </div>
                                <h3 style={{ fontFamily: "var(--ff-h)", fontSize: "1.08rem", fontWeight: 700, marginBottom: 12, color: "var(--off)" }}>{title}</h3>
                                <p className="body-m" style={{ lineHeight: 1.75 }}>{desc}</p>
                                <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6 }}>
                                    <div style={{ width: 28, height: 2, background: color, borderRadius: 1 }} />
                                    <span style={{ fontSize: ".72rem", color, fontFamily: "var(--ff-h)", fontWeight: 600 }}>Learn more</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "100px 40px", background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,.1), transparent 70%)", pointerEvents: "none" }} />
                {[600, 420].map((s, i) => (
                    <div key={i} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: s, height: s, borderRadius: "50%", border: `1px solid rgba(37,99,235,${.05 - i * .015})`, animation: `pulse ${5 + i * 1.5}s ease-in-out ${i}s infinite`, pointerEvents: "none" }} />
                ))}
                <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                    <p className="label-tag" style={{ marginBottom: 18 }}>Ready to Begin?</p>
                    <h2 className="h-lg" style={{ marginBottom: 18 }}>Shape Your Future.<br /><span className="g-blue">From Local to Global.</span></h2>
                    <p className="body-l" style={{ maxWidth: 460, margin: "0 auto 40px" }}>Take the first step towards a successful career. Join hundreds of learners who've transformed their lives with Artificial Learning.</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
                        <button className="btn-primary" style={{ padding: "14px 34px" }} onClick={() => scrollTo("#solutions")}>
                            Get Started <ArrowRight size={15} />
                        </button>
                        <button className="btn-outline" onClick={() => scrollTo("#contact")}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

/* ── HERO VISUAL ─────────────────────────────────────────────────────────── */
const HeroVisual = () => (
    <div style={{ position: "relative", width: 380, height: 380 }}>
        {/* Central orb */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,.25) 0%, rgba(37,99,235,.12) 50%, transparent 75%)", border: "1px solid rgba(99,102,241,.25)", boxShadow: "0 0 60px rgba(99,102,241,.2), inset 0 0 30px rgba(99,102,241,.1)", display: "flex", alignItems: "center", justifyContent: "center", animation: "floatY 4s ease-in-out infinite" }}>
            <CircuitBoard size={48} color="#818cf8" strokeWidth={1.2} />
        </div>
        {/* Orbit ring */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 280, height: 280, borderRadius: "50%", border: "1px dashed rgba(99,102,241,.2)", animation: "spin 22s linear infinite" }}>
            {[{ Icon: Brain, angle: 0, c: "#6366f1" }, { Icon: Briefcase, angle: 90, c: "#2563eb" }, { Icon: TrendingUp, angle: 180, c: "#06b6d4" }, { Icon: GraduationCap, angle: 270, c: "#10b981" }].map(({ Icon, angle, c }, i) => {
                const rad = (angle * Math.PI) / 180;
                return (
                    <div key={i} style={{ position: "absolute", left: `calc(50% + ${140 * Math.cos(rad)}px)`, top: `calc(50% + ${140 * Math.sin(rad)}px)`, transform: "translate(-50%,-50%)", width: 42, height: 42, borderRadius: "50%", background: `${c}22`, border: `1px solid ${c}44`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={17} color={c} strokeWidth={2} />
                    </div>
                );
            })}
        </div>
        {/* Outer ring */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(37,99,235,.1)" }} />
        {/* Stats floating */}
        <div className="glass" style={{ position: "absolute", bottom: 20, left: 0, borderRadius: 14, padding: "12px 16px", border: "1px solid rgba(37,99,235,.25)" }}>
            <div style={{ fontFamily: "var(--ff-h)", fontWeight: 800, fontSize: "1.3rem", color: "#60a5fa" }}>350+</div>
            <div style={{ fontSize: ".7rem", color: "var(--dim)" }}>Successful Learners</div>
        </div>
        <div className="glass" style={{ position: "absolute", top: 20, right: 0, borderRadius: 14, padding: "12px 16px", border: "1px solid rgba(99,102,241,.25)" }}>
            <div style={{ fontFamily: "var(--ff-h)", fontWeight: 800, fontSize: "1.3rem", color: "#a5b4fc" }}>60+</div>
            <div style={{ fontSize: ".7rem", color: "var(--dim)" }}>Industry Experts</div>
        </div>
    </div>
);

/* ── PAGE: ABOUT ─────────────────────────────────────────────────────────── */
const AboutPage = () => (
    <div style={{ paddingTop: 68 }}>
        <section style={{ padding: "110px 40px 80px", background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(37,99,235,.1), transparent 65%), var(--bg)", textAlign: "center" }}>
            <p className="label-tag" style={{ marginBottom: 16 }}>About Artificial Learning</p>
            <h1 className="h-xl" style={{ marginBottom: 20 }}>Learn, Innovate,<br /><span className="g-blue">Succeed — Worldwide.</span></h1>
            <p className="body-l" style={{ maxWidth: 580, margin: "0 auto" }}>Dedicated to helping students, housewives, and professionals of all ages kickstart and accelerate their careers.</p>
        </section>
        <section id="about-full" style={{ padding: "80px 40px", background: "var(--bg2)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
                <div>
                    <p className="label-tag" style={{ marginBottom: 14 }}>Our Story</p>
                    <h2 className="h-md" style={{ marginBottom: 20 }}>Where It All Began</h2>
                    <p className="body-l" style={{ marginBottom: 16 }}>Welcome to Artificial Learning! We are dedicated to helping students, housewives, and individuals of all ages kickstart their careers.</p>
                    <p className="body-l">Our advanced courses are meticulously designed to enhance your skills and meet market standards. From technical training to freelancing courses, we empower you to seize international project opportunities and thrive in your professional journey.</p>
                </div>
                <div>
                    <p className="label-tag" style={{ marginBottom: 14 }}>Our Vision</p>
                    <h2 className="h-md" style={{ marginBottom: 20 }}>Bridging Talent & Opportunity</h2>
                    <p className="body-l" style={{ marginBottom: 16 }}>At Artificial Learning, we strive to bridge the gap between talent and opportunity. Our mission is to empower students, professionals, and individuals from all walks of life with cutting-edge skills in IT and development.</p>
                    <p className="body-l">Whether you seek technical expertise or freelancing mastery, we provide the tools and guidance needed to succeed. Join us and take your career to the next level.</p>
                </div>
            </div>
        </section>
        <section style={{ padding: "80px 40px 100px", background: "var(--bg)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <p className="label-tag" style={{ marginBottom: 14 }}>Why Choose Us</p>
                    <h2 className="h-lg">Built for <span className="g-blue">Real Results</span></h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
                    {WHY.map(({ Icon, title, desc }, i) => (
                        <div key={i} className="glass card-hover" style={{ borderRadius: 20, padding: "30px 24px" }}>
                            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(37,99,235,.12)", border: "1px solid rgba(37,99,235,.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                                <Icon size={22} color="#60a5fa" strokeWidth={1.8} />
                            </div>
                            <h4 style={{ fontFamily: "var(--ff-h)", fontSize: ".9rem", fontWeight: 700, marginBottom: 8, color: "var(--off)" }}>{title}</h4>
                            <p className="body-m" style={{ fontSize: ".82rem" }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

/* ── PAGE: SOLUTIONS ─────────────────────────────────────────────────────── */
const SolutionsPage = () => (
    <div style={{ paddingTop: 68 }}>
        <section style={{ padding: "110px 40px 80px", background: "radial-gradient(ellipse 65% 50% at 50% 40%, rgba(99,102,241,.1), transparent 65%), var(--bg)", textAlign: "center" }}>
            <p className="label-tag" style={{ marginBottom: 16 }}>Our Solutions</p>
            <h1 className="h-xl" style={{ marginBottom: 20 }}>Empower Your Future<br /><span className="g-blue">with Artificial Learning</span></h1>
            <p className="body-l" style={{ maxWidth: 580, margin: "0 auto" }}>Online and offline courses tailored for your success — designed to help you crack interviews, secure high-paying jobs, or launch a business.</p>
        </section>
        <section style={{ padding: "80px 40px 100px", background: "var(--bg2)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 72 }}>
                    {COURSES.map(({ Icon, title, desc, color, tag }, i) => (
                        <div key={i} className="glass card-hover" style={{ borderRadius: 24, padding: "40px 36px", position: "relative", overflow: "hidden" }}>
                            {tag && <div style={{ position: "absolute", top: 22, right: 22, background: `${color}20`, border: `1px solid ${color}40`, borderRadius: 100, padding: "3px 11px", fontSize: ".68rem", fontWeight: 700, color }}>{tag}</div>}
                            <div style={{ width: 58, height: 58, borderRadius: 17, background: `${color}18`, border: `1px solid ${color}28`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                                <Icon size={26} color={color} strokeWidth={1.7} />
                            </div>
                            <h2 style={{ fontFamily: "var(--ff-h)", fontSize: "1.18rem", fontWeight: 700, marginBottom: 12, color: "var(--off)" }}>{title}</h2>
                            <p className="body-m" style={{ lineHeight: 1.78, marginBottom: 24 }}>{desc}</p>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                                {["Beginner to Advanced Levels", "Live Mentorship Sessions", "Certificate of Completion", "Job / Client Placement Support"].map((f, j) => (
                                    <li key={j} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                        <CheckCircle size={14} color={color} strokeWidth={2} style={{ flexShrink: 0 }} />
                                        <span style={{ fontSize: ".85rem", color: "var(--muted)" }}>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="btn-primary" style={{ marginTop: 28, background: color, padding: "11px 24px", fontSize: ".84rem" }}>
                                Enrol Now <ArrowRight size={14} />
                            </button>
                            <div style={{ position: "absolute", bottom: -40, right: -40, width: 140, height: 140, borderRadius: "50%", background: `${color}07`, border: `1px solid ${color}10`, pointerEvents: "none" }} />
                        </div>
                    ))}
                </div>
                {/* Learning approach */}
                <div style={{ textAlign: "center", marginBottom: 48 }}>
                    <p className="label-tag" style={{ marginBottom: 14 }}>The Artificial Learning Approach</p>
                    <h2 className="h-lg">Personalised. <span className="g-blue">Expert-Led. Results-First.</span></h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
                    {[
                        { Icon: Sparkles, title: "Personalised Experience", desc: "Courses tailored to your pace, goals, and background." },
                        { Icon: UserCheck, title: "Expert Guidance", desc: "Learn from industry professionals with real-world credentials." },
                        { Icon: Shield, title: "Comprehensive Support", desc: "Resume building, interview prep, and career guidance included." },
                        { Icon: Network, title: "Seamless Integration", desc: "Aligned to your goals with a cohesive, enriching path." },
                    ].map(({ Icon, title, desc }, i) => (
                        <div key={i} className="glass card-hover" style={{ borderRadius: 18, padding: "26px 22px" }}>
                            <div style={{ width: 44, height: 44, borderRadius: 13, background: "rgba(99,102,241,.12)", border: "1px solid rgba(99,102,241,.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                                <Icon size={19} color="#a5b4fc" strokeWidth={1.8} />
                            </div>
                            <h4 style={{ fontFamily: "var(--ff-h)", fontSize: ".88rem", fontWeight: 700, marginBottom: 8, color: "var(--off)" }}>{title}</h4>
                            <p className="body-m" style={{ fontSize: ".8rem" }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

/* ── PAGE: SERVICES ──────────────────────────────────────────────────────── */
const ServicesPage = () => (
    <div style={{ paddingTop: 68 }}>
        <section style={{ padding: "110px 40px 80px", background: "radial-gradient(ellipse 65% 50% at 50% 40%, rgba(6,182,212,.08), transparent 65%), var(--bg)", textAlign: "center" }}>
            <p className="label-tag" style={{ marginBottom: 16 }}>Our Services</p>
            <h1 className="h-xl" style={{ marginBottom: 20 }}>Beyond Education —<br /><span className="g-blue">End-to-End Success</span></h1>
            <p className="body-l" style={{ maxWidth: 560, margin: "0 auto" }}>From custom software development to staff augmentation, we help organisations and individuals grow.</p>
        </section>
        <section style={{ padding: "80px 40px 100px", background: "var(--bg2)" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
                {SERVICES.map(({ Icon, title, desc, color }, i) => (
                    <div key={i} className="glass card-hover" style={{ borderRadius: 22, padding: "44px 48px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 36, alignItems: "start" }}>
                        <div style={{ width: 64, height: 64, borderRadius: 18, background: `${color}15`, border: `1px solid ${color}2a`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Icon size={28} color={color} strokeWidth={1.7} />
                        </div>
                        <div>
                            <h2 style={{ fontFamily: "var(--ff-h)", fontSize: "1.22rem", fontWeight: 700, marginBottom: 12, color: "var(--off)" }}>{title}</h2>
                            <p className="body-l" style={{ maxWidth: 680, marginBottom: 20 }}>{desc}</p>
                            <button className="btn-outline" style={{ padding: "10px 22px", fontSize: ".84rem" }}>
                                Get in touch <ExternalLink size={13} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        {/* Contact strip */}
        <section style={{ padding: "80px 40px", background: "var(--bg)" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "start" }}>
                <div>
                    <p className="label-tag" style={{ marginBottom: 14 }}>Contact Us</p>
                    <h2 className="h-md" style={{ marginBottom: 24 }}>Get in <span className="g-blue">Touch</span></h2>
                    {[[Phone, "+91 9202527153"], [Mail, "artificiallearning1@gmail.com"], [MapPin, "Indore, IN 452016"]].map(([Icon, val]) => (
                        <div key={val} style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 20, padding: "16px 20px", background: "var(--panel)", border: "1px solid var(--border)", borderRadius: 14 }}>
                            <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(37,99,235,.14)", border: "1px solid rgba(37,99,235,.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <Icon size={17} color="#60a5fa" strokeWidth={2} />
                            </div>
                            <span style={{ fontSize: ".9rem", color: "var(--off)" }}>{val}</span>
                        </div>
                    ))}
                </div>
                <div className="glass" style={{ borderRadius: 22, padding: "40px 36px" }}>
                    <h3 style={{ fontFamily: "var(--ff-h)", fontSize: "1rem", fontWeight: 700, marginBottom: 24, color: "var(--off)" }}>Send us a message</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                            <div>
                                <label style={{ display: "block", fontFamily: "var(--ff-h)", fontSize: ".68rem", letterSpacing: "1.5px", color: "var(--cyan)", textTransform: "uppercase", fontWeight: 700, marginBottom: 7 }}>First Name</label>
                                <input className="f-input" placeholder="Jane" />
                            </div>
                            <div>
                                <label style={{ display: "block", fontFamily: "var(--ff-h)", fontSize: ".68rem", letterSpacing: "1.5px", color: "var(--cyan)", textTransform: "uppercase", fontWeight: 700, marginBottom: 7 }}>Last Name</label>
                                <input className="f-input" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label style={{ display: "block", fontFamily: "var(--ff-h)", fontSize: ".68rem", letterSpacing: "1.5px", color: "var(--cyan)", textTransform: "uppercase", fontWeight: 700, marginBottom: 7 }}>Email</label>
                            <input className="f-input" type="email" placeholder="jane@email.com" />
                        </div>
                        <div>
                            <label style={{ display: "block", fontFamily: "var(--ff-h)", fontSize: ".68rem", letterSpacing: "1.5px", color: "var(--cyan)", textTransform: "uppercase", fontWeight: 700, marginBottom: 7 }}>Interest</label>
                            <select className="f-input">
                                <option style={{ background: "#0c1020" }} value="">Select a course or service…</option>
                                <option style={{ background: "#0c1020" }}>Artificial Intelligence</option>
                                <option style={{ background: "#0c1020" }}>Freelancing Mastery</option>
                                <option style={{ background: "#0c1020" }}>IT & Communication</option>
                                <option style={{ background: "#0c1020" }}>Stock & Forex Trading</option>
                                <option style={{ background: "#0c1020" }}>Custom Development</option>
                                <option style={{ background: "#0c1020" }}>Staff Augmentation</option>
                                <option style={{ background: "#0c1020" }}>Business Development</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: "block", fontFamily: "var(--ff-h)", fontSize: ".68rem", letterSpacing: "1.5px", color: "var(--cyan)", textTransform: "uppercase", fontWeight: 700, marginBottom: 7 }}>Message</label>
                            <textarea className="f-input" placeholder="How can we help you?" />
                        </div>
                        <button className="btn-primary" style={{ justifyContent: "center", marginTop: 4 }}>
                            <Send size={14} /> Send Message
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

/* ── MAIN APP ─────────────────────────────────────────────────────────────── */
export default function App() {
    const [page, setPage] = useState("home");
    const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

    const renderPage = () => {
        switch (page) {
            case "about": return <AboutPage />;
            case "solutions": return <SolutionsPage />;
            case "services": return <ServicesPage />;
            default: return <HomePage />;
        }
    };

    return (
        <>
            <FontLoader />
            <StyleInject />
            <Navbar page={page} setPage={go} />
            <main>{renderPage()}</main>
            <Footer />
        </>
    );
}
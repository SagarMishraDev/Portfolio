import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  ChevronDown,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  MoveUpRight,
  Sparkles,
  Sun,
  Workflow,
  X,
} from "lucide-react";

const workspaceImage = "/images/cinematic-nighttime-coding-workspace.png";

const navItems = ["About", "Projects", "Skills", "Experience", "Notes", "Contact"];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Sagar Mishra home">
          <span className="wordmark-mark">SM</span>
          <span>Sagar Mishra</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <a href="#top" onClick={closeMenu}>Home</a>
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}>
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a className="header-connect" href="#contact">Let&apos;s connect <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero-background" src={workspaceImage} alt="" aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" />Available for thoughtful builds</p>
            <p className="hero-kicker">AI Automation Developer <span>·</span> AI Agents <span>·</span> Software Development</p>
            <h1>Building AI Agents that <em>solve</em> real problems.</h1>
            <p className="hero-description">
              I build AI agents, conversational interfaces, automation systems, and web applications that help businesses work smarter.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my projects <MoveUpRight size={16} /></a>
              <a className="button button-ghost" href="#contact"><Download size={16} /> Download resume</a>
            </div>
            <div className="hero-footnote">
              <span className="mono-label">BASED IN INDIA</span>
              <span className="line" />
              <span className="mono-label">OPEN TO COLLABORATION</span>
            </div>
          </div>
          <div className="visual-location">JAIPUR / INDIA <span>↗</span></div>
          <div className="visual-note"><Sparkles size={14} /> Turning complex workflows into calm interfaces.</div>
        </section>

        <section className="info-strip">
          <div><span className="mono-label">EDUCATION</span><strong>B.Tech IT · Manipal University Jaipur</strong></div>
          <div><span className="mono-label">EXPECTED</span><strong>2027</strong></div>
          <div><span className="mono-label">FOCUS</span><strong>Automation · Agents · Product</strong></div>
          <div className="strip-arrow"><ChevronDown size={18} /></div>
        </section>

        <section className="content-section" id="projects">
          <SectionIntro number="01" title="Selected work" text="A selection of systems and experiments built around useful automation, clear thinking, and human-friendly software." />
          <div className="projects-grid">
            <ProjectCard number="01" title="Agentic research assistant" category="AI AGENTS / RAG" description="A focused research workflow that turns scattered sources into structured, reviewable briefs." tone="blue" />
            <ProjectCard number="02" title="Operations, automated" category="AUTOMATION / SYSTEMS" description="Connecting the repetitive parts of a business so people can spend more time on the work that matters." tone="amber" />
            <ProjectCard number="03" title="Conversations with purpose" category="INTERFACES / NLP" description="Conversational product surfaces that feel less like a chatbot and more like a helpful teammate." tone="slate" />
          </div>
        </section>

        <section className="build-section content-section" id="skills">
          <SectionIntro number="02" title="What I build" text="I work at the intersection of intelligent systems and thoughtful product design." />
          <div className="capabilities-grid">
            <Capability icon={<Bot />} index="01" title="AI agents" text="Purpose-built agents with memory, tools, and a clear job to do." />
            <Capability icon={<Workflow />} index="02" title="Automation systems" text="Reliable workflows that remove friction from day-to-day operations." />
            <Capability icon={<Code2 />} index="03" title="Software products" text="Fast, accessible web experiences designed around real user needs." />
            <Capability icon={<BrainCircuit />} index="04" title="Applied intelligence" text="Practical machine learning and language models, not just demos." />
          </div>
        </section>

        <section className="about-section content-section" id="about">
          <div className="about-mark">SM<span>↗</span></div>
          <div className="about-copy">
            <p className="eyebrow">A little about me</p>
            <h2>Curious about systems, serious about <em>people.</em></h2>
            <p>I&apos;m Sagar, an IT student and builder exploring how thoughtful software can make work feel lighter. I like taking ambiguous problems, finding the useful signal, and turning it into something people can actually use.</p>
            <a className="text-link" href="#contact">More about my approach <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="contact-section content-section" id="contact">
          <div>
            <p className="eyebrow">Have a problem worth solving?</p>
            <h2>Let&apos;s make something <em>useful.</em></h2>
          </div>
          <a className="contact-link" href="mailto:hello@sagarmishra.dev">hello@sagarmishra.dev <ArrowUpRight size={20} /></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="wordmark" href="#top"><span className="wordmark-mark">SM</span><span>Sagar Mishra</span></a>
          <p>Building at the pace of curiosity.</p>
          <div className="social-links"><a href="https://github.com" aria-label="GitHub"><Github size={18} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:hello@sagarmishra.dev" aria-label="Email"><Mail size={18} /></a></div>
        </div>
        <div className="footer-bottom"><span>© 2025 Sagar Mishra</span><span className="mono-label">DESIGNED & BUILT WITH CARE</span><a href="#top">Back to top ↑</a></div>
      </footer>
      <button className="assistant-placeholder" aria-label="Assistant placeholder" title="Assistant coming in a future phase"><Sparkles size={18} /></button>
    </div>
  );
}

function SectionIntro({ number, title, text }: { number: string; title: string; text: string }) {
  return <div className="section-intro"><div className="section-title"><span className="section-number">{number}</span><h2>{title}</h2></div><p>{text}</p></div>;
}

function ProjectCard({ number, title, category, description, tone }: { number: string; title: string; category: string; description: string; tone: string }) {
  return <article className={`project-card ${tone}`}><div className="card-top"><span>{number}</span><ArrowUpRight size={18} /></div><div className="project-art"><div className="art-orbit" /><div className="art-window"><span /><span /><span /><div className="art-lines" /></div></div><div className="card-copy"><p className="mono-label">{category}</p><h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={`Learn more about ${title}`}>Explore <ArrowUpRight size={15} /></a></div></article>;
}

function Capability({ icon, index, title, text }: { icon: React.ReactNode; index: string; title: string; text: string }) {
  return <article className="capability"><div className="capability-icon">{icon}</div><div><span className="mono-label">{index}</span><h3>{title}</h3><p>{text}</p></div></article>;
}

export default App;

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock3,
  Code2,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  Layers3,
  Mail,
  Presentation,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BookOpen,
    title: "College assignments",
    description:
      "Thoughtfully organised typed work, handwritten-style formatting, practice questions and clear PDF documents.",
    tags: ["Typed work", "Formatting", "Solved practice"],
  },
  {
    number: "02",
    icon: FileText,
    title: "PDF notes & study material",
    description:
      "Subject-wise notes, concise revision material and solved past-paper resources to support your learning.",
    tags: ["Subject notes", "Short notes", "Past papers"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Coding assistance",
    description:
      "Guidance with beginner-level Python, HTML, CSS, JavaScript and C++ projects, concepts and practical tasks.",
    tags: ["Python", "Web basics", "C++"],
  },
  {
    number: "04",
    icon: FileSpreadsheet,
    title: "Microsoft Office documents",
    description:
      "Polished Word documents, structured Excel sheets and clean PowerPoint presentations.",
    tags: ["MS Word", "MS Excel", "MS PowerPoint"],
  },
  {
    number: "05",
    icon: WandSparkles,
    title: "CV & resume creation",
    description:
      "Professional, ATS-conscious CVs for fresh graduates, internships and experienced applicants.",
    tags: ["Freshers", "Internships", "ATS-conscious"],
  },
  {
    number: "06",
    icon: Presentation,
    title: "Project reports & presentations",
    description:
      "Well-structured project and internship reports, practical files and modern slides for class or viva.",
    tags: ["Project reports", "Practical files", "Viva slides"],
  },
];

const process = [
  {
    number: "01",
    title: "Share your requirements",
    description:
      "Choose a service and tell us about the topic, instructions and deadline using the enquiry form.",
  },
  {
    number: "02",
    title: "Get a free quotation",
    description:
      "We review your request and email you with the price, timeline and any questions before starting.",
  },
  {
    number: "03",
    title: "Receive your work",
    description:
      "Once the details are agreed, your completed documents are sent to you by email.",
  },
];

export default function Home() {
  return (
    <main className="site-shell overflow-hidden">
      <header className="site-header">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="brand-lockup" aria-label="Master Mind Developer home">
            <span className="brand-mark">M<span>M</span>D</span>
            <span className="brand-name">
              <strong>MASTER MIND</strong>
              <small>DEVELOPER</small>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#process" className="nav-link">How it works</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <a href="#contact" className="button button-small button-primary hidden sm:inline-flex">
            Start an enquiry <ArrowUpRight size={16} />
          </a>
          <a href="#contact" className="mobile-cta sm:hidden" aria-label="Go to enquiry form">
            <Mail size={18} />
          </a>
        </div>
      </header>

      <section id="home" className="hero-section relative isolate">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:grid-cols-[1.08fr_.92fr] lg:gap-10 lg:pt-32">
          <div className="hero-copy">
            <div className="eyebrow-pill animate-rise">
              <span className="live-dot" />
              <Sparkles size={14} />
              <span>ACADEMIC & PROFESSIONAL SUPPORT</span>
            </div>

            <h1 className="hero-title animate-rise delay-100">
              Make your next
              <span className="hero-title-gradient">move count.</span>
            </h1>
            <p className="hero-description animate-rise delay-200">
              Clear documents. Confident presentations. Practical learning support.
              Master Mind Developer helps students and professionals turn busy work
              into work they can feel good about.
            </p>

            <div className="mt-9 flex flex-col gap-3 animate-rise delay-300 sm:flex-row">
              <a href="#contact" className="button button-primary button-large">
                Order now <ArrowRight size={18} />
              </a>
              <a href="#services" className="button button-ghost button-large">
                Explore services <ArrowDown size={17} />
              </a>
            </div>

            <div className="hero-assurances animate-rise delay-400">
              <span><ShieldCheck size={16} /> Privacy-minded</span>
              <i />
              <span><Clock3 size={16} /> 24–72 hour typical delivery</span>
              <i />
              <span><CheckCircle2 size={16} /> 1 free revision</span>
            </div>
          </div>

          <div className="hero-visual animate-visual" aria-label="Master Mind Developer digital services illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-orbit orbit-three" />
            <div className="orbit-node node-one" />
            <div className="orbit-node node-two" />
            <div className="orbit-node node-three" />

            <div className="visual-core">
              <div className="core-topline">
                <span className="core-indicator"><span /> MMD WORKSPACE</span>
                <span className="core-menu"><i /><i /><i /></span>
              </div>
              <div className="core-monogram">MMD</div>
              <div className="core-caption">THINK · CREATE · PRESENT</div>
              <div className="core-spectrum"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
              <div className="core-bottomline"><span>YOUR IDEAS, BETTER PRESENTED</span><Zap size={14} /></div>
            </div>

            <div className="float-card float-card-top">
              <span className="float-icon"><FileText size={17} /></span>
              <span><b>Documents</b><small>Clean & organised</small></span>
              <Check size={15} className="float-check" />
            </div>
            <div className="float-card float-card-bottom">
              <span className="float-icon float-icon-blue"><Code2 size={17} /></span>
              <span><b>Project support</b><small>Built with care</small></span>
              <ArrowUpRight size={15} className="float-check" />
            </div>
            <div className="visual-label label-left">IDEAS INTO IMPACT</div>
            <div className="visual-label label-right">EST. FOR YOUR NEXT STEP</div>
          </div>
        </div>

        <div className="hero-bottom mx-auto max-w-7xl px-5 sm:px-8">
          <span>BUILT AROUND YOUR GOALS</span>
          <div className="hero-bottom-line" />
          <a href="#about" aria-label="Scroll to about section"><ArrowDown size={17} /></a>
        </div>
      </section>

      <section id="about" className="section section-about">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
          <div className="reveal-block">
            <p className="section-kicker"><span>01</span> / THE MMD APPROACH</p>
            <h2 className="section-title">Small details.<br /><span className="text-gradient">A stronger result.</span></h2>
          </div>
          <div className="about-content reveal-block delay-100">
            <p className="about-lead">
              <strong>Master Mind Developer</strong> provides academic and professional
              document services for students, job seekers and working professionals.
            </p>
            <p>
              We started with a simple idea: make it easier to manage difficult topics,
              tight deadlines and document formatting. From study resources and coding
              guidance to CVs and office documents, every request receives careful
              attention and clear communication.
            </p>
            <div className="about-points">
              <div><span className="point-icon"><ShieldCheck size={19} /></span><span><b>Your privacy comes first</b><small>Enquiries are handled discreetly and respectfully.</small></span></div>
              <div><span className="point-icon"><GraduationCap size={19} /></span><span><b>Student-friendly approach</b><small>Affordable quotations tailored to each request.</small></span></div>
              <div><span className="point-icon"><Sparkles size={19} /></span><span><b>Care in every detail</b><small>Neat formatting, thoughtful presentation and clear delivery.</small></span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section section-services">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="section-heading reveal-block">
            <p className="section-kicker"><span>02</span> / WHAT WE DO</p>
            <h2 className="section-title">Your task. <span className="text-gradient">Our focus.</span></h2>
            <p>Explore practical services for college, career and everyday document needs.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.number} className={`service-card reveal-block delay-${(index % 3) * 100}`}>
                  <div className="service-card-top">
                    <span className="service-icon"><Icon size={22} strokeWidth={1.8} /></span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href="#contact" className="service-link">Enquire about this <ArrowUpRight size={16} /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="section section-process">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="section-heading reveal-block">
            <p className="section-kicker"><span>03</span> / THE PROCESS</p>
            <h2 className="section-title">Simple from <span className="text-gradient">start to finish.</span></h2>
            <p>No complicated steps. Just tell us what you need and we will guide you from there.</p>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <div key={item.number} className={`process-card reveal-block delay-${index * 100}`}>
                <div className="process-number">{item.number}</div>
                <div className="process-connector"><span /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-promise">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
          <div className="promise-item"><Clock3 size={22} /><div><b>Timely delivery</b><p>Typical turnaround is 24–72 hours. Urgent requests can be discussed.</p></div></div>
          <div className="promise-item"><CheckCircle2 size={22} /><div><b>One free revision</b><p>One reasonable revision is included when changes are needed.</p></div></div>
          <div className="promise-item"><ShieldCheck size={22} /><div><b>Privacy-minded service</b><p>Your enquiry details are treated with care and discretion.</p></div></div>
        </div>
      </section>

      <section id="contact" className="section section-contact">
        <div className="contact-backdrop" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div className="contact-copy reveal-block">
            <p className="section-kicker"><span>04</span> / START A CONVERSATION</p>
            <h2 className="section-title">Have a task<br /><span className="text-gradient">in mind?</span></h2>
            <p className="contact-intro">Share a few details about what you need. We will review your request and respond by email with a free quotation.</p>
            <div className="contact-email-card">
              <span className="contact-email-icon"><Mail size={20} /></span>
              <span><small>BUSINESS EMAIL</small><a href="mailto:masterminddeveloper12@gmail.com">masterminddeveloper12@gmail.com</a></span>
              <ArrowUpRight size={17} className="email-arrow" />
            </div>
            <div className="working-hours"><span className="live-dot" /> Working hours: 10:00 AM – 10:00 PM, 7 days a week <small>(Pakistan time)</small></div>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-form reveal-block delay-100"
          >
            <input type="hidden" name="access_key" value="a25d96fe-2312-4e0b-a199-030836e17b10" />
            <input type="hidden" name="subject" value="New Enquiry - Master Mind Developer" />
            <input type="hidden" name="from_name" value="Master Mind Developer Website" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="form-heading">
              <div><span className="form-overline">FREE QUOTATION</span><h3>Send an enquiry</h3></div>
              <span className="form-badge"><Layers3 size={14} /> MMD FORM</span>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" required maxLength={100} placeholder="Enter your name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" required maxLength={254} placeholder="you@example.com" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="service">What service do you need?</label>
              <select id="service" name="service" required defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>College Assignments</option>
                <option>PDF Notes & Study Material</option>
                <option>Coding Assistance</option>
                <option>Microsoft Office Documents</option>
                <option>CV & Resume Creation</option>
                <option>Project Reports</option>
                <option>PowerPoint Presentations</option>
                <option>Other / Not sure</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="deadline">Preferred deadline</label>
              <select id="deadline" name="preferred_deadline" defaultValue="Flexible / please discuss">
                <option>Flexible / please discuss</option>
                <option>Within 24 hours (urgent)</option>
                <option>Within 2–3 days</option>
                <option>Within a week</option>
                <option>More than a week</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="details">Tell us about your requirements</label>
              <textarea id="details" name="requirements" required minLength={10} maxLength={4000} rows={5} placeholder="Topic, instructions, page or slide count, and any important details..." />
            </div>

            <p className="form-privacy">Please do not include passwords, identity documents or highly sensitive information. This enquiry form does not accept file attachments.</p>
            <button type="submit" className="button button-primary button-submit">Send enquiry <ArrowRight size={18} /></button>
            <p className="form-footnote"><ShieldCheck size={13} /> Email communication only · No public phone number</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 text-center sm:px-8 md:flex-row md:text-left">
          <a href="#home" className="brand-lockup" aria-label="Master Mind Developer home">
            <span className="brand-mark brand-mark-small">M<span>M</span>D</span>
            <span className="brand-name"><strong>MASTER MIND</strong><small>DEVELOPER</small></span>
          </a>
          <p>© {new Date().getFullYear()} Master Mind Developer. All rights reserved.</p>
          <a href="mailto:masterminddeveloper12@gmail.com" className="footer-email">Get in touch <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </main>
  );
}

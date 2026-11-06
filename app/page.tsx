import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Code2,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  Mail,
  Menu,
  Presentation,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "College Assignments",
    description:
      "Typed and handwritten-style assignments, solved questions and well-organised PDF submissions.",
    tags: ["Typed work", "Solved questions", "PDF"],
  },
  {
    icon: FileText,
    title: "PDF Notes & Study Material",
    description:
      "Subject-wise notes, short notes and solved past papers to support your revision and learning.",
    tags: ["Subject notes", "Past papers", "Short notes"],
  },
  {
    icon: Code2,
    title: "Coding Assistance",
    description:
      "Guidance and support for basic Python, HTML, CSS, JavaScript and C++ projects and assignments.",
    tags: ["Python", "Web basics", "C++"],
  },
  {
    icon: FileSpreadsheet,
    title: "Microsoft Office Documents",
    description:
      "Cleanly formatted Word documents, organised Excel sheets and professional PowerPoint files.",
    tags: ["MS Word", "MS Excel", "MS PowerPoint"],
  },
  {
    icon: WandSparkles,
    title: "CV & Resume Creation",
    description:
      "Professional, ATS-conscious CVs for job applications, internships and early-career opportunities.",
    tags: ["Fresh graduates", "Internships", "ATS-conscious"],
  },
  {
    icon: Presentation,
    title: "Project Reports & Presentations",
    description:
      "Structured project reports, internship reports, practical files and polished presentation slides.",
    tags: ["Project reports", "Practical files", "Viva slides"],
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    text: "Send your service request using the enquiry form. Include your topic, requirements and deadline.",
  },
  {
    number: "02",
    title: "Receive a free quotation",
    text: "We review the details and reply by email with the price and estimated delivery time.",
  },
  {
    number: "03",
    title: "Get your completed work",
    text: "After confirming the details, your finished documents are delivered by email.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11142B]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Master Mind Developer home">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 text-sm font-black tracking-tight shadow-lg shadow-violet-950/30">
              MMD
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-wide">MASTER MIND</span>
              <span className="block text-[10px] font-semibold tracking-[0.25em] text-violet-200">
                DEVELOPER
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#about">About</a>
            <a className="transition hover:text-white" href="#services">Services</a>
            <a className="transition hover:text-white" href="#process">How it works</a>
            <a className="transition hover:text-white" href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#171A3A] transition hover:bg-violet-100 sm:inline-flex"
          >
            Order Now <ArrowRight size={16} />
          </a>
          <a href="#contact" className="rounded-lg border border-white/20 p-2 text-white md:hidden" aria-label="Go to contact section">
            <Menu size={20} />
          </a>
        </div>
      </header>

      <section id="home" className="relative isolate bg-[#11142B] text-white">
        <div className="hero-grid absolute inset-0 -z-10 opacity-40" />
        <div className="absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-violet-600/30 blur-[110px]" />
        <div className="absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-300/10 px-4 py-2 text-xs font-semibold tracking-wide text-violet-100">
              <Sparkles size={14} /> ACADEMIC & PROFESSIONAL SUPPORT
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Your ideas deserve
              <span className="block bg-gradient-to-r from-violet-300 to-indigo-200 bg-clip-text text-transparent">
                clear, quality work.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Reliable academic and document services for students, job seekers
              and professionals. Thoughtfully prepared, neatly formatted and
              delivered with care.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:bg-violet-400">
                Order Now <ArrowRight size={17} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                Explore Services
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-300">
              <span className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-violet-300" /> Privacy focused</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={15} className="text-violet-300" /> 24–72 hour typical delivery</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-violet-300" /> One free revision</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/30 to-indigo-500/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">Master Mind Developer</p>
                  <p className="mt-1 text-lg font-bold">Support that fits your goals</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-indigo-600 text-sm font-black">MMD</div>
              </div>
              <div className="space-y-3 py-6">
                {[
                  ["01", "Academic assignments", "Organised, clear documents"],
                  ["02", "CVs & professional docs", "A polished first impression"],
                  ["03", "Coding & presentations", "Practical project support"],
                ].map(([n, title, desc]) => (
                  <div key={n} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <span className="text-sm font-bold text-violet-300">{n}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-1 text-xs text-slate-400">{desc}</p>
                    </div>
                    <ArrowRight className="ml-auto text-slate-500" size={16} />
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-violet-500/20 to-indigo-500/20 p-4">
                <p className="text-sm font-semibold">Need something specific?</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">Share your requirements and get a free, no-obligation quotation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="section-kicker">GET TO KNOW US</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Practical support.<br /><span className="text-violet">Thoughtful results.</span>
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-8 text-slate-600">
            <p>
              <strong className="text-ink">Master Mind Developer</strong> provides
              academic and professional document services for students, job
              seekers and working professionals. From assignments and study
              notes to coding guidance, CVs and Microsoft Office documents, we
              focus on making every deliverable clear, organised and carefully
              formatted.
            </p>
            <p>
              The idea began with a simple goal: to support students who need
              help understanding requirements, managing deadlines and
              presenting their work neatly. We aim to make dependable support
              accessible with affordable, student-friendly pricing.
            </p>
            <div className="grid gap-4 pt-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-violet-100 bg-violet-50/70 p-5">
                <ShieldCheck className="text-violet" size={22} />
                <h3 className="mt-3 font-bold text-ink">Privacy matters</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">Your enquiry and shared information are handled with care.</p>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5">
                <GraduationCap className="text-indigo-600" size={22} />
                <h3 className="mt-3 font-bold text-ink">Student friendly</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">Clear communication and affordable quotations for your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#F7F7FC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-kicker">WHAT WE CAN HELP WITH</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Services designed around your needs</h2>
            <p className="mt-4 leading-7 text-slate-600">Choose a service and tell us what you need. Every request is reviewed individually, with a free quotation before work begins.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet transition group-hover:bg-violet group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 min-h-[76px] text-sm leading-7 text-slate-600">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600">{tag}</span>
                    ))}
                  </div>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet hover:text-indigo-700">
                    Enquire now <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-kicker">SIMPLE & STRAIGHTFORWARD</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">How it works</h2>
            <p className="mt-4 text-slate-600">Getting started takes just a few simple steps.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-3xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-black tracking-widest text-violet">{step.number}</span>
                <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#171A3A] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-3">
          <div className="flex gap-4">
            <Clock3 className="mt-1 shrink-0 text-violet-300" size={24} />
            <div><h3 className="font-bold">Timely delivery</h3><p className="mt-2 text-sm leading-6 text-slate-300">Typical turnaround is 24–72 hours, depending on the task. Urgent requests can be discussed.</p></div>
          </div>
          <div className="flex gap-4">
            <CheckCircle2 className="mt-1 shrink-0 text-violet-300" size={24} />
            <div><h3 className="font-bold">One free revision</h3><p className="mt-2 text-sm leading-6 text-slate-300">One revision is included when reasonable changes are needed to meet the agreed requirements.</p></div>
          </div>
          <div className="flex gap-4">
            <ShieldCheck className="mt-1 shrink-0 text-violet-300" size={24} />
            <div><h3 className="font-bold">Respectful privacy</h3><p className="mt-2 text-sm leading-6 text-slate-300">Customer details and documents are treated as private and are not displayed publicly.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#F7F7FC] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="section-kicker">LET'S GET STARTED</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Tell us what you need.</h2>
            <p className="mt-5 max-w-md leading-8 text-slate-600">
              Send a few details about your request. We will review your enquiry
              and reply by email with the next steps and a free quotation.
            </p>
            <div className="mt-8 rounded-3xl border border-violet-100 bg-white p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet"><Mail size={21} /></div>
              <p className="mt-4 text-sm font-semibold text-slate-500">BUSINESS EMAIL</p>
              <a href="mailto:masterminddeveloper12@gmail.com" className="mt-1 inline-block break-all text-base font-bold text-ink hover:text-violet">
                masterminddeveloper12@gmail.com
              </a>
              <p className="mt-4 text-xs leading-6 text-slate-500">Working hours: 10:00 AM – 10:00 PM, seven days a week (Pakistan time).</p>
            </div>
          </div>

          <form
            action="https://formsubmit.co/masterminddeveloper12@gmail.com"
            method="POST"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
          >
            <input type="hidden" name="_subject" value="New enquiry — Master Mind Developer" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="form-label">Your name</label>
                <input id="name" name="name" required maxLength={100} placeholder="Enter your name" className="form-input" />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email address</label>
                <input id="email" name="email" type="email" required maxLength={254} placeholder="you@example.com" className="form-input" />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="service" className="form-label">What service do you need?</label>
              <select id="service" name="service" required defaultValue="" className="form-input">
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
            <div className="mt-5">
              <label htmlFor="deadline" className="form-label">Preferred deadline</label>
              <select id="deadline" name="preferred_deadline" defaultValue="Flexible / please discuss" className="form-input">
                <option>Flexible / please discuss</option>
                <option>Within 24 hours (urgent)</option>
                <option>Within 2–3 days</option>
                <option>Within a week</option>
                <option>More than a week</option>
              </select>
            </div>
            <div className="mt-5">
              <label htmlFor="details" className="form-label">Tell us about your requirements</label>
              <textarea id="details" name="requirements" required minLength={10} maxLength={4000} rows={5} placeholder="Share the topic, instructions, page or slide count, and any important details..." className="form-input resize-y" />
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">Please do not include passwords, identity documents or other highly sensitive information in this enquiry form. Do not submit confidential files here.</p>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200">
              Send Enquiry <ArrowRight size={17} />
            </button>
            <p className="mt-4 text-center text-xs text-slate-500">No prices displayed · Free quotation · Email communication only</p>
          </form>
        </div>
      </section>

      <footer className="bg-[#11142B] py-9 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 text-center sm:px-8 md:flex-row md:text-left">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 text-xs font-black">MMD</span>
            <span className="text-left"><span className="block text-sm font-bold tracking-wide">MASTER MIND DEVELOPER</span><span className="mt-1 block text-[10px] text-slate-400">Academic & professional services</span></span>
          </a>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Master Mind Developer. All rights reserved.</p>
          <a href="mailto:masterminddeveloper12@gmail.com" className="text-xs font-semibold text-violet-200 hover:text-white">Contact by email</a>
        </div>
      </footer>
      
    </main>
  ); 
}

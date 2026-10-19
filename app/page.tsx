import { Theme } from "@/components/Theme";
import Link from "next/link";
import { TiArrowRight } from "react-icons/ti";
import { 
  FaFileAlt, 
  FaUserGraduate, 
  FaLaptopCode, 
  FaCheckCircle, 
  FaAward, 
  FaChartLine 
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-dvh bg-slate-50 text-neutral-800">
      {/* Hero Section */}
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="bg-black/70 min-h-dvh flex items-center justify-center">
          <div className="text-white md:w-2/3 mx-auto md:py-20 p-5 flex items-center justify-center flex-col gap-8 text-center">
            <span 
              className="px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase border border-white/20"
              style={{ backgroundColor: `${Theme.secondary}DD`, color: "#ffffff" }}
            >
              All-In-One Tech Career Accelerator
            </span>

            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-tight">
              Fast Track Your <span style={{ color: "#E07A7A" }}>Tech Career</span>
            </h1>

            <p className="text-lg md:text-2xl font-light leading-relaxed max-w-4xl text-neutral-200">
              TurboTech is an all-in-one career accelerator built to help aspiring tech professionals and
              seasoned developers bridge the gap between where they are and where they want to be.
              Combining sharp industry insights with practical guidance, TurboTech offers actionable resume
              optimization, personalized tech coaching, and hands-on skill training designed to make you stand
              out in a competitive job market.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
              <Link 
                href="/signup" 
                style={{ backgroundColor: Theme.primary }} 
                className="text-white font-semibold px-8 py-4 text-lg rounded-full w-full sm:w-auto hover:opacity-90 transition-all shadow-lg text-center"
              >
                Get Started
              </Link>
              <Link 
                href="#services" 
                className="font-semibold px-8 py-4 text-lg rounded-full flex items-center gap-2 border border-neutral-300/80 hover:bg-white/10 transition-all w-full sm:w-auto justify-center text-white"
              >
                More Info <TiArrowRight className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Banner */}
      <section className="py-10 border-b border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: Theme.secondary }}>92%</h3>
            <p className="text-sm md:text-base text-neutral-600 mt-1 font-medium">Resume Callback Rate</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: Theme.secondary }}>1,200+</h3>
            <p className="text-sm md:text-base text-neutral-600 mt-1 font-medium">Careers Accelerated</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: Theme.secondary }}>150+</h3>
            <p className="text-sm md:text-base text-neutral-600 mt-1 font-medium">Expert Tech Coaches</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: Theme.secondary }}>$35k+</h3>
            <p className="text-sm md:text-base text-neutral-600 mt-1 font-medium">Avg Salary Increase</p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            How <span style={{ color: Theme.secondary }}>TurboTech</span> Accelerates You
          </h2>
          <p className="text-neutral-600 mt-4 text-lg">
            Everything you need to break into tech, land senior roles, and command market-leading compensation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-shadow flex flex-col justify-between text-left">
            <div>
              <div 
                className="p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center text-3xl text-white" 
                style={{ backgroundColor: Theme.secondary }}
              >
                <FaFileAlt />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: Theme.primary }}>Resume Optimization</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Pass ATS filters with tech-tailored bullet points, high-impact project descriptions, and recruiter-focused formatting designed by FAANG hiring managers.
              </p>
            </div>
            <Link 
              href="/services/resume" 
              className="font-semibold flex items-center gap-2 hover:underline text-base"
              style={{ color: Theme.secondary }}
            >
              Optimize Your Resume <TiArrowRight className="text-xl" />
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-shadow flex flex-col justify-between text-left">
            <div>
              <div 
                className="p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center text-3xl text-white" 
                style={{ backgroundColor: Theme.secondary }}
              >
                <FaUserGraduate />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: Theme.primary }}>1-on-1 Tech Coaching</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Get paired with senior engineers, staff architects, and tech leads for mock interviews, career strategy roadmap planning, and salary negotiation tactics.
              </p>
            </div>
            <Link 
              href="/services/coaching" 
              className="font-semibold flex items-center gap-2 hover:underline text-base"
              style={{ color: Theme.secondary }}
            >
              Book a Coach <TiArrowRight className="text-xl" />
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-shadow flex flex-col justify-between text-left">
            <div>
              <div 
                className="p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center text-3xl text-white" 
                style={{ backgroundColor: Theme.secondary }}
              >
                <FaLaptopCode />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: Theme.primary }}>Hands-on Training</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Master modern production stacks—Next.js, System Design, Cloud Architecture, and DevOps—through real-world cohort projects that prove competency.
              </p>
            </div>
            <Link 
              href="/services/training" 
              className="font-semibold flex items-center gap-2 hover:underline text-base"
              style={{ color: Theme.secondary }}
            >
              Explore Bootcamps <TiArrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Training Tracks */}
      <section className="py-20 px-6 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Featured Upskilling Tracks</h2>
              <p className="text-neutral-600 mt-2 text-lg">Rigorous, project-based curriculums taught by industry practitioners.</p>
            </div>
            <Link 
              href="/courses" 
              className="font-semibold flex items-center gap-2 hover:underline text-lg"
              style={{ color: Theme.secondary }}
            >
              View All Tracks <TiArrowRight />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Track 1 */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-slate-50 flex flex-col justify-between">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white" style={{ backgroundColor: Theme.secondary }}>
                    Full Stack Engineering
                  </span>
                  <span className="text-xs text-neutral-500 font-medium font-mono">12 Weeks</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Production Next.js & Microservices</h3>
                <p className="text-neutral-600 text-sm mb-6">
                  Build full-stack SaaS apps with Next.js App Router, TypeScript, PostgreSQL, Docker, and CI/CD deployment pipelines.
                </p>
                <div className="space-y-2 border-t border-neutral-200 pt-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Level:</span>
                    <span className="font-semibold text-neutral-800">Intermediate to Advanced</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Includes:</span>
                    <span className="font-semibold text-neutral-800">3 Portfolio Capstones</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href="/courses/fullstack" 
                  className="w-full py-3 rounded-xl font-semibold text-center block transition-opacity text-white hover:opacity-90"
                  style={{ backgroundColor: Theme.primary }}
                >
                  View Syllabus
                </Link>
              </div>
            </div>

            {/* Track 2 */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-slate-50 flex flex-col justify-between">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white" style={{ backgroundColor: Theme.secondary }}>
                    Architecture
                  </span>
                  <span className="text-xs text-neutral-500 font-medium font-mono">8 Weeks</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Distributed Systems & System Design</h3>
                <p className="text-neutral-600 text-sm mb-6">
                  Learn to design scalable backend architectures, handle high throughput, structure caching layers, and clear senior interviews.
                </p>
                <div className="space-y-2 border-t border-neutral-200 pt-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Level:</span>
                    <span className="font-semibold text-neutral-800">Senior Engineers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Includes:</span>
                    <span className="font-semibold text-neutral-800">Mock Architecture Reviews</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href="/courses/system-design" 
                  className="w-full py-3 rounded-xl font-semibold text-center block transition-opacity text-white hover:opacity-90"
                  style={{ backgroundColor: Theme.primary }}
                >
                  View Syllabus
                </Link>
              </div>
            </div>

            {/* Track 3 */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-slate-50 flex flex-col justify-between">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white" style={{ backgroundColor: Theme.secondary }}>
                    Cloud & DevOps
                  </span>
                  <span className="text-xs text-neutral-500 font-medium font-mono">10 Weeks</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AWS Infrastructure & Kubernetes</h3>
                <p className="text-neutral-600 text-sm mb-6">
                  Master Infrastructure as Code (Terraform), Kubernetes cluster management, AWS deployment architecture, and security auditing.
                </p>
                <div className="space-y-2 border-t border-neutral-200 pt-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Level:</span>
                    <span className="font-semibold text-neutral-800">All Levels</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Includes:</span>
                    <span className="font-semibold text-neutral-800">Live Cloud Labs</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link 
                  href="/courses/devops" 
                  className="w-full py-3 rounded-xl font-semibold text-center block transition-opacity text-white hover:opacity-90"
                  style={{ backgroundColor: Theme.primary }}
                >
                  View Syllabus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose TurboTech */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
              Why Engineers Choose TurboTech Over Traditional Bootcamps
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
              Most bootcamps teach outdated stacks without preparing you for real technical screening or system design rounds. TurboTech combines real industry expectations with targeted personal coaching.
            </p>

            <ul className="space-y-4">
              {[
                "1-on-1 resume tear downs tailored for automated ATS scanners.",
                "Real technical mock interviews conducted by active industry hiring leads.",
                "Custom learning roadmaps built around your current skill gaps.",
                "Salary negotiation playbooks that have added $20k+ to offer packages."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-xl flex-shrink-0 mt-1" style={{ color: Theme.secondary }} />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden" style={{ backgroundColor: Theme.primary }}>
            <div className="relative z-10">
              <div className="p-3 rounded-2xl w-14 h-14 mb-6 flex items-center justify-center text-2xl" style={{ backgroundColor: Theme.secondary }}>
                <FaAward />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#E07A7A" }}>
                Are You an Experienced Tech Leader?
              </h3>
              <p className="text-neutral-200 mb-6 leading-relaxed">
                Join TurboTech as a mentor or instructor. Share your production insights, mentor dedicated developers, and earn revenue by conducting coaching sessions.
              </p>
              <Link 
                href="/mentor/apply" 
                className="inline-block px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-105 text-white"
                style={{ backgroundColor: Theme.secondary }}
              >
                Become a Mentor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-20 px-6 text-center text-white" style={{ backgroundColor: Theme.primary }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Take Your Tech Career to the Next Level?
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto text-neutral-200">
            Join thousands of developers landing dream roles at high-growth startups and top tech enterprises.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/signup" 
              className="px-10 py-4 text-xl font-bold rounded-full inline-block shadow-lg transition-transform hover:scale-105 text-white"
              style={{ backgroundColor: Theme.secondary }}
            >
              Get Started Now
            </Link>
            <Link 
              href="/contact" 
              className="px-10 py-4 text-xl font-bold rounded-full inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 transition-all text-white"
            >
              Talk to an Advisor <TiArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© {new Date().getFullYear()} TurboTech Career Accelerator. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Helen Grondin",
  description:
    "Meet Helen Grondin, New Hampshire's health sharing advocate. How she cut her own family's healthcare costs and became a trusted guide for NH families.",
};

/*
 * About page - server component.
 * No hooks required. All animations are CSS-class-level.
 * Source: design-system.md Sections 2, 3, 5 + initial-business-data.md.
 */

export default function AboutPage() {
  return (
    <main>
      {/* ── Section 1: Hero ── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--bg-hero)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow mb-4">MEET YOUR ADVOCATE</p>
          <h1
            className="font-display font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              color: "var(--text-on-dark)",
            }}
          >
            I was paying $1,200 a month for health insurance I was afraid to
            use.
          </h1>
          <p
            className="font-body text-lg leading-relaxed max-w-[52ch]"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            Then I discovered health sharing. It changed everything.
          </p>
        </div>
      </section>

      {/* ── Section 2: Helen's Story ── */}
      {/* [DEMO COPY — pending client review] */}
      <section
        className="section-base"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            {/* Photo placeholder */}
            <div className="w-full md:w-5/12 flex-shrink-0">
              <div
                className="w-full aspect-[3/4] rounded-2xl flex flex-col items-center justify-center gap-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(77,122,94,0.15) 0%, rgba(201,123,46,0.08) 100%)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <span
                  className="font-display font-bold text-2xl text-center px-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Helen Grondin
                </span>
                <span
                  className="font-mono text-xs uppercase tracking-widest text-center px-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  Photo Coming Soon
                </span>
                <span
                  className="font-body text-sm text-center px-8 mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  Manchester, NH
                </span>
              </div>
            </div>

            {/* Story copy */}
            <div className="w-full md:w-7/12 flex flex-col gap-6">
              <h2
                className="font-display font-semibold"
                style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)", color: "var(--text-primary)" }}
              >
                Helen's Story
              </h2>

              <p
                className="font-body leading-relaxed prose-content"
                style={{ color: "var(--text-secondary)" }}
              >
                In 2022, I was sitting at our kitchen table trying to figure out
                why our family's Anthem Blue Cross plan had jumped to $1,247 a
                month. Four of us, all healthy. We had not hit our deductible in
                three years. I called Anthem to ask about alternatives and they
                had exactly one suggestion: a plan with a higher deductible and a
                lower monthly payment. We would just have to "be more careful."
              </p>

              <p
                className="font-body leading-relaxed prose-content"
                style={{ color: "var(--text-secondary)" }}
              >
                A few weeks later, a friend mentioned she had left her Anthem plan
                and joined something called Impact Health Sharing. She was paying
                less than $400 a month for her family and had used it twice for
                real medical bills. I thought she was describing a scam. I had
                heard of health sharing organizations that had collapsed and left
                members with stacks of unpaid hospital bills.
              </p>

              <p
                className="font-body leading-relaxed prose-content"
                style={{ color: "var(--text-secondary)" }}
              >
                So I did the research. I read the entire Impact program guide.
                I called their member services team with a list of specific
                questions. I looked up their 501(c)(3) nonprofit status, their
                history going back to 1984, and their financial transparency
                reports. I talked to three families who had actually submitted
                large bills. I wanted to find the problem before I enrolled my
                family. I could not find one.
              </p>

              <p
                className="font-body leading-relaxed prose-content"
                style={{ color: "var(--text-secondary)" }}
              >
                We enrolled in October 2022. Our family of four now contributes
                $628 a month. That is $619 less per month than we were paying
                before, or $7,428 back in our budget every year. When my daughter
                had an urgent care visit last spring, the bill was repriced from
                $890 to $214 before our cost-sharing even applied. The system
                worked exactly the way Impact said it would.
              </p>

              <p
                className="font-body leading-relaxed prose-content"
                style={{ color: "var(--text-secondary)" }}
              >
                I became a health sharing advocate because I kept meeting NH
                families and self-employed workers who were making the same
                calculation I had been making: pay an enormous amount every month
                and hope nothing goes wrong, or go without coverage and hope even
                harder. Impact is not perfect and it is not right for everyone.
                But it is a real option that most people in New Hampshire have
                never heard of. Telling people about it felt like the most
                useful thing I could do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why Trust Helen ── */}
      <section
        className="section-base section-elevated"
        style={{ background: "var(--bg-elevated)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow mb-4 text-center">WHY WORK WITH ME</p>
          <h2
            className="font-display font-semibold text-center mb-4"
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              color: "var(--text-primary)",
            }}
          >
            I am not a broker. I don't earn commissions. I just know this stuff
            cold.
          </h2>
          <p
            className="font-body text-center mb-12 mx-auto max-w-[55ch]"
            style={{ color: "var(--text-secondary)" }}
          >
            I enrolled my own family before I talked to a single client. Every
            answer I give you comes from that experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Trust signal 1 */}
            <div
              className="rounded-xl p-6 md:p-8 flex flex-col gap-3 hover:shadow-md transition-shadow"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <span className="text-3xl">🔍</span>
              <h3
                className="font-display font-semibold"
                style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)", color: "var(--text-primary)" }}
              >
                Deep research before I enrolled
              </h3>
              <p
                className="font-body leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I spent six weeks verifying Impact before I moved my family off
                Anthem. I read the program guide cover to cover, confirmed their
                nonprofit status, and interviewed current members. I know what
                is covered, what is not, and exactly where the limits are.
              </p>
            </div>

            {/* Trust signal 2 */}
            <div
              className="rounded-xl p-6 md:p-8 flex flex-col gap-3 hover:shadow-md transition-shadow"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <span className="text-3xl">🏠</span>
              <h3
                className="font-display font-semibold"
                style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)", color: "var(--text-primary)" }}
              >
                NH-based, NH-focused
              </h3>
              <p
                className="font-body leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I live in Manchester. I know what Anthem, Ambetter, and Harvard
                Pilgrim cost in this state right now. When I say health sharing
                saves NH families money, I mean families I have personally talked
                to in Concord, Nashua, Portsmouth, and Keene.
              </p>
            </div>

            {/* Trust signal 3 */}
            {/* [DEMO COPY — pending client review] */}
            <div
              className="rounded-xl p-6 md:p-8 flex flex-col gap-3 hover:shadow-md transition-shadow"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <span className="text-3xl">🤝</span>
              <h3
                className="font-display font-semibold"
                style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)", color: "var(--text-primary)" }}
              >
                No hidden incentives
              </h3>
              <p
                className="font-body leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I charge a flat consulting fee for my time. I am not paid a
                commission by Impact Health Sharing for every person I enroll.
                That means I have no financial reason to push you toward a plan
                that is not right for your situation. If health sharing is not
                the right fit, I will tell you that directly.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/booking"
              className="btn-accent inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-white"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Stats ── */}
      <section
        className="py-16"
        style={{ background: "var(--bg-hero)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <span
                className="font-display font-bold"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "var(--accent)" }}
              >
                $73/mo
              </span>
              <p
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--text-on-dark-muted)" }}
              >
                Starting contribution
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                className="font-display font-bold"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "var(--accent)" }}
              >
                40+ years
              </span>
              <p
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--text-on-dark-muted)" }}
              >
                Health sharing model in existence
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span
                className="font-display font-bold"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "var(--accent)" }}
              >
                70%+
              </span>
              <p
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--text-on-dark-muted)" }}
              >
                Average bill repricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Final CTA ── */}
      <section
        className="section-base"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="font-display font-semibold mb-6"
            style={{
              fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
              color: "var(--text-primary)",
            }}
          >
            Ready to see if health sharing is right for you?
          </h2>
          <p
            className="font-body mb-10 mx-auto max-w-[48ch]"
            style={{ color: "var(--text-secondary)" }}
          >
            A 30-minute conversation is all it takes to see your exact numbers
            and decide if Impact makes sense for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="btn-accent inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold text-white"
            >
              Book a Consultation
            </Link>
            <Link
              href="/quiz"
              className="btn-outline-primary inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-body font-semibold"
            >
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

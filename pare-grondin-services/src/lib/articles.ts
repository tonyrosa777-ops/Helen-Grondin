// articles.ts — Pare Grondin Services
// All blog article content lives here. No CMS, no MDX dependencies.
// [DEMO COPY — pending client review]

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string; // HTML string — rendered via dangerouslySetInnerHTML
}

export const articles: Article[] = [
  {
    slug: "health-sharing-new-hampshire-guide-2026",
    title: "Health Sharing in New Hampshire: The Complete 2026 Guide for Granite Staters",
    excerpt:
      "No health sharing content ranks for any NH search query. We wrote the guide NH families needed.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Basics",
    content: `
<p>Health sharing in New Hampshire is legal, actively used by thousands of NH families, and in many cases costs 40 to 60 percent less than an equivalent ACA marketplace plan. If you are a self-employed Granite Stater, a COBRA refugee, or a family whose premiums just jumped again, this guide covers everything you need to make an informed decision.</p>

<h2>What Is Health Sharing?</h2>
<p>Health sharing is a membership model where a community of members pools money each month to cover each other's medical expenses. When you have an eligible medical bill, the community shares that cost. It is not insurance. There is no legally guaranteed payout, no state insurance regulatory oversight, and no annual open enrollment window. Members join month to month, use any provider they choose, and submit bills through the sharing organization.</p>
<p>The model has existed in the United States since the 1980s. The largest organizations trace their roots to faith communities, though modern health sharing organizations like Impact Health Sharing have expanded beyond exclusively faith-based membership requirements while retaining the nonprofit structure that made early sharing ministries financially stable.</p>

<h2>Is Health Sharing Legal in New Hampshire?</h2>
<p>Yes. New Hampshire does not have a state-level Health Care Sharing Ministry safe harbor statute the way some other states do, but federally qualified Health Care Sharing Ministries are exempt from the ACA's individual mandate under Section 5000A of the Internal Revenue Code. Impact Health Sharing is a 501(c)(3) nonprofit that meets the federal HCSM definition and operates legally in New Hampshire and 47 other states.</p>
<p>The NH Insurance Department does not regulate health sharing organizations as insurance companies, because they are not insurance companies. The NHID has taken action against organizations that operated like insurance companies without a license, notably Aliera Health and its subsidiary Trinity HealthShare in 2020. Impact is not structured like those organizations. I will cover that distinction in detail below.</p>

<h2>How Impact Health Sharing Works for NH Members</h2>
<p>Impact Health Sharing is the organization I enroll my clients into. Here is how the mechanics work for a New Hampshire member.</p>
<p>You pay a monthly contribution based on your age and household size. For a single adult under 30, that starts at $73/month. For a family, it starts at $378/month. Your contribution is not a premium and not tax-deductible as a health insurance expense, though self-employed members should consult a tax advisor about potential deductibility under other categories.</p>
<p>When you have a medical expense, you present as a cash-pay patient at any provider and request the self-pay rate. Impact's bill negotiation team then reprices the bill using Reference Based Pricing, which typically reduces it by 70 percent or more before your cost-sharing responsibility is even calculated. That $9,781 emergency room visit that became $283 is a real member example.</p>
<p>After repricing, you are responsible for your Personal Responsibility Amount (PRA), which is the Impact equivalent of a deductible. Once your PRA is met for the year, Impact shares 90 percent of eligible costs and you share 10 percent. There is one shared PRA for the entire household, not one per person.</p>

<h2>What It Costs: NH-Specific Numbers</h2>
<p>The average unsubsidized ACA family plan in New Hampshire in 2026 costs between $1,200 and $2,000 per month depending on the carrier (Anthem, Ambetter, Harvard Pilgrim are the main NH marketplace options) and the tier. After the expanded ARPA subsidies expired in December 2025, families that previously paid $600 to $800 per month are now paying significantly more.</p>
<p>COBRA for a family in New Hampshire averages approximately $1,700 per month because you are paying 100 percent of the premium your employer was partially subsidizing, plus a 2 percent administrative fee.</p>
<p>Impact Health Sharing for a family of four with the oldest member under 50 runs $378 to $628 per month depending on the PRA level you choose. For a family previously paying $1,450 on an Anthem plan, that is roughly $9,800 to $12,900 back in the family's annual budget.</p>

<h2>What Health Sharing Does Not Cover</h2>
<p>I always explain the limitations before anyone enrolls. Health sharing is not right for everyone, and I would rather lose a client than have someone join without fully understanding what they signed up for.</p>
<p>Pre-existing conditions have a sharing limitation period. Expenses related to a pre-existing condition are not eligible for sharing for 12 to 36 months after joining, depending on the condition. After that period they are treated like any other eligible expense. If you have an active, ongoing condition that requires regular expensive care, we need to talk about whether Impact is the right fit for your specific situation.</p>
<p>Dental and vision are not included in standard Impact membership. Cosmetic procedures, experimental treatments, and elective procedures are not eligible for sharing. There is a $500,000 per-incident annual sharing limit. Pregnancy sharing has specific conditions and timelines.</p>

<h2>Why Impact Is Different From the Organizations That Got Shut Down</h2>
<p>You should be skeptical. The NH Insurance Department shut down Aliera Health and Trinity HealthShare in 2020. Sharity Ministries filed for bankruptcy. Liberty HealthShare faced serious investigative journalism about financial practices. These are real cases and the damage to real NH families was real.</p>
<p>Impact Health Sharing has operated as a genuine 501(c)(3) nonprofit since 1984. Every dollar of member contributions goes toward sharing medical costs, not toward family-owned vendor contracts or management fees. Impact publishes its financial statements. It has a 40-year track record of continuous operation and sharing. I enrolled my own family, and I did not do that without verifying the organization's structure carefully.</p>

<h2>How to Get Started</h2>
<p>If you want to explore whether Impact Health Sharing is right for your household, I offer a free 30-minute consultation. We will look at your current plan, your household situation, and your health history. I will give you the real numbers, explain the limitations honestly, and tell you if I think another option is a better fit for you.</p>
<p>Enrollment takes 5 to 7 minutes online once you decide to proceed. No medical underwriting. No tax returns. Coverage begins the first of the following month. Book a consultation and let's look at your numbers together.</p>
    `,
  },

  {
    slug: "cobra-alternative-new-hampshire",
    title: "Lost Your Job in NH? Why Health Sharing Beats COBRA for Most Families",
    excerpt:
      "COBRA in NH averages $1,700/month for a family. Here is the math on your real alternative.",
    date: "2026-03-28",
    readTime: "8 min read",
    category: "COBRA",
    content: `
<p>For most New Hampshire families, health sharing costs 60 to 75 percent less than COBRA and provides coverage that starts the first of the following month. If you just lost your job and opened your COBRA paperwork, read this before you decide.</p>

<h2>What COBRA Is Really Costing You in New Hampshire</h2>
<p>When you lose your job, your employer stops contributing to your health premium. COBRA lets you keep your existing plan, but you pay the full cost, including what your employer was covering, plus a 2 percent administrative fee. The average employer-sponsored family plan in New Hampshire costs approximately $1,700 per month at full cost. For individual coverage, the average is roughly $650 to $800 per month.</p>
<p>The 18-month COBRA window sounds like a long runway, but the math compounds quickly. A family that elects COBRA at $1,700 per month spends $30,600 over 18 months just to maintain coverage. For many families, that is the difference between financial stability and financial crisis during an already difficult transition.</p>

<h2>How Health Sharing Compares on Cost</h2>
<p>Impact Health Sharing for a family starts at $378 per month. For a family previously paying $1,700 on COBRA, switching to Impact means a monthly savings of at least $1,300. Over 18 months, that is $23,400 back in your pocket.</p>
<p>Individual coverage through Impact starts at $73 per month. If you were on COBRA at $700 per month as an individual, Impact saves you $627 per month, or $11,286 over 18 months.</p>

<h2>The PRA vs. Deductible Difference</h2>
<p>The main structural difference between health sharing and insurance is the Personal Responsibility Amount (PRA) versus a traditional deductible. With COBRA, you kept whatever deductible your employer plan carried, which for many NH families on high-deductible plans is $3,000 to $7,000 per person, stacked.</p>
<p>With Impact, there is one shared PRA for the entire household. A family plan might have a PRA of $5,000 shared across everyone. Once that shared amount is met, Impact shares 90 percent of eligible bills and you share 10 percent. The family deductible stacking problem of traditional insurance does not apply.</p>
<p>There is another important difference: bill repricing. When you submit a bill to Impact, their negotiation team reprices it using Reference Based Pricing before your PRA is even calculated. That $9,781 ER visit gets repriced to something like $2,800, and then your PRA applies to $2,800, not $9,781. With COBRA, you pay your full deductible on the provider's billed rate.</p>

<h2>How Fast Does Enrollment Work?</h2>
<p>COBRA gives you 60 days from your qualifying event to elect coverage, and coverage is retroactive to the date of the qualifying event if you elect within that window. So technically you have time to evaluate. Impact enrollment takes 5 to 7 minutes online, and coverage begins the first of the following month. If you enroll in Impact by the 20th of a month, you are covered by the 1st of the next month.</p>
<p>You do not have to make the decision the day you lose your job. But I recommend calling me within the first week so you understand your options before the COBRA window closes.</p>

<h2>Who Should Still Use COBRA</h2>
<p>Health sharing is not right for everyone. There are specific situations where COBRA is the better choice, and I will tell you honestly if you are in one of them.</p>
<ul>
<li>You or a family member are in active cancer treatment. Pre-existing condition sharing limitations mean Impact will not share costs related to an active cancer diagnosis for 12 to 36 months. COBRA continuity matters here.</li>
<li>You have an organ transplant or similar high-cost, ongoing treatment already in progress.</li>
<li>A family member is pregnant, and the due date is within 12 months. Pregnancy sharing through Impact has specific eligibility requirements and a 10-month waiting period for new members.</li>
<li>You have a specific specialist or hospital that is critical to your care and you are mid-treatment. Impact works with any provider, but mid-treatment continuity matters.</li>
</ul>
<p>For a healthy family whose main issue is the cost of COBRA, Impact is almost always the better financial choice. Let's talk through your specific situation. Book a free consultation and I will give you the honest comparison for your household.</p>
    `,
  },

  {
    slug: "aca-subsidies-expired-2026",
    title: "ACA Subsidies Expired: What NH Families Are Doing Instead in 2026",
    excerpt:
      "The expanded subsidies ended December 2025. Average NH premiums jumped 21%. Here is what changed.",
    date: "2026-03-15",
    readTime: "7 min read",
    category: "ACA",
    content: `
<p>The expanded ACA subsidies that kept marketplace plans affordable for millions of Americans expired at the end of December 2025, and New Hampshire families are now facing the full cost of unsubsidized premiums for the first time. For households that no longer qualify for subsidies, or whose subsidies shrank significantly, the cost difference is real and immediate.</p>

<h2>What the Subsidy Expiration Actually Changed</h2>
<p>The American Rescue Plan Act (ARPA) of 2021 expanded ACA subsidies significantly, and the Inflation Reduction Act extended those expanded subsidies through 2025. Starting January 2026, the subsidies reverted to the pre-ARPA structure. For families earning above 400 percent of the federal poverty level, that change eliminated subsidies entirely. For families in the 200 to 400 percent range, subsidies shrank meaningfully.</p>
<p>New Hampshire marketplace enrollees saw an average premium increase of 21 percent for 2026. A family of four that was paying $850 per month with subsidies in 2025 might now be paying $1,450 or more without them.</p>

<h2>The Main Options NH Families Have Now</h2>
<p>There is no perfect solution, and the right choice depends on your income, health situation, and how much financial risk you can absorb. Here are the realistic options.</p>
<p><strong>Stay on the ACA marketplace.</strong> If your income qualifies you for remaining subsidies, the marketplace may still be competitive. Anthem, Ambetter, and Harvard Pilgrim offer plans in New Hampshire. The problem is network restrictions and the ongoing premium trajectory. Even subsidized plans have gone up year over year.</p>
<p><strong>COBRA from a former employer.</strong> Only applies if you recently left a job. COBRA premiums are high, typically $1,500 to $1,800 per month for a family, and coverage lasts only 18 months. It buys time but does not solve the cost problem.</p>
<p><strong>Short-term health plans.</strong> Available in New Hampshire for up to 12 months with one renewal. Lower premiums but significant coverage gaps, no ACA protections, and often aggressive exclusions. Generally not recommended as a primary coverage strategy.</p>
<p><strong>Health sharing.</strong> For healthy NH families who no longer qualify for meaningful ACA subsidies, health sharing is the option most worth understanding. The monthly cost is typically 40 to 60 percent less than an unsubsidized marketplace plan.</p>

<h2>Who Health Sharing Makes Sense For Post-Subsidy</h2>
<p>Health sharing is the strongest option for NH families who are generally healthy, do not have active ongoing conditions requiring expensive continuous care, and whose primary pain point is the cost of coverage. That describes a large percentage of the families I talk to.</p>
<p>Self-employed Granite Staters and 1099 contractors are particularly well-positioned for health sharing. Without employer-sponsored coverage or subsidy access, they are paying the full unsubsidized marketplace rate. The cost comparison is usually decisive.</p>
<p>A family of four, all healthy, previously paying $900 per month with ARPA subsidies might now be quoted $1,600 per month for an equivalent Anthem plan without subsidies. The same family on Impact Health Sharing pays $378 to $628 per month depending on the PRA level they choose. The annual savings can exceed $10,000.</p>

<h2>What Health Sharing Does Not Solve</h2>
<p>I want to be honest here, because the wrong decision costs real money and real healthcare access. Health sharing is not right for everyone affected by the subsidy expiration.</p>
<p>If you have a family member with Type 1 diabetes, an autoimmune condition requiring expensive biologics, or any ongoing condition that requires regular expensive treatment, health sharing's pre-existing condition sharing limitation period means you will be out-of-pocket for those specific costs for 12 to 36 months after joining. That may be worse than paying higher ACA premiums.</p>
<p>If your income qualifies you for significant remaining ACA subsidies, run the actual comparison. Sometimes the subsidized ACA plan, with its guaranteed coverage and no waiting periods, is still the better value. I will run the comparison with you honestly.</p>

<h2>Next Steps for NH Families</h2>
<p>If your 2026 marketplace renewal came in higher than expected and you want to understand your options, book a free 30-minute consultation. I will walk through your specific household situation, your health history, and give you a direct comparison of what Impact Health Sharing would cost vs. your current plan. No sales pressure. If I do not think health sharing is right for you, I will tell you.</p>
    `,
  },

  {
    slug: "impact-health-sharing-review-2026",
    title: "Impact Health Sharing Review 2026: An Honest Look From an NH Member",
    excerpt:
      "An enrolled member's honest take on 18 months with Impact. What worked, what to know before you join, and one thing I wish I had understood earlier.",
    date: "2026-03-10",
    readTime: "9 min read",
    category: "Reviews",
    content: `
<p>I have been a member of Impact Health Sharing for 18 months. I enrolled my family before I started helping other New Hampshire families enroll. This review covers what has worked well, what you need to know before you join, and one thing I wish someone had explained to me more clearly at the start.</p>

<h2>What I Like About Impact After 18 Months</h2>
<p>The bill repricing is the biggest practical benefit. Every time we have had a medical bill, the negotiation team has repriced it significantly before our PRA applies. Our first experience was a $1,200 urgent care visit. After repricing, the eligible amount was $340. We paid $340 out of pocket until our PRA was met, then Impact shared the rest. The system works the way they described it in the enrollment materials.</p>
<p>No network restrictions has been a genuine quality-of-life improvement. We moved from a town in Hillsborough County to a town in Merrimack County while we were members. With our old Anthem plan, that would have meant checking which of our doctors were still in network. With Impact, we just kept seeing the same doctors. Every visit, we say we are a cash-pay patient and ask for the self-pay rate. Most providers are familiar with this now.</p>
<p>The 24/7 telehealth is legitimately useful. Two of our three telehealth calls were for things that would have been a $300+ urgent care visit. The call was free, the prescription was sent to our pharmacy, and we were done in 20 minutes. For a family with kids, this alone is worth a significant part of the membership cost.</p>
<p>The teletherapy benefit (3 visits per month per topic per member) was something I did not realize we had until month six. That is a real benefit that most traditional insurance plans do not include in a meaningful way. I am glad it is there.</p>

<h2>What to Know Before You Join</h2>
<p>The pre-existing condition sharing limitation period is real and it matters. When I enrolled, I understood the concept but I did not fully appreciate the timeline. For conditions diagnosed or treated in the 36 months before enrollment, sharing limitations can run 12 to 36 months. That means if you have had any medical issue in the past three years that cost money, those same issues will not be eligible for sharing immediately. You need to map out your medical history before you decide whether the timing works for your household.</p>
<p>The PRA is not a deductible in the traditional sense. With insurance, once you hit your deductible, the insurance company pays. With Impact, once you meet your PRA, the community shares costs. These are functionally similar but the distinction matters: sharing is community-based, not contractually guaranteed. In 40 years of operation Impact has shared all eligible expenses, but I want you to understand what you are joining.</p>
<p>Bill submission takes patience the first time. The process of becoming a cash-pay patient, receiving a bill, submitting it to Impact, and waiting for the repricing and sharing to process took about three weeks on our first submission. It was not complicated, but it required more paperwork than handing a card to a receptionist. By the second and third submissions I knew what to do and it was straightforward.</p>

<h2>The One Thing I Wish I Had Understood Earlier</h2>
<p>Ask for the itemized bill. Every time. At every provider.</p>
<p>When Impact reprices a bill using Reference Based Pricing, they work from the itemized line-item bill, not the summary bill. When we submitted our first ER visit as a single-page summary, the process took longer because Impact requested the itemized version anyway. Now I ask for the itemized bill at checkout or within a week of the visit, and I attach it when I submit to Impact. It cuts weeks off the processing time.</p>
<p>I tell every client this before they enroll. It is not in the member handbook in a prominent place. It is the single most practical piece of advice I can give a new Impact member.</p>

<h2>Who I Recommend Impact To</h2>
<p>Healthy families and individuals who are paying $800 per month or more for coverage they rarely use. Self-employed Granite Staters with no employer coverage options. Families who recently lost coverage and are looking at high COBRA bills. Seniors on Medicare who want supplemental coverage for what Medicare does not cover.</p>
<p>Who I do not recommend it to: people in active cancer treatment or complex ongoing care, families expecting a baby in the next 10 months, or people who would be financially destroyed by a year of out-of-pocket costs if they had an ineligible bill. Health sharing requires financial resilience. It is not the same as insurance.</p>
<p>If you want to talk through your specific situation, book a free consultation. I will give you the same honest picture I just gave you here, applied to your household's actual numbers.</p>
    `,
  },

  {
    slug: "health-sharing-vs-insurance-nh",
    title: "Health Sharing vs. Health Insurance in New Hampshire: The Real Comparison",
    excerpt:
      "Side-by-side comparison for NH families. Costs, networks, what is covered, what is not, and who each is right for.",
    date: "2026-03-05",
    readTime: "10 min read",
    category: "Comparisons",
    content: `
<p>Health sharing and health insurance solve the same problem differently. For NH families comparing their options in 2026, here is a direct side-by-side comparison that covers cost, network, coverage, limitations, and who each option is actually right for.</p>

<h2>Cost Comparison for NH Families</h2>
<p>This is where health sharing wins decisively for families that qualify. An unsubsidized ACA family plan through Anthem, Ambetter, or Harvard Pilgrim in New Hampshire runs $1,200 to $2,000 per month depending on the tier and family composition. COBRA for a family averages approximately $1,700 per month. A family plan through Impact Health Sharing starts at $378 per month.</p>
<p>For a family of four in Manchester or Nashua that no longer qualifies for ACA subsidies, the difference between a Silver ACA plan and an equivalent Impact plan is approximately $700 to $1,100 per month, or $8,400 to $13,200 per year.</p>

<h2>Network Comparison</h2>
<p>Traditional ACA and COBRA plans in New Hampshire operate on provider networks. Anthem's network in NH excludes certain hospitals and specialists. Harvard Pilgrim's network is strong in southeastern NH but thinner in northern and western parts of the state. Out-of-network care typically costs significantly more, and some services are not covered at all out-of-network.</p>
<p>Impact Health Sharing has no network. You can see any licensed provider in the United States. You present as a cash-pay patient and pay the self-pay rate, which Impact then reprices downward through Reference Based Pricing. For NH families in rural areas, or families that travel for work, the absence of network restrictions is a significant practical advantage.</p>

<h2>What Is Covered: Side by Side</h2>
<ul>
<li><strong>Emergency care:</strong> Both cover it. Impact reprices the bill before your PRA applies; insurance applies your deductible before the plan pays.</li>
<li><strong>Telehealth:</strong> Impact includes 24/7 telehealth at no cost. ACA plans vary widely; many charge $40 to $75 per telehealth visit. COBRA plans inherit whatever the employer plan offered.</li>
<li><strong>Mental health / therapy:</strong> Impact includes 3 teletherapy visits per month per topic per member. ACA plans must include mental health coverage under the ACA, but access and cost vary significantly by carrier.</li>
<li><strong>Prescriptions:</strong> Impact covers generic prescriptions at $10 or under at $0 cost to the member. Brand-name prescriptions require a different handling process. ACA plans have formularies with tier-based cost sharing.</li>
<li><strong>Preventive care:</strong> ACA plans cover preventive care (annual physicals, screenings) at 100 percent in-network under ACA requirements. Impact does not share routine preventive care costs, though Impact members get $150/year in wellness credits toward their PRA.</li>
<li><strong>Dental and vision:</strong> Neither ACA plans nor Impact typically include dental and vision in standard plans. Both require separate coverage or add-ons.</li>
<li><strong>Maternity:</strong> ACA plans cover maternity as an essential health benefit. Impact requires a 10-month membership waiting period before maternity expenses are eligible for sharing.</li>
</ul>

<h2>Pre-Existing Conditions</h2>
<p>This is the most important distinction for many families. ACA plans are required by law to cover pre-existing conditions with no waiting period and no exclusion. If you have Type 1 diabetes, multiple sclerosis, or any ongoing condition, your ACA plan covers related expenses from day one.</p>
<p>Impact Health Sharing has a sharing limitation period for pre-existing conditions. Expenses related to conditions diagnosed or treated in the 36 months before enrollment may not be eligible for sharing for 12 to 36 months. After that period, the condition is treated like any other eligible expense. If you have active ongoing medical needs, this waiting period is the single most important factor in your decision.</p>

<h2>Annual Limits and Guarantees</h2>
<p>ACA plans cannot impose annual or lifetime dollar limits on essential health benefits. This is a legal protection with no equivalent in health sharing. Impact Health Sharing has a $500,000 per-incident sharing limit. For catastrophic conditions requiring $1 million or more in care, that limit matters. This is not a likely scenario for most members, but it is a real distinction and I always mention it.</p>
<p>Sharing is also not legally guaranteed. Impact has shared all eligible expenses for 40 years, but there is no legal contract requiring them to share any specific bill. Insurance companies are legally required to pay covered claims. This difference in legal structure is real, and you should understand it before joining.</p>

<h2>Who Health Sharing Is Right For</h2>
<p>Generally healthy families or individuals whose primary concern is the monthly cost of coverage. Self-employed NH workers with no employer plan. Families in the COBRA window looking for a lower-cost alternative. People with no ongoing pre-existing conditions or whose pre-existing conditions were treated more than 36 months ago. NH residents in rural areas who want provider flexibility.</p>

<h2>Who Should Stick With Insurance</h2>
<p>Anyone in active cancer treatment or managing a chronic condition with ongoing expensive care requirements. Families expecting a baby in the next 10 months. Anyone who cannot financially absorb a large out-of-pocket expense during a potential sharing limitation period. People whose income qualifies them for meaningful ACA subsidies, where the subsidized plan may be cost-competitive.</p>
<p>If you want to run the comparison for your specific household, book a free consultation. I will give you both sets of numbers and tell you honestly which direction makes sense for you.</p>
    `,
  },

  {
    slug: "self-employed-health-insurance-nh-2026",
    title: "Health Insurance for Self-Employed Workers in New Hampshire: Your 2026 Options",
    excerpt:
      "Freelancers, 1099 contractors, and sole proprietors in NH face the worst of the ACA market. Here are your real options in 2026.",
    date: "2026-02-28",
    readTime: "8 min read",
    category: "Self-Employed",
    content: `
<p>Self-employed workers in New Hampshire pay the highest effective healthcare costs of any group in the state. Without an employer sharing the premium, and often without subsidy access as income rises, a freelancer or sole proprietor in NH can end up paying more for health coverage than any other single line item in their budget. Here are your real options in 2026.</p>

<h2>The ACA Marketplace for Self-Employed NH Workers</h2>
<p>The New Hampshire health insurance marketplace offers plans from Anthem, Ambetter, and Harvard Pilgrim. If your net income from self-employment qualifies you for ACA subsidies, the marketplace may still be the right choice. Subsidies are available for individuals earning up to 400 percent of the federal poverty line, which for a single person in 2026 is approximately $58,320.</p>
<p>The problem for self-employed workers is income variability. If you have a strong year, your income can push you above the subsidy cliff, leaving you with a retroactive subsidy repayment at tax time and an unsubsidized premium going forward. Many self-employed Granite Staters spend more time managing their income around the subsidy cliff than they spend actually running their business.</p>
<p>For anyone earning above the subsidy threshold, an unsubsidized Silver plan in NH costs approximately $600 to $900 per month for an individual and $1,400 to $2,000 per month for a family.</p>

<h2>Health Sharing as a Primary Option for Self-Employed Workers</h2>
<p>For self-employed NH workers who do not qualify for meaningful ACA subsidies, health sharing is the most compelling alternative. Impact Health Sharing membership for a single adult starts at $73 per month, which is 80 to 90 percent less than an unsubsidized individual ACA plan.</p>
<p>Self-employed workers are a particularly good fit for health sharing for three reasons. First, they are accustomed to managing their own finances and absorbing variable expenses, which is a useful mindset for the cost-sharing model. Second, the no-network structure is valuable for people who travel for work or move between service areas. Third, the month-to-month structure fits the variable income reality of freelance work better than an annual insurance contract.</p>

<h2>HSA Compatibility</h2>
<p>If you currently have a Health Savings Account (HSA) tied to a high-deductible health plan, switching to health sharing will change your HSA eligibility. You can only contribute to an HSA if you are enrolled in a qualifying high-deductible health plan. Health sharing is not a qualifying HDHP.</p>
<p>You can still use existing HSA funds for qualified medical expenses after switching to health sharing. You just cannot make new contributions while you are a health sharing member. If you have significant HSA funds, factor that into your transition planning. For clients with large HSA balances, I typically recommend drawing down the HSA on eligible expenses during the first year of health sharing membership.</p>

<h2>Tax Deductibility of Health Sharing Contributions</h2>
<p>I want to be direct here because I have seen misleading claims on other health sharing websites. Health sharing contributions are NOT deductible as health insurance premiums on your federal tax return. Self-employed individuals can deduct 100 percent of health insurance premiums paid for themselves and their family. Health sharing is not health insurance, and the IRS does not treat it as such for deduction purposes.</p>
<p>Some tax advisors have argued for deductibility under other code sections, but this is not settled law. If deductibility matters to your decision, talk to your CPA before making a change. I will not tell you that health sharing is deductible when the IRS has not clearly confirmed it.</p>

<h2>Who Qualifies for Impact Health Sharing</h2>
<p>Impact does not require a specific religious affiliation. Members affirm a commitment to a healthy lifestyle and agree to the program guidelines, which include maintaining healthy lifestyle practices. There is no income requirement, no employment verification, and no underwriting. Enrollment takes 5 to 7 minutes and coverage begins the first of the following month.</p>
<p>The main eligibility consideration for self-employed workers is the pre-existing condition sharing limitation period. If you have an ongoing medical condition that was active in the past 36 months, those expenses may not be shareable for up to 36 months after enrollment. If your health history is relatively clean, this limitation is unlikely to apply significantly.</p>
<p>If you are a freelancer, 1099 contractor, or sole proprietor in New Hampshire and you are paying $600 or more per month for individual coverage, book a free consultation. The comparison will take 20 minutes and you will know whether switching makes sense for your specific situation.</p>
    `,
  },

  {
    slug: "impact-health-sharing-pre-existing-conditions",
    title: "Does Impact Health Sharing Cover Pre-Existing Conditions?",
    excerpt:
      "Honest answer: yes, with a sharing limitation period. Here is exactly how it works and what to expect.",
    date: "2026-02-20",
    readTime: "6 min read",
    category: "Coverage",
    content: `
<p>Yes, Impact Health Sharing covers pre-existing conditions, but not immediately. There is a sharing limitation period that typically runs 12 to 36 months depending on the condition. After that period ends, the condition is treated exactly like any other eligible medical expense. Here is what you need to know before you decide.</p>

<h2>How Impact Defines Pre-Existing Conditions</h2>
<p>Impact Health Sharing defines a pre-existing condition as any condition that was diagnosed, treated, or for which you received medical advice or prescription medication in the 36 months prior to your enrollment date. This is a standard definition in health sharing, and it is broader than you might expect.</p>
<p>It is not just conditions you were actively managing. If you had a single doctor visit for back pain 18 months ago and received a prescription, back-related expenses could be subject to a sharing limitation period. If you had a kidney stone two years ago, kidney-related expenses may have a limitation period even if you have had no recurrence. The 36-month lookback is the window that matters.</p>

<h2>What the Sharing Limitation Period Looks Like in Practice</h2>
<p>For conditions diagnosed or treated 24 to 36 months before enrollment, the limitation period is typically 12 months. After 12 months of membership, those condition-related expenses become fully eligible for sharing.</p>
<p>For conditions diagnosed or treated within 24 months of enrollment, the limitation period is typically 24 to 36 months. The more recent the condition and the more actively it was treated, the longer the limitation period tends to be.</p>
<p>During the limitation period, you can still use Impact for all other eligible medical expenses. The limitation applies only to expenses directly related to the pre-existing condition. If you have a sharing limitation on a knee injury from two years ago and then you break your arm, the arm treatment is fully eligible from day one.</p>

<h2>What Is Eligible Immediately</h2>
<p>Any medical need that arises fresh after your enrollment date, with no connection to a prior condition, is eligible for sharing immediately after your PRA is met. Emergency care, new illnesses, accidents, surgeries unrelated to prior conditions, telehealth, preventive wellness visits within the program guidelines, and prescriptions for new conditions are all eligible from the start of your membership.</p>

<h2>What to Do If You Have an Active Condition</h2>
<p>If you have an active condition that requires regular expensive care, health sharing may not be the right primary coverage for you right now. I will tell you that directly if it applies to your situation. The sharing limitation period for an active, ongoing condition means you could be out-of-pocket for all related expenses for up to 36 months after joining. For some conditions, that out-of-pocket risk is too large to absorb.</p>
<p>The right approach is to map your medical history against the limitation period timeline. If your last treatment for a condition was 28 months ago and you are generally healthy, the limitation period might be down to 8 months from enrollment. If you had treatment last month, you are looking at a full 36-month period.</p>
<p>Book a consultation and bring a list of any conditions you have been treated for in the past three years. I will walk through the limitation period timeline for each one and give you an honest picture of what would and would not be shareable from day one, and when everything would become fully eligible.</p>
    `,
  },

  {
    slug: "health-sharing-scandals-is-impact-safe",
    title: "Health Sharing Scandals: Is Impact Health Sharing Safe?",
    excerpt:
      "Aliera, Trinity, Sharity, Liberty. NH families have reason to be skeptical. Here is why Impact is different.",
    date: "2026-02-10",
    readTime: "8 min read",
    category: "Trust",
    content: `
<p>The health sharing space has real scandals, and New Hampshire families specifically have been hurt by them. Before I enrolled my own family in Impact Health Sharing, I spent weeks researching these failures and verifying that Impact is structurally different from the organizations that collapsed or were shut down. Here is what I found.</p>

<h2>The Scandals Are Real</h2>
<p>I am not going to minimize what happened to real families. These are not fringe cases.</p>
<p><strong>Aliera Health / Trinity HealthShare.</strong> Aliera operated Trinity HealthShare as a health sharing ministry in New Hampshire. In 2020, the NH Insurance Department issued a cease-and-desist order and found that Trinity was operating as an unlicensed insurance company. Members were left with unpaid medical bills. Keith Meehan, who ran operations in the Rochester, NH area, was among those who enrolled clients into Trinity. The NHID found the organization fundamentally deceptive. Real NH families had real bills go unshared.</p>
<p><strong>Sharity Ministries.</strong> Sharity, formerly known as OneShare Health, filed for bankruptcy in 2022, leaving thousands of members with unpaid bills. The organization had grown rapidly, taken on more sharing obligations than its reserves could support, and ultimately failed its members.</p>
<p><strong>Liberty HealthShare.</strong> A ProPublica investigation found serious questions about Liberty's financial management, vendor relationships, and member fund allocation. Liberty disputed the findings, but the investigation raised credible concerns about how member contributions were being used.</p>
<p>If you talked to someone in New Hampshire who had a bad experience with health sharing, there is a real chance it was through one of these organizations. Your skepticism is justified.</p>

<h2>What Makes Impact Health Sharing Different</h2>
<p>I verified Impact's structure from primary sources before I enrolled my family. Here is what I found that distinguishes Impact from the organizations above.</p>
<p><strong>Genuine 501(c)(3) nonprofit since 1984.</strong> Impact Health Sharing, formerly known as Christian Care Ministry, has operated continuously as a nonprofit since 1984. This is not a recently formed nonprofit shell with a for-profit company underneath it. The nonprofit has four decades of continuous operation, published financials, and a consistent program structure.</p>
<p><strong>No family-owned vendor contracts.</strong> One of the red flags in several health sharing failures was that the organization was paying significant fees to companies owned by the same people running the sharing ministry. This created a structure where member contributions were being diverted to insiders before reaching member medical bills. Impact does not have this structure.</p>
<p><strong>100 percent contribution allocation.</strong> Every dollar of Impact member contributions goes toward sharing member medical costs. Impact publishes its allocation and it is auditable. The management and operating costs are funded separately from member contributions.</p>
<p><strong>Federally qualified HCSM status.</strong> Impact meets the federal definition of a Health Care Sharing Ministry under Section 5000A of the ACA. Organizations like Aliera were found to not genuinely meet this standard despite claiming to. Impact's federally qualified status means it has met the legal definition of an HCSM, which carries specific structural requirements.</p>

<h2>How to Evaluate Any Health Sharing Organization</h2>
<p>Whether you enroll with Impact or another organization, here is what to verify before you join.</p>
<ul>
<li>Is it a genuine nonprofit? Look up the organization on the IRS's Tax Exempt Organization Search and verify 501(c)(3) status. Check how long the nonprofit has been in existence.</li>
<li>Does it publish its financials? Legitimate nonprofits file Form 990s that are publicly available. Look at the 990 to see where money is going.</li>
<li>Are there vendor relationships between the sharing organization and companies owned by its officers? This is the warning sign that appeared in several failures.</li>
<li>What is the sharing percentage track record? Ask for documented evidence of what percentage of submitted eligible bills have been shared over the past five years.</li>
<li>Has the NH Insurance Department taken any action against the organization? Search the NHID website for any bulletins or enforcement actions.</li>
</ul>
<p>I did all of this research on Impact before I enrolled my family. If you want to see the sources I found, book a consultation and I will walk you through my verification process. I think the best decision you can make is an informed one, even if it means you end up not enrolling.</p>
    `,
  },

  {
    slug: "medicare-supplement-health-sharing-nh",
    title: "Medicare Supplement Alternatives in New Hampshire: What Seniors Should Know",
    excerpt:
      "Traditional Medicare supplements (Medigap) cost $150 to $400 per month on top of Part B. Impact Health Sharing offers a lower-cost alternative.",
    date: "2026-01-30",
    readTime: "7 min read",
    category: "Seniors",
    content: `
<p>Medicare Part A and Part B cover a significant portion of healthcare costs for NH seniors, but they leave meaningful gaps. Traditional Medigap policies fill those gaps but add $150 to $400 per month on top of your Part B premium. Impact Health Sharing offers a supplemental option that many NH seniors find costs significantly less. Here is what you need to know.</p>

<h2>What Medicare A and B Leave Uncovered</h2>
<p>Medicare Part A covers hospital inpatient stays, but with a deductible ($1,676 per benefit period in 2026) and coinsurance requirements for longer stays. Part B covers outpatient care, but with a 20 percent coinsurance that has no out-of-pocket cap. There is no limit on what you can owe under original Medicare in a catastrophic year. For a major surgery or extended hospital stay, a Part A and B only patient can face tens of thousands of dollars in out-of-pocket costs.</p>
<p>Part A and Part B also do not cover prescription drugs (Part D is separate), dental care, vision care, hearing aids, or most long-term care. The gaps are real and meaningful for anyone managing their retirement healthcare budget.</p>

<h2>What Medigap Costs in New Hampshire</h2>
<p>Medigap (Medicare Supplement) policies in New Hampshire fill the gaps left by Parts A and B. The most popular plans are Plan G and Plan N. In New Hampshire in 2026, a 65-year-old can expect to pay approximately $150 to $250 per month for Plan G and $120 to $200 per month for Plan N, depending on the insurer. Premiums increase with age and can reach $300 to $400 per month for seniors in their mid-70s or older.</p>
<p>Medigap has real advantages: it works with any Medicare-accepting provider nationwide, it provides predictable costs, and it is guaranteed renewable regardless of health status. For seniors managing complex or ongoing conditions, the predictability of Medigap is valuable.</p>

<h2>How Impact Health Sharing Supplements Medicare Differently</h2>
<p>Impact Health Sharing offers a supplemental membership specifically designed for seniors enrolled in Medicare A and B. Rather than replacing Medicare, Impact fills gaps alongside it. The membership costs significantly less than a typical Medigap policy, with rates varying by age and the PRA level you choose.</p>
<p>The key difference in how it works: when a senior Impact member has a medical expense, Medicare pays its share first. Then the remaining eligible balance goes to Impact for repricing and sharing. The bill repricing advantage still applies, which can reduce what is left after Medicare before the Impact sharing calculation even begins.</p>
<p>Impact's supplemental senior membership also includes the same telehealth and teletherapy benefits as standard membership. For seniors managing chronic conditions with regular check-ins that do not require in-person visits, unlimited telehealth at no cost can be genuinely valuable.</p>

<h2>What Impact Covers That Medigap Does Not</h2>
<p>Medigap covers the gaps in Medicare A and B but nothing beyond that structure. Impact's supplemental membership adds telehealth (not typically in Medigap), teletherapy access, and the bill repricing benefit on any balance Medicare leaves unpaid.</p>
<p>Medigap covers what Impact does not: there is no sharing limitation period in Medigap for conditions that Medicare covers. Medigap provides guaranteed payment (as an insurance product) rather than community sharing. For seniors with complex, ongoing conditions that Medicare covers heavily, Medigap's guaranteed payment structure may be more valuable than Impact's lower cost.</p>

<h2>Who This Option Is Right For</h2>
<p>NH seniors who are generally healthy, have Medicare A and B, and whose primary concern is the monthly cost of supplemental coverage. Seniors who have already waited through pre-existing condition sharing limitation periods (or whose conditions were treated more than 36 months ago). Active seniors who would benefit from telehealth access for routine consultations.</p>
<p>Who should stick with Medigap: seniors managing active cancer, complex cardiovascular conditions, or any ongoing condition that requires frequent expensive care. The guaranteed payment and no-sharing-limitation structure of Medigap is more important than the cost savings for members in this situation.</p>
<p>If you are a New Hampshire senior on Medicare A and B and you want to understand whether the Impact supplemental membership could lower your monthly healthcare costs, book a free consultation. I will run the comparison for your specific situation and give you a direct recommendation.</p>
    `,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

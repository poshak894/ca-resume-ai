// Pre-written model answers for all CA Articleship interview questions
// Keyed by topic → question id

const ANSWERS = {
  Accounts: {
    1: {
      model_answer: "Capital expenditure is spending on assets that provide long-term benefits, such as buying machinery or computers — these are recorded on the balance sheet and depreciated over time. Revenue expenditure is day-to-day spending that benefits only the current period, like salaries, rent, and office supplies — these are fully expensed in the P&L. The key distinction is whether the spending creates a future economic benefit beyond the current year.",
      key_points: ["Capital expenditure → Balance Sheet (asset)", "Revenue expenditure → P&L (expense in current period)", "Depreciation applies only to capital expenditure"],
      common_mistake: "Confusing repairs (revenue) with improvements/upgrades (capital) — a roof repair is revenue expenditure but adding a new floor is capital expenditure.",
      expert_tip: "At Big 4 firms, this distinction is critical during fixed asset audits — always check if the client is capitalising repairs to inflate assets."
    },
    2: {
      model_answer: "The accounting equation is Assets = Liabilities + Capital (Owner's Equity). It means everything a business owns (assets) is funded either by creditors (liabilities) or by owners (capital). For example, if a business buys a machine worth ₹5 lakh by taking a bank loan of ₹3 lakh and paying ₹2 lakh from own funds, then Assets = ₹5L, Liabilities = ₹3L, Capital = ₹2L — the equation balances. This is the foundation of double-entry bookkeeping.",
      key_points: ["Assets = Liabilities + Equity is always in balance", "Every transaction affects at least 2 accounts", "Double-entry ensures the equation never breaks"],
      common_mistake: "Candidates forget that drawings reduce capital, not create a liability — always adjust equity side correctly.",
      expert_tip: "In audit, understanding this equation helps you quickly spot balance sheet misclassifications — e.g., a liability recorded as equity to improve ratios."
    },
    3: {
      model_answer: "IFRS is the global standard set by the IASB, while Ind AS is India's converged version adapted for Indian legal and regulatory requirements. The key differences include: Ind AS 101 requires first-time adoption reconciliation, Ind AS follows the rupee functional currency context, and some standards like Ind AS 116 (leases) differ slightly in transition provisions. Conceptually they are very similar, but India has carved out specific exemptions — for example, the option to continue with old carrying values under Ind AS 101.",
      key_points: ["Ind AS is converged with IFRS but not identical", "Key carve-outs: insurance contracts, macro-hedging", "Ind AS uses Companies Act 2013 as the legal framework"],
      common_mistake: "Saying Ind AS and IFRS are the same — interviewers from Big 4 will probe on the carve-outs and you need to know at least 2-3 specific differences.",
      expert_tip: "At Deloitte/EY, IFRS vs Ind AS knowledge is tested because they audit multinationals — mention Ind AS 115 (Revenue) and Ind AS 116 (Leases) as key areas."
    },
    4: {
      model_answer: "Under the Straight Line Method (SLM), depreciation is charged equally every year — it's calculated as (Cost − Scrap) ÷ Useful Life. Under the Written Down Value (WDV) method, depreciation is charged as a fixed percentage on the reducing book value, meaning higher depreciation in early years and lower later. Companies Act 2013 prescribes useful lives for SLM, while WDV rates are used for income tax purposes under the Income Tax Act.",
      key_points: ["SLM: equal charge every year, simpler for financial reporting", "WDV: higher charge early, but matches tax treatment", "Companies Act 2013 mandates useful life approach"],
      common_mistake: "Mixing up which method is used for Companies Act vs Income Tax — Tax uses WDV rates, not SLM.",
      expert_tip: "In audit, check if management has changed from WDV to SLM mid-way — this is a change in accounting estimate and must be disclosed under Ind AS 8."
    },
    5: {
      model_answer: "During consolidation, we eliminate intra-group transactions to present the group as a single economic entity. Key adjustments include: eliminating the parent's investment against the subsidiary's equity (goodwill arises if cost > share of net assets), eliminating inter-company sales and corresponding purchases, eliminating inter-company balances like loans and debtors/creditors, and eliminating unrealised profit on inter-company stock transfers. Non-controlling interests are carved out separately.",
      key_points: ["Eliminate investment in subsidiary vs subsidiary's equity", "Remove inter-company transactions (sales, loans, dividends)", "Unrealised profit on intercompany inventory must be adjusted"],
      common_mistake: "Forgetting to adjust for unrealised profit in closing stock when goods are sold between group companies — this inflates group profits.",
      expert_tip: "Group audit is Big 4's bread and butter — showing knowledge of CAS (Component Auditor) roles and consolidation eliminates sets you apart."
    },
    6: {
      model_answer: "Under Ind AS 12, a Deferred Tax Asset (DTA) arises when the tax base of an asset is greater than its carrying amount, or when a liability's tax base is less than its carrying amount — essentially when you pay more tax now but will pay less in future. A Deferred Tax Liability (DTL) is the reverse — you pay less tax now but more later, like accelerated depreciation for tax. The deferred tax is calculated at the tax rate expected when the temporary difference reverses, and a DTA is only recognised when future taxable profit is probable.",
      key_points: ["DTA: higher tax paid now, benefit in future", "DTL: tax postponed to future, e.g., WDV vs SLM difference", "DTA recognition requires probability of future taxable profit"],
      common_mistake: "Recognising a DTA on losses without assessing whether future profits are probable — this inflates assets and is a common audit red flag.",
      expert_tip: "In Big 4 audits, deferred tax notes are always scrutinised — check if management has recognised DTA on carried-forward losses without sufficient evidence of future taxable income."
    },
  },

  Taxation: {
    1: {
      model_answer: "Direct taxes are levied directly on income or wealth of the taxpayer and cannot be shifted — examples include Income Tax, Corporate Tax, and Capital Gains Tax. Indirect taxes are levied on goods and services and can be passed on to the consumer — examples include GST, Customs Duty, and Excise Duty. In India, direct taxes are administered by the CBDT and indirect taxes by the CBIC.",
      key_points: ["Direct: paid by the person who bears the burden (income tax)", "Indirect: can be shifted to consumer (GST)", "CBDT handles direct tax, CBIC handles indirect tax"],
      common_mistake: "Saying GST is a direct tax — it's indirect because the economic burden falls on the end consumer even though the supplier collects and pays it.",
      expert_tip: "Big 4 tax teams work across both direct and indirect — being clear on this distinction shows you understand the full tax landscape."
    },
    2: {
      model_answer: "TDS stands for Tax Deducted at Source — it's a mechanism where the payer deducts tax at the time of making certain payments and deposits it with the government. It applies to salary, interest, rent, professional fees, contractor payments and more under various sections like 192, 194A, 194I, 194J, 194C. The deductee can claim TDS as a credit in their ITR. TDS rates vary by payment type and whether the deductee has a PAN.",
      key_points: ["TDS is deducted by payer, not payee", "Key sections: 192 (salary), 194C (contractor), 194J (professional fees)", "TDS must be deposited and Form 26AS reflects credits"],
      common_mistake: "Confusing TDS with advance tax — TDS is deducted by the payer, advance tax is paid by the taxpayer themselves on self-assessment.",
      expert_tip: "In articleship, you'll file TDS returns (Form 24Q, 26Q) regularly — knowing the due dates (7th of next month, quarterly returns) is practically useful."
    },
    3: {
      model_answer: "Input Tax Credit (ITC) under GST allows a registered business to reduce its output GST liability by the GST it has already paid on purchases. For example, if a manufacturer pays ₹18,000 GST on raw materials and collects ₹30,000 GST on sales, the net GST payable is only ₹12,000. Conditions for claiming ITC include: valid tax invoice, goods/services received, supplier has filed and paid GST, and return (GSTR-3B) filed within time. ITC cannot be claimed on items like personal use, food & beverages unless specifically allowed.",
      key_points: ["ITC = GST on inputs offset against GST on outputs", "Conditions: valid invoice, receipt, supplier compliance, timely filing", "Blocked credits: personal use, motor vehicles (generally), food"],
      common_mistake: "Claiming ITC without verifying GSTR-2B reconciliation — if the supplier hasn't filed, you legally cannot claim that ITC even with a valid invoice.",
      expert_tip: "Big 4 tax teams do GST audits and ITC reconciliation is a major task — showing GSTR-2A vs GSTR-2B vs Books reconciliation knowledge is very impressive."
    },
    4: {
      model_answer: "Tax planning is legal arrangement of financial affairs to minimize tax within the framework of law — like investing in ELSS to claim 80C deduction. Tax avoidance is using legal loopholes to reduce tax in ways not intended by parliament — it's legal but ethically questionable. Tax evasion is the illegal non-disclosure or misrepresentation of income to avoid tax — this is a criminal offence. The line between avoidance and planning is often blurred, which is why GAAR was introduced to counter arrangements that are abusive even if technically legal.",
      key_points: ["Planning: legal, intended by law (e.g., 80C investments)", "Avoidance: legal but misuses loopholes", "Evasion: illegal, leads to prosecution"],
      common_mistake: "Using 'tax avoidance' and 'tax evasion' interchangeably — a common mistake even among students who have studied taxation.",
      expert_tip: "Big 4 advisory teams walk this line every day with clients — demonstrating awareness of GAAR and ethical considerations shows maturity beyond the syllabus."
    },
    5: {
      model_answer: "Transfer pricing refers to the pricing of transactions between related parties (associated enterprises) in different tax jurisdictions. In India, it's governed by Sections 92-92F of the Income Tax Act and applies when Indian companies transact with foreign subsidiaries or group companies. The arm's length principle requires that transactions must be priced as if they were between independent parties. Methods include CUP, CPM, TNMM, and Profit Split. Companies must maintain Transfer Pricing documentation and file Form 3CEB certified by a CA.",
      key_points: ["Governs pricing of inter-company cross-border transactions", "Arm's length principle is the standard", "Form 3CEB filing mandatory for international transactions above threshold"],
      common_mistake: "Thinking transfer pricing only applies to goods — it applies to services, royalties, loans, and guarantees between group companies too.",
      expert_tip: "Big 4 firms have dedicated TP practices — even basic awareness of TNMM (most commonly used method) and benchmarking studies shows genuine interest in the specialty."
    },
    6: {
      model_answer: "GAAR (General Anti-Avoidance Rules) under Chapter X-A of the Income Tax Act allows tax authorities to deny tax benefits of any arrangement if it's found to be an 'impermissible avoidance arrangement' — i.e., the main purpose is to obtain a tax benefit and lacks commercial substance. It can override tax treaties (DTAAs) in some cases. GAAR was introduced because specific anti-avoidance rules couldn't cover every aggressive structure. The threshold is ₹3 crore of tax benefit.",
      key_points: ["Can override treaty benefits if arrangement lacks commercial substance", "Threshold: ₹3 crore tax benefit", "4 tests: tainted element, misuse test, bona-fide test, arm's length test"],
      common_mistake: "Saying GAAR overrides all tax treaties — it doesn't automatically override; the assessing officer must follow the prescribed procedure and obtain approval.",
      expert_tip: "Big 4 international tax teams use GAAR analysis in structuring opinions — mentioning it shows you're thinking at an advisory level, not just compliance."
    },
  },

  Audit: {
    1: {
      model_answer: "Internal audit is conducted by employees or consultants appointed by management to evaluate internal controls, risk management and operational efficiency — it reports to management or the audit committee. Statutory audit is mandated by law (Companies Act 2013) and conducted by an independent external CA to provide assurance on whether financial statements show a true and fair view — it reports to shareholders. The key difference is: internal audit serves management, statutory audit serves shareholders and regulators.",
      key_points: ["Internal: appointed by management, operational focus", "Statutory: appointed by shareholders, mandatory by Companies Act", "Statutory auditor must be independent; internal auditor need not be"],
      common_mistake: "Saying both have the same objective — internal audit focuses on operations and controls while statutory audit focuses on financial statement truth and fairness.",
      expert_tip: "Big 4 firms do both internal and statutory audits for different clients — knowing how they complement each other (e.g., using internal audit work in statutory audit) is a practical differentiator."
    },
    2: {
      model_answer: "Audit assertions are claims made by management — implicitly or explicitly — about the recognition, measurement, and presentation of items in the financial statements. The main assertions are: Existence (asset exists), Completeness (all transactions recorded), Valuation (amounts are correct), Rights & Obligations (entity owns/owes), and Presentation & Disclosure (properly classified). The auditor designs procedures to test each assertion — for example, physical verification tests Existence while third-party confirmations test Rights and Valuation.",
      key_points: ["CRAVAT: Completeness, Rights, Accuracy, Valuation, Existence, Presentation", "Different procedures test different assertions", "Auditor selects assertions based on risk assessment"],
      common_mistake: "Designing one procedure and claiming it tests all assertions — each procedure has strengths; complement them to achieve comprehensive coverage.",
      expert_tip: "In Big 4 audit, every audit step in the file must be mapped to an assertion — interviewers will ask you to map a procedure to assertions, so practise this."
    },
    3: {
      model_answer: "Materiality is a threshold below which misstatements (individually or in aggregate) would not influence the decisions of a reasonable financial statement user. Overall materiality is typically computed as a percentage of a benchmark — 5% of profit before tax, 0.5-1% of revenue, or 1-2% of total assets depending on the entity. Performance materiality (a lower amount) is set to reduce the risk that aggregate uncorrected misstatements exceed overall materiality. SA 320 governs materiality in Indian audits.",
      key_points: ["Materiality = judgment threshold for misstatements", "Benchmark: 5% PBT / 1% revenue / 2% assets typically", "Performance materiality is lower to allow for errors across procedures"],
      common_mistake: "Treating materiality as a fixed number — it's a judgment call that changes based on the entity, user needs, and nature of the financial statements.",
      expert_tip: "In Big 4 audit files, materiality must be documented, justified, and revisited if significant events occur during the audit — e.g., a big acquisition changes the benchmark."
    },
    4: {
      model_answer: "Audit risk is the risk that the auditor expresses an inappropriate opinion on financial statements that are materially misstated. It has three components: Inherent Risk (susceptibility of an assertion to misstatement due to the nature of the balance — e.g., complex estimates), Control Risk (risk that client's internal controls fail to prevent or detect a misstatement), and Detection Risk (risk that the auditor's own procedures miss a material misstatement). AR = IR × CR × DR — auditors control only Detection Risk through their procedures.",
      key_points: ["Audit Risk = Inherent Risk × Control Risk × Detection Risk", "Only Detection Risk is controlled by the auditor", "Higher IR+CR means lower DR needed → more testing required"],
      common_mistake: "Saying auditors can reduce inherent and control risk — they can only assess these; only detection risk can be reduced by doing more/better audit work.",
      expert_tip: "Big 4 audit is fully risk-based — in interviews, show you understand that high-risk areas (e.g., revenue recognition, management estimates) get more audit attention and more experienced staff."
    },
    5: {
      model_answer: "Auditing revenue under Ind AS 115 requires testing the 5-step model: identify the contract, identify performance obligations, determine transaction price, allocate to obligations, and recognize when/as obligations are satisfied. For a service company, I'd test that revenue is recognized over time (not upfront) if services are rendered continuously. I'd obtain a sample of contracts, agree terms to billing, trace to service delivery records, and check cut-off (revenue in correct period). I'd also check variable consideration estimates like discounts.",
      key_points: ["Test 5-step Ind AS 115 model for each revenue stream", "Key risk: cut-off — revenue booked in wrong period", "Obtain contracts, verify performance obligations met before recognition"],
      common_mistake: "Only checking if invoices are raised — revenue recognition under Ind AS 115 depends on performance obligation satisfaction, not invoicing.",
      expert_tip: "Revenue is a key audit risk at Big 4 — real firms test revenue with a sample of contracts, month-end cut-off procedures, and analytical review of revenue trends."
    },
    6: {
      model_answer: "For related party transactions (RPTs), I'd first obtain the complete list of related parties from management and cross-check with disclosures in the previous year and board minutes. Key procedures include: obtain board approval documentation for material RPTs, verify that pricing is at arm's length (compare with independent market prices), confirm that all RPTs are adequately disclosed per Ind AS 24, and check SEBI LODR compliance for listed entities. I'd also send direct confirmations to key related parties for balances outstanding.",
      key_points: ["Obtain complete related party list — cross-check board minutes and prior year", "Test arm's length pricing for material transactions", "Verify Ind AS 24 disclosures in financial statements"],
      common_mistake: "Relying solely on management's list of related parties — auditors must independently identify related parties by reviewing shareholding, board composition, and key management.",
      expert_tip: "RPTs are a hot area for regulators — at Big 4, audit teams always look for undisclosed related parties and transactions that may be designed to shift profits or hide liabilities."
    },
  },

  "Company Law": {
    1: {
      model_answer: "A Private Limited Company can have 2-200 shareholders, cannot invite the public to subscribe to shares, and has restrictions on share transfer — the shares are closely held. A Public Limited Company can have unlimited shareholders, can raise money from the public through IPO, and shares are freely transferable. Key differences: Pvt Ltd has 'Private Limited' in name, requires minimum 2 directors; Public Ltd has 'Limited' in name, requires minimum 3 directors and must prepare a prospectus for public offerings.",
      key_points: ["Pvt Ltd: max 200 members, no public subscription, restricted transfer", "Public Ltd: unlimited members, can list on stock exchange, free transfer", "Public Ltd needs 3 directors; Pvt Ltd needs 2"],
      common_mistake: "Saying private companies cannot have any external investors — they can have up to 200 shareholders including angel investors and private equity, just not from the general public.",
      expert_tip: "Most Big 4 clients are either public companies or subsidiaries of MNCs — understanding the compliance requirements for listed entities (SEBI LODR) alongside Companies Act is very useful."
    },
    2: {
      model_answer: "To incorporate a Private Limited Company in India, the key documents and steps include: obtaining DSC (Digital Signature Certificate) and DIN (Director Identification Number) for proposed directors, filing SPICe+ form on MCA portal with MOA and AOA, obtaining PAN and TAN (integrated in SPICe+), and an address proof for the registered office. Post-incorporation, we open a bank account and file Form INC-20A (commencement of business) within 180 days. The entire process is done online through the MCA21 portal.",
      key_points: ["DSC and DIN for all directors are prerequisites", "SPICe+ form integrates incorporation, PAN, TAN, EPFO, ESIC", "INC-20A must be filed within 180 days of incorporation"],
      common_mistake: "Thinking physical presence is needed — the entire incorporation process is online through MCA21; no physical visit to ROC is required.",
      expert_tip: "Company secretarial work is part of articleship in Big 4 advisory — knowing SPICe+ and the MCA21 portal practically is impressive in interviews."
    },
    3: {
      model_answer: "Under the Companies Act 2013, directors are fiduciaries of the company — they owe duties to the company, not to individual shareholders. Key duties under Section 166 include: duty to act in good faith in the best interest of the company, duty to act with due care and diligence, duty not to involve in situations of conflict of interest, duty not to achieve any undue gain, and duty not to assign their office. Directors can be held personally liable for wrongful trading, fraud, or breach of these duties.",
      key_points: ["Directors are fiduciaries — duties owed to company, not shareholders", "Key duties: bona fide, diligence, no conflict, no secret profit", "Personal liability for fraud, wrongful trading under Section 339"],
      common_mistake: "Saying directors work for shareholders — technically directors work for the company (a legal entity), though they are ultimately accountable to shareholders through AGMs.",
      expert_tip: "In M&A due diligence (common Big 4 work), director duties and related party approvals are always reviewed — knowing Section 188 (RPT approval by board/shareholders) is practically useful."
    },
    4: {
      model_answer: "Piercing the corporate veil means a court disregards the separate legal personality of a company and holds the shareholders or directors personally liable for the company's obligations. This happens in exceptional circumstances where the company is used as a facade for fraud, to evade legal obligations, or where the company is a mere alter ego of the controlling person. For example, in Gilford Motor Co v Horne, a former employee set up a company to solicit customers in breach of a non-compete — the court pierced the veil and held him personally liable.",
      key_points: ["Corporate veil = separate legal personality of a company", "Courts pierce it when company is used for fraud or evasion", "Also applies in agency, group liability, and tax evasion cases"],
      common_mistake: "Thinking veil-piercing is common — courts rarely do this; it's an exceptional remedy and the default presumption of separate personality is very strong.",
      expert_tip: "This concept is relevant in insolvency (IBC) and litigation work at Big 4 advisory — promoter personal guarantees and fraudulent trading actions often involve veil-piercing arguments."
    },
    5: {
      model_answer: "The National Company Law Tribunal (NCLT) is a quasi-judicial body established under the Companies Act 2013 that adjudicates corporate disputes. Its key jurisdictions include: hearing applications for compromise, arrangements and mergers (Sections 230-232), insolvency resolution under IBC 2016, oppression and mismanagement cases (Sections 241-244), winding up petitions, and class action suits. Appeals from NCLT go to NCLAT and then to the Supreme Court.",
      key_points: ["NCLT handles mergers, insolvency, oppression, winding up", "IBC proceedings (CIRP) are filed before NCLT", "NCLAT is the appellate authority"],
      common_mistake: "Confusing NCLT with company courts — NCLT replaced the Company Law Board (CLB) and High Courts' company jurisdiction; it's the single consolidated forum now.",
      expert_tip: "Big 4 restructuring and insolvency teams appear regularly before NCLT — knowing the CIRP timeline (180+90 days) and the roles of IRP/RP shows practical awareness."
    },
    6: {
      model_answer: "The Insolvency and Bankruptcy Code 2016 provides a time-bound process for resolving insolvency of companies. The Corporate Insolvency Resolution Process (CIRP) begins when a creditor files an application before NCLT, which admits it and appoints an Interim Resolution Professional (IRP) within 14 days. A moratorium is declared — no suits or proceedings can be initiated. The IRP takes control, constitutes a Committee of Creditors (CoC), and resolution plans are invited. The CoC approves a plan with 66% vote within 180 days (extendable by 90 days). If no plan is approved, the company goes into liquidation.",
      key_points: ["CIRP triggered by default of ₹1 crore+ (threshold as amended)", "Moratorium protects company from suits during resolution", "180+90 days timeline; 66% CoC vote needed to approve plan"],
      common_mistake: "Saying the promoter is immediately removed — the RP manages the company during CIRP but promoters can still submit a resolution plan (subject to Section 29A eligibility).",
      expert_tip: "IBC is one of the most active areas for Big 4 advisory in India — showing knowledge of waterfall distribution (Section 53) and the difference between secured and unsecured creditors in liquidation is impressive."
    },
  },

  "Cost Accounting": {
    1: {
      model_answer: "Marginal costing treats only variable costs as product costs — fixed costs are written off entirely as period costs in the current period's P&L. Absorption costing (also called full costing) includes both fixed and variable costs in the product cost, so fixed overheads are absorbed into inventory and only expensed when the product is sold. The key difference in profit: when production > sales, absorption costing shows higher profit because some fixed costs are trapped in closing stock — marginal costing shows lower profit as all fixed costs are expensed.",
      key_points: ["Marginal: only variable costs in product cost, fixed = period cost", "Absorption: both fixed and variable in product cost", "Profit difference = change in inventory × fixed overhead rate"],
      common_mistake: "Thinking marginal costing always shows lower profit than absorption — this is only true when production exceeds sales. When sales > production, marginal costing can show higher profit.",
      expert_tip: "Management decisions (make vs buy, pricing, product mix) always use marginal costing — absorption is for financial reporting. At Big 4, management accountants use both depending on context."
    },
    2: {
      model_answer: "A cost centre is any department or unit for which costs are accumulated but revenues are not separately tracked — it's responsible only for managing costs. Examples include HR, IT, and maintenance departments. A profit centre, by contrast, is responsible for both revenues and costs — its performance is measured by the profit it generates. Examples include a product division or a branch. Investment centres go further by also being responsible for capital allocation decisions.",
      key_points: ["Cost centre: costs only, no revenue responsibility (e.g., HR, IT)", "Profit centre: both revenue and costs, measured on profit", "Investment centre: also manages capital/assets (e.g., a subsidiary)"],
      common_mistake: "Calling every department a profit centre — most internal support departments are cost centres since they don't generate direct revenue.",
      expert_tip: "Cost centre analysis is common in management reporting engagements at Big 4 — showing understanding of how overheads are recharged from cost centres to profit centres demonstrates practical knowledge."
    },
    3: {
      model_answer: "Traditional costing uses a single overhead rate (usually based on labour hours or machine hours) to allocate all overheads — this can distort product costs in complex organisations with multiple activities. Activity-Based Costing identifies the activities that drive overhead costs (cost drivers) and assigns costs based on each product's actual consumption of those activities. For example, if Product A requires 10 purchase orders and Product B requires 1, ABC assigns more procurement cost to A — traditional costing may assign the same overhead to both based on labour hours.",
      key_points: ["Traditional: single rate (labour/machine hours) — simple but inaccurate", "ABC: multiple cost pools and drivers — more accurate but complex", "ABC helps identify unprofitable products hidden by traditional overhead averaging"],
      common_mistake: "Saying ABC is always better — it's more accurate but much more expensive to implement and maintain. Small companies are better off with traditional costing.",
      expert_tip: "Big 4 consulting teams help clients implement ABC and activity-based management (ABM) to improve pricing decisions — knowing the limitations (cost and complexity) shows balanced thinking."
    },
    4: {
      model_answer: "Variance analysis compares actual costs with standard (budgeted) costs and identifies the reasons for the difference. For materials, the key variances are: Material Price Variance (actual quantity at actual price vs actual quantity at standard price) and Material Usage Variance (standard quantity for actual production at standard price vs actual quantity at standard price). For example, if standard is 10 kg at ₹100/kg for 1 unit but actual was 11 kg at ₹95/kg: Price Variance = 11 × (100-95) = ₹55 (F); Usage Variance = (10-11) × 100 = ₹100 (A).",
      key_points: ["Material Cost Variance = Price Variance + Usage Variance", "Price Variance: who responsible? Purchasing department", "Usage Variance: who responsible? Production department"],
      common_mistake: "Confusing responsibility — price variance is purchasing's responsibility, usage variance is production's. Students often mix these up in variance investigations.",
      expert_tip: "Cost audit (under Cost Audit Rules) is mandatory for certain industries — in Big 4, cost audit assignments require detailed variance analysis and understanding of cost records."
    },
    5: {
      model_answer: "In management accounting, transfer pricing determines the price at which one division of a company sells goods or services to another division. The goal is to allocate profits fairly between divisions while motivating both to maximize overall company profit. Common methods include: market-based pricing (most objective, if market exists), cost-based pricing (full cost or marginal cost plus markup), and negotiated pricing (when divisions agree). The key challenge is that a price that maximizes one division's profit may not maximize the overall company's profit.",
      key_points: ["Internal transfer price affects divisional performance measurement", "Methods: market-based, cost-based, negotiated", "Suboptimal pricing can lead to bad make-vs-buy decisions"],
      common_mistake: "Confusing management accounting transfer pricing with tax-based transfer pricing — they have similar concepts but different objectives (performance measurement vs tax minimization).",
      expert_tip: "In Big 4 management consulting, transfer pricing policy is designed to align divisional incentives — mentioning the concept of goal congruence shows strategic-level thinking."
    },
    6: {
      model_answer: "Throughput accounting focuses on maximizing throughput (sales revenue minus direct materials — the only truly variable cost) while minimizing operating expenses and inventory. It's based on the Theory of Constraints (TOC) by Goldratt — the idea that every system has one binding constraint, and optimizing around it maximizes throughput. Contribution analysis is broader — it considers all variable costs (not just materials) and calculates contribution per unit and total to decide product mix. Throughput accounting is more radical in treating labour as a fixed cost.",
      key_points: ["Throughput = Sales − Direct Materials only", "Key metric: Throughput Accounting Ratio (TAR) = Throughput per bottleneck hour ÷ Overhead per hour", "Theory of Constraints: identify bottleneck, exploit it, subordinate everything else"],
      common_mistake: "Treating throughput as the same as contribution — throughput only deducts direct materials while contribution deducts all variable costs including variable labour and overheads.",
      expert_tip: "Throughput accounting is tested in CIMA/ICAI advanced papers and is used in lean manufacturing consulting — mentioning it shows exposure beyond standard exam content."
    },
  },

  "Soft Skills": {
    1: {
      model_answer: "I manage multiple assignments by first breaking each task into specific deliverables with deadlines, then using a priority matrix to identify what's urgent and important. I maintain a daily task list and communicate proactively with seniors if I see a conflict approaching — it's much better to flag early than to miss a deadline silently. During busy season, I've learned to batch similar tasks together and use early mornings for complex analytical work when focus is highest.",
      key_points: ["Prioritize using urgency vs importance framework", "Proactive communication with seniors before deadlines slip", "Batch similar tasks; protect high-focus time for complex work"],
      common_mistake: "Saying 'I work hard and stay late' — firms want systematic thinkers, not just hard workers. Show a process, not just effort.",
      expert_tip: "Big 4 busy seasons (Oct-Dec for direct tax, Jan-Mar for audit) are intense — showing you've thought about how to handle high-volume periods demonstrates realistic preparation."
    },
    2: {
      model_answer: "During my final year project, I was part of a 4-person team analyzing financial ratios for a set of listed companies. I took ownership of the data collection and standardization while coordinating with teammates on the analysis. When one team member fell behind, I helped by breaking down their section into smaller tasks and pair-working through the methodology. We delivered ahead of schedule and received commendation from our faculty. I learned that effective teams depend on individual accountability, not just group effort.",
      key_points: ["Show specific role and contribution, not vague 'team player'", "Include how you handled a difficulty within the team", "Connect the learning to the workplace context"],
      common_mistake: "Giving a generic teamwork example with no conflict or challenge — interviewers want to see how you behave when things aren't smooth.",
      expert_tip: "Big 4 audit teams are tight-knit and hierarchical — showing you respect the chain (trainee → senior → manager → partner) while still contributing proactively is the right tone."
    },
    3: {
      model_answer: "If I disagreed with a senior on an audit finding, I would first make sure I fully understand their reasoning — maybe there's context I'm missing. If I still had a different view, I'd present my analysis clearly and factually, supported by the relevant standard or guidance. I'd frame it as 'I want to make sure I understand this correctly' rather than a direct challenge. If we still disagreed, I'd escalate to the manager for a second perspective — it's about getting the right answer, not winning an argument.",
      key_points: ["Seek to understand first before disagreeing", "Support your view with standards/evidence, not opinions", "Involve manager if unresolved — escalation is professional, not political"],
      common_mistake: "Saying you'd simply defer to the senior to avoid conflict — auditors have professional responsibilities and must raise genuine concerns through proper channels.",
      expert_tip: "This question tests professional skepticism — a core audit virtue. Big 4 firms want people who can challenge respectfully, not yes-men who sign off on anything."
    },
    4: {
      model_answer: "During deadlines, I focus on maintaining quality by being clear about what 'done' means for each task — not everything needs the same level of perfection. I create checkpoints during the work, not just at the end, so errors are caught early. I communicate clearly with the team about status so no one is waiting on me. I also make sure to do a final review even under pressure — a 10-minute review has saved me from significant errors more than once.",
      key_points: ["Define minimum quality standards for each deliverable", "Build in mid-process checkpoints, not just final review", "Communicate status proactively so team can plan around you"],
      common_mistake: "Saying quality never suffers under deadline pressure — everyone knows that's not realistic. Show you manage the trade-off intelligently.",
      expert_tip: "In Big 4, the review culture (preparer → senior reviewer → manager → partner) is designed to catch errors — show you understand your role in that chain and support it."
    },
    5: {
      model_answer: "When I first encountered GST reconciliation during my internship, the process was entirely new to me. I spent the first evening reading through GSTR forms and watching a couple of instructional resources. The next morning I asked my senior for 30 minutes to walk me through their approach on a past file. By the end of the week I was completing reconciliations independently. The key was being upfront about what I didn't know, actively seeking guidance, and immediately applying what I learned.",
      key_points: ["Acknowledge the gap openly — don't fake it", "Show structured approach: self-learn + seek guidance + practice", "Demonstrate speed to independence"],
      common_mistake: "Choosing an example where learning wasn't challenging — pick something genuinely new and show the messy middle of learning, not just the clean outcome.",
      expert_tip: "Big 4 work involves constant on-the-job learning — every new client sector, every new standard. Showing you're a quick and self-directed learner is one of the most valuable signals."
    },
    6: {
      model_answer: "I'd first try to understand the reason for the client's reluctance — sometimes it's a misunderstanding of scope, or they're worried about what we'll find. I'd re-explain the purpose of the document in plain language and set a specific, reasonable deadline. If the client continued to withhold, I'd escalate to my senior immediately, document all requests including dates and responses, and the senior/manager would engage with client management or their legal team. As a last resort, the auditor may need to qualify the report for scope limitation.",
      key_points: ["Understand the reason for resistance first", "Document all requests formally with timestamps", "Escalate early — don't try to handle a difficult client situation alone as a trainee"],
      common_mistake: "Saying you'd keep asking the client indefinitely — there's a process: document, escalate, and if unresolved, it's a scope limitation that affects the audit report.",
      expert_tip: "Client management is a core skill at Big 4 — the ability to be firm but professional, and to know when to escalate, is something partners look for even in trainees."
    },
  },

  "Tell Me About Yourself": {
    1: {
      model_answer: "I'm currently pursuing my CA qualification and have completed my intermediate exams with a strong focus on audit and taxation. I chose CA because I wanted a career that combines financial expertise with real advisory impact — CA is the most credible qualification for that in India. During my studies I've been consistently drawn to audit and financial reporting, which is why I'm particularly excited about an articleship that gives me hands-on exposure to that work.",
      key_points: ["Brief academic background — don't narrate your entire life", "Connect your choice of CA to a specific professional goal", "End with why this firm/articleship is the next right step"],
      common_mistake: "Starting with 'My name is X and I was born in...' — jump straight to your professional identity and motivation. The interviewer knows your name.",
      expert_tip: "Treat this as your 90-second pitch — practice it until it sounds natural, not rehearsed. End with something that invites a follow-up question about your interest in the firm."
    },
    2: {
      model_answer: "My top three strengths are analytical thinking, attention to detail, and the ability to communicate complex information simply. I demonstrated analytical thinking when I constructed a ratio analysis model for my final year project that identified an earnings manipulation pattern in a sample company. My attention to detail helped me catch a double-counted entry during a mock audit exercise. And I regularly simplified concepts for my study group — the ability to explain a topic clearly means you truly understand it.",
      key_points: ["Name strengths that are relevant to CA work specifically", "Back each strength with a specific example — not just claims", "Three distinct strengths, not variations of the same trait"],
      common_mistake: "Listing generic strengths like 'hardworking and honest' — every candidate says that. Make strengths specific and evidence-backed.",
      expert_tip: "Big 4 interviews are structured and competency-based — this is essentially a competency question in disguise. Use mini-STAR format (Situation-Action-Result) for each strength."
    },
    3: {
      model_answer: "I genuinely enjoy Financial Reporting and Auditing the most. Financial reporting because it's the intersection of judgment and standards — applying Ind AS to real transactions requires both technical knowledge and critical thinking. Auditing because it's applied skepticism — you're essentially trying to prove the financial statements are correct rather than just assuming they are. Both subjects feel less like memorization and more like developing a way of thinking, which I find more intellectually engaging.",
      key_points: ["Pick subjects with a real connection to your career interest", "Explain the 'why' — not just 'I find it interesting'", "Connect subject interest to the role you're applying for"],
      common_mistake: "Saying 'I enjoy all subjects equally' — this is unconvincing and shows you haven't thought deeply about your interests or strengths.",
      expert_tip: "If applying to an audit firm, mentioning auditing is an obvious but good choice — frame it in terms of the intellectual challenge, not just because 'it's practical'."
    },
    4: {
      model_answer: "Balancing multiple exam groups while also preparing for articleship applications was genuinely challenging. There were periods where my exam results weren't what I expected, and I had to recalibrate my approach. Instead of panicking, I spent two days analyzing where I was losing marks — it turned out I was strong on concepts but weak on presentation and time management in the exam. I restructured my practice to focus on past papers under timed conditions. My results improved significantly in the next attempt.",
      key_points: ["Choose a challenge that's real and shows self-awareness", "Show structured response — analysis, change, outcome", "End with what you learned, not just what happened"],
      common_mistake: "Choosing a trivial challenge or one where you did everything right from the start — a genuine struggle with a clear resolution is far more compelling.",
      expert_tip: "Resilience is one of the most tested traits in Big 4 interviews — the role is demanding and they want people who bounce back from setbacks rather than avoiding them."
    },
    5: {
      model_answer: "In five years, I see myself as a qualified CA with deep expertise in audit and financial reporting, having worked across a range of client industries. I'd like to be in a role where I'm leading engagements rather than just executing tasks — taking ownership of client relationships and mentoring junior team members. I'm ambitious about pursuing a specialisation, possibly in forensic accounting or M&A due diligence, where the analytical and investigative work particularly appeals to me.",
      key_points: ["Show ambition without being unrealistic (e.g., don't say 'partner in 5 years')", "Mention skill development, responsibility growth, and specialisation", "Align your vision with what the firm can offer you"],
      common_mistake: "Giving a vague answer like 'I want to be a successful CA' — everyone wants that. Show specific thinking about the kind of work and growth you want.",
      expert_tip: "Research the firm's specialisations before the interview — if applying to Deloitte, saying 'I'm interested in your Forensics and Financial Advisory practice' shows genuine interest and research."
    },
    6: {
      model_answer: "My academic exposure to audit, taxation, and financial reporting has given me the technical foundation, but what I think makes me ready for a Big 4 environment specifically is my mindset. I've been deliberate about developing structured thinking — I approach problems by breaking them into components before looking for solutions. I've also worked in group settings that mimic team dynamics — understanding how to receive feedback constructively, and how to communicate upward. I know Big 4 is fast-paced and expectation is high, and I genuinely thrive in structured, high-accountability environments.",
      key_points: ["Don't just list what you studied — connect it to how Big 4 works", "Show self-awareness about the Big 4 culture (pace, hierarchy, review culture)", "End with genuine confidence, not arrogance"],
      common_mistake: "Being defensive about gaps like 'I haven't had much experience' — reframe experience gaps as learning opportunities you're eager to close.",
      expert_tip: "Big 4 partners look for trainees who understand the professional environment they're entering — showing you've researched the culture as much as the work is a strong differentiator."
    },
  },

  "Why CA / Why This Firm": {
    1: {
      model_answer: "I chose CA because I wanted a qualification that is both intellectually rigorous and practically impactful. The CA curriculum — spanning financial reporting, audit, taxation, and law — equips you to advise businesses at every stage, not just in one functional area. I also admire the trust and credibility the CA designation carries — when a CA signs off on financial statements, that signature has real weight. For me, it's not just a qualification but a professional identity that I'm proud to be building.",
      key_points: ["Intrinsic motivation — not just salary or stability", "Show appreciation for the breadth of CA knowledge", "Connect the qualification to professional impact"],
      common_mistake: "Saying 'my parents wanted me to do CA' or 'it has good job prospects' — these are honest but superficial. Show genuine intellectual and professional motivation.",
      expert_tip: "Interviewers are CAs themselves — they want to hear that you respect and understand what the designation means. Mentioning the public interest role of auditors or the advisory impact is well-received."
    },
    2: {
      model_answer: "I chose this firm because of its reputation for developing technically strong professionals and its breadth of client exposure. I've researched that your firm works with clients across [specific sector they're known for] and I'm particularly drawn to that industry exposure. Beyond the brand, I've spoken to a few current and former trainees who mentioned the learning culture and access to senior mentors — that structured development environment is exactly what I need at this stage of my career.",
      key_points: ["Mention specific aspects of the firm — not just 'it's a Big 4'", "Reference research: people you spoke to, sectors they cover", "Connect firm's strengths to your specific development needs"],
      common_mistake: "Saying 'it's the best firm' or 'it has the best brand' — every candidate says this. Firms want specific, researched reasons.",
      expert_tip: "Before any Big 4 interview, read their website's 'About' or 'Careers' page, check LinkedIn for current trainees, and look at recent news about their practice lines — 20 minutes of research can completely differentiate your answer."
    },
    3: {
      model_answer: "From what I've read and the conversations I've had with your trainees, the firm seems to genuinely value intellectual curiosity and structured mentorship — two things I prioritise highly. I'm someone who asks a lot of questions and works best when I understand the 'why' behind a task, not just the 'what'. Your firm's culture of explaining context to even junior team members is something that resonates with me. I also value integrity highly, and the firm's public positions on independence and professional ethics align with how I want to build my career.",
      key_points: ["Connect specific firm values to your own working style", "Mention concrete culture signals you've researched or heard about", "Be authentic — don't say what you think they want to hear"],
      common_mistake: "Giving generic values like 'I like teamwork and growth' — every firm claims these. Find the specific cultural differentiator of this particular firm.",
      expert_tip: "Firms have distinct cultures even within the Big 4 — Deloitte is often described as more structured, EY as more collaborative, PwC as relationship-focused. Tailor your answer to that firm's known identity."
    },
    4: {
      model_answer: "What distinguishes this firm for me is the combination of scale and specialisation. While other Big 4 firms also have strong brand names, I've noticed this firm's particularly deep practice in [specific area — e.g., 'transfer pricing' for EY, 'forensic accounting' for Deloitte]. Beyond that, the emphasis on early responsibility — trainees taking on direct client interaction sooner than at some competitors — aligns with how I learn best. The firm's investment in technology tools for audit and advisory also indicates they're preparing their people for the future of the profession.",
      key_points: ["Identify a genuine differentiator — not just 'prestige'", "Reference a specific practice area or initiative", "Connect the differentiator to your personal learning preference"],
      common_mistake: "Saying the firm is better than others without any evidence — make specific, factual distinctions. Vague superlatives sound like flattery, not research.",
      expert_tip: "Research the firm's recent press releases, ranking in specific verticals (e.g., dealogic M&A rankings, audit market share), and any recent initiatives or hires — this level of research always impresses interviewers."
    },
    5: {
      model_answer: "The practice area I'm most interested in is Audit and Assurance, specifically working with financial services or manufacturing clients. I'm drawn to audit because it gives me the broadest exposure to financial reporting, risk, and controls across many clients simultaneously — in your firm's case, the access to large listed companies in my first year of articleship is something I find genuinely exciting. As I develop, I'd love to explore specialising in financial reporting advisory or forensic accounting, which I understand your firm has a strong capability in.",
      key_points: ["Name a specific practice area — not a vague 'whichever area I'm placed in'", "Connect it to a long-term specialisation goal", "Mention why this firm's version of that practice is particularly appealing"],
      common_mistake: "Saying you're open to anything — it reads as indifferent. Even if you're flexible, show a genuine primary interest and justify it.",
      expert_tip: "Showing a specific practice area interest and linking it to the firm's known strength in that area is one of the most effective ways to demonstrate research and genuine motivation."
    },
    6: {
      model_answer: "If I had offers from multiple firms, my decision would come down to two things: the quality of learning in the early years and the culture of mentorship. Having researched both this firm and others, I believe this firm offers more structured mentoring and better access to complex engagements in the first year — the training program and the nature of clients here are both stronger for early-career development. That's why this would be my first choice even over a higher stipend offer elsewhere. I'm making a long-term investment in my career, not optimising for short-term pay.",
      key_points: ["Show you've made a thoughtful, criteria-based decision", "Demonstrate firm-specific reasons, not just generic preferences", "Show you value learning over just compensation"],
      common_mistake: "Being diplomatic to the point of saying 'I'd consider all factors' — this is evasive. Commit to a position and justify it with specifics.",
      expert_tip: "This question is a soft test of commitment. Firms don't want to make a competitive offer just to lose you to a rival. Show conviction about your choice — it builds confidence in your seriousness."
    },
  },
};

/**
 * Get a pre-written answer for a given topic and question id
 * Returns null if no local answer exists (triggers AI fallback)
 */
export function getLocalAnswer(topic, questionId) {
  const topicAnswers = ANSWERS[topic];
  if (!topicAnswers) return null;
  return topicAnswers[questionId] || null;
}

export default ANSWERS;

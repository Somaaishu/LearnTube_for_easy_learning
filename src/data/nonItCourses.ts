import { Course } from '@/types/course';

export const nonItCourses: Course[] = [
  {
    id: 'communication-skills',
    title: 'Communication Skills',
    category: 'non-it',
    level: 'beginner',
    description: 'Master effective communication in personal and professional settings. Learn active listening, clarity, and persuasion.',
    icon: '💬',
    modules: [
      {
        id: 'comm-m1',
        title: 'Foundations of Communication',
        topics: [
          {
            id: 'comm-m1-t1',
            title: 'The Communication Process',
            explanation: 'Communication is the process of exchanging information between a sender and receiver through a channel. Effective communication requires clarity, active listening, and feedback. The communication process includes encoding (forming the message), transmitting (sending it), decoding (interpreting it), and feedback (responding). Barriers like noise, assumptions, and cultural differences can distort messages.',
            examples: ['A manager giving clear project instructions demonstrates effective encoding', 'Nodding and summarizing shows active listening', 'Email miscommunication often occurs due to lack of tone and body language'],
            keyConceptsLearned: ['Communication involves sender, message, channel, and receiver', 'Active listening is as important as speaking', 'Barriers must be identified and overcome'],
videoUrl: 'https://www.youtube.com/watch?v=HAnw168huqA',
          },
          {
            id: 'comm-m1-t2',
            title: 'Verbal and Non-Verbal Communication',
            explanation: 'Verbal communication uses words to convey messages, while non-verbal communication includes body language, facial expressions, gestures, posture, and tone of voice. Research suggests that 93% of communication effectiveness comes from non-verbal cues (55% body language, 38% tone). Being aware of both verbal and non-verbal signals is crucial for effective communication.',
            examples: ['Crossed arms may signal defensiveness or discomfort', 'Maintaining eye contact shows confidence and engagement', 'A firm handshake conveys confidence in professional settings'],
            keyConceptsLearned: ['Non-verbal cues carry most of the message', 'Body language should align with spoken words', 'Tone of voice affects message interpretation'],
videoUrl: 'https://www.youtube.com/watch?v=HAnw168huqA',
          },
        ],
      },
      {
        id: 'comm-m2',
        title: 'Professional Communication',
        topics: [
          {
            id: 'comm-m2-t1',
            title: 'Email and Written Communication',
            explanation: 'Professional written communication requires clarity, proper structure, and appropriate tone. Emails should have clear subject lines, be concise, and include a call to action. Use proper formatting with paragraphs and bullet points. Proofread before sending. Written communication creates a permanent record, making accuracy essential.',
            examples: ['Subject: "Q3 Marketing Report — Review Needed by Friday" is clear and specific', 'Using bullet points makes action items easy to scan', 'Always proofread: "their/there/they\'re" errors undermine credibility'],
            keyConceptsLearned: ['Clear subject lines improve email open rates', 'Be concise — respect the reader\'s time', 'Proofread everything before sending'],
videoUrl: 'https://www.youtube.com/watch?v=HAnw168huqA',
          },
        ],
      },
    ],
  },
  {
    id: 'public-speaking',
    title: 'Public Speaking',
    category: 'non-it',
    level: 'beginner',
    description: 'Overcome stage fright and deliver compelling presentations. Learn structure, delivery, and audience engagement.',
    icon: '🎤',
    modules: [
      {
        id: 'ps-m1',
        title: 'Speech Preparation',
        topics: [
          {
            id: 'ps-m1-t1',
            title: 'Structuring Your Speech',
            explanation: 'Every great speech has three parts: an engaging opening, a well-organized body, and a memorable conclusion. The opening should hook the audience with a story, question, or surprising fact. The body should have 2-3 main points with supporting evidence. The conclusion should summarize key points and end with a strong call to action or memorable statement.',
            examples: ['Steve Jobs\' Stanford speech opened with a personal story', 'The "rule of three" — audiences remember three main points best', 'End with a call to action: "So starting today, I challenge you to..."'],
            keyConceptsLearned: ['Structure: opening hook, body with 3 points, strong conclusion', 'The rule of three makes content memorable', 'A strong opening determines audience engagement'],
videoUrl: 'https://www.youtube.com/watch?v=i5mYphUoOCs',
          },
        ],
      },
      {
        id: 'ps-m2',
        title: 'Delivery Skills',
        topics: [
          {
            id: 'ps-m2-t1',
            title: 'Overcoming Stage Fright',
            explanation: 'Stage fright (glossophobia) is one of the most common fears. Techniques to overcome it include: thorough preparation and practice, deep breathing exercises, visualizing success, focusing on the message rather than yourself, and starting with smaller audiences. Remember that some nervousness is natural and can actually improve performance by keeping you alert and energized.',
            examples: ['Practice your speech at least 5 times before delivering', 'Use the 4-7-8 breathing technique: inhale 4 seconds, hold 7, exhale 8', 'Arrive early to familiarize yourself with the venue'],
            keyConceptsLearned: ['Preparation is the best cure for stage fright', 'Breathing techniques reduce anxiety', 'Focus on the message, not yourself'],
videoUrl: 'https://www.youtube.com/watch?v=MEDgtjpycYg',
          },
        ],
      },
    ],
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy',
    category: 'non-it',
    level: 'beginner',
    description: 'Understand personal finance. Learn budgeting, saving, investing, and managing debt effectively.',
    icon: '💰',
    modules: [
      {
        id: 'fl-m1',
        title: 'Personal Finance Basics',
        topics: [
          {
            id: 'fl-m1-t1',
            title: 'Budgeting Fundamentals',
            explanation: 'A budget is a plan for how to spend your money. The 50/30/20 rule is a popular framework: 50% for needs (rent, food, utilities), 30% for wants (entertainment, dining out), and 20% for savings and debt repayment. Tracking expenses helps identify spending patterns and areas for improvement. A budget is the foundation of financial health.',
            examples: ['If you earn $4,000/month: $2,000 needs, $1,200 wants, $800 savings', 'Use apps like Mint or YNAB to track spending', 'Review and adjust your budget monthly'],
            keyConceptsLearned: ['50/30/20 rule: needs, wants, savings', 'Track every expense to find patterns', 'A budget is a spending plan, not a restriction'],
videoUrl: 'https://www.youtube.com/watch?v=HQzoZfc3GwQ',
          },
        ],
      },
      {
        id: 'fl-m2',
        title: 'Saving and Investing',
        topics: [
          {
            id: 'fl-m2-t1',
            title: 'Emergency Fund and Investing Basics',
            explanation: 'An emergency fund covers 3-6 months of expenses for unexpected events like job loss or medical emergencies. Once you have an emergency fund, start investing. Key investment vehicles include stocks (ownership in companies), bonds (loans to entities), and index funds (diversified portfolios). Compound interest — earning interest on interest — is the most powerful wealth-building tool.',
            examples: ['If expenses are $3,000/month, aim for $9,000-$18,000 emergency fund', 'Index funds like S&P 500 have averaged ~10% annual returns historically', 'Starting to invest at 25 vs 35 can mean double the retirement savings due to compound interest'],
            keyConceptsLearned: ['Build 3-6 months emergency fund first', 'Index funds offer diversified, low-cost investing', 'Compound interest grows wealth exponentially over time'],
videoUrl: 'https://www.youtube.com/watch?v=p7HKvqRI_Bo',
          },
        ],
      },
    ],
  },
  {
    id: 'personal-productivity',
    title: 'Personal Productivity',
    category: 'non-it',
    level: 'beginner',
    description: 'Boost your productivity with proven techniques. Learn time management, goal setting, and habit formation.',
    icon: '⚡',
    modules: [
      {
        id: 'pp-m1',
        title: 'Time Management',
        topics: [
          {
            id: 'pp-m1-t1',
            title: 'Prioritization Techniques',
            explanation: 'Effective time management starts with prioritization. The Eisenhower Matrix categorizes tasks into four quadrants: Urgent & Important (do first), Important but Not Urgent (schedule), Urgent but Not Important (delegate), and Neither (eliminate). The Pareto Principle (80/20 rule) suggests that 80% of results come from 20% of efforts. Focus on high-impact tasks first.',
            examples: ['Urgent & Important: deadline project due tomorrow', 'Important but Not Urgent: learning a new skill', 'Time-blocking: schedule 2 hours for deep work each morning'],
            keyConceptsLearned: ['Eisenhower Matrix categorizes tasks by urgency and importance', '80/20 rule: focus on high-impact activities', 'Schedule important tasks, don\'t just react to urgent ones'],
videoUrl: 'https://www.youtube.com/watch?v=z6vBLBIqwJI',
          },
        ],
      },
      {
        id: 'pp-m2',
        title: 'Habit Formation',
        topics: [
          {
            id: 'pp-m2-t1',
            title: 'Building Good Habits',
            explanation: 'Habits are automatic behaviors formed through repetition. James Clear\'s "Atomic Habits" framework uses four laws: Make it Obvious (cue), Make it Attractive (craving), Make it Easy (response), Make it Satisfying (reward). Start with tiny habits — 2 minutes or less — and build from there. Habit stacking links new habits to existing ones for easier adoption.',
            examples: ['Want to read more? Start with just 2 pages per day', 'Habit stacking: "After I pour my coffee, I will journal for 2 minutes"', 'Track habits with a simple calendar and mark each completed day'],
            keyConceptsLearned: ['Four laws: obvious, attractive, easy, satisfying', 'Start with 2-minute micro-habits', 'Habit stacking links new habits to existing routines'],
videoUrl: 'https://www.youtube.com/watch?v=PZ7lDrwYdZc',
          },
        ],
      },
    ],
  },
  {
    id: 'business-management',
    title: 'Business Management',
    category: 'non-it',
    level: 'intermediate',
    description: 'Learn core business management principles. Cover planning, organizing, leading, and controlling business operations.',
    icon: '📋',
    modules: [
      {
        id: 'bm-m1',
        title: 'Management Fundamentals',
        topics: [
          {
            id: 'bm-m1-t1',
            title: 'Four Functions of Management',
            explanation: 'Management consists of four core functions: Planning (setting goals and strategies), Organizing (allocating resources and structuring work), Leading (motivating and guiding people), and Controlling (monitoring performance and making corrections). Effective managers balance all four functions. Strategic planning focuses on long-term direction, while operational planning handles day-to-day activities.',
            examples: ['Planning: Setting quarterly revenue targets and action plans', 'Organizing: Creating team structure and assigning roles', 'Controlling: Weekly performance reviews against KPIs'],
            keyConceptsLearned: ['Four functions: planning, organizing, leading, controlling', 'Strategic vs operational planning', 'All four functions must work together'],
videoUrl: 'https://www.youtube.com/watch?v=9Os0o3wzS_I',
          },
        ],
      },
      {
        id: 'bm-m2',
        title: 'Decision Making',
        topics: [
          {
            id: 'bm-m2-t1',
            title: 'Strategic Decision Making',
            explanation: 'Strategic decisions shape the future of an organization. The rational decision-making process involves: identifying the problem, generating alternatives, evaluating options, choosing the best alternative, implementing, and reviewing results. SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) is a key tool for strategic decisions. Not all decisions can be fully rational — bounded rationality and cognitive biases affect judgment.',
            examples: ['Should we enter a new market? Use SWOT analysis', 'Cost-benefit analysis compares expected costs vs benefits of each option', 'Amazon\'s decision to launch AWS came from strategic analysis of their internal capabilities'],
            keyConceptsLearned: ['Rational decision-making follows a structured process', 'SWOT analysis evaluates strategic position', 'Cognitive biases can affect judgment'],
videoUrl: 'https://www.youtube.com/watch?v=JXXHqM6RzZQ',
          },
        ],
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'non-it',
    level: 'intermediate',
    description: 'Master digital marketing channels. Learn SEO, social media, content marketing, and analytics.',
    icon: '📱',
    modules: [
      {
        id: 'dm-m1',
        title: 'Digital Marketing Channels',
        topics: [
          {
            id: 'dm-m1-t1',
            title: 'SEO Fundamentals',
            explanation: 'Search Engine Optimization (SEO) improves your website\'s visibility in search results. On-page SEO includes keyword optimization, quality content, meta tags, and site structure. Off-page SEO involves backlinks and social signals. Technical SEO covers site speed, mobile-friendliness, and crawlability. SEO is a long-term strategy that builds sustainable organic traffic.',
            examples: ['Keyword research: find what your audience searches for', 'Write title tags under 60 characters with target keyword', 'Google values E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness'],
            keyConceptsLearned: ['On-page, off-page, and technical SEO are all important', 'Quality content is the foundation of SEO', 'SEO is a long-term investment in organic traffic'],
videoUrl: 'https://www.youtube.com/watch?v=DvwS7cV9GmQ',
          },
        ],
      },
      {
        id: 'dm-m2',
        title: 'Content Marketing',
        topics: [
          {
            id: 'dm-m2-t1',
            title: 'Content Strategy',
            explanation: 'Content marketing creates and distributes valuable content to attract and retain a target audience. A content strategy includes: defining your audience (buyer personas), choosing content formats (blogs, videos, podcasts), creating a content calendar, and measuring results. The goal is to provide value first and build trust, which leads to conversions over time.',
            examples: ['HubSpot\'s blog generates millions of monthly visitors through educational content', 'A content calendar ensures consistent publishing', 'Repurpose: turn a blog post into a video, infographic, and social posts'],
            keyConceptsLearned: ['Content marketing provides value to attract audiences', 'Buyer personas define your target audience', 'Consistency and quality are key to content success'],
videoUrl: 'https://www.youtube.com/watch?v=6xKWiCMKKJg',
          },
        ],
      },
    ],
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    category: 'non-it',
    level: 'intermediate',
    description: 'Learn to build and launch a business. Cover ideation, validation, business models, and fundraising.',
    icon: '🚀',
    modules: [
      {
        id: 'ent-m1',
        title: 'Starting Up',
        topics: [
          {
            id: 'ent-m1-t1',
            title: 'Idea Validation',
            explanation: 'Before building a product, validate that people actually want it. The Lean Startup methodology advocates building a Minimum Viable Product (MVP) to test assumptions quickly. Validate ideas by talking to potential customers, creating landing pages to gauge interest, and running small experiments. The goal is to fail fast and learn — pivoting based on feedback rather than building in isolation.',
            examples: ['Dropbox validated with a simple demo video before building the product', 'Create a landing page with a "Sign Up" button to measure interest', 'Interview 20+ potential customers before writing any code'],
            keyConceptsLearned: ['Validate before building', 'MVP tests core assumptions with minimal effort', 'Customer interviews reveal real problems to solve'],
videoUrl: 'https://www.youtube.com/watch?v=QRZ_l7cVzzU',
          },
        ],
      },
      {
        id: 'ent-m2',
        title: 'Business Models',
        topics: [
          {
            id: 'ent-m2-t1',
            title: 'Revenue Models and Business Canvas',
            explanation: 'A business model describes how a company creates, delivers, and captures value. The Business Model Canvas is a one-page framework with 9 blocks: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, and Cost Structure. Common revenue models include subscription, freemium, marketplace, advertising, and transaction fees.',
            examples: ['Netflix: subscription model with monthly recurring revenue', 'Instagram: free product monetized through advertising', 'Airbnb: marketplace model taking commission on each booking'],
            keyConceptsLearned: ['Business Model Canvas has 9 key blocks', 'Revenue models define how you make money', 'Value proposition is what makes customers choose you'],
videoUrl: 'https://www.youtube.com/watch?v=oWZbWzAyHAE',
          },
        ],
      },
    ],
  },
  {
    id: 'leadership-skills',
    title: 'Leadership Skills',
    category: 'non-it',
    level: 'intermediate',
    description: 'Develop essential leadership abilities. Learn team building, motivation, conflict resolution, and decision making.',
    icon: '👑',
    modules: [
      {
        id: 'ls-m1',
        title: 'Leadership Foundations',
        topics: [
          {
            id: 'ls-m1-t1',
            title: 'Leadership Styles',
            explanation: 'Different situations require different leadership styles. Autocratic leaders make decisions alone (good for crises). Democratic leaders involve the team (good for complex problems). Transformational leaders inspire change through vision. Servant leaders focus on serving their team\'s needs. The most effective leaders adapt their style to the situation and team needs.',
            examples: ['A firefighter captain uses autocratic style during emergencies', 'Google\'s culture encourages democratic leadership for innovation', 'Servant leadership: "How can I help you succeed?"'],
            keyConceptsLearned: ['Multiple leadership styles exist for different situations', 'Adaptive leadership adjusts to context', 'Servant leadership puts team needs first'],
videoUrl: 'https://www.youtube.com/watch?v=pYKH2uSax8U',
          },
        ],
      },
      {
        id: 'ls-m2',
        title: 'Team Management',
        topics: [
          {
            id: 'ls-m2-t1',
            title: 'Building High-Performance Teams',
            explanation: 'High-performance teams have clear goals, diverse skills, psychological safety, and accountability. Tuckman\'s model describes team development stages: Forming (getting to know each other), Storming (conflicts arise), Norming (establishing norms), and Performing (high productivity). Leaders must actively build trust, encourage open communication, and address conflicts constructively.',
            examples: ['Google\'s Project Aristotle found psychological safety is the #1 factor in team success', 'Regular one-on-ones build trust between leaders and team members', 'Celebrating wins together strengthens team bonds'],
            keyConceptsLearned: ['Teams go through forming, storming, norming, performing stages', 'Psychological safety enables innovation', 'Diverse teams outperform homogeneous ones'],
videoUrl: 'https://www.youtube.com/watch?v=hHIikHJV9fI',
          },
        ],
      },
    ],
  },
  {
    id: 'startup-strategy',
    title: 'Startup Strategy',
    category: 'non-it',
    level: 'advanced',
    description: 'Advanced strategies for startup growth. Learn scaling, fundraising, competitive analysis, and market expansion.',
    icon: '🎯',
    modules: [
      {
        id: 'ss-m1',
        title: 'Growth Strategy',
        topics: [
          {
            id: 'ss-m1-t1',
            title: 'Growth Frameworks',
            explanation: 'Startup growth requires systematic approaches. The AARRR (Pirate Metrics) framework tracks: Acquisition (getting users), Activation (first value experience), Retention (users coming back), Revenue (monetization), Referral (users inviting others). Growth hacking combines marketing, product, and data to find scalable growth channels. Product-led growth uses the product itself as the main growth driver.',
            examples: ['Dropbox\'s referral program: give storage to get storage', 'Slack grew through product-led adoption within teams', 'A/B testing different landing pages to optimize acquisition'],
            keyConceptsLearned: ['AARRR metrics track the full user journey', 'Growth hacking finds scalable channels through experimentation', 'Product-led growth uses the product as the growth engine'],
videoUrl: 'https://www.youtube.com/watch?v=AjoxkxM_I5g',
          },
        ],
      },
      {
        id: 'ss-m2',
        title: 'Fundraising',
        topics: [
          {
            id: 'ss-m2-t1',
            title: 'Startup Fundraising',
            explanation: 'Startups raise capital in stages: Pre-seed (idea stage, $50K-$500K), Seed ($500K-$2M), Series A ($2M-$15M), and beyond. Funding sources include bootstrapping, angel investors, venture capital, and crowdfunding. A pitch deck should cover: problem, solution, market size, business model, traction, team, and the ask. Investors look for large markets, strong teams, and evidence of product-market fit.',
            examples: ['Airbnb was rejected by 7 investors before raising their seed round', 'A good pitch deck has 10-15 slides maximum', 'Traction metrics: revenue growth, user growth, engagement'],
            keyConceptsLearned: ['Funding stages: pre-seed, seed, Series A, B, C...', 'Pitch decks should tell a compelling story', 'Investors value traction and team above all'],
videoUrl: 'https://www.youtube.com/watch?v=8FPDv5cQ82E',
          },
        ],
      },
    ],
  },
  {
    id: 'marketing-analytics',
    title: 'Marketing Analytics',
    category: 'non-it',
    level: 'advanced',
    description: 'Use data to drive marketing decisions. Learn KPIs, A/B testing, attribution, and ROI measurement.',
    icon: '📈',
    modules: [
      {
        id: 'ma-m1',
        title: 'Analytics Fundamentals',
        topics: [
          {
            id: 'ma-m1-t1',
            title: 'Key Marketing Metrics',
            explanation: 'Marketing analytics uses data to measure campaign effectiveness and guide strategy. Key metrics include Customer Acquisition Cost (CAC), Customer Lifetime Value (CLV or LTV), Return on Ad Spend (ROAS), conversion rate, and churn rate. The CLV:CAC ratio should be at least 3:1 for a healthy business. Data-driven marketing outperforms gut-feeling decisions.',
            examples: ['If you spend $10,000 on ads and get 100 customers, CAC = $100', 'If a customer pays $50/month for 24 months, CLV = $1,200', 'A 3:1 CLV:CAC ratio means you earn $3 for every $1 spent on acquisition'],
            keyConceptsLearned: ['CAC measures cost to acquire a customer', 'CLV predicts total revenue from a customer', 'CLV:CAC ratio should be 3:1 or higher'],
videoUrl: 'https://www.youtube.com/watch?v=pt-nSjNRfIk',
          },
        ],
      },
      {
        id: 'ma-m2',
        title: 'Testing and Optimization',
        topics: [
          {
            id: 'ma-m2-t1',
            title: 'A/B Testing',
            explanation: 'A/B testing compares two versions of something to see which performs better. You split your audience randomly into two groups: Group A sees the original (control), Group B sees the variation. Measure a specific metric (conversion rate, click rate). Statistical significance ensures results aren\'t due to chance. Test one variable at a time for clear insights.',
            examples: ['Test two email subject lines to see which gets more opens', 'Change button color from blue to green and measure click rate', 'Obama\'s campaign raised $60M extra through A/B testing donation pages'],
            keyConceptsLearned: ['Test one variable at a time', 'Statistical significance validates results', 'Small changes can have big impact'],
videoUrl: 'https://www.youtube.com/watch?v=XDoKhbx-yTM',
          },
        ],
      },
    ],
  },
  {
    id: 'business-growth-strategy',
    title: 'Business Growth Strategy',
    category: 'non-it',
    level: 'advanced',
    description: 'Scale your business effectively. Learn market expansion, partnerships, competitive strategy, and sustainable growth.',
    icon: '🌱',
    modules: [
      {
        id: 'bgs-m1',
        title: 'Growth Planning',
        topics: [
          {
            id: 'bgs-m1-t1',
            title: 'Market Expansion Strategies',
            explanation: 'Ansoff\'s Growth Matrix provides four strategies: Market Penetration (existing products in existing markets), Market Development (existing products in new markets), Product Development (new products in existing markets), and Diversification (new products in new markets). Each strategy has different risk levels — penetration is lowest risk, diversification is highest. Choose based on your company\'s strengths and market conditions.',
            examples: ['Market Penetration: Coca-Cola increasing advertising to sell more in current markets', 'Market Development: Netflix expanding from US to international markets', 'Diversification: Amazon moving from e-commerce to cloud computing (AWS)'],
            keyConceptsLearned: ['Ansoff\'s Matrix has 4 growth strategies', 'Market penetration is lowest risk', 'Diversification carries the highest risk but biggest potential'],
videoUrl: 'https://www.youtube.com/watch?v=OYMSq4OPqTc',
          },
        ],
      },
    ],
  },
  {
    id: 'strategic-leadership',
    title: 'Strategic Leadership',
    category: 'non-it',
    level: 'advanced',
    description: 'Lead organizations through change and uncertainty. Master strategic thinking, change management, and executive presence.',
    icon: '🧭',
    modules: [
      {
        id: 'sl-m1',
        title: 'Strategic Thinking',
        topics: [
          {
            id: 'sl-m1-t1',
            title: 'Vision and Strategy',
            explanation: 'Strategic leaders create a compelling vision and align the organization to achieve it. Vision answers "where are we going?" while strategy answers "how will we get there?" Effective strategic leaders balance short-term execution with long-term thinking. They scan the environment for opportunities and threats, make difficult trade-offs, and communicate strategy clearly at all levels of the organization.',
            examples: ['JFK\'s vision: "Landing a man on the moon before the decade is out"', 'Apple\'s strategy: premium products with seamless ecosystem integration', 'Strategy requires saying no to good ideas to focus on great ones'],
            keyConceptsLearned: ['Vision is the destination, strategy is the path', 'Good strategy involves trade-offs', 'Communication is essential for strategy execution'],
videoUrl: 'https://www.youtube.com/watch?v=_ICo-MmNJjY',
          },
        ],
      },
      {
        id: 'sl-m2',
        title: 'Change Management',
        topics: [
          {
            id: 'sl-m2-t1',
            title: 'Leading Organizational Change',
            explanation: 'Kotter\'s 8-step change model provides a framework: create urgency, build a guiding coalition, form a strategic vision, enlist a volunteer army, enable action by removing barriers, generate short-term wins, sustain acceleration, and institute change. 70% of change initiatives fail, usually due to lack of leadership support, poor communication, or insufficient urgency. Successful change requires both rational and emotional appeals.',
            examples: ['Create urgency: show data about market threats if change doesn\'t happen', 'Short-term wins: celebrate early adopters and their results', 'Microsoft\'s culture shift under Satya Nadella from "know-it-all" to "learn-it-all"'],
            keyConceptsLearned: ['70% of change initiatives fail', 'Kotter\'s 8 steps guide successful change', 'Both rational and emotional engagement are needed'],
videoUrl: 'https://www.youtube.com/watch?v=7LxLZ49GHCI',
          },
        ],
      },
    ],
  },
];

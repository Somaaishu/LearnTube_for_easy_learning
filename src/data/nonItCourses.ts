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
            quiz: [
              { question: 'What are the key elements of communication?', options: ['Speaking and writing', 'Sender, message, channel, receiver', 'Email and phone', 'Words and grammar'], correctAnswer: 1, explanation: 'The communication process involves a sender, message, channel (medium), and receiver.' },
              { question: 'What is active listening?', options: ['Hearing words passively', 'Fully concentrating and responding to the speaker', 'Taking notes silently', 'Waiting to speak'], correctAnswer: 1, explanation: 'Active listening means fully concentrating, understanding, responding, and remembering what is being said.' },
              { question: 'What is a communication barrier?', options: ['A language skill', 'Anything that distorts the message', 'A type of channel', 'Feedback from receiver'], correctAnswer: 1, explanation: 'Barriers are factors that distort or prevent effective communication, like noise, assumptions, or language differences.' },
            ],
          },
          {
            id: 'comm-m1-t2',
            title: 'Verbal and Non-Verbal Communication',
            explanation: 'Verbal communication uses words to convey messages, while non-verbal communication includes body language, facial expressions, gestures, posture, and tone of voice. Research suggests that 93% of communication effectiveness comes from non-verbal cues (55% body language, 38% tone). Being aware of both verbal and non-verbal signals is crucial for effective communication.',
            examples: ['Crossed arms may signal defensiveness or discomfort', 'Maintaining eye contact shows confidence and engagement', 'A firm handshake conveys confidence in professional settings'],
            keyConceptsLearned: ['Non-verbal cues carry most of the message', 'Body language should align with spoken words', 'Tone of voice affects message interpretation'],
            quiz: [
              { question: 'What percentage of communication is non-verbal?', options: ['10%', '50%', 'Up to 93%', '25%'], correctAnswer: 2, explanation: 'Studies suggest up to 93% of communication effectiveness comes from non-verbal cues.' },
              { question: 'What does crossed arms typically signal?', options: ['Agreement', 'Defensiveness or discomfort', 'Excitement', 'Boredom'], correctAnswer: 1, explanation: 'Crossed arms often indicate defensiveness, discomfort, or resistance.' },
              { question: 'Why should verbal and non-verbal messages align?', options: ['For grammar', 'To avoid confusion and build trust', 'For formality', 'For speed'], correctAnswer: 1, explanation: 'When verbal and non-verbal messages conflict, people tend to believe the non-verbal cues, causing confusion.' },
            ],
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
            quiz: [
              { question: 'What makes a good email subject line?', options: ['Being creative', 'Being specific and clear', 'Using all caps', 'Being mysterious'], correctAnswer: 1, explanation: 'A good subject line is specific and clearly states the email\'s purpose.' },
              { question: 'Why is proofreading important?', options: ['To add more content', 'To catch errors that undermine credibility', 'To make it longer', 'To change the topic'], correctAnswer: 1, explanation: 'Errors in professional communication undermine credibility and can cause misunderstandings.' },
              { question: 'When should you use bullet points?', options: ['Never in emails', 'When listing items or action points', 'Only in reports', 'For greetings'], correctAnswer: 1, explanation: 'Bullet points make lists and action items easy to scan and understand quickly.' },
            ],
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
            quiz: [
              { question: 'What are the three parts of a speech?', options: ['Start, middle, end', 'Opening, body, conclusion', 'Title, content, summary', 'Hook, facts, goodbye'], correctAnswer: 1, explanation: 'A well-structured speech has an opening (hook), body (main points), and conclusion (summary + call to action).' },
              { question: 'What is the "rule of three"?', options: ['Speak for 3 minutes', 'Have 3 main points for memorability', 'Use 3 slides', 'Repeat 3 times'], correctAnswer: 1, explanation: 'The rule of three suggests audiences remember content best when organized around three main points.' },
              { question: 'What makes a good opening?', options: ['Introducing yourself', 'A hook: story, question, or surprising fact', 'Reading the agenda', 'Thanking everyone'], correctAnswer: 1, explanation: 'Strong openings hook the audience with stories, questions, or surprising facts that create interest.' },
            ],
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
            quiz: [
              { question: 'What is the #1 way to reduce stage fright?', options: ['Avoid eye contact', 'Thorough preparation and practice', 'Read from notes', 'Speak faster'], correctAnswer: 1, explanation: 'Being thoroughly prepared and practiced is the most effective way to reduce stage fright.' },
              { question: 'Is some nervousness before speaking normal?', options: ['No, it means you\'re not ready', 'Yes, and it can improve performance', 'Only for beginners', 'It always hurts performance'], correctAnswer: 1, explanation: 'Some nervousness is natural and can actually enhance performance by keeping you alert and energized.' },
              { question: 'What should you focus on while speaking?', options: ['Your appearance', 'What people think of you', 'Your message and the audience', 'Your notes'], correctAnswer: 2, explanation: 'Focusing on delivering your message to the audience takes attention away from self-conscious thoughts.' },
            ],
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
            quiz: [
              { question: 'What is the 50/30/20 rule?', options: ['Investment strategy', 'Budget allocation: needs/wants/savings', 'Tax brackets', 'Debt repayment plan'], correctAnswer: 1, explanation: 'The 50/30/20 rule allocates 50% to needs, 30% to wants, and 20% to savings/debt.' },
              { question: 'Why track expenses?', options: ['For tax purposes only', 'To identify spending patterns', 'Legal requirement', 'To impress others'], correctAnswer: 1, explanation: 'Tracking expenses reveals spending patterns and helps identify areas where you can save.' },
              { question: 'How often should you review your budget?', options: ['Yearly', 'Monthly', 'Once', 'Never'], correctAnswer: 1, explanation: 'Monthly reviews help you adjust your budget to changing circumstances and stay on track.' },
            ],
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
            quiz: [
              { question: 'How much should an emergency fund cover?', options: ['1 month', '3-6 months of expenses', '1 year', '10 years'], correctAnswer: 1, explanation: 'Financial experts recommend 3-6 months of living expenses in an easily accessible emergency fund.' },
              { question: 'What is compound interest?', options: ['Simple interest doubled', 'Earning interest on interest', 'A bank fee', 'A type of loan'], correctAnswer: 1, explanation: 'Compound interest means you earn interest on both your principal and previously earned interest.' },
              { question: 'What is an index fund?', options: ['Individual stock', 'Diversified portfolio tracking a market index', 'Savings account', 'Government bond'], correctAnswer: 1, explanation: 'Index funds track a market index (like S&P 500), providing instant diversification at low cost.' },
            ],
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
            quiz: [
              { question: 'What is the Eisenhower Matrix?', options: ['A math formula', 'A task prioritization framework with 4 quadrants', 'A project management tool', 'A scheduling app'], correctAnswer: 1, explanation: 'The Eisenhower Matrix organizes tasks into four quadrants based on urgency and importance.' },
              { question: 'What does the 80/20 rule state?', options: ['Work 80 hours per week', '80% of results come from 20% of efforts', 'Spend 80% on work, 20% on rest', 'Complete 80% of tasks'], correctAnswer: 1, explanation: 'The Pareto Principle states that roughly 80% of results come from 20% of efforts.' },
              { question: 'What should you do with non-urgent, non-important tasks?', options: ['Do them first', 'Schedule them', 'Delegate them', 'Eliminate them'], correctAnswer: 3, explanation: 'Tasks that are neither urgent nor important should be eliminated to free up time for what matters.' },
            ],
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
            quiz: [
              { question: 'What are the four laws of habit formation?', options: ['Plan, execute, review, repeat', 'Obvious, attractive, easy, satisfying', 'Start, continue, measure, finish', 'Think, act, reflect, improve'], correctAnswer: 1, explanation: 'James Clear\'s four laws: Make it Obvious, Attractive, Easy, and Satisfying.' },
              { question: 'What is a "2-minute rule"?', options: ['All tasks take 2 minutes', 'Start new habits with 2-minute versions', 'Take breaks every 2 minutes', 'Plan for 2 minutes'], correctAnswer: 1, explanation: 'The 2-minute rule says to start a new habit by doing a 2-minute version to build consistency.' },
              { question: 'What is habit stacking?', options: ['Doing many habits at once', 'Linking a new habit to an existing one', 'Stacking books', 'Making habits harder'], correctAnswer: 1, explanation: 'Habit stacking links a new habit to an existing routine: "After [existing habit], I will [new habit]."' },
            ],
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
            quiz: [
              { question: 'What are the four functions of management?', options: ['Hire, fire, pay, manage', 'Plan, organize, lead, control', 'Create, sell, market, deliver', 'Research, develop, test, deploy'], correctAnswer: 1, explanation: 'The four core functions are Planning, Organizing, Leading, and Controlling.' },
              { question: 'What is the controlling function?', options: ['Micromanaging', 'Monitoring performance and correcting deviations', 'Controlling employees', 'Setting rules'], correctAnswer: 1, explanation: 'Controlling involves monitoring actual performance against plans and making necessary corrections.' },
              { question: 'What does strategic planning focus on?', options: ['Daily tasks', 'Long-term direction and goals', 'Employee schedules', 'Office layout'], correctAnswer: 1, explanation: 'Strategic planning focuses on long-term organizational direction, typically 3-5 years ahead.' },
            ],
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
            quiz: [
              { question: 'What does SWOT stand for?', options: ['Strategy, Work, Output, Time', 'Strengths, Weaknesses, Opportunities, Threats', 'Sales, Wages, Operations, Technology', 'Systems, Workflow, Organization, Tasks'], correctAnswer: 1, explanation: 'SWOT = Strengths, Weaknesses, Opportunities, Threats — a strategic analysis framework.' },
              { question: 'What is the first step in rational decision-making?', options: ['Generate alternatives', 'Identify the problem', 'Implement solution', 'Gather feedback'], correctAnswer: 1, explanation: 'The first step is clearly identifying and defining the problem to be solved.' },
              { question: 'What is bounded rationality?', options: ['Perfect decisions', 'Limited ability to process all information', 'Irrational behavior', 'Group decision making'], correctAnswer: 1, explanation: 'Bounded rationality means our ability to make rational decisions is limited by available information, time, and cognitive capacity.' },
            ],
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
            quiz: [
              { question: 'What does SEO stand for?', options: ['Social Engine Optimization', 'Search Engine Optimization', 'Site Enhancement Operation', 'Search Enhancement Output'], correctAnswer: 1, explanation: 'SEO stands for Search Engine Optimization.' },
              { question: 'What is on-page SEO?', options: ['Building backlinks', 'Optimizing content and HTML on your site', 'Social media marketing', 'Paid advertising'], correctAnswer: 1, explanation: 'On-page SEO involves optimizing content, meta tags, and structure on your own website.' },
              { question: 'What is a backlink?', options: ['A broken link', 'A link from another site to yours', 'An internal link', 'A redirect'], correctAnswer: 1, explanation: 'A backlink is when another website links to your site, acting as a "vote of confidence."' },
            ],
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
            quiz: [
              { question: 'What is a buyer persona?', options: ['A real customer', 'A fictional representation of your ideal customer', 'A sales target', 'A marketing budget'], correctAnswer: 1, explanation: 'A buyer persona is a semi-fictional representation of your ideal customer based on research and data.' },
              { question: 'What is content repurposing?', options: ['Deleting old content', 'Adapting content into different formats', 'Copying competitors', 'Rewriting for SEO'], correctAnswer: 1, explanation: 'Repurposing means adapting existing content into different formats to reach more audiences.' },
              { question: 'What drives content marketing success?', options: ['Quantity over quality', 'Consistency and valuable content', 'Paid promotion only', 'Short-term campaigns'], correctAnswer: 1, explanation: 'Success comes from consistently publishing high-quality, valuable content for your target audience.' },
            ],
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
            quiz: [
              { question: 'What is an MVP?', options: ['Most Valuable Product', 'Minimum Viable Product', 'Market Value Proposition', 'Main Version Product'], correctAnswer: 1, explanation: 'MVP = Minimum Viable Product — the simplest version that tests your core assumptions.' },
              { question: 'How did Dropbox validate their idea?', options: ['Built the full product', 'A demo video', 'Market research report', 'Hired a sales team'], correctAnswer: 1, explanation: 'Dropbox created a simple demo video to gauge interest before building the full product.' },
              { question: 'What is the Lean Startup approach?', options: ['Spend less money', 'Build-Measure-Learn cycle', 'Hire fewer people', 'Skip marketing'], correctAnswer: 1, explanation: 'The Lean Startup uses Build-Measure-Learn cycles to validate assumptions quickly and pivot based on feedback.' },
            ],
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
            quiz: [
              { question: 'How many blocks does the Business Model Canvas have?', options: ['5', '7', '9', '12'], correctAnswer: 2, explanation: 'The Business Model Canvas has 9 blocks covering all aspects of a business model.' },
              { question: 'What is a freemium model?', options: ['Everything is free', 'Free basic version, paid premium features', 'Free trial only', 'Ad-supported'], correctAnswer: 1, explanation: 'Freemium offers a free basic product with paid upgrades for premium features.' },
              { question: 'What is a value proposition?', options: ['Your price', 'Why customers choose you over alternatives', 'Your logo', 'Your market size'], correctAnswer: 1, explanation: 'A value proposition explains the unique value you provide that makes customers choose your product.' },
            ],
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
            quiz: [
              { question: 'Which style involves team in decisions?', options: ['Autocratic', 'Democratic', 'Laissez-faire', 'Bureaucratic'], correctAnswer: 1, explanation: 'Democratic leadership involves team members in the decision-making process.' },
              { question: 'When is autocratic leadership appropriate?', options: ['Always', 'Never', 'During crises or emergencies', 'Only for new teams'], correctAnswer: 2, explanation: 'Autocratic leadership is effective during crises when quick, decisive action is needed.' },
              { question: 'What does a servant leader focus on?', options: ['Their own authority', 'Serving the team\'s needs', 'Rules and procedures', 'Profits only'], correctAnswer: 1, explanation: 'Servant leaders prioritize serving and developing their team members.' },
            ],
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
            quiz: [
              { question: 'What are Tuckman\'s team stages?', options: ['Plan, do, check, act', 'Forming, storming, norming, performing', 'Start, build, grow, mature', 'Recruit, train, deploy, review'], correctAnswer: 1, explanation: 'Tuckman\'s model: Forming, Storming, Norming, Performing describes how teams develop.' },
              { question: 'What is psychological safety?', options: ['Physical workplace safety', 'Feeling safe to take risks and be vulnerable', 'Job security', 'Mental health benefits'], correctAnswer: 1, explanation: 'Psychological safety means team members feel safe to take risks, speak up, and make mistakes without fear of punishment.' },
              { question: 'What did Google\'s Project Aristotle find?', options: ['IQ is most important', 'Psychological safety is #1 for team success', 'Team size matters most', 'Experience is key'], correctAnswer: 1, explanation: 'Google\'s research found psychological safety was the most important factor in high-performing teams.' },
            ],
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
            quiz: [
              { question: 'What does AARRR stand for?', options: ['A pirate expression', 'Acquisition, Activation, Retention, Revenue, Referral', 'Awareness, Action, Result, Return, Repeat', 'Analyze, Act, Review, Revise, Report'], correctAnswer: 1, explanation: 'AARRR = Acquisition, Activation, Retention, Revenue, Referral — also called Pirate Metrics.' },
              { question: 'What is product-led growth?', options: ['Growing the product team', 'Using the product itself as the main growth driver', 'Adding more features', 'Selling products'], correctAnswer: 1, explanation: 'Product-led growth means the product itself drives user acquisition, conversion, and expansion.' },
              { question: 'How did Dropbox grow rapidly?', options: ['TV advertising', 'Referral program offering free storage', 'SEO only', 'Cold calling'], correctAnswer: 1, explanation: 'Dropbox\'s referral program rewarded users with free storage for inviting friends — a viral growth loop.' },
            ],
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
            quiz: [
              { question: 'What comes after seed funding?', options: ['Pre-seed', 'Series A', 'IPO', 'Angel round'], correctAnswer: 1, explanation: 'The typical progression is Pre-seed → Seed → Series A → Series B → etc.' },
              { question: 'What do investors value most?', options: ['Office location', 'Traction and team', 'Company name', 'Number of features'], correctAnswer: 1, explanation: 'Investors primarily look for evidence of traction (growth metrics) and a strong, capable team.' },
              { question: 'How many slides should a pitch deck have?', options: ['5', '10-15', '30+', '50'], correctAnswer: 1, explanation: 'An effective pitch deck typically has 10-15 slides covering problem, solution, market, team, and ask.' },
            ],
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
            quiz: [
              { question: 'What is CAC?', options: ['Customer Attraction Campaign', 'Customer Acquisition Cost', 'Content and Advertising Cost', 'Click and Conversion'], correctAnswer: 1, explanation: 'CAC = Customer Acquisition Cost — the total cost to acquire one new customer.' },
              { question: 'What CLV:CAC ratio is healthy?', options: ['1:1', '2:1', '3:1 or higher', '10:1 minimum'], correctAnswer: 2, explanation: 'A CLV:CAC ratio of 3:1 or higher indicates a sustainable, profitable business model.' },
              { question: 'What is churn rate?', options: ['Growth rate', 'Rate of customers leaving', 'Click-through rate', 'Revenue rate'], correctAnswer: 1, explanation: 'Churn rate measures the percentage of customers who stop using your product in a given period.' },
            ],
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
            quiz: [
              { question: 'What is the "control" in A/B testing?', options: ['The new version', 'The original version', 'Both versions', 'The winner'], correctAnswer: 1, explanation: 'The control is the original version being compared against the new variation.' },
              { question: 'Why test one variable at a time?', options: ['It\'s faster', 'To clearly identify what caused the difference', 'It\'s cheaper', 'Industry rule'], correctAnswer: 1, explanation: 'Testing one variable at a time ensures you know exactly what caused any performance difference.' },
              { question: 'What is statistical significance?', options: ['A large sample size', 'Confidence that results aren\'t due to chance', 'A perfect experiment', 'Zero errors'], correctAnswer: 1, explanation: 'Statistical significance means there\'s high confidence (usually 95%+) that results aren\'t due to random chance.' },
            ],
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
            quiz: [
              { question: 'Which growth strategy is lowest risk?', options: ['Diversification', 'Market development', 'Market penetration', 'Product development'], correctAnswer: 2, explanation: 'Market penetration — selling more of existing products in current markets — carries the lowest risk.' },
              { question: 'What is market development?', options: ['Creating new products', 'Entering new markets with existing products', 'Improving current products', 'Reducing prices'], correctAnswer: 1, explanation: 'Market development means taking existing products into new geographic or demographic markets.' },
              { question: 'What is Amazon AWS an example of?', options: ['Market penetration', 'Market development', 'Product development', 'Diversification'], correctAnswer: 3, explanation: 'AWS was diversification — a new product (cloud computing) in a new market (enterprise IT).' },
            ],
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
            quiz: [
              { question: 'What does vision answer?', options: ['How much money?', 'Where are we going?', 'Who are we hiring?', 'What technology to use?'], correctAnswer: 1, explanation: 'Vision answers "where are we going?" — it paints a picture of the desired future state.' },
              { question: 'What makes a strategy effective?', options: ['Including everything', 'Making clear trade-offs and choices', 'Copying competitors', 'Being vague'], correctAnswer: 1, explanation: 'Effective strategy requires making difficult trade-offs — choosing what to do AND what NOT to do.' },
              { question: 'Why is communication important for strategy?', options: ['Legal requirement', 'Without understanding, teams can\'t execute', 'To impress stakeholders', 'For documentation'], correctAnswer: 1, explanation: 'Teams need to understand the strategy to execute it. Poor communication leads to misalignment.' },
            ],
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
            quiz: [
              { question: 'What percentage of change initiatives fail?', options: ['10%', '30%', '50%', '70%'], correctAnswer: 3, explanation: 'Research suggests approximately 70% of organizational change initiatives fail.' },
              { question: 'What is the first step in Kotter\'s model?', options: ['Build a team', 'Create urgency', 'Write a plan', 'Train employees'], correctAnswer: 1, explanation: 'The first step is creating a sense of urgency about the need for change.' },
              { question: 'Why do change initiatives fail most often?', options: ['Lack of budget', 'Lack of leadership support and communication', 'Too many meetings', 'Technology issues'], correctAnswer: 1, explanation: 'The top reasons are lack of leadership commitment, poor communication, and insufficient urgency.' },
            ],
          },
        ],
      },
    ],
  },
];

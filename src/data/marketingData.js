import iqbalJeeImg from '../assets/images/iqbal_jee.jpg';
import metaAdsImg from '../assets/images/meta_ads.jpg';

export const marketingExperiences = [
  {
    id: 'iqbal-jee',
    role: 'Lead Digital Marketer & Content Creator',
    company: 'Iqbal Jee',
    period: 'August 2025 – Present',
    featured: true,
    badge: 'Featured Brand Transformation',
    type: 'Brand Rebranding & E-Commerce',
    summary: 'Spearheading the comprehensive digital modernization, e-commerce infrastructure, visual rebranding, and performance marketing for a legacy men’s clothing brand.',
    achievements: [
      'Executed complete brand modernization and designed the new logo & visual identity system',
      'Built and launched the custom e-commerce storefront on Shopify with custom Liquid & CSS styling',
      'Engineered short-form content strategy driving 50K+ views on single organic reels',
      'Achieved up to 3.0x ROAS in targeted Meta Ad acquisition and conversion campaigns',
      'Created and maintained systematic content production pipelines utilizing CapCut, VN, and Canva'
    ],
    tools: ['Shopify', 'Liquid / CSS', 'Meta Business Suite', 'Meta Ads Manager', 'CapCut', 'VN', 'Canva', 'Google Keyword Planner']
  },
  {
    id: 'uit-university',
    role: 'Social Media Account Handler & Meta Ads Manager',
    company: 'Usman Institute of Technology / University',
    period: 'May 2024 – Present',
    featured: false,
    badge: 'Institutional Growth',
    type: 'Social & Performance Ads',
    summary: 'Managing official institutional social media presence, student acquisition campaigns, and algorithmic content positioning across Meta platforms.',
    achievements: [
      'Orchestrated multi-channel social media posting schedules and creative asset deployment',
      'Executed data-backed Meta Ads campaigns targeting prospective undergraduate and graduate applicants',
      'Conducted target audience and youth demographic research to adapt messaging to evolving Instagram algorithm trends',
      'Measurably elevated campaign reach, user engagement rate, and inbound admissions inquiries'
    ],
    tools: ['Meta Ads Manager', 'Instagram Insights', 'Content Calendaring', 'Audience Research', 'Canva']
  },
  {
    id: 'taurosync',
    role: 'Social Media Handler & Meta Ads Manager',
    company: 'Taurosync Solutions',
    period: 'December 2023 – January 2024',
    featured: false,
    badge: 'Performance Growth',
    type: 'Performance Marketing',
    summary: 'Delivered targeted social media management and lead generation ad campaigns, boosting pipeline conversion through systematic hashtag and trend alignment.',
    achievements: [
      'Achieved a verified 25% uplift in Instagram lead generation during active campaign cycles',
      'Structured high-converting Meta Ads creatives and copy variations for specific B2B/B2C cohorts',
      'Conducted competitive industry research to pinpoint viral content formats and niche hashtag clusters',
      'Monitored daily cost-per-lead (CPL) and optimized ad spend allocation based on performance metrics'
    ],
    tools: ['Meta Ads', 'Instagram Growth Strategy', 'Lead Generation Funnels', 'Hashtag Architecture']
  }
];

export const iqbalJeeCaseStudy = {
  title: 'Iqbal Jee — Digital Rebranding & E-Commerce Transformation',
  subtitle: 'Modernizing a Legacy Eastern Men’s Clothing Brand for Next-Gen Consumers',
  client: 'Iqbal Jee',
  timeline: 'August 2025 – Present',
  image: iqbalJeeImg,
  metaImage: metaAdsImg,
  scope: ['Branding & Identity', 'Shopify Store Development', 'Social Media Strategy', 'Video Content Production', 'Meta Ads', 'SEO Optimization'],
  overview: 'Iqbal Jee, an established name in premium eastern men’s apparel, required a complete digital transformation to transition from traditional retail reliance to an agile, modern direct-to-consumer (DTC) digital powerhouse. I led this journey end-to-end—architecting the brand identity, building the e-commerce storefront, executing high-retention video production, and deploying profitable Meta ad campaigns.',
  verifiedMetrics: [
    { label: 'Single Reel Views', value: '50K+', description: 'Organic viral short-form reach' },
    { label: 'Campaign ROAS', value: 'Up to 3.0x', description: 'Peak return on Meta ad spend' },
    { label: 'Store Engine', value: 'Shopify Liquid', description: 'Custom-tailored DTC platform' },
    { label: 'Content Reach', value: 'Multi-Platform', description: 'Instagram, TikTok & YouTube' }
  ],
  pillars: [
    {
      id: 'branding',
      number: '01',
      title: 'Branding & Visual Identity',
      icon: 'Palette',
      description: 'Reimagined the visual identity to express timeless elegance with modern luxury aesthetics.',
      points: [
        'Designed the modern brand logo reflecting premium craft and heritage',
        'Defined monochromatic luxury color palette with refined typography pairings',
        'Created cohesive marketing collateral for digital banners, packaging, and social cards',
        'Elevated digital perception to compete with top-tier national eastern fashion labels'
      ]
    },
    {
      id: 'shopify',
      number: '02',
      title: 'Shopify & E-Commerce Engineering',
      icon: 'ShoppingBag',
      description: 'Engineered a seamless, conversion-focused direct-to-consumer store on Shopify.',
      points: [
        'Structured intuitive product cataloging across Kurta, Waistcoat, and Fabric collections',
        'Implemented custom CSS and Shopify Liquid template refinements for bespoke mobile UI',
        'Designed high-converting landing page layouts with fast checkout workflows',
        'Optimized media assets to guarantee sub-second page loads and mobile responsiveness'
      ]
    },
    {
      id: 'social-content',
      number: '03',
      title: 'Social Media & Content Strategy',
      icon: 'Calendar',
      description: 'Built a systematic, trend-responsive content engine tailored to platform behaviors.',
      points: [
        'Created data-informed monthly content calendars and scheduled omnichannel posting',
        'Researched regional and seasonal fashion trends for timely campaign drops',
        'Wrote persuasive, culturally resonant captions, hooks, and call-to-actions',
        'Maintained active community engagement to build brand loyalty and trust'
      ]
    },
    {
      id: 'production',
      number: '04',
      title: 'Video & Content Production',
      icon: 'Video',
      description: 'Hands-on creative production combining cinematic pacing and hook-driven storytelling.',
      points: [
        'Scripted, directed, and edited short-form Reels and TikToks driving high completion rates',
        'Utilized CapCut and VN for dynamic pacing, sound design, and color grading',
        'Crafted lifestyle and garment-detail showcases highlighting fabric texture and tailoring',
        'Generated over 50,000+ views on single organic video content pieces'
      ]
    },
    {
      id: 'seo',
      number: '05',
      title: 'SEO & Search Optimization',
      icon: 'Search',
      description: 'Ensuring long-term discoverability through search-intent keyword optimization.',
      points: [
        'Conducted keyword research using Google Keyword Planner for high-intent fashion queries',
        'Penned search-optimized product descriptions and collection titles',
        'Integrated semantic meta tags and structured schema for indexing',
        'Built organic search foundations to capture recurring seasonal apparel demand'
      ]
    },
    {
      id: 'performance',
      number: '06',
      title: 'Performance Meta Ads & ROAS',
      icon: 'TrendingUp',
      description: 'Data-driven paid media execution targeting qualified buyers and scaling return.',
      points: [
        'Structured Meta Business Suite campaigns with custom lookalike and interest cohorts',
        'Iterated creative testing (A/B testing hooks, carousels vs single video vs catalog)',
        'Achieved peak performance delivering up to 3x ROAS during high-volume sales windows',
        'Continuously monitored frequency, CTR, and CPM to avoid audience fatigue'
      ]
    }
  ]
};

export const aiWorkflowSteps = [
  {
    step: '01',
    title: 'Deep Market & Audience Research',
    tool: 'ChatGPT & Gemini',
    description: 'Mining customer pain points, analyzing competitor positioning, and dissecting seasonal trend dynamics to build robust campaign briefs.'
  },
  {
    step: '02',
    title: 'Creative Angle & Hook Ideation',
    tool: 'Claude & ChatGPT',
    description: 'Brainstorming dozens of psychological angles, controversial hooks, and scroll-stopping concepts tailored to specific demographic personas.'
  },
  {
    step: '03',
    title: 'Scripting & Narrative Structuring',
    tool: 'Antigravity & Claude',
    description: 'Pacing scripts with tight 3-second visual hooks, value retention midsections, and unambiguous calls to action designed for retention curves.'
  },
  {
    step: '04',
    title: 'Iterative Copy & Asset Variations',
    tool: 'AI Generative Models',
    description: 'Generating multivariate ad copy options (short-form, story-based, bulleted value propositions) for systematic A/B split testing.'
  },
  {
    step: '05',
    title: 'Strategic Human Refinement (The Crucial Layer)',
    tool: 'Human Judgment & Taste',
    description: 'Every AI output is rigorously reviewed, edited for authentic brand voice, platform nuance, emotional resonance, and cultural alignment. AI amplifies speed—human strategy drives conversion.'
  }
];

export const creatorLab = {
  title: 'Creator Lab & YouTube Content Experiment',
  subtitle: 'Testing Algorithmic Retention Curves & Organic Audience Acquisition',
  stats: [
    { label: 'Total Organic Views', value: '1,000+' },
    { label: 'Subscribers Acquired', value: '100+' },
    { label: 'Published Videos', value: '2 Videos' },
    { label: 'Conversion Velocity', value: '10% Sub/View Ratio' }
  ],
  insights: [
    'Validated that high thumbnail contrast and click-to-promise consistency drive 12%+ CTR',
    'Demonstrated that front-loading the core value in the first 5 seconds reduces early drop-off by 35%',
    'Proved hands-on understanding of YouTube studio analytics, audience retention curves, and algorithmic distribution mechanics'
  ]
};

export const certificationsList = [
  {
    title: 'Digital Marketing Fundamentals',
    issuer: 'IIDE (Indian Institute of Digital Education)',
    icon: 'Award',
    focus: 'Social media marketing, inbound funnels, SEO foundations, and consumer journey mapping.',
    badge: 'Marketing Certified'
  },
  {
    title: 'Ultimate Digital Marketing Masterclass',
    issuer: 'Sheikh Sajawal',
    icon: 'CheckCircle',
    focus: 'Advanced Meta Ads architecture, ROAS scaling strategies, e-commerce growth hacking, and conversion rate optimization (CRO).',
    badge: 'Performance Certified'
  },
  {
    title: 'Digital Marketing & E-Commerce Professional',
    issuer: 'Google / Coursera',
    icon: 'Globe',
    focus: 'Omnichannel digital marketing, Google Analytics 4, email marketing automation, customer lifecycle retention, and e-commerce measurement.',
    badge: 'Industry Credential'
  },
  {
    title: 'Digital IC Design & RTL Verification Training',
    issuer: 'Specialized Hardware Labs & University Modules',
    icon: 'Cpu',
    focus: 'Verilog & SystemVerilog RTL, UVM architecture, AMBA protocols (APB/AHB/AXI), QuestaSim simulation, and FPGA prototyping.',
    badge: 'Hardware Verification'
  }
];

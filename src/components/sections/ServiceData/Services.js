const WebDevelopmentArray = [
    {
        "service_id": 1,
        "service_name": "Static Website (5 Pages)",
        "service_description": "Simple HTML, CSS & minimal JavaScript, no database or backend",
        "service_perks": [
            "Up to 5 pages",
            "Mobile Responsive Pages",
            "Using HTML, CSS & minimal JavaScript",
            "On-Page SEO Optimized",
            "Quick Contact Form"
        ],
        "service_addon_perks": {
            "points": ["1yr Domain & Web Hosting", "Off-Page SEO", "Basic CMS Integration"],
            "price": 5000
        },
        "service_price": 8000
    },
    {
        "service_id": 2,
        "service_name": "Dynamic Website",
        "service_description": "Includes backend development (PHP, Node.js, etc.), database, and dynamic content",
        "service_perks": [
            "Customizable UI",
            "Database Integration",
            "Admin Panel",
            "Contact & Feedback Forms",
            "SEO Optimized"
        ],
        "service_addon_perks": {
            "points": ["1yr Domain & Hosting", "Extra Security Features", "Custom API Integration"],
            "price": 10000
        },
        "service_price": 25000
    },
    {
        "service_id": 3,
        "service_name": "E-Commerce Website",
        "service_description": "Online store with product management, payment gateways, and admin panel",
        "service_perks": [
            "Unlimited Products",
            "Secure Payment Integration",
            "User Authentication & Login",
            "Cart & Checkout System",
            "Mobile Responsive"
        ],
        "service_addon_perks": {
            "points": ["Advanced Analytics", "Multi-Vendor Support", "AI Product Recommendations"],
            "price": 20000
        },
        "service_price": 50000
    },
    {
        "service_id": 4,
        "service_name": "Custom Web Application",
        "service_description": "Fully customized features, complex backend, user authentication, and third-party integrations",
        "service_perks": [
            "Tailored Design & Functionality",
            "Real-time Data Processing",
            "API Development & Integration",
            "Authentication & Authorization",
            "High Performance & Scalability"
        ],
        "service_addon_perks": {
            "points": ["Cloud Hosting", "AI & Machine Learning Features", "Blockchain Integration"],
            "price": 50000
        },
        "service_price": 150000
    },
    {
        "service_id": 5,
        "service_name": "WordPress Website",
        "service_description": "CMS-based site with theme customization, plugins, and basic SEO",
        "service_perks": [
            "Pre-built Themes",
            "Plugin Integration",
            "Blog Setup",
            "SEO Optimized",
            "User-Friendly CMS"
        ],
        "service_addon_perks": {
            "points": ["Premium Plugins", "Custom Theme Development", "Speed Optimization"],
            "price": 10000
        },
        "service_price": 25000
    },
    {
        "service_id": 6,
        "service_name": "UI/UX Design",
        "service_description": "Wireframing, prototyping, branding, and responsive design implementation",
        "service_perks": [
            "User Experience Research",
            "Wireframing & Prototyping",
            "Interactive UI Components",
            "Cross-Platform Compatibility",
            "Branding & Logo Design"
        ],
        "service_addon_perks": {
            "points": ["Usability Testing", "A/B Testing", "Motion UI Animations"],
            "price": 15000
        },
        "service_price": 30000
    },
    {
        "service_id": 7,
        "service_name": "Website Maintenance",
        "service_description": "Updates, backups, security checks, and bug fixes",
        "service_perks": [
            "Regular Security Updates",
            "Content & Plugin Updates",
            "Database Backups",
            "Performance Optimization",
            "Bug Fixes & Debugging"
        ],
        "service_addon_perks": {
            "points": ["24/7 Support", "Uptime Monitoring", "Advanced Firewall"],
            "price": 2000
        },
        "service_price": 5000
    },
    {
        "service_id": 8,
        "service_name": "SEO Optimization",
        "service_description": "On-page, off-page SEO, and performance optimization",
        "service_perks": [
            "Keyword Research",
            "On-Page SEO",
            "Backlink Building",
            "Website Speed Optimization",
            "Competitor Analysis"
        ],
        "service_addon_perks": {
            "points": ["PPC Campaign Management", "Local SEO", "Content Marketing"],
            "price": 10000
        },
        "service_price": 20000
    },
    {
        "service_id": 9,
        "service_name": "Full-Stack Web Development",
        "service_description": "End-to-end development, including frontend, backend, and database",
        "service_perks": [
            "Custom Frontend & Backend",
            "Database & API Development",
            "Authentication & Authorization",
            "Advanced Security Features",
            "Scalable Cloud Deployment"
        ],
        "service_addon_perks": {
            "points": ["Serverless Architecture", "AI-Powered Features", "Multi-Tenant Support"],
            "price": 30000
        },
        "service_price": 100000
    }
];

const DigitalMarketingArray = [
    {
        "service_id": 1,
        "service_name": "Social Media Marketing",
        "service_description": "Promotion on platforms like Facebook, Instagram, LinkedIn, and Twitter",
        "service_perks": [
            "Targeted Ad Campaigns",
            "Content Creation",
            "Analytics & Reporting",
            "Audience Engagement",
            "Brand Awareness Strategies"
        ],
        "service_addon_perks": {
            "points": ["Influencer Marketing", "Paid Ad Boosting", "Lead Generation"],
            "price": 15000
        },
        "service_price": 30000
    },
    {
        "service_id": 2,
        "service_name": "Search Engine Optimization (SEO)",
        "service_description": "On-page and off-page SEO for better ranking on search engines",
        "service_perks": [
            "Keyword Research",
            "Technical SEO Audit",
            "Content Optimization",
            "Backlink Building",
            "Competitor Analysis"
        ],
        "service_addon_perks": {
            "points": ["Local SEO", "Google Ads Optimization", "Blog Content Strategy"],
            "price": 20000
        },
        "service_price": 50000
    },
    {
        "service_id": 3,
        "service_name": "Content Marketing",
        "service_description": "Content creation and distribution strategies for brand awareness and engagement",
        "service_perks": [
            "Blog Writing",
            "Video Content Production",
            "Email Marketing",
            "Infographics & Visual Content",
            "SEO-Optimized Articles"
        ],
        "service_addon_perks": {
            "points": ["Press Releases", "Case Study Creation", "Interactive Content"],
            "price": 25000
        },
        "service_price": 60000
    },
    {
        "service_id": 4,
        "service_name": "Pay-Per-Click (PPC) Advertising",
        "service_description": "Paid advertising on Google Ads, Facebook Ads, and other platforms",
        "service_perks": [
            "Target Audience Analysis",
            "Keyword Bidding Strategy",
            "Conversion Tracking",
            "Ad Copywriting & Optimization",
            "Performance Analytics"
        ],
        "service_addon_perks": {
            "points": ["Landing Page Optimization", "Retargeting Campaigns", "A/B Testing"],
            "price": 30000
        },
        "service_price": 70000
    },
    {
        "service_id": 5,
        "service_name": "Email Marketing",
        "service_description": "Automated email campaigns to nurture leads and engage customers",
        "service_perks": [
            "Email List Building",
            "Drip Campaigns",
            "A/B Testing",
            "Conversion Optimization",
            "Personalized Email Content"
        ],
        "service_addon_perks": {
            "points": ["CRM Integration", "Advanced Email Analytics", "Custom Templates"],
            "price": 20000
        },
        "service_price": 50000
    }
];

const MobileAppDevelopmentArray = [
    {
        "service_id": 1,
        "service_name": "Android App Development",
        "service_description": "Native Android apps using Kotlin or Java",
        "service_perks": [
            "Custom UI & UX",
            "API Integration",
            "Push Notifications",
            "Play Store Deployment",
            "Offline Functionality"
        ],
        "service_addon_perks": {
            "points": ["In-App Purchases", "Cloud Storage", "AI Features"],
            "price": 25000
        },
        "service_price": 80000
    },
    {
        "service_id": 2,
        "service_name": "iOS App Development",
        "service_description": "Native iOS apps using Swift",
        "service_perks": [
            "App Store Deployment",
            "Secure Authentication",
            "UI/UX Optimization",
            "Real-Time Updates",
            "Integration with Apple Services"
        ],
        "service_addon_perks": {
            "points": ["Custom Animations", "Machine Learning Models", "Cloud Syncing"],
            "price": 30000
        },
        "service_price": 100000
    },
    {
        "service_id": 3,
        "service_name": "Cross-Platform App Development",
        "service_description": "Hybrid apps using Flutter or React Native",
        "service_perks": [
            "Single Codebase for Android & iOS",
            "Fast Performance",
            "Customizable UI",
            "Seamless API Integration",
            "Third-Party Plugin Support"
        ],
        "service_addon_perks": {
            "points": ["AR/VR Features", "Blockchain Integration", "IoT Connectivity"],
            "price": 35000
        },
        "service_price": 90000
    }
];

const ProfessionalTrainingArray = [
    {
        "service_id": 1,
        "service_name": "Full-Stack Web Development Training",
        "service_description": "Comprehensive training on MERN, LAMP, or MEAN stacks",
        "service_perks": [
            "Hands-on Projects",
            "Live Instructor Sessions",
            "Certificate of Completion",
            "Interview Preparation",
            "Job Assistance"
        ],
        "service_addon_perks": {
            "points": ["Advanced React.js Course", "Backend Scaling Techniques", "Freelancing Guidance"],
            "price": 15000
        },
        "service_price": 45000
    }
];

export { WebDevelopmentArray, DigitalMarketingArray, MobileAppDevelopmentArray, ProfessionalTrainingArray }
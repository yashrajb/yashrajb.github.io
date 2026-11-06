// ============================================================
//  Edit ONLY this file for content, then run:  node build.js
//  Upload the dist/ folder. Empty "items" hides a section.
// ============================================================
// Credly: put your profile URL once here (used by the Certifications section and footer).
const CREDLY_URL = "https://www.credly.com/users/basan-yashraj";

module.exports = {
  url: "https://yashrajbasan.co.in",
  name: "Yashraj Basan",
  jobTitle: "Senior Software Engineer",
  email: "basanyash627@gmail.com",
  resume: { href: "/resume.pdf", target: "_blank" },

  seo: {
    title: "Yashraj Basan | Freelance Full Stack Developer for AI Engineering, AWS, Web Apps & Browser Extensions",
    description: "Yashraj Basan is a senior software engineer in India (7+ years, Node.js,React,AWS,AI).I build web apps and AI tools that solve real business problems. Hire me.",
    ogImage: "/og-image.png",
    keywords: ["Node.js", "React", "JavaScript", "AI Engineering", "AWS", "Browser extensions", "NoSQL", "SQL"],
  },

  // Keep this to ~5 links so the header stays compact. Sections not listed here
  // (testimonials, about) are still on the page.
  nav: [
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certs", href: "#certifications" },
    { label: "Blog", href: "https://basanyash627.medium.com", target: "_blank" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    title: `<h1 class="headline">Hi, I'm Yashraj Basan.</h1> 
    <h1 class="subheadline">I build web apps and AI tools that solve real business problems</h1>`,
    // lede: "I'm Yashraj Basan, a senior software engineer in India with 7+ years of Node.js and React experience. I help startups turn an idea into a working product, fast.",
    buttons: [
      { label: "Hire me", href: "#contact" },
      { label: "See my work", href: "#work", ghost: true }
    ],
  },

  services: {
    title: "What I can build for you",
    items: [
      { title: "AI engineering", text: "I build AI features that hold up in production: agentic workflows, RAG over your own data with vector databases, and careful prompt engineering. I write evals so you know it’s actually working, and I use AWS Bedrock while keeping an eye on cost, so the bill doesn’t surprise you" },
      {title: "AWS", text:"I set up and run backends on AWS, using EC2, Lambda, DynamoDB, Step Functions and S3, with CI/CD pipelines so shipping is boring (in a good way). I also look for ways to cut cost, so you only pay for what you use."},
      { title: "Web application development", text: "Fast, responsive apps in React and Node.js that stay fast as your users and features grow. They’re built so the next feature doesn’t mean untangling the last one." },
      { title: "Browser extension development", text: "Chrome, Edge and Firefox extensions that plug into your existing product and save your users clicks, built with security in mind" },
      { title: "Technical interviews", text: "Hiring for web or browser roles? I run technical interviews and give you a straight read on who’s ready to ship." },
    ],
  },

  experience: {
    title: "Experience",
    items: [
      { role: "Senior Software Engineer", company: "Materialplus", period: "Mar 2023 – Oct 2026", text: `

        Architected and deployed a secure, production-grade RAG system powered by AWS Bedrock and S3, serving over 1,000 workers while enforcing Bedrock Guardrails for scalable, sensitive data filtering. I elevated system reliability by building an automated AI Agent Evaluation framework to benchmark accuracy and latency, alongside integrating Laminar for complete end-to-end LLM observability and tracing. Through strategic architectural leadership, I aligned high-impact technical solutions with business constraints to slash OpenSearch costs by ~10%, all while actively mentoring junior engineers through code reviews to cultivate a strong culture of growth and collaboration.
      
        ` },
      { role: "Software Engineer", company: "KredX", period: "Sep 2021 – Jan 2023", text: `
        
          I streamlined AWS S3 deployments, trimmed costs by 1% by removing low-code dependencies, and boosted web app performance by 75%. My skills shine in scalable React monorepo design and mentoring a team of three, fostering growth and collaboration.

        ` },
      { role: "Senior Software Engineer", company: "CallHippo", period: "Jun 2020 – Aug 2021", text: `
        As a Senior Node Engineer, I transformed our user experience with a cutting-edge calling system and achieved a 50-60% performance boost through frontend optimization. I streamlined REST APIs, integrated third-party services, and simplified documentation for effortless client interaction
        ` },
      { role: "JavaScript Consultant", company: "QXF2", period: "Sep 2019 – May 2020", text: "I fearlessly tackled Node.js, JavaScript, and React challenges, leading the creation of an efficient test automation framework with TestCafe. I empowered teammates with design pattern insights and improved team productivity through automated documentation and detailed technical guides" }
    ],
  },

  certifications: {
    title: "Certifications",
    items: [
      {
        name: "AWS Certified AI Practitioner",
        description: "Validates foundational knowledge of AI, machine learning and generative AI concepts, ethics and the AWS services used to build with them.",
        link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/a7dd6daea76a4297929f410abde418b5",
      },
    ],
  },

  projects: {
    title: "Selected Projects",
    items: [
      {
        title: "DevTrackr: VS Code extension",
        tags: "JavaScript, Node.js, VS Code API",
        text: "An open-source extension that documents your daily work and syncs with GitHub. It collects no data, so everything stays private.",
        links: [
          { label: "Install extension", href: "https://marketplace.visualstudio.com/items?itemName=yashrajbasan.devtrackr" },
          { label: "Watch demo", href: "https://www.youtube.com/watch?v=PxAdWk3Yc2Q" },
          { label: "GitHub", href: "https://github.com/yashrajb/devtrackr-vscode-extension" },
        ],
      },
      {
        title: "Note It: browser extension",
        tags: "HTML, CSS, JavaScript, Chrome APIs",
        text: "Save text from any website, share notes and export them as text files. Used by 150+ students and researchers, and it collects no data.",
        links: [
          { label: "Get it on Edge", href: "https://microsoftedge.microsoft.com/addons/detail/note-it/dkmedcbiofmfhblmdbgiidmmajlbbakn" },
          { label: "GitHub", href: "https://github.com/yashrajb/noteit-browser-extension" },
        ],
      },
      {
        title: "CheesePens: brand website",
        tags: "Gatsby, React, GitHub",
        text: "A fast, low-cost website that builds customer trust and is simple for the team to run and extend.",
        links: [{ label: "Visit website", href: "https://cheesepens.com" }],
        caseStudy: "cheesepens", // adds a "Read case study" link automatically
      },
    ],
  },

  // testimonials: {
  //   title: "What clients say",
  //   items: [
  //     {
  //       quote: "❝We approached Yashraj Basan to create a website for Cheese Pen with the goal of expanding our online presence. Yashraj understood our product and our needs, delivering a website that exceeded our expectations. It beautifully showcases our product range, motto, and provides room for future additions. Yashraj also seamlessly connected it to our social media platforms.❞",
  //       author: "Nikhil Shah, Product Manager at CheesePens",
  //     },
  //   ],
  // },

  about: {
    title: "About",
    paragraphs: [
      "Since school, I’ve had a passion for building websites, feeling like I’m wielding digital magic with each project. My journey began with Jon Duckett's Books on HTML, CSS, and JavaScript, sparking a curiosity that grew into years of hands on software development experience and a Computer Science degree. I’ve worked on a range of projects, from building MVPs to scalable web applications and browser extensions. Outside of coding, I love playing guitar, reading diverse genres, and continuously exploring new skills.",
      "Feel free to reach out me if you need help with your project or just want to say hi!",
    ],
  },

  contact: {
    title: "Let's build your product",
    text: "Have a project in mind, or want to say hi? Email me and I'll reply soon.",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/yashrajb", target: "_blank" },
    { label: "LinkedIn", target: "_blank", href: "https://www.linkedin.com/in/yashraj-basan-11b915157/" },
    { label: "Instagram", href: "https://instagram.com/yashraj.dev", target: "_blank" },
    { label: "Medium", href: "https://basanyash627.medium.com", target: "_blank" },
    { label: "Credly", href: CREDLY_URL, target: "_blank" },
  ],

  caseStudies: [
    {
      slug: "cheesepens",
      title: "Cheesepens: a cost effective brand website",
      stack: "Built with Gatsby, React and GitHub",
      description: "How I built a fast, low-cost brand website for CheesePens with Gatsby and React: simpler branding, more customer trust and easier operations.",
      sections: [
        {
          imageURL:'1.png'
        },
        { heading: "Problem", text: 'When Cheespens, a pen brand, approached me, they had a clear vision - to establish a strong online presence that would build trust among investors and clients. They needed a simple static website showcasing their product lineup, a google ranking for cheese pens but it should be a cost effective and affordable' },
        { heading: "Solution", text: "Keeping practicality and affordability in mind, I decided to go with Gatsby.js, to build a website that was not just functional but dynamic. Markdown made content management a breeze, putting the power in Cheespens' hands to update their product catalog effortlessly. To keep costs down, we decided to embrace GitHub Pages, a choice that helped us sidestep the hefty expenses often tied to traditional CMS platforms." },
        {
          heading: "Result", bullets: [
            `Cost Efficiency: Cheespens made a smart move by setting aside around 2000 rupees for their domain. But the real money-saving trick was when I suggested using GitHub Pages. This choice saved them a lot of money compared to traditional CMS hosting, leading to big annual savings.`,

            `Simplified Content Management: The markdown integration provided Cheespens with an intuitive solution for updating their website, enabling them to expand their product range without the worry of escalating hosting expenses.`,

            `SEO Triumph: Basic SEO enhancements, including content optimization and meta tag improvements, propelled "cheese pens" to the top of Google search results, with cheesepens leading the way.`,

            `Enhanced Brand Trust: The newly created website, with a focus on professional design, instilled trust among investors and clients, enhancing Cheespens' credibility.`,

            `Social Media Expansion: I provided advice to Cheespens, encouraging them to establish a presence on social media platforms. This initiative expanded their customer reach and engagement, ultimately leading to increased brand recognition. Additionally, I integrated their website with social media platforms for seamless interaction with their audience`
          ]
        },
        {
          imageURL:'testimonial.png'
        }
      ]
    },
  ],
};

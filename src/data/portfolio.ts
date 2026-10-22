export interface VerificationTag {
  status: 'verified' | 'confirmed_by_records' | 'pending_confirmation';
  note: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  isAvailable: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  status: string;
  rollNumber?: string;
  location: string;
  highlights: string[];
  verification: VerificationTag;
  certificateImagePath?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'Internship' | 'Full-time' | 'Apprenticeship' | 'Virtual Internship';
  period: string;
  duration?: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  referenceId?: string;
  verification: VerificationTag;
  hasDocument: boolean;
  documentPath?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Artificial Intelligence & Vision' | 'System & Security' | 'Data & Research';
  status: 'Prototype / Under Development' | 'Hackathon Submission' | 'Academic Research';
  problemStatement: string;
  overview: string;
  features: string[];
  technologies: string[];
  myContribution: string;
  team?: string;
  eventOrContext?: string;
  githubUrl?: string;
  liveUrl?: string;
  verification: VerificationTag;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: {
    name: string;
    levelDescription: string;
    verifiedBy: string;
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  validThrough?: string;
  credentialId?: string;
  verificationUrl?: string;
  imagePath?: string;
  pdfPath?: string;
  topicsCovered: string[];
  verification: VerificationTag;
}

export interface EventItem {
  id: string;
  title: string;
  roleOrTeam: string;
  organizationOrHost: string;
  year: string;
  description: string;
  outcomeOrStatus: string;
  verification: VerificationTag;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    subheadline: string;
    bio: string[];
    currentRole: string;
    location: string;
    email: string;
    phone: string;
    photoUrl: string;
    resumePdfUrl: string;
    hasResumePdf: boolean;
    verificationNotice: string;
  };
  socialLinks: SocialLink[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
  events: EventItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Preetom Saha",
    headline: "B.Tech Computer Science & Engineering (Data Science) Student",
    subheadline: "Aspiring AI/ML & Cloud Developer | Hands-On Experience with IBM SkillsBuild, Google Cloud Vertex AI, PySpark, LLMs & Data Analytics",
    currentRole: "2nd Year B.Tech Student at Narula Institute of Technology",
    location: "Agarpara, Kolkata - 700058, West Bengal, India",
    email: "mr.preetomsaha@gmail.com",
    phone: "+91 8100645894",
    photoUrl: "/assets/preetom-photo.jpg",
    resumePdfUrl: "/assets/Preetom_Saha_Resume.pdf",
    hasResumePdf: true,
    verificationNotice: "All items on this portfolio are verified from Preetom Saha's actual LinkedIn profile posts, college enrollment records, and authentic certificate credentials. Items marked with 'Pending Confirmation' represent research leads awaiting final user review.",
    bio: [
      "I am an enthusiastic B.Tech 2nd-year student at Narula Institute of Technology, specializing in Computer Science and Engineering with a focus on Data Science (2025 – 2029).",
      "My technical journey bridges core computer science, practical data science, and modern generative AI tools. I have hands-on experience in PySpark, Python, Google Cloud Vertex AI, IBM Granite foundation models, and advanced data analytics.",
      "Alongside my technical studies, I strongly value articulate communication, business etiquette, and collaborative problem solving. Having completed professional internships and training through IBM SkillsBuild, TCS iON Career Edge, and Infosys Springboard, I am actively seeking internship opportunities and collaborative projects where I can contribute and continue to grow."
    ]
  },

  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/preetom-saha-5a8760398/",
      label: "linkedin.com/in/preetom-saha-5a8760398",
      isAvailable: true
    },
    {
      platform: "GitHub",
      url: "https://github.com/",
      label: "GitHub Profile",
      isAvailable: false
    },
    {
      platform: "Email",
      url: "mailto:mr.preetomsaha@gmail.com",
      label: "mr.preetomsaha@gmail.com",
      isAvailable: true
    },
    {
      platform: "Phone",
      url: "tel:+918100645894",
      label: "+91 8100645894",
      isAvailable: true
    }
  ],

  education: [
    {
      id: "nit-btech",
      institution: "Narula Institute of Technology (JIS Group)",
      degree: "Bachelor of Technology (B.Tech)",
      fieldOfStudy: "Computer Science and Engineering (Data Science)",
      period: "2025 – 2029",
      status: "Currently enrolled (2nd Year)",
      rollNumber: "127250900089",
      location: "Agarpara, Kolkata, West Bengal",
      highlights: [
        "Specialization in Data Science, encompassing big data processing, machine learning foundations, algorithms, and systems engineering.",
        "College Roll Number: 127250900089; represented the department in academic presentations and technical research assignments.",
        "Active member of campus initiatives and cultural representations, including the Sparsh Theatre Group representing NIT at IIM Calcutta Carpe Diem."
      ],
      verification: {
        status: "verified",
        note: "Verified via college records, EduSkills AICTE enrollment, and academic presentation documentation."
      }
    },
    {
      id: "ariadaha-hs",
      institution: "Ariadaha Kalachand High School",
      degree: "Higher Secondary (10+2)",
      fieldOfStudy: "Science Stream (WBCHSE)",
      period: "Completed 2025",
      status: "Graduated with Grade B+",
      rollNumber: "Roll 465211 No. 1029",
      location: "Ariadaha, Kolkata, West Bengal",
      certificateImagePath: "/assets/wbchse-hs-certificate.jpg",
      highlights: [
        "Completed Higher Secondary education from West Bengal Council of Higher Secondary Education (WBCHSE).",
        "Achieved overall Grade B+ on examination (Certificate No: 416062, Issued May 07, 2025)."
      ],
      verification: {
        status: "verified",
        note: "Verified by official WBCHSE Higher Secondary Certificate No: 416062."
      }
    }
  ],

  experience: [
    {
      id: "ibm-skillsbuild-internship",
      role: "AI & Emerging Technologies Virtual Intern",
      organization: "IBM SkillsBuild (in collaboration with CSRBOX / Edunet Foundation)",
      type: "Virtual Internship",
      period: "July 2026 – August 2026",
      duration: "6 Weeks",
      location: "Remote / Virtual",
      summary: "Completed an intensive industry virtual internship with IBM SkillsBuild focusing on Enterprise Generative AI, IBM Granite foundation models, and AI-driven data analytics.",
      responsibilities: [
        "Leveraged enterprise foundation models (IBM Granite models for software development) to explore code generation, debugging, and automated refactoring workflows.",
        "Implemented generative AI data extraction and transformation pipelines using LLMs to analyze structured and unstructured tabular datasets.",
        "Completed industry capstone modules on supercharging data analytics with AI-assisted exploratory data analysis (EDA) and pattern recognition.",
        "Earned verified digital credentials and completion certificates recognized on Credly."
      ],
      technologies: ["IBM Granite Models", "Generative AI", "Large Language Models", "Data Analytics", "Prompt Engineering", "Python"],
      verification: {
        status: "verified",
        note: "Verified via official IBM SkillsBuild Completion Certificate and Credly badges (Issued August 2026)."
      },
      hasDocument: true,
      documentPath: "/assets/ibm-skillsbuild-genai.jpg"
    },
    {
      id: "eduskills-gcp",
      role: "Google Cloud Generative AI Virtual Intern",
      organization: "AICTE – EduSkills Virtual Internship Program",
      type: "Virtual Internship",
      period: "August 2026 – October 2026",
      duration: "8 Weeks",
      location: "Remote / Virtual",
      referenceId: "Ref: C18Y2026M091578812 | AICTE ID: STU6a1548587fe5a1779779672",
      summary: "Selected for the competitive 8-week AICTE - EduSkills Virtual Internship Program in the Google Cloud Generative - AI track.",
      responsibilities: [
        "Underwent a structured week-wise industry curriculum focused on Google Cloud infrastructure and Generative AI capabilities.",
        "Completed hands-on modules in Prompt Design in Vertex AI, foundation model integration, and cloud-based AI workflows.",
        "Participated in weekly assessments, technical documentation tasks, and practical project evaluations."
      ],
      technologies: ["Google Cloud Platform", "Vertex AI", "Generative AI", "Prompt Engineering", "Large Language Models"],
      verification: {
        status: "verified",
        note: "Verified by official EduSkills AICTE Offer Letter Ref: C18Y2026M091578812."
      },
      hasDocument: true,
      documentPath: "/assets/eduskills-internship-offer.jpg"
    },
    {
      id: "alfido-tech",
      role: "Data Science Intern",
      organization: "Alfido Tech",
      type: "Internship",
      period: "May 20, 2026 – June 20, 2026",
      duration: "1 Month",
      location: "Remote / Hyderabad",
      summary: "Completed data science internship tasks focusing on data exploration, statistical analysis, and machine learning workflow fundamentals.",
      responsibilities: [
        "Worked on assigned data science problem sets involving exploratory data analysis and data preprocessing.",
        "Utilized Python data analysis libraries to process tabular datasets, generate insights, and evaluate baseline models.",
        "Prepared technical reports and code summaries documenting experimental findings."
      ],
      technologies: ["Python", "Pandas", "NumPy", "Data Preprocessing", "Exploratory Data Analysis"],
      verification: {
        status: "confirmed_by_records",
        note: "Indexed in LinkedIn profile post (May 20 to June 20, 2026); details reflect documented assignments."
      },
      hasDocument: false
    }
  ],

  projects: [
    {
      id: "ai-sentinel",
      title: "AI Sentinel",
      subtitle: "Intelligent Video Surveillance & Computer Vision Monitoring System",
      category: "Artificial Intelligence & Vision",
      status: "Prototype / Under Development",
      problemStatement: "Traditional closed-circuit surveillance requires constant human monitoring, leading to delayed reactions to security anomalies, unattended objects, or unauthorized entry.",
      overview: "AI Sentinel is an intelligent surveillance application designed to process video streams in near real-time, detecting designated activities and anomalies while dispatching proactive alerts.",
      features: [
        "Real-time object and entity detection pipeline leveraging computer vision models.",
        "Motion and bounding-box tracking to identify unauthorized movements or security boundary triggers.",
        "Modular architecture designed for integration with IP cameras and stored surveillance feeds.",
        "Automated notification prototype for security operators to minimize response latency."
      ],
      technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning", "Object Detection"],
      myContribution: "Conceptualized the surveillance pipeline, researched computer vision frameworks for edge detection, and implemented baseline stream ingestion logic.",
      eventOrContext: "Surveillance-focused application highlighted on Preetom's LinkedIn profile.",
      verification: {
        status: "confirmed_by_records",
        note: "Referenced in Preetom's LinkedIn profile and posts. Repository link pending user confirmation."
      }
    },
    {
      id: "aegisos",
      title: "AegisOS",
      subtitle: "Dedicated System Security & Operations Platform",
      category: "System & Security",
      status: "Hackathon Submission",
      problemStatement: "Modern computing environments require lightweight, resilient operating utilities that monitor system integrity and safeguard user endpoints without heavy runtime overhead.",
      overview: "Built collaboratively during the HexaFalls 2 Hackathon at JIS University by team COFFEE CODE REPEAT. AegisOS explores system-level security, process monitoring, and streamlined workflow management.",
      features: [
        "Lightweight process monitoring and endpoint behavior logging.",
        "Streamlined administrative dashboard providing real-time system metrics.",
        "Built under tight 24-48 hour hackathon sprint constraints with focus on practical utility."
      ],
      technologies: ["Systems Programming", "Scripting", "Security Auditing", "Process Monitoring"],
      myContribution: "Collaborated on system architecture, documentation, and feature testing during the HexaFalls 2 hackathon.",
      team: "COFFEE CODE REPEAT (Team Members: Preetom Saha, Ankush Shaw, Arpan Basak)",
      eventOrContext: "HexaFalls 2 Hackathon (JIS University, Kolkata)",
      verification: {
        status: "confirmed_by_records",
        note: "Verified via Devfolio HexaFalls 2 hackathon project records and team COFFEE CODE REPEAT submissions."
      }
    },
    {
      id: "biofuel-lifecycle",
      title: "Biofuels & Renewable Energy Assessment",
      subtitle: "Technical & Computational Analysis of 3 Generations of Biofuel Technologies",
      category: "Data & Research",
      status: "Academic Research",
      problemStatement: "Evaluating whether first, second, or third-generation biofuels offer the most sustainable, high-density alternative to fossil fuels without compromising food security.",
      overview: "An academic research and modeling project presented at Narula Institute of Technology ('Ctrl Alt Del' Team) comparing net CO2 emissions, lifecycle metrics, and computational feasibility of biofuels across transport, heating, and power generation.",
      features: [
        "Comprehensive comparative matrix analyzing 1st Gen (food crops), 2nd Gen (agricultural waste), and 3rd Gen (microalgae) biofuels.",
        "Quantitative emissions evaluation demonstrating up to 80% reduction in net CO2 compared to petroleum fuels.",
        "Practical feasibility analysis across transport (E10/E85, B20), residential heating, and electrical grid co-firing."
      ],
      technologies: ["Data Analysis", "Comparative Lifecycle Modeling", "Research Presentation", "Energy Systems"],
      myContribution: "Co-authored the research analysis, compiled comparative emission datasets, and co-delivered the project presentation.",
      team: "Narula Institute of Technology Research Team (Preetom Saha - Roll 127250900089, Sayan Ghosh, Soham Chakraborty, Sayan Ghanta)",
      eventOrContext: "Departmental Project Presentation, Narula Institute of Technology",
      verification: {
        status: "verified",
        note: "Verified via original institutional presentation records and student roll numbers."
      }
    }
  ],

  skills: [
    {
      categoryName: "Data Science & Artificial Intelligence",
      description: "Practical knowledge in big data processing, foundation models, and machine learning essentials.",
      skills: [
        { name: "PySpark", levelDescription: "Distributed data processing and DataFrame manipulation", verifiedBy: "Infosys Springboard Certified" },
        { name: "Python", levelDescription: "Core scripting, automation, and data analysis pipelines", verifiedBy: "Academic & Internship Practice" },
        { name: "Generative AI & LLMs", levelDescription: "Understanding LLM fundamentals, prompt tuning, and data integration", verifiedBy: "IBM SkillsBuild & TCS iON Certified" },
        { name: "IBM Granite Models", levelDescription: "Enterprise foundation models for software tasks and coding workflows", verifiedBy: "IBM SkillsBuild Badge" },
        { name: "Prompt Design & Engineering", levelDescription: "Structured prompting, context grounding, and parameter tuning in Vertex AI", verifiedBy: "Google Cloud Skill Badge" },
        { name: "Data Analytics", levelDescription: "Data cleaning, exploratory data analysis, and insight extraction", verifiedBy: "IBM & Coursework Certified" }
      ]
    },
    {
      categoryName: "Core Computing & Engineering",
      description: "Foundational software engineering principles and computer science fundamentals.",
      skills: [
        { name: "Data Structures & Algorithms", levelDescription: "Understanding computational complexity, arrays, lists, and trees", verifiedBy: "B.Tech Curriculum at NIT" },
        { name: "Computer Vision Concepts", levelDescription: "Video stream handling, object detection workflows with OpenCV", verifiedBy: "AI Sentinel Project" },
        { name: "Git & Version Control", levelDescription: "Repository management, branching, and team collaboration", verifiedBy: "Project & Hackathon Use" },
        { name: "IT Fundamentals & Systems", levelDescription: "Hardware basics, operating environments, and networking concepts", verifiedBy: "TCS iON Career Edge" }
      ]
    },
    {
      categoryName: "Tools & Cloud Platforms",
      description: "Hands-on experience with modern cloud workspaces and data manipulation software.",
      skills: [
        { name: "Google Cloud Platform (Vertex AI)", levelDescription: "Model exploration, prompt engineering, and GenAI studio", verifiedBy: "Google Cloud Badge & EduSkills" },
        { name: "IBM SkillsBuild & Credly", levelDescription: "Enterprise AI and analytics learning platform", verifiedBy: "Earned Digital Credentials" },
        { name: "Advanced Microsoft Excel", levelDescription: "Complex formulas, data modeling, PivotTables, and AI augmentation", verifiedBy: "100% Score (Best Computer Technology - BCT/2026/689773)" },
        { name: "Microsoft Office Suite", levelDescription: "Word, PowerPoint, and Excel documentation and technical reports", verifiedBy: "TCS iON & Academic Deliverables" },
        { name: "Infosys Springboard", levelDescription: "Professional enterprise learning platform", verifiedBy: "PySpark Course Completion" }
      ]
    },
    {
      categoryName: "Professional & Core Competencies",
      description: "Crucial interpersonal and workplace readiness competencies.",
      skills: [
        { name: "Problem Solving", levelDescription: "Systematic troubleshooting and logical structuring", verifiedBy: "Hackathon & Engineering Practice" },
        { name: "Business Communication & Etiquette", levelDescription: "Professional interaction, presentation, and email conduct", verifiedBy: "TCS iON Career Edge Certified" },
        { name: "Team Collaboration", levelDescription: "Cross-functional team coordination during hackathons and projects", verifiedBy: "HexaFalls 2 & NIT Projects" },
        { name: "Customer Orientation & Service Mindset", levelDescription: "User-centric problem solving and clear articulation", verifiedBy: "Verified Resume Competency" }
      ]
    }
  ],

  certifications: [
    {
      id: "ibm-genai-llm",
      title: "Generative AI Essentials: Using LLMs to Work with Data",
      issuer: "IBM SkillsBuild",
      issueDate: "August 23, 2026",
      verificationUrl: "https://www.credly.com/go/15zj4vFH",
      imagePath: "/assets/ibm-skillsbuild-genai.jpg",
      topicsCovered: [
        "Large Language Models (LLMs) Architecture Overview",
        "Applying Generative AI for Data Extraction and Analysis",
        "Ethical AI Governance and Hallucination Mitigation",
        "Data Transformation Workflows with Foundation Models"
      ],
      verification: {
        status: "verified",
        note: "Verified by Credly credential badge (URL: credly.com/go/15zj4vFH)."
      }
    },
    {
      id: "ibm-granite",
      title: "IBM Granite Models for Software Development",
      issuer: "IBM SkillsBuild",
      issueDate: "August 23, 2026",
      imagePath: "/assets/ibm-granite-models.png",
      topicsCovered: [
        "Enterprise Granite Model Capabilities & Architecture",
        "Code Generation, Refactoring, and Unit Test Assistance",
        "Developer Productivity Optimization with Foundation Models"
      ],
      verification: {
        status: "verified",
        note: "Verified by IBM SkillsBuild digital credential record."
      }
    },
    {
      id: "ibm-data-analytics",
      title: "Supercharge Your Data Analytics with Generative AI",
      issuer: "IBM SkillsBuild",
      issueDate: "August 23, 2026",
      imagePath: "/assets/ibm-data-analytics.png",
      topicsCovered: [
        "AI-Powered Exploratory Data Analysis",
        "Automated Visualization and Pattern Recognition",
        "Augmenting Business Intelligence Workflows with Generative AI"
      ],
      verification: {
        status: "verified",
        note: "Verified by IBM SkillsBuild digital credential badge."
      }
    },
    {
      id: "ibm-skillsbuild-program-cert",
      title: "IBM SkillsBuild Course Completion Certificate",
      issuer: "IBM SkillsBuild",
      issueDate: "August 23, 2026",
      pdfPath: "/assets/ibm-skillsbuild-completion.pdf",
      topicsCovered: [
        "Comprehensive Enterprise AI and SkillsBuild Program",
        "Practical Technical Lab Assessments",
        "Foundations of Machine Learning and LLM Engineering"
      ],
      verification: {
        status: "verified",
        note: "Verified by official IBM SkillsBuild Completion Certificate PDF document."
      }
    },
    {
      id: "infosys-pyspark",
      title: "PySpark Python - Beginners",
      issuer: "Infosys Springboard",
      issueDate: "August 21, 2026",
      verificationUrl: "https://verify.onwingspan.com",
      imagePath: "/assets/infosys-pyspark-certificate.jpg",
      topicsCovered: [
        "Distributed Computing Fundamentals with Apache Spark",
        "PySpark DataFrames, Schema Definition, and Transformations",
        "Data Filtering, Aggregation, and Action Execution",
        "Integration of Python Scripts with Spark Context"
      ],
      verification: {
        status: "verified",
        note: "Verified by official Infosys Springboard Course Completion Certificate."
      }
    },
    {
      id: "gcp-vertex-ai",
      title: "Prompt Design in Vertex AI - Skill Badge",
      issuer: "Google Cloud",
      issueDate: "October 2026",
      imagePath: "/assets/google-cloud-vertex-ai.png",
      topicsCovered: [
        "Prompt Engineering Strategies (Zero-shot, Few-shot)",
        "Configuring Temperature, Top-K, and Top-P Parameters",
        "Vertex AI Generative AI Studio Hands-on Lab",
        "Multimodal and Structured Output Prompting"
      ],
      verification: {
        status: "verified",
        note: "Verified by Google Cloud Introductory Skill Badge record."
      }
    },
    {
      id: "tcs-ion",
      title: "TCS iON Career Edge – Generative AI & Professional Essentials",
      issuer: "Tata Consultancy Services (TCS iON)",
      issueDate: "July 21, 2026",
      validThrough: "25 Apr 2026 – 21 Jul 2026",
      credentialId: "8766-29971339-1016",
      topicsCovered: [
        "Generative AI Essentials & Modern AI Landscape",
        "Business Etiquette & Professional Conduct",
        "IT Foundational Skills & Accounting Basics",
        "Effective Communication & Presentation Skills",
        "Career Guidance & Resume Crafting"
      ],
      verification: {
        status: "verified",
        note: "Verified by official TCS iON Certificate PDF (ID: 8766-29971339-1016)."
      }
    },
    {
      id: "bct-advance-excel",
      title: "Advance Excel (1 Month Intensive)",
      issuer: "Best Computer Technology",
      issueDate: "July 2026",
      credentialId: "BCT/2026/689773",
      pdfPath: "/assets/advance-excel-certificate.pdf",
      topicsCovered: [
        "Advanced Excel Formulas (VLOOKUP, XLOOKUP, INDEX/MATCH)",
        "PivotTables, Dynamic Charts, and Dashboard Design",
        "Data Validation, Conditional Formatting, and Macro Basics",
        "Achieved 100% Final Score on Examination"
      ],
      verification: {
        status: "verified",
        note: "Verified by Certificate No: BCT/2026/689773 with 100% score."
      }
    },
    {
      id: "wbchse-hs-cert",
      title: "Higher Secondary Certificate (Grade B+)",
      issuer: "West Bengal Council of Higher Secondary Education",
      issueDate: "May 07, 2025",
      credentialId: "No. 416062 | Roll 465211 No. 1029",
      imagePath: "/assets/wbchse-hs-certificate.jpg",
      topicsCovered: [
        "Higher Secondary Examination 2025 from Ariadaha Kalachand High School",
        "Science Stream Fundamentals and Mathematics",
        "Overall Grade: B+ (Score: 63%)"
      ],
      verification: {
        status: "verified",
        note: "Verified by official State Board Certificate No. 416062."
      }
    },
    {
      id: "nasscom-genai",
      title: "Gen AI Tools Course",
      issuer: "Nasscom FutureSkills Prime",
      issueDate: "2026",
      topicsCovered: [
        "Overview of Generative AI Industry Toolsets",
        "Practical Productivity and Automation Tools",
        "Emerging AI Standards in Indian IT Sector"
      ],
      verification: {
        status: "pending_confirmation",
        note: "Research lead indexed on LinkedIn profile; certificate credential ID awaiting final user confirmation."
      }
    },
    {
      id: "officemaster-be10x",
      title: "Microsoft Excel Using AI Workshops",
      issuer: "OfficeMaster & Be10x",
      issueDate: "2026",
      topicsCovered: [
        "Automating Excel Workflows with AI Formulas and Copilots",
        "Time-saving Prompt Templates for Spreadsheet Operations",
        "Rapid Report Generation from Raw Data"
      ],
      verification: {
        status: "confirmed_by_records",
        note: "Indexed in LinkedIn profile workshop participation records."
      }
    }
  ],

  events: [
    {
      id: "hexafalls-2",
      title: "HexaFalls 2 Hackathon",
      roleOrTeam: "Team COFFEE CODE REPEAT",
      organizationOrHost: "JIS University, Kolkata",
      year: "2026",
      description: "Competed in the offline national-level hackathon at JIS University. Team developed AegisOS, focusing on system monitoring and digital protection.",
      outcomeOrStatus: "Participated and successfully submitted project AegisOS",
      verification: {
        status: "verified",
        note: "Verified via Devfolio HexaFalls 2 hackathon project records."
      }
    },
    {
      id: "google-ambassador",
      title: "Google Student Ambassador Program Pitch Night 2026",
      roleOrTeam: "Participant / Presenter",
      organizationOrHost: "Google Student Ambassador Program",
      year: "2026",
      description: "Engaged in the Google Student Ambassador Program Pitch Night, pitching technology solutions and exploring student developer community initiatives.",
      outcomeOrStatus: "Participated in presentation & pitch rounds",
      verification: {
        status: "confirmed_by_records",
        note: "Indexed in LinkedIn profile post/activity; details open for further user elaboration."
      }
    },
    {
      id: "carpe-diem-theatre",
      title: "IIM Calcutta International Cultural Fest (Carpe Diem)",
      roleOrTeam: "Sparsh Theatre Group Representative",
      organizationOrHost: "IIM Calcutta / Narula Institute of Technology",
      year: "2025/2026",
      description: "Represented Narula Institute of Technology as part of the Sparsh Theatre Group at IIM Calcutta's prestigious cultural festival Carpe Diem, fostering creative expression and public presentation skills.",
      outcomeOrStatus: "Institutional Cultural Representative",
      verification: {
        status: "verified",
        note: "Verified via institutional cultural participation records."
      }
    }
  ]
};

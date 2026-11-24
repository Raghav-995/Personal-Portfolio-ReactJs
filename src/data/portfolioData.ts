export interface SkillItem {
  name: string;
  category: 'Backend' | 'Gen AI' | 'Frontend' | 'Cloud & DevOps' | 'Databases';
  icon: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  highlight: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'Gen AI & LLM' | 'Enterprise Backend' | 'Cloud Native Full Stack' | 'Distributed Systems';
  tagline: string;
  impactMetrics: string[];
  techStack: string[];
  architectureHighlights: string[];
  githubUrl: string;
  liveUrl?: string;
  achievementBadge?: string;
  mockupType: 'ai-cybersecurity' | 'collaborative-editor' | 'simulation-orchestrator' | 'api-optimization' | 'cloud-topology';
}

export interface ArchitectureStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  principles: string[];
  icon: string;
  metrics: string;
}

export interface MetricCounter {
  value: string;
  label: string;
  subtext: string;
}

export interface ExperienceItem {
  company: string;
  shortCompany: string;
  role: string;
  type: string;
  duration: string;
  location: string;
  bullets: string[];
  techStack: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  score: string;
  details: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Pathak Raghavendra",
    handle: "Raghav-995",
    role: "Full Stack & Cloud Software Engineer",
    subRoles: [
      "Full Stack Developer",
      "Cloud & Microservices Architect",
      "GenAI & Agentic Systems Engineer"
    ],
    headline: "Building Resilient Microservices, Distributed Cloud Architectures & GenAI Systems.",
    tagline: "Bridging the gap between robust distributed backends, scalable cloud infrastructure (AWS/OpenStack), and autonomous Generative AI agents. Dedicated to low latency, high concurrency, and clean architectural design.",
    location: "Hyderabad, India",
    statusBadge: "Available for Senior / Staff Technical Roles",
    github: "https://github.com/raghav-995",
    linkedin: "https://www.linkedin.com/in/raghavendra995",
    email: "raghavendrapathak0@gmail.com",
    resumeUrl: "#contact",
  },

  heroTerminal: {
    jsonStatus: {
      status: "Ready for high-impact roles",
      location: "Hyderabad, India",
      openTo: ["Full Stack", "Backend", "Cloud/DevOps", "GenAI Systems"],
      currentFocus: [
        "Multi-Agent Cybersecurity (IBM watsonx)",
        "Enterprise Microservices Optimization",
        "Terraform & OpenStack Cloud Automation"
      ],
      yearsOfExperience: "4+ Years Production & Applied Engineering",
      availability: "Immediate / 30 Days",
      latencyTarget: "60% P95 Latency Reduction Achieved"
    },
    bashSnippet: `curl -s https://api.raghav-995.dev/v1/health | jq .
# Output:
# HTTP/2 200 OK
# Content-Type: application/json
# { "cluster": "hyd-prod-01", "status": "OPTIMAL", "p95_reduction": "60%" }`
  },

  metrics: [
    {
      value: "Top 50",
      label: "IBM watsonx Hackathon 2025",
      subtext: "Among 500+ teams with Astra Guard"
    },
    {
      value: "60%",
      label: "P95 API Latency Cut",
      subtext: "Redis caching & SQL query optimization"
    },
    {
      value: "< 10 min",
      label: "Cloud Lab Provisioning",
      subtext: "Reduced from 3+ hours via Terraform"
    },
    {
      value: "50+",
      label: "Concurrent Collaborators",
      subtext: "Live WebSocket sync with CodeShare"
    }
  ] as MetricCounter[],

  skillCategories: ['All', 'Backend', 'Gen AI', 'Frontend', 'Cloud & DevOps', 'Databases'] as const,

  skills: [
    // Backend & Distributed Systems
    { name: "Java 17/21", category: "Backend", icon: "java", level: "Expert", highlight: "Virtual Threads, Concurrency, JVM Tuning" },
    { name: "Spring Boot 3", category: "Backend", icon: "spring", level: "Expert", highlight: "Microservices, WebFlux, Security, Data JPA" },
    { name: "Microservices", category: "Backend", icon: "microservices", level: "Expert", highlight: "Service Mesh, API Gateways, Event-Driven Design" },
    { name: "Apache Kafka", category: "Backend", icon: "kafka", level: "Expert", highlight: "Asynchronous Pipelines, Real-time Log Processing" },
    { name: "Redis Cache", category: "Backend", icon: "redis", level: "Expert", highlight: "Distributed In-Memory Caching, WebSocket Session Sync" },
    { name: "WebSocket", category: "Backend", icon: "websocket", level: "Expert", highlight: "Full-Duplex Real-Time Data Sync & Presence" },
    { name: "Node.js / Express", category: "Backend", icon: "nodejs", level: "Advanced", highlight: "Asynchronous I/O, REST APIs, Microservices" },
    { name: "REST & gRPC", category: "Backend", icon: "grpc", level: "Advanced", highlight: "Contract Definition, High-Performance Endpoints" },

    // Gen AI & LLMs
    { name: "Python", category: "Gen AI", icon: "python", level: "Expert", highlight: "Agentic AI Frameworks, Automation, AsyncIO" },
    { name: "IBM watsonx", category: "Gen AI", icon: "watsonx", level: "Expert", highlight: "Enterprise Foundation Models, Prompt Chaining" },
    { name: "LLMs & Agentic AI", category: "Gen AI", icon: "openai", level: "Expert", highlight: "Multi-Agent Systems, Autonomous Threat Detection" },
    { name: "LangChain / LlamaIndex", category: "Gen AI", icon: "langchain", level: "Expert", highlight: "Advanced RAG, Tool Execution, Reasoning Loops" },
    { name: "PyTorch", category: "Gen AI", icon: "pytorch", level: "Advanced", highlight: "Deep Learning, Custom Embeddings, Tensors" },
    { name: "Vector Databases", category: "Gen AI", icon: "database", level: "Expert", highlight: "Semantic Search, Threat Intelligence Indexing" },

    // Frontend & Mobile
    { name: "React.js 18", category: "Frontend", icon: "react", level: "Expert", highlight: "Real-time Collaborative UI, Virtualized Lists" },
    { name: "TypeScript", category: "Frontend", icon: "typescript", level: "Expert", highlight: "Strict Type Safety, Enterprise Component Libraries" },
    { name: "Tailwind CSS", category: "Frontend", icon: "tailwindcss", level: "Expert", highlight: "Modern Responsive Design, Custom Glassmorphic Systems" },
    { name: "State Management", category: "Frontend", icon: "redux", level: "Expert", highlight: "Redux, Zustand, WebSocket State Coordination" },

    // Cloud, DevOps & Infrastructure
    { name: "Terraform (IaC)", category: "Cloud & DevOps", icon: "terraform", level: "Expert", highlight: "Automated Cloud Lab Provisioning, OpenStack Provider" },
    { name: "OpenStack", category: "Cloud & DevOps", icon: "openstack", level: "Expert", highlight: "Virtual Lab Provisioning, Neutron SDN, Security Groups" },
    { name: "AWS", category: "Cloud & DevOps", icon: "aws", level: "Expert", highlight: "ECS, S3, EC2, Lambda, CloudFront, Microservices" },
    { name: "Docker", category: "Cloud & DevOps", icon: "docker", level: "Expert", highlight: "Containerization, Multi-Stage Builds, Isolation" },
    { name: "Linux / Bash", category: "Cloud & DevOps", icon: "linux", level: "Expert", highlight: "Hardening, Automation Scripting, Network Configuration" },
    { name: "GitHub Actions", category: "Cloud & DevOps", icon: "github", level: "Advanced", highlight: "Automated CI/CD Pipelines, Test Suites" },

    // Databases & Storage
    { name: "PostgreSQL", category: "Databases", icon: "postgresql", level: "Expert", highlight: "Query Optimization, EXPLAIN ANALYZE, Index Tuning" },
    { name: "MongoDB", category: "Databases", icon: "mongodb", level: "Advanced", highlight: "Document Store, Aggregation Pipelines" },
    { name: "Redis", category: "Databases", icon: "redis", level: "Expert", highlight: "Cache Invalidation, Rate Limiting, Ephemeral State" },
    { name: "Schema Design", category: "Databases", icon: "schema", level: "Expert", highlight: "Relational Modeling, Query Performance Tuning" },
  ] as SkillItem[],

  projects: [
    {
      id: "astra-guard",
      title: "Astra Guard — Agentic AI Cybersecurity Platform",
      category: "Gen AI & LLM",
      tagline: "Autonomous multi-agent cybersecurity platform orchestrating 6 specialized AI agents for proactive threat detection, vulnerability analysis, and automated compliance logging.",
      achievementBadge: "Top 50 among 500+ teams — IBM watsonx Hackathon 2025",
      impactMetrics: [
        "Top 50 finalist among 500+ competing engineering teams at IBM watsonx Hackathon 2025",
        "Orchestrated 6 specialized autonomous AI agents for end-to-end security defense",
        "Automated attack vector mapping to MITRE ATT&CK framework and OWASP Top 10 vulnerabilities"
      ],
      techStack: ["Python", "LLMs", "IBM watsonx", "MITRE ATT&CK", "OWASP Top 10"],
      architectureHighlights: [
        "Multi-agent architecture with specialized roles: Threat Detection, Vulnerability Analysis, Incident Response, Behavior Analytics, Threat Intelligence, and Compliance Logging",
        "Leveraged IBM watsonx enterprise foundation models for contextual prompt chains and automated forensic auditing",
        "Real-time correlation mapping discovered anomalies against MITRE ATT&CK tactics and OWASP Top 10 web vectors",
        "Continuous compliance logging pipeline creating tamper-resistant incident reports"
      ],
      githubUrl: "https://github.com/raghav-995/Astra-Guard",
      liveUrl: "https://github.com/raghav-995",
      mockupType: "ai-cybersecurity"
    },
    {
      id: "codeshare",
      title: "CodeShare — Real-Time Collaborative Coding Platform",
      category: "Enterprise Backend",
      tagline: "High-concurrency collaborative development workspace featuring live document synchronization, user presence indicators, and hardened JWT role-based security.",
      achievementBadge: "Supports 50+ concurrent users per doc; 70% auth failure reduction",
      impactMetrics: [
        "Supports 50+ concurrent active developers per document with sub-25ms sync latency",
        "Reduced authentication failures by 70% using JWT token rotation and automated refresh",
        "Zero data collision during concurrent edits with distributed state synchronization"
      ],
      techStack: ["Java 17", "Spring Boot", "React", "WebSocket", "Redis", "JWT"],
      architectureHighlights: [
        "Bi-directional WebSocket streaming enabling instantaneous code editing, cursor tracking, and typing indicators",
        "In-memory Redis layer managing live user presence, session states, and room subscriptions",
        "Hardened JWT authentication with role-based access control (RBAC) and seamless token refresh",
        "Modular React frontend providing virtualized code editor rendering and isolated private workspaces"
      ],
      githubUrl: "https://github.com/raghav-995/CodeShare",
      liveUrl: "https://github.com/raghav-995",
      mockupType: "collaborative-editor"
    },
    {
      id: "csxp-cybersecurity-simulation",
      title: "CSXP — Cybersecurity Simulation Platform",
      category: "Cloud Native Full Stack",
      tagline: "Scalable backend and cloud automation engine for cybersecurity simulation workflows, featuring real-time log ingestion and automated lab provisioning via Terraform and OpenStack.",
      achievementBadge: "Reduced environment setup from 3+ hours to under 10 minutes",
      impactMetrics: [
        "Reduced lab environment provisioning from 3+ hours to under 10 minutes (95% reduction)",
        "Real-time processing of high-frequency simulation logs via Apache Kafka and Redis caching",
        "Automated multi-tenant network segmentation with strict security-group firewall rules"
      ],
      techStack: ["Spring Boot", "Redis", "Terraform", "OpenStack", "Kafka"],
      architectureHighlights: [
        "Automated virtual lab infrastructure provisioning using Terraform IaC and OpenStack compute/network APIs",
        "Decoupled asynchronous simulation event and attack-log processing pipeline using Apache Kafka",
        "High-speed Redis cache caching simulation telemetry, active attack scenarios, and user metrics",
        "Micro-segmented virtual network architectures with automated OpenStack Neutron security-group enforcement"
      ],
      githubUrl: "https://github.com/raghav-995/CSXP",
      liveUrl: "https://github.com/raghav-995",
      mockupType: "simulation-orchestrator"
    },
    {
      id: "enterprise-microservices-optimization",
      title: "Enterprise Microservices & API Optimization",
      category: "Enterprise Backend",
      tagline: "Architecture refactoring and performance engineering for public-service backend microservices, eliminating query bottlenecks and introducing event-driven notifications.",
      achievementBadge: "~60% reduction in P95 API latency across production workloads",
      impactMetrics: [
        "Approximately 60% reduction in P95 API latency across core public-service endpoints",
        "Eliminated database I/O bottlenecks with strategic multi-tier Redis distributed caching",
        "Introduced asynchronous Kafka event-driven notification processing, boosting throughput"
      ],
      techStack: ["Java", "Spring Boot", "Redis", "Kafka", "AWS", "PostgreSQL"],
      architectureHighlights: [
        "Engineered REST APIs with deep SQL query plan optimization (EXPLAIN ANALYZE, composite indexes, connection pooling)",
        "Implemented high-hit-ratio Redis caching layers reducing primary database reads dramatically",
        "Decoupled heavy notification and report workflows via Kafka message queues and asynchronous consumer pools",
        "Containerized cloud-ready deployment on AWS with circuit breaking, structured logging, and health probing"
      ],
      githubUrl: "https://github.com/raghav-995",
      liveUrl: "https://github.com/raghav-995",
      mockupType: "api-optimization"
    },
    {
      id: "cloud-lab-infrastructure-automation",
      title: "Infrastructure Automation & Cloud Lab Provisioning",
      category: "Cloud Native Full Stack",
      tagline: "Declarative Infrastructure-as-Code engine automating isolated virtual cyber lab provisioning, software-defined networking, and hardened firewall policies.",
      achievementBadge: "100% automated repeatable deployments; zero manual ops drift",
      impactMetrics: [
        "100% automated repeatable infrastructure deployments, eliminating manual configuration drift",
        "Automated virtual network routing, subnets, and security-group firewall rules via Terraform",
        "Hardened Linux baseline configurations deployed automatically across isolated sandboxes"
      ],
      techStack: ["Terraform", "OpenStack", "Linux", "Bash"],
      architectureHighlights: [
        "Modular Terraform IaC definitions orchestrating compute instances, floating IPs, router interfaces, and security groups",
        "Declarative provisioning eliminating manual infrastructure operations and ensuring deterministic environments",
        "Software-defined networking (SDN) configuration on OpenStack Neutron for complete tenant lab isolation",
        "Standardized Linux system hardening and cloud-init bootstrap scripting for repeatable sandbox setups"
      ],
      githubUrl: "https://github.com/raghav-995",
      liveUrl: "https://github.com/raghav-995",
      mockupType: "cloud-topology"
    }
  ] as ProjectCaseStudy[],

  workProcess: [
    {
      step: "01",
      title: "Domain Modeling & System Architecture",
      subtitle: "API-First & Clean Architecture",
      description: "Deconstructing business complexities into bounded contexts using Domain-Driven Design (DDD). Defining strict contracts with OpenAPI and Protocol Buffers before writing line one of code.",
      principles: [
        "Hexagonal / Clean Architecture boundaries",
        "Strict Schema Contracts (Protobuf & OpenAPI)",
        "Zero-Trust Security & Identity Modeling",
        "Failure domain isolation and disaster modeling"
      ],
      icon: "layers",
      metrics: "API Contracts & Bounded Contexts"
    },
    {
      step: "02",
      title: "Scalable Implementation & Concurrency",
      subtitle: "Event-Driven & Non-Blocking I/O",
      description: "Developing resilient services with Java, Spring Boot, WebSocket, and Python. Utilizing distributed caching (Redis) and message buses (Kafka) to ensure loose coupling and 60% P95 latency reduction.",
      principles: [
        "Idempotent message consumers & outbox pattern",
        "Multi-layer caching (Memory + Redis Cluster)",
        "Database connection pooling & index tuning",
        "Circuit breaking with Resilience4j"
      ],
      icon: "cpu",
      metrics: "Sub-25ms WebSocket & 60% Latency Cut"
    },
    {
      step: "03",
      title: "Containerization & Cloud Orchestration",
      subtitle: "Terraform, OpenStack & AWS",
      description: "Packaging microservices into minimal container images. Defining immutable cloud infrastructure using Terraform modules deployed on OpenStack and AWS with automated security-group enforcement.",
      principles: [
        "Infrastructure as Code (Terraform) in Git",
        "OpenStack Neutron network segmentation",
        "Security-group firewall policies & isolation",
        "Rapid provisioning: < 10 mins vs 3+ hours"
      ],
      icon: "cloud",
      metrics: "From 3+ Hours to Under 10 Minutes"
    },
    {
      step: "04",
      title: "Observability & Automated CI/CD",
      subtitle: "Automated Verification & Telemetry",
      description: "Integrating GitHub Actions pipelines for automated linting, unit/integration testing, and zero-downtime releases. Implementing full-stack observability with structured logging, metrics, and Kafka event audit trails.",
      principles: [
        "Automated CI/CD with zero-downtime cutover",
        "Real-time log stream processing with Kafka",
        "MITRE ATT&CK & OWASP compliance logging",
        "Comprehensive unit & integration test coverage"
      ],
      icon: "activity",
      metrics: "Zero-Downtime Releases & Audit Trails"
    }
  ] as ArchitectureStep[],

  contact: {
    title: "Let's Build Something High-Impact Together",
    subtitle: "I am actively seeking Senior / Staff Full Stack, Cloud/Backend, or GenAI Software Engineering roles. Whether you have an open position or want to discuss distributed system design, let's connect.",
    email: "raghavendrapathak0@gmail.com",
    location: "Hyderabad, India (Open to Remote / Hybrid / Relocation)",
    socials: [
      { name: "GitHub", url: "https://github.com/raghav-995", username: "@raghav-995" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/raghavendra995", username: "in/raghavendra995" },
    ]
  },

  experience: [
    {
      company: "Centre for Development of Advanced Computing (CDAC)",
      shortCompany: "CDAC",
      role: "Project Engineer",
      type: "Full-Time • Govt. of India R&D",
      duration: "Jan 2025 – Present",
      location: "Hyderabad, India",
      bullets: [
        "Built scalable Spring Boot microservices for a national public-service platform serving 50K+ monthly active users.",
        "Improved P95 API latency by ~60% by redesigning caching and query execution patterns; secured REST APIs using JWT & Spring Security.",
        "Implemented Docker & Kubernetes-based deployments enabling zero-downtime rolling releases.",
        "Integrated Redis distributed caching, reducing primary database load by 60% and lowering latency from ~450ms to ~180ms.",
        "Managed and automated OpenStack cloud infrastructure for national ISEA–MeitY cybersecurity virtual lab environments."
      ],
      techStack: ["Java 17/21", "Spring Boot", "Microservices", "Redis", "Kafka", "Docker", "Kubernetes", "OpenStack", "PostgreSQL", "JWT"]
    },
    {
      company: "NextAstra Technologies",
      shortCompany: "NextAstra",
      role: "Flutter Developer",
      type: "Full-Time",
      duration: "Jul 2024 – Jan 2025",
      location: "Hyderabad, India",
      bullets: [
        "Developed Flutter mobile screens and reusable widgets for a production application, delivering responsive interfaces with consistent loading and error states.",
        "Designed high-performance REST APIs for appointment scheduling, patient workflows, and user management with granular RBAC.",
        "Deployed the Spring Boot APIs on AWS, keeping them reliably available to the mobile application."
      ],
      techStack: ["Flutter", "Spring Boot", "REST APIs", "MySQL", "Tailwind CSS", "Git"]
    },
    {
      company: "IGrand IT Solutions",
      shortCompany: "IGrand IT",
      role: "Software Engineer Intern",
      type: "Internship",
      duration: "Dec 2023 – Jun 2024",
      location: "Hyderabad, India",
      bullets: [
        "Developed Flutter screens and reusable UI components for a cross-platform mobile application, translating design specifications into responsive interfaces.",
        "Created lightweight REST APIs with Node.js to supply data to the mobile screens.",
        "Strengthened code quality and delivery pace through peer code reviews and sprintbased collaboration with senior engineers."
      ],
      techStack: ["Flutter", "Node.js", "MySQL", "JavaScript", "REST APIs", "SQL Optimization"]
    }
  ],

  education: [
    {
      institution: "Bharat Institute of Engineering and Technology (BIET)",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      duration: "Graduated with 70% (First Class)",
      location: "Hyderabad, India",
      score: "70% Aggregate",
      details: "Comprehensive engineering curriculum with deep focus on algorithms, computer systems, and distributed computing.",
      highlights: [
        "Data Structures & Algorithms (DSA)",
        "Operating Systems & Concurrency",
        "Database Management Systems (DBMS)",
        "Java & Python Programming",
        "Compiler Design & Computer Networks"
      ]
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate / Higher Secondary (10+2)",
      field: "Mathematics, Physics, Chemistry (MPC)",
      duration: "Completed with Distinction",
      location: "Hyderabad, India",
      score: "95.9% Score",
      details: "State Board of Intermediate Education with focused training in advanced analytical mathematics, physics, and logical reasoning.",
      highlights: ["Calculus & Algebra", "Analytical Physics", "Physical & Organic Chemistry"]
    },
    {
      institution: "Lord's Talent High School",
      degree: "Secondary School Certificate (SSC / 10th)",
      field: "General Sciences & Mathematics",
      duration: "Completed with Distinction",
      location: "Hyderabad, India",
      score: "90% Score",
      details: "State Board Upper Primary School with distinction honors, active participation in verbal communication and technical competitions.",
      highlights: ["Mathematics", "Physical Sciences", "Verbal Communication"]
    }
  ]
};

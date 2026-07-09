export const companyPacket = {
  company: 'Aegis Cyber Programs',
  role: 'Cybersecurity Project Manager',
  mission: 'Deliver secure digital programs that protect mission-critical systems, reduce operational risk, and improve stakeholder confidence.',
  vision: 'Become the trusted program delivery partner for resilient cyber operations across regulated and defense-adjacent environments.',
  values: ['Security first', 'Operational clarity', 'Accountable delivery', 'Evidence-based decisions', 'Respectful collaboration'],
  jobSummary: [
    'Lead cybersecurity project delivery across risk, compliance, infrastructure, and application-security workstreams.',
    'Coordinate technical teams, security stakeholders, vendors, and executive sponsors.',
    'Track scope, schedule, budget, risk, dependencies, and compliance evidence.',
    'Translate cybersecurity requirements into delivery plans, milestones, and measurable outcomes.'
  ],
  interviewFocus: [
    'Explain how you manage cyber project risk and security dependencies.',
    'Connect PM delivery methods to NIST, RMF, incident response, and compliance evidence.',
    'Show experience with stakeholder alignment, escalation, metrics, and executive reporting.',
    'Demonstrate how certifications support credibility without replacing delivery judgment.'
  ]
};

export const rooms = [
  { id: 'screening', name: 'Recruiter Screen', topic: 'Role fit, communication, compensation, logistics' },
  { id: 'technical', name: 'Cyber Delivery Panel', topic: 'Risk, controls, delivery execution, metrics' },
  { id: 'executive', name: 'Executive Panel', topic: 'Business outcomes, tradeoffs, stakeholder confidence' }
];

export const logicGames = [
  {
    id: 'risk-order',
    title: 'Risk Triage Ordering',
    prompt: 'A penetration-test finding, delayed vendor deliverable, missing control evidence, and unclear sponsor decision all land today. Which do you triage first?',
    answer: 'Start with impact and time sensitivity: active exploitable risk, blocking decisions, compliance evidence deadline, then vendor delivery. State assumptions and escalation paths.'
  },
  {
    id: 'dependency-map',
    title: 'Dependency Map',
    prompt: 'A cloud logging project depends on IAM roles, network routing, SIEM parser work, and data-retention approval. What is the critical path question?',
    answer: 'Ask which dependency gates the earliest testable end-to-end logging path, then sequence work to prove ingestion before optimizing dashboards.'
  },
  {
    id: 'metric-signal',
    title: 'Delivery Signal',
    prompt: 'Your burnup chart looks fine, but security defects are increasing. What do you do?',
    answer: 'Treat quality trend as delivery risk. Rebaseline defect capacity, expose severity, add remediation owners, and report schedule confidence with risk-adjusted language.'
  }
];

export const interviewDecks = [
  {
    id: 'smart-cyber-pm',
    name: 'Smart Cyber PM Interview',
    cards: [
      {
        id: 'spm-001',
        category: 'Risk',
        difficulty: 'medium',
        prompt: 'How would you manage a critical vulnerability discovered two weeks before release?',
        answer: 'I would confirm severity, affected scope, exploitability, compensating controls, and release impact. Then I would create a decision brief with options: remediate, delay, isolate, or accept with documented risk.',
        learning: 'Strong answers separate facts, options, owners, and risk acceptance authority.'
      },
      {
        id: 'spm-002',
        category: 'Stakeholders',
        difficulty: 'medium',
        prompt: 'How do you communicate cyber delivery status to executives?',
        answer: 'Use outcome, risk, decision, and next-action language. Avoid tool-level detail unless it explains schedule, cost, operational exposure, or compliance impact.',
        learning: 'Executives need confidence, decisions, and risk framing more than raw task lists.'
      },
      {
        id: 'spm-003',
        category: 'Controls',
        difficulty: 'hard',
        prompt: 'How do you keep control evidence from becoming a last-minute scramble?',
        answer: 'Build evidence collection into the work breakdown structure, define owners and acceptance criteria, review evidence during sprint or milestone closeout, and track gaps as delivery risks.',
        learning: 'Compliance evidence is a project deliverable, not an afterthought.'
      },
      {
        id: 'spm-004',
        category: 'Agile',
        difficulty: 'easy',
        prompt: 'How do you adapt agile delivery for security projects?',
        answer: 'Keep iterative planning, but make risk, evidence, threat modeling, and security acceptance criteria visible in the backlog and definition of done.',
        learning: 'Security work benefits from agile cadence when risk and evidence are explicit.'
      }
    ]
  },
  {
    id: 'credential-mapper',
    name: 'Credential Mapper: DoD 8140 / 8570 Alignment',
    cards: [
      {
        id: 'cred-001',
        category: 'Security+',
        difficulty: 'easy',
        prompt: 'How does Security+ support a cybersecurity PM interview?',
        answer: 'It signals baseline understanding of threats, controls, identity, network security, risk, and incident response vocabulary.',
        learning: 'Use it to show you can communicate with technical teams and understand control-level tradeoffs.'
      },
      {
        id: 'cred-002',
        category: 'CISSP',
        difficulty: 'hard',
        prompt: 'How would CISSP knowledge strengthen a cyber program manager profile?',
        answer: 'It supports governance, risk management, security architecture, asset protection, IAM, operations, and software-security conversations at program level.',
        learning: 'Map CISSP domains to executive risk decisions and secure delivery governance.'
      },
      {
        id: 'cred-003',
        category: 'CISM',
        difficulty: 'medium',
        prompt: 'Where does CISM fit for a PM leading cyber initiatives?',
        answer: 'CISM emphasizes information-security governance, risk, program development, and incident management, which align closely with cyber portfolio execution.',
        learning: 'Use CISM-style language for risk ownership, policy alignment, and management reporting.'
      },
      {
        id: 'cred-004',
        category: 'PMP',
        difficulty: 'medium',
        prompt: 'How does PMP complement cyber credentials?',
        answer: 'PMP shows structured delivery skill: scope, schedule, cost, risk, quality, stakeholder, procurement, and communications management.',
        learning: 'Pair PMP with cyber credentials to show both delivery discipline and security fluency.'
      },
      {
        id: 'cred-005',
        category: 'CySA+',
        difficulty: 'medium',
        prompt: 'How can CySA+ knowledge help in project delivery?',
        answer: 'It helps a PM understand detection, vulnerability management, threat analysis, and SOC workflow dependencies.',
        learning: 'Translate operational security signals into delivery risks and backlog priorities.'
      }
    ]
  }
];

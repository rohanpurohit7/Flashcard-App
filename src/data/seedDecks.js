export const decks = [
  {
    id: 'computer-science',
    name: 'Computer Science Interviews',
    description: 'Core algorithms, systems, web, and software engineering fundamentals.',
    cards: [
      {
        id: 'cs-001',
        category: 'Algorithms',
        difficulty: 'medium',
        question: 'What is the difference between a stack and a queue?',
        answer: 'A stack is last-in, first-out. A queue is first-in, first-out. Stacks fit call frames and undo flows; queues fit scheduling, buffering, and breadth-first traversal.'
      },
      {
        id: 'cs-002',
        category: 'Algorithms',
        difficulty: 'hard',
        question: 'When would you use breadth-first search instead of depth-first search?',
        answer: 'Use breadth-first search when the shortest path by edge count matters or when exploring by levels. Use depth-first search for exhaustive traversal, backtracking, or lower memory on narrow graphs.'
      },
      {
        id: 'cs-003',
        category: 'Data Structures',
        difficulty: 'medium',
        question: 'Why are hash tables usually O(1), and when can that fail?',
        answer: 'Average lookup is O(1) when keys distribute evenly across buckets. It can degrade with poor hashing, high load factor, or adversarial collisions.'
      },
      {
        id: 'cs-004',
        category: 'Databases',
        difficulty: 'medium',
        question: 'What is normalization and why does it matter?',
        answer: 'Normalization organizes data to reduce duplication and update anomalies. It improves integrity, while selective denormalization can improve read performance.'
      },
      {
        id: 'cs-005',
        category: 'Systems',
        difficulty: 'hard',
        question: 'What is the CAP theorem?',
        answer: 'In a network partition, a distributed system must choose between strict consistency and availability. Partition tolerance is assumed in distributed systems.'
      },
      {
        id: 'cs-006',
        category: 'Web',
        difficulty: 'easy',
        question: 'What is the difference between authentication and authorization?',
        answer: 'Authentication proves identity. Authorization determines what an authenticated identity is allowed to access or do.'
      }
    ]
  },
  {
    id: 'project-management',
    name: 'Project Management Interviews',
    description: 'Delivery, risk, stakeholder, agile, and execution readiness prompts.',
    cards: [
      {
        id: 'pm-001',
        category: 'Delivery',
        difficulty: 'easy',
        question: 'How do you define project success?',
        answer: 'Success is meeting agreed business outcomes within acceptable constraints for scope, time, cost, quality, risk, and stakeholder satisfaction.'
      },
      {
        id: 'pm-002',
        category: 'Agile',
        difficulty: 'medium',
        question: 'What makes a good sprint goal?',
        answer: 'A good sprint goal is outcome-focused, testable, realistic for the sprint, and clear enough to guide tradeoffs when scope changes.'
      },
      {
        id: 'pm-003',
        category: 'Risk',
        difficulty: 'medium',
        question: 'How do you manage a high-impact project risk?',
        answer: 'Document the risk, assign an owner, quantify probability and impact, define mitigation and contingency plans, review it frequently, and escalate when thresholds are crossed.'
      },
      {
        id: 'pm-004',
        category: 'Stakeholders',
        difficulty: 'hard',
        question: 'How do you handle conflicting stakeholder priorities?',
        answer: 'Clarify business outcomes, expose tradeoffs, use decision criteria, facilitate alignment, document decisions, and keep unresolved conflicts visible to sponsors.'
      },
      {
        id: 'pm-005',
        category: 'Execution',
        difficulty: 'medium',
        question: 'What is the difference between a milestone and a deliverable?',
        answer: 'A milestone marks a significant point in time or decision. A deliverable is a concrete work product that can be reviewed or accepted.'
      },
      {
        id: 'pm-006',
        category: 'Metrics',
        difficulty: 'hard',
        question: 'Which metrics help you detect delivery risk early?',
        answer: 'Useful signals include blocked work age, cycle time, scope churn, defect trends, dependency slippage, burnup variance, and unresolved decision count.'
      }
    ]
  }
];

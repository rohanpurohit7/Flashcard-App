const fallbackResponses = [
  'Frame the answer with Situation, Risk, Action, Evidence, and Outcome. Keep it concise and decision-oriented.',
  'Tie the example back to cybersecurity delivery: controls, risk owners, evidence, dependencies, and executive tradeoffs.',
  'A strong interview packet connects mission fit, role requirements, credential credibility, and measurable delivery outcomes.',
  'When discussing certifications, explain how the knowledge changes project decisions rather than just naming the credential.'
];

export async function askInterviewCoach(message, context) {
  const endpoint = import.meta.env.VITE_INTERVIEW_COACH_ENDPOINT;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, context })
    });

    if (!response.ok) {
      throw new Error('Interview coach endpoint failed');
    }

    const data = await response.json();
    return data.reply;
  }

  const seed = message.length % fallbackResponses.length;
  return fallbackResponses[seed];
}

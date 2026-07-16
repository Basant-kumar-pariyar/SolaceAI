const crisisKeywords = [
  "suicide",
  "kill myself",
  "end my life",
  "want to die",
  "don't want to live",
  "self harm",
  "self-harm",
  "hurt myself",
  "no reason to live",
  "life is meaningless"
];

export const detectCrisis = (message) => {

  const text = message.toLowerCase();

  return crisisKeywords.some(keyword =>
    text.includes(keyword)
  );

};
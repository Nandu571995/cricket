const EVENT_RULES = [
  { regex: /\b(out|wicket|lbw|bowled|caught)\b/i, reaction: 'WICKET', animation: 'celebrate_wicket' },
  { regex: /\b(six|6 runs?)\b/i, reaction: 'SIX', animation: 'lofted_shot' },
  { regex: /\b(four|4 runs?)\b/i, reaction: 'FOUR', animation: 'cover_drive' },
  { regex: /\b(wide|no[-\s]?ball)\b/i, reaction: 'EXTRA', animation: 'reset_bowler' },
  { regex: /\b(single|1 run)\b/i, reaction: 'ROTATE_STRIKE', animation: 'quick_run' },
  { regex: /\b(dot ball|no run)\b/i, reaction: 'DOT', animation: 'defence' }
];

export const getReactionFromBallEvent = (ballText) => {
  const text = (ballText || '').trim();

  if (!text) {
    return {
      reaction: 'WAITING',
      animation: 'idle',
      confidence: 0,
      source: 'no_commentary'
    };
  }

  const matchedRule = EVENT_RULES.find(({ regex }) => regex.test(text));

  if (!matchedRule) {
    return {
      reaction: 'PLAY_GENERIC',
      animation: 'normal_delivery',
      confidence: 0.35,
      source: text
    };
  }

  return {
    reaction: matchedRule.reaction,
    animation: matchedRule.animation,
    confidence: 0.9,
    source: text
  };
};

import { DetectionResult, DetectionType, ThreatLevel } from '../types';

export const analyzeThreat = (input: string | File, type: DetectionType): DetectionResult => {
  const content = typeof input === 'string' ? input.toLowerCase() : '';

  const suspiciousKeywords = [
    'urgent', 'verify', 'suspend', 'click here', 'account', 'password',
    'confirm', 'update', 'expire', 'limited time', 'act now', 'congratulations',
    'winner', 'claim', 'prize', 'bank', 'credit card', 'ssn', 'security alert'
  ];

  const maliciousIndicators = [
    'suspended', 'locked', 'unusual activity', 'verify now', 'click immediately',
    'account will be closed', 'reset password', 'confirm identity', 'update payment'
  ];

  const suspiciousDomains = ['micros0ft.com', 'paypa1.com', 'g00gle.com', 'amaz0n.com'];
  const suspiciousPatterns = [
    /http:\/\//gi,
    /bit\.ly|tinyurl/gi,
    /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g,
    /@.*@/g,
  ];

  let threatScore = 0;
  const redFlags: string[] = [];
  const detectedSuspiciousDomains: string[] = [];

  suspiciousKeywords.forEach(keyword => {
    if (content.includes(keyword)) {
      threatScore += 10;
    }
  });

  maliciousIndicators.forEach(indicator => {
    if (content.includes(indicator)) {
      threatScore += 20;
      redFlags.push(`High-risk phrase detected: "${indicator}"`);
    }
  });

  suspiciousDomains.forEach(domain => {
    if (content.includes(domain)) {
      threatScore += 30;
      detectedSuspiciousDomains.push(domain);
      redFlags.push(`Misspelled domain detected: ${domain}`);
    }
  });

  suspiciousPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      threatScore += 15;
    }
  });

  if (content.match(/https?:\/\//gi)) {
    const urlCount = content.match(/https?:\/\//gi)?.length || 0;
    if (urlCount > 2) {
      threatScore += 15;
      redFlags.push(`Multiple links detected (${urlCount})`);
    }
  }

  if (content.match(/[A-Z]{5,}/g)) {
    threatScore += 10;
    redFlags.push('Excessive use of CAPITAL LETTERS (pressure tactic)');
  }

  if (content.includes('!') && content.split('!').length > 3) {
    threatScore += 5;
    redFlags.push('Multiple exclamation marks indicating urgency');
  }

  if (type === 'email' && !content.includes('@') && content.length > 50) {
    threatScore += 15;
    redFlags.push('Email missing proper sender information');
  }

  let threatLevel: ThreatLevel;
  let confidence: number;

  if (threatScore >= 60) {
    threatLevel = 'malicious';
    confidence = Math.min(95, 75 + Math.floor(threatScore / 10));
    if (redFlags.length === 0) {
      redFlags.push('Multiple high-risk indicators detected');
    }
  } else if (threatScore >= 30) {
    threatLevel = 'suspicious';
    confidence = Math.min(90, 60 + Math.floor(threatScore / 5));
    if (redFlags.length === 0) {
      redFlags.push('Contains suspicious characteristics');
    }
  } else {
    threatLevel = 'safe';
    confidence = Math.max(70, 100 - threatScore * 2);
  }

  const hasUrgentLanguage = suspiciousKeywords.some(kw =>
    ['urgent', 'immediately', 'act now', 'limited time', 'expire'].includes(kw) && content.includes(kw)
  );

  const hasSocialEngineering = maliciousIndicators.some(ind => content.includes(ind));

  const suspiciousLinks = content.match(/https?:\/\/[^\s]+/gi) || [];

  return {
    threatLevel,
    confidence,
    redFlags: redFlags.length > 0 ? redFlags : ['No significant threats detected'],
    analysis: {
      spoofedSender: threatScore > 40 || (type === 'email' && content.includes('verify')),
      suspiciousLinks: suspiciousLinks.length > 1 ? suspiciousLinks : [],
      urgentLanguage: hasUrgentLanguage,
      socialEngineering: hasSocialEngineering,
      misspelledDomains: detectedSuspiciousDomains.length > 0 ? detectedSuspiciousDomains : undefined,
      attachmentRisk: type === 'file' && threatScore > 20,
    }
  };
};

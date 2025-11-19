export type ThreatLevel = 'safe' | 'suspicious' | 'malicious';

export interface DetectionResult {
  threatLevel: ThreatLevel;
  confidence: number;
  redFlags: string[];
  analysis: {
    spoofedSender?: boolean;
    suspiciousLinks?: string[];
    urgentLanguage?: boolean;
    socialEngineering?: boolean;
    misspelledDomains?: string[];
    attachmentRisk?: boolean;
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export type DetectionType = 'url' | 'email' | 'sms' | 'file';

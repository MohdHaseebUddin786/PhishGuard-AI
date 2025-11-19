import { AlertCircle, Link, Mail, Clock, User, FileWarning } from 'lucide-react';
import { DetectionResult } from '../types';
import ThreatLevelBadge from './ThreatLevelBadge';

interface AnalysisResultsProps {
  result: DetectionResult;
}

export default function AnalysisResults({ result }: AnalysisResultsProps) {
  const { threatLevel, confidence, redFlags, analysis } = result;

  return (
    <div className="space-y-6 animate-fadeIn">
      <ThreatLevelBadge level={threatLevel} confidence={confidence} />

      {redFlags.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="h-6 w-6 text-red-500" />
            <h3 className="text-xl font-bold text-slate-900">Red Flags Detected</h3>
          </div>
          <ul className="space-y-3">
            {redFlags.map((flag, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-100"
              >
                <span className="flex-shrink-0 h-6 w-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  {index + 1}
                </span>
                <span className="text-sm text-slate-700 flex-1">{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Detailed Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analysis.spoofedSender !== undefined && (
            <div className={`p-4 rounded-xl border-2 ${analysis.spoofedSender ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="flex items-center space-x-2 mb-1">
                <User className={`h-5 w-5 ${analysis.spoofedSender ? 'text-red-500' : 'text-emerald-500'}`} />
                <span className="font-semibold text-slate-900">Sender Verification</span>
              </div>
              <p className="text-sm text-slate-600">
                {analysis.spoofedSender ? 'Spoofed sender detected' : 'Sender appears legitimate'}
              </p>
            </div>
          )}

          {analysis.suspiciousLinks && analysis.suspiciousLinks.length > 0 && (
            <div className="p-4 rounded-xl border-2 bg-red-50 border-red-200">
              <div className="flex items-center space-x-2 mb-1">
                <Link className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-slate-900">Suspicious Links</span>
              </div>
              <p className="text-sm text-slate-600">
                {analysis.suspiciousLinks.length} suspicious link(s) found
              </p>
            </div>
          )}

          {analysis.urgentLanguage !== undefined && (
            <div className={`p-4 rounded-xl border-2 ${analysis.urgentLanguage ? 'bg-orange-50 border-orange-200' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="flex items-center space-x-2 mb-1">
                <Clock className={`h-5 w-5 ${analysis.urgentLanguage ? 'text-orange-500' : 'text-emerald-500'}`} />
                <span className="font-semibold text-slate-900">Language Analysis</span>
              </div>
              <p className="text-sm text-slate-600">
                {analysis.urgentLanguage ? 'Urgent/pressure tactics detected' : 'No pressure tactics detected'}
              </p>
            </div>
          )}

          {analysis.socialEngineering !== undefined && (
            <div className={`p-4 rounded-xl border-2 ${analysis.socialEngineering ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="flex items-center space-x-2 mb-1">
                <Mail className={`h-5 w-5 ${analysis.socialEngineering ? 'text-red-500' : 'text-emerald-500'}`} />
                <span className="font-semibold text-slate-900">Social Engineering</span>
              </div>
              <p className="text-sm text-slate-600">
                {analysis.socialEngineering ? 'Social engineering tactics found' : 'No manipulation detected'}
              </p>
            </div>
          )}

          {analysis.misspelledDomains && analysis.misspelledDomains.length > 0 && (
            <div className="p-4 rounded-xl border-2 bg-red-50 border-red-200 md:col-span-2">
              <div className="flex items-center space-x-2 mb-2">
                <Link className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-slate-900">Misspelled Domains</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {analysis.misspelledDomains.map((domain, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-mono"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          )}

          {analysis.attachmentRisk !== undefined && (
            <div className={`p-4 rounded-xl border-2 ${analysis.attachmentRisk ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`}>
              <div className="flex items-center space-x-2 mb-1">
                <FileWarning className={`h-5 w-5 ${analysis.attachmentRisk ? 'text-red-500' : 'text-emerald-500'}`} />
                <span className="font-semibold text-slate-900">Attachment Safety</span>
              </div>
              <p className="text-sm text-slate-600">
                {analysis.attachmentRisk ? 'Potentially dangerous attachment' : 'No attachment risks'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

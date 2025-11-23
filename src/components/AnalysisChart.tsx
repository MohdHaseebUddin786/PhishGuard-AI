import { RiskLevel } from '../types/gemini';

interface AnalysisChartProps {
  score: number;
  level: RiskLevel;
}

export default function AnalysisChart({ score, level }: AnalysisChartProps) {
  const getColor = () => {
    switch (level) {
      case RiskLevel.SAFE: return 'text-green-500';
      case RiskLevel.SUSPICIOUS: return 'text-orange-500';
      case RiskLevel.MALICIOUS: return 'text-red-500';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="transform -rotate-90 w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-slate-800"
          />
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${(score / 100) * 251.2} 251.2`}
            className={getColor()}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${getColor()}`}>
            {score}
          </span>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-2">Risk Score</p>
    </div>
  );
}

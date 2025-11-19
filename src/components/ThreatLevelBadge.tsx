import { Shield, AlertTriangle, AlertOctagon } from 'lucide-react';
import { ThreatLevel } from '../types';

interface ThreatLevelBadgeProps {
  level: ThreatLevel;
  confidence: number;
}

export default function ThreatLevelBadge({ level, confidence }: ThreatLevelBadgeProps) {
  const getConfig = () => {
    switch (level) {
      case 'safe':
        return {
          icon: Shield,
          text: 'Safe',
          bgColor: 'bg-emerald-50',
          borderColor: 'border-emerald-200',
          textColor: 'text-emerald-700',
          iconColor: 'text-emerald-500',
          gradientFrom: 'from-emerald-500',
          gradientTo: 'to-emerald-600',
        };
      case 'suspicious':
        return {
          icon: AlertTriangle,
          text: 'Suspicious',
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200',
          textColor: 'text-orange-700',
          iconColor: 'text-orange-500',
          gradientFrom: 'from-orange-500',
          gradientTo: 'to-orange-600',
        };
      case 'malicious':
        return {
          icon: AlertOctagon,
          text: 'Malicious',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-700',
          iconColor: 'text-red-500',
          gradientFrom: 'from-red-500',
          gradientTo: 'to-red-600',
        };
    }
  };

  const config = getConfig();
  const Icon = config.icon;

  return (
    <div className={`${config.bgColor} ${config.borderColor} border-2 rounded-2xl p-6 shadow-lg backdrop-blur-md bg-opacity-95`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} p-3 rounded-xl shadow-md`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className={`text-2xl font-bold ${config.textColor}`}>{config.text}</h3>
            <p className="text-sm text-slate-600">Threat Level Detected</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`text-3xl font-bold ${config.textColor}`}>{confidence}%</p>
          <p className="text-xs text-slate-600">Confidence</p>
        </div>
      </div>

      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className={`text-xs font-semibold inline-block ${config.textColor}`}>
              Detection Accuracy
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-3 text-xs flex rounded-full bg-white">
          <div
            style={{ width: `${confidence}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${config.gradientFrom} ${config.gradientTo} transition-all duration-500`}
          ></div>
        </div>
      </div>
    </div>
  );
}

import { Link, Mail, MessageSquare, FileText } from 'lucide-react';
import { DetectionType } from '../types';

interface DetectionTabsProps {
  activeTab: DetectionType;
  onTabChange: (tab: DetectionType) => void;
}

export default function DetectionTabs({ activeTab, onTabChange }: DetectionTabsProps) {
  const tabs = [
    { id: 'url' as DetectionType, label: 'URL', icon: Link, color: 'blue' },
    { id: 'email' as DetectionType, label: 'Email', icon: Mail, color: 'purple' },
    { id: 'sms' as DetectionType, label: 'SMS', icon: MessageSquare, color: 'green' },
    { id: 'file' as DetectionType, label: 'File', icon: FileText, color: 'orange' },
  ];

  return (
    <div className="flex space-x-2 bg-slate-100 p-2 rounded-xl shadow-inner">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              isActive
                ? 'bg-white shadow-md text-slate-900 scale-105'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            <Icon className={`h-5 w-5 ${isActive ? `text-${tab.color}-500` : ''}`} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

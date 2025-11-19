import { Shield, AlertTriangle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Shield className="h-10 w-10 text-emerald-400" />
              <AlertTriangle className="h-5 w-5 text-orange-400 absolute -bottom-1 -right-1" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">PhishGuard AI</h1>
              <p className="text-sm text-slate-300">Advanced Phishing Detection & Protection</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-right">
              <p className="text-xs text-slate-400">Protection Status</p>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-sm font-semibold text-emerald-400">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { Search, Upload } from 'lucide-react';
import { DetectionType } from '../types';

interface DetectionInputProps {
  type: DetectionType;
  onAnalyze: (input: string | File) => void;
  isAnalyzing: boolean;
}

export default function DetectionInput({ type, onAnalyze, isAnalyzing }: DetectionInputProps) {
  const [input, setInput] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === 'file' && file) {
      onAnalyze(file);
    } else if (input.trim()) {
      onAnalyze(input);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const getPlaceholder = () => {
    switch (type) {
      case 'url':
        return 'Enter URL to check (e.g., https://example.com)';
      case 'email':
        return 'Paste email content here...';
      case 'sms':
        return 'Paste SMS message here...';
      default:
        return '';
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'url':
        return 'Enter URL';
      case 'email':
        return 'Email Content';
      case 'sms':
        return 'SMS Message';
      case 'file':
        return 'Upload File';
      default:
        return '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          {getLabel()}
        </label>

        {type === 'file' ? (
          <div className="relative">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
              accept=".txt,.eml,.msg,.pdf"
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <Upload className="h-10 w-10 text-slate-400 mb-2" />
              <span className="text-sm text-slate-600">
                {file ? file.name : 'Click to upload or drag and drop'}
              </span>
              <span className="text-xs text-slate-500 mt-1">
                Supported: .txt, .eml, .msg, .pdf
              </span>
            </label>
          </div>
        ) : type === 'url' ? (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={getPlaceholder()}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        ) : (
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={getPlaceholder()}
            rows={8}
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
          />
        )}
      </div>

      <button
        type="submit"
        disabled={isAnalyzing || (type === 'file' ? !file : !input.trim())}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
      >
        <Search className="h-5 w-5" />
        <span>{isAnalyzing ? 'Analyzing...' : 'Analyze for Threats'}</span>
      </button>
    </form>
  );
}

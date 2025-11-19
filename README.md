# PhishGuard AI - Phishing Detection & Awareness Tool

An advanced AI-powered phishing detection tool that helps users identify and understand phishing threats across multiple channels including URLs, emails, SMS messages, and files.

## 🎯 Features

### Multi-Channel Threat Detection
- **URL Analysis**: Detect suspicious and malicious URLs with domain verification
- **Email Scanning**: Analyze email content for phishing indicators and social engineering tactics
- **SMS Detection**: Identify smishing (SMS phishing) attempts
- **File Analysis**: Scan attachments for potential threats

### Intelligent Analysis
- **ML-Powered Detection**: Advanced pattern recognition for identifying phishing characteristics
- **Real-time Analysis**: Instant threat assessment with confidence scoring
- **Red Flag Identification**: Detailed breakdown of suspicious elements
- **Comprehensive Reports**: In-depth analysis including:
  - Sender verification
  - Link analysis
  - Language pattern detection
  - Social engineering identification
  - Domain misspelling detection
  - Attachment risk assessment

### AI Security Assistant
- **Interactive Chatbot**: Get personalized security guidance and recommendations
- **Educational Content**: Learn about phishing tactics and protection strategies
- **Actionable Advice**: Step-by-step instructions for handling threats
- **Context-Aware Responses**: Tailored guidance based on detected threat level

### User Experience
- **Modern UI**: Clean, intuitive interface built with React and Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Visual Threat Indicators**: Color-coded badges for quick threat assessment
- **Smooth Animations**: Polished user experience with engaging transitions

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend**: Supabase (configured for future integration)
- **Code Quality**: ESLint with TypeScript support

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MohdHaseebUddin786/Phishing-Simulator-Tool.git
cd Phishing-Simulator-Tool
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎮 Usage

1. **Select Detection Type**: Choose from URL, Email, SMS, or File analysis
2. **Input Content**: Enter or upload the content you want to analyze
3. **Analyze**: Click the "Analyze for Threats" button
4. **Review Results**: Examine the threat level, confidence score, and red flags
5. **Get Guidance**: Use the AI assistant to ask questions and receive personalized recommendations

### Example Scenarios

#### URL Detection
```
Enter a suspicious URL like: http://micros0ft-security.com/verify
The tool will detect misspellings, insecure protocols, and suspicious patterns
```

#### Email Analysis
```
Paste email content containing phrases like:
"Your account will be suspended unless you verify immediately"
The tool identifies urgent language, social engineering, and sender spoofing
```

## 🔍 How It Works

### Threat Detection Algorithm

The detection system analyzes multiple factors:

1. **Keyword Analysis**: Scans for suspicious phrases and high-risk terms
2. **Pattern Matching**: Identifies common phishing patterns (shortened URLs, IP addresses, etc.)
3. **Domain Verification**: Detects typosquatting and misspelled domains
4. **Language Analysis**: Identifies urgent language and pressure tactics
5. **Link Inspection**: Examines URL structure and quantity
6. **Sender Verification**: Checks for spoofed or suspicious sender information

### Threat Levels

- 🟢 **SAFE** (0-29 points): No significant threats detected
- 🟡 **SUSPICIOUS** (30-59 points): Contains concerning characteristics
- 🔴 **MALICIOUS** (60+ points): High-risk phishing attempt

### Confidence Scoring

Confidence scores range from 70-95% based on:
- Number of red flags detected
- Severity of threats identified
- Pattern matching accuracy
- Multiple indicator correlation

## 🛡️ Security Features

### Detection Capabilities
- ✅ Sender email/domain spoofing
- ✅ Suspicious and shortened URLs
- ✅ Typosquatted domains (e.g., micros0ft.com)
- ✅ Urgent language and pressure tactics
- ✅ Social engineering attempts
- ✅ Multiple link detection
- ✅ CAPITAL LETTER abuse
- ✅ Attachment risk assessment
- ✅ IP address-based URLs
- ✅ HTTP (non-secure) links

### Educational Content
The AI assistant provides guidance on:
- Immediate actions to take
- How to report phishing attempts
- Preventing future attacks
- Understanding threat indicators
- Best cybersecurity practices
- Recognizing social engineering tactics

## 📁 Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── AnalysisResults.tsx    # Threat analysis display
│   │   ├── ChatBot.tsx             # AI security assistant
│   │   ├── DetectionInput.tsx      # Input component for all detection types
│   │   ├── DetectionTabs.tsx       # Tab navigation
│   │   ├── Header.tsx              # Application header
│   │   └── ThreatLevelBadge.tsx    # Threat level indicator
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   ├── utils/
│   │   └── mockDetection.ts        # Detection algorithm
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── vite.config.ts                  # Vite configuration
└── eslint.config.js                # ESLint configuration
```

## 🎨 Component Overview

### Core Components

- **App.tsx**: Main application logic and state management
- **DetectionTabs**: Tab interface for switching between detection types
- **DetectionInput**: Unified input component handling text and file inputs
- **AnalysisResults**: Displays threat analysis with visual indicators
- **ChatBot**: Interactive AI assistant for security guidance
- **ThreatLevelBadge**: Visual representation of threat severity

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Extended color palette for threat levels
- Custom animations for loading states
- Responsive breakpoints
- Custom gradient utilities

### TypeScript
Strict type checking enabled with:
- React 18 types
- Comprehensive interface definitions
- Type-safe component props
- Utility type helpers

## 📊 Future Enhancements

- [ ] Backend integration with Supabase for threat database
- [ ] Machine learning model training with real phishing data
- [ ] Browser extension for real-time protection
- [ ] Email client integration
- [ ] Historical threat tracking and analytics
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Export threat reports as PDF
- [ ] Bulk analysis for multiple URLs/emails
- [ ] Integration with threat intelligence feeds

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created for educational purposes to raise cybersecurity awareness.

## 👨‍💻 Author

**Mohd Haseeb Uddin**
- GitHub: [@MohdHaseebUddin786](https://github.com/MohdHaseebUddin786)

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by the need for better phishing awareness
- Designed to educate users about cybersecurity threats

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Contact through GitHub profile

## ⚠️ Disclaimer

This tool is for educational purposes and cybersecurity awareness. While it provides useful threat detection, it should not be the only security measure. Always verify suspicious content through official channels and use comprehensive security solutions.

---

**Stay Safe Online! 🛡️**

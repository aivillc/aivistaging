'use client';

import { useState } from 'react';

type QuestionType = 'select' | 'multiselect' | 'text';

interface Question {
  id: number;
  question: string;
  type: QuestionType;
  options?: string[];
  key: string;
}

interface BotResponses {
  industry?: string;
  challenge?: string;
  channels?: string[];
  volume?: string;
  goal?: string;
  crm?: string;
  [key: string]: string | string[] | undefined;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Hi! I'm AIVI's AI assistant. Let me help design the perfect automation solution for your business. What industry are you in?",
    type: 'select',
    key: 'industry',
    options: [
      'Trucking & Logistics',
      'Financial Services',
      'Insurance',
      'Healthcare',
      'Other'
    ]
  },
  {
    id: 2,
    question: "Great! What's your biggest customer engagement challenge right now?",
    type: 'select',
    key: 'challenge',
    options: [
      'Slow response times to leads',
      'High volume of repetitive inquiries',
      'Poor follow-up on cold leads',
      'Manual data entry from documents',
      'Limited after-hours support'
    ]
  },
  {
    id: 3,
    question: "Which channels do you currently use to reach customers? (Select all that apply)",
    type: 'multiselect',
    key: 'channels',
    options: [
      'Phone calls',
      'SMS/Text messaging',
      'Email',
      'Web forms',
      'None yet / Just starting'
    ]
  },
  {
    id: 4,
    question: "How many customer interactions do you handle monthly?",
    type: 'select',
    key: 'volume',
    options: [
      'Under 100',
      '100-500',
      '500-2,000',
      '2,000-10,000',
      '10,000+'
    ]
  },
  {
    id: 5,
    question: "What's your primary goal with AI automation?",
    type: 'select',
    key: 'goal',
    options: [
      'Increase lead conversion rates',
      'Reduce response time',
      'Scale without hiring more staff',
      'Improve customer satisfaction',
      'Reactivate dormant leads'
    ]
  },
  {
    id: 6,
    question: "Last question! Do you currently use a CRM?",
    type: 'select',
    key: 'crm',
    options: [
      'Yes - HubSpot',
      'Yes - Salesforce',
      'Yes - Other',
      'No, but planning to',
      'No CRM'
    ]
  }
];

export default function DemoForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<BotResponses>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string | string[]) => {
    const question = questions[currentQuestion];
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setResponses({
        ...responses,
        [question.key]: answer
      });
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOptions([]);
      } else {
        setShowResults(true);
      }
      
      setIsAnimating(false);
    }, 300);
  };

  const handleOptionClick = (option: string) => {
    const question = questions[currentQuestion];
    
    if (question.type === 'multiselect') {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(o => o !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      handleAnswer(option);
    }
  };

  const handleMultiselectConfirm = () => {
    if (selectedOptions.length > 0) {
      handleAnswer(selectedOptions);
    }
  };

  const resetBot = () => {
    setCurrentQuestion(0);
    setResponses({});
    setSelectedOptions([]);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full mb-4">
              <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-white mb-3">
              Your Custom AI Solution
            </h3>
            <p className="text-white/70 text-lg">
              Based on your responses, here's what we recommend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ResultCard
              title="Industry Focus"
              value={responses.industry || 'N/A'}
              icon="🏢"
            />
            <ResultCard
              title="Primary Challenge"
              value={responses.challenge || 'N/A'}
              icon="🎯"
            />
            <ResultCard
              title="Current Channels"
              value={Array.isArray(responses.channels) ? responses.channels.join(', ') : 'N/A'}
              icon="📱"
            />
            <ResultCard
              title="Monthly Volume"
              value={responses.volume || 'N/A'}
              icon="📊"
            />
            <ResultCard
              title="Primary Goal"
              value={responses.goal || 'N/A'}
              icon="🚀"
            />
            <ResultCard
              title="CRM Status"
              value={responses.crm || 'N/A'}
              icon="💼"
            />
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-500/10 to-orange-500/10 border-2 border-purple-500/30 rounded-xl mb-6">
            <h4 className="text-xl font-black text-white mb-3">Recommended Solution</h4>
            <p className="text-white/80 leading-relaxed mb-4">
              Based on your {responses.industry} business handling {responses.volume} interactions monthly,
              we recommend a <span className="text-orange-500 font-bold">managed service approach</span> with:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl font-black mt-0.5">✓</span>
                <span className="text-white/80">AI-powered voice calls for instant lead response</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl font-black mt-0.5">✓</span>
                <span className="text-white/80">SMS automation for quick follow-ups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl font-black mt-0.5">✓</span>
                <span className="text-white/80">
                  {responses.crm?.includes('Yes') ? 'Seamless integration with your existing CRM' : 'CRM setup and integration'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl font-black mt-0.5">✓</span>
                <span className="text-white/80">Real-time analytics and coaching dashboard</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <button
              onClick={resetBot}
              className="flex-1 py-4 px-6 bg-white/5 border-2 border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-bold"
            >
              Start Over
            </button>
            <button
              onClick={() => {
                // In production, this would trigger the actual demo or sales contact
                alert('Demo request sent! Our team will contact you shortly.');
              }}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black rounded-lg transition-all transform hover:scale-[1.02] shadow-lg uppercase tracking-wider"
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm text-white/40">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
      </div>

      <div className={`bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 shadow-2xl hover:border-purple-500/30 transition-all ${
        isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      } duration-300`}>
        {/* Bot Avatar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-purple-400 font-bold uppercase tracking-wider">AIVI Assistant</div>
            <div className="text-xs text-white/40">Powered by AI</div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            {question.question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleOptionClick(option)}
              disabled={isAnimating}
              className={`w-full text-left px-6 py-4 rounded-xl border-2 font-medium transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${
                selectedOptions.includes(option)
                  ? 'bg-purple-500/20 border-purple-500 text-white'
                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-purple-500/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedOptions.includes(option) && (
                  <span className="text-purple-400 text-xl font-black">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Multi-select confirm button */}
        {question.type === 'multiselect' && selectedOptions.length > 0 && (
          <button
            onClick={handleMultiselectConfirm}
            disabled={isAnimating}
            className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-black rounded-lg shadow-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 uppercase tracking-wider"
          >
            Continue →
          </button>
        )}

        {/* Back button */}
        {currentQuestion > 0 && (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1);
              setSelectedOptions([]);
            }}
            disabled={isAnimating}
            className="w-full mt-4 py-3 px-6 bg-white/5 border-2 border-white/10 text-white/70 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all font-medium disabled:opacity-50"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}

interface ResultCardProps {
  title: string;
  value: string;
  icon: string;
}

function ResultCard({ title, value, icon }: ResultCardProps) {
  return (
    <div className="p-4 bg-white/5 border-2 border-white/10 rounded-xl hover:border-purple-500/30 transition-all">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <div className="text-xs text-white/50 uppercase tracking-wider mb-1">{title}</div>
          <div className="text-white font-bold text-sm">{value}</div>
        </div>
      </div>
    </div>
  );
}

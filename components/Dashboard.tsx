export default function Dashboard() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-purple-500/20 rounded-full">
              <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-orange-600 text-transparent bg-clip-text uppercase tracking-wider">
                Analytics & Insights
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Real-Time Performance{' '}
            <span className="bg-gradient-to-r from-purple-600 to-orange-600 text-transparent bg-clip-text">
              Dashboard
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Track performance, coach your team, and measure ROI with comprehensive analytics
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <MetricCard
            label="Active Campaigns"
            value="24"
            change="+12%"
            positive
            color="purple"
          />
          <MetricCard
            label="Conversion Rate"
            value="47.3%"
            change="+8.2%"
            positive
            color="orange"
          />
          <MetricCard
            label="Avg Response Time"
            value="1.2s"
            change="-15%"
            positive
            color="purple"
          />
        </div>

        {/* Dashboard Visualization */}
        <div className="mb-12 p-8 bg-white border border-gray-200 rounded-3xl shadow-2xl shadow-purple-500/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Channel Performance */}
            <div className="relative">
              <div className="absolute -top-3 left-6">
                <div className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold rounded-full shadow-lg">
                  Channel Analytics
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl">
                <div className="space-y-5 mt-4">
                  <ChannelBar channel="Voice Calls" percentage={85} color="purple" />
                  <ChannelBar channel="SMS" percentage={72} color="orange" />
                  <ChannelBar channel="Email" percentage={68} color="purple" />
                  <ChannelBar channel="Document AI" percentage={91} color="orange" />
                </div>
              </div>
            </div>

            {/* Agent Performance */}
            <div className="relative">
              <div className="absolute -top-3 left-6">
                <div className="px-4 py-1.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-xs font-bold rounded-full shadow-lg">
                  Sentiment Analysis
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl">
                <div className="space-y-5 mt-4">
                  <SentimentBar label="Positive" percentage={62} color="green" />
                  <SentimentBar label="Neutral" percentage={31} color="gray" />
                  <SentimentBar label="Negative" percentage={7} color="red" />
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl border border-purple-200/50">
                  <div className="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">Latest AI Insight</div>
                  <div className="text-gray-900 text-sm font-semibold">
                    "Detected frustration in last call. Suggested transfer to human agent."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardFeature
            title="Lead Scoring"
            description="AI-powered lead qualification and prioritization"
            color="purple"
          />
          <DashboardFeature
            title="Call Coaching"
            description="Real-time feedback and coaching for human agents"
            color="orange"
          />
          <DashboardFeature
            title="Transfer Analytics"
            description="Track when and why AI transfers to humans"
            color="purple"
          />
          <DashboardFeature
            title="A/B Testing"
            description="Optimize messaging and timing automatically"
            color="orange"
          />
        </div>

        {/* Call Center Coaching */}
        <div className="mt-16 p-10 bg-white border border-gray-200 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-orange-50/50 pointer-events-none" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-orange-100 border border-purple-200 rounded-full mb-6">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-black text-transparent bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text">
                  AI-Powered Coaching
                </span>
              </div>
              
              <h3 className="text-4xl font-black text-black mb-4">
                Human Call Center Coaching
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AIVI doesn't just replace your call center—it makes it better. Our AI analyzes
                conversations in real-time, providing coaching tips and suggesting when to transfer
                to human agents for better outcomes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg font-black">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium pt-1">
                    Real-time sentiment analysis during calls
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg font-black">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium pt-1">
                    Automated coaching suggestions for human agents
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg font-black">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium pt-1">
                    Intelligent transfer logic based on conversation context
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg font-black">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium pt-1">
                    Performance dashboards showing close rates by agent
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <CoachingAlert
                type="success"
                message="Great job! Customer expressed interest in premium package."
                action="Suggested: Offer limited-time discount"
              />
              <CoachingAlert
                type="warning"
                message="Customer sounds frustrated with wait time."
                action="Recommended: Apologize and offer callback option"
              />
              <CoachingAlert
                type="info"
                message="Customer mentioned competitor pricing."
                action="Tip: Highlight unique value propositions"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  color: 'purple' | 'orange';
}

function MetricCard({ label, value, change, positive, color }: MetricCardProps) {
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-600'
    : 'from-orange-500 to-orange-600';
  
  const glowColor = color === 'purple'
    ? 'shadow-purple-500/10'
    : 'shadow-orange-500/10';

  return (
    <div className={`group relative p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition-all duration-300 hover:shadow-xl ${glowColor}`}>
      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-2xl`} />
      
      <div className="text-gray-500 text-sm font-bold mb-2 uppercase tracking-wider">{label}</div>
      <div className={`text-5xl font-black bg-gradient-to-r ${gradient} text-transparent bg-clip-text mb-2`}>
        {value}
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-sm font-bold ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
        <span className="text-xs text-gray-400 font-medium">vs last month</span>
      </div>
    </div>
  );
}

interface ChannelBarProps {
  channel: string;
  percentage: number;
  color: 'purple' | 'orange';
}

function ChannelBar({ channel, percentage, color }: ChannelBarProps) {
  const bgColor = color === 'purple' ? 'bg-purple-500' : 'bg-orange-500';

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-600 font-medium">{channel}</span>
        <span className="text-black font-bold">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${bgColor} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface SentimentBarProps {
  label: string;
  percentage: number;
  color: 'green' | 'gray' | 'red';
}

function SentimentBar({ label, percentage, color }: SentimentBarProps) {
  const colorClasses = {
    green: 'bg-green-500',
    gray: 'bg-gray-400',
    red: 'bg-red-500',
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-600 font-medium">{label}</span>
        <span className="text-black font-bold">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface DashboardFeatureProps {
  title: string;
  description: string;
  color: 'purple' | 'orange';
}

function DashboardFeature({ title, description, color }: DashboardFeatureProps) {
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-600'
    : 'from-orange-500 to-orange-600';
  
  const hoverBorder = color === 'purple' ? 'hover:border-purple-300' : 'hover:border-orange-300';

  return (
    <div className={`group relative p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 ${hoverBorder} rounded-2xl transition-all duration-300 hover:shadow-lg`}>
      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative">
        <h4 className="text-lg font-black text-black mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-orange-600 transition-all duration-300">
          {title}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface CoachingAlertProps {
  type: 'success' | 'warning' | 'info';
  message: string;
  action: string;
}

function CoachingAlert({ type, message, action }: CoachingAlertProps) {
  const styles = {
    success: 'border-green-300 bg-gradient-to-br from-green-50 to-white',
    warning: 'border-orange-300 bg-gradient-to-br from-orange-50 to-white',
    info: 'border-purple-300 bg-gradient-to-br from-purple-50 to-white',
  };

  const iconColors = {
    success: 'text-green-600',
    warning: 'text-orange-600',
    info: 'text-purple-600',
  };
  
  const iconBg = {
    success: 'bg-green-100',
    warning: 'bg-orange-100',
    info: 'bg-purple-100',
  };

  return (
    <div className={`group p-5 border rounded-2xl ${styles[type]} hover:shadow-lg transition-all duration-300`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 ${iconBg[type]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <span className={`text-2xl font-black ${iconColors[type]}`}>
            {type === 'success' ? '✓' : type === 'warning' ? '⚠' : 'ℹ'}
          </span>
        </div>
        <div className="flex-1">
          <div className="text-black font-black mb-1">{message}</div>
          <div className="text-sm text-gray-600 font-medium">{action}</div>
        </div>
      </div>
    </div>
  );
}

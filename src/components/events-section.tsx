import { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Cpu, Database, Globe, Lightbulb, Palette, Presentation, Puzzle } from 'lucide-react';

const EventsSection = () => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const technicalEvents = [
    {
      id: 'web-dev',
      title: 'Web Development Challenge',
      icon: Globe,
      shortDesc: 'Build responsive, modern web applications',
      fullDesc: 'Create a full-stack web application using modern frameworks like React, Vue, or Angular. Focus on user experience, responsive design, and clean code architecture. Participants will have access to cloud services and deployment platforms.',
      prizes: '₹25,000 | ₹15,000 | ₹10,000',
      duration: '24 hours',
      team: '1-4 members'
    },
    {
      id: 'ai-ml',
      title: 'AI/ML Innovation',
      icon: Cpu,
      shortDesc: 'Develop intelligent solutions using AI/ML',
      fullDesc: 'Design and implement AI/ML models to solve real-world problems. Use datasets, APIs, and cloud ML services. Projects can include computer vision, NLP, predictive analytics, or recommendation systems.',
      prizes: '₹30,000 | ₹20,000 | ₹10,000',
      duration: '36 hours',
      team: '2-5 members'
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      icon: Code,
      shortDesc: 'Create innovative mobile applications',
      fullDesc: 'Develop native or cross-platform mobile applications for Android/iOS. Focus on user-centric design, performance optimization, and innovative features. Flutter, React Native, or native development welcome.',
      prizes: '₹20,000 | ₹12,000 | ₹8,000',
      duration: '30 hours',
      team: '1-4 members'
    },
    {
      id: 'blockchain',
      title: 'Blockchain & DeFi',
      icon: Database,
      shortDesc: 'Build decentralized solutions',
      fullDesc: 'Create blockchain-based applications, smart contracts, or DeFi solutions. Use Ethereum, Polygon, or other blockchain platforms. Focus on security, scalability, and real-world utility.',
      prizes: '₹25,000 | ₹15,000 | ₹10,000',
      duration: '32 hours',
      team: '2-4 members'
    }
  ];

  const nonTechnicalEvents = [
    {
      id: 'pitch-perfect',
      title: 'Pitch Perfect',
      icon: Presentation,
      shortDesc: 'Present your startup idea to investors',
      fullDesc: 'Develop and present a compelling business pitch for your tech startup idea. Focus on market analysis, business model, financial projections, and go-to-market strategy. Professional mentors and investors will evaluate.',
      prizes: '₹15,000 | ₹10,000 | ₹5,000',
      duration: '8 hours',
      team: '1-3 members'
    },
    {
      id: 'design-thinking',
      title: 'Design Thinking Workshop',
      icon: Lightbulb,
      shortDesc: 'Solve problems with human-centered design',
      fullDesc: 'Apply design thinking methodology to solve complex social or business problems. Focus on empathy, ideation, prototyping, and testing. Create innovative solutions with user research and validation.',
      prizes: '₹12,000 | ₹8,000 | ₹5,000',
      duration: '12 hours',
      team: '3-5 members'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design Challenge',
      icon: Palette,
      shortDesc: 'Design exceptional user experiences',
      fullDesc: 'Create stunning user interfaces and exceptional user experiences for given problem statements. Use design tools like Figma, Adobe XD, or Sketch. Focus on usability, accessibility, and visual appeal.',
      prizes: '₹10,000 | ₹7,000 | ₹3,000',
      duration: '16 hours',
      team: '1-3 members'
    },
    {
      id: 'brain-teasers',
      title: 'Tech Quiz & Brain Teasers',
      icon: Puzzle,
      shortDesc: 'Test your technical knowledge',
      fullDesc: 'Participate in rapid-fire technical quizzes covering programming, algorithms, system design, and latest tech trends. Individual and team rounds with coding challenges and logical puzzles.',
      prizes: '₹8,000 | ₹5,000 | ₹2,000',
      duration: '4 hours',
      team: '1-2 members'
    }
  ];

  const toggleEvent = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const EventCard = ({ event, type }: { event: any, type: string }) => {
    const isExpanded = expandedEvent === event.id;
    const IconComponent = event.icon;

    return (
      <div className={`glass glass-hover rounded-xl transition-all duration-500 ${
        isExpanded ? 'ring-2 ring-primary/50' : ''
      }`}>
        <div 
          className="p-6 cursor-pointer"
          onClick={() => toggleEvent(event.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                type === 'technical' ? 'bg-gradient-primary' : 'bg-gradient-to-r from-accent to-primary'
              }`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">
                  {event.title}
                </h3>
                <p className="text-foreground/70 mt-1">{event.shortDesc}</p>
              </div>
            </div>
            <div className="text-primary">
              {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </div>
          </div>

          {isExpanded && (
            <div className="mt-6 space-y-4 animate-slide-up border-t border-white/10 pt-6">
              <p className="text-foreground/80 leading-relaxed">
                {event.fullDesc}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass rounded-lg p-3">
                  <div className="text-sm text-foreground/60">Prize Pool</div>
                  <div className="text-accent font-semibold">{event.prizes}</div>
                </div>
                <div className="glass rounded-lg p-3">
                  <div className="text-sm text-foreground/60">Duration</div>
                  <div className="text-primary font-semibold">{event.duration}</div>
                </div>
                <div className="glass rounded-lg p-3">
                  <div className="text-sm text-foreground/60">Team Size</div>
                  <div className="text-foreground font-semibold">{event.team}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="events" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary neon-text">Events</span> & Challenges
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Choose your battle! Participate in technical coding challenges or showcase your creative and business skills.
          </p>
        </div>

        {/* Technical Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-accent">Technical</span> Events
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {technicalEvents.map((event, index) => (
              <div 
                key={event.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EventCard event={event} type="technical" />
              </div>
            ))}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="text-primary">Non-Technical</span> Events
          </h3>
          <div className="grid lg:grid-cols-2 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <div 
                key={event.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EventCard event={event} type="non-technical" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
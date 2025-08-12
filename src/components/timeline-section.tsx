import { Calendar, Clock, MapPin, Users, Code, Lightbulb, Trophy, Coffee } from 'lucide-react';

const TimelineSection = () => {
  const timeSlots = [
    '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', 
    '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30'
  ];

  const timelineEvents = [
    {
      title: "Inauguration",
      startTime: '8:00',
      duration: 1,
      color: '#ef4444',
      icon: Users,
      description: "Welcome ceremony and team formation",
      row: 0
    },
    {
      title: "The Art of Hacking (Workshop)",
      startTime: '9:30',
      duration: 6,
      color: '#8b5cf6',
      icon: Code,
      description: "Essential hacking techniques and methodologies",
      row: 0
    },
    {
      title: "Null Core",
      startTime: '9:00',
      duration: 3,
      color: '#3b82f6',
      icon: Code,
      description: "Core programming fundamentals",
      row: 1
    },
    {
      title: "GlitchGround",
      startTime: '10:00',
      duration: 4,
      color: '#f59e0b',
      icon: Lightbulb,
      description: "Creative problem solving arena",
      row: 2
    },
    {
      title: "Beat Overflow",
      startTime: '11:00',
      duration: 3,
      color: '#6366f1',
      icon: Code,
      description: "Music and coding fusion event",
      row: 3
    },
    {
      title: "Tune Tracker",
      startTime: '12:30',
      duration: 1,
      color: '#ec4899',
      icon: Users,
      description: "Music tracking challenge",
      row: 4
    },
    {
      title: "Lunch",
      startTime: '1:00',
      duration: 1,
      color: '#f97316',
      icon: Coffee,
      description: "Networking lunch break",
      row: 0
    },
    {
      title: "Paper to Pixel",
      startTime: '1:30',
      duration: 1,
      color: '#10b981',
      icon: Lightbulb,
      description: "Digital transformation workshop",
      row: 5
    },
    {
      title: "Escape Room",
      startTime: '2:00',
      duration: 1,
      color: '#14b8a6',
      icon: MapPin,
      description: "Collaborative puzzle solving",
      row: 6
    },
    {
      title: "Tune Tracker",
      startTime: '2:30',
      duration: 1,
      color: '#ec4899',
      icon: Users,
      description: "Music tracking challenge - Round 2",
      row: 4
    },
    {
      title: "The Art of Hacking (Workshop)",
      startTime: '3:00',
      duration: 1,
      color: '#8b5cf6',
      icon: Code,
      description: "Advanced techniques session",
      row: 0
    },
    {
      title: "Beyond Screen",
      startTime: '3:00',
      duration: 1,
      color: '#06b6d4',
      icon: Trophy,
      description: "Innovation beyond traditional interfaces",
      row: 7
    },
    {
      title: "Paper to Pixel",
      startTime: '3:30',
      duration: 1,
      color: '#10b981',
      icon: Lightbulb,
      description: "Digital transformation workshop - Session 2",
      row: 5
    },
    {
      title: "Escape Room",
      startTime: '3:30',
      duration: 1,
      color: '#14b8a6',
      icon: MapPin,
      description: "Collaborative puzzle solving - Round 2",
      row: 6
    },
    {
      title: "Beyond Screen",
      startTime: '3:30',
      duration: 1,
      color: '#06b6d4',
      icon: Trophy,
      description: "Innovation beyond traditional interfaces - Final",
      row: 7
    }
  ];

  const getEventPosition = (startTime: string) => {
    const index = timeSlots.indexOf(startTime);
    return index >= 0 ? index : 0;
  };

  const getEventWidth = (duration: number) => {
    return duration;
  };

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Event <span className="text-primary neon-text">Timeline</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A carefully planned schedule of exciting events and workshops
          </p>
        </div>

        {/* Modern Timeline Layout */}
        <div className="glass rounded-2xl p-8 overflow-x-auto bg-background/5 backdrop-blur-sm border border-white/10">
          {/* Time Header */}
          <div className="flex justify-between mb-6 px-4">
            {timeSlots.map((time, index) => (
              <div key={index} className="text-center flex-1">
                <span className="text-sm text-foreground/60 font-medium">{time}</span>
              </div>
            ))}
          </div>

          {/* Events Grid */}
          <div className="relative" style={{ height: '480px' }}>
            {/* Grid Lines */}
            <div className="absolute inset-0 flex">
              {timeSlots.map((_, index) => (
                <div 
                  key={index} 
                  className="flex-1 border-l border-foreground/10 first:border-l-0"
                />
              ))}
            </div>

            {/* Event Blocks */}
            {timelineEvents.map((event, index) => {
              const position = getEventPosition(event.startTime);
              const width = getEventWidth(event.duration);
              const slotWidth = 100 / timeSlots.length;
              
              return (
                <div
                  key={index}
                  className="absolute rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 animate-fade-in group flex items-center px-3 py-2"
                  style={{
                    left: `${position * slotWidth}%`,
                    top: `${event.row * 60 + 20}px`,
                    width: `${width * slotWidth}%`,
                    height: '50px',
                    backgroundColor: event.color,
                    animationDelay: `${index * 0.1}s`,
                    border: `1px solid ${event.color}20`
                  }}
                >
                  <event.icon className="h-4 w-4 text-white flex-shrink-0 mr-2" />
                  <span className="text-white font-medium text-sm truncate">
                    {event.title}
                  </span>

                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                    <div className="glass rounded-lg p-3 min-w-[200px] max-w-[300px] bg-background/90 backdrop-blur-sm border border-white/20">
                      <h5 className="font-semibold text-foreground mb-1">{event.title}</h5>
                      <p className="text-sm text-foreground/70">{event.description}</p>
                      <p className="text-xs text-primary mt-2">Starting at {event.startTime}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-foreground/70 mb-6">
              Join us for an unforgettable experience of innovation, learning, and building amazing projects.
            </p>
            <button 
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg neon-glow animate-glow-pulse"
              onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
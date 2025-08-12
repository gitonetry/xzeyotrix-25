import { Calendar, Clock, MapPin, Users, Code, Lightbulb, Trophy, Coffee } from 'lucide-react';

const TimelineSection = () => {
  const timeSlots = [
    '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', 
    '12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', 
    '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00'
  ];

  const timelineEvents = [
    {
      title: "Inauguration",
      startTime: '8:00',
      duration: 1, // slots
      color: 'from-red-500 to-red-600',
      icon: Users,
      description: "Welcome ceremony and team formation"
    },
    {
      title: "The Art of Hacking (Workshop)",
      startTime: '9:30',
      duration: 3,
      color: 'from-purple-500 to-purple-600',
      icon: Code,
      description: "Essential hacking techniques and methodologies"
    },
    {
      title: "Null Core",
      startTime: '10:30',
      duration: 2,
      color: 'from-blue-500 to-blue-600',
      icon: Code,
      description: "Core programming fundamentals"
    },
    {
      title: "GlitchGround",
      startTime: '10:00',
      duration: 4,
      color: 'from-yellow-500 to-yellow-600',
      icon: Lightbulb,
      description: "Creative problem solving arena"
    },
    {
      title: "Beat Overflow",
      startTime: '11:00',
      duration: 3,
      color: 'from-indigo-500 to-indigo-600',
      icon: Code,
      description: "Music and coding fusion event"
    },
    {
      title: "Lunch",
      startTime: '1:00',
      duration: 1,
      color: 'from-orange-500 to-orange-600',
      icon: Coffee,
      description: "Networking lunch break"
    },
    {
      title: "The Art of Hacking (Workshop)",
      startTime: '3:00',
      duration: 1,
      color: 'from-purple-500 to-purple-600',
      icon: Code,
      description: "Advanced techniques session"
    },
    {
      title: "Tune Tracker",
      startTime: '12:30',
      duration: 2,
      color: 'from-pink-500 to-pink-600',
      icon: Users,
      description: "Music tracking challenge"
    },
    {
      title: "Tune Tracker",
      startTime: '2:30',
      duration: 2,
      color: 'from-pink-500 to-pink-600',
      icon: Users,
      description: "Music tracking challenge - Round 2"
    },
    {
      title: "Paper to Pixel",
      startTime: '1:30',
      duration: 2,
      color: 'from-green-500 to-green-600',
      icon: Lightbulb,
      description: "Digital transformation workshop"
    },
    {
      title: "Paper to Pixel",
      startTime: '3:30',
      duration: 2,
      color: 'from-green-500 to-green-600',
      icon: Lightbulb,
      description: "Digital transformation workshop - Session 2"
    },
    {
      title: "Escape Room",
      startTime: '2:00',
      duration: 2,
      color: 'from-teal-500 to-teal-600',
      icon: MapPin,
      description: "Collaborative puzzle solving"
    },
    {
      title: "Escape Room",
      startTime: '4:00',
      duration: 2,
      color: 'from-teal-500 to-teal-600',
      icon: MapPin,
      description: "Collaborative puzzle solving - Round 2"
    },
    {
      title: "Beyond Screen",
      startTime: '3:00',
      duration: 2,
      color: 'from-cyan-500 to-cyan-600',
      icon: Trophy,
      description: "Innovation beyond traditional interfaces"
    },
    {
      title: "Beyond Screen",
      startTime: '5:00',
      duration: 2,
      color: 'from-cyan-500 to-cyan-600',
      icon: Trophy,
      description: "Innovation beyond traditional interfaces - Final"
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
        <div className="glass rounded-2xl p-6 overflow-x-auto">
          {/* Time Header */}
          <div className="grid grid-flow-col auto-cols-max gap-4 mb-8 min-w-max">
            {timeSlots.map((time, index) => (
              <div key={index} className="text-center min-w-[60px]">
                <span className="text-sm text-foreground/60 font-medium">{time}</span>
              </div>
            ))}
          </div>

          {/* Events Grid */}
          <div className="relative min-h-[400px] min-w-max">
            <div className="grid grid-flow-col auto-cols-max gap-4">
              {timeSlots.map((_, index) => (
                <div key={index} className="min-w-[60px] h-full border-l border-foreground/10 first:border-l-0" />
              ))}
            </div>

            {/* Event Blocks */}
            <div className="absolute inset-0">
              {timelineEvents.map((event, index) => {
                const position = getEventPosition(event.startTime);
                const width = getEventWidth(event.duration);
                const row = Math.floor(index / 5); // Simple row assignment
                
                return (
                  <div
                    key={index}
                    className={`absolute rounded-lg p-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 animate-fade-in group`}
                    style={{
                      left: `${position * 64 + 8}px`, // 60px + 4px gap
                      top: `${row * 80 + 20}px`,
                      width: `${width * 64 - 8}px`,
                      height: '60px',
                      background: `linear-gradient(135deg, ${event.color.split(' ')[1]}, ${event.color.split(' ')[3]})`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="flex items-center h-full space-x-2">
                      <event.icon className="h-4 w-4 text-white flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm truncate">
                          {event.title}
                        </h4>
                        <p className="text-white/80 text-xs truncate">
                          {event.startTime}
                        </p>
                      </div>
                    </div>

                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="glass rounded-lg p-3 min-w-[200px] max-w-[300px]">
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
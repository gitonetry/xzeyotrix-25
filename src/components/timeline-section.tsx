import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      time: "08:00 AM",
      title: "Registration & Check-in",
      description: "Welcome coffee, team formation, and opening ceremony",
      icon: Users,
      day: "Day 1"
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Keynote speeches, problem statements reveal, and mentor introductions",
      icon: Calendar,
      day: "Day 1"
    },
    {
      time: "11:00 AM",
      title: "Hacking Begins!",
      description: "48-hour coding marathon starts. Teams begin working on their projects",
      icon: Clock,
      day: "Day 1"
    },
    {
      time: "01:00 PM",
      title: "Lunch Break",
      description: "Networking lunch with sponsors and mentors",
      icon: MapPin,
      day: "Day 1"
    },
    {
      time: "03:00 PM",
      title: "Technical Workshops",
      description: "Parallel workshops on Cloud, AI/ML, and Web3 technologies",
      icon: Users,
      day: "Day 1"
    },
    {
      time: "07:00 PM",
      title: "Dinner & Networking",
      description: "Community dinner and informal networking sessions",
      icon: MapPin,
      day: "Day 1"
    },
    {
      time: "10:00 PM",
      title: "Midnight Snacks",
      description: "Energy boost for night owls continuing to code",
      icon: Clock,
      day: "Day 1"
    },
    {
      time: "08:00 AM",
      title: "Breakfast & Mid-point Check",
      description: "Healthy breakfast and optional project check-ins",
      icon: Calendar,
      day: "Day 2"
    },
    {
      time: "02:00 PM",
      title: "Mentor Sessions",
      description: "One-on-one mentorship and technical guidance",
      icon: Users,
      day: "Day 2"
    },
    {
      time: "06:00 PM",
      title: "Project Submission",
      description: "Final submission deadline for all participants",
      icon: Clock,
      day: "Day 2"
    },
    {
      time: "07:00 PM",
      title: "Project Presentations",
      description: "5-minute pitch presentations to judges",
      icon: MapPin,
      day: "Day 2"
    },
    {
      time: "09:00 PM",
      title: "Awards & Closing",
      description: "Winner announcements, prize distribution, and closing ceremony",
      icon: Calendar,
      day: "Day 2"
    }
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Event <span className="text-primary neon-text">Timeline</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A carefully planned 48-hour journey from registration to final presentations
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <div 
              key={index}
              className={`relative flex items-center mb-12 animate-slide-up ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 neon-glow" />

              {/* Content Card */}
              <div className={`glass glass-hover rounded-xl p-6 ml-20 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'
              } md:w-5/12 group`}>
                {/* Day Badge */}
                <div className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {event.day}
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <event.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-primary font-bold text-lg">{event.time}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden md:block md:w-5/12" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-foreground/70 mb-6">
              Join us for an unforgettable 48-hour adventure of innovation, learning, and building amazing projects.
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
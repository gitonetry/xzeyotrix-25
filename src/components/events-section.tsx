import { useState } from "react";
import {
  Camera,
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Lightbulb,
  Link,
  Palette,
  Presentation,
  Shuffle,
  User,
  VideotapeIcon,
} from "lucide-react";

const EventsSection = () => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const technicalEvents = [
    {
      id: "web-dev",
      title: "Paper Presentation",
      icon: Presentation,
      shortDesc: "Present research or innovative ideas formally and clearly",
      fullDesc:
        "Participants showcase their research, innovative ideas, or technical concepts through structured presentations. They explain their topic with data, analysis, and visuals. Judges assess based on clarity, relevance, and originality. This event encourages public speaking and critical thinking. A great platform to share knowledge with peers and experts",
      prizes: "",
      duration: "5 minutes",
      team: "1-4 members",
    },
    {
      id: "ai-ml",
      title: "Tech Quiz",
      icon: Lightbulb,
      shortDesc: "Compete in a timed quiz on core technical subjects",
      fullDesc:
        "A brain-teasing quiz covering AI, Machine Learning, Operating Systems, DBMS, and core engineering subjects. Teams compete to answer questions under time pressure. Questions range from basics to advanced problem-solving. Quick thinking and teamwork are essential. An engaging way to sharpen technical knowledge",
      prizes: "",
      duration: "",
      team: "2-4 members",
    },
    {
      id: "mobile-dev",
      title: "Tech Debates",
      icon: User,
      shortDesc: "Debate trending tech topics with facts and logic",
      fullDesc:
        "Participants are split into teams to debate trending tech issues such as AI ethics, data privacy, and automation impacts. The event sharpens analytical and communication skills. Judges evaluate clarity, logical reasoning, and factual accuracy. Participants learn to view technology from multiple perspectives. A mix of intellect and persuasive power",
      prizes: "",
      duration: "30 minutes",
      team: "1 member",
    },
    {
      id: "blockchain",
      title: "UI / UX Design Challenge",
      icon: Palette,
      shortDesc: "Design creative, user-friendly app or website mock-ups",
      fullDesc:
        "Participants design creative, functional mock-ups for apps or websites. The focus is on aesthetics, usability, and improving user experience. Tools like Figma or Adobe XD can be used. Designs are judged for creativity, functionality, and clarity. A perfect stage for aspiring designers to showcase their skills",
      prizes: "",
      duration: "30 minutes",
      team: "1 member",
    },
  ];

  const nonTechnicalEvents = [
    {
      id: "pitch-perfect",
      title: "Connections",
      icon: Link,
      shortDesc: "Find the hidden link between given clues",
      fullDesc:
        "Players are shown a series of images or text clues. The goal is to deduce the connection between them. The challenge combines observation, reasoning, and lateral thinking. Questions can be tech-related or purely logical. A fun way to spark creativity and quick thinking",
      prizes: "",
      duration: "30 minutes",
      team: "1-3 members",
    },
    {
      id: "design-thinking",
      title: "AdZap",
      icon: Clapperboard,
      shortDesc: "Create instant ads for quirky, imaginary products",
      fullDesc:
        "Teams are given quirky or imaginary products and must create spontaneous, humorous advertisements. Creativity and humor are key. Participants can use acting, slogans, or props. Judges assess originality, wit, and audience engagement. A fun-filled event that blends drama and marketing skills",
      prizes: "",
      duration: "30 minutes",
      team: "3-5 members",
    },
    {
      id: "ui-ux",
      title: "Tech Pictionary",
      icon: VideotapeIcon,
      shortDesc: "Draw tech terms for your team to guess",
      fullDesc:
        "One player draws while teammates guess the technical term or concept. The challenge is to think visually and simplify complex ideas. The clock adds excitement and tension. This event combines art, tech knowledge, and quick thinking. A lighthearted yet competitive activity for all skill levels",
      prizes: "",
      duration: "30 minutes",
      team: "1-3 members",
    },
    {
      id: "brain-teasers",
      title: "Tagline Twist",
      icon: Shuffle,
      shortDesc: "Rewrite famous slogans with a fun twist",
      fullDesc:
        "Participants take well-known taglines and give them a creative twist. The goal is to make it witty, humorous, or tech-related. The event tests creativity, wordplay, and marketing instincts. Judges look for originality and comedic impact. A fun challenge that sparks laughter and innovation",
      prizes: "",
      duration: "30 minutes",
      team: "1-2 members",
    },
  ];

  const toggleEvent = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const EventCard = ({ event, type }: { event: any; type: string }) => {
    const isExpanded = expandedEvent === event.id;
    const IconComponent = event.icon;

    return (
      <div
        className={`glass glass-hover rounded-xl transition-all duration-500 ${
          isExpanded ? "ring-2 ring-primary/50" : ""
        }`}
      >
        <div
          className="p-6 cursor-pointer"
          onClick={() => toggleEvent(event.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  type === "technical"
                    ? "bg-gradient-primary"
                    : "bg-gradient-to-r from-accent to-primary"
                }`}
              >
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
              {isExpanded ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
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
                  <div className="text-accent font-semibold">
                    {event.prizes}
                  </div>
                </div>
                <div className="glass rounded-lg p-3">
                  <div className="text-sm text-foreground/60">Duration</div>
                  <div className="text-primary font-semibold">
                    {event.duration}
                  </div>
                </div>
                <div className="glass rounded-lg p-3">
                  <div className="text-sm text-foreground/60">Team Size</div>
                  <div className="text-foreground font-semibold">
                    {event.team}
                  </div>
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
            Choose your battle! Participate in technical coding challenges or
            showcase your creative and business skills.
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

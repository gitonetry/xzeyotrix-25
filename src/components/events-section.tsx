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
      title: "Insight Expo",
      icon: Presentation,
      shortDesc:
        "Paper Presentation: A formal way to present the findings of a research project, an idea, or information, typically in an academic setting",
      fullDesc: [
        "Two members per team.",
        "Presentations should not exceed 5 minutes, followed by 3 minutes for Q&A session.",
        "Judges will evaluate based on originality, research depth, innovation, and presentation skills.",
        "Team size: Max 3 members.",
      ],
      prizes: "",
      duration: "5 minutes",
      team: "2-4 members",
    },
    {
      id: "ai-ml",
      title: "QuizWiz",
      icon: Lightbulb,
      shortDesc:
        "Tech Quiz: Quiz competition with questions from AI, Machine Learning, Operating Systems, DBMS, and other core subjects",
      fullDesc: [
        "Two members per team.",
        "The event will have three rounds: preliminary, rapid-fire, and final.",
        "The use of mobile phones or any gadgets is strictly prohibited.",
        "In case of a tie, a tiebreaker question will decide the winner.",
        "Team size: 2 members per team.",
      ],
      prizes: "",
      duration: "",
      team: "2-4 members",
    },
    {
      id: "mobile-dev",
      title: "Tech Tussle",
      icon: User,
      shortDesc:
        "Tech Debate: Organized debates on controversial topics in tech,such as data privacy, AI ethics, and the impact of automation",
      fullDesc: [
        "A tech topic will be provided and the participant should present their views on it.",
        "Each participant is required to take utmost 2 to 3 minutes.",
        "The winner will be decided based on criteria like clarity, evidence, and delivery.",
        "Team size: 1",
      ],
      prizes: "",
      duration: "30 minutes",
      team: "1 member",
    },
    {
      id: "blockchain",
      title: "Pixel Perfect",
      icon: Palette,
      shortDesc:
        "UI/UX: Design mock-ups for a mobile app or website. Focus on creativity, usability, and user experience",
      fullDesc: [
        "The participant’s design should align with the event’s theme or assigned app concept.",
        "The winner will be judged based on creativity, usability, and aesthetics.",
        "Team size: 1",
      ],
      prizes: "",
      duration: "30 minutes",
      team: "1 member",
    },
  ];

  const nonTechnicalEvents = [
    {
      id: "pitch-perfect",
      title: "NetworX",
      icon: Link,
      shortDesc:
        "Connection: Find the link between images/texts, based on logic &amp; tech",
      fullDesc: [
        "Two to three members per team.",
        "Participants must identify common themes or patterns to recognize recurring ideas or similarities.",
        "They must analyze technological or logical relationships to see how different elements connect and impact each other.",
        "Team size: 3 members.",
      ],
      prizes: "",
      duration: "30 minutes",
      team: "1-3 members",
    },
    {
      id: "design-thinking",
      title: "Spotlight Snap",
      icon: Clapperboard,
      shortDesc:
        "AdZap: Teams act fun, impromptu ads for imaginary / funny tech items given to them",
      fullDesc: [
        "Participants are given an imaginary tech item and 10-15 minutes to create a short ad.",
        "Evaluation will be based on creativity and quick thinking.",
        "The ad must highlight the item’s features, benefits, and include a catchy tagline.",
        "Team Size: 2 to 4 members per team",
      ],
      prizes: "",
      duration: "30 minutes",
      team: "3-5 members",
    },
    {
      id: "ui-ux",
      title: "Doodle Vision",
      icon: VideotapeIcon,
      shortDesc:
        "Tech Pictionary: Players take turns drawing technical terms or concepts while their teammates try to guess them within a time limit.",
      fullDesc: [
        "Two to Three members per team.",
        "The team that makes the maximum right guesses will be considered as the winner.",
        "Team size: 2 members.",
      ],
      prizes: "",
      duration: "30 minutes",
      team: "1-3 members",
    },
    {
      id: "brain-teasers",
      title: "Brand Buzz",
      icon: Shuffle,
      shortDesc:
        "Tagline Twist: Creatively altering a slogan or tagline to give it a new meaning or association, often for humorous or promotional purposes.",
      fullDesc: [
        "Two to Three members per team.",
        "The participants must creatively twist a well-known slogan or tagline while keeping its original brand reference clear.",
        "It may be witty, funny or give the slogan a fresh, humorous, or promotional meaning.",
        "Team size: 2 members.",
      ],
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
                className={`w-12 h-12 rounded-lg flex items-center justify-center
    ${
      type === "technical"
        ? "bg-gradient-primary"
        : "bg-gradient-to-r from-accent to-primary"
    }`}
                style={{
                  minWidth: "3rem", // 12 * 0.25rem = 3rem
                  minHeight: "3rem",
                  maxWidth: "3rem",
                  maxHeight: "3rem",
                  aspectRatio: "1 / 1", // ensures square shape
                }}
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
              <ul className="list-disc list-inside text-foreground/80 leading-relaxed space-y-2">
                {event.fullDesc.map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              {/* Place, Duration, and Team Size details will be updated soon. */}

              {/* <div className="grid md:grid-cols-3 gap-4">
                <div className="glass rounded-lg p-3">
                  <div className="text-sm text-foreground/60">Place</div>
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
              </div> */}
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

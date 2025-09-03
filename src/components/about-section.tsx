import { Code, Lightbulb, Trophy, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Incredile Challenges",
      description: "Non-stop coding marathon to build innovative solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description:
        "Bring your wildest tech ideas to life with cutting-edge tools",
    },
    {
      icon: Trophy,
      title: "Massive Prizes",
      description: "Amazing prize pool with exciting rewards for winners",
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Collaborate with brilliant minds from across the campus",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-primary neon-text">Nexnival'25</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-5xl mx-auto leading-relaxed">
            A symposium conducted by the Department of Computer Science and
            Engineering serves as a platform for knowledge sharing and
            interaction among students, faculty, researchers, and industry
            professionals. Unlike broad international conferences, it focuses on
            specific scholarly themes, enabling in-depth discussion and critical
            debate. The event encourages collaboration by integrating academic
            research with practical industry insights. Ultimately, it enriches
            student learning while bridging the gap between theory and practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass glass-hover rounded-xl p-6 text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 glass rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary neon-text">
                500+
              </div>
              <div className="text-foreground/70">Participants</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent neon-text">
                48
              </div>
              <div className="text-foreground/70">Hours</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary neon-text">
                ₹1L+
              </div>
              <div className="text-foreground/70">Prize Pool</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent neon-text">
                50+
              </div>
              <div className="text-foreground/70">Mentors</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;

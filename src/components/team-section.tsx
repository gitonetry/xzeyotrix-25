import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

const TeamSection = () => {
  const coordinators = [
    {
      name: "Dr. Balasubrmanian",
      role: "Department HOD",
      department: "Computer Science",
      email: "rc.balasubramanian@psr.edu.in",
      phone: "+91 73730 87080",
      image: "https://psr.irins.org/profile_images/2611481.JPG",
      social: {
        linkedin: "https://linkedin.com/in/name",
        twitter: "https://twitter.com/name",
      },
    },
    {
      name: "Dr. R. Palanikumar",
      role: "Associate Professor",
      department: "Computer Science",
      email: "palanikumar@psr.edu.in",
      phone: "+91 98659 06165",
      image: "https://psr.irins.org/profile_images/299120.jpg",
      social: {
        linkedin: "https://linkedin.com/in/name",
        twitter: "https://twitter.com/name",
      },
    },
    {
      name: "Dr. Ramathilagam",
      role: "Professor",
      department: "Computer Science",
      email: "ramathilagam@psr.edu.in",
      phone: "+91 99424 17425",
      image: "https://psr.irins.org/profile_images/261015.JPG",
      social: {
        linkedin: "https://linkedin.com/in/name",
        twitter: "https://twitter.com/name",
      },
    },
    {
      name: "Dr. Kavitha",
      role: "Associate Professor",
      department: "Computer Science",
      email: "pkavitha@psr.edu.in",
      phone: "+91 96000 83856",
      image: "https://psr.irins.org/profile_images/303942.png",
      social: {
        linkedin: "https://linkedin.com/in/name",
        twitter: "https://twitter.com/name",
      },
    },
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-primary neon-text">Team</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Get to know the amazing coordinators who are making Xzeyotrix'25
            possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coordinators.map((coordinator, index) => (
            <div
              key={coordinator.name}
              className="glass glass-hover rounded-xl p-6 text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                  <img
                    src={coordinator.image}
                    alt={coordinator.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {coordinator.name}
                  </h3>
                  <p className="text-accent font-semibold">
                    {coordinator.role}
                  </p>
                  <p className="text-foreground/60 text-sm">
                    {coordinator.department}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-foreground/70">
                    <Mail className="h-4 w-4" />
                    <span>{coordinator.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-foreground/70">
                    <Phone className="h-4 w-4" />
                    <span>{coordinator.phone}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4">
                  {coordinator.social.linkedin && (
                    <a
                      href={coordinator.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-hover p-2 rounded-lg text-primary hover:text-accent transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {coordinator.social.twitter && (
                    <a
                      href={coordinator.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-hover p-2 rounded-lg text-primary hover:text-accent transition-colors duration-300"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Have Questions?
            </h3>
            <p className="text-foreground/70 mb-6">
              Feel free to reach out to any of our coordinators for more
              information about the event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg neon-glow">
                <Mail className="h-5 w-5 mr-2 inline" />
                Contact Us
              </button>
              <button className="glass-hover border border-primary text-primary px-6 py-3 rounded-lg">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

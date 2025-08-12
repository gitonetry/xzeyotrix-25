import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

const TeamSection = () => {
  const coordinators = [
    {
      name: "Dr. Sarah Johnson",
      role: "Faculty Coordinator",
      department: "Computer Science",
      email: "sarah.johnson@college.edu",
      phone: "+91 98765 43210",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/sarahjohnson",
        twitter: "https://twitter.com/sarahjohnson"
      }
    },
    {
      name: "Alex Chen",
      role: "Student Coordinator",
      department: "Information Technology",
      email: "alex.chen@student.college.edu",
      phone: "+91 98765 43211",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/alexchen",
        github: "https://github.com/alexchen"
      }
    },
    {
      name: "Priya Sharma",
      role: "Event Manager",
      department: "Computer Engineering",
      email: "priya.sharma@student.college.edu",
      phone: "+91 98765 43212",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/priyasharma",
        twitter: "https://twitter.com/priyasharma"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Lead",
      department: "Software Engineering",
      email: "michael.r@student.college.edu",
      phone: "+91 98765 43213",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      social: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        github: "https://github.com/michaelr"
      }
    }
  ];

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our <span className="text-primary neon-text">Team</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Get to know the amazing coordinators who are making CyberHack 2024 possible
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
                  <p className="text-accent font-semibold">{coordinator.role}</p>
                  <p className="text-foreground/60 text-sm">{coordinator.department}</p>
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
                  {coordinator.social.github && (
                    <a 
                      href={coordinator.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-hover p-2 rounded-lg text-primary hover:text-accent transition-colors duration-300"
                    >
                      <Github className="h-5 w-5" />
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
              Feel free to reach out to any of our coordinators for more information about the event.
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
import {
  Code,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "#events" },
    { name: "Timeline", href: "#timeline" },
    { name: "Register", href: "/register" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/cyberhack2024", label: "GitHub" },
    {
      icon: Twitter,
      href: "https://twitter.com/cyberhack2024",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/cyberhack2024",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/cyberhack2024",
      label: "Instagram",
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-secondary border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Code className="h-8 w-8 text-primary" />
                <div className="absolute inset-0 bg-primary/20 blur-lg" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                Xzeyotrix'25
              </span>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              The ultimate college hackathon experience bringing together
              brilliant minds to create innovative solutions and shape the
              future of technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-hover p-3 rounded-lg text-primary hover:text-accent transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground/70">Xzeyotrix25@psr.edu.in</p>
                  <p className="text-foreground/70">support@psr.edu.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground/70">+91 98765 43200</p>
                  <p className="text-foreground/70">+91 98765 43201</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-foreground/70">
                    P.S.R Engineering College
                    <br />
                    Sevalpatti, Sivakasi - 626140
                    <br />
                    Virudhunagar (Dist),
                    <br />
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Stay Updated</h3>
            <p className="text-foreground/70">
              Subscribe to our newsletter for the latest updates and
              announcements.
            </p>
            <div className="space-y-3">
              <div className="glass rounded-lg p-1">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent px-3 py-2 text-foreground placeholder-foreground/50 outline-none"
                  />
                  <button className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
              <p className="text-xs text-foreground/50">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-foreground/60 text-sm">
              © Xzeyotrix'25. All rights reserved. Made with ❤️ by the
              organizing team.
            </div>
            {/* <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-primary transition-colors duration-300"
              >
                Code of Conduct
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
      </div>
    </footer>
  );
};

export default Footer;

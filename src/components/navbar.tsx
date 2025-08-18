import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Calendar, Users, MapPin, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero", icon: Code },
    { name: "Events", href: "#events", icon: Calendar },
    { name: "Timeline", href: "#timeline", icon: Calendar },
    { name: "Team", href: "#team", icon: Users },
    { name: "Location", href: "#location", icon: MapPin },
    { name: "Brochure", href: "#brochure", icon: FileText },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass neon-glow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Code className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
              <div className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-accent/20 transition-all duration-300" />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:neon-text transition-all duration-300">
              Xzeyotrix'25
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-all duration-300 hover:neon-text group"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>

          {/* Registration Button */}
          <div className="hidden md:block">
            <Link to="/register">
              <Button className="glass-hover neon-glow bg-gradient-primary text-primary-foreground font-semibold px-6">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass mt-2 rounded-lg p-4 space-y-4 animate-slide-up">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 w-full text-left text-foreground/80 hover:text-primary transition-colors duration-300 p-2 rounded-md hover:bg-white/5"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </button>
            ))}
            <Link to="/register" className="block w-full">
              <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold">
                Register Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

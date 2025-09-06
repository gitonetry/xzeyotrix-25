import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import NexnivalBrouchure from "@/assets/nexnival25.jpeg";
import NexnivalPdf from "@/assets/Nexnival25.pdf";

const BrochureSection = () => {
  return (
    <section id="brochure" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Event <span className="text-primary neon-text">Brochure</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Download our comprehensive event guide with all the details you need
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Brochure Preview */}
              <div className="relative group flex items-center justify-center">
                <div
                  className="glass rounded-xl border-2 border-primary/30 group-hover:border-primary/50 transition-all duration-300 shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "540px",
                    aspectRatio: "4/3", // Rectangle aspect ratio
                    background: "#fff",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Image Preview */}
                  <img
                    src={NexnivalBrouchure}
                    alt="Nexnival'25 Brochure"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain", // Show full image, no crop
                      borderRadius: "0.75rem",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                      background: "#fff",
                      display: "block",
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-primary/10 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Brochure Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    Complete Event Guide
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Our detailed brochure contains everything you need to know
                    about Nexnival'25, including event schedules, rules, prizes,
                    venue information, and much more.
                  </p>
                </div>

                {/* What's Inside */}
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold text-primary">
                    What's Inside:
                  </h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Detailed event schedule and timeline</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Complete rules and regulations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Prize distribution and criteria</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Venue maps and logistics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Sponsor information and perks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Contact details and FAQs</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={NexnivalPdf}
                    download="Nexnival25.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 neon-glow">
                      <Download className="h-5 w-5 mr-2" />
                      Download Brochure
                    </Button>
                  </a>
                  <a
                    href={NexnivalBrouchure}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="glass-hover border-primary text-primary px-6 py-3"
                    >
                      <Eye className="h-5 w-5 mr-2" />
                      Preview Online
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureSection;

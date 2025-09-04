import { MapPin, Clock, Phone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Event <span className="text-primary neon-text">Location</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Join us at our state-of-the-art campus facility designed for
            innovation and collaboration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Location Details */}
          <div className="space-y-8">
            {/* Main Location Card */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gradient-primary p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    P.S.R Engineering College
                  </h3>
                  <p className="text-foreground/70">
                    Sevalpatti, Sivakasi - 626140,
                    <br />
                    Virudhunagar (Dist),
                    <br />
                    Tamil Nadu, India.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Building className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">
                      Venue Hours
                    </span>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    CSE Auditorium
                    {/* <br />
                    March 16: 24/7 Access
                    <br />
                    March 17: 12:00 AM - 10:00 PM */}
                  </p>

                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">
                      Venue Hours
                    </span>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    CSE Auditorium
                    {/* <br />
                    March 16: 24/7 Access
                    <br />
                    March 17: 12:00 AM - 10:00 PM */}
                  </p>
                </div>

                <div className="glass rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">
                      Emergency Contact
                    </span>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    +91 63690 45590
                    <br />
                    kesavan@psr.edu.in
                    <br />
                    Available 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Transportation */}
            {/* <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                How to Reach
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Car className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      By Car
                    </h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Free parking available on campus. Take Exit 12 from
                      Highway 101, follow signs to Tech District. GPS: TechVerse
                      Innovation Hub.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Bus className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Public Transport
                    </h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Metro: Tech District Station (Blue Line)
                      <br />
                      Bus: Routes 15, 32, 45 stop at Innovation Drive
                      <br />
                      Shuttle: Free from Metro station every 15 mins
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold neon-glow">
                  <Navigation className="h-5 w-5 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div> */}

            {/* Amenities */}
            {/* <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Campus Amenities
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80 text-sm">
                      High-speed WiFi
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80 text-sm">
                      24/7 Security
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80 text-sm">
                      Food Court
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80 text-sm">
                      Rest Areas
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80 text-sm">
                      Tech Labs
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80 text-sm">
                      Power Outlets
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80 text-sm">
                      Gaming Zone
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80 text-sm">
                      Medical Aid
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Map Placeholder */}
          <div className="glass rounded-2xl p-8 h-full">
            <div className="rounded-xl h-96 flex flex-col items-center justify-center border-2 border-primary/30 bg-transparent">
              <div className="w-full h-full rounded-xl overflow-hidden mb-4">
                <iframe
                  title="PSR Engineering College Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.823067681673!2d77.69839907505737!3d9.29057619058947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b85670932313%3A0xd8caf94254b94c1a!2sP.S.R%20Engineering%20College!5e0!3m2!1sen!2sin!4v1692090000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="items-center justify-center text-center">
              <a
                href="https://www.google.com/maps/dir//Sivakasi,+Sevalpatti,+Appayanaickenpatti,+Tamil+Nadu+626140/@9.2905668,77.6185721,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b06b85670932313:0xd8caf94254b94c1a!2m2!1d77.700974!2d9.2905762?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 mt-2">
                  View Full Map
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            {/* <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center glass rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">50k</div>
                <div className="text-xs text-foreground/60">Sq Ft Space</div>
              </div>
              <div className="text-center glass rounded-lg p-4">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-xs text-foreground/60">Capacity</div>
              </div>
              <div className="text-center glass rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-foreground/60">Access</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

import { MapPin, Navigation, Clock, Phone, Car, Bus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  return (
    <section id="location" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Event <span className="text-primary neon-text">Location</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Join us at our state-of-the-art campus facility designed for innovation and collaboration
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
                    TechVerse Innovation Hub
                  </h3>
                  <p className="text-foreground/70">
                    123 Innovation Drive, Tech District<br />
                    Bangalore, Karnataka 560001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Venue Hours</span>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    March 15: 8:00 AM - 11:59 PM<br />
                    March 16: 24/7 Access<br />
                    March 17: 12:00 AM - 10:00 PM
                  </p>
                </div>
                
                <div className="glass rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">Emergency Contact</span>
                  </div>
                  <p className="text-foreground/70 text-sm">
                    +91 98765 43200<br />
                    security@techverse.edu<br />
                    Available 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">How to Reach</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Car className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">By Car</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Free parking available on campus. Take Exit 12 from Highway 101, 
                      follow signs to Tech District. GPS: TechVerse Innovation Hub.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Bus className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Public Transport</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Metro: Tech District Station (Blue Line)<br />
                      Bus: Routes 15, 32, 45 stop at Innovation Drive<br />
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
            </div>

            {/* Amenities */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Campus Amenities</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80 text-sm">High-speed WiFi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80 text-sm">24/7 Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80 text-sm">Food Court</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80 text-sm">Rest Areas</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80 text-sm">Tech Labs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80 text-sm">Power Outlets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80 text-sm">Gaming Zone</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80 text-sm">Medical Aid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="glass rounded-2xl p-8 h-full">
            <div className="bg-gradient-secondary rounded-xl h-96 flex items-center justify-center border-2 border-primary/30">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Interactive Campus Map</h3>
                <p className="text-foreground/70">
                  Detailed venue layout and navigation
                </p>
                <Button className="bg-gradient-primary text-primary-foreground font-semibold px-6 py-3">
                  View Full Map
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
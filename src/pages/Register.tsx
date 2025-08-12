import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, User, Mail, Phone, GraduationCap, Users, Code, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Background3D from '@/components/ui/3d-background';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    branch: '',
    experience: '',
    eventType: '',
    teamMembers: '',
    github: '',
    linkedin: '',
    motivation: '',
    dietary: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Registration Successful!",
      description: "Welcome to CyberHack 2024. Check your email for confirmation details.",
    });
  };

  return (
    <div className="min-h-screen relative">
      <Background3D />
      
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300 mb-6">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Join <span className="text-primary neon-text">CyberHack</span> 2024
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Register now to secure your spot in the ultimate hackathon experience
          </p>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <User className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Personal Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Academic Information</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="college">College/University *</Label>
                  <Input
                    id="college"
                    value={formData.college}
                    onChange={(e) => handleInputChange('college', e.target.value)}
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study *</Label>
                  <Select onValueChange={(value) => handleInputChange('year', value)}>
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st">1st Year</SelectItem>
                      <SelectItem value="2nd">2nd Year</SelectItem>
                      <SelectItem value="3rd">3rd Year</SelectItem>
                      <SelectItem value="4th">4th Year</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="branch">Branch/Major *</Label>
                  <Input
                    id="branch"
                    value={formData.branch}
                    onChange={(e) => handleInputChange('branch', e.target.value)}
                    placeholder="e.g., Computer Science, IT, ECE"
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Programming Experience *</Label>
                  <Select onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Event Preferences */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Event Preferences</h2>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="eventType">Primary Interest *</Label>
                  <Select onValueChange={(value) => handleInputChange('eventType', value)}>
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-dev">Web Development</SelectItem>
                      <SelectItem value="ai-ml">AI/ML Innovation</SelectItem>
                      <SelectItem value="mobile">Mobile App Development</SelectItem>
                      <SelectItem value="blockchain">Blockchain & DeFi</SelectItem>
                      <SelectItem value="design">UI/UX Design</SelectItem>
                      <SelectItem value="pitch">Business Pitch</SelectItem>
                      <SelectItem value="quiz">Tech Quiz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="teamMembers">Team Members (Optional)</Label>
                  <Textarea
                    id="teamMembers"
                    value={formData.teamMembers}
                    onChange={(e) => handleInputChange('teamMembers', e.target.value)}
                    placeholder="List your team members' names and email addresses (if you have a team)"
                    className="glass border-white/20 focus:border-primary"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Social & Portfolio */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Social & Portfolio</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Profile</Label>
                  <Input
                    id="github"
                    value={formData.github}
                    onChange={(e) => handleInputChange('github', e.target.value)}
                    placeholder="https://github.com/yourusername"
                    className="glass border-white/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange('linkedin', e.target.value)}
                    placeholder="https://linkedin.com/in/yourusername"
                    className="glass border-white/20 focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Lightbulb className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Additional Information</h2>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to participate? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    placeholder="Tell us about your motivation and what you hope to achieve"
                    className="glass border-white/20 focus:border-primary"
                    rows={4}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dietary">Dietary Restrictions</Label>
                  <Input
                    id="dietary"
                    value={formData.dietary}
                    onChange={(e) => handleInputChange('dietary', e.target.value)}
                    placeholder="Any dietary restrictions or allergies (optional)"
                    className="glass border-white/20 focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="glass rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-sm text-foreground/70">
                  <p>By registering for CyberHack 2024, you agree to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Follow the event code of conduct</li>
                    <li>Allow photography and recording during the event</li>
                    <li>Receive event-related communications</li>
                    <li>Participate fairly and ethically</li>
                  </ul>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground font-semibold py-4 text-lg neon-glow animate-glow-pulse"
                >
                  Complete Registration
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
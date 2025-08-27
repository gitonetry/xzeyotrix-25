import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, User, GraduationCap, CalendarRange } from "lucide-react";
import { Link } from "react-router-dom";
import Background3D from "@/components/ui/3d-background";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import qrImage from "@/assets/upi.jpeg";
import axios from "axios";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    branch: "",
    location: "",
    technicalEvent: "",
    nonTechnicalEvent: "",
    teamMembers: "",
    foodPreference: "",
    transactionId: "",
    upiId: "",
  });

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        image: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/registrations`,
        formData
      );
      toast({
        title: "Registration Successful!",
        description:
          "Welcome to CyberHack 2024. Check your email for confirmation details.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        branch: "",
        location: "",
        technicalEvent: "",
        nonTechnicalEvent: "",
        teamMembers: "",
        foodPreference: "",
        transactionId: "",
        upiId: "",
      });
    } catch (err: any) {
      let errorMsg =
        "Registration Failed! Please try again or contact support.";
      if (
        err.response &&
        err.response.data &&
        typeof err.response.data === "string"
      ) {
        const msg = err.response.data.toLowerCase();
        if (msg.includes("email")) {
          errorMsg =
            "This email is already registered. Please use a different email.";
        } else if (msg.includes("phone")) {
          errorMsg =
            "This phone number is already registered. Please use a different phone number.";
        } else if (msg.includes("transaction")) {
          errorMsg =
            "This transaction ID is already used. Please use a unique transaction ID.";
        }
      }
      toast({
        title: "Duplicate Entry!",
        description: errorMsg,
        variant: "destructive",
      });
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Background3D />
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Join <span className="text-primary neon-text">Xzeyotrix</span>'25
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Register now to secure your spot in the ultimate hackathon
            experience
          </p>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <User className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  Personal Information
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
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
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
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
                <h2 className="text-2xl font-bold text-foreground">
                  Academic Information
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="college">College/University *</Label>
                  <Input
                    id="college"
                    value={formData.college}
                    onChange={(e) =>
                      handleInputChange("college", e.target.value)
                    }
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study *</Label>
                  <Select
                    onValueChange={(value) => handleInputChange("year", value)}
                    required
                  >
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
                    onChange={(e) =>
                      handleInputChange("branch", e.target.value)
                    }
                    placeholder="e.g., Computer Science, IT, ECE"
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("location", value)
                    }
                  >
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alandur">Alandur</SelectItem>
                      <SelectItem value="ambattur">Ambattur</SelectItem>
                      <SelectItem value="ambur">Ambur</SelectItem>
                      <SelectItem value="arakkonam">Arakkonam</SelectItem>
                      <SelectItem value="aruppukkottai">
                        Aruppukkottai
                      </SelectItem>
                      <SelectItem value="attur">Attur</SelectItem>
                      <SelectItem value="avadi">Avadi</SelectItem>
                      <SelectItem value="chengalpattu">Chengalpattu</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="chidambaram">Chidambaram</SelectItem>
                      <SelectItem value="coimbatore">Coimbatore</SelectItem>
                      <SelectItem value="coonoor">Coonoor</SelectItem>
                      <SelectItem value="cuddalore">Cuddalore</SelectItem>
                      <SelectItem value="dharapuram">Dharapuram</SelectItem>
                      <SelectItem value="dharmapuri">Dharmapuri</SelectItem>
                      <SelectItem value="dindigul">Dindigul</SelectItem>
                      <SelectItem value="erode">Erode</SelectItem>
                      <SelectItem value="gobichettipalayam">
                        Gobichettipalayam
                      </SelectItem>
                      <SelectItem value="hosur">Hosur</SelectItem>
                      <SelectItem value="jayankondam">Jayankondam</SelectItem>
                      <SelectItem value="kallakurichi">Kallakurichi</SelectItem>
                      <SelectItem value="kambam">Kambam</SelectItem>
                      <SelectItem value="kanchipuram">Kanchipuram</SelectItem>
                      <SelectItem value="kanyakumari">Kanyakumari</SelectItem>
                      <SelectItem value="karaikal">Karaikal</SelectItem>
                      <SelectItem value="karaikudi">Karaikkudi</SelectItem>
                      <SelectItem value="karur">Karur</SelectItem>
                      <SelectItem value="kodaikanal">Kodaikanal</SelectItem>
                      <SelectItem value="kollankodu">Kollankodu</SelectItem>
                      <SelectItem value="kumbakonam">Kumbakonam</SelectItem>
                      <SelectItem value="kurichi">Kurichi</SelectItem>
                      <SelectItem value="madavaram">Madavaram</SelectItem>
                      <SelectItem value="madurai">Madurai</SelectItem>
                      <SelectItem value="mamallapuram">Mamallapuram</SelectItem>
                      <SelectItem value="manapparai">Manapparai</SelectItem>
                      <SelectItem value="mannargudi">Mannargudi</SelectItem>
                      <SelectItem value="mayiladuthurai">
                        Mayiladuthurai
                      </SelectItem>
                      <SelectItem value="mettupalayam">Mettupalayam</SelectItem>
                      <SelectItem value="nagapattinam">Nagapattinam</SelectItem>
                      <SelectItem value="nagercoil">Nagercoil</SelectItem>
                      <SelectItem value="namakkal">Namakkal</SelectItem>
                      <SelectItem value="neyveli">Neyveli</SelectItem>
                      <SelectItem value="ooty">
                        Ooty (Udhagamandalam)
                      </SelectItem>
                      <SelectItem value="pallavaram">Pallavaram</SelectItem>
                      <SelectItem value="paramakudi">Paramakudi</SelectItem>
                      <SelectItem value="perambalur">Perambalur</SelectItem>
                      <SelectItem value="pollachi">Pollachi</SelectItem>
                      <SelectItem value="ponneri">Ponneri</SelectItem>
                      <SelectItem value="pudukkottai">Pudukkottai</SelectItem>
                      <SelectItem value="rajapalayam">Rajapalayam</SelectItem>
                      <SelectItem value="rameswaram">Rameswaram</SelectItem>
                      <SelectItem value="rasipuram">Rasipuram</SelectItem>
                      <SelectItem value="salem">Salem</SelectItem>
                      <SelectItem value="sankagiri">Sankagiri</SelectItem>
                      <SelectItem value="sivaganga">Sivaganga</SelectItem>
                      <SelectItem value="sivakasi">Sivakasi</SelectItem>
                      <SelectItem value="sriperumbudur">
                        Sriperumbudur
                      </SelectItem>
                      <SelectItem value="srivilliputhur">
                        Srivilliputhur
                      </SelectItem>
                      <SelectItem value="tambaram">Tambaram</SelectItem>
                      <SelectItem value="tenkasi">Tenkasi</SelectItem>
                      <SelectItem value="thanjavur">Thanjavur</SelectItem>
                      <SelectItem value="theni">Theni</SelectItem>
                      <SelectItem value="thiruchendur">Tiruchendur</SelectItem>
                      <SelectItem value="thiruvaiyaru">Thiruvaiyaru</SelectItem>
                      <SelectItem value="thiruvarur">Thiruvarur</SelectItem>
                      <SelectItem value="thoothukkudi">Thoothukkudi</SelectItem>
                      <SelectItem value="tiruchengode">Tiruchengode</SelectItem>
                      <SelectItem value="tiruchirappalli">
                        Tiruchirappalli
                      </SelectItem>
                      <SelectItem value="tirunelveli">Tirunelveli</SelectItem>
                      <SelectItem value="tiruppur">Tiruppur</SelectItem>
                      <SelectItem value="tiruvallur">Tiruvallur</SelectItem>
                      <SelectItem value="tiruvannamalai">
                        Tiruvannamalai
                      </SelectItem>
                      <SelectItem value="tiruvottiyur">Tiruvottiyur</SelectItem>
                      <SelectItem value="udumalaipettai">
                        Udumalaipettai
                      </SelectItem>
                      <SelectItem value="ulundurpet">Ulundurpet</SelectItem>
                      <SelectItem value="usilampatti">Usilampatti</SelectItem>
                      <SelectItem value="vellore">Vellore</SelectItem>
                      <SelectItem value="virudhunagar">Virudhunagar</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Event Preferences */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <CalendarRange className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  Event Preferences
                </h2>
              </div>

              <div className="space-y-6">
                {/* Technical Event */}
                <div className="space-y-2">
                  <Label htmlFor="technicalEvent">Technical Event *</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("technicalEvent", value)
                    }
                  >
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue placeholder="Select your technical event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paper-presentation">
                        Paper Presentation
                      </SelectItem>
                      <SelectItem value="tech-quiz">Tech Quiz</SelectItem>
                      <SelectItem value="tech-debate">Tech Debates</SelectItem>
                      <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Non-Technical Event */}
                <div className="space-y-2">
                  <Label htmlFor="nonTechnicalEvent">
                    Non Technical Event *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("nonTechnicalEvent", value)
                    }
                  >
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue placeholder="Select your non-technical event" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="connection">Connection</SelectItem>
                      <SelectItem value="adzap">AdZap</SelectItem>
                      <SelectItem value="pictionary">
                        Tech Pictionary
                      </SelectItem>
                      <SelectItem value="tagline-twist">
                        Tagline Twist
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Food Preference */}
                <div className="space-y-2">
                  <Label>Food Preference *</Label>
                  <div className="flex items-center space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="foodPreference"
                        value="Veg"
                        checked={formData.foodPreference === "Veg"}
                        onChange={(e) =>
                          handleInputChange("foodPreference", e.target.value)
                        }
                        required
                        className="accent-primary h-4 w-4"
                      />
                      <span>Veg</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="foodPreference"
                        value="Non-Veg"
                        checked={formData.foodPreference === "Non-Veg"}
                        onChange={(e) =>
                          handleInputChange("foodPreference", e.target.value)
                        }
                        required
                        className="accent-primary h-4 w-4"
                      />
                      <span>Non-Veg</span>
                    </label>
                  </div>
                </div>

                {/* QR Code Display */}
                <div className="space-y-2">
                  <Label>Scan &amp; Pay (UPI QR Code)</Label>
                  <div className="flex justify-center">
                    <img
                      src={qrImage}
                      alt="UPI QR Code"
                      className="h-100 w-60 object-contain rounded-lg border border-white/20 bg-white p-2"
                    />
                  </div>
                </div>

                {/* Transaction ID */}
                <div className="space-y-2">
                  <Label htmlFor="transactionId">Transaction ID *</Label>
                  <Input
                    id="transactionId"
                    value={formData.transactionId}
                    onChange={(e) =>
                      handleInputChange("transactionId", e.target.value)
                    }
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>

                {/* UPI ID */}
                <div className="space-y-2">
                  <Label htmlFor="upiId">UPI ID *</Label>
                  <Input
                    id="upiId"
                    value={formData.upiId}
                    onChange={(e) => handleInputChange("upiId", e.target.value)}
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                </div>

                {/* Team Members (Optional) */}
                <div className="space-y-2">
                  <Label htmlFor="teamMembers">Team Members (Optional)</Label>
                  <Textarea
                    id="teamMembers"
                    value={formData.teamMembers}
                    onChange={(e) =>
                      handleInputChange("teamMembers", e.target.value)
                    }
                    placeholder="List your team members' names and email addresses (if you have a team)"
                    className="glass border-white/20 focus:border-primary"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Terms and Submit */}
            <div className="glass rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-sm text-foreground/70">
                  <p>By registering for Xzeyotrix'25, you agree to:</p>
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

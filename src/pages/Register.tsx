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
import { Link, useNavigate } from "react-router-dom";
import SuccessModal from "@/components/ui/SuccessModal";
import Background3D from "@/components/ui/3d-background";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import qrImage from "@/assets/ragland-upi.jpeg";
import axios from "axios";
import { supabase } from "@/supabaseClient";

const Register = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast, dismiss } = useToast(); // add dismiss
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [paymentScreenshotUrl, setPaymentScreenshotUrl] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleInputChange = (field: string, value: string) => {
    // Dismiss error toast if editing a unique field
    if (["email", "phone", "transactionId"].includes(field)) {
      dismiss(); // This will close all open toasts
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setUploading(true);
      // Upload to Supabase
      const fileExt = file.name.split(".").pop();
      const fileName = `payment_${Date.now()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from("nexnival25") // bucket name from your env
        .upload(`payment_screenshots/${fileName}`, file);

      if (error) {
        toast({
          title: "Image Upload Failed!",
          description: "Could not upload payment screenshot. Try again.",
          variant: "destructive",
        });
        setUploading(false);
        return;
      }

      // Get public URL
      const { data: publicUrlData } = supabase.storage
        .from("nexnival25")
        .getPublicUrl(`payment_screenshots/${fileName}`);

      setPaymentScreenshotUrl(publicUrlData.publicUrl);
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setProgress(0);
    setLoadingMessage("Checking eMail...");

    try {
      // 1. Check Email
      setLoadingMessage("Checking eMail...");
      await new Promise((res) => setTimeout(res, 400));
      setProgress(33);
      const checkRes = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/registrations/check`,
        { params: { email: formData.email } }
      );
      if (checkRes.data.emailExists) {
        setLoading(false);
        toast({
          title: "Duplicate Email!",
          description:
            "This email is already registered. Please use a different email.",
          variant: "destructive",
        });
        return; // stops further checks
      }

      // Check Phone
      setLoadingMessage("Checking Phone...");
      await new Promise((res) => setTimeout(res, 400));
      setProgress(66);
      const checkResPhone = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/registrations/check`,
        { params: { phone: formData.phone } }
      );
      if (checkResPhone.data.phoneExists) {
        setLoading(false);
        toast({
          title: "Duplicate Phone!",
          description:
            "This phone number is already registered. Please use a different phone number.",
          variant: "destructive",
        });
        return; // stops further checks
      }

      // Check Transaction ID
      setLoadingMessage("Checking Transaction ID...");
      await new Promise((res) => setTimeout(res, 400));
      setProgress(90);
      const checkResTxn = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/registrations/check`,
        { params: { transactionId: formData.transactionId } }
      );
      if (checkResTxn.data.transactionIdExists) {
        setLoading(false);
        toast({
          title: "Invalid Transaction ID!",
          description:
            "Check the transaction ID properly. Please enter a valid transaction ID. No Duplicates are allowed.",
          variant: "destructive",
        });
        return;
      }

      // --- Ensure screenshot uploaded ---
      if (!paymentScreenshotUrl) {
        setLoading(false);
        toast({
          title: "Upload Required!",
          description:
            "Please upload your payment screenshot before submitting.",
          variant: "destructive",
        });
        return;
      }

      setProgress(100);
      setLoadingMessage("Registering...");
      await new Promise((res) => setTimeout(res, 300));

      // --- Send form data with screenshot URL ---
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/registrations`,
        {
          ...formData,
          paymentScreenshot: paymentScreenshotUrl, // add new field
        }
      );

      setLoading(false);
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
      setSelectedFile(null);
      setPaymentScreenshotUrl("");
      setShowSuccess(true);
    } catch (err: any) {
      setLoading(false);
      let errorMsg =
        "Registration Failed! Please try again in Few Minutes or contact support.";
      if (err.response && typeof err.response.data === "string") {
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
        } else if (msg.includes("duplicate")) {
          errorMsg = "Duplicate entry detected. Please check your details.";
        }
      }
      toast({
        title: "Server Busy!",
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
      <SuccessModal
        open={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          navigate("/");
        }}
      />
      {/* Futuristic Loading Overlay */}
      {loading && (
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            inset: 0,
            background: "rgba(10,20,40,0.92)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(2px)",
          }}
        >
          <svg width="100" height="100" style={{ marginBottom: 24 }}>
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="#222"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="#0fffc3"
              strokeWidth="8"
              fill="none"
              strokeDasharray={2 * Math.PI * 42}
              strokeDashoffset={2 * Math.PI * 42 * (1 - progress / 100)}
              style={{
                transition: "stroke-dashoffset 0.4s cubic-bezier(.4,2,.6,1)",
                filter: "drop-shadow(0 0 12px #0fffc3)",
              }}
              strokeLinecap="round"
            />
            <text
              x="50"
              y="56"
              textAnchor="middle"
              fontSize="2rem"
              fill="#0fffc3"
              fontFamily="monospace"
              fontWeight="bold"
              style={{
                textShadow: "0 0 8px #0fffc3, 0 0 16px #0fffc3",
              }}
            >
              {Math.round(progress)}%
            </text>
          </svg>
          <div
            style={{
              color: "#0fffc3",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 1,
              textShadow: "0 0 8px #0fffc3, 0 0 16px #0fffc3",
              fontFamily: "monospace",
            }}
          >
            {loadingMessage}
          </div>
        </div>
      )}
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

                {/* Upload Payment Screenshot */}
                <div className="space-y-2">
                  <Label htmlFor="paymentScreenshot">
                    Payment Screenshot *
                  </Label>
                  <Input
                    id="paymentScreenshot"
                    type="file"
                    accept="image/*"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    className="glass border-white/20 focus:border-primary"
                    required
                  />
                  {uploading && <p className="text-primary">Uploading...</p>}
                  {paymentScreenshotUrl && (
                    <img
                      src={paymentScreenshotUrl}
                      alt="Payment Screenshot Preview"
                      style={{ maxWidth: 200, marginTop: 8, borderRadius: 8 }}
                    />
                  )}
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

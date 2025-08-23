// src/pages/Registration.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    year: "",
    location: "",
    technicalEvent: "",
    nonTechnicalEvent: "",
    foodPreference: "",
    transactionId: "",
    upiId: "",
    teamMembers: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Registration successful!");
      } else {
        const errorText = await response.text();
        console.error("Backend error:", errorText);
        setMessage("Registration failed!");
      }
    } catch (error) {
      console.error("Network error:", error);
      setMessage("Registration failed!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-6">Event Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>First Name</Label>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Last Name</Label>
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Phone</Label>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>College</Label>
          <Input
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Branch</Label>
          <Input
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Year of Study</Label>
          <Input
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Location</Label>
          <Input
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Technical Event</Label>
          <Input
            name="technicalEvent"
            value={formData.technicalEvent}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Non-Technical Event</Label>
          <Input
            name="nonTechnicalEvent"
            value={formData.nonTechnicalEvent}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Food Preference</Label>
          <Input
            name="foodPreference"
            value={formData.foodPreference}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Transaction ID</Label>
          <Input
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>UPI ID</Label>
          <Input
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Team Members</Label>
          <Input
            name="teamMembers"
            value={formData.teamMembers}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>

      {message && (
        <p className="mt-4 text-center text-lg font-semibold">{message}</p>
      )}
    </div>
  );
};

export default Registration;

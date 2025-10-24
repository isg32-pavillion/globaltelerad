import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassCard from "@/components/GlassCard";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    centerName: "",
    contactName: "",
    contact: "",
    phoneNo: "",
    city: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.centerName || !formData.contactName || !formData.contact || !formData.phoneNo || !formData.city || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Query from ${formData.centerName}`);
    const body = encodeURIComponent(`
Center Name: ${formData.centerName}
Contact Name: ${formData.contactName}
Email: ${formData.contact}
Phone: ${formData.phoneNo}
City: ${formData.city}

Message:
${formData.message}
    `);

    window.location.href = `mailto:info@globaltelerad.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Success",
      description: "Your email client will open with the query details",
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I would like to inquire about your teleradiology services.");
    window.open(`https://wa.me/911234567890?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Get in touch with our team for any queries, support, or partnership opportunities
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Address</h3>
              <p className="text-sm text-muted-foreground">
                Medical Plaza, Sector 18<br />
                Gurgaon, Haryana 122001<br />
                India
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
              <a href="tel:+911234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +91 123 456 7890
              </a>
              <p className="text-xs text-muted-foreground mt-2">24/7 Support Available</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
              <a href="mailto:info@globaltelerad.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                info@globaltelerad.com
              </a>
              <p className="text-xs text-muted-foreground mt-2">Response within 24 hours</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Working Hours</h3>
              <p className="text-sm text-muted-foreground">
                Open 24/7<br />
                Emergency Support Available
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Actions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <GlassCard>
                <h2 className="text-2xl font-bold text-primary mb-6">Submit Your Query</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="centerName" className="block text-sm font-medium text-primary mb-2">
                        Center Name *
                      </label>
                      <Input
                        id="centerName"
                        name="centerName"
                        type="text"
                        value={formData.centerName}
                        onChange={handleChange}
                        placeholder="Your healthcare center name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contactName" className="block text-sm font-medium text-primary mb-2">
                        Contact Name *
                      </label>
                      <Input
                        id="contactName"
                        name="contactName"
                        type="text"
                        value={formData.contactName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="contact"
                        name="contact"
                        type="email"
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNo" className="block text-sm font-medium text-primary mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phoneNo"
                        name="phoneNo"
                        type="tel"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-primary mb-2">
                      City *
                    </label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" className="w-full">
                    Send Query via Email
                  </Button>
                </form>
              </GlassCard>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              <GlassCard>
                <h3 className="text-xl font-bold text-primary mb-4">Quick Contact</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Need immediate assistance? Connect with us instantly through WhatsApp for faster response.
                </p>
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="w-full mb-4"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact on WhatsApp
                </Button>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Available 24/7 for emergency support
                  </p>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-xl font-bold text-primary mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">24/7 emergency radiology support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">Expert subspecialty radiologists</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">Rapid turnaround times</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">HIPAA compliant security</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">Competitive pricing packages</span>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard className="bg-gradient-accent text-accent-foreground">
                <h3 className="text-xl font-bold mb-2">Need Urgent Support?</h3>
                <p className="text-sm mb-4 opacity-90">
                  For critical cases and emergencies, call us directly for immediate assistance.
                </p>
                <a href="tel:+911234567890">
                  <Button variant="glass" className="w-full bg-white/20 hover:bg-white/30">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Visit Our Office</h2>
          <div className="max-w-4xl mx-auto">
            <GlassCard>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-semibold text-primary mb-2">Medical Plaza, Sector 18</p>
                  <p className="text-muted-foreground">Gurgaon, Haryana 122001, India</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

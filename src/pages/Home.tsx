import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import { 
  Activity, 
  Brain, 
  Eye,
  Scan,
  ClipboardCheck, 
  Clock, 
  Users, 
  Award,
  Download,
  MessageCircle,
  Target,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import doctorsTeam from "@/assets/doctors-team.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: Activity,
      title: "X-Ray Reporting",
      description: "Any X-ray (one side), any X-ray procedure, and mammography services",
    },
    {
      icon: Brain,
      title: "CT Scan Reporting",
      description: "Brain, PNS, spine, joints, body parts, and angio studies including coronary",
    },
    {
      icon: Scan,
      title: "MRI Reporting",
      description: "Brain, orbit, PNS, spine, joints, and all angio studies",
    },
    {
      icon: Eye,
      title: "PET-CT Reporting",
      description: "Whole body PET, DOTA, PSMA, and FAPI scan reporting",
    },
  ];

  const stats = [
    { icon: Award, label: "Years of Experience", value: "15+" },
    { icon: Brain, label: "Medical Specialities", value: "25+" },
    { icon: Target, label: "Installations", value: "500+" },
    { icon: Users, label: "Happy Patients", value: "1M+" },
  ];

  const testimonials = [
    {
      text: "Globaltelerad has transformed our radiology department. The reports are incredibly detailed and arrive within hours. Their 24x7 availability is a game-changer for emergency cases.",
      doctor: "Dr. Rajesh Kumar",
      hospital: "Apollo Hospitals, Delhi",
      logo: "🏥",
    },
    {
      text: "Outstanding service quality and professionalism. The radiologists are highly qualified and provide consultative support when needed. Highly recommended for any healthcare facility.",
      doctor: "Dr. Priya Sharma",
      hospital: "Fortis Healthcare, Mumbai",
      logo: "🏥",
    },
    {
      text: "We've partnered with Globaltelerad for over 3 years. Their accuracy, turnaround time, and customer support are exceptional. They've become an integral part of our diagnostic services.",
      doctor: "Dr. Amit Patel",
      hospital: "Max Healthcare, Bangalore",
      logo: "🏥",
    },
  ];

  const features = [
    { icon: Zap, title: "Faster Reports", description: "Faster reports that enable faster decisions with rapid turnaround times" },
    { icon: ClipboardCheck, title: "Expert Radiologists", description: "Multi-modality experience with skilled and experienced professionals" },
    { icon: Target, title: "Consistent & Precise", description: "Consistent, precise and affordable radiology reporting" },
    { icon: Clock, title: "24x7 Support", description: "Seamless operations with round-the-clock availability" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Global Teleradiology Hub
          </h1>
          <p className="text-xl md:text-3xl text-primary-foreground/95 mb-8 font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Precision. Anywhere. Anytime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/services">
              <Button variant="glass" size="lg">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Team of skilled and experienced radiologists, associated as consultants with leading 
              diagnostic centres. Driven to make advanced radiology accessible to everyone. Our 
              timeless mission: Quality & Affordability for All.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <GlassCard key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Our Core Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <GlassCard key={index}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-primary mb-2">{service.title}</h4>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section with Orange Background */}
      <section className="py-20 bg-gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-6">
                Loved & Trusted by Indian Doctors
              </h2>
              <p className="text-lg text-accent-foreground/95 mb-8 leading-relaxed">
                Loved & trusted by Indian doctors nationwide. We deliver faster reports that enable 
                faster decisions, with expert radiologists having multi-modality experience. Consistent, 
                precise and affordable radiology reporting for hospitals, diagnostic centres and clinics 
                across geographies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="bg-white/20 hover:bg-white/30"
                  onClick={() => window.open("#", "_blank")}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Sample Report
                </Button>
                <Link to="/contact">
                  <Button variant="glass" size="lg" className="bg-white/20 hover:bg-white/30 w-full sm:w-auto">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Us Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={doctorsTeam}
                alt="Trusted by Indian Doctors"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-glass rounded-xl p-6 shadow-hover">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">1M+</p>
                    <p className="text-sm text-muted-foreground">Reports Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
            What Doctors Say About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={index}>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3 border-t border-border pt-4">
                  <div className="text-3xl">{testimonial.logo}</div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.doctor}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.hospital}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions or need assistance? Our team is here to help you 24x7.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-primary">Address</p>
                  <p className="text-sm text-muted-foreground text-center">
                    405, Block J, Sangani Platinum, Narol, Ahmedabad - 382405, Gujarat
                  </p>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-primary">Phone</p>
                  <a href="tel:+917433999850" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 7433999850
                  </a>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-primary">Email</p>
                  <a href="mailto:globalteleradhub@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    globalteleradhub@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="accent" 
                  size="lg"
                  onClick={() => window.open("https://wa.me/917433999850", "_blank")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact on WhatsApp
                </Button>
                <Link to="/contact">
                  <Button variant="default" size="lg">
                    Submit Query via Email
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

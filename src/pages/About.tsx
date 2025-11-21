import GlassCard from "@/components/GlassCard";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Shield, 
  Zap,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality & Accuracy",
      description: "We maintain the highest standards of diagnostic accuracy through rigorous quality control and peer review processes.",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Our streamlined workflows and dedicated team ensure rapid turnaround times without compromising quality.",
    },
    {
      icon: Users,
      title: "Patient-Centered Care",
      description: "Every report we deliver contributes to better patient outcomes and improved healthcare delivery.",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our radiologists are board-certified experts committed to continuous learning and professional development.",
    },
  ];

  const team = [
    {
      speciality: "Neuroradiology",
      count: "15+",
      description: "Brain, spine, and head & neck specialists",
    },
    {
      speciality: "Musculoskeletal",
      count: "12+",
      description: "Orthopedic and sports imaging experts",
    },
    {
      speciality: "Body Imaging",
      count: "20+",
      description: "Chest, abdomen, and pelvis specialists",
    },
    {
      speciality: "Pediatric Radiology",
      count: "8+",
      description: "Child-focused imaging specialists",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            About Global Teleradiology Hub
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Trusted reporting radiology services with precision, anywhere, anytime. 
            Our timeless mission: Quality & Affordability for All
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <GlassCard>
              <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Team of skilled and experienced radiologists, associated as consultants with leading 
                diagnostic centres. Driven to make advanced radiology accessible to everyone.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span>Skilled and experienced radiologists</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span>Associated with leading diagnostic centres</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span>Making radiology accessible to everyone</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">What We Deliver</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><span className="text-accent mr-2">✓</span>Faster reports that enable faster decisions</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span>Expert radiologists with multi-modality experience</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span>Consistent, precise and affordable radiology reporting</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span>Support for hospitals, diagnostic centres and clinics across geographies</li>
                <li className="flex items-start"><span className="text-accent mr-2">✓</span>24x7 support for seamless operations</li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>


      {/* Team Expertise */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            75+ board-certified radiologists with subspecialty expertise across all imaging modalities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <GlassCard key={index}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{member.speciality}</h3>
                  <p className="text-3xl font-bold text-accent mb-2">{member.count}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

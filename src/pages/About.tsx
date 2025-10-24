import GlassCard from "@/components/GlassCard";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Shield, 
  Zap,
  CheckCircle2,
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

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Globaltelerad established with a vision to revolutionize radiology services in India",
    },
    {
      year: "2012",
      title: "100+ Partnerships",
      description: "Reached milestone of serving over 100 healthcare facilities nationwide",
    },
    {
      year: "2016",
      title: "24/7 Operations",
      description: "Expanded to round-the-clock service with subspecialty coverage",
    },
    {
      year: "2020",
      title: "AI Integration",
      description: "Implemented AI-assisted reporting for enhanced accuracy and efficiency",
    },
    {
      year: "2024",
      title: "1M+ Reports",
      description: "Crossed 1 million radiology reports delivered with 99.8% accuracy rate",
    },
  ];

  const team = [
    {
      speciality: "Neuroradiology",
      count: "15+",
      description: "Brain, spine, and head & neck specialists",
    },
    {
      speciality: "Cardiac Imaging",
      count: "10+",
      description: "Fellowship-trained cardiac radiologists",
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
    {
      speciality: "Interventional",
      count: "10+",
      description: "Image-guided procedure experts",
    },
  ];

  const achievements = [
    "NABH Accredited teleradiology service provider",
    "ISO 9001:2015 certified quality management",
    "HIPAA compliant data security protocols",
    "Partnership with 500+ healthcare facilities",
    "99.8% diagnostic accuracy rate",
    "Average 4.8/5 customer satisfaction rating",
    "Winner of Healthcare Excellence Award 2023",
    "Recognized by Indian Radiological Association",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            About Globaltelerad
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Leading India's teleradiology revolution with expert diagnostics, 
            cutting-edge technology, and unwavering commitment to healthcare excellence
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
              <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide accessible, accurate, and timely radiology services to healthcare facilities 
                across India, enabling better patient care through expert diagnostic support and innovative 
                technology solutions. We strive to bridge the gap between advanced diagnostic expertise 
                and healthcare accessibility.
              </p>
            </GlassCard>

            <GlassCard>
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted and preferred teleradiology partner, setting new standards 
                in diagnostic excellence, technological innovation, and service quality. We envision a 
                future where every patient, regardless of location, has access to world-class radiology 
                expertise within hours.
              </p>
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

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <GlassCard key={index}>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-accent rounded-xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent-foreground">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
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

      {/* Achievements */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            Achievements & Certifications
          </h2>
          <div className="max-w-4xl mx-auto">
            <GlassCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 text-accent-foreground mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Partner With Excellence
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Join the growing network of healthcare facilities that trust Globaltelerad 
            for their radiology needs
          </p>
          <Link to="/contact">
            <Button variant="glass" size="lg" className="bg-white/20 hover:bg-white/30">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

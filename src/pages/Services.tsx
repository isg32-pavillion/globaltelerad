import GlassCard from "@/components/GlassCard";
import { 
  Brain, 
  Heart, 
  Activity, 
  Stethoscope, 
  Bone,
  Eye,
  Baby,
  Scan,
  FileText,
  Clock,
  Shield,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "CT & MRI Reporting",
      description: "Comprehensive reporting for all CT and MRI examinations across body systems",
      features: [
        "Brain and spine imaging",
        "Chest, abdomen & pelvis scans",
        "Musculoskeletal imaging",
        "Vascular studies (CTA/MRA)",
      ],
    },
    {
      icon: Heart,
      title: "Cardiac Imaging",
      description: "Specialized cardiac imaging interpretation by fellowship-trained cardiac radiologists",
      features: [
        "Cardiac CT and coronary CTA",
        "Cardiac MRI and stress perfusion",
        "Nuclear cardiology reporting",
        "Echocardiography correlation",
      ],
    },
    {
      icon: Activity,
      title: "X-Ray Interpretation",
      description: "Rapid and accurate plain film radiography reporting for all anatomical regions",
      features: [
        "Chest X-rays",
        "Skeletal radiography",
        "Abdominal plain films",
        "Emergency trauma imaging",
      ],
    },
    {
      icon: Stethoscope,
      title: "Ultrasound Reporting",
      description: "Detailed sonography reports across all specialties with expert analysis",
      features: [
        "Abdominal and pelvic ultrasound",
        "Obstetric and gynecologic scans",
        "Vascular Doppler studies",
        "Small parts and soft tissue imaging",
      ],
    },
    {
      icon: Bone,
      title: "Musculoskeletal Imaging",
      description: "Expert evaluation of bones, joints, and soft tissues for orthopedic applications",
      features: [
        "Sports injury assessment",
        "Arthritis evaluation",
        "Tumor and infection detection",
        "Post-operative imaging",
      ],
    },
    {
      icon: Eye,
      title: "Neuroradiology",
      description: "Specialized interpretation of brain, spine, and head & neck imaging studies",
      features: [
        "Stroke protocols and brain tumors",
        "Spine pathology assessment",
        "Head and neck oncology",
        "Functional brain imaging",
      ],
    },
    {
      icon: Baby,
      title: "Pediatric Imaging",
      description: "Child-focused radiology with expertise in developmental and congenital conditions",
      features: [
        "Neonatal and infant imaging",
        "Congenital anomaly detection",
        "Pediatric trauma assessment",
        "Growth and development studies",
      ],
    },
    {
      icon: Scan,
      title: "Interventional Guidance",
      description: "Image-guided procedure planning and post-procedure assessment",
      features: [
        "Biopsy planning and guidance",
        "Drainage catheter placement",
        "Vascular intervention support",
        "Treatment response assessment",
      ],
    },
  ];

  const serviceFeatures = [
    {
      icon: Clock,
      title: "Rapid Turnaround",
      description: "Preliminary reports in 30 minutes, final reports within 6-12 hours",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Double-read system with peer review for complex cases",
    },
    {
      icon: Award,
      title: "Expert Radiologists",
      description: "Board-certified specialists with subspecialty training",
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Comprehensive, structured reports with relevant clinical correlations",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Comprehensive teleradiology solutions covering all imaging modalities and subspecialties, 
            delivered by expert radiologists 24/7
          </p>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceFeatures.map((feature, index) => (
              <GlassCard key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
            Specialized Radiology Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <GlassCard key={index}>
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare facilities that trust Globaltelerad for their radiology needs
          </p>
          <Link to="/contact">
            <Button variant="glass" size="lg" className="bg-white/20 hover:bg-white/30">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

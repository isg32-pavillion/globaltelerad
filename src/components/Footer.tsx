import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-sky-50 rounded-full p-2 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Global Teleradiology Hub Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Global Teleradiology Hub</h3>
                <p className="text-xs text-primary-foreground/80">Precision. Anywhere. Anytime</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/90 leading-relaxed">
              Team of skilled and experienced radiologists, associated as consultants with leading 
              diagnostic centres. Driven to make advanced radiology accessible to everyone with 
              quality and affordability for all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/90">
                  405, Block J, Sangani Platinum, Narol Aslali Highway, Narol, Ahmedabad - 382405, Gujarat
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+917433999850" className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  +91 7433999850
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:globalteleradhub@gmail.com" className="text-sm text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  globalteleradhub@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <div className="flex items-start space-x-3 mb-6">
              <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-primary-foreground/90">
                <p className="font-medium">24x7 Service Available</p>
                <p className="text-xs mt-1">Emergency reports within hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Global Teleradiology Hub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

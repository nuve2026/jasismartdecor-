import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-heading font-bold text-primary">JASI</span>
              <span className="text-sm font-body font-medium tracking-widest uppercase opacity-70">Smart Decor</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Expert en confection et commercialisation de meubles modernes. Nous transformons vos espaces en lieux de vie exceptionnels.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/produits", label: "Produits" },
                { to: "/a-propos", label: "À propos" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Phone className="w-4 h-4 text-primary" /> +243 XXX XXX XXX
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <Mail className="w-4 h-4 text-primary" /> contact@jasismartdecor.com
              </li>
              <li className="flex items-center gap-3 text-sm opacity-70">
                <MapPin className="w-4 h-4 text-primary" /> Kinshasa, RDC
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Suivez-nous</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm opacity-50">© 2026 JASI Smart Decor. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

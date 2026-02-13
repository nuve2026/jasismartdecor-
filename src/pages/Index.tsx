import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Shield, Headphones } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-living.jpg";
import aboutImage from "@/assets/about-workshop.jpg";

const features = [
  { icon: Truck, title: "Livraison gratuite", desc: "Sur toutes les commandes" },
  { icon: Shield, title: "Garantie 5 ans", desc: "Qualité assurée" },
  { icon: Headphones, title: "Support 24/7", desc: "À votre écoute" },
];

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Intérieur moderne" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Collection 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-charcoal-foreground leading-tight mb-6">
              Le mobilier qui <span className="text-primary">sublime</span> votre intérieur
            </h1>
            <p className="text-lg text-charcoal-foreground/80 mb-8 leading-relaxed">
              JASI Smart Decor conçoit des meubles modernes alliant esthétique, confort et durabilité. Découvrez nos créations uniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/produits"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Voir la collection <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/a-propos"
                className="inline-flex items-center justify-center gap-2 border border-charcoal-foreground/30 text-charcoal-foreground px-8 py-4 rounded-lg font-semibold hover:bg-charcoal-foreground/10 transition-colors"
              >
                Notre histoire
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features bar */}
      <section className="bg-cream py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">Sélection</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Nos produits phares</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/produits"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4"
            >
              Voir tout le catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={aboutImage} alt="Notre atelier" className="rounded-2xl object-cover w-full h-[400px]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm tracking-widest uppercase">Notre Savoir-Faire</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                L'art du meuble moderne
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Depuis notre création, JASI Smart Decor s'engage à concevoir des meubles qui allient design contemporain et matériaux nobles. Chaque pièce est pensée pour transformer votre intérieur en un espace unique et harmonieux.
              </p>
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 bg-charcoal text-charcoal-foreground px-6 py-3 rounded-lg font-semibold hover:bg-charcoal/90 transition-colors"
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-warm rounded-2xl p-8 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Restez inspiré
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Inscrivez-vous pour recevoir nos dernières collections et offres exclusives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-primary outline-none"
              />
              <button className="bg-charcoal text-charcoal-foreground px-6 py-3 rounded-lg font-semibold hover:bg-charcoal/90 transition-colors whitespace-nowrap">
                S'inscrire
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

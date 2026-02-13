import { motion } from "framer-motion";
import { Award, Users, Heart, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import aboutImage from "@/assets/about-workshop.jpg";
import heroImage from "@/assets/hero-living.jpg";

const values = [
  { icon: Award, title: "Qualité", desc: "Matériaux nobles et finitions impeccables pour des meubles qui durent." },
  { icon: Heart, title: "Passion", desc: "Chaque meuble est conçu avec amour et attention aux détails." },
  { icon: Leaf, title: "Durabilité", desc: "Nous utilisons des matériaux responsables et des procédés respectueux." },
  { icon: Users, title: "Service", desc: "Un accompagnement personnalisé de la conception à la livraison." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-medium text-sm tracking-widest uppercase">Notre Histoire</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-6">À propos de JASI Smart Decor</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Fondée avec la vision de rendre le design moderne accessible, JASI Smart Decor est aujourd'hui une référence dans la confection et la commercialisation de meubles contemporains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={aboutImage} alt="Notre savoir-faire" className="rounded-2xl object-cover w-full h-[500px]" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Un savoir-faire unique</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Chez JASI Smart Decor, nous croyons que chaque intérieur mérite des meubles qui racontent une histoire. Notre équipe d'artisans qualifiés allie techniques traditionnelles et design contemporain pour créer des pièces uniques.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Du choix des matériaux à la finition, chaque étape de notre processus de fabrication est guidée par l'excellence. Nous travaillons le bois massif, le métal, les tissus nobles et d'autres matériaux soigneusement sélectionnés.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre engagement : vous offrir des meubles durables, fonctionnels et esthétiques qui transformeront votre espace de vie en un véritable havre de paix.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">Nos Valeurs</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Ce qui nous guide</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-8 text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Meubles créés" },
              { num: "200+", label: "Clients satisfaits" },
              { num: "10+", label: "Années d'expérience" },
              { num: "15", label: "Artisans qualifiés" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-4xl font-heading font-bold text-primary mb-1">{s.num}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

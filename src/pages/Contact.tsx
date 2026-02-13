import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">Contact</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2">Contactez-nous</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Une question, un projet sur mesure ? N'hésitez pas à nous contacter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              {[
                { icon: Phone, label: "Téléphone", value: "+243 XXX XXX XXX" },
                { icon: Mail, label: "Email", value: "contact@jasismartdecor.com" },
                { icon: MapPin, label: "Adresse", value: "Kinshasa, RDC" },
                { icon: Clock, label: "Horaires", value: "Lun - Sam : 8h - 18h" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-sm border border-border space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Nom complet</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Sujet</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Envoyer le message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

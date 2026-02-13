import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Products = () => {
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous" ? products : products.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">Catalogue</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mt-2">Nos Produits</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Découvrez notre sélection de meubles modernes, conçus avec soin et passion.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Aucun produit trouvé dans cette catégorie.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;

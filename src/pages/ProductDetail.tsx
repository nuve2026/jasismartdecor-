import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Produit introuvable</h1>
          <Link to="/produits" className="text-primary hover:underline">
            Retour au catalogue
          </Link>
        </div>
      </Layout>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/produits" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au catalogue
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-cream aspect-square">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                    {product.badge}
                  </span>
                )}
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">{product.price.toLocaleString()} €</span>
                {product.oldPrice && (
                  <span className="text-lg text-muted-foreground line-through">{product.oldPrice.toLocaleString()} €</span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-3">Caractéristiques</h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  <ShoppingBag className="w-5 h-5" /> Ajouter au panier
                </button>
              </div>
            </motion.div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Produits similaires</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;

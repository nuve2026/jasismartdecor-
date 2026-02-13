import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/produits/${product.id}`} className="group block">
        <div className="relative overflow-hidden rounded-lg bg-cream aspect-square mb-4">
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">{product.category}</p>
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-lg font-bold text-primary">{product.price.toLocaleString()} €</span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">{product.oldPrice.toLocaleString()} €</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({
  name,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square bg-border/30 rounded-lg overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <button className="absolute bottom-4 left-4 right-4 bg-foreground text-background py-3 rounded-md font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Sepete Ekle
        </button>
      </div>
      <div className="space-y-1">
        <p className="text-xs text-muted uppercase tracking-wider">
          {category}
        </p>
        <h3 className="font-medium">{name}</h3>
        <p className="text-muted">{price.toFixed(2)} TL</p>
      </div>
    </div>
  );
}

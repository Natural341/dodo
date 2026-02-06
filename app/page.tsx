import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Classic Siyah",
    price: 89.9,
    image: "/3.png",
    category: "Klasik",
  },
  {
    id: 2,
    name: "Premium Beyaz",
    price: 99.9,
    image: "/4.png",
    category: "Premium",
  },
  {
    id: 3,
    name: "Spor Gri",
    price: 79.9,
    image: "/5.png",
    category: "Spor",
  },
  {
    id: 4,
    name: "Elegant Lacivert",
    price: 119.9,
    image: "/3.png",
    category: "Elegant",
  },
  {
    id: 5,
    name: "Comfort Kahve",
    price: 89.9,
    image: "/4.png",
    category: "Günlük",
  },
  {
    id: 6,
    name: "Urban Antrasit",
    price: 109.9,
    image: "/5.png",
    category: "Urban",
  },
];

const features = [
  {
    title: "Premium Kalite",
    description:
      "En kaliteli pamuk ve doğal liflerden üretilmiş, uzun ömürlü çoraplar.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
  },
  {
    title: "Hızlı Kargo",
    description:
      "Siparişleriniz aynı gün kargoya verilir, 1-3 iş günü içinde kapınızda.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
  },
  {
    title: "Kolay İade",
    description:
      "30 gün içinde koşulsuz iade garantisi. Memnuniyetiniz bizim için önemli.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-border/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-border/20 rounded-full blur-3xl" />
        </div>

        {/* Asymmetric decorative images - 4 corners diagonal */}
        <div className="hidden lg:block absolute left-32 top-32 w-48 h-48 opacity-15 rotate-[45deg]">
          <Image src="/1.png" alt="Decoration" fill className="object-contain" />
        </div>
        <div className="hidden lg:block absolute right-32 top-32 w-48 h-48 opacity-12 -rotate-[45deg]">
          <Image src="/2.png" alt="Decoration" fill className="object-contain" />
        </div>
        <div className="hidden lg:block absolute left-32 bottom-32 w-48 h-48 opacity-10 rotate-[-45deg]">
          <Image src="/2.png" alt="Decoration" fill className="object-contain" />
        </div>
        <div className="hidden lg:block absolute right-32 bottom-32 w-48 h-48 opacity-12 rotate-[45deg]">
          <Image src="/1.png" alt="Decoration" fill className="object-contain" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-muted bg-border/50 px-4 py-2 rounded-full">
                Yeni Koleksiyon 2025
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
              Tarzınızı
              <br />
              <span className="text-muted italic font-light">Ayaklarınızdan</span>
              <br />
              Başlatın<span className="text-muted">.</span>
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed">
              Premium kalite çoraplarla konforu ve şıklığı bir arada yaşayın.
              Her adımınızda farkı hissedin.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#products"
                className="group bg-foreground text-background px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Koleksiyonu Keşfet
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <a
                href="#features"
                className="text-muted hover:text-foreground font-medium transition-colors underline underline-offset-4"
              >
                Daha Fazla Bilgi
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl mx-auto">
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold">50K+</div>
                <div className="text-xs text-muted mt-1">Mutlu Müşteri</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold">100%</div>
                <div className="text-xs text-muted mt-1">Organik Pamuk</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold">4.9</div>
                <div className="text-xs text-muted mt-1">Müşteri Puanı</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Öne Çıkan Ürünler
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              En çok tercih edilen modellerimizi keşfedin. Her biri özenle
              seçilmiş malzemelerden üretilmiştir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-border/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Neden canwear?
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Kalite, konfor ve müşteri memnuniyetini ön planda tutuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background border border-border mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Tarzınızı Yükseltin
          </h2>
          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto">
            Yüksek kaliteli çoraplarımızla her adımınızda konfor ve şıklığı bir
            arada yaşayın. İlk siparişinizde %15 indirim fırsatını kaçırmayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
            <button className="bg-foreground text-background px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              Kayıt Ol
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

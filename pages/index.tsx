import Link from "next/link";

export default function Home() {
  const categories = [
    { name: "القمصان", image: "/shirt.jpg", href: "/shirts" },
    { name: "التيشيرتات", image: "/tshirt.jpg", href: "/t-shirts" },
    { name: "السراويل", image: "/pants.jpg", href: "/pants" },
    { name: "الملابس الداخلية", image: "/underwear.jpg", href: "/underwear" },
  ];

  return (
    <main className="min-h-screen bg-black p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={cat.href}
            className="bg-white rounded-2xl overflow-hidden shadow-md transform hover:scale-105 transition duration-300"
          >
            <div className="w-full h-48 sm:h-64">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center py-4 text-lg font-bold text-black">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

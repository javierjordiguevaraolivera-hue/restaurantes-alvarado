const restaurant = {
  name: "Restaurantes Alvarado",
  address: "676 FLAGLER DR ORLANDO, FL 32809",
  domain: "restaurantesalvadorenolafamilia.com",
  email: "info@restaurantesalvadorenolafamilia.com",
  phone: "+1 786 265 9640",
};

const menu = [
  {
    name: "Ceviche peruano",
    price: "$18",
    description: "Pescado fresco, leche de tigre, cebolla morada, camote y choclo.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Ceviche%20peruano%20es%20inscrita%20en%20la%20Lista%20Representativa%20de%20Patrimonio%20Cultural%20Inmaterial%20de%20la%20Humanidad%20-%2053382087570.jpg",
    credit: "Wikimedia Commons",
  },
  {
    name: "Aji de gallina peruano",
    price: "$16",
    description: "Crema de aji amarillo con pollo deshilachado, arroz y papa.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Aji_de_Gallina_%2848835985356%29.jpg",
    credit: "F Delventhal / Wikimedia Commons",
  },
  {
    name: "Causa limena",
    price: "$14",
    description: "Papa amarilla prensada con relleno fresco, palta y toque de limon.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Causa_Rellena.jpg",
    credit: "spersper / Wikimedia Commons",
  },
  {
    name: "Rocoto relleno",
    price: "$19",
    description: "Rocoto al horno con relleno sazonado, queso y guarnicion clasica.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/Rocoto_relleno_arequipe%C3%B1o.jpg",
    credit: "Angel Olin / Wikimedia Commons",
  },
  {
    name: "Lomo saltado",
    price: "$22",
    description: "Res salteada al wok con cebolla, tomate, papas fritas y arroz.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Lomo_saltado.JPG",
    credit: "Manuel Gonzalez Olaechea / Wikimedia Commons",
  },
];

function PlateLogo() {
  return (
    <svg
      aria-hidden="true"
      className="h-14 w-14 shrink-0"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="48" cy="48" r="42" fill="#f8efe2" stroke="#22201c" strokeWidth="4" />
      <circle cx="48" cy="48" r="27" fill="#ffffff" stroke="#d5a33f" strokeWidth="4" />
      <path
        d="M29 50c4-9 13-15 23-13 7 1 13 6 16 13-6 7-15 11-25 9-6-1-11-4-14-9Z"
        fill="#d9472f"
      />
      <path d="M35 43c7 1 18 1 27-4" stroke="#26884a" strokeWidth="5" strokeLinecap="round" />
      <path d="M58 32c4 2 7 5 8 10" stroke="#f0b23d" strokeWidth="5" strokeLinecap="round" />
      <path d="M25 75h46" stroke="#22201c" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    url: `https://${restaurant.domain}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "676 FLAGLER DR",
      addressLocality: "ORLANDO",
      addressRegion: "FL",
      postalCode: "32809",
      addressCountry: "US",
    },
    email: restaurant.email,
    telephone: restaurant.phone,
    servesCuisine: ["Peruvian", "Latin American"],
    priceRange: "$$",
    hasMenu: {
      "@type": "Menu",
      name: "Menu peruano",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Platos principales",
          hasMenuItem: menu.map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            image: item.image,
            offers: {
              "@type": "Offer",
              price: item.price.replace("$", ""),
              priceCurrency: "USD",
            },
          })),
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  const phoneHref = `tel:${restaurant.phone.replaceAll(" ", "")}`;
  const mailHref = `mailto:${restaurant.email}`;
  const featuredDish = menu[0];

  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#22201c]">
      <JsonLd />

      <header className="border-b border-[#eadfcf] bg-[#fffaf2]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3" aria-label={restaurant.name}>
            <PlateLogo />
            <span className="text-xl font-black uppercase leading-[0.88] tracking-normal sm:text-2xl">
              Restaurantes
              <br />
              Alvarado
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-xs font-black uppercase tracking-[0.18em] text-[#6d665d] md:flex">
            <a href="#menu" className="hover:text-[#b63224]">
              Menu
            </a>
            <a href="#ubicacion" className="hover:text-[#b63224]">
              Ubicacion
            </a>
            <a href={phoneHref} className="text-[#b63224] hover:text-[#22201c]">
              {restaurant.phone}
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#b63224]">
            Cocina peruana en Orlando
          </p>
          <h1 className="mt-5 max-w-2xl text-5xl font-black uppercase leading-[0.9] tracking-normal sm:text-6xl lg:text-7xl">
            Restaurantes Alvarado
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f574d]">
            Sabores peruanos preparados para compartir: ceviche, aji de gallina,
            causa limena, rocoto relleno y lomo saltado con precios claros en dolares.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#menu"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-[#22201c] px-7 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-[#b63224]"
            >
              Ver menu
            </a>
            <a
              href={mailHref}
              className="inline-flex h-12 items-center justify-center rounded-sm border border-[#22201c] px-7 text-sm font-black uppercase tracking-[0.14em] hover:border-[#b63224] hover:text-[#b63224]"
            >
              Contactar
            </a>
          </div>
          <div className="mt-8 grid gap-2 text-sm font-bold text-[#5f574d]">
            <span>{restaurant.address}</span>
            <span>{restaurant.email}</span>
            <span>{restaurant.domain}</span>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-sm bg-[#eadfcf] shadow-[0_24px_70px_rgba(47,35,20,0.18)]">
          <img
            src={featuredDish.image}
            alt={featuredDish.name}
            className="h-full min-h-[520px] w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#ffd27f]">
              Especial de la casa
            </p>
            <div className="mt-2 flex items-end justify-between gap-4">
              <h2 className="text-3xl font-black uppercase leading-none">
                {featuredDish.name}
              </h2>
              <p className="text-3xl font-black text-[#ffd27f]">{featuredDish.price}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="border-y border-[#eadfcf] bg-white py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#b63224]">
                Menu
              </p>
              <h2 className="mt-2 text-4xl font-black uppercase leading-none">
                Platos peruanos
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#6d665d]">
              Precios en USD. Para pedidos, reservas o informacion legal del negocio,
              contactanos directamente.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-sm border border-[#eadfcf] bg-[#fffaf2]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#eadfcf]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black uppercase leading-6">{item.name}</h3>
                    <p className="text-2xl font-black text-[#b63224]">{item.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#5f574d]">{item.description}</p>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8d8377]">
                    Foto: {item.credit}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="bg-[#22201c] py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ffd27f]">
              Contacto
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none">
              Estamos en Orlando.
            </h2>
          </div>
          <div className="grid gap-4 text-sm leading-7 text-[#f4e7d3] sm:grid-cols-2">
            <address className="not-italic">
              <strong className="block text-white">{restaurant.name}</strong>
              {restaurant.address}
              <br />
              Dominio: {restaurant.domain}
            </address>
            <div className="flex flex-col gap-2 font-bold">
              <a href={phoneHref} className="hover:text-[#ffd27f]">
                {restaurant.phone}
              </a>
              <a href={mailHref} className="hover:text-[#ffd27f]">
                {restaurant.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#151410] px-4 py-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#cfc3b2] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {restaurant.name}. Informacion legal, direccion y contacto
            oficial.
          </p>
          <p>
            {restaurant.address} · {restaurant.phone} · {restaurant.email}
          </p>
        </div>
      </footer>
    </main>
  );
}

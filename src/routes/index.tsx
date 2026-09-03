import { createFileRoute } from "@tanstack/react-router";
import {
  BedDouble,
  Building2,
  Droplets,
  Flame,
  LandPlot,
  Leaf,
  MapPin,
  Mountain,
  Phone,
  Ruler,
  Sun,
  Waves,
  Wifi,
  Zap,
} from "lucide-react";

import hazKivulrol from "@/assets/haz-kivulrol.asset.json";
import kertTel from "@/assets/kert-tel.asset.json";
import kertNyar from "@/assets/kert-nyar.asset.json";
import panorama from "@/assets/panorama.asset.json";
import nappali from "@/assets/nappali.asset.json";
import haloTetoter from "@/assets/haloszoba-tetoter.asset.json";
import halo from "@/assets/haloszoba.asset.json";
import foldszint from "@/assets/foldszint.asset.json";
import tetoter from "@/assets/tetoter.asset.json";
import pince from "@/assets/pince.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eladó családi ház Balatonakalin – 300 m², panorámás, 80 M Ft" },
      {
        name: "description",
        content:
          "Eladó 300 m²-es, 3 szintes, 5 szobás családi ház Balatonakalin, 957 m²-es telken, panorámás teraszokkal, 10 percre a Balatontól. Ár: 80 000 000 Ft.",
      },
      {
        property: "og:title",
        content: "Eladó családi ház Balatonakalin – 80 000 000 Ft",
      },
      {
        property: "og:description",
        content:
          "Tágas, napfényes, 3 szintes családi ház a Balaton északi partján, csendes utcában, kertrenéző panorámás teraszokkal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: Ruler, label: "Alapterület", value: "300 m²" },
  { icon: LandPlot, label: "Telek", value: "957 m²" },
  { icon: BedDouble, label: "Szobák", value: "5" },
  { icon: Building2, label: "Szintek", value: "3" },
];

const details: { icon: typeof Sun; label: string; value: string }[] = [
  { icon: Sun, label: "Fényviszony", value: "Napfényes, DNY tájolás" },
  { icon: Mountain, label: "Kilátás", value: "Panorámás" },
  { icon: Flame, label: "Fűtés", value: "Gáz (cirkó)" },
  { icon: Droplets, label: "Víz, gáz, csatorna", value: "Minden közmű bevezetve" },
  { icon: Zap, label: "Villany", value: "Van" },
  { icon: Wifi, label: "Internet", value: "Szélessávú (>10 Mbps)" },
  { icon: Leaf, label: "Energetika", value: "C besorolás" },
  { icon: Waves, label: "Balaton", value: "10 perc séta" },
];

const levels = [
  {
    title: "Pinceszint",
    rooms: ["Tároló helyiségek", "Kazánház / pincerész", "WC", "Volt szalon helyiségek (üres)"],
  },
  {
    title: "Lakószint (földszint)",
    rooms: [
      "Közlekedő / folyosó",
      "2 szoba",
      "Galériás nappali",
      "Konyha",
      "Fürdőszoba + külön WC",
      "Kertrenéző déli terasz",
    ],
  },
  {
    title: "Tetőtér (beépített)",
    rooms: [
      "3 tágas szoba",
      "Fürdőszoba + WC",
      "Galéria",
      "Panorámás, kertrenéző terasz",
    ],
  },
];

const plans = [
  { src: pince.url, title: "Pince szint" },
  { src: foldszint.url, title: "Földszint" },
  { src: tetoter.url, title: "Tetőtér" },
];

const gallery = [
  { src: nappali.url, alt: "Galériás nappali a galériáról nézve", caption: "Galériás nappali" },
  { src: halo.url, alt: "Tágas hálószoba beépített bútorokkal", caption: "Hálószoba" },
  { src: haloTetoter.url, alt: "Tetőtéri hálószoba ferde tetővel", caption: "Tetőtéri szoba" },
  { src: kertNyar.url, alt: "Gondozott gyümölcsfás kert nyáron", caption: "A kert nyáron" },
  { src: kertTel.url, alt: "A kert télen, háttérben a falu", caption: "A kert télen" },
  { src: panorama.url, alt: "Kilátás a falura és a dombokra a teraszról", caption: "Panoráma a teraszról" },
];

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-terra">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Index() {
  return (
    <main className="bg-background font-body text-foreground">
      {/* HERO */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <img
          src={hazKivulrol.url}
          alt="Az eladó családi ház bejárata a kert felől"
          className="hero-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-vignette absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-40">
          <p className="reveal mb-4 inline-flex items-center gap-2 rounded-full border border-paper/30 bg-ink/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-paper backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" />
            Balatonakali · Balaton északi part
          </p>
          <h1 className="reveal font-display text-balance text-5xl font-semibold leading-[1.05] text-paper sm:text-7xl">
            Családi ház
            <br />
            <span className="italic text-accent">Balatonakalin</span>
          </h1>
          <p className="reveal-late mt-5 max-w-xl text-base leading-relaxed text-paper/85 sm:text-lg">
            Tágas, napfényes, 3 szintes otthon csendes, rendezett utcában —
            panorámás teraszokkal, gyümölcsfás kerttel, mindössze 10 perces
            sétára a Balatontól.
          </p>
          <div className="reveal-late mt-8 flex flex-wrap items-end gap-x-10 gap-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-paper/70">
                Eladási ár
              </p>
              <p className="font-display text-4xl font-semibold text-paper sm:text-5xl">
                80 000 000 <span className="text-2xl">Ft</span>
              </p>
              <p className="mt-1 text-sm text-paper/70">266 667 Ft / m²</p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-paper">
                  <s.icon className="mb-1 h-5 w-5 text-accent" />
                  <p className="font-display text-xl font-semibold">{s.value}</p>
                  <p className="text-xs uppercase tracking-wider text-paper/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Az ingatlanról" title="Egy ház, ahol jó megérkezni" />
            <div className="space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
              <p>
                A Balaton északi partján, Balatonakali csendes, rendezett
                utcájában található ez az átlagos állapotú, összkomfortos
                családi ház. Déli–délnyugati fekvésének köszönhetően egész nap
                napfényes, két bejárattal és két nagy terasszal rendelkezik.
              </p>
              <p>
                A nappaliból nyílik a kertrenéző déli terasz, a tetőtéri
                galériáról pedig panorámás teraszra jutunk ki — ahonnan a
                falura és a környező dombokra nyílik kilátás. Minden helyiség
                tágas és világos.
              </p>
              <p>
                A 957 m²-es, gyümölcsfákkal beültetett kert nyáron igazi
                zöld oázis, a pinceszint helyiségei pedig tárolásra,
                műhelynek vagy akár vendégtérnek is alkalmasak.
              </p>
            </div>
          </div>
          <figure className="img-frame overflow-hidden">
            <img
              src={panorama.url}
              alt="Panorámás kilátás a teraszról a falura és a dombokra"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* DETAILS */}
      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Főbb adatok" title="Minden, ami fontos" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {details.map((d) => (
              <div
                key={d.label}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <d.icon className="mb-3 h-5 w-5 text-olive" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {d.label}
                </p>
                <p className="mt-1 font-display text-lg font-medium text-ink">
                  {d.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="Galéria" title="Képek a házról és a kertről" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.caption} className="group">
              <div className="img-frame overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-sm font-medium text-muted-foreground">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* LEVELS */}
      <section className="bg-olive-deep py-20 text-paper sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Helyiséglista
          </p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Három szint, végtelen lehetőség
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {levels.map((lvl, i) => (
              <div
                key={lvl.title}
                className="rounded-2xl border border-paper/15 bg-paper/5 p-7 backdrop-blur-sm"
              >
                <p className="font-display text-5xl font-semibold text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">
                  {lvl.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-paper/80">
                  {lvl.rooms.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOR PLANS */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="Alaprajzok" title="Ismerd meg a belső tereket" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <figure key={p.title}>
              <div className="img-frame overflow-hidden bg-card p-4">
                <img
                  src={p.src}
                  alt={`${p.title} alaprajz`}
                  loading="lazy"
                  className="w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="mt-3 text-center font-display text-lg font-medium text-ink">
                {p.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* LOCATION + CONTACT */}
      <section className="bg-sand py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Elhelyezkedés" title="Balatonakali" />
            <p className="max-w-lg text-base leading-relaxed text-foreground/80 sm:text-lg">
              Balatonakali a Balaton északi partjának egyik legkedveltebb,
              nyugodt települése — strand, borászatok és badacsonyi panoráma a
              közelben. A ház csendes, rendezett utcában áll, a part mindössze
              10 perces sétával elérhető.
            </p>
            <div className="mt-10 rounded-2xl border border-border bg-card p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-terra">
                Kapcsolat
              </p>
              <p className="mt-3 font-display text-2xl font-semibold text-ink">
                Kovács Judit
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Magánszemély hirdető</p>
              <p className="mt-4 flex items-center gap-3 font-display text-xl font-semibold text-olive">
                <Phone className="h-5 w-5" />
                +36 30 812 8436
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Hivatkozz a megveszLAK hirdetésre (#54352937). Az ár a jelenlegi
                piaci árzuhanást tükrözi — kiváló vételár azoknak, akik most
                lépnek.
              </p>
            </div>
          </div>
          <figure className="img-frame overflow-hidden">
            <img
              src={kertNyar.url}
              alt="A tágas, gyümölcsfás kert nyári pompában"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink py-10 text-paper/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center">
          <p className="font-display text-lg font-semibold text-paper">
            Családi ház · Balatonakali
          </p>
          <p className="text-sm">
            300 m² · 957 m² telek · 5 szoba · 3 szint · 80 000 000 Ft
          </p>
        </div>
      </footer>
    </main>
  );
}

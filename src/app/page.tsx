import Beams from "@/components/Beams";
import Hero from "@/components/Hero";
import Masonry from "@/components/Masonry";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const items = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://unsplash.com/photos/dog-running-on-beach-during-daytime-yihlaRCCvd4",
      height: 800,
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://unsplash.com/photos/black-and-white-short-coated-dog-N04FIfHhv_k",
      height: 400,
    },
    {
      id: "3",
      img: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://unsplash.com/photos/yellow-labrador-retriever-biting-yellow-tulip-flower-Sg3XwuEpybU",
      height: 600,
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://unsplash.com/photos/a-brown-dog-sitting-on-top-of-a-sandy-beach-AbNO2iejoXA",
      height: 300,
    },
    {
      id: "5",
      img: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://unsplash.com/photos/black-dog-wearing-blue-denim-collar-K4mSJ7kc0As",
      height: 600,
    },
    {
      id: "6",
      img: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://unsplash.com/photos/brown-and-white-long-coated-small-dog-lying-on-green-grass-G8cB8hY3yvU",
      height: 600,
    },
    {
      id: "7",
      img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://unsplash.com/photos/black-pug-with-gray-knit-scarf-Mv9hjnEUHR4",
      height: 500,
    },
    {
      id: "8",
      img: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://unsplash.com/photos/dog-holding-flower-2s6ORaJY6gI",
      height: 600,
    },
    {
      id: "9",
      img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://unsplash.com/photos/brown-short-coated-dog-in-orange-hoodie-oU6KZTXhuvk",
      height: 400,
    },
    {
      id: "10",
      img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "https://unsplash.com/photos/adult-chocolate-labrador-retriever-v3-zcCWMjgM",
      height: 600,
    },
  ];
  return (
    <main className="relative h-screen w-full bg-neutral-950 overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <ScrollProgress />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-neutral-950/80" />
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <section
          id="hero"
          className="h-screen w-full snap-start flex items-center justify-center p-6 pb-24 lg:pb-6 lg:pl-40 xl:pl-56 overflow-hidden"
        >
          <Hero />
        </section>

        <section
          id="doges"
          className="h-screen w-full snap-start flex items-center justify-center p-6 pb-24 lg:pb-6 lg:pl-40 xl:pl-56 border-t border-white/5 bg-black/10 backdrop-blur-[2px] overflow-hidden"
        >
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="center"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </section>

        <section
          id="about"
          className="h-screen w-full snap-start flex items-center justify-center p-6 pb-24 lg:pb-6 lg:pl-40 xl:pl-56 border-t border-white/5 bg-black/10 backdrop-blur-[2px] overflow-hidden"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white/20 text-center">
            About!
          </h2>
        </section>
      </div>
    </main>
  );
}

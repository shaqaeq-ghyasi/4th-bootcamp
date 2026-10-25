import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#182D4A] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#657594] via-[#263B5D] to-[#10213B]" />

      {/* Atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#29436D]/90 via-transparent to-[#172944]/20" />

      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <section className="relative z-10 flex min-h-screen items-center px-6 pb-24 pt-44 md:px-12 lg:px-20">
        <div className="max-w-[1100px]">
          <h1 className="text-5xl font-light leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[112px]">
            Find your <span className="italic">scent.</span>
            <br />
            One bottle at a time.
          </h1>

          <p className="mt-9 max-w-[560px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            A monthly fragrance club from the Lumen atelier. Each delivery
            brings a hand-picked 8ml bottle to your door — drawn from our
            library of 60 rare parfums, chosen for the season and for you.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="rounded-full bg-[#B9E7FF] px-8 py-5 text-xs font-medium tracking-[0.13em] text-[#182D4A] transition hover:bg-white"
            >
              START YOUR SUBSCRIPTION
            </a>

            <a
              href="#how-it-works"
              className="rounded-full border border-white/20 bg-white/[0.04] px-8 py-5 text-xs font-medium tracking-[0.13em] text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              HOW IT WORKS
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

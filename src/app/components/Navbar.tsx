export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-extrabold text-blue-600">
          CareerPilot
        </h1>

        <nav className="hidden gap-8 text-gray-700 md:flex">
          <a href="#" className="hover:text-blue-600">
            Features
          </a>

          <a href="#" className="hover:text-blue-600">
            Pricing
          </a>

          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-blue-600">
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
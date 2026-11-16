import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-5 py-16 text-center text-[#334155]">
      <div className="max-w-xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#64748b]">Error 404</p>
        <h1 className="mt-4 font-serif text-4xl font-bold text-[#1a2836] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-sm leading-7 text-[#64748b] sm:text-base">
          The page you are looking for may have moved or the address may be incorrect.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-lg bg-[#2c3e50] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1e2d3d]"
          >
            Back to home
          </Link>
          <Link
            to="/services"
            className="rounded-lg border border-[#cbd5e1] bg-white px-5 py-3 text-sm font-bold text-[#2c3e50] transition hover:bg-slate-50"
          >
            View services
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;

"use client";

export default function Newsletter() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h3 className="text-xl sm:text-2xl font-bold font-serif">Join our newsletter</h3>
        <p className="mt-2 text-sm sm:text-base text-gray-600 font-light">Get early access to new drops and exclusive offers.</p>
        <form className="mt-6 flex flex-col sm:flex-row w-full gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email" 
            className="flex-1 rounded-full sm:rounded-l-full sm:rounded-r-none border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
          />
          <button 
            type="submit"
            className="rounded-full sm:rounded-l-none sm:rounded-r-full bg-indigo-600 text-white px-6 py-3 font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

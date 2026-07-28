export default function PrivacyBanner() {
  return (
    <section className="bg-emerald-500 dark:bg-emerald-600">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-12">
        <p className="mx-auto max-w-5xl text-center text-lg font-medium leading-8 text-white sm:text-xl lg:text-2xl">
          No screenshots, keystroke content, URL history,
          application-name monitoring, or clipboard collection
          under any tier or configuration.
        </p>
      </div>
    </section>
  );
}
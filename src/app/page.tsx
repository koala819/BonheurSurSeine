import Hero from "@/src/components/atoms/Hero";
import Quote from "@/src/components/atoms/Quote";
import ContactSection from "@/src/components/atoms/ContactSection";

export default function Page() {
  return (
    <section
      className='mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 text-gray-900 dark:text-white mb-8 space-y-8'
      // className='flex flex-col-reverse md:flex-row items-center mt-8 p-8'
    >
      {/* <h1 className='text-4xl font-bold mb-2 text-center w-full'>
        Hello World
      </h1> */}
      <Hero />
      <Quote />
      <ContactSection />
    </section>
  );
}

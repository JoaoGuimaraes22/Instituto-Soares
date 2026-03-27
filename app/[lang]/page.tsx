import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import ScrollProgress from "./_components/scroll-progress";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import StatsCounters from "./_components/stats-counters";
import About from "./_components/about";
import Conditions from "./_components/conditions";
import Services from "./_components/services";
import Process from "./_components/process";
import Team from "./_components/team";
import GalleryStrip from "./_components/gallery-strip";
import Reviews from "./_components/reviews";
import Hours from "./_components/hours";
import Pricing from "./_components/pricing";
import FAQ from "./_components/faq";
import Contact from "./_components/contact";
import Appointment from "./_components/appointment";
import Footer from "./_components/footer";
import AppointmentBar from "./_components/appointment-bar";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <ScrollProgress />
      <Navbar dict={dict.navbar} lang={lang} />
      <main id="main">
        <Hero dict={dict.hero} />
        <StatsCounters dict={dict.statsCounters} />
        <About dict={dict.about} />
        <Conditions dict={dict.conditions} />
        <Services dict={dict.services} />
        <Process dict={dict.process} />
        <Team dict={dict.team} />
        <GalleryStrip dict={dict.galleryStrip} />
        <Reviews dict={dict.reviews} />
        <Hours dict={dict.hours} />
        <Pricing dict={dict.pricing} />
        <FAQ dict={dict.faq} />
        <Contact dict={dict.contact} />
        <Appointment dict={dict.appointment} />
      </main>
      <Footer dict={dict.footer} />
      <AppointmentBar dict={dict.appointmentBar} />
    </>
  );
}

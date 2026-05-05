import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import PrivateSelection from '@/components/PrivateSelection'
import Process from '@/components/Process'
import Experience from '@/components/Experience'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function HomePage() {
  return (
    <main>
      <RevealObserver />
      <Nav />
      <Hero />
      <About />
      <PrivateSelection />
      <Process />
      <Experience />
      <LeadForm />
      <Footer />
    </main>
  )
}

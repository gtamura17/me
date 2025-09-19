import About from '@/components/About'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

import { About, Banner, Contact, Nav, Services, Work } from '@/components'

export function App() {
  return (
    <div className="overflow-hidden bg-site bg-cover bg-no-repeat">
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  )
}

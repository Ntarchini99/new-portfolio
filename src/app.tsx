import { About, Banner, Contact, Nav, Services, Work } from '@/components'
import WhatsappButton from './components/Whatsapp'

export function App() {
  return (
    <div className="overflow-hidden bg-site bg-cover bg-no-repeat">
      <Banner />
      <WhatsappButton />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  )
}

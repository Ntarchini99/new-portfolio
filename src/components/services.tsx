import { ReactNode } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { FadeDirection, fadeIn } from '@/util/variants'

type Service = {
  name: string
  description: ReactNode
  link: string
}

const services: Service[] = [
  {
    name: 'Desarrollo Web',
    description: (
      <>
        Trabajo en el desarrollo de aplicaciones web que cumplan las necesidades de cada cliente. ya sea
        desde una simple landing page, hasta un sitio web corporativo o una tienda con gran escalabilidad.
      </>
    ),
    link: '',
  },
  {
    name: 'Ciberseguridad',
    description: (
      <>
        Pentesting para evaluar y mejorar la seguridad de tus sistemas. Identifico vulnerabilidades, realizo pruebas de penetración, analizo riesgos
        y proporciono informes detallados con recomendaciones. También brindo consultoría en seguridad.
      </>
    ),
    link: '',
  },
  {
    name: 'Diseño Gráfico / UI/UX',
    description: (
      <>
        Ofrecemos servicios de Diseño Gráfico y UX/UI de alta calidad. Contamos con un equipo especializado que se dedica a crear diseños impactantes y funcionales, asegurando una experiencia de usuario excepcional.
        Desde la conceptualización hasta el desarrollo web.
      </>
    ),
    link: '',
  },
  {
    name: 'Marketing Digital',
    description: (
      <>
        En nuestra agencia digital, nos especializamos en ofrecer servicios completos de marketing y gestión de redes sociales diseñados para potenciar cualquier tipo de marca o negocio.
        Nuestro enfoque estratégico y creativo asegura un crecimiento sostenible y una mayor visibilidad en el mercado.
      </>
    ),
    link: '',
  }

]

export const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20 lg:flex-row">
          <motion.div
            variants={fadeIn(FadeDirection.right, 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="mb-12 flex-1 bg-no-repeat mix-blend-lighten lg:mb-0 lg:bg-services lg:bg-bottom"
          >
            <h2 className="h2 mb-6 text-accent">Servicios Ofrecidos</h2>
            <h3 className="h3 mb-16 max-w-[455px]">
              Para adquirir un servicio comunicarse via whatsapp, email o instagram.
            </h3>
          </motion.div>

          <motion.div
            variants={fadeIn(FadeDirection.left, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex flex-col gap-[38px]">
              {services.map((service, index) => {
                const { name, description, link } = service

                return (
                  <div
                    className="flex min-h-[146px] flex-row gap-2 border-b border-white/20"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="mb-6 font-primary text-[20px] font-semibold tracking-wider">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>

                    <div className="flex flex-1 flex-col items-end gap-y-[42px]">
                      <a
                        href="https://www.instagram.com/digitalsolutionsagencia/"
                        className="btn flex h-9 w-9 items-center justify-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="https://www.instagram.com/digitalsolutionsagencia/" className="text-gradient text-end text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

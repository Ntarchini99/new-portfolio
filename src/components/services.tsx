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
    name: 'Diseño UI/UX',
    description: (
      <>
        Dentro de mis servicios ofrezco Diseño UX UI, ya que cuento con mi equipo de trabajo el cual se encarga de los diseños
        para luego comenzar a desarrollar las web.
      </>
    ),
    link: '',
  },
  {
    name: 'Desarrollo Web',
    description: (
      <>
        Desarrollo web, trabajo en el desarrollo de aplicaciones web que cumplan las necesidades del cliente, ya sea
        desde una tienda hasta un portfolio o una landing page.
      </>
    ),
    link: '',
  },
  {
    name: 'Marketing Digital',
    description: (
      <>
        Tengo una agencia digital, la cual contamos con servicios de marketing y redes sociales para impulsar
        cualquier tipo de marca o negocio.
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
              Para adquirir cualquier servicio comunicate via whatsapp, email o instagram.
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
                        href="https://www.instagram.com/digitalsolutions_ok/"
                        className="btn flex h-9 w-9 items-center justify-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="https://www.instagram.com/digitalsolutions_ok/" className="text-gradient text-end text-sm">
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

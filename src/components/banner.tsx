import Avatar from '@/assets/art.png'
import { FaGithub, FaTiktok, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn, FadeDirection } from '@/util/variants'
import { Header } from '@/components'

export const Banner = () => {
  return (
    <div id="home">
      <Header />
      <section className="flex min-h-[85hv] items-center lg:min-h-[78vh]">
        <div className="container mx-auto relative">

          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            <div className="flex-1 text-center font-secondary lg:text-left">
              <motion.h1
                variants={fadeIn(FadeDirection.up, 0.3)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="text-[20px] font-bold leading-[0.8] lg:text-[110px]"
              >
                NAZARENO <span>TARCHINI</span>
              </motion.h1>

              <motion.div
                variants={fadeIn(FadeDirection.up, 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="mb-6 font-secondary text-[36px] font-semibold uppercase leading-[1] lg:text-[60px]"
              >
                <span className="text-white">Soy</span>{' '}
                <TypeAnimation
                  sequence={[
                    'Frontend dev',
                    2000,
                    'Web Developer',
                    2000,
                  ]}
                  speed={50}
                  wrapper="span"
                  className="text-accent"
                  repeat={Infinity}
                />
              </motion.div>
              <motion.p
                variants={fadeIn(FadeDirection.up, 0.7)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="mx-auto mb-8 max-w-lg lg:mx-0"
              >
                Tengo 24 años. Soy Frontend Developer, Pentester y Community Manager, me dedico
                enteramente a la programacion web utilizando React, tambien hago informes de Ciberseguridad.
              </motion.p>

              <motion.div
                variants={fadeIn(FadeDirection.up, 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0"
              >
                <a href="mailto:ntarchini.developer@gmail.com">
                  <button className="btn btn-lg">Contacto </button>
                </a>

                <a href="https://www.instagram.com/verttexagencia_/" target='blank' className="text-gradient btn-link">
                  Mi Agencia
                </a>
              </motion.div>

              <motion.div
                variants={fadeIn(FadeDirection.up, 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true }}
                className="mx-auto flex max-w-max gap-x-6 text-[20px] lg:mx-0"
              >
                <a href="#">
                  <FaTiktok />
                </a>
                <a href="https://github.com/Ntarchini99" target='blank'>
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/nazareno-tarchini/" target='blank'>
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/nazatarchini/" target='blank'>
                  <FaInstagram />
                </a>
                <a href="https://api.whatsapp.com/send?phone=3484365436" target='blank'>
                  <FaWhatsapp />
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn(FadeDirection.down, 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true }}
              className="hidden max-w-[320px] flex-1 lg:flex lg:max-w-[482px]"
            >
              <img src={Avatar} alt="Avatar" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

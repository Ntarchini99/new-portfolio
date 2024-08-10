import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { FadeDirection, fadeIn } from '@/util/variants'

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn(FadeDirection.right, 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="min-h-[640px] flex-1 bg-about bg-contain bg-top bg-no-repeat mix-blend-lighten"
          ></motion.div>

          <motion.div
            variants={fadeIn(FadeDirection.left, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Sobre mi</h2>
            <h3 className="h3 mb-2">
              Desarrollador Frontend, Freelance.
            </h3>
            <p className="mb-4">
              Soy un Desarrollador Frontend especializado en HTML5, CSS3, JavaScript y React, junto con sus librerías. Tengo conocimientos en la creación de prototipos con Figma, como tambien en SEO, servidores y posicionamiento web. Además, me he formado en Ciberseguridad con un enfoque orientado a PENTESTER.
              Antes de dedicarme a la programación, trabajé como Community Manager freelance, lo que me permitió desarrollar habilidades en gestión de comunidades y estrategias digitales. Comencé a estudiar programación de manera autodidacta en 2021 y en 2023 completé un curso en Coderhouse.
            </p>

            <div className="mb-12 flex gap-x-6 lg:gap-x-10">
              <div>
                <div className="text-gradient font-tertiary text-[40px] leading-[1.2]">
                  {inView && <CountUp start={0} end={50} duration={3} />}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Proyectos
                  <br />
                  Completedados
                </div>
              </div>

              <div>
                <div className="text-gradient font-tertiary text-[40px] leading-[1.2]">
                  {inView && <CountUp start={0} end={1} duration={3} />}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  año de
                  <br />
                  Experiencia
                </div>
              </div>

              <div>
                <div className="text-gradient font-tertiary text-[40px] leading-[1.2]">
                  {inView && <CountUp start={0} end={50} duration={3} />}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Clientes
                  <br />
                  Satisfechos
                </div>
              </div>
            </div>

            <div className="flex items-center gap-x-8">
              <a href="https://drive.google.com/drive/u/2/folders/1NTsLOckNhxho7UXg1FMa8A7Mab3eethM" target='blank'>
                <button className="btn btn-lg">Curriculum</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

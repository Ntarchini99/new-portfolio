import React, { useState, useRef } from "react";
import { motion } from 'framer-motion';
import { FadeDirection, fadeIn } from '@/util/variants';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    formRef.current?.reset();
    setMessage("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(event.currentTarget.action, {
        method: event.currentTarget.method,
        body: formData,
      });

      if (response.ok) {
        console.log("¡Éxito! Su consulta se envió correctamente.");
        resetForm();
      } else {
        throw new Error(
          "Hubo un problema al enviar su consulta. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error: any) {
      console.error("Error:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <section id="contact" className="lg:section py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn(FadeDirection.right, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="flex flex-1 items-center justify-start"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">Completa el Formulario</h2>
              <h1 className="mb-12 text-[45px] leading-none lg:text-[90px]">
                Y trabajemos juntos
              </h1>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn(FadeDirection.left, 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true }}
            className="flex flex-1 flex-col items-start gap-y-6 rounded-xl border p-6"
            ref={formRef}
            action="https://formsubmit.co/ntarchini.developer@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full border-b bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent"
              type="text"
              name="name"
              placeholder="Nombre y Apellido"
              required
            />
            <input
              className="w-full border-b bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent"
              type="email"
              name="email"
              placeholder="Tu email"
              required
            />
            <textarea
              className="mb-12 w-full resize-none border-b bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent"
              name="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="Deja tu mensaje"
              cols={30}
              rows={10}
              required
            ></textarea>
            {isSubmitting ? (
              <button className="btn btn-lg" disabled={isSubmitting}>
                Enviando...
              </button>
            ) : (
              <button className="btn btn-lg">
                Enviar
              </button>
            )}
            <input type="hidden" name="_next" value="http://localhost:5173/" />
            <input type="hidden" name="_captcha" value="false" />
          </motion.form>
        </div>
      </div>
    </section>
  );
};

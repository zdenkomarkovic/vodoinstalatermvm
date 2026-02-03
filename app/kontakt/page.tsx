"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function KontaktPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Kontaktirajte Nas
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dostupni smo 24/7 za sve vaše vodoinstalaterske potrebe. Pozovite
            nas ili pošaljite poruku!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-background rounded-2xl p-8 shadow-lg border-2 border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Kontakt Informacije
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                    <Link
                      href="tel:+381606936977"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      060/693-6977
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <Link
                      href="mailto:vodoinstalatermvm011@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      vodoinstalatermvm011@gmail.com
                    </Link>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Lokacija</h3>
                    <p className="text-muted-foreground">Beograd</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Radno Vreme
                    </h3>
                    <p className="text-muted-foreground">
                      Dostupni 24/7 - Hitne intervencije
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-primary/20">
                <h3 className="font-semibold text-lg mb-4">
                  Kontaktirajte nas putem
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="viber://chat?number=+381606936977"
                    className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">Viber</span>
                  </Link>
                  <Link
                    href="https://wa.me/381606936977"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">WhatsApp</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Emergency Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-8 h-8" />
                <h3 className="text-xl font-bold">Hitne Intervencije 0-24</h3>
              </div>
              <p className="text-primary-foreground/90">
                Za hitne slučajeve pozovite nas odmah! Dostupni smo non-stop za
                sve hitne vodoinstalaterske potrebe.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background rounded-2xl p-8 shadow-lg border-2 border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Pošaljite Poruku
              </h2>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
            Naša Lokacija
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181650.9924177413!2d20.28010555!3d44.81892395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBeograd!5e0!3m2!1ssr!2srs!4v1709559000000!5m2!1ssr!2srs"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vodoinstalater MVM Beograd - Lokacija"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

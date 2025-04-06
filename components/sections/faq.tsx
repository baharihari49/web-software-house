"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    id: "item-1",
    question: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
    answer:
      "Waktu pengembangan website bervariasi tergantung pada kompleksitas proyek. Website sederhana seperti landing page atau company profile dapat selesai dalam 2-4 minggu, sedangkan website e-commerce atau aplikasi web yang lebih kompleks dapat membutuhkan waktu 8-12 minggu atau lebih. Kami akan memberikan estimasi waktu yang lebih akurat setelah berdiskusi tentang kebutuhan spesifik proyek Anda.",
  },
  {
    id: "item-2",
    question: "Berapa biaya untuk mengembangkan aplikasi mobile?",
    answer:
      "Biaya pengembangan aplikasi mobile tergantung pada kompleksitas fitur, platform (Android, iOS, atau keduanya), dan kebutuhan integrasi. Secara umum, aplikasi sederhana dapat dimulai dari Rp 50 juta, aplikasi dengan kompleksitas menengah berkisar antara Rp 100-250 juta, dan aplikasi kompleks dengan banyak fitur dan integrasi dapat melebihi Rp 300 juta. Kami menawarkan konsultasi gratis untuk memberikan estimasi biaya yang lebih akurat berdasarkan kebutuhan spesifik Anda.",
  },
  {
    id: "item-3",
    question: "Apakah NexGen Solutions menyediakan layanan pemeliharaan website?",
    answer:
      "Ya, kami menawarkan paket pemeliharaan website yang mencakup update reguler, backup, pemantauan keamanan, perbaikan bug, dan dukungan teknis. Paket pemeliharaan kami dapat disesuaikan berdasarkan kebutuhan spesifik Anda. Kami sangat menyarankan layanan pemeliharaan untuk memastikan website Anda tetap aman, up-to-date, dan berfungsi optimal.",
  },
  {
    id: "item-4",
    question: "Teknologi apa yang digunakan untuk pengembangan website?",
    answer:
      "Kami menggunakan berbagai teknologi modern untuk pengembangan website, termasuk Next.js, React, Tailwind CSS, dan shadcn/ui untuk frontend. Untuk backend, kami menggunakan Node.js, Express, dan database seperti MongoDB atau PostgreSQL. Stack teknologi kami dipilih untuk memberikan performa tinggi, keamanan, dan skalabilitas. Kami selalu mengikuti praktik terbaik dan standar industri dalam pengembangan web.",
  },
  {
    id: "item-5",
    question: "Bagaimana proses pengembangan proyek di NexGen Solutions?",
    answer:
      "Proses pengembangan kami dimulai dengan tahap discovery untuk memahami kebutuhan Anda. Kemudian, kami membuat rencana proyek dan wireframe/desain. Setelah desain disetujui, kami mulai fase pengembangan dengan update progress secara berkala. Kami melakukan testing menyeluruh sebelum peluncuran, dan setelah peluncuran, kami menyediakan dukungan dan pemeliharaan. Metodologi kami berfokus pada komunikasi yang transparan dan kolaborasi dengan klien di setiap tahap.",
  },
];

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        // Animasi heading
        gsap.from(".faq-title", {
          scrollTrigger: {
            trigger: ".faq-title",
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
        });

        // Animasi deskripsi
        gsap.from(".faq-description", {
          scrollTrigger: {
            trigger: ".faq-description",
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.2,
        });

        // Animasi FAQ items
        gsap.from(".faq-item", {
          scrollTrigger: {
            trigger: ".faq-accordion",
            start: "top 80%",
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-base font-semibold text-nexgen-600 uppercase tracking-wide">
            FAQ
          </p>
          <h2 className="faq-title mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl section-heading">
            Pertanyaan Umum
          </h2>
          <p className="faq-description mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="faq-accordion">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="faq-item bg-white mb-4 rounded-lg shadow-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-medium text-gray-900 hover:text-nexgen-600 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send,
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";

const services = [
  { name: "Website Development", href: "#services" },
  { name: "Mobile App Development", href: "#services" },
  { name: "Custom Software Development", href: "#services" },
  { name: "UI/UX Design", href: "#services" },
  { name: "Web Hosting & Maintenance", href: "#services" },
  { name: "SEO & Digital Marketing", href: "#services" },
];

const links = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Testimoni", href: "#testimonials" },
  { name: "Hubungi Kami", href: "#contact" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: <Facebook className="h-5 w-5" /> },
  { name: "Twitter", href: "#", icon: <Twitter className="h-5 w-5" /> },
  { name: "Instagram", href: "#", icon: <Instagram className="h-5 w-5" /> },
  { name: "LinkedIn", href: "#", icon: <Linkedin className="h-5 w-5" /> },
];

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      {/* Subtle top border */}
      <div className="h-1 w-full bg-white/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <div className="h-10 w-10 bg-white rounded-md flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 to-cyan-500 font-bold text-xl mr-2">
                N
              </div>
              <h3 className="text-xl font-bold text-white">NexGen Solutions</h3>
            </div>
            <p className="mt-4 text-gray-100">
              Menyediakan solusi digital terbaik untuk membantu bisnis Anda berkembang di era digital.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1 mr-3" />
                <p className="text-gray-100 text-sm">
                  Jl. Teknologi No. 123, Kelapa Gading<br />
                  Jakarta Utara, 14240<br />
                  Indonesia
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-3" />
                <p className="text-gray-100 text-sm">+62 21 1234 5678</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-3" />
                <p className="text-gray-100 text-sm">info@nexgensolutions.id</p>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-emerald-400 hover:text-cyan-400 transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Layanan
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500"></span>
            </h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-emerald-400 text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Link Penting
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500"></span>
            </h3>
            <ul className="space-y-2">
              {links.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-emerald-400 text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-300 to-cyan-300"></span>
            </h3>
            <p className="text-gray-100 text-sm mb-4">
              Berlangganan newsletter kami untuk mendapatkan update dan tips terbaru.
            </p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Email Anda"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-r-none focus-visible:ring-white"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-l-none"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2 relative inline-block">
                Jam Operasional
                <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500"></span>
              </h4>
              <div className="flex items-start space-x-3 mt-3">
                <Clock className="h-5 w-5 text-emerald-400 mt-1" />
                <p className="text-gray-100 text-sm">
                  Senin - Jumat: 09:00 - 18:00<br />
                  Sabtu: 09:00 - 14:00<br />
                  Minggu: Tutup
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-100 text-sm">
            &copy; {new Date().getFullYear()} NexGen Solutions. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
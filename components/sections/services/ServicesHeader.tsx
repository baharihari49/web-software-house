import React from 'react';
import { Code } from "lucide-react";

export default function ServicesHeader() {
  return (
    <div className="services-header text-center mb-12">
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-5">
        <Code className="w-4 h-4 mr-2" />
        <span>Our Digital Solutions</span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Solusi Digital <span className="text-gradient-to-br from-purple-600 to-fuchsia-600">Komprehensif</span>
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-gray-600">
        Kami menyediakan berbagai layanan digital terintegrasi untuk memenuhi kebutuhan transformasi digital bisnis Anda, dari pengembangan website hingga strategi pemasaran.
      </p>
    </div>
  );
}
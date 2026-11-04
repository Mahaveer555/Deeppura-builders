import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-20 pb-20">
      
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-slate-50 border-b border-[#E8D8B3] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#C5A46D]/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
              <Lock className="w-3.5 h-3.5 text-sky-600" />
              <span>Legal &amp; Transparency</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#8A6632] tracking-tight leading-tight">
              Privacy <span className="text-sky-600">Policy</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              DEEPPURA GROUP • www.deeppurabuilders.com • Kota, Rajasthan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#F5EEDB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#E8D8B3] shadow-xl space-y-8 text-sm text-slate-600 leading-relaxed">
            
            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#8A6632]">
                1. Introduction
              </h2>
              <p>
                DEEPPURA GROUP ("we," "our," or "us") operates the website <strong className="text-[#8A6632]">www.deeppurabuilders.com</strong>. This Privacy Policy outlines our procedures concerning the collection, storage, and processing of personal details provided when you browse our website, request project details, or schedule site visits for <strong className="text-[#8A6632]">Mukundra Prime</strong> and other developments in Kota, Rajasthan.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#8A6632]">
                2. Information We Collect
              </h2>
              <p>
                When you interact with our enquiry forms or WhatsApp booking links, we may collect the following details:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 pl-2">
                <li>Your Full Name</li>
                <li>Phone / WhatsApp Mobile Number (for callbacks and site visit coordination)</li>
                <li>Email Address</li>
                <li>Interested Apartment Configuration (1 BHK, 2 BHK, 3 BHK, 3 BHK Deluxe)</li>
                <li>Preferred site visit dates and inquiry notes</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#8A6632]">
                3. Purpose of Processing
              </h2>
              <p>
                We use your information strictly for legitimate customer consultation:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600 pl-2">
                <li>Delivering authentic project brochures, verified floor plans, and pricing quotations.</li>
                <li>Addressing questions regarding UIT &amp; RERA approvals and bank loan facilities up to 90%.</li>
                <li>Coordinating on-site inspections at our Raipura, Kota sales desk.</li>
                <li>We maintain a strict confidentiality commitment: <strong className="text-[#8A6632]">we never sell, lease, or monetize your details</strong> with third-party marketing brokers.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#8A6632]">
                4. WhatsApp Direct Communication
              </h2>
              <p>
                Our website utilizes WhatsApp direct messaging to enable prompt customer support. When you submit an enquiry, WhatsApp is initiated on your personal device with an automated structured summary addressed to our verified booking numbers (<a href="tel:7357690111" className="text-amber-800 font-bold hover:text-amber-900">7357690111</a> / <a href="tel:8239999520" className="text-amber-800 font-bold hover:text-amber-900">8239999520</a>). Communication through WhatsApp is governed by WhatsApp's end-to-end security protocols.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#8A6632]">
                5. Contact Us Regarding Your Privacy
              </h2>
              <p>
                For questions regarding this policy or to request removal of your records, please reach out directly:
              </p>
              <div className="p-5 rounded-xl bg-slate-50 border border-[#E8D8B3] space-y-2 text-xs sm:text-sm text-slate-600">
                <div><strong className="text-[#8A6632]">Company:</strong> DEEPPURA GROUP</div>
                <div><strong className="text-[#8A6632]">Founder &amp; Director:</strong> Prakash Jain (Deeppura) (+91 88750 00404)</div>
                <div><strong className="text-[#8A6632]">Official Email:</strong> <a href="mailto:deeppura9@gmail.com" className="text-amber-800 hover:text-amber-900 font-semibold">deeppura9@gmail.com</a></div>
                <div><strong className="text-[#8A6632]">Booking Desk:</strong> +91 7357690111 / +91 8239999520</div>
                <div><strong className="text-[#8A6632]">Corporate Office:</strong> G-1-319 A, IPIA Road No. 6, Anantpura, Kota, Rajasthan</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const primaryPhone = "917357690111";
  const secondaryPhone = "918239999520";

  const quickMessages = [
    { label: "Mukundra Prime: 1, 2 or 3 BHK enquiry", text: "Hello DEEPPURA GROUP, I am interested in Mukundra Prime apartments in Raipura, Kota. Please share pricing and details." },
    { label: "Request Floor Plans & Official Brochure", text: "Hello, please share the official brochure and confirmed floor plans for Mukundra Prime." },
    { label: "Schedule a Site Visit in Raipura", text: "Hello, I would like to schedule a private site visit to Mukundra Prime, Raipura, Kota." },
    { label: "Direct Callback Request", text: "Hello DEEPPURA GROUP, please arrange a callback regarding your residential projects in Kota." },
  ];

  const handleSend = (text: string, phone: string = primaryPhone) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Action Popup */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white border border-[#E5E5E2] rounded-2xl shadow-card overflow-hidden animate-slideUp text-[#30343A]">
          {/* Header */}
          <div className="bg-[#F2F2F0] p-4 border-b border-[#E5E5E2] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F7F3EB] text-[#30343A] border border-[#E8D8B9] flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#CBB58F]" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-[#30343A]">
                  DEEPPURA GROUP
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#555B61] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  <span>Booking Desk Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-[#555B61] hover:text-[#30343A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <p className="text-xs text-[#555B61]">
              Welcome to DEEPPURA GROUP. Select an inquiry option below to chat directly with our team:
            </p>

            <div className="space-y-2">
              {quickMessages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(item.text)}
                  className="w-full text-left p-2.5 rounded-lg bg-[#F2F2F0] hover:bg-[#F7F3EB] border border-[#E5E5E2] text-xs text-[#30343A] hover:text-[#CBB58F] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="line-clamp-1">{item.label}</span>
                  <Send className="w-3.5 h-3.5 text-[#CBB58F] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Direct Number Selection */}
            <div className="pt-3 border-t border-[#E5E5E2] flex items-center justify-between text-[11px] text-[#555B61]">
              <span>Direct Helpline:</span>
              <div className="flex gap-2 font-medium">
                <a href={`tel:${primaryPhone.replace('91','')}`} className="text-[#30343A] hover:text-[#CBB58F] flex items-center gap-1">
                  <PhoneCall className="w-3 h-3 text-[#CBB58F]" /> 7357690111
                </a>
                <span>|</span>
                <a href={`tel:${secondaryPhone.replace('91','')}`} className="text-[#30343A] hover:text-[#CBB58F]">
                  8239999520
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#30343A] hover:bg-[#1f2226] text-[#E8D8B9] hover:text-white shadow-floating hover:scale-105 transition-all duration-300 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 text-[#CBB58F]" />
        <span className="text-xs font-heading font-bold tracking-wide">WhatsApp Us</span>
      </button>
    </div>
  );
};

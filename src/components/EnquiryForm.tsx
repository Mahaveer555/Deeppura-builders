import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Calendar } from 'lucide-react';

interface EnquiryFormProps {
  defaultProject?: string;
  defaultConfig?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultProject = 'Mukundra Prime',
  defaultConfig = '',
  className = '',
  title,
  subtitle,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    interestedIn: defaultConfig || 'Not Decided',
    siteVisitDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const bookingPhone = "917357690111";
    const formattedMessage = 
      `*NEW ENQUIRY - DEEPPURA GROUP WEBSITE*\n` +
      `------------------------------------\n` +
      `*Project:* ${defaultProject}\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Mobile:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Interested In:* ${formData.interestedIn}\n` +
      (formData.siteVisitDate ? `*Preferred Visit Date:* ${formData.siteVisitDate}\n` : '') +
      (formData.message ? `*Message:* ${formData.message}\n` : '') +
      `------------------------------------\n` +
      `Please provide verified floor plans, pricing schedules, and site visit details.`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${bookingPhone}?text=${encoded}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    }, 400);
  };

  return (
    <div className={`p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xl ${className}`}>
      {/* Header */}
      <div className="mb-6 space-y-1.5">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
          Official Sales &amp; Booking Desk
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          {title || "Find Your Ideal Space at Mukundra Prime"}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {subtitle || "Connect with our team for unit availability, verified floor plans, and site visits."}
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
            <CheckCircle2 className="w-7 h-7 text-amber-700" />
          </div>
          <h4 className="text-lg font-black text-slate-900">
            Enquiry Dispatched
          </h4>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Your enquiry has been routed to our booking desk (+91 7357690111). If WhatsApp did not launch automatically, tap below:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setSubmitted(false)}
              className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 text-xs font-semibold cursor-pointer transition-all"
            >
              Send Another Enquiry
            </button>
            <a
              href="tel:7357690111"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 font-black text-xs font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>Call Booking Desk</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Full Name <span className="text-amber-700">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: '' });
              }}
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors ${
                errors.fullName ? 'border-rose-400 bg-rose-50' : 'border-slate-200'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>

          {/* Phone & Email Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Mobile Number <span className="text-amber-700">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-3 text-xs text-slate-500 font-semibold">+91</span>
                <input
                  type="tel"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') });
                    if (errors.phone) setErrors({ ...errors, phone: '' });
                  }}
                  placeholder="10-digit number"
                  className={`w-full pl-12 pr-3 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors ${
                    errors.phone ? 'border-rose-400 bg-rose-50' : 'border-slate-200'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                placeholder="name@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors ${
                  errors.email ? 'border-rose-400 bg-rose-50' : 'border-slate-200'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Configuration & Site Visit Date Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5">
                Interested In
              </label>
              <select
                value={formData.interestedIn}
                onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              >
                <option value="Not Decided">Select Configuration</option>
                <option value="1 BHK Standard">1 BHK Standard</option>
                <option value="1 BHK Deluxe">1 BHK Deluxe</option>
                <option value="2 BHK Standard (701.5 sq. ft.)">2 BHK Standard (701.5 sq. ft.)</option>
                <option value="3 BHK Standard">3 BHK Standard</option>
                <option value="3 BHK Deluxe (960 sq. ft.)">3 BHK Deluxe (960 sq. ft.)</option>
                <option value="Site Visit Booking">Site Visit Consultation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-700" />
                <span>Preferred Visit Date</span>
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.siteVisitDate}
                onChange={(e) => setFormData({ ...formData, siteVisitDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-1.5">
              Your Message or Specific Questions
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your requirements, floor preferences, or site visit queries..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black font-black text-xs uppercase tracking-wider shadow-[0_2px_15px_rgba(197,164,109,0.35)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 hover:-translate-y-0.5 active:translate-y-0"
          >
            {isSubmitting ? (
              <span>Connecting to Sales Desk...</span>
            ) : (
              <>
                <Send className="w-4 h-4 text-slate-950" />
                <span>Enquire via WhatsApp</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-500 text-center pt-1 font-medium">
            Your inquiry connects directly to our verified sales team (+91 7357690111 / 8239999520).
          </p>
        </form>
      )}
    </div>
  );
};

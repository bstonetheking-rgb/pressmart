import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, PhoneCall, Check, Sparkles } from 'lucide-react';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.275-.1-.476-.15-.676.15-.2.3-.776.978-.952 1.178-.175.2-.35.225-.651.075-.3-.15-1.268-.467-2.416-1.491-.893-.798-1.496-1.784-1.671-2.084-.176-.3-.019-.462.132-.612.136-.135.301-.35.451-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.629-.927-2.231-.244-.587-.493-.507-.676-.517l-.576-.01c-.2 0-.526.075-.802.375-.275.3-1.052 1.028-1.052 2.508 0 1.48 1.077 2.908 1.228 3.108.15.2 2.12 3.238 5.136 4.542.717.31 1.278.496 1.715.635.72.229 1.375.197 1.893.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.176-1.429-.076-.125-.276-.2-.576-.35z" />
    <path d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.77.46 3.435 1.263 4.887L2 22l5.244-1.233A9.957 9.957 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.2a8.17 8.17 0 0 1-4.215-1.168l-.302-.18-3.13.736.75-3.047-.197-.315A8.188 8.188 0 0 1 3.804 12c0-4.521 3.679-8.2 8.2-8.2s8.2 3.679 8.2 8.2-3.679 8.2-8.2 8.2z" />
  </svg>
);

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber = '2347086429976',
  defaultMessage = 'Hello Pressmart Real Estate Services, I would like to inquire about your available luxury properties in Nigeria.'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);
  const [hasUnreadBadge, setHasUnreadBadge] = useState(true);

  // Quick suggestion chips tailored to Nigerian luxury real estate
  const quickPrompts = [
    '🏡 Inquire about Banana Island Waterfront Villa',
    '🏢 Schedule a private inspection in Lekki / Ikoyi',
    '📑 Inquire about C of O & Governor’s Consent properties',
    '💎 Speak with an Abuja Luxury Advisor'
  ];

  const handleOpenChat = (customText?: string) => {
    const textToSend = customText || message || defaultMessage;
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (hasUnreadBadge) {
      setHasUnreadBadge(false);
    }
  };

  return (
    <div id="whatsapp-floating-widget" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 font-sans">
      {/* Expanded Chat Box Popup */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-[290px] sm:w-[330px] bg-white rounded-2xl shadow-2xl border border-neutral-200/90 overflow-hidden animate-fadeIn transition-all duration-300">
          {/* Header */}
          <div className="bg-[#0B2545] p-3.5 text-white flex items-center justify-between relative overflow-hidden">
            <div className="flex items-center gap-2.5 relative z-10">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-inner">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0B2545] rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-wide">Pressmart Real Estate</h4>
                <p className="text-[10px] text-neutral-300 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Online • Instant Reply
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer relative z-10"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body & Messages */}
          <div className="p-3 bg-[#EFEAE2]/30 max-h-[300px] overflow-y-auto space-y-2.5">
            {/* Incoming Agent Message Bubble */}
            <div className="flex gap-2 items-end">
              <div className="w-5 h-5 rounded-full bg-[#0B2545] text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                PA
              </div>
              <div className="bg-white p-2.5 rounded-xl rounded-bl-xs shadow-2xs border border-neutral-100 text-[11px] text-neutral-800 leading-relaxed max-w-[88%]">
                <p className="font-semibold text-neutral-900 mb-0.5">Welcome to Pressmart! 👋</p>
                <p>How can we assist you with our luxury properties in Lagos & Abuja?</p>
                <div className="text-[8.5px] text-neutral-400 text-right mt-1 font-mono">
                  +234 708 642 9976
                </div>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1 pt-0.5">
              <p className="text-[9px] font-bold text-neutral-500 uppercase tracking-wider px-1">
                Quick Inquiries
              </p>
              <div className="flex flex-col gap-1">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMessage(prompt);
                      handleOpenChat(prompt);
                    }}
                    className="text-left text-[11px] bg-white hover:bg-emerald-50 text-neutral-700 hover:text-emerald-800 p-2 rounded-lg border border-neutral-200/80 hover:border-emerald-300 transition-all duration-150 flex items-center justify-between group cursor-pointer shadow-2xs"
                  >
                    <span className="truncate pr-1.5">{prompt}</span>
                    <Send className="w-2.5 h-2.5 text-neutral-400 group-hover:text-emerald-600 shrink-0 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Input & Direct Trigger */}
          <div className="p-2.5 bg-white border-t border-neutral-100 space-y-2">
            <div className="relative">
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your inquiry..."
                className="w-full text-xs p-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent resize-none bg-neutral-50"
              />
            </div>

            <button
              onClick={() => handleOpenChat()}
              className="w-full py-2 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-lg shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
              <span>Chat on WhatsApp (+234 708 642 9976)</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button (Small by default, expands smoothly on hover) */}
      <button
        id="whatsapp-trigger-btn"
        onClick={handleToggle}
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20bd5a] text-white h-11 sm:h-12 px-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-3 focus:ring-emerald-400/40"
        aria-label="Chat with Pressmart on WhatsApp at +234 708 642 9976"
      >
        {/* Animated Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping -z-10" />

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0" />

        {/* Text Container: Hidden/collapsed by default, expands smoothly on hover */}
        <div className="max-w-0 opacity-0 group-hover:max-w-[140px] group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-out whitespace-nowrap flex flex-col text-left pl-0 group-hover:pl-2">
          <span className="text-[9px] font-medium leading-none text-emerald-100">Pressmart Desk</span>
          <span className="text-[11px] font-bold leading-tight mt-0.5 tracking-wide">WhatsApp Us</span>
        </div>

        {/* Unread Alert Dot Badge */}
        {hasUnreadBadge && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 text-white text-[9px] font-extrabold rounded-full flex items-center justify-center border-2 border-white shadow-xs">
            1
          </span>
        )}
      </button>
    </div>
  );
};

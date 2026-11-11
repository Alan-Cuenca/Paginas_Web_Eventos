import React, { useState } from 'react';
import { MessageCircle, Phone, X, Sparkles } from 'lucide-react';

export default function ConciergeFloating() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {open && (
        <div className="mb-3 w-80 rounded-3xl bg-white/90 backdrop-blur-xl border border-[#D3CDD9] p-5 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.18)] animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-[#D3CDD9]/40 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2B2338]">
                Concierge Imperial
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full text-[#7A7085] hover:text-[#2B2338] hover:bg-black/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#7A7085] leading-relaxed mb-4">
            Bienvenido a Recepciones & Eventos Imperial. ¿Desea consultar disponibilidad de fecha o coordinar una visita privada a nuestros salones?
          </p>

          <div className="space-y-2">
            <a
              href="https://wa.me/51987654321?text=Hola,%20quisiera%20consultar%20disponibilidad%20para%20un%20evento%20en%20Recepciones%20Imperial."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl bg-[#685A7C] hover:bg-[#554866] text-white text-xs font-medium uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chatear por WhatsApp</span>
            </a>

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full py-2.5 rounded-2xl bg-[#F4F2F7] hover:bg-[#E8E4EC] text-[#2B2338] text-xs font-medium uppercase tracking-wider transition-all duration-300"
            >
              Agendar Cita en Salón
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Pill */}
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_12px_32px_-8px_rgba(104,90,124,0.22)] hover:shadow-[0_16px_36px_-6px_rgba(104,90,124,0.3)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 active:scale-95"
        aria-label="Abrir asistente de concierge"
      >
        <div className="w-8 h-8 rounded-full bg-[#685A7C] text-white flex items-center justify-center shadow-sm">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="text-xs font-medium tracking-wide text-[#2B2338] pr-1 hidden sm:inline">
          Concierge & Citas
        </span>
      </button>
    </div>
  );
}


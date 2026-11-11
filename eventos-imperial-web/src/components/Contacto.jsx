import React, { useState } from 'react';
import { Mail, Phone, Calendar, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: 'Boda de Ensueño',
    fechaAproximada: '',
    invitados: '150-250',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Information (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D3CDD9]/70 shadow-[0_4px_16px_-6px_rgba(104,90,124,0.08)] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#685A7C]" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#685A7C]">
                Atención Personalizada
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#2B2338] tracking-tight mb-6 leading-tight">
              Inicie la Planeación de su Evento
            </h2>

            <p className="text-sm text-[#7A7085] leading-relaxed mb-8">
              Nuestro equipo de dirección y coordinación protocolar le recibirá de manera privada para recorrer las instalaciones, degustar nuestra propuesta gastronómica y estructurar una cotización a la medida de su visión.
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-3xl bg-white border border-[#D3CDD9]/60 shadow-[0_10px_30px_-15px_rgba(104,90,124,0.06)] flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F4F2F7] flex items-center justify-center shrink-0 text-[#685A7C]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2B2338] mb-1">
                    Línea Exclusiva Concierge
                  </h4>
                  <p className="text-sm text-[#7A7085]">+51 (1) 480-9200 / +51 987 654 321</p>
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-white border border-[#D3CDD9]/60 shadow-[0_10px_30px_-15px_rgba(104,90,124,0.06)] flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F4F2F7] flex items-center justify-center shrink-0 text-[#685A7C]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2B2338] mb-1">
                    Correspondencia Directa
                  </h4>
                  <p className="text-sm text-[#7A7085]">reservas@eventosimperial.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Request Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-[#D3CDD9] p-8 sm:p-10 shadow-[0_20px_40px_-15px_rgba(104,90,124,0.08)]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-3xl bg-[#685A7C]/10 text-[#685A7C] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-medium text-[#2B2338] mb-3">
                    Solicitud Recibida con Distinción
                  </h3>
                  <p className="text-sm text-[#7A7085] max-w-md mx-auto leading-relaxed mb-6">
                    Uno de nuestros coordinadores protocolares se comunicará con usted dentro de las próximas 24 horas para agendar su recorrido privado.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-2xl bg-[#685A7C] text-white text-xs uppercase tracking-wider font-medium"
                  >
                    Enviar Otra Consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#D3CDD9]/50 pb-4 mb-6">
                    <h3 className="font-serif text-2xl font-medium text-[#2B2338]">
                      Solicitar Entrevista & Cotización
                    </h3>
                    <p className="text-xs text-[#7A7085] mt-1">
                      Complete sus datos para recibir el catálogo de paquetes y disponibilidad de fecha.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-[#2B2338] mb-1.5">
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Sra. Valeria Morales"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F4F2F7] border border-[#D3CDD9]/80 text-sm text-[#2B2338] placeholder:text-[#7A7085]/60 focus:outline-none focus:border-[#685A7C] focus:bg-white transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-[#2B2338] mb-1.5">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="valeria@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F4F2F7] border border-[#D3CDD9]/80 text-sm text-[#2B2338] placeholder:text-[#7A7085]/60 focus:outline-none focus:border-[#685A7C] focus:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-[#2B2338] mb-1.5">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+51 987 654 321"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F4F2F7] border border-[#D3CDD9]/80 text-sm text-[#2B2338] placeholder:text-[#7A7085]/60 focus:outline-none focus:border-[#685A7C] focus:bg-white transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-[#2B2338] mb-1.5">
                        Tipo de Celebración
                      </label>
                      <select
                        value={formData.tipoEvento}
                        onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F4F2F7] border border-[#D3CDD9]/80 text-sm text-[#2B2338] focus:outline-none focus:border-[#685A7C] focus:bg-white transition-all duration-300"
                      >
                        <option value="Boda de Ensueño">Boda de Ensueño (Oro)</option>
                        <option value="15 Años Diamante">15 Años Diamante</option>
                        <option value="Recepción Corporativa">Recepción Corporativa</option>
                        <option value="Aniversario de Gala">Aniversario de Gala</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-[#2B2338] mb-1.5">
                        Nº Estimado Invitados
                      </label>
                      <select
                        value={formData.invitados}
                        onChange={(e) => setFormData({ ...formData, invitados: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F4F2F7] border border-[#D3CDD9]/80 text-sm text-[#2B2338] focus:outline-none focus:border-[#685A7C] focus:bg-white transition-all duration-300"
                      >
                        <option value="80-150">80 - 150 personas</option>
                        <option value="150-250">150 - 250 personas</option>
                        <option value="250-350">250 - 350 personas</option>
                        <option value="350-450">350 - 450 personas</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-[#2B2338] mb-1.5">
                      Detalles o Deseos Especiales
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describa la visión de su evento, fechas tentativas o requerimientos particulares..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F4F2F7] border border-[#D3CDD9]/80 text-sm text-[#2B2338] placeholder:text-[#7A7085]/60 focus:outline-none focus:border-[#685A7C] focus:bg-white transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#685A7C] hover:bg-[#554866] text-white text-xs font-medium tracking-wider uppercase transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_12px_24px_-8px_rgba(104,90,124,0.35)] hover:shadow-[0_16px_32px_-10px_rgba(104,90,124,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                  >
                    <span>Enviar Solicitud Confidencial</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[#060E32]/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFF9F2] rounded-3xl p-6 sm:p-8 border border-[#EDE3D5] shadow-2xl my-8 max-h-[85vh] overflow-y-auto text-[#060E32]">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#060E32]/5 hover:bg-[#060E32]/10 flex items-center justify-center text-[#060E32] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-4 text-[#1258FA]">
          <Shield size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">Negoxia LLC · Documento Legal</span>
        </div>

        {type === 'privacy' ? (
          <div>
            <h3 className="text-2xl font-black mb-4">Política de Privacidad</h3>
            <div className="text-xs sm:text-sm text-[#4B5578] space-y-3 leading-relaxed">
              <p>
                En <strong>Negoxia LLC</strong> (en adelante, &quot;Negoxia&quot;), accesible desde www.negoxiaautopilot.com, la privacidad de nuestros usuarios es una prioridad absoluta.
              </p>
              <h4 className="font-bold text-[#060E32] text-sm pt-2">1. Información que recopilamos</h4>
              <p>
                Recopilamos información personal que nos proporcionas directamente de forma voluntaria, como tu nombre completo, dirección de correo electrónico y número de teléfono móvil / WhatsApp al completar nuestros formularios de contacto, registro o agendamiento.
              </p>
              <h4 className="font-bold text-[#060E32] text-sm pt-2">2. Uso de la información y Consentimiento para WhatsApp API y SMS</h4>
              <p>
                Al proporcionar tu número de teléfono y correo electrónico, autorizas a Negoxia LLC a contactarte mediante llamadas, correos electrónicos, mensajes de texto (SMS) y mensajes a través de la API oficial de WhatsApp para brindarte información sobre nuestros servicios de automatización y reclutamiento para agencias, recordatorios de citas y soporte técnico. Puedes revocar tu consentimiento en cualquier momento enviando la palabra STOP o comunicándote a support@negoxiaautopilot.com.
              </p>
              <h4 className="font-bold text-[#060E32] text-sm pt-2">3. No divulgación a terceros</h4>
              <p>
                No vendemos, alquilamos ni transferimos tus datos personales a terceros con fines comerciales ni de marketing ajeno a Negoxia LLC. Toda la información es tratada bajo estrictas medidas de seguridad y cifrado.
              </p>
              <h4 className="font-bold text-[#060E32] text-sm pt-2">4. Contacto</h4>
              <p>
                Para cualquier duda respecto a esta política de privacidad, puedes contactarnos en:
                <br />
                <strong>info@negoxiaautopilot.com</strong> | <strong>support@negoxiaautopilot.com</strong>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-black mb-4">Términos y Condiciones de Servicio</h3>
            <div className="text-xs sm:text-sm text-[#4B5578] space-y-3 leading-relaxed">
              <p>
                Bienvenido a <strong>Negoxia LLC</strong>. Al contratar nuestros servicios, acceder a nuestra plataforma o interactuar con nuestros agentes conversacionales de IA, aceptas cumplir con los siguientes términos y condiciones.
              </p>
              <h4 className="font-bold text-[#060E32] text-sm pt-2">1. Naturaleza del Servicio</h4>
              <p>
                Negoxia LLC proporciona soluciones de software, infraestructura de CRM, agentes conversacionales con Inteligencia Artificial, automatización de agendamiento y gestión técnica de campañas publicitarias destinadas al reclutamiento y escalado de agencias de seguros.
              </p>
              <h4 className="font-bold text-[#060E32] text-sm pt-2">2. Términos de Contratación y Pagos</h4>
              <p>
                Salvo que se especifique por escrito lo contrario, los paquetes de servicio (incluido Negoxia Pack Fast Start) contemplan un <strong>contrato mínimo de permanencia de 3 meses</strong>. Todos los pagos realizados por concepto de software, configuración, onboarding y servicios mensuales son <strong>estrictamente no reembolsables</strong>, debido a los costos inmediatos de infraestructura, asignación de servidores y trabajo técnico personalizado.
              </p>
              <h4 className="font-bold text-[#060E32] text-sm pt-2">3. Uso Aceptable y Cumplimiento de Plataforma</h4>
              <p>
                El cliente se compromete a no utilizar las integraciones de mensajería (WhatsApp, Instagram, Messenger o SMS) para enviar spam o contenidos ilícitos, y a respetar en todo momento las normativas de la industria y las políticas de Meta y operadores telefónicos.
              </p>
              <h4 className="font-bold text-[#060E32] text-sm pt-2">4. Descargo de Responsabilidad Comercial</h4>
              <p>
                Todos los números, cifras y métricas mostradas en esta página están desarrollados en base a pruebas y casos de estudio específicos. No garantizamos resultados. No garantizamos ventas ni garantizamos reclutamiento de personal. El éxito final depende de la capacidad de liderazgo, contratación y cierre del cliente.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#EDE3D5] flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="btn-primary px-6 py-2.5 text-xs font-bold cursor-pointer"
          >
            Entendido y Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

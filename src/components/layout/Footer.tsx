import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/029d2656-b096-4c78-8f31-062428a257e0.png" 
                alt="JTM Soluções" 
                className="h-16 mb-4"
              />
              <p className="mt-2 text-slate-300">
                JTM Soluções: sua confiança é a energia que move nossas soluções.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/5519996584233" 
                className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition-colors duration-200" 
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors duration-200">Início</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">Sobre Nós</a>
              <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-200">Serviços</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Entre em Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">ESCRITÓRIO</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+5519996584233" className="text-slate-300 hover:text-white transition-colors duration-200">
                  (19) 99658-4233
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:zezinho.jtm@gmail.com" className="text-slate-300 hover:text-white transition-colors duration-200">
                  zezinho.jtm@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-slate-400 text-sm text-center">
          <p>© {new Date().getFullYear()} JTM Soluções Elétrica e Hidráulica LTDA. Todos os direitos reservados.</p>
          <p className="mt-2">Responsável: José Inácio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

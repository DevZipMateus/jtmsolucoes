
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Open WhatsApp with predefined message
    window.open('https://wa.me/5519996584233?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20JTM%20Soluções.', '_blank');
    
    // Show toast notification
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será conectado com nossa equipe."
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      title: 'Telefone',
      details: '(19) 99658-4233',
      action: 'tel:+5519996584233',
      actionText: 'Contato via Telefone'
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: 'Email',
      details: 'zezinho.jtm@gmail.com',
      action: 'mailto:zezinho.jtm@gmail.com',
      actionText: 'Contato via Email'
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-500" />,
      title: 'Endereço',
      details: 'ESCRITÓRIO',
      action: 'https://maps.app.goo.gl/47q6rf4WqF3vK8fU7',
      actionText: 'Ver no Mapa'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="bg-white py-16">
      <div className="section-container px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Contato
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Entre em Contato Conosco</h2>
          <p className="section-subtitle text-slate-600">
            Estamos prontos para atender às suas necessidades elétricas e hidráulicas. Entre em contato 
            através de um dos nossos canais de atendimento ou nos envie uma mensagem pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* WhatsApp Contact Card */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-full p-8 rounded-xl shadow-lg bg-white border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Fale Conosco</h3>
              <p className="text-slate-600 mb-8">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp com nossa equipe de atendimento.
              </p>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full py-6 text-lg gap-2 bg-green-500 hover:bg-green-600 transition-all duration-300"
              >
                <Send className="h-5 w-5" />
                Conversar no WhatsApp
              </Button>
              
              <div className="mt-8 text-center text-slate-500 text-sm">
                Horário de atendimento: Segunda a Sexta, das 8h às 18h
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="order-1 lg:order-2" 
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start hover:bg-slate-50 p-4 rounded-lg transition-colors duration-200">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-50">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-slate-600">{item.details}</p>
                    <a 
                      href={item.action} 
                      target={item.title === 'Endereço' ? '_blank' : undefined}
                      rel={item.title === 'Endereço' ? 'noopener noreferrer' : undefined}
                      className="mt-2 inline-block text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      {item.actionText}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">JTM Soluções</h4>
              <p className="text-slate-700">
                Fundada em 2016, a JTM Soluções atua no mercado de elétrica e hidráulica, 
                oferecendo serviço de qualidade com foco na satisfação dos nossos clientes. 
                Com uma equipe experiente e qualificada, buscamos ser referência no setor.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

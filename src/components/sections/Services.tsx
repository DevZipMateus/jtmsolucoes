
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Cable, Hammer, Wrench, Droplet, Building2, Home } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const services = [
    {
      icon: <Home className="h-8 w-8 text-blue-500" />,
      title: 'Serviços Residenciais',
      description: 'Instalações elétricas e hidráulicas para residências, manutenção preventiva e corretiva em sistemas elétricos e hidráulicos residenciais.'
    },
    {
      icon: <Building2 className="h-8 w-8 text-blue-500" />,
      title: 'Serviços Prediais',
      description: 'Manutenção e instalação de sistemas elétricos e hidráulicos em edifícios comerciais e condomínios, atendendo às normas técnicas vigentes.'
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-500" />,
      title: 'Serviços Industriais',
      description: 'Soluções elétricas e hidráulicas para indústrias, incluindo manutenção de equipamentos e instalações de sistemas de alta complexidade.'
    },
    {
      icon: <Cable className="h-8 w-8 text-blue-500" />,
      title: 'Elétrica',
      description: 'Instalação e manutenção de redes elétricas, quadros de distribuição, iluminação, tomadas e sistemas de proteção contra sobrecargas.'
    },
    {
      icon: <Droplet className="h-8 w-8 text-blue-500" />,
      title: 'Hidráulica',
      description: 'Instalação e manutenção de encanamentos, sistemas de água quente e fria, detecção e reparo de vazamentos, desentupimentos.'
    },
    {
      icon: <Hammer className="h-8 w-8 text-blue-500" />,
      title: 'Reparos Gerais',
      description: 'Serviços de reparos e manutenção geral, incluindo acabamentos após intervenções elétricas ou hidráulicas.'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="bg-slate-50 py-[23px]">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Nossos Serviços
          </div>
          <h2 className="section-title">Soluções Completas para sua Necessidade</h2>
          <p className="section-subtitle">
            Oferecemos serviços completos de elétrica e hidráulica para residências, prédios e indústrias,
            com profissionais qualificados e comprometidos com a qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-subtle card-hover" 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a href="#contact" className="btn-primary">
            Solicite um Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Wrench } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: 'Missão',
      description:
        'Fornecer soluções elétricas e hidráulicas de alta qualidade, garantindo segurança, eficiência e confiabilidade em todos os projetos que desenvolvemos para nossos clientes.',
    },
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: 'Visão',
      description:
        'Ser reconhecida como referência em soluções elétricas e hidráulicas na região, construindo parcerias duradouras baseadas em confiança, qualidade técnica e excelência no atendimento.',
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-500" />,
      title: 'Valores',
      description:
        'Segurança, qualidade, pontualidade, transparência e compromisso com o cliente são os pilares que orientam todas as nossas ações e projetos.',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-16 bg-white">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Sobre Nós
          </div>
          <h2 className="section-title">Quem Somos</h2>
          <p className="section-subtitle">
            A JTM Soluções Elétrica e Hidráulica é uma empresa especializada em projetos e execução de instalações 
            elétricas e hidráulicas para empreendimentos residenciais e comerciais. Nossa equipe é formada por 
            profissionais experientes e qualificados, comprometidos em entregar soluções técnicas de excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-subtle card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
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

  const ilhaDeMaltaImages = [
    '/images/dji_01741.jpg',
    '/images/dji_01691.jpg',
    '/images/dji_0464.jpg',
    '/images/dji_0534.jpg',
    '/images/dji_0488.jpg',
    '/images/dji_0457.jpg',
    '/images/dji_0491.jpg',
    '/images/dji_0048.jpg',
    '/images/dji_0057.jpg'
  ];

  return (
    <section ref={sectionRef} id="projects" className="bg-slate-50 py-16">
      <div className="section-container px-4 md:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Projetos
          </div>
          <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">Projetos Entregues</h2>
          <p className="section-subtitle text-slate-600">
            Conheça alguns dos principais projetos que desenvolvemos com excelência e qualidade, 
            sempre em parceria com empresas renomadas do setor.
          </p>
        </motion.div>

        {/* Projeto Ilha de Malta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Ilha de Malta</h3>
            <p className="text-slate-600 mb-6">
              Empreendimento residencial completo com instalações elétricas e hidráulicas de alta qualidade.
            </p>
            
            {/* Logos das empresas parceiras */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <img
                  src="/lovable-uploads/097a7f34-6632-412c-b133-978b260d795b.png"
                  alt="JTM Soluções"
                  className="h-12 w-auto object-contain"
                />
                <span className="text-lg font-medium text-slate-700">+</span>
                <img
                  src="/lovable-uploads/2a9e75f0-adc7-4a6b-ad57-73cd83490636.png"
                  alt="Goulart Schio Engenharia"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                Residencial
              </Badge>
              <Badge variant="outline" className="text-slate-700">
                2024
              </Badge>
            </div>
          </div>

          {/* Grid de imagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ilhaDeMaltaImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={image}
                      alt={`Ilha de Malta - Imagem ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outros projetos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-900">Outros Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop"
                  alt="Edifício Comercial Centro"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    Comercial
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-white/90 text-slate-700 border-white/50">
                    2023
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-slate-900">Edifício Comercial Centro</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Projeto de infraestrutura elétrica e hidráulica para complexo comercial moderno.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop"
                  alt="Condomínio Residencial"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    Residencial
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="bg-white/90 text-slate-700 border-white/50">
                    2023
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-slate-900">Condomínio Residencial</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Instalações completas para condomínio de alto padrão com sistemas sustentáveis.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

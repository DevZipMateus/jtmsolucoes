
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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

  const projects = [
    {
      id: 1,
      title: 'Ilha de Malta',
      description: 'Empreendimento residencial completo com instalações elétricas e hidráulicas de alta qualidade.',
      partner: 'Goulart Schio Engenharia',
      partnerLogo: '/lovable-uploads/2a9e75f0-adc7-4a6b-ad57-73cd83490636.png',
      images: [
        '/images/dji_01741.jpg',
        '/images/dji_01691.jpg',
        '/images/dji_0464.jpg',
        '/images/dji_0534.jpg',
        '/images/dji_0488.jpg',
        '/images/dji_0457.jpg',
        '/images/dji_0491.jpg',
        '/images/dji_0048.jpg',
        '/images/dji_0057.jpg'
      ],
      category: 'Residencial',
      year: '2024'
    },
    {
      id: 2,
      title: 'Edifício Comercial Centro',
      description: 'Projeto de infraestrutura elétrica e hidráulica para complexo comercial moderno.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      category: 'Comercial',
      year: '2023'
    },
    {
      id: 3,
      title: 'Condomínio Residencial',
      description: 'Instalações completas para condomínio de alto padrão com sistemas sustentáveis.',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop',
      category: 'Residencial',
      year: '2023'
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  {project.images ? (
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.images.map((image, imageIndex) => (
                          <CarouselItem key={imageIndex}>
                            <img
                              src={image}
                              alt={`${project.title} - Imagem ${imageIndex + 1}`}
                              className="w-full h-48 object-cover"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-700">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-white/90 text-slate-700 border-white/50">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  {project.partner && project.partnerLogo && (
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <img
                        src={project.partnerLogo}
                        alt={project.partner}
                        className="h-8 w-8 object-contain"
                      />
                      <div>
                        <p className="text-xs text-slate-500 mb-1">Em parceria com:</p>
                        <p className="text-sm font-medium text-slate-700">{project.partner}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

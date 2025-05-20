import testimonial1 from '../../assets/img/testimonial1.webp';

export const TagsTestimonials = () => {
  return (
    <section id="testimonial" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Veja o que dizem nossos clientes satisfeitos!
        </h2>
        <p className="text-center mb-12">
          Depoimentos reais que recebemos em nosso Instagram.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4">
            <div className="flex-shrink-0 w-80 bg-background rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <div className="ml-3">
                  <p className="font-medium">João da Silva</p>
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-sm">
                "Comprei a Tag e fiquei impressionado com a qualidade do produto. Super recomendo
                para todos os tutores que se preocupam com a segurança dos seus pets!"
              </p>
            </div>

            <div className="flex-shrink-0 w-80 bg-background rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  MP
                </div>
                <div className="ml-3">
                  <p className="font-medium">Maria Pereira</p>
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-sm">
                "Meu cachorro fugiu semana passada e graças à Tag da Verifica Pet consegui encontrá-lo
                rapidamente quando alguém escaneou o QR code. Sem dúvidas foi o melhor investimento que fiz!"
              </p>
            </div>

            <div className="flex-shrink-0 w-80 bg-background rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  CA
                </div>
                <div className="ml-3">
                  <p className="font-medium">Carlos Almeida</p>
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                </div>
              </div>
              <p className="text-sm">
                "Achei a ideia genial! O sistema de rastreio por WhatsApp funciona muito bem e o
                material da tag é de excelente qualidade. Recomendo para todos os donos de pets."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

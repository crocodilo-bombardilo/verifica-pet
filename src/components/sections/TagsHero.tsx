import bgTop from '../../assets/img/bg-top.webp';
import { Button } from '../Button';
import tagSilver from '../../assets/img/tags/tag-silver.webp';
import tagBlack from '../../assets/img/tags/tag-black.webp';

export const TagsHero = () => {
  return (
    <section
      className="py-16 relative"
      style={{
        backgroundImage: `url(${bgTop})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-2">Nunca mais perca seu Pet de Vista!</p>
          <p className="text-lg mb-6">Compre a Tag de Identificação e Rastreio</p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            E Deixe o Seu Pet Mais Seguro. Caso ele Fuja ou se Perca, Iremos Ajudar ele a Voltar para Casa.
          </h1>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>Qrcode Exclusivo.</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>Perfil Digital com Dados do Pet.</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>Notificações de Rastreio no seu WhatsApp.</span>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            {/* Circle of tags */}
            <div className="relative w-80 h-80">
              {/* Center circle */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img src={tagSilver} alt="Tag Verifica Pet" className="w-20 h-20 object-contain" />
                </div>
              </div>

              {/* Top tag */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0">
                <div className="w-20 h-20 bg-tag-gold rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <span className="text-white font-bold text-xs">Tag Gold</span>
                </div>
              </div>

              {/* Right tag */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <div className="w-20 h-20 bg-tag-silver rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <span className="text-white font-bold text-xs">Tag Silver</span>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0">
                <div className="w-20 h-20 bg-tag-black rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <span className="text-white font-bold text-xs">Tag Black</span>
                </div>
              </div>

              {/* Left tag */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-primary">
                  <span className="text-primary font-bold text-xs">Verifica Pet</span>
                </div>
              </div>

              {/* Circle path - decorative */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-gray-300"></div>
            </div>
          </div>

          <Button
            href="https://seguro.verifica.pet/r/99N92XMNLJ"
            variant="primary"
            size="lg"
            className="uppercase"
          >
            Compre a Tag
          </Button>
        </div>
      </div>
    </section>
  );
};

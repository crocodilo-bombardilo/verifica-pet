import bgTop from '../../assets/img/bg-top.webp';
import slogan from '../../assets/img/slogan.webp';
import starIcon from '../../assets/img/star-icon.svg';
import { Button } from '../Button';

export const Hero = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-2">Nunca mais perca seu Pet de Vista!</p>
            <p className="text-lg mb-6">Compre o Kit Verifica Pet</p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              E Receba Agora no Seu Whatsapp Todos os Documentos do seu Pet em PDF + a Tag de Identificação e Rastreio do seu Pet em PDF
            </h1>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <img src={starIcon} alt="Estrela" className="w-5 h-5" />
                <span>RG Verifica</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={starIcon} alt="Estrela" className="w-5 h-5" />
                <span>Certidão de Nascimento</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={starIcon} alt="Estrela" className="w-5 h-5" />
                <span>Carteira de Vacinação</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={starIcon} alt="Estrela" className="w-5 h-5" />
                <span>Tag de Identificação e Rastreio</span>
              </div>
            </div>

            <Button
              href="https://seguro.verifica.pet/r/NC2BZZKKSV"
              variant="primary"
              size="lg"
              className="uppercase"
            >
              Compre o Kit
            </Button>
          </div>

          <div className="flex justify-center">
            <img src={slogan} alt="Slogan" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

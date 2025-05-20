import starIcon from '../../assets/img/star-icon.svg';
import rgIcon from '../../assets/img/rg-icon.webp';
import birthIcon from '../../assets/img/birth-icon.webp';
import vaccineIcon from '../../assets/img/vaccine-icon.webp';
import tagIcon from '../../assets/img/tag-icon.webp';

export const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          O que você vai ter acesso
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          O Kit Verifica PET vai te dar acesso a emissão de todos os documentos abaixo.
          Ao efetuar a compra, iremos enviar no seu email e whastapp o acesso a sua conta para cadastrar o seu pet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* RG Verifica */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img src={rgIcon} alt="Ícone RG" className="w-16 h-16" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center">RG Verifica</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Agiliza o cadastro em clínicas veterinária.</span>
              </li>
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Personalizada, escolha: verde, azul ou rosa.</span>
              </li>
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Cadastro rápido e intuitivo.</span>
              </li>
            </ul>
          </div>

          {/* Certidão de Nascimento */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img src={birthIcon} alt="Ícone Certidão" className="w-16 h-16" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center">Certidão de Nascimento</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Informações de onde o seu pet nasceu.</span>
              </li>
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Personalizada com foto.</span>
              </li>
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Observações e características do seu pet.</span>
              </li>
            </ul>
          </div>

          {/* Carteira de Vacinação */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img src={vaccineIcon} alt="Ícone Vacinação" className="w-16 h-16" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center">Carteira de Vacinação</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Carteira de vacina personalizada com foto.</span>
              </li>
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Espaço para vacina e vermífugo.</span>
              </li>
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Super organizada.</span>
              </li>
            </ul>
          </div>

          {/* Tag de Identificação */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <img src={tagIcon} alt="Ícone Tag" className="w-16 h-16" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-center">TAG de identificação e Rastreio</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Escaneie com qualquer celular.</span>
              </li>
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Página exclusiva do seu pet.</span>
              </li>
              <li className="flex items-center">
                <img src={starIcon} alt="Estrela" className="w-4 h-4 mr-2" />
                <span>Receba notificação no seu Whatsapp.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

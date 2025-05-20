import { Button } from '../Button';
import phoneScreen from '../../assets/img/tags/mobile-screen.webp';
import handPhone from '../../assets/img/tags/hand-holding-phone.webp';

export const TagsFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-sm font-bold uppercase text-primary mb-2">
                Conheça a nossa tag de identificação de rastreio
              </h2>

              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Ela vai ajudar a proteger o seu pet!
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  A Tag de Identificação e Rastreio da Verifica Pet, com a ajuda da tecnologia,
                  adiciona mais uma camada de cuidado com seu amiguinho.
                </p>
                <p className="mb-4">
                  No verso você encontrará um QR code, que é uma das maneiras mais modernas
                  e convenientes de compartilhar informações, o qual o levará a uma página
                  com todos os dados do pet e dos tutores.
                </p>
                <p className="mb-6">
                  Além de tudo isso, enviamos em seu whatsapp onde o QRCode foi escaneado
                  dando a possibilidade de encontra-lo mais rapidamente!
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Leve e elegante.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Aço Inox, não enferruja!</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <img src={handPhone} alt="Demonstração da tag" className="max-w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background rounded-lg p-8">
              <h2 className="text-sm font-bold uppercase text-gray-500 mb-4">
                Identidade online
              </h2>

              <h3 className="text-2xl font-bold mb-6">
                Seu pet irá ter um perfil digital
              </h3>

              <p className="mb-6">
                Todas as informações em um só lugar, qualquer pessoa que leia o Qrcode da Tag
                de Identificação e Rastreio da Verifica Pet será enviada para o Perfil Digital
                do seu pet, lá vai conter todas as informações do seu pet e do seu tutor.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Altere quando quiser.</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Sem nenhum custo!</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <img src={phoneScreen} alt="Perfil digital do pet" className="max-w-xs h-auto" />
              </div>
            </div>

            <div className="bg-background rounded-lg p-8">
              <h2 className="text-sm font-bold uppercase text-gray-500 mb-4">
                Segurança e tecnologia
              </h2>

              <h3 className="text-2xl font-bold mb-6">
                Saiba a localização quando escanearem
              </h3>

              <p className="mb-6">
                Quando o botão "Avise que fui encontrado" for pressionado, os seus dados de contato
                serão mostrados para a pessoa que achou o seu pet, e será automaticamente enviada
                uma mensagem em seu WhatsApp com o link da localização aproximada do seu pet.
                No caso, o local de onde a Tag de Identificação e Rastreio Verifica Pet foi escaneada.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Saiba quando encontrarem.</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Receba no seu WhatsApp!</span>
                </div>
              </div>

              <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10c0 4.42-3.58 8-8 8a8 8 0 01-8-8c0-4.42 3.58-8 8-8 4.42 0 8 3.58 8 8zm-1.5 0a6.5 6.5 0 10-13 0 6.5 6.5 0 0013 0zM10 9.75a.75.75 0 00-.75.75v2c0 .414.336.75.75.75h2a.75.75 0 000-1.5H10.75v-1.25a.75.75 0 00-.75-.75zm-.25-2.75a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-green-800 mb-1">Seu pet foi encontrado!</p>
                    <p className="text-xs text-green-700">
                      Acabamos de enviar uma mensagem no seu WhatsApp com a localização aproximada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

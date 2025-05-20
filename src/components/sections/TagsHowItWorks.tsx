import pet1 from '../../assets/img/pet1.webp';
import pet2 from '../../assets/img/pet2.webp';

export const TagsHowItWorks = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Veja como é simples!
          </h2>
          <p className="mb-12 text-gray-600">
            Apenas 3 passos para começar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Cadastre seu Pet na Verifica Pet!
            </h3>
            <p className="text-gray-600">
              Crie um perfil online do seu pet.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">
              E se ele se perder ou fugir?
            </h3>
            <p className="text-gray-600">
              Com nossa Tag de Identificação e Rastreio quem o encontrar terá todos os dados do seu pet, incluindo o seu contato.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Vamos lhe ajudar a recupera-lo!
            </h3>
            <p className="text-gray-600">
              Enviaremos a localização de onde o QRCode foi escaneado.
            </p>
          </div>
        </div>

        {/* Pet examples */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Veja o que dizem nossos clientes satisfeitos!
            </h2>
            <p className="text-gray-600">
              Depoimentos reais que recebemos em nosso Instagram.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    AZ
                  </div>
                  <div>
                    <p className="font-medium">Ana Zampieri</p>
                    <div className="flex text-yellow-400 text-sm">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "Comprei a Tag para meu cachorro e fiquei super satisfeita! O material é de ótima qualidade e o processo foi muito simples."
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    JS
                  </div>
                  <div>
                    <p className="font-medium">João Silva</p>
                    <div className="flex text-yellow-400 text-sm">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "Meu gato fugiu e graças à Tag consegui encontrá-lo rapidamente! Recomendo para todos que amam seus pets."
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    MC
                  </div>
                  <div>
                    <p className="font-medium">Maria Costa</p>
                    <div className="flex text-yellow-400 text-sm">
                      <span>★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  "Sistema muito prático! Ótimo custo-benefício considerando a segurança que oferece para meu pet."
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

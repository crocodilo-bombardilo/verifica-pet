import pet1 from '../../assets/img/pet1.webp';
import pet2 from '../../assets/img/pet2.webp';

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Conheça alguns pets já verificados!
          </h2>
          <div className="flex overflow-x-auto py-4 gap-4 -mx-4 px-4">
            <img
              src={pet1}
              alt="Pet verificado"
              className="w-36 h-36 object-cover rounded-lg flex-shrink-0"
            />
            <img
              src={pet2}
              alt="Pet verificado"
              className="w-36 h-36 object-cover rounded-lg flex-shrink-0"
            />
            <div className="w-36 h-36 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">Seu Pet Aqui</span>
            </div>
            <div className="w-36 h-36 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">+</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Veja como é simples!
        </h2>
        <p className="text-center mb-12">
          Após efetuar a compra do Kit Verifica Pet, você vai fazer os 3 passos abaixo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg p-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Cadastre seu Pet</h3>
            <p className="text-center">
              Após efetuar a compra do Kit Verifica Pet você vai receber na hora em seu email e whatsapp
              seus dados de acesso para cadastrar o seu pet.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Solicite os Documentos</h3>
            <p className="text-center">
              Depois de cadastrar o seu pet, você vai solicitar os documentos.
              Sempre que precisar de uma segunda via ou corrigir alguma informação é só acessar o painel do pet!
            </p>
          </div>

          <div className="bg-background rounded-lg p-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-primary font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-4">Receba os Documentos no Whatsapp</h3>
            <p className="text-center">
              Você pode fazer o download ou te-los em seu whatsapp, a escolha é sua.
              Faça os documentos e receba tudo em menos de 1 minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

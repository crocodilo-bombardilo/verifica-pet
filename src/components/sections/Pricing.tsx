import starIcon from '../../assets/img/star-icon.svg';
import { Button } from '../Button';

export const Pricing = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Compre o Kit Verifica Pet
        </h2>
        <p className="text-center mb-12">
          E receba no seu Whatsapp e Email o seu acesso para cadastrar o seu pet.
        </p>

        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-center uppercase mb-4">
              Kit de Documentos
            </h3>

            <ul className="mb-6 space-y-2">
              <li className="flex items-center text-primary">
                <div className="mr-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                RG Verifica
              </li>
              <li className="flex items-center text-primary">
                <div className="mr-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Certidão de Nascimento
              </li>
              <li className="flex items-center text-primary">
                <div className="mr-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Carteira de Vacinação
              </li>
              <li className="flex items-center text-primary">
                <div className="mr-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                TAG de identificação e Rastreio
              </li>
            </ul>

            <div className="bg-background p-4 mb-6 text-center rounded">
              <p className="text-sm mb-1">Após o pagamento você receberá um link para cadastrar seu pet</p>
              <p className="font-bold text-red-500 mb-1">SOMENTE HOJE!</p>
              <p className="text-sm line-through mb-1">R$ 87,00</p>
              <p className="text-2xl font-bold text-primary">R$ 10,00</p>
            </div>

            <Button
              href="https://seguro.verifica.pet/r/NC2BZZKKSV"
              fullWidth
              className="uppercase"
            >
              Comprar Agora!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

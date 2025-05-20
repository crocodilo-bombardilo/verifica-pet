import { Button } from '../Button';

export const TagsPricing = () => {
  const pricingOptions = [
    {
      title: 'Tag de Identificação e Rastreio',
      material: 'Alumínio Prata',
      features: [
        'Cadastre o seu Pet após sua Compra',
        'Qrcode Exclusivo do seu Pet',
        'Perfil Digital do seu Pet',
        'Notificação de Rastreio no Whatsapp',
        'Pagamento único e Acesso Vitalício'
      ],
      originalPrice: 'R$ 69,00',
      currentPrice: 'R$ 29,00',
      remainingUnits: 4,
      link: 'https://seguro.verifica.pet/r/99N92XMNLJ',
      available: true
    },
    {
      title: 'Tag de Identificação e Rastreio',
      material: 'Alumínio Preta',
      features: [
        'Cadastre o seu Pet após sua Compra',
        'Qrcode Exclusivo do seu Pet',
        'Perfil Digital do seu Pet',
        'Notificação de Rastreio no Whatsapp',
        'Pagamento único e Acesso Vitalício'
      ],
      originalPrice: 'R$ 69,00',
      currentPrice: 'R$ 29,00',
      remainingUnits: 5,
      link: 'https://seguro.verifica.pet/r/LVFXK5XXIT',
      available: true
    },
    {
      title: 'Tag de Identificação e Rastreio',
      material: 'Inox Prata',
      features: [
        'Cadastre o seu Pet após sua Compra',
        'Qrcode Exclusivo do seu Pet',
        'Perfil Digital do seu Pet',
        'Notificação de Rastreio no Whatsapp',
        'Pagamento único e Acesso Vitalício'
      ],
      originalPrice: 'R$ 89,00',
      currentPrice: 'R$ 49,00',
      remainingUnits: 4,
      link: 'https://seguro.verifica.pet/r/4DNTA00UEF',
      available: true
    },
    {
      title: 'Tag de Identificação e Rastreio',
      material: 'Inox Dourada',
      features: [
        'Cadastre o seu Pet após sua Compra',
        'Qrcode Exclusivo do seu Pet',
        'Perfil Digital do seu Pet',
        'Notificação de Rastreio no Whatsapp',
        'Pagamento único e Acesso Vitalício'
      ],
      originalPrice: '',
      currentPrice: '',
      remainingUnits: 0,
      link: '#',
      available: false
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Escolha a melhor opção para você
        </h2>
        <p className="text-center mb-12">
          Ao efetuar a compra da sua Tag de Identificação e Rastreio Verifica Pet,
          iremos enviar no seu email e whastapp o acesso a sua conta para cadastrar o seu pet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">
                  {option.title}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {option.material}
                </p>

                <ul className="mb-6 space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="mr-2 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {option.available ? (
                  <>
                    <div className="bg-primary/10 p-3 mb-4 text-center rounded">
                      <p className="font-bold text-red-500 mb-1">SOMENTE HOJE!</p>
                      <p className="text-sm line-through mb-1">DE {option.originalPrice}</p>
                      <p className="text-sm font-bold mb-1">POR APENAS</p>
                      <p className="text-xl font-bold text-primary">{option.currentPrice}</p>
                      <p className="text-xs text-gray-500">RESTAM APENAS {option.remainingUnits} UNIDADES</p>
                    </div>

                    <Button
                      href={option.link}
                      fullWidth
                      className="uppercase"
                    >
                      Comprar Agora!
                    </Button>
                  </>
                ) : (
                  <div className="bg-gray-100 p-3 text-center">
                    <p className="font-medium text-gray-500">NOVAS UNIDADES EM BREVE</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

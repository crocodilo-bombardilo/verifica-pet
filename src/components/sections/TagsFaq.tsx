import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleFaq: () => void;
}

const FaqItem = ({ question, answer, isOpen, toggleFaq }: FaqItemProps) => {
  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-sm text-left"
        onClick={toggleFaq}
      >
        <h3 className="font-semibold text-lg">{question}</h3>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isOpen && (
        <div className="bg-white p-4 mt-1 rounded-lg shadow-sm">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export const TagsFaq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: '1. O Processo de compra é seguro?',
      answer:
        'O processo de compra é 100% seguro e automatico, ao concluir, você vai receber no seu whatsapp e no seu email o acesso para cadastrar o seu pet e aos demais produtos adquiridos em nosso site verifica.pet.',
    },
    {
      question: '2. Em quanto tempo recebo a Tag de Identificação e Rastreio na minha casa?',
      answer:
        'O prazo médio de entrega é de até 12 dias úteis para qualquer região do Brasil. Em 90% dos casos a entrega é realizada antes de 7 dias. Lembrando que o produto só é produzido e enviado após a confirmação do seu pagamento pela administradora do seu cartão de crédito ou após a confirmação de pagamento via pix.',
    },
    {
      question: '3. Como funciona a Tag de Identificação e Rastreio do meu pet?',
      answer:
        'Nossa Tag de Identificação e Rastreio é mais uma forma de proteger o seu pet! Ele terá uma página exclusiva em nosso site, acessivel através do QrCode na parte de trás da Tag, ao ler com um dispositivo móvel/celular será apresentado os dados dele e informações para contato dos tutores. Será enviado também para o seu celular a localização (caso autorizada) de onde foi feito o scaneamento do QR Code do seu pet.',
    },
    {
      question: '4. Quando alguém encontrar o meu pet, é preciso ter algum aplicativo instalado?',
      answer:
        'Qualquer pessoa que apontar a câmera do seu celular para o QRcode da Tag Verifica Pet terá acesso ao perfil online do seu pet sem a necessidade de baixar qualquer aplicativo. O perfil online não tem nenhum requisito para ser visualizado.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Tem alguma dúvida?
        </h2>
        <p className="text-center mb-12">
          Consulte nossa sessão de perguntas e respostas
        </p>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              toggleFaq={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

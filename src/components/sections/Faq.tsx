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

export const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: '1. O Processo de compra é seguro?',
      answer:
        'O processo de compra é realizado por Yampi Pay e Pagar.me S.A, duas das maiores empresas de pagamento online do Brasil.',
    },
    {
      question: '2. Quais papeis recomendados para imprimir os documentos?',
      answer:
        'Os documentos podem ser impressos sem nenhum problema em folhas A4 normais, basta preencher os dados e imprimir tudo com a maior facilidade em uma impressora tradicional.',
    },
    {
      question: '3. Quando terei acesso aos documentos do meu pet?',
      answer:
        'Imediatamente após a confirmação do pagamento. Então todos os dados para acesso ao painel de controle será enviado para o seu email.',
    },
    {
      question: '4. Os documentos do meu pet tem valor legal no Brasil?',
      answer:
        'Não, os documentos RG e Certidão de Nascimento não tem valor legal de nenhuma natureza. Foram produzido para proporcionar facilidade no seu dia a dia em Clinicas veterinárias e entre outros locais na hora de fornecer os dados para uma ficha de cadastro.',
    },
    {
      question: '5. Como vocês enviam os documentos do meu pet?',
      answer:
        'Os documentos ficam disponíveis na sua conta do site. Nós não enviamos os documentos pelo simples motivo em que ensinamos todo passo a passo completo para você mesmo preencher os dados, imprimir e deixa-lo pronto para o uso.',
    },
    {
      question: '6. Como funciona a Tag de identificação e Rastreio do meu pet?',
      answer:
        'Após cadastrar seu pet no sistema da Verifica.Pet você receberá modelos de Tags em varios tamanhos com um QRCode para cortar e colocar na coleira do seu pet. Oferecemos também uma versão física que você pode consultar no menu TAGS no topo do nosso site. Ao escanear por algum celular, será direcionado para uma página contendo todas as informações e contato dos tutores. Será enviado também para o seu celular a localização (caso autorizada) de onde foi feito o scam do QRCode do seu pet.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Tire suas dúvidas!
        </h2>

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

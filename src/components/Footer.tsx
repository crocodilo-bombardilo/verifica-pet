import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.webp';
import facebookIcon from '../assets/img/social/facebook.svg';
import instagramIcon from '../assets/img/social/instagram.svg';

export const Footer = () => {
  return (
    <footer className="bg-background-dark text-white pt-0">
      <div
        className="relative pt-16 pb-6 bg-background-dark"
      >
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <img src={logo} alt="Verifica Pet Logo" className="h-16 mb-4" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-base mb-4">
                Nunca mais perca o seu Pet de Vista. Verifique já o seu Pet!
              </p>
              <div className="flex justify-center md:justify-end gap-4">
                <a href="https://www.facebook.com/verifica.pet" target="_blank" rel="noopener noreferrer">
                  <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/verifica.pet/" target="_blank" rel="noopener noreferrer">
                  <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Termo de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Acessos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Kit Verifica Pet
                  </a>
                </li>
                <li>
                  <a href="#testimonial" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Dúvidas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:contato@verifica.pet" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Email: contato@verifica.pet
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send/?phone=5517996236963" className="text-sm text-gray-300 hover:text-primary transition-colors">
                    Whatsapp: (17) 99623-6963
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">Copyright Verifica Pet.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

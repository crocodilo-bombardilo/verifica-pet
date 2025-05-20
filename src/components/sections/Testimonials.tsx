import testimonial1 from '../../assets/img/testimonial1.webp';
import testimonial2 from '../../assets/img/testimonial2.webp';

export const Testimonials = () => {
  return (
    <section id="testimonial" className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Veja o que dizem nossos clientes satisfeitos!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <img
              src={testimonial1}
              alt="Depoimento"
              className="w-full h-auto rounded-lg mb-4"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <img
              src={testimonial2}
              alt="Depoimento"
              className="w-full h-auto rounded-lg mb-4"
            />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold">
                MJ
              </div>
              <div className="ml-4">
                <p className="font-semibold">Maria Joaquina</p>
                <p className="text-sm text-gray-500">Cliente Verifica Pet</p>
              </div>
            </div>
            <p className="mb-4">
              Comprei o kit completo para o meu pet e fiquei impressionada com a qualidade dos documentos.
              Recomendo a todos os tutores de pets!
            </p>
            <div className="mt-auto flex">
              <span className="text-yellow-500">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

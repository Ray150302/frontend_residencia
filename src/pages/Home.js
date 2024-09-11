import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importa los módulos de Swiper
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div>
      {/* Contenido de la página de inicio */}
      <div className="w-full max-w-6xl mx-auto mt-10">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://visionred.live/wp-content/uploads/2023/10/395411968_753458630128373_1930817042722676247_n-750x375.jpg"
              alt="Imagen 1"
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.mexicodesconocido.com.mx/sites/default/files/styles/adaptive/public/nodes/326/La-Sierra-Norte-y-su-magia-Puebla.jpg"
              alt="Imagen 2"
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.mexicodesconocido.com.mx/sites/default/files/styles/adaptive/public/nodes/2433/calle-cuetzalan.jpg"
              alt="Imagen 3"
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.elsoldepuebla.com.mx/cultura/1zhso0-centro-de-chignahuapan.-foto-pixabay/alternates/FREE_640/Centro%20de%20Chignahuapan.%20Foto:%20Pixabay"
              alt="Imagen 4"
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://mxcity.mx/wp-content/uploads/2020/08/sierra-norte-de-puebla4-1024x525.jpg"
              alt="Imagen 5"
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
          {/* Puedes añadir más imágenes */}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;

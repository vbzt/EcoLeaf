import styles from './Testimonials.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import img1 from '../../../assets/images/depoimentos/img-1.jpg'
import img2 from '../../../assets/images/depoimentos/img-2.jpg'
import img3 from '../../../assets/images/depoimentos/img-3.jpg'
import img4 from '../../../assets/images/depoimentos/img-4.jpeg'
import img5 from '../../../assets/images/depoimentos/img-5.jpg'

const testimonials = [
  { imgSrc: img1, name: 'Carlos Almeida', text: '"Instalar o sistema de coleta de chuva com a EcoLeaf foi a melhor decisão. Estou economizando na conta de água a cada mês!"' },
  { imgSrc: img2, name: 'Fernanda Silva', text: '"A EcoLeaf não só instalou meu sistema de coleta de água da chuva, mas também me ensinou a usá-lo. Maravilhoso!"' },
  { imgSrc: img3, name: 'Roberta Mendes', text: '"Os profissionais da EcoLeaf foram super atenciosos. O sistema de recomendação de plantas mudou meu jardim!"' },
  { imgSrc: img4, name: 'Lucas Pereira', text: '"A manutenção do sistema de coleta de água foi rápida e eficiente. A EcoLeaf realmente se preocupa com seus clientes!"' },
  { imgSrc: img5, name: 'Mariana Costa', text: '"Recomendo a EcoLeaf para todos! A Inteligência Artificial me recomendou uma planta perfeita, minha casa esta cada vez mais cheia de plantas!"' },
]

const Testimonials = () => {
  return (
    <section className={styles.sectionTestimonials}>
      <p className={`${styles.textLarge} text-center`} id="a-1">Depoimentos</p>
      <div className="d-flex justify-content-center">
        <span className={styles.linha}></span>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={25}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        className={styles.slideContainer}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className= {`card ${styles.card}`}>
            <div className={styles.imageContent}>
              <span className={styles.overlay}></span>
              <div className={styles.cardImage}>
                <img src={testimonial.imgSrc} alt={`imagem de ${testimonial.name}`} className={styles.cardImg} />
              </div>
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.name}>{testimonial.name}</h2>
              <p className={styles.description}>{testimonial.text}</p>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials

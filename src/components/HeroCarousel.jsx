import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';

function HeroCarousel() {
    const cards = [
        { id: 1, title: 'Teknik Informatika', image: '/images/card-1.png' },
        { id: 2, title: 'Manajemen', image: '/images/card-2.png' },
        { id: 3, title: 'Desain Produk', image: '/images/card-3.png' },
        { id: 4, title: 'Hukum', image: '/images/card-4.png' },
        { id: 4, title: 'Komunikasi', image: '/images/card-5.png' },
    ];

    return (
        <section id="hero" className="relative flex items-center justify-center z-0">
            <div className="absolute top-0 left-0 w-full h-40 z-10"></div>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="4"
                pagination={{ clickable: true }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -20,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="w-full"
            >
                {cards.map(card => (
                    <SwiperSlide key={card.id} className="rounded-2xl overflow-hidden">
                        <div className="relative rounded-2xl overflow-hidden">
                            <img src={card.image} alt={card.title} className="w-full h-72 object-cover rounded-2xl" />

                            {/* Overlay hitam transparan hanya di belakang teks */}
                            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white p-4 rounded-2xl">
                                <h3 className="text-lg font-bold">{card.title}</h3>
                                <p className="text-sm">Program studi favorit pilihanmu.</p>
                            </div>
                        </div>
                    </SwiperSlide>


                ))}
            </Swiper>
        </section>
    )
}

export default HeroCarousel;
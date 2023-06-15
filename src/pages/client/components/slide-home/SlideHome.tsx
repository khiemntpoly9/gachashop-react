import { Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import banner1 from '../../../../assets/images/banner1.png';
import banner2 from '../../../../assets/images/banner2.png';
import banner3 from '../../../../assets/images/banner3.png';
import banner4 from '../../../../assets/images/banner4.png';
import './SlideHome.scss';

const SlideHome = () => {
	return (
		<div>
			<Swiper
				modules={[Navigation, EffectFade, Autoplay, Pagination, Scrollbar, A11y]}
				navigation
				effect={'fade'}
				speed={2000}
				slidesPerView={1}
				autoplay={{ delay: 2000 }}
				// pagination={{clickable: true}}
				spaceBetween={20}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				// onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
				loop
				className='myswiper'
			>
				<SwiperSlide className='slideimg'>
					<img src={banner1} alt='banner' />
				</SwiperSlide>
				<SwiperSlide className='slideimg'>
					<img src={banner2} alt='banner' />
				</SwiperSlide>
				<SwiperSlide className='slideimg'>
					<img src={banner3} alt='banner' />
				</SwiperSlide>
				<SwiperSlide className='slideimg'>
					<img src={banner4} alt='banner' />
				</SwiperSlide>
				{/* {photo.map((photo) => (
      <SwiperSlide className='imgtest'>
        <div className='divtest card rounded-3'>
          <img className='rounded-3' src={`images/${photo.toString()}`} alt='banner' key={} />
          <div>
            <p className='text-uppercase fw-bolder text-center'>testing</p>
          </div>
        </div>
      </SwiperSlide>
    ))} */}
			</Swiper>
		</div>
	);
};

export default SlideHome;

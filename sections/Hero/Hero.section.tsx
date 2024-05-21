import { FC } from "react";
import cn from "classnames";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HeroProps } from "./Hero.props";

import { Remainder } from "@/components";
import { Button, Container } from "@/ui";

import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./Hero.module.scss";

export const Hero: FC<HeroProps> = ({ className, ...props }) => {
  return (
    <section className={cn(styles.hero, className)} {...props}>
      <Container className={cn(styles.hero__container)}>
        <p className={styles.hero__subtitle}>Plaça de Willy Brandt, 11-14, 08019 Barcelona, Spain</p>

        <div className={styles.hero__title}>
          <div className={styles.hero__title__background}>SEMINAR</div>

          <h1 className={styles.hero__title__text}>
            <span>Education</span>
            <strong>seminar</strong>
          </h1>
        </div>

        <p className={cn(styles.hero__description)}>
          {`Looking to expand your knowledge in Spain? Join our education seminar featuring expert speakers and engaging topics. Don't miss out, register today!`}
        </p>

        <div className={cn(styles.hero__buttons)}>
          <Button className={cn(styles.hero__button)} variant="outlined">
            Details
          </Button>
          <Button className={cn(styles.hero__button)} variant="outlined">
            Sign up
          </Button>
        </div>
      </Container>

      <Remainder className={cn(styles.hero__remainder)} />

      <Swiper
        className={styles.hero__swiper}
        effect={"fade"}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay, EffectFade]}
        loop
      >
        <SwiperSlide
          className={cn(styles.hero__slide)}
          style={{
            backgroundImage: `url(${"https://apmath.nuu.uz/v1/uploads/2024-05-06/speaker-photos-3-1920x1100.webp-1714955883336-920142333.webp"})`,
          }}
        />
        <SwiperSlide
          className={cn(styles.hero__slide)}
          style={{
            backgroundImage: `url(${"https://apmath.nuu.uz/v1/uploads/2024-05-06/speaker-photos-5-1920x1100.webp-1714956008578-860892695.webp"})`,
          }}
        />
      </Swiper>
    </section>
  );
};

import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/max.jpg'
          alt='An image of the school emblem'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, We are the BPS Robotics Group</h1>
      <p>
        We have decided to blog about how painting can alliviate bullying
      </p>
    </section>
  );
}

export default Hero;

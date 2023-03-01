import React from 'react'
import imagehero from '../assets/images/desktop/imagehero.jpg';
import imageherom from '../assets/images/mobile/imageherom.jpg';

function Hero() {
  return (
    <div>
        <section class="relative py-24 overflow-hidden bg-black sm:py-18 lg:py-32 xl:py-36">
            <div class="absolute inset-0">
                <img class="object-cover md:hidden w-full h-full md:object-left md:scale-150 md:origin-top-left" src={imageherom} alt="" />
                <img class="object-cover hidden md:block w-full h-full md:object-left md:scale-150 md:origin-top-left" src={imagehero} alt="" />
            </div>

            <div class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

            <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

            <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-xl grid justify-items-center sm:justify-start">
                <div class=" w-[16rem] md:w-[24rem] lg:w-[26rem] md:text-left border-solid border-2 border-white ">
                    <h1 class="m-4 text-4xl md:text-6xl font-normal text-white">
                    IMMERSIVE <br/> EXPERIENCES <br/> THAT DELIVER
                    </h1>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Hero

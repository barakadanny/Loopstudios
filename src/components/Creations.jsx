import React from 'react'
import imagecuriosity from '../assets/images/desktop/imagecuriosity.jpg';
import imagesoccerteam from '../assets/images/desktop/imagesoccerteam.jpg';
import imagepocketborealis from '../assets/images/desktop/imagepocketborealis.jpg';
import imagenightarcade from '../assets/images/desktop/imagenightarcade.jpg';
import imagefromabove from '../assets/images/desktop/imagefromabove.jpg';
import imagefisheye from '../assets/images/desktop/imagefisheye.jpg';
import imagedeepearth from '../assets/images/desktop/imagedeepearth.jpg';
import imagegrid from '../assets/images/desktop/imagegrid.jpg';

function Creations() {
  return (
    <div>
      <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-xl">
        <div class="">
            <h2 class="text-xl font-thin tracking-wider leading-tight text-black sm:text-4xl lg:leading-tight">OUR CREATIONS</h2>
        </div>

        <div class="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-4 md:mt-16 lg:gap-x-4">
            <div className='relative'>
                <img class="h-[12rem] object-cover md:h-full w-full" src={imagedeepearth} alt="" />
                <div class="absolute inset-0 bg-gradient-to-t md:block from-neutral-900 to-transparent"></div>
                <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <h3 className='text-white text-xl text-left'>DEEP <br/> EARTH</h3>
                </div>
            </div>
            <div className='relative'>
                <img class="h-[12rem] object-cover md:h-full w-full" src={imagenightarcade} alt="" />
                <div class="absolute inset-0 bg-gradient-to-t md:block from-neutral-900 to-transparent"></div>
                <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <h3 className='text-white text-xl text-left'>NIGHT<br/> ARCADE</h3>
                </div>
            </div>
            <div className='relative'>
                <img class="h-[12rem] object-cover md:h-full w-full" src={imagesoccerteam} alt="" />
                <div class="absolute inset-0 bg-gradient-to-t md:block from-neutral-900 to-transparent"></div>
                <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <h3 className='text-white text-xl text-left'>SOCCER <br/> TEAM VR</h3>
                </div>
            </div>
            <div className='relative'>
                <img class="h-[12rem] object-cover md:h-full w-full" src={imagegrid} alt="" />
                <div class="absolute inset-0 bg-gradient-to-t md:block from-neutral-900 to-transparent"></div>
                <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <h3 className='text-white text-xl text-left'>THE <br/> GRID</h3>
                </div>
            </div>
            <div className='relative'>
                <img class="h-[12rem] object-cover md:h-full w-full" src={imagefromabove} alt="" />
                <div class="absolute inset-0 bg-gradient-to-t md:block from-neutral-900 to-transparent"></div>
                <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <h3 className='text-white text-xl text-left'>FROM UP <br/> ABOVE VR</h3>
                </div>
            </div>
            <div className='relative'>
                <img class="h-[12rem] object-cover md:h-full w-full" src={imagepocketborealis} alt="" />
                <div class="absolute inset-0 bg-gradient-to-t md:block from-neutral-900 to-transparent"></div>
                <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <h3 className='text-white text-xl text-left'>POCKET <br/> BOREALIS</h3>
                </div>
            </div>
            <div className='relative'>
                <img class="h-[12rem] object-cover md:h-full w-full" src={imagecuriosity} alt="" />
                <div class="absolute inset-0 bg-gradient-to-t md:block from-neutral-900 to-transparent"></div>
                <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <h3 className='text-white text-xl text-left'>THE <br/> CURIOSITY</h3>
                </div>
            </div>
            <div className='relative'>
                <img class="h-[12rem] object-cover md:h-full w-full" src={imagefisheye} alt="" />
                <div class="absolute inset-0 bg-gradient-to-t md:block from-neutral-900 to-transparent"></div>
                <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <h3 className='text-white text-xl text-left'>MAKE IT <br/> FISHEYE</h3>
                </div>
            </div>
        </div>

        <div class="mt-8 text-center md:mt-16">
            <a href="#" title="" class="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700" role="button"> Join our team </a>
        </div>
    </div>
</section>

    </div>
  )
}

export default Creations

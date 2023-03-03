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
<section class="pt-0 pb-10 bg-white sm:pt-0 lg:pt-0">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-xl">
        <div class="flex justify-center lg:justify-between">
            <h2 class="text-xl font-thin tracking-wider leading-tight text-gray-700 sm:text-4xl lg:leading-tight">OUR CREATIONS</h2>
            <a
            target="_blank"
            href="#"
            class="group hidden  relative lg:inline-flex items-center justify-start overflow-hidden border border-black bg-white px-8 py-2 font-medium transition-all hover:bg-black"
            >
                <span class="absolute inset-0 border-0 border-black transition-all duration-100 ease-linear group-hover:border-[25px]"></span>
                <span class="relative w-full text-left tracking-wider text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                    SEE ALL
                </span>
            </a>
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
            <a href="#" title="" class="inline-flex lg:hidden items-center justify-center border border-gray-700 hover:bg-black hover:text-white px-7 py-2" role="button"> SEE ALL </a>
        </div>
    </div>
</section>

    </div>
  )
}

export default Creations

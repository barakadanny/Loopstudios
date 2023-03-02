import React from 'react'
import imageinteractive from '../assets/images/desktop/imageinteractive.jpg';
import imageinteractivem from '../assets/images/mobile/imageinteractivem.jpg';
// imageinteractivem.jpg

function Features() {
  return (
    <>
        <section class="py-10 bg-white sm:py-16 lg:py-24">
            <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div class="relative grid items-center grid-cols-1 lg:grid-cols-2 ">
                    <div class="relative lg:mb-12 ">
                        <div class="">
                            <img class="relative " src={imageinteractive} alt="" />
                        </div>
                    </div>

                    <div class="lg:p-16 text-center lg:text-justify lg:max-w-2xl bg-white lg:absolute left-[30rem] top-[8rem]">
                        <h2 class="mt-8 lg:mt-0 text-xl font-thin tracking-wider leading-tight text-gray-700 sm:text-4xl lg:text-4xl lg:leading-tight">THE LEADER IN<br/> INTERACTIVE VR</h2>
                        <p class="text-lg text-gray-700 mt-9">
                            Founded in 2011, Loopstudios has been producing world-class
                            virtual reality projects for some of the best companies around the globe.
                            Our award-winning creations have transformed businesses through digital experiences that binf to their brand.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features

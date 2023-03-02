import React from 'react'
import imageinteractive from '../assets/images/desktop/imageinteractive.jpg';
import imageinteractivem from '../assets/images/mobile/imageinteractivem.jpg';
// imageinteractivem.jpg

function Features() {
  return (
    <>
        <section class="py-10 bg-white sm:py-16 lg:py-24">
            <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div class="relative grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                    <div class="relative lg:mb-12 ">
                        {/* <img class="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="" /> */}
                        <div class="bg-red-400">
                            <img class="relative " src={imageinteractive} alt="" />
                        </div>
                    </div>

                    <div class="lg:p-16 lg:max-w-2xl bg-white lg:absolute left-[26rem] top-[5rem]">
                        <h2 class="text-xl font-thin leading-tight text-black sm:text-4xl lg:text-4xl lg:leading-tight">THE LEADER IN<br/> INTERACTIVE VR</h2>
                        <p class="text-xl text-gray-500 mt-9">
                            Founded in 2011, Loopstudios has been producing world-class
                            virtual reality projects for some of the best companies around the globe.
                            Our award-winning creations have transformed businesses through digital experiences that binf to their brand.
                        </p>
                        {/* <p class="mt-6 text-xl leading-relaxed text-gray-900">Velit officia conse duis enim velit mollit. Exercit ation veniam consequat sunt nostrud amet.</p> */}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features

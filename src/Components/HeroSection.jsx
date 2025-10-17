import React from 'react'


function HeroSection() {
  return (
    <div className='relative w-full h-screen'>
        <div className={'absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all duration-300'}>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-neutral-900/20">
            
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900  to-transparent">
            
            </div>
        </div>
        <div className="absolute inset-0 flex items-center z-10 container mx-50 px-4">
            <div className="max-w-3xl">
                {/* movie info */}
                <div className={'transition-all duration-700'}>
                    <div className="flex items-center space-x-3 mb-4">
                        <span className='bg-red-500/90 text-white text-xs font-semibold px-2 py-1 rounded-sm'>
                        FEATURES
                        </span>

                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                            <span>Movie Voting Average</span>
                        </div>

                        <span className='text-neutral-300'>.</span>
                        <span className='text-neutral-300 text-sm'>Movies Release Date</span>
                        <span className='text-neutral-300'>.</span>
                        <span className='bg-neutral-700 text-neutral-300 text-xs px-11.5 py-0.5'>13+</span>
                    </div>
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
                        Movies Title
                    </h1>
                    <p className='text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl'>Movie Overview</p>
                    <div className="flex flex-wrap gap-4">
                        <button className='bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clip-rule="evenodd" />
                                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                            </svg>
                            Review Now
                        </button>

                        <button className='bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-6 rounded-lg flex items-center gap-2 transition-all border border-neutral-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z" clip-rule="evenodd" />
                            </svg>

                            Add To Watch List
                        </button>
                    </div>
                </div>
            </div>
            

        </div>
        {/* pagination */}

        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
            <button className={'h-1.5 rounded-full transition-all'}>

            </button>
        </div>
    </div>
  )
}

export default HeroSection
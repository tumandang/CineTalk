import React from 'react'

function MovieSlider() {
  return (
    <section className='py-12' id=''>
        <div className="container mx-auto px-4">
            <div className="flex items-baseline justify-between mb-8">
                <div className="text-2xl md:text-3xl font-bold text-white">
                    <h2>Title</h2>
                    <p className='text-neutral-300 text-sm mt-1'>Subtitles</p>
                </div>
                <div className="flex space-x-2">
                    <button className='p-2 rounded-full bg-red-700 text-white transition-all' aria-label='Scroll Left'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className='p-2 rounded-full bg-red-700 text-white transition-all' aria-label='Scroll Left'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="relative">
                <div className="flex space-x-4 overflow-x-hidden scrollbar-hide pb-4 snap-x">
                    <div className="min-w-[200px] snap-start relative group cursor-pointer">
                        <div className="rounded-lg overflow-hidden bg-neutral-800">
                            <div className="relative aspect-[2/3]">
                                <img src="img\movie.jpg" alt="" className='w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35' />
                                    <div className={`  absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent flex flex-col justify-end items-center
                                    p-4 opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                                        <div className="transform translate-4 group-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3 text-center">
                                            <div className="flex flex-col items-center w-full">
                                                <div className="flex items-center space-x-1">
                                                    <span className='text-yellow-400 text-sm font-medium'>
                                                        Movies Vote Average
                                                    </span>
                                                </div>
                                                <span className='text-neutral-400 text-sm'>
                                                    Movies Release Date
                                                </span>
                                            </div>
                                            <button className=' bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md flex items-center justify-center gap-1 transition-all text-sm'>
                                                    View Details
                                            </button>
                                        </div>
                                    </div>
                                    
                            </div>
                        </div>


                        <div className="mt-3">
                            <h3 className='text-white text-sm font-bold truncate'>
                                Movies Title
                            </h3>
                            <div className="flex items-center justify-between mt-2"> 
                                <div className="flex items-center space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                    </svg>

                                    <span className='text-neutral-400 text-xs'>Movies Vote Average</span>
                                </div>
                                <span className='text-neutral-500 text-xs'>Movies Release date</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MovieSlider
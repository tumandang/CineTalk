import React from 'react'


function App() {
  return (
    <header className={'flex w-full transition-all duration-300'} >
      <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className='flex items-center'>
                <span className='text-red-500 font-bold text-3xl'>
                    Cine <span className='text-white font-mono font-extralight'>Talk</span>
                </span>
              </a>
            </div>
            <nav className='hidden md:flex space-x-8'>
                <a href="/" className='text-white hover:text-red-500 transition-all font-medium'>
                Home
                </a>
                <a href="/" className='text-white hover:text-red-500 transition-all font-medium'>
                Movies
                </a>
                <a href="/" className='text-white hover:text-red-500 transition-all font-medium'>
                Siries
                </a>
                <a href="/" className='text-white hover:text-red-500 transition-all font-medium'>
                WatchList
                </a>
                <a href="/" className='text-white hover:text-red-500 transition-all font-medium'>
                Review
                </a>
            </nav>

            <div className="hidden md:block relative search-container">
              <div className="relative">
                <input type="text" placeholder='Search Here'
                 className='bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 
                 focus:w-63 transition-all duration-300 focus:outline focus:ring-2 focus:ring-red-500/50' />
                
                <div className="absolute right-3 top-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </div>

                <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                  <ul className='divide-y divide-neutral-600'>
                    <li className='hover:bg-neutral-600'>
                        <button className='flex items-center p-3 w-full text-left'>
                          <div className="w-10 h-10 bg-neutral-600 rounded overflow-hidden flex-shrink-0">
                            
                            <img src="" alt="" className='w-full h-full object-cover' />

                            <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs ">
                              No Image
                            </div>
                            <div className="ml-3 flex-1">
                              <p className='text-sm font-medium text-white truncate'>
                                movie release date
                              </p>
                              <p className='text-xs text-neutral-300'>
                                movie release date
                              </p>
                            </div>
                          </div>
                        </button>
                    </li>
                  </ul>
                </div>
              
              <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <div className="p-4 text-center text-neutral-300 text-sm ">
                  No movies found matching
                </div>
              </div>
              
              </div>
            </div>
            {/* mobile */}

            <button className='md:hidden text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </button>
          </div>

          {/* <div className="mt-4 pb-4 space-y-4 md-hidden">
                <a href="/" className=' block text-white hover:text-red-500 transition-all font-medium'>
                Home
                </a>
                <a href="/" className='block text-white hover:text-red-500 transition-all font-medium'>
                Movies
                </a>
                <a href="/" className='text-white hover:text-red-500 transition-all font-medium'>
                Siries
                </a>
                <a href="/" className='text-white hover:text-red-500 transition-all font-medium'>
                WatchList
                </a>
                <a href="/" className='text-white hover:text-red-500 transition-all font-medium'>
                Review
                </a>
                <div className="relative mt-3 searh-container">
                  <input type="text" placeholder='Search Here'
                 className='bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 
                 focus:w-63 transition-all duration-300 focus:outline focus:ring-2 focus:ring-red-500/50' />
                </div>

                <div className="absolute right-3 top-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                  <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                    <ul className='divide-y divide-neutral-600'>
                      <li className='hover:bg-neutral-600'>
                          <button className='flex items-center p-3 w-full text-left'>
                            <div className="w-10 h-15 bg-neutral-600 rounded overflow-hidden flex-shrink-0">
                              
                              <img src="" alt="" className='w-full h-full object-cover' />

                              <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs ">
                                No Image
                              </div>
                              <div className="ml-3 flex-1">
                                <p className='text-sm font-medium text-white truncate'>
                                  movie release date
                                </p>
                                <p className='text-xs text-neutral-300'>
                                  movie release date
                                </p>
                              </div>
                            </div>
                          </button>
                      </li>
                    </ul>
                </div>
                  <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="p-4 text-center text-neutral-300 text-sm ">
                      No movies found matching
                    </div>
                  </div>
                </div>
          </div> */}
      </div>
    </header>
  )
}

export default App
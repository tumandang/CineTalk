import React from "react";

function MovieDetails() {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 p-4
     bg-neutral-900/95 backdrop-blur-sm overflow-auto"
    >
      <div
        className="relative w-full max-w-5xl bg-neutral-800 rounded-xl shadow-xl 
        max-h-[900vh] overflow-hidden"
      >
        <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-red-700/80 text-white hover:bg-red-600 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        {/* Conditional Rendering */}
        <div className="flex items-center justify-center h-96">
          <div className="animate-pulse">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin">
              <p>Loading Details</p>
            </div>
          </div>
          {/* Else */}
          <div className="flex items-center justify-center h-96 w-full">
            <div className="text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
              <h2 className="text-xl font-bold mt-4">
                Failed to load movies details
              </h2>
              <p className="mt-2 text-neutral-400">Error</p>
              <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
                close
              </button>
            </div>
          </div>
          {/* else */}
          <div className="">
            <div className="relative h-72 md:h-96 w-full">
              <img src="" alt="" className="w-full h-full object-cover" />
              <div className="w-full h-full bg-neutral-700"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent"></div>
            </div>
              <div className="p-6 md:p-8">
                <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
                  <div className="w-32 md:w-64 flex shrink-0 mb-4 md:mb-0">
                    <div className="rounded-lg overflow-hidden shadow-lg border border-neutral- w-full">
                      <img src="" alt="" className="w-full h-auto" />
                      <div className="w-full aspect-[2/3] bg-neutral-700 flex justify-center items-center">
                        No Poster Available
                      </div>
                    </div>
                  </div>

                  {/* Movies Info */}

                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                      Movies Title
                      <span className="text-neutral-400 font-normal ml-2"></span>
                    </h1>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 items-center text-sm">
                      <div className="flex items-center">
                        <span className="ml-1 font-medium">
                          Movies Vote Average
                        </span>
                      </div>
                      <span className="text-neutral-300">Movie Runtime</span>
                      <span className="text-neutral-300">Movie Release Date</span>
                      <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded">13+</span>

                    </div>
                    {/* genre */}

                    <div className="mt-4 flex-flex-wrap gap-2">
                      <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">Genre Name </span>
                    </div>
                    <p className="mt-4 text-neutral-400 italic">Mobie Tagline</p>
                    <div className="mt-6 ">
                      <h2 className="text-xl font-semibold text-white mb-2">Overview</h2>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero reprehenderit error odio sit atque, perferendis ab alias dolorum ad, deserunt exercitationem eveniet, odit ullam velit debitis at? Numquam, aliquam quas.</p>
                    </div>
                    <div className="mt-8  flex flex-wrap gap-3">
                      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                          Review Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

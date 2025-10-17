import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'
import MovieDetails from './MovieDetails'
function MovieContent() {
  return (
    <>
      <HeroSection/>
       <div className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <MovieSlider>

        </MovieSlider>
        <GenreSection></GenreSection>
        
      </div>
      <MovieDetails></MovieDetails>
    </>

  )
}

export default MovieContent
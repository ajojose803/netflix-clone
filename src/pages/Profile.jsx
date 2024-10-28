import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../services/firebase';
import { createImageUrl } from '../services/movieServices';
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';


const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows);
      })
    }
  }, [user?.email]);

  const slide = (offset) => {
    const slider = document.getElementById('slider' );
    slider.scrollLeft = slider.scrollLeft + offset
  }

  if (!user) {
    return (
      <>
        <p>Fetching shows....</p>
      </>
    )
  }

  return (
    <div>
      <div>
        <img
          className='bloc w-full h-[500px] object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_small.jpg"
          alt="///"
        />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-[500px] ' />
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>
            My Shows
          </h1>
          <p className='font-nsans-light text-gray-400 text-lg'>
            {user.email}
          </p>
        </div>
      </div>
      {/* movie row */}

      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">Favorite Movies</h2>

      <div className='relative flex items-center group'>

        <MdChevronLeft
          onClick={() => slide(-500)}
          className='bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden 
          group-hover:block cursor-pointer' size={40}
        />

        <div id={`slider`}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {movies.map(({ id, title, backdrop_path, poster_path }) => (

            <div
              key={id}
              className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg  cursor-pointer m-2'>
              <img
                className='w-full h-40 block object-cover object-top'
                src={createImageUrl(backdrop_path ?? poster_path, 'w500')}
                alt={title}
              />
              <div className='absolute top-0 left-0 w-full h-40 bg-black/70 opacity-0 hover:opacity-100'>
                <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>
                  {title}
                </p>
                <p>
                  <AiOutlineClose 
                  onClick={handle}
                  size={30} 
                  className='absolute top-2 right-2'/>
                </p>
              </div>
            </div>
          )
          )}
        </div>

        <MdChevronRight
          onClick={() => slide(500)}
          className='bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden 
          group-hover:block cursor-pointer' size={40}
        />
      </div>

    </div>
  )
}

export default Profile
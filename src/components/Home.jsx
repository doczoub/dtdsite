import React from 'react'
import ClickRender from './ClickRender'
import FooterAdmin from './FooterAdmin'
import NavBar from './NavBar'
import NosEquipes from './NosEquipes'
import NosServices from './NosServices'

const Home = () => {
  return (
    <div>
        <section className="mb-40 ">
      <NavBar />

          <div className="relative overflow-hidden bg-no-repeat bg-cover " 
          style={{backgroundPosition: "50%",
          backgroundImage: `url("https://store.hp.com/app/assets/images/uploads/prod/top-ideas-for-cool-desktop-backgrounds-for-hd-monitors-hero157409686657448.jpg")`,
        height: "500px"}}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}>
            <div className="flex justify-center items-center h-full">
              <div className="text-center text-white px-6 py-6 md:py-0 md:px-12 max-w-[800px]">
                <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-12">
                  Bienvenue au <span className=' text-pink-500'>S</span>ervice de la <br /><span> <span className=' text-pink-500'>T</span>ransformation  <span className=' text-pink-500'>D</span>igitale <span className=' text-pink-500'>(DTD)</span></span>
                </h2>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia
                  consequatur adipisci tenetur repudiandae rerum quos.
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>

        <NosServices />
        <NosEquipes />
        <FooterAdmin />
      </div>
  )
}

export default Home

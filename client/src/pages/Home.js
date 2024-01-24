import React from 'react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="px-4 my-12">
      <div className="relative flex mx-auto justify-center items-center h-[330px] md:h-[400px] w-full max-w-[1254px] rounded-2xl bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-[rgba(0,0,0,0,0.5] bg-blend-overlay bg-no-repeat bg-cover bg-center after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-overlaydDark after:rounded-2xl after:z-10 ">
        <h1 className="relative md:px-10 text-center text-3xl md:text-5xl font-semibold text-white z-30">
          Snag Your Spot, Stress-Free – Reservations, Ready, Set, Go!
        </h1>
      </div>
      <div className="mx-auto my-16 max-w-[1254px]">
        <p className="w-full my-10 text-2xl font-semibold max-w-2xl">
          Got a culinary masterpiece to share? Perhaps you crave diversity in
          your daily servings? Our community is eagerly awaiting - jump in!
        </p>
        <div className="flex flex-col md:flex-row gap-4 ">
          <Link to='/register_restaurant'>
              <Button gradientDuoTone="purpleToBlue">
                Register your Restaurant
              </Button>
          </Link>
          <Link to='/restaurants'>
            <Button gradientDuoTone="cyanToBlue">Find restaurants</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home

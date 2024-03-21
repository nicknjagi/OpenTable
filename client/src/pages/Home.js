import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Alert } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Home = () => {
    const { currentUser,count, setCount } = useContext(UserContext)
    const [showAlert, setShowAlert] = useState(false)
    const [remaining, setRemaining] = useState(15)
    const remainingRef = useRef(remaining)

    useEffect(()=>{
      if (!showAlert && count === 1) {
        setShowAlert(false)
        return
      }; 
      setShowAlert(true)
      const intervalID = setInterval(() => {
        remainingRef.current -= 1; 
        setRemaining(remainingRef.current)
        if (remainingRef.current === 0) {
          setShowAlert(false);
          setCount(1);
          clearInterval(intervalID); 
        }
        }, 1000);


    return () => {
      return clearInterval(intervalID);
    };
    },[setShowAlert, count, remaining, setCount, showAlert])

  return (
    <main className="px-4 my-12">
      {showAlert && <Alert className={(count !== 1) ? 'absolute w-[calc(100%-32px)] max-w-[1024px] top-12 left-1/2 -translate-x-1/2 z-50' :'z-0'} onDismiss={() => {setShowAlert(false); setCount(1)}} color="info">
        <span className="font-medium inline-block border-b border-black mb-2">Info </span><br/> The platform hosting this project spins down due to inactivity and usually takes about 50 seconds to spin back up. Please reload the page if some features are not working.
      </Alert>}
      <div className="relative flex mx-auto justify-center items-center h-[330px] md:h-[400px] w-full max-w-[1254px] rounded-2xl bg-[url('./assets/images/banner-bg.jpg')] bg-[linear-gradient(to bottom,rgba(0,0,0,0,0.5))] bg-blend-overlay bg-no-repeat bg-cover bg-center after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-overlaydDark after:rounded-2xl after:z-10 ">
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
          <Link to={currentUser ? '/register_restaurant' : '/login'}>
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

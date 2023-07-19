'use client'
import { useEffect, useState } from "react";
import { PiMoonStars, PiSun } from 'react-icons/pi';


export default function Switch() {
  const [isSwitch, setIsSwitch] = useState(true)

  useEffect(() => {
    console.log("useEffect foi chamado")
  }, [isSwitch])
  return (
    <>
      <html lang="pt-br" className={`${isSwitch ? "" : "dark"}`}/>
      <div
        onClick={() => setIsSwitch(!isSwitch)}
        className='relative flex w-16 h-10 items-center'
      >
        <span className={`absolute flex ml-1 justify-center cursor-pointer items-center border-black/[.5] z-20`}>
          <PiSun />
        </span>
        <span className={`absolute flex right-0 mr-1 justify-center cursor-pointer items-center border-black/[.5] z-20`}>
          <PiMoonStars />
        </span>
        <button
          id="darkMode"
          className={`absolute rounded-full w-8 h-8 transition-all duration-500 z-10 hover:ring-2 hover:ring-[#000]/[.1] dark:hover:ring-[#FEFEFE]/[.5] dark:border dark:border-solid dark:border-[#ccc]
        ${isSwitch ? "-left-1 bg-[#e8d400]" : "left-9 bg-[#050099]"}`}
        >
        </button>
        <span className='block w-full h-6 bg-black/[.1] rounded-full border border-solid border-black/[.1] dark:border-white/[.1] dark:bg-white/[.1]'>
        </span>
      </div>
    </>
  )
}
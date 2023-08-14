'use client'
import { useState } from "react";
import { PiMoonStars, PiSun } from 'react-icons/pi'

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(true)

  // useEffect(() => {
  //   if(typeof window !== 'undefined') { 
  //     const darkMode = window.matchMedia(`(prefers-color-scheme:${dark})`)
  //     darkMode.addEventListener()
  //   }
  //   // console.log("useEffect foi chamado")
  //   // setIsDark(true)
  // }, []) 
  return (
    <>
      <html
        className={`${dark ? '' : 'dark'}`}
      />
      <div
        onClick={() => setDark(!dark)}
        className='relative flex w-16 h-10 items-center cursor-pointer'
      >
        <button
          id="darkMode"
          className={`absolute rounded-full w-8 h-8 transition-all duration-500 z-10 hover:ring-2 hover:ring-[#000]/[.1] dark:hover:ring-[#FEFEFE]/[.5] dark:border dark:border-solid dark:border-white/[.3]
        ${dark ? "-left-1 bg-[#e8d400]" : "left-9 bg-[#050099]"}`}
        >
          {dark ? <PiSun className="m-auto transition-all" /> : <PiMoonStars className="m-auto transition-all" />}
        </button>
        <span className='block w-full h-6 bg-black/[.1] rounded-full border border-solid border-black/[.1] dark:border-white/[.1] dark:bg-white/[.1]'>
        </span>
      </div>
    </>
  )
}
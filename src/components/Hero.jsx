import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { Typewriter } from 'react-simple-typewriter'
import { SectionWrapper } from '../hoc'
  
const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className="flex flex-col -md:flex-row ">


        <div className={`${styles.paddingX} absolute inset-0 top-[177px] max-w-7xl flex flex-row items-start gap-5`}>
          <div className="flex flex-col      justify-center items-center mt-5">
            <div className=" w-5 h-5 rounded-full bg-cyan-400" />
            <div className="w-1 h-40  sm:h-80 cyan-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi,I'm <span className="text-cyan-400">Titas</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 `}>I am a <span className="text-cyan-400"><Typewriter

              words={['Full-stack Dev', 'Python Dev', 'React Dev', 'Java Dev', 'Ethical Hacker']}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={100}
              delaySpeed={1000} /></span></p>
            <p className={`${styles.heroSubText} mt-9 text-cyan-300 `} >Welcome to my personal portfolio. <br className="sm:block hidden" /> Explore my latest projects and articles showcasing my skills.</p>
          </div>

        </div>


        <div className="flex mt-[10rem] ml-[70rem] w-[22rem] h-[22rem] -md:ml-[8rem] -md:mt-[32rem]" >

          <ComputersCanvas />

        </div>


      </div>
      <a href="https://drive.google.com/file/d/1c2qOTx_YrigOdUVwWRuRRhIiIf9hIoCG/view?usp=sharing" target='_blank' class=" -md:mt-[-10rem] ml-[6.4rem] mt-12 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-cyan-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group" download>
        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-cyan-400 group-hover:h-full"></span>
        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg class="w-5 h-5 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black-100">Download CV</span>
      </a>
    </section>
  )
}

export default Hero
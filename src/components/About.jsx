import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full  green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        //bg-[#00ffff86]
          className=" bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt="" className="w-16 h-16 object-contain"/>
            <h3 className=" text-cyan-200 text-[20px] font-bold text-center " >{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>

      <motion.div variants={textVariant()} className=" flex  flex-col md:flex-row justify-between">
        <motion.div variants={textVariant()} className=" ml-12 mr-14 md:ml-[5rem] flex flex-col  justify-center items-start  ">
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={`${styles.sectionHeadText}  `}>Overview.</h2>

          <motion.p variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-cyan-200 text-[17px] max-w-3xl leading-[30px] ">
            I am an Engineering student proficient in C,
            Python, HTML, and Java. Quick
            learning ability along with curiosity
            to comprehend new skills.
            Excellent teamwork, interpersonal
            and communication skills. Looking
            forward to starting a career as an
            entry-level engineer with a reputed
            IT company.
          </motion.p>
        </motion.div>
        <motion.div variants={fadeIn("right", "", 0.1, 1)}>

          <div className="!md:pl-[2rem] !md:pr-[5rem] !pt-[4rem] !pb-[4rem] !md:p-1 !p-1 ">

            <div className=" !z-3 border-2 border-cyan-400 rounded-2xl !md:p-[2.5rem] !p-[2.5rem] !md:mr-[10rem] !mt-[5rem] !mr-[0rem] shadow-[6px_7px_5px_1px_#3182ce,12px_13px_3px_0px_#00FFFf] hover:shadow transition-all ease-linear hover:translate-x-1 hover:translate-y-1 ">

              <img src="../src/assets/about-removebg.jpg" alt="" className=" !w-[500px] !h-[550px] !z-2 rounded-2xl" />
            </div>
          </div>


        </motion.div>
      </motion.div>
      <div className="flex justify-center -sm:ml-20">
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}

        </div>
      </div>

    </>
  )
}

export default SectionWrapper (About, "about")
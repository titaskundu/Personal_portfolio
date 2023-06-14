import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { list } from 'postcss';
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsDiscord } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Cursor } from 'react-simple-typewriter';
const Navbar = () => {
  const [active, setActive] = useState('`')
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-lg justify-between`}>



      <div className="w-full flex justify-between items-center  mx-auto py-5">
        <ul className=" list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-cyan-400" : "text-cyan-600"}
            relative  
            transition ease-in-out duration-200
            group
            hover:text-cyan-400 text-[18px] font-medium cursor-pointer `}
              onClick={() => setActive(link.title)}>
              <a href={`${link.id}`}>{link.title}</a>
              <span className="h-[1.59px] inline-block w-0 bg-cyan-400 left-0 absolute -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ">&nbsp;</span>
            </li>))}


        </ul>
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6  black-gradient absolute top-20  mx-4 my-2 min-w-[250px] z-10 rounded-xl`}>
          <ul className=" list-none flex justify-start items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-cyan-400" : "text-cyan-600"}
            relative  font-poppins font-medium text-[16px] py-[1px]
            transition ease-in-out duration-200
                group
                hover:text-cyan-400 cursor-pointer `}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}>
                <a href={`/${link.id}`}>{link.title}</a>
                <span className="h-[1.59px] inline-block w-0 bg-cyan-400 left-0 absolute -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ">&nbsp;</span>
              </li>))}


          </ul>

        </div>

        <div className="md:hidden flex flex-1 justify-start items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />

        </div>



      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <motion.div className="flex items-center rounded-full justify-center mt-2 hover:cursor-pointer "
          whileHover={{
            backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
            transition: { duration: 1, repeat: Infinity }
          }}
        >

          <motion.Link className="flex w-16 h-16 text-cyan-400  justify-center rounded-full items-center text-2xl font-bold border-2 border-cyan-400 "

            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}>
            TK</motion.Link>



        </motion.div>
      </div>

      <div className="flex flex-row justify-center items-center -md:flex-col ">

        <Link target='_blank' to="https://discordapp.com/users/743114147574579313"><BsDiscord className="mx-4 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" /></Link>



        <Link target='_blank' to="https://www.linkedin.com/in/titas-kundu-903a1a215"> <BsLinkedin className="mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" /></Link>

        <Link target='_blank' to="https://www.instagram.com/plague_mint/"><BsInstagram className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" /></Link>


        <Link target='_blank' to="https://github.com/titaskundu"> <BsGithub className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" /></Link>

        <Link target='_blank' to="https://twitter.com">

          <BsTwitter className="ml-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:ml-0 -md:my-[1px]  "
          />
        </Link>

      </div>
    </header>
  )
}

export default Navbar
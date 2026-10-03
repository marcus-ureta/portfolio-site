import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Background from '../Background.jsx';
import pageStyle from './Project.module.css';
import { useState } from 'react';

import Card from './Card.jsx';

// HEADER IMAGES
import mm_boy from '../assets/marshmallow_boy.svg';
import js_cpa from '../assets/jigsaw_cpa.svg';
import is from '../assets/inventory_system.svg';
import pw from '../assets/product_website.svg';
import gc from '../assets/grades_calc.svg';
import pc from '../assets/pawcation_app.svg';
import calc from '../assets/calculator.svg';
import tt from '../assets/truth_table.svg';
import nn from '../assets/neural_network.svg';
import cai from '../assets/collective_ai.svg';
import mu from '../assets/mu_machine.svg';
import rai from '../assets/rai.svg';
import mps from '../assets/mps.svg';
import vd2026 from '../assets/vd2026.svg';
import tl from '../assets/tl.svg';

import mb_site from '../assets/mb_site.webp';
import ps_site from '../assets/personal_site.webp';
import soc_33 from '../assets/33_society.webp';

function Project() {

  const[filter, setFilter] = useState('all');

  const handleFilter = (type) => {
    setFilter('disable');
    setFilter(type);
  }

  return (
    <>
      <Header/>
      <Background/>
      <div className={pageStyle.page}>
        <h1>My Projects</h1>
        <p>Showcase of all my web development and software development projects over the year</p>
        <div className={pageStyle.tabList}>
          <button className={pageStyle.bestButton + ' ' + `${filter === 'best' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('best')} >⭐ Best Works (4)</button>
          <button className={`${filter === 'all' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('all')}>🖥️ All (18)</button>
          <button className={`${filter === 'websites' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('websites')}>🌐 Websites (6)</button>
          <button className={`${filter === 'programs' ? pageStyle.selected : undefined}`} onClick={() => handleFilter('programs')}>⚙️ Programs (11)</button>
        </div>

        <div className={pageStyle.cards}>
          <Card image={mm_boy} header="Marshmallow Boy" 
            description="Marshmallow Boy is a 2D platformer inspired by Celeste (2018) made using the Unity Game Engine. My role as the sole developer was to handle all the programming, sprite art, audio and game design." 
            tech1="C#" tech2="Unity" link="https://pingem.itch.io/marshmallow-boy"
            showState= {filter === 'all' || filter === 'programs' || filter === 'best'}/>

          <Card image={mps} header="Marketplace Simulator" 
            description="An AI-driven R&D prototype where players haggle with personality-driven chatbots, built for BCE Productions (TVEC). As lead developer, I handled programming, systems design, AI research, and technical documentation." 
            tech1="C#" tech2="Unity" link="https://drive.google.com/file/d/10BDxmyrq7sYMNheS1U0Azgtr3e_cfYYm/view"
            showState= {filter === 'all' || filter === 'programs' || filter === 'best'} />

          <Card image={ps_site} header="Personal Site" 
          description="My own personal site built to act as my personal hub and online presence. As the sole developer, I designed the entire site and implemented all features using React, Typescript, Tailwind, and Firebase." 
          tech1="React.TS" tech2="Tailwind" link="https://marcusureta.dev"
          showState= {filter === 'all' || filter === 'websites' || filter === 'best'}/>

          <Card image={js_cpa} header="Jigsaw Coding Application" 
            description="An eductional jigsaw puzzle game where players solve puzzles through code to learn C#. I designed and implemented the game's custom scripting language and contributed to the UI design." 
            tech1="C#" tech2="Unity" link="https://drive.google.com/file/d/1wWsPa6-_yvFDUQLTBhGtKKnvSpHpam4i/view"
            showState= {filter === 'all' || filter === 'programs' || filter === 'best'} />
            
          <Card image={rai} header="Robots Are Invading" 
            description="A fast-paced FPS game where you fight robots invading the world. As project lead, I managed a team of 10 artists, programmers, level and sound designers while implementing the game's core gameplay systems." 
            tech1="C#" tech2="Unity" link="https://drive.google.com/file/d/1M0u0XIVlYNdjKa01e8Z4hhtoO0SACrQS/view"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={soc_33} header="33 Society" 
          description="A commissioned website for a start-up group titled 33 Society. As the back-end developer, I implemented and designed the website's back-end functionality and database structure while collaborating with the front-end designer." 
          tech1="React.TS" tech2="Tailwind" link="https://marcusureta.dev"
          showState= {filter === 'all' || filter === 'websites' || filter === 'best'}/>

          <Card image={mu} header="MU Machine" 
          description="An Arduino-based game console featuring three fully playable games. I independently designed, engineered, and programmed the entire system, from hardware integration to game logic." 
          tech1="C++" tech2="Arduino" link="https://github.com/PinGEm/MU_Machine_V1/tree/main"
          showState= {filter === 'all'}/>

          <Card image={tl} header="ToLearn" 
            description="A tutor-booking mobile application designed to connect students and tutors through a single centralized platform. As the head developer, I developed the application and collaborated with the UI designers on the application design." 
            tech1="C++" tech2="Qt" link="https://drive.google.com/file/d/1zYG4KXzgApjNQWU1kDWVQqFu4oRvGRbU/view?usp=drive_link"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={is} header="Inventory System Application" 
            description="A Windows Presentation Foundation application for managing inventory, allowing users to view, add, and remove items. As the sole developer, I designed and developed the entire application from scratch." 
            tech1="C#" tech2="WPF" link="https://drive.google.com/drive/folders/1zwt6VIO2fI8EtXs3CNvMtFtAEvwXpRLY"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={vd2026} header="Valentine's Day Site (2026)" 
          description="A Valentine's Day web application created in a single day with a focus on simplicity and easy shareability for users. As the sole developer of the project, I was responsible for the programming and UI design." 
          tech1="React" tech2="JS" link="https://your-special-valentines-day-2026.vercel.app/"
          showState= {filter === 'all' || filter === 'websites'}/>

          <Card image={mb_site} header="Marshmallow Boy Site" 
            description="Built in one day as an assignment for a DLSU organization exam. I was responsible for designing and implementing the entire website with mobile responsiveness in mind using HTML, CSS, and JS." 
            tech1="JS" tech2="HTML/CSS" link="https://tls-ureta.vercel.app"
            showState= {filter === 'all' || filter === 'websites'}/>

          <Card image={pw} header="Product Site" 
            description="A promotional website for a product I made called 'RootTap' featuring a sign-up form. As the sole full-stack developer, I implemented a fully functional, and visually appealing site from scratch using HTML, CSS, and JS." 
            tech1="JS" tech2="HTML/CSS" link="https://github.com/PinGEm/Web-Design-QA"
            showState= {filter === 'all' || filter === 'websites'}/>
          
          <Card image={gc} header="Grades Calculator Application" 
            description="A Unity application for calculating a students' overall grades and storing it persistently inside the app. As the sole developer, I designed and implemented all the features and UI elements for the software." 
            tech1="C#" tech2="Unity" link="https://drive.google.com/drive/folders/1Raabl_nHJK7lZubJi3youaP2prnynPJQ"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={pc} header="Pawcation Application" 
            description="A prototype Windows Form application that searches for pet-friendly locations for travelling. Acting as the only developer, I implemented the core features of the program along with contributing to UI design." 
            tech1="C#" tech2="WinForm" link="https://github.com/PinGEm/Pawcation"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={calc} header="Calculator Site" 
            description="A responsive calculator webpage supporting full PEMDAS operations through an interactive and user-friendly interface. As the sole full-stack developer, I designed the UI and developed all features using PhP." 
            tech1="PhP" tech2="CSS" link="https://github.com/PinGEm/Web-Design--Q4_PT1---Calculator"
            showState= {filter === 'all' || filter === 'websites'}/>

          <Card image={cai} header="Collective AI Program" 
            description="A program that combines both a neural network and swarm intelligence AI to compute the most efficient maze path throughout several generations. I served as the sole developer, responsible for the swarm intelligence logic." 
            tech1="C++" link="https://github.com/PinGEm/ProgLang2-QA-2"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={nn} header="Neural Network Program" 
            description="A multi-purposed application that uses a neural network artifical intelligence with trained inputs stored inside the program. Served as the sole developer creating the neural network and providing training data." 
            tech1="C++" link="https://github.com/PinGEm/PT7---Programming-Languages-2"
            showState= {filter === 'all' || filter === 'programs'}/>

          <Card image={tt} header="Truth Table Program" 
            description="A problem-solving program that generates arguments from logical statements using a custom table wrapper and minimal libraries. Sole developer responsible of implementing its core features." 
            tech1="C++" link="https://github.com/PinGEm/QA-1-Programming-Languages-2"
            showState= {filter === 'all' || filter === 'programs'}/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Project;

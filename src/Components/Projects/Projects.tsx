import React from 'react'
import styles from './Projects.module.scss'
import { FaReact, FaNode, FaGitAlt,FaGithub,FaLink, FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { SiMysql, SiJavascript, SiFirebase, SiVite,SiGooglecloud  } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
const Projects = () => {
  return (
    <div className={styles.container}>
        <h1>Projects</h1>

        <div className={styles.items}>

          <div className={styles.projectItem}>
            <h3>Key genration using Neural Network </h3>
            <img src="/6238016.png" alt="img1" />
            <p>Design a model for key generation using Neural  Netwrok</p>
            {/* <div className={styles.prolinks}>
              <a href="https://github.com/kherkatary/Nurture_mental_health"><FaGithub size={30}/> </a>
              <a href="https://nurturementalhealth.org/"><FaLink size={30}/> </a>

            </div> */}
          </div>
          <div className={styles.projectItem}>
            <h3>Hand Writting Recognition MOdel</h3>
            <img src="/Handwritten.png" alt="img1" />
            <p>A Handwritting Recognition model using Neural Network and Machine Learning</p>
             {/* <div className={styles.prolinks}>
              <a href="https://github.com/kherkatary/lofi-client"><FaGithub size={30}/> </a>
              <a href="https://lofi-client.vercel.app/"><FaLink size={30}/> </a>

             </div> */}
          </div>
          <div className={styles.projectItem}>
            <h3>Zero Water Marking Technique</h3>
            <img src="/Zero.png" alt="img1" />
            <p>Zero water Marking Technique specially for Medical Images to Protect the data Intigrity</p>
            {/* <div className={styles.prolinks}>
              <a href="https://github.com/kherkatary/Srigen-2023"><FaGithub size={30}/> </a>
              <a href="https://srigen-2023.vercel.app/"><FaLink size={30}/> </a>

            </div> */}
          </div>


        </div>
        
    </div>
  )
}

export default Projects
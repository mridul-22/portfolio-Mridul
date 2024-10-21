import React from 'react'
import styles from './Socials.module.scss'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const Socials = () => {
  return (
    <div className={styles.container}>
        
        <a href="https://www.linkedin.com/in/mridul-rabha-b57619333/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/mridul-22" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="mailto:mridulrabha309@gmail.com" aria-label="Email">
            <MdEmail size={20} />
          </a>
        </div>
  )
}

export default Socials
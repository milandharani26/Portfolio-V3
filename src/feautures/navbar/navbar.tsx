/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, Instagram, TikTok, Twitter, YouTube } from '../../library'
import { Grid, Links, Nav, Navigation, Wrapper } from './navbar-style'
import './navbar.css'
type NavbarProps = {
  scrollToSection: (elementRef: any) => void
  home: any
  about: any
  projects: any
  contact: any
}

export function Navbar({
  scrollToSection,
  home,
  about,
  projects,
  contact,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = (event: any) => {
    setIsOpen(false)
    scrollToSection(event)
  }

  return (
    <Nav>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className={`icon nav-icon-1 ${isOpen && 'open'}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {isOpen && (
        <motion.div
          className="menu"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
                type: 'spring',
                duration: 0.5,
              },
            },
          }}
        >
          <Navigation>
            <h1>Navigation</h1>

            <Wrapper>
              <span onClick={() => handleOnClick(home)}>Home</span>
              <span onClick={() => handleOnClick(about)}>About</span>
              <span onClick={() => handleOnClick(projects)}>Projects</span>
              <span onClick={() => handleOnClick(contact)}>Contact</span>
            </Wrapper>
          </Navigation>

          <Links>
            <h1>On the web</h1>
            <Grid>
              <a
                href="https://github.com/mirayatech"
                target={'_blank'}
                rel="noreferrer"
              >
                <Github />
              </a>
              <a
                href="https://www.instagram.com/mirayatech/"
                target={'_blank'}
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.youtube.com/@mirayatech"
                target={'_blank'}
                rel="noreferrer"
              >
                <YouTube />
              </a>
               <a
                href="https://www.linkedin.com/in/mirayaabrodi/"
                target={'_blank'}
                rel="noreferrer"
              >
                <TikTok />
              </a>
              <a
                href="https://twitter.com/mirayatech_"
                target={'_blank'}
                rel="noreferrer"
              >
                <Twitter />
              </a>
            </Grid>
          </Links>
        </motion.div>
      )}
    </Nav>
  )
}

import React from 'react'
import { Headings } from '../headings/headings'
import { Link, Text } from './about-style'

export default function About() {
  const title = 'About'
  const subtitle = "Hi, I'm Milan."

  return (
    <div>
      <Headings title={title} subtitle={subtitle} />

      <Text>


        I&#39;m  a 20-year-old self taught Full-Stack developer. I found my passion for programming.
        What kept me on this journey is that I always find learning new things exciting and facing 
        unfamiliar challenges. In addition to coding, I enjoy building side projects and reading books. 
        When I'm not doing anything coding-related, I enjoy spending time with my family and working out. Follow my <Link href="https://www.linkedin.com/in/milan-dharani-36654123b/" target={'_blank'} rel="noreferrer">LinkedIn</Link> to see my journey!
      </Text>
    </div>
  )
}

/* eslint-disable react/react-in-jsx-scope */
import { Github, Instagram, TikTok, Blog, mail } from '../../library'
import { Headings } from '../headings/headings'
import { Link, Links } from './socials-style'

export function Socials() {
  const title = 'On The Web'
  const subtitle = 'More of my works'
  return (
    <>
      <Headings title={title} subtitle={subtitle} />

      <Links>
        <Link href="https://github.com/milandharani26" target={'_blank'}>
          GitHub
          <Github />
        </Link>
        {/* <Link href="https://www.instagram.com/mirayatech/" target={'_blank'}>
          Instagram
          <Instagram />
        </Link> */}
        <Link href="https://www.linkedin.com/in/milan-dharani-36654123b/" target={'_blank'}>
          LinkedIn
          <TikTok />
        </Link>
        {/* <Link href="https://mirayatech.hashnode.dev/" target={'_blank'}>
          mail
        </Link> */}
      </Links>
    </>
  )
}

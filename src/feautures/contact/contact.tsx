import { Headings } from '../headings/headings'
import { Text, Link } from './contact-style'

/* eslint-disable react/react-in-jsx-scope */
export function Contact() {
  const title = 'Contact'
  const subtitle = "Look Who's Here"

  return (
    <>
      <Headings title={title} subtitle={subtitle} />
      <Text>
        The fastest way to get in touch with me is to send me a message on LinkedIn or
        <Link href="mailto:201260116052setiit@gmail.com" target={'_blank'} rel="noreferrer">Mail me</Link>
        Whether you have a question or just want to say hi, I&#39;ll try my best
        to get back to you.
      </Text>
    </>
  )
}

import { motion } from "framer-motion"
import { CONTACT } from "../constants"

const EmailLink = ({ email, subject, body }) => {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>
      {email}
    </a>
  );
};

const Contact = () => {
  return <div className="border-b border-neutral-900 pb-4">
    <motion.h2 
    whileInView={{opacity: 1, y: 0}}
    initial={{opacity: 1, y:-100}}
    transition={{duration: 0.5}}
    className="my-10 text-center text-4xl">Get in Touch</motion.h2>
    <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 1}}
        className="my-4">{CONTACT?.address}</motion.p>
        <motion.p 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration: 1}}
        className="my-4">{CONTACT?.phoneNo}</motion.p>
        <EmailLink email={CONTACT?.email} subject={'Hallo!'} body={`I wanted to reach out to you regarding...`} />
    </div>
    </div>
}

export default Contact

import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return <div className="border-b border-neutral-900 pb-4">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></motion.h2>
        <div className="flex justify-center">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2">
                <div className="flex justify-center">
                    <p className="my-2 max-xl">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
}

export default About

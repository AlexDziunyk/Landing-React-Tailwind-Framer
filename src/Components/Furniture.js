import furniture from '../images/furniture.png'
import { motion } from "framer-motion"

const furnAnimation = {
    hidden: {
        x: -200,
        opacity: 0,
        transition: {duration: 0.6},
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.6},
    }
}

const Furniture = () => {
    return (
        <div className="text-white max-w-[100vw] w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-black">
            <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1440px] mx-auto px-8 py-8 gap-6 xl:px-[150px] 2xl:px-[165px]">
                <motion.div viewport={{once: true}} variants={furnAnimation} initial="hidden" whileInView="visible">
                    <img className='w-[100vw] lg:w-[100%] sm:h-[550px] lg:h-[100%]' src={furniture} alt='furniture'></img>
                </motion.div>
                <div className='text-center md:text-left flex justify-between flex-col md:flex-row lg:flex-col gap-4 w-[100%] lg:w-[40%]'>
                    <p className=' md:w-[40%] lg:w-[100%] font-[900] text-[1.5rem]'>Long headline on two lines to turn your visitors into users and achieve more</p>
                    <div className='md:w-[50%] lg:w-[100%] font-[400] leading-[24px] tracking-[0.1px]'>
                        <p className='my-2'>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean</p>
                        <ul className='flex flex-col gap-3 list-disc'>
                            <li>Showcase and embed your work with </li>
                            <li>Publish across social channels in a click</li>
                            <li>Sell your videos worldwide</li>
                            <li>Embed your work with </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Furniture

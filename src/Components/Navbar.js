import logo from '../images/logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';
import {useState} from 'react'
import { motion } from "framer-motion"
import Button from '../Components/Button'

const Navbar = () => {

    const [isOpen, setIsOpen]= useState(false)

    function onClickOpen() {
        setIsOpen(!isOpen)
    }

    return (
        <motion.div transition={{y:{duration: 0.4}}} viewport={{once: true}} initial={{y: -100}} animate={{y: 0}}  className='max-w-[100vw] w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] flex justify-between items-start sm:items-center py-6 px-8'>
            <img src={logo} alt='logo'></img>
            <div className='hidden sm:flex gap-6 text-[1rem] leading-[19px] font-[500]'>
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
                <p>Link 4</p>
                <p>Link 5</p>
            </div>
            <Button standart className='hidden sm:flex'></Button>
            {!isOpen && 
                <motion.div className='sm:hidden' transition={{duration: 0.3}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <RxHamburgerMenu onClick={onClickOpen} size={25}/>
                </motion.div>}
            
            {isOpen && 
                <motion.div transition={{duration: 0.5}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                    className='sm:hidden flex flex-col gap-2 items-center text-[16px] leading-[19px] font-[500]'>
                <RxCross2 onClick={onClickOpen} size={30}/>
                <p>Link 1</p>
                <p>Link 2</p>
                <p>Link 3</p>
                <p>Link 4</p>
                <p>Link 5</p>
                <Button standart></Button>
            </motion.div>}
        </motion.div>
    )
}

export default Navbar
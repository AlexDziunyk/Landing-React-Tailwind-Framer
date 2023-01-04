import Card from './Card'
import avatar1 from '../images/avatar1.png'
import avatar2 from '../images/avatar2.png'
import avatar3 from '../images/avatar3.png'
import { motion } from "framer-motion"

const Cards = () => {
    

    return (
        <motion.div whileTap={{cursor:"grabbing"}} className='overflow-hidden cursor-grab mt-10'>
            <motion.div drag="x" dragConstraints={{right:0, left: -860}} className='flex gap-5'>
                <motion.div><Card img={avatar1}></Card></motion.div>
                <motion.div><Card img={avatar2}></Card></motion.div>
                <motion.div><Card img={avatar3}></Card></motion.div>
                <motion.div><Card img={avatar1}></Card></motion.div>
                <motion.div><Card img={avatar2}></Card></motion.div>
                <motion.div><Card img={avatar3}></Card></motion.div>
            </motion.div>
        </motion.div>
        
    )
}

export default Cards

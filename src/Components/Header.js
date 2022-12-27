import Button from './Button'
import header from '../images/header.png'
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className='gap-y-6 md:gap-y-16 flex flex-col sm:items-center lg:flex-row justify-between my-6'>
            <div className='text-center lg:text-left flex flex-col self-center gap-4 md:w-[55%] lg:w-[40%]'>
                <p className='tracking-[-1px] leading-[60px] text-[2.5rem] md:text-[3.5rem] font-[900]'>Medium length display headline</p>
                <p className='text-[1.125rem] font-[400] leading-[28px]'>Separated they live in Bookmarks right at the coast of the famous Semantics, large language </p>
                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <Button standart></Button>
                    <p className='text-[0.875rem] font-[600] leading-[20px] '>5,000 people like you have purchased this product!</p>
                </div>
            </div>
            <div >
                <img className='rounded-[13px] w-[100vw] h-[309px] sm:h-[500px] md:h-[450px] sm:object-cover lg:object-none lg:w-[100%] lg:h-[100%]' src={header} alt='header'></img>
            </div>
        </div>
    )
}

export default Header

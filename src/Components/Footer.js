import React from 'react'
import footer from '../images/footer.png'

const Footer = () => {
  return (
    <div className='py-[2em] md:py-[6em] text-white bg-black max-w-[100vw] w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]'>
        <div className='grid gap-4 xl:gap-0 grid-cols-10 max-w-[1440px] mx-auto px-8 xl:px-[150px] 2xl:px-[165px]'>
            <div className='flex justify-center md:block col-span-10 xl:col-span-2'>
                <img className='width-[100%] height-[100%]' src={footer} alt='footer'></img>
            </div>
            <div className='flex justify-between gap-4 md:gap-0 col-span-10 md:col-span-6 xl:col-span-4'>
                <div className='footer__column'>
                    <div className='footer__column-title'>First column</div>
                    <p>First page</p>
                    <p>Second page</p>
                    <p>Third page</p>
                    <p>Fourth page</p>
                </div>
                <div className='footer__column'>
                    <div className='footer__column-title'>Second column</div>
                    <p>Fifth page</p>
                    <p>Sixth page</p>
                    <p>Seventh</p>
                </div>
                <div className='footer__column'>
                    <div className='footer__column-title'>Third column</div>
                    <p>Fifth page</p>
                    <p>Sixth page</p>
                    <p>Seventh</p>
                </div>
            </div>

            <div className='footer__column items-center col-span-10 md:col-span-3 md:col-end-11'>
                <div className='footer__column-title'>Subscribe</div>
                <input placeholder='Enter email' className='color-[#FFFFFF] bg-[#262626] px-[24px] py-[12px] rounded-[40px]'></input>
                <p className='opacity-[0.4] text-[14px]'>Join our newsletter to stay up to date on features and releases</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
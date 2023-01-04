import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'

const Card = (props) => {
    const {img} = props
    return (
        <div className='pointer-events-none flex flex-col gap-14 bg-[#F3F3F3] p-[24px] min-w-[17em] '>
            <p className="text-[1.125rem]">“A testimonial describing what the person thinks about this service, product or startup in general.”</p>
            <div className='flex flex-col'>
                <div>
                    <img className='mb-4' src={img} alt='img'></img>
                </div>
                <p className='font-[700] leading-[24px] tracking-[0.1px]'>Name Surname</p>
                <div className='flex flex-row gap-4 items-end justify-between'>
                    <p className='inline text-[14px] leading-[20px] font-[400]'>Description</p>
                    <div className='flex gap-4'>
                        <img src={facebook} alt='facebook'></img>
                        <img src={twitter} alt='twitter'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

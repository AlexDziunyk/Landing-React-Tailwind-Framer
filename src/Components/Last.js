import last from '../images/last.png'
import Button from './Button'

const Last = () => {
    return (
        <div className="mt-10 max-w-[100vw] w-[100vw] relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
            <div>
                <img className='w-[100%] h-[500px] sm:h-[100%] object-cover' src={last} alt='last'></img>
                <div className='flex flex-col gap-2 items-center justify-center w-[100%] h-[100%] top-0 absolute text-[2rem] px-8 xl:px-[150px] 2xl:px-[165px]'>
                    <div className='text-[1rem] text-white text-center'>Tagline</div>
                    <div className='text-center text-[28px] sm:text-[2.5rem] font-[900] text-white'>Long headline to turn your visitors into users</div>
                    <Button className='text-[1rem]' reverse></Button>
                </div>

            </div>
        </div>
    )
}

export default Last

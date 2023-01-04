const Button = (props) => {
    const {standart, reverse, className} = props
    return (
        <>
            {standart && 
            <div 
            className={`cursor-pointer ease-in-out duration-300
            bg-black text-white hover:bg-white hover:text-black 
            font-bold px-6 py-3 rounded-[32px] ${className}`}>Action</div>}
            {reverse && 
            <div 
            className={`cursor-pointer ease-in-out duration-300
            bg-white text-black hover:bg-black hover:text-white 
            font-bold px-6 py-3 rounded-[32px] ${className}`}>Action</div>}
        </>
    )
}

export default Button

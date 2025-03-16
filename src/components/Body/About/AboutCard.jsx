import Block from '../../../assets/block.png'
// will make it dynamic and accept parameters from the parent component
function AboutCard(){
    return(
        <div className='bg-[#F5F0CD] md:max-w-[750px] sm:max-w-[500px] max-w-[325px] h-auto p-5 mt-3 mx-auto grid md:grid-cols-2 rounded-2xl
        transition-all duration-300 ease-in-out transform hover:scale-105 
        hover:shadow-lg hover:shadow-gray-400'>
            <img className='' src={Block} alt='PlaceHolder'></img>
            <div className='flex flex-col justify-center'>
                <p>
                SummerBuild is a 5-week programme focused on empowering you to learn software development. There will be workshops as well as and mentors assigned to each team for guidance. Within the programme, you will propose your own ideas and bring them to life!
                </p>
            </div>
        </div>
    )
}

export default AboutCard
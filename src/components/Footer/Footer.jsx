import LinkedInIcon from '../../assets/linkedinIcon.svg'
import InstagramIcon from '../../assets/instagramIcon.svg'
import WebIcon from '../../assets/webIcon.svg'

function Footer(){
    return(
        <div className='flex flex-col'>
            <p className='mt-20 flex w-auto justify-center'>Copyright 2025. All rights reserved.</p>
            <div className='flex w-auto justify-center'>
                <img className='w-12 mb-3 p-3' src={LinkedInIcon} alt='LinkedIn' onClick={() => {window.open("https://www.linkedin.com/company/ccds-innovation-lab/")}}></img>
                {/* <img className='w-12 mb-3 p-3' src={WebIcon} alt='PlaceHolder'></img> */}
                <img className='w-12 mb-3 p-3' src={InstagramIcon} alt='Instagram' onClick={() => {window.open("https://www.instagram.com/ntu.devhub/")}}></img>
            </div>

        </div>
    )
}

export default Footer
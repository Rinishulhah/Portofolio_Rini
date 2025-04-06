import HoverImg from './HoverImg';
import aboutImg from '../assets/blueblop.jpg';
import about1 from '../assets/ab1.jpeg';
import about2 from '../assets/ab2.jpeg';
import about3 from '../assets/ab3.jpeg';
import about4 from '../assets/ab4.jpg';


import Tabs from './Tabs';

const About = () => {
    return (
        <div id="about">
            <div className="mt-20 border-b border-neutral-700 pb-20">


                <div className="flex flex-wrap-reverse justify-center gap-8">
                    <div className="grid grid-cols-2 gap-2 max-w-[400px] lg:w-1/3">
                        <HoverImg imageUrl={about1} text="My Cat, Iteng" />
                        <HoverImg imageUrl={about2} text="My hanging out activities with friends :)" />
                        <HoverImg imageUrl={about4} text="Some printmaking!" />
                        <HoverImg imageUrl={about3} text="I chillin on playing game" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className='mb-2 border-b border-neutral-700 pb-2'>
                            <a href="https://www.linkedin.com/in/rini-shulhah-018080275/"  target="_blank" className='float-right mx-2 my-3 border-2 hover:scale-105 hover:bg-gradient-to-l transition-all px-2 rounded-md border-pink-500 font-medium text-pink-400'>Art Portfolio</a>

                            <h2 className='text-xl lg:text-2xl font-medium'>About Me</h2>
                            <p className='text-md lg:text-l leading-8 pb-2'>I place great value on attention to detail, precision, and accuracy. Love to share and discuss about technical skills, such as SQL, Xampp and command prompt etc. </p>

                            <p className='text-md lg:text-l leading-8'>Outside of school, I enjoy listening to music, hanging out with friends, and relaxing with my cat, Playing game.</p>
                        </div>
                        <Tabs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

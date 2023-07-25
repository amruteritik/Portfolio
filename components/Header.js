
import Link from 'next/link';

import Socials from  '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ' >
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 pt-5' >
            <Link  href={'/'} >
                  {/* <Image src={'/logo.svg'} width={220} height={48} alt='' priority={true}/> */}
                  <h1 className='h2 md:text-3xl text-xl' > <span className="text-accent">Ritik</span> <span className='text-slate-400 ' >|</span> Full Stack Developer</h1>
            </Link>
            <Socials />
          </div>
        </div>
    </header>
  )
};

export default Header;

import Link from 'next/link';

import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinBoxLine
} from 'react-icons/ri'



const Socials = () => {
  return (
    <div className='flex item-center gap-x-10 text-lg m-0 p-0' >
  
      <Link href={'https://github.com/amruteritik'} target='_blank' className='hover:text-accent transition-all duration-300 '  >
            <RiGithubLine size='1.5rem' />
      </Link>
      <Link href={'https://www.linkedin.com/in/ritik-amrute-87720a231'} target='_blank' className='hover:text-accent transition-all duration-300'  >
            <RiLinkedinBoxLine size='1.5rem' />
      </Link>
      <Link href={'https://instagram.com/ritik_amrute?igshid=MzNlNGNkZWQ4Mg=='} target='_blank' className='hover:text-accent transition-all duration-300'  >
            <RiInstagramLine size='1.5rem' />
      </Link>
      {/* <Link href={''} className='hover:text-accent transition-all duration-300'  >
            <RiFacebookBoxLine />
      </Link> */}
    </div>
  )
};

export default Socials;

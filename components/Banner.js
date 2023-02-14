import Image from 'next/image';
import React from 'react';
import bannerLogo from '../public/twoplaysamonth/NavbarLogo.png'

const Banner = () => {
   return (
      <section className='text-white flex items-center justify-center min-h-[50vh] text-center bg-indigo-500/50 mt-8 px-4 py-8'>
         <div className=' flex flex-col gap-4 justify-center items-center md:w-3/4'>
            <div className='md:w-96'>
            <Image src={bannerLogo} />
            </div>
            <p className='font-body'>ReactPlay brings you an opportunity to participate in the month-long drive to learn and contribute to Open Source. Join the #2PlaysAMonth and build two projects(plays) in the month of February. You will learn from expert code reviews while contributing to Open Source - you may also win some exciting prizes.</p>
            <button className='bg-slate-800 text-white uppercase px-20 py-3 rounded font-bold hover:bg-slate-700 transition-all font-body'>Get started</button>
         </div>
      </section>
   );
};

export default Banner;
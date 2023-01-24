import React from 'react';

const Banner = ({recentEvent}) => {
   return (
      <section className='text-slate-800 px-1 md:px-0 flex items-center justify-center min-h-[50vh] text-center bg-cyan-200'>
         <div className=' flex flex-col gap-4 justify-center items-center'>
            <h1 className='md:text-5xl text-3xl font-bold'>{recentEvent.name}</h1>
            <p>{recentEvent.description}</p>
            <button className='bg-slate-800 text-white uppercase md:px-20 px-14 py-3 rounded font-bold hover:bg-slate-700 transition-all'>Get started</button>
         </div>
      </section>
   );
};

export default Banner;

import bannerLogo from '../public/twoplaysamonth/NavbarLogo.png'
import bannerImg from '@/public/twoplaysamonth/twoPlaysAMonthBanner.png'

const Banner = ({}) => {
   return (
      <section className={` bg-[url('../public/twoplaysamonth/twoPlaysAMonthBanner.png')] md:h-[400px] h-[400px] lg:min-h-[400px] xl:min-h-[500px] bg-center  bg-cover bg-no-repeat relative`}>
         <div className='flex align-center w-full  justify-center absolute bottom-24 md:bottom-4'>
          
            <button className='bg-[#010326] text-white uppercase px-20 py-3 rounded font-bold hover:bg-slate-900 transition-all font-body'>Get started</button>
         </div>
      </section>
   );
};

export default Banner;

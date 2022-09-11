import styles from '../../styles/idea.module.css';
import UserAvatar from '../../images/user_avatar.png';
import Image from 'next/image';

const Card = () => {
  return (
    <div className={`${styles.card} text-black bg-white grid grid-rows-4 grid-cols-1`}>
      <div className=" items-center justify-items-center grid grid-rows-1 grid-cols-2 " >
        <h3 className=" text-3xl font-semibold">
          Idea title
        </h3>
        <Image
          className="justify-self-center"
          height={70}
          width={70}
          layout={'fixed'}
          src={require('/images/user_avatar.png')}
          alt={'user avatar'} aria-label='user avatar' />
      </div>
      <div className="row-span-2 mt-9  ">
        <p className='text-center text-base font-light'>
          Ea rebum dolore ut est sea et est,
          amet labore eirmod labore eirmod dolore duo dolores,
          et gubergren sed invidunt ipsum. Erat diam ipsum eirmod
          amet lorem. Takimata invidunt erat sit ut et vero.
          Amet lorem ipsum sea dolores. Sadipscing elitr sea
        </p>
      </div>
      <div className=" flex justify-center items-end">
        <button className=' text-white border-0 rounded h-8 w-32  inline  bg-green-500 '>
          In progress
        </button>
      </div>
    </div>
  );
}
export default Card;
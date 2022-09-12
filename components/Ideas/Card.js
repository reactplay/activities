import styles from '../../styles/idea.module.css';
import UserAvatar from '../../images/user_avatar.png';
import Image from 'next/image';

const Card = ({ data, style }) => {
  const bgColor = data.status === 'Submitted' ?
    styles.statusBtnSubmitted :
    data.status === 'Not Started' ?
      styles.statusBtnNotStarted :
      styles.statusBtnInProgress
  return (
    <div style={style} className={`${styles.card} text-black bg-white grid grid-rows-4 grid-cols-1`}>
      <div className=" items-center justify-items-center grid grid-rows-1 grid-cols-2 " >
        <h3 className=" text-3xl font-semibold">
          {data.title}
        </h3>
        <div>
          {
            data.avatar_url.map((value, index) => {
              const styleAvaratr = index === 1 ? `${styles.cardAvatar2nd}  justify-self-center` : `${styles.cardAvatar} justify-self-center`;
              return (
                <Image
                  key={value + index.toString()}
                  className={data.avatar_url.length > 1 ? styleAvaratr : "cardAvatarSingle"}
                  height={70}
                  width={70}
                  layout={'fixed'}
                  src={data.avatar_url[0]}
                  alt={'user avatar'} aria-label='user avatar' />
              );
            })
          }

        </div>

      </div>
      <div className="row-span-2 mt-9  ">
        <p className='text-center text-base font-light'>
          {data.description}
        </p>
      </div>
      <div className=" flex justify-center items-end">
        <button className={` text-white border-0 rounded h-8 w-32  inline ${bgColor}`}>
          {data.status}
        </button>
      </div>
    </div>
  );
}
export default Card;
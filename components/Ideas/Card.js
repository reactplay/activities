import styles from '../../styles/idea.module.css';
import UserAvatar from '../../images/user_avatar.png';
import Image from 'next/image';
import { useState } from 'react';

const Card = ({ data, style }) => {
  const [nameVisibility, setNameVisibility] = useState(false);
  const bgColor = data.status === 'Submitted' ?
    styles.statusBtnSubmitted :
    data.status === 'Not Started' ?
      styles.statusBtnNotStarted :
      styles.statusBtnInProgress
  const userNameStyle = data.displayName.length > 1 ? "col-span-2 justify-self-end" : "col-start-2 justify-self-center";
  return (
    <div style={style} key={data.id} className={`${styles.card} text-black bg-white grid grid-rows-4 grid-cols-1`}>
      <div className=" items-center justify-items-center grid grid-rows-2 grid-cols-2 " >
        <h3 className=" text-3xl font-semibold">
          {data.title}
        </h3>
        <div className="mt-3">
          {
            data.avatarUrl.map((value, index) => {
              const styleAvaratr = index === 1 ? `${styles.cardAvatar2nd}  justify-self-center` : `${styles.cardAvatar} justify-self-center`;
              return (
                <Image
                  onMouseEnter={() => setNameVisibility(true)}
                  onMouseLeave={() => setNameVisibility(false)}
                  key={value + index.toString()}
                  className={data.avatarUrl.length > 1 ? styleAvaratr : styles.cardAvatarSingle}
                  height={70}
                  width={70}
                  layout={'fixed'}
                  src={data.avatarUrl[index]}
                  alt={'user avatar'} aria-label='user avatar' />
              );
            })
          }
        </div>
        <div className={`${userNameStyle} mt-2`}>
          {
            nameVisibility ?
              data.displayName.map((value, index) => {
                return (
                  <span className=" text-base font-semibold" key={value}>
                    {value}
                    {data.displayName.length === 2 && index === 0 ? <>,</> : null}
                  </span>
                );
              })
              : null
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
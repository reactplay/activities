import styles from '../../styles/idea.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { Grid, Card, CardContent } from '@mui/material';


const IdeaCard = ({ data }) => {
  const [nameVisibility, setNameVisibility] = useState(false);
  const bgColor = data.status === 'Submitted' ?
    styles.statusBtnSubmitted :
    data.status === 'Not Started' ?
      styles.statusBtnNotStarted :
      styles.statusBtnInProgress

  return (
    <Card className={styles.card} sx={{ minWidth: 361, maxWidth: 361, minHeight: 350 }}>
      <CardContent>
        <Grid container spacing={{ md: 2 }} columns={{ xs: 2 }} >
          <Grid item xs={1} md={1} className="flex justify-center ">
            <h3 className=" text-3xl font-semibold">
              {data.title}
            </h3>
          </Grid>
          <Grid item xs={1} md={1} className=" flex justify-end">
            {
              data.avatarUrl.map((value, index) => {
                const styleAvaratr = index === 1 ? `${styles.cardAvatar2nd}  justify-self-center` : `${styles.cardAvatar} justify-self-center`;
                return (
                  <Image
                    onMouseEnter={() => { console.log("hello"); setNameVisibility(true); }}
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
          </Grid>
        </Grid>
        <Grid container justifyContent={"flex-end"} className='h-8' >
          {
            nameVisibility ?
              data.displayName.map((value, index) => {
                return (
                  <Grid item className=" text-base font-semibold" key={value}>
                    {value}
                    {data.displayName.length === 2 && index === 0 ? <>,</> : null}
                  </Grid>
                );
              })
              : <></>
          }
        </Grid>
        <Grid container className=" h-44 mt-4" justifyContent={"center"}>
          <p className='text-center text-base font-light'>
            {data.description}
          </p>
        </Grid>
        <Grid container justifyContent={"center"}>
          <button className={` text-white border-0 rounded h-8 w-32  inline ${bgColor}`}>
            {data.status}
          </button>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default IdeaCard;
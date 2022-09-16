import styles from '../../styles/idea.module.css';
import Image from 'next/image';
import { Grid, Card, Typography } from '@mui/material';
import InProgress from '/public/Idea-List/inProgress.svg';
import Complted from '/public/Idea-List/completed.svg';
import NotStarted from '/public/Idea-List/notStart.svg';


const IdeaCard = ({ data }) => {

  const [image, color] = data.status === 'Submitted' ?
    [Complted, '#68FDC6'] :
    data.status === 'Not Started' ?
      [NotStarted, '#FD6868'] :
      data.status === 'In Progress' ?
        [InProgress, '#FDC668'] : [null, null];


  return (
    <Card className={styles.card} variant="outlined">
      <Grid container

        columns={{ xs: 1 }}
        className={" pt-12 px-8 h-72"}
      >
        <Grid item xs={1} className={""}>
          <Typography variant='h5' color="#00F2FE">
            {data.title}
          </Typography>
        </Grid>
        <Grid item xs={1}
          className="">
          <div
            className={styles.cardDescription}
            dangerouslySetInnerHTML={{ __html: data.description }} />
        </Grid>
        <Grid item xs={1}
          alignSelf={"flex-end"}>
          <Grid
            columns={12}
            container >
            <Grid item
              className="flex"
              xs={6} >
              {
                data.avatarUrl.map((value, index) => {
                  const styleAvaratr = index === 1 ? `${styles.cardAvatar2nd}  justify-self-center` : `${styles.cardAvatar} justify-self-center`;
                  return (
                    <>
                      {
                        value && (
                          // <Grid item xs={6}>
                          <Image
                            key={value + index.toString()}
                            className={data.avatarUrl.includes(undefined) ? styles.cardAvatarSingle : styleAvaratr}
                            height={50}
                            width={50}
                            layout={'fixed'}
                            src={data.avatarUrl[index]}
                            alt={'user avatar'} aria-label='user avatar' />
                          // </Grid>
                        )
                      }
                    </>
                  );
                })
              }
            </Grid>
            <Grid item
              xs={6}
              className="flex flex-row justify-center gap-2 items-center ">
              <Image src={image !== null ? image : ""} alt={`status ${data.status}`} />
              <Typography variant={"body2"} color={color}>
                {data.status}
              </Typography>

            </Grid>
          </Grid>
        </Grid>
      </Grid >
    </Card >
  );
}
export default IdeaCard;

{/* <Grid item xs={1}>
            <Typography variant='h6'>
              {data.title}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant='subtitle2'>
              {data.title}
            </Typography>
          </Grid> */}
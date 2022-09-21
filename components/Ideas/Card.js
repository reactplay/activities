import styles from "../../styles/idea.module.css";
import Image from "next/image";
import { Grid, Card, Typography } from "@mui/material";
import InProgress from "/public/Idea-List/inProgress.svg";
import Complted from "/public/Idea-List/completed.svg";
import NotStarted from "/public/Idea-List/notStart.svg";

const IdeaCard = ({ data }) => {
  const [image, color] =
    data.status === "Submitted"
      ? [Complted, "#68FDC6"]
      : data.status === "Not Started"
      ? [NotStarted, "#FD6868"]
      : data.status === "In Progress"
      ? [InProgress, "#FDC668"]
      : [NotStarted, "#FD6868"];

  return (
    <Card className={styles.card} variant="outlined">
      <Grid container columns={{ xs: 1 }} className={" pt-12 px-8 h-72"}>
        <Grid item xs={1} className={""}>
          <Typography
            variant="h5"
            className={`${styles.title} `}
            color="#00F2FE"
          >
            {data.title}
          </Typography>
        </Grid>
        <Grid item xs={1} className="">
          <div
            className={`${styles.cardDescription}`}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </Grid>
        <Grid item xs={1} alignSelf={"flex-end"}>
          <Grid columns={12} container>
            <Grid
              item
              style={{
                position: "relative",
                top: 0,
                left: 0,
              }}
              className="flex"
              xs={6}
            >
              {data.avatarUrl.map((value, index) => {
                return (
                  <div
                    className={
                      !data.avatarUrl.includes(undefined) && index === 1
                        ? styles.cardParent
                        : null
                    }
                  >
                    {value && (
                      <Image
                        key={value + index.toString()}
                        className={styles.cardAvatar}
                        height={50}
                        width={50}
                        layout={"fixed"}
                        src={data.avatarUrl[index]}
                        alt={"user avatar"}
                        aria-label="user avatar"
                      />
                    )}
                  </div>
                );
              })}
            </Grid>
            <Grid
              item
              xs={6}
              className="flex flex-row justify-center gap-2 items-center "
            >
              {image !== null ? (
                <Image src={image} alt={`status ${data.status}`} />
              ) : null}

              <Typography
                variant={"body2"}
                color={color}
                className={styles.cardStatus}
              >
                {data?.status?.toUpperCase() || "NOT STARTED"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default IdeaCard;

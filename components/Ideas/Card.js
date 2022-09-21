import styles from "../../styles/idea.module.css";
import Image from "next/image";
import { Grid, Card, Typography } from "@mui/material";
import InProgress from "/public/Idea-List/inProgress.svg";
import Complted from "/public/Idea-List/completed.svg";
import NotStarted from "/public/Idea-List/notStart.svg";

const IdeaCard = ({ data, onClick }) => {
  // const [image, color] =
  //   data.status.label === "Submitted"
  //     ? [Complted, "#68FDC6"]
  //     : data.status === "Not Started"
  //     ? [NotStarted, "#FD6868"]
  //     : data.status === "In Progress"
  //     ? [InProgress, "#FDC668"]
  //     : [NotStarted, "#FD6868"];

  const get_status_style = (status) => {
    const status_label = status.label || "";
    console.log(status.label);
    switch (status_label) {
      case "Submitted":
        console.log(1);
        return {
          image: Complted,
          color: "#68FDC6",
        };
      case "In Progress":
        console.log(2);
        return {
          image: InProgress,
          color: "#FDC668",
        };
      case "Not Started":
      default:
        console.log(3);
        return {
          image: NotStarted,
          color: "#FD6868",
        };
    }
  };
  return (
    <Card className={styles.card} variant="outlined" onClick={() => onClick()}>
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
                    key={index}
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
              <Image
                src={get_status_style(data?.status).image}
                alt={`status ${data.status.label}`}
              />

              <Typography
                variant={"body2"}
                color={get_status_style(data?.status).color}
                className={styles.cardStatus}
              >
                {data?.status?.label.toUpperCase() || "NOT STARTED"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default IdeaCard;

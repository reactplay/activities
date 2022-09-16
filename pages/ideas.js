import IdeaCard from "/components/Ideas/Card";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import { listIdea } from "../services/graphql/ideas";
import Typography from '@mui/material/Typography';
import { CTA } from "/components/Hack-R-Play";
import DottedAndFilledTriangle from "/public/Hack-R-Play/DottedAndFilledTriangle.svg";
import Flower from "/public/Hack-R-Play/Flower.svg";
import Logo from "/public/Logo.png";
import Link from "next/link";
import styles from '/styles/idea.module.css'



const IdeaListingPage = () => {
  const [ideas, setIdeas] = useState([]);

  async function dataFetcher() {
    try {
      const result = await listIdea();
      let tempData = [];
      for (const idea of result) {

        let interObj = {
          title: idea.title,
          description: idea.description,
          avatarUrl: [idea.idea_members_map?.user_id_map.avatarUrl, idea.idea_owner_map?.avatarUrl],
          tinkers: [idea.idea_members_map?.user_id_map.displayName, idea.dea_owner_map?.displayName],
          status: idea.idea_status_map?.status_id_map?.label
        };

        tempData.push(interObj);
      }
      setIdeas(tempData);
    } catch (e) {

    }
  }



  useEffect(() => {
    dataFetcher();
  }, [])



  return (
    <Layout title="HACK-R-PLAY" description="A hackathon hosted by ReactPlay">
      <div className="absolute left-8 top-12 md:top-2">
        <Image
          src={Logo}
          alt="React play Logo"
          width={230}
          height={50}
          layout="fixed"
        />
      </div>
      <div className="absolute left-9 -top-10">
        <Image
          src={DottedAndFilledTriangle}
          alt="Dotted And Filled Triangle"
          width={220}
          height={220}
        />
      </div>
      <div className="absolute -right-60 -top-48">
        <Image src={Flower} alt="Flower" width={500} height={500} />
      </div>
      <div className={`absolute top-48 md:top-3 right-32 md:right-10 ${styles.registerBtn}`}>
        <Link href={""}>
          <a className=" font-semibold  text-lg ">
            REGISTER NOW
          </a>
        </Link>
      </div>
      <Grid container
        columns={{ xs: 12, md: 12 }}
        alignItems={"center"}
        className="md:px-10 my-20 "
        justifyContent={"center"}>
        <Grid
          xs={12}
          md={12}

          items container justifyContent={"center"}>
          <Grid item xs={12} md={12}>
            <Typography variant="h4" className="text-center" color={"#ffffff"}>
              SUBMISSIONS
            </Typography>
          </Grid>
          <Grid item
            container
            justifyContent={"center"}
            xs={12} md={12}>
            <div className={`${styles.underLine} w-20 mt-2 `}></div>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12} md={12}
          spacing={0}
          rowSpacing={2}
          columns={{ xs: 12, md: 12 }}
          className=" py-16 md:px-10">
          {ideas.map((value) => {
            return (
              <Grid item
                container
                justifyContent={"center"}
                xs={12}
                md={4}>
                <IdeaCard data={value} />
              </Grid>
            );
          })}
        </Grid>

      </Grid>
      <CTA
        title="Be a part of the best react event"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            est ultricies integer quis. Iaculis urna id volutpat lacus laoreet."
      />
    </Layout >
  );


};



export default IdeaListingPage;

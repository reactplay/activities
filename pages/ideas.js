import IdeaCard from "/components/Ideas/Card";
import styles from '/styles/idea.module.css';
import { useQuery } from '@apollo/client';
import ideaQuery from '/queries/fetch-ideas.gql';
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";


const IdeaListingPage = () => {
  const { loading, error, data } = useQuery(ideaQuery);
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {

    if (data) {
      const ideas = data.hackathon_idea_status;
      const members = data.hackathon_ideas_members;
      let ideaWithMem = [];
      for (let a of ideas) {
        let interHolder = {
          ideaId: a.idea_id,
          title: a.idea_id_map.title,
          description: a.idea_id_map.description,
          status: a.status_id_map.label,
          displayName: [],
          avatarUrl: []
        };
        for (let b of members) {
          if (b.idea_id === a.idea_id) {
            interHolder['displayName'].push(b.user_id_map.displayName);
            interHolder['avatarUrl'].push(b.user_id_map.avatarUrl);
          }
        }
        ideaWithMem.push(interHolder);
      }
      setIdeas(ideaWithMem);
    }

  }, [data])



  return (
    <Layout title="HACK-R-PLAY" description="A hackathon hosted by ReactPlay">
      {
        loading ? <p className=" text-white text-center mt-10 font-bold">
          We are coming ....
        </p>
          :
          <>
            {
              ideas.length === 0 ? <p className=" h-screen bg-white text-black  text-center pt-36 font-bold">
                Brain stroming ideas are coming soon...
              </p>
                :
                <main className="flex justify-center bg-white pt-5 pb-5 pl-4 pr-4">
                  <Grid container
                    spacing={{ md: 1 }} rowSpacing={2}
                    columns={{ xs: 1, md: 2, lg: 3 }}>
                    {
                      ideas.map((value) => {
                        return (
                          <Grid item className="flex justify-center" xs={1} md={1} >
                            <IdeaCard data={value} />
                          </Grid>
                        );
                      })
                    }
                  </Grid>
                </main>
            }</>
      }
    </Layout >
  );


};



export default IdeaListingPage;

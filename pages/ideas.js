import Card from "/components/Ideas/Card";
import styles from '/styles/idea.module.css';
import { Grid, AutoSizer } from "react-virtualized";
import { useQuery } from '@apollo/client';
import ideaQuery from '/queries/fetch-ideas.gql';
import Layout from "../components/Layout";
import { useEffect, useState } from "react";


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
  const CellRender = (columnIndex, key, rowIndex, style) => {
    const row = Number(rowIndex.split("-")[0]);
    const ind = (row * 3) + columnIndex;

    if (ind < ideas.length) {
      return (
        <Card data={ideas[ind]} style={style} />
      );
    }
    return null;

  }


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
                <main className={`${styles.container} `}>
                  <AutoSizer>
                    {
                      ({ width, height }) => {
                        return (
                          <Grid
                            cellRenderer={({ columnIndex, key, rowIndex, style }) => (CellRender(columnIndex, rowIndex, key, style))}
                            columnWidth={380}
                            height={height}
                            containerStyle={{
                              marginLeft: '5%',
                              display: 'flex',
                              justifyContent: 'center'
                            }}
                            columnCount={3}
                            overscanColumnCount={1}
                            overscanRowCount={1}
                            rowHeight={430}
                            rowCount={Math.ceil(ideas.length / 3)}
                            width={width}
                          />

                        );
                      }
                    }
                  </AutoSizer>
                </main>
            }</>
      }
    </Layout >
  );


};



export default IdeaListingPage;

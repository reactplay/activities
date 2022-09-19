import IdeaCard from "/components/Ideas/Card";
import { useEffect, useState } from "react";
import { list_ideas } from "@/services/graphql/ideas";
import LayoutWrapper from "@/components/LayoutWrapper";
import { CTA } from "@/components/Hack-R-Play";
import gstyles from "@/styles/Home.module.css";
import { Pagination, Stack, Grid } from "@mui/material";
import SortButtons from "@/components/SortButtons";
import { useRouter } from "next/router";

const IdeaListingPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadIdeas();
  }, []);

  const loadIdeas = (button) => {
    console.log("here", button);
    setIsLoading(true);
    const prom = undefined;
    if (button) {
      prom = list_ideas(10, button.field, button.asc ? "asc" : "desc");
    } else {
      prom = list_ideas(prom);
    }

    prom
      .then((res) => {
        processResultData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onCardClicked = (id) => {
    router.push(`/ideas/${id}`);
  };

  const processResultData = (result) => {
    let tempData = [];
    for (const idea of result) {
      let interObj = {
        title: idea.title,
        description: idea.description,
        id: idea.id,
        avatarUrl: [
          idea.idea_members_map?.user_id_map.avatarUrl,
          idea.idea_owner_map?.avatarUrl,
        ],
        tinkers: [
          idea.idea_members_map?.user_id_map.displayName,
          idea.dea_owner_map?.displayName,
        ],
        status: idea.idea_status_map?.status_id_map?.label,
      };

      tempData.push(interObj);
    }
    setIdeas(tempData);
  };

  return (
    <LayoutWrapper
      title="HACK-R-PLAY"
      description="A hackathon hosted by ReactPlay"
    >
      <div className="z-[9]">
        <div className="h-14 p-16 flex  items-center justify-center">
          <h2
            className={`font-primary text-5xl uppercase text-white tracking-wide ${gstyles["page-title"]}`}
          >
            SUBMISSIONS
          </h2>
        </div>
        <div className="flex justify-end">
          <div>
            <SortButtons
              onChange={(b) => loadIdeas(b)}
              buttons={[
                { label: "Created", field: "created_at" },
                { label: "Updated", field: "updated_at" },
                { label: "Name", field: "name" },
              ]}
            />
          </div>
        </div>

        <Grid
          container
          item
          xs={12}
          md={12}
          spacing={2}
          rowSpacing={2}
          columns={{ xs: 12, md: 12, lg: 12 }}
          className=" py-16 md:px-10"
        >
          {ideas.map((value, vi) => {
            return (
              <Grid
                key={vi}
                item
                container
                justifyContent={"center"}
                xs={12}
                sm={6}
                md={6}
                lg={4}
                xl={3}
                className="z-[9]"
              >
                <IdeaCard
                  data={value}
                  onClick={() => onCardClicked(value.id)}
                />
              </Grid>
            );
          })}
          <div className="py-4 flex items-center justify-center w-full">
            <Pagination count={10} color="primary" />
          </div>
        </Grid>

        <CTA
          title="Be a part of the best react event"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            est ultricies integer quis. Iaculis urna id volutpat lacus laoreet."
        />
      </div>
    </LayoutWrapper>
  );
};

export default IdeaListingPage;

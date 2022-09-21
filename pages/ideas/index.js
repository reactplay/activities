import IdeaCard from "@/components/Ideas/Card";
import { useEffect, useState } from "react";
import { idea_count, list_ideas } from "@/services/graphql/ideas";
import LayoutWrapper from "@/components/LayoutWrapper";
import { CTA } from "@/components/Hack-R-Play";
import gstyles from "@/styles/Home.module.css";
import { Grid } from "@mui/material";
import SortButtons from "@/components/SortButtons";
import Pagination from "@/components/Pagination";
import { useRouter } from "next/router";

const PAGE_SIZE = 12;

const IdeaListingPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [ideaCount, setIdeaCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadIdeas();
  }, []);

  const loadIdeas = (button, pageno) => {
    setIsLoading(true);
    const prom = undefined;
    const promises = [];
    if (button) {
      promises.push(
        list_ideas(
          pageno || 1,
          button.field,
          button.asc ? "asc" : "desc",
          PAGE_SIZE
        )
      );
    } else {
      promises.push(list_ideas(pageno || 1, "created_at", "asc", PAGE_SIZE));
    }
    promises.push(idea_count());

    Promise.all(promises)
      .then((res) => {
        processResultData(res[0]);
        setIdeaCount(res[1]);
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
        <div className="h-14 p-16 flex flex-col items-center justify-center">
          <h2
            className={`font-primary text-5xl uppercase text-white tracking-wide ${gstyles["page-title"]}`}
          >
            SUBMISSIONS
          </h2>
          <div className="text-[#ffffff99] py-4"> Total: {ideaCount}</div>
        </div>
        <div className="flex justify-end">
          <div>
            <Pagination
              total={ideaCount}
              pagesize={PAGE_SIZE}
              onChange={(pageno) => loadIdeas(undefined, pageno)}
            />
          </div>
          <div>
            <SortButtons
              onChange={(b) => loadIdeas(b)}
              buttons={[
                { label: "Date", field: "created_at" },
                { label: "Name", field: "title" },
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
          {/* <div className="py-4 flex items-center justify-center w-full">
            <Pagination count={10} color="primary" />
          </div> */}
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

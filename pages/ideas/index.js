import IdeaCard from "@/components/Ideas/Card";
import { useEffect, useState } from "react";
import { idea_count, list_ideas } from "@/services/graphql/ideas";
import LayoutWrapper from "@/components/LayoutWrapper";
import { CTA } from "@/components/Hack-R-Play";
import gstyles from "@/styles/Home.module.css";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import IdeaFilters from "@/components/Hack-R-Play/IdeaFilter";
import { useAuthenticationStatus, useUserData } from "@nhost/nextjs";
import { PrimaryButton } from "@/components/Buttons";
import { get_latest_status } from "@/services/graphql/status";
import { unescape_new_line } from "@/services/util/string";
import { Config } from "@/services/metadata/hackrplay22";

const PAGE_SIZE = 12;

const IdeaListingPage = () => {
  const { isAuthenticated } = useAuthenticationStatus();
  const [ideas, setIdeas] = useState([]);
  const [ideaCount, setIdeaCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const userData = useUserData();

  useEffect(() => {
    loadIdeas();
  }, []);

  const loadIdeas = (filter) => {
    setIsLoading(true);
    const promises = [];
    console.log(filter);
    promises.push(
      list_ideas(filter || { pagesize: PAGE_SIZE }, userData?.id).then(
        (res) => {
          if (res && res.length) {
            res.forEach((i) => {
              i.description = unescape_new_line(i.description);
            });
          }
          return res;
        }
      )
    );
    promises.push(idea_count(filter, userData?.id));

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
    router.push(`ideas/${id}`);
  };

  const redirectToRegistration = () => {
    router.push("registration");
  };

  const processResultData = (result) => {
    let tempData = [];
    for (const idea of result) {
      let interObj = {
        title: idea.title,
        description: idea.description,
        id: idea.id,
        comment_count: idea.idea_comments_map_aggregate.aggregate.count,
        like_count: idea.idea_like_map_aggregate.aggregate.count,
        avatarUrl: [
          idea.idea_members_map?.user_id_map.avatarUrl,
          idea.idea_owner_map?.avatarUrl,
        ],
        tinkers: [
          idea.idea_members_map?.user_id_map.displayName,
          idea.dea_owner_map?.displayName,
        ],
        status: get_latest_status(idea),
      };

      tempData.push(interObj);
    }
    setIdeas([...tempData]);
  };

  return (
    <LayoutWrapper
      title="HACK-R-PLAY"
      description="A hackathon hosted by ReactPlay"
      metainfo={Config}
    >
      <div className="relative z-[9]">
        <div className="h-14 p-16 flex flex-col items-center justify-center">
          <h2
            className={`font-primary text-5xl uppercase text-white tracking-wide ${gstyles["page-title"]}`}
          >
            SUBMISSIONS
          </h2>
          <div className="text-[#ffffff99] py-4"> Total: {ideaCount}</div>
        </div>
        <div className="container mx-auto max-w-screen-xl mb-6">
          <IdeaFilters
            total={ideaCount}
            isAuthenticated={isAuthenticated}
            pagesize={PAGE_SIZE}
            onChange={(f) => loadIdeas(f)}
          ></IdeaFilters>
        </div>
        <div className="container mx-auto max-w-screen-xl z-2 pb-32 xl:px-0 px-8">
          <Grid
            container
            item
            xs={12}
            md={12}
            spacing={0}
            rowSpacing={3}
            columns={{ xs: 12, md: 12, lg: 12 }}
            className="md:px-10 container mx-auto max-w-screen-xl"
          >
            {ideas.length === 0 ? (
              <div className="w-full py-10 flex flex-col justify-center items-center z-[9] text-brand-hightlight">
                <div className="text-3xl ">No idea has been added yet.</div>
              </div>
            ) : (
              <>
                {ideas.map((value, vi) => {
                  return (
                    <Grid
                      key={vi}
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={4}
                      xl={3}
                      p={1}
                    >
                      <IdeaCard
                        data={value}
                        onClick={() => onCardClicked(value.id)}
                      />
                    </Grid>
                  );
                })}
              </>
            )}
          </Grid>
        <div className="flex justify-center mt-4">
        <PrimaryButton
            handleOnClick={() => {
              router.push("/registration");
            }}
          >
            {`Register now`}
          </PrimaryButton>
        </div>
        </div>
        <CTA
          title="Be a part of the best react event"
          description="Learning is a journey than a destination. We developers need avenues, motivations, and opportunities to keep going. Join the Hack-R-Play hackathon to experience it. It will allow you to build a full-stack app using React and Nhost. Why waiting? Register your idea today."
          metainfo={Config}
        />
      </div>
    </LayoutWrapper>
  );
};

export default IdeaListingPage;

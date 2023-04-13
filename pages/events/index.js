import Layout from "@/components/Layout";
import EventIndexCardWithDetails from "@/components/event/EventIndexCardWithDetails";
import { Config } from "@/services/metadata/home";


function index() {
    return (
      <Layout title="The Hustle Home page" metainfo={Config}>
        <section
          id="events"
          className="flex flex-col items-center justify-center w-full mx-auto px-4 py-16 min-h-screen bg-gray-50"
        >
          <h1 className="text-5xl font-raleway">
            <span className="font-black font-body text-[#010326]">Events</span>
          </h1>

          <div className="flex flex-col pt-16 lg:grid lg:grid-cols-3 justify-center items-center gap-10 lg:gap-20">
            {Config.events?.map((event) => (
              <EventIndexCardWithDetails key={`event_key-${event.id}`} event={event} />
            ))}
          </div>
        </section>
      </Layout>
    );
}

export default index
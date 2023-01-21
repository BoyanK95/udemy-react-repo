import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../components/dummy_meetups/DUMMY_MEETUPS";
import Layout from "../components/layout/Layout";

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
}

export default HomePage;

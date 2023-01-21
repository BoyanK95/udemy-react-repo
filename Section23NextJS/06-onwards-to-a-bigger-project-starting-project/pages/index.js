import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../components/dummy_meetups/DUMMY_MEETUPS";

function HomePage() {
  return (
      <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;

import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_MEETUPS } from "../components/dummy_meetups/DUMMY_MEETUPS";

function HomePage(props) {

  return (
      <MeetupList meetups={props.meetups} />
  );
}

export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage;

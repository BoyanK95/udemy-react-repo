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
    },
    revalidate: 10
  }
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res
//   //fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage;

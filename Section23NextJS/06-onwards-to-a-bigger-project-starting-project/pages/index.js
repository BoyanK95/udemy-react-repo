import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://Boyan95:12345678910@cluster0.gxnjcll.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map(meetup =>({
        title:meetup.title,
        address: meetup.address,
        image: meetup.img,
        id: meetup._id.toString()
      }) )
    },
    revalidate: 10,
  };
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

import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse and schedule a meeting in out React meetups App!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://Boyan95:12345678910@cluster0.gxnjcll.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.img,
        id: meetup._id.toString(),
      })),
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

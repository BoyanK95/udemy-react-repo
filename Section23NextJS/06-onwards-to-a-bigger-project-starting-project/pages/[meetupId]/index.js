import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      img="https://thumbs.dreamstime.com/b/colorful-sunset-over-cathedral-assumption-varna-aerial-view-aerial-view-cathedral-assumption-varna-143782588.jpg"
      title="First Meet up"
      address="Todor Dimov 33, Varna"
      description="This is a first meetup"
    />
  );
}

export function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "meet1",
        },
      },
      {
        params: {
          meetupId: "meet2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meet up
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        img: "https://thumbs.dreamstime.com/b/colorful-sunset-over-cathedral-assumption-varna-aerial-view-aerial-view-cathedral-assumption-varna-143782588.jpg",
        id: meetupId,
        title: "First Meet up",
        address: "Todor Dimov 33, Varna",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;

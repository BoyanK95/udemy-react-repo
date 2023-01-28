//domain.com/new-meetup
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter()

  async function addMeetupHandler(enteredMeetupData) {
    const responce = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await responce.json()

    console.log(data);

    router.push('/')
  }
  return (
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
  );
}

export default NewMeetupPage;

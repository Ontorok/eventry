import EventDetails from '@/_components/detailsPage/EventDetails';
import EventVenue from '@/_components/detailsPage/EventVenue';
import Hero from '@/_components/detailsPage/Hero';
import { getEventById } from '@/_services/queries';

export async function generateMetadata({ params: { eventId } }) {
  const event = await getEventById(eventId);
  return {
    title: `Eventry - ${event.name}`,
    description: event.description,
    openGraph: {
      images: [event.imageUrl],
    },
  };
}

export default async function EventDetailsPage({ params: { eventId } }) {
  const event = await getEventById(eventId);
  const { details, location, swags } = event;
  return (
    <>
      <Hero event={event} />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={details} swags={swags} />
          <EventVenue location={location} />
        </div>
      </section>
    </>
  );
}

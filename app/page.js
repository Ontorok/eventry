import EventCardLoader from '@/_components/common/EventCardLoader';
import EventList from '@/_components/homePage/EventList';
import EventPageHeader from '@/_components/homePage/EventPageHeader';

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container py-8">
      <EventPageHeader />
      <EventCardLoader />
      {/* <Suspense key={query} fallback={<EventCardLoader />}> */}
      <EventList query={query} />
      {/* </Suspense> */}
    </section>
  );
}

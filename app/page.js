import EventList from '@/_components/homePage/EventList';
import EventPageHeader from '@/_components/homePage/EventPageHeader';

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container py-8">
      <EventPageHeader />
      <EventList query={query} />
    </section>
  );
}

const EventSchemaScript = ({ event }) => {
  const eventName = encodeURIComponent(event?.name);

  const formattedData = {
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Denver',
        addressRegion: 'CO',
        postalCode: '80209',
        streetAddress: '7 S. Broadway',
      },
      name: event.location,
    },
    name: eventName,
    offers: {
      '@type': 'Offer',
      price: '13.00',
      priceCurrency: 'USD',
      url: 'http://www.ticketfly.com/purchase/309433',
    },
    startDate: '2013-09-14T21:30',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(formattedData),
        }}
      />
    </>
  );
};

export default EventSchemaScript;

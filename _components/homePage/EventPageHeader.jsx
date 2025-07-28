import Search from '../common/Search';

export default function EventPageHeader() {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-3xl">Discover Events</h1>
      {/* Searchbar */}
      <Search />
    </div>
  );
}

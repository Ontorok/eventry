export default function EventPageHeader() {
  return (
    <div className="flex justify-between">
      <h1 className="font-bold text-3xl">Discover Events</h1>
      {/* Searchbar */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
        />
      </div>
    </div>
  );
}

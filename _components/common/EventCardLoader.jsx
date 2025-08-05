export default function EventCardLoader() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="overflow-hidden rounded-md bg-[#242526]">
          <div className="w-full h-64 bg-gray-700" />
          <div className="p-3">
            <span className="font-bold text-lg"></span>
            <p className="text-[#9C9C9C] text-sm mt-1"></p>
            <div className="w-full h-10 mt-1 bg-green-400">
              <span id="test" className="bg-gray-700"></span>
              <span className=" bg-gray-700"></span>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="w-full h-10 bg-gray-700 rounded-md"></div>
              <div className="w-full h-10 bg-gray-700 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import EventSchemaScript from '@/_meta/EventSchemaScript';
import Image from 'next/image';
import Link from 'next/link';
import ActionButtons from '../common/ActionButtons';

export default function EventCard({ event }) {
  const { id, name, imageUrl, location, interested_ids, going_ids } = event;
  const toJSONInterestedIds = interested_ids.map((id) => id.toString());
  const toJSONGoingIds = going_ids.map((id) => id.toString());
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <EventSchemaScript event={event} />
      <Image src={imageUrl} alt={name} className="w-full" width={480} height={238.34} />
      <div className="p-3">
        <Link href={`/details/${id}`} className="font-bold text-lg">
          {name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{interested_ids?.length} Interested</span>
          <span className="mx-1">|</span>
          <span>{going_ids?.length} Going</span>
        </div>
        <ActionButtons eventId={id} interestedUserIds={toJSONInterestedIds} goingIds={toJSONGoingIds} />
      </div>
    </div>
  );
}

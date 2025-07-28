'use client';

import { addInterestedEvent } from '@/_actions';
import useAuth from '@/_hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function ActionButtons({ eventId, interestedUserIds, goingIds, fromDetails }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { auth } = useAuth();
  const isInterested = interestedUserIds.find((id) => id === auth?.id);
  const isGoing = goingIds.find((id) => id === auth?.id);

  async function toggleInterest() {
    if (auth) {
      await addInterestedEvent(eventId, auth.id);
    } else {
      router.push('/login');
    }
  }

  function markGoing() {
    router.push(`/payment/${eventId}`);
    // if (auth) {
    //   router.push(`/payment/${eventId}`);
    // } else {
    //   router.push('/login');
    // }
  }

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && 'flex-1'}`}>
      <button
        className={`w-full ${isInterested ? 'bg-indigo-600 hover:bg-indigo-800' : 'bg-[#464849] hover:bg-[#3C3D3D]'} ${isPending ? 'animate-pulse' : undefined}`}
        onClick={() => startTransition(() => toggleInterest())}
      >
        Interested
      </button>
      <button
        // disabled={auth && isGoing}
        onClick={markGoing}
        className={`text-center w-full ${isGoing ? 'bg-green-600 hover:bg-green-700' : 'bg-[#464849] hover:bg-[#3C3D3D] border-[#5F5F5F]/50'} py-2 px-2 rounded-md border shadow-sm cursor-pointer transition-colors active:translate-y-1 disabled:cursor-not-allowed`}
      >
        Going
      </button>
    </div>
  );
}

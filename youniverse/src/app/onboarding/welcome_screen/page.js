'use client';
import { useRouter } from 'next/navigation';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <div>
        <image src="youniverse\public\background_images\WelcomeScreenBackground.svg"></image>
    </div>
  );
}
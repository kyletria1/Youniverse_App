"use client";
import { useRouter } from "next/navigation";
import Button from "button.js";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <div className="screen__image--welcome">
        <image src="youniverse\public\background_images\WelcomeScreenBackground.svg"></image>
        <Button/>
        <Button/>
    </div>
  );
}
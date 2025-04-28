"use client"; 

import { useRouter } from "next/navigation";
import Button from "./Button";

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/vehicules');
    }
  };

  return (
    <Button iconOnly secondary onClick={handleBackClick} leftIcon="arrow-left"/>
  );
}
"use client"; 

import { useRouter } from "next/navigation";
import Button from "./Button";
import { ArrowLeft } from "lucide-react";

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
    <Button secondary text="Retour" onClick={handleBackClick} leftIcon="arrow-left"/>
  );
}
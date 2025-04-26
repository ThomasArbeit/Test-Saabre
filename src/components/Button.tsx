"use client";

import { MouseEventHandler } from "react";
import '@/styles/Button.scss';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

interface ButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  leftIcon?: IconName;
  rightIcon?: IconName;
  secondary?: boolean;
}

export default function Button({ text, onClick, leftIcon, rightIcon, secondary = false }: ButtonProps) {

  return (
    <button className={`button ${secondary ? "button--secondary" : ""}`} onClick={onClick}>
      {leftIcon && <DynamicIcon name={leftIcon} size={20} />}
      <span>{text}</span>
      {rightIcon && <DynamicIcon name={rightIcon} size={20} />}
    </button>
  );
}
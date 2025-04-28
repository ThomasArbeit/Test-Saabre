"use client";

import { MouseEventHandler } from "react";
import '@/styles/Button.scss';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

interface ButtonProps {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  leftIcon?: IconName;
  rightIcon?: IconName;
  secondary?: boolean;
  iconOnly?: boolean;
}

export default function Button({ text, onClick, leftIcon, rightIcon, secondary = false, iconOnly = false }: ButtonProps) {

  return (
    <button className={`button ${secondary ? "button--secondary" : ""} ${iconOnly ? "button--icon-only" : ""}`} onClick={onClick}>
      {leftIcon && <DynamicIcon name={leftIcon} size={20} />}
      {text && <span>{text}</span>}
      {rightIcon && <DynamicIcon name={rightIcon} size={20} />}
    </button>
  );
}
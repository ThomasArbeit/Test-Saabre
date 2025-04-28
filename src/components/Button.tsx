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
  size?: 'md' | 's' | 'xs',
}

export default function Button({ text, onClick, leftIcon, rightIcon, secondary = false, iconOnly = false, size = 'md' }: ButtonProps) {

  return (
    <button className={`button ${secondary ? "button--secondary" : ""} ${iconOnly ? "button--icon-only" : ""} button--${size}` } onClick={onClick}>
      {leftIcon && <DynamicIcon name={leftIcon} size={20} />}
      {text && <span>{text}</span>}
      {rightIcon && <DynamicIcon name={rightIcon} size={20} />}
    </button>
  );
}
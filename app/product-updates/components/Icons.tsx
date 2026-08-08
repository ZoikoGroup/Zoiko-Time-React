/**
 * The Figma export shipped the same seven glyphs 18 times, once per size and
 * stroke colour. These render from `currentColor` instead, so a single copy
 * covers every placement and the colour comes from the Tailwind class.
 */

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

function base(size: number, className?: string) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    className,
    "aria-hidden": true as const,
  };
}

export function CheckCircleIcon({
  size = 16,
  className,
  strokeWidth = 1.07,
}: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path
        d="M6 8L7.33333 9.33333L10 6.66667M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function ClockIcon({
  size = 16,
  className,
  strokeWidth = 1.07,
}: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path
        d="M8 5.33333V8L10 9.33333M14 8C14 8.78793 13.8448 9.56815 13.5433 10.2961C13.2417 11.0241 12.7998 11.6855 12.2426 12.2426C11.6855 12.7998 11.0241 13.2417 10.2961 13.5433C9.56815 13.8448 8.78793 14 8 14C7.21207 14 6.43185 13.8448 5.7039 13.5433C4.97595 13.2417 4.31451 12.7998 3.75736 12.2426C3.20021 11.6855 2.75825 11.0241 2.45672 10.2961C2.15519 9.56815 2 8.78793 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function SquareIcon({
  size = 16,
  className,
  strokeWidth = 1.07,
}: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path
        d="M10.666 2.66797H5.33268C3.85992 2.66797 2.66602 3.86188 2.66602 5.33464V10.668C2.66602 12.1407 3.85992 13.3346 5.33268 13.3346H10.666C12.1388 13.3346 13.3327 12.1407 13.3327 10.668V5.33464C13.3327 3.86188 12.1388 2.66797 10.666 2.66797Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function LinesIcon({
  size = 16,
  className,
  strokeWidth = 1.07,
}: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path
        d="M2.66602 4H13.3327M2.66602 8H13.3327M2.66602 12H9.33268"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function LockIcon({
  size = 16,
  className,
  strokeWidth = 1.07,
}: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path
        d="M11.9993 6.66797H3.99935C3.26297 6.66797 2.66602 7.26492 2.66602 8.0013V12.0013C2.66602 12.7377 3.26297 13.3346 3.99935 13.3346H11.9993C12.7357 13.3346 13.3327 12.7377 13.3327 12.0013V8.0013C13.3327 7.26492 12.7357 6.66797 11.9993 6.66797Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M5.33398 6.66667V4.66667C5.33398 3.95942 5.61494 3.28115 6.11503 2.78105C6.61513 2.28095 7.29341 2 8.00065 2C8.7079 2 9.38617 2.28095 9.88627 2.78105C10.3864 3.28115 10.6673 3.95942 10.6673 4.66667V6.66667"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function SearchIcon({
  size = 16,
  className,
  strokeWidth = 1.2,
}: IconProps) {
  return (
    <svg {...base(size, className)}>
      <path
        d="M7.33268 12.0013C9.91001 12.0013 11.9993 9.91196 11.9993 7.33464C11.9993 4.75731 9.91001 2.66797 7.33268 2.66797C4.75535 2.66797 2.66602 4.75731 2.66602 7.33464C2.66602 9.91196 4.75535 12.0013 7.33268 12.0013Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M13.9995 13.9995L11.1328 11.1328"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export function CloseIcon({
  size = 14,
  className,
  strokeWidth = 1.17,
}: IconProps) {
  return (
    <svg {...base(size, className)} viewBox="0 0 14 14">
      <path
        d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

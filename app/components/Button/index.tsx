import { twMerge } from "tailwind-merge";
import { Slot, type AsChildProps } from "./Slot"

type ButtonProps = AsChildProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> & {
  style?: React.CSSProperties;
  className?: string;
  variant?: "primary" | "gradient" | "outline-light" | "gray";
  size?: "bold" | "regular" | "icon";
  roundedStyle?: "regular" | "pill";
}


type VariantMapKeys = "primary" | "outline-light" | "gray" | "gradient";
const buttonVariantMap = new Map<VariantMapKeys, string>([
  ["primary", "bg-primary-500 text-zinc-50 hover:brightness-75"],
  ["gradient", "bg-gradient-to-r from-primary-500 to-secondary-500 hover:brightness-75"],
  ["outline-light", "border-2 border-solid border-zinc-50 text-zinc-50 hover:bg-zinc-50 hover:text-zinc-950"],
  ["gray", "bg-zinc-700 text-zinc-50 hover:brightness-75"]
]);

type SizeMapKeys = "bold" | "regular" | "icon";
const buttonSizeMap = new Map<SizeMapKeys, string>([
  ["bold", "py-2 px-4 text-base font-bold"],
  ["regular", "py-2 px-4 text-base"],
  ["icon", "p-2"]
])

type RoundedStyleMapKeys = "regular" | "pill";
const buttonRoundedStyleMap = new Map<RoundedStyleMapKeys, string>([
  ["regular", "rounded-lg"],
  ["pill", "rounded-full"]
]);

export function Button(
    { 
      asChild, 
      variant = "primary", 
      size = "regular", 
      roundedStyle = "regular", 
      className,
      ...props 
    }: ButtonProps
  ) {
  const buttonClassName = twMerge(
    "w-full flex justify-center items-center gap-2 font-regular lg:gap-4 transition-all duration-300",
    buttonVariantMap.get(variant),
    buttonSizeMap.get(size),
    buttonRoundedStyleMap.get(roundedStyle),
    className
  )

  return (asChild ? (
    <Slot className={buttonClassName} {...props} />
  ) : (
    <>
      <button
        className={buttonClassName}
        {...props}
      />
    </>
  ))
}
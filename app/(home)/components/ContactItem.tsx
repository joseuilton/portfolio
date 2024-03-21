import { IconType } from "react-icons"

interface ContactItemProps {
  Icon: IconType;
  title: string;
}

export function ContactItem({ Icon, title }: ContactItemProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="flex justify-center items-center w-24 h-24 bg-gradient-to-r from-primary-500 
                 to-secondary-500 rounded-full text-zinc-50
                   lg:w-32 lg:h-32"
      >
        {<Icon size={48} className="w-auto h-[48px] lg:h-[64px]" />}
      </div>

      <p className="font-bold text-zinc-700 lg:text-xl">
        {title}
      </p>
    </div>
  )
}
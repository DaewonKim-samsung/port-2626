import Image from "next/image";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/profile";

type ProfileAvatarProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

const sizeClasses = {
  sm: "size-16",
  md: "size-24 sm:size-28",
  lg: "size-32 sm:size-36",
};

export function ProfileAvatar({
  size = "md",
  className,
  priority = false,
}: ProfileAvatarProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-full border-2 border-white",
        sizeClasses[size],
        className,
      )}
    >
      <Image
        src={profile.avatar}
        alt={profile.name}
        width={144}
        height={144}
        priority={priority}
        className="size-full object-cover"
      />
    </div>
  );
}

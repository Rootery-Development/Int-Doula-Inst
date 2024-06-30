<<<<<<< HEAD
import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

interface CourseProgressProps {
    value: number;
    variant?: "default" | "success",
    size?: "default" | "sm";
  };

  const colorByVariant = {
    default: "text-sky-700",
    success: "text-emerald-700",
  }
  
  const sizeByVariant = {
    default: "text-sm",
    sm: "text-xs",
  }
=======
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const colorByVariant = {
  default: "text-sky-700",
  success: "text-emerald-700",
};

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
};
>>>>>>> bed8e42685e04bfc762b90005269364cff930fee

export const CourseProgress = ({
  value,
  variant,
  size,
}: CourseProgressProps) => {
  return (
    <div>
<<<<<<< HEAD
      <Progress
        className="h-2"
        value={value}
        variant={variant}
      />
      <p className={cn(
        "font-medium mt-2 text-sky-700",
        colorByVariant[variant || "default"],
        sizeByVariant[size || "default"],
      )}>
        {Math.round(value)}% Complete
      </p>
    </div>
  )
}
=======
      <Progress className="h-2" value={value} />
      <p
        className={cn(
          "font-medium mt-2 text-sky-700",
          colorByVariant[variant || "default"],
          sizeByVariant[size || "default"]
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
};
>>>>>>> bed8e42685e04bfc762b90005269364cff930fee

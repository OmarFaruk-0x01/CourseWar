import { FC } from "react";

interface ProgressBarProps {
  progress: number;
  trackColor?: string;
  progressColor?: string;
  showText?: boolean;
}

const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  progressColor = "bg-primary-500",
  trackColor = "bg-gray-100",
  showText = true,
}) => {
  return (
    <div className="flex flex-1 gap-2 items-center justify-center">
      <div
        className={`relative w-[100%] h-3 ${trackColor} rounded-sm overflow-hidden`}
      >
        <span
          style={{ width: `${progress}%` }}
          className={`absolute left-0 top-0 h-full rounded-sm ${progressColor}`}
        />
      </div>
      {showText && (
        <span className=" w-7 text-sm font-semibold text-gray-700">{progress}%</span>
      )}
    </div>
  );
};

export default ProgressBar;

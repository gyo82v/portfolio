type DividerProps = {
  variant?: "section" | "item";
  className?: string;
};

export default function Divider({
  variant = "item",
  className = "",
}: DividerProps) {
  const isSection = variant === "section";

  if (isSection) {
    return (
      <div
        aria-hidden="true"
        className={`my-12 w-full ${className}`}
      >
        <div className="h-px w-full bg-slate-300 dark:bg-slate-600" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`my-8 flex w-full items-center justify-center ${className}`}
    >
      <div className="h-px w-12 bg-slate-200 dark:bg-slate-700" />
      <span className="mx-3 h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500" />
      <div className="h-px w-12 bg-slate-200 dark:bg-slate-700" />
    </div>
  );
}
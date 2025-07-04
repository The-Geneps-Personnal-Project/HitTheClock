type TextDisplayProps = {
  children: React.ReactNode;
  className?: string;
  gradientDirection?: "to-r" | "to-l" | "to-t" | "to-b";
};

export default function TextDisplay({
  children,
  className = "",
  gradientDirection = "to-r",
}: TextDisplayProps) {
  return (
    <div
      className={`p-[1px] bg-gradient-${gradientDirection} from-[#E01BAD] to-[#3BE01A]`}
    >
      <div
        className={`text-lg font-medium text-gray-800 ${className}`}
        data-testid="text-display"
      >
        {children}
      </div>
    </div>
  );
}

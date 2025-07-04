const buildFlexClass = ({
  direction = "row",
  justify = "center",
  align = "center",
  wrap = "nowrap",
}: {
  direction?: "row" | "col";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
}) => `flex flex-${direction} justify-${justify} items-${align} flex-${wrap}`;

type FlexProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "col";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
};

export default function Flex({
  children,
  className = "",
  direction = "row",
  justify = "center",
  align = "center",
  wrap = "nowrap",
}: FlexProps) {
  const classes = `${buildFlexClass({
    direction,
    justify,
    align,
    wrap,
  })} ${className}`;

  return (
    <div className={classes} data-testid="flex-container">
      {children}
    </div>
  );
}

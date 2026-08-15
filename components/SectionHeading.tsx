import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  children,
}: Props) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls} gap-3`}>
      {eyebrow && (
        <span className="chip bg-pink-soft text-pink-deep">{eyebrow}</span>
      )}
      <h2 className="font-maru text-2xl font-bold text-textbrown sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-relaxed text-textbrown-muted sm:text-base">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

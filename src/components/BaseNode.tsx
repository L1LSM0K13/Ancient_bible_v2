import React from "react";

type BaseNodeProps = React.HTMLProps<HTMLDivElement> & {
  title: string;
  children: React.ReactNode;
};

export default function BaseNode({ title, children, ...props }: BaseNodeProps) {
  return (
    <div {...props}>
      <h1 className="nodeTitleH1">{title}</h1>
      <div className="nodeInsideDiv mb-5 shadow-xl">{children}</div>
    </div>
  );
}

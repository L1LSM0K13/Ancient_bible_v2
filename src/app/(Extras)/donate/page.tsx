import DonateSubNode from "@/components/DonateSubNode/DonateSubNode";
import BaseNode from "@/components/BaseNode";

export default function DonateNote() {
  return (
    <BaseNode className={"nodeMargins"} title={"Support the project"}>
      <DonateSubNode />
    </BaseNode>
  );
}

import AboutSubNode from "@/components/AboutSubNode/AboutSubNode";
import BaseNode from "@/components/BaseNode";

export default function About() {
  return (
    <BaseNode className={"nodeMargins"} title={"About me and this website"}>
      <AboutSubNode />
    </BaseNode>
  );
}

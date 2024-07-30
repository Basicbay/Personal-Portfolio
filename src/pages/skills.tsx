import Head from "../components/common/head";
import SkillsList from "../components/skills/skillsList";

export default function Skills() {
  return (
    <div className=" flex flex-col gap-y-10 p-7 xl:p-0 items-center w-full md:w-[652px] xl:w-[904px] ">
      <Head name="Skills" />
      <SkillsList />
    </div>
  );
}

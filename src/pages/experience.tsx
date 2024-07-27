import Head from "../components/common/head";
import { ExperienceItem } from "../components/experience/config";
import ExperienceList from "../components/experience/experienceList";

export default function Experience() {
  return (
    <div className=" flex flex-col gap-y-10 p-7 xl:p-0 items-center w-full md:w-[652px] ">
      <Head name="Experience" />
      <ExperienceList items={ExperienceItem} />
    </div>
  );
}

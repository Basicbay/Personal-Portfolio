import Head from "../components/common/head";
import { ExperienceItem } from "../components/experience/config";
import ExperienceList from "../components/experience/experienceList";

export default function Experience() {
  return (
    <div>
    <div className="max-w-[904px] max-h-[596px] h-screen w-screen flex flex-col gap-y-10 p-7 xl:p-0 items-center ">
        <Head name="Experience" />
        <ExperienceList items={ExperienceItem} />
      </div>
    </div>
  );
}

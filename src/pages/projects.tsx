import ProjectList from "../components/project/projectList";
import { ProjectItem } from "../components/project/config";
import Head from "../components/common/head";

export default function Project() {
  return (
    <div className="flex flex-col gap-y-10 p-7 xl:p-0 items-center max-w-[904px] ">
      <Head name="Projects" />
      <ProjectList items={ProjectItem} />
    </div>
  );
}

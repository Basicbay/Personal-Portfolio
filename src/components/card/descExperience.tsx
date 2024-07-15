import { ExperienceItem } from "../experience/config";
import ExperienceList from "../experience/experienceList";

export default function descExperience() {
  const selectedItems = ExperienceItem.slice(0, 2);

  return (
    <>
      <ExperienceList items={selectedItems} />
    </>
  );
}

import { EducationItem } from "../education/config";
import EducationList from "../education/educationList";

export default function DescEducation() {
  return (
    <>
      <EducationList items={EducationItem} />
    </>
  );
}

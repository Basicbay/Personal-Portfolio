import rsu from '../../assets/images/education/rsu.png'
import yorwor from '../../assets/images/education/yorwor.png'

interface EducationItem {
  img: string;
  key: string;
  desc: String;
  date: string;
}

export const EducationItem: EducationItem[] = [
  {
    img: rsu,
    key: "Innovation Technology",
    desc: "Rangsit University",
    date: "2012 - 2016",
  },
  {
    img: yorwor,
    key: "English French Program",
    desc: "Hatyaiwittayalai School",
    date: "2005 - 2011",
  },
];

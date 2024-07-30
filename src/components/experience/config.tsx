import fwx from '../../assets/images/experience/fwx.jpg'
import store from '../../assets/images/experience/store.png'
import codestar from '../../assets/images/experience/codestar.png'
import standthai from '../../assets/images/experience/standthai.png'
import innobiz from '../../assets/images/experience/innobiz.png'

interface ExperienceItem {
  img?: string
  key: string;
  desc: String;
  date: string;
}

export const ExperienceItem: ExperienceItem[] = [

  {
    img: fwx,
    key: "Frontend Developer",
    desc: "FWX Finance",
    date: "2024 - Present",
  },
  {
    img: store,
    key: "Mobile Game Developer",
    desc: "App store (Self employed)",
    date: "2017 - 2022",
  },
  {
    img: codestar,
    key: "Java Software Engineer",
    desc: "Codestar (Bootcamp)",
    date: "1 Month in 2016",
  },
  {
    img: standthai,
    key: "Network Management",
    desc: "Stand Thai",
    date: "6 Months in 2016",
  },
  {
    img: innobiz,
    key: "Business Intelligence",
    desc: "Innobiz (Internship)",
    date: "4 Months in 2015",
  },
  

];

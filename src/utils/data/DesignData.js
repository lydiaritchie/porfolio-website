import elephant from "../../graphics/portfolio-projects/design/stickers/elephant.png";
import nemo from "../../graphics/portfolio-projects/design/stickers/nemo.png";
import hornbill from "../../graphics/portfolio-projects/design/stickers/hornbill.png";
import chowBanBenKru from "../../graphics/portfolio-projects/design/stickers/chowBanBenKru.png";
import notebook from "../../graphics/portfolio-projects/design/stickers/notebook.png";

import openLogo from "../../graphics/portfolio-projects/design/logos/open-logo.png";
import garuda from "../../graphics/portfolio-projects/design/logos/illustrated-garuda.png";
import mastersThrowdown from "../../graphics/portfolio-projects/design/logos/masters-throwdown-logo.png";
import weightliftingLogo from "../../graphics/portfolio-projects/design/logos/weightlifting-logo.png";
import openyogaLogo from "../../graphics/portfolio-projects/design/logos/yoga-logo.png";
import throwdown2024 from "../../graphics/portfolio-projects/design/logos/throwdown-2024.png";
import throwdown2025 from "../../graphics/portfolio-projects/design/logos/throwdown-2025.png";

import throwdownVideo from "../../graphics/portfolio-projects/video/throwdown.jpg";
import throwdownDay1Video from "../../graphics/portfolio-projects/video/throwdown-day1.jpg";
import ccc from "../../graphics/portfolio-projects/video/CCC.jpg";
import ifrp from "../../graphics/portfolio-projects/video/IFRP.jpg";
import uwl from "../../graphics/portfolio-projects/video/UWL.jpg";
import samanWod from "../../graphics/portfolio-projects/video/saman-wod.jpg";

export const designData = {
  illustrations: [
    { id: 1, caption: "", description: "Illustrated horn bill with scientific and common name.", image: hornbill },
    { id: 2, caption: "", description: "Illustrated nemo sticker.", image: nemo },
    { id: 3, caption: "", description: "Illustrated elephant sticker.", image: elephant },
    { id: 4, caption: "", description: "Illustrated elephant sticker.", image: notebook},
    { id: 5, caption: "The villager is the teacher", description: "Thai writing meaning 'the villager is the teacher' with a small illustrated wooden house.", image: chowBanBenKru  },
   
  ],
  graphics: [
    { id: 1, caption: "Open Logo", description: "Logo design for Open project.", image: openLogo },
    { id: 2, caption: "Garuda Illustration", description: "Illustrated Garuda logo.", image: garuda },
    { id: 3, caption: "Masters Throwdown", description: "Masters Throwdown event logo.", image: mastersThrowdown },
    { id: 4, caption: "Weightlifting Logo", description: "Logo for weightlifting events.", image: weightliftingLogo },
    { id: 5, caption: "Yoga Logo", description: "Yoga-inspired logo design.", image: openyogaLogo },
    { id: 6, caption: "Throwdown 2024", description: "Event logo for Throwdown 2024.", image: throwdown2024 },
    { id: 7, caption: "Throwdown 2025", description: "Event logo for Throwdown 2025.", image: throwdown2025 },
  ],
};

export const videoData = {
videoProduction: [
  { id: 1, caption: "CFCNX Throwdown 2024 Video", description: "Video recap of Throwdown 2024 event at Crossfit Chiang Mai.", 
    image: throwdownVideo, link: "https://www.youtube.com/embed/3kwT6BpNM4k?si=Mbrqqryl7fvotm_o"},
  { id: 2, caption: "CFCNX Throwdown 2024 Day 1 Video", description: "Video recap of day 1 of the Throwdown 2024 event at Crossfit Chiang Mai.", 
    image: throwdownDay1Video, link:"https://www.youtube.com/embed/sBJj_6gBTZc?si=fpGgbzFL20cirrCq" },
  { id: 3, caption: "Saman WOD event video", description: "Video recap of the Saman WOD and its meaning at Crossfit Chiang Mai.", 
    image: samanWod, link:"https://www.youtube.com/embed/GGM6olKoPJU?si=tkUaXhu0oCsO5GQD" },
  { id: 4, caption: "ISDSI IFRP Project Overview", description: "ISDSI students and staff share about Independent Field Reserach Projects that are a part of the CEC semester program.", 
    image: ifrp, link: "https://www.youtube.com/embed/EHSgrDKEVP0?si=8hyhbzRtFMwrSXJs" },
  { id: 5, caption: "ISDSI CCC Program Overview", description: "Overview of CCC program content and deadlines at ISDSI.", 
    image: ccc, link:"https://www.youtube.com/embed/cr0OxdVA5Qk?si=pX9PN7KuL1PKLYWm" },
  { id: 6, caption: "ISDSI Summer Program Overview", description: "Recap of summer program with UWL students.", 
    image: uwl, link: "https://www.youtube.com/embed/kLOU8sHpkOE?si=WprUF51nrdJR0cKU"},
   ] }



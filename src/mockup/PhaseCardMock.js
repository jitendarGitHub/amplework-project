import {
  LeftdottedCircle,
  Phaseimg1,
  Phaseimg2,
  Phaseimg3,
  Phaseimg4,
  RightdottedCircle,
} from "../assets";

export const PhaseCardMock = [
  {
    img: Phaseimg1,
    head: "1",
    about: "Device & Information Management",
    para: "This category focuses on managing and securing mobile devices and the data that resides in the storage devices. It includes features    such as device.",
    bgimage: LeftdottedCircle,
  },
  {
    img: Phaseimg2,
    head: "2",
    about: "App & Identity Management",
    para: "In-app & identify management we involve extensive features which are follows - app distribution, app wrapping, authentication factors.",
    bgimage: RightdottedCircle,
    backgroundposition: "right",
    direction: "row-reverse",
  },
  {
    img: Phaseimg3,
    head: "3",
    about: "Content Management",
    para: "This category of operations involves managing & securing the content that is highly accessed and shared on mobile devices. It includes extensive features.",
    bgimage: LeftdottedCircle,
  },
  {
    img: Phaseimg4,
    head: "4",
    about: "Expense & Budget Management",
    para: "It focuses on managing and optimizing the expenses associated with enterprise mobility - such as: device procurement and service contracts.",
    bgimage: RightdottedCircle,
    backgroundposition: "right",
    direction: "row-reverse",
  },
];

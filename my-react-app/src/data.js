import NoPrior from "./svg/No-priority.svg"
import UrgPrior from "./svg/SVG - Urgent Priority colour.svg"

import BackLOG from "./svg/Backlog.svg";

import ToDO from "./svg/To-do.svg"
import LowPrior from "./svg/Img - Low Priority.svg";
import MedPrior from "./svg/Img - Medium Priority.svg";
import HighPrior from "./svg/Img - High Priority.svg";
import DoneSVG from "./svg/Done.svg";
import InPROGRESS from "./svg/in-progress.svg";
import CancelledSVG from "./svg/Cancelled.svg"

const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
    { title: "no priority", color: "gray", icon: NoPrior },
    { title: "low", color: "lightgray", icon: LowPrior },
    { title: "medium", color: "gray", icon: MedPrior },
    { title: "high", color: "black", icon: HighPrior },
    { title: "urgent", color: "orange", icon: UrgPrior }
];
export const status = [
    { title: "backlog", color: "black", icon: BackLOG },
    { title: "todo", color: "lightgrey", icon: ToDO },
    { title: "in progress", color: "#EBCB62", icon: InPROGRESS },
    { title: "done", color: "#606ACB", icon: DoneSVG },
    { title: "cancelled", color: "gray", icon: CancelledSVG },
];

export const statusIcons = {
    backlog: {
        color: "black",
        icon: BackLOG,
    },
    todo: {
        color: "lightgrey",
        icon: ToDO,
    },
    "in progress": {
        color: "#EBCB62",
        icon: InPROGRESS,
    },
    done: {
        color: "#606ACB",
        icon: DoneSVG,
    },
    cancelled: {
        color: "gray",
        icon: CancelledSVG,
    },
};
export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}
export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
};
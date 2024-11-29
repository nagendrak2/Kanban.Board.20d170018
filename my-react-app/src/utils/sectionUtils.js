import { ReactComponent as BacklogSVG } from "../assets/Backlog.svg";
import { ReactComponent as ToDoSVG } from "../assets/To-do.svg";
import { ReactComponent as InProgSVG } from "../assets/in-progress.svg";
import { ReactComponent as DoneSVG } from "../assets/Done.svg";
import { ReactComponent as CancelledSVG } from "../assets/Cancelled.svg";
import { ReactComponent as NoPrioSVG } from "../assets/No-priority.svg";
import { ReactComponent as LowPrioSVG } from "../assets/Img - Low Priority.svg";
import { ReactComponent as MedPrioSVG } from "../assets/Img - Medium Priority.svg";
import { ReactComponent as HighPrioSVG } from "../assets/Img - High Priority.svg";
// import { ReactComponent as UrgPrioSVG } from "../../assets/SVG - Urgent Priority grey.svg";
import { ReactComponent as UrgOrPrioSVG } from "../assets/SVG - Urgent Priority colour.svg";


export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog": return <BacklogSVG height={15} width={15} alt="backlog"/>;
        case "Todo": return <ToDoSVG height={15} width={15} alt="backlog"/>;
        case "In progress": return <InProgSVG height={15} width={15} alt="backlog"/>;
        case "Done": return <DoneSVG height={15} width={15} alt="backlog"/>;
        case "Canceled": return <CancelledSVG height={15} width={15} alt="backlog"/>;
        default: return <CancelledSVG height={15} width={15} alt="backlog"/>;
    }
}

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <NoPrioSVG height={15} width={15} alt="no-priority"/>;
        case "Low": return <LowPrioSVG height={15} width={15} alt="medium"/>;
        case "Medium": return <MedPrioSVG height={15} width={15} alt="medium"/>;
        case "High": return <HighPrioSVG height={15} width={15} alt="high"/>;
        case "Urgent": return <UrgOrPrioSVG height={15} width={15} alt="urgent"/>;
        default: return <UrgOrPrioSVG height={15} width={15} alt="urgent"/>
    }
}
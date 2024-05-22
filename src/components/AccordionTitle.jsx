import { useAccordionContext } from "./Accordion"
import { useAccordItemContext } from "./AccordionItem";
export default function AccordionTitle({ className, children }) {
    const { toogleItem } = useAccordionContext();
    const id = useAccordItemContext();
    function handleClick() {
        toogleItem(id)
    }
    return (
        <h3 className={className} onClick={handleClick}>{children}</h3>
    )
}
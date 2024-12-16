import { useButtonStore } from "@/contexts/ActiveButtonStore";
import { ScrollContext } from "@/contexts/ScrollContext";
import { Button } from "@mantine/core"
import { useHover } from "@mantine/hooks";
import { useContext } from "react";

const HeaderSection = ({ button }: { button: { label: string, id: string } }) => {
    const { ref, hovered } = useHover<HTMLButtonElement>();

    // const { activeButton, setActiveButton } = useButtonStore.getState();

    const { handleClick } = useContext(ScrollContext);

    const handleButtonClick = (id: string) => {
        handleClick(id)
    }

    return (
        <Button
            variant="transparent"
            style={{
                fontWeight: 'semibold',
                fontSize: '1em',
                textDecoration: 'none',
                color: hovered ? '#18D26E' : 'white',
            }}
            ref={ref}
            onClick={() => handleButtonClick(button.id)}
        >
            {button.label}
        </Button>
    )
}

export default HeaderSection
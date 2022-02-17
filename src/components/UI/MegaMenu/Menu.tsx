import React, {useEffect, useRef} from "react";
import cl from "./index.module.scss";
import EmptyImage from "../../../assets/images/global/image.png";

const Menu: React.FC<{ name: string, items: { name: string, url: string }[] }>
    = ({name, items}) => {
    const accordion = useRef<HTMLButtonElement>(null);

    const MegaMenu = () => {
        const acc = accordion.current!;
        acc.addEventListener("click", () => {
            acc.classList.toggle(cl.active);
            const panel = acc.nextElementSibling as HTMLElement;
            if (panel.style.maxHeight) {
                // @ts-ignore
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    };

    useEffect(() => {
        MegaMenu();
    }, []);

    const menus = items.map(({url, name}, idx) => (
        <li key={idx}>
            <a href={url} className={cl.accordionItem}>{name}</a>
        </li>
    ));

    return (
        <div>
            <button ref={accordion} className={cl.accordion}>
                <img className={cl.accordionMenuIcon} alt="Photo"
                     src={EmptyImage}
                /> {name}
            </button>
            <div className={cl.panel}>
                <ul>
                    {menus}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
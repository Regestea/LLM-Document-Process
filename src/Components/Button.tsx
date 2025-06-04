import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {MouseEventHandler} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type ButtonProps = {
    className: string;
    icon?: IconDefinition;
    iconClassName?: string;
    title?: string;
    onButtonClick?: MouseEventHandler;
};

export default function Button(props: ButtonProps) {
    return (
        <button className={props.className} onClick={props.onButtonClick}>
            {props.icon && (
                <span className={props.iconClassName}>
                        <FontAwesomeIcon icon={props.icon}/>
                    </span>
            )}
            {props.title && <span>{props.title}</span>}

        </button>
    );
}
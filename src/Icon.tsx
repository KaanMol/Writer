import styles from "./styles/icons.module.scss";

export function Icon(props: { icon: string }) {
    return <i className={"material-icons-outlined " + styles.icon}>{props.icon}</i>;
}

import clsx from "clsx";

// Синтаксис імпорту CSS-модуля
import css from "./Alert.module.css";

// Отримуємо об'єкт відповідності імен класів
console.log(css); // { alert: "Alert_alert_ax7yz" }

// export const Alert = ({ variant, children }) => {
//     return <p className={clsx(css.alert, css[variant])}>{children}</p>;
//   };

export const Alert = ({ variant, outlined, elevated, children }) => {
return (
    <p
    className={clsx(css[variant], {[css.isOutlined]: outlined,[css.isElevated]: elevated})}
    >
    {children}
    </p>
);
};
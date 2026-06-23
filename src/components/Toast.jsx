import "../styles/toast.css";
import IconSuccess from "../components/IconSuccess";
import IconError from "../components/IconError";

export default function Toast({
    visible,
    type,
    msg
}) {

    if (!visible) return null;

    return (
        <div className={`toast toast-${type}`}>
            {type === "success" && <IconSuccess />}
            {type === "error" && <IconError />}
            <span>{msg}</span>
        </div>
    );
}
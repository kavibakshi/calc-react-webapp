import './Button.css';

//is number or not, will make operators orange button
export const isNum = val => {
    return !isNaN(val) || val === "." || val === "=";
}

export const Button = props => (
    <div className={`button-wrapper ${
        isNum(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
);


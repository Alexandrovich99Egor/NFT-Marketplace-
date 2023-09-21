import './Button.scss'

function Button({ className, textButton }) {
    return (
        <button className={`button ${className}`}>
            {textButton}
        </button>
    )
}

export default Button;
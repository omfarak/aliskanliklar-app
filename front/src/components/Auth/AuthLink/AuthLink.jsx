import './AuthLink.css';

const AuthLink = ({ text, linkText, href }) => (
    <div className="auth-link">
        <p>{text}</p>
        <a href={href}>{linkText}</a>
    </div>
);

export default AuthLink;
import './Button.css';

const Button = ({btnType, btnText, handler}) => {

  if (btnType === 'success') {
    return <button className="green-button" onClick={handler}>{btnText}</button>;
  
  } else if (btnType === 'danger') {
    return <button className="red-button" onClick={handler}>{btnText}</button>;
  
  } else {
    return <button className="blue-button" onClick={handler}>{btnText}</button>;
  }
};

export default Button;
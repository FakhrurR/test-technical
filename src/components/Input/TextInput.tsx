import { useState } from 'react';
import { icons } from '../../assets';
import './textinput.css'


const TextInput = ({ type = 'text', title = '', placeholder = '', isPassword = false}) => {
  const [visible, setVisible] = useState(false);

  const onHandleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="main-form">
      {title ? <label className='label'>{title}</label> : null}
      <input type={visible ? "text" : type} className="form-input" placeholder={placeholder} />
      {/* {isPassword ? visible ? <img src={icons.eyeOn} onClick={onHandleVisible} style={{ width: '20px', height: '20px' }} alt='eye-on' /> : <img onClick={onHandleVisible} src={icons.eyeOff} style={{ width: '20px', height: '20px' }} alt='eye-off' />: null} */}
    </div>
  );
};

export default TextInput;

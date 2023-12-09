const ButtonOutline = ({ title = '', onClick = () => {}, backgroundColor = 'white', color = 'rgba(62, 51, 78, 1)' }) => {
    return (
      <button type='button' className='buttonoutline' onClick={onClick} style={{backgroundColor, color, borderColor: color }}>{title}</button>
    )
}
export default ButtonOutline;
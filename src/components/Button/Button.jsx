import './Button.scss';

export function Button({ isOutlined = false, isDisabled = false, ...props }) {
  return (
    <button 
      className={`button ${isOutlined ? 'outlined': '' } ${isDisabled ? 'disabled': '' }`} 
      {...props} 
      />
  )
}
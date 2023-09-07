import './index.css'

export default function Box({ children, className, shadow, list }) {
  return (
    <>
      {list ? (
        <ul className={`box ${shadow ? 'box--shadow' : ''} ${className}`}>
          {children}
        </ul>
      ) : (
        <div className={`box ${shadow ? 'box--shadow' : ''} ${className}`}>
          {children}
        </div>
      )}
    </>
  )
}

import Heading from '../heading'
import './index.css'

export default function Contact({ name, image, rate, time, info, phone }) {
  return (
    <div className="contact">
      <div className="contact__block">
        <img className="contact__image" src={image} alt={name} />
        <div className="contact__content">
          <Heading>Господар - {name}</Heading>

          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>
            <span className="contact__sub-value">{time}</span>
            <span className="contact__sub-value">
              {rate}% відсотків швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <span className="contact__info">{info}</span>
    </div>
  )
}

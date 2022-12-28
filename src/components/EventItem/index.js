// Write your code here
import './index.css'

const EventItem = props => {
  const {item, selectedItemDetails} = props
  const {imageUrl, name, location, id} = item
  // console.log(id)

  const onClickEvent = () => {
    selectedItemDetails(id)
  }
  return (
    <li className="item">
      <button onClick={onClickEvent} type="button" className="button">
        <img src={imageUrl} alt="event" className="img" />
        <p>{name}</p>
        <p className="mt">{location}</p>
      </button>
    </li>
  )
}

export default EventItem

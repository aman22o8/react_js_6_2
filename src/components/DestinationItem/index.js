// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails
  console.log(userDetails)
  return (
    <li className="card_container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="heading">{name}</p>
    </li>
  )
}
export default DestinationItem

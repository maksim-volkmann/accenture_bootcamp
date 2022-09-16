import './popularList.css'

const PopularList = ({ title, description, released }) => {
  return (
    <div className="popularList">
      <div className="popularListWrapper">
        <div className="popularList__title">{title}</div>
        <div className="popularList__description">{description}</div>
        <div className="popularList__released">{released}</div>
      </div>
    </div>
  )
}

export default PopularList

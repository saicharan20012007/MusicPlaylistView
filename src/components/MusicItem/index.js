import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const MusicItem = props => {
  const {data} = props

  console.log(data)
  return (
    <li className="music-content-container">
      <div className="music-content-left">
        <img src={data.imageUrl} alt="track" className="music-image" />
        <div className="music-content-subcontainer1">
          <p className="music-name">{data.name}</p>
          <p className="music-genre">{data.genre}</p>
        </div>
      </div>
      <div className="music-content-right">
        <p className="duration">{data.duration}</p>
        <AiOutlineDelete className="delete-icon" />
      </div>
    </li>
  )
}

export default MusicItem

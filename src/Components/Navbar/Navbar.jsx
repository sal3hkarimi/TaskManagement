import { ChevronDownIcon } from "@heroicons/react/24/outline";
import PicProfile from "./assets/images/pic-profile.jpg";
import "./Style/style.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="profile">
          <div className="box-img">
            <img src={PicProfile} alt="profile img" />
          </div>
          <p>عظیم کریمی</p>
          <div className="icon-box">
            <ChevronDownIcon />
          </div>
        </div>
      </div>
  )
}

import './UserIcon.css'
import UserStatus from "../svg/Tag.svg"

const UserIcon = ({ intials, available, bgColor }) => {
    console.log(bgColor);
    return (
        <div className='user'>
            <div className='user_icon' style={{ backgroundColor: bgColor }}>{intials}</div>
            <div className='dot' style={available ? { color: "#50B053" } : {}}>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
 <g class="layer">
  <title>Layer 1</title>
  <path d="m7,13c3.31,0 6,-2.69 6,-6c0,-3.31 -2.69,-6 -6,-6c-3.31,0 -6,2.69 -6,6c0,3.31 2.69,6 6,6z" fill="#999999" id="svg_1" stroke="#999999" stroke-width="2"/>
 </g>
</svg>
            </div>
        </div>
    )
}

export default UserIcon
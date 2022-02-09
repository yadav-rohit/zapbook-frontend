import React from 'react'
import { Link , useNavigate} from 'react-router-dom';
import '../navbar.css';

function Alert(props) {
  return (
    <div className='Alertbg flex  justify-center h-screen fixed' style={{zIndex: "100" , width: "100%" }}>
      <div className='Alert flex flex-col shadow-xl p-5 rounded-lg' style={{ backgroundColor: "rgba(255, 255, 255, 0.884)" ,  width: "90%" , height: "60%"}}>
          {/* alert title */}
          <p className='text-xl flex justify-center items-center' style={{height: "80%"}}>
          <i class="fas fa-badge-check text-8xl mx-4 text-lime-700"></i>
              {props.content} </p>
          {/* alert description */}
          <p className='Alertcntnt flex justify-center'>{props.footer}<Link to={props.lnk} className='underlineHover mx-2'>{props.lnkname}</Link></p>
      </div>
    </div>
  )
}

export default Alert
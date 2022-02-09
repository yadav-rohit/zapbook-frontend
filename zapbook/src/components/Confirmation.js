import React  from 'react';
//? its css is written in listview css
import '../listview.css';

function Confirmation(props) {
  return <>
{/* vss sets the visibilty of the banners */}
  <div id="cf_body" className={`cf_body drop-shadow-xl p-2 ${props.visible}`}>
    <div className="flex flex-row justify-between">
    <label className={`text-xl font-bold mr-0 ${props.title}`}><i className="fas fa-exclamation-triangle"></i> {props.title}</label>
    <div className="text-sm font-bold"  >X</div>
    </div>
    <p>{props.content}</p>
    </div>
  </>;
}

export default Confirmation;

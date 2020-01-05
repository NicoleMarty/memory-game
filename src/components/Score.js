import React from 'react'
import '../style/score.css'

function Score (props) {
  return (
    <div className='navbar-fixed'>
      <div className='row top-row'>
        <div className='col s2 m2 l2'>
          <h6 className='label'>Memory Game</h6>
        </div>
        <div className='col s8 m8 l8'>
          <h6 className='clickMessage'>{props.clickMessage}</h6>
        </div>
        <div id='correct' className='col s1 m1 l1'>
          <h6 className='correctClicks'>
            Score:<span>&nbsp;&nbsp;</span>
            {props.correctClicks}
          </h6>
        </div>
        <div className='col s1 m1 l1'>
          <h6 className='topScore'>
            Best:<span>&nbsp;&nbsp;</span>
            {props.topScore}
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Score

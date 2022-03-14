import React from 'react'
import "./loaderAnimation.css"

function Loader() {
  return (
      <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  )
}

export default Loader
import React, { Component } from 'react'
import '../Infos.css'

class InfosPatient extends Component {
  render() {
    return (
      <div className='Infos'>
        {/* si dashboard/patient pas de h3 */}
        {/* <h3>My Doctor</h3> */}
        <div className='infos-details'>
          <i className="fas fa-user-circle" />
          <div className='infos-text'>
            <p className='infos-first-last-name'>Dr Pierre Martin</p>
            <p>Psychiatre</p>
            <p>13 rue des Camélias</p>
            <p>75015 Paris</p>
          </div>
        </div>
      </div>
    )
  }
}

export default InfosPatient

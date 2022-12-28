// Write your code here
// import {Component} from 'react'
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const defaultView = () => (
    <div className="default">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  const yetToRegister = () => (
    <div className="yetToRegister">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="ytrlogo"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live, can often make you totally fall in love with this art
        form
      </p>
      <button type="button">Register here</button>
    </div>
  )

  const registrationsClosed = () => (
    <div className="yetToRegister">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="ytrlogo"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const registered = () => (
    <div className="yetToRegister">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registeredLogo"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  switch (status) {
    case 'default':
      return defaultView()
    case 'YET_TO_REGISTER':
      return yetToRegister()
    case 'REGISTERED':
      return registered()
    case 'REGISTRATIONS_CLOSED':
      return registrationsClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails

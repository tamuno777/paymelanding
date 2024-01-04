import React, { FC } from 'react'
import "./index.css"

const ClientSay:FC = () => {
  return (
    <div className="clientsay-content p-10">
    <div className="flex w-full align-item pb-5 ">
      <p className="thin pe-2">what </p>
      <p className="bold">Clients</p>
      <p className="thin ps-2">Say</p>
    </div>
    <div className="align-item">
        <p className="text " style={{ width: "500px" }}>
          Letter of on become he tended active enable to. Vicinity relation
          sensible sociable surprise screened no up as.
        </p>
      </div>
    </div>
  )
}

export default ClientSay
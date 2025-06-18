import React from 'react'

export default function Container1600({children}) {
  return (
    <div style={{width:"min(100%, 1600px)",margin:"0 auto"}}>{children}</div>
  )
}

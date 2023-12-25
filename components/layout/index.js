import React from 'react'
import FooterPage from './footerPage'
import HeaderPage from './header'

function LayoutPage({children}) {
  return (
<>
<HeaderPage/>
{children}
<FooterPage/>
</>  )
}

export default LayoutPage
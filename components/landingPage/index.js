import React from 'react'
import NavbarPage from '../layout/navbarPage';
import CounterSection from './counterSection';
import CounterSections from './counterSections';
import TopSection from './topSection';
import BecomeAnInstructor from './becomeAnInstructor'

function LandingPage() {
  return (
  <main>
  <TopSection/>
  <CounterSections/>
  <BecomeAnInstructor/>
 
  </main>
  )
}
    export default LandingPage;
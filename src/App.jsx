import React from 'react'
import { Navbar, Welcome, Dock} from '@/components'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'
import { Terminal } from '@/windows/index'

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
    </main>
  )
}

export default App
import React from 'react'
import { Navbar, Welcome, Dock} from '@/components'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'
import { Finder, Resume, Safari, Terminal, TextFile, ImageWindow, ContactWindow } from '@/windows/index'

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <TextFile/>
      <ImageWindow/>
      <ContactWindow/>
    </main>
  )
}

export default App
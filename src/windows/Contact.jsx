import { WindowControls } from '@/components'
import { socials } from '@/constants'
import WindowWrapper from '@/hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
  return (
    <div className="contact-window">
      <div id="window-header" className="flex items-center justify-between">
        <WindowControls target="contact" />
        <h2 className="text-lg font-semibold">Contact Me</h2>
      </div>

      <div className="p-5 space-y-4">
        <img
          src="/images/Rajan_img.JPG"
          alt="Profile photo"
          className="w-20 h-20 rounded-full object-cover"
        />

        <h3 className="text-md font-medium">Let's connect</h3>

        <p>
          Have an idea, a bug to fix, or hiring opportunities? I'm open to
          collaborations and new roles in tech — drop me a message.
        </p>

        <p className="font-mono">rajanyadav29jan@gmail.com</p>

        <ul className="mt-2 space-y-2">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
              className="rounded-md p-2 flex items-center gap-3"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
                aria-label={text}
                className="flex items-center gap-2 w-full"
              >
                <img src={icon} alt="" className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm">{text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow

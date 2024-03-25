import { useState } from 'react';
import './App.css'

export default () =>{
  const [value,setValue] = useState(0)
  const update = () =>{
    setValue(value + 1)
    alert(value)
  }
  const messages = [
    {nom:'Ken',text:'Hey'},
    {nom:'Zo',text:'Salut'},
    {nom:'Zo',text:'Quoi de neuf?'},
    {nom:'Ken',text:'ça va,tranquil'},
  ]
  const chatters = [
    {photo:'',nom:'Zo',dernier_message:'me:ça va,tranquil'},
    {photo:'',nom:'Lil',dernier_message:'Yo'},
    {photo:'',nom:'Pump',dernier_message:'Wassup'},
    {photo:'',nom:'Sku',dernier_message:'Seriously?'},
  ]
  const messages_li = messages.map((message) =>{
    var message_classe = ''
    if (message.nom == 'Ken' ) {
      message_classe = 'Droite'
    } else {
      message_classe = 'Gauche'
    } 
    return (
      <li className={message_classe}>
        {message.text}
      </li>
    )
  })
  return(
    <div className='wrapper'>
      <div className='header'>
        <header>

        </header>
      </div>
      <div className='sidebar'>

      </div>
      <div className='messages'>
        <ul className='msg_box'>
          {messages_li}
        </ul>
        <form className='msg_send'>
          <input type='text' id='message_text'/>
        </form>
      </div>
      <div className='footer'>

      </div>

    </div>
  )

}




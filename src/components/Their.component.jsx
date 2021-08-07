import React from 'react'
const TheirMessage = ({lastMessage,message})=>{
    const isFirstMessageByUser=!lastMessage||lastMessage.sender.username=== message.sender.username;
    return (
        <div className="message-row">
            {
                isFirstMessageByUser && (
                    <div
  className="message-avatar"
  style={{backgroundImage:message.sender && `url(${message.sender.avatar})`}}

                    />
                )
            }
      {     message.attachments && message.attachments.length > 0 ?(<img  src={message.attachments[0].file} alt="" className="message-image" style={{float:isFirstMessageByUser?'4px' : '48px'}}/>):(
        <div className="message theirmessage" style= {{float:'left',backgroundColor:'#CABCDC'}}>
            {message.text}
        </div>
    )
      }
  
        </div>
    
    )
}
export default TheirMessage 

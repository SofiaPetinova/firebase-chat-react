import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from '../dbConnect';
import {useEffect, useState} from "react";
import {query, collection, orderBy, onSnapshot} from "firebase/firestore";
import {db} from "../dbConnect";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [user] = useAuthState(auth)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const taskColRef = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(taskColRef, (snapshot) => {
      let messages = []
      snapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id})
      })
      setMessages(messages)
    })
    return () => unsubscribe()
  }, [])

  console.log(messages)
  return (
    <div>
      <main>
          {messages && messages.map((message) =>
              <div key={message.id} className={`msg ${message.uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                <span className='name'>{message.name}</span>
                <p>{message.text}</p>
              </div>
          )}
      </main>
      <div className="sendMsg">
        <SendMessage />
      </div>
    </div>
  );
};

export default Chat;
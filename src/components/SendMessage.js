import {useState} from "react";
import {db, auth} from "../dbConnect";
import {addDoc, collection, serverTimestamp} from "firebase/firestore"

const SendMessage = () => {
  const [inputValue, setInputValue] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()

    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
      text: inputValue,
      name: displayName,
      uid,
      timestamp: serverTimestamp()
    })
    setInputValue('')
  }

  return (
    <form onSubmit={sendMessage}>
        <input type="text" placeholder='Message' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button disabled={!inputValue} type='submit'>Send</button>
    </form>
  );
};

export default SendMessage;
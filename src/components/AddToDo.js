import React, {useState} from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";


function AddToDo() {
    const [title, setTitle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (title !== '') {
            await addDoc(collection(db, 'todos'), {
                title,
                completed: false,
            });
            setTitle('')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="input">
            <input 
                type='text'
                placeholder="Enter Your todo!"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
        </div>
        <div className="btn-container">
            <button>Add</button>
        </div>
    </form>
  )
}

export default AddToDo

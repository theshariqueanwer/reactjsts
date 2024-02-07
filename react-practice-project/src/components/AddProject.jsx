import React, { useRef } from 'react'
import InputTextarea from './InputTextarea'
import Label from './Label'
import Input from './Input'
import { inputData } from '../data/data.js'
import LabelInputTextarea from './LabelInputTextarea.jsx'
import Modal from './Modal.jsx'

function AddProject({onAdd, onCancel}) {

  const modal = useRef();

  // const titleRef = useRef();
  // const descriptionRef = useRef();
  // const dueDateRef = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;


    // ... validation
    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      // show the error modal
      modal.current.open();
      return;
    }


    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })
  }


  return (
    <>
      <Modal ref={modal}  buttonCaption="Okay">
        <h2 className='text-xl font-bold text-stone-700 my-4' >Invalid Input</h2>
        <p className='text-slate-600 mb-4' >Oops ... looks like you forgot to enter the value.</p>
        <p className='text-slate-600 mb-4' >please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className='w-[35rem] mt-16'>

        {/* <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950' onClick={onCancel} >Cancel</button></li>
            <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave} >Save</button></li>
        </menu> */}

        <div>
            <LabelInputTextarea label="Title" ref={title} />
            <LabelInputTextarea label="Description" textarea ref={description} />
            <LabelInputTextarea label="Due Date" type="date" ref={dueDate} />
        </div>  

        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950' onClick={onCancel} >Cancel</button></li>
            <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave} >Save</button></li>
        </menu>

      </div>
    </>
  )
}
export default AddProject

import React from 'react'

import React from 'react'
import InputTextarea from './InputTextarea'
import Label from './Label'
import Input from './Input'
import { inputData } from '../data/data.js'
import LabelInputTextarea from './LabelInputTextarea.jsx'

function NewProject() {
  return (
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
            <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
        </menu>

        <div>
            <LabelInputTextarea label="Title" />
            <LabelInputTextarea label="Description" textarea />
            <LabelInputTextarea label="Due Date" type="date" />
        </div>  

    </div>
  )
}

export default NewProject

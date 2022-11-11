import React from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import itemEmpty from '../assets/todo-empty-state.png'
import { useParams } from 'react-router-dom'

export default function List() {
  const {id} = useParams()
  return (
    <div>
        <DashboardLayout title='New Activity'>
            <div className='flex justify-center'>
                <img src={itemEmpty} alt="" />
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <h1>asdasdasdas</h1>
            </div>
        </DashboardLayout>
    </div>
  )
}

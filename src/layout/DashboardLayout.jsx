import React, { useEffect, useState } from 'react'
import { getAllActivity } from '../services/activity.services'

export default function DashboardLayout({children, title}) {

  return (
    <div>
      <div className='bg-blue-400'>
      <div className='mx-36 py-5'>
        <h1 className='text-white font-bold'>TO DO LIST APP</h1>
      </div>
      </div >
      <div className='mx-36 py-5 flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <button className='bg-blue-400 px-2 py-1 rounded-2xl hover:bg-blue-500 text-white'>+ Tambah</button>
        </div>
        <div>
        {children}
        </div>
      </div>
    </div>
  )
}

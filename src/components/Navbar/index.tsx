'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link";

import useTaskContext from '@/context/useTaskContext';

const Navbar = () => {
  const { tasks } = useTaskContext()
  const router = useRouter()

  return (
    <header className="flex justify-between items-center bg-gray-800 px-28 py-3">
      <Link href="/">
        <h1 className="font-bold text-3xl text-white">Task App</h1>
        <span className="text-sm ml-5 text-slate-300">{tasks.length} Tasks</span>
      </Link>
      <div>
        <button
          className="bg-green-500 hover:bg-green-400 text-gray-50 px-5 py-2 font-bold rounded-md inline-flex items-center"
          type='button'
          onClick={() => router.push('/new')}
        >
          Add Task
        </button>
      </div>
    </header>
  )
}

export default Navbar

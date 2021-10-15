import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { useAppContext } from '../context/AppContext'
import { TaskListItem } from '../components/TaskkListItem'

const Home: NextPage = () => {
  const { state, dispatch } = useAppContext();
  const { tasks } = state;


  return (
    <div className="bg-gray-100 min-h-screen grid place-items-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-full w-96 relative">
        {tasks.map((task) => (
          <TaskListItem task={task} key={task.id} />
        ))}

        <div className="absolute right-4 bottom-4 ">
          <button className="bg-blue-800 text-gray-50 pb-2 px-3 rounded-full text-4xl shadow-lg hover:shadow hover:bg-blue-900 hover:text-white transition-all" onClick={() => dispatch({ type: "create_task", value: { title: 'new task' + Math.random() } })}>
            +
          </button>
        </div>

      </main>
    </div>
  )
}

export default Home

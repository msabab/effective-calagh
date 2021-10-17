import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { useAppContext } from '../context/AppContext'
import TaskListItem from '../components/TaskkListItem'
import router from 'next/router'

const Home: NextPage = () => {
  const { state, dispatch } = useAppContext();
  const [tasks, setTasks] = React.useState(state.tasks);
  const [sortBy, setSortBy] = React.useState('');

  const sortTasks = (by) => {
    if (by === 'title') {
      let sorted = [...state.tasks]
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      setTasks(sorted);
    }
    else if (by === 'project') {
      let sorted = [...state.tasks]
      sorted.sort((a, b) => {
        if (a.project === null) {
          return -1;
        }
        if (b.project === null) {
          return 1;
        }

        return a.project.localeCompare(b.project)
      })
      setTasks(sorted);
    }
    else if (by === 'startedAt') {
      let sorted = [...state.tasks]
      sorted.sort((a, b) => {
        if (a.startedAt == null) {
          return -1;
        }
        if (b.startedAt == null) {
          return 1;
        }
        let aDate = new Date(a.startedAt);
        let bDate = new Date(b.startedAt);
        console.log(aDate)
        return aDate.getTime() - bDate.getTime();
      })
      setTasks(sorted);
    }
    else {
      setTasks(state.tasks);
    }
  }
  React.useEffect(() => {
    setTasks(state.tasks);
  }, [state.tasks]);


  return (
    <>
      <Head>
        <title>Task Tracker</title>
        <meta name="description" content="Task tracking application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="h-12 p-2 rounded flex  justify-between w-full">
        <div></div>
        <div className="grid grid-flow-col gap-2">
          <button onClick={() => { sortTasks('title'); setSortBy('title') }}
            className="px-2 py-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            title
          </button>
          <button onClick={() => { sortTasks('project'); setSortBy('project') }}
            className="px-2 py-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            </svg>
            project
          </button>
          <button onClick={() => { sortTasks('startTime'); setSortBy('startTime') }}
            className="px-2 py-1 rounded hover:bg-gray-200 hover:shadow-inner transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
            </svg>
            date
          </button>
        </div>
      </nav>
      <main>
        {tasks.map((task) => (
          <TaskListItem task={task} key={task.id} />
        ))}

        <div className="absolute right-4 bottom-4 ">
          <button className="bg-blue-800 text-gray-50 pb-2 px-3 rounded-full text-4xl shadow-lg hover:shadow hover:bg-blue-900 hover:text-white transition-all" onClick={() => { router.push('/create') }}>
            +
          </button>
        </div>

      </main>
    </>
  )
}

export default Home

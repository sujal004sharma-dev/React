import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('')
  const [Task, setTask] = useState([])

  const SubmitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...Task]
    copyTask.push({ title, details });

    setTask(copyTask);


    setTitle('');
    setDetails('');

  }

  const deleteNode = (idx) => {
    const copyTask = [...Task];

    copyTask.splice(idx, 1);//splice method ki hata do
    setTask(copyTask);//waps se nayi ko set kar do naa
  }

  return (
    <div className='bg-black lg:flex text-white h-screen  '>

      <form onSubmit={(e) => {
        SubmitHandler(e)
      }}
        className='flex lg:w-1/2 justify-between '>

        <div className=' flex gap-4 w-full 
         flex-col m-8 '>
          <h1 className='text-3xl font-bold p-3'>Add Notes</h1>

          {/* THIS IS THE FIRST INPUT */}
          <input type="text"
            placeholder='Enter Your Name'
            className='px-5 py-2 border-white-50 border-4 rounded'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          {/* THIS IS THE SECOND INPUT */}
          <textarea name=""
            className='px-5  h-35 py-2 border-white-50 border-4 rounded'
            placeholder='Write about...'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          ></textarea>

          <button className='bg-white active:scale-98 font-bold text-black py-2 text-xl m-2 rounded cursor-pointer'>Add Notes</button>
        </div>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 gap-5  p-5'>
        <h1 className='text-3xl font-bold p-5'>Your Notes</h1>
        <div className='flex flex-wrap h-[60vh] lg:h-[90%] overflow-auto no-scrollbar lg:scrollbar-show gap-5'>
          {
            Task.map(function (elem, idx) {
              return <div key={idx} className="h-60  flex flex-col justify-between items-start text-black w-48  bg-cover rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] object-fi">
                <div className=''>
                  <h3 className='leading-tight capitalize text-gray-600 text-2xl m-4 font-bold'>{elem.title}</h3>
                  <p className='mt-6 m-3  text-gray-700 font-medium'>{elem.details}</p>
                </div>
                <button onClick={() => {
                  deleteNode(idx);
                }}
                  className="w-30 ml-8 mb-2 cursor-pointer active:scale-95 h-8 font-bold text-xs py-2 bg-red-500 rounded-xl">
                  Delete
                </button>
              </div>

            })
          }

        </div>
      </div>
    </div>
  )
}

export default App

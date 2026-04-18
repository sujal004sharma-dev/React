import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [Userdata, setUserdata] = useState([])
  const [index, setindex] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const containerRef = useRef(null)

  const getdata = async () => {
    if (loading || !hasMore) return

    setLoading(true)
    try {
      let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
      
      if (response.data.length === 0) {
        setHasMore(false)
      } else {
        setUserdata(prev => [...prev, ...response.data])
        setindex(prev => prev + 1)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleScroll = () => {
    if (!containerRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current
    const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100 // 100px threshold

    if (isNearBottom && !loading && hasMore) {
      getdata()
    }
  }

  useEffect(() => {
    getdata() // Initial load
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [loading, hasMore])

  let Printuserdata = <h3 className='text-gray-600 text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (Userdata.length > 0) {
    Printuserdata = Userdata.map(function (elem, idx) {

      return <div key={`${elem.id}-${idx}`}>
        <Card elem={elem} />{/*Component Card*/}
      </div>
    })
  }

  return (
    <div className='bg-black p-4 h-screen overflow-auto text-white' ref={containerRef}>

      <div className='flex h-[90%] flex-wrap gap-4 '>
        {Printuserdata}
      </div>

      {loading && (
        <div className='flex justify-center mt-5'>
          <h3 className='text-gray-400 text-xl'>Loading more images...</h3>
        </div>
      )}

      {!hasMore && Userdata.length > 0 && (
        <div className='flex justify-center mt-5'>
          <h3 className='text-gray-400 text-xl'>No more images to load</h3>
        </div>
      )}
    </div>

  )
}

export default App

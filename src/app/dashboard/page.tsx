import GraphsData from '@/components/GraphsData'
import MainContainer from '@/components/MainContainer'
import Reviews from '@/components/Reviews'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      <MainContainer />
      <div className="flex p-[48px] w-full">
        <Reviews />
        <GraphsData />
      </div>
    </div>
  )
}

export default Dashboard
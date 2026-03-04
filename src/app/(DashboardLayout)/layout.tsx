'use client'

import Header from './layout/header/Header'
import Sidebar from './layout/sidebar/Sidebar'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full min-h-screen bg-lightgray dark:bg-dark">
      
      {/* Sidebar */}
      <div className="xl:block hidden">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Single Clean Header */}
        <Header />

        {/* Page Content */}
        <div className="container mx-auto px-6 py-10">
          {children}
        </div>

      </div>

    </div>
  )
}
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
      <div className="hidden xl:block w-[260px] shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 container mx-auto px-6 py-10">
          {children}
        </main>

      </div>

    </div>
  )
}
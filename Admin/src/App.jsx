import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { FiSettings } from 'react-icons/fi'
import { Tooltip } from "react-tooltip";

import { Header, Footer, Sidebar, ThemeSetting, Navbar, ProductContent  } from './components'
import { Eccomerce, Editor, Employee, Product, Area, Bar, Calender, ColorMapping, ColorPicker, Customer, Financial, Kanban, Line, Pie, Order, Pyramid, Stacked } from './pages'

import { useStateContext } from './context/ContextProvider'

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <>
      <div className="flex reative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <button id='settings' type='button' onClick={()=>{}} className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%' }}>
            <FiSettings />
          </button>
          <Tooltip anchorSelect="#settings" content="Settings"/>

        </div> 
        {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          )}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full
            ${activeMenu ? ' md:ml-72' : 'flex-2'}
          `}>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Eccomerce/>} />
                <Route path="/ecommerce" element={<Eccomerce/>} />

                {/* pages */}
                <Route path="/orders" element={<Order/>} />
                <Route path="/employees" element={<Employee/>} />
                <Route path="/customers" element={<Customer/>} />
                <Route path="/products" >
                    <Route index element={<Product /> }></Route>
                    <Route path="add" element={<ProductContent />}></Route>
                </Route>

                {/* Apps */}
                <Route path="/kanban" element={<Kanban/>} />
                <Route path="/editor" element={<Editor/>} />
                <Route path="/calendar" element={<Calender/>} />
                <Route path="/color-picker" element={<ColorPicker/>} />

                {/* charts */}
                <Route path="/line" element={<Line/>} />
                <Route path="/area" element={<Area/>} />
                <Route path="/bar" element={<Bar/>} />
                <Route path="/pie" element={<Pie/>} />
                <Route path="/financial" element={<Financial/>} />
                <Route path="/color-mapping" element={<ColorMapping/>} />
                <Route path="/pyramid" element={<Pyramid/>} />
                <Route path="/stacked" element={<Stacked/>} />
              </Routes>
            </div>
          </div>
      </div> 
    </>
  
  )

}

export default App;
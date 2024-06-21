import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTitle } from '../store/reducers/project'

const Menu = ({ className, items, header, select }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [active, setActive] = useState(select)

  useEffect(() => {
    setActive(select)
  }, [select])

  const selectHandler = (e) => {
    dispatch(addTitle(null))
    setActive(e.itemKey)
    navigate(e.link)
  }

  return (
    <div className={`w-[80px] bg-white border-r ${className}`}>
      <div className='p-2 pt-5 text-center'>{header}</div>
      <ul>
        {items.map((item) => (
          <li
            key={item.itemKey}
            className={`group flex flex-col items-center p-2 mt-2 cursor-pointer hover:scale-105 ${
              active === item.itemKey ? 'text-blue-500 scale-105' : ''
            }`}
            onClick={() => selectHandler(item)}
          >
            {item.icon}
            <div className='text-sm font-bold mt-1 group-hover:text-blue-500'>{item.text}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Menu
// text-blue-500

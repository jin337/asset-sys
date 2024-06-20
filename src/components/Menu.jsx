import {} from 'react'
import { useNavigate } from 'react-router-dom'
import {} from 'react-router-dom'

const Menu = ({ className, items, header }) => {
  const navigate = useNavigate()

  return (
    <div className={`w-[80px] bg-white border-r ${className}`}>
      <div className='p-2 pt-5 text-center'>{header}</div>
      <ul>
        {items.map((item) => (
          <li
            key={item.itemKey}
            className='group flex flex-col items-center p-2 mt-2 cursor-pointer hover:scale-105'
            onClick={() => navigate(item.link)}
          >
            {item.icon}
            <div className="text-sm font-bold mt-1 group-hover:text-blue-500">{item.text}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Menu
// text-blue-500

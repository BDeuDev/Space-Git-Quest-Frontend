import { useSelector } from 'react-redux'
import {  jwtDecode } from 'jwt-decode'

const User = () => {
  const circleStyle = {
    width: 70,
    height: 70,
    borderRadius: '50%',

  };
  const circleStyle2 = {
    width: 180,
    height: 180,
    borderRadius: '50%',

  };
  const token = localStorage.getItem('jwt_token')
  //@ts-ignore
  const decodedToken = jwtDecode<any>(token);
  //@ts-ignore
  const { user } = useSelector((state) => state.auth);
  return (

    <div className='brightness-[1.2] transition transform ease-out duration-700 fixed top-0 right-0 z-50'>
      <button className='fixed z-10 top-14 right-14 cursor-pointer' >
        <div style={circleStyle} className=" bg-transparent">
          <img src={user?.avatar || decodedToken.avatar } alt="Descripción de la imagen" className={` w-full h-full object-cover  rounded-full`} />
        </div>
      </button>
      <button className='fixed top-0 right-0 '>
        <div style={circleStyle2} className='bg-transparent '>
          <img src="./user-border.png" alt="" className=' w-full h-full object-cover rounded-full ' />
        </div>
      </button>
      <h1 className="text-white mt-3 font-orbitron fixed top-[135px] right-[47px]">{user?.username || decodedToken.username}</h1>
    </div>

  )
}
export default User
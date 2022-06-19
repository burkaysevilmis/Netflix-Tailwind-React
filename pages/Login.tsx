import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from '../components/svg/abc.svg'
export const Login = () => {
  const router=useRouter();
  return (
    <div className='flex  w-full  bg-black sm:bg-pack-train opacity-72 '>
      <div className=' w-full h-full absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 flex-col'>

     
      <div className='flex h-[90px]'>
        <Image src={logo}  />
      </div>
      <div className='w-full md:max-w-[500px]  md:w-2/3 md:mx-auto'>
      <div className=' flex flex-col  bg-black  bg-opacity-60 items-center justify-center ' >
       
       <div className='opacity-100 p-10 w-full sm:w-[500px]'>
       <p className='text-3xl text-white font-bold' >Oturum Aç</p>
        <input className='h-[50px] w-full outline-none rounded-md bg-[#333] my-3' />
        <input className='h-[50px] w-full outline-none rounded-md bg-[#333] my-3' />
        <button onClick={()=>{router.push('/Home')}} className='h-[50px] my-3 w-full bg-[#e50914] rounded-md text-white font-bold' >Oturum Aç</button>
        <div className='flex-row flex text-[#b3b3b3] items-center justify-between'>
        <div className='flex-row flex items-center'>
        <input type='checkbox' className='bg-[#333]' />
        <p className='ml-2'>Beni Hatırla</p>
        </div>
        <p>Yardım İstermisiniz?</p>
        </div>
        <p className='text-[#b3b3b3] flex '>
        Netflix'e katılmak ister misiniz?
       
        </p>
       
       </div>
      </div>
      </div>
     
      </div>
    </div>
  )
}

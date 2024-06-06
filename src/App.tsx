import 'animate.css'

import { Carretes } from './components/Carretes'
import { Footer } from './components/Footer'
import { SobreMi } from './components/SobreMi'
import { SocialIcons } from './components/SocialIcons'

function App() {
  

  return (
    <div className='w-full'>
      <div id="#inicio" className='h-screen w-screen font '
            style={{
              backgroundImage: `url(/Naturaleza/IglesiaH.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}>
        <div className='animate__animated animate__backInLeft'>
          <h1 className='text-7xl text-white lg:ml-[20%] ml-[5%] pt-[130px] '> Tomás Silvente </h1>
          <h1 className='text-3xl text-white lg:ml-[39%] ml-[6%] mt-[15px]'> Fotografía </h1>
          <SocialIcons />
        </div>
      </div>
      <SobreMi />
      <Carretes />
      <img className='bg-[#c6c6ae] w-full' src='../common/wavesNegative.svg' />
      <Footer />
    </div>
  )
}

export default App

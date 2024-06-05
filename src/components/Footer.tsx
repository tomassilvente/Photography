import Facebook from "../Icons/Facebook"
import GitHub from "../Icons/GitHub"
import Instagram from "../Icons/Instagram"
import LinkedIn from "../Icons/LinkedIn"

export const Footer = () => {
  return (
    <div id="footer" className="bg-[#3f3816] text-[#ddddc1] p-8 py-14 lg:flex grid grid-cols-2 justify-around lg:space-x-0 space-x-2">
        <div>
            <h1 className='md:text-5xl text-4xl text-white font mb-5'> Tomás Silvente </h1>
            <nav className="md:flex grid grid-cols-2 mt-5 md:space-x-4">
                <a href='https://instagram.com/tomassilvente' className="rounded-full  p-1.5 hover:bg-[#c6c6ae91]">
                    <Instagram height={38} width={38}/>
                </a>
                <a href='https://github.com/tomassilvente?tab=repositories' className="rounded-full hover:bg-[#c6c6ae91] p-1.5">
                    <GitHub height={38} width={38}/>
                </a>
                <a href='https://tomas-silvente.netlify.app' className="rounded-full hover:bg-[#c6c6ae91] p-1.5 mt-5 md:mt-0">
                    <Facebook height={38} width={38}/>
                </a>
                <a href='https://www.linkedin.com/in/tomás-silvente-a3b1951b2/' className="rounded-full hover:bg-[#c6c6ae91] p-1.5 mt-5 md:mt-0">
                    <LinkedIn height={38} width={38}/>
                </a>
            </nav>
        </div>
        <div>
            <p className="font2 text-3xl">Teléfono</p>
            <p className="text-2xl mt-7">+54 9 2932 500-900</p>
        </div>
        <div className="lg:hidden">
        </div>
        <div>
            <p className="font2 text-3xl">Email</p>
            <p className="text-2xl mt-7">silventetomas@gmail.com</p>
        </div>
    </div>
  )
}

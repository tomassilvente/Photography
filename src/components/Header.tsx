
export const Header = () => {
  return (
    <nav className="w-[100%] bg-[#c6c6ae] font2 py-3">
        <ul className="flex justify-evenly sm:text-xl text-[#3f3816]">
            <li>
                <a href="#inicio" className="hidden sm:block hover:font-bold hover:cursor-pointer py-1.5 md:px-5"> Inicio </a>
            </li>
            <li>
                <a href="#SobreMi" className="hover:font-bold hover:cursor-pointer py-1.5 md:px-5"> Sobre Mi </a>
            </li>
            <li>
                <a href="#portafolio" className="hover:font-bold hover:cursor-pointer py-1.5 md:px-5"> Portafolio </a>
            </li>
            <li>
                <a href="#footer" className="hover:font-bold hover:cursor-pointer py-1.5 md:px-5"> Contacto </a>
            </li>
        </ul>
    </nav>
  )
}

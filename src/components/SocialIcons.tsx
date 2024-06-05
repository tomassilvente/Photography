import Instagram from '../Icons/Instagram'
import LinkedIn from '../Icons/LinkedIn'
import Facebook from '../Icons/Facebook'
import GitHub from '../Icons/GitHub'

export const SocialIcons = () => {
  return (
    <div className='flex lg:ml-[30%] ml-[6%] space-x-[3%] mt-[25px]'>
      <a href='https://instagram.com/tomassilvente' className="rounded-full bg-[#c6c6ae91] p-1.5 hover:bg-[#c6c6ae]">
          <Instagram height={23} width={23}/>
      </a>
      <a href='https://github.com/tomassilvente?tab=repositories' className="rounded-full bg-[#c6c6ae91] p-1.5 hover:bg-[#c6c6ae]">
          <GitHub height={23} width={23}/>
      </a>
      <a href='https://tomas-silvente.netlify.app' className="rounded-full bg-[#c6c6ae91] p-1.5 hover:bg-[#c6c6ae]">
          <Facebook height={23} width={23}/>
      </a>
      <a href='https://www.linkedin.com/in/tomás-silvente-a4b1951b2/' className="rounded-full bg-[#c6c6ae91] p-1.5 hover:bg-[#c6c6ae]">
          <LinkedIn height={23} width={23}/>
      </a>
    </div>
  )
}

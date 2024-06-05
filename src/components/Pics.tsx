import pics from '../assets/pics.json'

type PicsProps ={
  tipo: string,
  desc: string,
  index: number
}

export const Pics = ({tipo,desc,index}:PicsProps) => {
  return (
    <div>
        <div className='lg:grid-cols-4 grid grid-cols-2 px-5'>
          <p className='font2 p-10 text-left text-lg lg:text-xl xl:text-3xl lg:col-start-1 lg:col-end-3 col-start-1 col-end-3'>{desc}</p>
          <img className=' w-[80%] mb-5 justify-self-center self-center rounded-xl lg:col-start-3 lg:col-end-5 col-start-1 col-end-3' src={`/Horizontal/${index}.jpg`} />
          {pics.pictures.filter(name => name.tipo === tipo).slice(0,4).map(foto =>(
              <div className='m-4 mx-auto px-1'>
                  <a target='_blank' href={foto.url}>
                      <img className='rounded-lg border border-[#878787] max-h-[475px] xl:max-h-[575px]' src={foto.url} />
                  </a>
              </div>
              ))}
        </div>
    </div>
  )
}

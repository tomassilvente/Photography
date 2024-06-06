import { Pics } from './Pics'

const tipos = [{
  tipo:"Restaurante",
  description: "Fotografías capturadas en un club de golf, en la ciudad de Punta Alta, al horario del mediodía, solo con la luz proveniente de las ventanas, ya que las luces artificiales se suelen mantener apagadas para tener un ambiente más natural "
},
{
  tipo:"Reportate",
  description: "Equipo masculino de la liga Universitaria de Bahía Blanca. Todos los sábados les saco fotografías durante el partido para la creación de contenido de su página de Instagram @reportate.pa, el horario promedio de las fotos es entre las 14 y las 18 horas"
},
{
  tipo:"Womanchester",
  description: "Equipo femenino de la liga Universitaria de Bahía Blanca. Domingo por medio digo presente en el Club Universitario para apoyar y fotografiar a este equipo de amigas, el horario promedio de las fotos es entre las 15 y las 17 horas"
},
{
  tipo:"Naturaleza",
  description: "Fotos tomadas en la Base Naval Puerto Belgrano y en la ciudad de Punta Alta. Suelen ser mascotas o lugares emblemáticos de la zona, el horario promedio de las fotos es entre las 14 y las 17 horas"
},
{
  tipo:"Hockey",
  description: "Asistencia a un partido de Hockey de la Base Naval Puerto Belgrano, las fotos fueron tomadas en condiciones casi nocturnas, donde las primeras fotos comenzaron a las 18 horas y las ultimas fueron rozando las 20 horas, en invierno, así que la luz en este caso, se podría decir que brilló por su ausencia."
}]

export const Carretes = () => {
  return (
    <div id="portafolio" className='text-white pb-10 font bg-[#c6c6ae]'>
        {tipos.map((tipo,index) =>(
          <>
            {index % 2 == 0 
              ? <img className='bg-[#3F3816] w-full mb-[-10px] sm:mb-0' src='../wavesNegativeTop.svg' />
              : <img className='bg-[#c6c6ae] w-full mb-[-10px] sm:mb-0' src='../wavesNegative.svg' />
            }
            <div className={`${index % 2 == 0 ? 'text-[#3f3816]' : 'bg-[#3f3816] text-[#ddddc1]'} p-5 text-center space-x-2`}>
                <h1 className={`text-6xl mb-10`} >{tipo.tipo}</h1>
                <Pics tipo={tipo.tipo} desc={tipo.description} index={index}/>
            </div>
          </>
        ))}
    </div>
  )
}

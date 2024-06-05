export const SobreMi = () => {
  return (
    <div id="SobreMi" className="lg:grid lg:grid-cols-2 p-10 bg-[#3f3816] ">
        <div className="text-2xl font2 text-[#eee] text-center lg:text-left animate__animated animate__fadeIn animate__delay-3s animate__slow">
            <h1 className="font text-6xl my-5 text-center" >¿Quién Soy?</h1>
            <p className="mt-10">🙋🏻‍♂️ Soy Tomás Silvente, tengo 25 años, vivo en la ciudad de Punta Alta 📍.</p>
            <p className="mt-[8px]">Me dedico a la programación 💻. Estudié <span className="font-bold text-[#fff]"> Analista en Sistemas y Técnico en Redes Informáticas 🌐 🧑🏻‍💻 .</span></p>
            <p className="mt-[8px]">También estudié durante años en cursos de Udemy, entre otros. En esos cursos aprendí sobre <span className="font-bold text-[#e8e2b6]"> React, NextJs, Angular, HTML, CSS, Javascript, Typescript, NodeJS, Express, MongoDB, MySQL, Python, Flask</span> y más.</p>
            <p className="mt-[8px]">Esto de la fotografía comenzó encontrando una 📸 cámara abandonada en mi casa y llevandola a partidos de Fútbol ⚽️ de mis amigos 🫂. De a poco fui 💡 entendiendo y 🧠 aprendiendo mucho sobre este mundo, por lo que comencé a invertir en lentes y aprendizaje 📚.</p>
            <p className="mt-[8px]">Tomo esto como un Hobbie , junto a los videojuegos, para distraerme 💆🏻 cuando me saturo con los estudios y las frustrantes búsquedas laborales que parece que nunca se llega a destino final 😤 🤯 . </p>
            <p className="mt-[8px]">A continuación te dejo algunas fotos, para mostrarte algunos frutos de este pasatiempo ⬇️</p>
        </div>
        <img className="lg:max-h-[750px] max-h-[500px] mx-auto my-6 place-self-center rounded-lg" src='../me.jpg'/>
    </div>
  )
}

import React from 'react'

const SectionHeader = ({title,
    eyebrow,
    description}:{
        title: string;
        eyebrow: string;
        description: string;
    }) => {
    

  return (
    <div>
         <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 t0 bg-sky-400 text-center bg-clip-text text-transparent ">
{eyebrow}          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
{title}        </h2>
        <p className="text-center text-white/50 mt-4 md:text-lg max-lg:text-xl max-w-md mx-auto">
         {description}  </p>
    </div>
  )
}

export default SectionHeader
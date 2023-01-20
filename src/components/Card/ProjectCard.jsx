import React from 'react'
import Image from "next/image";



const ProjectCard = (props) => {
  return (
    <div className="w-[300px] h-[300px] bg-slate-500 rounded-2xl">
        <div className="mx-auto]">
            <Image
                src={props.src}
                alt="image card"
                width={280}
                height={200}
                className="mx-auto pt-2"
            />
        </div>
        <div>
            <h1 className="text-xl font-bold ml-4 mt-2">
                {props.title}
            </h1>
            <p className="ml-4">
                {props.desc}
            </p>
        </div>
    </div>
  )
}

export default ProjectCard
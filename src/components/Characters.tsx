import React from "react";

export function Characters (){
  return (
    <div className="w-102 h-294 bg-slate-700 border-transparent border-1 rounded-lg flex flex-row">
      <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg" alt="" className="size-100" />
      <div className="p-5 flex flex-col">
        <p className="font-bold text-lg">Rick Sanchez</p>
        <div className="flex-row"><p className="text-md">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          Dead - Human</p>
          </div>
        <p className="font-bold text-md">Rick Sanchez</p>
        <p className="font-bold text-md">Rick Sanchez</p>
        <p className="font-bold text-md">Rick Sanchez</p>
        <p className="font-bold text-md">Rick Sanchez</p>
      </div>
    </div>
  )

}
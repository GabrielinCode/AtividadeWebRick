import React from "react";

export function Characters ({ item, handleCharacter }: any){
  console.log(item)
  function reduzirString(texto: string, tamanhoMaximo: number): string {
    if (texto.length > tamanhoMaximo) {
      texto = texto.substring(0, tamanhoMaximo);
  
      texto += "...";
    }
  
    return texto;
  }
  return (
    <div className="w-100 h-56 bg-slate-700 border-transparent border-1 rounded-lg flex flex-row" onClick={handleCharacter}>
      <img src={item.image} alt="" className="w-2/4 rounded-tl-md rounded-bl-lg" />
      <div className="p-5 flex flex-col">
        <p className="font-bold text-lg">{reduzirString(item.name, 16)}</p>
        <div className="flex justify-content-center">
          <span className="status-indicator bg-red-500 rounded-full h-2 w-2 mr-2 mt-2"></span>
          <p className="text-md">{item.status} - {item.species}</p>
        </div>
        <p className="font-bold text-md text-gray-500 pt-4">Last known location:</p>
        <p className="font-bold text-md">{reduzirString(item.location.name,16)}</p>
        <p className="font-bold text-md text-gray-500 pt-4">Firt seen in:</p>
        <p className="font-bold text-md">{reduzirString(item.origin.name,16)}</p>
      </div>
    </div>
  )

}
import React from "react";

function Academics() {
  const data = [
    {author:"James Gosle", title:"A Brief History of Time",condition:"New"},
    {author:"Alberto ", title:"Critique of Pure Reason",condition:"New"},
    {author:"Alexender", title:"Silent Spring",condition:"Barely Used"},
    {author:"Dwayne Smith", title:"The Female Eunuch",condition:"Heavily Used"},
    {author:"David Warner", title:"Gender Trouble",condition:"Heavily USed"},
    {author:"Joe Root", title:"Nineteen Eighty-Four",condition:"Heavily Used"},
  ];
    return (
        <div className="bg-black px-24">
            <div className="py-16">
                <h1 className="text-center font-semibold text-white text-5xl">
                    <span className="text-yellow-600">Academics</span> and
                    Textbooks
                </h1>
            </div>
            <div className="flex flex-wrap gap-20 justify-center">
            {data.map((index,value)=>(
              <div>
              <div className=" w-[18rem] h-[15rem] justify-center text-center text-white border border-zinc-300 flex flex-col gap-3 ">
                  <h1 className="text-3xl ">{index.author}</h1>
                  <h2 className="text-3xl">{index.title}</h2>
                  <h3 className="text-2xl">{index.condition}</h3>
              </div>
              <div className="mt-6 flex">
                  <button className="text-white bg-yellow-600 rounded-4xl text-xl px-8 py-3">
                      Available?
                  </button>
                  <h1 className="text-white py-4 text-xl px-8">
                      <span className="text-green-500">Yes </span>/
                      <span className="text-red-500"> No</span>
                  </h1>
              </div>
              </div>
            ))}
            </div>
        </div>
    );
}

export default Academics;

const biodata = {
	id:1,
	nama: "Fajri Khairan",
	born : "20 Oktober 2004",
	age : "20 Tahun" ,
	hobbies : ["Tidur", "Makan" , "Olahraga"],
	images : "./profile.jpg",
}

export default function App() {

  return (
    <>
      <div className="w-1/3 bg-slate-300 rounded-lg border-2 flex flex-col gap-2 m-auto mt-5 text-center p-5">
        <h1 className="text-cyan-400 text-2xl font-bold">Tugas Kelompok 1 Galaksi</h1>
        <figure className="bg-slate-400 gap-5 rounded-lg flex items-center flex-col p-5">
          <h1 className="text-2xl font-bold">Biodata</h1>
          <img src={biodata.images} className="rounded-full w-3/4" alt="" />
          <figcaption>
            <h1 className="text-2xl font-bold">{biodata.nama}</h1>
            <h2 className="text-xl font-bold">{biodata.born}</h2>
            <h3 className="text-lg font-bold">{biodata.age}</h3>
            <div className="flex gap-2">
              {biodata.hobbies.map((hobbie, i) =>(
                <h1 key={i} className="bg-cyan-400 rounded-lg p-2 font-bold">{hobbie}</h1>
              ))}
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  )
}

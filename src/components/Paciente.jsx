
const Paciente = () => {
  return (
    <div className="mx-5 bg-white shadow-md  px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">Juan</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">juan@email.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">10 Diciembre 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error molestias, accusantium velit culpa quos ducimus nisi beatae neque fugiat. Hic placeat necessitatibus mollitia explicabo sunt aliquid soluta harum possimus!</span>
        </p>
    </div>
  )
}

export default Paciente
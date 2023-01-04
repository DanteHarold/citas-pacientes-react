import React from "react";

import { Paciente } from "./Paciente";

export const ListadoPacientes = ({
  pacientes,
  setPaciente,
  eliminarPaciente,
}) => {
  console.log(pacientes && pacientes.length);
  return (
    <div className="md:w-1/2 my-10 lg:w-3/5 md:h-screen overflow-y-auto">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 text-center">
            Comienza a Agregar Pacientes {""}
            <span className="text-indigo-600 font-bold"> y Citas</span>
          </p>
        </>
      )}
    </div>
  );
};

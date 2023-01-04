import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Error } from "./Error";

export const Formulario = ({
  pacientes,
  setPacientes,
  paciente,
  setPaciente,
}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //* validación del Formulario

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay un Campo Vacio al menos");

      setError(true);
      return;
    }
    setError(false);

    //*Objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //*Editando
      console.log("Editando");
      objetoPaciente.id = paciente.id;
      console.log(objetoPaciente);
      console.log(paciente);

      const pacientesActualizados = pacientes.map((pacienteState) => {
        return pacienteState.id === paciente.id
          ? objetoPaciente
          : pacienteState;
      });

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //* Nuevo Registro
      console.log("Nuevo");
      objetoPaciente.id = generarID();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //*Reinicar el FORM
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3 my-10">
      <h2 className="font-black text-3xl text-center">Formulario</h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y {""}
        <span className="text-indigo-500 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >
        {error && <Error mensaje={"Todos los campos son obligatorios"} />}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre De macota"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="propietario"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sistomas"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Describe los Sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Enviar"}
          className="w-full bg-indigo-600 uppercase font-bold text-white
          p-3 hover:bg-indigo-700 cursor-pointer transition-colors
          "
        />
      </form>
    </div>
  );
};

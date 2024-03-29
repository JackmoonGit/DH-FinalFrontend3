import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName.length > 5 && validateEmail(formData.email)) {
      console.log(formData);
      setSuccess(true);
      setMessage(`Gracias ${formData.fullName}, te contactaremos cuando antes vía mail`);
    } else {
      setSuccess(false);
      setMessage("Por favor verifique su información nuevamente");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block mb-2 text-gray-700 dark:text-gray-300">
            Nombre completo:
          </label>
          <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">
            Email:
          </label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600" />
        </div>
        <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-teal-800 dark:hover:bg-teal-600">
          Enviar
        </button>
      </form>
      {message &&
        (success ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-5" role="alert">
            <p className="font-bold">Éxito</p>
            <p>{message}</p>
          </div>
        ) : (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-5" role="alert">
            <p className="font-bold">Error</p>
            <p>{message}</p>
          </div>
        ))}
    </>
  );
};

export default Form;

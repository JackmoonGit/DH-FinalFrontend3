import Form from "../Components/Form";

const Contact = () => {
  return (
    <div className="flex flex-col mx-80 p-10 dark:bg-slate-900 bg-white text-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold">Want to know more?</h2>
      <p className="mb-10">Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;

import { useState } from "react";
// import blob1 from "../assets/blob.png";
import { Mail } from "lucide-react";
import { icons } from "../constants/index";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxs4xZfi8K7nCrMtuGLxGze9x2eNIMB7fcA1--w2gR3h9R034e7DlN0FZ2C9CoR6wLh/exec";
    fetch(scriptURL, { method: "POST", body: new FormData(e.target) })
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        alert("Success!");
      })
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <section
      className="mb-20 md:mx-auto flex flex-wrap-reverse justify-center items-center gap-8"
      id="contact"
    >
      {/* <div className='w-[400px] hover:bg-gradient-to-t bg-gradient-to-b transition-all from-violet-500 via-indigo-600 to-blue-800 rounded-full'>
                <span className='mx-6 my-2 text-xs text-white'>Thank you! </span>
                <img className='hover:skew-y-6 transition-all motion-safe:animate-pulse hover:scale-75' src={blob1} alt="" />
            </div> */}
      <div className="max-w-[600px] lg:w-[550px]">
        <form name="contact-form" className="m-5" onSubmit={handleSubmit}>
          <h2 className="md:text-2xl text-xl mb-5 font-medium">
            Let's Get in Touch!
          </h2>
          <div className="grid md:grid-cols-1 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-b border-indigo-800 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-indigo-800 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              cols="3"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className=" block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-indigo-800 focus:outline-none focus:ring-0 focus:border-violet-600 peer"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-violet-600 peer-focus:dark:text-violet-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-violet-500 via-indigo-600 to-blue-800 py-2 px-3 hover:bg-gradient-to-bl transition-all rounded-lg text-white"
          >
            Send
          </button>

          <div className="mt-8 border-t pt-4 flex flex-col gap-6">
            <p className="text-sm font-extralight">
              Fill out the form above or reach out via email or linkedin
            </p>
            <div className="flex gap-8">
              <p className="flex font-light items-center">
                <Mail size="26px" className="mr-2" /> shulhahrini@gmail.com
              </p>
              <a
                className="hover:scale-110 transition-all"
                href={icons[0]["url"]}
                target="_blank"
              >
                {icons[0]["icon"]}
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

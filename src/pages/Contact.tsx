import { useState } from "react";
import IMailTo from "../interfaces/IMailTo";

function Contact() {
  const [mailTo, setmailTo] = useState<IMailTo>({
    email: "",
    name: "",
    message: "",
  });

  return (
    <div className="flex w-full justify-center min-h-screen bg-light xl:text-start dark:bg-dark [transition:background-color_.3s,color_.3s] ">
      <div className="flex flex-col w-full gap-10 px-5 pt-24 pb-10 xl:max-w-4xl animate-page xl:px-0 xl:ml-80">
        <div className="flex flex-col gap-2">
          <p className="bg-[#EEEEEE] dark:bg-[#242424] w-fit px-5 py-2 dark:text-white font-semibold">
            Contact
          </p>
          <div className="flex flex-col gap-16">
            <p className="text-3xl font-extrabold dark:text-white">
              Get in Touch
            </p>
            <div className="flex flex-col gap-16">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1279527.8201538483!2d85.1857700955106!3d27.648364743802844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1685295569567!5m2!1sen!2snp"
                loading="lazy"
                className="w-full bg-black h-96"
              ></iframe>

              <form
                className="flex flex-col w-full gap-8"
                action={`mailto:${mailTo.email}?subject=Contact From Portfolio&body=${mailTo.message}`}
                method="POST"
              >
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="p-2 bg-transparent border border-gray-400 outline-gray-600 dark:text-white"
                  onChange={(e) =>
                    setmailTo({ ...mailTo, name: e.target.value })
                  }
                  value={mailTo.name}
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="p-2 bg-transparent border border-gray-400 dark:text-white fill-none"
                  onChange={(e) =>
                    setmailTo({ ...mailTo, email: e.target.value })
                  }
                  value={mailTo.email}
                />
                <textarea
                  placeholder="Message"
                  required
                  className="p-2 bg-transparent border border-gray-400 resize-none h-28 dark:text-white"
                  onChange={(e) =>
                    setmailTo({ ...mailTo, message: e.target.value })
                  }
                  value={mailTo.message}
                />
                <input
                  type="submit"
                  value="Send Message"
                  className="px-5 py-3 font-medium text-white transition-all duration-200 ease-linear bg-black cursor-pointer w-fit hover:tracking-wider dark:bg-white dark:text-black"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import { GetServerSideProps, NextPage } from "next";
// import Loading from "../../../components/Loading";
import { Session, SessionObject } from "../../types/session";
import { requireAuthentication } from "../../utils/requireAuthentication";
import { useState } from "react";

const NewTicket: NextPage<SessionObject> = ({ currentSession: { user } }) => {
  const [product, setProduct] = useState("iPhone");
  const [description, setDescription] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDescription("");
  };

  console.log(product, description);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">CREATE NEW TICKET</h1>
      <p>Please fill out the form below</p>
      <div className="w-full max-w-sm">
        <div className="mb-6">
          <label
            className="block text-gray-500 font-bold mb-1 pr-4"
            htmlFor="name"
          >
            Customer Name
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="name"
            type="text"
            value={user.name}
            disabled
          />
        </div>
        <div className=" mb-6">
          <label
            className="block text-gray-500 font-bold mb-1 pr-4"
            htmlFor="email"
          >
            Customer Email
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="product"
            type="text"
            value={user.email}
            disabled
          />
        </div>
      </div>
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className=" mb-6">
          <label
            className="block text-gray-500 font-bold mb-1 pr-4"
            htmlFor="product"
          >
            Product
          </label>
          <div className="inline-block relative w-full">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value={"iPhone"}>iPhone</option>
              <option value={"Macbook Pro"}>Macbook Pro</option>
              <option value={"iMac"}>iMac</option>
              <option value={"iPad"}>iPad</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className=" mb-6">
          <label
            className="block text-gray-500 font-bold mb-1 pr-4"
            htmlFor="description"
          >
            Description of the issue
          </label>
          <textarea
            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 w-full focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return requireAuthentication(context, ({ session }: Session) => {
    return {
      props: {
        currentSession: session,
      },
    };
  });
};

export default NewTicket;

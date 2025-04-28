import { useState } from "react";

const App = () => {
  const [registration, setRegistration] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://680f6bfe67c5abddd1953ea5.mockapi.io/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registration),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log("Success:", data);
      alert("Form successfully sent to the moon! 🚀");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send form. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col bg-[#0A0D17] m-auto max-w-[1092px] h-[630px]">
      <h2 className="font-bold text-[#ffffff] text-[30px] text-center">
        Let's connect constellations
      </h2>
      <p className="m-auto max-w-[415px] text-[#ffffff]">
        Let's align our constellations! Reach out and let the magic of
        collaboration illuminate our skies.
      </p>
      <form onSubmit={handleSubmit} className="m-auto">
        <div className="flex flex-wrap gap-[15px] max-w-[506px]">
          <label className="block font-medium text-[#ffffff] text-sm"></label>
          <input
            type="text"
            placeholder="Last Name"
            className="flex bg-[#ffffff] px-4 py-2 border border-[#9c1c1c] rounded-lg w-full max-w-[206px]"
            value={registration.lastName}
            onChange={(event) =>
              setRegistration({
                ...registration,
                lastName: event.target.value,
              })
            }
            required
          />
          <input
            type="text"
            placeholder="First Name"
            className="flex bg-[#ffffff] px-4 py-2 border border-white200 rounded-lg w-full max-w-[206px]"
            value={registration.firstName}
            onChange={(event) =>
              setRegistration({
                ...registration,
                firstName: event.target.value,
              })
            }
            required
          />
          <label
            htmlFor="email"
            className="block font-medium text-[#ffffff] text-sm"
          ></label>
          <input
            type="email"
            placeholder="Email"
            className="bg-[#ffffff] px-4 py-2 border rounded-lg w-full"
            value={registration.email}
            onChange={(event) =>
              setRegistration({ ...registration, email: event.target.value })
            }
            required
          />
          <label
            htmlFor="phone"
            className="block font-medium text-indigo-100 text-sm"
          ></label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-[#ffffff] px-4 py-2 border-2 rounded-lg w-full"
            value={registration.phone}
            onChange={(event) =>
              setRegistration({ ...registration, phone: event.target.value })
            }
            required
          />
          <label
            htmlFor="message"
            className="block font-medium text-[#ffffff] text-sm"
          ></label>
          <textarea
            placeholder="Message"
            rows="4"
            className="bg-[#ffffff] px-4 py-2 border rounded-lg w-full"
            value={registration.message}
            onChange={(event) =>
              setRegistration({ ...registration, message: event.target.value })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#A604F2] hover:bg-fuchsia-900 m-auto mt-[14px] px-4 py-3 border-2 rounded-lg w-full font-bold text-black cursor-pointer"
        >
          Send it to the moon 🚀
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default App;

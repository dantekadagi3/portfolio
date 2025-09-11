export default function MyForm() {
  return (
    <div className="max-w-md mx-auto bg-[#121212] p-8 rounded-lg shadow-lg">
      <form action="" className="space-y-6">

        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-2 text-sm font-medium text-gray-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="bg-[#1A1A1A] border border-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFB3]"
          />
        </div>
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-[#1A1A1A] border border-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFB3]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-[#1A1A1A] border border-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFB3]"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="bg-[#1A1A1A] border border-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00FFB3]"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#00FFB3] text-black font-semibold py-3 rounded-md hover:bg-[#00e6a3] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

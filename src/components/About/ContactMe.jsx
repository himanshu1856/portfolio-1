function ContactMe() {
    return (
        <>
            <form class="w-full pt-10">
                <div class="md:flex md:items-left mb-6">
                    <div className="w-32">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Full Name
                        </label>
                        <br />
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" id="inline-full-name" type="text" placeholder="Type your full name...." />
                    </div>
                </div>
                <div class="md:flex md:items-left mb-6">
                    <div className="w-32">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-message">
                            Message
                        </label>
                        <br />
                    </div>
                    <div class="md:w-2/3    ">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full h-48 py-2 px-4 text-gray-700 leading-normal focus:outline-none focus:bg-white focus:border-teal-500" id="inline-message" type="text" placeholder="Write your message...." />
                    </div>
                </div>
                <div class="md:ps-32 w-full">
                    <button class="shadow  bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Send
                    </button>
                </div>
            </form>
        </>
    )
}

export default ContactMe
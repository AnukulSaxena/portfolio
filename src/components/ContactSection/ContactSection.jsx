import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactSection() {
    const [state, handleSubmit] = useForm("mleqjdoe");
    if (state.succeeded) {
        for (const form of document.getElementsByTagName('form')) {
            form.reset();
        }
    }
    return (
        <div
            id='contactSection'
            className='py-8 lg:py-16 px-4 lg:px-72 xl:px-96 max-w-full bg-neutral-800 mx-5 mb-5 rounded-md'
        >
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Me</h2>
            <form
                className='space-y-8'
                onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm md:text-lg font-medium text-gray-300"
                    >
                        Email Address
                    </label>
                    <input
                        className="shadow-sm border text-sm md:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-neutral-700 border-neutral-500  text-white "
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm md:text-lg font-medium text-gray-300"
                    >
                        Name
                    </label>
                    <input
                        className="shadow-sm border text-sm md:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-neutral-700 border-neutral-500  text-white "
                        id="name"
                        type="text"
                        name="name"
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-gray-300"
                    >
                        Message
                    </label>
                    <textarea
                        className="shadow-sm border text-sm md:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-neutral-700 border-neutral-500  text-white"
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 md:px-8 md:text-lg rounded  items-center"
                    disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactSection
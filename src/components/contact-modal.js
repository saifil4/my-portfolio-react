import React from 'react';
import ModalBackdrop from './modal-backdrop';
import { IoMdSend, IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

const ContactModal = ({ handleClose }) => {

    const dropIn = {
        hidden: {
            y: '100vh',
            opacity: 0
        },
        visible: {
            y: '0',
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 25,
                stiffness: 300
            }
        },
        exit: {
            y: '-100vh',
            opacity: 0
        }
    }
    return (
        <ModalBackdrop onClick={handleClose}>
            <motion.form
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className='flex flex-col space-y-3 bg-white shadow p-5 rounded'>
                <IoMdClose onClick={handleClose} className='text-3xl left-0 top-0 ml-1 mt-1 cursor-pointer' />
                <h1 className='w-96 font-bold text-4xl mb-2 text-center'>Get in touch</h1>
                <p className='opacity-50 text-lg mb-10 text-center font-medium'>Tell me about your awesome ideas!</p>
                <label></label>
                <input type="text" className='px-5 py-3 w-96 bg-gray-50 border-b-2 outline-none border-gray-300 focus:border-black' placeholder='Your Name' />
                <input type="email" className='px-5 py-3 w-96 bg-gray-50 border-b-2 outline-none border-gray-300 focus:border-black' placeholder='abc@example.com' />
                <textarea rows={5} className='px-5 py-3 w-96 bg-gray-50 border-b-2 outline-none border-gray-300 focus:border-black' placeholder='Your Message'>
                </textarea>
                <button className='w-full inline-flex justify-center text-lg text-white bg-black py-3 rounded items-center'>
                    Send <IoMdSend className='ml-3 text-xl' />
                </button>
            </motion.form>
        </ModalBackdrop>
    );
};

export default ContactModal;

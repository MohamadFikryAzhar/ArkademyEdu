import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <span className="absolute top-0 right-0 p-4 cursor-pointer" onClick={onClose}>&times;</span>
                        {message.includes('Complete') ? (
                            <p className="text-xl text-green-500">{message}</p>
                        ) : (
                            <p className="text-xl text-red-500">{message}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

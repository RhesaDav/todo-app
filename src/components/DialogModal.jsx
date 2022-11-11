import React from "react";
import Modal from "react-modal";
import {GrFormClose} from 'react-icons/gr'

  // Modal.setAppElement('');

export default function DialogModal({ isOpen, onClose, children, title }) {
  return (
<>
      {isOpen ? (
        <div className="modal bg-black/50 fade fixed top-0 left-0 flex justify-center items-center w-full h-full outline-none overflow-x-hidden overflow-y-auto">
          <div className="modal-dialog relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 className="text-xl font-medium leading-normal text-gray-800">
                  {title}
                </h5>
                <button
                  onClick={onClose}
                  className="btn-close box-content p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                >
                  <GrFormClose className="h-7 w-7"/>
                </button>
              </div>
              <div className="modal-body relative p-4">{children}</div>
              {/* <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const DeletePost: React.FC<{ path: string }> = ({ path }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  const handleDelete = () => {
    // Perform the delete operation here
    // You can use the postId to identify the post to be deleted

    // Call the onDelete callback to notify the parent component

    // Close the modal
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} >
        <div className='hover:bg-gray-200 hover:text-red-500 rounded-full inline-block p-1'>
          <Icon icon="material-symbols:delete-outline" className='text-xl' />
        </div>
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">投稿の削除</h2>
            <p className="mb-4">本当にこの投稿を削除しますか？ この操作は取り消せません。</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DeletePost;
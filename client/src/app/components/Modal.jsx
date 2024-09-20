export default function Modal({ close, children, styles, title }) {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50'>
      <div className={`bg-white rounded-lg shadow-lg w-auto p-6 ${styles}`}>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-semibold'>{title}</h2>
          <button
            type='button'
            className='text-3xl w-10 h-10 rounded-full '
            onClick={close}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

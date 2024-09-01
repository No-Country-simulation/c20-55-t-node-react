import Link from 'next/link';

const AddPetButton = () => {
  return (
    <Link className="self-start" href="/users/admin/home/mascotas/formulario">
        <div className="hidden lg:block m-auto">
          <div className="min-w-[22rem] h-[13.5rem] bg-blue-300 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>
    </Link>
  );
};

export default AddPetButton;
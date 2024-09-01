export default function Profile(){
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
          <header className="bg-white shadow-md p-6">
            <div className="flex items-center">
              <img
                src="/path/to/profile-picture.jpg" 
                alt="Profile Picture"
                className="w-24 h-24 rounded-full border-4 border-blue-500"
              />
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-gray-900">Nombre del Administrador</h1>
                <p className="text-lg text-gray-600">Administrador del Refugio</p>
              </div>
            </div>
          </header>
              <main className="p-6">
            <section className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
              <p className="text-gray-700">
                Soy un apasionado por los animales y llevo años dedicando mi vida a cuidar y encontrar hogares
                para ellos. Mi compromiso con el bienestar animal me ha llevado a administrar este refugio, donde
                trabajamos incansablemente para ofrecerles una vida mejor a nuestras mascotas.
              </p>
            </section>
    
            <section className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Información de Contacto</h2>
              <ul className="list-disc pl-5 text-gray-700">
                <li><strong>Email:</strong> admin@refugio.com</li>
                <li><strong>Teléfono:</strong> +123 456 7890</li>
                <li><strong>Ubicación:</strong> Calle Ficticia 123, Ciudad, País</li>
              </ul>
            </section>
          </main>
        </div>
      );
};
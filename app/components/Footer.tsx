import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold flex items-center">
                <span>Crust</span>
                <Image 
                  src="/logo.svg" 
                  alt="&" 
                  width={20} 
                  height={20} 
                  className="mx-1 w-5 h-5"
                />
                <span>Flame</span>
              </h3>
            </div>
            <p className="text-gray-400">Authentic wood-fired pizza</p>
          </div>
          
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="#gallery" className="hover:text-orange-500 transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://instagram.com/crustandflame" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44-.644-1.44-1.44-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="flex items-center justify-center">
            &copy; 2024 Crust
            <Image 
              src="/logo.svg" 
              alt="&" 
              width={16} 
              height={16} 
              className="mx-1 w-4 h-4 inline-block"
            />
            Flame. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
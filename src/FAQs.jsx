import React from 'react';

const Gallery = () => {
  const scrollLeft = (rowId) => {
    document.getElementById(rowId).scrollBy({ left: -250, behavior: 'smooth' });
  };

  const scrollRight = (rowId) => {
    document.getElementById(rowId).scrollBy({ left: 250, behavior: 'smooth' });
  };

  const openModal = (src) => {
    setModalImage(src);
    setModalVisible(true);
  };

  const closeModal = (event) => {
    if (event.target === modalRef.current) {
      setModalVisible(false);
    }
  };

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalImage, setModalImage] = React.useState('');
  const modalRef = React.useRef(null);

  return (
    <div className="font-sans bg-gray-100">
      <header>
        <nav className="flex justify-between items-center bg-white px-12 py-4 shadow-md">
          <div className="text-xl font-bold w-20 h-20">
            <img src="Screenshot 2025-03-03 010733.png" alt="Logo" />
          </div>
          <ul className="flex gap-24 text-lg">
            <li><a href="#" className="text-gray-800 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-600">Secretariat</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-600">Partners</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-600">Gallery</a></li>
            <li><a href="#" className="text-gray-800 hover:text-blue-600">FAQ</a></li>
          </ul>
          <a href="#" className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Register</a>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center py-10 bg-gray-200">
        {/* Row 1 */}
        <div className="w-4/5 relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full z-10" onClick={() => scrollLeft('row1')}>&#9665;</button>
          <div id="row1" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-x-scroll scrollbar-hide">
            {[
              "pexels-eugenia-sol-1769194548-30922278.jpg", // Landscape
              "pexels-amar-30893319.jpg", // Portrait
              "pexels-elaine-bispo-2149845330-30819822.jpg", // Landscape
              "pexels-gera-cejas-3616330-27587343.jpg", // Portrait
              "pexels-elaine-bispo-2149845330-30819822.jpg", // Landscape
              "pexels-elaine-bispo-2149845330-30819822.jpg", // Landscape
              "pexels-elaine-bispo-2149845330-30819822.jpg", // Landscape
              "pexels-eugenia-sol-1769194548-30922278.jpg", // Landscape
              "pexels-elaine-bispo-2149845330-30819822.jpg", // Landscape
              "pexels-elaine-bispo-2149845330-30819822.jpg", // Landscape
              "pexels-elaine-bispo-2149845330-30819822.jpg", // Landscape
            ].map((src, index) => (
              <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={src}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(src)}
                  alt={`Gallery Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full z-10" onClick={() => scrollRight('row1')}>&#9655;</button>
        </div>

        {/* Row 2 */}
        <div className="w-4/5 relative mt-8">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full z-10" onClick={() => scrollLeft('row2')}>&#9665;</button>
          <div id="row2" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 overflow-x-scroll scrollbar-hide">
            {[
              "pexels-elaine-bispo-2149845330-30819822.jpg", // Landscape
              "pexels-elaine-bispo-2149845330-30819822.jpg", // Landscape
              "pexels-gizem-erol-2149449247-30704111.jpg", // Portrait
              "pexels-gizem-erol-2149449247-30704111.jpg", // Portrait
              "pexels-gizem-erol-2149449247-30704111.jpg", // Portrait
            ].map((src, index) => (
              <div key={index} className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={src}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(src)}
                  alt={`Gallery Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full z-10" onClick={() => scrollRight('row2')}>&#9655;</button>
        </div>
      </main>

      {/* Modal */}
      {modalVisible && (
        <div id="imageModal" className="modal flex" onClick={closeModal} ref={modalRef}>
          <img id="modalImage" src={modalImage} alt="Preview Image" className="max-w-[90%] max-h-[90%] rounded-lg object-contain" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
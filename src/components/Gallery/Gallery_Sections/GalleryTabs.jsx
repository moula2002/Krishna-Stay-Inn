import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaSearch, 
  FaExpand, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaHeart,
  FaDownload,
  FaShare,
  FaImage
} from "react-icons/fa";
import { TbZoomIn, TbZoomOut } from "react-icons/tb";

// Try dynamic imports or check if images exist
const importImages = async () => {
  try {
    const images = await Promise.all([
      import("../../../assets/gallery images/1.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/2.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/3.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/4.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/5.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/6.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/7.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/8.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/9.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/10.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/11.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/12.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/13.webp").catch(() => ({ default: null })),
      import("../../../assets/gallery images/14.webp").catch(() => ({ default: null })),
    ]);
    return images.map((img, index) => img.default);
  } catch (error) {
    console.error("Error loading images:", error);
    return Array(14).fill(null);
  }
};

// Fallback images from Unsplash if local images don't work
const fallbackImages = [
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1576675784201-0e142b4232a5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
];

const GalleryTabs = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");
  const [likedImages, setLikedImages] = useState({});
  const [hoveredImage, setHoveredImage] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const importedImages = await importImages();
        
        // Check which images loaded successfully
        const loadedImages = importedImages.map((img, index) => {
          if (img) {
            return img;
          } else {
            console.warn(`Local image ${index + 1}.webp not found, using fallback`);
            return fallbackImages[index];
          }
        });
        
        setImageUrls(loadedImages);
      } catch (error) {
        console.error("Failed to load images, using fallbacks:", error);
        setImageUrls(fallbackImages);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const galleryImages = [
    { id: 0, category: "rooms", title: "Luxury Suite", description: "Spacious room with city view" },
    { id: 1, category: "rooms", title: "Premium Room", description: "Modern interior design" },
    { id: 2, category: "facilities", title: "Swimming Pool", description: "Temperature-controlled pool" },
    { id: 3, category: "dining", title: "Restaurant", description: "Fine dining experience" },
    { id: 4, category: "facilities", title: "Gym Area", description: "Fully equipped fitness center" },
    { id: 5, category: "rooms", title: "Deluxe Room", description: "Comfortable king-size bed" },
    { id: 6, category: "lobby", title: "Reception Area", description: "Elegant welcome space" },
    { id: 7, category: "facilities", title: "Spa", description: "Relaxation and wellness" },
    { id: 8, category: "dining", title: "Bar Lounge", description: "Premium cocktails" },
    { id: 9, category: "facilities", title: "Conference Room", description: "Business meetings" },
    { id: 10, category: "rooms", title: "Executive Suite", description: "Work and relax space" },
    { id: 11, category: "lobby", title: "Entrance", description: "Grand entrance design" },
    { id: 12, category: "facilities", title: "Garden", description: "Beautiful outdoor space" },
    { id: 13, category: "dining", title: "Breakfast Area", description: "Morning delight" },
  ].map((item, index) => ({
    ...item,
    img: imageUrls[index] || fallbackImages[index]
  }));

  const categories = [
    { id: "all", label: "All Photos", count: galleryImages.length },
    { id: "rooms", label: "Rooms", count: galleryImages.filter(img => img.category === "rooms").length },
    { id: "facilities", label: "Facilities", count: galleryImages.filter(img => img.category === "facilities").length },
    { id: "dining", label: "Dining", count: galleryImages.filter(img => img.category === "dining").length },
    { id: "lobby", label: "Lobby", count: galleryImages.filter(img => img.category === "lobby").length },
  ];

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const handleOpenLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => {
      setSelectedImage(null);
      setZoomLevel(1);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(
        (item) => item.id === selectedImage.id
      );
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
      setZoomLevel(1);
    }
  };

  const handlePrev = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(
        (item) => item.id === selectedImage.id
      );
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex]);
      setZoomLevel(1);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 1));
  };

  const handleLike = (id, e) => {
    e?.stopPropagation();
    setLikedImages(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleDownload = (imgUrl, title, e) => {
    e?.stopPropagation();
    try {
      const link = document.createElement('a');
      link.href = imgUrl;
      link.download = `shri-krishna-stay-${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Open in new tab as fallback
      window.open(imgUrl, '_blank');
    }
  };

  const handleShare = (e) => {
    e?.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: 'Shri Krishna Stay Gallery',
        text: 'Check out this beautiful photo from Shri Krishna Stay',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      switch(e.key) {
        case 'Escape':
          handleCloseLightbox();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
        case '+':
        case '=':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedImage]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#FEA116] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Category Filters */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map(category => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(category.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeFilter === category.id
                ? 'bg-gradient-to-r from-[#FEA116] to-yellow-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
            <span className="text-xs px-2 py-1 rounded-full bg-white/30">
              {category.count}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: item.id * 0.05 }}
            whileHover={{ y: -5 }}
            className="relative group overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[250px]"
            onMouseEnter={() => setHoveredImage(item.id)}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => handleOpenLightbox(item)}
          >
            {/* Image Container */}
            <div className="relative w-full h-64">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={() => handleImageError(item.id)}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <FaImage className="text-4xl text-gray-400" />
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleLike(item.id, e)}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <FaHeart className={`text-lg ${likedImages[item.id] ? 'text-red-500 fill-red-500' : 'text-gray-700'}`} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => handleDownload(item.img, item.title, e)}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <FaDownload className="text-lg text-gray-700" />
                </motion.button>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-4 left-4">
                <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full">
                  <FaExpand className="text-white text-sm" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-3 py-1 bg-[#FEA116] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                  {item.category}
                </span>
              </div>
            </div>
            
            {/* Image Title */}
            <div className="p-4">
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FEA116] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading images...</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredImages.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">📷</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">No images found</h3>
          <p className="text-gray-500">Try selecting a different category</p>
        </motion.div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4"
            onClick={handleCloseLightbox}
          >
            {/* Lightbox Content */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleCloseLightbox}
                className="absolute top-4 right-4 z-10 p-3 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <FaTimes className="text-xl" />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <FaChevronLeft className="text-xl" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <FaChevronRight className="text-xl" />
              </motion.button>

              {/* Image Container */}
              <div className="relative w-full h-[70vh] flex items-center justify-center">
                {selectedImage.img ? (
                  <motion.img
                    src={selectedImage.img}
                    alt={selectedImage.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    style={{ transform: `scale(${zoomLevel})` }}
                    transition={{ duration: 0.2 }}
                    onError={() => handleImageError(selectedImage.id)}
                  />
                ) : (
                  <div className="text-white text-center">
                    <FaImage className="text-6xl mx-auto mb-4 text-gray-400" />
                    <p>Image not available</p>
                  </div>
                )}
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full p-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 1}
                  className={`p-2 rounded-full ${zoomLevel <= 1 ? 'opacity-50' : 'hover:bg-white/20'}`}
                >
                  <TbZoomOut className="text-white text-xl" />
                </motion.button>
                <span className="text-white text-sm px-2">{(zoomLevel * 100).toFixed(0)}%</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                  className={`p-2 rounded-full ${zoomLevel >= 3 ? 'opacity-50' : 'hover:bg-white/20'}`}
                >
                  <TbZoomIn className="text-white text-xl" />
                </motion.button>
              </div>

              {/* Image Info & Actions */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-1">{selectedImage.title}</h3>
                    <p className="text-gray-300">{selectedImage.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="px-3 py-1 bg-[#FEA116] text-white text-xs font-semibold rounded-full uppercase">
                        {selectedImage.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        Image {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleLike(selectedImage.id, e)}
                      className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors"
                    >
                      <FaHeart className={`text-xl ${likedImages[selectedImage.id] ? 'text-red-500 fill-red-500' : ''}`} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => handleDownload(selectedImage.img, selectedImage.title, e)}
                      className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors"
                    >
                      <FaDownload className="text-xl" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleShare}
                      className="p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors"
                    >
                      <FaShare className="text-xl" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryTabs;
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import MusicButton from "../components/MusicButton";
import FloatingHearts from "../components/FloatingHearts";
import LoadingScreen from "../components/LoadingScreen";
import MessageModal from "../components/MessageModal";
import Confetti from "../components/Confetti";
import CustomCursor from "../components/CustomCursor";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Membuka loading terlebih dahulu
  const openModal = () => {
    setIsLoading(true);
  };

  // Setelah loading selesai
  const finishLoading = () => {
    setIsLoading(false);
    setIsModalOpen(true);
  };

  // Tombol X
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const finishStory = () => {
    setIsModalOpen(false);

    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);

      // Kembali ke bagian hero
      document.getElementById("hero")?.scrollIntoView({
        behavior: "smooth",
      });

    }, 3000);
  };

  // Hilangkan scroll ketika loading / modal tampil
  useEffect(() => {
    if (isLoading || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading, isModalOpen]);

  return (
    <>
      <CustomCursor />

      <FloatingHearts />

      <Navbar />

      <Hero onOpen={openModal} />

      <Footer />

      <MusicButton />

      {isLoading && (
        <LoadingScreen
          onFinish={finishLoading}
        />
      )}

      <MessageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onFinish={finishStory}
      />

      <Confetti show={showConfetti} />
    </>
  );
}

export default Home;
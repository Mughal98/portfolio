"use client";

import React, { createContext, useContext, useState } from "react";
import MediaModal from "../components/MediaModal";

const ModalContext = createContext();

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [modalMedia, setModalMedia] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (media, index) => {
    setModalMedia(media);
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalMedia(null);
    setModalIndex(0);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalMedia && (
        <MediaModal
          media={modalMedia}
          index={modalIndex}
          onClose={closeModal}
          onNavigate={setModalIndex}
        />
      )}
    </ModalContext.Provider>
  );
}

import Modal from 'react-modal'

interface ContactModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function ContactModal({ isOpen, onRequestClose }: ContactModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal de exemplo"
    >
      <h2>Olá</h2>
      <button onClick={onRequestClose}>Fechar</button>
      <div>Eu sou uma modal</div>
    </Modal>
  )
}

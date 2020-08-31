import React from 'react';
import Modal from 'react-modal';
import s from './GifModal.module.css';

const GifModal = ({ modalIsOpen, onRequestClose, selectedGif }) => {
	console.log(selectedGif);
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={() => onRequestClose()}
			ariaHideApp={false}
		>
			<div className={s.container}>
				<img
					className={s.img}
					src={selectedGif.images.original.url}
					alt={selectedGif.images.id}
				/>
				<p>
					<strong>Source:</strong>{' '}
					<a href={selectedGif.source}>{selectedGif.source}</a>
				</p>
				<p>
					<strong>Rating:</strong> {selectedGif.rating}
				</p>

				<button onClick={() => onRequestClose()}>close</button>
			</div>
		</Modal>
	);
};
export default GifModal;

import React from 'react';
import GifItem from '../GifItem/GifItem';
import s from './GifList.module.css';

const GifList = ({ gifs, onGifSelect }) => (
	<ul className={s.container}>
		{gifs.map((image) => (
			<GifItem key={image.id} gif={image} onGifSelect={onGifSelect} />
		))}
	</ul>
);

export default GifList;

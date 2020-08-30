import React from 'react';
import s from './GifItem.module.css';

const GifItem = ({ gif, onGifSelect }) => {
	return (
		<li className={s.item} onClick={() => onGifSelect(gif)}>
			<img src={gif.images.downsized.url} alt={gif.images.id} />
		</li>
	);
};

export default GifItem;

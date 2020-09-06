import React from 'react';
import GifItem from '../GifItem/GifItem';
import s from './GifList.module.css';

const GifList = ({
	gifs,
	onGifSelect,
	onFavoriteSelect,
	onFavoriteDeselect,
	isAuthenticated,
	isFavorite,
}) =>
	console.log('GifList log(gifs): ', gifs) || (
		<ul className={s.container}>
			{gifs.map((image) => (
				<GifItem
					key={image.id}
					gif={image}
					onGifSelect={onGifSelect}
					onFavoriteSelect={onFavoriteSelect}
					onFavoriteDeselect={onFavoriteDeselect}
					isAuthenticated={isAuthenticated}
					isFavorite={isFavorite}
				/>
			))}
		</ul>
	);

export default GifList;

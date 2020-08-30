import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import GifList from './GifList/GifList';
import GifModal from './GifModal/GifModal';
import * as API from '../services/gifs-api';

import s from './App.module.css';

export default class App extends Component {
	state = {
		gifs: [],
		selectedGif: null,
		modalIsOpen: false,
	};

	openModal = (gif) => {
		this.setState({
			modalIsOpen: true,
			selectedGif: gif,
		});
	};

	closeModal = () => {
		this.setState({
			modalIsOpen: false,
			selectedGif: null,
		});
	};

	handleTermChange = (term) => {
		API.getAllGifs(term).then((gifs) => {
			console.log(gifs.data);
			this.setState({
				gifs: gifs.data,
			});
		});
	};

	render() {
		const { gifs, modalIsOpen, selectedGif } = this.state;
		return (
			<div className={s.app}>
				<SearchBar onTermChange={this.handleTermChange} />
				<GifList
					gifs={gifs}
					onGifSelect={(selectedGif) => this.openModal(selectedGif)}
				/>
				{selectedGif !== null && (
					<GifModal
						modalIsOpen={modalIsOpen}
						selectedGif={selectedGif}
						onRequestClose={() => this.closeModal()}
					/>
				)}
			</div>
		);
	}
}

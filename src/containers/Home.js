import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/SearchBar/SearchBar';
import GifList from '../components/GifList/GifList';
import GifModal from '../components/GifModal/GifModal';

import s from './Home.module.css';

class Home extends Component {
	render() {
		const {
			actions: { requestGifs, openModal, closeModal },
			gifs,
			modalIsOpen,
			selectedGif,
		} = this.props;
		return (
			<div className={s.container}>
				<SearchBar onTermChange={requestGifs} />
				<GifList
					gifs={gifs}
					onGifSelect={(selectedGif) => openModal({ selectedGif })}
				/>
				{selectedGif !== null && (
					<GifModal
						modalIsOpen={modalIsOpen}
						selectedGif={selectedGif}
						onRequestClose={() => closeModal()}
					/>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {
		gifs: { data },
		modal: { modalIsOpen, selectedGif },
	} = state;
	return {
		gifs: data,
		modalIsOpen: modalIsOpen,
		selectedGif: selectedGif,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

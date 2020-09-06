import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../store/actions';
import SearchBar from '../components/SearchBar/SearchBar';
import GifList from '../components/GifList/GifList';
import GifModal from '../components/GifModal/GifModal';

import s from './Home.module.css';

class Home extends Component {
	render() {
		const {
			actions: {
				requestGifs,
				openModal,
				closeModal,
				favoriteGif,
				unfavoriteGif,
			},
			gifs,
			modalIsOpen,
			selectedGif,
			authenticated,
		} = this.props;
		return (
			<div className={s.container}>
				<SearchBar onTermChange={requestGifs} />
				<GifList
					gifs={gifs}
					onGifSelect={(selectedGif) => openModal({ selectedGif })}
					onFavoriteSelect={(selectedGif) => favoriteGif({ selectedGif })}
					onFavoriteDeselect={(selectedGif) => unfavoriteGif({ selectedGif })}
					isAuthenticated={authenticated}
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
		auth: { authenticated },
		gifs: { data },
		modal: { modalIsOpen, selectedGif },
	} = state;
	return {
		authenticated: authenticated,
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

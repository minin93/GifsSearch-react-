import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../store/actions';
import GifList from '../components/GifList/GifList';
import GifModal from '../components/GifModal/GifModal';

class Favorites extends Component {
	componentWillMount() {
		this.props.actions.fetchFavoritedGifs();
	}

	render() {
		const {
			actions: { openModal, favoriteGif, unfavoriteGif, closeModal },
			gifs,
			selectedGif,
			authenticated,
			modalIsOpen,
		} = this.props;
		return (
			<>
				<GifList
					gifs={gifs}
					onGifSelect={(selectedGif) => openModal({ selectedGif })}
					onFavoriteSelect={(selectedGif) => favoriteGif({ selectedGif })}
					onFavoriteDeselect={(selectedGif) => unfavoriteGif({ selectedGif })}
					isAuthenticated={authenticated}
					isFavorite={true}
				/>
				{selectedGif !== null && (
					<GifModal
						modalIsOpen={modalIsOpen}
						selectedGif={selectedGif}
						onRequestClose={() => closeModal()}
					/>
				)}
			</>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authenticated,
		gifs: state.gifs.favorites,
		modalIsOpen: state.modal.modalIsOpen,
		selectedGif: state.modal.selectedGif,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

import React, { Component } from 'react';
import s from './SearchBar.module.css';

export default class SearchBar extends Component {
	onInputChange(term) {
		this.props.onTermChange(term);
	}

	render() {
		return (
			<div>
				<input
					className={s.search}
					type="search"
					onChange={(e) => this.onInputChange(e.target.value)}
					placeholder="Search Gif"
				/>
			</div>
		);
	}
}

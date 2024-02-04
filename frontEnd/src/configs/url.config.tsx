'use client'

export const URL = {
	discoverMusic: '/discover-music',
	myPlaylist: '/my-playlist',
	myMusic: '/my-music',
	singer: '/singer',
	search: '/search',
	settings: '/settings',
	statistic: '/statistic',
}

class settingsURLs {
	private root = '/settings'

	auth = `${this.root}/auth`
	// ...
}

export const SettingsURL = new settingsURLs()

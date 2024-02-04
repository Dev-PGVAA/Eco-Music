import { URL } from '@/configs/url.config'
import { ISidebar } from '@/interfaces/music.interface'
import { Cog, Heart, ListMusic, Mic2, Music4, Search } from 'lucide-react'

export const dataSidebar: ISidebar[] = [
	{
		title: 'Recommended',
		links: [
			{
				title: 'Discover Music',
				link: URL.discoverMusic,
				icon: Music4, //'music-4'
			},
			{
				title: 'Singer',
				link: URL.singer,
				icon: Mic2, //'mic-2'
			},
		],
	},

	{
		title: 'Favorite',
		links: [
			{
				title: 'My Music',
				link: URL.myMusic,
				icon: Heart, //'heart'
			},
			{
				title: 'My playlist',
				link: URL.myPlaylist,
				icon: ListMusic, //'list-music'
			},
		],
	},

	{
		title: 'Search',
		links: [
			{
				title: 'Search',
				link: URL.search,
				icon: Search, //'search'
			},
		],
	},
	{
		title: 'Settings',
		links: [
			{
				title: 'Settings',
				link: URL.settings,
				icon: Cog, //'cog'
			},
		],
	},
]

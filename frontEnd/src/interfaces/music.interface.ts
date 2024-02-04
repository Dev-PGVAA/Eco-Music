// import { TypeIconName } from '@/components/ui/Icon'

interface ISidebarLinks {
	title: string
	link: string
	icon: any //TypeIconName
}

export interface ISidebar {
	title: string
	links: ISidebarLinks[]
}

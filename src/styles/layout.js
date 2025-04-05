import { common } from './common';

export const layoutStyles = {
    topbar: {
        container: `w-full h-[50px] ${common.flex.between} ${common.border.bottom} bg-black text-white`,
        titleContainer: `w-full ${common.flex.between} gap-4 hidden xl:flex`,
        title: `${common.text.title} ${common.spacing.content}`,
        link: `w-[110px] h-full ${common.spacing.section} text-center ${common.border.left} cursor-pointer ${common.interactive.hover} hidden xl:flex justify-center items-center`,
        button: `cursor-pointer ${common.border.light} px-3 py-1 rounded hover:border-secondary transition-colors`
    },

    tabs: {
        container: `${common.flex.center} bg-black text-white ${common.border.bottom} `,
        wrapper: "w-full flex justify-between",
        content: "w-full flex",
        tab: {
            base: `px-7 py-3 font-medium transition-colors ${common.border.right}`,
            active: "text-white",
            inactive: "text-primaryDeactive hover:text-white",
            disabled: "text-primaryDeactive hover:text-white"
        },
        more: `w-[110px] text-center ${common.border.left} ${common.spacing.section} font-medium ${common.interactive.hover}`
    },

    sidebar: {
        container: `w-52 bg-black text-white h-screen ${common.border.right}`,
        content: "flex h-[calc(100vh-50px)]",
        header: {
            container: `h-[50px] ${common.flex.between} ${common.spacing.section} ${common.text.title} ${common.border.bottom} ${common.border.right}`,
            logo: "w-[30px] h-[30px]",
            title: "w-full pl-8"
        },
        account: {
            section: `w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] xl:h-[calc(100vh-50px)] ${common.flex.column} justify-between items-center ${common.border.right}`,
            container: `w-full ${common.spacing.section} ${common.border.bottom}`,
            avatar: "w-full h-full rounded-full",
            status: "absolute bottom-0 right-0 w-2 h-2 bg-success rounded-full",
            addButton: `w-full ${common.flex.center} justify-center ${common.spacing.section} ${common.border.top} ${common.interactive.hover}`,
            addIcon: "w-5 h-5 text-secondary"
        },
        nav: {
            container: `flex-1 pt-4 ${common.border.right}`,
            list: "w-full flex xl:flex-col xl:gap-[30px] xl:pl-6",
            item: {
                base: `${common.text.body} transition-all duration-300`,
                active: "text-secondary font-medium",
                inactive: "text-primaryDeactive hover:text-secondary"
            }
        }
    }
}; 
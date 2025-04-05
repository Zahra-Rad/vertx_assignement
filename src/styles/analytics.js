import { common } from './common';

export const analyticsStyles = {
    container: "p-4 xl:p-14 overflow-x-hidden",
    section: {
        primary: "bg-primaryLight",
        secondary: "flex flex-col xl:flex-row xl:gap-6",
        third: "flex flex-col xl:flex-row gap-6 w-full bg-primary xl:mb-6 mt-4 xl:mt-10 mr-0 xl:mr-6 rounded-xl px-4 xl:px-6 py-4 border border-borderLight",
        title: "text-[28px] font-extrabold hidden xl:block"
    },
    header: {
        container: `${common.flex.column} w-full xl:w-2/3 gap-2 bg-primary xl:mb-6 mt-6 xl:mt-10 xl:mr-6 rounded-xl px-4 xl:px-6 py-4 border border-borderLight`,
        controls: "flex items-center gap-2 xl:gap-4",
        selectContainer: "relative bg-primaryLight rounded-full border border-borderLight",
        select: `w-[100px] xl:w-[150px] appearance-none bg-transparent w-full py-2 pl-4 pr-10 cursor-pointer
            text-white outline-none rounded-xl
            focus:rounded-b-none
            [&:not(:focus)]:rounded-xl
            [&>option]:bg-[#111]
            [&>option]:py-2
            [&>option]:px-4
            [&>option]:text-gray-400
            [&>option:hover]:bg-[#222]
            [&>option:hover]:text-white`,
        selectIcon: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none border-[5px] border-transparent border-t-white mt-[3px] group-focus-within:rotate-180 group-focus-within:-mt-1 transition-transform",
        addButton: "bg-blue-600 px-4 py-1 rounded"
    },
    stats: {
        sidebar: "w-full xl:w-1/3 mt-4 mr-0 xl:mr-6 px-4 xl:px-6 py-2 border border-borderLight bg-primary rounded-xl",
        insights: "w-full xl:w-1/3 mt-4 mr-0 xl:mr-6 xl:my-6 xl:mt-10 px-4 xl:px-6 py-2 border border-borderLight bg-primary rounded-xl",
        imageContainer: "w-full xl:w-2/3 relative",
        value: {
            container: "mb-4 flex items-center gap-4",
            number: "text-2xl xl:text-4xl font-bold",
            change: "text-primaryDeactive flex flex-col text-xs xl:text-base"
        }
    },
    insights: {
        header: `${common.flex.between} gap-6`,
        title: "text-2xl xl:text-[32px] mb-4",
        container: "xl:space-y-6 py-2 xl:py-6 flex justify-between xl:flex-col gap-2",
        item: {
            header: `${common.flex.between}`,
            value: "text-[32px] font-bold",
            subtext: "text-primaryDeactive text-[12px] flex flex-col ml-4"
        },
        details: {
            container: "flex items-center gap-2",
            change: "text-success"
        },
        footer: "flex justify-end"
    },
    chart: {
        container: "h-[200px]"
    },
    demographics: {
        title: "text-2xl xl:text-[32px] xl:mb-6",
        sidebar: "w-full xl:w-1/3 mt-4 mr-0 xl:mr-6",
        list: "space-y-4 flex flex-col gap-2",
        item: {
            container: `w-full ${common.flex.between} gap-2`,
            country: "flex items-center gap-2",
            flag: "w-[32px] xl:w-[40px]",
            progress: {
                container: "w-full flex flex-col items-center",
                header: "w-full flex items-center justify-between gap-2 text-sm xl:text-base",
                bar: {
                    base: "w-full h-2 bg-[#222] rounded-full overflow-hidden",
                    fill: "h-full rounded-full"
                }
            }
        }
    },
    viewMore: {
        container: "flex justify-center mt-4",
        button: "w-full mt-3 text-sm text-secondary flex items-center justify-end border-t border-borderLight pt-4",
        icon: "ml-4 flex items-center justify-center py-1"
    }
}; 
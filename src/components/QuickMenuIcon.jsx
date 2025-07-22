function QuickMenuIcon({bgColor, label}) {
    
    return (
        <div className="flex flex-col items-center text-center px-1 py-1 rounded-lg mx-2 my-5 hover:bg-gray-200 hover:scale-125 hover:transition">
            <div className={`flex items-center justify-center rounded-lg w-20 h-20 ${bgColor} `}>
                ICON
            </div>
            <div className=" flex mt-2 text-gray-900">
                {label}
            </div>
        </div>

    )
}

export default QuickMenuIcon;
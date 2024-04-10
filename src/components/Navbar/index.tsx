import {
	ChevronDown,
	NotificationsOutline,
	PersonCircle,
	SearchOutline,
	SettingsOutline,
	ShareSocialOutline,
} from "react-ionicons";

const Navbar = () => {
	return (
		<div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
			<div className="flex items-center gap-3 cursor-pointer">
				<PersonCircle
					color="#fb923c"
					width={"28px"}
					height={"28px"}
				/>
				<span className="text-sm font-semibold text-orange-400 md:text-lg whitespace-nowrap">
					Board Name
				</span>
				<ChevronDown
					color="#fb923c"
					width={"16px"}
					height={"16px"}
				/>
			</div>
			<div className="md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2">
				<SearchOutline color={"#999"} />
				<input
					type="text"
					placeholder="Search"
					className="w-full bg-gray-100 outline-none text-[15px]"
				/>
			</div>
			<div className="items-center hidden gap-4 md:flex">
				<div className="grid p-2 bg-gray-100 rounded-full cursor-pointer place-items-center">
					<ShareSocialOutline color={"#444"} />
				</div>
				<div className="grid p-2 bg-gray-100 rounded-full cursor-pointer place-items-center">
					<SettingsOutline color={"#444"} />
				</div>
				<div className="grid p-2 bg-gray-100 rounded-full cursor-pointer place-items-center">
					<NotificationsOutline color={"#444"} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
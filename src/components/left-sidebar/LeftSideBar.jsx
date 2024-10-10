import BrandLogo from "./BrandLogo";
import ListNavigation from "./ListNavigation";
import BottomLinks from "./BottomLinks";

const LeftSideBar = () => {
    return (
        <div className="hidden md:block border-r-2 px-2 py-6">
            <BrandLogo />
            <ListNavigation />
            <BottomLinks />
        </div>
    );
};

export default LeftSideBar;

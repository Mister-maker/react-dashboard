import { SiTeamcity } from "react-icons/si";

const BrandLogo = () => {
    return (
        <div className="flex px-3 items-center justify-center gap-2 h-8">
            <SiTeamcity className="text-3xl" />{" "}
            <h1 className="text-2xl font-bold">Tracker</h1>
        </div>
    );
};

export default BrandLogo;

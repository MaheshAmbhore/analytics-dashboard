import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import downloadIcon from "../images/download.svg"

const Header = ()=>{
    return(
        <div className="w-3/4 mt-6">
            <header className="flex justify-between">
                <Typography 
                    className="bg-white w-16 h-6"
                    placeholder={null} 
                    onPointerEnterCapture={null} 
                    onPointerLeaveCapture={null}>
                        Reports
                </Typography>
                <Button
                    variant="text"
                    placeholder={null}
                    onPointerEnterCapture={null} 
                    onPointerLeaveCapture={null}>
                    <Image src={downloadIcon} alt="download"/>
                </Button>
            </header>
        </div>
    )
}
export default Header;
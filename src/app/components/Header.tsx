import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import downloadIcon from "../images/download-icon.png"

const Header = ()=>{
    return(
        <div className="mt-3">
            <header className="flex justify-between">
                <Typography 
                    className="bg-white w-16 h-6"
                    variant="h6"
                    placeholder={null} 
                    onPointerEnterCapture={null} 
                    onPointerLeaveCapture={null}>
                        Reports
                </Typography>
                <Button
                    className="inline-flex mb-3"
                    variant="text"
                    placeholder={null}
                    onPointerEnterCapture={null} 
                    onPointerLeaveCapture={null}>
                    <Image src={downloadIcon} alt="download" className="w-4 m-auto mr-1"/>
                    Download
                </Button>
            </header>
        </div>
    )
}
export default Header;
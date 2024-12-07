/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import downloadIcon from "../images/download-icon.png"
import { useEffect, useState } from "react";

const Header = () => {
    const [data, setData] = useState<any>('null')
    useEffect(() => {
        fetch("/task-data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const apiValue = data?.api_secret;

    const downloadImage = async () => {
        const response = await fetch("https://testd5-img.azurewebsites.net/api/imgdownload", {
            method: "POST",
            body: JSON.stringify({ api: apiValue }),
        })
            .then((res) => res.json())
        console.log(response);
        downloadBase64File('data:image/jpeg;base64,' + response.base64_string, response.filename)

    }
    function downloadBase64File(base64: string, fileName: string) {
        const binaryString = atob(base64.split(',')[1]);
        const byteNumbers = new Uint8Array(binaryString.length);

        for (let i = 0; i < binaryString.length; i++) {
            byteNumbers[i] = binaryString.charCodeAt(i);
        }

        const blob = new Blob([byteNumbers], { type: 'application/octet-stream' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
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
                    onClick={downloadImage}
                    placeholder={null}
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}>
                    <Image src={downloadIcon} alt="download" className="w-4 m-auto mr-1" />
                    Download
                </Button>
            </header>
        </div>
    )
}
export default Header;
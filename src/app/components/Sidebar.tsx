import { Card, CardFooter, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react"
import Image from "next/image";
import teslaIcon from "../images/TESLA.svg";
import reportsIcon from "../images/reports-icon.png";
import libraryIcon from "../images/library-icon.png";
import peopleIcon from "../images/people-icon.png";
import activiesIcon from "../images/activities-icon.png";
import getStartedIcon from "../images/get-started.png";
import settingsIcon from "../images/settings-icon.png";

const Sidebar = () => {

    return(
        <>
            <Card
                className="h-[calc(100vh)] w-full max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
            >
                <div>
                    <Image src={teslaIcon} alt="tesla-icon" className="ml-4 mt-5"/>
                </div>
                <List
                    className="mt-6"
                    placeholder={null}
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}>
                    <ListItem
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}>
                            <ListItemPrefix
                                placeholder={null}
                                onPointerEnterCapture={null}
                                onPointerLeaveCapture={null}>
                                <Image src={reportsIcon} alt="reports_icon" className="w-5"/>
                            </ListItemPrefix>
                            Reports
                    </ListItem>
                    <ListItem
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}>
                            <ListItemPrefix
                                placeholder={null}
                                onPointerEnterCapture={null}
                                onPointerLeaveCapture={null}>
                                <Image src={libraryIcon} alt="library_icon" className="w-5"/>
                            </ListItemPrefix>
                            Library
                    </ListItem>
                    <ListItem
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}>
                            <ListItemPrefix
                                placeholder={null}
                                onPointerEnterCapture={null}
                                onPointerLeaveCapture={null}>
                                <Image src={peopleIcon} alt="people_icon" className="w-5"/>
                            </ListItemPrefix>
                            People
                    </ListItem>
                    <ListItem
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}>
                            <ListItemPrefix
                                placeholder={null}
                                onPointerEnterCapture={null}
                                onPointerLeaveCapture={null}>
                                <Image src={activiesIcon} alt="activities_icon" className="w-5"/>
                            </ListItemPrefix>
                            Activities
                    </ListItem>
                    <Typography
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}
                        variant="h5"
                        className="mt-8 ml-3 mb-3 text-gray-500">
                        Support
                    </Typography>
                    <ListItem
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}>
                            <ListItemPrefix
                                placeholder={null}
                                onPointerEnterCapture={null}
                                onPointerLeaveCapture={null}>
                                <Image src={getStartedIcon} alt="get_started_icon" className="w-5"/>
                            </ListItemPrefix>
                            Get Started
                    </ListItem>
                    <ListItem
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}>
                            <ListItemPrefix
                                placeholder={null}
                                onPointerEnterCapture={null}
                                onPointerLeaveCapture={null}>
                                <Image src={settingsIcon} alt="settings_icon" className="w-5"/>
                            </ListItemPrefix>
                            Settings
                    </ListItem>
                </List>

                <CardFooter
                    placeholder={null}
                    onPointerEnterCapture={null}
                    onPointerLeaveCapture={null}>
                        <hr/>
                        <Typography
                            placeholder={null}
                            onPointerEnterCapture={null}
                            onPointerLeaveCapture={null}
                            variant="h6"
                            color="black">
                                Sam Wheeler
                        </Typography>
                        <Typography
                            placeholder={null}
                            onPointerEnterCapture={null}
                            onPointerLeaveCapture={null}>
                                samwheeler@example.com
                        </Typography>
                </CardFooter>

            </Card>
        </>
    )
}

export default Sidebar;
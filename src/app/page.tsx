/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card, Typography, Progress } from "@material-tailwind/react";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Dropdowns from "./components/Dropdowns";
import Sidebar from "./components/Sidebar";
import Chart from "./components/Chart";
import Image from "next/image";
import graphIcon from './images/graph-icon.png';
import upTriangle from './images/up-triangle.png';
import downTriangle from './images/down-triangle.png'


export default function Home() {
  const [data, setData] = useState<any>('');
  useEffect(() => {
    fetch('/task-data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log("Error fetching data", error)
      )
  }, []);

  const currUsers = data?.metrics?.active_users.current;
  const totalUsers = data?.metrics?.active_users.total;
  const queAnswered = data?.metrics?.questions_answered;
  const avgSessLength = data?.metrics?.average_session_length_seconds;
  const startKnowledge = data?.metrics?.starting_knowledge_percentage;
  const currKnowledge = data?.metrics?.current_knowledge_percentage;
  const knowledgeGain = Math.floor((currKnowledge - startKnowledge) * 100 / (startKnowledge));
  const weakestTopics = data?.topics?.weakest;
  const strongestTopics = data?.topics?.strongest;
  const userLeaderBoard = data?.user_leaderboard;
  const groupsLeaderBoard = data?.groups_leaderboard;

  const convertSecondsToReadableTime = (totalSeconds: any) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}m ${seconds}s`;
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className=" m-5 mb-0 w-5/6">
        <Header />
        <hr />
        <Dropdowns />
        <div className="grid grid-cols-2 gap-3 w-full mt-4">
          <div className="grid grid-cols-3 gap-2 w-full">
            <div>
              <Card
                className="w-full h-full p-4"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                <Typography
                  className="text-xs"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  Active Users
                </Typography>
                <Typography
                  className="justify-center my-auto"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  <b className="font-black text-xl">{currUsers}</b>/{totalUsers}
                </Typography>
              </Card>
            </div>
            <div>
              <Card
                className="w-full h-full p-3 pt-4"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                <Typography
                  className="text-xs"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  Questions Answered
                </Typography>
                <Typography
                  className="text-xl font-black my-auto"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  {queAnswered}
                </Typography>
              </Card>
            </div>
            <div>
              <Card
                className="w-full h-full p-4"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                <Typography
                  className="text-xs"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  Av. Session Length
                </Typography>
                <Typography
                  className="text-xl font-black my-auto"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  {convertSecondsToReadableTime(avgSessLength)}
                </Typography>
              </Card>
            </div>
            <div>
              <Card
                className="w-full h-full p-4"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                <Typography
                  className="text-xs"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  Starting Knowledge
                </Typography>
                <Typography
                  className="text-xl font-black my-auto"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  {startKnowledge}%
                </Typography>
                <Image src={graphIcon} alt="graph-icon" className="m-auto" />
              </Card>
            </div>
            <div>
              <Card
                className="w-full h-full p-4"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                <Typography
                  className="text-xs"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  Current Knowledge
                </Typography>
                <Typography
                  className="text-xl font-black my-auto"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  {currKnowledge}%
                </Typography>
                <Image src={graphIcon} alt="graph-icon" className="m-auto" />
              </Card>
            </div>
            <div>
              <Card
                className="w-full h-full p-4"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                <Typography
                  className="text-xs"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  Knowledge Gain
                </Typography>
                <Typography
                  className="text-xl font-black my-auto"
                  placeholder={null}
                  onPointerEnterCapture={null}
                  onPointerLeaveCapture={null}>
                  +{knowledgeGain}%
                </Typography>
                <Image src={graphIcon} alt="graph-icon" className="m-auto" />
              </Card>
            </div>
          </div>
          <div>
            <Chart />
          </div>
          <div>
            <Card
              className="p-5 h-full"
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              <Typography
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                Weakest Topic
              </Typography>
              {weakestTopics?.map((topic: any, index: any) => (
                <div className="flex mb-4" key={index}>
                  {/* Topic Image */}
                  <img
                    src={topic?.image || "/placeholder.png"}
                    alt={topic?.name || "Topic"}
                    className="rounded-lg w-12 h-8 flex-none m-auto"
                  />
                  <div className="ml-4 w-full">
                    {/* Topic Name */}
                    <b className="block">{topic?.name || "Unknown Topic"}</b>
                    <div className="flex items-center">
                      {/* Progress Bar */}
                      <Progress
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}
                        className="w-full"
                        value={topic?.correct_percentage || 0}
                        size="md"
                        color="orange"
                      />
                      <Typography
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}
                        className="ml-2 text-sm inline-flex">
                        {topic?.correct_percentage || 0}%{" "}
                        <span className="text-gray-400">Correct</span>
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
          <div>
            <Card
              className="p-5 h-full"
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              <Typography
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                Strogest Topic
              </Typography>
              {strongestTopics?.map((topic: any, index: any) => (
                <div className="flex mb-4" key={index}>
                  {/* Topic Image */}
                  <img
                    src={topic?.image || "/placeholder.png"}
                    alt={topic?.name || "Topic"}
                    className="rounded-lg w-12 h-8 flex-none m-auto"
                  />
                  <div className="ml-4 w-full">
                    {/* Topic Name */}
                    <b className="block">{topic?.name || "Unknown Topic"}</b>
                    <div className="flex items-center">
                      {/* Progress Bar */}
                      <Progress
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}
                        className="w-full"
                        value={topic?.correct_percentage || 0}
                        size="md"
                        color="light-green"
                      />
                      <Typography
                        placeholder={null}
                        onPointerEnterCapture={null}
                        onPointerLeaveCapture={null}
                        className="ml-2 text-sm inline-flex">
                        {topic?.correct_percentage || 0}%{" "}
                        <span className="text-gray-400">Correct</span>
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </div>
          <div>
            <Card
              className="p-5 h-full"
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              <Typography
                className="mb-5"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                User Leaderboard
              </Typography>
              <div>
                {
                  userLeaderBoard?.map((user: any, index: any) => (
                    <div key={index} className="flex justify-between m-4 mb-0">
                      <div className="flex gap-4">
                        <img src={user.image} alt="user-image" className="rounded-full" />
                        <div>
                          <Typography
                            placeholder={null}
                            onPointerEnterCapture={null}
                            onPointerLeaveCapture={null}
                            variant="h6">
                            {user?.name}
                          </Typography>
                          {user?.points} Points - {user?.accuracy_percentage}% Correct
                        </div>
                      </div>
                      {
                        <div className="flex gap-2">
                          <p>{index + 1}</p>
                          {(user?.accuracy_percentage > user?.previous_accuracy_percentage) ?
                            <Image src={upTriangle} alt="up-triangle" className="w-6 h-6" /> : <Image src={downTriangle} alt="down-triangle" className="w-6 h-6" />}
                        </div>
                      }
                    </div>
                  ))
                }

              </div>
            </Card>
          </div>
          <div>
            <Card
              className="h-full p-5"
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              <Typography
                className="mb-5"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                Groups Leaderboard
              </Typography>
              <div>
                {
                  groupsLeaderBoard?.map((group: any, index: any) => (
                    <div key={index} className="m-4 mb-0 flex justify-between ">
                      <div>
                        <Typography
                          variant="h6"
                          placeholder={null}
                          onPointerEnterCapture={null}
                          onPointerLeaveCapture={null}>
                          {group?.group_name}
                        </Typography>
                        {group?.points_per_user} Points / User - {group?.accuracy_percentage}% Correct
                      </div>
                      {
                        <div className="flex gap-2">
                          <p>{index + 1}</p>
                          {(group?.accuracy_percentage > group?.previous_accuracy_percentage) ?
                            <Image src={upTriangle} alt="up-triangle" className="w-6 h-6" /> : <Image src={downTriangle} alt="down-triangle" className="w-6 h-6" />}
                        </div>
                      }
                    </div>
                  ))
                }
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

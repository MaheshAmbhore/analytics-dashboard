/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Select, Option, Card, Typography, Progress } from "@material-tailwind/react";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Dropdowns from "./components/Dropdowns";
import Image from "next/image";
import Sidebar from "./components/Sidebar";



export default function Home() {
  const [data, setData] = useState<any>('');
  useEffect(() => {
    fetch('/task-data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log("Error fetching data", error)
      )
  }, []);
  // console.log(data);

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
  return (
    <div >
      <Sidebar/>
      <Header />
      <Dropdowns />
      <hr />
      <div className="flex gap-5 w-3/4 mt-4 justify-between ">
        <Select
          placeholder={null}
          onPointerEnterCapture={null}
          onPointerLeaveCapture={null}
          label="Timeframe">
          <Option>Last 7 Days</Option>
          <Option>This Month</Option>
          <Option>This Year</Option>
          <Option>Custom</Option>
        </Select>

        <Select
          placeholder={null}
          onPointerEnterCapture={null}
          onPointerLeaveCapture={null}
          label="People">
          <Option>All</Option>
        </Select>

        <Select
          placeholder={null}
          onPointerEnterCapture={null}
          onPointerLeaveCapture={null}
          label="Topic">
          <Option>All</Option>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-3 w-2/3">
        <div className="grid grid-cols-3 gap-3 w-full mt-4">
          <div>
            <Card
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              <Typography
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                Active Users
              </Typography>
              <Typography
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                <b className="font-black text-xl">{currUsers}</b>/{totalUsers}
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              <Typography
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                Questions Answered
              </Typography>
              <Typography
                className="text-xl font-black"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                {queAnswered}
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              <Typography
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                Av. Session Length
              </Typography>
              <Typography
                className="text-xl font-black"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                {avgSessLength} sec {/* need to convert from sec to min */}
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              <Typography
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                Starting Knowledge
              </Typography>
              <Typography
                className="text-xl font-black"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                {startKnowledge}%
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              <Typography
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                Current Knowledge
              </Typography>
              <Typography
                className="text-xl font-black"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                {currKnowledge}%
              </Typography>
            </Card>
          </div>
          <div>
            <Card
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              <Typography
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                Knowledge Gain
              </Typography>
              <Typography
                className="text-xl font-black"
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                +{knowledgeGain}%
              </Typography>
            </Card>
          </div>
        </div>
        <div>
          <Card
            placeholder={null}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}>
            <div className="flex justify-between">
              <Typography
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}>
                Activity
              </Typography>
              <Select
                placeholder={null}
                onPointerEnterCapture={null}
                onPointerLeaveCapture={null}
                label="Month">
                <Option>Jan</Option>
              </Select>
            </div>
          </Card>
        </div>
        <div>
          <Card
            placeholder={null}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}>
            <Typography
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              Weakest Topic
            </Typography>
            {weakestTopics?.map((topic, index) => (
              <div className="flex mb-4" key={index}>
                {/* Topic Image */}
                <img
                  src={topic?.image || "/placeholder.png"}
                  alt={topic?.name || "Topic"}
                  className="rounded-lg w-12 h-8 flex-none"
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
                      className="ml-2 text-sm">
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
            placeholder={null}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}>
            <Typography
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              Strongest Topic
            </Typography>
            {
              strongestTopics?.map((topic, index) => (
                <>
                  <b>{topic.name}</b>
                  <div>
                    <Progress
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}
                      value={topic?.correct_percentage}
                      size="md"
                      color="light-green"
                    />
                    <Typography
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}>
                      {topic?.correct_percentage}% <span className="text-gray-400">Correct</span>
                    </Typography>
                  </div>
                </>
              ))}
          </Card>
        </div>
        <div>
          <Card
            placeholder={null}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}>
            <Typography
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              User Leaderboard
            </Typography>
            <div>
              {
                userLeaderBoard?.map((user, index) => (
                  <div key={index} className="flex gap-4">
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
                ))
              }
            </div>
          </Card>
        </div>
        <div>
          <Card
            placeholder={null}
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}>
            <Typography
              placeholder={null}
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}>
              Groups Leaderboard
            </Typography>
            <div>
              {
                groupsLeaderBoard?.map((group, index) => (
                  <>
                    <Typography
                      variant="h6"
                      placeholder={null}
                      onPointerEnterCapture={null}
                      onPointerLeaveCapture={null}>
                      {group?.group_name}
                    </Typography>
                    {group?.points_per_user} Points / User - {group?.accuracy_percentage}% Correct
                  </>
                ))
              }
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

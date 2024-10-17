"use client";

import BarChart from "@/components/Charts/BarChart";
import Donut from "@/components/Charts/Donut";
import LineChart from "@/components/Charts/LineChart";
import PieChart from "@/components/Charts/PieChart";
import Feelings from "@/components/Feelings";
import GraphsData from "@/components/GraphsData";
import MainContainer from "@/components/MainContainer";
import Reviews from "@/components/Reviews";
import Table from "@/components/Table";
import TabTwo from "@/components/TabTwo";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);

  const [graphsData, setGraphsData] = useState();
  const [activeTab, setActiveTab] = useState("1");
  const [mobActiveTab, setMobActiveTab] = useState("a1");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://insights-mind-7646dfe71e1b.herokuapp.com/reviews/66eb726e1b898c92f06c243f"
        );
        const result = await response.data;

        setReviews(result?.data);

        console.log(result, "responsed");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://insights-mind-7646dfe71e1b.herokuapp.com/insights/66eb726e1b898c92f06c243f"
        );
        const result = await response.data;

        setGraphsData(result?.data);

        console.log(graphsData, "responsed");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full relative overflow-y-auto">
      <MainContainer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobTab={mobActiveTab}
        setMobTab={setMobActiveTab}
      />


      <div className="lg:block hidden">
        {activeTab == "1" && (
          <div className="flex p-[20px] lg:p-[48px] lg:flex-row flex-col w-full">
            <Reviews data={reviews} loading={loading} />
            <GraphsData data={graphsData} />
          </div>
        )}
        {activeTab == "2" && <TabTwo />}
      </div>



      <div className="lg:hidden block">
        {activeTab == "1" && (
          <div className="flex p-[20px] lg:p-[48px] gap-[20px] flex-col w-full">
            {mobActiveTab == "c3" && (
              <Reviews data={reviews} loading={loading} />
            )}
            {mobActiveTab == "a1" && (
              <>
                <Donut dataC={graphsData?.overal_sentiment} />
                <LineChart data={graphsData?.get_aspect_counts_by_month} />
                <PieChart data={graphsData?.overall_review_tone} />
                <Feelings data={graphsData?.get_category_sentiment} />
              </>
            )}
            {mobActiveTab == "b2" && (
              <>
                <BarChart data={graphsData?.most_popular_aspects} />
                <Table data={graphsData?.topicOpinions} />
              </>
            )}
          </div>
        )}



        {activeTab == "2" && <TabTwo />}
      </div>
    </div>
  );
};

export default Dashboard;

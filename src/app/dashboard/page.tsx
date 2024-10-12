"use client";

import GraphsData from "@/components/GraphsData";
import MainContainer from "@/components/MainContainer";
import Reviews from "@/components/Reviews";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);

  const [graphsData, setGraphsData] = useState()

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
    <div className="flex flex-col w-full h-full overflow-y-auto">
      <MainContainer />
      <div className="flex p-[48px] w-full">
        <Reviews data={reviews} loading={loading} />
        <GraphsData data={graphsData} />
      </div>
    </div>
  );
};

export default Dashboard;

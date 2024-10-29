"use client";

import BarChart from "@/components/Charts/BarChart";
import Donut from "@/components/Charts/Donut";
import LineChart from "@/components/Charts/LineChart";
import PieChart from "@/components/Charts/PieChart";
import CreatePopup from "@/components/Popups/CreatePopup";
import Feelings from "@/components/Feelings";
import GraphsData from "@/components/GraphsData";
import Loader from "@/components/Loader";
import MainContainer from "@/components/MainContainer";
import Refresh from "@/components/Refresh";
import Reviews from "@/components/Reviews";
import Table from "@/components/Table";
import TabTwo from "@/components/TabTwo";
import { useGlobalContext } from "@/context/GlobalContext";
import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

const Dashboard = () => {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [loadingTabTwo, setLoadingTabTwo] = useState(true);
  const [tabTwoData, setTabTwoData] = useState(true);

  const [graphsData, setGraphsData] = useState();
  const [activeTab, setActiveTab] = useState("1");
  const [mobActiveTab, setMobActiveTab] = useState("a1");
  const { showCreate, setShowCreate } = useGlobalContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingReviews(true);
        const response = await axios.get(
          "http://16.171.196.223:8000/reviews/66eb726e1b898c92f06c243f"
        );
        const result = await response.data;

        setReviews(result?.data);

        // console.log(result, "responsed");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setTimeout(() => {
        setLoadingReviews(false);
        // }, 6000);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://16.171.196.223:8000/insights/66eb726e1b898c92f06c243f"
        );
        const result = await response.data;

        setGraphsData(result?.data);

        // console.log(graphsData, "responsed");
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
        setLoadingTabTwo(true);
        const response = await axios.get(
          "http://16.171.196.223:8000/generate-text-insights/66eb726e1b898c92f06c243f"
        );
        const result = await response.data;

        setTabTwoData(result?.data);
        // console.log(result, result.data,"responses from tab two")
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingTabTwo(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      {showCreate && (
        <CreatePopup key={"123"} setShow={setShowCreate} show={showCreate} />
      )}
      <MainContainer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobTab={mobActiveTab}
        setMobTab={setMobActiveTab}
      />
      <div className="relative h-full">
        {loading || loadingReviews || loadingTabTwo ? (
          <Loader />
        ) : (
          <>
            <div className="lg:block hidden">
              {activeTab == "1" && (
                <>
                  <Refresh />
                  <div className="flex p-[20px] lg:p-[48px] lg:flex-row flex-col w-full">
                    <Reviews key={"desktop-reviews"} data={reviews} loading={loadingReviews} />
                    <GraphsData data={graphsData} />
                  </div>
                </>
              )}
              {activeTab == "2" && <TabTwo data={tabTwoData} />}
            </div>

            <div className="lg:hidden block">
              {activeTab == "1" && (
                <>
                  <Refresh />
                  <div className="flex p-[20px] lg:p-[48px] gap-[20px] flex-col w-full">
                    {mobActiveTab == "c3" && (
                      <Reviews key={"mobile-reviews"} data={reviews} loading={loadingReviews} />
                    )}
                    {mobActiveTab == "a1" && (
                      <>
                        <Donut dataC={graphsData?.overal_sentiment} />
                        <LineChart
                          data={graphsData?.get_aspect_counts_by_month}
                        />
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
                </>
              )}

              {activeTab == "2" && <TabTwo data={tabTwoData} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

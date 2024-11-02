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
import React, { useEffect, useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import progressPageIcon from "@/assets/images/icons/progress-page-icon.svg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);
  // const [loadingReviews, setLoadingReviews] = useState(true);
  // const [loadingTabTwo, setLoadingTabTwo] = useState(true);
  // const [tabTwoData, setTabTwoData] = useState(true);

  // const [graphsData, setGraphsData] = useState();
  const [activeTab, setActiveTab] = useState("1");
  const [mobActiveTab, setMobActiveTab] = useState("a1");
  const { showCreate, setShowCreate } = useGlobalContext();

  const [id, setId] = useState<string | null>(null);
  const [isMyBusiness, setIsMyBusiness] = useState(false);
  const [progressStatus, setProgressStatus] = useState<string | null>(null);

  const searchParams = useSearchParams();

  const fetchReviews = async () => {
    const response = await axios.get(
      `http://16.171.196.223:8000/reviews/${id}`
    );
    return response.data;
  };

  const fetchGraphsData = async () => {
    const response = await axios.get(
      `http://16.171.196.223:8000/insights/${id}`
    );
    return response.data;
  };

  const fetchTabTwoData = async () => {
    const response = await axios.get(
      `http://16.171.196.223:8000/generate-text-insights/${id}`
    );
    return response.data;
  };
  const fetchProgressStatus = async () => {
    const response = await axios.get(
      `http://16.171.196.223:8000/check-loading-status/${id}`
    );
    return response.data;
  };


  const { data: progressData } = useQuery({
    queryKey: ["progressStatus"],
    queryFn: fetchProgressStatus,
    refetchInterval: progressStatus !== "completed" ? 20000 : false,
    enabled: progressStatus !== "completed" && id != null,
  });

  const {
    data: reviewsData,
    isLoading: loadingReviews,
    error: reviewsError,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
    enabled: progressStatus === "completed" && id != null,
  });
  const {
    data: graphsData,
    isLoading: loadingGraphs,
    error: graphsError,
  } = useQuery({
    queryKey: ["graphsData"],
    queryFn: fetchGraphsData,
    enabled: progressStatus === "completed" && id != null,
  });
  const {
    data: tabTwoData,
    isLoading: loadingTabTwo,
    error: tabTwoError,
  } = useQuery({
    queryKey: ["tabTwoData"],
    queryFn: fetchTabTwoData,
    enabled: progressStatus === "completed" && id != null,
  });

  // Fetching data from URL
  useEffect(() => {
    const isMyBusiness = searchParams.get("myBusiness");
    const progressStatus = searchParams.get("progressStatus");
    (async () => {
      try {
        const { id } = await params;
        setId(id);
      } catch (error) {
        console.error("Error while fetching ID : ", error);
      } finally {
        setIsMyBusiness(isMyBusiness == "true" ? true : false);
        if (progressStatus) {
          setProgressStatus(progressStatus);
        }
      }
    })();
  }, [params]);


  useEffect(() => {
    if (progressData?.progress_percentage === 100) {
      setProgressStatus("completed");
     
    }
  }, [progressData]);




  return (
    <div className='flex flex-col bg-bgClr items-center w-full h-full overflow-y-auto'>
      {showCreate && (
        <CreatePopup key={"123"} setShow={setShowCreate} show={showCreate} />
      )}

      <MainContainer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobTab={mobActiveTab}
        setMobTab={setMobActiveTab}
        showOptionsBar={progressStatus == "completed"}
        isMyBusiness={isMyBusiness}
      />

      <div className={`relative size-full`}>
        {loadingReviews || loadingGraphs || loadingTabTwo || progressStatus == null ? (
          <Loader />
        ) : progressStatus == "incomplete" ? (
          <div className='flex  !bg-white h-full flex-col items-center justify-center w-full rounded-2xl'>
            <Image
              src={progressPageIcon}
              alt='insight-minds'
              className='size-[94px]'
              priority
            />
            <div className='mb-5 h-3 flex justify-end  mt-6 rounded-full bg-[#F6F6F6] w-full max-w-[352px]'>
              <div className={"h-3 rounded-full bg-main  animate-pulse"}

              style={{width: `${progressData?.progress_percentage == 0 ? "5" : progressData?.progress_percentage}%`}}
              
              ></div>
            </div>

            <span className='text-2xl font-semibold'>{progressData?.progress_percentage}%</span>
            <span className='font-semibold mt-2'>
              يتم تجميع البيانات يمكنك العودة لاحقاً
            </span>
          </div>
        ) : (
          <>
            <div className='lg:block hidden'>
              {activeTab == "1" && (
                <>
                  <Refresh />
                  <div className='flex p-[20px] lg:p-[48px] lg:flex-row flex-col w-full'>
                    <Reviews
                      key={"desktop-reviews"}
                      data={reviewsData?.data}
                      loading={loadingReviews}
                    />
                    <GraphsData data={graphsData?.data} />
                  </div>
                </>
              )}
              {activeTab == "2" && <TabTwo data={tabTwoData?.data} />}
            </div>

            <div className='lg:hidden block'>
              {activeTab == "1" && (
                <>
                  <Refresh />
                  <div className='flex p-[20px] lg:p-[48px] gap-[20px] flex-col w-full'>
                    {mobActiveTab == "c3" && (
                      <Reviews
                        key={"mobile-reviews"}
                        data={reviewsData?.data}
                        loading={loadingReviews}
                      />
                    )}
                    {mobActiveTab == "a1" && (
                      <>
                        <Donut dataC={graphsData?.data?.overal_sentiment} />
                        <LineChart
                          data={graphsData?.data?.get_aspect_counts_by_month}
                        />
                        <PieChart
                          data={graphsData?.data?.overall_review_tone}
                        />
                        <Feelings
                          data={graphsData?.data?.get_category_sentiment}
                        />
                      </>
                    )}
                    {mobActiveTab == "b2" && (
                      <>
                        <BarChart
                          data={graphsData?.data?.most_popular_aspects}
                        />
                        <Table data={graphsData?.data?.topicOpinions} />
                      </>
                    )}
                  </div>
                </>
              )}

              {activeTab == "2" && <TabTwo data={tabTwoData?.data} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;

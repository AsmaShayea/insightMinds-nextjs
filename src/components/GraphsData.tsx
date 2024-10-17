"use client";

import React from "react";

import PieChart from "./Charts/PieChart";
import LineChart from "./Charts/LineChart";
import Table from "./Table";
import Feelings from "./Feelings";
import Donut from "./Charts/Donut";
import BarChart from "./Charts/BarChart";

const GraphsData = ({ data }: { data: any }) => {
  return (
    <div className="w-[58%] pr-[24px] flex flex-col gap-[24px]">
      {/* Graphs  */}
      <div className="w-full flex gap-[24px]">
        {/* Left Charts  */}
        <div className="flex flex-col w-[45%] gap-[20px]">
          {/* Donut Chart  */}
          <Donut dataC={data?.overal_sentiment} />
          {/* Pie Chart  */}
          <PieChart data={data?.overall_review_tone} />
        </div>

        {/* Right Charts  */}
        <div className="flex flex-col w-[55%] gap-[20px]">
          {/* Bars Chats  */}
          <BarChart data={data?.most_popular_aspects} />
          {/* Line Chart  */}
          <LineChart data={data?.get_aspect_counts_by_month} />
        </div>
      </div>
      {/* Table  */}
      <Table data={data?.topicOpinions} />
      <Feelings data={data?.get_category_sentiment} />
    </div>
  );
};

export default GraphsData;

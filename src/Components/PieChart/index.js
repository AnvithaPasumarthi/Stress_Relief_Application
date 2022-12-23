import React from "react";
import { ResponsivePie } from "@nivo/pie";
const PieChart = ({ piedata, fetchStateData }) => {
  let data = [];
  for (let key in piedata) {
    let keyLabel;
    if (key === "ny") {
      keyLabel = "New York";
    }
    if (key === "or") {
      keyLabel = "Oregon";
    }
    if (key === "ca") {
      keyLabel = "California";
    }
    if (key === "wa") {
      keyLabel = "Washington";
    }
    if (key === "az") {
      keyLabel = "Arizona";
    }
    if (key === "nv") {
      keyLabel = "Nevada";
    }
    if (key === "co") {
      keyLabel = "Colorado";
    }
    if (key === "ut") {
      keyLabel = "Utah";
    }

    let tempObj = {};
    tempObj.id = key;
    tempObj.label = keyLabel;
    if (piedata[key].length - 1 > 1) {
      tempObj.value = piedata[key].length;
    } else {
      tempObj.value = piedata[key].length;
    }

    tempObj.color = "hsl(205, 70%, 50%)";
    data.push(tempObj);
  }

  const onClickHandler = (pieData, allData) => {
    fetchStateData(pieData, allData);
  };
  return (
    <div className="pieChart" style={{ position: "relative" }}>
      <div
        style={{
          width: "600px",
          height: "600px",
        }}
      >
        <ResponsivePie
          data={data}
          onClick={(eventData) => onClickHandler(eventData, piedata)}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={3}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 3]] }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: { id: "ny" },
              id: "dots",
            },
            {
              match: { id: "ca" },
              id: "dots",
            },
            {
              match: { id: "or" },
              id: "lines",
            },
            {
              match: { id: "az" },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 10,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 90,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PieChart;

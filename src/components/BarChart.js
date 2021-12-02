import useD3 from "../providers/useD3";
import React, { useEffect, useState } from "react";
import * as d3 from "d3";

function BarChart({ data, selection }) {
  const [initialised, setInitialised] = useState(false);
  const margin = { top: 40, bottom: 10, left: 200, right: 20 }
  const width = 1100 - margin.left - margin.right
  const height = 600 - margin.top - margin.bottom
  const ref = useD3(
    (svg) => {
      const xscale = d3.scaleLinear().range([0, width]) // scaleLinear makes the steps between the values on the xscale equal
      const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.1)
      // paddingInner is for the space between the bars

      // axis
      const xaxis = d3.axisTop().scale(xscale) // the xaxis will be displayed on the top
      const yaxis = d3.axisLeft().scale(yscale) // the yaxis will be displayed on the left

      if (!initialised) {
        const g = svg.select('g') // group used to enforce margin
          .attr('transform', `translate(${margin.left},${margin.top})`) // put svg on right place with the margin
          .attr('class', 'chart')

        const g_xaxis = g.append('g').attr('class', 'x axis')
        const g_yaxis = g.append('g').attr('class', 'y axis')
      }

      // with this function the other functions will be called, but in this way the function updateRect does not dependent of the second one
      const update = (data, selection) => {
        sortData(data, selection)
        updateXscale(data, selection)
        updateRect(data, selection)

        // render the axis
        // when the axis are rendered there is a transition that takes 800 milliseconds
        svg.select('g.x').transition().duration(800).call(xaxis)
        svg.select('g.y').transition().duration(800).call(yaxis)
      }

      // function to sort the data from high to low
      const sortData = (data, selection) => {
        data.sort((a, b) => {
          if (selection === 'listeners') {
            return b.listeners - a.listeners
          } else {
            return b.duration - a.duration
          }
        })
      }

      const updateXscale = (data, selection) => { //update the scales
        xscale.domain([0, d3.max(data, d => +d[selection])]) // on xscale use data of listeners when selection is equal to listeners
        yscale.domain(data.map((d) => d.nameSong)) // on the yscale the name of the song will be displayed
      }

      const updateRect = (data, selection) => {
        // render the chart with new data
        const rect = svg.select('.chart').selectAll('rect').data(data, (d) => d.nameSong).join(
          (enter) => { // entering new elements
            const rect_enter = enter.append('rect').attr('x', 0)
            rect_enter.append('title')
            return rect_enter
          }
        ) // on mouseouver, mousemove, mouseout the functions will be called
          .on('mousemove', onMouseOver)
          .on('mouseout', onMouseOut)

        rect // set the height and width of the rectangles and added a transition
          .attr('height', yscale.bandwidth())
          .transition()
          .duration(800)
          .attr('y', (d) => yscale(d.nameSong)) // put nameSong on y scale

        rect
          .attr('width', (d) => xscale(d[selection])) // put selection on x scale
      }

      const onMouseOver = (d, data) => {
        // d is the data of the mouse
        const xPosition = d.clientX // clientX and clientY are the position of the mouse
        const yPosition = d.clientY

        let toolTipValue
        toolTipValue = data[selection] // set toolTipValue to the selection
        d3.select(d.target).attr('class', 'highlight') // class is set to highlight
        d3.select('#tooltip').classed('hidden', false) // class hidden is set to false, so the class is not used
        d3.select('#tooltip')
          .style('left', xPosition + 'px')
          .style('top', yPosition + 'px')
        d3.select('#name').text('Het nummer ' + data.nameSong + ' van ' + data.artist.name) // set text for tooltip 
        if (selection === 'listeners') {
          d3.select('#value').text('heeft ' + toolTipValue + ' luisteraars.') // when listeners is displayed then show this text
        } else {
          d3.select('#value').text('duurt: ' + toolTipValue + ' seconden.')
        }
      }

      const onMouseOut = (d) => {
        d3.select(d.target).attr('class', 'bar') // with d.target the rect.bar class will be set to bar
        d3.select('#tooltip').classed('hidden', true) // the class hidden will be set to true
      }

      update(data, selection)
    },
    [data.length, selection]
  );
  useEffect(() => {
    setInitialised(true)
  }, [])

  return (
    <svg
      ref={ref}
      style={{
        height: 600,
        width: 1100,
        marginRight: "0px",
        marginLeft: "0px"
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default BarChart;

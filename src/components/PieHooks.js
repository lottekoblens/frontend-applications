import React, { useEffect } from 'react'
import useD3 from '../providers/useD3'
import * as d3 from 'd3'

const PieChart = ({ data }) => {
	const dimensions = {
		width: 500,
		height: 500,
	}

	const ref = useD3(svg => {
		const width = dimensions.width,
			height = dimensions.height,
			radius = Math.min(width, height) / 3

		const g = svg
			.append('g')
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

		const color = d3.scaleOrdinal(['#fd788b', '#feb1b7', '#fedcdb', '#febecc', '#fe6694'])

		const pie = d3.pie()
		const arc = d3.arc().innerRadius(0).outerRadius(radius)
		const arcs = g.selectAll('arc').data(pie(data.map(d => d.listeners))).enter().append('g')
		arcs.append('path')
			.attr('fill', function (d, i) {
				return color(i)
			})
			.attr('d', arc)

		const onMouseOver = (mouse, data) => {
			console.log(data)
			// d is the data of the mouse
			const xPosition = mouse.clientX // clientX and clientY are the position of the mouse
			const yPosition = mouse.clientY

			 // set toolTipValue
			d3.select(mouse.target).attr('class', 'highlight') // class is set to highlight
			d3.select('#tooltip').classed('hidden', false) // class hidden is set to false, so the class is not used
			d3.select('#tooltip')
				.style('left', xPosition + 'px')
				.style('top', yPosition + 'px')
			d3.select('#name').text('Het nummer ' + data.nameSong + ' heeft ' + data.data + ' aantal luisteraars') // set text for tooltip 
		}

		const onMouseOut = (mouse) => {
			d3.select(mouse.target).attr('class', 'path') // with d.target the rect.bar class will be set to bar
			d3.select('#tooltip').classed('hidden', true) // the class hidden will be set to true
		}

		arcs
			.on('mousemove', onMouseOver)
			.on('mouseout', onMouseOut)

	}, [])



	return (
		<svg
			ref={ref}
			style={{
				height: dimensions.height,
				width: dimensions.width,
			}}
		></svg>
	)
}

export default PieChart
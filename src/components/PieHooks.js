import useD3 from '../providers/useD3'
import * as d3 from 'd3'

const PieChart = ({ data }) => {
	const dimensions = {
		width: 500,
		height: 500,
	} // set the width and height for the pie chart

	const ref = useD3(svg => {
		const width = dimensions.width,
			height = dimensions.height,
			radius = Math.min(width, height) / 3
		// use with and height to set the radius, the radius is the half of the diameter

		svg.select('g').remove() // remove g so that when pie chart is updated the old pie is gone

		const g = svg
			.append('g') // add g to svg
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

		const color = d3.scaleOrdinal(['#fd788b', '#feb1b7', '#fedcdb', '#febecc', '#fe6694']) // set colors for arcs of the pie chart

		const pie = d3.pie() // creates useful data to generate a pie chart in the SVG
		const arc = d3.arc().innerRadius(100).outerRadius(radius)
		const arcs = g.selectAll('path').data(pie.value(d => d.listeners)(data)).enter().append('g') // give data of listeners to the arc
		arcs.append('path')
			.attr('fill', function (i) {
				return color(i) // fill the arcs with the colors that has been set in the const color
			})
			.attr('d', arc)

		const onMouseOver = (d, data) => {
			// d is the data of the mouse
			const xPosition = d.clientX // clientX and clientY are the position of the mouse
			const yPosition = d.clientY

			d3.select(d.target).attr('class', 'highlight') // class is set to highlight
			d3.select('#tooltip').classed('hidden', false) // class hidden is set to false, so the class is not used
			d3.select('#tooltip')
				.style('left', xPosition + 'px')
				.style('top', yPosition + 'px')
				.text(
					"Het nummer " + data.data.nameSong + ' van ' + data.data.artist.name +
					" heeft " + data.data.listeners + ' luisteraars' // give tooltip this text with the right data
				)
		}

		const onMouseOut = (mouse) => {
			d3.select(mouse.target).attr('class', 'path') // with d.target the rect.bar class will be set to bar
			d3.select('#tooltip').classed('hidden', true) // the class hidden will be set to true
		}

		arcs.on('mouseover', null) // set mouseover to null to set mouseover off
			.on('mouseout', null)

		arcs
			.on('mouseover', onMouseOver) // when mouse moves over arc, call the function onMouseOver
			.on('mouseout', onMouseOut) // when mouse moves away from the arc, call the function onMouseOut
	}, [data])

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
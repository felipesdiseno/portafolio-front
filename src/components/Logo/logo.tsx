'use client'
import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { personalInformation } from '@/Information/personalInformation'

const Logo = () => {
    
    useEffect(() => {
        // Limpiar el contenido previo
        const svgContainer = d3.select('#logo');
        svgContainer.selectAll("*").remove();
      
        const chart = `${personalInformation.name[0].toUpperCase()}${personalInformation.lastName[0].toUpperCase()}`;
        const svg = svgContainer
          .append('svg')
          .attr('width', '100%')  // Cambiado a 100%
          .attr('height', '100%') // Cambiado a 100%
          .attr('viewBox', '0 0 200 200'); // Definir viewBox para mantener la proporción
      
        // Crear el círculo
        svg.append('circle')
          .attr('cx', 100)
          .attr('cy', 100)
          .attr('r', 80)
          .attr('fill', '#f0f0f0');
      
        // Añadir el texto
        svg.append('text')
  .attr('x', '50%')
  .attr('y', '50%')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'middle')
  .attr('font-size', 50)
  .attr('font-family', '"Oswald", sans-serif') // Comillas alrededor del nombre
  .attr('font-weight', 'bold')
  .attr('fill', '#333')
  .text(`</${chart}>`);
      }, []);

  return (
    <div id='logo'></div>
  )
}

export default Logo

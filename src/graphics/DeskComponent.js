import React, { useState, useEffect } from "react";
import vscodeScreenshot from "./home-graphics/small-vscode.png";
import leafVase from "./pots/leaf-vase.png";
import flowerMug from "./pots/flower-mug.png";
import backgroundColors from "./home-graphics/background-colors.png";
import keyboard from "./home-graphics/keyboard.png";
import greenVase from "./home-graphics/green-vase.png";
import nemo from "./home-graphics/nemo-skewed-screenshot.png";
import openScreenshot from "./home-graphics/open-skewed-screenshot.png";
import teapot from "./home-graphics/teapot.png";

const DeskComponent = () => (
  <svg
    id="DeskComponent"
    data-name="DeskComponent"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8244.85 4197.96"
  >
    {/* Generator: Adobe Illustrator 29.0.0, SVG Export Plug-In . SVG Version: 2.1.0 Build 186) */}
    <image transform="scale(2.0)" href={backgroundColors} />

    <image transform="translate(3450 570) scale(.769)" href={vscodeScreenshot} />
    <image transform="translate(4920 1230) scale(0.59)" href={nemo} />
    <image transform="translate(4600 345) scale(0.6)" href={openScreenshot} />

    <path transform="translate(0 -10)" d="M5026.93,2661.43c20.52-23.69,101.27-62.3,133.39-67.87,29.15-5.06,134.84-13.44,162.01-11.17,12.03,1,83.9,36.26,95.81,45.33,21.72,16.56,51.22,54.4,28.82,79.92-16.08,18.32-194.14,52.13-227.01,54.16-35.79,2.21-162.12-3.88-188.35-22.39-24.73-17.46-22.23-57.71-4.67-77.99ZM5254.3,2597.24c-63.5,6.16-111.46-10.07-215.67,70.61,155.46,53.1,230.64,13.65,313.11-56.93-17.63-12-54.8-18.21-71.71-13.68-45.86,7.12-68.42,46.98-82.34,49.6-12.45-2.62,28.28-47.92,56.61-49.6ZM5040.04,2728.71c5.14,4.74,119.76,21.33,135.21,22.44,41.01,2.95,198.67-23.76,238.89-39.51,6.11-2.39,25.18-4.93,27.37-25.37-79.37-135.02-91.73-20.16-217.86,12.23-43.09,11.06-150.19,5.64-189.63-17.79-5.93,1.91-20.51,23.51,6.02,47.99Z" />
    <path d="M6055.51,2528.98c15.9,19.33-37.98,3.82-39.35,16.73,71.08,9.01,143.09,12.47,213.97-.01l-33.74-11.26c39.51-31.27,100.78-25.48,84.66,41.32-7.17,29.7-266.61,41.37-302.04-1.31-30.12-36.29,11.79-63.31,50.89-56.56,2.78.48,24.72,10.02,25.6,11.1ZM6243.97,2556.02c-30.62,13.84-52.75,14.93-107.8,17.77-49.38,2.54-113.09-7.81-136.91-11.08-.02,8.83,12.87,18.38,19.73,20.1,14.41,3.62,69.99,9.06,112.04,7.88,61.41-1.73,82.63-5.18,117.82-12.18,26.83-15.55,9.15-25.62-4.88-22.49Z" />
    <path d="M3653.73,1837.28c.46-1.48,11.38.29,2.92-10.37,24.19-4.24,49.12,4.07,71.61,4.78,25.52.8,96.23-5.87,113.39,7,22.18,16.65,1.12,134.73-24.87,135.95-36.34-16.13-148.37,1.04-174.12-15.73-5.68-3.7-4.01-7.27-3.58-12.65,1.56-19.22,9.45-45.89,12.38-66.75,1.98-14.11-1.95-28.64,2.28-42.23ZM3832.66,1845.36l-166.71-9.19c12.3,36.26,1.21,75.58-9.24,111.03l162.02,9.31c6.36-37.24,18.65-72.51,13.94-111.15Z" />
    <g>
      <path d="M3451.43,2295.74c-2.09-8.49-21.5-29.01-28.36-36.41-16.58-17.89-28.46-24.64-51.03-35.05-92.2-42.56-182.82-42.55-280.54-27.92-16.43,2.46-13.05-4.47-21.25-13-3.98-4.14-13.8-10.66-18.97-13.82-51.12-31.23-126.89-53.04-185.49-39.81-94.94,21.44-191.45,41.64-287.05,63.85-59.33,13.79-118.48,18.71-177.14,32.75-44.96,10.76-89.28,22.41-133.57,35.32l-27.16,4c-10.39,5.09-5.17,16.1-1.76,24.41,20.65,3.1,40.5,10,60.89,14.16,31.56,6.45,62.71,10.56,94.66,13.57,20.53,1.93,40.58,5.03,61.5,3.28l-25.12,13.38c-30.26,9.61-65.97,27.54-97.2,30.78-6.43.67-12.56-3.35-17.7.24-10.42,7.28,16.15,17.58,21.25,21.11,46.21-6.54,90.07-24.07,133.78-39.89,25.55-9.24,40.69-21.15,69.52-19.15,11.59.8,23.29,4.52,35.21,4.15,16.67,21.3,30.12,31.29,58.21,28.72,86.69-7.92,174.32,9.65,259.45,25.85,53.34,10.15,116.89,29.18,170.18,26.62,67.5-3.24,131.71-24.84,196.2-43.21,46.74-13.31,93.63-25.67,140.44-38.29,11.3-3.05,47.21-8.09,52.03-18.57.81-1.76-.41-14.85-.96-17.08ZM3083.29,2207.84c4.39-.76,8.89-5.55,13.31-6.36,89.6-16.5,217.43-3.57,296.72,44.16,4.21,2.53,9.67,5.58,12.29,9.83-16.02,4.34-31.25,11.29-47.16,15.98-29.01,8.57-59.16,14.88-88.55,22.96-70.61,19.42-154.74,48.59-227.44,54.6-27.96,2.31-28.25-2.5-50.33-12.12-38.39-16.72-83.2-34.04-122.77-47.76-47.39-16.43-95.71-26-145.92-27.92-.85-3.24,3.91-3.68,5.88-3.91,16.89-1.98,36.7-1.65,53.97-3.46,68.72-7.2,137.83-17.1,205.36-29.12,31.6-5.62,62.96-11.36,94.63-16.87ZM2509.55,2214.58c94.75-13.8,189.89-39.63,284.86-59.49,42.28-8.84,83.41-22.35,126.62-19.27,41.65,2.97,105.7,27.09,137.73,54.12,1.27,1.07,9.36,8.25,7.41,9.79-9.02.17-18.55,4.42-27.42,6.19-79.99,15.98-163.27,26.25-243.83,36.57-47.42,6.07-97.34,7.9-141.23,26.03-19.21.33-38.85,7.53-57.29,13.22-2-5.86-4.62-15.1-9.6-19.14-21.86-17.75-41.76-31.09-69.69-39.35-7.07-2.09-14.14-4.59-21.58-3.85l14.01-4.82ZM2453.73,2312.85c-72.47.85-125.73-13.12-195.53-27.48-4.16-.85-12.19,1.6-11.99-2.88.45-10.05,22.16-10.88,29.64-13.02,54.34-15.57,114.35-34,169.53-41.99,43.36-6.28,98.63,7.41,128.85,41.93,3.24,3.7,4.5,1.55,11.46,7.37l.02,8.21c-3.98.31-8.4-.55-12.3,0-44.12,6.26-72.97,27.29-119.7,27.84ZM2495.51,2324.36l-22.1,11.48c-41.74,14.39-79.2,31.04-122.63,39.7-6.38,1.27-7.76,5.35-15.95-.39-.39-2.36,2.89-2.28,4.58-2.75,7.2-2.01,14.12-1.15,20.45-2.53,21.34-4.65,49.5-15.07,69.83-23.64,17.31-7.3,34.16-15.36,52.48-21.97,15.32-6.3,17.15-7.27,26.65-11.15l17.6-7.89c20.45-8.71,41.38-9.16,62.56-13.69l1.66,8.2c-1.31,1.11-18.71,1.19-22.05,1.73-4.31.7-13.59,2.56-17.73,3.59-13.89,3.46-56.82,19.08-55.33,19.3ZM3433.47,2303.67c-110.36,24.7-216.83,62.38-326.76,84.98-34.58,7.11-54.57,9.83-90.18,2.54-85.59-17.52-169.81-47.29-256.3-58.53-43.58-5.66-87.38-4.23-131.04-.11-2.14.2-14.92,2.82-15.43,3.42-.89,1.06.18,6.01-.16,8.05,2.35.14,4.66.11,6.99-.39,41.17-8.89,98.1-4.4,139.9.25,83.13,9.25,166.22,33.37,247.86,52.21,6.8,1.57,15.51,2.42,22.47,3.77,1.15.22,5.56,1.44,3.37,3.19-5.82-1.68-12.12-.87-17.94-1.74-35.64-5.31-74.87-16.24-111.23-23.23-84.16-16.18-186.88-33.21-272.58-25.88-4.18.36-9.89,3.8-12.78,3.06-1.2-.31-17.65-12.59-19.96-14.57-4.77-4.08-9.24-11.14-12.85-14.19-6.65-5.61-34.21-4.09-43.76-5.46,2.85-3.52,11.54-5.18,15.96-6.16,9.08-2.01,26.56-1.89,33.72-4,2.07-.61,18.55-15.98,23.58-19.05,53.46-32.55,112.95-24.76,171.37-14.53,67.04,11.74,129.09,36.21,191.29,62.87,9.38,4.02,13.84,9.97,22.88,13.19,30.52,10.88,94.79-5.65,127.06-13,68.04-15.51,133.47-40.89,202.09-55,19.08-3.92,40.44-6.08,60.2-10.66,17.44-4.03,25.82-13.57,40.58,6.18.03,3.28-17.67,8.66-21.28,9.04,1.53,15.07,22.95-4.2,27.63-1.45.54.32,6.49,10.12,6.57,10.75.88,6.29-7.96,3.7-11.27,4.44Z" />
      <path d="M2686.94,2295.22c85.89-8.34,156.9,14.8,235.19,44.44,5.23,1.98,38.89,15.71,39.06,18.29.14,2.11-5.01,2.8-7.25,2.42-8.87-1.5-22.6-9.44-31.84-12.49-89.45-29.5-181.98-59.49-277.79-36.26-4.76,1.16-19.37,10.61-19.31,2.04.02-3.48,8.26-6.98,11.54-8.17,10.99-3.97,38.58-9.13,50.39-10.28Z" />
      <path d="M3397.4,2286.64c4.26,3.67-16.69,12.67-18.53,13.43-25.99,10.78-59.63,17.42-86.85,24.65-44.61,11.85-89.05,22.15-133.13,32.48-20.34,4.77-44.34,15.96-64.13,19.54-9.63,1.74-11.68-3.93-2.1-7.06,3.28-1.07,6.79-.61,9.89-1.59,68.68-21.69,138.83-37.53,208.29-57.35,21.39-6.1,45.89-17.2,66.48-22.07,2.54-.6,19.31-2.7,20.07-2.05Z" />
      <path d="M2331.55,2280.07c-3.58-3.11,12.79-7.57,14.31-7.81,5.43-.85,10.94.37,15.88-.51,42.8-7.66,84.24-25.2,127.95-16.18,6.32,1.3,25.74,6.94,29.64,11.35,2.73,3.09,3.77,9.46-.02,9.82-1.34.13-20.24-7.73-25.42-8.98-42.46-10.25-67.48,4.89-107.62,10.48-18.17,2.53-36.54,2.73-54.73,1.82Z" />
      <path d="M2402.05,2296.46c-3.17-3.18,8.94-6.48,10.42-6.79,19.3-4.11,41.29-4.53,60.98-4.59,8.66-.03,17.64-2.27,27.08.66,6.69,2.08,7.2,8.24-.82,9.18-9.49,1.11-21.36-.65-31.3-.15s-61.5,6.56-66.35,1.69Z" />
    </g>

    <path d="M6350.35,666.4c-1.33-67.4-36.17-156.44,10.12-215.87l-2818.63,73.84c-17.12,13.01.18,19.12,15.59,21.08,57.09,7.25,106.77-9.61,158.11-11.01,679.49-18.6,1358.93-34.29,2037.47-52.78,188.26-5.13,377.19-.25,565.28-10.18l-.16,1573.05c-44.06-10.38-97.25-17.17-142.46-21.14-860.17-75.51-1721.11-150.86-2581.1-221.63l26.8,20.6,1071.2,95.53c1.63,7.93-10.19,12.28-10.65,15.72-6.76,50.07,4.9,111.99,0,163.63l-.5-.05c1.23,10.72,1.63,21.43-.38,31.57l.94.1c3.59,3.46-2.61,69.12-.12,84.46l-227.44-30.45c-72.81,46.43-197.25,22.53-268.61,56.96-29.07,14.02,17.61,25.33,29.22,33.98l1340.12,168.83c112.35-37.5,233.12-56.66,351.36-71.02l-10.38-15.9-717.47-90.08,4.87-84.09-5.44-221.52,1134.18,94.38c11.95,2.17-1.72,62.49,37.57,53.35-7.46-480,9.98-961.32.49-1441.34ZM4703.05,1917.88l441.91,43.63c4.7,113.37-6.52,223.28,1.46,336.34l-443.43-53.08c7.97-106.9,23.6-221.56.06-326.89ZM5720.34,2352.03l91.12,19.57c-90.33,10.51-183.11,20.42-268.58,51.5l-1296.86-159.17-18.04-18.8c84.61,8.35,176.58-29.77,258.36-32.3,26.28-.81,185.02,14.25,193.66,24.3,5.69,6.62-3.9,26,8.11,29.62,64.65-8.99,485.21,72.07,500.57,52.07.72-.93-12.03-20.01-10.64-20.93l542.3,54.13Z" />
    <path d="M5199.71,2152.44v30.78l2797.02,294.1-23.12,23.77-2610.6,702.49L142.37,2229.19l2878.65-275.74,1625.07,171.61c.51-10.5,1.03-21.01,1.39-31.51l-1543.9-165.12c-977.05,113.49-1976.42,151.03-2955.69,274.5-16.94,2.14-89.86,12.01-89.86,26.26v480.32h21.11v-464.49l5288.99,997.59v797.01h21.11v-802.29c0-2.17,35.07-7.2,42.15-10.69l-20.98-20.87,2697.83-717.54c21.26-2.57,13.21-.1,15.25,15.17,10.6,79.43-30.62,535.4-10.54,554.52l31.63-.06v-575.33l-2944.87-330.11Z" />
    <path d="M4893.07,555.99v1319.56l-1198.11-95.1c-37.22-14.75-104.04,5.99-100.89-46.91,19.29-352.23-23.9-728.33.07-1077.66,1.58-23,7.27-44.88,12.11-67.07l1286.82-32.82ZM3615.69,608.77v1140.1l1245.76,95.06c-1.39-419.03,18.09-836.68,10.56-1256.33l-1256.32,21.17Z" />
    <path d="M4935.3,1326.61l1314.35,52.76c8.34.64,16.66,2.58,21.77,9.9,24.64,35.39-4.93,511.25-5.9,591.89l-1330.22-105.62v-548.94ZM6244.35,1400.51l-1287.94-52.78v506.71l1287.94,105.56v-559.49Z" />
    <path d="M6281.97,534.21c-19.84-28.38-153.44.11-190.26,1.11-302.85,8.17-606.05.28-908.76,9.69-79.07,2.46-165.16,20.58-247.75,11.08,8.06,10.64.73,18.41.1,26.3-18.48,228.95,13.77,481.2,0,712.56,142.22,4.67,285.77,4.17,427.99,10.12,217.28,9.09,436.4,23.51,653.65,32.54,86.78,3.61,180.57-17.07,259.02,20.62-6.78-274.6,24.63-550.1,6-824.02ZM6254.9,1310.78l-1298.49-36.95v-643.95l-.06-62.09,1298.58-22.31-.03,765.29Z" />
    <path d="M3562.9,555.99v1250.94c0,5.03-12.99,32.47-21.11,26.39V555.99h21.11Z" />

    <image transform="translate(300 1550) scale(.4)" href={leafVase} />
    <linearGradient id="linear-gradient" x1="621.69" y1="2065.16" x2="797.08" y2="2065.16" gradientUnits="userSpaceOnUse">
      <stop offset=".6" stop-color="#fff" stop-opacity="0"/>
      <stop offset="1" stop-color="#000"/>
    </linearGradient>
    <image transform="translate(5980 2270) scale(.18)" href={flowerMug} />
    <image transform="translate(3350 2285) scale(0.945)" href={keyboard} />
    <image transform="translate(2000 2300) scale(0.9)" href={greenVase} />
  </svg>
);

export default DeskComponent;

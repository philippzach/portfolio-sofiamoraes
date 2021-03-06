import React from 'react';
import styles from './Explanation.module.scss';
import Link from 'gatsby-link';

const Explanation = () => (
  <div className={styles.header}>
    <div className={styles.how}>
      <h2 className={styles.doesit}>How does it work?</h2>
      <div className="mw9 center ph3-ns tl" style={{ marginBottom: '5rem' }}>
        <div className="cf ph2-ns">
          <div className="fl w-100 w-third-ns pa2">
            <div>
              <div className={styles.textcontainer}>
                <svg
                  version="1.0"
                  className={styles.icon}
                  x="0px"
                  y="0px"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 500 500"
                >
                  <path
                    className={styles.st0}
                    d="M249.392,43.009c95.239,0.576,178.12,67.923,197.033,160.913c21.306,104.756-42.444,207.403-146.015,234.05
	c-55.311,14.232-107.626,5.851-156.384-24.003c-2.567-1.571-4.572-1.952-7.499-0.71c-23.872,10.144-47.826,20.094-71.772,30.06
	c-7.767,3.232-14.2,0.281-15.081-7.154c-0.27-2.283,0.601-4.881,1.519-7.098c9.914-23.967,19.903-47.905,29.997-71.797
	c1.036-2.453,0.885-4.233-0.543-6.45c-15.563-24.145-25.628-50.45-29.285-78.925c-7.589-59.094,7.753-111.807,46.12-157.352
	c29.499-35.02,67.19-57.047,112.015-66.304C222.596,45.533,236.083,44.7,249.392,43.009z M77.228,416.974
	c1.708-0.682,2.635-1.028,3.545-1.417c17.979-7.68,35.986-15.293,53.911-23.097c4.649-2.023,8.845-1.609,13.007,0.941
	c2.113,1.295,4.156,2.701,6.266,4c44.356,27.323,91.968,35.398,142.343,22.016c96.617-25.67,153.609-122.948,129.438-219.691
	C401.517,102.78,302.41,43.774,205.027,68.741c-47.734,12.238-84.538,39.953-110.168,81.935
	c-22.605,37.027-30.226,77.456-24.067,120.293c3.88,26.989,13.853,51.8,29.431,74.242c3.14,4.523,3.562,8.801,1.337,13.903
	c-6.458,14.812-12.588,29.769-18.842,44.671C80.979,407.932,79.261,412.087,77.228,416.974z"
                  />
                  <path
                    className={styles.st0}
                    d="M240.361,273.479c0-6.791-0.035-13.581,0.009-20.371c0.047-7.135,3.551-10.776,10.659-11.194
	c24.126-1.417,41.498-20.032,40.3-43.935c-0.813-16.256-9.259-28.17-23.825-35.047c-14.62-6.902-28.968-5.43-42.107,4.25
	c-10.754,7.923-16.226,18.764-16.95,32.08c-0.337,6.194-4.583,10.217-10.259,9.938c-5.492-0.271-9.389-5.055-9.054-11.111
	c1.722-31.103,23.393-54.539,54.108-58.517c32.733-4.237,63.025,18.377,68.412,51.071c5.257,31.903-16.134,62.717-48.208,69.161
	c-2.97,0.597-3.819,1.624-3.78,4.517c0.137,10.183,0.138,20.372-0.028,30.555c-0.08,5.021-3.225,8.747-7.579,9.718
	c-4.167,0.929-8.762-1.263-10.66-5.438c-0.723-1.592-0.937-3.521-0.964-5.303c-0.107-6.789-0.043-13.581-0.043-20.372
	C240.381,273.479,240.371,273.479,240.361,273.479z"
                  />
                  <path
                    className={styles.st0}
                    d="M249.185,350.196c-5.803-0.011-10.414-4.585-10.492-10.406c-0.081-5.996,4.604-10.77,10.55-10.746
	c5.719,0.02,10.472,4.696,10.586,10.417C259.945,345.285,255.065,350.207,249.185,350.196z"
                  />
                </svg>
                <h3 className={styles.statement}>Tell me what you want</h3>
              </div>
              <div className={styles.textcontainer2}>
                <p>
                  As soon as you make a choice, you can fill out this{' '}
                  <Link to="/creativebrief" className={styles.link}>
                    Creative Brief
                  </Link>{' '}
                  and wait until I get in touch with you (max 24h)
                </p>
              </div>
            </div>
          </div>
          <div className="fl w-100 w-third-ns pa2">
            <div>
              <div className={styles.textcontainer}>
                <svg
                  version="1.0"
                  className={styles.icon}
                  x="0px"
                  y="0px"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 500 500"
                >
                  <g>
                    <path
                      className={styles.st1}
                      d="M228.567,253.608c0.03,11.851,9.516,21.276,21.42,21.286c0.004,0,0.009,0,0.014,0v-42.717
		C238.038,232.188,228.535,241.658,228.567,253.608z"
                    />
                    <path
                      className={styles.st1}
                      d="M169.486,181.578c0.098,0.024-0.178-0.146-0.383-0.084c-0.744,0.224-1.478,0.491-2.191,0.8
		c-32.4,13.948-59.519,34.84-81.609,62.28c-5.505,6.841-5.52,11.058-0.051,17.853c22.178,27.543,49.377,48.533,81.954,62.443
		c0.793,0.338,1.638,0.559,2.445,0.83C133.224,277.494,133.262,229.576,169.486,181.578z"
                    />
                    <path
                      className={styles.st1}
                      d="M161.759,253.608c0.044,48.534,39.816,88.241,88.242,88.124v-47.57c-0.052,0-0.101,0.004-0.153,0.004
		c-22.426-0.211-40.579-18.488-40.508-40.793c0.067-22.2,18.569-40.59,40.662-40.475V165.33c-0.024,0-0.049-0.001-0.074-0.001
		C201.176,165.494,161.715,205.006,161.759,253.608z"
                    />
                    <path
                      d="M161.759,253.608c-0.044-48.603,39.417-88.115,88.168-88.28c0.024,0,0.049,0.001,0.074,0.001v-19.102
		c-17.48,0.182-35.414,2.317-53.796,6.452c-51.44,11.571-93.335,39.365-126.17,80.569c-3.373,4.231-5.864,9.656-7.199,14.924
		c-2.744,10.823,1.919,19.894,8.818,27.957c48.298,56.455,107.8,84.988,178.348,84.43v-18.826
		C201.576,341.85,161.803,302.143,161.759,253.608z M167.206,324.869c-32.577-13.91-59.775-34.9-81.954-62.443
		c-5.469-6.795-5.454-11.012,0.051-17.853c22.09-27.439,49.208-48.332,81.609-62.28c0.713-0.309,1.448-0.577,2.191-0.8
		c0.205-0.061,0.481,0.109,0.383,0.084c-36.224,47.998-36.262,95.917,0.165,144.122
		C168.843,325.428,167.999,325.207,167.206,324.869z"
                    />
                    <path
                      d="M240.522,98.406c0.089,5.485,4.052,9.396,9.355,9.458c5.469,0.064,9.576-3.908,9.615-9.587
		c0.078-11.853,0.073-23.707,0.002-35.56c-0.034-5.667-4.182-9.767-9.551-9.716c-5.396,0.051-9.363,4.129-9.43,9.847
		c-0.069,5.861-0.015,11.724-0.015,17.585C240.499,86.423,240.424,92.416,240.522,98.406z"
                    />
                    <path
                      d="M259.518,409.42c0-0.131,0.002-0.26-0.001-0.391c-0.134-5.779-3.951-9.777-9.396-9.832
		c-5.469-0.055-9.562,3.918-9.598,9.607c-0.077,11.852-0.074,23.705-0.001,35.557c0.035,5.654,4.208,9.768,9.569,9.699
		c5.396-0.064,9.344-4.137,9.412-9.863c0.068-5.859,0.015-11.723,0.016-17.584C259.518,420.883,259.518,415.15,259.518,409.42z"
                    />
                    <path
                      d="M125.288,142.348c4.431,4.363,10.442,4.614,14.235,0.713c4.121-4.237,3.962-9.444-0.655-14.191
		c-5.539-5.691-11.118-11.351-16.891-16.802c-1.696-1.601-4.104-2.449-6.186-3.639c-4.325,0.344-7.62,2.308-9.461,6.008
		c-1.891,3.807-1.339,7.443,2.13,11.04C113.975,131.192,119.63,136.775,125.288,142.348z"
                    />
                    <path
                      d="M391.952,125.009c2.734-2.987,3.753-6.508,1.816-10.428c-1.775-3.593-4.622-5.531-9.903-5.61
		c-0.932,0.407-3.346,0.817-4.82,2.218c-6.515,6.178-12.947,12.468-19.035,19.063c-0.766,0.831-1.344,1.711-1.758,2.614h26
		C386.863,130.288,389.478,127.712,391.952,125.009z"
                    />
                    <path
                      d="M127.716,362.83c-7.187,6.578-14.012,13.572-20.669,20.691c-2.485,2.656-2.36,6.191-0.523,9.5
		c1.887,3.391,4.76,5.031,9.894,5.068c1.007-0.502,3.12-1.396,5.061-2.574c1.082-0.658,1.885-1.781,2.804-2.703
		c5.146-5.166,10.434-10.201,15.388-15.541c3.847-4.15,3.676-9.039,0.083-13.018C136.765,360.945,131.042,359.787,127.716,362.83z"
                    />
                    <path
                      d="M361.034,378.076c5.522,5.705,11.087,11.385,16.896,16.797c1.873,1.744,4.57,2.607,6.893,3.875
		c4.588-0.74,7.462-2.908,9.143-6.672c1.776-3.98,0.484-7.475-2.307-10.371c-4.236-4.389-8.553-8.701-12.893-12.992h-21.013
		C357.039,371.771,358.105,375.049,361.034,378.076z"
                    />
                    <path
                      d="M249.987,274.895c-11.905-0.01-21.39-9.436-21.42-21.286c-0.032-11.951,9.471-21.42,21.434-21.431v-19.279
		c-22.092-0.115-40.594,18.275-40.662,40.475c-0.07,22.305,18.083,40.582,40.508,40.793c0.052,0,0.101-0.004,0.153-0.004v-19.268
		C249.996,274.895,249.992,274.895,249.987,274.895z"
                    />
                    <path
                      d="M360.645,143.227c3.457,3.376,9.264,3.48,13.109,0.037c2.615-2.342,5.013-4.928,7.494-7.418
		c0.996-0.998,2-1.989,3.004-2.979h-26C356.641,136.377,357.611,140.264,360.645,143.227z"
                    />
                    <path
                      d="M360.598,363.881c-1.501,1.486-2.445,3.127-2.845,4.832h21.013c-1.402-1.387-2.797-2.779-4.203-4.16
		C370.303,360.375,364.355,360.158,360.598,363.881z"
                    />
                    <path
                      className={styles.st1}
                      d="M271.436,253.608c-0.031,11.851-9.516,21.276-21.421,21.286c-0.004,0-0.009,0-0.014,0v-42.717
		C261.964,232.188,271.467,241.658,271.436,253.608z"
                    />
                    <path
                      className={styles.st1}
                      d="M330.516,181.578c-0.098,0.024,0.178-0.146,0.383-0.084c0.744,0.224,1.479,0.491,2.191,0.8
		c32.4,13.948,59.519,34.84,81.609,62.28c5.504,6.841,5.52,11.058,0.051,17.853c-22.178,27.543-49.377,48.533-81.953,62.443
		c-0.793,0.338-1.639,0.559-2.446,0.83C366.777,277.494,366.739,229.576,330.516,181.578z"
                    />
                    <path
                      className={styles.st1}
                      d="M338.242,253.608c-0.044,48.534-39.816,88.241-88.241,88.124v-47.57c0.052,0,0.101,0.004,0.153,0.004
		c22.426-0.211,40.579-18.488,40.508-40.793c-0.066-22.2-18.568-40.59-40.661-40.475V165.33c0.024,0,0.049-0.001,0.073-0.001
		C298.825,165.494,338.287,205.006,338.242,253.608z"
                    />
                    <path
                      d="M250.001,341.732v18.826c70.548,0.559,130.05-27.975,178.347-84.43c6.899-8.062,11.562-17.134,8.818-27.957
		c-1.334-5.268-3.826-10.692-7.199-14.924c-32.834-41.204-74.729-68.998-126.17-80.569c-18.383-4.135-36.316-6.27-53.796-6.452
		v19.102c0.024,0,0.049-0.001,0.073-0.001c48.751,0.166,88.213,39.678,88.168,88.28C338.198,302.143,298.426,341.85,250.001,341.732
		z M330.351,325.699c36.427-48.205,36.389-96.124,0.165-144.122c-0.098,0.024,0.178-0.146,0.383-0.084
		c0.744,0.224,1.479,0.491,2.191,0.8c32.4,13.948,59.519,34.84,81.609,62.28c5.504,6.841,5.52,11.058,0.051,17.853
		c-22.178,27.543-49.377,48.533-81.953,62.443C332.004,325.207,331.158,325.428,330.351,325.699z"
                    />
                    <path
                      d="M250.015,274.895c11.905-0.01,21.39-9.436,21.421-21.286c0.031-11.951-9.472-21.42-21.435-21.431v-19.279
		c22.093-0.115,40.595,18.275,40.661,40.475c0.07,22.305-18.082,40.582-40.508,40.793c-0.052,0-0.101-0.004-0.153-0.004v-19.268
		C250.005,274.895,250.01,274.895,250.015,274.895z"
                    />
                  </g>
                </svg>
                <h3 className={styles.statement}>Get 3 Revisions</h3>
              </div>
              <div className={styles.textcontainer2}>
                <p>You will get 3 Revisions before finalizing the design with no extra charge</p>
              </div>
            </div>
          </div>
          <div className="fl w-100 w-third-ns pa2">
            <div>
              <div className={styles.textcontainer}>
                <svg
                  version="1.0"
                  className={styles.icon}
                  x="0px"
                  y="0px"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 500 500"
                >
                  <path
                    className={styles.st2}
                    d="M249.369,447.434c-17.071-17.151-33.774-33.979-50.531-50.757c-35.431-35.467-70.848-70.948-106.36-106.331
	c-19.865-19.793-33.135-42.97-36.374-71.116c-4.985-43.34,9.1-79.734,42.822-107.209c43.527-35.465,102.57-35.456,146.942-1.281
	c3.111,2.397,4.925,2.083,7.857-0.17c65.325-50.29,160.106-21.476,184.865,57.02c14.158,44.884,4.295,85.785-28.725,119.48
	c-52.228,53.292-105.383,105.674-158.153,158.433C251.184,446.032,250.559,446.459,249.369,447.434z M248.551,140.413
	c-1.523-1.659-3.485-4.002-5.659-6.13c-37.597-36.771-96.949-38.715-134.733-4.44c-43.513,39.47-44.923,103.049-3.13,144.927
	c46.732,46.827,93.531,93.586,140.309,140.366c1.335,1.338,2.75,2.599,4.324,4.076c0.907-0.776,1.659-1.331,2.312-1.984
	c47.879-47.867,95.891-95.6,143.557-143.671c23.354-23.554,32.663-52.159,27.859-85.097
	c-9.908-67.907-87.856-105.013-146.651-69.542C266.96,124.817,258.436,132.796,248.551,140.413z"
                  />
                </svg>
                <h3 className={styles.statement}>Pick your Favorite</h3>
              </div>
              <div className={styles.textcontainer2}>
                <p>All final designs will be send via Email, they will be SEO-friendly | Web, Mobile and Print ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Explanation;

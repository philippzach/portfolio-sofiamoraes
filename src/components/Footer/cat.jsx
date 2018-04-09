import React from 'react';
import styles from './cat.scss';

if (typeof window !== `undefined`) {
  const mojs = require('mo-js');
}

class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this._randommiau(),
      countTotal: 0, // this._generateRandomNumber(500,10000),
      isClicked: false,
      cat: 'Mew',
    };
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    const tlDuration = 300;
    const triangleBurst = new mojs.Burst({
      parent: '#clap',
      radius: { 50: 95 },
      count: 10,
      angle: 30,
      children: {
        shape: 'line',
        radius: { 6: 0 },
        scale: 1,
        stroke: 'white',
        strokeWidth: 2,
        angle: 180,
        delay: 30,
        speed: 0.2,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration,
      },
    });
    const circleBurst = new mojs.Burst({
      parent: '#clap',
      radius: { 50: 75 },
      angle: 25,
      duration: tlDuration,
      children: {
        shape: 'polygon',
        fill: 'rgba(149,165,166 ,0.5)',
        delay: 30,
        speed: 0.2,
        radius: { 10: 3 },
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
      },
    });
    const countAnimation = new mojs.Html({
      el: '#clap--count',
      isShowStart: false,
      isShowEnd: true,
      y: { 0: -30 },
      opacity: { 0: 1 },
      duration: tlDuration,
    }).then({
      opacity: { 1: 0 },
      y: -80,
      delay: tlDuration / 2,
    });
    const countTotalAnimation = new mojs.Html({
      el: '#clap--count-total',
      isShowStart: false,
      isShowEnd: true,
      opacity: { 0: 1 },
      delay: 3 * tlDuration / 2,
      duration: tlDuration,
      y: { 0: -3 },
    });
    const scaleButton = new mojs.Html({
      el: '#clap',
      duration: tlDuration,
      scale: { 1.3: 1 },
      easing: mojs.easing.out,
    });
    const clap = document.getElementById('clap');
    clap.style.transform = 'scale(1, 1)';
    this._animationTimeline = new mojs.Timeline();
    this._animationTimeline.add([countAnimation, countTotalAnimation, scaleButton, circleBurst, triangleBurst]);
  }
  _generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  _generateRandomMiau = () => this[Math.floor((Math.random()*this.length))];

  _randommiau() {
    const miaus = [
      'Mew',
      'Miau',
      '喵',
      'Meow',
      'мяу',
      'Meu',
      'ニャー',
      'Myau',
      'Mew',
      'Miau',
      'Miao',
      'Mjau',
      'Miav',
      'Meo',
    ];
    const rmia = miaus[Math.floor(Math.random() * miaus.length)];
    return rmia;
  }

  _handleClick() {
    this._animationTimeline.replay();
    this.setState((prevState, nextState) => ({
        count: this._randommiau(),// Math.min(prevState.count + 1, 200),
        countTotal: prevState.countTotal + 1,
        isClicked: true
      }));
  }

  render() {
    const { count, countTotal, isClicked } = this.state;
    return getAppContent(count, countTotal, isClicked, this._handleClick);
  }
}

function getAppContent(count, countTotal, isClicked, handleClick) {
  return (
    <div className="buttonposition">
      <button id="clap" className="clap" onClick={handleClick}>
        <span>
          {/* <!--  SVG Created by Luis Durazo from the Noun Project  --> */}
          <svg version="1.1" id="Layer_1" width="50px" height="50px" viewBox="0 0 200 200">
            <g>
              <g>
                <g>
                  <path d="M142.771,121.505c1.906,0,1.906-2.957,0-2.957S140.865,121.505,142.771,121.505L142.771,121.505z" />
                </g>
              </g>
              <path
                className="st0"
                d="M59.761,75.504c1.419,8.417-4.881,16.41-10.417,16.41c-5.537,0-13.572-7.977-11.396-16.231
		c1.537-5.828,4.542-13.217,7.505-15.643c0.843-0.689,1.876-0.764,2.876-0.354c2.564,1.049,4.312,2.759,5.897,4.648
		C56.778,67.376,58.883,70.306,59.761,75.504z"
              />
              <path
                className="st0"
                d="M156.448,81.576c-0.603,8.698-9.398,13.551-14.967,11.74c-5.569-1.812-7.896-10.004-5.197-18.299
		c2.698-8.294,10.638-14.738,16.206-12.928C158.059,63.901,157.062,72.729,156.448,81.576z"
              />
              <g>
                <g>
                  <path
                    className="st2"
                    d="M65.793,125.643c7.528,0,7.528-11.674,0-11.674S58.265,125.643,65.793,125.643L65.793,125.643z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    className="st2"
                    d="M131.979,122.277c7.527,0,7.527-11.674,0-11.674S124.451,122.277,131.979,122.277L131.979,122.277z"
                  />
                </g>
              </g>
              <circle className="st2" cx="65.793" cy="119.787" r="5.926" />
              <circle className="st2" cx="131.978" cy="116.44" r="5.927" />
              <circle className="st2" cx="142.771" cy="120.027" r="1.499" />
              <path className="st6" d="M0.293,91.283" />
              <path
                className="st7"
                d="M173.238,112.72c-4.184-6.128-7.916-11.779-10.236-19.026c-3.822-11.931-2.746-19.154-4.321-28.769
		c-2.218-13.519-15.675-4.18-22.806,2.229c-2.08,1.867-12.009,10.566-13.657,10.912c-3.483,0.73-3.866-1.875-7.933-5.185
		c-7.625-6.211-16.854-7.021-26.967-3.613c-7.128,2.402-11.095,3.862-15.567,6.104c-3.493,1.752-4.4,1.599-5.211,1.253
		c-0.943-0.402-1.608-1.366-3.71-4.604c-2.607-4.014-12.04-17.265-17.329-16.622C36.226,58.695,30.614,97.23,30.614,97.23
		s-5.425,22.973-6.459,27.973c0.69,2.778,6.993,27.599,32.723,42.118c10.58,5.971,25.227,11.874,38.252,14.052
		c12.5,2.09,20.547,2.764,26.266,1.019c10.68-3.258,21.338-8.825,29.512-15.712C157.723,160.482,175.54,146.877,173.238,112.72z
		 M148.106,164.759c-7.704,6.42-18.563,12.806-29.348,15.047c-10.843,2.257-44.258-4.935-66.258-20.011
		c-17.876-12.251-22.444-28.024-25.223-35.103c0.965-4.669,6.485-24.953,6.485-24.953s4.4-37.278,13.149-40.34
		c4.992-0.59,13.549,13.32,16.019,17.077c3.703,5.636,3.45,7.336,10.574,3.811c4.218-2.087,7.661-4.529,14.385-6.76
		c9.541-3.165,18.253-2.389,25.466,3.431c3.843,3.103,5.163,5.886,8.451,5.211c1.556-0.319,10.517-8.446,12.474-10.188
		c6.721-5.978,20.084-16.208,22.204-3.567c0.7,4.178,1.164,15.281,3.793,24.28c3.026,10.364,8.326,18.605,10.341,21.264
		C172.859,145.885,154.527,158.98,148.106,164.759z"
              />
              <path
                className="st1"
                d="M125.928,137.227c-0.057-0.237-0.193-0.169-0.249,0c-2.712,8.372-10.06,12.535-17.824,5.364
		c-2.897,2.181-9.88,11.459-15.701,10.04c-0.892-0.218-2.279-0.429-3.578-2.807c-0.873-1.598-1.584-6.128-2.016-7.091
		c-0.155-0.346-0.48-0.272-0.48-0.077c0.939,4.734,0.202,8.946,4.91,11.124c9.576,4.431,12.977-4.665,17.177-8.409
		C115.99,152.886,127.361,146.633,125.928,137.227z"
              />
              <polygon className="st2" points="0.296,124.995 0.221,124.876 31.989,129.45 51.16,138.665 25.03,133.173 	" />
              <path
                className="st2"
                d="M49.683,149.951l-14.227-2.659c-9.958,2.91-27.794,2.366-27.794,2.366l27.936,2.693L49.683,149.951z"
              />
              <path
                className="st2"
                d="M179.486,126.05c-10.271,5.036-21.77,5.791-21.77,5.791c5.496,2.178,23.631-1.091,23.631-1.091l9.929-5.627
		L179.486,126.05z"
              />
              <path
                className="st2"
                d="M184.75,109.069c-12.115,8.496-26.808,11.886-26.808,11.886c7.612,1.564,30.304-6.388,30.304-6.388
		l11.531-9.167L184.75,109.069z"
              />

              <ellipse
                transform="matrix(0.9997 0.0264 -0.0264 0.9997 3.6368 -1.1543)"
                className="st5"
                cx="45.509"
                cy="137.074"
                rx="18.577"
                ry="6.405"
              />

              <ellipse
                transform="matrix(0.9948 -0.1016 0.1016 0.9948 -12.5703 16.736)"
                className="st5"
                cx="157.943"
                cy="131.719"
                rx="18.577"
                ry="6.407"
              />
              <g className="st3">
                <path
                  className="st4"
                  d="M124.455,36.541c0.031-0.884,0.759-0.758,1.387-0.764c3.416-0.034,6.588-0.89,9.47-2.76
			c3.927-2.55,6.083-6.315,7.31-10.698c0.463-1.653,0.782-3.348,1.18-5.021c0.033-0.136,0.17-0.247,0.496-0.699
			c0.082,1.052,0.158,1.756,0.188,2.462c0.331,8.081,5.531,13.622,12.193,15.578c1.771,0.521,3.631,0.735,5.439,1.14
			c0.428,0.096,0.811,0.394,1.215,0.6c-0.439,0.164-0.875,0.465-1.316,0.473c-3.93,0.067-7.503,1.151-10.645,3.561
			c-2.899,2.222-4.725,5.197-5.773,8.617c-0.662,2.156-0.986,4.417-1.541,7.011c-0.318-1.221-0.699-2.12-0.77-3.042
			c-0.559-7.377-5.312-12.924-11.985-14.917C129.086,37.42,126.785,37.055,124.455,36.541z"
                />
                <path
                  className="st4"
                  d="M191.479,83.926c0.001,2.584-2.006,4.583-4.61,4.593c-2.475,0.01-4.562-2.062-4.573-4.54
			c-0.012-2.588,1.974-4.521,4.652-4.527C189.549,79.444,191.477,81.349,191.479,83.926z"
                />
                <path
                  className="st4"
                  d="M67.274,23.03c-0.033,2.587-2.08,4.558-4.691,4.521c-2.342-0.033-4.561-2.343-4.511-4.696
			c0.05-2.359,2.296-4.51,4.68-4.479C65.393,18.409,67.309,20.383,67.274,23.03z"
                />
                <path
                  className="st4"
                  d="M73.452,55.482c0.015-0.423,0.363-0.362,0.665-0.365c1.634-0.016,3.153-0.426,4.533-1.32
			c1.88-1.221,2.913-3.024,3.5-5.122c0.222-0.792,0.374-1.603,0.564-2.403c0.017-0.065,0.082-0.119,0.237-0.336
			c0.04,0.504,0.076,0.842,0.09,1.18c0.159,3.868,2.648,6.521,5.838,7.457c0.848,0.25,1.738,0.353,2.604,0.546
			c0.206,0.046,0.389,0.188,0.582,0.288c-0.21,0.078-0.419,0.222-0.629,0.225c-1.882,0.033-3.593,0.553-5.097,1.705
			c-1.388,1.064-2.263,2.488-2.765,4.126c-0.315,1.033-0.47,2.115-0.737,3.357c-0.152-0.585-0.334-1.017-0.368-1.457
			c-0.268-3.532-2.543-6.188-5.738-7.142C75.669,55.904,74.567,55.73,73.452,55.482z"
                />
              </g>
              <circle className="st2" cx="56.197" cy="125.713" r="1.499" />
            </g>
          </svg>
        </span>
        <span id="clap--count" className="clap--count">
          {count}
        </span>

        <span id="clap--count-total" className="clap--count-total">
          { /* }+{countTotal}{ */ }
        </span>
      </button>
    </div>
  );
}

export default Cat;

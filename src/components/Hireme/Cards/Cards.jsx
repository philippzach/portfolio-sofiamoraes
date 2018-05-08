import React from 'react';
import styles from './Cards.module.scss';
import SingleCard from '../SingleCard/SingleCard';
import Blitz from './blitz.svg';
import Printer from './printer.svg';
import Illu from './illustration.svg';
import About from '../../Aboutme/aboutsm.jpg';

let stripeHandler;

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.openStripeCheckout = this.openStripeCheckout.bind(this);
  }

  componentDidMount() {
   stripeHandler = StripeCheckout.configure({
      key: 'pk_test_llM7Ft0pbTy2y8BROIJ8RuWy',
      locale: 'auto',
    });
  }

  openStripeCheckout(number, event) {
    event.preventDefault();

    const totals = number;

    stripeHandler.open({
      name: 'Sofia Moraes',
      image: About,
      description: 'Professional Designer',
      // billingAddress: true,
      amount: totals,
      token: (token, args) => {
        fetch('https://exec.clay.run/philippzach/create-stripe-payment', {
          method: 'POST',
          body: JSON.stringify({
            token,
            args,
            charge: {
              amount: totals, // totals.price,
              currency: 'USD',
            },
          }),
        })
          .then(response => response.json())
          .then(json => {
            console.log(json);
          })
          .catch(error => {
            console.log(`Fetch failed:${error}`);
          });
      },
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div onClick={e => this.openStripeCheckout(6000, e)}>
          <SingleCard image={Blitz} heading="2h Time" heading2="Random text to display" amount="6000" />
        </div>
        <div onClick={e => this.openStripeCheckout(15000, e)}>
          <SingleCard image={Printer} heading="3h Time" heading2="Random text to display" amount="150000" />
        </div>
        <div onClick={e => this.openStripeCheckout(30000, e)}>
          <SingleCard image={Illu} heading="6h Time" heading2="Random text to display" amount="300000" />
        </div>
      </div>
    );
  }
}

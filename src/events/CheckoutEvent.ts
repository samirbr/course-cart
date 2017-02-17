export default class CheckoutEvent extends Event {
  constructor(public data: any) {
    super('checkout');
  }
}
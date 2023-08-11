class Counter {
  constructor() {
    this.showCounter = 0;
    this.commentCounter = 0;
  }

  countShow() {
    this.showCounter += 1;
  }

  countComment() {
    this.commentCounter += 1;
  }

  getShowCount() {
    return this.showCounter;
  }

  getCommentCount() {
    return this.commentCounter;
  }

  clearCommentCounter() {
    this.commentCounter = 0;
  }
}

export default Counter;
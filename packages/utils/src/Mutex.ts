export class Mutex {
  mutex = Promise.resolve();

  lock(): PromiseLike<() => void> {
    let begin: (unlock: () => void) => void = _ => {};

    this.mutex = this.mutex.then(() => {
      return new Promise(begin);
    });

    return new Promise(res => {
      begin = res;
    });
  }

  async dispatch(fn: (() => any) | (() => PromiseLike<any>)): Promise<any> {
    const unlock = await this.lock();
    try {
      return await Promise.resolve(fn());
    } finally {
      unlock();
    }
  }
}

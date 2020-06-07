export class DeviceUtils {
  public static IsTouchDevice(): boolean {

    const prefixes: Array<string> = ' -webkit- -moz- -o- -ms- '.split(' ');

    // tslint:disable-next-line:no-shadowed-variable
    const mq: any = query => window.matchMedia(query).matches;

    // @ts-ignore
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
  }
}

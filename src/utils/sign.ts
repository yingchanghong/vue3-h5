export default class Canvas {
  props: string;
  dom: HTMLCanvasElement;
  pen: CanvasRenderingContext2D;
  startY: number;
  startX: number;
  endX: number;
  endY: number;
  flag: boolean;
  constructor(props: string) {
    this.props = props;
    this.dom = document.createElement('canvas');
    (document.querySelector(`${props}`) as Element).appendChild(this.dom);
    this.dom.width = document.documentElement.clientWidth;
    this.dom.height = document.documentElement.clientHeight;
    this.dom.style.background = '#f4f4f4';
    this.pen = <CanvasRenderingContext2D>this.dom.getContext('2d');
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
    this.flag = false;
    this.init();
    this.dom.addEventListener('touchstart', e => {
      e.preventDefault();
      this.startX = e.touches[0].pageX - this.dom.offsetLeft;
      this.startY = e.touches[0].pageY - this.dom.offsetTop;
      this.pen && this.pen.beginPath();
      this.pen && this.pen.moveTo(this.startX, this.startY);
    });
    this.dom.addEventListener('touchmove', e => {
      this.flag = true;
      e.preventDefault();
      this.endX = e.touches[0].pageX - this.dom.offsetLeft;
      this.endY = e.touches[0].pageY - this.dom.offsetTop;
      this.pen && this.pen.lineTo(this.endX, this.endY);
      this.pen && this.pen.stroke();
    });
    this.dom.addEventListener('touchend', e => {
      e.preventDefault();
      this.pen && this.pen.closePath();
    });
  }
  init(): void {
    (this.pen as CanvasRenderingContext2D).strokeStyle = '#333333';
    (this.pen as CanvasRenderingContext2D).lineWidth = 3;
    (this.pen as CanvasRenderingContext2D).lineCap = 'round';
    (this.pen as CanvasRenderingContext2D).lineJoin = 'round';
    (this.pen as CanvasRenderingContext2D).shadowBlur = 1;
    (this.pen as CanvasRenderingContext2D).shadowColor = '#333333';
  }
  submit(): Promise<unknown> {
    return new Promise(resolve => {
      this.dom.toBlob(blob => {
        resolve(
          new window.File([<BlobPart>blob], `${+new Date()}.png`, {
            type: 'image/png',
          })
        );
      });
    });
  }
  pre(): string {
    return this.dom.toDataURL();
  }
  clear(): void {
    this.flag = false;
    this.pen &&
      this.pen.clearRect(
        0,
        0,
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      );
  }
}

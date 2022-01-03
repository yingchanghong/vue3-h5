import { ref, onMounted } from 'vue';
export default {
  setup() {
    let canvas = ref(null);
    const startX = ref(0);
    const startY = ref(0);
    const endX = ref(0);
    const endY = ref(0);
    const width = ref(window.innerWidth);
    const height = ref(500);
    let ctx = ref(null);
    const clear = () => {
      ctx.value.clearRect(0, 0, width.value, height.value);
    };
    const submit = () => {
      const img = canvas.value.toDataURL('image/png');
      const arr = img.split(',');
      const mine = arr[0].match(/:(.*?);/)[1];
      const bstr = window.atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) u8arr[n] = bstr.charCodeAt(n);
      const file = new File([u8arr], `${+new Date()}.png`, { type: mine });
    };
    onMounted(() => {
      canvas.value = document.getElementById('canvas');
      ctx.value = canvas.value.getContext('2d');
      ctx.value.strokeStyle = '#333333';
      ctx.value.lineWidth = 3;
      ctx.value.lineCap = 'round';
      ctx.value.lineJoin = 'round'; // 线条交汇时为原型边角
      ctx.value.shadowBlur = 1;
      ctx.value.shadowColor = '#333333';
      canvas.value.addEventListener('touchstart', e => {
        e.preventDefault();
        const { clientX, clientY } = e.touches[0];
        const { offsetLeft, offsetTop } = canvas.value;
        startX.value = parseInt(clientX);
        startY.value = parseInt(clientY);
        ctx.value.beginPath();
        ctx.value.moveTo(startX.value - offsetLeft, startY.value - offsetTop);
        ctx.value.stroke();
      });
      canvas.value.addEventListener('touchmove', e => {
        e.preventDefault();
        const { clientX, clientY } = e.touches[0];
        const { offsetLeft, offsetTop } = canvas.value;
        ctx.value.lineTo(
          parseInt(clientX) - offsetLeft,
          parseInt(clientY) - offsetTop
        );
        ctx.value.stroke();
      });
      canvas.value.addEventListener('touchend', e => {
        e.preventDefault();
        ctx.value.closePath();
      });
    });
    return { clear, submit, width, height };
  },
};

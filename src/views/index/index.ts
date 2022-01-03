import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const name: Ref<string> = ref('lisi');
    const changeName = () => {
      name.value = 'wangwu';
    };
    const router = useRouter();
    const toSign = () => {
      console.log(router);
      router.push('/sign');
    };
    return { name, changeName, toSign };
  },
};

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const app = createApp(App);


app.use(router);
app.use(ElementPlus);

app.mount('#app');
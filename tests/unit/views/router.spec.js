import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/index'; // Importa tus rutas
import { createStore } from 'vuex'; // Si estás usando Vuex

import HomeView from '@/views/HomeView.vue';
import DestinosView from '@/views/DestinosView.vue';
import ContactoView from '@/views/ContactoView.vue';
import Error404 from '@/views/Error404.vue';
import InicioView from '@/views/InicioView.vue';

describe('Router Test', () => {
  let router;

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes,
    });
  });

  it('should navigate to InicioView', async () => {
    const wrapper = mount(InicioView, {
      global: {
        plugins: [router],
      },
    });

    router.push('/');
    await router.isReady();

    expect(wrapper.html()).toContain('Inicio');
  });

  it('should navigate to HomeView', async () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
      },
    });

    router.push('/home');
    await router.isReady();

    expect(wrapper.html()).toContain('Home');
  });

  it('should navigate to DestinosView', async () => {
    const wrapper = mount(DestinosView, {
      global: {
        plugins: [router],
      },
    });

    router.push('/destinos');
    await router.isReady();

    expect(wrapper.html()).toContain('Destino');
  });

  it('should navigate to ContactoView', async () => {
    const wrapper = mount(ContactoView, {
      global: {
        plugins: [router],
      },
    });

    router.push('/contacto');
    await router.isReady();

    expect(wrapper.html()).toContain('Contacto');
  });

  it('should navigate to Error404 on unknown route', async () => {
    const wrapper = mount(Error404, {
      global: {
        plugins: [router],
      },
    });

    router.push('/random-route');
    await router.isReady();

    expect(wrapper.html()).toContain('404');
  });
});

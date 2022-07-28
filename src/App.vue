<template>
  <div class="page-container bg-dark text-white flex flex-col min-h-screen">
    <Header>
      </Header>
      <NavMenu class="mx-auto main main-container flex-grow py-5" />
    <RouterView />
  </div>   
</template>

<script>
import NavMenu from "@/components/parts/NavMenu";
import Header from "@/components/parts/Header";

export default {
  name: "App",
  components: {
    NavMenu,
    Header,
  },
};
</script>

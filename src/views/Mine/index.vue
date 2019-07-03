<template>
  <div id="main">
    <Header title="我的喵喵" />
    <!-- <div id="content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>-->
    <TabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar
  }
};
</script>

<style scoped>
</style>

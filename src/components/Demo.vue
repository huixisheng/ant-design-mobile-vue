<template>
  <div class="hello">
    <Flex style="padding: 1px; margin: 0;">
      <span>12</span>
    </Flex>
  </div>
</template>

<script>
import Flex from './flex';

export default {
  components: {
    Flex
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<i18n>
  {
  "cn": {
  "localTest": "本地i18n文本测试"
  },
  "en": {
  "localTest": "locale i18n text test"
  }
  }
</i18n>
<style scoped>
  * {
    font-size: 36px;
  }
  .contain {
    display: flex;
  }
</style>

<template>
  <div class="contain">
    <div>{{msg}}</div>
    <div>{{$t('aa.bb')}}</div>
    <div>{{time}}</div>
    <div>
      <router-link to="/test">Go to Test</router-link>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'test2',
            time: '00:00:00'
        };
    },
    created() {
        const _this = this;

        setTimeout(() => {
            _this.$ajax.get('/time').then(data => {
                _this.time = data.time;
            });
        }, 1000);
    },
    computed: {
        a() {}
    }
};
</script>


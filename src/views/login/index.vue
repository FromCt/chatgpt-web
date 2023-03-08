<script setup lang="ts">
import { reactive } from "vue";
import { NCard, NForm, NFormItem, NInput, NButton } from "naive-ui";
import { router } from '@/router'

let formData = reactive({
  username: "",
  apiKey: "",
});

const usernameFormItem = {
  label: "用户名",
  required: true,
};

const passwordFormItem = {
  label: "key",
  required: true,
};

const handleSubmit = () => {
    // 处理表单提交逻辑
    console.log(formData)
    if(!formData.apiKey){
      console.log("please input key")
      return
    }

    localStorage.setItem("chatUserInfo",JSON.stringify(formData))
    router.push({ name: 'Chat',params: {...formData } })
};
</script>

<template>
  <div class="loign_content">
    <div class="login">
      <n-card>
        <n-form v-model="formData" label-placement="top">
          <n-form-item v-bind="usernameFormItem">
            <n-input v-model:value="formData.username" placeholder="请输入用户名" />
          </n-form-item>
          <n-form-item v-bind="passwordFormItem">
            <n-input
              v-model:value="formData.apiKey"
              placeholder="请输入key"
            />
          </n-form-item>
          <n-form-item>
            <n-button type="primary" @click="handleSubmit">登录</n-button>
          </n-form-item>
        </n-form>
      </n-card>
    </div>
  </div>
</template>


<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50vh;
}

.loign_content{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<template>
  <div>
      <h2 v-if="!repoName">loading</h2>
      <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return{
            repoName: '',
            repoUrl: ''
        }
    },

    methods () {
        const url = `/api/search/repositories?q=j&sort=stars`

        axios.get(url).then(
            response => {
                const result = response.data
                const {name, html_Url} = result.item[0]
                this.repoName = name
                this.repoUrl = html_Url
            },

            error => {
                alert('请求出错:' + error.message)
            }
        )
    }
}
</script>

<style>

</style>
---
layoutClass: m-nav-layout
outline: [2, 3, 4]

---

<script setup>
import { NAV_DATA } from './data'

console.log(NAV_DATA)
</script>
<style src="./index.scss"></style>


# 我的导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />
